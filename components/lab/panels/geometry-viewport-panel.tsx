"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Vector3 } from "three";
import { TransformGizmo } from "@/components/lab/controls/transform-gizmo";
import { NumericInput } from "@/components/lab/controls/numeric-input";
import { useGeometryStore } from "@/lib/stores/geometry-store";
import { cn } from "@/lib/utils";
import type { ShapeId } from "@/lib/webgpu/triangle-demo";

interface GeometryViewportPanelProps {
  shapeId: ShapeId;
  className?: string;
}

export function GeometryViewportPanel({
  shapeId,
  className
}: GeometryViewportPanelProps) {
  const {
    rotation,
    translation,
    scale,
    subdivisions,
    debug,
    setRotationAxis,
    setTranslationAxis,
    setScale,
    setSubdivisions,
    toggleDebug
  } = useGeometryStore();
  
  const [transform, setTransform] = useState({
    position: new Vector3(translation.x, translation.y, translation.z),
    rotation: new Vector3(rotation.x, rotation.y, rotation.z),
    scale: new Vector3(scale, scale, scale)
  });
  
  const [isGizmoActive, setIsGizmoActive] = useState(false);
  
  // Update transform when store changes
  useEffect(() => {
    setTransform({
      position: new Vector3(translation.x, translation.y, translation.z),
      rotation: new Vector3(rotation.x, rotation.y, rotation.z),
      scale: new Vector3(scale, scale, scale)
    });
  }, [translation.x, translation.y, translation.z, rotation.x, rotation.y, rotation.z, scale]);
  
  // Handle transform changes from gizmo
  const handleTransformChange = (newTransform: {
    position: Vector3;
    rotation: Vector3;
    scale: Vector3;
  }) => {
    // Update store with new values
    setTranslationAxis("x", newTransform.position.x);
    setTranslationAxis("y", newTransform.position.y);
    setTranslationAxis("z", newTransform.position.z);
    
    setRotationAxis("x", newTransform.rotation.x);
    setRotationAxis("y", newTransform.rotation.y);
    setRotationAxis("z", newTransform.rotation.z);
    
    // For uniform scale, use average of components
    const avgScale = (newTransform.scale.x + newTransform.scale.y + newTransform.scale.z) / 3;
    setScale(avgScale);
  };
  
  return (
    <div className={cn("relative w-full h-full bg-gray-900/50", className)}>
      {/* Viewport Canvas Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full bg-gradient-to-br from-gray-800/30 to-gray-900/50 border border-gray-700/50 rounded-lg overflow-hidden">
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6Ii8+PHBhdGggZD0iTTAgMTBoNDBNNDAgMjBIMCIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utb3BhY2l0eT0iLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvZz48L3N2Zz4=')] bg-[length:40px_40px]" />
          
          {/* Shape Preview */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-xl font-bold text-blue-400 capitalize">
                  {shapeId}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  Interactive Preview
                </div>
              </div>
            </div>
          </div>
          
          {/* Transform Gizmo */}
          <TransformGizmo
            position={transform.position}
            rotation={transform.rotation}
            scale={transform.scale}
            onTransformChange={handleTransformChange}
            isActive={isGizmoActive}
          />
          
          {/* Viewport Controls Overlay */}
          <div className="absolute top-4 right-4 flex gap-2">
            <button
              className={cn(
                "px-3 py-1 text-xs rounded-md bg-black/50 border",
                isGizmoActive 
                  ? "border-blue-500 text-blue-400" 
                  : "border-gray-700 text-gray-400"
              )}
              onClick={() => setIsGizmoActive(!isGizmoActive)}
            >
              {isGizmoActive ? "Disable Gizmo" : "Enable Gizmo"}
            </button>
          </div>
        </div>
      </div>
      
      {/* Transform Controls Panel */}
      <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm border border-gray-700 rounded-lg p-4">
        <div className="grid grid-cols-3 gap-4">
          {/* Position Controls */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-300">Position</h3>
            <div className="grid grid-cols-3 gap-2">
              <NumericInput
                label="X"
                value={translation.x}
                onChange={(v) => setTranslationAxis("x", v)}
                step={0.1}
                precision={2}
              />
              <NumericInput
                label="Y"
                value={translation.y}
                onChange={(v) => setTranslationAxis("y", v)}
                step={0.1}
                precision={2}
              />
              <NumericInput
                label="Z"
                value={translation.z}
                onChange={(v) => setTranslationAxis("z", v)}
                step={0.1}
                precision={2}
              />
            </div>
          </div>
          
          {/* Rotation Controls */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-300">Rotation</h3>
            <div className="grid grid-cols-3 gap-2">
              <NumericInput
                label="X"
                value={rotation.x}
                onChange={(v) => setRotationAxis("x", v)}
                min={-360}
                max={360}
                step={5}
              />
              <NumericInput
                label="Y"
                value={rotation.y}
                onChange={(v) => setRotationAxis("y", v)}
                min={-360}
                max={360}
                step={5}
              />
              <NumericInput
                label="Z"
                value={rotation.z}
                onChange={(v) => setRotationAxis("z", v)}
                min={-360}
                max={360}
                step={5}
              />
            </div>
          </div>
          
          {/* Scale Controls */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-300">Scale</h3>
            <NumericInput
              label="Uniform"
              value={scale}
              onChange={setScale}
              min={0.1}
              max={10}
              step={0.1}
              precision={2}
            />
          </div>
        </div>
        
        {/* Subdivision and Debug Controls */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-300">Subdivisions</label>
              <NumericInput
                value={subdivisions}
                onChange={setSubdivisions}
                min={0}
                max={10}
                step={1}
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="wireframe-toggle"
                checked={debug.wireframe}
                onChange={() => toggleDebug("wireframe")}
                className="rounded bg-gray-800 border-gray-700 text-blue-500 focus:ring-blue-500"
              />
              <label htmlFor="wireframe-toggle" className="text-sm text-gray-300">
                Wireframe
              </label>
            </div>
            
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="normals-toggle"
                checked={debug.normals}
                onChange={() => toggleDebug("normals")}
                className="rounded bg-gray-800 border-gray-700 text-blue-500 focus:ring-blue-500"
              />
              <label htmlFor="normals-toggle" className="text-sm text-gray-300">
                Normals
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}