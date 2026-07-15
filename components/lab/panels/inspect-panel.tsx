"use client";

import { Activity, Cpu, SearchCheck } from "lucide-react";
import { useUiStore, type InspectTab } from "@/lib/stores/ui-store";
import { PipelineVisualizerPanel } from "./pipeline-visualizer-panel";
import { GpuInspectorPanel } from "./gpu-inspector-panel";
import { PerformancePanel } from "./performance-panel";
import { cn } from "@/lib/utils";

const tabs: { id: InspectTab; label: string; icon: typeof Cpu }[] = [
  { id: "pipeline", label: "Pipeline", icon: Cpu },
  { id: "gpu", label: "GPU", icon: SearchCheck },
  { id: "performance", label: "Performance", icon: Activity }
];

export function InspectPanel() {
  const activeTab = useUiStore((s) => s.activeInspectTab);
  const setActiveTab = useUiStore((s) => s.setActiveInspectTab);

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B0C15]/80 shadow-card">
      <div className="border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <SearchCheck className="size-4 text-brand-subtle" />
          <div>
            <h2 className="font-display text-base font-semibold text-white">Inspect</h2>
            <p className="text-xs text-slate-400">Pipeline stages, GPU state, and runtime performance.</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1 border-b border-white/10 px-2 py-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const active = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex flex-1 items-center justify-center gap-1.5 rounded-lg py-1.5 text-[11px] font-medium transition-colors",
                active ? "bg-white/10 text-white" : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
              )}
            >
              <Icon className="size-3.5" />
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {activeTab === "pipeline" ? <PipelineVisualizerPanel /> : null}
        {activeTab === "gpu" ? <GpuInspectorPanel /> : null}
        {activeTab === "performance" ? <PerformancePanel /> : null}
      </div>
    </div>
  );
}
