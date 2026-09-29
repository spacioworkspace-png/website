import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { CallLink, WhatsAppLink } from "@/components/ContactCtas";
import { TrackedBookTourLink } from "@/components/TrackedBookTourLink";
import { GALLERY_IMAGES } from "@/lib/site";

const QUICK_CHOICES = [
  { href: "/workspaces/day-pass", label: "Work for a day", hint: "From ₹199" },
  { href: "/workspaces/dedicated-desks", label: "Dedicated desk", hint: "From ₹3,499/mo" },
  { href: "/workspaces/solo-cabin", label: "Private cabin", hint: "From ₹8,499/mo" },
  { href: "/workspaces/meeting-rooms", label: "Meeting room", hint: "From ₹399/hr" },
  { href: "/workspaces/virtual-office", label: "Virtual office", hint: "From ₹12,999/yr" },
  { href: "/book-tour", label: "Book a free tour", hint: "See the space" },
];

const WORKSPACE_CARDS = [
  {
    badge: "Private cabin",
    title: "Solo Cabin",
    href: "/workspaces/solo-cabin",
    subtitle: "A quiet enclosed office for one",
    image: "/images/solo-cabin-workspace.jpg",
    pricing: "₹8,499/month",
    features: ["Private room with a door", "1 Gbps internet", "24/7 member access"],
    waCta: "Check Cabin Availability",
    waMessage:
      "Hi! I'm interested in a Solo Cabin at Spacio Workspace, Basavanagudi. Is one available?",
  },
  {
    title: "3-Seater Cabin",
    href: "/workspaces/three-seater-cabin",
    subtitle: "For co-founders and small partners",
    image: "/images/3-seater-cabin-orange-screens.jpg",
    pricing: "₹14,999/month",
    features: ["Seats up to 3", "Whiteboard", "Lockable private cabin"],
    waCta: "Check Cabin Availability",
    waMessage:
      "Hi! I'm interested in a 3-Seater Cabin at Spacio Workspace, Basavanagudi. Is one available?",
  },
  {
    badge: "Teams",
    title: "6-Seater Cabin",
    href: "/workspaces/six-seater-cabin",
    subtitle: "A private office for growing teams",
    image: "/images/6-seater-cabin-workspace.jpg",
    pricing: "₹24,999/month",
    features: ["Seats up to 6", "Room to collaborate", "24/7 member access"],
    waCta: "Check Cabin Availability",
    waMessage:
      "Hi! I'm interested in a 6-Seater Cabin at Spacio Workspace, Basavanagudi. Is one available?",
  },
  {
    badge: "Business address",
    title: "Virtual Office",
    href: "/workspaces/virtual-office",
    subtitle: "GST/ROC address with mail handling",
    image: "/images/building-exterior-sree-devi-complex.jpg",
    pricing: "₹12,999/year",
    features: ["Basavanagudi business address", "Mail handling", "Meeting room credits"],
    waCta: "Get Virtual Office Details",
    waMessage:
      "Hi! I'd like details on the Virtual Office plan at Spacio Workspace, Basavanagudi.",
  },
  {
    title: "Dedicated Desks",
    href: "/workspaces/dedicated-desks",
    subtitle: "Your fixed seat in the shared bay",
    image: "/images/workspace-orange-screens.jpg",
    pricing: "₹3,499/month",
    features: ["Assigned desk", "24/7 member access", "Meeting room access"],
    waCta: "Check Desk Availability",
    waMessage:
      "Hi! I'm interested in a Dedicated Desk at Spacio Workspace, Basavanagudi. Is one available?",
  },
  {
    badge: "By the hour",
    title: "Meeting Rooms",
    href: "/workspaces/meeting-rooms",
    subtitle: "Client-ready rooms with AV",
    image: "/images/meeting-room-frosted-glass.jpg",
    pricing: "₹399/hour",
    features: ["AV for hybrid calls", "Whiteboard", "Rooms for about 4–12"],
    waCta: "Check Room Availability",
    waMessage:
      "Hi! I'd like to check meeting room availability at Spacio Workspace, Basavanagudi.",
  },
];

const WHY_SPACIO = [
  {
    title: "Acoustic soundproof cabins",
    description:
      "Private offices with a door for calls, deep work, and content — quieter than a café, built for real client days.",
  },
  {
    title: "Plug-and-play startup office",
    description:
      "Day pass when you need one day. Dedicated desk when you need a seat. Cabins when your team needs a door.",
  },
  {
    title: "Lightning-fast 1Gbps internet",
    description:
      "Reliable connectivity for video calls and uploads, plus meeting rooms with AV when clients visit.",
  },
  {
    title: "Biometric 24/7 access for members",
    description:
      "Cabin and desk members work on their schedule. Day-pass guests use the centre from 9 AM to 7 PM.",
  },
];

export function HomePage() {
  const spacePhotos = GALLERY_IMAGES.slice(0, 6);

  return (
    <div className="bg-white">
      {/* Quick choice — intent routing */}
      <section
        id="choose"
        className="mx-auto max-w-7xl scroll-mt-16 px-4 sm:px-6 py-10 sm:py-14 border-b border-neutral-100"
        aria-labelledby="quick-choice-heading"
      >
        <div className="text-center mb-8">
          <h2 id="quick-choice-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            What are you looking for?
          </h2>
          <p className="mt-3 text-neutral-600 max-w-xl mx-auto text-sm sm:text-base">
            Jump to the plan that matches your need — or book a tour and see the space first.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {QUICK_CHOICES.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl border border-neutral-200 bg-white px-4 py-4 text-center hover:border-primary hover:bg-primary/5 transition-colors min-h-[88px] flex flex-col items-center justify-center gap-1"
            >
              <span className="font-semibold text-neutral-900 text-sm sm:text-base">{item.label}</span>
              <span className="text-xs text-neutral-500">{item.hint}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Spacio */}
      <section
        className="relative mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 md:py-20 overflow-hidden basavanagudi-heritage"
        aria-labelledby="why-spacio-heading"
      >
        <div className="absolute inset-0 basavanagudi-gradient" aria-hidden />
        <div className="relative z-10 text-center mb-10">
          <span className="badge-premium mb-3 inline-block text-xs sm:text-sm">Why Spacio</span>
          <h2 id="why-spacio-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mt-3">
            A workspace that feels considered
          </h2>
          <p className="mt-3 text-neutral-700 max-w-2xl mx-auto text-sm sm:text-base">
            Premium coworking and private offices in Basavanagudi — designed for professionals who
            want calm, clarity, and a place that looks as serious as their work.
          </p>
        </div>
        <div className="relative z-10 grid md:grid-cols-2 gap-4 sm:gap-6">
          {WHY_SPACIO.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-primary/15 p-6 sm:p-8 bg-white"
            >
              <h3 className="text-xl font-bold text-neutral-900 mb-2">{feature.title}</h3>
              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Workspace options */}
      <section
        id="workspaces"
        className="mx-auto max-w-7xl scroll-mt-16 px-4 sm:px-6 py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-neutral-50/50"
        aria-labelledby="workspaces-heading"
      >
        <div className="mb-8 sm:mb-10 md:mb-12 text-center">
          <span className="badge-premium mb-3 sm:mb-4 inline-block text-xs sm:text-sm">
            Workspace options
          </span>
          <h2
            id="workspaces-heading"
            className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight px-2"
          >
            Choose your workspace
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed px-2">
            Private cabins, dedicated desks, meeting rooms, day passes, and virtual office — all at
            one centre in Basavanagudi, South Bangalore.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WORKSPACE_CARDS.map((card) => (
            <article
              key={card.title}
              className="card-premium card-hover rounded-2xl border-2 border-neutral-200 p-6 bg-white overflow-hidden flex flex-col"
            >
              <div className="aspect-video w-full rounded-xl overflow-hidden mb-4 -mx-6 -mt-6 relative">
                <Image
                  src={card.image}
                  alt={`${card.title} at Spacio Workspace, Basavanagudi`}
                  fill
                  className="object-cover"
                  loading="lazy"
                  quality={65}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              {card.badge ? <span className="badge-premium mb-3 inline-block w-fit">{card.badge}</span> : null}
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                <Link href={card.href} className="hover:text-primary transition-colors">
                  {card.title}
                </Link>
              </h3>
              <p className="text-neutral-600 mb-1">{card.subtitle}</p>
              <p className="text-primary font-semibold text-sm mb-4">{card.pricing}</p>
              <ul className="space-y-2 mb-6 flex-1">
                {card.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" aria-hidden />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-2 mt-auto">
                <WhatsAppLink
                  location={`home-card-${card.title.toLowerCase().replace(/\s+/g, "-")}`}
                  message={card.waMessage}
                  className="w-full text-sm"
                >
                  {card.waCta}
                </WhatsAppLink>
                <Link
                  href={card.href}
                  className="rounded-xl border-2 border-primary/30 px-4 py-2.5 text-sm font-semibold text-center hover:border-primary hover:bg-primary/5 transition-colors min-h-[44px] flex items-center justify-center"
                >
                  View plan
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/workspaces/day-pass"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Looking for a day pass? From ₹199 →
          </Link>
        </div>
      </section>

      {/* The space — visual proof */}
      <section
        className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16"
        aria-labelledby="space-photos-heading"
      >
        <div className="text-center mb-8">
          <h2 id="space-photos-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Inside the centre
          </h2>
          <p className="mt-3 text-neutral-600 max-w-xl mx-auto text-sm sm:text-base">
            Real photos from Spacio Workspace in Basavanagudi — cabins, desks, meeting rooms, and
            the building exterior.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {spacePhotos.map((photo) => (
            <Link
              key={photo.src}
              href="/gallery"
              className="relative aspect-[4/3] rounded-xl overflow-hidden group"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                quality={65}
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link href="/gallery" className="text-primary font-semibold hover:underline">
            View full gallery →
          </Link>
        </div>
      </section>

      {/* Location teaser */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 border-t border-neutral-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mb-3">
            Basavanagudi, South Bangalore
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-6 text-sm sm:text-base">
            Spacio Workspace is at No 7, Sree Devi Complex, NAT Street, Basavanagudi — near Bull
            Temple, Lalbagh, and Gandhi Bazaar. Easy to reach from South Bangalore without a long
            CBD commute.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/locations/basavanagudi"
              className="rounded-xl bg-primary px-5 py-3 text-white font-semibold text-sm hover:bg-primary/90 transition-colors min-h-[44px] inline-flex items-center"
            >
              Location details
            </Link>
            <Link
              href="/reviews"
              className="rounded-xl border border-primary/30 px-5 py-3 font-semibold text-sm hover:bg-primary/5 transition-colors min-h-[44px] inline-flex items-center"
            >
              Read member reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="mx-auto max-w-7xl scroll-mt-16 px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-primary/80 p-6 sm:p-10 md:p-12 text-center text-white shadow-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ready to see the space?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Book a free tour of our Basavanagudi centre, or WhatsApp us with the plan you have in
            mind.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
            <TrackedBookTourLink
              location="home_final_cta"
              className="rounded-xl bg-white text-primary px-6 py-3.5 font-bold text-sm sm:text-base hover:bg-white/90 transition-colors min-h-[48px] flex items-center justify-center"
            >
              Book a Free Tour
            </TrackedBookTourLink>
            <WhatsAppLink
              location="home-final-cta"
              message="Hi! I'd like to know more about Spacio Workspace in Basavanagudi"
              className="!border-2 !border-white/40 !bg-white/10 !text-white hover:!bg-white/20"
              variant="outline"
            >
              WhatsApp Spacio
            </WhatsAppLink>
            <CallLink
              location="home-final-cta"
              className="!border-white/40 !bg-white/10 !text-white hover:!bg-white/20"
              variant="outline"
            >
              Call +91 70227 80310
            </CallLink>
          </div>
        </div>
      </section>

      {/* Soft local context + internal links (preserved SEO anchors, human tone) */}
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-4">
        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4 text-center">
          Coworking and office space in Basavanagudi
        </h2>
        <div className="text-neutral-700 leading-relaxed space-y-4 text-left max-w-3xl mx-auto text-sm sm:text-base">
          <p>
            <strong>Spacio Workspace</strong> is a{" "}
            <Link href="/locations/basavanagudi" className="text-primary font-semibold hover:underline">
              coworking space in Basavanagudi, Bangalore
            </Link>
            . Choose{" "}
            <Link href="/workspaces/solo-cabin" className="text-primary hover:underline">
              private cabins
            </Link>
            ,{" "}
            <Link href="/workspaces/dedicated-desks" className="text-primary hover:underline">
              dedicated desks
            </Link>
            ,{" "}
            <Link href="/workspaces/meeting-rooms" className="text-primary hover:underline">
              meeting rooms
            </Link>
            , a{" "}
            <Link href="/workspaces/day-pass" className="text-primary hover:underline">
              day pass
            </Link>
            , or a{" "}
            <Link href="/workspaces/virtual-office" className="text-primary hover:underline">
              virtual office
            </Link>{" "}
            — all at one centre on NAT Street.
          </p>
          <p>
            See{" "}
            <Link href="/pricing" className="text-primary hover:underline">
              workspace pricing
            </Link>
            ,{" "}
            <Link href="/book-tour" className="text-primary font-semibold hover:underline">
              book a free tour
            </Link>
            , or{" "}
            <Link href="/contact" className="text-primary hover:underline">
              contact the team
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
