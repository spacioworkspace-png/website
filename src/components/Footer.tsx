import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { ADDRESS, EMAIL, INSTAGRAM_URL, MAPS_URL, PHONE_DISPLAY, PHONE_HREF, whatsappUrl } from "@/lib/site";
import { WA } from "@/lib/whatsapp-messages";

const nav = [
  { label: "Home", href: "/" },
  { label: "Workspace", href: "/workspaces" },
  { label: "Virtual Office", href: "/workspaces/virtual-office" },
  { label: "Meeting Rooms", href: "/workspaces/meeting-rooms" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Book a Tour", href: "/book-tour" },
];

const services = [
  { label: "Private Cabins", href: "/workspaces/solo-cabin" },
  { label: "Dedicated Desks", href: "/workspaces/dedicated-desks" },
  { label: "Day Pass", href: "/workspaces/day-pass" },
  { label: "Virtual Office", href: "/workspaces/virtual-office" },
  { label: "Meeting Rooms", href: "/workspaces/meeting-rooms" },
];

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 pb-20 lg:pb-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1 space-y-4">
            <div className="text-xl font-bold text-neutral-900">Spacio Workspace</div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Thoughtfully designed coworking in Basavanagudi for founders, professionals and growing teams.
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href={whatsappUrl(WA.general)}
                className="rounded-lg bg-[#25D366] px-4 py-2.5 text-white text-sm font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
              <a
                href={PHONE_HREF}
                className="rounded-lg border border-primary px-4 py-2.5 text-primary text-sm font-semibold"
              >
                Call
              </a>
            </div>
          </div>

          <div>
            <div className="font-semibold text-neutral-900 mb-3">Navigate</div>
            <ul className="space-y-2 text-sm text-neutral-600">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-semibold text-neutral-900 mb-3">Workspace</div>
            <ul className="space-y-2 text-sm text-neutral-600">
              {services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div itemScope itemType="https://schema.org/LocalBusiness">
            <meta itemProp="name" content="Spacio Workspace" />
            <div className="font-semibold text-neutral-900 mb-3">Visit Us</div>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li className="flex gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden />
                <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <span itemProp="streetAddress">{ADDRESS.street}</span>
                  <br />
                  <span itemProp="addressLocality">{ADDRESS.locality}</span>,{" "}
                  <span itemProp="addressRegion">{ADDRESS.city}</span>{" "}
                  <span itemProp="postalCode">{ADDRESS.postalCode}</span>
                </div>
              </li>
              <li className="flex gap-2 items-center">
                <Phone className="w-4 h-4 text-primary shrink-0" aria-hidden />
                <a href={PHONE_HREF} itemProp="telephone" className="hover:text-primary font-medium">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <Mail className="w-4 h-4 text-primary shrink-0" aria-hidden />
                <a href={`mailto:${EMAIL}`} itemProp="email" className="hover:text-primary">
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                  aria-label="Spacio Workspace on Instagram (opens in a new window)"
                >
                  Instagram @spacioworkspace
                </a>
              </li>
              <li>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                  aria-label="Open Google Maps (opens in a new window)"
                >
                  Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Spacio Workspace. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary">
              Terms
            </Link>
            <Link href="/refund" className="hover:text-primary">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
