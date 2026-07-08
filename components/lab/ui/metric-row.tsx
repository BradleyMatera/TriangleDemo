import { cn } from "@/lib/utils";

export function MetricRow({
  label,
  value,
  hint,
  className
}: {
  label: string;
  value: string;
  hint?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-start justify-between gap-3 text-xs", className)}>
      <div className="min-w-0">
        <div className="text-slate-500">{label}</div>
        {hint ? <div className="mt-0.5 text-[10px] text-slate-600">{hint}</div> : null}
      </div>
      <div className="max-w-[60%] text-right font-medium text-slate-200">{value}</div>
    </div>
  );
}
