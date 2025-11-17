"use client";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, MapPin, Sparkles, Star } from "lucide-react";

export default function JayanagarLocationPage() {
  return (
    <div className="bg-white min-h-screen">
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
            Spacio Workspace <span className="text-gradient">Jayanagar</span>
          </h1>
          <p className="mt-4 text-lg text-neutral-700 max-w-2xl mx-auto">
            Coming Soon - Prime location in Jayanagar 4th Block, Bangalore.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div 
            className="card-premium rounded-2xl border-2 border-primary/20 p-8 bg-gradient-to-br from-primary/5 to-white"
            initial={{opacity:0, x: 20}} 
            animate={{opacity:1, x: 0}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Jayanagar</h2>
            <p className="text-lg text-neutral-700 mb-6">
              Coming Soon - Jayanagar 4th Block, Bangalore - 560011
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Prime Jayanagar Location</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <Sparkles className="w-4 h-4 text-primary" />
                <span>Opening Soon - Get Early Access</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <Star className="w-4 h-4 text-primary" />
                <span>Same Premium Features</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a 
                className="btn-premium rounded-xl bg-primary px-5 py-3 text-white font-semibold hover:bg-primary/90 transition-all duration-300" 
                href="https://wa.me/917022780310?text=I'm interested in the Jayanagar location of Spacio Workspace Bangalore"
              >
                Get Updates
              </a>
              <a 
                className="rounded-xl border-2 border-neutral-200 px-5 py-3 font-semibold hover:border-primary hover:bg-primary/5 transition-all duration-300" 
                href="tel:+917022780310"
              >
                Call for Details
              </a>
            </div>
          </motion.div>
          <motion.div
            className="aspect-video w-full rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-neutral-50 ring-2 ring-neutral-200 shadow-xl flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="text-center">
              <Sparkles className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="text-lg font-semibold text-neutral-700">Coming Soon</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
