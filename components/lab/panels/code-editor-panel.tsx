"use client";

import { useEffect, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  AlertCircle,
  BookMarked,
  CheckCircle2,
  Columns2,
  Copy,
  Download,
  FileCode2,
  History,
  Play,
  RotateCcw,
  Save,
  Search,
  Share2,
  Wand2,
  X
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useWorkspaceStore } from "@/lib/stores/workspace-store";
import { useLessonStore } from "@/lib/stores/lesson-store";
import { useUiStore } from "@/lib/stores/ui-store";
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
    setIsRunning,
    versionHistory,
    saveVersion,
    restoreVersion
  } = useWorkspaceStore();

  const activeLessonId = useLessonStore((s) => s.activeLessonId);
  const minimap = useUiStore((s) => s.minimap);
  const { validate } = useWgslValidator();
  const [validating, setValidating] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [replaceTerm, setReplaceTerm] = useState("");
  const [splitEditor, setSplitEditor] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);

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
  const matchCount = searchTerm ? activeCode.toLowerCase().split(searchTerm.toLowerCase()).length - 1 : 0;

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

  const saveCurrentVersion = useCallback((label: string) => {
    saveVersion({
      file: activeCodeFile,
      code: activeCode,
      label
    });
  }, [activeCode, activeCodeFile, saveVersion]);

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
    saveVersion({
      file: activeCodeFile,
      code: activeCode,
      label: "Applied shader"
    });
  }, [codeVertex, codeFragment, validate, setCompileError, setIsRunning, saveVersion, activeCodeFile, activeCode]);

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
    saveCurrentVersion("Manual snapshot");
    useLessonStore.getState().addBookmark({
      id: `shader-${activeLessonId}-${activeCodeFile}-${Date.now()}`,
      title: `${activeFileName} snapshot`,
      type: "shader"
    });
  }, [activeFileName, activeCodeFile, activeLessonId, saveCurrentVersion]);

  const replaceFirst = useCallback(() => {
    if (!searchTerm) return;
    const next = activeCode.replace(searchTerm, replaceTerm);
    updateCode(next);
  }, [activeCode, replaceTerm, searchTerm, updateCode]);

  const replaceAll = useCallback(() => {
    if (!searchTerm) return;
    const next = activeCode.split(searchTerm).join(replaceTerm);
    updateCode(next);
  }, [activeCode, replaceTerm, searchTerm, updateCode]);

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B0C15]/80 shadow-card">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-2">
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
          <ToolbarButton icon={Search} label="Search and replace" onClick={() => setSearchOpen((v) => !v)} active={searchOpen} />
          <ToolbarButton icon={Columns2} label="Split editor" onClick={() => setSplitEditor((v) => !v)} active={splitEditor} />
          <ToolbarButton icon={Wand2} label="Format" onClick={handleFormat} />
          <ToolbarButton icon={Copy} label="Copy" onClick={handleCopy} />
          <ToolbarButton icon={Download} label="Download" onClick={handleDownload} />
          <ToolbarButton icon={Share2} label="Share" onClick={handleShare} />
          <ToolbarButton icon={Save} label="Save" onClick={handleSave} />
          <ToolbarButton icon={History} label="Version history" onClick={() => setHistoryOpen((v) => !v)} active={historyOpen} />
        </div>
      </div>

      {searchOpen ? (
        <div className="flex flex-wrap items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-2 text-xs">
          <div className="flex min-w-[180px] flex-1 items-center gap-2 rounded-lg border border-white/10 bg-slate-950/60 px-2 py-1.5">
            <Search className="size-3.5 text-slate-500" />
            <input
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Find in current file"
              className="min-w-0 flex-1 bg-transparent text-slate-200 placeholder:text-slate-600 focus:outline-none"
              aria-label="Find in current shader file"
            />
          </div>
          <input
            value={replaceTerm}
            onChange={(event) => setReplaceTerm(event.target.value)}
            placeholder="Replace with"
            className="min-w-[150px] rounded-lg border border-white/10 bg-slate-950/60 px-2 py-1.5 text-slate-200 placeholder:text-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
            aria-label="Replace with"
          />
          <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-slate-400">
            {matchCount} matches
          </span>
          <button
            onClick={replaceFirst}
            disabled={!searchTerm || matchCount === 0}
            className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-semibold text-slate-200 hover:bg-white/10 disabled:opacity-40"
          >
            Replace
          </button>
          <button
            onClick={replaceAll}
            disabled={!searchTerm || matchCount === 0}
            className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-semibold text-slate-200 hover:bg-white/10 disabled:opacity-40"
          >
            Replace all
          </button>
          <button
            onClick={() => setSearchOpen(false)}
            className="rounded-lg p-1 text-slate-500 hover:bg-white/5 hover:text-slate-200"
            aria-label="Close search"
          >
            <X className="size-3.5" />
          </button>
        </div>
      ) : null}

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
        {splitEditor ? (
          <div className="grid h-full grid-cols-1 md:grid-cols-2">
            <EditorPane
              label={lessonSource.vertexFile}
              value={codeVertex}
              onChange={(value) => setCodeVertex(value ?? "")}
              minimap={minimap}
            />
            <EditorPane
              label={lessonSource.fragmentFile}
              value={codeFragment}
              onChange={(value) => setCodeFragment(value ?? "")}
              minimap={minimap}
              className="border-t border-white/10 md:border-l md:border-t-0"
            />
          </div>
        ) : (
          <EditorPane
            label={activeFileName}
            value={activeCode}
            onChange={updateCode}
            minimap={minimap}
          />
        )}

        {historyOpen ? (
          <aside className="absolute inset-y-0 right-0 z-20 w-full max-w-xs border-l border-white/10 bg-[#090B13]/95 p-3 shadow-2xl backdrop-blur-xl">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-brand-subtle">History</div>
                <h3 className="font-display text-sm font-semibold text-white">Shader Snapshots</h3>
              </div>
              <button
                onClick={() => setHistoryOpen(false)}
                className="rounded-lg p-1 text-slate-500 hover:bg-white/5 hover:text-slate-200"
                aria-label="Close version history"
              >
                <X className="size-4" />
              </button>
            </div>
            <button
              onClick={() => saveCurrentVersion("Named checkpoint")}
              className="mb-3 flex w-full items-center justify-center gap-2 rounded-lg border border-brand/30 bg-brand/10 px-3 py-2 text-xs font-semibold text-brand-subtle hover:bg-brand/20"
            >
              <BookMarked className="size-3.5" />
              Save checkpoint
            </button>
            <div className="space-y-2 overflow-y-auto">
              {versionHistory.length === 0 ? (
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-xs leading-relaxed text-slate-400">
                  No snapshots yet. Run, save, or create a checkpoint to capture the current shader.
                </div>
              ) : (
                versionHistory.map((version) => (
                  <button
                    key={version.id}
                    onClick={() => restoreVersion(version)}
                    className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-left transition-colors hover:border-brand/30 hover:bg-brand/10"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-slate-200">{version.label}</span>
                      <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] text-slate-400">{version.file}</span>
                    </div>
                    <div className="mt-1 text-[10px] text-slate-500">
                      {new Date(version.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </div>
                    <code className="mt-2 block truncate text-[10px] text-cyan-200/80">
                      {version.code.split("\n").find(Boolean) ?? "empty shader"}
                    </code>
                  </button>
                ))
              )}
            </div>
          </aside>
        ) : null}
      </div>
    </div>
  );
}

function EditorPane({
  label,
  value,
  onChange,
  minimap,
  className
}: {
  label: string;
  value: string;
  onChange: (value: string | undefined) => void;
  minimap: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex h-full min-h-[260px] flex-col", className)}>
      <div className="flex items-center justify-between border-b border-white/10 bg-slate-950/50 px-3 py-1.5 text-[10px] text-slate-500">
        <span>{label}</span>
        <span>WGSL</span>
      </div>
      <div className="min-h-0 flex-1">
        <Editor
          theme="vs-dark"
          defaultLanguage="wgsl"
          value={value}
          onChange={onChange}
          options={{
            minimap: { enabled: minimap, scale: 1 },
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
              Loading Monaco editor...
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
  icon: LucideIcon;
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
