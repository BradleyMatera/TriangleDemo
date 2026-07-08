"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Activity, Cpu, Gauge, Layers, MemoryStick, Timer, Triangle } from "lucide-react";
import { useMetricsStore } from "@/lib/stores/metrics-store";

export function PerformancePanel() {
  const metrics = useMetricsStore((s) => s.metrics);
  const [data, setData] = useState<number[]>(Array(40).fill(16));

  useEffect(() => {
    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const delta = now - last;
      last = now;
      setData((prev) => [...prev.slice(1), Math.min(Math.max(delta, 8), 40)]);
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const avg = data.reduce((a, b) => a + b, 0) / data.length;
  const fps = avg > 0 ? Math.round(1000 / avg) : 0;

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B0C15]/80 p-5 shadow-card">
      <div className="mb-4">
        <span className="text-[10px] uppercase tracking-[0.3em] text-brand-subtle">Performance</span>
        <h2 className="mt-1 font-display text-lg font-semibold text-white">Live Analytics</h2>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <MetricCard icon={Gauge} label="FPS" value={fps.toString()} />
        <MetricCard icon={Timer} label="Frame Time" value={`${avg.toFixed(1)} ms`} />
        <MetricCard icon={Cpu} label="CPU Time" value={`${metrics.cpuTime.toFixed(1)} ms`} />
        <MetricCard icon={Activity} label="GPU Time" value={`${metrics.gpuTime.toFixed(1)} ms`} />
        <MetricCard icon={Layers} label="Draw Calls" value={metrics.drawCalls.toLocaleString()} />
        <MetricCard icon={MemoryStick} label="Memory" value={`${metrics.memoryMB.toFixed(1)} MB`} />
        <MetricCard icon={Triangle} label="Vertices" value={metrics.vertices.toLocaleString()} />
        <MetricCard icon={Triangle} label="Triangles" value={metrics.triangles.toLocaleString()} />
      </div>

      <div className="mt-4 flex-1 rounded-xl border border-white/10 bg-slate-950/50 p-3">
        <div className="mb-2 text-[10px] uppercase tracking-wider text-slate-500">Frame Time Timeline</div>
        <div className="flex h-full items-end gap-px">
          {data.map((value, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${(value / 40) * 100}%` }}
              className="flex-1 rounded-[1px] bg-gradient-to-t from-brand to-brand-accent opacity-80"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function MetricCard({ icon: Icon, label, value }: { icon: typeof Gauge; label: string; value: string }) {
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
