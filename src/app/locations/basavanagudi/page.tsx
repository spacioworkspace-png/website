import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle, MapPin, Clock, Wifi, Phone, Mail, Building2, Users, Train } from "lucide-react";
import { PublicTransportSection } from "@/components/PublicTransportSection";
import { CabinDeskCompare } from "@/components/CabinDeskCompare";

const NAP = {
  name: "Spacio Workspace",
  street: "No 7, Sree Devi Complex, NAT Street",
  locality: "Basavanagudi",
  city: "Bangalore",
  postalCode: "560004",
  phoneDisplay: "+91 70227 80310",
  phoneTel: "+917022780310",
  email: "hello@spacioworkspace.com",
  maps: "https://www.google.com/maps/place/Spacio+Workspace/@12.9449135,77.5658325,17z",
};

const faqs = [
  {
    q: "Where is Spacio Workspace in Basavanagudi?",
    a: "No 7, Sree Devi Complex, NAT Street, Basavanagudi, Bangalore 560004, in South Bangalore near Gandhi Bazaar, Bull Temple, and Lalbagh.",
  },
  {
    q: "What workspace plans are available?",
    a: "Private cabins (solo, 3-seater, and 6-seater), dedicated desks, meeting rooms by the hour, day passes, and a virtual office address for GST and mail.",
  },
  {
    q: "How do I get there on metro or bus?",
    a: "The centre is about 2.5 km from Lalbagh Metro Station on the Green Line. BMTC stops are within a short walk on NAT Street / Gandhi Bazaar. Autos and cabs are available throughout the day.",
  },
  {
    q: "Who is this coworking space for?",
    a: "Professionals, consultants, startups, and small teams who want a South Bangalore address with private cabins or a dedicated desk, without commuting to Koramangala or the CBD every day.",
  },
  {
    q: "How do I book a tour?",
    a: "WhatsApp or call +91 70227 80310, use the contact form, or book a free tour online. Walk-in visits can be arranged the same day when the team is available.",
  },
];

export const metadata: Metadata = {
  title: "Coworking Space in Basavanagudi, Bangalore | Spacio Workspace",
  description:
    "Premium coworking space in Basavanagudi, Bangalore. Private cabins, dedicated desks, meeting rooms and virtual office solutions near Bull Temple, Lalbagh and Gandhi Bazaar. Book a free tour.",
  alternates: {
    canonical: "https://www.spacioworkspace.com/locations/basavanagudi",
  },
  openGraph: {
    title: "Coworking Space in Basavanagudi, Bangalore | Spacio Workspace",
    description:
      "Private cabins, dedicated desks, meeting rooms and virtual office at Sree Devi Complex, NAT Street, Basavanagudi.",
    url: "https://www.spacioworkspace.com/locations/basavanagudi",
    siteName: "Spacio Workspace",
    locale: "en_IN",
    type: "website",
  },
};

const services = [
  { href: "/workspaces/solo-cabin", label: "Private cabins", detail: "Solo, 3-seater and 6-seater enclosed cabins" },
  { href: "/workspaces/dedicated-desks", label: "Dedicated desks", detail: "Assigned desk with 24/7 access" },
  { href: "/workspaces/day-pass", label: "Day pass", detail: "₹199 per day, 9 AM–7 PM" },
  { href: "/workspaces/meeting-rooms", label: "Meeting rooms", detail: "From ₹399 per hour, 4–12 people" },
  { href: "/workspaces/virtual-office", label: "Virtual office", detail: "₹12,999 per year, GST and mail handling" },
];

export default function BasavanagudiLocationPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const placeJsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: NAP.name,
    alternateName: "Spacio Workspace Basavanagudi",
    description:
      "Coworking space in Basavanagudi, South Bangalore. Private cabins, dedicated desks, meeting rooms, day pass and virtual office.",
    url: "https://www.spacioworkspace.com/locations/basavanagudi",
    telephone: NAP.phoneTel,
    email: NAP.email,
    category: "Coworking space",
    address: {
      "@type": "PostalAddress",
      streetAddress: NAP.street,
      addressLocality: NAP.locality,
      addressRegion: "Karnataka",
      postalCode: NAP.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "12.9449135",
      longitude: "77.5658325",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Basavanagudi" },
      { "@type": "AdministrativeArea", name: "South Bangalore" },
    ],
  };

  return (
    <div className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

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
            <div className="aspect-video w-full rounded-xl overflow-hidden mb-6 bg-neutral-100">
              <img
                src="/images/building-exterior-sree-devi-complex.jpg"
                alt="Spacio Workspace, Sree Devi Complex, Basavanagudi"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Address and contact</h2>
            <p className="text-neutral-700 mb-6">
              <strong>{NAP.name}</strong>
              <br />
              {NAP.street}
              <br />
              {NAP.locality}, {NAP.city} — {NAP.postalCode}
            </p>
            <ul className="space-y-3 mb-6 text-neutral-700">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href={`tel:${NAP.phoneTel}`} className="hover:text-primary font-semibold">
                  {NAP.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href={`mailto:${NAP.email}`} className="hover:text-primary">
                  {NAP.email}
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
                href={NAP.maps}
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
          JP Nagar, and the city centre do not require a Koramangala hop.
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

      <section className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-8 text-center">
          Basavanagudi coworking FAQ
        </h2>
        <div className="space-y-4">
          {faqs.map((item) => (
            <details key={item.q} className="rounded-2xl border border-neutral-200 p-5 bg-white">
              <summary className="font-semibold text-neutral-900 cursor-pointer">{item.q}</summary>
              <p className="mt-3 text-neutral-700">{item.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/book-tour" className="rounded-xl bg-primary px-6 py-3 text-white font-semibold">
            Book a free tour
          </Link>
          <Link href="/contact" className="rounded-xl border-2 border-primary px-6 py-3 text-primary font-semibold">
            Contact
          </Link>
        </div>
      </section>
    </div>
  );
}
