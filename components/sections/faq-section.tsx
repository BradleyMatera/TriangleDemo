"use client";

import { Accordion, AccordionItem, Card } from "@nextui-org/react";
import { SectionHeading } from "@/components/ui/section-heading";

const faqs = [
  {
    question: "What is Triangle Shader Lab?",
    answer:
      "A learning tool that combines WebGPU hello triangle and textured cube samples with a clean UI. It shows the code and rendered output side-by-side to help you understand WebGPU basics."
  },
  {
    question: "Is this a general-purpose rendering engine?",
    answer:
      "No. This is specifically designed to demonstrate WebGPU basics. Use it as a reference for learning, then create your own projects based on these examples."
  },
  {
    question: "How do I modify the demos?",
    answer:
      "Edit the files in `lib/webgpu/triangle-demo.ts`, `samples/textured-cube/main.ts`, or `samples/hello-triangle/main.ts`, then run `bun run dev` to see your changes."
  },
  {
    question: "How do I deploy my version?",
    answer:
      "Run `bun run build:pages` to export static assets to the `docs/` folder. The included `.nojekyll` file makes it GitHub Pages compatible."
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
            title="Straightforward answers"
            description="Here are the questions that usually come up when developers look at WebGPU hello triangle or textured cube samples for the first time."
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
