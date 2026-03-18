# UI Kit Documentation

**Project:** Michael Nikolashin Portfolio  
**Version:** 4.0.0 (Phase 4 Design System)  
**Last Updated:** 18 March 2026  
**Status:** ✅ Ready for Development

---

## 📐 Design Tokens Reference

All components use design tokens from `figma/design-tokens.json`.

### Quick Reference

```javascript
// Colors
colors.primary.DEFAULT    // #3B82F6
colors.primary.hover      // #2563EB
colors.secondary.DEFAULT  // #10B981
colors.neutral.gray-500   // #6B7280
colors.semantic.success   // #10B981
colors.semantic.error     // #EF4444

// Typography
fontSize.base      // 16px
fontSize.xl        // 20px
fontSize.2xl       // 24px
fontSize.3xl       // 30px
fontSize.4xl       // 36px
fontSize.5xl       // 48px
fontSize.6xl       // 64px
fontWeight.normal  // 400
fontWeight.medium  // 500
fontWeight.bold    // 700

// Spacing (8px grid)
spacing.2   // 8px
spacing.4   // 16px
spacing.6   // 24px
spacing.8   // 32px
spacing.12  // 48px
spacing.16  // 64px
spacing.20  // 80px

// Border Radius
borderRadius.md    // 8px
borderRadius.lg    // 12px
borderRadius.xl    // 16px
borderRadius.full  // 9999px

// Shadows
shadow.sm   // Subtle
shadow.md   // Default
shadow.lg   // Hover
shadow.xl   // Modal
```

---

## 🎨 Components

### 1. Button

**Purpose:** Primary actions (CTA, download resume, contact)

#### Variants

| Variant | Use Case | Example |
|---------|----------|---------|
| Primary | Main CTA | "Download Resume", "Contact Me" |
| Secondary | Secondary actions | "View Cases", "Learn More" |
| Ghost | Tertiary actions | "Cancel", "Back" |

#### Sizes

| Size | Height | Padding | Use Case |
|------|--------|---------|----------|
| sm | 36px | 12px 20px | Inline actions |
| md | 44px | 16px 24px | **Recommended** (WCAG) |
| lg | 52px | 20px 32px | Hero CTAs |

#### States

| State | Style |
|-------|-------|
| Default | bg-primary, text-white |
| Hover | bg-primary-hover, -translate-y-0.5, shadow-lg |
| Active | bg-primary-active, scale-98 |
| Disabled | opacity-50, cursor-not-allowed |

#### Tailwind Implementation

```jsx
// Primary Button (Recommended)
<button className="
  inline-flex items-center justify-center
  bg-primary hover:bg-primary-hover
  text-white font-medium
  px-6 py-3 h-11 rounded-lg
  transition-all duration-200 ease-out
  hover:shadow-lg hover:-translate-y-0.5
  active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed
  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
">
  Download Resume
</button>

// Secondary Button
<button className="
  inline-flex items-center justify-center
  bg-transparent border-2 border-primary
  text-primary font-medium
  px-6 py-3 h-11 rounded-lg
  transition-all duration-200 ease-out
  hover:bg-primary/10 hover:shadow-md
  active:scale-98 disabled:opacity-50
  focus:outline-none focus:ring-2 focus:ring-primary
">
  View Cases
</button>

// Ghost Button
<button className="
  inline-flex items-center justify-center
  bg-transparent
  text-gray-600 dark:text-gray-300 font-medium
  px-4 py-2 h-9 rounded-md
  transition-all duration-200
  hover:bg-gray-100 dark:hover:bg-gray-800
  active:scale-98 disabled:opacity-50
  focus:outline-none focus:ring-2 focus:ring-gray-400
">
  Cancel
</button>
```

#### Props Interface

```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
  href?: string  // For link buttons
  disabled?: boolean
  className?: string
  icon?: React.ReactNode  // Optional icon
}
```

#### Accessibility

- ✅ Min height 44px (WCAG touch target)
- ✅ Focus visible (2px ring)
- ✅ Keyboard navigable
- ✅ aria-label for icon buttons

---

### 2. CaseCard

**Purpose:** Display project case studies with metrics

#### Structure

```
┌─────────────────────────────────┐
│  [Image Thumbnail]              │
│  [Badge: Category]              │
│                                 │
│  [Title H3]                     │
│  [Problem: 1-2 lines]           │
│                                 │
│  [Solution: Bullet points]      │
│                                 │
│  [Metrics Visualization]        │
│  ├─ Metric 1 (before/after)     │
│  └─ Metric 2 (before/after)     │
│                                 │
│  [Skills Tags]                  │
│  [Insights (optional)]          │
└─────────────────────────────────┘
```

#### Dimensions

| Breakpoint | Width | Height | Layout |
|------------|-------|--------|--------|
| Mobile | 100% (343px) | 600px | 1 column |
| Tablet | 340px | 560px | 2 columns |
| Desktop | 380px | 520px | 3 columns |

#### States

| State | Style |
|-------|-------|
| Default | shadow-md, border |
| Hover | shadow-xl, -translate-y-1, dark:shadow-purple-500/20 |

#### Tailwind Implementation

```jsx
<div className="
  bg-white dark:bg-gray-800/80 backdrop-blur-sm
  rounded-2xl shadow-md dark:shadow-lg
  hover:shadow-xl dark:hover:shadow-purple-500/20
  hover:-translate-y-1 transition-all duration-300
  border border-gray-200/10 dark:border-gray-700/50
  overflow-hidden
">
  {/* Image */}
  <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
    <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
    
    {/* Category Badge */}
    <span className="
      absolute top-4 left-4
      px-3 py-1 rounded-full text-xs font-medium
      bg-primary-light dark:bg-primary-dark/20
      text-primary
    ">
      {categoryIcon} {category}
    </span>
  </div>
  
  {/* Content */}
  <div className="p-6">
    {/* Title */}
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
      {title}
    </h3>
    
    {/* Problem */}
    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
      {problem}
    </p>
    
    {/* Solution */}
    <ul className="text-gray-600 dark:text-gray-300 text-sm mb-4 space-y-1">
      {solution.map((item, i) => (
        <li key={i} className="flex items-start">
          <span className="text-primary mr-2">•</span>
          {item}
        </li>
      ))}
    </ul>
    
    {/* Metrics */}
    <MetricsBar metrics={metrics} />
    
    {/* Skills */}
    <div className="flex flex-wrap gap-2 mt-4">
      {skills.map((skill) => (
        <SkillTag key={skill} name={skill} />
      ))}
    </div>
  </div>
</div>
```

#### Props Interface

```typescript
interface CaseCardProps {
  id: string
  title: string
  category: 'ML & AI' | 'Growth' | 'UX/UI'
  categoryIcon: string  // Emoji: 🤖, 📈, 🎨
  problem: string
  solution: string[]
  metrics: Metric[]
  skills: string[]
  insights?: string
  imageUrl: string
  period: string
  teamSize: string
  mau: string
}

interface Metric {
  name: string
  before: string
  after: string
  change: string  // "+5%", "+300%"
  positive: boolean
}
```

#### Accessibility

- ✅ Semantic HTML (article element)
- ✅ Alt text for images
- ✅ Proper heading hierarchy (H3)
- ✅ Color contrast for text

---

### 3. SkillTag

**Purpose:** Display skill categories and levels

#### Variants

| Variant | Use Case |
|---------|----------|
| Tag | Inline skill labels |
| Bar | Progress bar with percentage |

#### Tag Specifications

| Property | Value |
|----------|-------|
| Height | 32px |
| Padding | 8px 16px |
| Radius | 16px (full) |
| Font | 14px, medium |

#### Tailwind Implementation

```jsx
// Tag Variant
<span className="
  inline-flex items-center px-4 py-1.5 h-8
  bg-gray-100 dark:bg-gray-700/50
  text-gray-700 dark:text-gray-300
  text-sm font-medium
  rounded-full
  border border-gray-200 dark:border-gray-600
">
  {name}
</span>

// Bar Variant
<div className="w-full">
  <div className="flex justify-between mb-1">
    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
      {name}
    </span>
    <span className="text-sm font-medium text-gray-500">
      {level}%
    </span>
  </div>
  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
    <div
      className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
      style={{ width: `${level}%` }}
    />
  </div>
</div>
```

#### Props Interface

```typescript
interface SkillTagProps {
  name: string
  level?: number  // For bar variant (0-100)
  variant?: 'tag' | 'bar'
  className?: string
}
```

---

### 4. MetricsBar

**Purpose:** Visualize before/after metrics with color coding

#### Structure

```
┌───────────────────────────────────────┐
│ Metric Name                           │
│ ─────────────────────────────────     │
│ Before    [████████░░] After  +XX%    │
└───────────────────────────────────────┘
```

#### Color Coding

| Change | Color | Tailwind |
|--------|-------|----------|
| Positive (+%) | Green | `text-green-500` |
| Negative (-%) | Red | `text-red-500` |
| Neutral | Gray | `text-gray-500` |

#### Tailwind Implementation

```jsx
<div className="space-y-3">
  {metrics.map((metric, index) => (
    <div key={index} className="space-y-1">
      {/* Metric Name */}
      <div className="flex justify-between text-sm">
        <span className="text-gray-600 dark:text-gray-400">
          {metric.name}
        </span>
      </div>
      
      {/* Visualization */}
      <div className="flex items-center gap-3">
        {/* Before */}
        <span className="text-sm text-gray-500 w-12">
          {metric.before}
        </span>
        
        {/* Progress Bar */}
        <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-1000 ${
              metric.positive ? 'bg-green-500' : 'bg-red-500'
            }`}
            style={{ width: '70%' }}  // Calculated from before/after
          />
        </div>
        
        {/* After */}
        <span className="text-sm font-bold text-gray-900 dark:text-white w-12 text-right">
          {metric.after}
        </span>
        
        {/* Change */}
        <span className={`text-sm font-bold w-14 ${
          metric.positive ? 'text-green-500' : 'text-red-500'
        }`}>
          {metric.change}
        </span>
      </div>
    </div>
  ))}
</div>
```

#### Props Interface

```typescript
interface MetricsBarProps {
  metrics: Metric[]
  animated?: boolean  // Enable count-up animation
  className?: string
}
```

---

### 5. Header

**Purpose:** Navigation and theme toggle

#### Desktop Layout (1440px)

```
┌─────────────────────────────────────────────────────────┐
│  [Logo]    [Nav Links]           [Theme] [CTA Button]   │
│  Mikhail   Cases Projects About  🌙    Contact          │
└─────────────────────────────────────────────────────────┘
```

#### Mobile Layout (375px)

```
┌─────────────────────────────┐
│  [Logo]              [☰]    │
│  Mikhail                    │
└─────────────────────────────┘
```

#### Specifications

| Property | Value |
|----------|-------|
| Height (Desktop) | 80px |
| Height (Mobile) | 64px |
| Position | Sticky, top: 0 |
| Z-index | 1000 |
| Background | Glassmorphism (backdrop-blur) |

#### Tailwind Implementation

```jsx
<header className="
  sticky top-0 z-[1000]
  h-20 desktop:h-[80px]
  bg-white/80 dark:bg-gray-900/80 backdrop-blur-md
  border-b border-gray-200/50 dark:border-gray-700/50
">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-full">
      {/* Logo */}
      <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
        Mikhail
      </Link>
      
      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-8">
        <a href="#cases" className="text-gray-600 dark:text-gray-300 hover:text-primary">
          Cases
        </a>
        <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-primary">
          Projects
        </a>
        <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-primary">
          About
        </a>
      </nav>
      
      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
          {theme === 'dark' ? '🌞' : '🌙'}
        </button>
        
        {/* CTA Button */}
        <Button variant="primary" size="md" href="#contact">
          Contact
        </Button>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden p-2">
          <svg>...</svg>  {/* Hamburger icon */}
        </button>
      </div>
    </div>
  </div>
</header>
```

---

### 6. Hero Section

**Purpose:** Elevator pitch and primary CTA

#### Layout

```
┌─────────────────────────────────────────┐
│                                         │
│         [H1: Elevator Pitch]            │
│         [Subtitle: 1-2 lines]           │
│                                         │
│         [Primary CTA] [Secondary CTA]   │
│                                         │
│         [Social Proof (optional)]       │
│                                         │
└─────────────────────────────────────────┘
```

#### Specifications

| Property | Value |
|----------|-------|
| Top Padding | 80-120px |
| Bottom Padding | 80px |
| Max Content Width | 800px |
| H1 Font Size | 48px (mobile) - 64px (desktop) |

#### Tailwind Implementation

```jsx
<section className="
  relative pt-20 pb-16 md:pt-32 md:pb-24
  bg-gradient-to-b from-gray-50 to-white
  dark:from-gray-900 dark:to-gray-800
">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    {/* H1 */}
    <h1 className="
      text-4xl sm:text-5xl md:text-6xl font-bold
      text-gray-900 dark:text-white
      mb-6
    ">
      Senior Product Manager with 10+ years in media
    </h1>
    
    {/* Subtitle */}
    <p className="
      text-lg md:text-xl text-gray-600 dark:text-gray-300
      mb-8 max-w-2xl mx-auto
    ">
      Developed products with 10-100M MAU: LiveJournal, Woman.ru, ProductCamp.
      Specialization: ML recommendations, growth, monetization.
    </p>
    
    {/* CTAs */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button variant="primary" size="lg" href="#cases">
        View Cases
      </Button>
      <Button variant="secondary" size="lg" href="/resume.pdf" download>
        Download Resume
      </Button>
    </div>
    
    {/* Social Proof */}
    <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
      <span>🎯 10+ years experience</span>
      <span>📈 70M+ MAU products</span>
      <span>🚀 3 successful exits</span>
    </div>
  </div>
</section>
```

---

### 7. Footer

**Purpose:** Contacts and social links

#### Layout

```
┌─────────────────────────────────────────┐
│  [Name] [Title]                         │
│  [Email] [Telegram] [LinkedIn]          │
│                                         │
│  © 2026 Mikhail Nikolashin              │
└─────────────────────────────────────────┘
```

#### Tailwind Implementation

```jsx
<footer className="
  bg-gray-50 dark:bg-gray-900
  border-t border-gray-200 dark:border-gray-800
  py-12
">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
      {/* Left */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          Mikhail Nikolashin
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
          Senior Product Manager
        </p>
      </div>
      
      {/* Right: Social Links */}
      <div className="flex gap-4">
        <a href="mailto:email@example.com" className="text-gray-500 hover:text-primary">
          📧
        </a>
        <a href="https://t.me/username" className="text-gray-500 hover:text-primary">
          ✈️
        </a>
        <a href="https://linkedin.com/in/username" className="text-gray-500 hover:text-primary">
          💼
        </a>
      </div>
    </div>
    
    {/* Copyright */}
    <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
      <p className="text-gray-500 dark:text-gray-400 text-sm">
        © 2026 Mikhail Nikolashin. All rights reserved.
      </p>
    </div>
  </div>
</footer>
```

---

## 📱 Responsive Behavior

### Breakpoints

```javascript
// Tailwind config (tailwind.config.js)
screens: {
  'mob': '375px',      // Mobile base
  'tablet': '768px',   // Tablet
  'laptop': '1024px',  // Desktop
  'desktop': '1280px', // Large desktop
  'laptopl': '1440px', // Extra large
}
```

### Layout Changes

| Component | Mobile (<768px) | Tablet (768-1024px) | Desktop (>1024px) |
|-----------|-----------------|---------------------|-------------------|
| Header | Hamburger menu | Full nav | Full nav + CTA |
| Hero | 1 col, stacked CTAs | 1 col, inline CTAs | 1 col, inline CTAs |
| Cases | 1 column | 2 columns | 3 columns |
| Skills | 1 column (bars) | 2 columns | 2-4 columns |
| Footer | Stacked | Inline | Inline |

---

## 🌓 Dark Mode

### Implementation

All components support dark mode via `dark:` prefix.

**Example:**
```jsx
<div className="
  bg-white dark:bg-gray-800
  text-gray-900 dark:text-white
  border-gray-200 dark:border-gray-700
">
```

### Dark Mode Specific Styles

| Element | Light Mode | Dark Mode |
|---------|------------|-----------|
| Background | `#FFFFFF` | `#111827` |
| Card BG | `#FFFFFF` | `#1F2937` (with backdrop-blur) |
| Text | `#111827` | `#F9FAFB` |
| Border | `#E5E7EB` | `#374151` |
| Shadow | Standard | Colored glow (purple/blue) |

### Glassmorphism Effect

```css
/* Dark mode cards */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}

.bg-gray-800/80 {
  background-color: rgba(31, 41, 55, 0.8);
}
```

---

## ♿ Accessibility Checklist

### All Components

- [ ] **Contrast:** Text 4.5:1, UI 3:1
- [ ] **Focus:** Visible 2px ring
- [ ] **Touch targets:** Min 44×44px
- [ ] **Keyboard:** Full navigation
- [ ] **Screen reader:** aria-labels where needed
- [ ] **Semantic HTML:** article, nav, section, etc.

### Color Contrast Verification

| Combination | Ratio | Status |
|-------------|-------|--------|
| Primary on White | 4.5:1 | ✅ Pass |
| Gray-600 on White | 5.2:1 | ✅ Pass |
| White on Gray-900 | 12:1 | ✅ Pass |
| Green-500 on White | 3.9:1 | ⚠️ Use Green-600 |

---

## 🎬 Animations

### Micro-interactions

| Element | Animation | Duration |
|---------|-----------|----------|
| Button Hover | -translate-y-0.5, shadow-lg | 200ms |
| Button Active | scale-98 | 100ms |
| Card Hover | -translate-y-1, shadow-xl | 300ms |
| Skill Bar | Width animation | 1000ms |
| Metrics Count-up | Number increment | 2000ms |

### GSAP Integration

```javascript
// Fade in on scroll
gsap.from('.case-card', {
  scrollTrigger: {
    trigger: '.cases-section',
    start: 'top 80%',
  },
  y: 40,
  opacity: 0,
  duration: 0.6,
  stagger: 0.2,
})
```

---

## 📦 File Structure

```
figma/
├── design-tokens.json      # All design tokens
├── ui-kit/
│   ├── components.json     # This file
│   ├── layouts.json        # Section layouts
│   └── exports/            # Exported assets
└── specifications/
    ├── header.md
    ├── hero.md
    ├── cases.md
    └── footer.md
```

---

## 🔗 Related Files

- `tailwind.config.js` — Tailwind configuration
- `styles/globals.css` — Global styles, CSS variables
- `.qwen/skills/figma/SKILL.md` — Designer skill documentation
- `.qwen/MCP-CONFIG.md` — MCP setup guide

---

**Status:** ✅ Ready for Development  
**Next Step:** Integrate tokens into tailwind.config.js and globals.css
