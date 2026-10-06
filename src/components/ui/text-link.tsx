import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type TextLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
};

const linkClass =
  "font-medium text-foreground underline decoration-border underline-offset-[5px] motion-safe:transition-colors motion-safe:duration-200 hover:decoration-foreground";

export function TextLink({
  href,
  children,
  className,
  external,
}: TextLinkProps) {
  const classNameValue = cn(linkClass, className);
  const isExternal = external || href.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={href}
        className={classNameValue}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classNameValue}>
      {children}
    </Link>
  );
}
