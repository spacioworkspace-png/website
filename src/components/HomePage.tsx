import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, MapPin } from "lucide-react";
import { FaqSection } from "@/components/FaqSection";
import { GoogleReviews } from "@/components/GoogleReviews";
import { HomeVideoShowcase } from "@/components/home/HomeVideoShowcase";
import {
  ADDRESS,
  GALLERY_IMAGES,
  MAPS_URL,
  SITE_FAQS,
  whatsappUrl,
} from "@/lib/site";
import { WA } from "@/lib/whatsapp-messages";

const SERVICE_CARDS = [
  {
    title: "Private Cabins",
    href: "/workspaces/solo-cabin",
    image: "/images/solo-cabin-workspace.jpg",
    description: "Enclosed cabins for focused work — solo, 3-seater and 6-seater layouts.",
    cta: "Explore Private Cabins",
    message: WA.privateCabin,
  },
  {
    title: "Dedicated Desks",
    href: "/workspaces/dedicated-desks",
    image: "/images/workspace-numbered-cabins.jpg",
    description: "Your assigned desk with storage and 24/7 member access.",
    cta: "Explore Dedicated Desks",
    message: WA.dedicatedDesk,
  },
  {
    title: "Day Pass",
    href: "/workspaces/day-pass",
    image: "/images/workspace-yellow-green-walls.jpg",
    description: "A full day of productive coworking when you need flexibility.",
    cta: "Enquire About Day Pass",
    message: WA.dayPass,
  },
  {
    title: "Virtual Office",
    href: "/workspaces/virtual-office",
    image: "/images/building-exterior-sree-devi-complex.jpg",
    description: "A professional Basavanagudi address with mail handling support.",
    cta: "Get Virtual Office Details",
    message: WA.virtualOffice,
  },
  {
    title: "Meeting Rooms",
    href: "/workspaces/meeting-rooms",
    image: "/images/meeting-room-frosted-glass.jpg",
    description: "AV-ready rooms for client meetings, interviews and team sessions.",
    cta: "Enquire About Meeting Rooms",
    message: WA.meetingRoom,
  },
];

const WHY = [
  {
    title: "Premium interiors",
    description: "Calm, thoughtfully finished spaces designed for focus and client visits.",
  },
  {
    title: "Business-ready infrastructure",
    description: "High-speed internet, secure access and spaces that support real work.",
  },
  {
    title: "Flexible options",
    description: "Cabins, desks, day passes, meeting rooms and virtual office — pick what fits.",
  },
  {
    title: "Basavanagudi location",
    description: "A convenient South Bengaluru base near Gandhi Bazaar, Bull Temple and Lalbagh.",
  },
];

const gallery = GALLERY_IMAGES.filter((img) => !img.src.includes("og-image")).slice(0, 6);

export function HomePage() {
  return (
    <div className="bg-white">
      <HomeVideoShowcase />

      {/* Explore workspace */}
      <section id="explore" className="mx-auto max-w-7xl px-4 py-14 md:py-20" aria-labelledby="explore-heading">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">Workspace</p>
          <h2 id="explore-heading" className="text-3xl md:text-4xl font-bold text-neutral-900">
            Explore our workspace
          </h2>
          <p className="mt-3 text-neutral-600">
            Clear options for how you work — enquire for membership details and availability.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_CARDS.map((card) => (
            <article
              key={card.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white"
            >
              <div className="relative aspect-[4/3] bg-neutral-100">
                <Image
                  src={card.image}
                  alt={`${card.title} at Spacio Workspace Basavanagudi`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-xl font-bold text-neutral-900">
                  <Link href={card.href} className="hover:text-primary transition-colors">
                    {card.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed flex-1">{card.description}</p>
                <div className="mt-5 flex flex-col gap-2">
                  <Link
                    href={card.href}
                    className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary/90"
                  >
                    {card.cta}
                  </Link>
                  <a
                    href={whatsappUrl(card.message)}
                    className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-neutral-300 px-4 py-2.5 text-sm font-semibold text-neutral-800 hover:border-primary hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp About This
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why Spacio */}
      <section className="bg-primary text-white py-14 md:py-20" aria-labelledby="why-heading">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center mb-10">
            <h2 id="why-heading" className="text-3xl md:text-4xl font-bold">
              Why Spacio Workspace
            </h2>
            <p className="mt-3 text-white/80">
              A professional environment in Basavanagudi — without the noise of a generic coworking template.
            </p>
          </div>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((item) => (
              <li key={item.title} className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
                <CheckCircle2 className="w-5 h-5 mb-3 text-white/90" aria-hidden />
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-white/75 leading-relaxed">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-4 py-14 md:py-20" aria-labelledby="gallery-heading">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">Gallery</p>
            <h2 id="gallery-heading" className="text-3xl md:text-4xl font-bold text-neutral-900">
              The space, as it is
            </h2>
          </div>
          <Link href="/gallery" className="text-sm font-semibold text-primary hover:underline">
            View full gallery →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {gallery.map((img) => (
            <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Social proof */}
      <section className="border-y border-neutral-100 bg-neutral-50" aria-labelledby="trust-heading">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <h2 id="trust-heading" className="sr-only">
            Member testimonials and Google reviews
          </h2>
          <GoogleReviews />
          <p className="text-center text-sm text-neutral-600 pb-6">
            Watch member videos above, or{" "}
            <Link href="/reviews" className="font-semibold text-primary hover:underline">
              read more reviews
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Location */}
      <section className="mx-auto max-w-7xl px-4 py-14 md:py-20" aria-labelledby="location-heading">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">Location</p>
            <h2 id="location-heading" className="text-3xl md:text-4xl font-bold text-neutral-900">
              Basavanagudi, South Bengaluru
            </h2>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              Spacio Workspace sits on N.A.T. Road in Basavanagudi, close to Gandhi Bazaar — a practical base for
              professionals who work across South Bengaluru.
            </p>
            <div className="mt-6 flex gap-3 text-sm text-neutral-700">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden />
              <div>
                <p className="font-semibold text-neutral-900">{ADDRESS.line}</p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block font-semibold text-primary hover:underline"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/locations/basavanagudi"
                className="rounded-xl border border-neutral-300 px-5 py-3 text-sm font-semibold hover:border-primary hover:text-primary min-h-[44px] inline-flex items-center"
              >
                Directions & transit
              </Link>
              <a
                href={whatsappUrl(WA.tour)}
                className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary/90 min-h-[44px] inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Plan a visit on WhatsApp
              </a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100">
            <iframe
              className="aspect-video w-full min-h-[280px]"
              loading="lazy"
              title="Map of Spacio Workspace, Basavanagudi"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Spacio%20Workspace%20Basavanagudi%20Sree%20Devi%20Complex&output=embed"
            />
          </div>
        </div>
      </section>

      <FaqSection items={SITE_FAQS} title="Questions people ask about Spacio" />

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-16 md:pb-24">
        <div className="rounded-3xl bg-primary px-6 py-12 md:px-12 md:py-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Let&apos;s Find the Right Workspace for You.
          </h2>
          <p className="mt-4 text-white/85 max-w-xl mx-auto">
            Tell us what you are looking for. Our team will help you explore the right workspace solution.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3">
            <a
              href={whatsappUrl(WA.general)}
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#25D366] px-6 py-3 font-semibold text-white hover:bg-[#1ebe57]"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Our Team
            </a>
            <Link
              href="/book-tour"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-primary hover:bg-white/90"
            >
              Book a Tour
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
