"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Zap, BookOpen, Layers, Palette, Box, Activity, FileText, Settings, GraduationCap, Sparkles, Sun, Image, Gamepad2, Lightbulb } from "lucide-react";
import { useUiStore, type PanelId } from "@/lib/stores/ui-store";
import { useLessonStore } from "@/lib/stores/lesson-store";
import { cn } from "@/lib/utils";

export function CommandPalette() {
  const {
    commandPaletteOpen,
    closeCommandPalette,
    setActivePanel,
    setSidebarMode,
    sidebarOpen,
    toggleSidebar
  } = useUiStore();
  const { setActiveLesson, getEffectiveCatalog } = useLessonStore();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  const openSidebarMode = useCallback((mode: "bookmarks" | "shortcuts" | "profile" | "settings") => {
    setSidebarMode(mode);
    if (!sidebarOpen) toggleSidebar();
  }, [setSidebarMode, sidebarOpen, toggleSidebar]);

  const items = useMemo(() => {
    const catalog = getEffectiveCatalog();
    const navItems = [
      { id: "open-lessons", label: "Open Lessons", icon: GraduationCap, action: () => setActivePanel("lessons") },
      { id: "open-editor", label: "Open Editor", icon: Zap, action: () => setActivePanel("editor") },
      { id: "open-pipeline", label: "Open Pipeline Visualizer", icon: Layers, action: () => setActivePanel("pipeline") },
      { id: "open-shaders", label: "Open Shader Playground", icon: Sparkles, action: () => setActivePanel("shaders") },
      { id: "open-geometry", label: "Open Geometry Lab", icon: Box, action: () => setActivePanel("geometry") },
      { id: "open-lighting", label: "Open Lighting", icon: Sun, action: () => setActivePanel("lighting") },
      { id: "open-textures", label: "Open Textures", icon: Image, action: () => setActivePanel("textures") },
      { id: "open-performance", label: "Open Performance Panel", icon: Activity, action: () => setActivePanel("performance") },
      { id: "open-playground", label: "Open Shader Playground", icon: Gamepad2, action: () => setActivePanel("playground") },
      { id: "open-examples", label: "Open Examples", icon: Lightbulb, action: () => setActivePanel("examples") },
      { id: "open-docs", label: "Open Documentation", icon: FileText, action: () => setActivePanel("documentation") },
      { id: "open-settings", label: "Open Settings", icon: Settings, action: () => openSidebarMode("settings") },
      { id: "open-shortcuts", label: "Open Keyboard Shortcuts", icon: Zap, action: () => openSidebarMode("shortcuts") },
      { id: "open-profile", label: "Open Profile and Progress", icon: GraduationCap, action: () => openSidebarMode("profile") },
      { id: "go-home", label: "Go to Landing Page", icon: BookOpen, action: () => router.push("/") }
    ];

    const lessonItems = catalog
      .filter((item) => item.type === "lesson" && item.id)
      .map((item) => ({
        id: `lesson-${item.id}`,
        label: `Lesson: ${item.title}`,
        icon: BookOpen,
        action: () => {
          setActiveLesson(item.id!);
          setActivePanel("lessons");
        }
      }));

    return [...navItems, ...lessonItems];
  }, [getEffectiveCatalog, setActiveLesson, setActivePanel, router, openSidebarMode]);

  const filtered = useMemo(
    () =>
      items.filter((item) => item.label.toLowerCase().includes(query.toLowerCase())),
    [items, query]
  );

  const runItem = (index: number) => {
    const safeIndex = Math.min(index, Math.max(filtered.length - 1, 0));
    const item = filtered[safeIndex];
    if (!item) return;
    item.action();
    closeCommandPalette();
  };

  const trapFocus = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab") return;
    const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
      'button:not([disabled]), input:not([disabled]), [href], select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (!focusable || focusable.length === 0) return;
    const first = focusable[0]!;
    const last = focusable[focusable.length - 1]!;

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }, []);

  useEffect(() => {
    if (commandPaletteOpen) {
      previousFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      return;
    }
    previousFocusRef.current?.focus();
    previousFocusRef.current = null;
  }, [commandPaletteOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        commandPaletteOpen ? closeCommandPalette() : useUiStore.getState().openCommandPalette();
      }
      if (e.key === "Escape" && commandPaletteOpen) {
        closeCommandPalette();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [commandPaletteOpen, closeCommandPalette]);

  return (
    <AnimatePresence>
      {commandPaletteOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-start justify-center bg-black/60 p-6 pt-[15vh] backdrop-blur-sm"
          onClick={closeCommandPalette}
        >
          <motion.div
            ref={dialogRef}
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={trapFocus}
            className="w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-[#0B0C15]/95 shadow-2xl backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
              <Search className="size-4 text-slate-400" />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setSelectedIndex((index) => Math.min(index + 1, filtered.length - 1));
                  }
                  if (e.key === "ArrowUp") {
                    e.preventDefault();
                    setSelectedIndex((index) => Math.max(index - 1, 0));
                  }
                  if (e.key === "Enter") {
                    e.preventDefault();
                    runItem(selectedIndex);
                  }
                }}
                placeholder="Search commands, lessons, or panels…"
                className="flex-1 bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
                role="combobox"
                aria-expanded="true"
                aria-controls="command-palette-results"
                aria-activedescendant={filtered[selectedIndex]?.id}
              />
              <button
                onClick={closeCommandPalette}
                className="rounded p-1 text-slate-400 hover:bg-white/5"
                aria-label="Close command palette"
                title="Close command palette"
              >
                <X className="size-4" />
              </button>
            </div>

            <div id="command-palette-results" className="max-h-[50vh] overflow-y-auto p-2" role="listbox">
              {filtered.length === 0 ? (
                <div className="px-4 py-8 text-center text-xs text-slate-500">No commands found.</div>
              ) : (
                filtered.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        item.action();
                        closeCommandPalette();
                      }}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors hover:bg-white/10",
                        index === selectedIndex ? "bg-white/10" : ""
                      )}
                      id={item.id}
                      role="option"
                      aria-selected={index === selectedIndex}
                    >
                      <Icon className="size-4 text-brand-subtle" />
                      <span className="text-slate-200">{item.label}</span>
                    </button>
                  );
                })
              )}
            </div>

            <div className="flex items-center justify-between border-t border-white/10 px-4 py-2 text-[10px] text-slate-500">
              <span>
                <kbd className="rounded border border-white/10 bg-white/5 px-1">↵</kbd> to run
              </span>
              <span>
                <kbd className="rounded border border-white/10 bg-white/5 px-1">Esc</kbd> to close
              </span>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
