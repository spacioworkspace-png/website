import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight, Star } from "lucide-react";
import {
  ADDRESS,
  EMAIL,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
  SITE_NAME,
  whatsappUrl,
} from "@/lib/site";

const workspace = [
  { label: "Private cabins", href: "/workspaces/solo-cabin#video-tour" },
  { label: "3-Seater Cabin", href: "/workspaces/three-seater-cabin#video-tour" },
  { label: "6-Seater Cabin", href: "/workspaces/six-seater-cabin#video-tour" },
  { label: "Dedicated desks", href: "/workspaces/dedicated-desks#video-tour" },
  { label: "Meeting rooms", href: "/workspaces/meeting-rooms#video-tour" },
  { label: "Virtual office", href: "/workspaces/virtual-office#video-tour" },
  { label: "Day pass", href: "/workspaces/day-pass#video-tour" },
];

/**
 * Global footer — brand / address / phone mirror Google Business Profile entity fields
 * for GEO extractors (NAP consistency).
 */
export function Footer() {
  return (
    <footer className="border-t bg-gradient-to-b from-neutral-50 to-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-12 md:py-16 text-sm">
        <div className="grid gap-8 sm:gap-10 md:gap-12 md:grid-cols-4 mb-8 sm:mb-10 md:mb-12">
          <div className="md:col-span-1">
            <p className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3 sm:mb-4">
              <Link href="/" className="hover:text-primary transition-colors">
                {SITE_NAME}
              </Link>
            </p>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-4 sm:mb-6">
              Premium coworking and plug-and-play startup office in Basavanagudi, South Bangalore —
              private cabins, dedicated desks, meeting rooms, and virtual office for freelancers and
              growing teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-6">
              <a
                href={whatsappUrl("Hi! I'd like to know more about Spacio Workspace in Basavanagudi")}
                className="rounded-xl bg-primary px-4 sm:px-5 py-2.5 sm:py-3 text-white font-bold text-xs sm:text-sm hover:bg-primary/90 active:scale-95 transition-all duration-300 inline-flex items-center justify-center gap-2 touch-manipulation min-h-[44px]"
                aria-label="WhatsApp Spacio Workspace"
              >
                WhatsApp
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" aria-hidden />
              </a>
              <a
                href={PHONE_HREF}
                className="rounded-xl border-2 border-primary px-4 sm:px-5 py-2.5 sm:py-3 text-primary font-bold text-xs sm:text-sm hover:bg-primary hover:text-white active:scale-95 transition-all duration-300 inline-flex items-center justify-center gap-2 touch-manipulation min-h-[44px]"
                aria-label={`Call ${SITE_NAME} at ${PHONE_DISPLAY}`}
              >
                Call Us
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" aria-hidden />
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-neutral-900 text-base mb-4">Quick Links</h2>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/workspaces", label: "Workspaces" },
                { href: "/locations/basavanagudi", label: "Basavanagudi" },
                { href: "/about", label: "About" },
                { href: "/pricing", label: "Pricing" },
                { href: "/gallery", label: "Gallery" },
                { href: "/reviews", label: "Reviews" },
                { href: "/gallery#video-tours", label: "Video tours" },
                { href: "/book-tour", label: "Book a tour" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-neutral-700 hover:text-primary transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-neutral-900 text-base mb-4">Workspace</h2>
            <ul className="space-y-3 text-neutral-700">
              {workspace.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/workspaces#workspace-sitelinks" className="hover:text-primary transition-colors duration-300">
                  See All Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* NAP block — must match Google Business Profile */}
          <div>
            <h2 className="font-bold text-neutral-900 text-base mb-4">Contact Us</h2>
            <address className="not-italic space-y-4 text-neutral-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden />
                <div>
                  <p className="font-semibold text-neutral-900">
                    <Link href="/locations/basavanagudi" className="hover:text-primary">
                      {SITE_NAME}
                    </Link>
                  </p>
                  <p>{ADDRESS.street}</p>
                  <p>
                    {ADDRESS.locality}, South Bangalore
                  </p>
                  <p>
                    {ADDRESS.city} {ADDRESS.postalCode}, {ADDRESS.region}, India
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" aria-hidden />
                <a
                  href={PHONE_HREF}
                  className="font-semibold text-neutral-900 hover:text-primary transition-colors duration-300"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" aria-hidden />
                <a
                  href={`mailto:${EMAIL}`}
                  className="hover:text-primary transition-colors duration-300"
                >
                  {EMAIL}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Star className="w-5 h-5 text-primary shrink-0" aria-hidden />
                <Link href="/reviews" className="hover:text-primary transition-colors duration-300">
                  Google Reviews
                </Link>
              </div>
              <div>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-300"
                >
                  Open in Google Maps
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-neutral-200 pt-8 mb-8">
          <h2 className="text-lg font-bold text-neutral-900 mb-4">
            Premium coworking space in Basavanagudi, Bangalore
          </h2>
          <p className="mb-3 text-neutral-600 leading-relaxed">
            <strong>{SITE_NAME}</strong> is a premium coworking space in Basavanagudi, South Bangalore.
            Acoustic soundproof cabins, dedicated desks with biometric 24/7 access for members,
            meeting rooms, day passes, and virtual office for freelancers and startups.
          </p>
          <p className="text-neutral-600 leading-relaxed">
            Visit {ADDRESS.line}. Call {PHONE_DISPLAY} or book a free tour.
          </p>
        </div>

        <div className="flex flex-col-reverse items-center justify-between gap-6 border-t border-neutral-200 pt-8 md:flex-row">
          <p className="text-neutral-600 text-center md:text-left">
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-neutral-600">
            <Link href="/privacy" className="hover:text-primary transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="/refund" className="hover:text-primary transition-colors duration-300">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
