import { create } from "zustand";

export interface CameraState {
  orbitX: number;
  orbitY: number;
  panX: number;
  panY: number;
  zoom: number;
  setOrbit: (x: number, y: number) => void;
  setPan: (x: number, y: number) => void;
  setZoom: (zoom: number) => void;
  reset: () => void;
}

export const useCameraStore = create<CameraState>((set) => ({
  orbitX: 0,
  orbitY: 0,
  panX: 0,
  panY: 0,
  zoom: 1,
  setOrbit: (x, y) => set({ orbitX: x, orbitY: y }),
  setPan: (x, y) => set({ panX: x, panY: y }),
  setZoom: (zoom) => set({ zoom }),
  reset: () => set({ orbitX: 0, orbitY: 0, panX: 0, panY: 0, zoom: 1 })
}));
