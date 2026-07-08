"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  Grid3X3,
  Axis3D,
  Box,
  Activity,
  Monitor,
  Expand,
  ImageIcon,
  Rotate3D
} from "lucide-react";
import { useWebGpuDemo } from "@/lib/webgpu/use-webgpu-demo";
import { useGpuMetrics } from "@/components/lab/use-gpu-metrics";
import { useUiStore } from "@/lib/stores/ui-store";
import { cn } from "@/lib/utils";
import type { ShapeId } from "@/lib/webgpu/triangle-demo";

const toolbarActions = [
  { id: "grid", label: "Grid", icon: Grid3X3 },
  { id: "axis", label: "Axis", icon: Axis3D },
  { id: "wireframe", label: "Wireframe", icon: Box },
  { id: "normals", label: "Normals", icon: Rotate3D }
];

const additionalActions = [
  { id: "bounding", label: "Bounding boxes", icon: Box },
  { id: "vertices", label: "Vertices", icon: Camera },
  { id: "uv", label: "UV", icon: Grid3X3 },
  { id: "depth", label: "Depth", icon: Activity }
];

export function LivePreviewPanel({
  shapeId,
  shaderOverrides
}: {
  shapeId: ShapeId;
  shaderOverrides?: import("@/lib/webgpu/triangle-demo").ShaderOverrides;
}) {
  const { canvasRef, titleRef, state, getStats } = useWebGpuDemo(shapeId, shaderOverrides);
  const { showGpuMetrics } = useUiStore();
  const { metrics, updateDrawStats } = useGpuMetrics(showGpuMetrics);
  const [activeToggles, setActiveToggles] = useState<Record<string, boolean>>({});
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [screenshotState, setScreenshotState] = useState<"idle" | "processing" | "saved">("idle");
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!showGpuMetrics) return;
    let raf: number;
    const tick = () => {
      updateDrawStats(getStats().drawCalls, getStats().vertices, getStats().triangles);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [showGpuMetrics, getStats, updateDrawStats]);

  const toggle = useCallback((id: string) => {
    setActiveToggles((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const takeScreenshot = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    setScreenshotState("processing");
    try {
      const link = document.createElement("a");
      link.download = `webgpu-lab-${shapeId}-${Date.now()}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
      setScreenshotState("saved");
      setTimeout(() => setScreenshotState("idle"), 1200);
    } catch {
      setScreenshotState("idle");
    }
  }, [canvasRef, shapeId]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex min-h-[280px] flex-1 flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60 shadow-card",
        isFullscreen ? "fixed inset-4 z-[100]" : "h-full lg:h-auto"
      )}
    >
      <div className="glow-ring" />

      <div className="relative z-10 flex shrink-0 items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-subtle">
            WebGPU Viewport
          </span>
          <h3
            ref={titleRef}
            className="font-display text-sm font-semibold text-white"
          >
            Initializing…
          </h3>
        </div>

        <div className="flex items-center gap-1">
          {toolbarActions.map((action) => {
            const Icon = action.icon;
            const active = !!activeToggles[action.id];
            return (
              <button
                key={action.id}
                onClick={() => toggle(action.id)}
                className={cn(
                  "relative rounded-lg p-1.5 transition-colors",
                  active
                    ? "text-brand"
                    : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                )}
                aria-label={action.label}
                title={action.label}
              >
                {active ? (
                  <motion.div
                    layoutId="preview-action-pill"
                    className="absolute inset-0 rounded-lg bg-brand/15"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                ) : null}
                <Icon className="relative z-10 size-4" />
              </button>
            );
          })}

          <div className="mx-1 h-4 w-px bg-white/10" />

          <button
            onClick={takeScreenshot}
            disabled={screenshotState !== "idle"}
            className={cn(
              "rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-200 disabled:opacity-50",
              screenshotState === "saved" && "text-emerald-400"
            )}
            aria-label="Screenshot"
            title={screenshotState === "saved" ? "Saved" : "Screenshot"}
          >
            <ImageIcon className="size-4" />
          </button>

          <button
            onClick={() => setIsFullscreen((v) => !v)}
            className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-200"
            aria-label="Toggle fullscreen"
            title="Toggle fullscreen"
          >
            <Expand className="size-4" />
          </button>
        </div>
      </div>

      <div className="relative z-10 flex-1 overflow-hidden p-4">
        <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/10 bg-slate-900/60">
          <canvas
            ref={canvasRef}
            className="h-full w-full rounded-xl bg-slate-950"
          />

          <AnimatePresence>
            {state.status !== "ready" ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-slate-950/80 backdrop-blur-sm"
              >
                <div className="size-8 animate-spin rounded-full border-2 border-brand/30 border-t-brand" />
                <p className="text-xs text-slate-400">
                  {state.status === "loading" || state.status === "initial"
                    ? "Negotiating WebGPU device…"
                    : state.message}
                </p>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>

      {showGpuMetrics ? (
        <div className="relative z-10 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-white/10 px-4 py-2 text-[11px] text-slate-400">
          <span className="inline-flex items-center gap-1.5">
            <Activity className="size-3.5 text-emerald-400" />
            {metrics.fps} FPS
          </span>
          <span>{metrics.frameTime} ms frame</span>
          <span>{metrics.drawCalls} draw calls</span>
          <span>{metrics.vertices.toLocaleString()} vertices</span>
          <span>{metrics.triangles.toLocaleString()} triangles</span>
          {Object.entries(activeToggles)
            .filter(([, active]) => active)
            .map(([id]) => (
              <span key={id} className="rounded bg-brand/20 px-1.5 py-0.5 text-[10px] text-brand-subtle">
                {id}
              </span>
            ))}
          <span className="ml-auto flex items-center gap-1.5">
            <Monitor className="size-3.5" />
            Auto
          </span>
        </div>
      ) : null}
    </div>
  );
}
