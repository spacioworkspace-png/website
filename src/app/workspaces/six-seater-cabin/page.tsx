import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, CheckCircle2, MapPin, Clock, Wifi, Users, Building2, Sparkles, Layers, Play, Shield, Zap, Coffee } from "lucide-react";
import { RelatedPlans } from "@/components/RelatedPlans";
import { PlanSeo } from "@/components/PlanSeo";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "6-Seater Cabin in Basavanagudi | ₹24,999/month",
  description: "6-seater private cabin at Spacio Workspace, Basavanagudi. ₹24,999 per month for growing teams. Book a free tour.",
  path: "/workspaces/six-seater-cabin",
  ogImage: "/images/6-seater-cabin-workspace.jpg",
  ogAlt: "6-seater cabin at Spacio Workspace Basavanagudi",
});

export default function SixSeaterCabinPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-white to-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <span className="badge-premium mb-4 inline-block">Great Value for Teams</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                6-Seater Cabin Workspace in Basavanagudi, Bangalore
              </h1>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Choose the 6-seater cabin if you need a team office in Basavanagudi with wide desks, dual monitors on request, and brainstorming walls.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <a
                  href="https://wa.me/917022780310?text=I want to book a 6-Seater Cabin at Spacio Workspace Basavanagudi"
                  className="rounded-xl bg-primary px-6 py-3 text-white font-semibold hover:bg-primary/90 transition-all duration-300 inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp to Book
                </a>
                <Link
                  href="/book-tour"
                  className="rounded-xl border border-primary px-6 py-3 text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300 inline-flex items-center gap-2"
                >
                  Book Free Tour
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-neutral-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Starting at ₹24,999/month</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Waitlist Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>6 People Capacity</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/6-seater-cabin-workspace.jpg"
                alt="6-Seater Cabin Workspace at Spacio Workspace Basavanagudi"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Why Choose 6-Seater Cabin at Spacio Workspace?
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              Ideal for growing teams that want headquarters-level polish with enterprise-grade infrastructure.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "Spacious Layout", desc: "Collaboration zones, visitor seating, and storage for marketing collateral in a premium setup." },
              { icon: Zap, title: "Enterprise Infrastructure", desc: "Power backup and 1Gbps dual ISP lines keep demos and client calls glitch-free." },
              { icon: Building2, title: "Premium Add-Ons", desc: "Option to add private pantry, exclusive meeting room, or video conferencing hardware." },
              { icon: Wifi, title: "1Gbps High-Speed Internet", desc: "Dual ISP lines with enterprise-grade connectivity for seamless team operations." },
              { icon: Clock, title: "24/7 Secure Access", desc: "Work on your schedule with round-the-clock access to your team cabin workspace." },
              { icon: Coffee, title: "Concierge Support", desc: "Hospitality-style support staff to handle your team's needs and guest management." },
            ].map((feature, idx) => (
              <div key={idx} className="rounded-2xl border border-neutral-200 p-6 hover:border-primary transition-colors">
                <feature.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">{feature.title}</h3>
                <p className="text-neutral-700">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="py-20 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                Perfect for Product Teams and Growing Startups
              </h2>
              <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
                Our 6-seater cabin mirrors a boutique corporate suite with wide desks, dual monitors on request, and brainstorming walls. Ideal for growing teams that want headquarters-level polish.
              </p>
              <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
                Perfect for product teams, VC-funded startups, and client delivery pods that need enterprise-grade infrastructure and professional credibility.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Spacious layout with collaboration zones, visitor seating, and storage for marketing collateral.",
                  "Enterprise-level power backup and 1Gbps dual ISP lines keep demos and client calls glitch-free.",
                  "Option to add private pantry, exclusive meeting room, or video conferencing hardware.",
                  "Whiteboard walls and presentation tools for brainstorming sessions.",
                  "GST-ready documentation and compliance support for business registration.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/workspace-orange-screens.jpg"
                alt="6-Seater Cabin Interior at Spacio Workspace"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Availability */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                Transparent Pricing & Flexible Terms
              </h2>
              <p className="text-lg text-neutral-700">
                No hidden costs, no long-term lock-ins. Premium headquarters-level workspace.
              </p>
            </div>
            <div className="rounded-3xl border-2 border-primary bg-gradient-to-br from-primary/5 to-white p-8 mb-8">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-primary mb-2">₹24,999</div>
                <div className="text-neutral-600">per month</div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-neutral-700">Capacity: 6 people</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-neutral-700">Location: Basavanagudi</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-neutral-700">24/7 Access</span>
                </div>
                <div className="flex items-center gap-3">
                  <Wifi className="w-5 h-5 text-primary" />
                  <span className="text-neutral-700">1Gbps Internet</span>
                </div>
              </div>
              <div className="text-center">
                <a
                  href="https://wa.me/917022780310?text=I want to book a 6-Seater Cabin at ₹24999/month"
                  className="inline-block rounded-xl bg-primary px-8 py-4 text-white font-semibold hover:bg-primary/90 transition-all duration-300"
                >
                  Book Your 6-Seater Cabin Now
                </a>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Waitlist Available</h3>
                  <p className="text-blue-800">
                    6-seater cabins are in high demand. Join our waitlist today to secure your spot when availability opens. Book your free tour to see the space and get priority access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best For Section */}
      <section className="py-20 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Perfect For
            </h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
              Our 6-Seater Cabin workspace is ideal for larger teams that need enterprise-grade infrastructure and professional credibility.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Product Teams", desc: "Perfect workspace for product teams that need collaboration space, brainstorming walls, and enterprise infrastructure." },
              { title: "VC-Funded Startups", desc: "Ideal for funded startups that need a premium headquarters with professional credibility for investor meetings." },
              { title: "Client Delivery Pods", desc: "Great for teams that need a dedicated workspace to deliver client projects with enterprise-grade infrastructure." },
            ].map((item, idx) => (
              <div key={idx} className="rounded-2xl bg-white border border-neutral-200 p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">{item.title}</h3>
                <p className="text-neutral-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Popular Add-Ons
            </h2>
            <p className="text-lg text-neutral-700">
              Customize your 6-Seater Cabin experience with these optional add-ons
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "Dedicated meeting room for exclusive use",
              "Private pantry setup for team convenience",
              "Server-grade power backup for tech teams",
            ].map((addon, idx) => (
              <div key={idx} className="rounded-2xl border border-neutral-200 p-6 text-center">
                <Layers className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="text-neutral-700 font-medium">{addon}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
            Ready to Get Your 6-Seater Cabin?
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            Book your free tour today and see why 6-Seater Cabin at Spacio Workspace is Bangalore's top choice for premium team workspace solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/917022780310?text=I want to book a 6-Seater Cabin at Spacio Workspace Basavanagudi"
              className="rounded-xl bg-primary px-8 py-4 text-white font-semibold hover:bg-primary/90 transition-all duration-300 inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp to Book
            </a>
            <Link
              href="/book-tour"
              className="rounded-xl border-2 border-primary px-8 py-4 text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300 inline-flex items-center gap-2"
            >
              Book Free Tour
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border-2 border-neutral-200 px-8 py-4 text-neutral-800 font-semibold hover:border-primary hover:text-primary transition-all duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
      <PlanSeo planId="six-seater-cabin" />
      <RelatedPlans
        links={[
          { href: "/workspaces/dedicated-desks", label: "Dedicated desks" },
          { href: "/workspaces/three-seater-cabin", label: "3-seater cabin" },
          { href: "/workspaces/meeting-rooms", label: "Meeting rooms" },
        ]}
      />
    </div>
  );
}










