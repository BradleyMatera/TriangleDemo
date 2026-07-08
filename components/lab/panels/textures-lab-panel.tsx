"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Download, ImageIcon, Layers, AlertCircle, CheckCircle2, FileImage, Grid3X3, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { NumericInput } from "@/components/lab/controls/numeric-input";

interface TextureCard {
  id: string;
  name: string;
  description: string;
  error?: string;
  valid: boolean;
  width: number;
  height: number;
  format: string;
  usage: string[];
}

const sampleCards: TextureCard[] = [
  {
    id: "color",
    name: "Color texture",
    description: "Standard RGBA8 UNORM texture sampled by the fragment shader.",
    valid: true,
    width: 512,
    height: 512,
    format: "rgba8unorm",
    usage: ["TEXTURE_BINDING", "COPY_DST"]
  },
  {
    id: "normal",
    name: "Normal map",
    description: "Stores per-pixel normal vectors in tangent space.",
    valid: true,
    width: 512,
    height: 512,
    format: "rgba8unorm",
    usage: ["TEXTURE_BINDING"]
  },
  {
    id: "depth",
    name: "Depth texture",
    description: "Depth24plus format used for shadow maps and z-testing.",
    valid: true,
    width: 1024,
    height: 1024,
    format: "depth24plus",
    usage: ["RENDER_ATTACHMENT", "TEXTURE_BINDING"]
  },
  {
    id: "mismatched",
    name: "Mismatched sampler",
    description: "Sampler expects repeating wrap mode but texture dimensions are not power-of-two.",
    error: "Non-power-of-two textures cannot use 'repeat' addressMode.",
    valid: false,
    width: 500,
    height: 500,
    format: "rgba8unorm",
    usage: ["TEXTURE_BINDING"]
  }
];

const samplerPresets = [
  { id: "nearest", label: "Nearest", magFilter: "nearest", minFilter: "nearest", addressModeU: "clamp-to-edge", addressModeV: "clamp-to-edge" },
  { id: "linear", label: "Linear", magFilter: "linear", minFilter: "linear", addressModeU: "clamp-to-edge", addressModeV: "clamp-to-edge" },
  { id: "repeat", label: "Repeat", magFilter: "linear", minFilter: "linear", addressModeU: "repeat", addressModeV: "repeat" },
  { id: "mirrored", label: "Mirrored", magFilter: "linear", minFilter: "linear", addressModeU: "mirror-repeat", addressModeV: "mirror-repeat" }
];

export function TexturesLabPanel() {
  const [active, setActive] = useState<string>("color");
  const [sampler, setSampler] = useState(samplerPresets[1]);
  const [uvScale, setUvScale] = useState(1);
  const [uvOffset, setUvOffset] = useState({ u: 0, v: 0 });
  const [showGrid, setShowGrid] = useState(false);

  const activeCard = sampleCards.find((c) => c.id === active) ?? sampleCards[0]!;

  const handleCopyWGSL = () => {
    const code = generateSamplerWGSL(sampler, uvScale, uvOffset);
    void navigator.clipboard.writeText(code);
  };

  const handleExport = () => {
    const payload = JSON.stringify(
      { activeTexture: activeCard.id, sampler, uv: { scale: uvScale, offset: uvOffset } },
      null,
      2
    );
    const blob = new Blob([payload], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `texture-config-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B0C15]/80 p-5 shadow-card">
      <div className="mb-4">
        <span className="text-[10px] uppercase tracking-[0.3em] text-brand-subtle">Textures Lab</span>
        <h2 className="mt-1 font-display text-lg font-semibold text-white">Texture & UV Module</h2>
        <p className="text-xs text-slate-400">Preview sampler settings, UV transforms, texture cards, and common errors.</p>
      </div>

      <div className="mb-3 flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-3 py-2">
        <Info className="size-3.5 text-emerald-400 shrink-0" />
        <span className="text-[11px] text-emerald-300 flex-1">
          UV scale and offset update the texture preview below in real time.
        </span>
      </div>

      <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {sampleCards.map((card) => {
          const isActive = active === card.id;
          return (
            <button
              key={card.id}
              onClick={() => setActive(card.id)}
              className={cn(
                "flex flex-col gap-1 rounded-xl border p-2 text-left text-[10px] transition-all focus-visible:ring-2 focus-visible:ring-brand/60",
                isActive
                  ? "border-brand/50 bg-brand/15 text-white"
                  : "border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-slate-200"
              )}
              aria-label={`Select ${card.name}`}
              title={card.name}
            >
              <span className="flex items-center gap-1 font-medium text-white">
                {card.valid ? <CheckCircle2 className="size-3 text-emerald-400" /> : <AlertCircle className="size-3 text-rose-400" />}
                {card.name}
              </span>
              <span className="line-clamp-2 text-slate-500">{card.format}</span>
            </button>
          );
        })}
      </div>

      <div className="mb-3 flex flex-wrap items-center gap-2">
        {samplerPresets.map((preset) => {
          const isActive = sampler.id === preset.id;
          return (
            <button
              key={preset.id}
              onClick={() => setSampler(preset)}
              className={cn(
                "flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[11px] font-medium transition-colors",
                isActive ? "border-brand/40 bg-brand/15 text-brand" : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
              )}
              aria-pressed={isActive}
            >
              <Layers className="size-3.5" />
              {preset.label}
            </button>
          );
        })}

        <button
          onClick={() => setShowGrid((v) => !v)}
          className={cn(
            "flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[11px] font-medium transition-colors",
            showGrid ? "border-cyan-400/40 bg-cyan-400/15 text-cyan-300" : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
          )}
          aria-pressed={showGrid}
        >
          <Grid3X3 className="size-3.5" />
          UV grid
        </button>

        <button
          onClick={handleCopyWGSL}
          className="ml-auto flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] font-medium text-slate-300 transition-colors hover:bg-white/10"
          aria-label="Copy sampler WGSL"
          title="Copy sampler WGSL"
        >
          <Copy className="size-3.5" />
          Copy WGSL
        </button>
        <button
          onClick={handleExport}
          className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] font-medium text-slate-300 transition-colors hover:bg-white/10"
          aria-label="Export texture JSON"
          title="Export texture JSON"
        >
          <Download className="size-3.5" />
          Export
        </button>
      </div>

      <motion.div
        key={active}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-3 rounded-xl border border-white/10 bg-white/5 p-3"
      >
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-wider text-brand-subtle">{activeCard.name}</span>
          <span className="text-[10px] text-slate-500">{activeCard.width}×{activeCard.height}</span>
        </div>
        <p className="mb-2 text-[11px] text-slate-400">{activeCard.description}</p>
        {activeCard.error ? (
          <div className="flex items-start gap-2 rounded-lg border border-rose-500/20 bg-rose-500/10 p-2 text-[11px] text-rose-200">
            <AlertCircle className="mt-0.5 size-3.5 shrink-0" />
            <span>{activeCard.error}</span>
          </div>
        ) : (
          <div className="flex flex-wrap gap-1">
            {activeCard.usage.map((u) => (
              <span key={u} className="rounded bg-emerald-500/15 px-1.5 py-0.5 text-[9px] text-emerald-300">{u}</span>
            ))}
          </div>
        )}
      </motion.div>

      <div className="mb-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <NumericInput
          label="UV scale"
          value={uvScale}
          min={0.1}
          max={4}
          step={0.1}
          precision={1}
          onChange={(v) => setUvScale(v)}
        />
        <NumericInput
          label="U offset"
          value={uvOffset.u}
          min={-1}
          max={1}
          step={0.05}
          precision={2}
          onChange={(v) => setUvOffset((prev) => ({ ...prev, u: v }))}
        />
        <NumericInput
          label="V offset"
          value={uvOffset.v}
          min={-1}
          max={1}
          step={0.05}
          precision={2}
          onChange={(v) => setUvOffset((prev) => ({ ...prev, v: v }))}
        />
      </div>

      <motion.div
        key={`${active}-${sampler.id}-${uvScale}-${uvOffset.u}-${uvOffset.v}-${showGrid}`}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-1 flex-col rounded-xl border border-white/10 bg-slate-950/50 p-4"
      >
        <div className="mb-2 flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold text-white">UV preview</div>
            <p className="text-[11px] text-slate-400">
              Sampler: {sampler.label} · UV: {uvScale.toFixed(1)}× + ({uvOffset.u.toFixed(2)}, {uvOffset.v.toFixed(2)})
            </p>
          </div>
          <FileImage className="size-4 text-slate-500" />
        </div>
        <div className="relative flex-1 rounded-lg border border-dashed border-white/10 bg-white/5">
          <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
            <span className="rounded bg-brand/20 px-1.5 py-0.5 text-[9px] text-brand-subtle">{activeCard.format}</span>
            {showGrid ? <span className="rounded bg-cyan-400/20 px-1.5 py-0.5 text-[9px] text-cyan-300">grid</span> : null}
            {!activeCard.valid ? <span className="rounded bg-rose-500/20 px-1.5 py-0.5 text-[9px] text-rose-300">error</span> : null}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="relative overflow-hidden rounded-lg border border-white/10"
              style={{
                width: 128,
                height: 128,
                background: `repeating-conic-gradient(#1e293b 0% 25%, #334155 0% 50%) 50% / ${16 / uvScale}px ${16 / uvScale}px`,
                backgroundPosition: `${uvOffset.u * 32}px ${uvOffset.v * 32}px`
              }}
            >
              {showGrid ? (
                <div
                  className="absolute inset-0 opacity-50"
                  style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                    backgroundSize: `${32 * uvScale}px ${32 * uvScale}px`
                  }}
                />
              ) : null}
            </div>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2 text-center text-[11px] text-slate-400">
          <div className="rounded-lg bg-white/5 p-2">
            <div className="font-display text-sm text-white">{sampler.magFilter}</div>
            <div>Mag filter</div>
          </div>
          <div className="rounded-lg bg-white/5 p-2">
            <div className="font-display text-sm text-white">{sampler.addressModeU}</div>
            <div>Wrap U</div>
          </div>
          <div className="rounded-lg bg-white/5 p-2">
            <div className="font-display text-sm text-white">{activeCard.usage.length}</div>
            <div>Usages</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function generateSamplerWGSL(
  sampler: (typeof samplerPresets)[number],
  uvScale: number,
  uvOffset: { u: number; v: number }
): string {
  return `// Auto-generated sampler configuration
var mySampler: sampler = sampler(
  magFilter: ${sampler.magFilter},
  minFilter: ${sampler.minFilter},
  addressModeU: ${sampler.addressModeU},
  addressModeV: ${sampler.addressModeV}
);

fn sampleScaled(uv: vec2f) -> vec2f {
  return uv * ${uvScale.toFixed(1)} + vec2f(${uvOffset.u.toFixed(2)}, ${uvOffset.v.toFixed(2)});
}
`;
}
