"use client";

import { useEffect, useMemo, useState } from "react";
import { LabTopNav } from "@/components/lab/navigation/top-nav";
import { LessonSidebar } from "@/components/lab/sidebar/lesson-sidebar";
import { LearnPanel } from "@/components/lab/panels/learn-panel";
import { LivePreviewPanel } from "@/components/lab/panels/live-preview-panel";
import { WorkbenchPanel } from "@/components/lab/panels/workbench-panel";
import { ShaderStudioPanel } from "@/components/lab/panels/shader-studio-panel";
import { InspectPanel } from "@/components/lab/panels/inspect-panel";
import { DocumentationPanel } from "@/components/lab/panels/documentation-panel";
import { StatusBar } from "@/components/lab/status-bar";
import { CommandPalette } from "@/components/lab/command-palette";
import { ResizableSplitPane } from "@/components/lab/ui/resizable-split-pane";
import { useLessonStore } from "@/lib/stores/lesson-store";
import { useWorkspaceStore } from "@/lib/stores/workspace-store";
import { useUiStore, type PanelId } from "@/lib/stores/ui-store";
import { useGeometryStore } from "@/lib/stores/geometry-store";
import { getLessonById } from "@/lib/lessons/catalog";
import { cn } from "@/lib/utils";
import { useEffectiveSplitDirection } from "@/lib/hooks/use-split-direction";
import type { ShaderOverrides, ShapeId } from "@/lib/webgpu/triangle-demo";

const panelIds = new Set<PanelId>(["learn", "workbench", "shaders", "inspect", "docs"]);

function getPanelFromHash(): PanelId | null {
  if (typeof window === "undefined") return null;
  const hashPanel = window.location.hash.replace(/^#/, "");
  return panelIds.has(hashPanel as PanelId) ? (hashPanel as PanelId) : null;
}

export default function LabPage() {
  const [mounted, setMounted] = useState(false);
  const activePanel = useUiStore((s) => s.activePanel);
  const setActivePanel = useUiStore((s) => s.setActivePanel);
  const activeWorkbenchTool = useUiStore((s) => s.activeWorkbenchTool);
  const closeSidebar = useUiStore((s) => s.closeSidebar);
  const reduceMotion = useUiStore((s) => s.reduceMotion);
  const highDensity = useUiStore((s) => s.highDensity);
  const activeLessonId = useLessonStore((s) => s.activeLessonId);
  const selectedGeometryShape = useGeometryStore((s) => s.selectedShape);
  const geometryRevision = useGeometryStore((s) => s.revision);
  const lesson = getLessonById(activeLessonId);
  const lessonShapeId = lesson?.demo?.type === "webgpu" ? lesson.demo.shape : "hello-triangle";

  let shapeId: ShapeId = lessonShapeId;
  if (activePanel === "workbench") shapeId = selectedGeometryShape;
  if (activePanel === "shaders") shapeId = "textured-cube";

  const { codeVertex, codeFragment, appliedShaders, applyShaders } = useWorkspaceStore();
  const splitDirection = useUiStore((s) => s.splitDirection);
  const effectiveSplitDirection = useEffectiveSplitDirection(splitDirection);

  // Workbench tabs that should override the viewport shader
  const workbenchUsesOverride = activePanel === "workbench" && (activeWorkbenchTool === "lighting" || activeWorkbenchTool === "material");

  const shaderOverrides: ShaderOverrides = useMemo(
    () => ({
      vertexShader: (workbenchUsesOverride || activePanel === "shaders" ? appliedShaders.vertexShader : undefined) || codeVertex || undefined,
      fragmentShader: (workbenchUsesOverride || activePanel === "shaders" ? appliedShaders.fragmentShader : undefined) || codeFragment || undefined
    }),
    [workbenchUsesOverride, activePanel, appliedShaders, codeVertex, codeFragment]
  );

  // Clear stale shader overrides when leaving shader-override panels so Learn/Inspect/Docs render normally
  useEffect(() => {
    if (!workbenchUsesOverride && activePanel !== "shaders") {
      applyShaders({});
    }
  }, [activePanel, workbenchUsesOverride, applyShaders]);

  useEffect(() => {
    const syncPanelFromHash = () => {
      const hashPanel = getPanelFromHash();
      if (!hashPanel) return;
      setActivePanel(hashPanel);
      if (hashPanel !== "learn") closeSidebar();
    };

    syncPanelFromHash();
    setMounted(true);
    window.addEventListener("hashchange", syncPanelFromHash);

    return () => window.removeEventListener("hashchange", syncPanelFromHash);
  }, [closeSidebar, setActivePanel]);

  if (!mounted) {
    return (
      <div className="flex h-[100dvh] w-screen items-center justify-center bg-[#05070f] text-sm text-slate-400">
        Loading WebGPU Lab...
      </div>
    );
  }

  return (
    <div
      data-reduce-motion={reduceMotion ? "true" : undefined}
      className={cn(
        "flex h-[100dvh] w-screen flex-col overflow-hidden bg-[#05070f]",
        highDensity && "text-[95%]"
      )}
    >
      <LabTopNav />

      <div className="flex min-h-0 flex-1 flex-col overflow-hidden lg:flex-row">
        <LessonSidebar />

        <main className="relative flex min-h-0 flex-1 flex-col overflow-hidden">
          <div className="min-h-0 flex-1 overflow-auto p-4">
            <ActiveWorkspace
              activePanel={activePanel}
              shapeId={shapeId}
              direction={effectiveSplitDirection}
              shaderOverrides={shaderOverrides}
              demoRevision={activePanel === "workbench" ? geometryRevision : 0}
            />
          </div>
          <div className="hidden lg:block">
            <StatusBar />
          </div>
        </main>
      </div>

      <CommandPalette />
    </div>
  );
}

function ActiveWorkspace({
  activePanel,
  shapeId,
  direction,
  shaderOverrides,
  demoRevision
}: {
  activePanel: ReturnType<typeof useUiStore.getState>["activePanel"];
  shapeId: ShapeId;
  direction: "horizontal" | "vertical";
  shaderOverrides: ShaderOverrides;
  demoRevision: number;
}) {
  const rightPane = (
    <LivePreviewPanel shapeId={shapeId} shaderOverrides={shaderOverrides} demoRevision={demoRevision} />
  );

  switch (activePanel) {
    case "learn":
      return (
        <ResizableSplitPane
          leftPane={<LearnPanel />}
          rightPane={rightPane}
          direction={direction}
          defaultLeftWidth={42}
        />
      );
    case "workbench":
      return (
        <ResizableSplitPane
          leftPane={<WorkbenchPanel />}
          rightPane={rightPane}
          direction={direction}
          defaultLeftWidth={40}
        />
      );
    case "shaders":
      return (
        <ResizableSplitPane
          leftPane={<ShaderStudioPanel />}
          rightPane={rightPane}
          direction={direction}
          defaultLeftWidth={55}
        />
      );
    case "inspect":
      return (
        <ResizableSplitPane
          leftPane={<InspectPanel />}
          rightPane={rightPane}
          direction={direction}
          defaultLeftWidth={45}
        />
      );
    case "docs":
      return (
        <ResizableSplitPane
          leftPane={<DocumentationPanel />}
          rightPane={rightPane}
          direction={direction}
          defaultLeftWidth={45}
        />
      );
    default:
      return rightPane;
  }
}
