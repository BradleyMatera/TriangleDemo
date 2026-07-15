"use client";

import { useState, useEffect, useMemo } from "react";
import type { SplitDirection } from "@/lib/stores/ui-store";

function isVerticalFavored(width: number, height: number) {
  return width < 1024 || height > width * 1.1;
}

export function useEffectiveSplitDirection(direction: SplitDirection) {
  const [size, setSize] = useState({ width: 1280, height: 720 });

  useEffect(() => {
    const update = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return useMemo(() => {
    if (direction === "horizontal" || direction === "vertical") return direction;
    return isVerticalFavored(size.width, size.height) ? "vertical" : "horizontal";
  }, [direction, size.width, size.height]);
}
