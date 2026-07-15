import { create } from "zustand";

export type DemoRuntimeStatus =
  | { type: "initial" }
  | { type: "loading" }
  | { type: "ready" }
  | { type: "unsupported"; message: string }
  | { type: "error"; message: string };

export interface GpuMetrics {
  fps: number;
  frameTime: number;
  cpuTime: number;
  gpuTime: number;
  drawCalls: number;
  memoryMB: number;
  vertices: number;
  triangles: number;
  buffers: number;
  textures: number;
  framePulse: number;
}

interface MetricsState {
  metrics: GpuMetrics;
  demoStatus: DemoRuntimeStatus;
  updateMetrics: (patch: Partial<GpuMetrics>) => void;
  setDemoStatus: (status: DemoRuntimeStatus) => void;
  pulseFrame: () => void;
}

export const useMetricsStore = create<MetricsState>((set) => ({
  metrics: {
    fps: 0,
    frameTime: 0,
    cpuTime: 0,
    gpuTime: 0,
    drawCalls: 0,
    memoryMB: 0,
    vertices: 0,
    triangles: 0,
    buffers: 0,
    textures: 0,
    framePulse: 0
  },
  demoStatus: { type: "initial" },
  updateMetrics: (patch) =>
    set((state) => ({ metrics: { ...state.metrics, ...patch } })),
  setDemoStatus: (status) => set({ demoStatus: status }),
  pulseFrame: () =>
    set((state) => ({
      metrics: { ...state.metrics, framePulse: state.metrics.framePulse + 1 }
    }))
}));
