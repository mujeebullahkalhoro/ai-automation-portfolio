import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "sm";

const base =
  "inline-flex items-center justify-center rounded-md font-medium tracking-tight motion-safe:transition-colors motion-safe:duration-200 disabled:pointer-events-none disabled:opacity-40";

const variants: Record<Variant, string> = {
  primary: "bg-foreground text-background hover:bg-foreground/80",
  secondary:
    "border border-border bg-surface text-foreground hover:border-foreground/30",
  ghost: "text-foreground hover:bg-foreground/5",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  sm: "h-9 px-3.5 text-sm",
};

function buttonClasses(variant: Variant, size: Size, className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

type ButtonProps = {
  variant?: Variant;
  size?: Size;
} & ComponentPropsWithoutRef<"button">;

export function Button({
  variant = "primary",
  size = "md",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonClasses(variant, size, className)}
      {...props}
    />
  );
}

type ButtonLinkProps = {
  variant?: Variant;
  size?: Size;
  href: string;
  external?: boolean;
} & Omit<ComponentPropsWithoutRef<"a">, "href">;

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  href,
  external,
  ...props
}: ButtonLinkProps) {
  const classNameValue = buttonClasses(variant, size, className);
  const isExternal = external || href.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={href}
        className={classNameValue}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    );
  }

  return <Link href={href} className={classNameValue} {...props} />;
}
