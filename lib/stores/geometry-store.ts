import { create } from "zustand";
import { persist } from "zustand/middleware";

export type GeometryShapeId =
  | "triangle"
  | "quad"
  | "cube"
  | "sphere"
  | "plane"
  | "cylinder"
  | "cone"
  | "torus"
  | "monkey"
  | "bunny";

export type GeometryTransformMode = "rotate" | "translate" | "scale" | "subdivide";

export type GeometryDebugFlags = {
  wireframe: boolean;
  normals: boolean;
};

interface GeometryState {
  selectedShape: GeometryShapeId;
  activeTransform: GeometryTransformMode;
  rotation: { x: number; y: number; z: number };
  translation: { x: number; y: number; z: number };
  scale: number;
  subdivisions: number;
  debug: GeometryDebugFlags;
  revision: number;
  setSelectedShape: (shape: GeometryShapeId) => void;
  setActiveTransform: (mode: GeometryTransformMode) => void;
  setRotationAxis: (axis: "x" | "y" | "z", value: number) => void;
  setTranslationAxis: (axis: "x" | "y" | "z", value: number) => void;
  setScale: (value: number) => void;
  setSubdivisions: (value: number) => void;
  toggleDebug: (id: keyof GeometryDebugFlags) => void;
  reset: () => void;
}

const initialGeometry = {
  selectedShape: "triangle" as GeometryShapeId,
  activeTransform: "rotate" as GeometryTransformMode,
  rotation: { x: 0, y: 0, z: 0 },
  translation: { x: 0, y: 0, z: 0 },
  scale: 1,
  subdivisions: 0,
  debug: { wireframe: false, normals: false },
  revision: 0
};

export const useGeometryStore = create<GeometryState>()(
  persist(
    (set) => ({
      ...initialGeometry,
      setSelectedShape: (shape) =>
        set((state) => ({
          selectedShape: shape,
          revision: state.revision + 1
        })),
      setActiveTransform: (mode) => set({ activeTransform: mode }),
      setRotationAxis: (axis, value) =>
        set((state) => ({
          rotation: { ...state.rotation, [axis]: value }
        })),
      setTranslationAxis: (axis, value) =>
        set((state) => ({
          translation: { ...state.translation, [axis]: value }
        })),
      setScale: (value) => set({ scale: value }),
      setSubdivisions: (value) =>
        set((state) => ({
          subdivisions: value,
          revision: state.revision + 1
        })),
      toggleDebug: (id) =>
        set((state) => ({
          debug: { ...state.debug, [id]: !state.debug[id] }
        })),
      reset: () =>
        set((state) => ({
          ...initialGeometry,
          selectedShape: state.selectedShape,
          revision: state.revision + 1
        }))
    }),
    {
      name: "webgpu-lab-geometry-v1",
      version: 1,
      partialize: (state) => ({
        selectedShape: state.selectedShape,
        activeTransform: state.activeTransform,
        rotation: state.rotation,
        translation: state.translation,
        scale: state.scale,
        subdivisions: state.subdivisions,
        debug: state.debug,
        revision: state.revision
      })
    }
  )
);
