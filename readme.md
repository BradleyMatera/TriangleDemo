# leaf-js — Next.js 16 WebGPU Demo

A complete rebuild of the original static `leaf-js` showcase delivered with **Next.js 16 (App Router), Bun, Tailwind CSS, and NextUI**. The original content, disclaimers, and technology highlights are preserved while introducing a premium UI, reusable component architecture, and WebGPU-powered interactions.

> **Disclaimer**  
> This repository remains a demo implementation. The underlying libraries, concepts, and WebGPU techniques belong to their respective creators. Please contact the upstream maintainers of `leaf-js` for official support or feature requests.

## ✨ What’s new

- Bold hero layout with layered gradients, motion cues, and responsive typography.
- Component-driven architecture (NextUI + Tailwind) for consistent spacing, theming, and accessibility.
- Live WebGPU triangle render integrated as a client component with graceful fallback messaging.
- Interactive patterns: tabs for architecture, accordion FAQs, cards for technology highlights, and theme toggle.
- GitHub Pages–ready static export (`docs/` + `.nojekyll`) powered by Bun scripts.

## 🧰 Tech stack

- **Runtime & Package Manager:** [Bun](https://bun.sh/)
- **Framework:** [Next.js 16](https://nextjs.org/) with the App Router (TypeScript-first)
- **Design System:** [NextUI](https://nextui.org/) + Tailwind CSS + Next Themes
- **Animation & Icons:** Framer Motion (via NextUI) & Lucide icons
- **Linting & Types:** ESLint (`next/core-web-vitals`) and strict TypeScript configuration

## 🚀 Getting started

```bash
# Install dependencies
bun install

# Start local development
bun run dev

# Run lint checks
bun run lint

# Build production output
bun run build

# Generate GitHub Pages export (docs/)
bun run build:pages
```

The app uses the Next.js App Router. Most sections render on the server, while WebGPU demos and theme toggles are client components.

## 📂 Project structure

```
app/                     # App Router layouts and pages
components/              # NextUI/Tailwind building blocks
  sections/              # Page-level sections (hero, demo, FAQ, etc.)
  providers/             # Theme providers for NextUI + next-themes
lib/                     # Shared utilities and WebGPU setup logic
public/                  # Static assets (.nojekyll for GitHub Pages)
```

## 🧱 Architecture highlights

- **WebGPU integration:** `lib/webgpu/triangle-demo.ts` now wraps two reference implementations—Hello Triangle and Two Cubes—adapted from the official [WebGPU Samples](https://webgpu.github.io/webgpu-samples/) gallery, with React-ready cleanup and responsive sizing.
- **Design system cohesion:** Shared helpers (`lib/utils.ts`, `components/ui/*`) ensure consistent typography, spacing, and gradient treatments.
- **Static export:** `next.config.ts` opts into `output: "export"` and handles GitHub Pages base paths. The `build:pages` script exports into `docs/` and copies `.nojekyll`.
- **Theme support:** `ThemeProvider` combines NextUI and `next-themes` for automatic light/dark modes with smooth transitions.

## 🌐 Deployment

1. Run `bun run build:pages`.
2. Commit and push the generated `docs/` folder along with `.nojekyll`.
3. Configure GitHub Pages to serve from the `docs/` directory on the `main` branch.

The script regenerates `docs/` on each build, so ensure the directory is tracked in version control if you publish the site.

## ❓ FAQs

The on-page FAQ component mirrors the original repo’s intent—clarifying that this is a demo, why WebGPU is required, and how to deploy to GitHub Pages.

## 📌 Attribution

All libraries, frameworks, and major code concepts utilized here are the intellectual property of their respective creators. This project is strictly for educational and illustrative purposes.

---

Questions about how the demo works? Feel free to explore the source and roadmap. For anything related to the official `leaf-js` project, please reach out to the upstream maintainers. Enjoy exploring WebGPU in a modern Next.js experience!
