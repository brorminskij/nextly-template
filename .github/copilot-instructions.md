## Purpose

This file tells AI coding assistants how this repository is organized and what conventions to follow to be immediately productive.

## Big picture

- Framework: Next.js (app directory) + TailwindCSS. The app root is `src/app` and pages/components live under `src`.
- Entry points: `src/app/layout.tsx` wraps the app with `ThemeProvider` and includes `Navbar`, `Footer`, and `PopupWidget`.
- UI libraries: `@headlessui/react` (Disclosure used for mobile menus), `@heroicons/react` for icons, and `framer-motion` for animation in some components.

## Key files & patterns (examples)

- `src/app/layout.tsx` — global layout; uses `ThemeProvider attribute="class"` for dark mode. Example import: `import { Navbar } from "@/components/Navbar";`
- `src/components/Navbar.tsx` — a client component (note the top-line `"use client"`) that uses `Disclosure` for the mobile menu and `next/image` for the logo.
- `src/components/data.js` — stores section data (images + JSX icons). Icons are provided as JSX (e.g. `<FaceSmileIcon />`) and images are imported from `public/img`.
- `src/components/*` — keep components small and colocated; prefer named exports (e.g., `export const Navbar = ...`).

## Conventions agents should follow

- Path alias: `@/*` maps to `./src/*` (see `tsconfig.json`). Use imports like `@/components/Name` when editing or adding code.
- Client vs Server components: any component that uses hooks, browser APIs or local state must include `"use client"` at the very top (example: `src/components/Navbar.tsx`).
- Theming: the app uses `next-themes` with `attribute="class"`. Use Tailwind `dark:` variants on elements and do not assume CSS variables unless explicitly added.
- Static assets: images are stored in `public/img`. Components import images directly (e.g. `import img from "../../public/img/benefit-one.png"`) or use `next/image` with `src="/img/…"`.
- UI primitives: prefer `headlessui` patterns already in use (e.g., `Disclosure` for menus). Match their accessibility props and state usage.

## Build / dev / lint workflows

- Install: `npm install` (or `yarn install`).
- Dev server: `npm run dev` (runs `next dev`).
- Build: `npm run build` (runs `next build`).
- Start (production): `npm run start` (runs `next start`).
- Lint: `npm run lint` (runs `next lint`).

These are defined in `package.json`.

## Things to watch for / gotchas

- Files in `src/components` are mixed TypeScript and JavaScript; `allowJs` is enabled in `tsconfig.json` so adding JS is acceptable but prefer `.tsx` for React components.
- `data.js` contains JSX: treat it as React code, not plain JSON.
- Keep named exports consistent — layout imports components as named imports (e.g., `{ Navbar }`). Changing exports to default without updating imports will break builds.
- Dark-mode behavior depends on `ThemeProvider` in `layout.tsx`; changing that wrapper will affect the whole UI.

## Where to make changes

- Add new shared UI components to `src/components` and export them as named exports. Use the `@/components/...` path when importing.
- Page-level content lives in `src/app` subfolders (e.g., `src/app/about/page.tsx`). Follow the `app/` routing conventions.

## Helpful references inside the repo

- `src/app/layout.tsx` — global providers and component wiring
- `src/components/Navbar.tsx` — example client component with HeadlessUI
- `src/components/data.js` — example pattern for content-as-JSX
- `package.json` — top-level scripts
- `tsconfig.json` — path alias `@/* -> ./src/*`

## Do not assume

- Do not assume server components by default; look for `"use client"` when adding state or hooks.
- Do not assume a specific Node version from this repo (use the environment you normally use for Next.js 14).

---
If anything here is unclear or you want more detail about a specific area (routing, theming, or how images are used), tell me which section to expand and I will update this file.
