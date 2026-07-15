"use client";

import { useState } from "react";
import { Download, Play, RotateCcw, Save, Sparkles, Tag } from "lucide-react";
import { shaderExamples, getShaderExample } from "@/lib/lab/shader-gallery";
import { useWorkspaceStore } from "@/lib/stores/workspace-store";
import { useLessonStore } from "@/lib/stores/lesson-store";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

const defaultFragment = `@fragment
fn main(@location(0) fragUV: vec2f, @location(1) fragPosition: vec4f) -> @location(0) vec4f {
  return vec4f(fragUV.x, fragUV.y, 0.5, 1.0);
}
`;

export function ShaderStudioPanel() {
  const [fragmentCode, setFragmentCode] = useState(defaultFragment);
  const [compileError, setCompileError] = useState<string | null>(null);
  const applyShaders = useWorkspaceStore((s) => s.applyShaders);
  const addBookmark = useLessonStore((s) => s.addBookmark);

  const run = () => {
    setCompileError(null);
    applyShaders({ fragmentShader: fragmentCode });
  };

  const reset = () => {
    setCompileError(null);
    setFragmentCode(defaultFragment);
    applyShaders({ fragmentShader: defaultFragment });
  };

  const loadExample = (id: string) => {
    const example = getShaderExample(id);
    if (!example) return;
    setCompileError(null);
    setFragmentCode(example.fragment);
    applyShaders({ fragmentShader: example.fragment });
  };

  const handleSave = () => {
    addBookmark({
      id: `shader-${Date.now()}`,
      title: "Custom shader",
      type: "shader"
    });
  };

  const handleDownload = () => {
    const blob = new Blob([JSON.stringify({ fragment: fragmentCode }, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `shader-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B0C15]/80 shadow-card">
      <div className="shrink-0 border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <Sparkles className="size-4 text-brand-subtle" />
          <div>
            <h2 className="font-display text-base font-semibold text-white">Shader Studio</h2>
            <p className="text-xs text-slate-400">Pick an example, edit the fragment WGSL, and run it on the cube mesh.</p>
          </div>
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col">
        {/* Example gallery - fixed max height, scrollable */}
        <div className="flex-none border-b border-white/10 p-3">
          <div className="mb-2 text-[10px] uppercase tracking-wider text-slate-500">Examples</div>
          <div className="grid max-h-[140px] grid-cols-2 gap-2 overflow-y-auto pr-1 sm:grid-cols-3 md:grid-cols-4">
            {shaderExamples.map((shader) => (
              <button
                key={shader.id}
                onClick={() => loadExample(shader.id)}
                className="flex flex-col items-start rounded-lg border border-white/10 bg-white/5 p-2 text-left transition-colors hover:border-white/20 hover:bg-white/10"
              >
                <span className="text-xs font-semibold text-white">{shader.name}</span>
                <span className="mt-0.5 line-clamp-2 text-[9px] leading-snug text-slate-400">{shader.description}</span>
                <span className="mt-auto flex flex-wrap gap-1 pt-1">
                  {shader.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="flex items-center gap-0.5 rounded bg-white/5 px-1 py-0.5 text-[8px] text-slate-400">
                      <Tag className="size-2" />
                      {tag}
                    </span>
                  ))}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Editor */}
        <div className="flex min-h-0 flex-1 flex-col">
          <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-3 py-2">
            <span className="text-[11px] font-medium text-white">Fragment WGSL</span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={run}
                className="flex items-center gap-1 rounded-md bg-brand/15 px-2 py-1 text-[10px] font-semibold text-brand-subtle transition-colors hover:bg-brand/25"
              >
                <Play className="size-3" />
                Run
              </button>
              <button
                onClick={reset}
                className="flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium text-slate-300 transition-colors hover:bg-white/10"
              >
                <RotateCcw className="size-3" />
                Reset
              </button>
              <button
                onClick={handleSave}
                className="flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium text-slate-300 transition-colors hover:bg-white/10"
              >
                <Save className="size-3" />
                Save
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium text-slate-300 transition-colors hover:bg-white/10"
              >
                <Download className="size-3" />
                Download
              </button>
            </div>
          </div>

          {compileError ? (
            <div className="shrink-0 border-b border-rose-400/20 bg-rose-400/10 px-3 py-2 text-[11px] text-rose-200">
              {compileError}
            </div>
          ) : null}

          <div className="relative min-h-0 flex-1">
            <MonacoEditor
              className="absolute inset-0"
              language="wgsl"
              value={fragmentCode}
              onChange={(value) => setFragmentCode(value || "")}
              options={{
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                fontSize: 12,
                lineNumbers: "on",
                folding: true,
                automaticLayout: true,
                theme: "vs-dark"
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
