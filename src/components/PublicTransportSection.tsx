"use client";
import { motion } from "framer-motion";
import { MapPin, Train, Bus, Car, Clock, Navigation, CheckCircle2 } from "lucide-react";

export function PublicTransportSection() {
  const transportOptions = [
    {
      icon: Train,
      title: "Metro Connectivity",
      desc: "Just 2.5 km from Lalbagh Metro Station (Green Line)",
      time: "8-10 mins",
      details: "Direct metro access to all major areas of Bangalore including MG Road, Indiranagar, and Whitefield",
      color: "text-green-600",
    },
    {
      icon: Bus,
      title: "BMTC Bus Routes",
      desc: "Multiple bus stops within 200 meters",
      time: "2-3 mins walk",
      details: "Well-connected to all major bus routes - 335, 336, 337, 500 series buses pass through Basavanagudi",
      color: "text-blue-600",
    },
    {
      icon: Car,
      title: "Auto & Taxi",
      desc: "Easy access via Ola, Uber, and local autos",
      time: "Available 24/7",
      details: "Prime location with excellent auto and taxi availability. Quick access to all parts of Bangalore",
      color: "text-primary",
    },
    {
      icon: Navigation,
      title: "Major Landmarks",
      desc: "Near Bull Temple, Lalbagh, and South Bangalore",
      time: "5-10 mins",
      details: "Walking distance to iconic landmarks - Bull Temple (5 mins), Lalbagh Botanical Gardens (10 mins)",
      color: "text-purple-600",
    },
  ];

  const nearbyAreas = [
    { name: "MG Road", distance: "15 mins", transport: "Metro" },
    { name: "Indiranagar", distance: "20 mins", transport: "Metro" },
    { name: "Koramangala", distance: "25 mins", transport: "Bus/Metro" },
    { name: "Whitefield", distance: "45 mins", transport: "Metro" },
    { name: "Electronic City", distance: "30 mins", transport: "Bus" },
    { name: "Marathahalli", distance: "40 mins", transport: "Metro" },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 bg-gradient-to-b from-white to-neutral-50/50 basavanagudi-heritage">
      <div className="absolute inset-0 basavanagudi-gradient opacity-30" />
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12">
          <span className="badge-premium mb-4 inline-block pulse-glow-peacock">🚇 Well Connected</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-4">
            <span className="text-gradient peacock-text">Perfectly Connected</span> to All of Bangalore
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
            <strong className="text-primary">Your commute just got easier!</strong> Spacio Workspace in Basavanagudi is 
            strategically located with <strong>excellent public transport connectivity</strong>. Whether you're coming from 
            North, South, East, or West Bangalore, we're easily accessible via <strong>Metro, BMTC buses, autos, and taxis</strong>. 
            <span className="block mt-2 text-primary font-semibold">Save time on travel, invest it in building your dreams! 🚀</span>
          </p>
        </div>

        {/* Transport Options */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {transportOptions.map((option, i) => (
            <motion.div
              key={option.title}
              className="card-premium rounded-2xl border-2 border-primary/20 p-4 sm:p-6 bg-white peacock-shimmer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, borderColor: "oklch(0.72 0.17 58)", scale: 1.02 }}
            >
              <div className="flex items-start justify-between mb-3">
                <option.icon className={`w-8 h-8 sm:w-10 sm:h-10 ${option.color} mb-3`} />
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">{option.time}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-2">{option.title}</h3>
              <p className="text-neutral-700 text-xs sm:text-sm mb-2 leading-relaxed">{option.desc}</p>
              <p className="text-neutral-600 text-xs leading-relaxed">{option.details}</p>
            </motion.div>
          ))}
        </div>

        {/* Nearby Areas */}
        <div className="mb-12">
          <motion.h3
            className="text-2xl sm:text-3xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Quick Access to <span className="text-gradient peacock-text">Major Areas</span>
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {nearbyAreas.map((area, i) => (
              <motion.div
                key={area.name}
                className="card-premium rounded-xl border-2 border-neutral-200 p-4 bg-white hover:border-primary transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                whileHover={{ y: -3 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-neutral-900">{area.name}</div>
                    <div className="text-sm text-neutral-600">{area.transport}</div>
                  </div>
                  <div className="text-primary font-semibold">{area.distance}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <motion.div
          className="rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-white p-6 sm:p-8 border-2 border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
            Why Our Location <span className="text-gradient peacock-text">Matters</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Clock, text: "Save 2+ hours daily on commute" },
              { icon: CheckCircle2, text: "Metro + Bus connectivity" },
              { icon: MapPin, text: "Central South Bangalore location" },
              { icon: Navigation, text: "Easy to find & navigate" },
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-3">
                <benefit.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm sm:text-base text-neutral-700">{benefit.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

