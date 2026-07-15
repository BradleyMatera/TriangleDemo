"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Box,
  Code2,
  Cpu,
  Layers,
  Play,
  Sparkles,
  Zap
} from "lucide-react";
const features = [
  {
    icon: Code2,
    title: "WGSL Editor",
    description:
      "A Monaco-powered editor with syntax highlighting, minimap, and diagnostics built for shader development."
  },
  {
    icon: Play,
    title: "Live Preview",
    description:
      "See your WebGPU render update instantly with a professional viewport, metrics overlay, and debug toggles."
  },
  {
    icon: Layers,
    title: "Pipeline Visualizer",
    description:
      "Follow data from JavaScript through command encoders, shaders, rasterizer, and the framebuffer."
  },
  {
    icon: Cpu,
    title: "GPU Inspector",
    description:
      "Real-time diagnostics for draw calls, buffers, textures, uniforms, memory, and device capabilities."
  },
  {
    icon: Box,
    title: "Geometry Lab",
    description:
      "Explore primitives, transformations, normals, and wireframes with interactive controls."
  },
  {
    icon: Sparkles,
    title: "Shader Playground",
    description:
      "A gallery of production-grade shaders to preview, modify, download, and learn from."
  }
];

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05070f] text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh-gradient opacity-80 blur-3xl" />
      <div className="floating-orb -left-32 top-0 opacity-60" />
      <div className="floating-orb floating-orb--secondary -right-10 top-32 opacity-50" />

      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <span className="rounded-lg bg-gradient-to-br from-brand to-brand-accent p-2 text-white shadow-lg shadow-brand/25">
            <Layers className="size-5" />
          </span>
          <span className="font-display text-lg font-semibold">WebGPU Lab</span>
        </div>
      </header>

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-20 px-6 py-12 md:py-20">
        <section className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand"
            >
              <Sparkles className="size-3.5" />
              Version 2.0
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-balance font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
            >
              Learn modern graphics programming in a{" "}
              <span className="text-transparent bg-gradient-to-r from-brand via-brand-accent to-cyan-400 bg-clip-text">
                real developer environment.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="max-w-xl text-lg text-slate-400"
            >
              The landing page keeps the canonical WebGPU demos front and
              center — hello triangle, two cubes, and textured cube. Open the
              Lab for the full platform: 16 interactive lessons, a WGSL editor,
              live pipeline visualization, geometry and lighting labs, and GPU
              diagnostics.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Link
                href="/lab"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition-transform hover:-translate-y-0.5"
              >
                <Play className="size-4" />
                Open the Lab
              </Link>
              <a
                href="https://github.com/bradleymatera/TriangleDemo"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-white/30 hover:bg-white/10"
              >
                <BookOpen className="size-4" />
                Source on GitHub
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="hero-bg grid-overlay relative flex flex-col justify-between rounded-3xl p-8"
          >
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.28em] text-white/60">
                Live Workspace
              </p>
              <h2 className="text-2xl font-semibold text-white">
                Everything you need to understand WebGPU in one place.
              </h2>
            </div>
            <div className="grid gap-3">
              {[
                { value: "16", label: "Interactive lessons" },
                { value: "60 FPS", label: "Live WebGPU preview" },
                { value: "∞", label: "Shader experiments" }
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white/80"
                >
                  <span>{stat.label}</span>
                  <strong className="font-display text-xl text-white">
                    {stat.value}
                  </strong>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="space-y-8">
          <div className="text-center">
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-subtle">
              Platform
            </span>
            <h2 className="mt-2 font-display text-3xl font-semibold text-white">
              Built like commercial developer software
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="glass-card group h-full border-none bg-transparent"
                >
                  <div className="flex h-full flex-col gap-3 p-6">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-brand/15 text-brand">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-400">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="flex flex-col items-center gap-6 rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
            Ready to dive into the graphics pipeline?
          </h2>
          <p className="max-w-xl text-slate-400">
            Start with the classic hello triangle and progress through vertex
            buffers, matrices, lighting, compute shaders, and optimization.
          </p>
          <Link
            href="/lab"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition-transform hover:-translate-y-0.5"
          >
            Launch WebGPU Lab
            <ArrowRight className="size-4" />
          </Link>
        </section>
      </main>
    </div>
  );
}
