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
import { PerformancePanel } from "@/components/lab/panels/performance-panel";
import { DocumentationPanel } from "@/components/lab/panels/documentation-panel";
import { StatusBar } from "@/components/lab/status-bar";
import { CommandPalette } from "@/components/lab/command-palette";
import { useLessonStore } from "@/lib/stores/lesson-store";
import { useWorkspaceStore } from "@/lib/stores/workspace-store";
import { useUiStore } from "@/lib/stores/ui-store";
import { getLessonById } from "@/lib/lessons/catalog";
import { getLessonShaderSource } from "@/lib/lessons/shader-source";
import type { ShaderOverrides } from "@/lib/webgpu/triangle-demo";

export default function LabPage() {
  const activePanel = useUiStore((s) => s.activePanel);
  const activeLessonId = useLessonStore((s) => s.activeLessonId);
  const lesson = getLessonById(activeLessonId);
  const shapeId =
    lesson?.demo?.type === "webgpu"
      ? lesson.demo.shape
      : "hello-triangle";
  const shapeIdTyped = shapeId as "hello-triangle" | "textured-cube" | "two-cubes";
  const { codeVertex, codeFragment, appliedShaders } = useWorkspaceStore();

  const shaderOverrides: ShaderOverrides = useMemo(
    () => ({
      vertexShader: appliedShaders.vertexShader || codeVertex || undefined,
      fragmentShader: appliedShaders.fragmentShader || codeFragment || undefined
    }),
    [appliedShaders, codeVertex, codeFragment]
  );

  return (
    <div className="flex h-[100dvh] w-screen flex-col overflow-hidden bg-[#05070f]">
      <LabTopNav />

      <div className="flex min-h-0 flex-1 flex-col overflow-hidden lg:flex-row">
        <LessonSidebar />

        <main className="relative flex min-h-0 flex-1 flex-col overflow-hidden">
          <div className="min-h-0 flex-1 overflow-auto p-4">
            <ActiveWorkspace
              activePanel={activePanel}
              shapeId={shapeIdTyped}
              shaderOverrides={shaderOverrides}
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
  shaderOverrides
}: {
  activePanel: ReturnType<typeof useUiStore.getState>["activePanel"];
  shapeId: "hello-triangle" | "textured-cube" | "two-cubes";
  shaderOverrides: ShaderOverrides;
}) {
  switch (activePanel) {
    case "editor":
      return (
        <div className="flex h-full flex-col gap-4 lg:grid lg:h-full lg:grid-cols-2">
          <CodeEditorPanel />
          <LivePreviewPanel shapeId={shapeId} shaderOverrides={shaderOverrides} />
        </div>
      );
    case "pipeline":
      return (
        <div className="flex h-full flex-col gap-4 lg:grid lg:h-full lg:grid-cols-2">
          <PipelineVisualizerPanel />
          <LivePreviewPanel shapeId={shapeId} shaderOverrides={shaderOverrides} />
        </div>
      );
    case "shaders":
      return <ShaderPlaygroundPanel />;
    case "geometry":
      return (
        <div className="flex h-full flex-col gap-4 lg:grid lg:h-full lg:grid-cols-2">
          <GeometryLabPanel />
          <LivePreviewPanel shapeId={shapeId} shaderOverrides={shaderOverrides} />
        </div>
      );
    case "lighting":
    case "textures":
    case "performance":
      return (
        <div className="flex h-full flex-col gap-4 lg:grid lg:h-full lg:grid-cols-2">
          <PerformancePanel />
          <LivePreviewPanel shapeId={shapeId} shaderOverrides={shaderOverrides} />
        </div>
      );
    case "playground":
      return (
        <div className="flex h-full flex-col gap-4 lg:grid lg:h-full lg:grid-cols-2">
          <ShaderPlaygroundPanel />
          <LivePreviewPanel shapeId={shapeId} shaderOverrides={shaderOverrides} />
        </div>
      );
    case "examples":
    case "documentation":
      return (
        <div className="flex h-full flex-col gap-4 lg:grid lg:h-full lg:grid-cols-2">
          <DocumentationPanel />
          <LivePreviewPanel shapeId={shapeId} shaderOverrides={shaderOverrides} />
        </div>
      );
    case "lessons":
    default:
      return (
        <div className="flex h-full flex-col gap-4 lg:grid lg:h-full lg:grid-cols-[1fr_1.2fr]">
          <LessonContentPanel />
          <LivePreviewPanel shapeId={shapeId} shaderOverrides={shaderOverrides} />
        </div>
      );
  }
}
