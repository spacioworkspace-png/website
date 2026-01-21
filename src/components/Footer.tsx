import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const workspace = [
  { label: "Solo Cabin", href: "/workspaces/solo-cabin" },
  { label: "3-Seater Cabin", href: "/workspaces/three-seater-cabin" },
  { label: "6-Seater Cabin", href: "/workspaces/six-seater-cabin" },
  { label: "Dedicated Desks", href: "/workspaces/dedicated-desks" },
  { label: "Meeting Rooms", href: "/workspaces/meeting-rooms" },
  { label: "Virtual Office", href: "/workspaces/virtual-office" },
];

export function Footer() {
  return (
    <footer className="border-t bg-gradient-to-b from-neutral-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-12 md:py-16 text-sm">
        <div className="grid gap-8 sm:gap-10 md:gap-12 md:grid-cols-4 mb-8 sm:mb-10 md:mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3 sm:mb-4">Spacio Workspace</div>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-4 sm:mb-6">
              Bangalore's #1 premium coworking space for Gen Z entrepreneurs, startups, and freelancers. 
              Private cabins, dedicated desks, meeting rooms, and virtual offices in Basavanagudi & Jayanagar.
            </p>
            <div className="flex gap-3 mt-4 sm:mt-6">
              <a 
                href="https://wa.me/917022780310" 
                className="rounded-xl bg-primary px-4 sm:px-5 py-2.5 sm:py-3 text-white font-bold text-xs sm:text-sm hover:bg-primary/90 active:scale-95 transition-all duration-300 inline-flex items-center justify-center gap-2 touch-manipulation min-h-[44px]"
                aria-label="WhatsApp"
              >
                WhatsApp
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="font-bold text-neutral-900 text-base mb-4">Quick Links</div>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-neutral-700 hover:text-primary transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-neutral-700 hover:text-primary transition-colors duration-300">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-neutral-700 hover:text-primary transition-colors duration-300">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-neutral-700 hover:text-primary transition-colors duration-300">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-neutral-700 hover:text-primary transition-colors duration-300">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-700 hover:text-primary transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services / Sitelinks */}
          <div>
            <div className="font-bold text-neutral-900 text-base mb-4">Workspace</div>
            <ul className="space-y-3 text-neutral-700">
              {workspace.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="hover:text-primary transition-colors duration-300">
                <Link href="/workspaces#workspace-sitelinks">See All Plans</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <div className="font-bold text-neutral-900 text-base mb-4">Contact Us</div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-neutral-700">
                  <div className="font-semibold mb-1">Basavanagudi</div>
                  <div>No 7, Sree Devi Complex, NAT Street</div>
                  <div>Bangalore - 560004, Karnataka, India</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="tel:+917022780310" 
                  className="text-neutral-700 hover:text-primary transition-colors duration-300 font-semibold"
                >
                  +91-7022780310
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:hello@spacioworkspace.com" 
                  className="text-neutral-700 hover:text-primary transition-colors duration-300"
                >
                  hello@spacioworkspace.com
                </a>
              </li>
              <li className="mt-4 sm:mt-6">
                <a 
                  className="inline-block rounded-xl border-2 border-primary px-4 sm:px-5 py-2.5 sm:py-3 font-bold text-xs sm:text-sm hover:bg-primary hover:text-white active:scale-95 transition-all duration-300 touch-manipulation min-h-[44px] flex items-center justify-center" 
                  href="https://wa.me/917022780310?text=Hi! I'd like to know more about Spacio Workspace"
                >
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* SEO-Rich Content Section */}
        <div className="border-t border-neutral-200 pt-8 mb-8">
          <div className="prose prose-sm max-w-none text-neutral-600 leading-relaxed">
            <h3 className="text-lg font-bold text-neutral-900 mb-4">
              Best Coworking Space in Bangalore - Spacio Workspace
            </h3>
            <p className="mb-3">
              <strong>Spacio Workspace</strong> is the leading premium coworking space in Bangalore, offering 
              flexible workspace solutions for Gen Z entrepreneurs, startups, freelancers, and teams. Located in 
              prime areas of <strong>Basavanagudi</strong> and <strong>Jayanagar</strong> in South Bangalore, 
              we provide private cabins, dedicated desks, meeting rooms, and virtual office services.
            </p>
            <p className="mb-3">
              Our <strong>coworking space in Basavanagudi</strong> and <strong>coworking space in Jayanagar</strong> 
              feature lightning-fast 1Gbps internet, 24/7 secure access, premium amenities including modern meeting rooms with 
              AV equipment, and a vibrant community of 500+ members. Whether you need a <strong>private cabin</strong> for focused work, 
              a <strong>dedicated desk</strong> for your startup, or a <strong>virtual office</strong> for your business address, Spacio has the 
              perfect solution.
            </p>
            <p>
              Looking for the <strong>best shared office space in Bangalore</strong>? Spacio offers transparent 
              pricing, flexible terms, and month-to-month options. Our modern coworking space is designed for 
              productivity with ergonomic furniture, zen workspace design, and a calm, serene environment. 
              <strong> Book your free tour</strong> today and experience why we're Bangalore's #1 choice for 
              premium coworking spaces.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col-reverse items-center justify-between gap-6 border-t border-neutral-200 pt-8 md:flex-row">
          <p className="text-neutral-600 text-center md:text-left">
            © {new Date().getFullYear()} Spacio Workspace. All rights reserved. | 
            Premium Coworking Space in Bangalore | Basavanagudi & Jayanagar
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
            <a 
              href="https://www.google.com/maps/place/Spacio+Workspace" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-300"
            >
              Google Maps
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
