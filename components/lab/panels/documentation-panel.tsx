"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  ChevronLeft,
  Code2,
  Copy,
  Download,
  FileText,
  Lightbulb,
  ScrollText,
  Terminal
} from "lucide-react";
import { cn } from "@/lib/utils";

interface DocSection {
  id: string;
  title: string;
  icon: typeof Code2;
  desc: string;
  content: { heading: string; body: string; code?: string }[];
}

const docs: DocSection[] = [
  {
    id: "wgsl",
    title: "WGSL Reference",
    icon: Code2,
    desc: "Types, builtins, and syntax for WebGPU Shading Language.",
    content: [
      {
        heading: "Basic scalar types",
        body: "WGSL provides f32, i32, u32, bool, and f16 if enabled. Vectors use vec2f, vec3f, vec4f.",
        code: "let color: vec4f = vec4f(1.0, 0.0, 0.0, 1.0);"
      },
      {
        heading: "Vertex entry point",
        body: "A vertex shader returns @builtin(position) and may output user-defined locations.",
        code: "@vertex\nfn main(@builtin(vertex_index) idx: u32) -> @builtin(position) vec4f {\n  return vec4f(0.0, 0.0, 0.0, 1.0);\n}"
      },
      {
        heading: "Fragment entry point",
        body: "A fragment shader writes color to @location(0).",
        code: "@fragment\nfn main() -> @location(0) vec4f {\n  return vec4f(1.0, 0.0, 0.0, 1.0);\n}"
      }
    ]
  },
  {
    id: "webgpu-api",
    title: "WebGPU API",
    icon: Terminal,
    desc: "Device, queue, command encoders, and render passes.",
    content: [
      {
        heading: "Request adapter and device",
        body: "Start by requesting a GPU adapter, then a device and preferred canvas format.",
        code: "const adapter = await navigator.gpu.requestAdapter();\nconst device = await adapter.requestDevice();\nconst format = navigator.gpu.getPreferredCanvasFormat();"
      },
      {
        heading: "Command encoder",
        body: "Record all GPU work into a command encoder and submit the finished buffer.",
        code: "const encoder = device.createCommandEncoder();\nconst pass = encoder.beginRenderPass(descriptor);\npass.end();\ndevice.queue.submit([encoder.finish()]);"
      }
    ]
  },
  {
    id: "examples",
    title: "Examples",
    icon: FileText,
    desc: "Minimal, runnable snippets covering common techniques.",
    content: [
      {
        heading: "Clear screen",
        body: "The smallest render pass clears the canvas to a solid color.",
        code: "const pass = encoder.beginRenderPass({\n  colorAttachments: [{\n    view,\n    clearValue: { r: 0, g: 0, b: 0, a: 1 },\n    loadOp: 'clear',\n    storeOp: 'store'\n  }]\n});\npass.end();"
      },
      {
        heading: "Set pipeline",
        body: "Use setPipeline and draw to execute a render pipeline.",
        code: "pass.setPipeline(pipeline);\npass.setVertexBuffer(0, vertexBuffer);\npass.draw(3, 1, 0, 0);"
      }
    ]
  },
  {
    id: "best-practices",
    title: "Best Practices",
    icon: Lightbulb,
    desc: "Memory barriers, buffer uploads, and pipeline layouts.",
    content: [
      {
        heading: "Batch uploads",
        body: "Upload all uniform data for a frame in one buffer write when possible."
      },
      {
        heading: "Reuse pipelines",
        body: "Creating and switching pipelines is expensive. Group draws by pipeline and bind group."
      }
    ]
  },
  {
    id: "performance",
    title: "Performance Tips",
    icon: BookOpen,
    desc: "Minimize CPU/GPU overhead and reduce descriptor churn.",
    content: [
      {
        heading: "Reduce draw calls",
        body: "Use instancing or geometry merging to reduce the number of draw calls per frame."
      },
      {
        heading: "Avoid CPU/GPU sync",
        body: "Reading back data from the GPU causes stalls. Use async readback when necessary."
      }
    ]
  },
  {
    id: "errors",
    title: "Common Errors",
    icon: ScrollText,
    desc: "Compilation messages and runtime validation failures.",
    content: [
      {
        heading: "Bind group mismatch",
        body: "Shader bindings must match the bind group layout exactly."
      },
      {
        heading: "Pipeline layout mismatch",
        body: "If you provide a pipeline layout, it must be compatible with the shader."
      },
      {
        heading: "Invalid color attachment",
        body: "Color attachment formats must match the render pass descriptor."
      }
    ]
  }
];

export function DocumentationPanel() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeDoc = docs.find((d) => d.id === activeId);

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B0C15]/80 p-5 shadow-card">
      <div className="mb-4">
        <span className="text-[10px] uppercase tracking-[0.3em] text-brand-subtle">Documentation</span>
        <h2 className="mt-1 font-display text-lg font-semibold text-white">Integrated Docs</h2>
        <p className="text-xs text-slate-400">Reference materials built into the lab.</p>
      </div>

      <AnimatePresence mode="wait">
        {activeDoc ? (
          <motion.div
            key={activeDoc.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="flex flex-col flex-1 overflow-hidden"
          >
            <button
              onClick={() => setActiveId(null)}
              className="mb-3 flex items-center gap-1 self-start rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] text-slate-300 transition-colors hover:bg-white/10"
              aria-label="Back to docs"
            >
              <ChevronLeft className="size-3.5" />
              Back
            </button>
            <DocDetail doc={activeDoc} />
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid flex-1 grid-cols-1 gap-3 overflow-y-auto sm:grid-cols-2"
          >
            {docs.map((doc) => {
              const Icon = doc.icon;
              return (
                <button
                  key={doc.id}
                  onClick={() => setActiveId(doc.id)}
                  className="flex flex-col items-start gap-2 rounded-xl border border-white/10 bg-white/5 p-4 text-left transition-all hover:border-white/20 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-brand/60"
                  aria-label={`Open ${doc.title}`}
                >
                  <div className="flex items-center gap-2 text-brand-subtle">
                    <Icon className="size-4" />
                    <span className="text-xs font-semibold text-white">{doc.title}</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-slate-400">{doc.desc}</p>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DocDetail({ doc }: { doc: DocSection }) {
  const handleCopy = (text: string) => {
    void navigator.clipboard.writeText(text);
  };

  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(doc, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${doc.id}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <doc.icon className="size-4 text-brand-subtle" />
          <span className="text-sm font-semibold text-white">{doc.title}</span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => handleCopy(JSON.stringify(doc, null, 2))}
            className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-200"
            aria-label="Copy doc JSON"
            title="Copy doc JSON"
          >
            <Copy className="size-3.5" />
          </button>
          <button
            onClick={handleDownload}
            className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-200"
            aria-label="Download doc JSON"
            title="Download doc JSON"
          >
            <Download className="size-3.5" />
          </button>
        </div>
      </div>

      <div className="flex-1 space-y-3 overflow-y-auto pr-1">
        {doc.content.map((section, i) => (
          <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4">
            <h3 className="mb-1 text-xs font-semibold text-white">{section.heading}</h3>
            <p className="mb-3 text-[11px] leading-relaxed text-slate-400">{section.body}</p>
            {section.code ? (
              <div className="relative rounded-lg bg-slate-950/50 p-3">
                <pre className="overflow-auto text-[10px] leading-relaxed text-slate-300">
                  <code>{section.code}</code>
                </pre>
                <button
                  onClick={() => handleCopy(section.code!)}
                  className="absolute right-2 top-2 rounded-md bg-white/10 p-1 text-slate-400 hover:bg-white/15 hover:text-slate-200"
                  aria-label="Copy snippet"
                  title="Copy snippet"
                >
                  <Copy className="size-3" />
                </button>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
