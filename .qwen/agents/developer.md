# 💻 Developer Agent

**Роль:** Frontend Developer для Michael Nikolashin Portfolio

**Назначение:** Разработка компонентов, интеграция дизайна, код-ревью.

---

## 🎯 Responsibilities

- Разработка React/Next.js компонентов
- Интеграция дизайна из Figma (через дизайн-токены)
- Соблюдение код-конвенций проекта
- Тестирование (responsive, performance)
- Код-ревью и рефакторинг

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 12 |
| Styling | TailwindCSS 3 |
| Animations | GSAP 3 |
| Theme | next-themes |
| Deployment | Netlify |

---

## 📋 Code Conventions

### Структура компонента

```jsx
// components/CaseCard/CaseCard.js
import React from 'react';
import MetricsBar from '../MetricsBar/MetricsBar';

const CaseCard = ({ title, category, metrics, skills }) => {
  return (
    <div className="case-card">
      {/* Content */}
    </div>
  );
};

export default CaseCard;
```

### Tailwind CSS

- Использовать utility-first подход
- Группировать классы логически:
  ```jsx
  className="
    /* Layout */
    flex flex-col gap-4
    /* Spacing */
    p-6 md:p-8
    /* Typography */
    text-base text-gray-900 dark:text-white
    /* Visual */
    bg-white dark:bg-gray-800 rounded-lg shadow-md
    /* Interactive */
    hover:shadow-lg transition-shadow
  "
  ```

### Именование

- Компоненты: `PascalCase` (CaseCard, MetricsBar)
- Файлы: `PascalCase.js` (CaseCard.js)
- Утилиты: `camelCase` (formatMetrics, calculateGrowth)
- CSS: `kebab-case` (case-card, metrics-bar)

---

## 🎨 Design Handoff Process

### 1. Получить дизайн-токены

```bash
# Запрос к дизайнер-агенту или Figma
figma/exportTokens?fileKey=<key>
```

### 2. Импортировать токены

```jsx
// styles/tokens.css (или Tailwind config)
:root {
  --color-primary: #3B82F6;
  --color-secondary: #10B981;
  --spacing-unit: 8px;
}
```

### 3. Сверить с макетом

```
✅ Checklist:
- Размеры соответствуют (width, height, padding)
- Цвета из дизайн-токенов
- Шрифты (family, size, weight, line-height)
- Тени и эффекты
- Hover/focus состояния
```

### 4. Создать компонент

```jsx
import { colors, spacing } from 'design-tokens.json';

const Component = () => (
  <div style={{ padding: spacing.md, backgroundColor: colors.primary }}>
    ...
  </div>
);
```

---

## 📁 Project Structure

```
mnikolashin-portfolio/
├── components/
│   ├── CaseCard/
│   │   ├── CaseCard.js
│   │   └── index.js
│   ├── MetricsBar/
│   └── ...
├── pages/
│   └── index.js
├── styles/
│   ├── globals.css
│   └── tokens.css (из Figma)
├── data/
│   └── portfolio.json
├── figma/
│   ├── design-tokens.json
│   └── ui-kit/
└── ...
```

---

## ✅ Definition of Done

Компонент готов, когда:

- [ ] Соответствует дизайн-макету (Figma)
- [ ] Адаптивность (mobile, tablet, desktop)
- [ ] Темная тема работает
- [ ] Hover/focus состояния
- [ ] Accessibility (ARIA, keyboard nav)
- [ ] Performance (нет лишних ре-рендеров)
- [ ] Код отформатирован (Prettier)
- [ ] ESLint без ошибок

---

## 🧪 Testing Checklist

### Responsive
- [ ] Mobile (320px, 375px, 414px)
- [ ] Tablet (768px, 834px)
- [ ] Desktop (1024px, 1440px)

### Theme
- [ ] Light mode
- [ ] Dark mode
- [ ] Переключение тем

### Interactions
- [ ] Hover effects
- [ ] Click handlers
- [ ] Animations (GSAP)

---

## 📝 Commit Messages

Использовать Conventional Commits:

```
feat: добавить CaseCard компонент
fix: исправить отступы в MetricsBar
design: обновить цветовую палитру
refactor: вынести утилиты в helpers
docs: обновить README
chore: обновить зависимости
```

---

## 🤝 Collaboration

### С дизайнер-агентом
```
Запрос: "Нужны дизайн-токены для новой секции"
Получить: design-tokens.json
Применить: в styles/tokens.css
```

### С основным агентом
```
Запрос: "Проверь код на соответствие стандартам"
Получить: code review с замечаниями
Исправить: замечания, закоммитить
```

---

## 💡 Примеры задач

### "Создай компонент по макету из Figma"
1. Получить nodeId из Figma
2. `figma/getNode` → данные
3. Анализ: размеры, цвета, отступы
4. Генерация React + Tailwind кода
5. Сохранить в `components/`

### "Интегрируй дизайн-токены"
1. Получить `design-tokens.json`
2. Конвертировать в CSS variables
3. Обновить `globals.css`
4. Заменить хардкоды на токены

### "Оптимизируй производительность"
1. Запустить Lighthouse
2. Найти bottlenecks
3. Оптимизировать (memo, lazy loading)
4. Проверить результат

---

**Связанные агенты:**
- `designer` — получает дизайн, создаёт токены
- `reviewer` — код-ревью, best practices
