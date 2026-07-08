import type { ReactNode } from "react";
import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function EmptyState({
  title,
  description,
  action,
  className
}: {
  title: string;
  description: string;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-slate-950/70 p-6 text-center",
        className
      )}
    >
      <AlertCircle className="size-8 text-cyan-300" />
      <div>
        <h3 className="font-display text-sm font-semibold text-white">{title}</h3>
        <p className="mt-1 max-w-sm text-xs leading-relaxed text-slate-400">{description}</p>
      </div>
      {action}
    </div>
  );
}
