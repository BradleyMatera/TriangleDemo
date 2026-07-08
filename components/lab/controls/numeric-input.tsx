"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface NumericInputProps {
  label?: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  precision?: number;
  className?: string;
  id?: string;
}

export function NumericInput({
  label,
  value,
  onChange,
  min = -Infinity,
  max = Infinity,
  step = 1,
  precision = 2,
  className,
  id
}: NumericInputProps) {
  const [displayValue, setDisplayValue] = useState(value.toString());
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Update display value when prop changes, but only if not focused
  useEffect(() => {
    if (!isFocused) {
      setDisplayValue(value.toFixed(precision));
    }
  }, [value, precision, isFocused]);
  
  // Handle input change
  const handleChange = useCallback((newValue: string) => {
    setDisplayValue(newValue);
    
    const numValue = parseFloat(newValue);
    if (!isNaN(numValue)) {
      // Clamp value to min/max
      const clampedValue = Math.min(Math.max(numValue, min), max);
      onChange(clampedValue);
    }
  }, [min, max, onChange]);
  
  // Handle blur
  const handleBlur = useCallback(() => {
    setIsFocused(false);
    // Ensure value is properly formatted on blur
    setDisplayValue(value.toFixed(precision));
  }, [value, precision]);
  
  // Handle focus
  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);
  
  // Handle increment
  const handleIncrement = useCallback(() => {
    const newValue = Math.min(value + step, max);
    onChange(newValue);
  }, [value, step, max, onChange]);
  
  // Handle decrement
  const handleDecrement = useCallback(() => {
    const newValue = Math.max(value - step, min);
    onChange(newValue);
  }, [value, step, min, onChange]);
  
  // Handle keyboard shortcuts
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      handleIncrement();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      handleDecrement();
    }
  }, [handleIncrement, handleDecrement]);
  
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      {label && (
        <label 
          htmlFor={id} 
          className="text-xs font-medium text-gray-300 uppercase tracking-wide"
        >
          {label}
        </label>
      )}
      
      <div className="flex items-center rounded-lg border border-white/10 bg-white/[0.04] overflow-hidden">
        <input
          ref={inputRef}
          id={id}
          type="text"
          inputMode="decimal"
          value={displayValue}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent px-2 py-1.5 text-[11px] font-mono text-white focus:outline-none focus:bg-white/[0.04] min-w-0 w-full"
        />
        
        <div className="flex flex-col border-l border-white/10">
          <motion.button
            type="button"
            whileTap={{ scale: 0.85 }}
            onClick={handleIncrement}
            className="px-1.5 py-0.5 hover:bg-white/10 border-b border-white/10 transition-colors"
            aria-label="Increment value"
          >
            <Plus size={10} className="text-slate-400" />
          </motion.button>
          <motion.button
            type="button"
            whileTap={{ scale: 0.85 }}
            onClick={handleDecrement}
            className="px-1.5 py-0.5 hover:bg-white/10 transition-colors"
            aria-label="Decrement value"
          >
            <Minus size={10} className="text-slate-400" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}