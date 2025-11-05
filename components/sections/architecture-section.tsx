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
    key: "pipeline",
    title: "Render Pipeline",
    icon: <Blocks className="size-4" />,
    highlights: [
      {
        title: "Adapter and device handshake",
        description:
          "initTriangleDemo negotiates the adapter, requests a device, and configures the canvas format before any drawing occurs."
      },
      {
        title: "Render pass wiring",
        description:
          "Each frame creates a command encoder, sets up color attachments, and executes draw calls sourced from the hello triangle module."
      }
    ],
    bottomNote:
      "Start with initTriangleDemo(...) inside lib/webgpu/triangle-demo.ts."
  },
  {
    key: "buffers",
    title: "Buffers & Shaders",
    icon: <Palette className="size-4" />,
    highlights: [
      {
        title: "Vertex data on the GPU",
        description:
          "createHelloTriangleDemo uploads position data and binds it to the pipeline so the triangle lands exactly once on screen."
      },
      {
        title: "WGSL fragment color",
        description:
          "A single WGSL fragment shader sets the color. Change the literal and rebuild to validate your grasp of GPU data flow."
      }
    ],
    bottomNote:
      "Tweak samples/hello-triangle/main.ts to experiment with geometry or colors."
  },
  {
    key: "canvas",
    title: "Canvas Lifecycle",
    icon: <Server className="size-4" />,
    highlights: [
      {
        title: "Responsive sizing",
        description:
          "A ResizeObserver recalculates device pixel dimensions so the render stays crisp on every refresh rate and DPI."
      },
      {
        title: "Depth resources on demand",
        description:
          "Depth textures are only created when the selected demo needs them, keeping the triangle example lightweight."
      }
    ],
    bottomNote:
      "The canvas configuration tracks window.devicePixelRatio for sharp edges."
  },
  {
    key: "experiments",
    title: "Build & Share",
    icon: <Box className="size-4" />,
    highlights: [
      {
        title: "Local iteration",
        description:
          "bun run dev spins up hot reloading so you can edit WGSL or TypeScript and immediately replay the render."
      },
      {
        title: "Static export",
        description:
          "bun run build:pages outputs a docs/ directory ready for static hosting without extra configuration."
      }
    ],
    bottomNote:
      "Ship your own variant by adjusting the Bun scripts or dropping in additional demos."
  }
];

export function ArchitectureSection() {
  return (
    <section
      id="pipeline"
      className="mx-auto max-w-6xl px-6 py-20 md:px-10 lg:px-12"
    >
      <div className="rounded-3xl border border-white/40 bg-white/80 p-10 shadow-card backdrop-blur-xl dark:border-white/10 dark:bg-white/5 sm:p-14">
        <SectionHeading
          eyebrow="Pipeline"
          title="How the pieces cooperate"
          description="From device negotiation to command submission, the UI exists to expose the WebGPU wiring. Use these notes as a checklist while you read through the source files."
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
