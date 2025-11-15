"use client";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, CheckCircle2, Users, Shield, Wifi, MapPin } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PrivateCabinsBangalore() {
  return (
    <>
      <Header />
      <main className="pt-16">
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
              <span className="badge-premium mb-4 inline-block">Private Cabins</span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                <span className="text-gradient">Private Cabins</span> for Rent
                <br />
                <span className="text-neutral-900">Basavanagudi, Bangalore</span>
              </h1>
              <p className="text-xl md:text-2xl text-neutral-700 max-w-3xl mx-auto mb-8">
                Solo cabins, 3-seater, and 6-seater private cabins available. Perfect for individuals, 
                partners, and small teams. Vastu-compliant spaces designed for productivity and focus.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://wa.me/917022780310?text=I want to book a Private Cabin at Spacio Workspace Basavanagudi #PrivateCabins #SpacioWorkspace #CoworkingBangalore #Basavanagudi #FindYourTrueSpace"
                  className="btn-premium inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-white font-semibold text-lg hover:bg-primary/90 transition-all duration-300 shadow-xl hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book Private Cabin via WhatsApp
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="tel:+917022780310"
                  className="rounded-xl border-2 border-primary/30 px-8 py-4 font-semibold text-neutral-900 hover:border-primary hover:bg-primary/5 transition-all duration-300"
                >
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cabin Types */}
        <section className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-center mb-12">Choose Your Private Cabin</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Solo Cabin", capacity: "1 Person", icon: "🚀", features: ["Private workspace", "Ergonomic furniture", "24/7 access"] },
              { title: "3-Seater Cabin", capacity: "3 People", icon: "👥", features: ["Team workspace", "Collaboration space", "Storage lockers"] },
              { title: "6-Seater Cabin", capacity: "6 People", icon: "🎯", features: ["Spacious cabin", "Whiteboard included", "Team meeting area"] },
            ].map((cabin, i) => (
              <motion.div
                key={cabin.title}
                className="card-premium rounded-2xl border-2 border-primary/20 p-6 bg-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-5xl mb-4">{cabin.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{cabin.title}</h3>
                <p className="text-primary font-semibold mb-4">{cabin.capacity}</p>
                <ul className="space-y-2 mb-6">
                  {cabin.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span className="text-neutral-600">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/917022780310?text=I want to book ${cabin.title} at Spacio Workspace Basavanagudi #PrivateCabins #${cabin.title.replace(/\s+/g, '')} #SpacioWorkspace`}
                  className="btn-premium w-full rounded-xl bg-primary px-4 py-3 text-white font-semibold text-center hover:bg-primary/90 transition-all duration-300"
                >
                  Book {cabin.title}
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">All Private Cabins Include</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: Wifi, title: "1Gbps WiFi" },
                { icon: Shield, title: "24/7 Secure Access" },
                { icon: MapPin, title: "Basavanagudi Location" },
                { icon: CheckCircle2, title: "Vastu Compliant" },
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
                  <h3 className="font-semibold">{feature.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h2 className="text-4xl font-bold mb-6">Book Your Private Cabin Today</h2>
          <p className="text-xl text-neutral-700 mb-8">
            Find your true space in Basavanagudi. Private cabins designed for productivity and success.
          </p>
          <a
            href="https://wa.me/917022780310?text=I want to book a Private Cabin at Spacio Workspace Basavanagudi #PrivateCabins #SpacioWorkspace #FindYourTrueSpace #Basavanagudi"
            className="btn-premium inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-white font-semibold text-lg hover:bg-primary/90 transition-all duration-300 shadow-xl hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Book Private Cabin Now
            <ArrowRight className="w-5 h-5" />
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}


