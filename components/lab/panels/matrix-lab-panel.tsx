"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Download, Eye, EyeOff, Grid3X3, Move3D, Rotate3D, Scale3D } from "lucide-react";
import { cn } from "@/lib/utils";

type MatrixId = "model" | "world" | "view" | "projection" | "perspective" | "orthographic";

interface MatrixMeta {
  id: MatrixId;
  name: string;
  icon: typeof Grid3X3;
  description: string;
  rows: number;
  cols: number;
}

const matrices: MatrixMeta[] = [
  { id: "model", name: "Model", icon: Grid3X3, description: "Transforms local vertices into world space.", rows: 4, cols: 4 },
  { id: "world", name: "World", icon: Move3D, description: "Combines translation, rotation, and scale for an object.", rows: 4, cols: 4 },
  { id: "view", name: "View", icon: Eye, description: "Transforms world coordinates into camera space.", rows: 4, cols: 4 },
  { id: "projection", name: "Projection", icon: Grid3X3, description: "Maps view-space into clip-space.", rows: 4, cols: 4 },
  { id: "perspective", name: "Perspective", icon: EyeOff, description: "Frustum projection with field of view.", rows: 4, cols: 4 },
  { id: "orthographic", name: "Orthographic", icon: Scale3D, description: "Parallel projection without perspective.", rows: 4, cols: 4 }
];

export function MatrixLabPanel() {
  const [active, setActive] = useState<MatrixId>("world");
  const [order, setOrder] = useState(["translate", "rotate", "scale"]);
  const [params, setParams] = useState({ tx: 0, ty: 0, tz: 0, rx: 0, ry: 0, rz: 0, sx: 1, sy: 1, sz: 1, fov: 45, near: 0.1, far: 100, aspect: 16 / 9, left: -1, right: 1, bottom: -1, top: 1 });
  const [emphasize, setEmphasize] = useState<string | null>(null);

  const activeMatrix = matrices.find((m) => m.id === active) ?? matrices[0]!;
  const matrix = computeMatrix(active, params);

  const handleCopy = () => {
    void navigator.clipboard.writeText(formatMatrix(matrix));
  };

  const handleDownload = () => {
    const payload = JSON.stringify({ matrix: active, order, params, values: matrix }, null, 2);
    const blob = new Blob([payload], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${active}-matrix.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const moveOrder = (index: number, direction: -1 | 1) => {
    const next = [...order];
    const target = index + direction;
    if (target < 0 || target >= next.length) return;
    [next[index], next[target]] = [next[target], next[index]];
    setOrder(next);
  };

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B0C15]/80 p-5 shadow-card">
      <div className="mb-4">
        <span className="text-[10px] uppercase tracking-[0.3em] text-brand-subtle">Matrix Lab</span>
        <h2 className="mt-1 font-display text-lg font-semibold text-white">Matrix Visualizer</h2>
        <p className="text-xs text-slate-400">Inspect transformation order and live 4×4 matrices.</p>
      </div>

      <div className="mb-3 grid grid-cols-3 gap-2 sm:grid-cols-6">
        {matrices.map((m) => {
          const Icon = m.icon;
          const isActive = active === m.id;
          return (
            <button
              key={m.id}
              onClick={() => setActive(m.id)}
              className={cn(
                "flex flex-col items-center gap-1 rounded-xl border p-2 text-[10px] transition-all focus-visible:ring-2 focus-visible:ring-brand/60",
                isActive ? "border-brand/50 bg-brand/15 text-white" : "border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-slate-200"
              )}
              aria-label={`Select ${m.name} matrix`}
              title={m.name}
            >
              <Icon className="size-4" />
              <span className="truncate max-w-full">{m.name}</span>
            </button>
          );
        })}
      </div>

      <div className="mb-3 rounded-xl border border-white/10 bg-white/5 p-3">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-wider text-brand-subtle">Transformation order</span>
          <span className="text-[10px] text-slate-500">Order matters: {order.join(" → ")}</span>
        </div>
        <div className="flex items-center gap-2">
          {order.map((step, i) => (
            <div key={`${step}-${i}`} className="flex items-center gap-2">
              <div className="flex items-center gap-1 rounded-lg border border-white/10 bg-slate-950/50 px-2 py-1 text-[11px] text-slate-300">
                <button
                  onClick={() => moveOrder(i, -1)}
                  disabled={i === 0}
                  className="text-slate-500 hover:text-slate-200 disabled:opacity-30"
                  aria-label={`Move ${step} left`}
                >
                  ←
                </button>
                <span className="capitalize">{step}</span>
                <button
                  onClick={() => moveOrder(i, 1)}
                  disabled={i === order.length - 1}
                  className="text-slate-500 hover:text-slate-200 disabled:opacity-30"
                  aria-label={`Move ${step} right`}
                >
                  →
                </button>
              </div>
              {i < order.length - 1 ? <span className="text-slate-600">×</span> : null}
            </div>
          ))}
        </div>
      </div>

      {active === "world" || active === "model" ? (
        <div className="mb-3 grid grid-cols-1 gap-3 overflow-y-auto sm:grid-cols-3">
          <ParamGroup label="Translate" values={["tx", "ty", "tz"]} params={params} min={-2} max={2} step={0.1} onChange={(k, v) => setParams((p) => ({ ...p, [k]: v }))} />
          <ParamGroup label="Rotate (deg)" values={["rx", "ry", "rz"]} params={params} min={-180} max={180} step={1} onChange={(k, v) => setParams((p) => ({ ...p, [k]: v }))} />
          <ParamGroup label="Scale" values={["sx", "sy", "sz"]} params={params} min={0.1} max={3} step={0.1} onChange={(k, v) => setParams((p) => ({ ...p, [k]: v }))} />
        </div>
      ) : active === "view" ? (
        <div className="mb-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <ParamGroup label="Camera position" values={["tx", "ty", "tz"]} params={params} min={-10} max={10} step={0.5} onChange={(k, v) => setParams((p) => ({ ...p, [k]: v }))} />
        </div>
      ) : active === "perspective" ? (
        <div className="mb-3 grid grid-cols-1 gap-3 sm:grid-cols-4">
          <ParamKnob label="FOV" value={params.fov} min={10} max={120} step={1} onChange={(v) => setParams((p) => ({ ...p, fov: v }))} />
          <ParamKnob label="Aspect" value={params.aspect} min={0.5} max={3} step={0.1} onChange={(v) => setParams((p) => ({ ...p, aspect: v }))} />
          <ParamKnob label="Near" value={params.near} min={0.01} max={10} step={0.01} onChange={(v) => setParams((p) => ({ ...p, near: v }))} />
          <ParamKnob label="Far" value={params.far} min={1} max={200} step={1} onChange={(v) => setParams((p) => ({ ...p, far: v }))} />
        </div>
      ) : active === "orthographic" ? (
        <div className="mb-3 grid grid-cols-1 gap-3 sm:grid-cols-4">
          <ParamKnob label="Left" value={params.left} min={-5} max={5} step={0.1} onChange={(v) => setParams((p) => ({ ...p, left: v }))} />
          <ParamKnob label="Right" value={params.right} min={-5} max={5} step={0.1} onChange={(v) => setParams((p) => ({ ...p, right: v }))} />
          <ParamKnob label="Bottom" value={params.bottom} min={-5} max={5} step={0.1} onChange={(v) => setParams((p) => ({ ...p, bottom: v }))} />
          <ParamKnob label="Top" value={params.top} min={-5} max={5} step={0.1} onChange={(v) => setParams((p) => ({ ...p, top: v }))} />
        </div>
      ) : null}

      <motion.div
        key={active}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-1 flex-col rounded-xl border border-white/10 bg-slate-950/50 p-4"
      >
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <div className="text-sm font-semibold text-white">{activeMatrix.name} Matrix</div>
            <p className="max-w-md text-[11px] text-slate-400">{activeMatrix.description}</p>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={handleCopy}
              className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-200"
              aria-label="Copy matrix"
              title="Copy matrix"
            >
              <Copy className="size-4" />
            </button>
            <button
              onClick={handleDownload}
              className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-200"
              aria-label="Download matrix JSON"
              title="Download matrix JSON"
            >
              <Download className="size-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto rounded-lg border border-white/10 bg-[#05070f] p-3 font-mono text-[11px] leading-6">
          <div className="grid grid-cols-4 gap-1">
            {matrix.map((value, i) => {
              const row = Math.floor(i / 4);
              const col = i % 4;
              const isIdentity = row === col ? value === 1 : value === 0;
              const isEmphasized = emphasize === `${row},${col}`;
              return (
                <button
                  key={i}
                  onMouseEnter={() => setEmphasize(`${row},${col}`)}
                  onMouseLeave={() => setEmphasize(null)}
                  onClick={() => setEmphasize(`${row},${col}`)}
                  className={cn(
                    "rounded px-2 py-1 text-center transition-colors focus-visible:ring-1 focus-visible:ring-brand/60",
                    isEmphasized ? "bg-brand/25 text-white" : isIdentity ? "text-slate-600" : "text-brand-subtle hover:bg-white/5"
                  )}
                  aria-label={`Row ${row + 1} column ${col + 1}`}
                >
                  {formatNumber(value)}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] text-slate-400">
          <div className="rounded-lg bg-white/5 p-2 text-center">
            <div className="font-display text-sm text-white">4×4</div>
            <div>Dimensions</div>
          </div>
          <div className="rounded-lg bg-white/5 p-2 text-center">
            <div className="font-display text-sm text-white">{activeMatrix.id}</div>
            <div>Kind</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ParamGroup({
  label,
  values,
  params,
  min,
  max,
  step,
  onChange
}: {
  label: string;
  values: (keyof typeof params)[];
  params: Record<string, number>;
  min: number;
  max: number;
  step: number;
  onChange: (key: string, value: number) => void;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
      <div className="mb-2 text-[10px] uppercase tracking-wider text-brand-subtle">{label}</div>
      <div className="flex flex-col gap-2">
        {values.map((k) => (
          <label key={k as string} className="flex items-center gap-2 text-[10px] text-slate-400">
            <span className="w-4">{String(k).slice(-1).toUpperCase()}</span>
            <input
              type="range"
              min={min}
              max={max}
              step={step}
              value={params[k as string]}
              onChange={(e) => onChange(k as string, Number(e.target.value))}
              className="flex-1 accent-brand"
            />
            <span className="w-8 text-right font-mono text-white">{formatNumber(Number(params[k as string]))}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

function ParamKnob({
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
    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
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
        <span className="font-mono text-white">{formatNumber(value)}</span>
      </label>
    </div>
  );
}

function computeMatrix(id: MatrixId, params: Record<string, number>): number[] {
  switch (id) {
    case "model":
    case "world": {
      const order = ["translate", "rotate", "scale"];
      let m = identity();
      for (const step of order) {
        if (step === "translate") m = multiply(m, translation(params.tx, params.ty, params.tz));
        if (step === "rotate") m = multiply(m, rotation(params.rx, params.ry, params.rz));
        if (step === "scale") m = multiply(m, scaling(params.sx, params.sy, params.sz));
      }
      return m;
    }
    case "view":
      return translation(-params.tx, -params.ty, -params.tz);
    case "projection":
      return perspective(params.fov, params.aspect, params.near, params.far);
    case "perspective":
      return perspective(params.fov, params.aspect, params.near, params.far);
    case "orthographic":
      return orthographic(params.left, params.right, params.bottom, params.top, params.near, params.far);
    default:
      return identity();
  }
}

function identity(): number[] {
  return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
}

function translation(x: number, y: number, z: number): number[] {
  return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1];
}

function scaling(x: number, y: number, z: number): number[] {
  return [x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1];
}

function rotation(rx: number, ry: number, rz: number): number[] {
  const a = (rx * Math.PI) / 180;
  const b = (ry * Math.PI) / 180;
  const c = (rz * Math.PI) / 180;
  const cx = Math.cos(a), sx = Math.sin(a);
  const cy = Math.cos(b), sy = Math.sin(b);
  const cz = Math.cos(c), sz = Math.sin(c);
  return [
    cy * cz, -cy * sz, sy, 0,
    cx * sz + sx * sy * cz, cx * cz - sx * sy * sz, -sx * cy, 0,
    sx * sz - cx * sy * cz, sx * cz + cx * sy * sz, cx * cy, 0,
    0, 0, 0, 1
  ];
}

function perspective(fov: number, aspect: number, near: number, far: number): number[] {
  const f = 1 / Math.tan((fov * Math.PI) / 360);
  const nf = 1 / (near - far);
  return [f / aspect, 0, 0, 0, 0, f, 0, 0, 0, 0, (far + near) * nf, -1, 0, 0, 2 * far * near * nf, 0];
}

function orthographic(left: number, right: number, bottom: number, top: number, near: number, far: number): number[] {
  const lr = 1 / (left - right);
  const bt = 1 / (bottom - top);
  const nf = 1 / (near - far);
  return [-2 * lr, 0, 0, 0, 0, -2 * bt, 0, 0, 0, 0, 2 * nf, 0, (left + right) * lr, (top + bottom) * bt, (near + far) * nf, 1];
}

function multiply(a: number[], b: number[]): number[] {
  const out = new Array(16).fill(0);
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      for (let k = 0; k < 4; k++) {
        out[i * 4 + j] += a[i * 4 + k] * b[k * 4 + j];
      }
    }
  }
  return out;
}

function formatNumber(n: number): string {
  const rounded = Math.round(n * 1000) / 1000;
  return rounded.toFixed(rounded % 1 === 0 ? 0 : 2);
}

function formatMatrix(m: number[]): string {
  const lines: string[] = [];
  for (let i = 0; i < 4; i++) {
    lines.push(m.slice(i * 4, i * 4 + 4).map(formatNumber).join(" "));
  }
  return lines.join("\n");
}
