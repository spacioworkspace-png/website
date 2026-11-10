import Image from "next/image";
import Link from "next/link";
import { PlanVideoSection } from "@/components/PlanVideoSection";
import { PublicTransportSection } from "@/components/PublicTransportSection";
import { Reveal } from "@/components/Reveal";
import { whatsappUrl } from "@/lib/site";
import { WA } from "@/lib/whatsapp-messages";

const collections = [
  {
    title: "Private Cabins",
    description: "Enclosed cabins for focused work — solo, 3-seater and 6-seater. Limited availability.",
    image: "/images/solo-cabin-workspace.jpg",
    href: "/workspaces/solo-cabin",
    message: WA.privateCabin,
    priority: false,
  },
  {
    title: "Dedicated Desks",
    description: "A consistent everyday seat with storage and 24/7 member access.",
    image: "/images/workspace-numbered-cabins.jpg",
    href: "/workspaces/dedicated-desks",
    message: WA.dedicatedDesk,
    priority: true,
  },
  {
    title: "Day Pass",
    description: "Step into a better working day — 9 AM to 7 PM coworking access.",
    image: "/images/workspace-yellow-green-walls.jpg",
    href: "/workspaces/day-pass",
    message: WA.dayPass,
    priority: true,
  },
  {
    title: "Virtual Office",
    description: "A Basavanagudi business address with mail handling and documentation guidance.",
    image: "/images/building-exterior-sree-devi-complex.jpg",
    href: "/workspaces/virtual-office",
    message: WA.virtualOffice,
    priority: true,
  },
  {
    title: "Meeting Rooms",
    description: "AV-ready rooms for about 4–12 people — enquire for your slot.",
    image: "/images/meeting-room-frosted-glass.jpg",
    href: "/workspaces/meeting-rooms",
    message: WA.meetingRoom,
    priority: false,
  },
];

export default function WorkspacesPage() {
  return (
    <div className="bg-[var(--ivory)] min-h-screen">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-[var(--primary)] mb-4">Workspace collection</p>
          <h1 className="section-title text-3xl md:text-5xl">Your work. Your space.</h1>
          <div className="champagne-rule my-6" />
          <p className="text-lg text-[var(--muted-grey)] leading-relaxed">
            Explore Spacio’s workspace options in Basavanagudi. We prioritise day pass, virtual office and
            dedicated desk enquiries while private cabins remain available when inventory allows. Membership
            details are shared on enquiry — never published as public rates.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8">
          {collections.map((item, index) => (
            <Reveal key={item.title} delay={index * 40}>
              <article
                className={`group grid overflow-hidden border border-[var(--warm-stone)] bg-[var(--soft-white)] md:grid-cols-2 ${
                  index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[16/11] md:aspect-auto md:min-h-[320px] bg-[var(--warm-stone)]">
                  <Image
                    src={item.image}
                    alt={`${item.title} at Spacio Workspace Basavanagudi`}
                    fill
                    className="object-cover img-zoom"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                  />
                </div>
                <div className="flex flex-col justify-center px-6 py-8 md:px-10 md:py-12">
                  {item.priority ? (
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--champagne)] mb-3">
                      Popular enquiry
                    </p>
                  ) : null}
                  <h2 className="font-display text-2xl md:text-3xl text-[var(--primary-navy)]">{item.title}</h2>
                  <p className="mt-3 text-[var(--muted-grey)] leading-relaxed max-w-md">{item.description}</p>
                  <div className="mt-7 flex flex-col sm:flex-row gap-3">
                    <Link
                      href={item.href}
                      className="inline-flex min-h-[44px] items-center justify-center rounded-sm bg-[var(--primary-navy)] px-5 text-sm font-semibold text-white"
                    >
                      Explore
                    </Link>
                    <a
                      href={whatsappUrl(item.message)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center justify-center rounded-sm border border-[var(--primary-navy)]/25 px-5 text-sm font-semibold text-[var(--primary-navy)]"
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

      <PlanVideoSection showAllTours />
      <PublicTransportSection />

      <section className="bg-[var(--navy-deep)] text-white">
        <div className="mx-auto max-w-3xl px-4 py-16 md:py-20 text-center sm:px-6">
          <h2 className="font-display text-3xl md:text-4xl font-medium">Not sure which option fits?</h2>
          <p className="mt-4 text-white/70">
            Schedule a private tour — the clearest way to choose between a day pass, desk, cabin or virtual office.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
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
              className="inline-flex min-h-[48px] items-center justify-center rounded-sm border border-white/30 px-7 text-sm font-semibold"
            >
              Chat with Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
