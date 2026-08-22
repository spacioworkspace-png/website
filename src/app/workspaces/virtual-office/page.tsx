import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, CheckCircle2, MapPin, Clock, Wifi, Users, Building2, Sparkles, Layers, Play, Shield, Zap, Coffee, Mail, Phone } from "lucide-react";
import { RelatedPlans } from "@/components/RelatedPlans";
import { PlanSeo } from "@/components/PlanSeo";
import { PlanVideoSection } from "@/components/PlanVideoSection";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Virtual Office in Basavanagudi | ₹12,999/year",
  description: "GST and ROC business address at Spacio Workspace, Basavanagudi. Mail handling and phone answering. ₹12,999 per year.",
  path: "/workspaces/virtual-office",
  ogImage: "/images/building-exterior-sree-devi-complex.jpg",
  ogAlt: "Spacio Workspace Basavanagudi virtual office address",
});

export default function VirtualOfficePage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-white to-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <span className="badge-premium mb-4 inline-block">Professional Presence</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                Virtual Office in Basavanagudi, Bangalore
              </h1>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Spacio's virtual office in Bangalore keeps your brand compliant with ROC, GST, and banking requirements while giving you drop-in access to meeting rooms when clients need face time. Use our Basavanagudi address on ROC, GST, MSME, and bank documents without leasing a physical cabin.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <a
                  href="https://wa.me/917022780310?text=I want to book a Virtual Office at Spacio Workspace Basavanagudi"
                  className="rounded-xl bg-primary px-6 py-3 text-white font-semibold hover:bg-primary/90 transition-all duration-300 inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp to Book
                </a>
                <Link
                  href="/book-tour"
                  className="rounded-xl border border-primary px-6 py-3 text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300 inline-flex items-center gap-2"
                >
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-neutral-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Starting at ₹12,999/year</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Instant Activation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>GST Ready Address</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/building-exterior-sree-devi-complex.jpg"
                alt="Virtual Office at Spacio Workspace Basavanagudi"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <PlanVideoSection planId="virtual-office" showAllTours />

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Why Choose Virtual Office at Spacio Workspace?
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              Professional reception handles mail, courier, and document pickup with instant WhatsApp notification.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Building2, title: "GST Ready Address", desc: "Use our Basavanagudi address on ROC, GST, MSME, and bank documents without leasing a physical cabin." },
              { icon: Mail, title: "Mail Handling", desc: "Professional reception handles mail, courier, and document pickup with instant WhatsApp notification." },
              { icon: Phone, title: "Phone Answering", desc: "Professional phone answering service to handle your business calls and forward important messages." },
              { icon: Users, title: "Meeting Room Access", desc: "Add meeting room credits or day-pass bundles whenever you visit Bengaluru for investor or client meets." },
              { icon: Shield, title: "Compliance Support", desc: "GST-ready invoicing and compliance support for business registration and legal requirements." },
              { icon: Zap, title: "Instant Activation", desc: "Get your virtual office activated instantly without any long-term commitments or hidden fees." },
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
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              GST, ROC, and mail at this address
            </h2>
            <p className="text-lg text-neutral-700">
              The virtual office plan is ₹12,999 per year. It is a business address at Sree Devi Complex, NAT Street, Basavanagudi — not a private cabin. Use it for registration paperwork, then add a meeting room or day pass when you need to be on site.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <Building2 className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-2">GST and ROC address</h3>
              <p className="text-neutral-700">
                Use the Basavanagudi address on GST, ROC, MSME, and bank documents. We issue GST-ready invoices and can support the paperwork your CA needs for registration. We do not file GST or ROC returns for you.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <Mail className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-2">Mail and courier</h3>
              <p className="text-neutral-700">
                Reception accepts mail, courier, and document pickup. You get a WhatsApp alert when something arrives. Forwarding can be arranged with the team.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <Phone className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-2">Calls and client visits</h3>
              <p className="text-neutral-700">
                Phone answering is included. Meeting room credits and day-pass bundles are available when you need face time in Bangalore.
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm text-neutral-600">
            Address: No 7, Sree Devi Complex, NAT Street, Basavanagudi, Bangalore 560004. Confirm current KYC documents with the team before you file GST or ROC.
          </p>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="py-20 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                Perfect for Outstation Founders and Remote Teams
              </h2>
              <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
                Our virtual office plan gives you a credible Basavanagudi business address, GST registration support, and professional reception services for courier and client handling.
              </p>
              <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
                Ideal for outstation founders, consulting firms, and D2C brands that need a professional business address without the cost of a physical office space.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Use our Basavanagudi address on ROC, GST, MSME, and bank documents without leasing a physical cabin.",
                  "Professional reception handles mail, courier, and document pickup with instant WhatsApp notification.",
                  "Add meeting room credits or day-pass bundles whenever you visit Bengaluru for investor or client meets.",
                  "GST-ready invoicing and compliance support for business registration.",
                  "Phone answering service to handle your business calls professionally.",
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
                alt="Virtual Office Services at Spacio Workspace"
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
                Transparent Pricing & Instant Activation
              </h2>
              <p className="text-lg text-neutral-700">
                No hidden costs, no long-term lock-ins. Get activated instantly.
              </p>
            </div>
            <div className="rounded-3xl border-2 border-primary bg-gradient-to-br from-primary/5 to-white p-8 mb-8">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-primary mb-2">₹12,999</div>
                <div className="text-neutral-600">per year</div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-primary" />
                  <span className="text-neutral-700">Business Address</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-neutral-700">Location: Basavanagudi</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-neutral-700">Mail Handling</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-neutral-700">Phone Service</span>
                </div>
              </div>
              <div className="text-center">
                <a
                  href="https://wa.me/917022780310?text=I want to book a Virtual Office at ₹12,999/year"
                  className="inline-block rounded-xl bg-primary px-8 py-4 text-white font-semibold hover:bg-primary/90 transition-all duration-300"
                >
                  Book Your Virtual Office Now
                </a>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-green-900 mb-2">Instant Activation Available</h3>
                  <p className="text-green-800">
                    Virtual office plans are available for instant activation. Get your business address activated within 24 hours. No deposit required. This is a yearly plan at ₹12,999.
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
              Our Virtual Office workspace is ideal for businesses that need a professional address without the cost of a physical office.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Outstation Founders", desc: "Perfect for founders who live outside Bangalore but need a professional business address for GST and compliance." },
              { title: "Consulting Firms", desc: "Ideal for consulting firms that need a credible business address for client contracts and legal documents." },
              { title: "D2C Brands", desc: "Great for D2C brands that need a professional business address for e-commerce registration and compliance." },
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
              Customize your Virtual Office experience with these optional add-ons
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "Dedicated desk day pass bundle for workspace access",
              "Dedicated phone line for exclusive business calls",
              "Document storage service for important files",
            ].map((addon, idx) => (
              <div key={idx} className="rounded-2xl border border-neutral-200 p-6 text-center">
                <Layers className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="text-neutral-700 font-medium">{addon}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-6 text-center">
            Virtual office FAQ
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "What is included at ₹12,999 per year?",
                a: "A Basavanagudi business address, mail and courier handling with WhatsApp alerts, phone answering, GST-ready invoicing, and compliance support for registration. Meeting room credits can be added when you visit.",
              },
              {
                q: "Can I use this address for GST and ROC?",
                a: "Yes. The plan is sold as a GST-ready and ROC-ready address for GST, ROC, MSME, and bank documents. Ask the team which proof of address they currently issue before you file.",
              },
              {
                q: "Do you open and forward my mail?",
                a: "Reception accepts mail and courier and notifies you on WhatsApp. Pickup and forwarding are arranged with the team — we do not open confidential mail unless you ask us to.",
              },
            ].map((item) => (
              <details key={item.q} className="rounded-2xl border border-neutral-200 p-5">
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
            Ready to Get Your Virtual Office?
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            Book a consultation and we will confirm the documents you need for GST or ROC, plus how mail is handled at this address.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/917022780310?text=I want to book a Virtual Office at Spacio Workspace Basavanagudi"
              className="rounded-xl bg-primary px-8 py-4 text-white font-semibold hover:bg-primary/90 transition-all duration-300 inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp to Book
            </a>
            <Link
              href="/book-tour"
              className="rounded-xl border-2 border-primary px-8 py-4 text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300 inline-flex items-center gap-2"
            >
              Book Free Consultation
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
      <PlanSeo planId="virtual-office" />
      <RelatedPlans
        links={[
          { href: "/workspaces/meeting-rooms", label: "Meeting rooms" },
          { href: "/workspaces/solo-cabin", label: "Private cabins" },
        ]}
      />
    </div>
  );
}










