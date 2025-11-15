"use client";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, CheckCircle2, Star, Zap, Shield, Clock, Wifi, MapPin, Gift, AlertCircle } from "lucide-react";
import { FOMOCountdown } from "@/components/FOMOCountdown";
export default function PricingPage() {
  const pricingPlans = [
    {
      name: "Day Pass",
      price: "Starting from ₹500",
      period: "per day",
      badge: "Perfect for Trying",
      description: "Ideal for occasional work days or trying out our space",
      features: [
        "Full day access (9 AM - 7 PM)",
        "1Gbps high-speed WiFi",
        "Access to common areas",
        "Meeting room credits",
        "Printing & scanning",
        "Community access",
      ],
      popular: false,
      cta: "Book Day Pass",
    },
    {
      name: "Dedicated Desk",
      price: "Starting from ₹8,000",
      period: "per month",
      badge: "🔥 Most Popular",
      description: "Your personal workspace with all premium amenities",
      features: [
        "Assigned desk space",
        "24/7 secure access",
        "Personal storage locker",
        "1Gbps high-speed WiFi",
        "All amenities included",
        "Meeting room access",
        "Community events",
        "Free coffee & tea",
      ],
      popular: true,
      cta: "Book Dedicated Desk",
    },
    {
      name: "Solo Cabin",
      price: "Starting from ₹12,000",
      period: "per month",
      badge: "💎 Private & Focused",
      description: "Private cabin perfect for individual focus and productivity",
      features: [
        "Private enclosed workspace",
        "Ergonomic furniture",
        "24/7 secure access",
        "1Gbps high-speed WiFi",
        "Personal storage space",
        "Meeting room access",
        "All amenities included",
        "Vastu-compliant design",
      ],
      popular: false,
      cta: "Book Solo Cabin",
    },
    {
      name: "3-Seater Cabin",
      price: "Starting from ₹30,000",
      period: "per month",
      badge: "👥 Team Favorite",
      description: "Perfect for small teams, partners, or collaborators",
      features: [
        "Space for 3 people",
        "Collaborative workspace",
        "Whiteboard included",
        "24/7 secure access",
        "1Gbps high-speed WiFi",
        "Storage lockers",
        "Meeting room access",
        "Team collaboration zone",
      ],
      popular: false,
      cta: "Book 3-Seater Cabin",
    },
    {
      name: "6-Seater Cabin",
      price: "Starting from ₹55,000",
      period: "per month",
      badge: "🎯 Great Value",
      description: "Spacious cabin for growing teams and brainstorming",
      features: [
        "Space for 6 people",
        "Large brainstorming area",
        "Whiteboard & presentation tools",
        "24/7 secure access",
        "1Gbps high-speed WiFi",
        "Storage solutions",
        "Meeting room access",
        "Team collaboration zone",
      ],
      popular: false,
      cta: "Book 6-Seater Cabin",
    },
    {
      name: "Virtual Office",
      price: "Starting from ₹2,500",
      period: "per month",
      badge: "⭐ Professional",
      description: "Premium business address and professional services",
      features: [
        "Premium business address in Bangalore",
        "Mail handling & forwarding",
        "Phone answering service",
        "Meeting room access (credits included)",
        "Compliance support",
        "GST-ready invoicing",
        "Professional image",
        "Flexible plans",
      ],
      popular: false,
      cta: "Book Virtual Office",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative mx-auto max-w-7xl px-4 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <span className="badge-premium mb-4 inline-block">Transparent Pricing</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mt-4">
            <span className="text-gradient">Simple, Honest</span> Pricing
          </h1>
          <p className="mt-6 text-lg md:text-xl text-neutral-700 max-w-2xl mx-auto">
            No hidden fees, no surprises. Premium coworking space in Bangalore at prices that make sense for Gen Z entrepreneurs, startups, and freelancers.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/917022780310?text=I need pricing details for Spacio Workspace in Basavanagudi #SpacioPricing #CoworkingBangalore #Basavanagudi"
              className="btn-premium inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-white font-semibold text-lg hover:bg-primary/90 transition-all duration-300 shadow-xl hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Get Custom Pricing
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+917022780310"
              className="rounded-xl border-2 border-primary/30 px-8 py-4 font-semibold text-neutral-900 hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              Call for Details
            </a>
          </div>
        </motion.div>
      </section>

      {/* FOMO Banner */}
      <section className="mx-auto max-w-7xl px-4 pb-8">
        <motion.div
          className="rounded-2xl bg-gradient-to-r from-primary via-primary/90 to-primary/80 p-6 md:p-8 text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-6 h-6 flex-shrink-0" />
              <div>
                <div className="font-bold text-lg mb-1">Limited Time Offer!</div>
                <div className="text-white/90">Get 10% OFF your first month + Free Tour</div>
              </div>
            </div>
            <FOMOCountdown />
          </div>
        </motion.div>
      </section>

      {/* Pricing Cards */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`card-premium rounded-2xl border-2 p-8 bg-white relative ${
                plan.popular
                  ? "border-primary ring-2 ring-primary/20 scale-105 md:scale-110 lg:scale-105"
                  : "border-neutral-200"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: plan.popular ? 1.12 : 1.02 }}
            >
              {plan.badge && (
                <span className="badge-premium mb-4 inline-block text-xs">{plan.badge}</span>
              )}
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-primary">{plan.price}</span>
                <span className="text-neutral-600 ml-2">{plan.period}</span>
              </div>
              <p className="text-neutral-600 mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3">
                <a
                  href={`https://wa.me/917022780310?text=${encodeURIComponent(`I'm interested in ${plan.name} at Spacio Workspace. Price: ${plan.price} ${plan.period}. #SpacioPricing #${plan.name.replace(/\s+/g, '')} #CoworkingBangalore #Basavanagudi`)}`}
                  className="btn-premium rounded-xl bg-primary px-4 py-3 text-white font-semibold text-center hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4" />
                  {plan.cta} via WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={`https://wa.me/917022780310?text=${encodeURIComponent(`I need more details about ${plan.name} pricing at Spacio Basavanagudi`)}`}
                  className="rounded-xl border border-primary/30 px-4 py-2 text-sm text-center hover:border-primary hover:bg-primary/5 transition-all duration-300"
                >
                  Get More Details →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* All Plans Include */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            All Plans Include
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Wifi, title: "1Gbps WiFi", desc: "Lightning-fast internet" },
              { icon: Shield, title: "24/7 Security", desc: "Secure access" },
              { icon: MapPin, title: "Prime Location", desc: "Basavanagudi & Jayanagar" },
              { icon: Star, title: "Community", desc: "500+ members" },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <feature.icon className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-neutral-900 mb-1">{feature.title}</h3>
                <p className="text-sm text-neutral-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-4xl px-4 py-20 text-center">
        <motion.div
          className="card-premium rounded-3xl border-2 border-primary/20 p-12 bg-gradient-to-br from-primary/5 to-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Gift className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">
            Not Sure Which Plan is Right?
          </h2>
          <p className="text-xl text-neutral-700 mb-8 max-w-2xl mx-auto">
            Book a free tour and our team will help you find the perfect workspace solution for your needs. 
            We offer custom plans for teams and long-term bookings.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/917022780310?text=I'd like to book a free tour and discuss pricing options at Spacio Workspace Basavanagudi #BookTour #SpacioPricing #CoworkingBangalore #Basavanagudi"
              className="btn-premium inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-white font-semibold text-lg hover:bg-primary/90 transition-all duration-300 shadow-xl hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Book Free Tour
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+917022780310"
              className="rounded-xl border-2 border-primary px-8 py-4 font-semibold text-neutral-900 hover:bg-primary hover:text-white transition-all duration-300"
            >
              Call for Custom Plans
            </a>
          </div>
        </motion.div>
      </section>

      {/* SEO Content */}
      <section className="mx-auto max-w-4xl px-4 pb-20">
        <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">
            Affordable Coworking Space Pricing in Bangalore - Spacio Workspace
          </h2>
          <p className="mb-4">
            <strong>Spacio Workspace</strong> offers transparent, affordable pricing for premium coworking space in Bangalore. 
            Whether you're looking for a <strong>day pass</strong>, <strong>dedicated desk</strong>, <strong>private cabin</strong> 
            (solo, 3-seater, or 6-seater), or <strong>virtual office</strong> in Basavanagudi or Jayanagar, we have flexible plans 
            to suit every budget and need.
          </p>
          <p className="mb-4">
            Our <strong>coworking space pricing in Bangalore</strong> is designed to be transparent with no hidden fees. 
            All plans include <strong>1Gbps high-speed WiFi</strong>, <strong>24/7 secure access</strong>, premium amenities, 
            and access to our vibrant community of 500+ members. We offer <strong>flexible month-to-month options</strong> 
            with no long-term commitments required.
          </p>
          <p className="mb-4">
            Looking for the <strong>best value coworking space in Bangalore</strong>? Our <strong>dedicated desk plans</strong> 
            start from ₹8,000/month, while <strong>private cabins</strong> start from ₹12,000/month for solo cabins. 
            <strong> Day passes</strong> are perfect for trying out our space, starting from ₹500/day. 
            <strong> Virtual office</strong> plans start from ₹2,500/month for a premium business address in Bangalore.
          </p>
          <p>
            <strong>Book your free tour</strong> today to see our spaces and discuss custom pricing options. 
            We offer special discounts for startups, long-term bookings, and team plans. Contact us via WhatsApp, 
            call, or visit our locations in Basavanagudi and Jayanagar to learn more about our affordable coworking space pricing.
          </p>
        </div>
      </section>
    </div>
  );
}
