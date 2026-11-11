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
    <div className="bg-white min-h-screen">
      <section className="relative bg-gradient-to-br from-primary/10 via-orange-50/40 to-white overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-40 pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="max-w-3xl">
            <span className="badge-premium mb-4 inline-block">Near Jayanagar · South Bengaluru</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight">
              Coworking space near Jayanagar — based in{" "}
              <span className="text-gradient">Basavanagudi</span>.
            </h1>
            <p className="mt-5 text-lg text-neutral-700 leading-relaxed">
              Spacio Workspace does not have a Jayanagar branch. Our centre sits in Basavanagudi on N.A.T. Road,
              Gandhi Bazaar — a short ride from Jayanagar for founders, consultants and teams across South Bengaluru.
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-2 items-start">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl bg-neutral-100">
              <Image
                src="/images/building-exterior-sree-devi-complex.jpg"
                alt="Spacio Workspace at Sree Devi Complex, Basavanagudi — near Jayanagar"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="rounded-3xl border border-primary/15 bg-gradient-to-br from-white to-orange-50/50 p-6 sm:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">How to reach from Jayanagar</h2>
              <ul className="mt-5 space-y-3 text-neutral-700 leading-relaxed list-disc pl-5">
                <li>Autos and cabs typically take 10–20 minutes depending on traffic.</li>
                <li>Approach via N.A.T. Road / Gandhi Bazaar into Basavanagudi.</li>
                <li>Lalbagh Metro (Green Line) is about 2.5 km from the centre.</li>
                <li>BMTC routes serve Gandhi Bazaar and surrounding corridors.</li>
              </ul>
              <p className="mt-6 text-sm text-neutral-800 leading-relaxed">
                <strong>Spacio Workspace</strong>
                <br />
                {ADDRESS.line}
                <br />
                Phone:{" "}
                <a href={PHONE_HREF} className="font-semibold text-primary">
                  {PHONE_DISPLAY}
                </a>
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/book-tour"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-primary px-5 text-sm font-semibold text-white"
                >
                  Book a Free Tour
                </Link>
                <a
                  href={whatsappUrl(WA.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-xl border-2 border-primary/30 px-5 text-sm font-semibold text-primary"
                >
                  WhatsApp Us
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-neutral-300 px-5 text-sm font-semibold text-neutral-800"
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
                className="rounded-2xl border border-neutral-200 bg-white p-5 hover:border-primary/40 hover:shadow-md transition-all"
              >
                <div className="text-lg font-bold text-neutral-900">{item.label}</div>
                <p className="mt-2 text-sm text-neutral-600">{item.detail}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PublicTransportSection />
      <FaqSection items={faqs} title="Jayanagar travellers — FAQs" />
    </div>
  );
}
