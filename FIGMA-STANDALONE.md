# Figma Integration — Standalone Server Guide

**Last Updated:** 18 March 2026  
**Status:** ✅ Working without MCP

---

## 🔍 Problem with MCP in Qwen Code

Qwen Code does **not** support MCP (Model Context Protocol) servers directly. MCP requires editor-level integration that is only available in:

- **Cursor** (cursor.com)
- **Windsurf** (codeium.com/windsurf)
- **VS Code** with MCP extension
- **Claude Desktop** app

---

## ✅ Solution: Standalone Figma API Client

This project includes a standalone Figma API client that works without MCP.

### Features

- ✅ Direct REST API access
- ✅ Command-line interface
- ✅ npm scripts for common operations
- ✅ Token from `~/.config/mcp/servers.json` or environment variable
- ✅ No MCP dependency required

---

## 📋 Setup

### Step 1: Verify Token Exists

Your token should already be in `~/.config/mcp/servers.json`:

```bash
cat ~/.config/mcp/servers.json
```

Expected output:
```json
{
  "mcpServers": {
    "figma": {
      "command": "npx",
      "args": ["-y", "figma-developer-mcp"],
      "env": {
        "FIGMA_API_TOKEN": "figd_..."
      }
    }
  }
}
```

### Step 2: Test Connection

```bash
# Using npm scripts
npm run figma:get-file -- --fileKey=test

# Or directly
node scripts/figma-api.js getFile --fileKey=test
```

**Expected:** Error 404 (because "test" is not a real file key)  
**If auth fails:** Check your token in `~/.config/mcp/servers.json`

---

## 🎯 Usage

### Get File Structure

```bash
# Replace YOUR_FILE_KEY with actual key from Figma URL
npm run figma:get-file -- --fileKey=YOUR_FILE_KEY

# Example: figma.com/file/abc123XYZ/...
npm run figma:get-file -- --fileKey=abc123XYZ
```

### Get Specific Node

```bash
npm run figma:get-node -- --fileKey=YOUR_KEY --nodeId=1:234
```

### Get All Styles (Design Tokens)

```bash
npm run figma:get-styles -- --fileKey=YOUR_KEY
```

### Get File Versions

```bash
npm run figma:get-versions -- --fileKey=YOUR_KEY
```

### Get Comments

```bash
npm run figma:get-comments -- --fileKey=YOUR_KEY
```

### Get Image Fills

```bash
npm run figma:get-images -- --fileKey=YOUR_KEY --nodeId=1:234
```

---

## 📁 Available Commands

| Command | Description |
|---------|-------------|
| `npm run figma:get-file -- --fileKey=KEY` | Get file metadata and structure |
| `npm run figma:get-node -- --fileKey=KEY --nodeId=ID` | Get specific node data |
| `npm run figma:get-styles -- --fileKey=KEY` | Get all styles from file |
| `npm run figma:get-style -- --styleKey=KEY` | Get specific style |
| `npm run figma:get-comments -- --fileKey=KEY` | Get file comments |
| `npm run figma:get-versions -- --fileKey=KEY` | Get file version history |
| `npm run figma:get-images -- --fileKey=KEY --nodeId=ID` | Get image URLs for node |
| `npm run figma:download-image -- --url=URL` | Download image from URL |

---

## 🔧 Alternative: Environment Variable

Instead of `~/.config/mcp/servers.json`, you can set:

```bash
export FIGMA_API_TOKEN="figd_your_token_here"
```

Add to your `~/.zshrc` or `~/.bashrc` for persistence:

```bash
echo 'export FIGMA_API_TOKEN="figd_your_token_here"' >> ~/.zshrc
source ~/.zshrc
```

---

## 🚀 MCP Server Mode (Advanced)

Run Figma MCP server with HTTP transport:

```bash
npm run figma:mcp-server
```

This starts:
- HTTP server on port 3000
- SSE endpoint: `http://localhost:3000/sse`
- Message endpoint: `http://localhost:3000/message`
- Health check: `http://localhost:3000/health`

**Note:** Requires custom client to connect to these endpoints.

---

## 📖 How to Get File Key and Node ID

### File Key

1. Open your file in Figma
2. Look at the URL: `https://www.figma.com/file/FILE_KEY/...`
3. Copy the `FILE_KEY` part

**Example:**
```
URL: https://www.figma.com/file/abc123XYZ/My-Design-System
File Key: abc123XYZ
```

### Node ID

1. Select a frame/component in Figma
2. Right-click → **Copy link**
3. URL will include `?node-id=1:234`
4. Copy the `1:234` part

**Example:**
```
URL: https://www.figma.com/file/abc123XYZ/...?node-id=1:234
Node ID: 1:234
```

---

## 🧪 Testing Workflow

### Test 1: Authentication

```bash
npm run figma:get-file -- --fileKey=test
```

**Expected:** `API Error: 404 - Not found` (auth works, file doesn't exist)

**If you see:** `Authentication failed` or `Invalid token`
- Check token in `~/.config/mcp/servers.json`
- Ensure token starts with `figd_`
- Create new token at https://www.figma.com/settings

### Test 2: Real File

```bash
# Replace with your actual file key
npm run figma:get-file -- --fileKey=YOUR_REAL_KEY
```

**Expected:** JSON response with file structure

### Test 3: Extract Design Tokens

```bash
npm run figma:get-styles -- --fileKey=YOUR_KEY
```

**Expected:** JSON with colors, typography, and effects

---

## 💡 Example: Export Design Tokens

```bash
# 1. Get all styles
npm run figma:get-styles -- --fileKey=abc123XYZ > figma/raw-styles.json

# 2. Get file structure
npm run figma:get-file -- --fileKey=abc123XYZ > figma/raw-file.json

# 3. Process with Node.js script (create your own)
node scripts/process-design-tokens.js
```

---

## 🛠️ Troubleshooting

### "FIGMA_API_TOKEN not found"

**Solution:**
```bash
# Check if config file exists
cat ~/.config/mcp/servers.json

# If missing, create it:
mkdir -p ~/.config/mcp
cat > ~/.config/mcp/servers.json << 'EOF'
{
  "mcpServers": {
    "figma": {
      "command": "npx",
      "args": ["-y", "figma-developer-mcp"],
      "env": {
        "FIGMA_API_TOKEN": "figd_your_token_here"
      }
    }
  }
}
EOF
```

### "API Error: 401 - Invalid token"

**Causes:**
- Token is incorrect
- Token was revoked
- Token format is wrong

**Solution:**
1. Go to https://www.figma.com/settings
2. Create new access token
3. Update `~/.config/mcp/servers.json`
4. Retry command

### "API Error: 404 - Not found"

**Causes:**
- Invalid fileKey
- File is private
- No access to file

**Solution:**
1. Open file in Figma
2. Copy correct fileKey from URL
3. Ensure file is not in Private mode
4. Check you have Viewer/Editor permissions

### "Command not found: node"

**Solution:**
```bash
# Install Node.js
brew install node  # macOS
# or download from nodejs.org

# Verify installation
node --version
npm --version
```

---

## 📚 Resources

- [Figma REST API Docs](https://www.figma.com/developers/api)
- [Figma Access Tokens](https://www.figma.com/developers/api#access-tokens)
- [Figma Developer MCP (npm)](https://www.npmjs.com/package/figma-developer-mcp)
- [Model Context Protocol](https://modelcontextprotocol.io/)

---

## 🔄 Migration from MCP

If you were using MCP in Cursor/Windsurf and want to use the same workflow here:

### Before (MCP in Cursor)
```
figma/getFile?fileKey=abc123
```

### After (Standalone CLI)
```bash
npm run figma:get-file -- --fileKey=abc123
```

### Or use in scripts
```javascript
const { getFile } = require('./scripts/figma-api');

async function main() {
  const fileData = await getFile('abc123');
  // Process fileData...
}
```

---

**Status:** ✅ Ready to use  
**Next Step:** Get your Figma file key and run `npm run figma:get-styles`
