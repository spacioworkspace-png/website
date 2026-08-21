"use client";
import { motion } from "framer-motion";
import { Building2, MapPin, Users, Wifi, CheckCircle2 } from "lucide-react";

export function ClientsSection() {
  const clientTypes = [
    { name: "Startups", icon: Building2 },
    { name: "SaaS teams", icon: Building2 },
    { name: "Agencies", icon: Building2 },
    { name: "Freelancers", icon: Users },
    { name: "Consultants", icon: Users },
    { name: "E-commerce", icon: Building2 },
  ];

  const stats = [
    { label: "Location", value: "Basavanagudi", icon: MapPin },
    { label: "Workspace", value: "Cabins & desks", icon: Building2 },
    { label: "Internet", value: "1Gbps", icon: Wifi },
    { label: "Access", value: "24/7", icon: Users },
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
        <span className="badge-premium mb-4 inline-block">Who works here</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-4">
          A workspace in <span className="text-gradient">Basavanagudi</span>
        </h2>
        <p className="mt-4 text-lg text-neutral-700 max-w-2xl mx-auto">
          Private cabins, dedicated desks, meeting rooms and virtual office solutions for professionals, startups and growing teams in South Bangalore.
        </p>
      </motion.div>

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
            <div className="text-2xl font-bold text-neutral-900 mb-1">{stat.value}</div>
            <div className="text-sm text-neutral-600">{stat.label}</div>
          </motion.div>
        ))}
      </div>

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
            <client.icon className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="font-bold text-neutral-900">{client.name}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="flex flex-wrap items-center justify-center gap-8 text-neutral-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-primary" />
          <span className="font-semibold">Basavanagudi centre</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-primary" />
          <span className="font-semibold">Private cabins</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-primary" />
          <span className="font-semibold">Dedicated desks</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-primary" />
          <span className="font-semibold">Meeting rooms</span>
        </div>
      </motion.div>
    </section>
  );
}
