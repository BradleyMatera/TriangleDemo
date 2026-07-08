"use client";

import { BookOpen, Code2, FileText, Lightbulb, ScrollText, Terminal } from "lucide-react";

const docs = [
  { id: "wgsl", title: "WGSL Reference", icon: Code2, desc: "Types, builtins, and syntax for WebGPU Shading Language." },
  { id: "webgpu-api", title: "WebGPU API", icon: Terminal, desc: "Device, queue, command encoders, and render passes." },
  { id: "examples", title: "Examples", icon: FileText, desc: "Minimal, runnable snippets covering common techniques." },
  { id: "best-practices", title: "Best Practices", icon: Lightbulb, desc: "Memory barriers, buffer uploads, and pipeline layouts." },
  { id: "performance", title: "Performance Tips", icon: BookOpen, desc: "Minimize CPU/GPU overhead and reduce descriptor churn." },
  { id: "errors", title: "Common Errors", icon: ScrollText, desc: "Compilation messages and runtime validation failures." }
];

export function DocumentationPanel() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B0C15]/80 p-5 shadow-card">
      <div className="mb-4">
        <span className="text-[10px] uppercase tracking-[0.3em] text-brand-subtle">Documentation</span>
        <h2 className="mt-1 font-display text-lg font-semibold text-white">Integrated Docs</h2>
        <p className="text-xs text-slate-400">Reference materials built into the lab.</p>
      </div>

      <div className="grid flex-1 grid-cols-1 gap-3 overflow-y-auto sm:grid-cols-2">
        {docs.map((doc) => {
          const Icon = doc.icon;
          return (
            <button
              key={doc.id}
              className="flex flex-col items-start gap-2 rounded-xl border border-white/10 bg-white/5 p-4 text-left transition-all hover:border-white/20 hover:bg-white/10"
            >
              <div className="flex items-center gap-2 text-brand-subtle">
                <Icon className="size-4" />
                <span className="text-xs font-semibold text-white">{doc.title}</span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-400">{doc.desc}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
