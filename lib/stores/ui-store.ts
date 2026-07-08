import { create } from "zustand";
import { persist } from "zustand/middleware";

export type PanelId =
  | "editor"
  | "lessons"
  | "pipeline"
  | "shaders"
  | "geometry"
  | "matrices"
  | "lighting"
  | "textures"
  | "performance"
  | "playground"
  | "examples"
  | "documentation";

export type SidebarMode = "lessons" | "bookmarks" | "shortcuts" | "profile" | "settings";

export interface CommandPaletteItem {
  id: string;
  label: string;
  shortcut?: string;
  action: () => void;
}

interface UiState {
  activePanel: PanelId;
  sidebarOpen: boolean;
  sidebarMode: SidebarMode;
  commandPaletteOpen: boolean;
  showGpuMetrics: boolean;
  reduceMotion: boolean;
  highDensity: boolean;
  minimap: boolean;
  autosave: boolean;
  toggleSidebar: () => void;
  setSidebarMode: (mode: SidebarMode) => void;
  setActivePanel: (panel: PanelId) => void;
  openCommandPalette: () => void;
  closeCommandPalette: () => void;
  toggleGpuMetrics: () => void;
  toggleReduceMotion: () => void;
  toggleHighDensity: () => void;
  toggleMinimap: () => void;
  toggleAutosave: () => void;
}

export const useUiStore = create<UiState>()(
  persist(
    (set) => ({
      activePanel: "lessons",
      sidebarOpen: true,
      sidebarMode: "lessons",
      commandPaletteOpen: false,
      showGpuMetrics: true,
      reduceMotion: false,
      highDensity: false,
      minimap: true,
      autosave: false,
      toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
      setSidebarMode: (mode) => set({ sidebarMode: mode }),
      setActivePanel: (panel) => set({ activePanel: panel }),
      openCommandPalette: () => set({ commandPaletteOpen: true }),
      closeCommandPalette: () => set({ commandPaletteOpen: false }),
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
        showGpuMetrics: state.showGpuMetrics,
        reduceMotion: state.reduceMotion,
        highDensity: state.highDensity,
        minimap: state.minimap,
        autosave: state.autosave
      })
    }
  )
);
