import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, CheckCircle2, MapPin, Clock, Wifi, Users, Building2, Sparkles, Layers, Play, Shield, Zap, Coffee, Video } from "lucide-react";
import { RelatedPlans } from "@/components/RelatedPlans";
import { PlanSeo } from "@/components/PlanSeo";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Meeting Rooms in Basavanagudi | ₹399/hour",
  description: "Hourly meeting rooms at Spacio Workspace, Basavanagudi. 4 to 12 seats, AV and conferencing, ₹399 per hour.",
  path: "/workspaces/meeting-rooms",
  ogImage: "/images/meeting-room-frosted-glass.jpg",
  ogAlt: "Meeting room at Spacio Workspace Basavanagudi",
});

export default function MeetingRoomsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-white to-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <span className="badge-premium mb-4 inline-block">Premium Meeting Rooms</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                Meeting Rooms in Basavanagudi, Bangalore
              </h1>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Spacio meeting rooms in Basavanagudi are for board reviews, investor pitches, client demos, and hybrid workshops. Rooms range from 4-seater huddle spaces to 12-seater boardrooms with 4K displays, plug-and-play conferencing, and onsite support.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <a
                  href="https://wa.me/917022780310?text=I want to book a Meeting Room at Spacio Workspace Basavanagudi"
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
                  <span>Starting at ₹399/hour</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Slots Open Daily</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>4-12 People Capacity</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/meeting-room-frosted-glass.jpg"
                alt="Meeting Rooms at Spacio Workspace Basavanagudi"
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
              Why Choose Meeting Rooms at Spacio Workspace?
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              Equipped with 4K displays, ceiling-mounted mics, and high-fidelity speakers for crystal-clear calls.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Video, title: "4K Displays", desc: "Equipped with 4K displays, ceiling-mounted mics, and high-fidelity speakers for crystal-clear calls." },
              { icon: Users, title: "Onsite Support", desc: "Onsite support team handles seating layouts, coffee service, and guest welcome boards." },
              { icon: Building2, title: "Flexible Packages", desc: "Hourly, half-day, and full-day packages with GST invoices for enterprise compliance." },
              { icon: Wifi, title: "1Gbps High-Speed Internet", desc: "Dual ISP lines with enterprise-grade connectivity for seamless video conferencing." },
              { icon: Sparkles, title: "Audio-Visual Equipment", desc: "Plug-and-play conferencing setup with whiteboards and presentation tools." },
              { icon: Coffee, title: "Concierge Support", desc: "Professional concierge support to handle your meeting needs and guest management." },
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

      <section className="py-20 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Capacity, AV, and hourly booking
            </h2>
            <p className="text-lg text-neutral-700">
              Published rate is ₹399 per hour. Half-day and full-day slots are available — WhatsApp for those quotes. We do not list extra hourly tiers here.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h3 className="text-xl font-semibold mb-4">Room capacity</h3>
              <ul className="space-y-3 text-neutral-700">
                <li className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary mt-0.5" />
                  <span>4-seater huddle — small reviews, interviews, and video calls</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary mt-0.5" />
                  <span>Up to 12-seater boardroom — pitches, workshops, and client demos</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h3 className="text-xl font-semibold mb-4">AV in the room</h3>
              <ul className="space-y-3 text-neutral-700">
                <li className="flex items-start gap-3">
                  <Video className="w-5 h-5 text-primary mt-0.5" />
                  <span>4K display, ceiling mics, speakers, plug-and-play conferencing</span>
                </li>
                <li className="flex items-start gap-3">
                  <Wifi className="w-5 h-5 text-primary mt-0.5" />
                  <span>1Gbps internet, whiteboard, GST invoice on request</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <a
              href="https://wa.me/917022780310?text=I%20want%20to%20book%20a%20meeting%20room%20at%20Spacio%20Basavanagudi"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-white font-semibold"
            >
              <MessageCircle className="w-5 h-5" />
              Book a meeting room
            </a>
          </div>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="py-20 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                Perfect for Investor Reviews, Client Demos, and Workshops
              </h2>
              <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
                Our meeting rooms range from 4-seater huddle spaces to 12-seater boardrooms with 4K displays, plug-and-play conferencing, and concierge support.
              </p>
              <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
                Ideal for hosting board reviews, investor pitches, and hybrid workshops with zero tech hassles.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Equipped with 4K displays, ceiling-mounted mics, and high-fidelity speakers for crystal-clear calls.",
                  "Onsite support team handles seating layouts, coffee service, and guest welcome boards.",
                  "Hourly, half-day, and full-day packages with GST invoices for enterprise compliance.",
                  "Whiteboard access and presentation tools for brainstorming and client presentations.",
                  "Video conferencing setup for hybrid meetings and remote participants.",
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
                src="/images/office-corridor-glass-partitions.jpg"
                alt="Meeting Rooms Interior at Spacio Workspace"
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
                Transparent Pricing & Flexible Booking
              </h2>
              <p className="text-lg text-neutral-700">
                Book by the hour at ₹399. Ask on WhatsApp if you need a half-day or full-day slot.
              </p>
            </div>
            <div className="rounded-3xl border-2 border-primary bg-gradient-to-br from-primary/5 to-white p-8 mb-8">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-primary mb-2">₹399</div>
                <div className="text-neutral-600">per hour</div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-neutral-700">Capacity: 4-12 people</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-neutral-700">Location: Basavanagudi</span>
                </div>
                <div className="flex items-center gap-3">
                  <Video className="w-5 h-5 text-primary" />
                  <span className="text-neutral-700">4K Display & AV Equipment</span>
                </div>
                <div className="flex items-center gap-3">
                  <Wifi className="w-5 h-5 text-primary" />
                  <span className="text-neutral-700">1Gbps Internet</span>
                </div>
              </div>
              <div className="text-center">
                <a
                  href="https://wa.me/917022780310?text=I want to book a Meeting Room at ₹399/hour"
                  className="inline-block rounded-xl bg-primary px-8 py-4 text-white font-semibold hover:bg-primary/90 transition-all duration-300"
                >
                  Book Your Meeting Room Now
                </a>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-green-900 mb-2">Slots Open Daily</h3>
                  <p className="text-green-800">
                    Meeting rooms are available for booking daily. Book your slot in advance to ensure availability. Flexible hourly, half-day, and full-day packages available.
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
              Our Meeting Rooms workspace is ideal for professional meetings, presentations, and workshops.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Investor Reviews", desc: "Perfect for hosting investor pitches and board reviews with professional AV setup and presentation tools." },
              { title: "Client Demos", desc: "Ideal for client presentations and product demos with 4K displays and video conferencing capabilities." },
              { title: "Workshops", desc: "Great for hosting workshops, training sessions, and team meetings with whiteboards and collaboration tools." },
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
              Customize your Meeting Room experience with these optional add-ons
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "Catering support for refreshments and meals",
              "Recording setup for video production and podcasting",
              "Custom seating layout for specific meeting needs",
            ].map((addon, idx) => (
              <div key={idx} className="rounded-2xl border border-neutral-200 p-6 text-center">
                <Layers className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="text-neutral-700 font-medium">{addon}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-50">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-6 text-center">
            Meeting room FAQ
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "How much is a meeting room?",
                a: "₹399 per hour. That is the published rate. Half-day and full-day packages exist — ask on WhatsApp rather than assuming a multiple of the hourly rate.",
              },
              {
                q: "How many people fit?",
                a: "From a 4-seater huddle to a 12-seater boardroom. Say your headcount when you book so we put you in the right room.",
              },
              {
                q: "What AV is in the room?",
                a: "4K display, ceiling-mounted mics, speakers, plug-and-play video conferencing, whiteboard, and 1Gbps internet. Onsite staff can help with seating and guest welcome.",
              },
            ].map((item) => (
              <details key={item.q} className="rounded-2xl border border-neutral-200 bg-white p-5">
                <summary className="font-semibold cursor-pointer">{item.q}</summary>
                <p className="mt-3 text-neutral-700">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
            Ready to Book Your Meeting Room?
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            WhatsApp to book a slot. Tell us the headcount, time, and whether you need the huddle room or the boardroom.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/917022780310?text=I want to book a Meeting Room at Spacio Workspace Basavanagudi"
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
      <PlanSeo planId="meeting-rooms" />
      <RelatedPlans
        links={[
          { href: "/workspaces/solo-cabin", label: "Private cabins" },
          { href: "/workspaces/day-pass", label: "Day pass" },
        ]}
      />
    </div>
  );
}










