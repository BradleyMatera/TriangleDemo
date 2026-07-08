"use client";

import { useCallback } from "react";

export interface WgslValidationResult {
  valid: boolean;
  message?: string;
}

export function useWgslValidator() {
  const validate = useCallback(async (code: string): Promise<WgslValidationResult> => {
    if (!code.trim()) {
      return { valid: false, message: "Shader code is empty." };
    }

    if (typeof navigator === "undefined" || !("gpu" in navigator)) {
      return { valid: false, message: "WebGPU is not available to validate WGSL." };
    }

    try {
      const adapter = await navigator.gpu.requestAdapter();
      if (!adapter) {
        return { valid: false, message: "No WebGPU adapter available." };
      }

      const device = await adapter.requestDevice();
      const shaderModule = device.createShaderModule({ code });
      const info = await shaderModule.getCompilationInfo();

      if (info.messages.length > 0) {
        const errors = info.messages.filter((m) => m.type === "error");
        if (errors.length > 0) {
          const first = errors[0];
          return {
            valid: false,
            message: `${first.message} (line ${first.lineNum}, col ${first.linePos})`
          };
        }

        const warnings = info.messages.filter((m) => m.type === "warning");
        if (warnings.length > 0) {
          return { valid: true, message: `${warnings.length} warning(s) found.` };
        }
      }

      return { valid: true };
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown validation error.";
      return { valid: false, message };
    }
  }, []);

  return { validate };
}
