"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    function focusTarget() {
      const id = window.location.hash.replace(/^#/, "");

      if (!id) {
        return;
      }

      document.getElementById(id)?.focus({ preventScroll: true });
    }

    if (pathname === "/") {
      const id = window.location.hash.replace(/^#/, "");
      const target = id ? document.getElementById(id) : null;

      if (target) {
        target.scrollIntoView({ behavior: "auto", block: "start" });
        target.focus({ preventScroll: true });
      }
    }

    window.addEventListener("hashchange", focusTarget);
    return () => window.removeEventListener("hashchange", focusTarget);
  }, [pathname]);

  return null;
}
