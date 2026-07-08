"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  CheckCircle2,
  Code2,
  FileQuestion,
  Lightbulb,
  ListChecks,
  Play,
  Trophy,
  Zap
} from "lucide-react";
import { useWorkspaceStore } from "@/lib/stores/workspace-store";
import { useLessonStore } from "@/lib/stores/lesson-store";
import { getLessonContent, type LessonTabId } from "@/lib/lessons/content";
import { cn } from "@/lib/utils";

const tabs: { id: LessonTabId; label: string; icon: typeof BookOpen }[] = [
  { id: "overview", label: "Overview", icon: BookOpen },
  { id: "concept", label: "Concept", icon: Lightbulb },
  { id: "demo", label: "Demo", icon: Play },
  { id: "code", label: "Code", icon: Code2 },
  { id: "exercise", label: "Exercise", icon: Zap },
  { id: "challenge", label: "Challenge", icon: Trophy },
  { id: "check", label: "Check", icon: FileQuestion },
  { id: "summary", label: "Summary", icon: ListChecks }
];

export function LessonContentPanel() {
  const activeLessonId = useLessonStore((s) => s.activeLessonId);
  const activeTab = useWorkspaceStore((s) => s.activeLessonTab);
  const setActiveTab = useWorkspaceStore((s) => s.setActiveLessonTab);
  const content = getLessonContent(activeLessonId);

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B0C15]/80 shadow-card">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="min-w-0">
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-subtle">
            Lesson
          </span>
          <h2 className="font-display text-base font-semibold text-white">{content.title}</h2>
          <p className="text-xs text-slate-500">{content.estimatedMinutes} min</p>
        </div>

        <CompleteButton />
      </div>

      <div className="flex items-center gap-1 overflow-x-auto border-b border-white/10 px-2 py-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const active = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "relative flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-[11px] font-medium transition-colors",
                active
                  ? "text-white"
                  : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
              )}
            >
              {active ? (
                <motion.div
                  layoutId="lesson-tab-pill"
                  className="absolute inset-0 rounded-lg bg-white/10"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                />
              ) : null}
              <span className="relative z-10 flex items-center gap-1.5">
                <Icon className="size-3.5" />
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="flex-1 overflow-y-auto p-5">
        <LessonTabContent tab={activeTab} content={content} />
      </div>
    </div>
  );
}

function LessonTabContent({
  tab,
  content
}: {
  tab: LessonTabId;
  content: ReturnType<typeof getLessonContent>;
}) {
  switch (tab) {
    case "overview":
      return (
        <div className="space-y-4">
          <p className="text-sm leading-relaxed text-slate-300">{content.overview}</p>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="mb-2 text-[10px] uppercase tracking-wider text-brand-subtle">What you will learn</div>
            <ul className="list-inside list-disc space-y-1 text-sm text-slate-300">
              {content.summary.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      );
    case "concept":
      return (
        <div className="space-y-4">
          <p className="text-sm leading-relaxed text-slate-300">{content.concept}</p>
          <ConceptDiagram />
        </div>
      );
    case "demo":
      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="mb-1 text-[10px] uppercase tracking-wider text-brand-subtle">Instructions</div>
            <p className="text-sm leading-relaxed text-slate-300">{content.demo.instructions}</p>
          </div>
          <div className="rounded-xl border border-brand/20 bg-brand/10 p-4">
            <div className="mb-1 text-[10px] uppercase tracking-wider text-brand">Tip</div>
            <p className="text-sm leading-relaxed text-slate-200">{content.demo.tip}</p>
          </div>
        </div>
      );
    case "code":
      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="mb-1 text-[10px] uppercase tracking-wider text-brand-subtle">Focus</div>
            <p className="text-sm font-medium text-white">{content.code.focus}</p>
          </div>
          <p className="text-sm leading-relaxed text-slate-300">{content.code.explanation}</p>
        </div>
      );
    case "exercise":
      return (
        <div className="space-y-4">
          <p className="text-sm leading-relaxed text-slate-300">{content.exercise.prompt}</p>
          {content.exercise.starter ? (
            <div className="rounded-xl border border-white/10 bg-slate-950/50 p-4">
              <div className="mb-2 text-[10px] uppercase tracking-wider text-slate-500">Starter code</div>
              <code className="block text-xs text-slate-300">{content.exercise.starter}</code>
            </div>
          ) : null}
          {content.exercise.solution ? (
            <details className="rounded-xl border border-white/10 bg-white/5">
              <summary className="cursor-pointer px-4 py-2 text-xs font-medium text-slate-300">Show solution</summary>
              <div className="border-t border-white/10 px-4 py-3">
                <code className="block text-xs text-emerald-300">{content.exercise.solution}</code>
              </div>
            </details>
          ) : null}
        </div>
      );
    case "challenge":
      return (
        <div className="space-y-4">
          <p className="text-sm leading-relaxed text-slate-300">{content.challenge.prompt}</p>
          <div className="space-y-2">
            {content.challenge.hints.map((hint, i) => (
              <details key={i} className="rounded-xl border border-white/10 bg-white/5">
                <summary className="cursor-pointer px-4 py-2 text-xs font-medium text-slate-300">Hint {i + 1}</summary>
                <div className="border-t border-white/10 px-4 py-2 text-xs text-slate-400">{hint}</div>
              </details>
            ))}
          </div>
        </div>
      );
    case "check":
      return <KnowledgeCheck content={content.check} />;
    case "summary":
      return (
        <div className="space-y-4">
          <p className="text-sm leading-relaxed text-slate-300">Great work. Here is a quick recap of what this lesson covered:</p>
          <div className="space-y-2">
            {content.summary.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3"
              >
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-400" />
                <span className="text-sm text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      );
    default:
      return null;
  }
}

function CompleteButton() {
  const activeLessonId = useLessonStore((s) => s.activeLessonId);
  const progress = useLessonStore((s) => s.progress);
  const completeLesson = useLessonStore((s) => s.completeLesson);
  const isCompleted = progress[activeLessonId]?.status === "completed";
  const [justCompleted, setJustCompleted] = useState(false);

  return (
    <button
      onClick={() => {
        if (!isCompleted) {
          completeLesson(activeLessonId);
          setJustCompleted(true);
          setTimeout(() => setJustCompleted(false), 1500);
        }
      }}
      disabled={isCompleted}
      className={cn(
        "flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
        isCompleted
          ? "bg-emerald-500/20 text-emerald-300"
          : justCompleted
            ? "bg-emerald-500/30 text-emerald-200"
            : "bg-brand/15 text-brand hover:bg-brand/25"
      )}
    >
      <CheckCircle2 className="size-3.5" />
      {isCompleted ? "Completed" : justCompleted ? "Completed!" : "Mark complete"}
    </button>
  );
}

function KnowledgeCheck({
  content
}: {
  content: ReturnType<typeof getLessonContent>["check"];
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  return (
    <div className="space-y-4">
      <p className="text-sm font-medium text-white">{content.question}</p>
      <div className="space-y-2">
        {content.options.map((option, i) => {
          const isSelected = selected === i;
          const reveal = showExplanation && isSelected;
          return (
            <button
              key={i}
              onClick={() => {
                setSelected(i);
                setShowExplanation(false);
              }}
              className={cn(
                "flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-colors",
                isSelected
                  ? reveal
                    ? option.correct
                      ? "border-emerald-500/40 bg-emerald-500/15 text-emerald-200"
                      : "border-rose-500/40 bg-rose-500/15 text-rose-200"
                    : "border-brand/40 bg-brand/15 text-white"
                  : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
              )}
            >
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full border border-current text-[10px]">
                {String.fromCharCode(65 + i)}
              </span>
              {option.label}
            </button>
          );
        })}
      </div>
      <button
        onClick={() => setShowExplanation(true)}
        disabled={selected === null}
        className="rounded-lg bg-white/10 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/15 disabled:opacity-40"
      >
        Check answer
      </button>
      {showExplanation ? (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300"
        >
          {content.explanation}
        </motion.div>
      ) : null}
    </div>
  );
}

function ConceptDiagram() {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-slate-950/50 p-6">
      {["CPU / JavaScript", "Command Encoder", "Vertex Shader", "Rasterizer", "Fragment Shader", "Framebuffer"].map(
        (stage, i, arr) => (
          <div key={stage} className="flex flex-col items-center">
            <div className="rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-xs text-slate-200">
              {stage}
            </div>
            {i < arr.length - 1 ? (
              <span className="my-1 text-brand-subtle">↓</span>
            ) : null}
          </div>
        )
      )}
    </div>
  );
}
