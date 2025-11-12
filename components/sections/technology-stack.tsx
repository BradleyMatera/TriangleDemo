"use client";

import { Card, CardBody, Chip } from "@nextui-org/react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Code2, Globe2, Layers, Rocket } from "lucide-react";

const technologies = [
  {
    icon: <Globe2 className="size-5 text-brand" />,
    name: "WebGPU",
    description:
      "Next-generation graphics API powering consistent, low-latency rendering across modern browsers."
  },
  {
    icon: <Code2 className="size-5 text-brand" />,
    name: "TypeScript",
    description:
      "Type-safe foundation for both client demos and server-rendered components with shared utilities."
  },
  {
    icon: <Layers className="size-5 text-brand" />,
    name: "Next.js 16 + NextUI",
    description:
      "App Router architecture, themable design system, and dark/light modes crafted for polish."
  },
  {
    icon: <Rocket className="size-5 text-brand" />,
    name: "Bun Runtime",
    description:
      "Lightning-fast scripts for development, linting, and GitHub Pages static exports."
  }
];

export function TechnologyStackSection() {
  return (
    <section
      id="tech"
      className="mx-auto max-w-6xl px-6 py-20 md:px-10 lg:px-12"
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
        <SectionHeading
          eyebrow="Tooling"
          title="Standard web stack with WebGPU"
          description={
            <>
              This project uses common web technologies with WebGPU for graphics. 
              The focus is on showing WebGPU demos clearly, with the other tools 
              supporting that goal without getting in the way.
            </>
          }
        />
        <Card className="glass-card border border-white/40 bg-white/80 dark:border-white/10 dark:bg-white/5">
          <CardBody className="gap-4">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex items-start gap-4 rounded-2xl border border-white/40 bg-white/60 p-4 dark:border-white/10 dark:bg-white/10"
              >
                <div className="rounded-2xl bg-brand/10 p-3">{tech.icon}</div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-semibold text-slate-800 dark:text-white">
                      {tech.name}
                    </h3>
                    <Chip size="sm" variant="flat" className="bg-brand/10 text-brand">
                      Core
                    </Chip>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {tech.description}
                  </p>
                </div>
              </div>
            ))}
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
