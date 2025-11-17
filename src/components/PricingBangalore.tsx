"use client";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Zap, Users, Building2, Calendar, Star } from "lucide-react";

export function PricingBangalore() {
  const pricingPlans = [
    {
      name: "Day Pass",
      price: "₹199",
      period: "per day",
      badge: "Perfect for Trying",
      icon: Calendar,
      features: [
        "Full day access (9 AM - 7 PM)",
        "High-speed WiFi (1Gbps)",
        "Access to common areas",
        "Meeting room credits (2 hours)",
        "Printing & scanning",
      ],
      cta: "Book Day Pass",
      popular: false,
    },
    {
      name: "Dedicated Desk",
      price: "₹2,999",
      period: "per month",
      badge: "Most Popular",
      icon: Building2,
      features: [
        "Assigned desk space",
        "24/7 secure access",
        "Personal storage locker",
        "High-speed WiFi (1Gbps)",
        "Meeting room access",
        "Community events",
        "Mail handling",
      ],
      cta: "Book Dedicated Desk",
      popular: true,
    },
    {
      name: "Solo Cabin",
      price: "₹5,999",
      period: "per month",
      badge: "Private & Quiet",
      icon: Zap,
      features: [
        "Private cabin space",
        "24/7 secure access",
        "Personal storage",
        "High-speed WiFi (1Gbps)",
        "Ergonomic furniture",
        "Meeting room access",
        "Mail handling",
      ],
      cta: "Book Solo Cabin",
      popular: false,
    },
    {
      name: "3-Seater Cabin",
      price: "₹10,999",
      period: "per month",
      badge: "Great for Teams",
      icon: Users,
      features: [
        "Private cabin for 3 people",
        "24/7 secure access",
        "Storage lockers",
        "High-speed WiFi (1Gbps)",
        "Whiteboard included",
        "Meeting room access",
        "Team collaboration space",
      ],
      cta: "Book 3-Seater Cabin",
      popular: false,
    },
    {
      name: "6-Seater Cabin",
      price: "₹18,999",
      period: "per month",
      badge: "Great Value",
      icon: Users,
      features: [
        "Private cabin for 6 people",
        "24/7 secure access",
        "Storage solutions",
        "High-speed WiFi (1Gbps)",
        "Whiteboard & presentation tools",
        "Meeting room access",
        "Team collaboration zone",
      ],
      cta: "Book 6-Seater Cabin",
      popular: false,
    },
    {
      name: "Virtual Office",
      price: "From ₹9,000",
      period: "per month",
      badge: "Professional",
      icon: Building2,
      features: [
        "Premium business address",
        "Mail handling & forwarding",
        "Phone answering service",
        "Meeting room access",
        "Compliance support",
        "GST-ready invoicing",
      ],
      cta: "Book Virtual Office",
      popular: false,
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="relative mx-auto max-w-7xl px-4 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <motion.div
          className="relative z-10 text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="badge-premium mb-4 inline-block">Transparent Pricing</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mt-4">
            <span className="text-gradient">Simple, Honest</span> Pricing
          </h1>
          <p className="mt-6 text-lg md:text-xl text-neutral-700 max-w-2xl mx-auto">
            No hidden fees, no surprises. Premium coworking space in Bangalore at prices that make sense for Gen Z entrepreneurs.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-neutral-600">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span>4.8/5 Rating | 500+ Happy Members</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`card-premium rounded-2xl border-2 p-6 bg-white relative ${
                plan.popular
                  ? "border-primary ring-2 ring-primary/20 scale-105 lg:scale-110"
                  : "border-neutral-200"
              }`}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: plan.popular ? 1.05 : 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: plan.popular ? 1.08 : 1.02 }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="badge-premium">Most Popular</span>
                </div>
              )}
              <plan.icon className="w-10 h-10 text-primary mb-4" />
              {plan.badge && !plan.popular && (
                <span className="inline-block px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                  {plan.badge}
                </span>
              )}
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-neutral-900">{plan.price}</span>
                <span className="text-neutral-600 ml-2">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/917022780310?text=I'm interested in ${plan.name} at Spacio Workspace Bangalore`}
                className="btn-premium w-full rounded-xl bg-primary px-4 py-3 text-white font-semibold text-center hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2"
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-white p-8 text-center border-2 border-primary/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-neutral-900 mb-2">
            Need a Custom Solution?
          </h3>
          <p className="text-neutral-700 mb-6 max-w-2xl mx-auto">
            We offer flexible pricing for teams, long-term commitments, and custom workspace solutions. 
            Contact us for a personalized quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+917022780310"
              className="rounded-xl border-2 border-primary px-6 py-3 font-semibold hover:bg-primary hover:text-white transition-all duration-300"
            >
              Call for Custom Pricing
            </a>
            <a
              href="https://wa.me/917022780310?text=I need a custom pricing quote for Spacio Workspace"
              className="btn-premium rounded-xl bg-primary px-6 py-3 text-white font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center gap-2"
            >
              WhatsApp for Quote
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

