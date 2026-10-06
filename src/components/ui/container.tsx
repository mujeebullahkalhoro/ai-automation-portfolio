import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const sectionSpacing = "py-16 sm:py-24 lg:py-28";

type ContainerProps = {
  children?: ReactNode;
  className?: string;
  as?: "div" | "main" | "section";
};

export function Container({
  children,
  className,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10", className)}
    >
      {children}
    </Component>
  );
}
