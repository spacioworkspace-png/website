"use client";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, CheckCircle2, Clock, Wifi, MapPin } from "lucide-react";
import { PlanVideoSection } from "@/components/PlanVideoSection";
import { ContactCtaPair } from "@/components/ContactCtas";
import { WA } from "@/lib/whatsapp-messages";
import Link from "next/link";

export default function DayPassBangalore() {
  return (
    <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary/10 via-white to-primary/5 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7z' fill='%23ff6b35' fill-opacity='0.4'/%3E%3C/svg%3E")`,
            }} />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="badge-premium mb-4 inline-block">Day Pass</span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                <span className="text-gradient">Day Pass</span> Coworking Space
                <br />
                <span className="text-neutral-900">Basavanagudi, Bangalore</span>
              </h1>
              <p className="text-xl md:text-2xl text-neutral-700 max-w-3xl mx-auto mb-8">
                Need a workspace for just one day? Get flexible day access to our premium coworking space 
                in Basavanagudi. Perfect for freelancers, remote workers, and entrepreneurs.
              </p>
              <div className="flex flex-col items-center gap-4">
                <ContactCtaPair
                  location="day-pass-bangalore-hero"
                  whatsappMessage={WA.dayPass}
                  whatsappLabel="Enquire About Day Pass"
                  callLabel="Call Us"
                  className="justify-center"
                />
                <Link href="/workspaces/day-pass" className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1">
                  View full day pass details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-center mb-12">What's Included in Day Pass</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Wifi, title: "1Gbps High-Speed Internet", desc: "Blazing fast fiber internet" },
              { icon: Clock, title: "9 AM – 7 PM access", desc: "Full-day coworking during centre day-pass hours" },
              { icon: MapPin, title: "Basavanagudi location", desc: "Near Bull Temple, Gandhi Bazaar & Lalbagh" },
              { icon: CheckCircle2, title: "Workspace amenities", desc: "Seat, printing support, beverages and common areas" },
              { icon: MessageCircle, title: "Easy to enquire", desc: "WhatsApp for availability and visit options" },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                className="card-premium rounded-2xl border-2 border-neutral-200 p-6 bg-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-neutral-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <PlanVideoSection planId="day-pass" showAllTours />

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Try Our Day Pass?</h2>
            <p className="text-xl text-neutral-700 mb-8">
              Experience premium coworking in Basavanagudi. Book your day pass today!
            </p>
            <ContactCtaPair
              location="day-pass-bangalore-cta"
              whatsappMessage={WA.dayPass}
              whatsappLabel="Enquire About Day Pass"
              callLabel="Call Us"
              className="justify-center"
            />
          </div>
        </section>
    </div>
  );
}


