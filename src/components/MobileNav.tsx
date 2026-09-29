"use client";

import Link from "next/link";
import { useState } from "react";
import { PHONE_HREF, whatsappUrl } from "@/lib/site";
import { trackBookTourClick, trackPhoneClick, trackWhatsAppClick } from "@/lib/tracking";

type NavItem = { href: string; label: string };

export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="p-2 rounded-lg hover:bg-neutral-100"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
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
        <nav className="absolute left-0 right-0 top-full border-t border-neutral-200 bg-white shadow-lg">
          <ul className="flex flex-col p-4 gap-1">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium text-neutral-700 hover:text-primary hover:bg-primary/5 rounded-lg"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 space-y-2">
              <Link
                href="/book-tour"
                className="block text-center rounded-xl bg-primary px-5 py-3 text-white font-semibold min-h-[44px]"
                onClick={() => {
                  trackBookTourClick("mobile_nav");
                  setOpen(false);
                }}
              >
                Book Tour
              </Link>
              <a
                href={whatsappUrl("Hi! I want to book a tour at Spacio Workspace, Basavanagudi")}
                className="block text-center rounded-xl border border-primary/30 px-5 py-3 text-primary font-semibold min-h-[44px]"
                onClick={() => {
                  trackWhatsAppClick("mobile_nav");
                  setOpen(false);
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
              <a
                href={PHONE_HREF}
                className="block text-center rounded-xl border border-neutral-300 px-5 py-3 text-neutral-900 font-semibold min-h-[44px]"
                onClick={() => {
                  trackPhoneClick("mobile_nav");
                  setOpen(false);
                }}
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
