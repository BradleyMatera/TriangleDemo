"use client";

import { Box, Wrench, Move3D, Sun, Image } from "lucide-react";
import { useUiStore, type WorkbenchTool } from "@/lib/stores/ui-store";
import { GeometryLabPanel } from "./geometry-lab-panel";
import { MatrixLabPanel } from "./matrix-lab-panel";
import { LightingLabPanel } from "./lighting-lab-panel";
import { MaterialLabPanel } from "./material-lab-panel";
import { cn } from "@/lib/utils";

const tools: { id: WorkbenchTool; label: string; icon: typeof Box }[] = [
  { id: "shape", label: "Shape", icon: Box },
  { id: "transform", label: "Transform", icon: Move3D },
  { id: "lighting", label: "Lighting", icon: Sun },
  { id: "material", label: "Material", icon: Image }
];

export function WorkbenchPanel() {
  const activeTool = useUiStore((s) => s.activeWorkbenchTool);
  const setActiveTool = useUiStore((s) => s.setActiveWorkbenchTool);

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B0C15]/80 shadow-card">
      <div className="border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <Wrench className="size-4 text-brand-subtle" />
          <div>
            <h2 className="font-display text-base font-semibold text-white">Workbench</h2>
            <p className="text-xs text-slate-400">Build a scene: shape, transform, lighting, and material.</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1 border-b border-white/10 px-2 py-2">
        {tools.map((tool) => {
          const Icon = tool.icon;
          const active = activeTool === tool.id;
          return (
            <button
              key={tool.id}
              onClick={() => setActiveTool(tool.id)}
              className={cn(
                "flex flex-1 items-center justify-center gap-1.5 rounded-lg py-1.5 text-[11px] font-medium transition-colors",
                active ? "bg-white/10 text-white" : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
              )}
            >
              <Icon className="size-3.5" />
              {tool.label}
            </button>
          );
        })}
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {activeTool === "shape" ? <GeometryLabPanel /> : null}
        {activeTool === "transform" ? <MatrixLabPanel /> : null}
        {activeTool === "lighting" ? <LightingLabPanel /> : null}
        {activeTool === "material" ? <MaterialLabPanel /> : null}
      </div>
    </div>
  );
}
