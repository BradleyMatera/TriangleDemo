"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ResizableSplitPaneProps {
  leftPane: React.ReactNode;
  rightPane: React.ReactNode;
  className?: string;
  defaultLeftWidth?: number; // percentage 0-100
  minLeftWidth?: number; // percentage
  maxLeftWidth?: number; // percentage
  direction?: "horizontal" | "vertical";
}

export function ResizableSplitPane({
  leftPane,
  rightPane,
  className,
  defaultLeftWidth = 50,
  minLeftWidth = 20,
  maxLeftWidth = 80,
  direction = "horizontal"
}: ResizableSplitPaneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [leftWidth, setLeftWidth] = useState(defaultLeftWidth);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
  }, []);

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      let clientX: number;
      let clientY: number;
      
      if (e instanceof MouseEvent) {
        clientX = e.clientX;
        clientY = e.clientY;
      } else {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      }

      let newSize: number;
      if (direction === "horizontal") {
        newSize = ((clientX - rect.left) / rect.width) * 100;
      } else {
        newSize = ((clientY - rect.top) / rect.height) * 100;
      }
      newSize = Math.max(minLeftWidth, Math.min(maxLeftWidth, newSize));
      setLeftWidth(newSize);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleMouseMove, { passive: false });
    window.addEventListener("touchend", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleMouseMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, direction, minLeftWidth, maxLeftWidth]);

  const isHorizontal = direction === "horizontal";

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex h-full w-full select-none",
        isHorizontal ? "flex-row" : "flex-col",
        className
      )}
    >
      <div
        className="flex min-h-0 flex-col overflow-hidden"
        style={isHorizontal ? { width: `${leftWidth}%` } : { height: `${leftWidth}%` }}
      >
        {leftPane}
      </div>

      {/* Resize handle */}
      <div
        className={cn(
          "flex shrink-0 items-center justify-center bg-white/5 transition-colors hover:bg-brand/20 cursor-grab active:cursor-grabbing",
          isDragging && "bg-brand/30",
          isHorizontal ? "w-2 flex-col" : "h-2 flex-row"
        )}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div
          className={cn(
            "rounded-full bg-slate-500",
            isHorizontal ? "h-8 w-0.5" : "h-0.5 w-8"
          )}
        />
      </div>

      <div
        className="flex min-h-0 flex-1 flex-col overflow-hidden"
      >
        {rightPane}
      </div>
    </div>
  );
}
