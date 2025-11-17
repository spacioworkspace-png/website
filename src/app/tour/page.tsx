"use client";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react";

export default function TourPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="mx-auto max-w-7xl px-4 py-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge-premium mb-4 inline-block">Virtual Experience</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mt-4">
            Take a <span className="text-gradient">Virtual Tour</span>
          </h1>
          <p className="mt-4 text-lg text-neutral-700 max-w-2xl mx-auto">
            Explore our premium coworking space in Basavanagudi, Bangalore from the comfort of your home. 
            See our private cabins, meeting rooms, and vibrant community spaces.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="card-premium rounded-2xl border-2 border-primary/20 p-8 bg-white"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200">
              <video 
                className="w-full h-full object-cover" 
                controls 
                preload="metadata"
                poster="/images/spacio-sign-green-wall.jpg"
              >
                <source src="/tour.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="mt-4 text-neutral-600 text-center">
              Spacio Workspace Virtual Tour · Basavanagudi, Bangalore
            </p>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="card-premium rounded-2xl border-2 border-neutral-200 p-6 bg-white">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">What You'll See</h3>
              <ul className="space-y-3">
                {[
                  "Private cabins (Solo, 3-Seater, 6-Seater)",
                  "Dedicated desk areas",
                  "Modern meeting rooms",
                  "Common areas & lounge",
                  "High-speed WiFi infrastructure",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="https://wa.me/917022780310?text=I'd like to schedule a physical tour after watching the virtual tour"
              className="btn-premium w-full rounded-xl bg-primary px-6 py-4 text-white font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Book Physical Tour via WhatsApp
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
