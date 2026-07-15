# Triangle Shader Lab

Triangle Shader Lab is a focused WebGPU walkthrough that keeps the canonical "hello triangle" sample front and center while adding the textured cube variant for contrast. The UI is intentionally minimal: it frames the live render, spotlights the two TypeScript files that power it, and documents how the pipeline is stitched together.

## 🔻 Core Focus

- **Three canonical demos on the landing page.** Toggle between the hello triangle, two-cubes, and textured-cube samples to compare pipelines while the canvas stays front and center.
- **A full WebGPU Lab in `/lab`.** Explore 16 interactive lessons, a WGSL editor, pipeline visualizer, geometry lab, lighting and texture modules, shader playground, GPU inspector, performance analytics, and built-in documentation.
- **Source-first exploration.** Every demo maps to code in `lib/webgpu/triangle-demo.ts` and the sample files under `lib/webgpu/samples/`, so you can correlate the UI with the code that drives the GPU.
- **Hands-on learning.** Lessons unlock as you progress, or toggle "Unlock all lessons" in Settings to explore freely.

## 🔗 Links

- Live demo: <https://bradleymatera.github.io/TriangleDemo/>
- Repository: <https://github.com/BradleyMatera/TriangleDemo>

## ⚠️ Independence Statement

This repository is an independent experimental branch derived from an older public fork of leaf-js. It has no connection, endorsement, or affiliation with the original author or maintainers of that upstream project. All files and structures have been rewritten from scratch; nothing here should be assumed to reflect or reuse the functionality, purpose, or design of the original leaf-js codebase. The historical name was automatically inherited when this branch was created before the complete re-engineering effort.

The current code exists purely for educational experimentation with WebGPU—most notably a “Hello Triangle” scene and personal shader/pipeline studies. The codebase has diverged thousands of commits and design decisions away from any prior work, and there is no shared code, collaboration, or intellectual continuity.

This demo is shared publicly for transparency, reproducibility, and academic curiosity. If you are searching for the original leaf-js project, please consult its official repository and maintainers; this project is separate and unrelated.

## 🎯 Intent

- Highlight the exact steps required to move from `navigator.gpu` to a frame on screen.
- Provide a polished, responsive wrapper so the demo is easy to explore and share.
- Encourage hands-on experimentation instead of marketing copy or feature lists.

## 🧰 Tooling

- **Runtime & Package Manager:** [Bun](https://bun.sh/)
- **Framework:** [Next.js 16](https://nextjs.org/) App Router with TypeScript
- **Design System:** [NextUI](https://nextui.org/) + Tailwind CSS
- **Icons:** [Lucide](https://lucide.dev/)

## 🗂️ Key Files

- `lib/webgpu/triangle-demo.ts` — negotiates the adapter/device handshake, prepares the canvas, and manages the render loop for every shape.
- `lib/webgpu/samples/` — the canonical WebGPU samples (hello triangle, two cubes, textured cube) and the geometry-lab mesh renderer.
- `lib/lessons/catalog.ts` & `lib/lessons/content.ts` — the 16-lesson course structure, progress state, and content for each tab.
- `lib/lessons/shader-source.ts` — the WGSL source shown in the editor and sent to the live preview for each lesson.
- `components/sections/webgpu-showcase.tsx` — mounts the landing-page canvas and hooks it into the demo lifecycle.
- `app/lab/page.tsx` — the full lab workspace that wires lessons, panels, and the live viewport together.

## 🚀 Getting Started

```bash
bun install
bun run dev
```

Open the site in a WebGPU-enabled browser (Chrome 113+, Edge 113+, or Safari Technology Preview). If WebGPU is unavailable, the page will let you know.

## 🛠️ Experimentation Workflow

1. On the landing page, switch between the canonical demo tabs to see the core samples in action.
2. Open the Lab (`/lab`) to follow the 16-lesson course, edit WGSL in the Monaco-based editor, and watch the live preview update.
3. Use the Geometry, Matrix, Lighting, and Texture panels to change the scene interactively.
4. Toggle **Unlock all lessons** in Settings to jump around freely, or complete each lesson to unlock the next.
5. Run `bun run build:pages` to produce a static export under `docs/` for hosting.

## 📦 Deployment

```bash
bun run build:pages
```

The command exports the site, writes it to `docs/`, and copies `.nojekyll` so GitHub Pages or any static host can serve the output.

## 📚 Further Reading

- `triangle-shader-lab-overview.md` — extended walkthrough of how the project is structured and why it exists.
- [WebGPU Samples — Hello Triangle](https://webgpu.github.io/webgpu-samples/?sample=helloTriangle)
- [WebGPU Samples — Textured Cube](https://webgpu.github.io/webgpu-samples/?sample=texturedCube)

Use Triangle Shader Lab as a reference or a starting point for your own WebGPU experiments. The focus is simple: two compact demos, clear code, and room to explore.
