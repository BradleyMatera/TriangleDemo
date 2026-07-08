"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Layers,
  Search,
  Command,
  BookOpen,
  Settings,
  User,
  Keyboard,
  Bookmark,
  Zap,
  GraduationCap,
  Cpu,
  Sparkles,
  Box,
  Sun,
  Image,
  Gauge,
  Gamepad2,
  FileCode,
  Menu
} from "lucide-react";
import { useUiStore, type PanelId } from "@/lib/stores/ui-store";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { MobileSidebarToggle } from "@/components/lab/sidebar/lesson-sidebar";
import { cn } from "@/lib/utils";

const primaryNav: { id: PanelId; label: string; icon: typeof BookOpen }[] = [
  { id: "editor", label: "Editor", icon: FileCode },
  { id: "lessons", label: "Lessons", icon: GraduationCap },
  { id: "pipeline", label: "Pipeline", icon: Cpu },
  { id: "shaders", label: "Shaders", icon: Sparkles },
  { id: "geometry", label: "Geometry", icon: Box },
  { id: "matrices", label: "Matrices", icon: Command },
  { id: "lighting", label: "Lighting", icon: Sun },
  { id: "textures", label: "Textures", icon: Image },
  { id: "performance", label: "Performance", icon: Gauge },
  { id: "playground", label: "Playground", icon: Gamepad2 },
  { id: "examples", label: "Examples", icon: BookOpen },
  { id: "documentation", label: "Docs", icon: BookOpen }
];

export function LabTopNav() {
  const pathname = usePathname();
  const {
    activePanel,
    setActivePanel,
    openCommandPalette,
    sidebarOpen,
    toggleSidebar,
    setSidebarMode
  } = useUiStore();

  const openSidebarMode = (mode: "lessons" | "bookmarks" | "shortcuts" | "profile" | "settings") => {
    setSidebarMode(mode);
    if (!sidebarOpen) toggleSidebar();
  };

  return (
    <header className="h-14 border-b border-white/10 bg-[#0B0C15]/80 px-4 backdrop-blur-xl">
      <div className="flex h-full items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="hidden items-center gap-2 rounded-lg px-2 py-1.5 text-white transition-colors hover:bg-white/5 sm:flex"
          >
            <span className="rounded-lg bg-gradient-to-br from-brand to-brand-accent p-1.5 text-white shadow-lg shadow-brand/25">
              <Layers className="size-4" />
            </span>
            <span className="font-display text-sm font-semibold tracking-tight text-white">
              WebGPU Lab
            </span>
          </Link>

          <MobileSidebarToggle />

          <nav className="flex items-center gap-1 overflow-x-auto">
            {primaryNav.map((item) => {
              const Icon = item.icon;
              const isActive = activePanel === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActivePanel(item.id)}
                  title={`Open ${item.label}`}
                  className={cn(
                    "relative flex shrink-0 items-center gap-2 rounded-lg px-2 py-1.5 text-xs font-medium transition-colors md:px-3",
                    isActive
                      ? "text-white"
                      : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                  )}
                >
                  {isActive ? (
                    <motion.div
                      layoutId="top-nav-pill"
                      className="absolute inset-0 rounded-lg bg-white/10"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                    />
                  ) : null}
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon className="size-3.5" />
                    <span className="hidden md:inline">{item.label}</span>
                  </span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="flex shrink-0 items-center gap-1.5">
          <button
            onClick={openCommandPalette}
            title="Open command palette"
            className="hidden items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-slate-400 transition-colors hover:border-white/20 hover:text-slate-200 sm:flex"
          >
            <Search className="size-3.5" />
            <span className="hidden lg:inline">Command Palette</span>
            <kbd className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px]">
              ⌘K
            </kbd>
          </button>

          <button
            onClick={openCommandPalette}
            className="flex rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-200 sm:hidden"
            aria-label="Open command palette"
          >
            <Search className="size-4" />
          </button>

          <button
            onClick={() => openSidebarMode("shortcuts")}
            className="hidden rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-200 sm:flex"
            aria-label="Keyboard shortcuts"
            title="Keyboard shortcuts"
          >
            <Keyboard className="size-4" />
          </button>

          <button
            onClick={() => openSidebarMode("bookmarks")}
            className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-200"
            aria-label="Bookmarks"
            title="Bookmarks"
          >
            <Bookmark className="size-4" />
          </button>

          <button
            onClick={() => openSidebarMode("settings")}
            className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-200"
            aria-label="Settings"
            title="Settings"
          >
            <Settings className="size-4" />
          </button>

          <button
            onClick={() => openSidebarMode("profile")}
            className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-200"
            aria-label="Profile and progress"
            title="Profile and progress"
          >
            <User className="size-4" />
          </button>

          <div className="ml-1 h-4 w-px bg-white/10" />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
