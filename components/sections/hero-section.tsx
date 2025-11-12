"use client";

import Link from "next/link";
import {
  Button,
  Card,
  CardBody,
  Chip,
  Divider
} from "@nextui-org/react";
import { ArrowUpRight, Cpu, Sparkles, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  { value: "319 lines", label: "WebGPU pipeline explored" },
  { value: "1 primitive", label: "Hello Triangle spotlight" },
  { value: "60 fps", label: "Real-time render target" }
];

export function HeroSection() {
  return (
    <section className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 md:px-10 lg:px-12">
      <div className="floating-orb -left-32 top-0" />
      <div className="floating-orb floating-orb--secondary -right-10 top-32" />

      <div className="relative z-10 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-10">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/60 bg-white/80 px-4 py-1 text-[13px] font-medium uppercase tracking-[0.28em] text-slate-700 shadow-card backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-slate-300">
            <Sparkles className="size-4 text-brand" />
            WebGPU study
          </div>
          <h1 className="text-balance font-display text-4xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            Triangle Shader Lab
            <span className="text-transparent bg-gradient-to-r from-brand via-brand-accent to-cyan-400 bg-clip-text">
              {" "}
              learning WebGPU
            </span>
            : seeing the code and render together.
          </h1>
          <p className="max-w-xl text-lg text-slate-600 dark:text-slate-300">
            This site shows the WebGPU hello triangle and textured cube examples in a 
            clean web layout. You can see the live render and the code that makes it work 
            at the same time.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button
              as={Link}
              href="#demo"
              color="primary"
              size="lg"
              radius="full"
              className="bg-brand px-6 py-5 text-base font-semibold text-white shadow-lg shadow-brand/40 transition-transform duration-300 hover:-translate-y-0.5"
              endContent={<ArrowUpRight className="size-5" />}
            >
              Open the demo
            </Button>
            <Button
              as={Link}
              href="#pipeline"
              size="lg"
              radius="full"
              className="border border-slate-200/70 bg-white px-6 py-5 text-base font-semibold text-slate-800 shadow-sm transition-colors hover:border-brand hover:text-brand dark:border-white/20 dark:bg-white/10 dark:text-slate-50"
              variant="bordered"
            >
              Inspect the pipeline
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
            <Chip
              variant="flat"
              startContent={<Zap className="size-4 text-brand" />}
              className="bg-brand/10 text-brand"
            >
              Bun + Next.js 16 shell
            </Chip>
            <Divider orientation="vertical" className="hidden h-6 sm:block" />
            <span className="inline-flex items-center gap-2">
              <Cpu className="size-4 text-brand-subtle" />
              Source: lib/webgpu/triangle-demo.ts
            </span>
          </div>
        </div>

        <Card className="hero-bg grid-overlay relative overflow-hidden border-none">
          <CardBody className="relative flex flex-1 flex-col justify-between gap-10 p-10">
            <div className="max-w-xs space-y-4">
              <p className="text-sm uppercase tracking-[0.28em] text-white/70">
                Demo Highlights
              </p>
              <h2 className="text-2xl font-semibold text-white">
                Trace the render loop from init to draw.
              </h2>
              <p className="text-sm text-white/70">
                Follow the small-but-complete setup that negotiates a device,
                configures the canvas, prepares buffers, and drives the frame
                submission that keeps the triangle alive.
              </p>
            </div>
            <div className="grid gap-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className={cn(
                    "flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white/80"
                  )}
                >
                  <span>{item.label}</span>
                  <strong className="font-display text-xl text-white">
                    {item.value}
                  </strong>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
