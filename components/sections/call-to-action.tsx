"use client";

import Link from "next/link";
import { Button, Card, CardBody } from "@nextui-org/react";
import { ArrowRightCircle } from "lucide-react";

export function CallToActionSection() {
  return (
    <section id="source" className="mx-auto max-w-4xl px-6 pb-28 md:px-10 lg:px-12">
      <Card className="relative overflow-hidden border border-brand/20 bg-gradient-to-r from-brand/20 via-brand-accent/20 to-cyan-400/20 shadow-glow">
        <div className="glow-ring" />
        <CardBody className="relative z-10 flex flex-col gap-6 p-10 sm:flex-row sm:items-center sm:justify-between sm:gap-9 sm:p-12">
          <div className="space-y-3 text-left">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Study the triangle pipeline
            </h3>
            <p className="max-w-xl text-sm text-slate-600 dark:text-slate-200">
              Start with <code>lib/webgpu/triangle-demo.ts</code> to see device setup
              and frame submission. Jump to{" "}
              <code>samples/hello-triangle/main.ts</code> to inspect the WGSL shaders.
              These two files contain everything the demo needs.
            </p>
          </div>
          <Button
            as={Link}
            href="#pipeline"
            size="lg"
            color="primary"
            radius="full"
            endContent={<ArrowRightCircle className="size-5" />}
            className="bg-slate-900 px-6 py-5 text-base font-semibold text-white shadow-lg shadow-slate-900/50 transition-transform hover:-translate-y-0.5"
          >
            View pipeline notes
          </Button>
        </CardBody>
      </Card>
    </section>
  );
}
