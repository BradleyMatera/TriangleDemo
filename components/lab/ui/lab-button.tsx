import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type LabButtonVariant = "ghost" | "primary" | "soft" | "danger";

export function LabButton({
  className,
  variant = "ghost",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: LabButtonVariant;
}) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 disabled:pointer-events-none disabled:opacity-50",
        variant === "ghost" && "text-slate-300 hover:bg-white/10 hover:text-white",
        variant === "soft" && "border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10",
        variant === "primary" && "bg-brand text-white shadow-glow hover:bg-brand-accent",
        variant === "danger" && "bg-rose-500/15 text-rose-200 hover:bg-rose-500/25",
        className
      )}
    />
  );
}
