"use client";

import { Switch } from "@nextui-org/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const hasResolvedTheme = typeof resolvedTheme === "string";
  const isDark = resolvedTheme === "dark";
  const label = hasResolvedTheme
    ? resolvedTheme === "system"
      ? "System"
      : isDark
        ? "Dark"
        : "Light"
    : "Theme";

  if (!hasResolvedTheme) {
    return (
      <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/60 px-3 py-1 text-xs text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-slate-200">
        <Sun className="size-4" />
        Theme
      </div>
    );
  }

  return (
    <Switch
      size="sm"
      color="default"
      isSelected={isDark}
      onValueChange={(selected) => {
        const nextTheme = selected ? "dark" : "light";
        setTheme(nextTheme);
      }}
      startContent={<Sun className="size-4" />}
      endContent={<Moon className="size-4" />}
      aria-label="Toggle theme"
      className="bg-white/60 px-2 py-1 text-xs font-medium text-slate-700 shadow-sm dark:bg-white/10 dark:text-slate-200"
    >
      <span suppressHydrationWarning>{label}</span>
    </Switch>
  );
}
