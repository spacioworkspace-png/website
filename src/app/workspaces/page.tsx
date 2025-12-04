"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react";
import { WorkspaceDetailModal } from "@/components/WorkspaceDetailModal";

const workspaceOptions = [
  {
    slug: "solo-cabin",
    badge: "#1 Most Popular",
    title: "Solo Cabin",
    subtitle: "Perfect for Individual Focus",
    iconLabel: "Private Cabin Workspace",
    image: "/images/solo-cabin-workspace.jpg",
    gallery: [
      "/images/solo-cabin-workspace.jpg",
      "/images/workspace-orange-screens.jpg",
      "/images/workspace-green-screens.jpg",
    ],
    features: [
      "Private and quiet workspace",
      "Ergonomic furniture",
      "High-speed internet (1Gbps)",
      "24/7 secure access",
      "Personal storage space",
    ],
    cta: "Book Solo Cabin",
    highlight: true,
    pricing: "₹6,999/month",
    capacityLabel: "1 person",
    bestFor: ["Startup founders", "Consultants", "CXO on-the-go", "Video bachelors & content creators"],
    addOns: ["Dedicated locker upgrade", "Mail handling", "Brand signage"],
    availability: "Immediate move-in slots",
    videoUrl: "/solo-cabin-tour.mp4",
    modalDescription:
      "Solo cabins give you a noise-free, private office inside Spacio Basavanagudi. Plug in, close the glass door, and stay in flow with ergonomic furniture, 1Gbps internet, and 24/7 security.",
    seoIntro:
      "Our Solo Cabin in Basavanagudi is a fully enclosed private office inside Spacio Workspace, ideal for creators who need silence, privacy, and credibility when clients visit.",
    seoBullets: [
      "Sound-treated cabin with ergonomic chair, pedestal storage, and pin board for daily planning.",
      "Biometric-secure entry plus CCTV surveillance so you can keep equipment within your workspace.",
      "Optional mail handling and brand signage to give your solo business a professional footprint.",
    ],
    seoKeywords: "solo private cabin Basavanagudi, single person office Bangalore, premium freelancer cabin",
  },
  {
    slug: "three-seater-cabin",
    title: "3-Seater Cabin",
    subtitle: "Ideal for Small Teams & Partners",
    iconLabel: "3-Seater Startup Hub",
    image: "/images/3-seater-cabin-orange-screens.jpg",
    gallery: [
      "/images/3-seater-cabin-orange-screens.jpg",
      "/images/workspace-numbered-cabins.jpg",
      "/images/workspace-yellow-green-walls.jpg",
    ],
    features: [
      "Space for 3 people",
      "Collaborative workspace",
      "High-speed WiFi (1Gbps)",
      "Meeting space access",
      "Storage lockers",
      "Whiteboard included",
    ],
    cta: "Book 3-Seater Cabin",
    pricing: "₹11,999/month",
    capacityLabel: "3 people",
    bestFor: ["Co-founders", "Agencies", "Remote pods"],
    addOns: ["Dedicated meeting credits", "Brand wall decals", "Private server rack"],
    availability: "Limited cabins left",
    videoUrl: "/three-seater-cabin-tour.mp4",
    modalDescription:
      "The 3-seater cabin is purpose-built for co-founders and boutique agencies who need a compact HQ in South Bangalore. Enjoy collaborative desk layouts, whiteboard walls, and instant access to meeting rooms.",
    seoIntro:
      "Our 3-Seater private office in Basavanagudi lets fast-scaling teams brainstorm, prototype, and meet clients in a secure environment without committing to a long lease.",
    seoBullets: [
      "Tri-desk layout with executive chairs, pedestal storage, and acoustic décor for better focus.",
      "Includes meeting room credits plus discounted access to our larger brainstorming studio.",
      "Upgrade with custom decals and signage to reflect your brand personality for visiting investors.",
    ],
    seoKeywords: "3 seater cabin Bangalore, private team office Basavanagudi, coworking space for co-founders",
  },
  {
    slug: "six-seater-cabin",
    badge: "Great Value for Teams",
    title: "6-Seater Cabin",
    subtitle: "Perfect for Small Teams & Brainstorming",
    iconLabel: "6-Seater Team Cabin",
    image: "/images/6-seater-cabin-workspace.jpg",
    gallery: [
      "/images/6-seater-cabin-workspace.jpg",
      "/images/workspace-orange-screens.jpg",
      "/images/workspace-numbered-cabins.jpg",
    ],
    features: [
      "Spacious for 6 people",
      "Brainstorming space",
      "High-speed WiFi (1Gbps)",
      "Whiteboard & presentation tools",
      "Storage solutions",
      "Team collaboration zone",
    ],
    cta: "Book 6-Seater Cabin",
    pricing: "₹17,999/month",
    capacityLabel: "6 people",
    bestFor: ["Product teams", "VC-funded startups", "Client delivery pods"],
    addOns: ["Dedicated meeting room", "Private pantry setup", "Server-grade power backup"],
    availability: "Ask for waitlist",
    videoUrl: "/six-seater-cabin-tour.mp4",
    modalDescription:
      "Our 6-seater cabin mirrors a boutique corporate suite with wide desks, dual monitors on request, and brainstorming walls. Ideal for growing teams that want headquarters-level polish.",
    seoIntro:
      "Choose the 6-seater cabin if you need a premium headquarters in Jayanagar-Basavanagudi belt with enterprise-grade infrastructure and hospitality-style support staff.",
    seoBullets: [
      "Spacious layout with collaboration zones, visitor seating, and storage for marketing collateral.",
      "Enterprise-level power backup and 1Gbps dual ISP lines keep demos and client calls glitch-free.",
      "Option to add private pantry, exclusive meeting room, or video conferencing hardware.",
    ],
    seoKeywords: "6 seater team cabin Bangalore, startup headquarters Basavanagudi, premium workspace for teams",
  },
  {
    slug: "virtual-office",
    badge: "Professional Presence",
    title: "Virtual Office",
    subtitle: "Professional Business Address & Services",
    iconLabel: "Virtual Office Services",
    gallery: [
      "/images/building-exterior-sree-devi-complex.jpg",
      "/images/office-corridor-glass-partitions.jpg",
      "/images/spacio-sign-green-wall.jpg",
    ],
    features: [
      "Premium business address in Bangalore",
      "Mail handling & forwarding",
      "Phone answering service",
      "Meeting room access",
      "Compliance support",
      "GST-ready invoicing",
    ],
    cta: "Book Virtual Office",
    pricing: "₹999/month",
    capacityLabel: "Remote teams",
    bestFor: ["Outstation founders", "Consulting firms", "D2C brands"],
    addOns: ["Dedicated desk day pass bundle", "Dedicated phone line", "Document storage"],
    availability: "Instant activation",
    videoUrl: "/virtual-office-tour.mp4",
    modalDescription:
      "Our virtual office plan gives you a credible Basavanagudi business address, GST registration support, and professional reception services for courier and client handling.",
    seoIntro:
      "Spacio's virtual office in Bangalore keeps your brand compliant with ROC, GST, and banking requirements while giving you drop-in access to meeting rooms when clients need face time.",
    seoBullets: [
      "Use our Basavanagudi address on ROC, GST, MSME, and bank documents without leasing a physical cabin.",
      "Professional reception handles mail, courier, and document pickup with instant WhatsApp notification.",
      "Add meeting room credits or day-pass bundles whenever you visit Bengaluru for investor or client meets.",
    ],
    seoKeywords: "virtual office Basavanagudi, GST registration address Bangalore, business address service",
  },
  {
    slug: "dedicated-desks",
    title: "Dedicated Desks",
    subtitle: "Your Personal Workspace",
    iconLabel: "Dedicated Desk Plan",
    image: "/images/workspace-orange-screens.jpg",
    gallery: [
      "/images/workspace-orange-screens.jpg",
      "/images/workspace-green-screens.jpg",
      "/images/workspace-numbered-cabins.jpg",
    ],
    features: [
      "Assigned desk space",
      "Personal storage",
      "High-speed WiFi (1Gbps)",
      "24/7 access",
      "Community access",
      "Ergonomic chair included",
    ],
    cta: "Book Dedicated Desks",
    pricing: "₹2,999/month",
    capacityLabel: "Per member",
    bestFor: ["Designers", "Analysts", "Remote employees"],
    addOns: ["24/7 access upgrade", "Locker storage", "Recording booth hours"],
    availability: "Few seats available",
    videoUrl: "/dedicated-desks-tour.mp4",
    modalDescription:
      "Dedicated desks give you a permanent spot in our collaborative bay with lockable storage, business-class WiFi, and community events that keep you inspired.",
    seoIntro:
      "Choose a dedicated desk at Spacio Workspace when you want the energy of a coworking floor plus the comfort of leaving your gear safely overnight.",
    seoBullets: [
      "Fixed desk with ergonomic setup, dual monitor readiness, and lockable pedestal storage.",
      "24/7 secure entry, printing credits, and access to weekly founder mixers and workshops.",
      "Add a locker, dedicated landline, or content recording booth hours for campaign launches.",
    ],
    seoKeywords: "dedicated desk Bangalore, fixed coworking desk Basavanagudi, premium desk membership",
  },
  {
    slug: "day-pass",
    badge: "Flex Access",
    title: "Day Pass",
    subtitle: "Work from Spacio for a Day",
    iconLabel: "Day Pass Option",
    image: "/images/workspace-green-screens.jpg",
    gallery: [
      "/images/workspace-green-screens.jpg",
      "/images/workspace-orange-screens.jpg",
      "/images/workspace-numbered-cabins.jpg",
    ],
    features: [
      "Access from 9 AM – 7 PM",
      "Ergonomic open seating",
      "1Gbps WiFi & power backup",
      "Tea, coffee, and pantry",
      "Community events (when scheduled)",
      "Add-on meeting room credits",
    ],
    cta: "Buy Day Pass",
    pricing: "₹199/day",
    capacityLabel: "Per guest",
    bestFor: ["Freelancers on the go", "Remote employees visiting city", "Students preparing for interviews"],
    addOns: ["Locker rental", "Meeting room credits", "Cafe vouchers"],
    availability: "Purchase on arrival",
    videoUrl: "/day-pass-tour.mp4",
    modalDescription:
      "Need a professional workspace just for today? Pick up a Spacio day pass, grab a seat in our vibrant coworking bay, and get enterprise-grade infrastructure without a long-term commitment.",
    seoIntro:
      "Our day pass lets you enjoy the Basavanagudi coworking vibe, 1Gbps dual ISP, and concierge hospitality for a single day—perfect for client meetings, interviews, or break-the-routine workdays.",
    seoBullets: [
      "Access the space between 9 AM and 7 PM with high-speed WiFi, printing support, and unlimited beverages.",
      "Drop into community events, founder mixers, or wellness sessions scheduled for that day.",
      "Add-on meeting room credits or locker storage when you need extra privacy or security.",
    ],
    seoKeywords: "day pass coworking Bangalore, day office Basavanagudi, flexible coworking pass Jayanagar",
  },
  {
    slug: "meeting-rooms",
    badge: "Premium Meeting Rooms",
    title: "Meeting Rooms",
    subtitle: "Professional Meeting Spaces",
    iconLabel: "Meeting Room Access",
    image: "/images/meeting-room-frosted-glass.jpg",
    gallery: [
      "/images/meeting-room-frosted-glass.jpg",
      "/images/office-corridor-glass-partitions.jpg",
      "/images/3-seater-cabin-orange-screens.jpg",
    ],
    features: [
      "Conference room booking",
      "Audio-visual equipment",
      "Whiteboard access",
      "Professional environment",
      "Flexible booking options",
      "Video conferencing setup",
    ],
    cta: "Book Meeting Rooms",
    pricing: "₹399/hour",
    capacityLabel: "4-12 people",
    bestFor: ["Investor reviews", "Client demos", "Workshops"],
    addOns: ["Catering support", "Recording setup", "Custom seating layout"],
    availability: "Slots open daily",
    videoUrl: "/meeting-rooms-tour.mp4",
    modalDescription:
      "Our meeting rooms range from 4-seater huddle spaces to 12-seater boardrooms with 4K displays, plug-and-play conferencing, and concierge support.",
    seoIntro:
      "Spacio’s meeting rooms in Basavanagudi and Jayanagar help you host board reviews, investor pitches, and hybrid workshops with zero tech hassles.",
    seoBullets: [
      "Equipped with 4K displays, ceiling-mounted mics, and high-fidelity speakers for crystal-clear calls.",
      "Onsite support team handles seating layouts, coffee service, and guest welcome boards.",
      "Hourly, half-day, and full-day packages with GST invoices for enterprise compliance.",
    ],
    seoKeywords: "meeting rooms Basavanagudi, boardroom rental Bangalore, conference room coworking space",
  },
];

export default function WorkspacesPage() {
  const [selectedWorkspace, setSelectedWorkspace] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openWorkspaceModal = (space: (typeof workspaceOptions)[number]) => {
    setSelectedWorkspace({
      ...space,
      description:
        space.modalDescription ??
        `${space.subtitle}. ${space.title} at Spacio Workspace in Basavanagudi, Bangalore. Perfect for entrepreneurs, freelancers, and teams looking for a premium workspace solution.`,
      images: space.gallery?.length ? space.gallery : space.image ? [space.image] : [],
      capacity:
        space.capacityLabel ??
        (space.title.includes("Seater") ? space.title : space.title.includes("Solo") ? "1 person" : "Flexible"),
      pricing: space.pricing,
      bestFor: space.bestFor,
      addOns: space.addOns,
      availability: space.availability,
      slug: space.slug,
      location: "Basavanagudi",
    });
    setIsModalOpen(true);
  };

  return (
    <div className="bg-white min-h-screen">
      <section className="relative bg-gradient-to-br from-primary/10 via-white to-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-20 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <span className="badge-premium mb-4 inline-block">Basavanagudi & Jayanagar</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900">
              Find Your Next Spacio Workspace
            </h1>
            <p className="mt-4 text-neutral-700 text-lg leading-relaxed">
              From private cabins and dedicated desks to premium meeting rooms and virtual offices,
              Spacio delivers Bangalore’s most flexible workspace catalog. Every plan includes
              1Gbps connectivity, ergonomic interiors, GST-ready paperwork, and concierge-grade support
              so you can plug in and build without friction.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://wa.me/917022780310?text=I want to explore Spacio Workspace plans in Basavanagudi"
                className="rounded-xl bg-primary px-6 py-3 text-white font-semibold hover:bg-primary/90 transition-all duration-300"
              >
                Chat With Workspace Advisor
              </a>
              <a
                href="/book-tour"
                className="rounded-xl border border-primary px-6 py-3 text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300"
              >
                Book a Same-Day Tour
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-primary/20 bg-white p-6 shadow-xl">
            <h3 className="text-xl font-semibold text-neutral-900">Why teams choose Spacio</h3>
            <ul className="mt-4 space-y-3 text-neutral-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                <span>Move-in ready cabins for 1, 3, or 6-seat teams within 24 hours.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                <span>Dedicated desks and day-pass coworking zones with 1Gbps dual ISP.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                <span>Premium meeting rooms, recording-ready boardrooms, and concierge support.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                <span>Virtual office address, mail handling, and compliance-ready paperwork.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl scroll-mt-16 px-4 py-20">
        <div className="mb-12 text-center">
          <span className="badge-premium mb-4 inline-block pulse-glow-peacock">Bangalore Workspace Catalog</span>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Spacio Workspace Plans at a Glance
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
            Spacio covers the full spectrum of Bangalore workspace needs in one place—solo and multi-seat private cabins, dedicated desks, premium meeting rooms, day-pass coworking, and virtual office services across Basavanagudi and Jayanagar. Use the sitelinks below to jump directly to the plan that fits your team size, move-in timeline, and compliance requirements.
          </p>
          <p className="mt-3 text-sm text-neutral-600 max-w-3xl mx-auto">
            Every section highlights what Spacio offers: transparent pricing, move-in ready furniture, 1Gbps connectivity, GST-ready documentation, concierge-grade meeting support, and flexible add-ons. Whether you’re scaling a startup pod, meeting investors, or just need a professional business address, the right option is a scroll away.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {workspaceOptions.map((space) => (
            <a
              key={`${space.slug}-nav`}
              href={`#${space.slug}`}
              className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-700 hover:border-primary hover:text-primary transition-colors"
            >
              {space.title} Bangalore
            </a>
          ))}
        </div>

        <div className="mt-12 space-y-16">
          {workspaceOptions.map((space) => (
            <article
              key={`${space.slug}-section`}
              id={space.slug}
              className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-10 shadow-lg scroll-mt-24"
            >
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
                <div className="space-y-6">
                  <div>
                    {space.iconLabel && (
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{space.iconLabel}</p>
                    )}
                    {space.badge && (
                      <span className="badge-premium mt-2 inline-block">{space.badge}</span>
                    )}
                    <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-neutral-900">
                      {space.title} in Basavanagudi & Jayanagar, Bangalore
                    </h2>
                    <p className="mt-4 text-neutral-700 leading-relaxed">{space.seoIntro}</p>
                  </div>

                  <ul className="space-y-3">
                    {space.seoBullets?.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm text-neutral-700">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="grid gap-4 md:grid-cols-2">
                    {space.bestFor && (
                      <div className="rounded-2xl border border-neutral-200 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Built For</p>
                        <ul className="mt-2 space-y-1 text-sm text-neutral-700">
                          {space.bestFor.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {space.addOns && (
                      <div className="rounded-2xl border border-neutral-200 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Popular Add-Ons</p>
                        <ul className="mt-2 space-y-1 text-sm text-neutral-700">
                          {space.addOns.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {space.seoKeywords && (
                    <p className="text-sm text-neutral-600">
                      {space.seoKeywords}
                    </p>
                  )}
                </div>

                <div className="space-y-6">
                  {space.image && (
                    <div className="relative h-56 rounded-2xl overflow-hidden">
                      <Image
                        src={space.image}
                        alt={`${space.title} at Spacio Workspace`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 420px"
                      />
                    </div>
                  )}

                  <div className="rounded-2xl bg-primary/5 border border-primary/20 p-5 space-y-2 text-sm text-neutral-700">
                    <div className="flex justify-between">
                      <span className="font-semibold text-neutral-900">Capacity</span>
                      <span>{space.capacityLabel ?? "Flexible"}</span>
                    </div>
                    {space.availability && (
                      <div className="flex justify-between">
                        <span className="font-semibold text-neutral-900">Availability</span>
                        <span className="text-primary">{space.availability}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-neutral-900 mb-3">Features Included</p>
                    <ul className="space-y-2">
                      {space.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-neutral-700">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`https://wa.me/917022780310?text=${encodeURIComponent(
                        `Send me more details on the ${space.title} at Spacio Workspace Basavanagudi.`
                      )}`}
                      className="rounded-xl bg-primary text-white font-semibold px-4 py-3 flex items-center gap-2 hover:bg-primary/90 transition-all duration-300"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp {space.title}
                    </a>
                    <a
                      href="/book-tour"
                      className="rounded-xl border border-primary px-4 py-3 text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      Book {space.title} Tour
                    </a>
                    <button
                      type="button"
                      onClick={() => openWorkspaceModal(space)}
                      className="rounded-xl border border-neutral-300 px-4 py-3 text-neutral-700 font-semibold hover:border-primary hover:text-primary transition-all duration-300"
                    >
                      View Gallery & Specs
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Workspace Detail Modal */}
      <WorkspaceDetailModal
        workspace={selectedWorkspace}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

