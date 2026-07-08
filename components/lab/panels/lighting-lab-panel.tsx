"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Download, Lightbulb, Moon, Sun, Target, Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface LightSource {
  id: string;
  type: "ambient" | "directional" | "point";
  name: string;
  intensity: number;
  color: string;
  position: { x: number; y: number; z: number };
  direction: { x: number; y: number; z: number };
  enabled: boolean;
}

const initialLights: LightSource[] = [
  { id: "ambient", type: "ambient", name: "Ambient", intensity: 0.2, color: "#ffffff", position: { x: 0, y: 0, z: 0 }, direction: { x: 0, y: 0, z: 0 }, enabled: true },
  { id: "directional", type: "directional", name: "Directional", intensity: 0.8, color: "#ffffff", position: { x: 0, y: 0, z: 0 }, direction: { x: 0.5, y: -1, z: 0.5 }, enabled: true },
  { id: "point", type: "point", name: "Point", intensity: 1.0, color: "#ffaa44", position: { x: 2, y: 2, z: 2 }, direction: { x: 0, y: 0, z: 0 }, enabled: false }
];

export function LightingLabPanel() {
  const [lights, setLights] = useState<LightSource[]>(initialLights);
  const [activeId, setActiveId] = useState<string>("directional");
  const [showNormals, setShowNormals] = useState(false);
  const [lightingOnly, setLightingOnly] = useState(false);

  const activeLight = lights.find((l) => l.id === activeId) ?? lights[0]!;

  const updateLight = (id: string, patch: Partial<LightSource>) => {
    setLights((prev) => prev.map((l) => (l.id === id ? { ...l, ...patch } : l)));
  };

  const updateVector = (
    id: string,
    key: "position" | "direction",
    axis: "x" | "y" | "z",
    value: number
  ) => {
    setLights((prev) =>
      prev.map((l) =>
        l.id === id ? { ...l, [key]: { ...l[key], [axis]: value } } : l
      )
    );
  };

  const handleExport = () => {
    const payload = JSON.stringify(
      { lights, showNormals, lightingOnly },
      null,
      2
    );
    const blob = new Blob([payload], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `lighting-scene-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleCopyWGSL = () => {
    const wgsl = generateLightingWGSL(lights);
    void navigator.clipboard.writeText(wgsl);
  };

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B0C15]/80 p-5 shadow-card">
      <div className="mb-4">
        <span className="text-[10px] uppercase tracking-[0.3em] text-brand-subtle">Lighting Lab</span>
        <h2 className="mt-1 font-display text-lg font-semibold text-white">Lighting Module</h2>
        <p className="text-xs text-slate-400">Configure ambient, directional, and point lights; preview normals and lighting-only state.</p>
      </div>

      <div className="mb-3 grid grid-cols-3 gap-2">
        {lights.map((light) => {
          const Icon = light.type === "ambient" ? Moon : light.type === "directional" ? Sun : Lightbulb;
          const isActive = activeId === light.id;
          return (
            <button
              key={light.id}
              onClick={() => setActiveId(light.id)}
              className={cn(
                "flex flex-col items-center gap-1 rounded-xl border p-2 text-[10px] transition-all focus-visible:ring-2 focus-visible:ring-brand/60",
                isActive
                  ? "border-brand/50 bg-brand/15 text-white"
                  : "border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-slate-200"
              )}
              aria-label={`Select ${light.name} light`}
              title={light.name}
            >
              <Icon className="size-4" />
              <span className="truncate max-w-full">{light.name}</span>
              {!light.enabled ? <span className="rounded-full bg-slate-700 px-1 py-0.5 text-[8px] text-slate-400">off</span> : null}
            </button>
          );
        })}
      </div>

      <div className="mb-3 flex flex-wrap items-center gap-2">
        <button
          onClick={() => updateLight(activeLight.id, { enabled: !activeLight.enabled })}
          className={cn(
            "flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[11px] font-medium transition-colors",
            activeLight.enabled
              ? "border-emerald-400/40 bg-emerald-400/15 text-emerald-300"
              : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
          )}
          aria-pressed={activeLight.enabled}
        >
          {activeLight.enabled ? <Sun className="size-3.5" /> : <Moon className="size-3.5" />}
          {activeLight.enabled ? "Enabled" : "Disabled"}
        </button>
        <button
          onClick={() => setShowNormals((v) => !v)}
          className={cn(
            "flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[11px] font-medium transition-colors",
            showNormals
              ? "border-cyan-400/40 bg-cyan-400/15 text-cyan-300"
              : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
          )}
          aria-pressed={showNormals}
        >
          {showNormals ? <Eye className="size-3.5" /> : <EyeOff className="size-3.5" />}
          Normals
        </button>
        <button
          onClick={() => setLightingOnly((v) => !v)}
          className={cn(
            "flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[11px] font-medium transition-colors",
            lightingOnly
              ? "border-brand/40 bg-brand/15 text-brand"
              : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
          )}
          aria-pressed={lightingOnly}
        >
          <Target className="size-3.5" />
          Lighting only
        </button>
        <button
          onClick={handleCopyWGSL}
          className="ml-auto flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] font-medium text-slate-300 transition-colors hover:bg-white/10"
          aria-label="Copy lighting WGSL"
          title="Copy lighting WGSL"
        >
          <Copy className="size-3.5" />
          Copy WGSL
        </button>
        <button
          onClick={handleExport}
          className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] font-medium text-slate-300 transition-colors hover:bg-white/10"
          aria-label="Export lighting JSON"
          title="Export lighting JSON"
        >
          <Download className="size-3.5" />
          Export
        </button>
      </div>

      <motion.div
        key={activeId}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-3 rounded-xl border border-white/10 bg-white/5 p-3"
      >
        <div className="mb-2 text-[10px] uppercase tracking-wider text-brand-subtle">{activeLight.name} settings</div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <label className="flex flex-col gap-1 text-[10px] text-slate-400">
            Intensity
            <input
              type="range"
              min={0}
              max={2}
              step={0.05}
              value={activeLight.intensity}
              onChange={(e) => updateLight(activeLight.id, { intensity: Number(e.target.value) })}
              className="accent-brand"
            />
            <span className="font-mono text-white">{activeLight.intensity.toFixed(2)}</span>
          </label>
          <label className="flex flex-col gap-1 text-[10px] text-slate-400">
            Color
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={activeLight.color}
                onChange={(e) => updateLight(activeLight.id, { color: e.target.value })}
                className="size-7 rounded border border-white/10 bg-transparent"
              />
              <span className="font-mono text-white">{activeLight.color}</span>
            </div>
          </label>
        </div>

        {activeLight.type !== "ambient" ? (
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {activeLight.type === "point" ? (
              <>
                <VectorSlider label="Position X" value={activeLight.position.x} min={-5} max={5} step={0.1} onChange={(v) => updateVector(activeLight.id, "position", "x", v)} />
                <VectorSlider label="Position Y" value={activeLight.position.y} min={-5} max={5} step={0.1} onChange={(v) => updateVector(activeLight.id, "position", "y", v)} />
                <VectorSlider label="Position Z" value={activeLight.position.z} min={-5} max={5} step={0.1} onChange={(v) => updateVector(activeLight.id, "position", "z", v)} />
              </>
            ) : (
              <>
                <VectorSlider label="Direction X" value={activeLight.direction.x} min={-1} max={1} step={0.05} onChange={(v) => updateVector(activeLight.id, "direction", "x", v)} />
                <VectorSlider label="Direction Y" value={activeLight.direction.y} min={-1} max={1} step={0.05} onChange={(v) => updateVector(activeLight.id, "direction", "y", v)} />
                <VectorSlider label="Direction Z" value={activeLight.direction.z} min={-1} max={1} step={0.05} onChange={(v) => updateVector(activeLight.id, "direction", "z", v)} />
              </>
            )}
          </div>
        ) : null}
      </motion.div>

      <motion.div
        key={`${showNormals}-${lightingOnly}`}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-1 flex-col rounded-xl border border-white/10 bg-slate-950/50 p-4"
      >
        <div className="mb-2 flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold text-white">Scene preview</div>
            <p className="max-w-md text-[11px] text-slate-400">
              Active lights: {lights.filter((l) => l.enabled).length} / {lights.length} · Normals {showNormals ? "on" : "off"} · Lighting only {lightingOnly ? "on" : "off"}
            </p>
          </div>
        </div>
        <div className="relative flex-1 rounded-lg border border-dashed border-white/10 bg-white/5">
          <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
            {showNormals ? <span className="rounded bg-cyan-400/20 px-1.5 py-0.5 text-[9px] text-cyan-300">normals</span> : null}
            {lightingOnly ? <span className="rounded bg-brand/20 px-1.5 py-0.5 text-[9px] text-brand-subtle">lighting only</span> : null}
          </div>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2 text-center text-[11px] text-slate-400">
          <div className="rounded-lg bg-white/5 p-2">
            <div className="font-display text-sm text-white">{lights.filter((l) => l.enabled).length}</div>
            <div>Active lights</div>
          </div>
          <div className="rounded-lg bg-white/5 p-2">
            <div className="font-display text-sm text-white">{activeLight.type}</div>
            <div>Selected type</div>
          </div>
          <div className="rounded-lg bg-white/5 p-2">
            <div className="font-display text-sm text-white">{activeLight.intensity.toFixed(2)}</div>
            <div>Intensity</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function VectorSlider({
  label,
  value,
  min,
  max,
  step,
  onChange
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="flex flex-col gap-1 text-[10px] text-slate-400">
      {label}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="accent-brand"
      />
      <span className="font-mono text-white">{value.toFixed(2)}</span>
    </label>
  );
}

function generateLightingWGSL(lights: LightSource[]): string {
  const active = lights.filter((l) => l.enabled);
  let code = "// Auto-generated lighting configuration\n";
  code += "struct SceneLights {\n";
  code += `  count: u32,\n`;
  code += "}\n\n";
  active.forEach((l, i) => {
    code += `// ${l.name} (${l.type})\n`;
    code += `const ${l.id}Intensity = ${l.intensity.toFixed(2)};\n`;
    code += `const ${l.id}Color = vec3f(${hexToRGB(l.color).join(", ")});\n`;
    if (l.type === "directional") {
      code += `const ${l.id}Direction = normalize(vec3f(${l.direction.x.toFixed(2)}, ${l.direction.y.toFixed(2)}, ${l.direction.z.toFixed(2)}));\n`;
    } else if (l.type === "point") {
      code += `const ${l.id}Position = vec3f(${l.position.x.toFixed(2)}, ${l.position.y.toFixed(2)}, ${l.position.z.toFixed(2)});\n`;
    }
    code += "\n";
  });
  return code;
}

function hexToRGB(hex: string): number[] {
  const sanitized = hex.replace("#", "");
  const r = parseInt(sanitized.substring(0, 2), 16) / 255;
  const g = parseInt(sanitized.substring(2, 4), 16) / 255;
  const b = parseInt(sanitized.substring(4, 6), 16) / 255;
  return [Math.round(r * 100) / 100, Math.round(g * 100) / 100, Math.round(b * 100) / 100];
}
