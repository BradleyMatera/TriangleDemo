import { create } from "zustand";

export type PanelId = 
  | "editor"
  | "lessons"
  | "pipeline"
  | "shaders"
  | "geometry"
  | "lighting"
  | "textures"
  | "performance"
  | "playground"
  | "examples"
  | "documentation";

export type SidebarMode = "lessons" | "bookmarks" | "settings";

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
  toggleSidebar: () => void;
  setSidebarMode: (mode: SidebarMode) => void;
  setActivePanel: (panel: PanelId) => void;
  openCommandPalette: () => void;
  closeCommandPalette: () => void;
  toggleGpuMetrics: () => void;
  toggleReduceMotion: () => void;
}

export const useUiStore = create<UiState>((set) => ({
  activePanel: "lessons",
  sidebarOpen: true,
  sidebarMode: "lessons",
  commandPaletteOpen: false,
  showGpuMetrics: true,
  reduceMotion: false,
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setSidebarMode: (mode) => set({ sidebarMode: mode }),
  setActivePanel: (panel) => set({ activePanel: panel }),
  openCommandPalette: () => set({ commandPaletteOpen: true }),
  closeCommandPalette: () => set({ commandPaletteOpen: false }),
  toggleGpuMetrics: () => set((state) => ({ showGpuMetrics: !state.showGpuMetrics })),
  toggleReduceMotion: () => set((state) => ({ reduceMotion: !state.reduceMotion }))
}));
