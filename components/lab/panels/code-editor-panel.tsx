"use client";

import { useEffect, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  Copy,
  Download,
  FileCode2,
  Play,
  RotateCcw,
  Save,
  Share2,
  Wand2
} from "lucide-react";
import { useWorkspaceStore } from "@/lib/stores/workspace-store";
import { useLessonStore } from "@/lib/stores/lesson-store";
import { getLessonShaderSource } from "@/lib/lessons/shader-source";
import { useWgslValidator } from "@/components/lab/use-wgsl-validator";
import { cn } from "@/lib/utils";

const Editor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

export function CodeEditorPanel() {
  const {
    activeCodeFile,
    setActiveCodeFile,
    codeVertex,
    codeFragment,
    setCodeVertex,
    setCodeFragment,
    compileError,
    setCompileError,
    isRunning,
    setIsRunning
  } = useWorkspaceStore();

  const activeLessonId = useLessonStore((s) => s.activeLessonId);
  const { validate } = useWgslValidator();
  const [validating, setValidating] = useState(false);

  const lessonSource = getLessonShaderSource(activeLessonId);

  useEffect(() => {
    // Defer state updates to avoid cascading renders
    const timer = setTimeout(() => {
      setCodeVertex(lessonSource.vertex);
      setCodeFragment(lessonSource.fragment);
      setCompileError(null);
      setIsRunning(true);
      useWorkspaceStore.getState().applyShaders({});
    }, 0);
    return () => clearTimeout(timer);
  }, [activeLessonId, lessonSource.vertex, lessonSource.fragment, setCodeVertex, setCodeFragment, setCompileError, setIsRunning]);

  const activeCode = activeCodeFile === "vertex" ? codeVertex : codeFragment;
  const activeFileName =
    activeCodeFile === "vertex" ? lessonSource.vertexFile : lessonSource.fragmentFile;

  const updateCode = useCallback(
    (value: string | undefined) => {
      const code = value ?? "";
      if (activeCodeFile === "vertex") {
        setCodeVertex(code);
      } else {
        setCodeFragment(code);
      }
    },
    [activeCodeFile, setCodeVertex, setCodeFragment]
  );

  const handleRun = useCallback(async () => {
    setIsRunning(true);
    setValidating(true);
    setCompileError(null);

    const vertexResult = await validate(codeVertex);
    const fragmentResult = await validate(codeFragment);

    setValidating(false);

    if (!vertexResult.valid) {
      setCompileError(`Vertex: ${vertexResult.message}`);
      setIsRunning(false);
      return;
    }

    if (!fragmentResult.valid) {
      setCompileError(`Fragment: ${fragmentResult.message}`);
      setIsRunning(false);
      return;
    }

    useWorkspaceStore.getState().applyShaders({
      vertexShader: codeVertex,
      fragmentShader: codeFragment
    });
  }, [codeVertex, codeFragment, validate, setCompileError, setIsRunning]);

  const handleReset = useCallback(() => {
    setCodeVertex(lessonSource.vertex);
    setCodeFragment(lessonSource.fragment);
    setCompileError(null);
    setIsRunning(true);
  }, [lessonSource, setCodeVertex, setCodeFragment, setCompileError, setIsRunning]);

  const handleCopy = useCallback(() => {
    void navigator.clipboard.writeText(activeCode);
  }, [activeCode]);

  const handleDownload = useCallback(() => {
    const blob = new Blob([activeCode], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = activeFileName;
    a.click();
    URL.revokeObjectURL(url);
  }, [activeCode, activeFileName]);

  const handleFormat = useCallback(() => {
    const formatted = activeCode
      .split("\n")
      .map((line) => line.trim())
      .join("\n");
    if (activeCodeFile === "vertex") {
      setCodeVertex(formatted);
    } else {
      setCodeFragment(formatted);
    }
  }, [activeCode, activeCodeFile, setCodeVertex, setCodeFragment]);

  const handleShare = useCallback(() => {
    const payload = JSON.stringify({
      lessonId: activeLessonId,
      file: activeCodeFile,
      code: activeCode
    }, null, 2);
    void navigator.clipboard.writeText(payload);
  }, [activeCode, activeCodeFile, activeLessonId]);

  const handleSave = useCallback(() => {
    useLessonStore.getState().addBookmark({
      id: `shader-${activeLessonId}-${activeCodeFile}-${Date.now()}`,
      title: `${activeFileName} snapshot`,
      type: "shader"
    });
  }, [activeFileName, activeCodeFile, activeLessonId]);

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B0C15]/80 shadow-card">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
        <div className="flex items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-subtle">
            WGSL Editor
          </span>
          <div className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 p-0.5">
            <FileTab
              active={activeCodeFile === "vertex"}
              label={lessonSource.vertexFile}
              onClick={() => setActiveCodeFile("vertex")}
            />
            <FileTab
              active={activeCodeFile === "fragment"}
              label={lessonSource.fragmentFile}
              onClick={() => setActiveCodeFile("fragment")}
            />
          </div>
        </div>

        <div className="flex items-center gap-1">
          <ToolbarButton icon={Play} label="Run" onClick={handleRun} active={isRunning} loading={validating} />
          <ToolbarButton icon={RotateCcw} label="Reset" onClick={handleReset} />
          <ToolbarButton icon={Wand2} label="Format" onClick={handleFormat} />
          <ToolbarButton icon={Copy} label="Copy" onClick={handleCopy} />
          <ToolbarButton icon={Download} label="Download" onClick={handleDownload} />
          <ToolbarButton icon={Share2} label="Share" onClick={handleShare} />
          <ToolbarButton icon={Save} label="Save" onClick={handleSave} />
        </div>
      </div>

      {compileError ? (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="flex items-start gap-2 border-b border-rose-500/20 bg-rose-500/10 px-4 py-2 text-xs text-rose-200"
        >
          <AlertCircle className="mt-0.5 size-4 shrink-0" />
          <div className="min-w-0">
            <strong className="font-semibold">Shader compilation failed</strong>
            <p className="text-rose-300/80">{compileError}</p>
          </div>
        </motion.div>
      ) : isRunning && !validating ? (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="flex items-center gap-2 border-b border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs text-emerald-200"
        >
          <CheckCircle2 className="size-4" />
          <span className="font-semibold">Shader compiled successfully</span>
        </motion.div>
      ) : null}

      <div className="relative flex-1 overflow-hidden">
        <Editor
          theme="vs-dark"
          defaultLanguage="wgsl"
          value={activeCode}
          onChange={updateCode}
          options={{
            minimap: { enabled: true, scale: 1 },
            fontSize: 13,
            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
            lineNumbers: "on",
            folding: true,
            wordWrap: "on",
            automaticLayout: true,
            scrollBeyondLastLine: false,
            renderWhitespace: "selection",
            padding: { top: 16 }
          }}
          className="h-full w-full"
          loading={
            <div className="flex h-full items-center justify-center text-xs text-slate-500">
              Loading Monaco editor…
            </div>
          }
        />
      </div>
    </div>
  );
}

function FileTab({
  active,
  label,
  onClick
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors",
        active
          ? "bg-brand/20 text-brand"
          : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
      )}
    >
      <FileCode2 className="size-3.5" />
      {label}
    </button>
  );
}

function ToolbarButton({
  icon: Icon,
  label,
  active,
  loading,
  onClick
}: {
  icon: typeof Play;
  label: string;
  active?: boolean;
  loading?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={cn(
        "rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-200 disabled:opacity-50",
        active && "text-brand"
      )}
      aria-label={label}
      title={label}
    >
      {loading ? (
        <span className="block size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : (
        <Icon className="size-4" />
      )}
    </button>
  );
}

