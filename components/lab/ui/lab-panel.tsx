import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function LabPanel({
  children,
  className,
  labelledBy
}: {
  children: ReactNode;
  className?: string;
  labelledBy?: string;
}) {
  return (
    <section
      aria-labelledby={labelledBy}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-[#0B0C15]/80 shadow-card backdrop-blur-xl",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
      {children}
    </section>
  );
}

export function LabPanelHeader({
  eyebrow,
  title,
  actions,
  id,
  children
}: {
  eyebrow?: string;
  title: string;
  actions?: ReactNode;
  id?: string;
  children?: ReactNode;
}) {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3">
      <div className="min-w-0">
        {eyebrow ? (
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-subtle">
            {eyebrow}
          </span>
        ) : null}
        <h2 id={id} className="truncate font-display text-base font-semibold text-white">
          {title}
        </h2>
        {children}
      </div>
      {actions ? <div className="shrink-0">{actions}</div> : null}
    </header>
  );
}
