# Triangle Shader Lab Overview

Triangle Shader Lab is a miniature learning environment built around the WebGPU "hello triangle" sample and the textured cube variant. It pairs a polished Next.js shell with the exact TypeScript and WGSL code that powers the on-page canvas so you can trace how each frame is produced.

### Focal Point

- The homepage canvas hosts both the textured cube and hello triangle demos—switch between them via the Showcase tabs.
- Every interactive element links back to the code paths that draw the active shape so you can follow the pipeline end to end.
- When you modify `triangle-demo.ts`, `samples/textured-cube/main.ts`, or `samples/hello-triangle/main.ts`, the result is reflected instantly in the canvas.

## Independence Statement

This repository lives as an independent experimental branch that originally forked from a public leaf-js snapshot. It is not affiliated with, endorsed by, or connected to the upstream maintainers. Every file has been rewritten—there is no shared code, design intent, or functional overlap beyond the historically inherited name. The branch now focuses exclusively on personal WebGPU experiments, including the “Hello Triangle” scene and iterative shader studies. If you are looking for the original leaf-js project, please refer to its official sources; this lab is a distinct effort released solely for transparency and educational curiosity.

## Project Goals

- Keep the render surface front and center—whether you are viewing the triangle or textured cube—and remove any unrelated marketing copy.
- Expose the minimum WebGPU setup required to negotiate an adapter, request a device, and push commands to the GPU queue.
- Provide gentle visual framing so the code is approachable on desktops and mobile devices alike.

## Core Files

- `lib/webgpu/triangle-demo.ts` – orchestrates adapter/device negotiation, canvas configuration, command encoding, and the render loop.
- `lib/webgpu/samples/textured-cube/main.ts` – drives the textured cube, including WGSL shaders, vertex buffers, and uniform updates.
- `lib/webgpu/samples/hello-triangle/main.ts` – minimal, single-draw demo that highlights the bare essentials of WebGPU rendering.
- `components/sections/webgpu-showcase.tsx` – mounts the canvas on the page and wires it to the demo controller.

## How to Experiment

1. Install dependencies with `bun install` and launch the dev server using `bun run dev`.
2. Modify the WGSL or transformation logic in `samples/textured-cube/main.ts` or `samples/hello-triangle/main.ts` to observe the effect on the live demo.
3. Update `triangle-demo.ts` if you want to add uniforms, resize behavior, or alternative render passes.
4. Run `bun run build:pages` to generate a static export inside `docs/` for easy hosting.

## Why It Exists

WebGPU is powerful but verbose when you just want to understand the basics. Triangle Shader Lab strips the concept down to the essentials and gives you a playground that you can tinker with, refactor, or extend into new demos without inheriting an entire game engine.
