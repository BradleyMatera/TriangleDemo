# Agent Notes — TriangleDemo / WebGPU Lab

## Project overview

Next.js 16 + TypeScript + Tailwind CSS + Zustand lab for learning WebGPU.

- `app/page.tsx` — marketing landing page with the canonical WebGPU demos.
- `app/lab/page.tsx` — the full lab workspace (lessons, editor, pipeline, geometry, lighting, textures, performance, docs).
- `lib/webgpu/triangle-demo.ts` — shared WebGPU adapter/device/render-loop orchestrator.
- `lib/webgpu/samples/` — `hello-triangle`, `two-cubes`, `textured-cube`, and `geometry-lab` renderers.
- `lib/lessons/` — lesson catalog, content, and per-lesson WGSL shader sources.

## Common commands

```bash
# Install dependencies
bun install

# Run the dev server
bun run dev

# Lint (zero warnings allowed)
bun run lint

# Production build + static export to docs/
bun run build:pages
```

## Conventions

- Prefer inline WGSL strings over fetching `.wgsl` files so static exports work without a dev server.
- Use `vec4f` / `vec3f` / `vec2f` aliases in WGSL (raw `vec4(...)` is not valid WGSL).
- When overriding shaders for the textured cube, `createTexturedCubeDemo` now skips texture creation if the fragment does not use `textureSample`/`mySampler`/`myTexture`.
- Lesson progression is locked by default; add `?unlock` or use the **Unlock all lessons** toggle in Settings.
