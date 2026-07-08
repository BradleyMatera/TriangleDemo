"use client";

import { useEffect, useMemo, useState } from "react";
import { LabTopNav } from "@/components/lab/navigation/top-nav";
import { LessonSidebar } from "@/components/lab/sidebar/lesson-sidebar";
import { LessonContentPanel } from "@/components/lab/panels/lesson-content-panel";
import { LivePreviewPanel } from "@/components/lab/panels/live-preview-panel";
import { CodeEditorPanel } from "@/components/lab/panels/code-editor-panel";
import { PipelineVisualizerPanel } from "@/components/lab/panels/pipeline-visualizer-panel";
import { GpuInspectorPanel } from "@/components/lab/panels/gpu-inspector-panel";
import { ShaderPlaygroundPanel } from "@/components/lab/panels/shader-playground-panel";
import { GeometryLabPanel } from "@/components/lab/panels/geometry-lab-panel";
import { MatrixLabPanel } from "@/components/lab/panels/matrix-lab-panel";
import { LightingLabPanel } from "@/components/lab/panels/lighting-lab-panel";
import { TexturesLabPanel } from "@/components/lab/panels/textures-lab-panel";
import { ExamplesLabPanel } from "@/components/lab/panels/examples-lab-panel";
import { PerformancePanel } from "@/components/lab/panels/performance-panel";
import { DocumentationPanel } from "@/components/lab/panels/documentation-panel";
import { StatusBar } from "@/components/lab/status-bar";
import { CommandPalette } from "@/components/lab/command-palette";
import { ResizableSplitPane } from "@/components/lab/ui/resizable-split-pane";
import { useLessonStore } from "@/lib/stores/lesson-store";
import { useWorkspaceStore } from "@/lib/stores/workspace-store";
import { useUiStore } from "@/lib/stores/ui-store";
import { useGeometryStore } from "@/lib/stores/geometry-store";
import { getLessonById } from "@/lib/lessons/catalog";
import { getLessonShaderSource } from "@/lib/lessons/shader-source";
import { cn } from "@/lib/utils";
import type { ShaderOverrides, ShapeId } from "@/lib/webgpu/triangle-demo";

export default function LabPage() {
  const [mounted, setMounted] = useState(false);
  const activePanel = useUiStore((s) => s.activePanel);
  const reduceMotion = useUiStore((s) => s.reduceMotion);
  const highDensity = useUiStore((s) => s.highDensity);
  const activeLessonId = useLessonStore((s) => s.activeLessonId);
  const selectedGeometryShape = useGeometryStore((s) => s.selectedShape);
  const geometryRevision = useGeometryStore((s) => s.revision);
  const lesson = getLessonById(activeLessonId);
  const lessonShapeId =
    lesson?.demo?.type === "webgpu"
      ? lesson.demo.shape
      : "hello-triangle";
  const shapeId: ShapeId = activePanel === "geometry" ? selectedGeometryShape : lessonShapeId;
  const { codeVertex, codeFragment, appliedShaders } = useWorkspaceStore();

  const shaderOverrides: ShaderOverrides = useMemo(
    () => ({
      vertexShader: appliedShaders.vertexShader || codeVertex || undefined,
      fragmentShader: appliedShaders.fragmentShader || codeFragment || undefined
    }),
    [appliedShaders, codeVertex, codeFragment]
  );

  useEffect(() => {
    setMounted(true);
  }, []);

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
              shaderOverrides={activePanel === "geometry" ? {} : shaderOverrides}
              demoRevision={activePanel === "geometry" ? geometryRevision : 0}
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
  shaderOverrides,
  demoRevision
}: {
  activePanel: ReturnType<typeof useUiStore.getState>["activePanel"];
  shapeId: ShapeId;
  shaderOverrides: ShaderOverrides;
  demoRevision: number;
}) {
  switch (activePanel) {
    case "editor":
      return (
        <ResizableSplitPane leftPane={<CodeEditorPanel />} rightPane={<LivePreviewPanel shapeId={shapeId} shaderOverrides={shaderOverrides} demoRevision={demoRevision} />} />
      );
    case "pipeline":
      return (
        <ResizableSplitPane leftPane={<PipelineVisualizerPanel />} rightPane={<LivePreviewPanel shapeId={shapeId} shaderOverrides={shaderOverrides} demoRevision={demoRevision} />} />
      );
    case "shaders":
      return (
        <ResizableSplitPane leftPane={<ShaderPlaygroundPanel />} rightPane={<LivePreviewPanel shapeId="cube" shaderOverrides={shaderOverrides} demoRevision={demoRevision} />} defaultLeftWidth={55} />
      );
    case "geometry":
      return (
        <ResizableSplitPane leftPane={<GeometryLabPanel />} rightPane={<LivePreviewPanel shapeId={shapeId} shaderOverrides={shaderOverrides} demoRevision={demoRevision} />} />
      );
    case "matrices":
      return (
        <ResizableSplitPane leftPane={<MatrixLabPanel />} rightPane={<LivePreviewPanel shapeId="cube" shaderOverrides={shaderOverrides} demoRevision={demoRevision} />} />
      );
    case "lighting":
      return (
        <ResizableSplitPane leftPane={<LightingLabPanel />} rightPane={<LivePreviewPanel shapeId="cube" shaderOverrides={shaderOverrides} demoRevision={demoRevision} />} />
      );
    case "textures":
      return (
        <ResizableSplitPane leftPane={<TexturesLabPanel />} rightPane={<LivePreviewPanel shapeId="cube" shaderOverrides={shaderOverrides} demoRevision={demoRevision} />} />
      );
    case "examples":
      return (
        <ResizableSplitPane leftPane={<ExamplesLabPanel />} rightPane={<LivePreviewPanel shapeId={shapeId} shaderOverrides={shaderOverrides} demoRevision={demoRevision} />} />
      );
    case "performance":
      return (
        <ResizableSplitPane leftPane={<PerformancePanel />} rightPane={<LivePreviewPanel shapeId={shapeId} shaderOverrides={shaderOverrides} demoRevision={demoRevision} />} />
      );
    case "playground":
      return (
        <ResizableSplitPane leftPane={<ShaderPlaygroundPanel />} rightPane={<LivePreviewPanel shapeId="cube" shaderOverrides={shaderOverrides} demoRevision={demoRevision} />} defaultLeftWidth={55} />
      );
    case "documentation":
      return (
        <ResizableSplitPane leftPane={<DocumentationPanel />} rightPane={<LivePreviewPanel shapeId={shapeId} shaderOverrides={shaderOverrides} demoRevision={demoRevision} />} />
      );
    case "lessons":
    default:
      return (
        <ResizableSplitPane leftPane={<LessonContentPanel />} rightPane={<LivePreviewPanel shapeId={shapeId} shaderOverrides={shaderOverrides} demoRevision={demoRevision} />} defaultLeftWidth={40} />
      );
  }
}
