import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const WORKSPACE_CARDS = [
  {
    badge: "Private cabin",
    title: "Solo Cabin",
    href: "/workspaces/solo-cabin",
    subtitle: "Perfect for Individual Focus",
    image: "/images/solo-cabin-workspace.jpg",
    pricing: "₹8,499/month",
    features: ["Private and quiet workspace", "1Gbps internet", "24/7 secure access"],
    cta: "Book Solo Cabin",
  },
  {
    title: "3-Seater Cabin",
    href: "/workspaces/three-seater-cabin",
    subtitle: "Ideal for Small Teams & Partners",
    image: "/images/3-seater-cabin-orange-screens.jpg",
    pricing: "₹14,999/month",
    features: ["Space for 3 people", "High-speed WiFi", "Whiteboard included"],
    cta: "Book 3-Seater Cabin",
  },
  {
    badge: "Great Value for Teams",
    title: "6-Seater Cabin",
    href: "/workspaces/six-seater-cabin",
    subtitle: "Perfect for Small Teams",
    image: "/images/6-seater-cabin-workspace.jpg",
    pricing: "₹24,999/month",
    features: ["Spacious for 6 people", "Brainstorming space", "Team collaboration zone"],
    cta: "Book 6-Seater Cabin",
  },
  {
    badge: "Professional Presence",
    title: "Virtual Office",
    href: "/workspaces/virtual-office",
    subtitle: "Business Address & Services",
    image: "/images/building-exterior-sree-devi-complex.jpg",
    pricing: "₹12,999/year",
    features: ["GST-ready address", "Mail handling", "Meeting room access"],
    cta: "Book Virtual Office",
  },
  {
    title: "Dedicated Desks",
    href: "/workspaces/dedicated-desks",
    subtitle: "Your Personal Workspace",
    image: "/images/workspace-orange-screens.jpg",
    pricing: "₹3,499/month",
    features: ["Assigned desk space", "24/7 access", "Ergonomic chair included"],
    cta: "Book Dedicated Desks",
  },
  {
    badge: "Premium Meeting Rooms",
    title: "Meeting Rooms",
    href: "/workspaces/meeting-rooms",
    subtitle: "Professional Meeting Spaces",
    image: "/images/meeting-room-frosted-glass.jpg",
    pricing: "₹399/hour",
    features: ["AV equipment", "Whiteboard access", "Video conferencing setup"],
    cta: "Book Meeting Rooms",
  },
];

const PLAN_LINKS = [
  { href: "/workspaces", label: "all workspaces" },
  { href: "/workspaces/solo-cabin", label: "private cabins" },
  { href: "/workspaces/three-seater-cabin", label: "3-seater cabin" },
  { href: "/workspaces/six-seater-cabin", label: "6-seater cabin" },
  { href: "/workspaces/dedicated-desks", label: "dedicated desks" },
  { href: "/workspaces/meeting-rooms", label: "meeting rooms" },
  { href: "/workspaces/virtual-office", label: "virtual office" },
  { href: "/workspaces/day-pass", label: "day pass" },
  { href: "/locations/basavanagudi", label: "Basavanagudi" },
];

export function HomePage() {
  return (
    <div className="bg-white">
      <section
        id="workspaces"
        className="mx-auto max-w-7xl scroll-mt-16 px-4 sm:px-6 py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-neutral-50/50"
      >
        <div className="mb-8 sm:mb-10 md:mb-12 text-center">
          <span className="badge-premium mb-3 sm:mb-4 inline-block text-xs sm:text-sm">
            Your Perfect Workspace in Bangalore
          </span>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight px-2">
            <span className="text-gradient peacock-text">Choose Your</span> Perfect Workspace
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed px-2">
            Private cabins, dedicated desks, meeting rooms and virtual office solutions for
            professionals, startups and growing teams in South Bangalore.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3 px-2">
            {PLAN_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-neutral-700 hover:border-primary hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WORKSPACE_CARDS.map((card) => (
            <article
              key={card.title}
              className="card-premium card-hover rounded-2xl border-2 border-neutral-200 p-6 bg-white overflow-hidden"
            >
              {card.image ? (
                <div className="aspect-video w-full rounded-xl overflow-hidden mb-4 -mx-6 -mt-6 relative">
                  <Image
                    src={card.image}
                    alt={`${card.title} at Spacio Workspace`}
                    fill
                    className="object-cover"
                    loading="lazy"
                    quality={65}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ) : null}
              {card.badge ? <span className="badge-premium mb-3 inline-block">{card.badge}</span> : null}
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                <Link href={card.href} className="hover:text-primary transition-colors">
                  {card.title}
                </Link>
              </h3>
              <p className="text-neutral-600 mb-1">{card.subtitle}</p>
              <p className="text-primary font-semibold text-sm mb-4">{card.pricing}</p>
              <ul className="space-y-2 mb-6">
                {card.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-2">
                <a
                  href={`https://wa.me/917022780310?text=${encodeURIComponent(`I'm interested in ${card.title} at Spacio Workspace Basavanagudi`)}`}
                  className="btn-premium rounded-xl bg-primary px-4 py-3 text-white font-bold text-sm text-center hover:bg-primary/90 transition-colors min-h-[48px] flex items-center justify-center"
                >
                  {card.cta}
                </a>
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

        <div className="mt-10 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-white p-6 sm:p-8 text-center border-2 border-primary/20">
          <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3">
            <span className="text-gradient peacock-text">Dreaming of a Custom Workspace?</span>
          </h3>
          <p className="text-sm sm:text-base text-neutral-700 mb-6 max-w-2xl mx-auto">
            Tailored plans and long-term bookings for teams of all sizes in Namma Basavanagudi.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
            <a
              href="tel:+917022780310"
              className="rounded-xl border-2 border-primary px-5 py-3 font-bold text-sm hover:bg-primary hover:text-white transition-colors min-h-[48px] flex items-center justify-center"
            >
              Call for Custom Plans
            </a>
            <a
              href="https://wa.me/917022780310?text=I'd like to schedule a cabin tour at Spacio Workspace Bangalore"
              className="btn-premium rounded-xl bg-primary px-5 py-3 text-white font-bold text-sm hover:bg-primary/90 transition-colors min-h-[48px] flex items-center justify-center"
            >
              Schedule Cabin Tour
            </a>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 md:py-20 overflow-hidden basavanagudi-heritage">
        <div className="absolute inset-0 basavanagudi-gradient" aria-hidden />
        <div className="relative z-10 text-center mb-10">
          <span className="badge-premium mb-3 inline-block text-xs sm:text-sm">Why Spacio?</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mt-3">
            <span className="text-gradient peacock-text">What Makes Us</span> Special
          </h2>
        </div>
        <div className="relative z-10 grid md:grid-cols-2 gap-4 sm:gap-6">
          {[
            {
              title: "Calm, focused interiors",
              description: "Private cabins and shared desks in a quiet Basavanagudi centre.",
              highlight: "Cabins, desks and meeting rooms",
            },
            {
              title: "Built for working teams",
              description: "Plans that match how solo professionals and startups actually work.",
              highlight: "Flexible workspace plans",
            },
            {
              title: "Lightning-fast everything",
              description: "1Gbps internet, instant booking, quick responses.",
              highlight: "Zero lag guarantee",
            },
            {
              title: "Namma Bengaluru spirit",
              description: "Proudly Bangalore — supporting local businesses and entrepreneurs.",
              highlight: "Made in Bangalore",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="card-premium rounded-2xl border-2 border-primary/20 p-6 sm:p-8 bg-white"
            >
              <h3 className="text-xl font-bold text-neutral-900 mb-2">{feature.title}</h3>
              <p className="text-neutral-700 mb-4">{feature.description}</p>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                {feature.highlight}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl scroll-mt-16 px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-primary/80 p-6 sm:p-10 md:p-12 text-center text-white shadow-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ready to Transform Your Work Life?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Book a free tour of our Basavanagudi centre. Private cabins, dedicated desks, meeting
            rooms and virtual office plans available.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-white text-primary px-6 py-3.5 font-bold text-sm sm:text-base hover:bg-white/90 transition-colors min-h-[48px] flex items-center justify-center"
            >
              Contact Us
            </Link>
            <Link
              href="/book-tour"
              className="rounded-xl border-2 border-white/40 bg-white/10 px-6 py-3.5 font-bold text-sm sm:text-base hover:bg-white/20 transition-colors min-h-[48px] flex items-center justify-center"
            >
              Book a Free Tour
            </Link>
            <a
              href="tel:+917022780310"
              className="rounded-xl border-2 border-white/40 bg-white/10 px-6 py-3.5 font-bold text-sm sm:text-base hover:bg-white/20 transition-colors min-h-[48px] flex items-center justify-center"
            >
              Call +91 70227 80310
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 pt-8">
        <h2 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
          Premium Coworking Space in Basavanagudi, Bangalore
        </h2>
        <div className="text-neutral-700 leading-relaxed space-y-4 text-left max-w-4xl mx-auto text-sm sm:text-base">
          <p>
            <strong>Spacio Workspace</strong> is a{" "}
            <Link href="/locations/basavanagudi" className="text-primary font-semibold hover:underline">
              premium coworking space in Basavanagudi, Bangalore
            </Link>
            .{" "}
            <Link href="/workspaces/solo-cabin" className="text-primary hover:underline">Private cabins</Link>,{" "}
            <Link href="/workspaces/dedicated-desks" className="text-primary hover:underline">dedicated desks</Link>,{" "}
            <Link href="/workspaces/meeting-rooms" className="text-primary hover:underline">meeting rooms</Link> and{" "}
            <Link href="/workspaces/virtual-office" className="text-primary hover:underline">virtual office</Link>{" "}
            solutions for professionals, startups and growing teams in South Bangalore.
          </p>
          <p>
            The centre is at No 7, Sree Devi Complex, NAT Street, Basavanagudi, near Bull Temple and Lalbagh.{" "}
            <Link href="/book-tour" className="text-primary font-semibold hover:underline">Book a free tour</Link> or{" "}
            <Link href="/contact" className="text-primary hover:underline">contact us</Link> today.
          </p>
        </div>
      </section>
    </div>
  );
}
