"use client";

import { useEffect, useMemo, useState } from "react";
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
  Keyboard,
  History,
  Trophy,
  X,
  Menu,
  Plus,
  Type,
  Monitor,
  Save,
  Accessibility
} from "lucide-react";
import { useLessonStore } from "@/lib/stores/lesson-store";
import { useUiStore, type SidebarMode } from "@/lib/stores/ui-store";
import { cn } from "@/lib/utils";

const modes: { id: SidebarMode; label: string; icon: typeof BookOpen }[] = [
  { id: "index", label: "Index", icon: BookOpen },
  { id: "bookmarks", label: "Bookmarks", icon: Bookmark },
  { id: "shortcuts", label: "Keys", icon: Keyboard },
  { id: "profile", label: "Profile", icon: Trophy },
  { id: "settings", label: "Settings", icon: Settings }
];

export function LessonSidebar() {
  const { sidebarMode, setSidebarMode, sidebarOpen, toggleSidebar, activePanel } = useUiStore();
  const getEffectiveCatalog = useLessonStore((s) => s.getEffectiveCatalog);
  const activeLessonId = useLessonStore((s) => s.activeLessonId);
  const progress = useLessonStore((s) => s.progress);
  const setActiveLesson = useLessonStore((s) => s.setActiveLesson);
  const completeLesson = useLessonStore((s) => s.completeLesson);

  const catalog = useMemo(() => getEffectiveCatalog(), [getEffectiveCatalog]);
  const activeLesson = catalog.find((item) => item.id === activeLessonId);
  const isCompleted = activeLesson?.status === "completed";
  const lessonItems = catalog.filter((item) => item.type === "lesson" && item.id);
  const completedCount = lessonItems.filter((item) => item.id && progress[item.id]?.status === "completed").length;
  const totalLessons = lessonItems.length;
  const progressPercent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  return (
    <aside className={cn(
      "fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-white/10 bg-[#0B0C15]/80 backdrop-blur-xl transition-transform duration-300 ease-out xl:w-72 lg:static lg:translate-x-0",
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

      <div className="flex items-center gap-1 overflow-x-auto border-b border-white/10 p-2">
        {modes.map((mode) => {
          const Icon = mode.icon;
          const active = sidebarMode === mode.id;
          return (
            <button
              key={mode.id}
              onClick={() => setSidebarMode(mode.id)}
              className={cn(
                "relative flex shrink-0 items-center justify-center gap-1.5 rounded-lg px-2 py-1.5 text-xs font-medium transition-colors",
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
        {sidebarMode === "index" ? (
          <ModeIndex activePanel={activePanel} />
        ) : sidebarMode === "bookmarks" ? (
          <BookmarksPanel />
        ) : sidebarMode === "shortcuts" ? (
          <ShortcutsPanel />
        ) : sidebarMode === "profile" ? (
          <ProfilePanel completedCount={completedCount} totalLessons={totalLessons} progressPercent={progressPercent} />
        ) : (
          <SettingsPanel />
        )}
      </div>

      <div className="border-t border-white/10 p-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-wider text-slate-500">
            <span>Course Progress</span>
            <span className="text-brand">{completedCount} / {totalLessons}</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand to-brand-accent"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
        {activeLesson && !isCompleted ? (
          <button
            onClick={() => activeLesson.id && completeLesson(activeLesson.id)}
            className="mt-2 flex w-full items-center justify-center gap-1.5 rounded-xl bg-emerald-500/15 px-3 py-2 text-xs font-medium text-emerald-200 transition-colors hover:bg-emerald-500/25"
            title="Marks this lesson complete and unlocks the next lesson."
          >
            <CheckCircle2 className="size-3.5" />
            Complete lesson and unlock next
          </button>
        ) : null}
      </div>
    </aside>
  );
}

function ModeIndex({ activePanel }: { activePanel: import("@/lib/stores/ui-store").PanelId }) {
  switch (activePanel) {
    case "workbench":
      return <WorkbenchIndex />;
    case "shaders":
      return <ShaderIndex />;
    case "inspect":
      return <InspectIndex />;
    case "docs":
      return <DocsIndex />;
    case "learn":
    default:
      return <LessonIndex />;
  }
}

function LessonIndex() {
  const getEffectiveCatalog = useLessonStore((s) => s.getEffectiveCatalog);
  const activeLessonId = useLessonStore((s) => s.activeLessonId);
  const setActiveLesson = useLessonStore((s) => s.setActiveLesson);
  const catalog = useMemo(() => getEffectiveCatalog(), [getEffectiveCatalog]);

  return (
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
            title={isLocked ? "Complete the previous available lesson to unlock this one." : `Open ${item.title}`}
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
  );
}

function WorkbenchIndex() {
  const { activeWorkbenchTool, setActiveWorkbenchTool } = useUiStore();
  const items = [
    { id: "shape" as const, label: "Shape" },
    { id: "transform" as const, label: "Transform" },
    { id: "lighting" as const, label: "Lighting" },
    { id: "material" as const, label: "Material" }
  ];
  return (
    <div className="space-y-1">
      <p className="px-2 py-1 text-[11px] text-slate-400">Pick a tool. Changes update the shared WebGPU viewport on the right.</p>
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveWorkbenchTool(item.id)}
          className={cn(
            "flex w-full rounded-xl px-3 py-2 text-left text-xs transition-colors",
            activeWorkbenchTool === item.id ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/5 hover:text-white"
          )}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

function ShaderIndex() {
  const { setActiveShaderStudioTab } = useUiStore();
  return (
    <div className="space-y-1 text-xs text-slate-300">
      <p className="px-2 py-1 text-[11px] text-slate-400">Pick a shader example to load it into the editor, then hit Run.</p>
      <button onClick={() => setActiveShaderStudioTab("gallery")} className="w-full rounded-xl px-3 py-2 text-left hover:bg-white/5">
        Browse gallery
      </button>
      <button onClick={() => setActiveShaderStudioTab("editor")} className="w-full rounded-xl px-3 py-2 text-left hover:bg-white/5">
        Open editor
      </button>
    </div>
  );
}

function InspectIndex() {
  const { activeInspectTab, setActiveInspectTab } = useUiStore();
  const items = [
    { id: "pipeline" as const, label: "Pipeline" },
    { id: "gpu" as const, label: "GPU state" },
    { id: "performance" as const, label: "Performance" }
  ];
  return (
    <div className="space-y-1">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveInspectTab(item.id)}
          className={cn(
            "flex w-full rounded-xl px-3 py-2 text-left text-xs transition-colors",
            activeInspectTab === item.id ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/5 hover:text-white"
          )}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

function DocsIndex() {
  return (
    <div className="space-y-1 text-xs text-slate-300">
      <p className="px-2 py-1 text-[11px] text-slate-400">Built-in WGSL and WebGPU reference.</p>
      <button onClick={() => window.location.hash = "#docs"} className="w-full rounded-xl px-3 py-2 text-left hover:bg-white/5">
        Documentation home
      </button>
    </div>
  );
}

const shortcutGroups = [
  {
    title: "Global",
    rows: [
      { keys: ["Ctrl", "K"], label: "Open command palette" },
      { keys: ["Esc"], label: "Close dialogs and overlays" },
      { keys: ["Tab"], label: "Move focus forward" },
      { keys: ["Shift", "Tab"], label: "Move focus backward" }
    ]
  },
  {
    title: "Workspace",
    rows: [
      { keys: ["Run"], label: "Apply shader changes from editor toolbar" },
      { keys: ["Grid"], label: "Toggle viewport grid overlay" },
      { keys: ["Axis"], label: "Toggle axis overlay" },
      { keys: ["Docs"], label: "Jump to documentation from status bar" }
    ]
  }
];

function ShortcutsPanel() {
  return (
    <div className="space-y-3">
      {shortcutGroups.map((group) => (
        <div key={group.title} className="rounded-xl border border-white/10 bg-white/5 p-3">
          <h3 className="mb-2 flex items-center gap-2 text-xs font-semibold text-white">
            <Keyboard className="size-3.5 text-brand-subtle" />
            {group.title}
          </h3>
          <div className="space-y-2">
            {group.rows.map((row) => (
              <div key={row.label} className="flex items-center justify-between gap-3 text-xs text-slate-300">
                <span>{row.label}</span>
                <span className="flex shrink-0 items-center gap-1">
                  {row.keys.map((key) => (
                    <kbd key={key} className="rounded border border-white/10 bg-black/20 px-1.5 py-0.5 text-[10px] text-slate-300">
                      {key}
                    </kbd>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ProfilePanel({
  completedCount,
  totalLessons,
  progressPercent
}: {
  completedCount: number;
  totalLessons: number;
  progressPercent: number;
}) {
  const recent = useLessonStore((s) => s.recent);
  const catalog = useMemo(() => useLessonStore.getState().getEffectiveCatalog(), []);
  const achievements = [
    { title: "First Frame", unlocked: completedCount >= 1 },
    { title: "Pipeline Reader", unlocked: completedCount >= 2 },
    { title: "Shader Explorer", unlocked: completedCount >= 4 },
    { title: "Optimization Ready", unlocked: completedCount >= totalLessons }
  ];

  return (
    <div className="space-y-3">
      <div className="rounded-xl border border-brand/20 bg-brand/10 p-3">
        <div className="text-[10px] uppercase tracking-wider text-brand-subtle">Profile</div>
        <div className="mt-1 font-display text-lg font-semibold text-white">{progressPercent}% complete</div>
        <p className="mt-1 text-xs text-slate-400">
          {completedCount} of {totalLessons} lessons complete.
        </p>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 p-3">
        <h3 className="mb-2 flex items-center gap-2 text-xs font-semibold text-white">
          <Trophy className="size-3.5 text-brand-subtle" />
          Achievements
        </h3>
        <div className="space-y-2">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className={cn(
                "flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs",
                achievement.unlocked ? "bg-emerald-500/10 text-emerald-200" : "bg-white/5 text-slate-500"
              )}
            >
              <Trophy className="size-3.5" />
              {achievement.title}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 p-3">
        <h3 className="mb-2 flex items-center gap-2 text-xs font-semibold text-white">
          <History className="size-3.5 text-brand-subtle" />
          Recent Lessons
        </h3>
        <div className="space-y-1">
          {recent.slice(0, 5).map((id) => {
            const lesson = catalog.find((item) => item.id === id);
            return (
              <div key={id} className="truncate rounded-lg bg-black/20 px-2 py-1.5 text-xs text-slate-300">
                {lesson?.title ?? id}
              </div>
            );
          })}
        </div>
      </div>
    </div>
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
  const {
    reduceMotion,
    toggleReduceMotion,
    showGpuMetrics,
    toggleGpuMetrics,
    highDensity,
    toggleHighDensity,
    minimap,
    toggleMinimap,
    autosave,
    toggleAutosave
  } = useUiStore();
  const unlocked = useLessonStore((s) => s.unlocked);
  const unlockAll = useLessonStore((s) => s.unlockAll);
  const lockAll = useLessonStore((s) => s.lockAll);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-white/10 bg-white/5 p-3">
        <h3 className="mb-2 flex items-center gap-2 text-xs font-semibold text-white">
          <GraduationCap className="size-3.5 text-brand-subtle" />
          Course
        </h3>
        <ToggleRow
          label="Unlock all lessons"
          active={unlocked}
          onClick={() => (unlocked ? lockAll() : unlockAll())}
        />
        <p className="mt-2 text-[10px] text-slate-500">
          {unlocked
            ? "All lessons are unlocked for free exploration."
            : "Complete each lesson to unlock the next, or toggle this to explore freely."}
        </p>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 p-3">
        <h3 className="mb-2 flex items-center gap-2 text-xs font-semibold text-white">
          <Accessibility className="size-3.5 text-brand-subtle" />
          Appearance
        </h3>
        <ToggleRow label="Reduced motion" active={reduceMotion} onClick={toggleReduceMotion} />
        <p className="mt-2 text-[10px] text-slate-500">
          System preference: {prefersReducedMotion ? "reduced" : "no-preference"}
        </p>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 p-3">
        <h3 className="mb-2 flex items-center gap-2 text-xs font-semibold text-white">
          <Monitor className="size-3.5 text-brand-subtle" />
          Performance
        </h3>
        <ToggleRow label="Show GPU metrics" active={showGpuMetrics} onClick={toggleGpuMetrics} />
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 p-3">
        <h3 className="mb-2 flex items-center gap-2 text-xs font-semibold text-white">
          <Type className="size-3.5 text-brand-subtle" />
          Editor
        </h3>
        <ToggleRow label="High density" active={highDensity} onClick={toggleHighDensity} />
        <ToggleRow label="Minimap" active={minimap} onClick={toggleMinimap} />
        <ToggleRow label="Autosave" active={autosave} onClick={toggleAutosave} />
      </div>
    </div>
  );
}

function ToggleRow({
  label,
  active,
  onClick
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <label className="flex items-center justify-between gap-3 py-1.5 text-xs text-slate-300">
      {label}
      <button
        onClick={onClick}
        className={cn(
          "relative h-5 w-9 rounded-full transition-colors",
          active ? "bg-brand" : "bg-white/10"
        )}
        aria-pressed={active}
        aria-label={`Toggle ${label}`}
      >
        <span
          className={cn(
            "absolute top-1 size-3 rounded-full bg-white transition-transform",
            active ? "left-5" : "left-1"
          )}
        />
      </button>
    </label>
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
