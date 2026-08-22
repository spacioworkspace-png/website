"use client";
import { motion } from "framer-motion";
import { PlanVideoSection } from "@/components/PlanVideoSection";

export default function TourPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge-premium mb-4 inline-block">Virtual experience</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mt-4">
            Take a <span className="text-gradient">Virtual Tour</span>
          </h1>
          <p className="mt-4 text-lg text-neutral-700 max-w-2xl mx-auto">
            Explore Spacio Workspace in Basavanagudi from home. Watch the centre walkthrough, then
            jump to the video for any plan you are considering.
          </p>
        </motion.div>
      </section>

      <PlanVideoSection showAllTours className="!border-t-0" />
    </div>
  );
}
