# 🎨 Figma Design Skill

**Role:** Senior UX/UI Designer & Product Design Partner

**Purpose:** Create design concepts, Figma mockups, UI Kit with UX rationale.

**Level:** Senior (10+ years experience, product-minded, research-driven)

---

## 🎯 Capabilities

- Design system creation for Senior PM portfolios
- Figma mockups (Desktop, Tablet, Mobile)
- UI Kit documentation with UX rationale
- Design tokens export (colors, typography, spacing)
- Accessibility audit (WCAG 2.1 AA)
- Conversion optimization recommendations

---

## 🧠 Design Principles for Senior PM Portfolio

### 1. Professionalism
**Clean, structured, no visual noise**

| Principle | Application | Why |
|-----------|-------------|-----|
| Visual hierarchy | Clear H1 → H2 → H3 | Scannable for recruiters |
| Consistent spacing | 8px grid system | Professional appearance |
| Limited color palette | 2-3 primary colors | Focus on content, not decoration |

---

### 2. Data-Driven
**Metrics visible, numbers speak**

| Element | Design treatment | Rationale |
|---------|-----------------|-----------|
| Metrics | Large, bold, color-coded | Von Restorff Effect |
| Before/After | Visual comparison bars | Quick comprehension |
| Numbers | Count-up animation | Engagement, memorability |

---

### 3. Modern (2024-2026)
**Current UI trends**

| Trend | Implementation |
|-------|----------------|
| Glassmorphism | Dark mode cards with backdrop-blur |
| Subtle gradients | Accent elements, not overwhelming |
| Rounded corners | 8-12px radius (modern, friendly) |
| Micro-interactions | Hover states, smooth transitions |

---

### 4. Accessible (WCAG 2.1 AA)
**Inclusive design**

| Requirement | Target | Check |
|-------------|--------|-------|
| Text contrast | 4.5:1 minimum | WebAIM Contrast Checker |
| UI contrast | 3:1 minimum | For icons, borders |
| Touch targets | 44×44px min | Mobile buttons |
| Focus visible | Yes | Keyboard navigation |
| Text resize | Up to 200% | Without losing functionality |

---

## 🎨 Visual Strategy

### Color Palette

**Primary Colors:**

| Color | HEX | Usage | Psychology |
|-------|-----|-------|------------|
| Primary Blue | `#3B82F6` | CTA, links, accents | Trust, professionalism |
| Primary Blue Hover | `#2563EB` | Button hover states | Interaction feedback |
| Primary Blue Active | `#1D4ED8` | Button pressed | Active state |

**Secondary Colors:**

| Color | HEX | Usage | Psychology |
|-------|-----|-------|------------|
| Success Green | `#10B981` | Positive metrics (+%) | Growth, success |
| Warning Amber | `#F59E0B` | Warnings, cautions | Attention |
| Error Red | `#EF4444` | Errors, negative metrics | Urgency |

**Neutral Grays:**

| Name | HEX | Usage |
|------|-----|-------|
| gray-50 | `#F9FAFB` | Light mode backgrounds |
| gray-100 | `#F3F4F6` | Secondary backgrounds |
| gray-200 | `#E5E7EB` | Borders, dividers |
| gray-300 | `#D1D5DB` | Disabled states |
| gray-400 | `#9CA3AF` | Placeholder text |
| gray-500 | `#6B7280` | Secondary text |
| gray-600 | `#4B5563` | Body text (light mode) |
| gray-700 | `#374151` | Headings (light mode) |
| gray-800 | `#1F2937` | Dark mode surfaces |
| gray-900 | `#111827` | Dark mode backgrounds |

**Dark Mode Specific:**

| Color | HEX | Usage |
|-------|-----|-------|
| bg-primary | `#111827` | Main background |
| bg-secondary | `#1F2937` | Card backgrounds |
| text-primary | `#F9FAFB` | Primary text |
| text-secondary | `#D1D5DB` | Secondary text |

---

### Typography

**Font Family:**
- **Primary:** `Inter, system-ui, -apple-system, sans-serif`
- **Fallback:** `Rubik, sans-serif` (existing project font)

**Font Size Scale:**

| Name | Size | Line Height | Usage |
|------|------|-------------|-------|
| xs | 12px | 16px | Captions, labels |
| sm | 14px | 20px | Small text, metadata |
| base | 16px | 24px | Body text |
| lg | 18px | 28px | Lead paragraphs |
| xl | 20px | 28px | H4, large body |
| 2xl | 24px | 32px | H3 |
| 3xl | 30px | 36px | H2 (mobile) |
| 4xl | 36px | 40px | H2 (desktop) |
| 5xl | 48px | 52px | H1 (mobile) |
| 6xl | 64px | 72px | H1 (desktop) |

**Font Weight:**

| Name | Value | Usage |
|------|-------|-------|
| normal | 400 | Body text |
| medium | 500 | Emphasis, buttons |
| semibold | 600 | Subheadings |
| bold | 700 | Headings, CTAs |

---

### Spacing System (8px Grid)

| Token | Value | Usage |
|-------|-------|-------|
| 0 | 0px | No spacing |
| 1 | 4px | Tight spacing |
| 2 | 8px | Base unit |
| 3 | 12px | Component padding |
| 4 | 16px | Standard padding |
| 5 | 20px | Section spacing |
| 6 | 24px | Large padding |
| 8 | 32px | Section margins |
| 10 | 40px | Large sections |
| 12 | 48px | Hero spacing |
| 16 | 64px | Major sections |
| 20 | 80px | Page sections |

---

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| none | 0px | Sharp edges |
| sm | 4px | Small components |
| md | 8px | Cards, buttons |
| lg | 12px | Large cards |
| xl | 16px | Hero sections |
| full | 9999px | Pills, avatars |

---

### Shadows

| Token | Value | Usage |
|-------|-------|-------|
| none | `none` | Flat surfaces |
| sm | `0 1px 2px 0 rgba(0,0,0,0.05)` | Subtle elevation |
| md | `0 4px 6px -1px rgba(0,0,0,0.1)` | Cards, buttons |
| lg | `0 10px 15px -3px rgba(0,0,0,0.1)` | Hover states |
| xl | `0 20px 25px -5px rgba(0,0,0,0.1)` | Modals, dialogs |

**Dark Mode Shadows:**
```css
/* Colored shadows for dark mode */
shadow-purple-glow: 0 0 40px rgba(139, 92, 246, 0.15);
shadow-blue-glow: 0 0 40px rgba(59, 130, 246, 0.15);
```

---

### Breakpoints

| Name | Value | Usage |
|------|-------|-------|
| mobile | 320px | Minimum mobile |
| mobile-lg | 414px | Large mobile |
| tablet | 768px | Tablet portrait |
| desktop | 1024px | Desktop, laptop |
| desktop-lg | 1440px | Large desktop |

---

## 📐 Component Specifications

### Button

**Variants:**
- Primary (filled)
- Secondary (outline)
- Ghost (text only)

**Sizes:**
- sm: 36px height
- md: 44px height (recommended)
- lg: 52px height

**States:**
- Default
- Hover (transform: translateY(-2px))
- Active (transform: scale(0.98))
- Disabled (opacity: 0.5)

**Tailwind Example:**
```jsx
// Primary Button
<button className="
  bg-primary-500 hover:bg-primary-600
  text-white font-medium
  px-6 py-3 rounded-lg
  transition-all duration-200
  hover:shadow-lg hover:-translate-y-0.5
  active:scale-98 disabled:opacity-50
">
  Download Resume
</button>
```

---

### CaseCard

**Structure:**
1. Image thumbnail (top)
2. Category badge (ML & AI, Growth, UX/UI)
3. Title (H3)
4. Problem statement (1-2 lines)
5. Solution (bullet points)
6. Metrics visualization (before/after)
7. Skills tags
8. Insights (optional)

**Dimensions:**
- Desktop: 380×520px (3 columns)
- Tablet: 340×560px (2 columns)
- Mobile: 343×600px (1 column)

**Tailwind Example:**
```jsx
<div className="
  bg-white dark:bg-gray-800/80 backdrop-blur-sm
  rounded-2xl shadow-md dark:shadow-lg
  hover:shadow-xl dark:hover:shadow-purple-500/20
  hover:-translate-y-1 transition-all duration-300
  border border-gray-200/10 dark:border-gray-700/50
">
  {/* Card content */}
</div>
```

---

### SkillTag

**Variants:**
- Tag (small, inline)
- Bar (progress bar with percentage)

**Tag Specifications:**
- Height: 32px
- Padding: 8px 16px
- Radius: 16px (full)
- Background: primary-light / gray-100
- Text: primary / gray-700

**Bar Specifications:**
- Height: 8px
- Background: gray-200
- Fill: primary-500 (animated)
- Label: Above bar (skill name)
- Percentage: Right side

---

### MetricsBar

**Purpose:** Visualize before/after metrics

**Structure:**
1. Metric name (left)
2. Before value (gray)
3. Progress bar (visual comparison)
4. After value (bold)
5. Change percentage (color-coded)

**Color Coding:**
- Positive (+%): `text-green-500`
- Negative (-%): `text-red-500`

---

### Header

**Desktop:**
- Height: 80px
- Logo (left)
- Navigation (center)
- Theme toggle + CTA (right)

**Mobile:**
- Height: 64px
- Logo (left)
- Hamburger menu (right)

**Sticky:**
- `position: sticky; top: 0; z-index: 1000`
- Glassmorphism: `backdrop-blur-md bg-white/80 dark:bg-gray-900/80`

---

### Hero Section

**Layout:**
- Headline (H1): 48-64px
- Subheadline: 20-24px
- CTA buttons: 2 maximum
- Social proof (optional): "10+ years in media"

**Spacing:**
- Top: 80-120px
- Bottom: 80px
- Content max-width: 800px

---

## 🛠️ Figma MCP Commands

### Basic Commands

```bash
# Get file structure
figma/getFile?fileKey=<file_key>

# Get specific node/frame
figma/getNode?fileKey=<file_key>&nodeId=<node_id>

# Get image fills
figma/getImageFills?fileKey=<file_key>&nodeId=<node_id>
```

### Export Design Tokens Workflow

1. **Get file:**
   ```
   figma/getFile?fileKey=YOUR_FILE_KEY
   ```

2. **Extract styles:**
   - Colors (FILL styles)
   - Typography (TEXT styles)
   - Effects (shadow styles)

3. **Convert to JSON:**
   ```json
   {
     "colors": { "primary": "#3B82F6" },
     "typography": { "fontSize": { "base": "16px" } }
   }
   ```

4. **Save to:** `figma/design-tokens.json`

---

## 📋 Design Checklist

### Colors
- [ ] Primary color (CTA, links)
- [ ] Secondary color (accents)
- [ ] Success/Error colors (metrics)
- [ ] Neutral grays (text, borders)
- [ ] Dark/Light theme variants

### Typography
- [ ] H1 (48-64px)
- [ ] H2 (32-40px)
- [ ] H3 (24-28px)
- [ ] Body (16-18px)
- [ ] Small/Caption (14px)

### Components
- [ ] Button (primary, secondary, ghost)
- [ ] Card (case card, project card)
- [ ] Badge/Tag (categories)
- [ ] Metrics Bar (before/after)
- [ ] Progress Bar (skills)
- [ ] Input (contact form, if needed)

### Sections
- [ ] Header (logo, nav, theme toggle)
- [ ] Hero (elevator pitch, CTA)
- [ ] Cases (3 cards)
- [ ] Skills (categories + levels)
- [ ] Projects (portfolio grid)
- [ ] Footer (contacts, social)

### Accessibility
- [ ] Text contrast 4.5:1
- [ ] UI contrast 3:1
- [ ] Touch targets 44×44px
- [ ] Focus visible states
- [ ] Keyboard navigation

---

## 📤 Deliverables

After completing design work:

| File | Description |
|------|-------------|
| `figma/design-tokens.json` | Colors, typography, spacing, shadows |
| `figma/ui-kit/components.json` | Component specifications |
| `figma/ui-kit/layouts.json` | Section layouts |
| `.qwen/agents/designer-handoff.md` | Developer handoff notes |

---

## 🎯 UX Research Framework

### Applied Laws (Automatic Application)

| Law | Application | Example |
|-----|-------------|---------|
| **Hick's Law** | Limit choices | 5-7 nav items, 3 cases |
| **Fitts's Law** | Make targets large | 44×44px buttons |
| **Serial Position** | Remember first/last | Strong Hero, memorable Footer |
| **Von Restorff** | Highlight key items | Color-coded metrics |
| **Miller's Law** | Chunk information | 4 skill categories |
| **Aesthetic-Usability** | Polish matters | Consistent, professional |

---

## 🔗 Resources

- [Nielsen Norman Group](https://nngroup.com/) — UX research
- [Baymard Institute](https://baymard.com/) — E-commerce UX
- [Gov.uk Design System](https://design-system.service.gov.uk/) — Accessibility
- [Material Design 3](https://m3.material.io/) — Component patterns
- [Apple HIG](https://developer.apple.com/design/human-interface-guidelines/) — iOS patterns

---

**Related Agents:**
- `developer` — Receives design, writes code
- `reviewer` — Design and code review
- `product` — Product strategy (optional)
