import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, CheckCircle2, MapPin, Clock, Wifi, Users, Building2, Sparkles, Layers, Play, Shield, Zap, Coffee } from "lucide-react";
import { RelatedPlans } from "@/components/RelatedPlans";
import { CabinDeskCompare } from "@/components/CabinDeskCompare";
import { PlanSeo } from "@/components/PlanSeo";
import { PlanVideoSection } from "@/components/PlanVideoSection";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Solo Cabin in Basavanagudi | ₹8,499/month",
  description: "Private solo cabin at Spacio Workspace, Basavanagudi. ₹8,499 per month, 1Gbps internet, 24/7 access. Book a free tour.",
  path: "/workspaces/solo-cabin",
  ogImage: "/images/solo-cabin-workspace.jpg",
  ogAlt: "Solo cabin at Spacio Workspace Basavanagudi",
});

export default function SoloCabinPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-white to-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <span className="badge-premium mb-4 inline-block">Private cabin</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                Solo Cabin Workspace in Basavanagudi, Bangalore
              </h1>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Get your own fully enclosed private office cabin at Spacio Workspace Basavanagudi. Perfect for startup founders, consultants, freelancers, and CXOs who need silence, privacy, and professional credibility. Sound-treated cabin with ergonomic furniture, 1Gbps high-speed internet, 24/7 secure biometric access, and CCTV surveillance.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <a
                  href="https://wa.me/917022780310?text=I want to book a Solo Cabin at Spacio Workspace Basavanagudi"
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
                  <span>Starting at ₹8,499/month</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Immediate Availability</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>1 Person Capacity</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/solo-cabin-workspace.jpg"
                alt="Solo Cabin Workspace at Spacio Workspace Basavanagudi"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <PlanVideoSection planId="solo-cabin" showAllTours />

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Why Choose Solo Cabin at Spacio Workspace?
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              Our Solo Cabin in Basavanagudi is a fully enclosed private office inside Spacio Workspace, ideal for creators who need silence, privacy, and credibility when clients visit.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Sound-Treated Cabin", desc: "Ergonomic chair, pedestal storage, and pin board for daily planning in a noise-free environment." },
              { icon: Zap, title: "Biometric Security", desc: "Secure entry plus CCTV surveillance so you can keep equipment within your workspace safely." },
              { icon: Wifi, title: "1Gbps High-Speed Internet", desc: "Dual ISP lines with enterprise-grade connectivity for seamless video calls and downloads." },
              { icon: Clock, title: "24/7 Secure Access", desc: "Work on your schedule with round-the-clock access to your private cabin workspace." },
              { icon: Building2, title: "Professional Credibility", desc: "Optional mail handling and brand signage to give your solo business a professional footprint." },
              { icon: Coffee, title: "Community Access", desc: "Access to meeting rooms and community events at the Basavanagudi centre." },
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
                Perfect for Focused Work and Client Meetings
              </h2>
              <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
                Solo cabins give you a noise-free, private office inside Spacio Basavanagudi. Plug in, close the glass door, and stay in flow with ergonomic furniture, 1Gbps internet, and 24/7 security.
              </p>
              <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
                Ideal for startup founders who need a professional space to meet investors, consultants who require confidentiality for client discussions, and freelancers who want to escape the distractions of working from home.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Sound-treated cabin with ergonomic chair, pedestal storage, and pin board for daily planning.",
                  "Biometric-secure entry plus CCTV surveillance so you can keep equipment within your workspace.",
                  "Optional mail handling and brand signage to give your solo business a professional footprint.",
                  "Access to premium meeting rooms for client presentations and investor pitches.",
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
                alt="Solo Cabin Interior at Spacio Workspace"
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
                <div className="text-5xl font-bold text-primary mb-2">₹8,499</div>
                <div className="text-neutral-600">per month</div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-neutral-700">Capacity: 1 person</span>
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
                  href="https://wa.me/917022780310?text=I want to book a Solo Cabin at ₹8499/month"
                  className="inline-block rounded-xl bg-primary px-8 py-4 text-white font-semibold hover:bg-primary/90 transition-all duration-300"
                >
                  Book Your Solo Cabin Now
                </a>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-green-900 mb-2">Immediate Move-In Available</h3>
                  <p className="text-green-800">
                    Solo cabins are available for immediate move-in. Book your free tour today and move in within 24 hours. No deposit required, flexible month-to-month terms available.
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
              Our Solo Cabin workspace is ideal for professionals who need privacy, focus, and professional credibility.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Startup Founders", desc: "Meet investors and build your startup in a professional private office space with credibility." },
              { title: "Consultants", desc: "Host confidential client meetings and maintain professional standards in your private cabin." },
              { title: "CXO on-the-go", desc: "Perfect workspace for executives who need a private office when visiting Bangalore." },
              { title: "Video Bachelors & Creators", desc: "Ideal for video bachelors, YouTubers, and content creators who need a quiet, private space for recording, editing, and client calls." },
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
              Customize your Solo Cabin experience with these optional add-ons
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "Dedicated locker upgrade for extra storage",
              "Mail handling and forwarding service",
              "Brand signage and custom decals",
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
            Ready to Get Your Own Solo Cabin?
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            Book a free tour and see the solo cabin at Spacio Workspace in Basavanagudi.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/917022780310?text=I want to book a Solo Cabin at Spacio Workspace Basavanagudi"
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
      <CabinDeskCompare />
      <PlanSeo planId="solo-cabin" />
      <RelatedPlans
        links={[
          { href: "/workspaces/dedicated-desks", label: "Dedicated desks" },
          { href: "/workspaces/three-seater-cabin", label: "3-seater cabin" },
          { href: "/workspaces/day-pass", label: "Day pass" },
        ]}
      />
    </div>
  );
}

