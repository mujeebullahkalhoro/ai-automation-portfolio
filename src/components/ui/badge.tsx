import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  tone?: "neutral" | "accent";
};

const tones = {
  neutral: "border-border text-muted",
  accent: "border-accent/30 text-accent",
} as const;

export function Badge({ children, className, tone = "neutral" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-xs tracking-wide",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
