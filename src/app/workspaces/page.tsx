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
    <div className="bg-white min-h-screen">
      <section className="relative bg-gradient-to-br from-primary/10 via-orange-50/50 to-white overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-50 pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-20">
          <Reveal className="max-w-3xl">
            <span className="badge-premium mb-4 inline-block">Workspace collection</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight">
              Your work. <span className="text-gradient">Your space.</span>
            </h1>
            <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
              Explore Spacio’s options in Basavanagudi. Day pass, virtual office and dedicated desks are easy
              starting points — private cabins available when inventory allows. Membership details on enquiry.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid gap-8">
          {collections.map((item, index) => (
            <Reveal key={item.title} delay={index * 40}>
              <article
                className={`group grid overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm hover:shadow-xl hover:border-primary/30 transition-all md:grid-cols-2 ${
                  index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[16/11] md:aspect-auto md:min-h-[300px] bg-neutral-100">
                  <Image
                    src={item.image}
                    alt={`${item.title} at Spacio Workspace Basavanagudi`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                  />
                </div>
                <div className="flex flex-col justify-center px-6 py-8 md:px-10 md:py-12 bg-gradient-to-br from-white to-orange-50/40">
                  {item.priority ? (
                    <span className="mb-3 inline-flex w-fit rounded-full bg-primary/10 text-primary text-xs font-semibold px-3 py-1">
                      Popular enquiry
                    </span>
                  ) : null}
                  <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">{item.title}</h2>
                  <p className="mt-3 text-neutral-700 leading-relaxed max-w-md">{item.description}</p>
                  <div className="mt-7 flex flex-col sm:flex-row gap-3">
                    <Link
                      href={item.href}
                      className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-primary px-5 text-sm font-semibold text-white hover:bg-primary/90 shadow-md shadow-primary/20"
                    >
                      Explore
                    </Link>
                    <a
                      href={whatsappUrl(item.message)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center justify-center rounded-xl border-2 border-primary/30 px-5 text-sm font-semibold text-primary hover:bg-primary/5"
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

      <section className="bg-gradient-to-br from-primary/15 via-orange-50 to-white">
        <div className="mx-auto max-w-3xl px-4 py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">Not sure which option fits?</h2>
          <p className="mt-4 text-neutral-700">
            Book a free tour — the easiest way to choose between a day pass, desk, cabin or virtual office.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/book-tour"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-primary px-7 text-sm font-semibold text-white shadow-lg shadow-primary/25"
            >
              Book a Free Tour
            </Link>
            <a
              href={whatsappUrl(WA.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl border-2 border-primary px-7 text-sm font-semibold text-primary"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
