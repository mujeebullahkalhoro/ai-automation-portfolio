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

function hasTextSize(className?: string) {
  if (!className) {
    return false;
  }

  return className.split(/\s+/).some((token) =>
    /^(?:[\w-]+:)*text-(?:xs|sm|base|lg|xl|[2-9]xl|\[[^\]]+\])$/.test(token),
  );
}

export function CardTitle({
  children,
  className,
  level = 3,
}: {
  children: ReactNode;
  className?: string;
  level?: 2 | 3;
}) {
  const Tag = level === 2 ? "h2" : "h3";

  return (
    <Tag
      className={cn(
        "font-semibold tracking-tight text-balance",
        !hasTextSize(className) && "text-lg",
        className,
      )}
    >
      {children}
    </Tag>
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
