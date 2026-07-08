"use client";

import { useEffect, useRef, useState } from "react";

export interface GpuMetrics {
  fps: number;
  frameTime: number;
  drawCalls: number;
  triangles: number;
  vertices: number;
}

export function useGpuMetrics(enabled: boolean) {
  const [metrics, setMetrics] = useState<GpuMetrics>({
    fps: 0,
    frameTime: 0,
    drawCalls: 0,
    triangles: 0,
    vertices: 0
  });
  const frameRef = useRef(0);
  const lastRef = useRef(0);

  useEffect(() => {
    if (!enabled) return;

    let animationFrame: number;
    lastRef.current = performance.now();

    const tick = () => {
      const now = performance.now();
      const delta = now - lastRef.current;
      frameRef.current += 1;

      if (delta >= 500) {
        const frameCount = Math.max(frameRef.current, 1);
        const fps = Math.round((frameCount * 1000) / delta);
        const frameTime = Number((delta / frameCount).toFixed(2));
        setMetrics((prev) => ({
          ...prev,
          fps,
          frameTime: Number.isFinite(frameTime) ? frameTime : 0
        }));
        frameRef.current = 0;
        lastRef.current = now;
      }

      animationFrame = requestAnimationFrame(tick);
    };

    animationFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrame);
  }, [enabled]);

  const updateDrawStats = (drawCalls: number, vertices: number, triangles: number) => {
    setMetrics((prev) => ({ ...prev, drawCalls, vertices, triangles }));
  };

  return { metrics, updateDrawStats };
}
