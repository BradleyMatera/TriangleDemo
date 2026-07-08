"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, ChevronRight, Cpu, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMetricsStore } from "@/lib/stores/metrics-store";
import { useLessonStore } from "@/lib/stores/lesson-store";
import { useWorkspaceStore } from "@/lib/stores/workspace-store";

const pipelineStages = [
  {
    id: "cpu",
    label: "CPU",
    summary: "JavaScript prepares the frame, updates uniforms, and schedules commands.",
    detail:
      "The CPU runs application logic: animation updates, input handling, and render scheduling. It writes to JavaScript-visible buffers and textures before any GPU work begins."
  },
  {
    id: "js",
    label: "JavaScript",
    summary: "Application logic builds render bundles and vertex data.",
    detail:
      "JS creates command encoders, sets bind groups, writes vertex/index data, and chooses pipelines. Most WebGPU overhead is determined here by how few state changes are made."
  },
  {
    id: "encoder",
    label: "Command Encoder",
    summary: "Records GPU commands into a command buffer.",
    detail:
      "A GPUCommandEncoder captures render passes, compute dispatches, copy operations, and debug markers. Encoders are cheap to create and can be batched."
  },
  {
    id: "buffer",
    label: "Command Buffer",
    summary: "Serialized GPU work ready for submission.",
    detail:
      "The finished encoder produces a GPUCommandBuffer containing all commands for one submission. Buffers can be reused, but they are single-use once submitted."
  },
  {
    id: "queue",
    label: "GPU Queue",
    summary: "The queue serially executes command buffers.",
    detail:
      "GPUQueue.submit takes one or more command buffers and passes them to the driver. Submissions within a single queue execute in order."
  },
  {
    id: "vertex",
    label: "Vertex Shader",
    summary: "Processes each vertex and outputs clip-space positions.",
    detail:
      "The vertex shader runs once per vertex. It reads attributes, uniform buffers, and textures, then writes to @builtin(position) and user-defined outputs."
  },
  {
    id: "assembly",
    label: "Primitive Assembly",
    summary: "Vertices are grouped into triangles.",
    detail:
      "After vertex shading, primitives are assembled based on the pipeline topology (triangle-list, strip, line-list, point-list, etc.). Index buffers are read here."
  },
  {
    id: "rasterizer",
    label: "Rasterizer",
    summary: "Triangles are converted into fragments.",
    detail:
      "The rasterizer clips, culls, and interpolates per-vertex values across the screen. Each fragment receives interpolated attributes for the fragment shader."
  },
  {
    id: "fragment",
    label: "Fragment Shader",
    summary: "Determines the color of each fragment.",
    detail:
      "The fragment shader runs once per rasterized fragment. It returns @location(0) color values and can sample textures or run discard for alpha cutouts."
  },
  {
    id: "depth",
    label: "Depth Buffer",
    summary: "Z-testing discards hidden fragments.",
    detail:
      "Depth/stencil testing compares fragment depth against the depth texture. Fragments that fail are discarded before blending and framebuffer writes."
  },
  {
    id: "framebuffer",
    label: "Framebuffer",
    summary: "Final color pixels are written.",
    detail:
      "Surviving fragments are blended into color attachments. Multi-sampled attachments are resolved here before presentation."
  },
  {
    id: "present",
    label: "Presentation",
    summary: "The swap chain displays the image on screen.",
    detail:
      "The swap chain presents the completed frame. The browser compositor schedules the image for the next vblank."
  }
] as const;

const pipelineStageCycle = pipelineStages.map((s) => s.id);

const lessonEmphasis: Record<string, string[]> = {
  intro: ["cpu", "js", "encoder"],
  "ch1-first-triangle": ["vertex", "fragment", "framebuffer", "present"],
  "ch2-vertex-buffers": ["vertex", "assembly"],
  "ch3-index-buffers": ["assembly", "vertex"],
  "ch4-uniform-buffers": ["js", "vertex", "fragment"],
  "ch5-matrices": ["vertex"],
  "ch6-coordinate-systems": ["vertex", "rasterizer"],
  "ch7-textures": ["fragment"],
  "ch8-lighting": ["vertex", "fragment"],
  "ch9-model-loading": ["js", "vertex", "assembly"],
  "ch10-instancing": ["vertex", "assembly"],
  "ch11-shadow-mapping": ["fragment", "depth"],
  "ch12-post-processing": ["fragment", "framebuffer", "present"],
  "ch13-particles": ["cpu", "queue", "vertex"],
  "ch14-compute-shaders": ["queue", "vertex"],
  "ch15-optimization": ["cpu", "queue", "fragment"]
};

export function PipelineVisualizerPanel() {
  const [activeStage, setActiveStage] = useState<string | null>(null);
  const [pulseStage, setPulseStage] = useState<string | null>(null);
  const framePulse = useMetricsStore((s) => s.metrics.framePulse);
  const activeLessonId = useLessonStore((s) => s.activeLessonId);
  const compileError = useWorkspaceStore((s) => s.compileError);
  const emphasized = useMemo(
    () => new Set(lessonEmphasis[activeLessonId] ?? []),
    [activeLessonId]
  );

  useEffect(() => {
    let step = 0;
    const interval = setInterval(() => {
      setPulseStage(pipelineStageCycle[step]!);
      step = (step + 1) % pipelineStageCycle.length;
    }, 160);
    return () => clearInterval(interval);
  }, [framePulse]);

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B0C15]/80 p-5 shadow-card">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-subtle">GPU Pipeline</span>
          <h2 className="mt-1 font-display text-lg font-semibold text-white">Graphics Pipeline Visualizer</h2>
          <p className="text-xs text-slate-400">
            Hover or click a stage for details. Packets show live data flow.
          </p>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-slate-400">
          <Cpu className="inline-block size-3 align-text-bottom" /> {activeLessonId}
        </div>
      </div>

      <div className="relative flex flex-1 flex-col items-center gap-3 overflow-y-auto py-2">
        {pipelineStages.map((stage, i) => {
          const isEmphasized = emphasized.has(stage.id);
          const hasCompileError = !!compileError && (stage.id === "vertex" || stage.id === "fragment");
          const isLast = i === pipelineStages.length - 1;
          return (
            <StageNode
              key={stage.id}
              stage={stage}
              index={i}
              isActive={activeStage === stage.id}
              isPulsing={pulseStage === stage.id}
              isEmphasized={isEmphasized}
              hasCompileError={hasCompileError}
              onHover={() => setActiveStage(stage.id)}
              onLeave={() => setActiveStage(null)}
              onClick={() => setActiveStage(stage.id)}
            >
              {!isLast ? (
                <Packet
                  active={pulseStage === stage.id}
                  emphasized={isEmphasized || emphasized.has(pipelineStages[i + 1]!.id)}
                  index={i}
                />
              ) : null}
            </StageNode>
          );
        })}
      </div>

      <AnimatePresence>
        {activeStage ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-white/10 pt-4"
          >
            <StageDetail
              stage={pipelineStages.find((s) => s.id === activeStage)!}
              emphasized={emphasized.has(activeStage)}
              compileError={activeStage === "vertex" || activeStage === "fragment" ? compileError : null}
              onClose={() => setActiveStage(null)}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function StageNode({
  stage,
  index,
  isActive,
  isPulsing,
  isEmphasized,
  hasCompileError,
  onHover,
  onLeave,
  onClick,
  children
}: {
  stage: (typeof pipelineStages)[number];
  index: number;
  isActive: boolean;
  isPulsing: boolean;
  isEmphasized: boolean;
  hasCompileError: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
  children?: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.04 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`${stage.label} pipeline stage. ${stage.summary}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
      className={cn(
        "group relative w-full max-w-md cursor-pointer rounded-xl border px-4 py-3 text-center outline-none transition-all focus-visible:ring-2 focus-visible:ring-brand/60",
        isActive || isPulsing
          ? "border-brand/50 bg-brand/15 text-white shadow-[0_0_30px_rgba(108,140,255,0.2)]"
          : hasCompileError
            ? "border-rose-400/50 bg-rose-500/15 text-rose-100"
          : isEmphasized
            ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-100"
            : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:bg-white/10"
      )}
    >
      <div className="flex items-center justify-center gap-2">
        <span className="text-[10px] font-mono text-brand-subtle">{String(index + 1).padStart(2, "0")}</span>
        <span className="text-xs font-semibold">{stage.label}</span>
        {isEmphasized ? (
          <span className="rounded-full bg-cyan-400/20 px-1.5 py-0.5 text-[9px] font-medium text-cyan-300">
            lesson
          </span>
        ) : null}
        {hasCompileError ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-rose-400/20 px-1.5 py-0.5 text-[9px] font-medium text-rose-200">
            <AlertTriangle className="size-2.5" />
            diagnostic
          </span>
        ) : null}
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="mt-2 text-[11px] leading-relaxed text-slate-300">{stage.summary}</p>
      </motion.div>

      {children}

      {isPulsing ? (
        <motion.div
          layoutId="pipeline-pulse"
          className="pointer-events-none absolute inset-0 rounded-xl border-2 border-brand/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      ) : null}
    </motion.div>
  );
}

function Packet({ active, emphasized, index }: { active: boolean; emphasized: boolean; index: number }) {
  return (
    <div className="absolute left-1/2 top-full z-10 -translate-x-1/2">
      <motion.div
        animate={
          active
            ? { y: [0, 10], opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }
            : { y: [0, 6, 0], opacity: [0.25, 0.5, 0.25] }
        }
        transition={{ duration: active ? 0.9 : 1.6, repeat: Infinity, delay: index * 0.06 }}
        className={cn(
          "size-2 rounded-full shadow-[0_0_8px_currentColor]",
          active ? (emphasized ? "bg-cyan-400 text-cyan-400" : "bg-brand text-brand") : "bg-white/30 text-white/30"
        )}
      />
    </div>
  );
}

function StageDetail({
  stage,
  emphasized,
  compileError,
  onClose
}: {
  stage: (typeof pipelineStages)[number];
  emphasized: boolean;
  compileError: string | null;
  onClose: () => void;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Info className="size-4 text-brand-subtle" />
          <span className="text-sm font-semibold text-white">{stage.label}</span>
          {emphasized ? (
            <span className="rounded-full bg-cyan-400/20 px-2 py-0.5 text-[10px] text-cyan-300">emphasized by lesson</span>
          ) : null}
          {compileError ? (
            <span className="rounded-full bg-rose-400/20 px-2 py-0.5 text-[10px] text-rose-200">compile diagnostic</span>
          ) : null}
        </div>
        <button
          onClick={onClose}
          className="flex items-center gap-1 text-[10px] text-slate-400 hover:text-slate-200"
          aria-label="Close stage detail"
        >
          Close <ChevronRight className="size-3 rotate-90" />
        </button>
      </div>
      <p className="text-[11px] leading-relaxed text-slate-300">{stage.detail}</p>
      {compileError ? (
        <div className="mt-3 rounded-lg border border-rose-400/20 bg-rose-500/10 px-3 py-2 text-[11px] leading-relaxed text-rose-200">
          {compileError}
        </div>
      ) : null}
    </div>
  );
}
