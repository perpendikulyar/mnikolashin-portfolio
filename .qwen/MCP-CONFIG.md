# MCP Servers Configuration

## 🔐 Security: Figma API Token

**⚠️ ВАЖНО: Никогда не коммить токен в репо!**

Токен хранится **локально** на каждом устройстве:
- **macOS/Linux:** `~/.config/mcp/servers.json`
- **Windows:** `%APPDATA%\mcp\servers.json`

Этот файл **не должен** быть в проекте и **не должен** коммититься в git.

---

## 1. Получить Figma API Token

1. Зайти в [Figma Settings → Access tokens](https://www.figma.com/settings)
2. Нажать "Create new token"
3. Дать название (например: "Portfolio MCP")
4. **Скопировать токен** (показывается один раз!)
5. **Сохранить в менеджере паролей** (1Password, Bitwarden)

---

## 2. Добавить токен в MCP конфиг

Создать файл локально (не в проекте!):

**macOS/Linux:**
```bash
mkdir -p ~/.config/mcp
nano ~/.config/mcp/servers.json
```

**Windows:**
```powershell
mkdir $env:APPDATA\mcp
notepad $env:APPDATA\mcp\servers.json
```

**Содержимое:**
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

**Проверить:**
```bash
cat ~/.config/mcp/servers.json
```

---

## 3. Проверить подключение

Запустить команду в Qwen Code:
```
figma/getFile?fileKey=test
```

Если ошибка аутентификации — проверить токен.

---

## Portfolio Project MCP Config

Для работы с проектом `mnikolashin-portfolio`:

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

---

## Troubleshooting

### "Failed to authenticate"
- Проверить токен в Figma Settings
- Убедиться что токен активный (не отозван)
- Проверить права доступа (Personal access token)

### "File not found"
- Проверить fileKey в URL Figma
- Убедиться что файл доступен (не в Private режиме)
- Проверить права на файл (Viewer/Editor)

### "Node not found"
- nodeId указан неверно
- Нода удалена из файла
- Использовать актуальную версию файла

---

## Resources

- [Figma MCP Server (npm)](https://www.npmjs.com/package/@figma/mcp-server)
- [Figma REST API](https://www.figma.com/developers/api)
- [MCP Specification](https://modelcontextprotocol.io/)
