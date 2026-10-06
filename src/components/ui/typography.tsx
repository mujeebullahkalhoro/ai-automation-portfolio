import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const headingStyles = {
  1: "text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl lg:leading-[1.05]",
  2: "text-3xl font-semibold tracking-tight text-balance sm:text-4xl",
  3: "text-xl font-semibold tracking-tight sm:text-2xl",
} as const;

type HeadingProps = {
  children: ReactNode;
  className?: string;
  level?: 1 | 2 | 3;
};

export function Heading({ children, className, level = 1 }: HeadingProps) {
  const Tag = `h${level}` as const;

  return <Tag className={cn(headingStyles[level], className)}>{children}</Tag>;
}

const textStyles = {
  body: "text-base leading-7 text-foreground sm:text-[1.0625rem] sm:leading-8",
  muted: "text-base leading-7 text-muted sm:leading-8",
  small: "text-sm leading-6 text-muted",
  eyebrow:
    "font-mono text-xs font-medium uppercase tracking-[0.16em] text-muted",
} as const;

type TextProps = {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof textStyles;
  as?: "p" | "span";
};

export function Text({
  children,
  className,
  variant = "body",
  as: Component = "p",
}: TextProps) {
  return (
    <Component className={cn(textStyles[variant], className)}>
      {children}
    </Component>
  );
}
