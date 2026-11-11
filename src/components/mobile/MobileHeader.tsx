"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MobileNavOverlay } from "./MobileNavOverlay";

export function MobileHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      setScrolled(window.scrollY > 24);
      ticking = false;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`lg:hidden sticky top-0 z-50 transition-colors duration-300 ${
          open || scrolled
            ? "bg-[var(--m-ivory)]/95 backdrop-blur-md border-b border-[var(--m-stone)]"
            : "bg-[var(--m-midnight)]/55 backdrop-blur-md border-b border-white/10"
        }`}
      >
        <div className="flex h-14 items-center justify-between px-[var(--m-pad)]">
          <Link href="/" className="flex flex-col" onClick={() => setOpen(false)}>
            <span
              className={`font-[family-name:var(--font-mobile-display)] text-xl leading-none tracking-tight ${
                open || scrolled ? "text-[var(--m-navy)]" : "text-white"
              }`}
            >
              Spacio
            </span>
            <span
              className={`text-[10px] uppercase tracking-[0.18em] mt-0.5 ${
                open || scrolled ? "text-[var(--m-muted)]" : "text-white/55"
              }`}
            >
              Workspace
            </span>
          </Link>

          <button
            type="button"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-sm ${
              open || scrolled ? "text-[var(--m-navy)]" : "text-white"
            }`}
            aria-expanded={open}
            aria-controls="mobile-nav-overlay"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      <MobileNavOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
