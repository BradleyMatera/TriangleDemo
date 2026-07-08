"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Bookmark,
  ChevronRight,
  Lock,
  Play,
  Settings,
  CheckCircle2,
  Circle,
  GraduationCap,
  History,
  Trophy,
  X,
  Menu,
  Plus
} from "lucide-react";
import { useLessonStore } from "@/lib/stores/lesson-store";
import { useUiStore, type SidebarMode } from "@/lib/stores/ui-store";
import { cn } from "@/lib/utils";

const modes: { id: SidebarMode; label: string; icon: typeof BookOpen }[] = [
  { id: "lessons", label: "Lessons", icon: GraduationCap },
  { id: "bookmarks", label: "Bookmarks", icon: Bookmark },
  { id: "settings", label: "Settings", icon: Settings }
];

export function LessonSidebar() {
  const { sidebarMode, setSidebarMode, sidebarOpen, toggleSidebar } = useUiStore();
  const getEffectiveCatalog = useLessonStore((s) => s.getEffectiveCatalog);
  const activeLessonId = useLessonStore((s) => s.activeLessonId);
  const progress = useLessonStore((s) => s.progress);
  const setActiveLesson = useLessonStore((s) => s.setActiveLesson);
  const completeLesson = useLessonStore((s) => s.completeLesson);

  const catalog = useMemo(() => getEffectiveCatalog(), [getEffectiveCatalog]);
  const activeLesson = catalog.find((item) => item.id === activeLessonId);
  const isCompleted = activeLesson?.status === "completed";

  return (
    <aside className={cn(
      "fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-white/10 bg-[#0B0C15]/80 backdrop-blur-xl transition-transform duration-300 ease-out lg:static lg:translate-x-0",
      sidebarOpen ? "translate-x-0" : "-translate-x-full"
    )}>
      <div className="flex items-center justify-between border-b border-white/10 p-2 lg:hidden">
        <span className="px-2 text-xs font-semibold text-white">WebGPU Lab</span>
        <button
          onClick={toggleSidebar}
          className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
          aria-label="Close sidebar"
        >
          <X className="size-4" />
        </button>
      </div>

      <div className="flex items-center gap-1 border-b border-white/10 p-2">
        {modes.map((mode) => {
          const Icon = mode.icon;
          const active = sidebarMode === mode.id;
          return (
            <button
              key={mode.id}
              onClick={() => setSidebarMode(mode.id)}
              className={cn(
                "relative flex flex-1 items-center justify-center gap-1.5 rounded-lg py-1.5 text-xs font-medium transition-colors",
                active ? "text-white" : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
              )}
            >
              {active ? (
                <motion.div
                  layoutId="sidebar-mode-pill"
                  className="absolute inset-0 rounded-lg bg-white/10"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                />
              ) : null}
              <span className="relative z-10 flex items-center gap-1.5">
                <Icon className="size-3.5" />
                {mode.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="flex-1 overflow-y-auto p-3">
        {sidebarMode === "lessons" ? (
          <div className="space-y-1">
            {catalog.map((item, index) => {
              if (item.type === "chapter") {
                return (
                  <div
                    key={`chapter-${index}`}
                    className={cn(
                      "pt-3 text-[10px] font-bold uppercase tracking-wider",
                      item.status === "locked" ? "text-slate-600" : "text-brand-subtle"
                    )}
                  >
                    {item.title}
                  </div>
                );
              }

              const isActive = item.id === activeLessonId;
              const isLocked = item.status === "locked";
              const completed = item.status === "completed";

              return (
                <button
                  key={item.id}
                  disabled={isLocked}
                  onClick={() => item.id && setActiveLesson(item.id)}
                  className={cn(
                    "group flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-xs transition-all",
                    isActive
                      ? "bg-brand/15 text-white shadow-[inset_0_0_0_1px_rgba(108,140,255,0.25)]"
                      : isLocked
                        ? "text-slate-600"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                  )}
                >
                  <span className="flex size-5 shrink-0 items-center justify-center">
                    {completed ? (
                      <span aria-label="Completed" className="text-emerald-400">
                        <CheckCircle2 className="size-4" />
                      </span>
                    ) : isLocked ? (
                      <span aria-label="Locked" className="text-slate-500">
                        <Lock className="size-3.5" />
                      </span>
                    ) : isActive ? (
                      <span aria-label="Active" className="text-brand">
                        <Play className="size-3.5" />
                      </span>
                    ) : (
                      <span aria-label="Available" className="text-slate-500">
                        <Circle className="size-3.5" />
                      </span>
                    )}
                  </span>

                  <span className="flex-1 truncate font-medium">{item.title}</span>

                  {!isLocked ? (
                    <ChevronRight className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  ) : null}
                </button>
              );
            })}
          </div>
        ) : sidebarMode === "bookmarks" ? (
          <BookmarksPanel />
        ) : (
          <SettingsPanel />
        )}
      </div>

      <div className="border-t border-white/10 p-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-wider text-slate-500">
            <span>Course Progress</span>
            <span className="text-brand">2 / 16</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[12%] rounded-full bg-gradient-to-r from-brand to-brand-accent" />
          </div>
        </div>
        {activeLesson && !isCompleted ? (
          <button
            onClick={() => activeLesson.id && completeLesson(activeLesson.id)}
            className="mt-2 flex w-full items-center justify-center gap-1.5 rounded-xl bg-emerald-500/15 px-3 py-2 text-xs font-medium text-emerald-200 transition-colors hover:bg-emerald-500/25"
          >
            <CheckCircle2 className="size-3.5" />
            Complete exercise
          </button>
        ) : null}
      </div>
    </aside>
  );
}

function BookmarksPanel() {
  const bookmarks = useLessonStore((s) => s.bookmarks ?? []);
  const removeBookmark = useLessonStore((s) => s.removeBookmark);

  return (
    <div className="space-y-3">
      {bookmarks.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-white/10 p-6 text-center">
          <Bookmark className="size-8 text-slate-600" />
          <p className="text-xs text-slate-500">No bookmarks yet. Pin lessons and shaders from their panels.</p>
        </div>
      ) : (
        bookmarks.map((bookmark) => (
          <div
            key={bookmark.id}
            className="flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300"
          >
            <span className="flex items-center gap-2 truncate">
              <Bookmark className="size-3.5 text-brand" />
              {bookmark.title}
            </span>
            <button
              onClick={() => removeBookmark(bookmark.id)}
              className="rounded p-1 text-slate-500 transition-colors hover:bg-white/5 hover:text-white"
              aria-label={`Remove ${bookmark.title} bookmark`}
            >
              <X className="size-3" />
            </button>
          </div>
        ))
      )}
    </div>
  );
}

function SettingsPanel() {
  const { reduceMotion, toggleReduceMotion, showGpuMetrics, toggleGpuMetrics } = useUiStore();

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-white/10 bg-white/5 p-3">
        <h3 className="mb-2 text-xs font-semibold text-white">Appearance</h3>
        <label className="flex items-center justify-between gap-3 text-xs text-slate-300">
          Reduced motion
          <button
            onClick={toggleReduceMotion}
            className={cn(
              "relative h-5 w-9 rounded-full transition-colors",
              reduceMotion ? "bg-brand" : "bg-white/10"
            )}
            aria-pressed={reduceMotion}
            aria-label="Toggle reduced motion"
          >
            <span className={cn("absolute top-1 size-3 rounded-full bg-white transition-transform", reduceMotion ? "left-5" : "left-1")} />
          </button>
        </label>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 p-3">
        <h3 className="mb-2 text-xs font-semibold text-white">Performance</h3>
        <label className="flex items-center justify-between gap-3 text-xs text-slate-300">
          Show GPU metrics
          <button
            onClick={toggleGpuMetrics}
            className={cn(
              "relative h-5 w-9 rounded-full transition-colors",
              showGpuMetrics ? "bg-brand" : "bg-white/10"
            )}
            aria-pressed={showGpuMetrics}
            aria-label="Toggle GPU metrics"
          >
            <span className={cn("absolute top-1 size-3 rounded-full bg-white transition-transform", showGpuMetrics ? "left-5" : "left-1")} />
          </button>
        </label>
      </div>
    </div>
  );
}

export function MobileSidebarToggle() {
  const { sidebarOpen, toggleSidebar } = useUiStore();
  return (
    <button
      onClick={toggleSidebar}
      className={cn(
        "rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-200 lg:hidden",
        sidebarOpen && "text-white"
      )}
      aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
      aria-expanded={sidebarOpen}
    >
      <Menu className="size-4" />
    </button>
  );
}
