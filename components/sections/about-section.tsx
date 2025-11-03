"use client";

import { Card, CardBody, Chip } from "@nextui-org/react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ShieldAlert, ScrollText } from "lucide-react";

const principles = [
  {
    title: "Educational focus",
    description:
      "This rebuild mirrors the original repository content for illustrative purposes. It is not an official leaf-js product."
  },
  {
    title: "Powered by WebGPU",
    description:
      "Demonstrates how modern GPU pipelines fit into a React-based architecture with reusable components."
  },
  {
    title: "Static export ready",
    description:
      "Configured for GitHub Pages with docs/ output, .nojekyll, and Bun-powered scripts."
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
            eyebrow="Project Purpose"
            title="A faithful content migration with a modern presentation"
            description={
              <>
                The previous static HTML site has been reinterpreted as a
                component-first React experience. All original messaging—
                disclaimers, technology references, and contributor notes—are
                preserved and elevated through progressive disclosure patterns.
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
              Disclaimer
            </div>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              This repository continues to be strictly a demo implementation. No
              claim of authorship over the original leaf-js library or
              underlying codebase is made. For support, bug reports, or
              production-grade needs, consult the upstream maintainers and
              official documentation.
            </p>
            <Chip
              variant="flat"
              startContent={<ScrollText className="size-4 text-brand" />}
              className="w-fit bg-brand/10 text-brand"
            >
              Attribution preserved from original site
            </Chip>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
