"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  AlertCircle,
  Box,
  CheckCircle2,
  ChevronRight,
  Cpu,
  HardDrive,
  Layers,
  MemoryStick,
  Monitor,
  Triangle,
  Wrench
} from "lucide-react";
import { useMetricsStore } from "@/lib/stores/metrics-store";
import { useWorkspaceStore } from "@/lib/stores/workspace-store";
import { cn } from "@/lib/utils";

export function GpuInspectorPanel() {
  const metrics = useMetricsStore((s) => s.metrics);
  const compileError = useWorkspaceStore((s) => s.compileError);
  const isRunning = useWorkspaceStore((s) => s.isRunning);
  const [expanded, setExpanded] = useState<string | null>(null);

  const primaryItems = [
    { label: "Vertices", value: metrics.vertices.toLocaleString(), icon: Triangle },
    { label: "Triangles", value: metrics.triangles.toLocaleString(), icon: Triangle },
    { label: "Draw Calls", value: metrics.drawCalls.toLocaleString(), icon: Layers },
    { label: "Buffers", value: metrics.buffers.toLocaleString(), icon: Box },
    { label: "Textures", value: metrics.textures.toLocaleString(), icon: Monitor },
    { label: "Uniforms", value: "2", icon: Cpu },
    { label: "Memory", value: `~${metrics.memoryMB.toFixed(1)} MB`, icon: MemoryStick }
  ];

  const secondaryItems = [
    {
      id: "limits",
      label: "GPU Limits",
      icon: HardDrive,
      rows: [
        { label: "Max Texture Size", value: "2048 (estimated)" },
        { label: "Max Buffer Size", value: "256 MB (estimated)" },
        { label: "Max Bind Groups", value: "4" },
        { label: "Color Attachments", value: "8" }
      ]
    },
    {
      id: "capabilities",
      label: "Capabilities",
      icon: Activity,
      rows: [
        { label: "WebGPU", value: "detected at runtime" },
        { label: "Compute", value: "supported" },
        { label: "Depth24Plus", value: "supported" },
        { label: "Texture Compression", value: "depends on adapter" }
      ]
    },
    {
      id: "pipeline",
      label: "Pipeline State",
      icon: Wrench,
      rows: [
        { label: "Topology", value: "triangle-list" },
        { label: "Primitive", value: "triangles" },
        { label: "Front Face", value: "CCW" },
        { label: "Cull Mode", value: "none" }
      ]
    },
    {
      id: "shaders",
      label: "Shader Compilation",
      icon: compileError ? AlertCircle : CheckCircle2,
      rows: compileError
        ? [
            { label: "Status", value: "Error" },
            { label: "Error", value: compileError }
          ]
        : [
            { label: "Status", value: isRunning ? "OK" : "Idle" },
            { label: "Vertex", value: "validated" },
            { label: "Fragment", value: "validated" },
            { label: "Pipeline", value: "ready" }
          ]
    }
  ];

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B0C15]/80 p-5 shadow-card">
      <div className="mb-4">
        <span className="text-[10px] uppercase tracking-[0.3em] text-brand-subtle">GPU Inspector</span>
        <h2 className="mt-1 font-display text-lg font-semibold text-white">Live Diagnostics</h2>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {primaryItems.map((metric) => {
          const Icon = metric.icon;
          return (
            <div
              key={metric.label}
              className="rounded-xl border border-white/10 bg-white/5 p-3 transition-colors hover:border-white/20 hover:bg-white/10"
            >
              <div className="mb-2 flex items-center gap-2 text-slate-400">
                <Icon className="size-3.5" />
                <span className="text-[10px] uppercase tracking-wider">{metric.label}</span>
              </div>
              <div className="font-display text-base font-semibold text-white">{metric.value}</div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex-1 overflow-y-auto">
        <div className="mb-2 text-[10px] uppercase tracking-wider text-brand-subtle">Details</div>
        <div className="space-y-2">
          {secondaryItems.map((section) => {
            const Icon = section.icon;
            const isOpen = expanded === section.id;
            return (
              <div
                key={section.id}
                className="rounded-xl border border-white/10 bg-white/5"
              >
                <button
                  onClick={() => setExpanded(isOpen ? null : section.id)}
                  className="flex w-full items-center justify-between px-3 py-2 text-left transition-colors hover:bg-white/5"
                  aria-expanded={isOpen}
                  aria-controls={`inspector-section-${section.id}`}
                >
                  <div className="flex items-center gap-2 text-[11px] text-slate-300">
                    <Icon className={cn("size-3.5", section.id === "shaders" && compileError ? "text-rose-400" : "text-slate-400")} />
                    {section.label}
                  </div>
                  <ChevronRight
                    className={cn("size-3.5 text-slate-500 transition-transform", isOpen && "rotate-90")}
                  />
                </button>
                <AnimatePresence>
                  {isOpen ? (
                    <motion.div
                      id={`inspector-section-${section.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-1 border-t border-white/10 px-3 py-2">
                        {section.rows.map((row) => (
                          <div key={row.label} className="flex items-start justify-between gap-3 text-[10px]">
                            <span className="text-slate-500">{row.label}</span>
                            <span
                              className={cn(
                                "max-w-[60%] text-right",
                                row.value === "Error" ? "text-rose-400" : "text-slate-300"
                              )}
                            >
                              {row.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
