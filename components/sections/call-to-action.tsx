"use client";

import Link from "next/link";
import { Button, Card, CardBody } from "@nextui-org/react";
import { ArrowRightCircle } from "lucide-react";

export function CallToActionSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-28 md:px-10 lg:px-12">
      <Card className="relative overflow-hidden border border-brand/20 bg-gradient-to-r from-brand/20 via-brand-accent/20 to-cyan-400/20 shadow-glow">
        <div className="glow-ring" />
        <CardBody className="relative z-10 flex flex-col gap-6 p-10 sm:flex-row sm:items-center sm:justify-between sm:gap-9 sm:p-12">
          <div className="space-y-3 text-left">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Ready to dive deeper into WebGPU?
            </h3>
            <p className="max-w-xl text-sm text-slate-600 dark:text-slate-200">
              Clone the repository, run the Bun-powered dev server, and iterate
              on the component architecture. The TODO roadmap highlights where
              to layer on motion, illustrations, and performance profiling.
            </p>
          </div>
          <Button
            as={Link}
            href="https://github.com/BradleyMatera/leaf-js"
            size="lg"
            color="primary"
            radius="full"
            endContent={<ArrowRightCircle className="size-5" />}
            className="bg-slate-900 px-6 py-5 text-base font-semibold text-white shadow-lg shadow-slate-900/50 transition-transform hover:-translate-y-0.5"
          >
            View repository
          </Button>
        </CardBody>
      </Card>
    </section>
  );
}
