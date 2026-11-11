import Link from "next/link";
import { MobileNav } from "./MobileNav";
import { WorkspacesNav } from "./WorkspacesNav";
import { CallLink, WhatsAppLink } from "./ContactCtas";

const mobileNavItems = [
  { href: "/", label: "Home" },
  { href: "/workspaces", label: "Workspaces" },
  { href: "/workspaces/solo-cabin", label: "Private Cabins" },
  { href: "/workspaces/dedicated-desks", label: "Dedicated Desks" },
  { href: "/workspaces/day-pass", label: "Day Pass" },
  { href: "/workspaces/virtual-office", label: "Virtual Office" },
  { href: "/workspaces/meeting-rooms", label: "Meeting Rooms" },
  { href: "/about", label: "About" },
  { href: "/locations/basavanagudi", label: "Location" },
  { href: "/contact", label: "Contact" },
  { href: "/book-tour", label: "Schedule a Tour" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-neutral-200/50 shadow-sm">
      <div className="mx-auto flex h-14 sm:h-16 md:h-20 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 hover:opacity-80 transition-opacity min-w-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center bg-primary text-white font-bold text-sm shadow-md shadow-primary/25 shrink-0">
            S
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-sm sm:text-base md:text-lg font-bold text-neutral-900 leading-tight truncate">
              Spacio Workspace
            </span>
            <span className="text-[10px] sm:text-xs text-neutral-600 hidden xs:block sm:block">
              Namma Bengaluru
            </span>
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
          <Link
            href="/about"
            className="px-3 py-2 text-sm font-medium text-neutral-700 hover:text-primary rounded-xl hover:bg-primary/5 transition-colors"
          >
            About
          </Link>
          <Link
            href="/locations/basavanagudi"
            className="px-3 py-2 text-sm font-medium text-neutral-700 hover:text-primary rounded-xl hover:bg-primary/5 transition-colors"
          >
            Location
          </Link>
          <Link
            href="/contact"
            className="px-3 py-2 text-sm font-medium text-neutral-700 hover:text-primary rounded-xl hover:bg-primary/5 transition-colors"
          >
            Contact
          </Link>
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
