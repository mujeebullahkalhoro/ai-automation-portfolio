"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/navigation";

export function useActiveSection() {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const elements = navigation
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        const next = visible[0]?.target.id;

        if (next) {
          setActiveId(next);
        }
      },
      { rootMargin: "-80px 0px -55% 0px", threshold: [0, 0.1, 0.25] },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [pathname]);

  return pathname === "/" ? activeId : null;
}
