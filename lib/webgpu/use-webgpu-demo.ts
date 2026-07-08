"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { initTriangleDemo, type ShapeId, type ShaderOverrides } from "./triangle-demo";
import type { RenderStats } from "./types";

export type DemoState =
  | { status: "initial" }
  | { status: "loading" }
  | { status: "ready" }
  | { status: "error"; message: string }
  | { status: "unsupported"; message: string };

export function useWebGpuDemo(shapeId: ShapeId, shaders?: ShaderOverrides, demoRevision = 0) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const [state, setState] = useState<DemoState>({ status: "initial" });
  const setShapeRef = useRef<((shapeId: ShapeId, shaders?: ShaderOverrides) => Promise<void>) | null>(null);
  const setShadersRef = useRef<((shapeId: ShapeId, shaders: ShaderOverrides) => Promise<void>) | null>(null);
  const getStatsRef = useRef<(() => RenderStats) | null>(null);
  const cleanupRef = useRef<(() => void) | null>(null);
  const shaderKey = shaders ? `${shaders.vertexShader ?? ""}::${shaders.fragmentShader ?? ""}` : "";

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      if (!canvasRef.current) return;
      setState({ status: "loading" });

      const result = await initTriangleDemo(canvasRef.current, titleRef.current);

      if (cancelled) {
        if (result.status === "ready") result.cleanup();
        return;
      }

      if (result.status === "ready") {
        cleanupRef.current = result.cleanup;
        setShapeRef.current = result.setShape;
        setShadersRef.current = result.setShaders;
        getStatsRef.current = result.getStats;
        void result.setShape(shapeId, shaders);
        setState({ status: "ready" });
      } else {
        setState({ status: result.status, message: result.message });
      }
    };

    void run();

    return () => {
      cancelled = true;
      cleanupRef.current?.();
      cleanupRef.current = null;
      setShapeRef.current = null;
      setShadersRef.current = null;
      getStatsRef.current = null;
    };
    // Run once on mount; shape and shader updates are handled below.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    void setShapeRef.current?.(shapeId, shaders);
    if (shaders) {
      void setShadersRef.current?.(shapeId, shaders);
    }
    // Shader identity is tracked via shaderKey; full object identity would over-trigger re-runs.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shapeId, shaderKey, demoRevision]);

  const applyShaders = useCallback((overrides: ShaderOverrides) => {
    void setShadersRef.current?.(shapeId, overrides);
  }, [shapeId]);

  return { canvasRef, titleRef, state, applyShaders, getStats: () => getStatsRef.current?.() ?? { drawCalls: 0, vertices: 0, triangles: 0 } };
}
