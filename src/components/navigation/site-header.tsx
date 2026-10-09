"use client";

import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { PrimaryNav } from "@/components/navigation/primary-nav";
import { SectionLink } from "@/components/navigation/section-link";
import { useActiveSection } from "@/components/navigation/use-active-section";
import { Container } from "@/components/ui";
import { site } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const activeId = useActiveSection();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const panelId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  function closeMenu() {
    setOpenPath(null);
  }

  useEffect(() => {
    if (!open) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") {
        return;
      }

      setOpenPath(null);
      menuButtonRef.current?.focus();
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <Container className="flex h-16 items-center justify-between gap-6">
        <SectionLink
          id="home"
          onNavigate={closeMenu}
          className="text-sm font-semibold tracking-tight"
        >
          {site.name}
        </SectionLink>
        <div className="hidden md:block">
          <PrimaryNav label="Primary" activeId={activeId} />
        </div>
        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex h-11 items-center rounded-md px-3 text-sm font-medium md:hidden"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpenPath(open ? null : pathname)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </Container>
      <div id={panelId} className={open ? "border-t border-border md:hidden" : "hidden"}>
        <Container>
          <PrimaryNav
            label="Mobile"
            orientation="vertical"
            activeId={activeId}
            onNavigate={closeMenu}
          />
        </Container>
      </div>
    </header>
  );
}
