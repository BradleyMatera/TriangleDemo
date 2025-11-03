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
  { value: "16 ms", label: "Frame budget optimized" },
  { value: "60 fps", label: "Target refresh rate" },
  { value: "3×", label: "Faster than WebGL baselines" }
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
            Next-gen WebGPU toolkit
          </div>
          <h1 className="text-balance font-display text-4xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            leaf-js
            <span className="text-transparent bg-gradient-to-r from-brand via-brand-accent to-cyan-400 bg-clip-text">
              {" "}
              reimagined
            </span>
            : a polished WebGPU experience.
          </h1>
          <p className="max-w-xl text-lg text-slate-600 dark:text-slate-300">
            A premium reboot of the original leaf-js static site now powered by
            Next.js + NextUI. Explore performant 3D rendering concepts, cohesive
            theming, and responsive layouts tuned for clarity and delight.
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
              Launch WebGPU demo
            </Button>
            <Button
              as={Link}
              href="#architecture"
              size="lg"
              radius="full"
              className="border border-slate-200/70 bg-white px-6 py-5 text-base font-semibold text-slate-800 shadow-sm transition-colors hover:border-brand hover:text-brand dark:border-white/20 dark:bg-white/10 dark:text-slate-50"
              variant="bordered"
            >
              Explore the architecture
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
            <Chip
              variant="flat"
              startContent={<Zap className="size-4 text-brand" />}
              className="bg-brand/10 text-brand"
            >
              Powered by Bun + Next.js 16
            </Chip>
            <Divider orientation="vertical" className="hidden h-6 sm:block" />
            <span className="inline-flex items-center gap-2">
              <Cpu className="size-4 text-brand-subtle" />
              WebGPU-ready browsers only
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
                Purposeful motion across GPU-powered experiences.
              </h2>
              <p className="text-sm text-white/70">
                The triangle render remains as a nod to the original demo while
                the interface introduces layered gradients, glassmorphism, and
                elevated typography.
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
