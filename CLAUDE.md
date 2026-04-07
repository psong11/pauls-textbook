@AGENTS.md

# Paul's Science Portfolio

## What This Is
A public-facing interactive science portfolio that visualizes concepts across 23 scientific disciplines. It doubles as a study tool for pre-med coursework and the MCAT, and as a differentiator for medical school applications. The impressiveness should be a side effect of genuine depth, not the goal.

Repo: https://github.com/psong11/pauls-textbook.git
Hosted: Vercel (not yet deployed)

## How to Run
```bash
npm run dev   # starts on localhost:3000
npm run build # production build
```

## Architecture

### Tech Stack
| Layer | Tool | Purpose |
|---|---|---|
| Framework | Next.js (App Router) + TypeScript | SSG, routing, React |
| 2D Data Viz | D3.js + Visx | Data-driven visualizations |
| Interactive Math | Mafs | Educational math interactives |
| 3D | React Three Fiber + Drei | Molecular structures, physics sims |
| Animation | GSAP + ScrollTrigger | Scroll-driven animation |
| Smooth Scroll | Lenis | Buttery scroll feel |
| Motion | Framer Motion | UI transitions |
| Math Rendering | KaTeX | LaTeX equations |
| Styling | Tailwind CSS | Utility-first CSS |

### File Structure
```
app/
  page.tsx                          # Landing page (design TBD — Fork 1)
  categories/[category]/page.tsx    # Category page with TOC
  categories/[category]/[topic]/    # Individual visualization pages
components/
  TableOfContents.tsx               # Modular TOC display component
  ui/                               # Reusable UI components
  visualizations/                   # Shared viz building blocks
content/
  index.ts                          # Content registry — add new categories here
  chemistry.ts                      # Per-category TOC data files
  organic-chemistry.ts
  physics.ts
  biochemistry.ts
lib/
  categories.ts                     # 23 categories, 5 groups, metadata
  types.ts                          # Shared TypeScript types
```

### Key Data Flow
- Categories are defined in `lib/categories.ts` (slug, name, group, description, icon)
- TOC content lives in `content/<category-slug>.ts` as structured data
- `content/index.ts` maps category slugs to their content — add one line here when creating a new category's TOC
- The `TableOfContents` component renders any `CategoryContent` object — it's decoupled from specific categories

## Design Decisions (Locked)

### Categories
23 categories in 5 groups: Core Sciences, Life Sciences, Quantitative, Technical, Interdisciplinary. Full list in `lib/categories.ts`.

### Topic Curation Principles
- **8-10 topics max per category.** Less is more.
- **Prioritize visualization potential.** Every topic should have a clear interactive concept behind it.
- **Prioritize story value.** What would make an admissions officer pause and explore?
- **MCAT weight matters** but is secondary to the above two.
- **Cut pure memorization.** Nomenclature, solubility rules, vitamin lists — these don't visualize well and don't impress.
- **Merge small topics** into broader ones rather than having many thin pages.

### Target Audience Emotions (in order)
1. Surprise — "One person made this?"
2. Curiosity — pull them in, they start clicking
3. Respect — the depth is real
4. Trust — clean design, accurate science
5. Inspiration — "This makes me want to learn too"

**Avoid:** feeling like showing off. Everything exists to teach.

## Open Design Forks
These decisions have NOT been made yet:

1. **Landing Page Style** — (A) Scrollytelling (B) Grid gallery (C) Minimal
2. **Navigation** — (A) Sidebar (B) Top nav (C) No traditional nav
3. **Category Page Layout** — (A) One hero viz (B) Multiple smaller (C) Mix
4. **Content Format** — (A) Pure interactive (B) MDX-driven (C) Hybrid

## Current State
- Project scaffolded and building cleanly
- 4 Core Sciences have TOCs: Chemistry, Organic Chemistry, Physics, Biochemistry
- 19 other categories show "coming soon" placeholder
- No actual visualizations built yet — topic pages are placeholder
- No landing page design yet

## Workflow
- **Branch-per-feature**: create a feature branch for each piece of work, PR into main
- **Paul drives vision, Claude architects and engineers**
- **Verify builds before committing** (`npm run build`)

## Related Project
There is a separate private planning dashboard at `~/Documents/personal_projects/med-planning-dashboard` (Vite + React + SQLite). That is a different project — do not confuse the two.
