import Link from "next/link";
import { ADDRESS, EMAIL, INSTAGRAM_URL, MAPS_URL, PHONE_DISPLAY, PHONE_HREF, whatsappUrl } from "@/lib/site";
import { WA } from "@/lib/whatsapp-messages";

const workspaces = [
  { label: "Private Cabins", href: "/workspaces/solo-cabin" },
  { label: "Dedicated Desks", href: "/workspaces/dedicated-desks" },
  { label: "Day Pass", href: "/workspaces/day-pass" },
  { label: "Virtual Office", href: "/workspaces/virtual-office" },
  { label: "Meeting Rooms", href: "/workspaces/meeting-rooms" },
];

const company = [
  { label: "About", href: "/about" },
  { label: "Basavanagudi", href: "/locations/basavanagudi" },
  { label: "Near Jayanagar", href: "/locations/jayanagar" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
  { label: "Book a Tour", href: "/book-tour" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--warm-stone)] bg-[var(--navy-deep)] text-white pb-24 lg:pb-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1 space-y-5">
            <div>
              <div className="font-display text-2xl tracking-tight">Spacio Workspace</div>
              <div className="champagne-rule mt-4 bg-[var(--champagne)]" />
            </div>
            <p className="text-sm text-white/65 leading-relaxed">
              A more considered way to work — boutique coworking in Basavanagudi for founders,
              professionals and growing teams.
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href={whatsappUrl(WA.general)}
                className="rounded-sm bg-[#25D366] px-4 py-2.5 text-white text-sm font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
              <a
                href={PHONE_HREF}
                className="rounded-sm border border-white/25 px-4 py-2.5 text-sm font-semibold text-white"
              >
                Call
              </a>
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--champagne)] mb-4">
              Workspaces
            </div>
            <ul className="space-y-2.5 text-sm text-white/70">
              {workspaces.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--champagne)] mb-4">
              Explore
            </div>
            <ul className="space-y-2.5 text-sm text-white/70">
              {company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div itemScope itemType="https://schema.org/LocalBusiness">
            <meta itemProp="name" content="Spacio Workspace" />
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--champagne)] mb-4">
              Visit
            </div>
            <div
              className="text-sm text-white/70 leading-relaxed"
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <span itemProp="streetAddress">{ADDRESS.street}</span>
              <br />
              <span itemProp="addressLocality">{ADDRESS.locality}</span>,{" "}
              <span itemProp="addressRegion">{ADDRESS.city}</span>{" "}
              <span itemProp="postalCode">{ADDRESS.postalCode}</span>
            </div>
            <p className="mt-4 text-sm">
              <a href={PHONE_HREF} itemProp="telephone" className="text-white hover:text-[var(--champagne)]">
                {PHONE_DISPLAY}
              </a>
            </p>
            <p className="mt-2 text-sm">
              <a href={`mailto:${EMAIL}`} itemProp="email" className="text-white/70 hover:text-white">
                {EMAIL}
              </a>
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
                Google Maps directions
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs text-white/45">
          <p>© {new Date().getFullYear()} Spacio Workspace. Basavanagudi, Bengaluru.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
            <Link href="/refund" className="hover:text-white">
              Refund
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
