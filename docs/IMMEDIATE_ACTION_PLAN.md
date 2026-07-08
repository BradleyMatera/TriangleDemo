# Immediate Action Plan - WebGPU Lab v2.0

This plan addresses the specific issues you raised and provides concrete steps to fix them.

## Issues Identified

1. **Lessons don't guide users effectively** - Missing clear progression and objectives
2. **WebGPU viewport lacks purpose** - Not clearly connected to editor or lessons
3. **Poor geometry interaction** - Sliders are inadequate for 3D manipulation
4. **Shallow implementation of specialized panels** - Matrix, lighting, texture sections are superficial
5. **No clear separation between learning and playground modes**

## Week 1: Core Lesson System Enhancement

### Task 1: Redesign Lesson Content Structure
**Files to modify**:
- `lib/lessons/content.ts` - Expand detailed lesson content
- `lib/lessons/catalog.ts` - Add proper lesson descriptions and objectives
- `components/lab/panels/lesson-content-panel.tsx` - Enhance lesson presentation

**Goals**:
- Each lesson should have clear objectives visible to user
- Add interactive elements that connect to viewport
- Implement exercise validation system
- Create progress indicators that show learning path

### Task 2: Enhance Lesson-Viewport Integration
**Files to modify**:
- `components/lab/panels/lesson-content-panel.tsx` - Add viewport controls
- `lib/webgpu/triangle-demo.ts` - Add lesson-specific demo modes
- `components/lab/panels/live-preview-panel.tsx` - Add lesson context overlay

**Goals**:
- Viewport should clearly show what concept is being taught
- User actions in lessons should have immediate viewport feedback
- Clear visual connection between lesson content and viewport state

## Week 2: Interactive Viewport Controls

### Task 3: Implement Direct Manipulation Controls
**Files to create**:
- `components/lab/controls/transform-gizmo.tsx` - 3D transform handles
- `components/lab/controls/numeric-input.tsx` - Enhanced numeric controls
- `components/lab/panels/viewport-controls-panel.tsx` - Viewport interaction panel

**Goals**:
- Mouse/trackpad direct manipulation of objects
- Numeric input for precise control
- Visual feedback for all transformations
- Support for multiple object selection

### Task 4: Redesign Geometry Lab
**Files to modify**:
- `components/lab/panels/geometry-lab-panel.tsx` - Add viewport integration
- Create `components/lab/panels/geometry-viewport-panel.tsx` - Dedicated geometry viewport

**Goals**:
- Interactive 3D manipulation instead of sliders
- Direct vertex editing capabilities
- Real-time topology visualization
- Export/import functionality

## Week 3: Playground System Enhancement

### Task 5: Create Clear Mode Separation
**Files to modify**:
- `components/lab/navigation/top-nav.tsx` - Add mode switching
- `app/lab/page.tsx` - Implement mode-based layouts
- `lib/stores/ui-store.ts` - Add mode management

**Goals**:
- Clear "Learn" vs "Playground" modes
- Different UI layouts for each mode
- Preserved work between modes
- Intuitive navigation

### Task 6: Enhance Specialized Panels
**Files to modify**:
- `components/lab/panels/matrix-lab-panel.tsx` - Add interactive matrix manipulation
- `components/lab/panels/lighting-lab-panel.tsx` - Add viewport lighting controls
- `components/lab/panels/textures-lab-panel.tsx` - Add texture viewport preview

**Goals**:
- Each panel should have meaningful viewport integration
- Real-time feedback for all parameter changes
- Clear explanations of what each control does
- Professional-quality tools that match commercial software

## Week 4: Integration and Polish

### Task 7: Seamless Editor-Viewport Connection
**Files to modify**:
- `components/lab/panels/code-editor-panel.tsx` - Add live update indicators
- `components/lab/panels/live-preview-panel.tsx` - Add editor sync feedback
- `lib/webgpu/triangle-demo.ts` - Enhance real-time shader compilation

**Goals**:
- Immediate visual feedback for code changes
- Clear error highlighting in both editor and viewport
- Performance metrics display
- Export capabilities for all work

### Task 8: User Experience Refinement
**Files to modify**:
- All panel components - Add proper tooltips and help text
- `components/lab/command-palette.tsx` - Enhance navigation
- `components/lab/sidebar/lesson-sidebar.tsx` - Improve progress tracking

**Goals**:
- Intuitive navigation between all features
- Clear understanding of what each control does
- Professional polish matching commercial tools
- Accessibility compliance

## Success Criteria

By the end of this 4-week plan, the application should:

1. **Have a clear learning path** where users understand what they're learning and why
2. **Feature interactive viewport controls** that allow direct manipulation of objects
3. **Show clear connections** between editor changes and viewport results
4. **Provide meaningful specialized tools** in geometry, matrix, lighting, and texture panels
5. **Offer distinct modes** for learning vs. free exploration
6. **Feel like professional software** rather than a demo

## Daily Checkpoints

- **Monday**: Review progress, adjust plan based on implementation challenges
- **Wednesday**: Test with fresh user perspective, identify usability issues
- **Friday**: Verify all components work together seamlessly

## Quality Assurance

- All new features must pass `bun run lint` and `bun run build`
- Manual testing on both desktop and mobile views
- Verify performance remains smooth (60fps target)
- Check accessibility compliance
- Ensure responsive design works on all common screen sizes
