# 📚 Project Context — Michael Nikolashin Portfolio

**Версия:** 1.1
**Последнее обновление:** 18 марта 2026
**Статус:** Фаза 0 ✅ завершена, Фаза 1 ✅ завершена (закоммичено и запушено)

---

## 🎯 О проекте

**Портфолио для:** Senior Product Manager (Mikhail Nikolashin)
**Цель:** Позиционирование для ролей с зарплатой от 400к ₽
**Стек:** Next.js 14.2.3, TailwindCSS 3, GSAP 3, next-themes
**Деплой:** Netlify
**Домен:** michael-nikolashin.ru

### Ключевые кейсы (3 штуки)

| Кейс | Компания | Результат |
|------|----------|-----------|
| ML-рекомендации | LiveJournal | CTR +5%, Session Depth +3% |
| Редизайн форума | Woman.ru | Возврат аудитории, рост новой демографии |
| Реферальная программа | ProductCamp | 20% регистраций через рефералки |

---

## 📋 Фазы проекта

### ✅ Фаза 0: Ревизия (Завершена 18 марта 2026)

**Задачи:**
- [x] Аудит текущих файлов
- [x] Удаление артефактов
- [x] Анализ SSR vs SSG (решение: SSG для портфолио)

**Итоги:** Проведён полный аудит проекта, удалены неиспользуемые файлы, принято решение по архитектуре (SSG).

---

### ✅ Фаза 1: Кейсы для рекрутеров (Завершена 18 марта 2026)

**Задачи:**
- [x] Обновить portfolio.json (3 кейса)
- [x] Создать CaseCard компонент
- [x] Создать MetricsBar компонент (визуализация метрик)
- [x] Создать SkillsSection компонент
- [x] Создать ResumeDownload компонент
- [x] Интеграция в index.js
- [x] Финальная проверка контента (Product Owner)
- [x] Dark mode дизайн (Designer Agent)
- [x] Dark mode реализация
- [x] next-themes настройка (attribute="class", defaultTheme="dark")

**Компоненты созданы:**
```
components/
├── CaseCard/
│   └── CaseCard.js       # ✅ Карточка кейса с метриками + dark mode
├── MetricsBar/
│   └── MetricsBar.js     # ✅ Визуализация до/после + dark mode
├── SkillsSection/
│   └── SkillsSection.js  # ✅ Навыки по категориям + dark mode
├── ResumeDownload/
│   └── ResumeDownload.js # ✅ Кнопка скачивания PDF
└── Header/
    └── index.js          # ✅ Обновлена навигация (Cases scroll)
```

**Ветка:** `phase1/cases-section` ✅ Закоммичено и запушено (commit 7185c96)

**Результат Фазы 1:**
- ✅ 3 кейса с метриками отображаются в секции "Ключевые кейсы"
- ✅ Полная поддержка dark mode (glassmorphism effect, backdrop-blur)
- ✅ Адаптивность (mobile: 1 колонка, tablet: 2, desktop: 3)
- ✅ Навигация из Header к секции Cases
- ✅ Удалены неиспользуемые файлы (pages/api, pages/blog)
- ✅ Исправлены зависимости (Next.js 14.2.3, React 18.3.1)
- ✅ Настроена корректная работа next-themes

---

### 📋 Фаза 2: Ревизия и очистка (Запланирована)

**Задачи:**
- [ ] Удаление неиспользуемых файлов
- [ ] Исправление багов
- [ ] Анализ SSR vs SSG (финальный)

**Длительность:** ~0.5 дня

---

### 📋 Фаза 3: Тесты и оптимизация (Запланирована)

**Задачи:**
- [ ] Написать тесты (Jest + RTL)
- [ ] Lighthouse оптимизация
- [ ] SEO мета-теги

**Длительность:** ~1.5 дня

---

### 📋 Фаза 4: Дизайн (Опционально)

**Задачи:**
- [ ] Создание макетов в Figma
- [ ] Перенос дизайна в код

**Длительность:** ~3 дня

---

## 🤖 AI Agents Infrastructure

### Архитектура

Проект использует **субагентов** для разделения контекста между дизайном и разработкой.

```
┌─────────────────────────────────────────┐
│           Основной агент (Qwen)         │
│    Координация, контекст проекта       │
└──────────┬──────────────────┬──────────┘
           │                  │
           ▼                  ▼
┌──────────────────┐ ┌──────────────────┐
│ Designer Agent   │ │ Developer Agent  │
│ UX/UI, Figma     │ │ React, Next.js   │
│ Research-driven  │ │ Performance      │
└──────────────────┘ └──────────────────┘
```

### Агенты

| Агент | Файл | Назначение |
|-------|------|------------|
| **Designer** | `.qwen/agents/designer.md` | Senior UX/UI Designer (10+ лет, research-driven) |
| **Developer** | `.qwen/agents/developer.md` | Senior Frontend Developer (5+ лет, performance expert) |

### Designer Agent Expertise

**UX Research Framework:**
- Hick's Law (время выбора)
- Fitts's Law (доступность)
- Serial Position Effect (память)
- Von Restorff Effect (выделение)
- Miller's Law (память)
- Aesthetic-Usability Effect (восприятие)

**Research Sources:**
- Nielsen Norman Group
- Baymard Institute
- Gov.uk Design System
- Material Design 3
- Apple HIG

**Product Thinking:**
- Data-driven (метрики на виду)
- Strategic (связь с бизнес-целями)
- User-focused (UX исследования)
- Execution (детали, консистентность)

**Accessibility:** WCAG 2.1 AA

---

### Developer Agent Expertise

**React Best Practices:**
- Component Composition
- Custom Hooks для логики
- Memoization (обоснованно)
- PropTypes валидация

**Next.js:**
- SSG для портфолио
- Image Optimization (next/image)
- Font Optimization (next/font)
- API Routes (если нужно)

**Tailwind CSS:**
- Utility-first с группировкой
- Mobile-first responsive
- Dark mode паттерны

**GSAP:**
- Performance-first (transform, opacity)
- Cleanup через gsap.context()
- ScrollTrigger правильно

**Performance Targets:**
- Lighthouse: >90 все категории
- Core Web Vitals: LCP <2.5s, FID <100ms, CLS <0.1
- Bundle size: <200KB

---

### Figma Integration (MCP)

**Настройка:**
```bash
# Локально на каждом устройстве
~/.config/mcp/servers.json

{
  "mcpServers": {
    "figma": {
      "command": "npx",
      "args": ["-y", "@figma/mcp-server"],
      "env": {
        "FIGMA_API_TOKEN": "YOUR_TOKEN"
      }
    }
  }
}
```

**⚠️ Security:** Токен НЕ коммитить в репо! Хранится локально.

**Скилл:** `.qwen/skills/figma/`

---

## 📁 Структура проекта

```
mnikolashin-portfolio/
├── .qwen/                    # AI Agents инфраструктура
│   ├── agents/
│   │   ├── designer.md       # Designer Agent промпт
│   │   └── developer.md      # Developer Agent промпт
│   ├── skills/figma/         # Figma MCP skill
│   ├── MCP-CONFIG.md         # Настройка MCP
│   ├── WORKFLOW.md           # Гайд по агентам
│   └── PROJECT-CONTEXT.md    # Этот файл
│
├── components/               # React компоненты
│   ├── CaseCard/
│   │   └── CaseCard.js       # ✅ Фаза 1
│   ├── MetricsBar/
│   │   └── MetricsBar.js     # ✅ Фаза 1
│   ├── SkillsSection/
│   │   └── SkillsSection.js  # ✅ Фаза 1
│   ├── ResumeDownload/
│   │   └── ResumeDownload.js # ✅ Фаза 1
│   ├── Header/
│   │   └── index.js          # ✅ Обновлена навигация
│   └── ...
│
├── pages/
│   └── index.js              # ✅ Интеграция кейсов
│
├── data/
│   └── portfolio.json        # ✅ Обновлена структура
│
├── figma/                    # Figma экспорт
│   └── design-tokens.json    # Базовые токены
│
├── public/
│   ├── images/cases/         # Изображения кейсов
│   └── resume.pdf            # ✅ Резюме для скачивания
│
├── styles/
│   └── globals.css           # ✅ Обновлены стили
│
├── BACKLOG.md                # Детальный план проекта
├── README.md                 # Документация
└── package.json
```

---

## 🌿 Git Workflow

### Ветки

| Ветка | Назначение | Статус |
|-------|------------|--------|
| `main` | Продакшен | ✅ |
| `phase1/cases-section` | Фаза 1 (кейсы) | ✅ Готова к merge |
| `infra/qwen-agents` | Инфраструктура (агенты) | ✅ Готова к merge |

### Правила

**⚠️ НЕ коммитить в `main`!**

```bash
# Создать ветку для задачи
git checkout -b feature/<название>
git checkout -b fix/<что-исправляем>
git checkout -b design/<название>

# Закоммитить и запушить
git add .
git commit -m "type: описание"
git push -u origin <branch-name>

# Создать PR через GitHub UI
```

### Conventional Commits

| Тип | Описание |
|-----|----------|
| `feat:` | Новая фича |
| `fix:` | Исправление бага |
| `design:` | Изменения дизайна/стилей |
| `refactor:` | Рефакторинг без изменений функциональности |
| `docs:` | Обновления документации |
| `chore:` | Вспомогательные изменения |

---

## 📊 Design Tokens

**Файл:** `figma/design-tokens.json`

**Структура:**
```json
{
  "colors": {
    "primary": "#3B82F6",
    "secondary": "#10B981",
    "neutral": { ... },
    "semantic": { ... }
  },
  "typography": { ... },
  "spacing": { ... },
  "borderRadius": { ... },
  "shadows": { ... },
  "breakpoints": { ... }
}
```

**Использование:**
```jsx
// Импортировать в globals.css или Tailwind config
@import './figma/design-tokens.json';
```

---

## 🎨 Design Principles

### Product Manager Positioning

Дизайн передаёт:
- **Профессионализм** — чисто, структурировано
- **Data-driven** — метрики на виду
- **Modern** — актуальный UI (2024-2026)
- **Accessible** — WCAG AA

### Цветовая палитра

| Цвет | Значение | Использование |
|------|----------|---------------|
| Primary (#3B82F6) | Доверие, профессионализм | CTA, links, акценты |
| Secondary (#10B981) | Рост, успех | Метрики (+%), акценты |
| Neutral Grays | Текст, фоны | Контент, backgrounds |
| Semantic | Success/Warning/Error | Статусы, уведомления |

### Типографика

- H1: 48-64px
- H2: 32-40px
- H3: 24-28px
- Body: 16-18px
- Small: 14px

### Spacing

Base: 8px grid
- p-2 = 16px
- p-4 = 32px
- p-6 = 48px
- p-8 = 64px

---

## ⚡ Performance Requirements

### Lighthouse Targets

| Категория | Target |
|-----------|--------|
| Performance | >90 |
| Accessibility | >90 |
| Best Practices | >90 |
| SEO | >90 |

### Core Web Vitals

| Метрика | Target |
|---------|--------|
| LCP (Largest Contentful Paint) | <2.5s |
| FID (First Input Delay) | <100ms |
| CLS (Cumulative Layout Shift) | <0.1 |

### Bundle Budget

- Общий JS: <200KB
- Компонент: <10KB
- Images: WebP/AVIF, lazy loading

---

## ♿ Accessibility Standards

**WCAG 2.1 AA:**

| Требование | Значение |
|------------|----------|
| Контраст текста | 4.5:1 minimum |
| Контраст UI | 3:1 minimum |
| Touch targets | 44×44px min |
| Focus visible | Да |
| Keyboard navigation | Полная поддержка |

---

## 📱 Responsive Breakpoints

| Breakpoint | Width |
|------------|-------|
| Mobile | 320px |
| Mobile-lg | 414px |
| Tablet | 768px |
| Desktop | 1024px |
| Desktop-lg | 1440px |

---

## 🔧 Инструкции для следующих сессий

### Настройка окружения (новое устройство)

```bash
# 1. Клонировать репо
git clone <repo>
git checkout phase1/cases-section  # или infra/qwen-agents

# 2. Установить зависимости
npm install

# 3. Настроить MCP (если нужен Figma)
mkdir -p ~/.config/mcp
nano ~/.config/mcp/servers.json
# Вставить FIGMA_API_TOKEN

# 4. Запустить dev
npm run dev
```

### Тестирование агентов

```
# Designer Agent
task: "Спроектируй UI Kit"
  subagent_type: general-purpose
  prompt: |
    Ты Designer Agent (.qwen/agents/designer.md).
    Задача: ...

# Developer Agent
task: "Создай компонент"
  subagent_type: general-purpose
  prompt: |
    Ты Developer Agent (.qwen/agents/developer.md).
    Задача: ...
```

### Быстрые команды

```bash
# Запуск dev
npm run dev

# Сборка
npm run build

# Линтинг
npm run lint
npm run format

# Тесты (когда будут)
npm test
```

---

## 📞 Контакты

- **Email:** perpendikulyar@gmail.com
- **Telegram:** [@mnikolashin](https://t.me/mnikolashin)
- **Подкаст:** [Кита и Грома](https://st.zvuk.com/podkast-kita-i-groma)

---

## 📚 Ресурсы

### Документация проекта

- `README.md` — общая информация
- `BACKLOG.md` — детальный план
- `.qwen/WORKFLOW.md` — работа с агентами
- `.qwen/MCP-CONFIG.md` — настройка MCP
- `.qwen/PROJECT-CONTEXT.md` — этот файл

### Внешние ресурсы

- [Next.js Docs](https://nextjs.org/docs)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [GSAP Docs](https://greensock.com/docs/)
- [Figma API](https://www.figma.com/developers/api)
- [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)

---

## 🎯 Следующие шаги

1. **Продуктовая проверка контента** (Product Owner)
   - Проверить 3 кейса
   - Проверить elevator pitch
   - Проверить контакты

2. **Merge Phase 1** (после проверки)
   ```bash
   git checkout main
   git merge phase1/cases-section
   git push origin main
   ```

3. **Фаза 2: Ревизия**
   - Удалить неиспользуемые файлы
   - Исправить баги

4. **Фаза 3: Тесты**
   - Написать тесты (Jest + RTL)
   - Lighthouse оптимизация

---

**Последняя активность:** 18 марта 2026  
**Следующая сессия:** Проверка контента, merge Phase 1
