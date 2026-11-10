"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileNav } from "./MobileNav";
import { whatsappUrl } from "@/lib/site";
import { WA } from "@/lib/whatsapp-messages";

const nav = [
  { href: "/workspaces", label: "Workspaces" },
  { href: "/workspaces/day-pass", label: "Day Pass" },
  { href: "/workspaces/virtual-office", label: "Virtual Office" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const onHome = pathname === "/";

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors ${
        onHome
          ? "bg-[var(--navy-deep)]/70 backdrop-blur-md border-b border-white/10"
          : "bg-[var(--ivory)]/95 backdrop-blur-md border-b border-[var(--warm-stone)]"
      }`}
    >
      <div className="mx-auto flex h-16 md:h-[4.25rem] max-w-7xl items-center justify-between px-4 sm:px-6 gap-4">
        <Link href="/" className="flex flex-col shrink-0 group">
          <span
            className={`font-display text-xl md:text-2xl tracking-tight leading-none ${
              onHome ? "text-white" : "text-[var(--primary-navy)]"
            }`}
          >
            Spacio
          </span>
          <span
            className={`text-[10px] uppercase tracking-[0.2em] mt-0.5 ${
              onHome ? "text-white/55" : "text-[var(--muted-grey)]"
            }`}
          >
            Workspace
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 py-2 text-sm font-medium rounded-sm transition-colors ${
                onHome
                  ? "text-white/80 hover:text-white hover:bg-white/5"
                  : "text-[var(--charcoal)] hover:text-[var(--primary-navy)] hover:bg-[var(--warm-stone)]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2.5">
          <a
            href={whatsappUrl(WA.general)}
            className="rounded-sm bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity min-h-[44px] inline-flex items-center"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Spacio Workspace (opens in a new window)"
          >
            WhatsApp
          </a>
          <Link
            href="/book-tour"
            className={`rounded-sm px-5 py-2.5 font-semibold text-sm min-h-[44px] inline-flex items-center transition-colors ${
              onHome
                ? "bg-[var(--champagne)] text-[var(--navy-deep)] hover:opacity-90"
                : "bg-[var(--primary-navy)] text-white hover:bg-[var(--navy-deep)]"
            }`}
          >
            Book a Tour
          </Link>
        </div>

        <MobileNav items={[{ href: "/", label: "Home" }, ...nav, { href: "/book-tour", label: "Book a Tour" }]} />
      </div>
    </header>
  );
}
