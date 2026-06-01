#!/usr/bin/env node

/**
 * Figma API Client - Direct REST API Wrapper
 * 
 * Provides command-line access to Figma API without MCP.
 * Can be used as a standalone tool or integrated into workflows.
 * 
 * Usage:
 *   node scripts/figma-api.js getFile --fileKey=YOUR_FILE_KEY
 *   node scripts/figma-api.js getNode --fileKey=KEY --nodeId=1:234
 *   node scripts/figma-api.js getStyles --fileKey=KEY
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Configuration
const FIGMA_API_TOKEN = process.env.FIGMA_API_TOKEN;
const FIGMA_API_HOST = 'api.figma.com';
const FIGMA_API_VERSION = 'v1';

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
    // Ignore errors
  }
}

const TOKEN = FIGMA_API_TOKEN || configToken;

if (!TOKEN) {
  console.error('❌ Error: FIGMA_API_TOKEN not found!');
  console.error('');
  console.error('Set it via:');
  console.error('  export FIGMA_API_TOKEN="your_token"');
  console.error('');
  console.error('Or add to ~/.config/mcp/servers.json');
  process.exit(1);
}

// API helper functions
function apiRequest(endpoint) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: FIGMA_API_HOST,
      port: 443,
      path: `/${FIGMA_API_VERSION}${endpoint}`,
      method: 'GET',
      headers: {
        'X-Figma-Token': TOKEN,
        'Accept': 'application/json',
      },
    };

    const req = https.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            resolve(data);
          }
        } else {
          reject(new Error(`API Error: ${res.statusCode} - ${data.substring(0, 200)}`));
        }
      });
    });

    req.on('error', (e) => {
      reject(new Error(`Request failed: ${e.message}`));
    });

    req.setTimeout(30000, () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });

    req.end();
  });
}

// Command implementations
async function getFile(fileKey) {
  console.log(`📄 Fetching file: ${fileKey}`);
  const data = await apiRequest(`/files/${fileKey}`);
  console.log(JSON.stringify(data, null, 2));
  return data;
}

async function getNode(fileKey, nodeId) {
  console.log(`🔍 Fetching node ${nodeId} from file ${fileKey}`);
  const data = await apiRequest(`/files/${fileKey}/nodes?ids=${encodeURIComponent(nodeId)}`);
  console.log(JSON.stringify(data, null, 2));
  return data;
}

async function getStyles(fileKey) {
  console.log(`🎨 Fetching styles from file: ${fileKey}`);
  const data = await apiRequest(`/files/${fileKey}/styles`);
  console.log(JSON.stringify(data, null, 2));
  return data;
}

async function getStyle(fileKey, styleKey) {
  console.log(`🎨 Fetching style: ${styleKey}`);
  const data = await apiRequest(`/styles/${styleKey}`);
  console.log(JSON.stringify(data, null, 2));
  return data;
}

async function getComments(fileKey) {
  console.log(`💬 Fetching comments from file: ${fileKey}`);
  const data = await apiRequest(`/files/${fileKey}/comments`);
  console.log(JSON.stringify(data, null, 2));
  return data;
}

async function getCommentReactions(fileKey, commentId) {
  console.log(`💬 Fetching reactions for comment ${commentId}`);
  const data = await apiRequest(`/files/${fileKey}/comments/${commentId}/reactions`);
  console.log(JSON.stringify(data, null, 2));
  return data;
}

async function getFileVersions(fileKey) {
  console.log(`📋 Fetching file versions: ${fileKey}`);
  const data = await apiRequest(`/files/${fileKey}/versions`);
  console.log(JSON.stringify(data, null, 2));
  return data;
}

async function getImageFills(fileKey, nodeId) {
  console.log(`🖼️ Fetching image fills for node ${nodeId}`);
  const data = await apiRequest(`/images/${fileKey}?ids=${encodeURIComponent(nodeId)}&scale=1&format=png`);
  console.log(JSON.stringify(data, null, 2));
  return data;
}

async function downloadImage(imageUrl) {
  console.log(`⬇️ Downloading image: ${imageUrl.substring(0, 50)}...`);
  
  // Extract path from URL
  const url = new URL(imageUrl);
  const path = url.pathname;
  
  const data = await apiRequest(path);
  console.log('Image data received');
  return data;
}

// Parse command line arguments
function parseArgs(args) {
  const result = {};
  for (const arg of args) {
    if (arg.startsWith('--')) {
      const [key, value] = arg.slice(2).split('=');
      result[key] = value || true;
    }
  }
  return result;
}

// Main command handler
async function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  const params = parseArgs(args.slice(1));

  if (!command) {
    console.log(`
🎨 Figma API Client

Usage:
  node scripts/figma-api.js <command> [options]

Commands:
  getFile --fileKey=KEY           Get file metadata and structure
  getNode --fileKey=KEY --nodeId=ID  Get specific node data
  getStyles --fileKey=KEY         Get all styles from file
  getStyle --styleKey=KEY         Get specific style
  getComments --fileKey=KEY       Get file comments
  getFileVersions --fileKey=KEY   Get file version history
  getImageFills --fileKey=KEY --nodeId=ID  Get image URLs for node
  downloadImage --url=URL         Download image from URL

Examples:
  node scripts/figma-api.js getFile --fileKey=abc123XYZ
  node scripts/figma-api.js getNode --fileKey=abc123 --nodeId=1:234
  node scripts/figma-api.js getStyles --fileKey=abc123

Environment:
  FIGMA_API_TOKEN - Your Figma Personal Access Token
  Or set in ~/.config/mcp/servers.json
`);
    process.exit(0);
  }

  try {
    switch (command) {
      case 'getFile':
        if (!params.fileKey) {
          console.error('❌ Missing --fileKey parameter');
          process.exit(1);
        }
        await getFile(params.fileKey);
        break;

      case 'getNode':
        if (!params.fileKey || !params.nodeId) {
          console.error('❌ Missing --fileKey or --nodeId parameter');
          process.exit(1);
        }
        await getNode(params.fileKey, params.nodeId);
        break;

      case 'getStyles':
        if (!params.fileKey) {
          console.error('❌ Missing --fileKey parameter');
          process.exit(1);
        }
        await getStyles(params.fileKey);
        break;

      case 'getStyle':
        if (!params.styleKey) {
          console.error('❌ Missing --styleKey parameter');
          process.exit(1);
        }
        await getStyle(params.styleKey);
        break;

      case 'getComments':
        if (!params.fileKey) {
          console.error('❌ Missing --fileKey parameter');
          process.exit(1);
        }
        await getComments(params.fileKey);
        break;

      case 'getCommentReactions':
        if (!params.fileKey || !params.commentId) {
          console.error('❌ Missing --fileKey or --commentId parameter');
          process.exit(1);
        }
        await getCommentReactions(params.fileKey, params.commentId);
        break;

      case 'getFileVersions':
        if (!params.fileKey) {
          console.error('❌ Missing --fileKey parameter');
          process.exit(1);
        }
        await getFileVersions(params.fileKey);
        break;

      case 'getImageFills':
        if (!params.fileKey || !params.nodeId) {
          console.error('❌ Missing --fileKey or --nodeId parameter');
          process.exit(1);
        }
        await getImageFills(params.fileKey, params.nodeId);
        break;

      case 'downloadImage':
        if (!params.url) {
          console.error('❌ Missing --url parameter');
          process.exit(1);
        }
        await downloadImage(params.url);
        break;

      default:
        console.error(`❌ Unknown command: ${command}`);
        process.exit(1);
    }
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
}

// Export for programmatic use
module.exports = {
  apiRequest,
  getFile,
  getNode,
  getStyles,
  getStyle,
  getComments,
  getCommentReactions,
  getFileVersions,
  getImageFills,
  downloadImage,
};

// Run if called directly
if (require.main === module) {
  main();
}
