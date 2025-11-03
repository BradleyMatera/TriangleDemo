"use client";

import { Accordion, AccordionItem, Card } from "@nextui-org/react";
import { SectionHeading } from "@/components/ui/section-heading";

const faqs = [
  {
    question: "Is this the official leaf-js library?",
    answer:
      "No. This site is a demo experience designed to showcase what the upstream library enables. For official releases or support, refer to the original maintainers."
  },
  {
    question: "Why rewrite the static site with Next.js?",
    answer:
      "The refactor introduces component reuse, accessible semantics, responsive layouts, and dark/light theming while retaining original content."
  },
  {
    question: "Does the WebGPU demo require configuration?",
    answer:
      "Use a WebGPU-enabled browser (Chrome 113+, Edge 113+, Safari TP). If unsupported, the demo gracefully communicates the requirement."
  },
  {
    question: "How do I deploy this to GitHub Pages?",
    answer:
      "Run `bun run build:pages`. The script builds the site, exports static assets into `docs/`, and copies `.nojekyll` so GitHub Pages serves the content correctly."
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
            description="Transparency is core to this demo. These clarifications migrate the intent behind the original site while enhancing usability."
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
