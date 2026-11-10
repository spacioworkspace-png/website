"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { whatsappUrl } from "@/lib/site";
import { WA } from "@/lib/whatsapp-messages";

type NavItem = { href: string; label: string };

export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const onHome = usePathname() === "/";

  return (
    <div className="lg:hidden relative">
      <button
        type="button"
        className={`p-2 rounded-sm min-h-[44px] min-w-[44px] inline-flex items-center justify-center ${
          onHome ? "text-white hover:bg-white/10" : "text-[var(--primary-navy)] hover:bg-[var(--warm-stone)]"
        }`}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>
      {open ? (
        <nav className="absolute left-0 right-0 top-full -mx-4 border-t border-[var(--warm-stone)] bg-[var(--ivory)] shadow-lg z-50 w-screen">
          <ul className="flex flex-col p-4 gap-1 pb-6 max-w-7xl mx-auto">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium text-[var(--charcoal)] hover:text-[var(--primary-navy)] hover:bg-[var(--warm-stone)] rounded-sm"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-3 space-y-2">
              <a
                href={whatsappUrl(WA.general)}
                className="block text-center rounded-sm bg-[#25D366] px-5 py-3 text-white font-semibold min-h-[44px]"
                onClick={() => setOpen(false)}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
              <Link
                href="/book-tour"
                className="block text-center rounded-sm bg-[var(--primary-navy)] px-5 py-3 text-white font-semibold min-h-[44px]"
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
