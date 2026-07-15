"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useWebGpuDemo } from "@/lib/webgpu/use-webgpu-demo";
import { useGpuMetrics } from "@/components/lab/use-gpu-metrics";
import { useUiStore } from "@/lib/stores/ui-store";
import { useCameraStore } from "@/lib/stores/camera-store";
import { useMetricsStore } from "@/lib/stores/metrics-store";
import {
  CameraControls,
  ViewportCanvas,
  ViewportHeader,
  ViewportMetricsBar,
  type RecordingState,
  type ScreenshotState
} from "@/components/lab/panels/live-preview-ui";
import { cn } from "@/lib/utils";
import type { ShapeId } from "@/lib/webgpu/triangle-demo";

export function LivePreviewPanel({
  shapeId,
  shaderOverrides,
  demoRevision = 0
}: {
  shapeId: ShapeId;
  shaderOverrides?: import("@/lib/webgpu/triangle-demo").ShaderOverrides;
  demoRevision?: number;
}) {
  const { canvasRef, titleRef, state, getStats } = useWebGpuDemo(shapeId, shaderOverrides, demoRevision);
  const { showGpuMetrics } = useUiStore();
  const { metrics, updateDrawStats } = useGpuMetrics(showGpuMetrics);
  const [activeToggles, setActiveToggles] = useState<Record<string, boolean>>({});
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [screenshotState, setScreenshotState] = useState<ScreenshotState>("idle");
  const [recordingState, setRecordingState] = useState<RecordingState>("idle");
  const [recordingMessage, setRecordingMessage] = useState("");
  const [resolution, setResolution] = useState("Auto");
  const [frameCount, setFrameCount] = useState(0);
  const cameraStore = useCameraStore();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef(0);

  useEffect(() => {
    useMetricsStore.getState().setDemoStatus(
      state.status === "unsupported" || state.status === "error"
        ? { type: state.status, message: state.message }
        : { type: state.status }
    );
  }, [state]);

  useEffect(() => {
    if (!showGpuMetrics) return;
    let raf: number;
    const tick = () => {
      updateDrawStats(getStats().drawCalls, getStats().vertices, getStats().triangles);
      frameRef.current += 1;
      if (frameRef.current % 20 === 0) {
        setFrameCount(frameRef.current);
      }
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

  const recordClip = useCallback(
    (format: "gif" | "mp4") => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      if (typeof canvas.captureStream !== "function" || typeof MediaRecorder === "undefined") {
        setRecordingState("unsupported");
        setRecordingMessage("This browser cannot record canvas video.");
        window.setTimeout(() => {
          setRecordingState("idle");
          setRecordingMessage("");
        }, 2200);
        return;
      }

      const mimeType = getRecordingMimeType(format);
      if (!mimeType && !MediaRecorder.isTypeSupported("video/webm")) {
        setRecordingState("unsupported");
        setRecordingMessage("No supported video encoder was found.");
        window.setTimeout(() => {
          setRecordingState("idle");
          setRecordingMessage("");
        }, 2200);
        return;
      }

      try {
        const stream = canvas.captureStream(60);
        const recorder = new MediaRecorder(stream, mimeType ? { mimeType } : undefined);
        const chunks: BlobPart[] = [];

        recorder.ondataavailable = (event) => {
          if (event.data.size > 0) chunks.push(event.data);
        };

        recorder.onerror = () => {
          stream.getTracks().forEach((track) => track.stop());
          setRecordingState("error");
          setRecordingMessage("Recording failed while capturing the viewport.");
          window.setTimeout(() => {
            setRecordingState("idle");
            setRecordingMessage("");
          }, 2400);
        };

        recorder.onstop = () => {
          stream.getTracks().forEach((track) => track.stop());
          if (chunks.length === 0) {
            setRecordingState("error");
            setRecordingMessage("Recording finished without video data.");
            window.setTimeout(() => {
              setRecordingState("idle");
              setRecordingMessage("");
            }, 2400);
            return;
          }

          const finalType = recorder.mimeType || mimeType || "video/webm";
          const extension = finalType.includes("mp4") ? "mp4" : "webm";
          const blob = new Blob(chunks, { type: finalType });
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.download = `webgpu-lab-${shapeId}-${Date.now()}.${extension}`;
          link.href = url;
          link.click();
          URL.revokeObjectURL(url);

          setRecordingState("saved");
          setRecordingMessage(
            format === "gif" && extension === "webm"
              ? "GIF encoding is not bundled; downloaded a WebM viewport capture."
              : `Downloaded ${extension.toUpperCase()} viewport capture.`
          );
          window.setTimeout(() => {
            setRecordingState("idle");
            setRecordingMessage("");
          }, 2600);
        };

        setRecordingState(format);
        setRecordingMessage(format === "gif" ? "Capturing viewport video..." : "Capturing viewport clip...");
        recorder.start();
        window.setTimeout(() => {
          if (recorder.state !== "inactive") {
            recorder.stop();
          }
        }, 2200);
      } catch {
        setRecordingState("error");
        setRecordingMessage("Recording could not start in this browser.");
        window.setTimeout(() => {
          setRecordingState("idle");
          setRecordingMessage("");
        }, 2400);
      }
    },
    [canvasRef, shapeId]
  );

  const resetCamera = useCallback(() => {
    cameraStore.reset();
  }, [cameraStore]);

  const isUnavailable = state.status === "unsupported" || state.status === "error";
  const unavailableMessage = isUnavailable ? state.message : "";

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex min-h-[280px] flex-1 flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60 shadow-card",
        isFullscreen ? "fixed inset-4 z-[100]" : "h-full lg:h-auto"
      )}
    >
      <div className="glow-ring" />

      <ViewportHeader
        titleRef={titleRef}
        activeToggles={activeToggles}
        screenshotState={screenshotState}
        recordingState={recordingState}
        onToggle={toggle}
        onScreenshot={takeScreenshot}
        onRecord={recordClip}
        onToggleFullscreen={() => setIsFullscreen((v) => !v)}
      />

      <ViewportCanvas
        canvasRef={canvasRef}
        state={state}
        isUnavailable={isUnavailable}
        unavailableMessage={unavailableMessage}
        resolution={resolution}
        recordingState={recordingState}
        recordingMessage={recordingMessage}
        onShowLearningOverlays={() => setActiveToggles({ grid: true, axis: true })}
      />

      <CameraControls
        camera={cameraStore}
        resolution={resolution}
        onCameraChange={(next) => {
          cameraStore.setOrbit(next.orbitX, next.orbitY);
          cameraStore.setPan(next.panX, next.panY);
          cameraStore.setZoom(next.zoom);
        }}
        onResolutionChange={setResolution}
        onReset={resetCamera}
      />

      {showGpuMetrics ? (
        <ViewportMetricsBar
          metrics={metrics}
          frameCount={frameCount}
          activeToggles={activeToggles}
          resolution={resolution}
        />
      ) : null}
    </div>
  );
}

function getRecordingMimeType(format: "gif" | "mp4") {
  if (typeof MediaRecorder === "undefined") return "";
  const candidates =
    format === "mp4"
      ? ["video/mp4;codecs=h264", "video/mp4", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"]
      : ["video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"];
  return candidates.find((type) => MediaRecorder.isTypeSupported(type)) ?? "";
}
