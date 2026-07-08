import { create } from "zustand";

export type LessonTabId = "overview" | "concept" | "demo" | "code" | "exercise" | "challenge" | "check" | "summary";

export type AppliedShaders = {
  vertexShader?: string;
  fragmentShader?: string;
};

interface WorkspaceState {
  activeLessonTab: LessonTabId;
  activeCodeFile: "vertex" | "fragment";
  codeVertex: string;
  codeFragment: string;
  appliedShaders: AppliedShaders;
  compileError: string | null;
  isRunning: boolean;
  setActiveLessonTab: (tab: LessonTabId) => void;
  setActiveCodeFile: (file: "vertex" | "fragment") => void;
  setCodeVertex: (code: string) => void;
  setCodeFragment: (code: string) => void;
  applyShaders: (shaders: AppliedShaders) => void;
  setCompileError: (error: string | null) => void;
  setIsRunning: (running: boolean) => void;
}

export const useWorkspaceStore = create<WorkspaceState>((set) => ({
  activeLessonTab: "demo",
  activeCodeFile: "fragment",
  codeVertex: "",
  codeFragment: "",
  appliedShaders: {},
  compileError: null,
  isRunning: true,
  setActiveLessonTab: (tab) => set({ activeLessonTab: tab }),
  setActiveCodeFile: (file) => set({ activeCodeFile: file }),
  setCodeVertex: (code) => set({ codeVertex: code }),
  setCodeFragment: (code) => set({ codeFragment: code }),
  applyShaders: (shaders) => set({ appliedShaders: shaders }),
  setCompileError: (error) => set({ compileError: error }),
  setIsRunning: (running) => set({ isRunning: running })
}));
