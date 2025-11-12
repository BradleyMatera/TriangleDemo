"use client";

import { Card, CardBody, Chip } from "@nextui-org/react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ShieldAlert, ScrollText } from "lucide-react";

const principles = [
  {
    title: "Independent lineage",
    description:
      "Originally forked years ago, this branch no longer shares code, intent, or affiliation with the upstream leaf-js project. Treat it as a standalone WebGPU study."
  },
  {
    title: "Code-first orientation",
    description:
      "Every section points back to the compact WebGPU implementations in lib/webgpu/triangle-demo.ts, samples/textured-cube/main.ts, and samples/hello-triangle/main.ts."
  },
  {
    title: "Focused demos",
    description:
      "We keep both the textured cube and hello triangle on tap so it is easy to trace how buffers, shaders, and command submission interact."
  },
  {
    title: "Reproducible setup",
    description:
      "Bun scripts and static export targets make it simple to run locally, rebuild, and share experiments on WebGPU-capable browsers."
  }
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl rounded-3xl border border-white/40 bg-white/70 px-6 py-20 shadow-card backdrop-blur-xl dark:border-white/10 dark:bg-white/5 md:px-10 lg:px-12"
    >
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-10">
          <SectionHeading
            eyebrow="What It Is"
            title="A simple WebGPU study"
            description={
              <>
                Triangle Shader Lab is a small project built to help understand 
                WebGPU basics. It shows the canonical hello triangle and textured 
                cube demos with a clean UI so you can see the code and render together.
              </>
            }
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((principle) => (
              <Card
                key={principle.title}
                radius="lg"
                className="glass-card bg-white/50 dark:bg-white/5"
              >
                <CardBody className="gap-2">
                  <p className="text-base font-semibold text-slate-800 dark:text-slate-100">
                    {principle.title}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {principle.description}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
        <Card className="glass-card relative h-full border-brand/20 bg-gradient-to-br from-brand/15 via-white/40 to-white/70 dark:from-brand/10 dark:via-white/10 dark:to-white/5">
          <CardBody className="gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-amber-500 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300">
              <ShieldAlert className="size-4" />
              Scope
            </div>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              Expect a clear starting point rather than a broad engine. The UI helps
              you map WebGPU setup calls, but the work happens in the source. This
              branch is independent from the original leaf-js lineage—use it freely
              as a sandbox to tinker with buffers, color outputs, or shader code and
              watch each demo respond.
            </p>
            <Chip
              variant="flat"
              startContent={<ScrollText className="size-4 text-brand" />}
              className="w-fit bg-brand/10 text-brand"
            >
              Code-oriented walkthrough
            </Chip>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
