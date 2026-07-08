"use client";

import { useMemo } from "react";
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
import { useLessonStore } from "@/lib/stores/lesson-store";
import { useWorkspaceStore } from "@/lib/stores/workspace-store";
import { useUiStore } from "@/lib/stores/ui-store";
import { useGeometryStore } from "@/lib/stores/geometry-store";
import { getLessonById } from "@/lib/lessons/catalog";
import { getLessonShaderSource } from "@/lib/lessons/shader-source";
import { cn } from "@/lib/utils";
import type { ShaderOverrides, ShapeId } from "@/lib/webgpu/triangle-demo";

export default function LabPage() {
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
        <div className="flex h-full flex-col gap-4 lg:grid lg:h-full lg:grid-cols-2">
          <CodeEditorPanel />
          <LivePreviewPanel shapeId={shapeId} shaderOverrides={shaderOverrides} demoRevision={demoRevision} />
        </div>
      );
    case "pipeline":
      return (
        <div className="flex h-full flex-col gap-4 lg:grid lg:h-full lg:grid-cols-2">
          <PipelineVisualizerPanel />
          <LivePreviewPanel shapeId={shapeId} shaderOverrides={shaderOverrides} demoRevision={demoRevision} />
        </div>
      );
    case "shaders":
      return <ShaderPlaygroundPanel />;
    case "geometry":
      return (
        <div className="flex h-full flex-col gap-4 lg:grid lg:h-full lg:grid-cols-2">
          <GeometryLabPanel />
          <LivePreviewPanel shapeId={shapeId} shaderOverrides={shaderOverrides} demoRevision={demoRevision} />
        </div>
      );
    case "matrices":
      return (
        <div className="flex h-full flex-col gap-4 lg:grid lg:h-full lg:grid-cols-2">
          <MatrixLabPanel />
          <LivePreviewPanel shapeId={shapeId} shaderOverrides={shaderOverrides} demoRevision={demoRevision} />
        </div>
      );
    case "lighting":
      return (
        <div className="flex h-full flex-col gap-4 lg:grid lg:h-full lg:grid-cols-2">
          <LightingLabPanel />
          <LivePreviewPanel shapeId={shapeId} shaderOverrides={shaderOverrides} demoRevision={demoRevision} />
        </div>
      );
    case "textures":
      return (
        <div className="flex h-full flex-col gap-4 lg:grid lg:h-full lg:grid-cols-2">
          <TexturesLabPanel />
          <LivePreviewPanel shapeId={shapeId} shaderOverrides={shaderOverrides} demoRevision={demoRevision} />
        </div>
      );
    case "examples":
      return (
        <div className="flex h-full flex-col gap-4 lg:grid lg:h-full lg:grid-cols-2">
          <ExamplesLabPanel />
          <LivePreviewPanel shapeId={shapeId} shaderOverrides={shaderOverrides} demoRevision={demoRevision} />
        </div>
      );
    case "performance":
      return (
        <div className="flex h-full flex-col gap-4 lg:grid lg:h-full lg:grid-cols-2">
          <PerformancePanel />
          <LivePreviewPanel shapeId={shapeId} shaderOverrides={shaderOverrides} demoRevision={demoRevision} />
        </div>
      );
    case "playground":
      return (
        <div className="flex h-full flex-col gap-4 lg:grid lg:h-full lg:grid-cols-2">
          <ShaderPlaygroundPanel />
          <LivePreviewPanel shapeId={shapeId} shaderOverrides={shaderOverrides} demoRevision={demoRevision} />
        </div>
      );
    case "documentation":
      return (
        <div className="flex h-full flex-col gap-4 lg:grid lg:h-full lg:grid-cols-2">
          <DocumentationPanel />
          <LivePreviewPanel shapeId={shapeId} shaderOverrides={shaderOverrides} demoRevision={demoRevision} />
        </div>
      );
    case "lessons":
    default:
      return (
        <div className="flex h-full flex-col gap-4 lg:grid lg:h-full lg:grid-cols-[1fr_1.2fr]">
          <LessonContentPanel />
          <LivePreviewPanel shapeId={shapeId} shaderOverrides={shaderOverrides} demoRevision={demoRevision} />
        </div>
      );
  }
}
