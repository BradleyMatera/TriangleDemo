"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Box, Circle, Cone, Cuboid, Cylinder, Hexagon, Pentagon, Square, Triangle } from "lucide-react";
import { cn } from "@/lib/utils";

const shapes = [
  { id: "triangle", name: "Triangle", icon: Triangle },
  { id: "quad", name: "Quad", icon: Square },
  { id: "cube", name: "Cube", icon: Cuboid },
  { id: "sphere", name: "Sphere", icon: Circle },
  { id: "plane", name: "Plane", icon: Square },
  { id: "cylinder", name: "Cylinder", icon: Cylinder },
  { id: "cone", name: "Cone", icon: Cone },
  { id: "torus", name: "Torus", icon: Hexagon }
];

export function GeometryLabPanel() {
  const [active, setActive] = useState("triangle");

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B0C15]/80 p-5 shadow-card">
      <div className="mb-4">
        <span className="text-[10px] uppercase tracking-[0.3em] text-brand-subtle">Geometry Lab</span>
        <h2 className="mt-1 font-display text-lg font-semibold text-white">Interactive Geometry</h2>
        <p className="text-xs text-slate-400">Select a shape and inspect its topology.</p>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {shapes.map((shape) => {
          const Icon = shape.icon;
          const isActive = active === shape.id;
          return (
            <button
              key={shape.id}
              onClick={() => setActive(shape.id)}
              className={cn(
                "flex flex-col items-center gap-2 rounded-xl border p-3 text-xs transition-all",
                isActive
                  ? "border-brand/50 bg-brand/15 text-white"
                  : "border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-slate-200"
              )}
            >
              <Icon className="size-5" />
              {shape.name}
            </button>
          );
        })}
      </div>

      <motion.div
        key={active}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-4 flex flex-1 flex-col rounded-xl border border-white/10 bg-slate-950/50 p-4"
      >
        <div className="flex-1 rounded-lg border border-dashed border-white/10 bg-white/5" />
        <div className="mt-3 grid grid-cols-3 gap-2 text-center text-[11px] text-slate-400">
          <div className="rounded-lg bg-white/5 p-2">
            <div className="font-display text-sm text-white">Vertices</div>
            <div>--</div>
          </div>
          <div className="rounded-lg bg-white/5 p-2">
            <div className="font-display text-sm text-white">Triangles</div>
            <div>--</div>
          </div>
          <div className="rounded-lg bg-white/5 p-2">
            <div className="font-display text-sm text-white">Indices</div>
            <div>--</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
