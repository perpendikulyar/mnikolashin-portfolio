# Figma MCP Commands Reference

## 🔑 Authentication

Figma MCP использует API token для доступа. Токен хранится в MCP конфиге.

**Где взять токен:**
1. Зайти в [Figma Settings → Access tokens](https://www.figma.com/settings)
2. Create new token → Personal access token
3. Скопировать и сохранить (показывается один раз!)

---

## 📚 Команды

### `figma/getFile`

Получить полную структуру Figma файла.

**Параметры:**
- `fileKey` (required) — ID файла из URL
- `version` (optional) — конкретная версия файла

**Пример:**
```
figma/getFile?fileKey=abc123XYZ789
```

**Ответ:**
```json
{
  "name": "Portfolio UI Kit",
  "children": [
    {
      "name": "Colors",
      "fills": [...],
      "styles": [...]
    },
    {
      "name": "Header",
      "type": "FRAME",
      "size": { "width": 1440, "height": 80 }
    }
  ]
}
```

---

### `figma/getNode`

Получить конкретный frame/component по ID.

**Параметры:**
- `fileKey` (required)
- `nodeId` (required) — ID ноды (например: "1:234")

**Пример:**
```
figma/getNode?fileKey=abc123&nodeId=1:234
```

**Как найти nodeId:**
1. Открыть файл в Figma
2. Выделить frame/component
3. Посмотреть в URL: `figma.com/file/KEY/...?node-id=1:234`
   Или в панели слоев: правый клик → Copy link

---

### `figma/getImageFills`

Получить изображения/иконки из ноды.

**Параметры:**
- `fileKey` (required)
- `nodeId` (required)

**Пример:**
```
figma/getImageFills?fileKey=abc123&nodeId=1:234
```

**Ответ:**
```json
{
  "fills": [
    {
      "type": "IMAGE",
      "imageRef": "abc123...",
      "scaleMode": "FILL"
    }
  ]
}
```

---

## 🛠️ Полезные скрипты

### Экспорт всех цветов

```
1. figma/getFile → получить файл
2. Найти styles с type="FILL"
3. Извлечь paint colors
4. Конвертировать HEX/RGB
```

### Экспорт типографики

```
1. figma/getFile → получить файл
2. Найти styles с type="TEXT"
3. Извлечь:
   - fontFamily
   - fontSize
   - fontWeight
   - lineHeight
   - letterSpacing
```

### Экспорт компонента

```
1. Найти nodeId компонента
2. figma/getNode → получить данные
3. Анализ:
   - dimensions (width, height)
   - layout (autoLayout, constraints)
   - fills (colors, gradients)
   - strokes (borders)
   - effects (shadows, blurs)
4. Конвертация в CSS/Tailwind
```

---

## 📊 Структура ответа Figma API

### Node типы

| Type | Описание |
|------|----------|
| `CANVAS` | Корневой холст |
| `FRAME` | Фрейм/контейнер |
| `GROUP` | Группа слоев |
| `RECTANGLE` | Прямоугольник |
| `TEXT` | Текстовый слой |
| `COMPONENT` | Компонент (символ) |
| `INSTANCE` | Экземпляр компонента |

### Важные поля

```json
{
  "id": "1:234",
  "name": "Button",
  "type": "COMPONENT",
  "size": { "width": 120, "height": 40 },
  "fills": [{ "type": "SOLID", "color": { "r": 0.2, "g": 0.5, "b": 1 } }],
  "strokes": [{ "weight": 1, "color": {...} }],
  "effects": [{ "type": "DROP_SHADOW", "radius": 4 }],
  "autoLayout": {
    "paddingTop": 8,
    "paddingRight": 16,
    "alignItems": "center",
    "justifyContent": "center"
  }
}
```

---

## 🔗 Ресурсы

- [Figma REST API Docs](https://www.figma.com/developers/api)
- [Figma MCP Server](https://github.com/[mcpservers]/figma)
- [Design Tokens Format](https://design-tokens.org/)
