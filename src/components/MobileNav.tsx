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
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl hover:bg-primary/5 text-neutral-900"
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
          className="fixed inset-0 top-14 z-50 bg-white overflow-y-auto"
          aria-label="Mobile"
          role="dialog"
          aria-modal="true"
        >
          <ul className="flex flex-col px-4 py-4 gap-0.5 pb-28 max-w-lg mx-auto">
            {items.map((item) => (
              <li key={`${item.href}-${item.label}`}>
                <Link
                  href={item.href}
                  className="block px-4 py-3.5 text-base font-medium text-neutral-800 hover:text-primary hover:bg-primary/5 rounded-xl min-h-[48px]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-4 space-y-2 px-1">
              <Link
                href="/book-tour"
                className="block text-center rounded-xl bg-primary px-5 py-3.5 text-white font-semibold min-h-[48px] shadow-md shadow-primary/20"
                onClick={() => setOpen(false)}
              >
                Schedule a Tour
              </Link>
              <a
                href={whatsappUrl(WA.general)}
                className="block text-center rounded-xl border-2 border-primary/30 px-5 py-3.5 text-primary font-semibold min-h-[48px]"
                onClick={() => setOpen(false)}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
              <a
                href={PHONE_HREF}
                className="block text-center rounded-xl border border-neutral-300 px-5 py-3.5 text-neutral-900 font-semibold min-h-[48px]"
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
