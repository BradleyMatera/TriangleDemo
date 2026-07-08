"use client";

import { Activity, CheckCircle2, Cpu, Layers, Maximize, Monitor, Wifi } from "lucide-react";
import { useUiStore } from "@/lib/stores/ui-store";
import { cn } from "@/lib/utils";

export function StatusBar() {
  const { showGpuMetrics, toggleGpuMetrics } = useUiStore();

  return (
    <footer className="flex h-8 items-center justify-between border-t border-white/10 bg-[#0B0C15]/90 px-3 text-[11px] text-slate-400 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center gap-1.5 text-emerald-400">
          <CheckCircle2 className="size-3" />
          WebGPU Ready
        </span>
        <span className="hidden items-center gap-1.5 sm:inline-flex">
          <Wifi className="size-3" />
          Device active
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
        <span className="hidden items-center gap-1.5 sm:inline-flex">
          <Layers className="size-3" />
          Lesson 2 of 16
        </span>
        <span className="hidden items-center gap-1.5 sm:inline-flex">
          <Monitor className="size-3" />
          100%
        </span>
        <span>
          <kbd className="rounded border border-white/10 bg-white/5 px-1 py-0.5 text-[10px]">⌘K</kbd>
        </span>
      </div>
    </footer>
  );
}
