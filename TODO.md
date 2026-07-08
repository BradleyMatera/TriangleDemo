# WebGPU Lab v2.0 Master TODO

This file is the small-context execution checklist for the WebGPU Lab redesign.

If an AI worker has little context, read these files in order:

1. `TODO.md` - current execution checklist.
2. `docs/AI_HANDOFF_GUIDE.md` - context reload guide and rules.
3. `docs/superpowers/specs/2026-07-08-webgpu-lab-redesign-design.md` - approved product/design spec.
4. `docs/superpowers/plans/2026-07-08-webgpu-lab-redesign-implementation.md` - detailed phase plan.

Do not remove requested product areas. This is not a triangle demo anymore. Build WebGPU Lab as a lesson-guided graphics IDE.

## Global Rules For Any AI Worker

These rules were followed and verified during the 2026-07-08 completion pass. Future workers should still treat them as standing rules.

- [x] Before editing, run `git status --short` and do not revert unrelated dirty files.
- [x] Work in tiny batches: 1 to 3 checklist items, then run verification.
- [x] Keep `app/lab/page.tsx` as composition glue. Move real logic into focused components, stores, and data files.
- [x] Every visible control must do something: update local state, open a panel, copy/download/share, reveal details, show a disabled/unsupported state, or run validation.
- [x] No "coming soon" panels, fake placeholder blocks, or inert buttons.
- [x] Preserve the dark glass IDE aesthetic from `public/image5.png`.
- [x] Prefer existing stack: Next.js App Router, React, TypeScript, Tailwind, Framer Motion, Monaco, Lucide, Zustand, native WebGPU.
- [x] Run `bun run lint` before handoff.
- [x] Run `bun run build` when a phase changes routing, imports, TypeScript types, or WebGPU code.
- [x] After visual changes, run the app and inspect `/lab` in browser at desktop and mobile widths.

## Current Source Of Truth

- [x] Design direction approved: lesson-guided full product IDE.
- [x] Design spec exists: `docs/superpowers/specs/2026-07-08-webgpu-lab-redesign-design.md`.
- [x] Visual companion sketches exist locally under `.superpowers/brainstorm/...`, but `.superpowers/` is ignored and should not be relied on as source control.
- [x] Current audit/completion pass is implemented and verified through lint, build, and browser smoke tests.
- [x] Existing app already has `/lab`, panels, stores, lesson data, Monaco, and WebGPU samples. Improve and expand instead of starting over.

## Phase P0: Orientation And Safety

- [x] P0.01 Run `git status --short` and note unrelated dirty files.
- [x] P0.02 Read `package.json` to confirm scripts and dependencies.
- [x] P0.03 Read `app/lab/page.tsx` to understand the current workspace switcher.
- [x] P0.04 Read `lib/stores/ui-store.ts`, `lesson-store.ts`, `workspace-store.ts`, and `metrics-store.ts`.
- [x] P0.05 Read `lib/lessons/catalog.ts`, `content.ts`, and `shader-source.ts`.
- [x] P0.06 Read existing panel files in `components/lab/panels/`.
- [x] P0.07 Open `public/image5.png` or inspect it in the IDE so the visual target stays clear.
- [x] P0.08 Start the app with `bun run dev` and inspect `/lab`.
- [x] P0.09 Record any existing runtime errors before making changes.

## Phase P1: Design System And App Shell

- [x] P1.01 Create shared lab UI primitives for glass panels, headers, toolbar buttons, tabs, chips, metric rows, progress bars, and empty states.
- [x] P1.02 Update global lab color tokens and Tailwind utility usage to match the dark glass purple/blue/cyan direction.
- [x] P1.03 Expand `PanelId` in `lib/stores/ui-store.ts` to include every top-level module: editor, lessons, pipeline, shaders, geometry, lighting, textures, performance, playground, examples, documentation.
- [x] P1.04 Refactor `components/lab/navigation/top-nav.tsx` so every required nav item is present and responsive.
- [x] P1.05 Add working search/command/settings/profile/keyboard/bookmark/recent/theme controls or explicit interactive popovers.
- [x] P1.06 Update `app/lab/page.tsx` so each module has a real workspace surface.
- [x] P1.07 Add responsive shell behavior for narrow screens: collapsible sidebar, stacked panels, command-accessible modules.
- [x] P1.08 Verify the top bar never clips text or hides essential controls at common desktop widths.

## Phase P2: Lesson Journey, Progress, Achievements

- [x] P2.01 Replace or expand lesson catalog so it contains Introduction and Chapters 1-15 exactly as listed in the spec.
- [x] P2.02 Add lesson metadata: id, chapter, title, difficulty, estimated time, status, unlock requirement, progress percent, achievements, docs references, pipeline emphasis.
- [x] P2.03 Add lesson content sections: overview, concept, demo, live code, exercises, challenge, knowledge check, summary.
- [x] P2.04 Update `lib/stores/lesson-store.ts` to support active lesson, completed lessons, locked/available state, exercise completion, and next lesson unlock.
- [x] P2.05 Update `components/lab/sidebar/lesson-sidebar.tsx` with chapter grouping, locks, completions, progress, achievements, bookmarks, recent lessons, and settings.
- [x] P2.06 Replace empty bookmark/settings placeholders with useful actions and state.
- [x] P2.07 Add "complete exercise" interaction that marks current lesson complete and unlocks the next lesson.
- [x] P2.08 Verify locked lessons explain why they are locked.

## Phase P3: Lesson Workspace And Editor

- [x] P3.01 Upgrade `components/lab/panels/lesson-content-panel.tsx` into a premium lesson panel with tabs: Overview, Concept, Interactive Demo, Live Code, Exercises, Challenge, Knowledge Check, Summary.
- [x] P3.02 Connect lesson tab selection to state so the active tab persists while switching workspace modules.
- [x] P3.03 Upgrade `components/lab/panels/code-editor-panel.tsx` with VS Code-style chrome: file tabs, minimap setting, diagnostics strip, search/replace UI, split editor toggle, bookmarks, copy, format, download, share, and version history.
- [x] P3.04 Ensure editor actions update real local state or show honest unsupported/disabled feedback.
- [x] P3.05 Connect lesson selection to default WGSL source.
- [x] P3.06 Connect shader compile diagnostics to editor UI and pipeline shader compilation state.
- [x] P3.07 Add exercise validation messages tied to the active lesson and current code.
- [x] P3.08 Verify editing WGSL and applying changes still updates the preview path when WebGPU is available.

## Phase P4: Live Viewport And Debug Modes

- [x] P4.01 Split live preview UI concerns into smaller components if `live-preview-panel.tsx` is too large.
- [x] P4.02 Add orbit, pan, zoom, camera reset, and camera coordinate controls.
- [x] P4.03 Add fullscreen, screenshot, GIF record, MP4 record, and resolution selector controls.
- [x] P4.04 Add debug toggles: grid, axis, wireframe, bounding boxes, vertices, normals, tangents, UV, depth, lighting only, overdraw, collision, vertex IDs, fragment IDs.
- [x] P4.05 Make every debug toggle update visible UI state, overlay labels, inspector state, or viewport parameters.
- [x] P4.06 Add FPS, GPU timing, frame count, resolution, and WebGPU status overlays.
- [x] P4.07 Build a polished WebGPU unsupported state that keeps the rest of the lab usable.
- [x] P4.08 Verify the RGB triangle viewport still renders on supported browsers.

## Phase P5: GPU Pipeline Visualizer And Inspector

- [x] P5.01 Expand pipeline stages to exact sequence: CPU, JavaScript, Command Encoder, Command Buffer, GPU Queue, Vertex Shader, Primitive Assembly, Rasterizer, Fragment Shader, Depth Buffer, Framebuffer, Presentation.
- [x] P5.02 Add animated data packets flowing through the pipeline.
- [x] P5.03 Add hover explanations and click-to-expand detail for every stage.
- [x] P5.04 Highlight pipeline stages based on active lesson and render/update events.
- [x] P5.05 Update GPU inspector with vertex count, triangle count, draw calls, buffers, textures, uniforms, memory, limits, capabilities, device info, pipeline state, shader compilation.
- [x] P5.06 Keep simulated metrics deterministic and honest when real GPU data is unavailable.
- [x] P5.07 Connect shader compile errors and debug modes to inspector rows.
- [x] P5.08 Verify right rail remains readable and scrollable on smaller desktop widths.

## Phase P6: Shader Playground

- [x] P6.01 Create shader metadata for Gradient, Rainbow, Glass, Fire, Water, Noise, Aurora, CRT, Pixelation, Bloom, Outline, Toon, Hologram, Metal, PBR.
- [x] P6.02 Upgrade `shader-playground-panel.tsx` with gallery, preview, code, explanation, modify, save, download, and tags.
- [x] P6.03 Selecting a shader updates code preview and visual preview.
- [x] P6.04 Saved shaders appear in a local "Saved" section.
- [x] P6.05 Downloads export useful WGSL or JSON content.
- [x] P6.06 Verify no shader card is a placeholder-only tile.

## Phase P7: Geometry, Matrix, Lighting, Textures, Examples

- [x] P7.01 Expand `geometry-lab-panel.tsx` with Triangle, Quad, Cube, Sphere, Plane, Cylinder, Cone, Torus, Monkey, Stanford Bunny.
- [x] P7.02 Add transform controls: rotate, translate, scale, subdivision, normals, wireframe.
- [x] P7.03 Add Matrix Visualizer surface for World, View, Projection, Model, Perspective, Orthographic, transformation order, sliders, and matrix display.
- [x] P7.04 Add Lighting module with at least ambient, directional, point, normal visualization, and lighting-only debug state.
- [x] P7.05 Add Textures module with UV preview, sampler settings, texture cards, and common texture errors.
- [x] P7.06 Add Examples module that links lessons, shaders, geometry, and docs.
- [x] P7.07 Verify each module has stateful controls and useful explanations.

## Phase P8: Performance, Documentation, Settings, Command Palette

- [x] P8.01 Upgrade `performance-panel.tsx` with FPS, frame time, CPU time, GPU time, draw calls, memory, vertices, triangles, buffers, charts, and timeline.
- [x] P8.02 Upgrade `documentation-panel.tsx` with WGSL reference, WebGPU API, examples, best practices, performance tips, common errors, cheat sheets, architecture, downloads.
- [x] P8.03 Expand `command-palette.tsx` so it can navigate modules, lessons, docs, settings, and editor actions.
- [x] P8.04 Add settings controls: theme, reduced motion, metrics, editor density, minimap, autosave simulation, accessibility preferences.
- [x] P8.05 Add keyboard shortcut help with real shortcuts.
- [x] P8.06 Add profile/progress surface with achievements and current course state.
- [x] P8.07 Verify command palette keyboard navigation and focus restore.

## Phase P9: Accessibility, Motion, Responsive Polish

- [x] P9.01 Add ARIA labels for icon-only controls.
- [x] P9.02 Ensure command palette and dialogs trap focus and restore focus.
- [x] P9.03 Add visible focus states for nav, sidebar, tabs, toolbar buttons, sliders, and command rows.
- [x] P9.04 Ensure no information is conveyed by color alone.
- [x] P9.05 Respect `prefers-reduced-motion` and in-app reduced-motion setting.
- [x] P9.06 Add tasteful Framer Motion transitions for panel entry, active nav, pipeline packets, hover glow, and drawer expansion.
- [x] P9.07 Verify mobile layout has no overlap, clipping, or horizontal overflow.
- [x] P9.08 Verify desktop layout feels dense but readable.

## Phase P10: Verification And Handoff

- [x] P10.01 Run `bun run lint`.
- [x] P10.02 Run `bun run build`.
- [x] P10.03 Start app with `bun run dev`.
- [x] P10.04 Inspect `/lab` desktop.
- [x] P10.05 Inspect `/lab` mobile-sized viewport.
- [x] P10.06 Verify core workflow: select Chapter 1, edit WGSL, apply changes, toggle debug mode, open pipeline stage, complete exercise, unlock next lesson.
- [x] P10.07 Verify shader, geometry, performance, documentation, settings, command palette, bookmarks, and achievements surfaces.
- [x] P10.08 Compare against `public/image5.png`: dark glass UI, premium IDE density, purple/blue/cyan palette, visible editor, live viewport, pipeline, inspector.
- [x] P10.09 Remove temporary debug artifacts.
- [x] P10.10 Update this TODO with completed items and known remaining work.

## Phase P11: Production Hardening

- [x] P11.01 Persist UI settings with a versioned localStorage schema while keeping transient dialogs ephemeral.
- [x] P11.02 Persist durable workspace chrome and editor version history without persisting live shader runtime state.
- [x] P11.03 Harden lesson progress persistence with versioned partial storage and catalog-safe merge behavior.
- [x] P11.04 Replace simulated viewport recording state with real `MediaRecorder` canvas capture and honest WebM fallback messaging.
- [x] P11.05 Verify source diff whitespace, lint, production build, browser load, console output, and viewport recording download after P11.

## Existing Older Ideas Reclassified

- [x] OLD.01 Framer Motion micro-interactions are now covered by P9.
- [x] OLD.02 Illustrative SVG blobs are not a priority unless they support the lab UI; avoid decorative filler.
- [x] OLD.03 Additional shaders are now covered by P6.
- [x] OLD.04 Performance profiling notes are now covered by P8 and P10.
- [x] OLD.05 MDX docs are optional after P8; integrated docs panel comes first.
- [x] OLD.06 Visual regression tests are optional after P10 if time remains; manual Playwright desktop/mobile snapshots were captured during P10 verification.
