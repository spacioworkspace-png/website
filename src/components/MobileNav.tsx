"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { PHONE_HREF, whatsappUrl } from "@/lib/site";
import { WA } from "@/lib/whatsapp-messages";

type NavItem = { href: string; label: string };

export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden relative">
      <button
        ref={buttonRef}
        type="button"
        className="touch-target inline-flex items-center justify-center p-2 rounded-xl hover:bg-primary/5 text-neutral-900"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      {open ? (
        <nav
          id={panelId}
          className="absolute left-0 right-0 top-full -mx-4 w-screen border-t border-neutral-200 bg-white shadow-lg z-50"
          aria-label="Mobile"
        >
          <ul className="flex flex-col p-4 gap-1 max-w-7xl mx-auto pb-6">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium text-neutral-800 hover:text-primary hover:bg-primary/5 rounded-xl min-h-[44px]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-3 space-y-2">
              <Link
                href="/book-tour"
                className="block text-center rounded-xl bg-primary px-5 py-3 text-white font-semibold min-h-[48px]"
                onClick={() => setOpen(false)}
              >
                Book Tour
              </Link>
              <a
                href={whatsappUrl(WA.general)}
                className="block text-center rounded-xl border-2 border-primary/30 px-5 py-3 text-primary font-semibold min-h-[48px]"
                onClick={() => setOpen(false)}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
              <a
                href={PHONE_HREF}
                className="block text-center rounded-xl border border-neutral-300 px-5 py-3 text-neutral-900 font-semibold min-h-[48px]"
                onClick={() => setOpen(false)}
              >
                Call Us
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
