# 🎨 Figma Design Skill

**Роль:** UI/UX Designer & Design Engineer

**Назначение:** Работа с макетами в Figma через MCP — экспорт дизайн-токенов, замеры, генерация UI.

---

## 🎯 Capabilities

- Подключение к Figma через MCP
- Экспорт дизайн-токенов (цвета, типографика, spacing)
- Замеры и спецификации компонентов
- Сравнение дизайна с реализацией
- Генерация UI по описанию

---

## 🔧 MCP Figma Commands

### Базовые команды

```bash
# Получить структуру файла
figma/getFile?fileKey=<file_key>

# Получить конкретный frame/node
figma/getNode?fileKey=<file_key>&nodeId=<node_id>

# Получить image fills
figma/getImageFills?fileKey=<file_key>&nodeId=<node_id>
```

### Полезные query параметры

| Параметр | Описание |
|----------|----------|
| `fileKey` | ID файла Figma (из URL: figma.com/file/**FILE_KEY**/...) |
| `nodeId` | ID конкретного frame/component |
| `version` | Версия файла (опционально) |

---

## 📐 Workflow: Экспорт дизайн-токенов

1. **Получить файл:**
   ```
   figma/getFile?fileKey=YOUR_FILE_KEY
   ```

2. **Найти styles в файле:**
   - Colors
   - Text styles
   - Effects (shadows)
   - Grid styles

3. **Конвертировать в CSS/Tailwind:**
   ```json
   {
     "colors": {
       "primary": "#3B82F6",
       "secondary": "#10B981"
     },
     "spacing": {
       "sm": "8px",
       "md": "16px",
       "lg": "24px"
     }
   }
   ```

4. **Сохранить в `figma/design-tokens.json`**

---

## 🎨 Workflow: Генерация UI по макету

1. **Получить node из Figma:**
   ```
   figma/getNode?fileKey=KEY&nodeId=NODE_ID
   ```

2. **Проанализировать структуру:**
   - Layout (auto-layout, constraints)
   - Размеры и отступы
   - Цвета и стили
   - Типографика

3. **Сгенерировать код:**
   - React компонент
   - Tailwind CSS классы
   - Пропсы для динамических данных

---

## 📝 Примеры использования

### Пример 1: Экспорт цветовой палитры
```
Задача: "Экспортируй цвета из Figma файла"
1. figma/getFile → получить styles
2. Извлечь colors
3. Сохранить в design-tokens.json
```

### Пример 2: Замеры компонента
```
Задача: "Какие отступы у карточки кейса?"
1. figma/getNode → получить карточку
2. Проанализировать padding/margin
3. Вернуть значения в px/rem
```

### Пример 3: Генерация компонента
```
Задача: "Создай компонент Header по макету"
1. figma/getNode → получить Header frame
2. Анализ структуры (logo, nav, buttons)
3. Генерация React + Tailwind кода
```

---

## ⚠️ Ограничения

- Требуется доступ к Figma файлу (public link или access token)
- Некоторые плагины могут не поддерживаться через MCP
- Сложные эффекты (blur, gradients) могут упрощаться

---

## 📁 Артефакты

После работы скилл создаёт/обновляет:

| Файл | Описание |
|------|----------|
| `figma/design-tokens.json` | Цвета, шрифты, spacing |
| `figma/ui-kit/*.json` | JSON спецификации компонентов |
| `figma/exports/*.png` | Экспортированные изображения (если нужно) |

---

## 🚀 Быстрый старт

1. Получить `fileKey` из URL Figma
2. Настроить MCP credentials (Figma API token)
3. Запустить: `figma/getFile?fileKey=...`
4. Работать с данными

---

**Связанные агенты:** 
- `designer` — для создания новых макетов
- `developer` — для конвертации дизайна в код
