"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { whatsappUrl } from "@/lib/site";
import { WA } from "@/lib/whatsapp-messages";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/workspaces", label: "Workspaces" },
  { href: "/workspaces/solo-cabin", label: "Private Cabins" },
  { href: "/workspaces/dedicated-desks", label: "Dedicated Desks" },
  { href: "/workspaces/day-pass", label: "Day Pass" },
  { href: "/workspaces/virtual-office", label: "Virtual Office" },
  { href: "/workspaces/meeting-rooms", label: "Meeting Rooms" },
  { href: "/about", label: "About Spacio" },
  { href: "/locations/basavanagudi", label: "Location" },
  { href: "/contact", label: "Contact" },
];

export function MobileNavOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      id="mobile-nav-overlay"
      className="lg:hidden fixed inset-0 z-[60] bg-[var(--m-midnight)] text-white"
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
    >
      <div className="flex h-14 items-center justify-between px-[var(--m-pad)] border-b border-white/10">
        <span className="font-[family-name:var(--font-mobile-display)] text-xl">Spacio</span>
        <button
          ref={closeRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center"
          aria-label="Close menu"
          onClick={onClose}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <nav className="px-[var(--m-pad)] pt-8 pb-28 overflow-y-auto h-[calc(100%-3.5rem)]" aria-label="Mobile">
        <ul className="m-stagger space-y-1">
          {LINKS.map((item) => (
            <li key={item.href} className="m-anim">
              <Link
                href={item.href}
                onClick={onClose}
                className="block py-3.5 font-[family-name:var(--font-mobile-display)] text-2xl tracking-tight text-white/90 hover:text-[var(--m-champagne)] min-h-[48px]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 space-y-3 m-anim">
          <Link
            href="/book-tour"
            onClick={onClose}
            className="m-btn m-btn-primary w-full"
          >
            Schedule a Private Tour
          </Link>
          <a
            href={whatsappUrl(WA.general)}
            onClick={onClose}
            target="_blank"
            rel="noopener noreferrer"
            className="m-btn w-full border border-white/25 text-white"
          >
            WhatsApp Us
          </a>
        </div>
      </nav>
    </div>
  );
}
