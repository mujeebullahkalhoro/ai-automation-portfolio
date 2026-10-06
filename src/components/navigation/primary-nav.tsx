"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isActivePath, navigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

type PrimaryNavProps = {
  label: string;
  orientation?: "horizontal" | "vertical";
};

export function PrimaryNav({
  label,
  orientation = "horizontal",
}: PrimaryNavProps) {
  const pathname = usePathname();
  const horizontal = orientation === "horizontal";

  return (
    <nav aria-label={label}>
      <ul
        className={
          horizontal ? "flex items-center gap-6" : "flex flex-col py-2"
        }
      >
        {navigation.map((item) => {
          const active = isActivePath(pathname, item.href);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "block tracking-tight",
                  horizontal ? "py-2 text-sm" : "py-3 text-base",
                  active
                    ? "font-medium text-foreground"
                    : "text-muted hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
