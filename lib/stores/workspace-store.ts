import { create } from "zustand";
import { persist } from "zustand/middleware";

export type LessonTabId = "overview" | "concept" | "demo" | "code" | "exercise" | "challenge" | "check" | "summary";

export type AppliedShaders = {
  vertexShader?: string;
  fragmentShader?: string;
};

export type ShaderVersion = {
  id: string;
  file: "vertex" | "fragment";
  code: string;
  label: string;
  createdAt: number;
};

interface WorkspaceState {
  activeLessonTab: LessonTabId;
  activeCodeFile: "vertex" | "fragment";
  codeVertex: string;
  codeFragment: string;
  appliedShaders: AppliedShaders;
  compileError: string | null;
  isRunning: boolean;
  versionHistory: ShaderVersion[];
  setActiveLessonTab: (tab: LessonTabId) => void;
  setActiveCodeFile: (file: "vertex" | "fragment") => void;
  setCodeVertex: (code: string) => void;
  setCodeFragment: (code: string) => void;
  applyShaders: (shaders: AppliedShaders) => void;
  setCompileError: (error: string | null) => void;
  setIsRunning: (running: boolean) => void;
  saveVersion: (version: Omit<ShaderVersion, "id" | "createdAt">) => void;
  restoreVersion: (version: ShaderVersion) => void;
}

export const useWorkspaceStore = create<WorkspaceState>()(
  persist(
    (set) => ({
      activeLessonTab: "demo",
      activeCodeFile: "fragment",
      codeVertex: "",
      codeFragment: "",
      appliedShaders: {},
      compileError: null,
      isRunning: true,
      versionHistory: [],
      setActiveLessonTab: (tab) => set({ activeLessonTab: tab }),
      setActiveCodeFile: (file) => set({ activeCodeFile: file }),
      setCodeVertex: (code) => set({ codeVertex: code }),
      setCodeFragment: (code) => set({ codeFragment: code }),
      applyShaders: (shaders) => set({ appliedShaders: shaders }),
      setCompileError: (error) => set({ compileError: error }),
      setIsRunning: (running) => set({ isRunning: running }),
      saveVersion: (version) =>
        set((state) => ({
          versionHistory: [
            {
              ...version,
              id: `${version.file}-${Date.now()}`,
              createdAt: Date.now()
            },
            ...state.versionHistory
          ].slice(0, 12)
        })),
      restoreVersion: (version) =>
        set((state) => ({
          activeCodeFile: version.file,
          codeVertex: version.file === "vertex" ? version.code : state.codeVertex,
          codeFragment: version.file === "fragment" ? version.code : state.codeFragment,
          compileError: null
        }))
    }),
    {
      name: "webgpu-lab-workspace-v1",
      version: 1,
      partialize: (state) => ({
        activeLessonTab: state.activeLessonTab,
        activeCodeFile: state.activeCodeFile,
        versionHistory: state.versionHistory
      })
    }
  )
);
