import Link from "next/link";
import { MobileNav } from "./MobileNav";
import { whatsappUrl } from "@/lib/site";
import { WA } from "@/lib/whatsapp-messages";

const nav = [
  { href: "/", label: "Home" },
  { href: "/workspaces", label: "Workspace" },
  { href: "/workspaces/virtual-office", label: "Virtual Office" },
  { href: "/workspaces/meeting-rooms", label: "Meeting Rooms" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-neutral-200/60">
      <div className="mx-auto flex h-16 md:h-18 max-w-7xl items-center justify-between px-4 gap-4">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity shrink-0">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary text-white font-bold text-sm tracking-wide">
            S
          </div>
          <div className="flex flex-col">
            <span className="text-base md:text-lg font-bold text-neutral-900 leading-tight">
              Spacio Workspace
            </span>
            <span className="text-[11px] text-neutral-500 hidden sm:block tracking-wide">
              Basavanagudi · Bengaluru
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-neutral-700 hover:text-primary rounded-lg hover:bg-primary/5 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2.5">
          <a
            href={whatsappUrl(WA.general)}
            className="rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#1ebe57] transition-colors min-h-[44px] inline-flex items-center"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Spacio Workspace (opens in a new window)"
          >
            WhatsApp
          </a>
          <Link
            href="/book-tour"
            className="rounded-xl bg-primary px-5 py-2.5 text-white font-semibold text-sm hover:bg-primary/90 transition-colors min-h-[44px] inline-flex items-center"
          >
            Book a Tour
          </Link>
        </div>

        <MobileNav items={nav} />
      </div>
    </header>
  );
}
