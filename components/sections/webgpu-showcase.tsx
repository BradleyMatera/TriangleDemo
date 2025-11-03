"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardBody, Chip, Spinner } from "@nextui-org/react";
import {
  initTriangleDemo,
  availableShapes,
  type ShapeId
} from "@/lib/webgpu/triangle-demo";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";
import { Tabs, Tab } from "@nextui-org/react";

type DemoState =
  | { status: "initial" }
  | { status: "loading" }
  | { status: "ready" }
  | { status: "error"; message: string };

export function WebGpuShowcase() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const [state, setState] = useState<DemoState>({ status: "initial" });
  const [shape, setShape] = useState<ShapeId>(availableShapes[0]!.id);
  const setShapeRef = useRef<((shapeId: ShapeId) => Promise<void>) | null>(null);
  const shapeRef = useRef<ShapeId>(availableShapes[0]!.id);
  const activeShape = availableShapes.find((item) => item.id === shape);

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    const run = async () => {
      if (!canvasRef.current) return;
      setState({ status: "loading" });

      const result = await initTriangleDemo(
        canvasRef.current,
        titleRef.current
      );

      if (result.status === "ready") {
        cleanup = result.cleanup;
        setShapeRef.current = result.setShape;
        void result.setShape(shapeRef.current);
        setState({ status: "ready" });
      } else {
        setState({
          status: "error",
          message: result.message
        });
      }
    };

    void run();

    return () => {
      cleanup?.();
      setShapeRef.current = null;
    };
  }, []);

  useEffect(() => {
    shapeRef.current = shape;
    void setShapeRef.current?.(shape);
  }, [shape]);

  return (
    <section
      id="demo"
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/80 px-8 py-16 shadow-card backdrop-blur-xl dark:bg-white/5 md:px-12"
    >
      <div className="floating-orb -top-40 left-1/4 opacity-60" />
      <div className="floating-orb floating-orb--secondary -bottom-36 right-12 opacity-50" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[3fr_2fr]">
          <div className="space-y-10 min-w-0">
            <SectionHeading
              eyebrow="Live Demo"
              title="Experience WebGPU rendering in real time"
              description={
                <>
                  leaf-js illustrates what modern WebGPU pipelines are capable
                  of—low-level control, predictable performance, and expressive
                  graphics output. Choose a shape to see the renderer update in
                  place while the GPU pipelines stay active.
                </>
              }
            />
            <div className="rounded-3xl border border-white/40 bg-white/70 p-3 shadow-card backdrop-blur-xl dark:border-white/10 dark:bg-white/5 sm:p-4">
              <div className="-mx-2 overflow-x-auto px-2">
                <Tabs
                  selectedKey={shape}
                  onSelectionChange={(key) => setShape(key as ShapeId)}
                  aria-label="Select a WebGPU shape"
                  color="primary"
                  variant="bordered"
                  radius="full"
                  className="w-full"
                >
                  {availableShapes.map((item) => (
                    <Tab key={item.id} title={item.label}>
                      <div className="mt-3 space-y-1 rounded-2xl border border-white/60 bg-white/70 p-4 text-left dark:border-white/10 dark:bg-white/10">
                        <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                          {item.label}
                        </p>
                        <p className="text-xs text-slate-600 dark:text-slate-300">
                          {item.description}
                        </p>
                        <a
                          href={item.source.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-medium text-brand hover:underline"
                        >
                          View reference
                        </a>
                      </div>
                    </Tab>
                  ))}
                </Tabs>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {demoHighlights.map((item) => (
                <Card
                  key={item.title}
                  className="glass-card h-full min-w-0 border-none bg-transparent shadow-none"
                >
                  <CardBody className="flex h-full min-w-0 flex-col gap-3">
                    <Chip
                      variant="flat"
                      color="primary"
                      className="w-fit bg-brand/15 text-brand"
                    >
                      {item.label}
                    </Chip>
                    <p className="text-lg font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {item.description}
                    </p>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
          <Card className="relative overflow-hidden border border-white/10 bg-slate-950/60 shadow-card dark:border-white/5">
            <div className="glow-ring" />
            <CardBody className="relative flex flex-col gap-6 p-6">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-[0.3em] text-brand-subtle">
                    WebGPU Surface
                  </span>
                  <h3
                    ref={titleRef}
                    className="font-display text-xl font-semibold text-white"
                  >
                    Initializing…
                  </h3>
                </div>
                <StatusBadge state={state} />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
                <canvas
                  ref={canvasRef}
                  className="h-full w-full rounded-2xl bg-slate-950"
                />
              </div>
              <p className="text-xs text-slate-400">
                Tip: Use the latest Chromium-based browser with WebGPU support
                to see the hardware-accelerated render. Switch shapes to observe
                how the GPU buffers update without resetting the pipeline.
              </p>
              {activeShape ? (
                <p className="text-[11px] text-slate-400">
                  Reference:{" "}
                  <a
                    href={activeShape.source.url}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-dotted underline-offset-4 hover:text-brand"
                  >
                    {activeShape.source.title}
                  </a>
                </p>
              ) : null}
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}

const demoHighlights = [
  {
    label: "Performance",
    title: "Zero-copy commands",
    description:
      "The render loop submits GPU commands every frame, demonstrating predictable performance with minimal CPU overhead."
  },
  {
    label: "Modern APIs",
    title: "Future-proof architecture",
    description:
      "WebGPU unlocks compute shaders, advanced primitives, and cross-platform deployments for next-generation experiences."
  }
];

type StatusBadgeProps = {
  state: DemoState;
};

function StatusBadge({ state }: StatusBadgeProps) {
  if (state.status === "loading" || state.status === "initial") {
    return (
      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white">
        <Spinner className="h-3 w-3" color="primary" size="sm" />
        Setting up
      </span>
    );
  }

  if (state.status === "ready") {
    return (
      <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-200">
        <span className="size-2 rounded-full bg-emerald-300" />
        Running
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-rose-500/40 bg-rose-500/20 px-3 py-1 text-xs font-semibold text-rose-100"
      )}
    >
      <span className="size-2 rounded-full bg-rose-300" />
      {state.message}
    </span>
  );
}
