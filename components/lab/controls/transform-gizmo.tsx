"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useMotionValue, useTransform, motion } from "framer-motion";
import { Vector3 } from "three";
import { cn } from "@/lib/utils";

interface TransformGizmoProps {
  position?: Vector3;
  rotation?: Vector3;
  scale?: Vector3;
  onTransformChange?: (transform: {
    position: Vector3;
    rotation: Vector3;
    scale: Vector3;
  }) => void;
  isActive?: boolean;
  className?: string;
}

export function TransformGizmo({
  position = new Vector3(0, 0, 0),
  rotation = new Vector3(0, 0, 0),
  scale = new Vector3(1, 1, 1),
  onTransformChange,
  isActive = false,
  className
}: TransformGizmoProps) {
  const [mode, setMode] = useState<"translate" | "rotate" | "scale">("translate");
  const [isDragging, setIsDragging] = useState(false);
  const gizmoRef = useRef<HTMLDivElement>(null);
  
  // Motion values for smooth animations
  const posX = useMotionValue(position.x);
  const posY = useMotionValue(position.y);
  const posZ = useMotionValue(position.z);
  
  const rotX = useMotionValue(rotation.x);
  const rotY = useMotionValue(rotation.y);
  const rotZ = useMotionValue(rotation.z);
  
  const scaleX = useMotionValue(scale.x);
  const scaleY = useMotionValue(scale.y);
  const scaleZ = useMotionValue(scale.z);
  
  // Transform colors
  const xColor = isActive ? "#ff3333" : "#888888";
  const yColor = isActive ? "#33ff33" : "#888888";
  const zColor = isActive ? "#3333ff" : "#888888";
  
  // Handle drag start
  const handleDragStart = useCallback(() => {
    setIsDragging(true);
  }, []);
  
  // Handle drag end
  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
    // Notify parent of transform change
    onTransformChange?.({
      position: new Vector3(posX.get(), posY.get(), posZ.get()),
      rotation: new Vector3(rotX.get(), rotY.get(), rotZ.get()),
      scale: new Vector3(scaleX.get(), scaleY.get(), scaleZ.get())
    });
  }, [onTransformChange, posX, posY, posZ, rotX, rotY, rotZ, scaleX, scaleY, scaleZ]);
  
  // Update motion values when props change
  useEffect(() => {
    posX.set(position.x);
    posY.set(position.y);
    posZ.set(position.z);
  }, [position, posX, posY, posZ]);
  
  useEffect(() => {
    rotX.set(rotation.x);
    rotY.set(rotation.y);
    rotZ.set(rotation.z);
  }, [rotation, rotX, rotY, rotZ]);
  
  useEffect(() => {
    scaleX.set(scale.x);
    scaleY.set(scale.y);
    scaleZ.set(scale.z);
  }, [scale, scaleX, scaleY, scaleZ]);
  
  return (
    <div 
      ref={gizmoRef}
      className={cn("absolute inset-0 pointer-events-none", className)}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Translate Gizmo */}
      {mode === "translate" && (
        <>
          {/* X Axis - Red */}
          <motion.div
            className="absolute h-0.5 w-16 bg-red-500 cursor-pointer pointer-events-auto"
            style={{ 
              originX: 0,
              transform: `translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)`
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.05 }}
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            dragElastic={0.1}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDrag={(event, info) => {
              posX.set(position.x + info.offset.x * 0.1);
            }}
          >
            <div className="absolute -right-2 -top-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-bold">X</span>
            </div>
          </motion.div>
          
          {/* Y Axis - Green */}
          <motion.div
            className="absolute w-0.5 h-16 bg-green-500 cursor-pointer pointer-events-auto"
            style={{ 
              originY: 0,
              transform: `translate3d(0, 0, 0) rotateX(90deg)`
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.05 }}
            drag="y"
            dragConstraints={{ top: -100, bottom: 100 }}
            dragElastic={0.1}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDrag={(event, info) => {
              posY.set(position.y + info.offset.y * 0.1);
            }}
          >
            <div className="absolute -top-2 -left-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-bold">Y</span>
            </div>
          </motion.div>
          
          {/* Z Axis - Blue */}
          <motion.div
            className="absolute w-0.5 h-16 bg-blue-500 cursor-pointer pointer-events-auto"
            style={{ 
              originY: 0,
              transform: `translate3d(0, 0, 0) rotateX(0deg) rotateY(90deg)`
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.05 }}
            drag="y"
            dragConstraints={{ top: -100, bottom: 100 }}
            dragElastic={0.1}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDrag={(event, info) => {
              posZ.set(position.z + info.offset.y * 0.1);
            }}
          >
            <div className="absolute -top-2 -left-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-bold">Z</span>
            </div>
          </motion.div>
        </>
      )}
      
      {/* Rotate Gizmo */}
      {mode === "rotate" && (
        <>
          {/* X Ring */}
          <motion.div
            className="absolute w-12 h-12 rounded-full border-2 border-red-500 cursor-pointer pointer-events-auto"
            style={{ 
              transform: `translate3d(-50%, -50%, 0) rotateY(90deg) rotateX(0deg)`
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.05 }}
          />
          
          {/* Y Ring */}
          <motion.div
            className="absolute w-12 h-12 rounded-full border-2 border-green-500 cursor-pointer pointer-events-auto"
            style={{ 
              transform: `translate3d(-50%, -50%, 0) rotateX(90deg)`
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.05 }}
          />
          
          {/* Z Ring */}
          <motion.div
            className="absolute w-12 h-12 rounded-full border-2 border-blue-500 cursor-pointer pointer-events-auto"
            style={{ 
              transform: `translate3d(-50%, -50%, 0) rotateY(0deg)`
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.05 }}
          />
        </>
      )}
      
      {/* Scale Gizmo */}
      {mode === "scale" && (
        <>
          {/* Uniform Scale Handle */}
          <motion.div
            className="absolute w-4 h-4 bg-purple-500 rounded-full cursor-pointer pointer-events-auto"
            style={{ 
              transform: `translate3d(-50%, -50%, 0)`
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            drag
            dragConstraints={{ 
              left: -50, 
              right: 50, 
              top: -50, 
              bottom: 50 
            }}
            dragElastic={0.1}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDrag={(event, info) => {
              const uniformScale = 1 + info.offset.x * 0.01;
              scaleX.set(scale.x * uniformScale);
              scaleY.set(scale.y * uniformScale);
              scaleZ.set(scale.z * uniformScale);
            }}
          />
        </>
      )}
      
      {/* Mode Toggle */}
      <div className="absolute -bottom-8 left-0 flex gap-1 bg-black/50 rounded-md p-1">
        <button
          className={cn(
            "px-2 py-1 text-xs rounded",
            mode === "translate" ? "bg-blue-500 text-white" : "text-gray-300"
          )}
          onClick={() => setMode("translate")}
        >
          Move
        </button>
        <button
          className={cn(
            "px-2 py-1 text-xs rounded",
            mode === "rotate" ? "bg-blue-500 text-white" : "text-gray-300"
          )}
          onClick={() => setMode("rotate")}
        >
          Rotate
        </button>
        <button
          className={cn(
            "px-2 py-1 text-xs rounded",
            mode === "scale" ? "bg-blue-500 text-white" : "text-gray-300"
          )}
          onClick={() => setMode("scale")}
        >
          Scale
        </button>
      </div>
    </div>
  );
}