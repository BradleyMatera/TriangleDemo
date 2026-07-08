"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Box,
  ChevronLeft,
  Code2,
  Copy,
  Cpu,
  Download,
  ExternalLink,
  Lightbulb,
  Sparkles,
  Sun,
  Triangle
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useUiStore } from "@/lib/stores/ui-store";
import { useLessonStore } from "@/lib/stores/lesson-store";
import { lessonCatalog } from "@/lib/lessons/catalog";
import { shaderExamples } from "@/lib/lab/shader-gallery";

type ExampleCategory = "lessons" | "shaders" | "geometry" | "lighting" | "textures" | "pipeline" | "docs";

interface ExampleItem {
  id: string;
  category: ExampleCategory;
  title: string;
  description: string;
  action: () => void;
  meta?: string;
}

export function ExamplesLabPanel() {
  const [category, setCategory] = useState<ExampleCategory | null>(null);
  const { setActivePanel } = useUiStore();
  const { setActiveLesson } = useLessonStore();

  const items: ExampleItem[] = [
    ...lessonCatalog
      .filter((item) => item.type === "lesson" && item.id)
      .map((item) => ({
        id: `lesson-${item.id}`,
        category: "lessons" as const,
        title: item.title,
        description: item.description ?? "Open this lesson.",
        action: () => {
          setActiveLesson(item.id!);
          setActivePanel("lessons");
        },
        meta: item.demo?.type === "webgpu" ? item.demo.shape : "lesson"
      })),
    ...shaderExamples.map((shader) => ({
      id: `shader-${shader.id}`,
      category: "shaders" as const,
      title: shader.name,
      description: shader.description,
      action: () => setActivePanel("shaders"),
      meta: shader.tags.slice(0, 2).join(", ")
    })),
    {
      id: "geo-triangle",
      category: "geometry",
      title: "Triangle",
      description: "Start with the simplest polygon and inspect its topology.",
      action: () => setActivePanel("geometry"),
      meta: "3 vertices"
    },
    {
      id: "geo-cube",
      category: "geometry",
      title: "Cube",
      description: "A classic six-face mesh for testing transforms and normals.",
      action: () => setActivePanel("geometry"),
      meta: "24 vertices"
    },
    {
      id: "light-directional",
      category: "lighting",
      title: "Directional light",
      description: "Classic sun-like light with direction and intensity controls.",
      action: () => setActivePanel("lighting"),
      meta: "directional"
    },
    {
      id: "tex-repeat",
      category: "textures",
      title: "Repeat sampler",
      description: "See how UV wrapping and sampler address modes interact.",
      action: () => setActivePanel("textures"),
      meta: "addressMode"
    },
    {
      id: "pipe-vertex",
      category: "pipeline",
      title: "Vertex shader stage",
      description: "Open the pipeline visualizer focused on vertex processing.",
      action: () => setActivePanel("pipeline"),
      meta: "stage 6"
    },
    {
      id: "docs-wgsl",
      category: "docs",
      title: "WGSL Reference",
      description: "Built-in reference for WebGPU Shading Language syntax.",
      action: () => setActivePanel("documentation"),
      meta: "reference"
    }
  ];

  const categories: { id: ExampleCategory; label: string; icon: typeof BookOpen }[] = [
    { id: "lessons", label: "Lessons", icon: BookOpen },
    { id: "shaders", label: "Shaders", icon: Sparkles },
    { id: "geometry", label: "Geometry", icon: Box },
    { id: "lighting", label: "Lighting", icon: Sun },
    { id: "textures", label: "Textures", icon: Code2 },
    { id: "pipeline", label: "Pipeline", icon: Cpu },
    { id: "docs", label: "Docs", icon: Lightbulb }
  ];

  const visibleItems = category ? items.filter((i) => i.category === category) : [];

  const handleExport = () => {
    const payload = JSON.stringify(
      items.map((i) => ({ id: i.id, category: i.category, title: i.title })),
      null,
      2
    );
    const blob = new Blob([payload], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `examples-index-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B0C15]/80 p-5 shadow-card">
      <div className="mb-4">
        <span className="text-[10px] uppercase tracking-[0.3em] text-brand-subtle">Examples Lab</span>
        <h2 className="mt-1 font-display text-lg font-semibold text-white">Examples & Quick Links</h2>
        <p className="text-xs text-slate-400">Jump between lessons, shaders, geometry, lighting, textures, and docs.</p>
      </div>

      <AnimatePresence mode="wait">
        {category ? (
          <motion.div
            key={category}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="flex flex-1 flex-col overflow-hidden"
          >
            <div className="mb-3 flex items-center gap-2">
              <button
                onClick={() => setCategory(null)}
                className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] text-slate-300 transition-colors hover:bg-white/10"
                aria-label="Back to categories"
              >
                <ChevronLeft className="size-3.5" />
                Back
              </button>
              <span className="text-xs font-semibold text-white">{category}</span>
              <button
                onClick={handleExport}
                className="ml-auto flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] font-medium text-slate-300 transition-colors hover:bg-white/10"
                aria-label="Export examples index"
              >
                <Download className="size-3.5" />
                Export
              </button>
            </div>

            <div className="grid flex-1 grid-cols-1 gap-3 overflow-y-auto sm:grid-cols-2">
              {visibleItems.map((item) => (
                <button
                  key={item.id}
                  onClick={item.action}
                  className="flex flex-col items-start gap-2 rounded-xl border border-white/10 bg-white/5 p-4 text-left transition-all hover:border-white/20 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-brand/60"
                >
                  <div className="flex w-full items-center justify-between">
                    <span className="text-xs font-semibold text-white">{item.title}</span>
                    <span className="rounded bg-brand/15 px-1.5 py-0.5 text-[9px] text-brand-subtle">{item.meta}</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-slate-400">{item.description}</p>
                  <span className="mt-auto flex items-center gap-1 text-[10px] text-brand-subtle">
                    Open <ExternalLink className="size-3" />
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid flex-1 grid-cols-2 gap-3 overflow-y-auto sm:grid-cols-3 lg:grid-cols-4"
          >
            {categories.map((cat) => {
              const Icon = cat.icon;
              const count = items.filter((i) => i.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className="flex flex-col items-start gap-2 rounded-xl border border-white/10 bg-white/5 p-4 text-left transition-all hover:border-white/20 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-brand/60"
                  aria-label={`Open ${cat.label} examples`}
                >
                  <Icon className="size-5 text-brand-subtle" />
                  <span className="text-sm font-semibold text-white">{cat.label}</span>
                  <span className="text-[10px] text-slate-500">{count} example{count === 1 ? "" : "s"}</span>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
