# WebGPU Lab Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build WebGPU Lab v2.0 as a lesson-guided WebGPU graphics IDE with all requested learning, editor, viewport, pipeline, shader, geometry, performance, documentation, and settings surfaces.

**Architecture:** Keep the existing Next.js `/lab` route and split the product into focused components, data modules, and Zustand stores. The active lesson is the central state: it drives editor source, viewport mode, pipeline emphasis, inspector metrics, docs, exercises, achievements, and unlock progress.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS, Framer Motion, Monaco Editor, Lucide icons, Zustand, native WebGPU, Bun.

---

## Before Starting

- [ ] Run `git status --short`.
- [ ] Read `TODO.md`.
- [ ] Read `docs/AI_HANDOFF_GUIDE.md`.
- [ ] Read `docs/superpowers/specs/2026-07-08-webgpu-lab-redesign-design.md`.
- [ ] Inspect `public/image5.png`.
- [ ] Start with the first unchecked phase in `TODO.md`.

## File Structure Plan

Create or modify these areas gradually:

- Modify `app/lab/page.tsx`: route composition and active workspace switch.
- Modify `app/globals.css`: lab-level visual primitives only if shared Tailwind utilities are insufficient.
- Create `components/lab/ui/`: shared glass panels, buttons, tabs, chips, status rows, metric rows, empty states.
- Modify `components/lab/navigation/top-nav.tsx`: complete app navigation.
- Modify `components/lab/sidebar/lesson-sidebar.tsx`: learning journey, progress, achievements, bookmarks, recents, settings.
- Modify `components/lab/command-palette.tsx`: navigation and action command center.
- Modify `components/lab/status-bar.tsx`: connected status, metrics, shortcuts, active lesson.
- Modify `components/lab/panels/*.tsx`: expand each product panel.
- Create `components/lab/workspace/`: optional layout helpers if `app/lab/page.tsx` grows too large.
- Create `components/lab/editor/`: optional editor toolbar, diagnostics, search/replace, version history.
- Create `components/lab/viewport/`: optional viewport toolbar, debug toggles, camera controls, unsupported state.
- Modify `lib/stores/ui-store.ts`: all module IDs and UI settings.
- Modify `lib/stores/lesson-store.ts`: progress, unlocks, achievements, bookmarks, recents.
- Modify `lib/stores/workspace-store.ts`: editor actions, saved shaders, version history.
- Modify `lib/stores/metrics-store.ts`: deterministic metrics and debug mode state.
- Modify `lib/lessons/catalog.ts`, `content.ts`, `shader-source.ts`: complete lesson data.
- Create `lib/lab/`: optional metadata for shaders, geometry, docs, shortcuts, pipeline stages.
- Preserve `lib/webgpu/`: native WebGPU runtime and samples.

## Task 1: Baseline And Safety

**Files:**

- Read: `TODO.md`
- Read: `docs/AI_HANDOFF_GUIDE.md`
- Read: `docs/superpowers/specs/2026-07-08-webgpu-lab-redesign-design.md`
- Read: `package.json`
- Read: `app/lab/page.tsx`

- [ ] Step 1: Run status.

```bash
git status --short
```

Expected: may show unrelated dirty files. Do not revert them.

- [ ] Step 2: Confirm scripts.

```bash
bun run lint
```

Expected: lint either passes or reports current baseline issues. Record failures before changing code.

- [ ] Step 3: Start app.

```bash
bun run dev
```

Expected: local Next dev server starts. Open `/lab`.

- [ ] Step 4: Record baseline notes in your handoff response, not necessarily in source.

## Task 2: Shared Lab UI Primitives

**Files:**

- Create: `components/lab/ui/lab-panel.tsx`
- Create: `components/lab/ui/lab-button.tsx`
- Create: `components/lab/ui/lab-tabs.tsx`
- Create: `components/lab/ui/status-pill.tsx`
- Create: `components/lab/ui/metric-row.tsx`
- Create: `components/lab/ui/empty-state.tsx`
- Modify: `components/lab/panels/*.tsx` as each primitive is adopted.

- [ ] Step 1: Create a `LabPanel` wrapper with title, description, actions, and consistent glass styling.
- [ ] Step 2: Create `LabButton` variants: primary, secondary, ghost, danger, icon.
- [ ] Step 3: Create `LabTabs` using button semantics and active state.
- [ ] Step 4: Create `StatusPill`, `MetricRow`, and `EmptyState`.
- [ ] Step 5: Replace duplicated panel chrome in one existing panel first.
- [ ] Step 6: Run `bun run lint`.
- [ ] Step 7: Update `TODO.md` P1.01 when primitives exist and are used at least once.

## Task 3: Complete UI Store And Navigation

**Files:**

- Modify: `lib/stores/ui-store.ts`
- Modify: `components/lab/navigation/top-nav.tsx`
- Modify: `app/lab/page.tsx`

- [ ] Step 1: Expand `PanelId` to include `editor`, `lessons`, `pipeline`, `shaders`, `geometry`, `lighting`, `textures`, `performance`, `playground`, `examples`, `documentation`.
- [ ] Step 2: Add state for settings/profile/bookmarks/recent/shortcuts popovers if not already present.
- [ ] Step 3: Update top nav list with all required modules.
- [ ] Step 4: Make Search or Command Palette open the command palette.
- [ ] Step 5: Replace `onClick={() => {}}` controls with real store actions or popovers.
- [ ] Step 6: Add responsive overflow handling.
- [ ] Step 7: Run `bun run lint`.
- [ ] Step 8: Verify all nav items switch to a real visible surface.

## Task 4: Complete Lesson Data

**Files:**

- Modify: `lib/lessons/catalog.ts`
- Modify: `lib/lessons/content.ts`
- Modify: `lib/lessons/shader-source.ts`

- [ ] Step 1: Define all lesson IDs from Introduction through Chapter 15.
- [ ] Step 2: Add required metadata: title, chapter, difficulty, estimated time, unlock requirement, demo shape/type, pipeline emphasis.
- [ ] Step 3: Add content sections for overview, concept, demo, exercises, challenge, knowledge check, summary.
- [ ] Step 4: Add starter WGSL source for early lessons and safe fallback source for advanced lessons.
- [ ] Step 5: Run TypeScript/lint checks.
- [ ] Step 6: Verify sidebar can render the full catalog.

## Task 5: Lesson Store, Progress, Achievements

**Files:**

- Modify: `lib/stores/lesson-store.ts`
- Modify: `components/lab/sidebar/lesson-sidebar.tsx`
- Modify: `components/lab/panels/lesson-content-panel.tsx`

- [ ] Step 1: Add completed lesson IDs state.
- [ ] Step 2: Add `completeLesson(lessonId)` action.
- [ ] Step 3: Add derived lock/available/completed state.
- [ ] Step 4: Add bookmarks and recent lessons state.
- [ ] Step 5: Add achievements derived from completion milestones.
- [ ] Step 6: Update sidebar to show progress, locks, completions, achievements, bookmarks, recents, settings.
- [ ] Step 7: Add useful empty actions for no bookmarks/no recents.
- [ ] Step 8: Run `bun run lint`.
- [ ] Step 9: Manually verify completing Chapter 1 unlocks Chapter 2.

## Task 6: Lesson Content Experience

**Files:**

- Modify: `components/lab/panels/lesson-content-panel.tsx`
- Modify: `lib/stores/ui-store.ts` if lesson tab state lives there.
- Modify: `lib/stores/lesson-store.ts` if lesson tab state lives there.

- [ ] Step 1: Add tabs: Overview, Concept, Interactive Demo, Live Code, Exercises, Challenge, Knowledge Check, Summary.
- [ ] Step 2: Render content from active lesson data.
- [ ] Step 3: Add exercise prompt, hints, validation button, result state, and next lesson action.
- [ ] Step 4: Make knowledge check answer selection interactive.
- [ ] Step 5: Connect completion action to store.
- [ ] Step 6: Run lint and manually verify tab switching.

## Task 7: VS Code-Style Editor Upgrade

**Files:**

- Modify: `components/lab/panels/code-editor-panel.tsx`
- Modify: `components/lab/use-wgsl-validator.ts`
- Modify: `lib/stores/workspace-store.ts`
- Optional create: `components/lab/editor/editor-toolbar.tsx`
- Optional create: `components/lab/editor/editor-diagnostics.tsx`

- [ ] Step 1: Add file tabs for vertex and fragment WGSL.
- [ ] Step 2: Add toolbar actions: run/apply, format, copy, download, share, split, search, replace, bookmark, version history.
- [ ] Step 3: Make each toolbar action update state, perform an operation, or show a clear disabled state.
- [ ] Step 4: Display diagnostics with line/file context.
- [ ] Step 5: Add version history entries when code is applied.
- [ ] Step 6: Run lint.
- [ ] Step 7: Verify editing/applying code updates workspace state.

## Task 8: Live Viewport Controls And Debug Modes

**Files:**

- Modify: `components/lab/panels/live-preview-panel.tsx`
- Modify: `lib/stores/metrics-store.ts`
- Optional create: `components/lab/viewport/viewport-toolbar.tsx`
- Optional create: `components/lab/viewport/debug-mode-controls.tsx`
- Optional create: `components/lab/viewport/camera-controls.tsx`

- [ ] Step 1: Add camera state: orbit/pan/zoom/readout/reset.
- [ ] Step 2: Add controls: fullscreen, screenshot, GIF, MP4, resolution.
- [ ] Step 3: Add debug mode toggles listed in TODO P4.
- [ ] Step 4: Reflect debug modes in visible overlays or inspector state.
- [ ] Step 5: Add FPS/GPU/frame/resolution overlays.
- [ ] Step 6: Add polished unsupported WebGPU state.
- [ ] Step 7: Run lint and browser smoke test.

## Task 9: Pipeline Visualizer

**Files:**

- Modify: `components/lab/panels/pipeline-visualizer-panel.tsx`
- Optional create: `lib/lab/pipeline-stages.ts`

- [ ] Step 1: Create stage metadata for the exact required pipeline sequence.
- [ ] Step 2: Render all stages with icon, label, short explanation, and selected state.
- [ ] Step 3: Add hover explanation and click expansion.
- [ ] Step 4: Add animated packet flow with reduced-motion fallback.
- [ ] Step 5: Highlight active lesson pipeline emphasis.
- [ ] Step 6: Run lint and visually verify right rail readability.

## Task 10: GPU Inspector

**Files:**

- Modify: `components/lab/panels/gpu-inspector-panel.tsx`
- Modify: `lib/stores/metrics-store.ts`
- Optional create: `lib/lab/gpu-inspector-metadata.ts`

- [ ] Step 1: Add required metric groups: geometry, draw, resources, memory, device, pipeline, shader compilation.
- [ ] Step 2: Connect values to real or deterministic simulated metrics.
- [ ] Step 3: Reflect compile errors and debug modes.
- [ ] Step 4: Add expandable rows for buffers, textures, uniforms, limits, capabilities.
- [ ] Step 5: Run lint and manual UI verification.

## Task 11: Shader Playground

**Files:**

- Modify: `components/lab/panels/shader-playground-panel.tsx`
- Modify: `lib/stores/workspace-store.ts`
- Optional create: `lib/lab/shader-gallery.ts`

- [ ] Step 1: Add all required shader entries.
- [ ] Step 2: Render gallery, preview, code, explanation, tags, difficulty.
- [ ] Step 3: Add modify/save/download actions.
- [ ] Step 4: Show saved shaders from local state.
- [ ] Step 5: Run lint and verify selecting a shader updates preview/code.

## Task 12: Geometry, Matrix, Lighting, Textures, Examples

**Files:**

- Modify: `components/lab/panels/geometry-lab-panel.tsx`
- Create: `components/lab/panels/matrix-visualizer-panel.tsx`
- Create: `components/lab/panels/lighting-panel.tsx`
- Create: `components/lab/panels/textures-panel.tsx`
- Create: `components/lab/panels/examples-panel.tsx`
- Modify: `app/lab/page.tsx`
- Optional create: `lib/lab/geometry-presets.ts`

- [ ] Step 1: Expand geometry presets and controls.
- [ ] Step 2: Add matrix visualizer panel with matrix display and sliders.
- [ ] Step 3: Add lighting panel with stateful light controls.
- [ ] Step 4: Add textures panel with UV/sampler/texture controls.
- [ ] Step 5: Add examples panel linking lessons, shaders, geometry, and docs.
- [ ] Step 6: Wire panels into `app/lab/page.tsx`.
- [ ] Step 7: Run lint and verify each route surface renders.

## Task 13: Performance, Documentation, Settings, Command Palette

**Files:**

- Modify: `components/lab/panels/performance-panel.tsx`
- Modify: `components/lab/panels/documentation-panel.tsx`
- Modify: `components/lab/command-palette.tsx`
- Modify: `components/lab/navigation/top-nav.tsx`
- Modify: `lib/stores/ui-store.ts`

- [ ] Step 1: Add performance charts and timeline from metrics store.
- [ ] Step 2: Add docs sections listed in TODO P8.
- [ ] Step 3: Expand command palette with modules, lessons, docs, settings, and editor actions.
- [ ] Step 4: Add settings/profile/shortcut/bookmark/recent surfaces.
- [ ] Step 5: Verify keyboard navigation and focus restore.
- [ ] Step 6: Run lint.

## Task 14: Accessibility And Responsive Polish

**Files:**

- Modify all touched interactive components.
- Modify `app/globals.css` if needed for focus utilities.

- [ ] Step 1: Add labels to icon-only controls.
- [ ] Step 2: Add visible focus states.
- [ ] Step 3: Verify keyboard operation for nav, sidebar, tabs, command palette, dialogs.
- [ ] Step 4: Add reduced-motion behavior.
- [ ] Step 5: Test mobile layout and remove overflow/clipping.
- [ ] Step 6: Run lint and browser check.

## Task 15: Final Verification

**Files:**

- Modify: `TODO.md`
- Modify documentation only if final behavior differs from plan.

- [ ] Step 1: Run lint.

```bash
bun run lint
```

Expected: PASS.

- [ ] Step 2: Run build.

```bash
bun run build
```

Expected: PASS.

- [ ] Step 3: Run local browser smoke test on `/lab`.
- [ ] Step 4: Verify core workflow from TODO P10.
- [ ] Step 5: Update `TODO.md` completed items and known remaining work.
- [ ] Step 6: Final handoff summary should mention tests run and any remaining risks.

## Coverage Map

- Visual system: Tasks 2, 3, 8, 9, 14.
- Navigation: Tasks 3, 13.
- Sidebar/lessons/progress: Tasks 4, 5, 6.
- Code editor: Task 7.
- Live preview/viewport/debug modes: Task 8.
- Pipeline visualizer: Task 9.
- GPU inspector: Task 10.
- Shader playground: Task 11.
- Geometry/matrix/lighting/textures/examples: Task 12.
- Performance/docs/settings/command palette: Task 13.
- Accessibility/performance/responsive: Tasks 14, 15.
