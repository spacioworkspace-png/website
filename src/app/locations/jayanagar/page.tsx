import Link from "next/link";
import Image from "next/image";
import { FaqSection } from "@/components/FaqSection";
import { PublicTransportSection } from "@/components/PublicTransportSection";
import { pageMeta } from "@/lib/seo";
import { SEO_KEYWORDS } from "@/lib/seo-keywords";
import { ADDRESS, MAPS_URL, PHONE_DISPLAY, PHONE_HREF, SITE_FAQS, whatsappUrl } from "@/lib/site";
import { WA } from "@/lib/whatsapp-messages";

export const metadata = pageMeta({
  title: "Coworking Space Near Jayanagar | Spacio Basavanagudi",
  description:
    "Looking for coworking near Jayanagar? Spacio Workspace is a short ride away in Basavanagudi — private cabins, desks, day pass and virtual office.",
  path: "/locations/jayanagar",
  keywords: [
    ...SEO_KEYWORDS.location,
    "coworking near Jayanagar",
    "office space near Jayanagar Bangalore",
  ],
  ogImage: "/images/building-exterior-sree-devi-complex.jpg",
  ogAlt: "Spacio Workspace near Jayanagar in Basavanagudi",
});

const faqs = [
  SITE_FAQS[9],
  SITE_FAQS[0],
  {
    q: "Does Spacio have a branch in Jayanagar?",
    a: "No. Spacio operates one physical centre — in Basavanagudi at N.A.T. Road, Gandhi Bazaar. It is a convenient short trip from Jayanagar for many South Bengaluru professionals.",
  },
  SITE_FAQS[3],
  SITE_FAQS[2],
  SITE_FAQS[8],
];

export default function JayanagarNearbyPage() {
  return (
    <div className="bg-[var(--ivory)] min-h-screen">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow text-[var(--primary)] mb-4">Near Jayanagar · South Bengaluru</p>
          <h1 className="section-title text-3xl md:text-5xl">
            Coworking space near Jayanagar — based in Basavanagudi.
          </h1>
          <div className="champagne-rule my-6" />
          <p className="text-lg text-[var(--muted-grey)] leading-relaxed">
            Spacio Workspace does not have a Jayanagar branch. Our boutique centre sits in Basavanagudi
            on N.A.T. Road, Gandhi Bazaar — a short, familiar ride from Jayanagar for founders, consultants
            and teams across South Bengaluru.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 items-start">
          <div className="relative aspect-[4/3] overflow-hidden bg-[var(--warm-stone)]">
            <Image
              src="/images/building-exterior-sree-devi-complex.jpg"
              alt="Spacio Workspace at Sree Devi Complex, Basavanagudi — near Jayanagar"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-[var(--primary-navy)]">
              How to reach from Jayanagar
            </h2>
            <ul className="mt-5 space-y-3 text-[var(--muted-grey)] leading-relaxed">
              <li>Autos and cabs typically take 10–20 minutes depending on traffic.</li>
              <li>Approach via N.A.T. Road / Gandhi Bazaar into Basavanagudi.</li>
              <li>Lalbagh Metro (Green Line) is about 2.5 km from the centre.</li>
              <li>BMTC routes serve Gandhi Bazaar and surrounding South Bengaluru corridors.</li>
            </ul>
            <p className="mt-6 text-sm text-[var(--charcoal)] leading-relaxed">
              <strong>Spacio Workspace</strong>
              <br />
              {ADDRESS.line}
              <br />
              Phone:{" "}
              <a href={PHONE_HREF} className="font-semibold text-[var(--primary-navy)]">
                {PHONE_DISPLAY}
              </a>
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/book-tour"
                className="inline-flex min-h-[44px] items-center justify-center rounded-sm bg-[var(--primary-navy)] px-5 text-sm font-semibold text-white"
              >
                Schedule a Private Tour
              </Link>
              <a
                href={whatsappUrl(WA.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center rounded-sm border border-[var(--primary-navy)]/25 px-5 text-sm font-semibold text-[var(--primary-navy)]"
              >
                WhatsApp Us
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center rounded-sm border border-[var(--primary-navy)]/25 px-5 text-sm font-semibold text-[var(--primary-navy)]"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { href: "/workspaces/day-pass", label: "Day Pass", detail: "Flexible 9 AM–7 PM coworking days" },
            { href: "/workspaces/dedicated-desks", label: "Dedicated Desks", detail: "A consistent everyday seat" },
            { href: "/workspaces/virtual-office", label: "Virtual Office", detail: "Basavanagudi business address" },
            { href: "/workspaces/solo-cabin", label: "Private Cabins", detail: "Enquire for limited availability" },
            { href: "/workspaces/meeting-rooms", label: "Meeting Rooms", detail: "AV-ready rooms for 4–12" },
            { href: "/locations/basavanagudi", label: "Basavanagudi guide", detail: "Neighbourhood and landmarks" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border border-[var(--warm-stone)] bg-[var(--soft-white)] p-5 hover:border-[var(--champagne)] transition-colors"
            >
              <div className="font-display text-xl text-[var(--primary-navy)]">{item.label}</div>
              <p className="mt-2 text-sm text-[var(--muted-grey)]">{item.detail}</p>
            </Link>
          ))}
        </div>
      </section>

      <PublicTransportSection />
      <FaqSection items={faqs} title="Jayanagar travellers — FAQs" />
    </div>
  );
}
