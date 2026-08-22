import Link from "next/link";
import { MobileNav } from "./MobileNav";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/workspaces", label: "Workspaces" },
  { href: "/pricing", label: "Pricing" },
  { href: "/locations/basavanagudi", label: "Basavanagudi" },
  { href: "/reviews", label: "Reviews" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-neutral-200/50 shadow-sm">
      <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 md:w-11 md:h-11 rounded-lg flex items-center justify-center bg-primary text-white font-bold text-sm">
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

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/book-tour"
            className="btn-premium rounded-xl bg-primary px-5 py-2.5 text-white font-semibold text-sm hover:bg-primary/90 transition-colors"
          >
            Book Tour
          </Link>
          <a
            href="https://wa.me/917022780310?text=Hi! I want to book a tour at Spacio Workspace Bangalore"
            className="rounded-xl border border-primary/30 px-4 py-2.5 text-sm font-semibold text-primary hover:bg-primary/5 transition-colors"
          >
            WhatsApp
          </a>
        </div>

        <MobileNav items={nav} />
      </div>
    </header>
  );
}
