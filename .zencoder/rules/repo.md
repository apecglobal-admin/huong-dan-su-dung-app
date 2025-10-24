# Repository Reference

## Project Overview
- **Name**: my-v0-project (Next.js 15 + React 19)
- **Description**: Marketing/landing experience for ApecSpace with interactive hero, banners, modals, and resource navigation. Tailwind CSS powers styling and Radix UI-based components (Shadcn).
- **Primary Language**: TypeScript with React Server Components in the `app/` directory.

## Tech Stack
- **Framework**: Next.js 15 App Router
- **UI**: Tailwind CSS 4 (with tailwindcss-animate), Shadcn UI primitives, Radix UI
- **State/Form**: React Hook Form + Zod (validation)
- **Charts/Carousel**: Recharts, Embla
- **Misc**: next-themes for theming, sonner for toasts

## Key Scripts
1. `npm run dev` – Start local development server
2. `npm run build` – Production build
3. `npm run start` – Serve production build
4. `npm run lint` – Run ESLint checks

## Important Paths
- `app/page.tsx` – Main landing page (v2)
- `app/v1/page.tsx` – Legacy/alternate landing
- `components/` – Shared UI and feature components (hero, modals, sidebar, etc.)
- `components/ui/` – Generated Shadcn UI primitives
- `hooks/` – Custom hooks (`use-mobile`, `use-toast`)
- `lib/` – Utilities and navigation config
- `public/` – Static assets, screenshots, instructional images (HDSD)

## Styling
- Global styles in `styles/globals.css`
- Tailwind config via `tailwind.config.mjs` (implicit through Tailwind 4 preset)
- Animations powered by `tailwindcss-animate` and custom utility classes

## Deployment Notes
- Ensure environment variables (if any) are configured in Next.js runtime (none detected by default)
- Build output resides in `.next/`

## Testing & Quality
- ESLint is configured; no additional test suites detected in repo
- TypeScript strictness not explicitly specified but TS 5+ is installed

Keep this guide updated when major architectural changes occur.