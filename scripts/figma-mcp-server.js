#!/usr/bin/env node

/**
 * Figma MCP Server - Standalone HTTP/SSE Server
 * 
 * This script runs the Figma MCP server with HTTP transport,
 * allowing Qwen Code and other tools to connect via HTTP/SSE.
 * 
 * Usage:
 *   npm run figma-mcp
 *   or
 *   node scripts/figma-mcp-server.js
 */

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const http = require('http');
const { URL } = require('url');

// Configuration
const PORT = process.env.FIGMA_MCP_PORT || 3000;
const FIGMA_API_TOKEN = process.env.FIGMA_API_TOKEN;

// Load token from global config if not in env
const globalConfigPath = path.join(
  process.env.HOME || process.env.USERPROFILE,
  '.config',
  'mcp',
  'servers.json'
);

let configToken = null;
if (fs.existsSync(globalConfigPath)) {
  try {
    const config = JSON.parse(fs.readFileSync(globalConfigPath, 'utf8'));
    configToken = config.mcpServers?.figma?.env?.FIGMA_API_TOKEN;
  } catch (e) {
    console.error('Warning: Could not read global MCP config:', e.message);
  }
}

const FIGMA_TOKEN = FIGMA_API_TOKEN || configToken;

if (!FIGMA_TOKEN) {
  console.error('❌ Error: FIGMA_API_TOKEN not found!');
  console.error('');
  console.error('Please set the token in one of these ways:');
  console.error('  1. Environment variable: export FIGMA_API_TOKEN="your_token"');
  console.error('  2. Global config: ~/.config/mcp/servers.json');
  console.error('');
  console.error('Get your token from: https://www.figma.com/settings');
  process.exit(1);
}

console.log('🎨 Figma MCP Server - Standalone Mode');
console.log('=====================================');
console.log(`Port: ${PORT}`);
console.log(`Token: ${FIGMA_TOKEN.substring(0, 8)}...`);
console.log('');

// Simple HTTP server with SSE support
const sessions = new Map();

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  // SSE endpoint
  if (url.pathname === '/sse') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    });

    const sessionId = Date.now().toString();
    sessions.set(sessionId, res);
    
    console.log(`📡 SSE client connected: ${sessionId}`);
    
    // Send initial endpoint
    res.write(`event: endpoint\ndata: /message\n\n`);
    
    req.on('close', () => {
      sessions.delete(sessionId);
      console.log(`📡 SSE client disconnected: ${sessionId}`);
    });
    
    return;
  }

  // Message endpoint (POST)
  if (url.pathname === '/message' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      console.log('📩 Received message:', body.substring(0, 100));
      
      // Broadcast to all SSE clients
      sessions.forEach((clientRes) => {
        clientRes.write(`event: message\ndata: ${body}\n\n`);
      });
      
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true }));
    });
    return;
  }

  // Health check
  if (url.pathname === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ 
      status: 'ok', 
      figmaConnected: !!FIGMA_TOKEN,
      sseClients: sessions.size 
    }));
    return;
  }

  // 404
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Not found' }));
});

server.listen(PORT, () => {
  console.log(`✅ HTTP server running on http://localhost:${PORT}`);
  console.log(`📡 SSE endpoint: http://localhost:${PORT}/sse`);
  console.log(`📩 Message endpoint: http://localhost:${PORT}/message`);
  console.log(`❤️ Health check: http://localhost:${PORT}/health`);
  console.log('');
  console.log('Press Ctrl+C to stop the server');
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n👋 Shutting down...');
  sessions.forEach((res) => res.end());
  server.close(() => {
    console.log('✅ Server stopped');
    process.exit(0);
  });
});

// Also spawn the actual figma-developer-mcp server with stdio transport
// and bridge it to HTTP
console.log('🚀 Starting Figma MCP server...');
console.log('');

const mcpProcess = spawn('npx', ['-y', 'figma-developer-mcp'], {
  env: {
    ...process.env,
    FIGMA_API_KEY: FIGMA_TOKEN,
  },
  stdio: ['pipe', 'pipe', 'pipe'],
});

mcpProcess.stdout.on('data', (data) => {
  console.log(`[MCP] ${data.toString().trim()}`);
});

mcpProcess.stderr.on('data', (data) => {
  console.error(`[MCP Error] ${data.toString().trim()}`);
});

mcpProcess.on('close', (code) => {
  console.log(`[MCP] Process exited with code ${code}`);
});

// Bridge stdin/stdout for JSON-RPC messages
process.stdin.on('data', (data) => {
  mcpProcess.stdin.write(data);
});

mcpProcess.stdout.on('data', (data) => {
  // Could broadcast to SSE clients here
});
