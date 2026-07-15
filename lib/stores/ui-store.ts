import { create } from "zustand";
import { persist } from "zustand/middleware";

export type PanelId = "learn" | "workbench" | "shaders" | "inspect" | "docs";

export type WorkbenchTool = "shape" | "material" | "lighting" | "transform";
export type ShaderStudioTab = "gallery" | "editor";
export type InspectTab = "pipeline" | "gpu" | "performance";
export type SidebarMode = "index" | "bookmarks" | "shortcuts" | "profile" | "settings";

export interface CommandPaletteItem {
  id: string;
  label: string;
  shortcut?: string;
  action: () => void;
}

export type SplitDirection = "auto" | "horizontal" | "vertical";

interface UiState {
  activePanel: PanelId;
  sidebarOpen: boolean;
  sidebarMode: SidebarMode;
  commandPaletteOpen: boolean;
  splitDirection: SplitDirection;
  activeWorkbenchTool: WorkbenchTool;
  activeShaderStudioTab: ShaderStudioTab;
  activeInspectTab: InspectTab;
  showGpuMetrics: boolean;
  reduceMotion: boolean;
  highDensity: boolean;
  minimap: boolean;
  autosave: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
  setSidebarMode: (mode: SidebarMode) => void;
  setActivePanel: (panel: PanelId) => void;
  openCommandPalette: () => void;
  closeCommandPalette: () => void;
  setSplitDirection: (direction: SplitDirection) => void;
  setActiveWorkbenchTool: (tool: WorkbenchTool) => void;
  setActiveShaderStudioTab: (tab: ShaderStudioTab) => void;
  setActiveInspectTab: (tab: InspectTab) => void;
  toggleGpuMetrics: () => void;
  toggleReduceMotion: () => void;
  toggleHighDensity: () => void;
  toggleMinimap: () => void;
  toggleAutosave: () => void;
}

export const useUiStore = create<UiState>()(
  persist(
    (set) => ({
      activePanel: "learn",
      sidebarOpen: true,
      sidebarMode: "index",
      commandPaletteOpen: false,
      splitDirection: "auto",
      activeWorkbenchTool: "shape",
      activeShaderStudioTab: "gallery",
      activeInspectTab: "pipeline",
      showGpuMetrics: true,
      reduceMotion: false,
      highDensity: false,
      minimap: true,
      autosave: false,
      toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
      closeSidebar: () => set({ sidebarOpen: false }),
      setSidebarMode: (mode) => set({ sidebarMode: mode }),
      setActivePanel: (panel) => set({ activePanel: panel }),
      openCommandPalette: () => set({ commandPaletteOpen: true }),
      closeCommandPalette: () => set({ commandPaletteOpen: false }),
      setSplitDirection: (direction) => set({ splitDirection: direction }),
      setActiveWorkbenchTool: (tool) => set({ activeWorkbenchTool: tool }),
      setActiveShaderStudioTab: (tab) => set({ activeShaderStudioTab: tab }),
      setActiveInspectTab: (tab) => set({ activeInspectTab: tab }),
      toggleGpuMetrics: () => set((state) => ({ showGpuMetrics: !state.showGpuMetrics })),
      toggleReduceMotion: () => set((state) => ({ reduceMotion: !state.reduceMotion })),
      toggleHighDensity: () => set((state) => ({ highDensity: !state.highDensity })),
      toggleMinimap: () => set((state) => ({ minimap: !state.minimap })),
      toggleAutosave: () => set((state) => ({ autosave: !state.autosave }))
    }),
    {
      name: "webgpu-lab-ui-v1",
      version: 1,
      partialize: (state) => ({
        activePanel: state.activePanel,
        sidebarOpen: state.sidebarOpen,
        sidebarMode: state.sidebarMode,
        splitDirection: state.splitDirection,
        activeWorkbenchTool: state.activeWorkbenchTool,
        activeShaderStudioTab: state.activeShaderStudioTab,
        activeInspectTab: state.activeInspectTab,
        showGpuMetrics: state.showGpuMetrics,
        reduceMotion: state.reduceMotion,
        highDensity: state.highDensity,
        minimap: state.minimap,
        autosave: state.autosave
      })
    }
  )
);
