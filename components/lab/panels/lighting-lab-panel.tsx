"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Copy, Download, Lightbulb, Moon, Sun, Target, Eye, EyeOff, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { useWorkspaceStore } from "@/lib/stores/workspace-store";

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

  const applyShaders = useWorkspaceStore((s) => s.applyShaders);

  // Generate and push WGSL to the live preview whenever lights change
  useEffect(() => {
    const fragment = buildLitFragmentShader(lights, showNormals, lightingOnly);
    const vertex = `struct Uniforms {
  mvp: mat4x4f,
};
@group(0) @binding(0) var<uniform> uniforms: Uniforms;

struct VertexOut {
  @builtin(position) position: vec4f,
  @location(0) worldPos: vec3f,
  @location(1) normal: vec3f,
  @location(2) baseColor: vec3f,
};

@vertex
fn main(@location(0) pos: vec3f, @location(1) col: vec3f) -> VertexOut {
  var out: VertexOut;
  out.position = uniforms.mvp * vec4f(pos, 1.0);
  out.worldPos = pos;
  out.normal = normalize(pos);
  out.baseColor = col;
  return out;
}
`;
    applyShaders({ vertexShader: vertex, fragmentShader: fragment });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lights, showNormals, lightingOnly]);

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

      <div className="mb-3 flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-3 py-2">
        <Info className="size-3.5 text-emerald-400 shrink-0" />
        <span className="text-[11px] text-emerald-300 flex-1">
          Lighting changes update the viewport cube in real time via generated WGSL.
        </span>
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
          <NumericInput
            label="Intensity"
            value={activeLight.intensity}
            min={0}
            max={2}
            step={0.05}
            precision={2}
            onChange={(v) => updateLight(activeLight.id, { intensity: v })}
          />
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

      <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center text-[11px] text-slate-400">
        Active lights: <span className="font-semibold text-white">{lights.filter((l) => l.enabled).length} / {lights.length}</span>
        <span className="mx-2 text-slate-600">·</span>
        Normals: <span className="font-semibold text-white">{showNormals ? "on" : "off"}</span>
        <span className="mx-2 text-slate-600">·</span>
        Lighting only: <span className="font-semibold text-white">{lightingOnly ? "on" : "off"}</span>
      </div>
    </div>
  );
}

import { NumericInput } from "@/components/lab/controls/numeric-input";

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
    <NumericInput
      label={label}
      value={value}
      min={min}
      max={max}
      step={step}
      onChange={onChange}
    />
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

function buildLitFragmentShader(lights: LightSource[], showNormals: boolean, lightingOnly = false): string {
  const ambient = lights.find((l) => l.id === "ambient" && l.enabled);
  const directional = lights.find((l) => l.id === "directional" && l.enabled);
  const point = lights.find((l) => l.id === "point" && l.enabled);

  const ambientColor = ambient ? hexToRGB(ambient.color) : [0.05, 0.05, 0.08];
  const ambientIntensity = ambient ? ambient.intensity : 0.1;

  const dirColor = directional ? hexToRGB(directional.color) : [0, 0, 0];
  const dirIntensity = directional ? directional.intensity : 0;
  const dirDir = directional
    ? [directional.direction.x, directional.direction.y, directional.direction.z]
    : [0, -1, 0];

  const ptColor = point ? hexToRGB(point.color) : [0, 0, 0];
  const ptIntensity = point ? point.intensity : 0;
  const ptPos = point ? [point.position.x, point.position.y, point.position.z] : [0, 0, 0];

  const fmt = (n: number) => n.toFixed(2);
  const albedoExpression = lightingOnly
    ? "vec3f(1.0, 1.0, 1.0)"
    : "clamp(baseColor * 1.15, vec3f(0.0, 0.0, 0.0), vec3f(1.0, 1.0, 1.0))";

  return `@fragment
fn main(@location(0) worldPos: vec3f, @location(1) normal: vec3f, @location(2) baseColor: vec3f) -> @location(0) vec4f {
  let n = normalize(normal);
  let viewDir = normalize(vec3f(0.0, 0.0, 4.0) - worldPos);
  let albedo = ${albedoExpression};

  var lightEnergy = vec3f(0.0, 0.0, 0.0);

  // Ambient
  lightEnergy += vec3f(${fmt(ambientColor[0])}f, ${fmt(ambientColor[1])}f, ${fmt(ambientColor[2])}f) * ${fmt(ambientIntensity)}f;

  // Directional
  let dirLight = normalize(vec3f(${fmt(dirDir[0])}f, ${fmt(dirDir[1])}f, ${fmt(dirDir[2])}f));
  let dirFactor = max(dot(n, -dirLight), 0.0);
  let dirHalf = normalize(viewDir - dirLight);
  let dirSpec = pow(max(dot(n, dirHalf), 0.0), 20.0) * 0.28;
  lightEnergy += vec3f(${fmt(dirColor[0])}f, ${fmt(dirColor[1])}f, ${fmt(dirColor[2])}f) * ${fmt(dirIntensity)}f * (dirFactor + dirSpec);

  // Point
  let ptPos = vec3f(${fmt(ptPos[0])}f, ${fmt(ptPos[1])}f, ${fmt(ptPos[2])}f);
  let ptVec = ptPos - worldPos;
  let ptDist = length(ptVec);
  let ptDir = normalize(ptVec);
  let ptFactor = max(dot(n, ptDir), 0.0);
  let ptAtten = 1.0 / (1.0 + 0.09 * ptDist + 0.032 * ptDist * ptDist);
  let ptHalf = normalize(viewDir + ptDir);
  let ptSpec = pow(max(dot(n, ptHalf), 0.0), 28.0) * 0.35;
  lightEnergy += vec3f(${fmt(ptColor[0])}f, ${fmt(ptColor[1])}f, ${fmt(ptColor[2])}f) * ${fmt(ptIntensity)}f * (ptFactor + ptSpec) * ptAtten;

  var color = clamp(albedo * lightEnergy, vec3f(0.0, 0.0, 0.0), vec3f(1.0, 1.0, 1.0));

  ${showNormals ? "color = n * 0.5 + 0.5;" : ""}

  return vec4f(color, 1.0);
}
`;
}

function hexToRGB(hex: string): number[] {
  const sanitized = hex.replace("#", "");
  const r = parseInt(sanitized.substring(0, 2), 16) / 255;
  const g = parseInt(sanitized.substring(2, 4), 16) / 255;
  const b = parseInt(sanitized.substring(4, 6), 16) / 255;
  return [Math.round(r * 100) / 100, Math.round(g * 100) / 100, Math.round(b * 100) / 100];
}
