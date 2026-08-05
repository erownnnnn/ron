# Aaron Bryan Rollorata — Portfolio

A dark, premium editorial portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Structure

```
src/
  app/
    layout.tsx      Root layout, fonts, metadata
    page.tsx         Assembles all sections
    globals.css       Design tokens (colors, fonts, utility classes)
  components/
    Navbar.tsx
    Hero.tsx          Giant background typography + portrait + stats
    Projects.tsx       Selected projects grid
    Skills.tsx         Education & Skills
    WorkProcess.tsx     5-step vertical timeline
    Quote.tsx
    Contact.tsx
    Footer.tsx
  lib/
    data.ts            All editable content: nav links, stats, projects, skills, contact info
public/
  images/portrait.png  Hero portrait
```

## Editing content

Nearly everything (project list, skills, contact links, process steps) lives in `src/lib/data.ts` — update it there rather than hunting through components.

## Notes

- Fonts (Bebas Neue, Inter, Space Grotesk) are self-hosted via `@fontsource` packages, so the site works fully offline with no external font requests.
- Project preview cards use generated SVG patterns as placeholders since no real screenshots were provided — swap in real project screenshots by replacing the `CardPattern` logic in `Projects.tsx` with `<Image>` tags pointing to files in `public/images/`.
