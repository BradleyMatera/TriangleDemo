"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  Axis3D,
  Box,
  Camera,
  Expand,
  Film,
  Grid3X3,
  ImageIcon,
  Monitor,
  Rotate3D,
  SlidersHorizontal,
  Video
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode, RefObject } from "react";
import type { DemoState } from "@/lib/webgpu/use-webgpu-demo";
import { EmptyState } from "@/components/lab/ui/empty-state";
import { LabButton } from "@/components/lab/ui/lab-button";
import { StatusPill } from "@/components/lab/ui/status-pill";
import { cn } from "@/lib/utils";

export type ViewportCameraState = {
  orbitX: number;
  orbitY: number;
  panX: number;
  panY: number;
  zoom: number;
};

export type RecordingState = "idle" | "gif" | "mp4" | "saved" | "unsupported" | "error";
export type ScreenshotState = "idle" | "processing" | "saved";

const toolbarActions = [
  { id: "grid", label: "Grid", icon: Grid3X3, help: "Overlay a floor grid so scale and movement are easier to read." },
  { id: "axis", label: "Axis", icon: Axis3D, help: "Show orientation axes for X, Y, and Z direction." },
  { id: "wireframe", label: "Wireframe", icon: Box, help: "Mark the current draw as a wireframe inspection target." },
  { id: "normals", label: "Normals", icon: Rotate3D, help: "Show surface-normal debug context for lighting lessons." }
];

const additionalActions = [
  { id: "bounding", label: "Bounding boxes", icon: Box, help: "Flag the object bounds used for culling and collision lessons." },
  { id: "vertices", label: "Vertices", icon: Camera, help: "Highlight vertex-level inspection in the metrics bar." },
  { id: "tangents", label: "Tangents", icon: Axis3D, help: "Mark tangent-space inspection for normal mapping." },
  { id: "uv", label: "UV", icon: Grid3X3, help: "Switch focus to texture-coordinate debugging." },
  { id: "depth", label: "Depth", icon: Activity, help: "Inspect depth-buffer related lessons and metrics." },
  { id: "lighting", label: "Lighting only", icon: Monitor, help: "Isolate lighting concepts from material color." },
  { id: "overdraw", label: "Overdraw", icon: Activity, help: "Track where fragments would be shaded repeatedly." },
  { id: "collision", label: "Collision", icon: Box, help: "Flag collision-volume inspection." },
  { id: "vertexIds", label: "Vertex IDs", icon: Camera, help: "Focus on per-vertex identity and ordering." },
  { id: "fragmentIds", label: "Fragment IDs", icon: ImageIcon, help: "Focus on fragment-level identity after rasterization." }
];

export function ViewportHeader({
  titleRef,
  activeToggles,
  screenshotState,
  recordingState,
  onToggle,
  onScreenshot,
  onRecord,
  onToggleFullscreen
}: {
  titleRef: RefObject<HTMLHeadingElement | null>;
  activeToggles: Record<string, boolean>;
  screenshotState: ScreenshotState;
  recordingState: RecordingState;
  onToggle: (id: string) => void;
  onScreenshot: () => void;
  onRecord: (format: "gif" | "mp4") => void;
  onToggleFullscreen: () => void;
}) {
  const headingRef = titleRef as unknown as RefObject<HTMLHeadingElement>;

  return (
    <div className="relative z-10 flex shrink-0 items-center justify-between border-b border-white/10 px-4 py-3">
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-[0.3em] text-brand-subtle">
          WebGPU Viewport
        </span>
        <h3 ref={headingRef} className="font-display text-sm font-semibold text-white">
          Initializing...
        </h3>
        <p className="hidden max-w-md text-[11px] leading-relaxed text-slate-500 lg:block">
          Live render target. Lessons, editor code, and Geometry Lab controls feed this canvas.
        </p>
      </div>

      <div className="flex items-center gap-1">
        {toolbarActions.map((action) => (
          <ViewportIconButton
            key={action.id}
            action={action}
            active={!!activeToggles[action.id]}
            onClick={() => onToggle(action.id)}
          />
        ))}

        <div className="mx-1 h-4 w-px bg-white/10" />

        <div className="hidden items-center gap-1 xl:flex">
          {additionalActions.map((action) => (
            <ViewportIconButton
              key={action.id}
              action={action}
              active={!!activeToggles[action.id]}
              tone="cyan"
              onClick={() => onToggle(action.id)}
            />
          ))}
        </div>

        <div className="mx-1 hidden h-4 w-px bg-white/10 xl:block" />

        <button
          onClick={onScreenshot}
          disabled={screenshotState !== "idle"}
          className={cn(
            "group relative rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-200 disabled:opacity-50",
            screenshotState === "saved" && "text-emerald-400"
          )}
          aria-label="Screenshot"
          title={screenshotState === "saved" ? "Saved" : "Screenshot"}
        >
          <ImageIcon className="size-4" />
          <ViewportTooltip>{screenshotState === "saved" ? "Screenshot saved." : "Download the current canvas as a PNG."}</ViewportTooltip>
        </button>

        <button
          onClick={() => onRecord("gif")}
          disabled={recordingState !== "idle"}
          className={cn(
            "group relative rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-200 disabled:opacity-50",
            recordingState === "gif" && "text-cyan-300",
            recordingState === "saved" && "text-emerald-400",
            (recordingState === "unsupported" || recordingState === "error") && "text-amber-300"
          )}
          aria-label="Record GIF"
          title="Record GIF preview with WebM fallback"
        >
          <Film className="size-4" />
          <ViewportTooltip>Capture a short viewport clip. Browser export falls back to WebM when GIF encoding is unavailable.</ViewportTooltip>
        </button>

        <button
          onClick={() => onRecord("mp4")}
          disabled={recordingState !== "idle"}
          className={cn(
            "group relative rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-200 disabled:opacity-50",
            recordingState === "mp4" && "text-cyan-300",
            recordingState === "saved" && "text-emerald-400",
            (recordingState === "unsupported" || recordingState === "error") && "text-amber-300"
          )}
          aria-label="Record MP4"
          title="Record MP4 or browser-supported video clip"
        >
          <Video className="size-4" />
          <ViewportTooltip>Record a short browser-supported video clip from the canvas.</ViewportTooltip>
        </button>

        <button
          onClick={onToggleFullscreen}
          className="group relative rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-200"
          aria-label="Toggle fullscreen"
          title="Toggle fullscreen"
        >
          <Expand className="size-4" />
          <ViewportTooltip>Expand or collapse the viewport inside the lab workspace.</ViewportTooltip>
        </button>
      </div>
    </div>
  );
}

function ViewportIconButton({
  action,
  active,
  tone = "brand",
  onClick
}: {
  action: { id: string; label: string; icon: LucideIcon; help: string };
  active: boolean;
  tone?: "brand" | "cyan";
  onClick: () => void;
}) {
  const Icon = action.icon;

  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative rounded-lg p-1.5 transition-colors",
        tone === "brand" &&
          (active ? "text-brand" : "text-slate-400 hover:bg-white/5 hover:text-slate-200"),
        tone === "cyan" &&
          (active
            ? "bg-cyan-400/15 text-cyan-300"
            : "text-slate-500 hover:bg-white/5 hover:text-slate-200")
      )}
      aria-label={action.label}
      aria-pressed={active}
      title={action.label}
    >
      {tone === "brand" && active ? (
        <motion.div
          layoutId="preview-action-pill"
          className="absolute inset-0 rounded-lg bg-brand/15"
          transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
        />
      ) : null}
      <Icon className="relative z-10 size-4" />
      <ViewportTooltip>{action.help}</ViewportTooltip>
    </button>
  );
}

function ViewportTooltip({ children }: { children: ReactNode }) {
  return (
    <span className="pointer-events-none absolute right-0 top-full z-40 mt-2 hidden w-56 rounded-lg border border-white/10 bg-slate-950/95 px-3 py-2 text-left text-[11px] leading-relaxed text-slate-300 shadow-2xl group-hover:block group-focus-visible:block">
      {children}
    </span>
  );
}

export function ViewportCanvas({
  canvasRef,
  state,
  cameraTransform,
  isUnavailable,
  unavailableMessage,
  resolution,
  recordingState,
  recordingMessage,
  onShowLearningOverlays
}: {
  canvasRef: RefObject<HTMLCanvasElement | null>;
  state: DemoState;
  cameraTransform: string;
  isUnavailable: boolean;
  unavailableMessage: string;
  resolution: string;
  recordingState: RecordingState;
  recordingMessage: string;
  onShowLearningOverlays: () => void;
}) {
  const webGpuCanvasRef = canvasRef as unknown as RefObject<HTMLCanvasElement>;

  return (
    <div className="relative z-10 flex-1 overflow-hidden p-4">
      <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/10 bg-slate-900/60">
        <canvas
          ref={webGpuCanvasRef}
          className="h-full w-full rounded-xl bg-slate-950"
          style={{ transform: cameraTransform, transition: "transform 180ms ease" }}
        />

        <AnimatePresence>
          {state.status !== "ready" && !isUnavailable ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-slate-950/80 backdrop-blur-sm"
            >
              <div className="size-8 animate-spin rounded-full border-2 border-brand/30 border-t-brand" />
              <p className="text-xs text-slate-400">Negotiating WebGPU device...</p>
            </motion.div>
          ) : null}
        </AnimatePresence>

        {isUnavailable ? (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-950/85 p-6 backdrop-blur-sm">
            <EmptyState
              title={state.status === "unsupported" ? "WebGPU is unavailable" : "Viewport failed to initialize"}
              description={`${unavailableMessage} The editor, lessons, docs, pipeline visualizer, and simulated tools remain usable while you switch to a WebGPU-capable browser.`}
              action={
                <div className="flex flex-wrap justify-center gap-2">
                  <LabButton
                    variant="soft"
                    onClick={() =>
                      window.open(
                        "https://webgpu.github.io/webgpu-samples/",
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                  >
                    Check WebGPU samples
                  </LabButton>
                  <LabButton variant="soft" onClick={onShowLearningOverlays}>
                    Show learning overlays
                  </LabButton>
                </div>
              }
              className="max-w-md"
            />
          </div>
        ) : null}

        <div className="pointer-events-none absolute left-3 top-3 flex flex-wrap gap-1.5">
          <StatusPill tone={state.status === "ready" ? "success" : isUnavailable ? "danger" : "warning"}>
            {state.status === "ready" ? "WebGPU ready" : state.status}
          </StatusPill>
          <StatusPill tone="brand">{resolution}</StatusPill>
          {recordingState !== "idle" ? (
            <StatusPill
              tone={
                recordingState === "saved"
                  ? "success"
                  : recordingState === "unsupported" || recordingState === "error"
                    ? "danger"
                    : "warning"
              }
            >
              {recordingState === "saved"
                ? recordingMessage || "clip saved"
                : recordingState === "unsupported" || recordingState === "error"
                  ? recordingMessage || "recording unavailable"
                  : recordingMessage || `recording ${recordingState}`}
            </StatusPill>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function CameraControls({
  camera,
  resolution,
  onCameraChange,
  onResolutionChange,
  onReset
}: {
  camera: ViewportCameraState;
  resolution: string;
  onCameraChange: (camera: ViewportCameraState) => void;
  onResolutionChange: (resolution: string) => void;
  onReset: () => void;
}) {
  return (
    <div className="relative z-10 border-t border-white/10 bg-slate-950/30 px-4 py-3">
      <div className="mb-2 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
          <SlidersHorizontal className="size-4 text-brand-subtle" />
          Camera Controls
        </div>
        <div className="flex items-center gap-2">
          <select
            value={resolution}
            onChange={(event) => onResolutionChange(event.target.value)}
            className="rounded-lg border border-white/10 bg-slate-950 px-2 py-1 text-[11px] text-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
            aria-label="Viewport resolution"
          >
            {["Auto", "720p", "1080p", "Retina"].map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <button
            onClick={onReset}
            className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[11px] font-semibold text-slate-300 hover:bg-white/10"
          >
            Reset view
          </button>
        </div>
      </div>
      <div className="grid gap-3 text-[11px] text-slate-400 sm:grid-cols-5">
        <CameraSlider
          label="Orbit X"
          value={camera.orbitX}
          min={-90}
          max={90}
          onChange={(value) => onCameraChange({ ...camera, orbitX: value })}
        />
        <CameraSlider
          label="Orbit Y"
          value={camera.orbitY}
          min={-180}
          max={180}
          onChange={(value) => onCameraChange({ ...camera, orbitY: value })}
        />
        <CameraSlider
          label="Pan X"
          value={camera.panX}
          min={-80}
          max={80}
          onChange={(value) => onCameraChange({ ...camera, panX: value })}
        />
        <CameraSlider
          label="Pan Y"
          value={camera.panY}
          min={-80}
          max={80}
          onChange={(value) => onCameraChange({ ...camera, panY: value })}
        />
        <CameraSlider
          label="Zoom"
          value={Math.round(camera.zoom * 100)}
          min={50}
          max={180}
          onChange={(value) => onCameraChange({ ...camera, zoom: value / 100 })}
          suffix="%"
        />
      </div>
    </div>
  );
}

function CameraSlider({
  label,
  value,
  min,
  max,
  suffix = "",
  onChange
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  suffix?: string;
  onChange: (value: number) => void;
}) {
  return (
    <label className="min-w-0">
      <div className="mb-1 flex items-center justify-between gap-2">
        <span>{label}</span>
        <span className="text-slate-300">
          {value}
          {suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="w-full accent-cyan-300"
      />
    </label>
  );
}

export function ViewportMetricsBar({
  metrics,
  frameCount,
  activeToggles,
  resolution
}: {
  metrics: {
    fps: number;
    frameTime: number;
    drawCalls: number;
    vertices: number;
    triangles: number;
  };
  frameCount: number;
  activeToggles: Record<string, boolean>;
  resolution: string;
}) {
  return (
    <div className="relative z-10 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-white/10 px-4 py-2 text-[11px] text-slate-400">
      <span className="inline-flex items-center gap-1.5">
        <Activity className="size-3.5 text-emerald-400" />
        {metrics.fps} FPS
      </span>
      <span>{Number.isFinite(metrics.frameTime) ? metrics.frameTime : 0} ms frame</span>
      <span>{metrics.drawCalls} draw calls</span>
      <span>{metrics.vertices.toLocaleString()} vertices</span>
      <span>{metrics.triangles.toLocaleString()} triangles</span>
      <span>{frameCount.toLocaleString()} frames</span>
      {Object.entries(activeToggles)
        .filter(([, active]) => active)
        .map(([id]) => (
          <span key={id} className="rounded bg-brand/20 px-1.5 py-0.5 text-[10px] text-brand-subtle">
            {id}
          </span>
        ))}
      <span className="ml-auto flex items-center gap-1.5">
        <Monitor className="size-3.5" />
        {resolution}
      </span>
    </div>
  );
}
