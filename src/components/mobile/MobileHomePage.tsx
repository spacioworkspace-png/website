import Image from "next/image";
import Link from "next/link";
import { FaqSection } from "@/components/FaqSection";
import { GoogleReviews } from "@/components/GoogleReviews";
import { MobileGallery } from "@/components/mobile/MobileGallery";
import { Reveal } from "@/components/Reveal";
import { WorkspaceVideoTour } from "@/components/WorkspaceVideoTour";
import { CustomerTestimonialVideo } from "@/components/CustomerTestimonialVideo";
import { TestimonialVideoJsonLd } from "@/components/TestimonialVideoJsonLd";
import { ADDRESS, MAPS_URL, OVERVIEW_VIDEO_TOUR, SITE_FAQS, whatsappUrl } from "@/lib/site";
import { CUSTOMER_TESTIMONIALS } from "@/lib/testimonials";
import { WA } from "@/lib/whatsapp-messages";

const WORKSPACES = [
  {
    title: "Private Cabins",
    description: "Your own space to focus, build and grow — solo, 3-seater and 6-seater.",
    href: "/workspaces/solo-cabin",
    image: "/images/solo-cabin-workspace.jpg",
    cta: "Explore Private Cabins",
    message: WA.privateCabin,
  },
  {
    title: "Dedicated Desks",
    description: "A consistent workspace for your everyday routine.",
    href: "/workspaces/dedicated-desks",
    image: "/images/workspace-numbered-cabins.jpg",
    cta: "Discover Dedicated Desks",
    message: WA.dedicatedDesk,
  },
  {
    title: "Day Pass",
    description: "Step into a better working day.",
    href: "/workspaces/day-pass",
    image: "/images/workspace-yellow-green-walls.jpg",
    cta: "Explore Day Pass",
    message: WA.dayPass,
  },
  {
    title: "Virtual Office",
    description: "A professional business presence, wherever you work.",
    href: "/workspaces/virtual-office",
    image: "/images/building-exterior-sree-devi-complex.jpg",
    cta: "Explore Virtual Office",
    message: WA.virtualOffice,
  },
  {
    title: "Meeting Rooms",
    description: "Make every conversation count.",
    href: "/workspaces/meeting-rooms",
    image: "/images/meeting-room-frosted-glass.jpg",
    cta: "Explore Meeting Rooms",
    message: WA.meetingRoom,
  },
];

const WHY = [
  {
    title: "Thoughtfully designed spaces",
    description: "Calm interiors that support focus, clients and collaboration.",
  },
  {
    title: "Flexible options",
    description: "Cabins, desks, day pass, meeting rooms and virtual office.",
  },
  {
    title: "Personal attention",
    description: "A boutique centre where you can speak with people who know the space.",
  },
  {
    title: "South Bengaluru base",
    description: "Rooted in Basavanagudi, connected to Jayanagar, Lalbagh and beyond.",
  },
];

export function MobileHomePage() {
  return (
    <div className="mobile-shell pb-8">
      {/* Brand intro */}
      <section className="px-[var(--m-pad)] py-14 border-b border-[var(--m-stone)]">
        <Reveal>
          <p className="m-eyebrow text-[var(--m-navy)]">A more considered way to work</p>
          <h2 className="m-serif m-h2 mt-3 text-[var(--m-navy)]">Work deserves a better setting.</h2>
          <div className="m-rule" />
          <p className="m-body">
            Some ideas need silence. Some need collaboration. Others need a room where the next big decision
            can happen. At Spacio, these experiences come together in Basavanagudi.
          </p>
        </Reveal>
        <Reveal delay={80}>
          <div className="relative mt-8 aspect-[4/5] overflow-hidden bg-[var(--m-stone)]">
            <Image
              src="/images/solo-cabin-workspace.jpg"
              alt="Quiet private cabin at Spacio Workspace"
              fill
              className="object-cover"
              sizes="100vw"
              loading="lazy"
            />
          </div>
        </Reveal>
      </section>

      {/* Workspaces */}
      <section className="py-14" aria-labelledby="mobile-workspaces-heading">
        <div className="px-[var(--m-pad)] mb-8">
          <p className="m-eyebrow text-[var(--m-navy)]">Workspace collection</p>
          <h2 id="mobile-workspaces-heading" className="m-serif m-h2 mt-3 text-[var(--m-navy)]">
            Your work. Your space.
          </h2>
        </div>
        <div className="space-y-10">
          {WORKSPACES.map((space) => (
            <article key={space.title} className="px-[var(--m-pad)]">
              <div className="relative aspect-[16/11] overflow-hidden bg-[var(--m-stone)]">
                <Image
                  src={space.image}
                  alt={`${space.title} at Spacio Workspace`}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  loading="lazy"
                />
              </div>
              <h3 className="m-serif mt-5 text-2xl text-[var(--m-navy)]">{space.title}</h3>
              <p className="mt-2 m-body">{space.description}</p>
              <div className="mt-5 flex flex-col gap-2.5">
                <Link href={space.href} className="m-btn m-btn-navy w-full">
                  {space.cta}
                </Link>
                <a
                  href={whatsappUrl(space.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="m-btn m-btn-outline w-full"
                >
                  WhatsApp Enquiry
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-14 border-y border-[var(--m-stone)] bg-[var(--m-white)]" aria-labelledby="mobile-gallery-heading">
        <div className="px-[var(--m-pad)] mb-6">
          <p className="m-eyebrow text-[var(--m-navy)]">Photography</p>
          <h2 id="mobile-gallery-heading" className="m-serif m-h2 mt-3 text-[var(--m-navy)]">
            See the space.
          </h2>
          <p className="m-body mt-3">Swipe through authentic Spacio photographs. Tap to expand.</p>
        </div>
        <MobileGallery />
        <p className="px-[var(--m-pad)] mt-5 text-sm">
          <Link href="/gallery" className="font-semibold text-[var(--m-navy)] underline-offset-2 hover:underline">
            Open full gallery
          </Link>
        </p>
      </section>

      {/* Why */}
      <section className="px-[var(--m-pad)] py-14" aria-labelledby="mobile-why-heading">
        <p className="m-eyebrow text-[var(--m-navy)]">Why Spacio</p>
        <h2 id="mobile-why-heading" className="m-serif m-h2 mt-3 text-[var(--m-navy)]">
          Designed around the way you work.
        </h2>
        <div className="mt-8 space-y-6">
          {WHY.map((item) => (
            <div key={item.title} className="border-t border-[var(--m-champagne)] pt-5">
              <h3 className="m-serif text-xl text-[var(--m-navy)]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--m-muted)]">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Video tour */}
      <section className="py-14 bg-[var(--m-white)] border-y border-[var(--m-stone)]" aria-labelledby="mobile-video-heading">
        <TestimonialVideoJsonLd testimonials={CUSTOMER_TESTIMONIALS} pagePath="/" />
        <div className="px-[var(--m-pad)] mb-6">
          <p className="m-eyebrow text-[var(--m-navy)]">Workspace tour</p>
          <h2 id="mobile-video-heading" className="m-serif m-h2 mt-3 text-[var(--m-navy)]">
            A closer look at Spacio.
          </h2>
        </div>
        <div className="px-[var(--m-pad)]">
          <WorkspaceVideoTour
            id="mobile-home-overview-tour"
            src={OVERVIEW_VIDEO_TOUR.src}
            poster={OVERVIEW_VIDEO_TOUR.poster}
            title={OVERVIEW_VIDEO_TOUR.title}
            description={OVERVIEW_VIDEO_TOUR.description}
          />
        </div>
        <div className="mt-8 space-y-6 px-[var(--m-pad)]">
          {CUSTOMER_TESTIMONIALS.map((t) => (
            <div key={t.id} className="border border-[var(--m-stone)] bg-[var(--m-ivory)] p-3">
              <CustomerTestimonialVideo testimonial={t} preload="none" />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials / reviews */}
      <section className="px-[var(--m-pad)] py-14" aria-labelledby="mobile-stories-heading">
        <p className="m-eyebrow text-[var(--m-navy)]">Member stories</p>
        <h2 id="mobile-stories-heading" className="m-serif m-h2 mt-3 text-[var(--m-navy)]">
          Good work starts with the right environment.
        </h2>
        <div className="mt-8">
          <GoogleReviews />
        </div>
        <p className="mt-6 text-sm">
          <Link href="/reviews" className="font-semibold text-[var(--m-navy)] hover:underline">
            View all member stories
          </Link>
        </p>
      </section>

      {/* Location */}
      <section className="px-[var(--m-pad)] py-14 border-t border-[var(--m-stone)]" aria-labelledby="mobile-location-heading">
        <p className="m-eyebrow text-[var(--m-navy)]">Location</p>
        <h2 id="mobile-location-heading" className="m-serif m-h2 mt-3 text-[var(--m-navy)]">
          Rooted in Basavanagudi.
        </h2>
        <div className="m-rule" />
        <p className="m-serif text-xl text-[var(--m-navy)]">Spacio Workspace</p>
        <p className="mt-2 m-body">{ADDRESS.line}.</p>
        <p className="mt-3 text-sm text-[var(--m-muted)]">
          Near Gandhi Bazaar, with easy links to Jayanagar, Banashankari and Lalbagh. One physical centre —
          Basavanagudi.
        </p>
        <div className="mt-6 overflow-hidden border border-[var(--m-stone)] aspect-[4/3] bg-[var(--m-stone)]">
          <iframe
            title="Spacio Workspace on Google Maps"
            src="https://www.google.com/maps?q=Spacio+Workspace+Basavanagudi&output=embed"
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <div className="mt-5 flex flex-col gap-2.5">
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="m-btn m-btn-navy w-full">
            Get Directions
          </a>
          <Link href="/locations/basavanagudi" className="m-btn m-btn-outline w-full">
            Neighbourhood guide
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <div className="bg-[var(--m-white)]">
        <FaqSection items={SITE_FAQS} title="Everything you need to know." />
      </div>

      {/* Final CTA */}
      <section className="bg-[var(--m-midnight)] px-[var(--m-pad)] py-16 text-center text-white">
        <p className="m-eyebrow">Visit Spacio</p>
        <h2 className="m-serif m-h2 mt-4 text-white">Your next chapter starts somewhere.</h2>
        <p className="mt-4 text-white/70 text-[0.975rem] leading-relaxed">
          The best way to understand Spacio is to experience it in person.
        </p>
        <div className="mt-8 flex flex-col gap-3">
          <Link href="/book-tour" className="m-btn m-btn-primary w-full">
            Schedule a Private Tour
          </Link>
          <a
            href={whatsappUrl(WA.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="m-btn m-btn-secondary w-full"
          >
            Chat with Our Team
          </a>
        </div>
      </section>
    </div>
  );
}
