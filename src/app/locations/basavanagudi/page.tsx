"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, MessageCircle, MapPin, Clock, Wifi, Sparkles, Star } from "lucide-react";
import { PublicTransportSection } from "@/components/PublicTransportSection";

export default function BasavanagudiLocationPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Locations Section */}
      <section className="mx-auto max-w-7xl scroll-mt-16 px-4 py-20 bg-white">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge-premium mb-4 inline-block">Our Locations</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
            Spacio Workspace <span className="text-gradient">Basavanagudi</span>
          </h1>
          <p className="mt-4 text-lg text-neutral-700 max-w-2xl mx-auto">
            Strategically located in South Bangalore - easily accessible from all major areas.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div 
            className="card-premium rounded-2xl border-2 border-primary/20 p-8 bg-gradient-to-br from-primary/5 to-white"
            initial={{opacity:0, x: -20}} 
            animate={{opacity:1, x: 0}}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-video w-full rounded-xl overflow-hidden mb-6 -mx-8 -mt-8">
              <img 
                src="/images/building-exterior-sree-devi-complex.jpg" 
                alt="Spacio Workspace building exterior - Sree Devi Complex, Basavanagudi, Bangalore"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Basavanagudi</h2>
            <p className="text-lg text-neutral-700 mb-6">
              No 7, Sree Devi Complex, NAT Street, Bangalore - 560004
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Prime South Bangalore Location</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <Clock className="w-4 h-4 text-primary" />
                <span>24/7 Access Available</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <Wifi className="w-4 h-4 text-primary" />
                <span>1Gbps High-Speed Internet</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a 
                className="btn-premium rounded-xl bg-primary px-5 py-3 text-white font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105" 
                href="https://wa.me/917022780310?text=I want to visit Spacio Workspace in Basavanagudi, near Bull Temple, Bangalore"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Directions
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                className="rounded-xl border-2 border-primary/30 px-5 py-3 font-semibold hover:border-primary hover:bg-primary/5 transition-all duration-300 flex items-center gap-2" 
                href="https://wa.me/917022780310?text=I need directions to Spacio Workspace Basavanagudi"
              >
                <MessageCircle className="w-5 h-5" />
                Get Directions via WhatsApp
              </a>
              <a 
                className="rounded-xl border-2 border-neutral-200 px-5 py-3 font-semibold hover:border-primary hover:bg-primary/5 transition-all duration-300" 
                href="https://www.google.com/maps/place/Spacio+Workspace/@12.9449135,77.5658325,17z" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Open Google Maps
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <iframe 
              className="aspect-video w-full rounded-2xl ring-2 ring-neutral-200 shadow-xl" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
              src="https://www.google.com/maps?q=Spacio%20Workspace%20Bangalore&output=embed"
            />
          </motion.div>
        </div>
      </section>

      {/* Public Transport Section */}
      <PublicTransportSection />
    </div>
  );
}
