import Image from "next/image";
import Link from "next/link";
import { FaqSection } from "@/components/FaqSection";
import { GoogleReviews } from "@/components/GoogleReviews";
import { HomeVideoShowcase } from "@/components/home/HomeVideoShowcase";
import { Reveal } from "@/components/Reveal";
import {
  ADDRESS,
  MAPS_URL,
  SITE_FAQS,
  whatsappUrl,
} from "@/lib/site";
import { WA } from "@/lib/whatsapp-messages";

const WORKSPACES = [
  {
    title: "Private Cabins",
    eyebrow: "Enclosed focus",
    href: "/workspaces/solo-cabin",
    image: "/images/solo-cabin-workspace.jpg",
    description: "Your own space to focus, build and grow — solo, 3-seater and 6-seater layouts.",
    cta: "Explore Private Cabins",
    message: WA.privateCabin,
    layout: "wide" as const,
  },
  {
    title: "Dedicated Desks",
    eyebrow: "Everyday rhythm",
    href: "/workspaces/dedicated-desks",
    image: "/images/workspace-numbered-cabins.jpg",
    description: "A consistent workspace for your everyday routine, with storage and member access.",
    cta: "Discover Dedicated Desks",
    message: WA.dedicatedDesk,
    layout: "half" as const,
  },
  {
    title: "Day Pass",
    eyebrow: "Flexible days",
    href: "/workspaces/day-pass",
    image: "/images/workspace-yellow-green-walls.jpg",
    description: "Step into a better working day — productive coworking from 9 AM to 7 PM.",
    cta: "Explore Day Pass",
    message: WA.dayPass,
    layout: "half" as const,
  },
  {
    title: "Virtual Office",
    eyebrow: "Business presence",
    href: "/workspaces/virtual-office",
    image: "/images/building-exterior-sree-devi-complex.jpg",
    description: "A professional business presence in Basavanagudi, wherever you work.",
    cta: "Explore Virtual Office",
    message: WA.virtualOffice,
    layout: "half" as const,
  },
  {
    title: "Meeting Rooms",
    eyebrow: "Conversations that matter",
    href: "/workspaces/meeting-rooms",
    image: "/images/meeting-room-frosted-glass.jpg",
    description: "Make every conversation count — AV-ready rooms for clients, interviews and teams.",
    cta: "Explore Meeting Rooms",
    message: WA.meetingRoom,
    layout: "half" as const,
  },
];

const EXPERIENCE = [
  {
    title: "Thoughtfully designed interiors",
    description: "Calm finishes, natural light and quiet detailing that support focused work.",
    image: "/images/office-corridor-glass-partitions.jpg",
  },
  {
    title: "Professional working environment",
    description: "A composed setting suited to client visits, deep work and collaboration.",
    image: "/images/workspace-orange-screens.jpg",
  },
  {
    title: "Reliable connectivity",
    description: "1Gbps fibre for calls, code, design files and everyday business tools.",
    image: "/images/workspace-green-screens.jpg",
  },
  {
    title: "Accessible South Bengaluru location",
    description: "Rooted in Basavanagudi near Gandhi Bazaar, with easy links across the south.",
    image: "/images/spacio-sign-green-wall.jpg",
  },
];

const WHY = [
  {
    title: "Thoughtfully designed spaces",
    description: "Interiors that feel considered — not generic — so work can unfold with clarity.",
  },
  {
    title: "Flexible workspace solutions",
    description: "Cabins, desks, day passes, meeting rooms and virtual office, matched to how you work.",
  },
  {
    title: "Professional environment",
    description: "A quiet, business-ready setting for founders, consultants, agencies and growing teams.",
  },
  {
    title: "Personal attention",
    description: "A boutique centre where you can speak with people who know the space.",
  },
  {
    title: "Well-connected location",
    description: "Basavanagudi links easily to Jayanagar, Banashankari, Lalbagh and the rest of South Bengaluru.",
  },
];

export function HomePage() {
  return (
    <div className="bg-[var(--ivory)] text-[var(--charcoal)]">
      {/* 02 — Brand introduction */}
      <section className="border-b border-[var(--warm-stone)]" aria-labelledby="intro-heading">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:gap-16 md:py-28 sm:px-6 items-center">
          <Reveal>
            <p className="eyebrow text-[var(--primary)] mb-4">A more considered way to work</p>
            <h2 id="intro-heading" className="section-title text-3xl md:text-5xl">
              Work deserves a better setting.
            </h2>
            <div className="champagne-rule my-6" />
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-[var(--muted-grey)]">
              <p>Some ideas need silence. Some need collaboration. Others need a room where the next big decision can happen.</p>
              <p>
                At Spacio, we bring these experiences together in a thoughtfully designed workspace for
                professionals, independent minds and growing businesses.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="group relative aspect-[4/5] overflow-hidden bg-[var(--warm-stone)]">
              <Image
                src="/images/solo-cabin-workspace.jpg"
                alt="Quiet private cabin at Spacio Workspace Basavanagudi"
                fill
                className="object-cover img-zoom"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 — Workspace collection */}
      <section id="explore" className="mx-auto max-w-7xl px-4 py-16 md:py-24 sm:px-6" aria-labelledby="collection-heading">
        <Reveal className="max-w-2xl mb-12 md:mb-16">
          <p className="eyebrow text-[var(--primary)] mb-4">Workspace collection</p>
          <h2 id="collection-heading" className="section-title text-3xl md:text-5xl">
            Your work. Your space.
          </h2>
          <p className="mt-4 text-[var(--muted-grey)] leading-relaxed">
            Architectural showcases of how you can work at Spacio — enquire for availability. Membership
            details are shared privately.
          </p>
        </Reveal>

        <div className="grid gap-8 md:gap-10">
          {WORKSPACES.map((space, index) => (
            <Reveal key={space.title} delay={index * 40}>
              <article
                className={`group grid gap-6 overflow-hidden border border-[var(--warm-stone)] bg-[var(--soft-white)] md:gap-0 ${
                  space.layout === "wide" ? "md:grid-cols-2" : "md:grid-cols-2"
                } ${index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}
              >
                <div className={`relative overflow-hidden bg-[var(--warm-stone)] ${space.layout === "wide" ? "aspect-[16/11] md:aspect-auto md:min-h-[420px]" : "aspect-[4/3] md:min-h-[320px]"}`}>
                  <Image
                    src={space.image}
                    alt={`${space.title} at Spacio Workspace Basavanagudi`}
                    fill
                    className="object-cover img-zoom"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-col justify-center px-6 py-8 md:px-12 md:py-14">
                  <p className="eyebrow text-[var(--primary)] mb-3">{space.eyebrow}</p>
                  <h3 className="font-display text-2xl md:text-4xl text-[var(--primary-navy)] tracking-tight">
                    {space.title}
                  </h3>
                  <p className="mt-4 text-[var(--muted-grey)] leading-relaxed max-w-md">{space.description}</p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <Link
                      href={space.href}
                      className="inline-flex min-h-[44px] items-center justify-center rounded-sm bg-[var(--primary-navy)] px-5 text-sm font-semibold text-white hover:bg-[var(--navy-deep)] transition-colors"
                    >
                      {space.cta}
                    </Link>
                    <a
                      href={whatsappUrl(space.message)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center justify-center rounded-sm border border-[var(--primary-navy)]/20 px-5 text-sm font-semibold text-[var(--primary-navy)] hover:border-[var(--primary-navy)] transition-colors"
                    >
                      WhatsApp Enquiry
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 04 — Experience */}
      <section className="bg-[var(--soft-white)] border-y border-[var(--warm-stone)]" aria-labelledby="experience-heading">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 sm:px-6">
          <Reveal className="max-w-2xl mb-12">
            <p className="eyebrow text-[var(--primary)] mb-4">The Spacio experience</p>
            <h2 id="experience-heading" className="section-title text-3xl md:text-5xl">
              More than a place to work.
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {EXPERIENCE.map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <article className="group">
                  <div className="relative aspect-[16/10] overflow-hidden bg-[var(--warm-stone)] mb-5">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover img-zoom"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <h3 className="font-display text-xl md:text-2xl text-[var(--primary-navy)]">{item.title}</h3>
                  <p className="mt-2 text-sm md:text-base text-[var(--muted-grey)] leading-relaxed">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — Cinematic tour + testimonials embedded in showcase */}
      <HomeVideoShowcase />

      {/* 06 — Why Spacio */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24 sm:px-6" aria-labelledby="why-heading">
        <Reveal className="max-w-2xl mb-12">
          <p className="eyebrow text-[var(--primary)] mb-4">Why Spacio</p>
          <h2 id="why-heading" className="section-title text-3xl md:text-5xl">
            Designed around the way you work.
          </h2>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {WHY.map((item, i) => (
            <Reveal key={item.title} delay={i * 50}>
              <div className="border-t border-[var(--champagne)] pt-6">
                <h3 className="font-display text-xl text-[var(--primary-navy)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted-grey)]">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 07 — Member testimonials / reviews */}
      <section className="bg-[var(--soft-white)] border-y border-[var(--warm-stone)]" aria-labelledby="stories-heading">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 sm:px-6">
          <Reveal className="max-w-2xl mb-10 text-center mx-auto">
            <p className="eyebrow text-[var(--primary)] mb-4">Member stories</p>
            <h2 id="stories-heading" className="section-title text-3xl md:text-5xl">
              Good work starts with the right environment.
            </h2>
            <p className="mt-4 text-[var(--muted-grey)]">
              Watch member videos in the tour above, or explore Google reviews from people who work here.
            </p>
          </Reveal>
          <GoogleReviews />
          <p className="mt-8 text-center text-sm text-[var(--muted-grey)]">
            <Link href="/reviews" className="font-semibold text-[var(--primary-navy)] hover:underline">
              View all member stories
            </Link>
          </p>
        </div>
      </section>

      {/* 08 — Location */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24 sm:px-6" aria-labelledby="location-heading">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
          <Reveal>
            <p className="eyebrow text-[var(--primary)] mb-4">Location</p>
            <h2 id="location-heading" className="section-title text-3xl md:text-5xl">
              Rooted in Basavanagudi. Connected to South Bengaluru.
            </h2>
            <div className="champagne-rule my-6" />
            <p className="font-display text-xl text-[var(--primary-navy)]">Spacio Workspace</p>
            <p className="mt-3 text-[var(--muted-grey)] leading-relaxed">
              {ADDRESS.line}.
            </p>
            <p className="mt-4 text-sm text-[var(--muted-grey)] leading-relaxed">
              Near Gandhi Bazaar, with easy connections to Jayanagar, Banashankari, Lalbagh and the wider
              South Bengaluru corridor. Spacio operates one physical centre — in Basavanagudi.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center rounded-sm bg-[var(--primary-navy)] px-5 text-sm font-semibold text-white"
              >
                Get Directions
              </a>
              <Link
                href="/locations/basavanagudi"
                className="inline-flex min-h-[44px] items-center justify-center rounded-sm border border-[var(--primary-navy)]/25 px-5 text-sm font-semibold text-[var(--primary-navy)]"
              >
                Explore the neighbourhood
              </Link>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="overflow-hidden border border-[var(--warm-stone)] bg-[var(--warm-stone)] aspect-[4/3]">
              <iframe
                title="Spacio Workspace on Google Maps"
                src="https://www.google.com/maps?q=Spacio+Workspace+Basavanagudi&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 09 — FAQ */}
      <FaqSection items={SITE_FAQS} title="Everything you need to know." />

      {/* 10 — Final conversion */}
      <section className="bg-[var(--navy-deep)] text-white" aria-labelledby="final-cta-heading">
        <div className="mx-auto max-w-3xl px-4 py-20 md:py-28 text-center sm:px-6">
          <Reveal>
            <p className="eyebrow mb-5">Visit Spacio</p>
            <h2 id="final-cta-heading" className="font-display text-3xl md:text-5xl font-medium tracking-tight">
              Your next chapter starts somewhere.
            </h2>
            <p className="mt-5 text-white/70 leading-relaxed">
              The best way to understand Spacio is to experience it in person.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/book-tour"
                className="inline-flex min-h-[48px] items-center justify-center rounded-sm bg-[var(--champagne)] px-7 text-sm font-semibold text-[var(--navy-deep)]"
              >
                Schedule a Private Tour
              </Link>
              <a
                href={whatsappUrl(WA.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center rounded-sm border border-white/30 px-7 text-sm font-semibold text-white"
              >
                Chat with Our Team
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
