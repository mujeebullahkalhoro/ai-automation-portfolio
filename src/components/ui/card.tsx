import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
};

export function Card({ children, className, interactive = false }: CardProps) {
  return (
    <article
      className={cn(
        "rounded-lg border border-border bg-surface p-6 sm:p-8",
        interactive &&
          "motion-safe:transition-colors motion-safe:duration-200 hover:border-foreground/25",
        className,
      )}
    >
      {children}
    </article>
  );
}

export function CardTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3 className={cn("text-lg font-semibold tracking-tight", className)}>
      {children}
    </h3>
  );
}

export function CardText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("mt-3 text-sm leading-6 text-muted", className)}>
      {children}
    </p>
  );
}
