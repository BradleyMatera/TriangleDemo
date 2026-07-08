"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import {
  Box,
  Circle,
  Cone,
  Cuboid,
  Cylinder,
  Download,
  Eye,
  Hexagon,
  Info,
  Rabbit,
  RotateCcw,
  RotateCw,
  Scaling,
  SlidersHorizontal,
  Square,
  Triangle
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useMetricsStore } from "@/lib/stores/metrics-store";
import {
  useGeometryStore,
  type GeometryShapeId,
  type GeometryTransformMode
} from "@/lib/stores/geometry-store";

interface ShapeMeta {
  id: GeometryShapeId;
  name: string;
  icon: typeof Triangle;
  vertices: number;
  triangles: number;
  indices: number;
  description: string;
  viewportNote: string;
}

const shapes: ShapeMeta[] = [
  {
    id: "triangle",
    name: "Triangle",
    icon: Triangle,
    vertices: 3,
    triangles: 1,
    indices: 3,
    description: "Three vertices and one face. This is the smallest drawable mesh.",
    viewportNote: "Renders as one indexed triangle in the WebGPU viewport."
  },
  {
    id: "quad",
    name: "Quad",
    icon: Square,
    vertices: 4,
    triangles: 2,
    indices: 6,
    description: "A four-corner surface split into two triangles.",
    viewportNote: "Renders as an indexed plane made from two triangles."
  },
  {
    id: "cube",
    name: "Cube",
    icon: Cuboid,
    vertices: 8,
    triangles: 12,
    indices: 36,
    description: "A 3D box with six faces and twelve triangle primitives.",
    viewportNote: "Renders as an indexed cube with depth testing."
  },
  {
    id: "sphere",
    name: "Sphere",
    icon: Circle,
    vertices: 325,
    triangles: 576,
    indices: 1728,
    description: "A UV sphere generated from rings and segments.",
    viewportNote: "Renders as a generated sphere mesh; subdivision increases rings."
  },
  {
    id: "plane",
    name: "Plane",
    icon: Square,
    vertices: 4,
    triangles: 2,
    indices: 6,
    description: "A flat ground surface used for grids, shadows, and UV work.",
    viewportNote: "Renders as a grid-like indexed plane; subdivision rebuilds the mesh."
  },
  {
    id: "cylinder",
    name: "Cylinder",
    icon: Cylinder,
    vertices: 50,
    triangles: 96,
    indices: 288,
    description: "A capped radial mesh with side faces and top/bottom caps.",
    viewportNote: "Renders as a generated capped cylinder."
  },
  {
    id: "cone",
    name: "Cone",
    icon: Cone,
    vertices: 50,
    triangles: 72,
    indices: 216,
    description: "A tapered radial mesh with side faces and a circular base.",
    viewportNote: "Renders as a generated cone."
  },
  {
    id: "torus",
    name: "Torus",
    icon: Hexagon,
    vertices: 703,
    triangles: 1296,
    indices: 3888,
    description: "A ring mesh formed by sweeping a circle around an axis.",
    viewportNote: "Renders as a generated torus mesh."
  },
  {
    id: "monkey",
    name: "Monkey",
    icon: Eye,
    vertices: 1007,
    triangles: 1728,
    indices: 5184,
    description: "A Suzanne-style proxy mesh for model-loading and topology discussion.",
    viewportNote: "Renders as an assembled proxy mesh, not an imported Blender asset yet."
  },
  {
    id: "bunny",
    name: "Bunny",
    icon: Rabbit,
    vertices: 1136,
    triangles: 1944,
    indices: 5832,
    description: "A Stanford Bunny-style proxy mesh for model-loading and LOD exercises.",
    viewportNote: "Renders as an assembled proxy mesh, not the scanned Stanford dataset yet."
  }
];

const transformPresets: {
  id: GeometryTransformMode;
  name: string;
  icon: typeof RotateCw;
  help: string;
}[] = [
  { id: "rotate", name: "Rotate", icon: RotateCw, help: "Rotate the selected mesh around X, Y, and Z axes." },
  { id: "translate", name: "Translate", icon: RotateCcw, help: "Move the selected mesh in world space." },
  { id: "scale", name: "Scale", icon: Scaling, help: "Scale the selected mesh uniformly." },
  { id: "subdivide", name: "Subdivide", icon: SlidersHorizontal, help: "Rebuild generated meshes with more segments where supported." }
];

const viewToggles = [
  { id: "wireframe" as const, name: "Wireframe", icon: Box, help: "Mark the mesh as a wireframe debug target in the lab preview." },
  { id: "normals" as const, name: "Normals", icon: SlidersHorizontal, help: "Show normal-direction guidance in the lab preview." }
];

export function GeometryLabPanel() {
  const selectedShape = useGeometryStore((s) => s.selectedShape);
  const activeTransform = useGeometryStore((s) => s.activeTransform);
  const rotation = useGeometryStore((s) => s.rotation);
  const translation = useGeometryStore((s) => s.translation);
  const scale = useGeometryStore((s) => s.scale);
  const subdivisions = useGeometryStore((s) => s.subdivisions);
  const debug = useGeometryStore((s) => s.debug);
  const setSelectedShape = useGeometryStore((s) => s.setSelectedShape);
  const setActiveTransform = useGeometryStore((s) => s.setActiveTransform);
  const setRotationAxis = useGeometryStore((s) => s.setRotationAxis);
  const setTranslationAxis = useGeometryStore((s) => s.setTranslationAxis);
  const setScale = useGeometryStore((s) => s.setScale);
  const setSubdivisions = useGeometryStore((s) => s.setSubdivisions);
  const toggleDebug = useGeometryStore((s) => s.toggleDebug);
  const reset = useGeometryStore((s) => s.reset);
  const updateMetrics = useMetricsStore((s) => s.updateMetrics);
  const activeShape = shapes.find((s) => s.id === selectedShape) ?? shapes[0]!;
  const topology = getEffectiveTopology(activeShape, subdivisions);

  const handleShapeClick = (id: GeometryShapeId) => {
    const nextShape = shapes.find((s) => s.id === id) ?? shapes[0]!;
    setSelectedShape(id);
    updateMetrics({
      vertices: getEffectiveTopology(nextShape, subdivisions).vertices,
      triangles: getEffectiveTopology(nextShape, subdivisions).triangles,
      buffers: 3
    });
  };

  const handleExport = () => {
    const payload = JSON.stringify(
      {
        shape: activeShape.id,
        topology,
        transform: { rotation, translation, scale, subdivisions },
        debug,
        note: activeShape.viewportNote
      },
      null,
      2
    );
    const blob = new Blob([payload], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${activeShape.id}-geometry-lab.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B0C15]/80 shadow-card">
      <div className="border-b border-white/10 p-4">
        <span className="text-[10px] uppercase tracking-[0.3em] text-brand-subtle">Geometry Lab</span>
        <div className="mt-1 flex flex-wrap items-start justify-between gap-3">
          <div>
            <h2 className="font-display text-lg font-semibold text-white">Interactive Geometry</h2>
            <p className="max-w-xl text-xs leading-relaxed text-slate-400">
              This panel is the control surface. The WebGPU Viewport beside it is the live renderer. Select a mesh here,
              then use the transform controls to see the same object move in the viewport.
            </p>
          </div>
          <button
            onClick={reset}
            className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-300 transition-colors hover:bg-white/10"
          >
            Reset mesh
          </button>
        </div>
      </div>

      <div className="grid min-h-0 flex-1 gap-4 overflow-y-auto p-4 xl:grid-cols-[1fr_0.95fr]">
        <section className="space-y-4">
          <GuidedSteps />

          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h3 className="text-xs font-semibold text-white">1. Choose Mesh</h3>
              <span className="text-[10px] text-slate-500">Updates WebGPU viewport</span>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
              {shapes.map((shape) => {
                const Icon = shape.icon;
                const isActive = selectedShape === shape.id;
                return (
                  <button
                    key={shape.id}
                    onClick={() => handleShapeClick(shape.id)}
                    className={cn(
                      "group relative flex min-h-16 flex-col items-center justify-center gap-1.5 rounded-xl border p-2 text-[10px] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/70",
                      isActive
                        ? "border-brand/50 bg-brand/15 text-white shadow-[0_0_28px_rgba(124,92,255,0.18)]"
                        : "border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-slate-200"
                    )}
                    aria-label={`Select ${shape.name}: ${shape.description}`}
                  >
                    <Icon className="size-4" />
                    <span className="max-w-full truncate">{shape.name}</span>
                    <HoverHint>{shape.description}</HoverHint>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h3 className="text-xs font-semibold text-white">2. Transform Mesh</h3>
              <span className="text-[10px] text-slate-500">Sliders update live</span>
            </div>
            <div className="mb-3 flex flex-wrap items-center gap-2">
              {transformPresets.map((item) => {
                const Icon = item.icon;
                const isActive = activeTransform === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTransform(item.id)}
                    className={cn(
                      "group relative flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[11px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/70",
                      isActive
                        ? "border-brand/40 bg-brand/15 text-brand"
                        : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                    )}
                    aria-pressed={isActive}
                    aria-label={`${item.name}: ${item.help}`}
                  >
                    <Icon className="size-3.5" />
                    {item.name}
                    <HoverHint>{item.help}</HoverHint>
                  </button>
                );
              })}
            </div>
            <TransformControls
              activeTransform={activeTransform}
              rotation={rotation}
              translation={translation}
              scale={scale}
              subdivisions={subdivisions}
              onRotation={setRotationAxis}
              onTranslation={setTranslationAxis}
              onScale={setScale}
              onSubdivisions={setSubdivisions}
            />
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h3 className="text-xs font-semibold text-white">3. Debug And Export</h3>
              <button
                onClick={handleExport}
                className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] font-medium text-slate-300 transition-colors hover:bg-white/10"
                aria-label="Export selected mesh settings as JSON"
              >
                <Download className="size-3.5" />
                Export JSON
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {viewToggles.map((item) => {
                const Icon = item.icon;
                const isActive = debug[item.id];
                return (
                  <button
                    key={item.id}
                    onClick={() => toggleDebug(item.id)}
                    className={cn(
                      "group relative flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[11px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70",
                      isActive
                        ? "border-cyan-400/40 bg-cyan-400/15 text-cyan-300"
                        : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                    )}
                    aria-pressed={isActive}
                    aria-label={`${item.name}: ${item.help}`}
                  >
                    <Icon className="size-3.5" />
                    {item.name}
                    <HoverHint>{item.help}</HoverHint>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="flex min-h-[440px] flex-col rounded-xl border border-white/10 bg-slate-950/50 p-4">
          <div className="mb-3 flex items-start justify-between gap-3">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-brand-subtle">Selected Mesh</div>
              <h3 className="font-display text-base font-semibold text-white">{activeShape.name}</h3>
            </div>
            <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2 py-1 text-[10px] text-cyan-200">
              WebGPU linked
            </span>
          </div>
          <p className="mb-3 text-xs leading-relaxed text-slate-400">{activeShape.viewportNote}</p>
          <GeometryPreview shape={activeShape} />
          <div className="mt-3 grid grid-cols-3 gap-2 text-center text-[11px] text-slate-400">
            <MetricCard label="Vertices" value={topology.vertices} />
            <MetricCard label="Triangles" value={topology.triangles} />
            <MetricCard label="Indices" value={topology.indices} />
          </div>
          <div className="mt-3 rounded-lg border border-white/10 bg-white/5 p-3 text-[11px] leading-relaxed text-slate-400">
            <div className="mb-1 flex items-center gap-2 font-semibold text-slate-200">
              <Info className="size-3.5 text-brand-subtle" />
              How to read this
            </div>
            Mesh choice and subdivision rebuild the WebGPU vertex/index buffers. Rotation, translation, and scale update
            the model matrix every frame. The small preview mirrors your controls so the workflow is readable even before
            looking at the viewport.
          </div>
        </section>
      </div>
    </div>
  );
}

function GuidedSteps() {
  return (
    <div className="grid gap-2 text-xs text-slate-300 sm:grid-cols-3">
      {[
        ["Pick", "Select a mesh primitive."],
        ["Edit", "Adjust transform sliders."],
        ["Inspect", "Watch topology and viewport update."]
      ].map(([title, body], index) => (
        <div key={title} className="rounded-xl border border-brand/20 bg-brand/10 p-3">
          <div className="mb-1 text-[10px] uppercase tracking-wider text-brand-subtle">
            Step {index + 1}
          </div>
          <div className="font-semibold text-white">{title}</div>
          <div className="mt-1 text-[11px] leading-relaxed text-slate-400">{body}</div>
        </div>
      ))}
    </div>
  );
}

function TransformControls({
  activeTransform,
  rotation,
  translation,
  scale,
  subdivisions,
  onRotation,
  onTranslation,
  onScale,
  onSubdivisions
}: {
  activeTransform: GeometryTransformMode;
  rotation: { x: number; y: number; z: number };
  translation: { x: number; y: number; z: number };
  scale: number;
  subdivisions: number;
  onRotation: (axis: "x" | "y" | "z", value: number) => void;
  onTranslation: (axis: "x" | "y" | "z", value: number) => void;
  onScale: (value: number) => void;
  onSubdivisions: (value: number) => void;
}) {
  if (activeTransform === "scale") {
    return (
      <ControlGrid>
        <ControlSlider label="Scale" value={scale} min={0.35} max={2.4} step={0.05} onChange={onScale} />
      </ControlGrid>
    );
  }

  if (activeTransform === "subdivide") {
    return (
      <ControlGrid>
        <ControlSlider
          label="Levels"
          value={subdivisions}
          min={0}
          max={3}
          step={1}
          onChange={onSubdivisions}
        />
      </ControlGrid>
    );
  }

  const values = activeTransform === "rotate" ? rotation : translation;
  const update = activeTransform === "rotate" ? onRotation : onTranslation;
  const range = activeTransform === "rotate" ? { min: -180, max: 180, step: 1 } : { min: -1.4, max: 1.4, step: 0.05 };

  return (
    <ControlGrid>
      {(["x", "y", "z"] as const).map((axis) => (
        <ControlSlider
          key={axis}
          label={`${axis.toUpperCase()} ${activeTransform}`}
          value={values[axis]}
          min={range.min}
          max={range.max}
          step={range.step}
          onChange={(value) => update(axis, value)}
        />
      ))}
    </ControlGrid>
  );
}

function ControlGrid({ children }: { children: ReactNode }) {
  return <div className="grid gap-3 text-[11px] text-slate-400 sm:grid-cols-3">{children}</div>;
}

function ControlSlider({
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
    <label className="min-w-0">
      <div className="mb-1 flex items-center justify-between gap-2">
        <span>{label}</span>
        <span className="font-mono text-slate-300">{Number.isInteger(value) ? value : value.toFixed(2)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="w-full accent-brand"
      />
    </label>
  );
}

function GeometryPreview({ shape }: { shape: ShapeMeta }) {
  const Icon = shape.icon;
  const rotation = useGeometryStore((s) => s.rotation);
  const translation = useGeometryStore((s) => s.translation);
  const scale = useGeometryStore((s) => s.scale);
  const debug = useGeometryStore((s) => s.debug);
  const transform = `translate3d(${translation.x * 36}px, ${-translation.y * 36}px, 0) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${rotation.z}deg) scale(${scale})`;

  return (
    <div className="relative flex min-h-[230px] flex-1 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[radial-gradient(circle_at_50%_45%,rgba(34,211,238,0.16),transparent_36%),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:100%_100%,28px_28px,28px_28px]">
      <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
        {debug.wireframe ? <DebugChip>wireframe</DebugChip> : null}
        {debug.normals ? <DebugChip>normals</DebugChip> : null}
      </div>
      <div
        style={{ transform }}
        className={cn(
          "relative flex size-28 items-center justify-center rounded-3xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-100 shadow-[0_0_60px_rgba(34,211,238,0.18)] transition-transform duration-200 ease-out",
          debug.wireframe && "bg-[linear-gradient(45deg,rgba(34,211,238,0.2)_25%,transparent_25%,transparent_50%,rgba(34,211,238,0.2)_50%,rgba(34,211,238,0.2)_75%,transparent_75%)] bg-[size:12px_12px]"
        )}
      >
        <Icon className="size-16" />
        {debug.normals ? (
          <span className="absolute -right-9 -top-8 h-px w-16 rotate-[-38deg] bg-emerald-300 shadow-[0_0_16px_rgba(110,231,183,0.8)]" />
        ) : null}
      </div>
    </div>
  );
}

function DebugChip({ children }: { children: ReactNode }) {
  return <span className="rounded bg-cyan-400/20 px-1.5 py-0.5 text-[9px] text-cyan-300">{children}</span>;
}

function MetricCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg bg-white/5 p-2">
      <div className="font-display text-sm text-white">{value.toLocaleString()}</div>
      <div>{label}</div>
    </div>
  );
}

function HoverHint({ children }: { children: ReactNode }) {
  return (
    <span className="pointer-events-none absolute left-1/2 top-full z-30 mt-2 hidden w-56 -translate-x-1/2 rounded-lg border border-white/10 bg-slate-950/95 px-3 py-2 text-left text-[11px] leading-relaxed text-slate-300 shadow-2xl group-hover:block group-focus-visible:block">
      {children}
    </span>
  );
}

function getEffectiveTopology(shape: ShapeMeta, subdivisions: number) {
  const factor = shape.id === "triangle" || shape.id === "cube" || shape.id === "monkey" || shape.id === "bunny"
    ? 1
    : Math.max(1, subdivisions + 1);
  return {
    vertices: Math.round(shape.vertices * factor * factor),
    triangles: Math.round(shape.triangles * factor * factor),
    indices: Math.round(shape.indices * factor * factor)
  };
}
