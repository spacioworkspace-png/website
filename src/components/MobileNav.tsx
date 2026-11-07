"use client";

import Link from "next/link";
import { useState } from "react";
import { whatsappUrl } from "@/lib/site";
import { WA } from "@/lib/whatsapp-messages";

type NavItem = { href: string; label: string };

export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="p-2 rounded-lg hover:bg-neutral-100 min-h-[44px] min-w-[44px] inline-flex items-center justify-center"
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
        <nav className="absolute left-0 right-0 top-full border-t border-neutral-200 bg-white shadow-lg z-50">
          <ul className="flex flex-col p-4 gap-1 pb-6">
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
            <li className="mt-3 space-y-2">
              <a
                href={whatsappUrl(WA.general)}
                className="block text-center rounded-xl bg-[#25D366] px-5 py-3 text-white font-semibold min-h-[44px]"
                onClick={() => setOpen(false)}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
              <Link
                href="/book-tour"
                className="block text-center rounded-xl bg-primary px-5 py-3 text-white font-semibold min-h-[44px]"
                onClick={() => setOpen(false)}
              >
                Book a Tour
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
