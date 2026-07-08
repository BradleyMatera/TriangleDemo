# AI Handoff Guide: WebGPU Lab v2.0

This guide is written for a small-context AI agent that may need to compress or restart often. It explains what the project is, what has already been decided, where to look, and how to work safely.

## One-Sentence Mission

Turn Triangle Shader Lab into WebGPU Lab: a commercial-feeling, lesson-guided WebGPU graphics IDE with lessons, live WGSL editing, a live viewport, pipeline visualization, GPU inspection, shader/geometry/matrix/performance/docs modules, and polished dark glass UI.

## Fast Context Reload

When context resets, read only this section first, then reopen files as needed.

1. Current checklist: `TODO.md`.
2. Approved spec: `docs/superpowers/specs/2026-07-08-webgpu-lab-redesign-design.md`.
3. Implementation plan: `docs/superpowers/plans/2026-07-08-webgpu-lab-redesign-implementation.md`.
4. Visual reference image: `public/image5.png`.
5. App entry: `app/lab/page.tsx`.
6. Current panel components: `components/lab/panels/`.
7. Current state stores: `lib/stores/`.
8. Current lesson data: `lib/lessons/`.

If you can only keep one thing in memory: build the approved lesson-guided IDE shell and complete the next unchecked TODO item.

## Product Direction

The user approved Architecture A: Lesson-Guided IDE Shell.

That means:

- The app is not a marketing site.
- The app is not just a triangle demo.
- The app is an IDE-like learning product.
- Lessons are first-class.
- Product modules are also first-class.
- The active lesson drives the editor, viewport, pipeline, inspector, docs, exercises, achievements, and unlock flow.

## Design Direction

Use `public/image5.png` as the visual foundation.

Keep:

- Dark mode.
- Glassmorphism.
- Soft glows.
- Purple, blue, cyan, green, and pink shader accents.
- Thin borders.
- Premium developer-software density.
- Professional IDE/editor panels.
- Live graphics viewport.
- GPU pipeline rail.
- Inspector and metrics surfaces.

Avoid:

- Beige, tan, brown, orange, or warm off-white themes.
- Marketing hero pages inside `/lab`.
- Generic cards that do not do anything.
- Placeholder-only sections.
- Inert buttons.
- Simplifying the product back to a triangle demo.

## Current Tech Stack

Confirmed from `package.json`:

- Next.js App Router.
- React 18.
- TypeScript.
- Tailwind CSS.
- Framer Motion.
- Monaco Editor via `@monaco-editor/react`.
- Lucide icons.
- Zustand.
- Native WebGPU samples and helpers.
- Bun scripts.

Useful commands:

```bash
bun run dev
bun run lint
bun run build
git status --short
```

## Current Repository Map

Important files and responsibilities:

- `app/lab/page.tsx`: main lab route and active workspace switcher.
- `components/lab/navigation/top-nav.tsx`: top module navigation and global controls.
- `components/lab/sidebar/lesson-sidebar.tsx`: learning journey sidebar.
- `components/lab/command-palette.tsx`: command palette.
- `components/lab/status-bar.tsx`: bottom app status.
- `components/lab/panels/code-editor-panel.tsx`: WGSL editor panel.
- `components/lab/panels/live-preview-panel.tsx`: WebGPU canvas and viewport controls.
- `components/lab/panels/pipeline-visualizer-panel.tsx`: render pipeline explanation.
- `components/lab/panels/gpu-inspector-panel.tsx`: GPU metrics/debug panel.
- `components/lab/panels/shader-playground-panel.tsx`: shader gallery.
- `components/lab/panels/geometry-lab-panel.tsx`: geometry tools.
- `components/lab/panels/performance-panel.tsx`: performance analytics.
- `components/lab/panels/documentation-panel.tsx`: integrated docs.
- `components/lab/panels/lesson-content-panel.tsx`: lesson content.
- `lib/stores/ui-store.ts`: UI state and active module.
- `lib/stores/lesson-store.ts`: lesson selection and progress.
- `lib/stores/workspace-store.ts`: shader/editor workspace state.
- `lib/stores/metrics-store.ts`: metrics state.
- `lib/lessons/catalog.ts`: lesson catalog.
- `lib/lessons/content.ts`: lesson content.
- `lib/lessons/shader-source.ts`: lesson shader source.
- `lib/webgpu/`: WebGPU runtime/sample code.

## Worktree Safety

This repo may have dirty generated files such as `.next/` and `out/`.

Always do this before editing:

```bash
git status --short
```

Rules:

- Do not run `git reset --hard`.
- Do not revert files you did not intentionally change.
- Do not clean generated files unless the user asks.
- If unrelated files are dirty, ignore them.
- If you touch a file with existing changes, read it carefully and preserve user work.

## Small-Context Working Method

Use this loop:

1. Read `TODO.md`.
2. Choose exactly 1 to 3 unchecked tasks.
3. Read only the files named by those tasks.
4. Make a small focused edit.
5. Run a relevant check.
6. Update `TODO.md` checkboxes only for tasks actually completed.
7. Write a short handoff note in your final response.

If context compresses every minute, keep the current task ID in your last message, for example:

```text
Current task: P2.04. Files open: lib/stores/lesson-store.ts, lib/lessons/catalog.ts. Next action: add unlock selector and completeLesson action.
```

## Required Product Modules

Top navigation must include:

- Editor
- Lessons
- Pipeline
- Shaders
- Geometry
- Lighting
- Textures
- Performance
- Playground
- Examples
- Documentation
- Search
- Settings
- Command Palette
- Profile
- Keyboard Shortcuts
- Bookmarks
- Recent Lessons
- Theme Switcher

Lesson journey must include:

- Introduction
- Chapter 1: Drawing Your First Triangle
- Chapter 2: Vertex Buffers
- Chapter 3: Index Buffers
- Chapter 4: Uniform Buffers
- Chapter 5: Matrices
- Chapter 6: Coordinate Systems
- Chapter 7: Textures
- Chapter 8: Lighting
- Chapter 9: Model Loading
- Chapter 10: Instancing
- Chapter 11: Shadow Mapping
- Chapter 12: Post Processing
- Chapter 13: Particles
- Chapter 14: Compute Shaders
- Chapter 15: Optimization

Pipeline visualizer must include:

CPU -> JavaScript -> Command Encoder -> Command Buffer -> GPU Queue -> Vertex Shader -> Primitive Assembly -> Rasterizer -> Fragment Shader -> Depth Buffer -> Framebuffer -> Presentation.

Shader gallery must include:

Gradient, Rainbow, Glass, Fire, Water, Noise, Aurora, CRT, Pixelation, Bloom, Outline, Toon, Hologram, Metal, PBR.

Geometry lab must include:

Triangle, Quad, Cube, Sphere, Plane, Cylinder, Cone, Torus, Monkey, Stanford Bunny.

## Definition Of Done For A UI Control

A button or control is done only if one of these is true:

- It changes visible local state.
- It opens a panel, popover, dialog, or drawer.
- It copies, downloads, formats, shares, or validates something.
- It changes editor, viewport, pipeline, inspector, lesson, metrics, or settings state.
- It is disabled with a visible reason.
- It shows a supported/unsupported/processing/success/error state.

It is not done if it only has `onClick={() => {}}`.

## Definition Of Done For A Panel

A panel is done only if it has:

- Real heading and contextual copy.
- At least one meaningful stateful interaction.
- Empty/error/unsupported state when relevant.
- Keyboard and focus behavior for interactive controls.
- Responsive layout that does not clip.
- Visual styling consistent with `public/image5.png`.

## Testing Checklist

Run these when possible:

```bash
bun run lint
bun run build
```

Manual browser checks:

- `/lab` loads.
- Top nav works.
- Sidebar lessons show Introduction plus Chapters 1-15.
- Selecting lessons changes content.
- Editor actions visibly respond.
- Preview viewport shows WebGPU render or polished unsupported state.
- Debug toggles visibly respond.
- Pipeline stage opens details.
- Inspector metrics update or show deterministic simulated values.
- Shader gallery selection changes preview/code/explanation.
- Geometry controls update visible state.
- Performance panel charts/timeline animate or update.
- Documentation panel has useful reference links/content.
- Command palette opens and navigates.
- Settings change theme/reduced motion/metrics/editor density.
- Mobile viewport has no horizontal overflow.

## If You Get Stuck

Do not rewrite the app from scratch.

Instead:

1. Reopen `TODO.md`.
2. Pick a smaller task.
3. Read the current component file.
4. Preserve its existing exports and props.
5. Add one small piece of state or UI.
6. Run lint/build.
7. Leave a note about the blocker.

## Commit Guidance

Use frequent small commits if the user asks for commits.

Suggested commit style:

```bash
git add <changed-files>
git commit -m "feat: expand lesson journey"
git commit -m "feat: add pipeline stage details"
git commit -m "fix: improve lab mobile layout"
git commit -m "docs: update WebGPU Lab TODO"
```

Do not commit generated `.next/` output.
