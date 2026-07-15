"use client";

import { Activity, AlertCircle, BookOpen, CheckCircle2, Cpu, Layers, Maximize, Monitor, Wifi } from "lucide-react";
import { useUiStore } from "@/lib/stores/ui-store";
import { useLessonStore } from "@/lib/stores/lesson-store";
import { useMetricsStore, type DemoRuntimeStatus } from "@/lib/stores/metrics-store";
import { lessonCatalog } from "@/lib/lessons/catalog";
import { cn } from "@/lib/utils";

const statusConfig: Record<DemoRuntimeStatus["type"], { icon: typeof CheckCircle2; label: string; color: string }> = {
  initial: { icon: Cpu, label: "Initializing WebGPU…", color: "text-slate-400" },
  loading: { icon: Activity, label: "Loading WebGPU…", color: "text-cyan-300" },
  ready: { icon: CheckCircle2, label: "WebGPU Ready", color: "text-emerald-400" },
  unsupported: { icon: AlertCircle, label: "WebGPU Unsupported", color: "text-amber-300" },
  error: { icon: AlertCircle, label: "WebGPU Error", color: "text-rose-400" }
};

export function StatusBar() {
  const { showGpuMetrics, toggleGpuMetrics, activePanel, setActivePanel } = useUiStore();
  const activeLessonId = useLessonStore((s) => s.activeLessonId);
  const progress = useLessonStore((s) => s.progress);
  const demoStatus = useMetricsStore((s) => s.demoStatus);

  const lessons = lessonCatalog.filter((item) => item.type === "lesson");
  const lessonIndex = lessons.findIndex((item) => item.id === activeLessonId);
  const lessonNumber = lessonIndex >= 0 ? lessonIndex + 1 : 1;
  const totalLessons = lessons.length;
  const completedCount = lessons.filter((item) => item.id && progress[item.id]?.status === "completed").length;
  const progressPercent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  const config = statusConfig[demoStatus.type];
  const StatusIcon = config.icon;

  return (
    <footer className="flex h-8 items-center justify-between border-t border-white/10 bg-[#0B0C15]/90 px-3 text-[11px] text-slate-400 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <span className={cn("inline-flex items-center gap-1.5", config.color)} title={demoStatus.type === "error" || demoStatus.type === "unsupported" ? demoStatus.message : undefined}>
          <StatusIcon className="size-3" />
          {config.label}
        </span>
        <span className="hidden items-center gap-1.5 sm:inline-flex">
          <Wifi className="size-3" />
          {demoStatus.type === "ready" ? "Device active" : demoStatus.type === "unsupported" ? "No device" : "Waiting for device"}
        </span>
        <span className="hidden items-center gap-1.5 md:inline-flex">
          <Cpu className="size-3" />
          GPU Queue
        </span>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={toggleGpuMetrics}
          className={cn(
            "inline-flex items-center gap-1.5 transition-colors hover:text-slate-200",
            showGpuMetrics ? "text-brand" : "text-slate-500"
          )}
        >
          <Activity className="size-3" />
          Metrics {showGpuMetrics ? "on" : "off"}
        </button>
        <button
          onClick={() => setActivePanel(activePanel === "docs" ? "learn" : "docs")}
          className={cn(
            "hidden items-center gap-1.5 transition-colors hover:text-slate-200 sm:inline-flex",
            activePanel === "docs" ? "text-brand" : "text-slate-500"
          )}
        >
          <BookOpen className="size-3" />
          Docs
        </button>
        <span className="hidden items-center gap-1.5 sm:inline-flex">
          <Layers className="size-3" />
          Lesson {lessonNumber} of {totalLessons}
        </span>
        <span className="hidden items-center gap-1.5 sm:inline-flex">
          <Monitor className="size-3" />
          {progressPercent}%
        </span>
        <span>
          <kbd className="rounded border border-white/10 bg-white/5 px-1 py-0.5 text-[10px]">⌘K</kbd>
        </span>
      </div>
    </footer>
  );
}
