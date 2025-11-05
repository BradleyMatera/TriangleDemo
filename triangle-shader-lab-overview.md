# Triangle Shader Lab Overview

Triangle Shader Lab is a miniature learning environment built around the WebGPU "hello triangle" sample. It pairs a polished Next.js shell with the exact TypeScript and WGSL code that powers the on-page canvas so you can trace how a frame is produced.

### Focal Point

- The triangle render on the homepage is the only visual output by design.
- Every interactive element in the UI links back to the code paths that draw that triangle so you can follow the pipeline end to end.
- When you modify either `triangle-demo.ts` or `samples/hello-triangle/main.ts` the result is reflected instantly in the canvas.

## Independence Statement

This repository lives as an independent experimental branch that originally forked from a public leaf-js snapshot. It is not affiliated with, endorsed by, or connected to the upstream maintainers. Every file has been rewritten—there is no shared code, design intent, or functional overlap beyond the historically inherited name. The branch now focuses exclusively on personal WebGPU experiments, including the “Hello Triangle” scene and iterative shader studies. If you are looking for the original leaf-js project, please refer to its official sources; this lab is a distinct effort released solely for transparency and educational curiosity.

## Project Goals

- Keep the triangle render front and center and remove any unrelated marketing copy.
- Expose the minimum WebGPU setup required to negotiate an adapter, request a device, and push commands to the GPU queue.
- Provide gentle visual framing so the code is approachable on desktops and mobile devices alike.

## Core Files

- `lib/webgpu/triangle-demo.ts` – orchestrates adapter/device negotiation, canvas configuration, command encoding, and the render loop.
- `lib/webgpu/samples/hello-triangle/main.ts` – holds the vertex data, pipeline descriptors, and WGSL shaders lifted from the official WebGPU sample.
- `components/sections/webgpu-showcase.tsx` – mounts the canvas on the page and wires it to the demo controller.

## How to Experiment

1. Install dependencies with `bun install` and launch the dev server using `bun run dev`.
2. Modify the vertex positions or fragment color in `samples/hello-triangle/main.ts` to observe the effect on the live triangle.
3. Update `triangle-demo.ts` if you want to add uniforms, resize behavior, or alternative render passes.
4. Run `bun run build:pages` to generate a static export inside `docs/` for easy hosting.

## Why It Exists

WebGPU is powerful but verbose when you just want to understand the basics. Triangle Shader Lab strips the concept down to the essentials and gives you a playground that you can tinker with, refactor, or extend into new demos without inheriting an entire game engine.
