"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  MapPin,
  Shield,
  Star,
  Wifi,
} from "lucide-react";
import { CallLink, WhatsAppLink } from "@/components/ContactCtas";
import { PlanVideoSection } from "@/components/PlanVideoSection";
import { PLANS } from "@/lib/site";

const PLAN_DETAILS: Record<
  string,
  { badge: string; who: string; features: string[]; cta: string; popular?: boolean }
> = {
  "day-pass": {
    badge: "Try the space",
    who: "Freelancers, travellers, and anyone who needs a desk for a day.",
    features: [
      "Full-day access (9 AM – 7 PM)",
      "1 Gbps WiFi",
      "Common areas & beverages",
      "Printing support",
    ],
    cta: "Book Day Pass on WhatsApp",
  },
  "dedicated-desks": {
    badge: "Most chosen",
    who: "Professionals who want a fixed desk without a private cabin.",
    features: [
      "Assigned desk",
      "24/7 member access",
      "Personal storage",
      "Meeting room access",
      "1 Gbps WiFi",
    ],
    cta: "Check Desk Availability",
    popular: true,
  },
  "solo-cabin": {
    badge: "Private office",
    who: "Founders, consultants, and creators who need a quiet closed room.",
    features: [
      "Fully enclosed cabin",
      "24/7 member access",
      "Ergonomic furniture",
      "Meeting room access",
      "1 Gbps WiFi",
    ],
    cta: "Check Cabin Availability",
  },
  "three-seater-cabin": {
    badge: "Small teams",
    who: "Co-founders and partners who need a lockable room for three.",
    features: [
      "Seats up to 3",
      "Whiteboard",
      "24/7 member access",
      "Meeting room access",
      "1 Gbps WiFi",
    ],
    cta: "Check Cabin Availability",
  },
  "six-seater-cabin": {
    badge: "Growing teams",
    who: "Teams that need a private South Bangalore office without a long lease.",
    features: [
      "Seats up to 6",
      "Room to collaborate",
      "24/7 member access",
      "Meeting room access",
      "1 Gbps WiFi",
    ],
    cta: "Check Cabin Availability",
  },
  "meeting-rooms": {
    badge: "By the hour",
    who: "Client meetings, interviews, and team syncs with AV ready to go.",
    features: [
      "Rooms for about 4–12 people",
      "AV for hybrid calls",
      "Whiteboard",
      "From ₹399 per hour",
    ],
    cta: "Check Room Availability",
  },
  "virtual-office": {
    badge: "Business address",
    who: "Companies needing a Basavanagudi address for GST, ROC, and mail.",
    features: [
      "GST / ROC-ready address",
      "Mail handling",
      "Meeting room credits",
      "Basavanagudi, Bangalore 560004",
    ],
    cta: "Get Virtual Office Details",
  },
};

export default function PricingPage() {
  const pricingPlans = PLANS.map((plan) => {
    const details = PLAN_DETAILS[plan.id];
    return {
      id: plan.id,
      name: plan.name,
      path: plan.path,
      price: plan.price,
      period: plan.unitLabel,
      description: plan.description,
      badge: details?.badge ?? "",
      who: details?.who ?? "",
      features: details?.features ?? [],
      cta: details?.cta ?? `Enquire about ${plan.name}`,
      popular: details?.popular ?? false,
    };
  });

  return (
    <div className="bg-white min-h-screen">
      <section className="relative mx-auto max-w-7xl px-4 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" aria-hidden />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center"
        >
          <span className="badge-premium mb-4 inline-block">Basavanagudi · Bangalore</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mt-4">
            <span className="text-gradient">Simple, Honest</span> Pricing
          </h1>
          <p className="mt-6 text-lg md:text-xl text-neutral-700 max-w-2xl mx-auto leading-relaxed">
            Clear rates for day passes, dedicated desks, private cabins, meeting rooms, and
            virtual office at Spacio Workspace in Basavanagudi. Pick a plan, then WhatsApp or
            book a tour to check availability.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <WhatsAppLink
              location="pricing-hero"
              message="Hi! I need pricing details for Spacio Workspace in Basavanagudi."
            >
              WhatsApp for pricing
              <ArrowRight className="w-5 h-5" aria-hidden />
            </WhatsAppLink>
            <CallLink location="pricing-hero" />
            <Link
              href="/book-tour"
              className="rounded-xl border-2 border-primary/30 px-6 py-3 font-semibold text-neutral-900 hover:border-primary hover:bg-primary/5 transition-all duration-300 inline-flex items-center justify-center min-h-[44px]"
            >
              Book a free tour
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-4" aria-labelledby="choose-plan">
        <h2 id="choose-plan" className="text-2xl md:text-3xl font-bold text-center text-neutral-900 mb-3">
          Choose the workspace that fits you
        </h2>
        <p className="text-center text-neutral-600 max-w-2xl mx-auto mb-10">
          Every plan is at our Basavanagudi centre. Prices below are the listed rates — confirm
          GST, deposits, and current availability with the team.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <motion.article
              key={plan.id}
              className={`card-premium rounded-2xl border-2 p-7 bg-white relative flex flex-col ${
                plan.popular
                  ? "border-primary ring-2 ring-primary/15"
                  : "border-neutral-200"
              }`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.05, 0.3), duration: 0.45 }}
            >
              {plan.badge ? (
                <span className="badge-premium mb-3 inline-block text-xs w-fit">{plan.badge}</span>
              ) : null}
              <h3 className="text-xl font-bold text-neutral-900 mb-1">
                <Link href={plan.path} className="hover:text-primary transition-colors">
                  {plan.name}
                </Link>
              </h3>
              <div className="mb-3">
                <span className="text-3xl font-bold text-primary">{plan.price}</span>
                <span className="text-neutral-600 ml-2 text-sm">{plan.period}</span>
              </div>
              <p className="text-neutral-600 text-sm mb-2">{plan.who}</p>
              <p className="text-neutral-500 text-sm mb-5">{plan.description}</p>
              <ul className="space-y-2.5 mb-6 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" aria-hidden />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-2.5 mt-auto">
                <WhatsAppLink
                  location={`pricing-${plan.id}`}
                  message={`Hi! I'm interested in the ${plan.name} (${plan.price} ${plan.period}) at Spacio Workspace, Basavanagudi. Is it available?`}
                  className="w-full"
                >
                  {plan.cta}
                </WhatsAppLink>
                <Link
                  href={plan.path}
                  className="rounded-xl border border-primary/30 px-4 py-2.5 text-sm font-semibold text-center text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300 min-h-[44px] flex items-center justify-center"
                >
                  View {plan.name} details
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16 mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-neutral-900">
            What&apos;s included at Spacio
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Wifi, title: "1 Gbps WiFi", desc: "Fast, reliable internet for calls and uploads" },
              { icon: Shield, title: "Secure access", desc: "24/7 entry for cabin and desk members" },
              { icon: MapPin, title: "Basavanagudi", desc: "NAT Street — near Bull Temple and Lalbagh" },
              { icon: Clock, title: "Flexible terms", desc: "Day pass, monthly desks, yearly virtual office" },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                className="text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <feature.icon className="w-10 h-10 text-primary mx-auto mb-3" aria-hidden />
                <h3 className="font-bold text-neutral-900 mb-1">{feature.title}</h3>
                <p className="text-sm text-neutral-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 text-center">
          How to choose a plan
        </h2>
        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Start with a{" "}
            <Link href="/workspaces/day-pass" className="text-primary font-medium hover:underline">
              day pass
            </Link>{" "}
            if you want to try the centre first. Move to a{" "}
            <Link href="/workspaces/dedicated-desks" className="text-primary font-medium hover:underline">
              dedicated desk
            </Link>{" "}
            when you need a regular seat, or a{" "}
            <Link href="/workspaces/solo-cabin" className="text-primary font-medium hover:underline">
              private cabin
            </Link>{" "}
            when you need a door and quiet for calls.
          </p>
          <p>
            Book{" "}
            <Link href="/workspaces/meeting-rooms" className="text-primary font-medium hover:underline">
              meeting rooms
            </Link>{" "}
            by the hour for clients and interviews. Use the{" "}
            <Link href="/workspaces/virtual-office" className="text-primary font-medium hover:underline">
              virtual office
            </Link>{" "}
            when you need a business address in Basavanagudi for GST, ROC, and mail — with optional
            meeting room access when you visit.
          </p>
          <p>
            All workspace options are at{" "}
            <Link href="/locations/basavanagudi" className="text-primary font-medium hover:underline">
              Spacio Workspace, Basavanagudi
            </Link>
            . Prefer to see the space before you decide?{" "}
            <Link href="/book-tour" className="text-primary font-medium hover:underline">
              Book a free tour
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 text-center">
        <div className="rounded-3xl border border-primary/20 p-8 sm:p-12 bg-gradient-to-br from-primary/5 to-white">
          <Star className="w-12 h-12 text-primary mx-auto mb-5" aria-hidden />
          <h2 className="text-3xl font-bold text-neutral-900 mb-3">Not sure which plan fits?</h2>
          <p className="text-neutral-700 mb-8 max-w-xl mx-auto">
            Visit the Basavanagudi centre, walk through the cabins and desks, and we&apos;ll help
            you match a plan to how you actually work.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <WhatsAppLink
              location="pricing-tour-cta"
              message="Hi! I'd like to book a free tour and discuss which plan fits me at Spacio Workspace, Basavanagudi."
            >
              Book a free tour on WhatsApp
            </WhatsAppLink>
            <Link
              href="/book-tour"
              className="rounded-xl border-2 border-primary px-6 py-3 font-semibold text-neutral-900 hover:bg-primary hover:text-white transition-all duration-300 inline-flex items-center justify-center min-h-[44px]"
            >
              Tour booking form
            </Link>
          </div>
        </div>
      </section>

      <PlanVideoSection showAllTours />
    </div>
  );
}
