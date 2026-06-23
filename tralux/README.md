# Tralux

A multi-page, animation-rich marketing site for **Tralux** — a fictional luxury design & engineering studio. Built as a showcase of the [ui-ux-pro-max](./.claude/skills/ui-ux-pro-max) design intelligence skill driving real design decisions.

## Stack

| Concern        | Choice                                          |
| -------------- | ----------------------------------------------- |
| Framework      | Next.js 16 (App Router, Turbopack)              |
| Language       | TypeScript                                       |
| Styling        | Tailwind CSS v4 (CSS `@theme` tokens)           |
| Animation      | Motion (`motion/react`, formerly Framer Motion) |
| Fonts          | Playfair Display + Inter (`next/font`)          |

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (static)
npm run start    # serve the production build
```

## Design system

Theme: **matte black & white** — monochrome luxury. No pure `#000`; white is the
only "accent" (contrast, not hue). Tokens live in [`app/globals.css`](./app/globals.css):

- Backgrounds `#0a0a0a / #0f0f0f / #161616`, foreground `#f5f5f5`, muted `#a1a1a1`
- Glassmorphism surfaces (`.glass`) with white hairline borders, `16px` radius
- Easing `cubic-bezier(0.16, 1, 0.3, 1)` across all motion

### Project structure

```
app/
├── _components/      # Reveal, Stagger, AmbientBlobs, KineticHeadline, Navbar, Footer, ui
├── about/ services/ pricing/ contact/   # routes (page.tsx each)
├── layout.tsx        # fonts, Navbar, Footer, metadata
├── page.tsx          # home
└── globals.css       # design tokens + reduced-motion
lib/content.ts        # all copy/data
```

Pages are React Server Components by default; only animated/interactive pieces
(`_components/*` with `"use client"`, `contact/ContactForm.tsx`) ship client JS.

## Accessibility & motion

Motion follows the skill's UX guardrails:

- **`prefers-reduced-motion` respected** everywhere — every animation component
  checks `useReducedMotion()` and the global CSS neutralizes transitions;
  content always renders fully visible.
- **No scroll-jacking** — reveals use `whileInView` (`once: true`), not pinned scroll.
- **1–2 key elements animated per viewport** to avoid excessive motion.
- Form inputs use real `<label>`s, the menu button has `aria-label` / `aria-expanded`,
  and the contact form shows explicit submit + success feedback.

## How the skill drove the design

This build is traceable to specific [ui-ux-pro-max](./.claude/skills/ui-ux-pro-max)
queries. Re-run any of them:

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --domain <domain>
```

| Decision                          | Skill query / source                                         |
| --------------------------------- | ------------------------------------------------------------ |
| Luxury positioning + style        | `"premium SaaS product marketing"` → **Luxury/Premium Brand** (product) |
| Glassmorphism + minimalism        | `"premium animated marketing"` → styles.csv                  |
| Black/white palette (from gold)   | `"luxury premium brand black"` → colors.csv (desaturated)    |
| Playfair Display + Inter          | `"luxury premium elegant serif"` → typography.csv "Classic Elegant" |
| Page section order                | `"storytelling feature-rich landing"` → landing.csv "Feature-Rich Showcase" |
| Reduced-motion / no scroll-jack   | `"animation reduced motion"` → ux-guidelines.csv (Severity: High) |
| Pricing cards over wide tables    | `"pricing table tiers"` → ux-guidelines.csv                  |
| Labeled inputs + submit feedback  | `"form validation accessibility"` → ux-guidelines.csv        |

## Notes

- Content is placeholder; Tralux is a fictional brand for this showcase.
- The `.claude/skills/ui-ux-pro-max/` folder is committed with the project (real
  files, not symlinks) so the skill travels with the repo.
