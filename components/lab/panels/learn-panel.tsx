"use client";

import { useState } from "react";
import { CheckCircle2, ChevronLeft, ChevronRight, Code2, GraduationCap, Play, Trophy, Zap } from "lucide-react";
import { useLessonStore } from "@/lib/stores/lesson-store";
import { useWorkspaceStore, type LessonStepId } from "@/lib/stores/workspace-store";
import { getLessonContent } from "@/lib/lessons/content";
import { getLessonShaderSource } from "@/lib/lessons/shader-source";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

const steps: { id: LessonStepId; label: string; icon: typeof GraduationCap }[] = [
  { id: "learn", label: "Learn", icon: GraduationCap },
  { id: "code", label: "Code", icon: Code2 },
  { id: "practice", label: "Practice", icon: Zap }
];

export function LearnPanel() {
  const activeLessonId = useLessonStore((s) => s.activeLessonId);
  const activeStep = useWorkspaceStore((s) => s.activeLessonStep);
  const setActiveStep = useWorkspaceStore((s) => s.setActiveLessonStep);
  const completeLesson = useLessonStore((s) => s.completeLesson);
  const content = getLessonContent(activeLessonId);
  const lessonIndex = steps.findIndex((s) => s.id === activeStep);

  const goNext = () => {
    if (lessonIndex < steps.length - 1) {
      setActiveStep(steps[lessonIndex + 1]!.id);
    }
  };

  const goPrev = () => {
    if (lessonIndex > 0) {
      setActiveStep(steps[lessonIndex - 1]!.id);
    }
  };

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B0C15]/80 shadow-card">
      <div className="border-b border-white/10 px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-subtle">Lesson</span>
            <h2 className="font-display text-base font-semibold text-white">{content.title}</h2>
          </div>
          <span className="shrink-0 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-slate-400">
            {content.estimatedMinutes} min
          </span>
        </div>

        <div className="mt-3 flex items-center gap-1">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const active = step.id === activeStep;
            const done = lessonIndex > i;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={cn(
                  "flex flex-1 items-center justify-center gap-1.5 rounded-lg py-1.5 text-[11px] font-medium transition-colors",
                  active ? "bg-white/10 text-white" : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                )}
              >
                {done ? <CheckCircle2 className="size-3 text-emerald-400" /> : <Icon className="size-3" />}
                {step.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-5">
        <StepContent step={activeStep} content={content} />
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-white/10 px-4 py-3">
        <button
          onClick={goPrev}
          disabled={lessonIndex === 0}
          className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-slate-300 transition-colors hover:bg-white/10 disabled:opacity-40"
        >
          <ChevronLeft className="size-3.5" />
          Previous
        </button>

        {lessonIndex === steps.length - 1 ? (
          <button
            onClick={() => completeLesson(activeLessonId)}
            className="flex items-center gap-1.5 rounded-lg bg-emerald-500/15 px-3 py-1.5 text-[11px] font-semibold text-emerald-300 transition-colors hover:bg-emerald-500/25"
          >
            <Trophy className="size-3.5" />
            Complete lesson
          </button>
        ) : (
          <button
            onClick={goNext}
            className="flex items-center gap-1.5 rounded-lg bg-brand/15 px-3 py-1.5 text-[11px] font-semibold text-brand-subtle transition-colors hover:bg-brand/25"
          >
            Next
            <ChevronRight className="size-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}

function StepContent({ step, content }: { step: LessonStepId; content: ReturnType<typeof getLessonContent> }) {
  switch (step) {
    case "learn":
      return (
        <div className="space-y-4">
          <p className="text-sm leading-relaxed text-slate-300">{content.overview}</p>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="mb-2 text-[10px] uppercase tracking-wider text-brand-subtle">Concept</div>
            <p className="text-sm leading-relaxed text-slate-300">{content.concept}</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="mb-2 text-[10px] uppercase tracking-wider text-brand-subtle">You will learn</div>
            <ul className="list-inside list-disc space-y-1 text-sm text-slate-300">
              {content.summary.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      );
    case "code":
      return <CodeStep content={content} />;
    case "practice":
      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-white">
              <Play className="size-3.5 text-brand-subtle" />
              Exercise
            </div>
            <p className="text-sm leading-relaxed text-slate-300">{content.exercise.prompt}</p>
            {content.exercise.starter ? (
              <code className="mt-3 block rounded-lg bg-slate-950/50 p-3 text-xs text-slate-300">{content.exercise.starter}</code>
            ) : null}
          </div>

          {content.challenge.prompt ? (
            <div className="rounded-xl border border-brand/20 bg-brand/10 p-4">
              <div className="mb-2 text-[10px] uppercase tracking-wider text-brand">Challenge</div>
              <p className="text-sm leading-relaxed text-slate-200">{content.challenge.prompt}</p>
            </div>
          ) : null}

          <KnowledgeCheck check={content.check} />
        </div>
      );
    default:
      return null;
  }
}

function CodeStep({ content }: { content: ReturnType<typeof getLessonContent> }) {
  const activeLessonId = useLessonStore((s) => s.activeLessonId);
  const lessonSource = getLessonShaderSource(activeLessonId);
  const [activeFile, setActiveFile] = useState<"vertex" | "fragment">("fragment");
  const code = activeFile === "vertex" ? lessonSource.vertex : lessonSource.fragment;
  const fileName = activeFile === "vertex" ? lessonSource.vertexFile : lessonSource.fragmentFile;

  return (
    <div className="flex h-full flex-col gap-4">
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="mb-1 text-[10px] uppercase tracking-wider text-brand-subtle">Demo instructions</div>
        <p className="text-sm text-slate-300">{content.demo.instructions}</p>
        <p className="mt-2 text-sm text-brand-subtle">{content.demo.tip}</p>
      </div>

      <div className="flex flex-1 flex-col gap-2 rounded-xl border border-white/10 bg-slate-950/50">
        <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveFile("vertex")}
              className={cn(
                "rounded-lg px-2.5 py-1 text-[11px] font-medium transition-colors",
                activeFile === "vertex" ? "bg-white/10 text-white" : "text-slate-400 hover:text-slate-200"
              )}
            >
              Vertex WGSL
            </button>
            <button
              onClick={() => setActiveFile("fragment")}
              className={cn(
                "rounded-lg px-2.5 py-1 text-[11px] font-medium transition-colors",
                activeFile === "fragment" ? "bg-white/10 text-white" : "text-slate-400 hover:text-slate-200"
              )}
            >
              Fragment WGSL
            </button>
          </div>
          <span className="text-[10px] text-slate-500">{fileName}</span>
        </div>
        <div className="min-h-[260px] flex-1">
          <MonacoEditor
            height="100%"
            language="wgsl"
            value={code}
            options={{
              readOnly: true,
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              fontSize: 12,
              lineNumbers: "on",
              folding: true,
              automaticLayout: true,
              theme: "vs-dark"
            }}
          />
        </div>
      </div>
    </div>
  );
}

function KnowledgeCheck({ check }: { check: ReturnType<typeof getLessonContent>["check"] }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const correctIndex = check.options.findIndex((o) => o.correct);

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="mb-3 text-xs font-semibold text-white">{check.question}</div>
      <div className="space-y-2">
        {check.options.map((option, i) => {
          const isCorrect = i === correctIndex;
          const show = revealed;
          return (
            <button
              key={i}
              onClick={() => {
                setSelected(i);
                setRevealed(true);
              }}
              className={cn(
                "flex w-full items-center gap-2 rounded-lg border px-3 py-2 text-left text-[11px] text-slate-300 transition-colors",
                selected === i
                  ? show
                    ? isCorrect
                      ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
                      : "border-rose-400/30 bg-rose-400/10 text-rose-200"
                    : "border-brand/30 bg-brand/10 text-white"
                  : "border-white/10 bg-white/5 hover:bg-white/10"
              )}
            >
              <span className="size-4 shrink-0 rounded-full border border-white/20" />
              {option.label}
            </button>
          );
        })}
      </div>
      {revealed ? (
        <p className={cn("mt-3 text-[11px]", selected === correctIndex ? "text-emerald-300" : "text-rose-300")}>
          {selected === correctIndex ? "Correct. " : "Not quite. "}
          {check.explanation}
        </p>
      ) : null}
    </div>
  );
}
