import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle, MapPin, Clock, Wifi, Phone, Mail, Building2, Users, Train } from "lucide-react";
import { PublicTransportSection } from "@/components/PublicTransportSection";
import { CabinDeskCompare } from "@/components/CabinDeskCompare";
import { FaqSection } from "@/components/FaqSection";
import { pageMeta } from "@/lib/seo";
import { ADDRESS, EMAIL, LOCATION_FAQS, MAPS_URL, PHONE_DISPLAY, PHONE_TEL, SITE_NAME } from "@/lib/site";

export const metadata = pageMeta({
  title: "Coworking Space in Basavanagudi, Bangalore | Spacio",
  description:
    "Premium coworking space in Basavanagudi, Bangalore. Private cabins, dedicated desks, meeting rooms and virtual office near Bull Temple, Lalbagh and Gandhi Bazaar.",
  path: "/locations/basavanagudi",
  ogImage: "/images/building-exterior-sree-devi-complex.jpg",
  ogAlt: "Spacio Workspace at Sree Devi Complex, Basavanagudi",
});

const services = [
  { href: "/workspaces/solo-cabin", label: "Private cabins", detail: "Solo, 3-seater and 6-seater enclosed cabins" },
  { href: "/workspaces/dedicated-desks", label: "Dedicated desks", detail: "Assigned desk with 24/7 access" },
  { href: "/workspaces/day-pass", label: "Day pass", detail: "₹199 per day, 9 AM–7 PM" },
  { href: "/workspaces/meeting-rooms", label: "Meeting rooms", detail: "From ₹399 per hour, 4–12 people" },
  { href: "/workspaces/virtual-office", label: "Virtual office", detail: "₹12,999 per year, GST and mail handling" },
];

export default function BasavanagudiLocationPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="mx-auto max-w-7xl scroll-mt-16 px-4 py-16 md:py-20">
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <span className="badge-premium mb-4 inline-block">Basavanagudi, Bangalore</span>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Coworking Space in <span className="text-gradient">Basavanagudi</span>, Bangalore
          </h1>
          <p className="mt-4 text-lg text-neutral-700">
            Private cabins, dedicated desks, meeting rooms and virtual office solutions for professionals, startups and growing teams in South Bangalore.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="card-premium rounded-2xl border-2 border-primary/20 p-6 sm:p-8 bg-white">
            <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-6 bg-neutral-100">
              <Image
                src="/images/building-exterior-sree-devi-complex.jpg"
                alt="Spacio Workspace, Sree Devi Complex, Basavanagudi"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Address and contact</h2>
            <p className="text-neutral-700 mb-6">
              <strong>{SITE_NAME}</strong>
              <br />
              {ADDRESS.street}
              <br />
              {ADDRESS.locality}, {ADDRESS.city} — {ADDRESS.postalCode}
            </p>
            <ul className="space-y-3 mb-6 text-neutral-700">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href={`tel:${PHONE_TEL}`} className="hover:text-primary font-semibold">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href={`mailto:${EMAIL}`} className="hover:text-primary">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>24/7 member access</span>
              </li>
              <li className="flex items-center gap-2">
                <Wifi className="w-4 h-4 text-primary" />
                <span>1Gbps internet</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                className="btn-premium rounded-xl bg-primary px-5 py-3 text-white font-semibold inline-flex items-center gap-2"
                href={`https://wa.me/917022780310?text=${encodeURIComponent("I want to visit Spacio Workspace in Basavanagudi")}`}
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                href="/book-tour"
                className="rounded-xl border-2 border-primary px-5 py-3 font-semibold text-primary hover:bg-primary hover:text-white transition-colors"
              >
                Book a free tour
              </Link>
              <a
                className="rounded-xl border-2 border-neutral-200 px-5 py-3 font-semibold hover:border-primary transition-colors"
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Maps
              </a>
            </div>
          </div>
          <iframe
            className="aspect-video w-full min-h-[280px] rounded-2xl ring-2 ring-neutral-200"
            loading="lazy"
            title="Map of Spacio Workspace, Basavanagudi"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Spacio%20Workspace%20Basavanagudi%20Sree%20Devi%20Complex&output=embed"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
          Why Basavanagudi
        </h2>
        <p className="text-neutral-700 max-w-3xl mb-8">
          Spacio sits on NAT Street in Gandhi Bazaar, a walkable South Bangalore neighbourhood.
          Bull Temple is about five minutes away. Lalbagh Botanical Gardens is about ten minutes.
          The Green Line metro at Lalbagh Station is roughly 2.5 km, so commutes from JP Nagar,
          Banashankari, and the city centre do not require a Koramangala hop.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { icon: MapPin, title: "Gandhi Bazaar / NAT Street", desc: "Walkable South Bangalore neighbourhood, a short hop from the coworking centre." },
            { icon: Train, title: "Lalbagh Metro", desc: "Green Line access about 8–10 minutes away by auto." },
            { icon: Building2, title: "Bull Temple & Lalbagh", desc: "Useful landmarks when you brief a client or cab driver." },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-neutral-200 p-5">
              <item.icon className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-bold text-neutral-900 mb-1">{item.title}</h3>
              <p className="text-sm text-neutral-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
          Who this centre suits
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: Users, title: "Professionals and consultants", desc: "A private cabin or dedicated desk for client calls without working from home." },
            { icon: Building2, title: "Startups and small teams", desc: "3-seater and 6-seater cabins when two to six people need one lockable room." },
            { icon: Clock, title: "South Bangalore commuters", desc: "A workspace in Basavanagudi instead of a daily trip to the CBD or Outer Ring Road." },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-neutral-200 p-5">
              <item.icon className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-bold text-neutral-900 mb-1">{item.title}</h3>
              <p className="text-sm text-neutral-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
          Workspace plans at this location
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="rounded-2xl border-2 border-neutral-200 p-5 hover:border-primary transition-colors"
            >
              <div className="font-bold text-neutral-900 mb-1">{service.label}</div>
              <p className="text-sm text-neutral-600 mb-3">{service.detail}</p>
              <span className="text-sm font-semibold text-primary inline-flex items-center gap-1">
                View plan <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <PublicTransportSection />

      <CabinDeskCompare />

      <FaqSection items={LOCATION_FAQS} title="Basavanagudi coworking FAQ" />
      <div className="mx-auto max-w-3xl px-4 pb-16 flex flex-wrap justify-center gap-3">
        <Link href="/book-tour" className="rounded-xl bg-primary px-6 py-3 text-white font-semibold">
          Book a free tour
        </Link>
        <Link href="/contact" className="rounded-xl border-2 border-primary px-6 py-3 text-primary font-semibold">
          Contact
        </Link>
      </div>
    </div>
  );
}
