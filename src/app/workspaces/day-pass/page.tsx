import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, CheckCircle2, MapPin, Clock, Wifi, Users, Building2, Sparkles, Layers, Play, Shield, Zap, Coffee } from "lucide-react";
import { RelatedPlans } from "@/components/RelatedPlans";

export const metadata: Metadata = {
  title: "Day Pass in Basavanagudi | ₹199/day",
  description: "Coworking day pass at Spacio Workspace, Basavanagudi. ₹199 per day, 9 AM to 7 PM. Walk in or book ahead.",
  alternates: { canonical: "https://www.spacioworkspace.com/workspaces/day-pass" },
  openGraph: {
    title: "Day Pass in Basavanagudi | ₹199/day",
    description: "Coworking day pass at Spacio Workspace, Basavanagudi. ₹199 per day, 9 AM to 7 PM. Walk in or book ahead.",
    url: "https://www.spacioworkspace.com/workspaces/day-pass",
    siteName: "Spacio Workspace",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/images/workspace-green-screens.jpg", width: 1200, height: 630, alt: "Day pass coworking at Spacio Workspace Basavanagudi" }],
  },
};

export default function DayPassPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-white to-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <span className="badge-premium mb-4 inline-block">Flex Access</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                Day Pass Coworking in Basavanagudi, Bangalore
              </h1>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Our day pass lets you enjoy the Basavanagudi coworking vibe, 1Gbps dual ISP, and concierge hospitality for a single day—perfect for client meetings, interviews, or break-the-routine workdays. Need a professional workspace just for today? Pick up a Spacio day pass, grab a seat in our vibrant coworking bay.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <a
                  href="https://wa.me/917022780310?text=I want to buy a Day Pass at Spacio Workspace Basavanagudi"
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
                  <span>Starting at ₹199/day</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Purchase on Arrival</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>9 AM - 7 PM Access</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/workspace-green-screens.jpg"
                alt="Day Pass Coworking at Spacio Workspace Basavanagudi"
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
              Why Choose Day Pass at Spacio Workspace?
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              Get enterprise-grade infrastructure without a long-term commitment. Perfect for flexible work needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: "9 AM - 7 PM Access", desc: "Access the space between 9 AM and 7 PM with high-speed WiFi, printing support, and unlimited beverages." },
              { icon: Coffee, title: "Community Events", desc: "Drop into community events, founder mixers, or wellness sessions scheduled for that day." },
              { icon: Layers, title: "Add-On Options", desc: "Add-on meeting room credits or locker storage when you need extra privacy or security." },
              { icon: Wifi, title: "1Gbps High-Speed Internet", desc: "Dual ISP lines with enterprise-grade connectivity for seamless work and video calls." },
              { icon: Users, title: "Ergonomic Open Seating", desc: "Comfortable ergonomic seating in our vibrant coworking bay with natural light." },
              { icon: Zap, title: "Power Backup", desc: "Uninterrupted power supply with UPS and generator backup for continuous productivity." },
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
                Perfect for Freelancers, Remote Employees, and Students
              </h2>
              <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
                Need a professional workspace just for today? Pick up a Spacio day pass, grab a seat in our vibrant coworking bay, and get enterprise-grade infrastructure without a long-term commitment.
              </p>
              <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
                Perfect for client meetings, interviews, or break-the-routine workdays when you need a change of scenery and professional environment.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Access the space between 9 AM and 7 PM with high-speed WiFi, printing support, and unlimited beverages.",
                  "Drop into community events, founder mixers, or wellness sessions scheduled for that day.",
                  "Add-on meeting room credits or locker storage when you need extra privacy or security.",
                  "Ergonomic open seating with natural light and comfortable workspace.",
                  "Tea, coffee, and pantry access throughout the day.",
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
                alt="Day Pass Coworking Interior at Spacio Workspace"
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
                Simple Pricing & Flexible Access
              </h2>
              <p className="text-lg text-neutral-700">
                No commitment, no hassle. Purchase on arrival and start working immediately.
              </p>
            </div>
            <div className="rounded-3xl border-2 border-primary bg-gradient-to-br from-primary/5 to-white p-8 mb-8">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-primary mb-2">₹199</div>
                <div className="text-neutral-600">per day per guest</div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-neutral-700">Access: 9 AM - 7 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-neutral-700">Location: Basavanagudi</span>
                </div>
                <div className="flex items-center gap-3">
                  <Wifi className="w-5 h-5 text-primary" />
                  <span className="text-neutral-700">1Gbps Internet</span>
                </div>
                <div className="flex items-center gap-3">
                  <Coffee className="w-5 h-5 text-primary" />
                  <span className="text-neutral-700">Tea & Coffee Included</span>
                </div>
              </div>
              <div className="text-center">
                <a
                  href="https://wa.me/917022780310?text=I want to buy a Day Pass at ₹199/day"
                  className="inline-block rounded-xl bg-primary px-8 py-4 text-white font-semibold hover:bg-primary/90 transition-all duration-300"
                >
                  Buy Your Day Pass Now
                </a>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Purchase on Arrival</h3>
                  <p className="text-blue-800">
                    Day passes can be purchased directly at our reception. No advance booking required. Just walk in, pay, and start working immediately. Perfect for spontaneous work sessions!
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
              Our Day Pass workspace is ideal for professionals who need flexible workspace access without long-term commitment.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Freelancers on the Go", desc: "Perfect for freelancers who need a professional workspace for client meetings or focused work sessions." },
              { title: "Remote Employees", desc: "Ideal for remote employees visiting the city who need a professional workspace for the day." },
              { title: "Students", desc: "Great for students preparing for interviews or working on projects who need a quiet, professional environment." },
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
              Customize your Day Pass experience with these optional add-ons
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "Locker rental for secure storage during your visit",
              "Meeting room credits for client presentations",
              "Cafe vouchers for refreshments and meals",
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
            Ready to Get Your Day Pass?
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            Visit Spacio Workspace today and purchase your day pass on arrival. No advance booking required!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/917022780310?text=I want to buy a Day Pass at Spacio Workspace Basavanagudi"
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
      <RelatedPlans
        links={[
          { href: "/workspaces/dedicated-desks", label: "Dedicated desks" },
          { href: "/workspaces/meeting-rooms", label: "Meeting rooms" },
        ]}
      />
    </div>
  );
}










