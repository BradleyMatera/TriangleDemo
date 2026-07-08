# WebGPU Lab v2.0 Redesign Design

Date: 2026-07-08

## Goal

Transform Triangle Shader Lab into WebGPU Lab: a premium, lesson-guided graphics IDE and interactive learning platform. The attached `public/image5.png` is the visual foundation: dark developer software, glassmorphism, purple/blue/cyan glow, dense professional panels, code-first workflow, and live graphics tooling.

The product must not feel like a tutorial website or a small triangle demo. It should feel like a commercial WebGPU learning environment where lessons, code editing, viewport rendering, pipeline visualization, shader exploration, geometry tools, documentation, performance analytics, and debugging tools are all part of one coherent application.

## Approved Product Direction

Use a lesson-guided IDE shell.

The app always feels like a professional graphics IDE. The active lesson drives the rest of the workspace: loaded shader code, viewport scene, pipeline animation, inspector metrics, exercise validation, relevant docs, achievements, and next-lesson unlock state.

This direction combines the lesson platform and the full product simulation instead of treating them as separate phases.

## Visual System

The app uses the mockup language as the design baseline:

- Near-black navy app background with subtle mesh/radial light.
- Glass panels with thin white or violet borders, restrained blur, and soft elevation.
- Purple, electric blue, cyan, green, pink, and shader-like RGB glow accents.
- Dense but readable developer-software spacing.
- Small, intentional UI chrome typography for tabs, toolbar buttons, kbd hints, status text, metrics, and inspector rows.
- Large visual focus on the editor, live viewport, and GPU pipeline.
- Rounded panels around 8-16px depending on scale, avoiding oversized toy-like cards.
- Motion uses Framer Motion-style springs, shared layout highlights, hover glow, packet-flow animation, and reduced-motion fallbacks.

No beige, tan, brown, orange theme, generic landing-page hero, decorative-only card grid, or placeholder gray boxes should be introduced into the lab UI.

## Primary Screen Layout

The main app route remains a full-height software workspace.

### Top Navigation

The top bar contains:

- WebGPU Lab brand and mark.
- Primary modules: Editor, Lessons, Pipeline, Shaders, Geometry, Lighting, Textures, Performance, Playground, Examples, Documentation.
- Search and command palette entry.
- Settings, keyboard shortcuts, bookmarks, recent lessons, theme switcher, and profile controls.
- WebGPU/device status affordance.

Navigation switches workspace modes without leaving the product shell. On smaller screens, secondary modules can collapse into a command/menu surface while preserving access.

### Left Sidebar

The sidebar is the learning journey and user progress center.

Required course structure:

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

Each lesson has status: locked, available, active, completed. The sidebar shows progress, achievements, bookmarks, recent lessons, and settings without placeholder copy. Locked lessons remain visible to communicate scope and progression.

### Center Workspace

The center workspace is lesson-guided and includes:

- Active lesson header with title, difficulty, estimated time, completion state, and next unlock.
- Lesson tabs: Overview, Concept, Interactive Demo, Live Code, Exercises, Challenge, Knowledge Check, Summary.
- VS Code-style WGSL editor with tabs, syntax highlighting, diagnostics, hover docs, minimap, search/replace controls, folding affordances, bookmarks, split editor, read-only examples, formatting, copy, download, share, and version history surfaces.
- Exercise console with prompt, hints, run validation, result feedback, and next lesson action.

The first active lesson defaults to Chapter 1: Drawing Your First Triangle.

### Live Viewport

The viewport is a graphics tool, not a static preview.

Required controls and visible state:

- Orbit, pan, zoom controls.
- Fullscreen and screenshot buttons.
- GIF/MP4 recording workflow controls with realistic supported/processing/disabled states.
- Grid, axis, wireframe, bounding box, vertex, normal, tangent, lighting, and debug visualization toggles.
- FPS, GPU timing, frame count, resolution selector, and WebGPU status.
- Camera readout and reset view.

Where native WebGPU is available, use the existing WebGPU demo path. Where unavailable, show a polished unsupported state with explanation and recovery guidance.

### Right Rail

The right rail is the professional debugging and explanation surface.

It contains:

- GPU Pipeline Visualizer as the centerpiece.
- GPU Inspector.
- Contextual docs and common error help.

The pipeline visualizer shows:

CPU -> JavaScript -> Command Encoder -> Command Buffer -> GPU Queue -> Vertex Shader -> Primitive Assembly -> Rasterizer -> Fragment Shader -> Depth Buffer -> Framebuffer -> Presentation.

Each stage supports hover explanation, click expansion, live selected/highlighted state, and animated data packets. The current lesson can emphasize relevant stages.

The GPU Inspector shows vertex count, triangle count, draw calls, buffers, textures, uniforms, memory usage, GPU limits, capabilities, device information, pipeline state, and shader compilation state. Values can be simulated from app state when browser/device APIs do not expose exact data, but the UI must be honest and internally consistent.

### Bottom/Secondary Tools

The workspace includes expandable secondary panels for:

- Shader Playground gallery: Gradient, Rainbow, Glass, Fire, Water, Noise, Aurora, CRT, Pixelation, Bloom, Outline, Toon, Hologram, Metal, PBR.
- Geometry Lab: Triangle, Quad, Cube, Sphere, Plane, Cylinder, Cone, Torus, Monkey, Stanford Bunny.
- Matrix Visualizer: World, View, Projection, Model, Perspective, Orthographic, transformation order, sliders, and matrix display.
- Performance Panel: FPS, frame time, CPU time, GPU time, draw calls, memory, vertices, triangles, buffers, animated charts, and timeline.
- Documentation: WGSL reference, WebGPU API, examples, best practices, performance tips, common errors, cheat sheets, architecture, downloads.

These surfaces can appear as main workspace modes, right-rail expansions, or bottom drawers depending on viewport size.

## Interaction Model

Every visible control should either change local state, reveal detail, run validation, copy/download/share content, switch views, update the viewport, or communicate a real unavailable state.

Core interactions:

- Command palette opens with keyboard shortcut and can navigate modules, lessons, docs, settings, and editor actions.
- Lesson selection updates the active lesson, editor source, concept text, pipeline emphasis, viewport mode, inspector values, and unlock context.
- Completing exercises marks the lesson completed and unlocks the next chapter.
- Debug toggles update viewport overlays and inspector labels.
- Shader gallery selection updates preview/code/explanation and can save a modified shader locally.
- Geometry selection updates the preview and associated metrics.
- Matrix sliders update displayed transform matrices and viewport transform.
- Search and replace affect the editor surface.
- Settings toggle theme, reduced motion, metrics, editor density, and accessibility preferences.

Use Zustand stores for UI state, lesson progress, workspace code/shader state, metrics, and settings.

## Component Architecture

Keep `app/lab/page.tsx` as composition glue, not a monolithic implementation.

Suggested ownership:

- `components/lab/navigation/`: top nav, command entry, profile/settings launchers.
- `components/lab/sidebar/`: lesson journey, bookmarks, achievements, recent lessons.
- `components/lab/workspace/`: layout shells, panel docking, responsive workspace modes.
- `components/lab/panels/`: editor, lesson content, live preview, pipeline visualizer, GPU inspector, shader playground, geometry lab, matrix visualizer, performance, documentation.
- `components/lab/editor/`: Monaco wrapper, WGSL language support, diagnostics, toolbar, version history, search/replace UI.
- `components/lab/viewport/`: WebGPU canvas host, overlay controls, debug mode controls, camera controls, unsupported state.
- `components/lab/data/` or `lib/lessons/`: lesson catalog, lesson content, shader examples, shader gallery metadata, docs links, achievements.
- `lib/stores/`: focused Zustand stores for lesson, workspace, UI, metrics, settings, and achievements.
- `lib/webgpu/`: native WebGPU demo/runtime adapters, sample scenes, metrics helpers, fallback state.

Reusable primitives should cover glass panels, toolbar buttons, chips, status rows, metric cards, progress bars, command rows, segmented tabs, sliders, and inspector rows.

## Data Model

Lessons should be structured data with:

- id, title, chapter number, difficulty, estimated time.
- status/unlock metadata.
- overview, concept, demo description, exercises, challenge, knowledge check, summary.
- associated shader source, geometry/scene type, pipeline emphasis, docs references, achievements.

Shader examples should include:

- id, title, category, preview style, WGSL/code sample, explanation, tags, difficulty, save/download capability.

Metrics should include:

- fps, frame time, CPU time, GPU time, draw calls, memory, vertices, triangles, buffers, textures, frame count, resolution, device name, adapter/backend, limits support.

## Error And Empty States

WebGPU unsupported:

- Show a premium empty state in the viewport.
- Explain that WebGPU requires a compatible browser/device.
- Keep lesson content, editor, pipeline visualizer, docs, and simulated metrics usable.

Shader compile error:

- Highlight editor diagnostics.
- Show error summary with file/line context.
- Mark pipeline shader compilation state as failed.
- Keep previous successful preview when possible.

Locked lesson:

- Show why it is locked, what unlocks it, and current progress.

Unavailable export feature:

- Controls such as GIF/MP4 recording must use clear states such as disabled, preparing, recording, saved, or unsupported instead of inert buttons.

No bookmarks/recent lessons:

- Show useful actions, not placeholder "coming soon" copy.

## Accessibility

Requirements:

- WCAG AA contrast for text and controls.
- Keyboard navigation for nav, sidebar, editor toolbar, command palette, lesson tabs, dialogs, and settings.
- Visible focus states.
- ARIA labels for icon-only controls.
- Semantic headings and landmarks.
- `prefers-reduced-motion` support plus an in-app reduced motion toggle.
- No information conveyed only by color.
- Modals and command palette trap focus and restore focus on close.

## Performance

Requirements:

- Preserve 60 FPS target for viewport and UI animations.
- Code-split heavy surfaces where feasible, especially Monaco and advanced panels.
- Avoid unnecessary global re-renders from stores.
- Lazy-load expensive examples/panels.
- Use CSS transforms/opacity for motion.
- Keep generated/static export artifacts out of source control unless intentionally deployed.

## Testing And Verification

Run available project checks:

- `bun run lint`
- `bun run build`

Visual verification:

- Start the app locally.
- Verify `/lab` on desktop and mobile-sized viewport.
- Capture screenshots for comparison against `public/image5.png` and the approved workspace model.
- Inspect the reference mockup and browser screenshot with `view_image`.
- Check at least: nav coverage, sidebar lesson structure, editor chrome, live viewport controls, pipeline visualizer, inspector metrics, shader/geometry/performance/docs modules, typography, palette, spacing, responsive behavior, and interactive state changes.

Core workflow verification:

1. Open `/lab`.
2. Select Chapter 1.
3. Edit WGSL code and apply/run changes.
4. Toggle debug modes in the viewport.
5. Open pipeline stage detail.
6. Open command palette and navigate to a module.
7. Complete an exercise and confirm next lesson unlock state.
8. Switch to shader, geometry, performance, and documentation surfaces.
9. Verify WebGPU unsupported state if the API is unavailable.

## Scope Boundaries For The First Implementation Pass

All requested product areas should be represented as polished, useful, interactive surfaces. Native browser limitations are acceptable only when handled explicitly.

Allowed simulation:

- GPU timings and memory values can be simulated from deterministic local state when unavailable.
- Advanced recording/export workflows can show supported/unsupported/processing states if full media encoding is unreliable.
- Complex models such as Monkey and Stanford Bunny can use polished preview cards and scene metadata initially, with upgrade path to real assets.

Not allowed:

- Placeholder "coming soon" panels.
- Inert buttons without feedback.
- Removing requested sections.
- Replacing the IDE with a marketing page.
- Simplifying back to a triangle-only demo.

## Implementation Plan Handoff

After this design is approved, write a detailed implementation plan that breaks the work into focused phases:

1. Design system and app shell.
2. Lesson catalog/progress/achievements.
3. Editor and workspace state.
4. Viewport controls/debug overlays.
5. Pipeline visualizer and GPU inspector.
6. Shader, geometry, matrix, performance, and docs modules.
7. Command palette/settings/accessibility/responsive polish.
8. Verification and visual fidelity pass.
