"use client";

import Link from "next/link";
import { Navbar, NavbarBrand, NavbarContent, Button } from "@nextui-org/react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Layers } from "lucide-react";

export function TopNav() {
  return (
    <Navbar
      maxWidth="lg"
      position="sticky"
      className="top-4 z-50 mx-auto mt-6 w-[calc(100%-1.5rem)] rounded-full border border-white/50 bg-white/80 px-6 shadow-card backdrop-blur-2xl dark:border-white/10 dark:bg-white/10 sm:w-[calc(100%-4rem)]"
    >
      <NavbarBrand className="gap-2">
        <span className="rounded-full bg-brand/15 p-2 text-brand">
          <Layers className="size-4" />
        </span>
        <p className="font-display text-base font-semibold text-slate-900 dark:text-white">
          Triangle Shader Lab
        </p>
      </NavbarBrand>

      <NavbarContent className="hidden items-center gap-6 text-sm text-slate-600 dark:text-slate-300 sm:flex" justify="center">
        <Link href="#about" className="hover:text-brand">
          About
        </Link>
        <Link href="#demo" className="hover:text-brand">
          Demo
        </Link>
        <Link href="#pipeline" className="hover:text-brand">
          Pipeline
        </Link>
        <Link href="#faq" className="hover:text-brand">
          FAQs
        </Link>
      </NavbarContent>

      <NavbarContent justify="end" className="items-center gap-3">
        <ThemeToggle />
        <Button
          as={Link}
          href="#source"
          variant="flat"
          radius="full"
          className="bg-brand/15 text-sm font-semibold text-brand hover:bg-brand/25"
        >
          Source notes
        </Button>
      </NavbarContent>
    </Navbar>
  );
}
