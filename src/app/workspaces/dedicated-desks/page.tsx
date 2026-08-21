import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, CheckCircle2, MapPin, Clock, Wifi, Users, Building2, Sparkles, Layers, Play, Shield, Zap, Coffee } from "lucide-react";
import { RelatedPlans } from "@/components/RelatedPlans";
import { CabinDeskCompare } from "@/components/CabinDeskCompare";
import { PlanSeo } from "@/components/PlanSeo";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Dedicated Desk in Basavanagudi | ₹3,499/month",
  description: "Assigned dedicated desk at Spacio Workspace, Basavanagudi. ₹3,499 per month with 24/7 access. Book a free tour.",
  path: "/workspaces/dedicated-desks",
  ogImage: "/images/workspace-orange-screens.jpg",
  ogAlt: "Dedicated desk at Spacio Workspace Basavanagudi",
});

export default function DedicatedDesksPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-white to-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <span className="badge-premium mb-4 inline-block">Your Personal Workspace</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                Dedicated Desks in Basavanagudi, Bangalore
              </h1>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Choose a dedicated desk at Spacio Workspace when you want the energy of a coworking floor plus the comfort of leaving your gear safely overnight. Fixed desk with ergonomic setup, dual monitor readiness, and lockable pedestal storage.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <a
                  href="https://wa.me/917022780310?text=I want to book a Dedicated Desk at Spacio Workspace Basavanagudi"
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
                  <span>Starting at ₹3,499/month</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Few Seats Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Per Member</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/workspace-orange-screens.jpg"
                alt="Dedicated Desks at Spacio Workspace Basavanagudi"
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
              Why Choose Dedicated Desks at Spacio Workspace?
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              Get a permanent spot in our collaborative bay with lockable storage, business-class WiFi, and community events that keep you inspired.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "Fixed Desk Setup", desc: "Ergonomic setup, dual monitor readiness, and lockable pedestal storage for your personal belongings." },
              { icon: Shield, title: "24/7 Secure Entry", desc: "Secure entry, printing credits, and access to weekly founder mixers and workshops." },
              { icon: Sparkles, title: "Community Access", desc: "Add a locker, dedicated landline, or content recording booth hours for campaign launches." },
              { icon: Wifi, title: "1Gbps High-Speed Internet", desc: "Business-class WiFi with dual ISP lines for seamless connectivity and video calls." },
              { icon: Clock, title: "24/7 Access", desc: "Work on your schedule with round-the-clock access to your dedicated desk workspace." },
              { icon: Coffee, title: "Community Events", desc: "Access to founder mixers, workshops, and networking events at the Basavanagudi centre." },
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
                Perfect for Designers, Analysts, and Remote Employees
              </h2>
              <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
                Dedicated desks give you a permanent spot in our collaborative bay with lockable storage, business-class WiFi, and community events that keep you inspired.
              </p>
              <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
                Ideal for professionals who want the energy of a coworking floor plus the comfort of leaving their gear safely overnight.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Fixed desk with ergonomic setup, dual monitor readiness, and lockable pedestal storage.",
                  "24/7 secure entry, printing credits, and access to weekly founder mixers and workshops.",
                  "Add a locker, dedicated landline, or content recording booth hours for campaign launches.",
                  "Access to premium meeting rooms for client presentations and team meetings.",
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
                src="/images/workspace-green-screens.jpg"
                alt="Dedicated Desks Interior at Spacio Workspace"
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
                <div className="text-5xl font-bold text-primary mb-2">₹3,499</div>
                <div className="text-neutral-600">per month per member</div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-neutral-700">Capacity: Per member</span>
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
                  href="https://wa.me/917022780310?text=I want to book a Dedicated Desk at ₹3499/month"
                  className="inline-block rounded-xl bg-primary px-8 py-4 text-white font-semibold hover:bg-primary/90 transition-all duration-300"
                >
                  Book Your Dedicated Desk Now
                </a>
              </div>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-yellow-900 mb-2">Few Seats Available</h3>
                  <p className="text-yellow-800">
                    Dedicated desks are in high demand. Book your free tour today to secure your spot. Limited availability, so act fast!
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
              Our Dedicated Desks workspace is ideal for professionals who want a permanent workspace in a collaborative environment.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Designers", desc: "Perfect workspace for designers who need a permanent desk with dual monitor setup and creative inspiration from the community." },
              { title: "Analysts", desc: "Ideal for analysts who need a fixed workspace with high-speed internet and quiet focus time." },
              { title: "Remote Employees", desc: "Great for remote employees who need a professional workspace when working from Bangalore." },
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
              Customize your Dedicated Desk experience with these optional add-ons
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "24/7 access upgrade for round-the-clock workspace access",
              "Locker storage for extra security and convenience",
              "Recording booth hours for content creation and podcasting",
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
            Ready to Get Your Dedicated Desk?
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            Book your free tour today and see why Dedicated Desks at Spacio Workspace is Bangalore's top choice for permanent workspace solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/917022780310?text=I want to book a Dedicated Desk at Spacio Workspace Basavanagudi"
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
      <PlanSeo planId="dedicated-desks" />
      <RelatedPlans
        links={[
          { href: "/workspaces/day-pass", label: "Day pass" },
          { href: "/workspaces/solo-cabin", label: "Private cabins" },
        ]}
      />
    </div>
  );
}










