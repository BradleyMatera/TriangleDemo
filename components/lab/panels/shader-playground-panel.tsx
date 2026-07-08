"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Edit3, Eye, Save, Sparkles, Tag, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { shaderExamples, getShaderExample } from "@/lib/lab/shader-gallery";
import { useWorkspaceStore } from "@/lib/stores/workspace-store";
import { useLessonStore } from "@/lib/stores/lesson-store";

const initialId = shaderExamples[0]!.id;

export function ShaderPlaygroundPanel() {
  const [activeId, setActiveId] = useState(initialId);
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [showCode, setShowCode] = useState(false);
  const activeShader = getShaderExample(activeId) ?? shaderExamples[0]!;

  const setAppliedShaders = useWorkspaceStore((s) => s.applyShaders);
  const addBookmark = useLessonStore((s) => s.addBookmark);

  const handlePreview = () => {
    setAppliedShaders({
      vertexShader: activeShader.vertex,
      fragmentShader: activeShader.fragment
    });
  };

  const handleSave = () => {
    if (!savedIds.includes(activeId)) {
      setSavedIds((prev) => [...prev, activeId]);
    }
    addBookmark({
      id: `shader-${activeId}-${Date.now()}`,
      title: activeShader.name,
      type: "shader"
    });
  };

  const handleDownload = () => {
    const blob = new Blob(
      [JSON.stringify(activeShader, null, 2)],
      { type: "application/json" }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${activeShader.id}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B0C15]/80 p-5 shadow-card">
      <div className="mb-4">
        <span className="text-[10px] uppercase tracking-[0.3em] text-brand-subtle">Shader Playground</span>
        <h2 className="mt-1 font-display text-lg font-semibold text-white">Shader Gallery</h2>
        <p className="text-xs text-slate-400">Preview, edit, save, and download 15 WGSL shader examples.</p>
      </div>

      <div className="mb-3 flex flex-wrap items-center gap-2">
        <ActionButton icon={Eye} label="Preview in viewport" onClick={handlePreview} />
        <ActionButton icon={Edit3} label="Toggle code" onClick={() => setShowCode((s) => !s)} active={showCode} />
        <ActionButton icon={Save} label="Save" onClick={handleSave} />
        <ActionButton icon={Download} label="Download" onClick={handleDownload} />
      </div>

      {showCode ? (
        <div className="mb-3 flex-1 overflow-hidden rounded-xl border border-white/10 bg-slate-950/50">
          <pre className="h-full overflow-auto p-4 text-[10px] leading-relaxed text-slate-300">
            <code>{activeShader.fragment}</code>
          </pre>
        </div>
      ) : null}

      <div className="grid flex-1 grid-cols-2 gap-3 overflow-y-auto sm:grid-cols-3 lg:grid-cols-4">
        {shaderExamples.map((shader) => (
          <ShaderCard
            key={shader.id}
            shader={shader}
            active={activeId === shader.id}
            saved={savedIds.includes(shader.id)}
            onClick={() => setActiveId(shader.id)}
          />
        ))}
      </div>

      {savedIds.length > 0 ? (
        <div className="mt-3 border-t border-white/10 pt-3">
          <div className="mb-2 text-[10px] uppercase tracking-wider text-brand-subtle">Saved</div>
          <div className="flex flex-wrap gap-2">
            {savedIds.map((id) => {
              const shader = getShaderExample(id)!;
              return (
                <button
                  key={id}
                  onClick={() => setActiveId(id)}
                  className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-slate-300 hover:bg-white/10"
                >
                  <Sparkles className="size-3 text-brand" />
                  {shader.name}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function ShaderCard({
  shader,
  active,
  saved,
  onClick
}: {
  shader: (typeof shaderExamples)[number];
  active: boolean;
  saved: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border text-left outline-none transition-all focus-visible:ring-2 focus-visible:ring-brand/60",
        active ? "border-brand/50" : "border-white/10 hover:border-white/20"
      )}
      aria-label={`${shader.name} shader example. ${shader.description}`}
    >
      <div className="relative h-20 w-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
        <ShaderPreview tone={shaderTone(shader.id)} />
        {active ? (
          <div className="absolute right-2 top-2 rounded-full bg-brand/20 p-1">
            <Sparkles className="size-3 text-brand" />
          </div>
        ) : null}
        {saved ? (
          <div className="absolute left-2 top-2 rounded-full bg-emerald-500/20 p-1">
            <Save className="size-3 text-emerald-400" />
          </div>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col justify-between p-3">
        <div>
          <span className="text-xs font-semibold text-white">{shader.name}</span>
          <p className="mt-1 line-clamp-2 text-[10px] leading-relaxed text-slate-400">{shader.description}</p>
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-1">
          {shader.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="flex items-center gap-1 rounded-md bg-white/5 px-1.5 py-0.5 text-[9px] text-slate-400">
              <Tag className="size-2.5" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  );
}

function ActionButton({
  icon: Icon,
  label,
  onClick,
  active
}: {
  icon: typeof Eye;
  label: string;
  onClick: () => void;
  active?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-1.5 rounded-lg border border-white/10 px-2.5 py-1.5 text-[11px] font-medium transition-colors hover:bg-white/10",
        active ? "bg-brand/20 text-brand" : "bg-white/5 text-slate-300"
      )}
      aria-label={label}
      title={label}
    >
      <Icon className="size-3.5" />
      {label}
    </button>
  );
}

function ShaderPreview({ tone }: { tone: string }) {
  return (
    <div className={cn("absolute inset-0 opacity-80 transition-opacity group-hover:opacity-100", tone)} />
  );
}

function shaderTone(id: string): string {
  switch (id) {
    case "gradient":
      return "bg-gradient-to-br from-cyan-400 to-blue-500";
    case "rainbow":
      return "bg-gradient-to-br from-rose-400 via-amber-400 to-emerald-400";
    case "glass":
      return "bg-gradient-to-br from-slate-200/40 to-slate-400/40";
    case "fire":
      return "bg-gradient-to-br from-orange-500 to-red-600";
    case "water":
      return "bg-gradient-to-br from-cyan-500 to-blue-700";
    case "noise":
      return "bg-gradient-to-br from-slate-500 to-slate-700";
    case "aurora":
      return "bg-gradient-to-br from-emerald-400 via-cyan-500 to-purple-500";
    case "crt":
      return "bg-gradient-to-br from-green-400 to-green-600";
    case "pixelate":
      return "bg-gradient-to-br from-indigo-400 to-purple-600";
    case "bloom":
      return "bg-gradient-to-br from-yellow-300 to-orange-400";
    case "outline":
      return "bg-gradient-to-br from-white to-slate-300";
    case "toon":
      return "bg-gradient-to-br from-pink-400 to-rose-500";
    case "hologram":
      return "bg-gradient-to-br from-cyan-300/50 to-purple-400/50";
    case "metal":
      return "bg-gradient-to-br from-slate-300 to-slate-500";
    case "pbr":
      return "bg-gradient-to-br from-amber-300 to-orange-500";
    default:
      return "bg-gradient-to-br from-brand/40 to-brand-accent/40";
  }
}
