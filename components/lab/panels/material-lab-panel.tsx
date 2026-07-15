"use client";

import { useEffect, useState } from "react";
import { Palette, RotateCcw } from "lucide-react";
import { useWorkspaceStore } from "@/lib/stores/workspace-store";
import { cn } from "@/lib/utils";

interface MaterialPreset {
  id: string;
  name: string;
  description: string;
  vertex: string;
  fragment: string;
}

const baseVertex = `struct Uniforms {
  mvp: mat4x4f,
}
@group(0) @binding(0) var<uniform> uniforms: Uniforms;

struct VertexOut {
  @builtin(position) position: vec4f,
  @location(0) color: vec3f,
  @location(1) worldPos: vec3f,
};

@vertex
fn main(@location(0) pos: vec3f, @location(1) col: vec3f) -> VertexOut {
  var out: VertexOut;
  out.position = uniforms.mvp * vec4f(pos, 1.0);
  out.color = col;
  out.worldPos = pos;
  return out;
}
`;

const presets: MaterialPreset[] = [
  {
    id: "color",
    name: "Vertex color",
    description: "Uses the mesh's built-in per-vertex colors.",
    vertex: baseVertex,
    fragment: `@fragment
fn main(@location(0) color: vec3f, @location(1) worldPos: vec3f) -> @location(0) vec4f {
  return vec4f(color, 1.0);
}
`
  },
  {
    id: "checker",
    name: "Checker",
    description: "A 3D checker pattern based on world position.",
    vertex: baseVertex,
    fragment: `@fragment
fn main(@location(0) color: vec3f, @location(1) worldPos: vec3f) -> @location(0) vec4f {
  let scale = 4.0;
  let check = step(0.5, fract(worldPos.x * scale)) + step(0.5, fract(worldPos.y * scale)) + step(0.5, fract(worldPos.z * scale));
  let lit = check % 2.0 == 0.0;
  let base = color * 0.7;
  return vec4f(select(base * 0.5, base * 1.15, lit), 1.0);
}
`
  },
  {
    id: "gradient",
    name: "Gradient",
    description: "A vertical gradient from bottom to top.",
    vertex: baseVertex,
    fragment: `@fragment
fn main(@location(0) color: vec3f, @location(1) worldPos: vec3f) -> @location(0) vec4f {
  let t = clamp(worldPos.y * 0.35 + 0.5, 0.0, 1.0);
  return vec4f(mix(vec3f(0.1, 0.15, 0.35), color, t), 1.0);
}
`
  },
  {
    id: "grid",
    name: "Grid",
    description: "Highlights edges based on world-space coordinates.",
    vertex: baseVertex,
    fragment: `@fragment
fn main(@location(0) color: vec3f, @location(1) worldPos: vec3f) -> @location(0) vec4f {
  let scale = 8.0;
  let gx = step(0.92, fract(abs(worldPos.x) * scale));
  let gy = step(0.92, fract(abs(worldPos.y) * scale));
  let gz = step(0.92, fract(abs(worldPos.z) * scale));
  let edge = max(max(gx, gy), gz);
  return vec4f(mix(color, vec3f(0.2, 0.9, 1.0), edge * 0.75), 1.0);
}
`
  },
  {
    id: "normal",
    name: "Position normal",
    description: "Colors faces by normalized world position (spherical normals).",
    vertex: baseVertex,
    fragment: `@fragment
fn main(@location(0) color: vec3f, @location(1) worldPos: vec3f) -> @location(0) vec4f {
  let n = normalize(worldPos);
  return vec4f(abs(n), 1.0);
}
`
  },
  {
    id: "stripes",
    name: "Stripes",
    description: "Diagonal stripes across the surface.",
    vertex: baseVertex,
    fragment: `@fragment
fn main(@location(0) color: vec3f, @location(1) worldPos: vec3f) -> @location(0) vec4f {
  let stripe = sin((worldPos.x + worldPos.y + worldPos.z) * 8.0) > 0.0;
  return vec4f(select(color * 0.4, color * 1.2, stripe), 1.0);
}
`
  }
];

export function MaterialLabPanel() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const applyShaders = useWorkspaceStore((s) => s.applyShaders);

  useEffect(() => {
    const preset = presets.find((p) => p.id === activeId);
    if (preset) {
      applyShaders({ vertexShader: preset.vertex, fragmentShader: preset.fragment });
    } else {
      applyShaders({});
    }
  }, [activeId, applyShaders]);

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B0C15]/80 p-5 shadow-card">
      <div className="mb-4">
        <div className="flex items-center gap-2">
          <Palette className="size-4 text-brand-subtle" />
          <div>
            <h2 className="font-display text-base font-semibold text-white">Material Presets</h2>
            <p className="text-xs text-slate-400">Apply a procedural material to the active mesh in the viewport.</p>
          </div>
        </div>
      </div>

      <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {presets.map((preset) => {
          const active = activeId === preset.id;
          return (
            <button
              key={preset.id}
              onClick={() => setActiveId(preset.id)}
              className={cn(
                "flex flex-col items-start rounded-xl border p-3 text-left transition-all",
                active ? "border-brand/50 bg-brand/15 text-white" : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:bg-white/10"
              )}
            >
              <span className="text-xs font-semibold">{preset.name}</span>
              <span className="mt-1 text-[10px] leading-snug text-slate-400">{preset.description}</span>
            </button>
          );
        })}
      </div>

      <button
        onClick={() => setActiveId(null)}
        disabled={activeId === null}
        className="mt-auto flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-300 transition-colors hover:bg-white/10 disabled:opacity-40"
      >
        <RotateCcw className="size-3.5" />
        Reset to default mesh colors
      </button>
    </div>
  );
}
