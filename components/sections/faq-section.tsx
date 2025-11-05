"use client";

import { Accordion, AccordionItem, Card } from "@nextui-org/react";
import { SectionHeading } from "@/components/ui/section-heading";

const faqs = [
  {
    question: "What is Triangle Shader Lab?",
    answer:
      "A focused learning tool that wraps the hello triangle and textured cube WebGPU samples in a presentational shell. It exists so you can see the code and the canvas at the same time."
  },
  {
    question: "Is this a general-purpose rendering engine?",
    answer:
      "No. The goal is clarity, not breadth. Use it as a reference or a sandbox while studying WebGPU basics, then branch into your own experiments."
  },
  {
    question: "How do I tweak each demo?",
    answer:
      "Edit the code in `lib/webgpu/triangle-demo.ts`, `samples/textured-cube/main.ts`, or `samples/hello-triangle/main.ts`, then run `bun run dev` or `bun run build:pages` to see the outcome."
  },
  {
    question: "How should I share the result?",
    answer:
      "Run `bun run build:pages`. The script exports static assets into `docs/` and copies `.nojekyll` so any static host (including GitHub Pages) can serve the build."
  }
];

export function FAQSection() {
  return (
    <section
      id="faq"
      className="mx-auto max-w-5xl px-6 pb-20 md:px-10 lg:px-12"
    >
      <Card className="glass-card border border-white/40 bg-white/80 p-10 shadow-card backdrop-blur-xl dark:border-white/10 dark:bg-white/5 sm:p-14">
        <div className="space-y-10">
          <SectionHeading
            eyebrow="FAQs"
            title="Quick answers before you explore"
            description="Clarity first: here are the questions that usually come up when developers crack open the hello triangle or textured cube samples for the first time."
            align="center"
          />
          <Accordion
            selectionMode="multiple"
            defaultExpandedKeys={["0"]}
            className="mt-6"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index.toString()}
                aria-label={faq.question}
                title={faq.question}
                classNames={{
                  base: "border border-white/40 bg-white/90 px-6 shadow-sm dark:border-white/10 dark:bg-white/10",
                  title: "text-base font-semibold text-slate-800 dark:text-white",
                  content: "text-sm text-slate-600 dark:text-slate-400"
                }}
              >
                {faq.answer}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Card>
    </section>
  );
}
