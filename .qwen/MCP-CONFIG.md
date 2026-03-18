# MCP Servers Configuration — Complete Guide

**Last Updated:** 18 March 2026  
**Project:** Michael Nikolashin Portfolio  
**Status:** ✅ Ready for Figma Integration

---

## 🔐 Security: Figma API Token

**⚠️ CRITICAL: Never commit tokens to repository!**

Tokens are stored **locally** on each device:
- **macOS/Linux:** `~/.config/mcp/servers.json`
- **Windows:** `%APPDATA%\mcp\servers.json`

This file **must not** be in the project and **must not** be committed to git.

---

## 📋 Step-by-Step Setup Guide for Beginners

### Step 1: Install Node.js (if not installed)

**Check if installed:**
```bash
node --version
npm --version
```

**If not installed:**
- macOS: `brew install node` (requires Homebrew)
- Download from [nodejs.org](https://nodejs.org/) (LTS version recommended)

---

### Step 2: Get Figma API Token

1. Go to [Figma Settings → Access tokens](https://www.figma.com/settings)
2. Click **"Create new token"**
3. Give it a name (e.g., "Portfolio MCP")
4. **Copy the token** (shown only once!)
5. **Save in password manager** (1Password, Bitwarden, etc.)

**⚠️ Important:**
- Token is shown only once — save it immediately
- If lost, create a new one
- Token gives access to your Figma files — keep it secure

---

### Step 3: Create MCP Config Directory

**macOS/Linux:**
```bash
mkdir -p ~/.config/mcp
cd ~/.config/mcp
```

**Windows:**
```powershell
mkdir $env:APPDATA\mcp
cd $env:APPDATA\mcp
```

---

### Step 4: Create servers.json Config File

**macOS/Linux:**
```bash
nano ~/.config/mcp/servers.json
```

**Windows:**
```powershell
notepad $env:APPDATA\mcp\servers.json
```

**Paste this content:**
```json
{
  "mcpServers": {
    "figma": {
      "command": "npx",
      "args": ["-y", "@figma/mcp-server"],
      "env": {
        "FIGMA_API_TOKEN": "YOUR_TOKEN_HERE"
      }
    }
  }
}
```

**Replace `YOUR_TOKEN_HERE`** with your actual Figma token from Step 2.

**Save:**
- nano: `Ctrl+O` → Enter → `Ctrl+X`
- notepad: `File` → `Save`

---

### Step 5: Verify Config File

**macOS/Linux:**
```bash
cat ~/.config/mcp/servers.json
```

**Windows:**
```powershell
type $env:APPDATA\mcp\servers.json
```

**Check:**
- JSON is valid (no syntax errors)
- Token is present (not "YOUR_TOKEN_HERE")
- No extra spaces or missing commas

---

### Step 6: Restart Qwen Code / IDE

After creating the config:
1. Close Qwen Code completely
2. Reopen Qwen Code
3. MCP servers will auto-connect

---

### Step 7: Test Connection

In Qwen Code chat, run:
```
figma/getFile?fileKey=test
```

**Expected responses:**

✅ **Success:** Error about invalid fileKey (normal — "test" is not a real file)

❌ **Authentication failed:** Token is incorrect or missing
- Re-check token in config
- Ensure token was copied correctly
- Create new token if needed

❌ **Server not found:** MCP config not loaded
- Restart Qwen Code
- Check file path is correct
- Verify JSON syntax

---

## 🔧 Troubleshooting

### "Failed to authenticate with Figma"

**Causes:**
- Invalid or expired token
- Token was revoked
- Wrong token in config

**Solution:**
1. Go to Figma Settings → Access tokens
2. Check if token is still active
3. Create new token if needed
4. Update `~/.config/mcp/servers.json`
5. Restart Qwen Code

---

### "File not found"

**Causes:**
- Invalid fileKey
- File is private/deleted
- No access to file

**Solution:**
1. Open file in Figma
2. Copy fileKey from URL: `figma.com/file/**FILE_KEY**/...`
3. Ensure file is accessible (not in Private mode)
4. Check you have Viewer/Editor permissions

---

### "Node not found"

**Causes:**
- Invalid nodeId
- Node was deleted from file
- Using old file version

**Solution:**
1. Open file in Figma
2. Select the frame/component
3. Right-click → Copy link → Get nodeId from URL
4. Or check URL: `figma.com/file/KEY/...?node-id=1:234`

---

### "MCP server not starting"

**Causes:**
- Node.js not installed
- npm/npx not in PATH
- Config file syntax error

**Solution:**
```bash
# Check Node.js installation
node --version
npm --version

# If not installed, install from nodejs.org

# Validate JSON syntax
cat ~/.config/mcp/servers.json | python -m json.tool
```

---

### "Command not found: npx"

**Solution:**
```bash
# macOS/Linux
which npx
# If empty: npm install -g npx

# Windows
where npx
# If empty: npm install -g npx
```

---

## 🧪 Connection Verification Checklist

Run these tests in Qwen Code:

```
Test 1: Check MCP servers available
→ Should list: figma

Test 2: figma/getFile?fileKey=test
→ Should return: "Invalid file key" (not auth error)

Test 3: Get real file (replace with your fileKey)
→ figma/getFile?fileKey=abc123XYZ
→ Should return: File structure JSON
```

---

## 📁 Portfolio Project MCP Config

**Full configuration for portfolio project:**

```json
{
  "mcpServers": {
    "figma": {
      "command": "npx",
      "args": ["-y", "@figma/mcp-server"],
      "env": {
        "FIGMA_API_TOKEN": "YOUR_TOKEN_HERE"
      }
    }
  }
}
```

**Future servers (optional):**
- `github` — GitHub integration
- `filesystem` — Local file operations
- `database` — Database queries

---

## 🎯 Using Figma MCP with Portfolio

### Workflow: Export Design Tokens

1. **Create Figma file** with design system
2. **Get fileKey** from URL
3. **Run in Qwen Code:**
   ```
   figma/getFile?fileKey=YOUR_FILE_KEY
   ```
4. **Extract:**
   - Colors (styles)
   - Typography (text styles)
   - Spacing (frame dimensions)
   - Shadows (effects)
5. **Save to:** `figma/design-tokens.json`

---

### Workflow: Get Component Specs

1. **Select component** in Figma (e.g., CaseCard)
2. **Copy nodeId** from URL or layers panel
3. **Run:**
   ```
   figma/getNode?fileKey=YOUR_KEY&nodeId=1:234
   ```
4. **Get:**
   - Dimensions (width, height)
   - Padding/margin
   - Colors
   - Typography
   - Effects

---

### Workflow: Export Images/Icons

1. **Select frame/component**
2. **Run:**
   ```
   figma/getImageFills?fileKey=YOUR_KEY&nodeId=1:234
   ```
3. **Get image refs** for export
4. **Download** via Figma API

---

## 📚 Figma API Token Best Practices

### Security

- ✅ Store in password manager
- ✅ Use descriptive names ("Portfolio MCP 2026")
- ✅ Revoke old tokens when not needed
- ❌ Never share token publicly
- ❌ Never commit to git

### Organization

Create separate tokens for:
- Personal projects
- Work projects
- Client projects

**Example:**
- "Portfolio MCP — Personal"
- "Company Design System"
- "Client Project X"

---

## 🔗 Resources

- [Figma MCP Server (npm)](https://www.npmjs.com/package/@figma/mcp-server)
- [Figma REST API Docs](https://www.figma.com/developers/api)
- [MCP Specification](https://modelcontextprotocol.io/)
- [Figma Access Tokens](https://www.figma.com/developers/api#access-tokens)

---

## 📞 Support

**Common issues and solutions:**

| Issue | Solution |
|-------|----------|
| Auth failed | Re-check token, create new one |
| File not found | Verify fileKey, check permissions |
| Node not found | Get correct nodeId from Figma |
| Server not starting | Check Node.js installation |
| JSON syntax error | Validate config file |

**Still having issues?**
1. Check logs in Qwen Code output
2. Verify config file exists and is valid
3. Restart Qwen Code
4. Try creating new Figma token

---

**Status:** ✅ Ready for Phase 4 Figma Integration  
**Next Step:** Create Figma design file → Export tokens → Integrate into project
