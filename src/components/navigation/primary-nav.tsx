"use client";

import { SectionLink } from "@/components/navigation/section-link";
import { navigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

type PrimaryNavProps = {
  label: string;
  orientation?: "horizontal" | "vertical";
  activeId?: string | null;
  onNavigate?: () => void;
};

export function PrimaryNav({
  label,
  orientation = "horizontal",
  activeId = null,
  onNavigate,
}: PrimaryNavProps) {
  const horizontal = orientation === "horizontal";

  return (
    <nav aria-label={label}>
      <ul
        className={
          horizontal ? "flex items-center gap-6" : "flex flex-col py-2"
        }
      >
        {navigation.map((item) => {
          const active = activeId === item.id;

          return (
            <li key={item.id}>
              <SectionLink
                id={item.id}
                current={active}
                onNavigate={onNavigate}
                className={cn(
                  "block tracking-tight",
                  horizontal ? "py-2 text-sm" : "py-3 text-base",
                  active
                    ? "font-medium text-foreground"
                    : "text-muted hover:text-foreground",
                )}
              >
                {item.label}
              </SectionLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
