"use client";
import { motion } from "framer-motion";
import { Building2, Star, Users, TrendingUp, Award, CheckCircle2 } from "lucide-react";

export function ClientsSection() {
  const clientTypes = [
    { name: "Tech Startups", count: "150+", icon: "🚀" },
    { name: "SaaS Companies", count: "80+", icon: "💻" },
    { name: "Digital Agencies", count: "60+", icon: "🎨" },
    { name: "Freelancers", count: "120+", icon: "✨" },
    { name: "Consultants", count: "50+", icon: "📊" },
    { name: "E-commerce", count: "40+", icon: "🛒" },
  ];


  const stats = [
    { label: "Happy Members", value: "500+", icon: Users },
    { label: "Average Rating", value: "4.8/5", icon: Star },
    { label: "Success Stories", value: "200+", icon: TrendingUp },
    { label: "Years of Excellence", value: "3+", icon: Award },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 bg-gradient-to-b from-white to-neutral-50/50">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="badge-premium mb-4 inline-block">Our Community</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-4">
          Trusted by <span className="text-gradient">500+ Members</span> in Bangalore
        </h2>
        <p className="mt-4 text-lg text-neutral-700 max-w-2xl mx-auto">
          Join startups, freelancers, and entrepreneurs who've made Spacio their workspace in Basavanagudi, Bangalore.
        </p>
      </motion.div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="card-premium rounded-2xl border-2 border-primary/20 p-6 bg-white text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <stat.icon className="w-10 h-10 text-primary mx-auto mb-3" />
            <div className="text-3xl font-bold text-neutral-900 mb-1">{stat.value}</div>
            <div className="text-sm text-neutral-600">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Client Types */}
      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
        {clientTypes.map((client, i) => (
          <motion.div
            key={client.name}
            className="card-premium rounded-xl border-2 border-neutral-200 p-6 text-center bg-gradient-to-br from-neutral-50 to-white hover:border-primary transition-all duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl mb-3">{client.icon}</div>
            <div className="font-bold text-neutral-900 mb-1">{client.name}</div>
            <div className="text-sm text-primary font-semibold">{client.count}</div>
          </motion.div>
        ))}
      </div>


      {/* Trust Badges */}
      <motion.div
        className="flex flex-wrap items-center justify-center gap-8 text-neutral-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-primary" />
          <span className="font-semibold">Google Verified</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-primary" />
          <span className="font-semibold">4.8/5 Rating</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-primary" />
          <span className="font-semibold">500+ Reviews</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-primary" />
          <span className="font-semibold">Award Winning</span>
        </div>
      </motion.div>
    </section>
  );
}

