"use client";

import { Tabs, Tab, Card, CardBody, Chip } from "@nextui-org/react";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Blocks,
  Box,
  Palette,
  Server
} from "lucide-react";

const architectureTabs = [
  {
    key: "stack",
    title: "Tech Stack",
    icon: <Blocks className="size-4" />,
    highlights: [
      {
        title: "Next.js 16 App Router",
        description:
          "Leverages server components for content sections while interactive demos run as client components."
      },
      {
        title: "Bun tooling",
        description:
          "Package manager and runtime unify dependency management with fast install and script execution."
      }
    ],
    bottomNote:
      "Static export configured with docs/ output for seamless GitHub Pages deployments."
  },
  {
    key: "components",
    title: "Component System",
    icon: <Palette className="size-4" />,
    highlights: [
      {
        title: "NextUI + Tailwind",
        description:
          "Reusable cards, sections, and typography primitives provide consistency and theme awareness."
      },
      {
        title: "Interactive patterns",
        description:
          "Tabs, accordions, and animated badges elevate the original content without sacrificing clarity."
      }
    ],
    bottomNote:
      "Design tokens centralize spacing, color, and depth, making future enhancements predictable."
  },
  {
    key: "content",
    title: "Content Flow",
    icon: <Server className="size-4" />,
    highlights: [
      {
        title: "Structured sections",
        description:
          "From hero to FAQs, each section maps to original copy while improving readability and hierarchy."
      },
      {
        title: "Call-to-action emphasis",
        description:
          "Clear entry points encourage users to try the demo or dive into architecture details."
      }
    ],
    bottomNote:
      "Accessibility-first semantics ensure headings, landmarks, and interactive regions work for assistive tech."
  },
  {
    key: "deployment",
    title: "Deployment",
    icon: <Box className="size-4" />,
    highlights: [
      {
        title: "docs/ static export",
        description:
          "A dedicated script builds and exports the app, copying .nojekyll for GitHub Pages compatibility."
      },
      {
        title: "Production-ready configs",
        description:
          "Tailwind, NextUI, and ESLint integrate with type-safe paths and environment-aware base paths."
      }
    ],
    bottomNote:
      "Future enhancements can plug into the TODO roadmap without rethinking the deployment lane."
  }
];

export function ArchitectureSection() {
  return (
    <section
      id="architecture"
      className="mx-auto max-w-6xl px-6 py-20 md:px-10 lg:px-12"
    >
      <div className="rounded-3xl border border-white/40 bg-white/80 p-10 shadow-card backdrop-blur-xl dark:border-white/10 dark:bg-white/5 sm:p-14">
        <SectionHeading
          eyebrow="System Design"
          title="Bespoke architecture tuned for static export"
          description="Explore how Bun-powered scripts, Next.js 16 App Router, and NextUI components work together to deliver a premium, theme-aware experience."
          align="center"
        />
        <div className="mt-12">
          <Tabs
            aria-label="Architecture breakdown"
            color="primary"
            radius="full"
            classNames={{
              tabList:
                "bg-slate-100/60 dark:bg-white/10 rounded-full border border-white/40 p-1",
              tab: "px-3 py-1 text-xs sm:text-sm font-medium data-[selected=true]:text-white"
            }}
          >
            {architectureTabs.map((tab) => (
            <Tab
              key={tab.key}
              title={
                <div className="flex items-center gap-2">
                  {tab.icon}
                  <span>{tab.title}</span>
                </div>
              }
            >
              <Card className="mt-8 border border-white/40 bg-white/80 shadow-card dark:border-white/10 dark:bg-white/10">
                <CardBody className="gap-6 md:grid md:grid-cols-2">
                  {tab.highlights.map((highlight) => (
                    <div key={highlight.title} className="space-y-3">
                      <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                        {highlight.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {highlight.description}
                      </p>
                    </div>
                  ))}
                  <div className="md:col-span-2">
                    <Chip
                      variant="flat"
                      className="bg-brand/10 text-brand"
                    >
                      {tab.bottomNote}
                    </Chip>
                  </div>
                </CardBody>
              </Card>
            </Tab>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
