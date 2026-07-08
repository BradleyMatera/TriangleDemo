"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  BarChart3,
  Boxes,
  Cpu,
  Gauge,
  Layers,
  MemoryStick,
  Pause,
  Play,
  Timer,
  Triangle
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMetricsStore } from "@/lib/stores/metrics-store";

const budgetLines = [
  { label: "60 FPS", value: 16.7 },
  { label: "30 FPS", value: 33.3 }
];

const timelineEvents = [
  { label: "Acquire swap chain texture", duration: 0.3, color: "bg-cyan-400" },
  { label: "Update uniforms", duration: 0.5, color: "bg-brand" },
  { label: "Encode render pass", duration: 1.1, color: "bg-violet-400" },
  { label: "Vertex + raster", duration: 0.9, color: "bg-emerald-400" },
  { label: "Fragment shading", duration: 1.4, color: "bg-fuchsia-400" },
  { label: "Present frame", duration: 0.4, color: "bg-sky-400" }
];

export function PerformancePanel() {
  const metrics = useMetricsStore((s) => s.metrics);
  const updateMetrics = useMetricsStore((s) => s.updateMetrics);
  const [data, setData] = useState<number[]>(Array(40).fill(16));
  const [recording, setRecording] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(timelineEvents[2]!);
  const [sampleWindow, setSampleWindow] = useState<"40" | "80">("40");

  useEffect(() => {
    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const delta = now - last;
      last = now;
      if (recording) {
        const nextValue = Math.min(Math.max(delta, 8), 48);
        const currentMetrics = useMetricsStore.getState().metrics;
        setData((prev) => {
          const windowSize = sampleWindow === "40" ? 40 : 80;
          return [...prev.slice(-(windowSize - 1)), nextValue];
        });
        updateMetrics({
          fps: Math.round(1000 / nextValue),
          frameTime: nextValue,
          cpuTime: Number((nextValue * 0.32).toFixed(2)),
          gpuTime: Number((nextValue * 0.46).toFixed(2)),
          drawCalls: Math.max(currentMetrics.drawCalls, 1),
          memoryMB: Math.max(currentMetrics.memoryMB, 18.4),
          buffers: Math.max(currentMetrics.buffers, 3),
          textures: Math.max(currentMetrics.textures, 2)
        });
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [recording, sampleWindow, updateMetrics]);

  const avg = data.reduce((a, b) => a + b, 0) / data.length;
  const fps = avg > 0 ? Math.round(1000 / avg) : 0;
  const worst = Math.max(...data);
  const best = Math.min(...data);
  const totalTimeline = timelineEvents.reduce((sum, event) => sum + event.duration, 0);
  const health =
    avg <= 16.7
      ? { label: "Within 60 FPS budget", tone: "text-emerald-300", bg: "bg-emerald-400/10", border: "border-emerald-400/25" }
      : avg <= 33.3
        ? { label: "Playable, optimize soon", tone: "text-amber-300", bg: "bg-amber-400/10", border: "border-amber-400/25" }
        : { label: "Frame budget exceeded", tone: "text-rose-300", bg: "bg-rose-400/10", border: "border-rose-400/25" };

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B0C15]/80 p-5 shadow-card">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-subtle">Performance</span>
          <h2 className="mt-1 font-display text-lg font-semibold text-white">Live Analytics</h2>
          <p className="text-xs text-slate-400">Frame budget, CPU/GPU timing, draw pressure, memory, resources, and event timeline.</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setRecording((value) => !value)}
            className={cn(
              "flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[11px] font-medium transition-colors",
              recording
                ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
            )}
            aria-pressed={recording}
          >
            {recording ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
            {recording ? "Sampling" : "Paused"}
          </button>
          <button
            onClick={() => setSampleWindow((value) => (value === "40" ? "80" : "40"))}
            className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] font-medium text-slate-300 transition-colors hover:bg-white/10"
          >
            {sampleWindow} frames
          </button>
        </div>
      </div>

      <div className={cn("mb-4 rounded-xl border p-3", health.bg, health.border)}>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <div className={cn("text-xs font-semibold", health.tone)}>{health.label}</div>
            <div className="mt-1 text-[11px] text-slate-400">
              Average {avg.toFixed(1)} ms · best {best.toFixed(1)} ms · worst {worst.toFixed(1)} ms
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-right">
            <div className="font-display text-lg font-semibold text-white">{fps}</div>
            <div className="text-[10px] uppercase tracking-wider text-slate-500">estimated FPS</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
        <MetricCard icon={Gauge} label="FPS" value={fps.toString()} />
        <MetricCard icon={Timer} label="Frame Time" value={`${avg.toFixed(1)} ms`} />
        <MetricCard icon={Cpu} label="CPU Time" value={`${metrics.cpuTime.toFixed(1)} ms`} />
        <MetricCard icon={Activity} label="GPU Time" value={`${metrics.gpuTime.toFixed(1)} ms`} />
        <MetricCard icon={Layers} label="Draw Calls" value={metrics.drawCalls.toLocaleString()} />
        <MetricCard icon={MemoryStick} label="Memory" value={`${metrics.memoryMB.toFixed(1)} MB`} />
        <MetricCard icon={Triangle} label="Vertices" value={metrics.vertices.toLocaleString()} />
        <MetricCard icon={Triangle} label="Triangles" value={metrics.triangles.toLocaleString()} />
        <MetricCard icon={Boxes} label="Buffers" value={metrics.buffers.toLocaleString()} />
        <MetricCard icon={BarChart3} label="Textures" value={metrics.textures.toLocaleString()} />
      </div>

      <div className="mt-4 grid min-h-0 flex-1 gap-4 xl:grid-cols-[1.35fr_1fr]">
        <div className="rounded-xl border border-white/10 bg-slate-950/50 p-3">
          <div className="mb-2 flex items-center justify-between">
            <div className="text-[10px] uppercase tracking-wider text-slate-500">Frame time chart</div>
            <div className="flex items-center gap-2 text-[10px] text-slate-500">
              {budgetLines.map((line) => (
                <span key={line.label}>{line.label}: {line.value}ms</span>
              ))}
            </div>
          </div>
          <div className="relative flex h-[220px] items-end gap-px overflow-hidden rounded-lg border border-white/5 bg-black/20 p-2">
            <div className="pointer-events-none absolute inset-x-2 top-[35%] border-t border-emerald-400/30" />
            <div className="pointer-events-none absolute inset-x-2 top-[70%] border-t border-amber-400/30" />
            {data.map((value, i) => {
              const isOverBudget = value > 16.7;
              return (
                <motion.div
                  key={`${i}-${sampleWindow}`}
                  initial={{ height: 0 }}
                  animate={{ height: `${(value / 48) * 100}%` }}
                  className={cn(
                    "flex-1 rounded-[2px] opacity-85",
                    isOverBudget
                      ? "bg-gradient-to-t from-amber-500 to-rose-400"
                      : "bg-gradient-to-t from-brand to-cyan-300"
                  )}
                  title={`${value.toFixed(1)} ms`}
                />
              );
            })}
          </div>
        </div>

        <div className="flex min-h-0 flex-col rounded-xl border border-white/10 bg-slate-950/50 p-3">
          <div className="mb-3">
            <div className="text-[10px] uppercase tracking-wider text-slate-500">GPU frame timeline</div>
            <div className="mt-1 text-[11px] text-slate-400">
              Simulated pass breakdown for the current lesson render.
            </div>
          </div>

          <div className="mb-4 flex h-8 overflow-hidden rounded-lg border border-white/10 bg-black/20">
            {timelineEvents.map((event) => (
              <button
                key={event.label}
                onClick={() => setSelectedEvent(event)}
                className={cn("h-full transition-opacity hover:opacity-80", event.color)}
                style={{ width: `${(event.duration / totalTimeline) * 100}%` }}
                title={`${event.label}: ${event.duration.toFixed(1)} ms`}
                aria-label={`Inspect ${event.label}`}
              />
            ))}
          </div>

          <div className="mb-4 rounded-lg border border-white/10 bg-white/5 p-3">
            <div className="text-xs font-semibold text-white">{selectedEvent.label}</div>
            <div className="mt-1 text-[11px] text-slate-400">
              {selectedEvent.duration.toFixed(1)} ms · {Math.round((selectedEvent.duration / totalTimeline) * 100)}% of measured GPU pass.
            </div>
          </div>

          <div className="grid gap-2 text-[11px] text-slate-400">
            <TimelineRow label="CPU submit" value={metrics.cpuTime} max={8} />
            <TimelineRow label="GPU execution" value={metrics.gpuTime} max={12} />
            <TimelineRow label="Memory pressure" value={metrics.memoryMB} max={128} suffix=" MB" />
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3 transition-colors hover:border-white/20 hover:bg-white/10">
      <div className="mb-1 flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-slate-500">
        <Icon className="size-3.5" />
        {label}
      </div>
      <div className="font-display text-base font-semibold text-white">{value}</div>
    </div>
  );
}

function TimelineRow({
  label,
  value,
  max,
  suffix = " ms"
}: {
  label: string;
  value: number;
  max: number;
  suffix?: string;
}) {
  const width = Math.min((value / max) * 100, 100);

  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <span>{label}</span>
        <span className="font-mono text-white">{value.toFixed(1)}{suffix}</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          className="h-full rounded-full bg-gradient-to-r from-brand to-cyan-300"
        />
      </div>
    </div>
  );
}
