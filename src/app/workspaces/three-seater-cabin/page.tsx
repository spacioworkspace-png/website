import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, CheckCircle2, MapPin, Clock, Wifi, Users, Building2, Sparkles, Layers, Play, Shield, Zap, Coffee } from "lucide-react";
import { RelatedPlans } from "@/components/RelatedPlans";
import { PlanSeo } from "@/components/PlanSeo";
import { PlanVideoSection } from "@/components/PlanVideoSection";
import { HeroContactRow, CallLink } from "@/components/ContactCtas";
import { pageMeta } from "@/lib/seo";
import { SEO_KEYWORDS } from "@/lib/seo-keywords";

export const metadata = pageMeta({
  title: "Private Cabin Basavanagudi | 3-Seater Small Office ₹14,999/mo",
  description:
    "Private cabin in Basavanagudi for small teams and partners. Small office for rent with 3 seats, whiteboard and 24/7 access from ₹14,999/month at Spacio Workspace.",
  path: "/workspaces/three-seater-cabin",
  keywords: [...SEO_KEYWORDS.privateCabin],
  ogImage: "/images/3-seater-cabin-orange-screens.jpg",
  ogAlt: "3-seater private cabin office space in Basavanagudi",
});

export default function ThreeSeaterCabinPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-white to-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <span className="badge-premium mb-4 inline-block">Ideal for Small Teams</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                3-Seater Cabin Workspace in Basavanagudi, Bangalore
              </h1>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Our 3-Seater private office in Basavanagudi lets fast-scaling teams brainstorm, prototype, and meet clients in a secure environment without committing to a long lease. Purpose-built for co-founders and boutique agencies who need a compact HQ in South Bangalore.
              </p>
              <HeroContactRow
                className="mb-6"
                location="three-seater-cabin-hero"
                whatsappMessage="I want to book a 3-Seater Cabin at Spacio Workspace Basavanagudi"
              />
              <div className="flex flex-wrap gap-4 text-sm text-neutral-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Starting at ₹14,999/month</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Limited Availability</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>3 People Capacity</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/3-seater-cabin-orange-screens.jpg"
                alt="3-Seater Cabin Workspace at Spacio Workspace Basavanagudi"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <PlanVideoSection planId="three-seater-cabin" showAllTours />

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Why Choose 3-Seater Cabin at Spacio Workspace?
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              Enjoy collaborative desk layouts, whiteboard walls, and instant access to meeting rooms in a secure, professional environment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "Tri-Desk Layout", desc: "Executive chairs, pedestal storage, and acoustic décor for better focus and collaboration." },
              { icon: Sparkles, title: "Meeting Room Credits", desc: "Includes meeting room credits plus discounted access to our larger brainstorming studio." },
              { icon: Building2, title: "Brand Customization", desc: "Upgrade with custom decals and signage to reflect your brand personality for visiting investors." },
              { icon: Wifi, title: "1Gbps High-Speed Internet", desc: "Dual ISP lines with enterprise-grade connectivity for seamless team collaboration." },
              { icon: Clock, title: "24/7 Secure Access", desc: "Work on your schedule with round-the-clock access to your team cabin workspace." },
              { icon: Coffee, title: "Community Access", desc: "Access to community events and founder mixers at the Basavanagudi centre." },
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
                Perfect for Co-Founders and Small Teams
              </h2>
              <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
                The 3-seater cabin is purpose-built for co-founders and boutique agencies who need a compact HQ in South Bangalore. Enjoy collaborative desk layouts, whiteboard walls, and instant access to meeting rooms.
              </p>
              <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
                Ideal for fast-scaling teams that need to brainstorm, prototype, and meet clients in a secure environment without committing to a long lease.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Tri-desk layout with executive chairs, pedestal storage, and acoustic décor for better focus.",
                  "Includes meeting room credits plus discounted access to our larger brainstorming studio.",
                  "Upgrade with custom decals and signage to reflect your brand personality for visiting investors.",
                  "Whiteboard walls for brainstorming sessions and team collaboration.",
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
                src="/images/workspace-numbered-cabins.jpg"
                alt="3-Seater Cabin Interior at Spacio Workspace"
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
                No hidden costs, no long-term lock-ins. Move in within 24 hours.
              </p>
            </div>
            <div className="rounded-3xl border-2 border-primary bg-gradient-to-br from-primary/5 to-white p-8 mb-8">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-primary mb-2">₹14,999</div>
                <div className="text-neutral-600">per month</div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-neutral-700">Capacity: 3 people</span>
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
                  href="https://wa.me/917022780310?text=I want to book a 3-Seater Cabin at ₹14999/month"
                  className="inline-block rounded-xl bg-primary px-8 py-4 text-white font-semibold hover:bg-primary/90 transition-all duration-300"
                >
                  Book Your 3-Seater Cabin Now
                </a>
              </div>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-yellow-900 mb-2">Limited Cabins Available</h3>
                  <p className="text-yellow-800">
                    3-seater cabins are in high demand. Book your free tour today to secure your spot. Limited availability, so act fast!
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
              Our 3-Seater Cabin workspace is ideal for small teams that need collaboration and professional credibility.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Co-Founders", desc: "Perfect workspace for startup co-founders who need to collaborate and build together in a private office space." },
              { title: "Boutique Agencies", desc: "Ideal for small agencies that need a professional space to meet clients and work on projects together." },
              { title: "Remote Pods", desc: "Great for remote teams that need a dedicated workspace when visiting Bangalore or working together." },
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
              Customize your 3-Seater Cabin experience with these optional add-ons
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "Dedicated meeting credits for client presentations",
              "Brand wall decals and custom signage",
              "Private server rack for tech teams",
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
            Ready to Get Your 3-Seater Cabin?
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            Book your free tour today and see why 3-Seater Cabin at Spacio Workspace is Bangalore's top choice for small team workspace solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/917022780310?text=I want to book a 3-Seater Cabin at Spacio Workspace Basavanagudi"
              className="rounded-xl bg-primary px-8 py-4 text-white font-semibold hover:bg-primary/90 transition-all duration-300 inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp to Book
            </a>
            <CallLink location="three-seater-cabin-cta" className="rounded-xl border-2 border-primary px-8 py-4" />
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
      <PlanSeo planId="three-seater-cabin" />
      <RelatedPlans
        links={[
          { href: "/workspaces/dedicated-desks", label: "Dedicated desks" },
          { href: "/workspaces/solo-cabin", label: "Private cabins" },
          { href: "/workspaces/six-seater-cabin", label: "6-seater cabin" },
        ]}
      />
    </div>
  );
}










