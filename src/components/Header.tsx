import Link from "next/link";
import { MobileNav } from "./MobileNav";
import { WorkspacesNav } from "./WorkspacesNav";
import { CallLink, WhatsAppLink } from "./ContactCtas";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/locations/basavanagudi", label: "Location" },
  { href: "/contact", label: "Contact" },
];

/** Compact list for legacy MobileNav (lg+ uses Workspaces dropdown). */
const mobileNavItems = [
  { href: "/", label: "Home" },
  { href: "/workspaces", label: "Workspaces" },
  { href: "/about", label: "About" },
  { href: "/locations/basavanagudi", label: "Location" },
  { href: "/contact", label: "Contact" },
  { href: "/book-tour", label: "Schedule a Tour" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-neutral-200/50 shadow-sm hidden lg:block">
      <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center bg-primary text-white font-bold text-sm shadow-md shadow-primary/25">
            S
          </div>
          <div className="flex flex-col">
            <span className="text-base md:text-lg font-bold text-neutral-900 leading-tight">
              Spacio Workspace
            </span>
            <span className="text-xs text-neutral-600 hidden sm:block">Namma Bengaluru</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
          <Link
            href="/"
            className="px-3 py-2 text-sm font-medium text-neutral-700 hover:text-primary rounded-xl hover:bg-primary/5 transition-colors"
          >
            Home
          </Link>
          <WorkspacesNav />
          {nav
            .filter((item) => item.href !== "/")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-neutral-700 hover:text-primary rounded-xl hover:bg-primary/5 transition-colors"
              >
                {item.label}
              </Link>
            ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/book-tour"
            className="btn-premium rounded-xl bg-primary px-5 py-2.5 text-white font-semibold text-sm hover:bg-primary/90 transition-colors shadow-md shadow-primary/20 min-h-[44px] inline-flex items-center"
          >
            Schedule a Tour
          </Link>
          <WhatsAppLink location="header_whatsapp" variant="header" />
          <CallLink
            location="header_call"
            variant="inherit"
            className="rounded-xl border border-neutral-300 px-4 py-2.5 text-sm font-semibold text-neutral-900 hover:border-primary hover:text-primary transition-colors"
          />
        </div>

        <MobileNav items={mobileNavItems} />
      </div>
    </header>
  );
}
