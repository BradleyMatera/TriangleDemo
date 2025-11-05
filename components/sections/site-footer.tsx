"use client";

import Link from "next/link";
import { Divider } from "@nextui-org/react";

export function SiteFooter() {
  return (
    <footer className="bg-white/80 shadow-inner dark:bg-[#05070f]/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 md:px-10 lg:px-12">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-lg font-semibold text-slate-900 dark:text-white">
            Triangle Shader Lab
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
            <Link href="#demo" className="hover:text-brand">
              WebGPU demo
            </Link>
            <Link href="#pipeline" className="hover:text-brand">
              Pipeline notes
            </Link>
            <Link href="#faq" className="hover:text-brand">
              FAQs
            </Link>
          </div>
        </div>
        <Divider />
        <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          Triangle Shader Lab keeps the original hello triangle demo intact while
          presenting it in a polished shell. Use it as a guide when learning the
          fundamentals of WebGPU device setup, buffers, and shader execution.
        </p>
      </div>
    </footer>
  );
}
