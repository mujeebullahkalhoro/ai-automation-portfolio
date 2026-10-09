"use client";

import type { MouseEvent, ReactNode } from "react";
import { usePathname } from "next/navigation";
import { scrollToSection } from "@/lib/scroll-to-section";

type SectionLinkProps = {
  id: string;
  children: ReactNode;
  className?: string;
  current?: boolean;
  onNavigate?: () => void;
};

export function SectionLink({
  id,
  children,
  className,
  current = false,
  onNavigate,
}: SectionLinkProps) {
  const pathname = usePathname();
  const href = pathname === "/" ? `#${id}` : `/#${id}`;

  function onClick(event: MouseEvent<HTMLAnchorElement>) {
    onNavigate?.();

    if (pathname !== "/") {
      return;
    }

    event.preventDefault();
    requestAnimationFrame(() => {
      scrollToSection(id);
    });
  }

  return (
    <a
      href={href}
      className={className}
      aria-current={current ? "location" : undefined}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
