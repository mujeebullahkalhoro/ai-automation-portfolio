"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PrimaryNav } from "@/components/navigation/primary-nav";
import { Container } from "@/components/ui";
import { site } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const panelId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

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
    <header className="border-b border-border">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          {site.name}
        </Link>
        <div className="hidden md:block">
          <PrimaryNav label="Primary" />
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
      <div
        id={panelId}
        className={
          open ? "border-t border-border md:hidden" : "hidden"
        }
      >
        <Container>
          <PrimaryNav label="Mobile" orientation="vertical" />
        </Container>
      </div>
    </header>
  );
}
