import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type StatusTone = "neutral" | "success" | "warning" | "danger" | "brand";

const toneClass: Record<StatusTone, string> = {
  neutral: "border-white/10 bg-white/5 text-slate-300",
  success: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
  warning: "border-amber-400/20 bg-amber-400/10 text-amber-300",
  danger: "border-rose-400/20 bg-rose-400/10 text-rose-300",
  brand: "border-brand/20 bg-brand/10 text-brand-subtle"
};

export function StatusPill({
  children,
  tone = "neutral",
  className
}: {
  children: ReactNode;
  tone?: StatusTone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[10px] font-semibold",
        toneClass[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
