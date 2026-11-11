"use client";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, CheckCircle2, Video, Users, Clock, Wifi } from "lucide-react";
import { PlanVideoSection } from "@/components/PlanVideoSection";
import { ContactCtaPair } from "@/components/ContactCtas";
import { WA } from "@/lib/whatsapp-messages";
import Link from "next/link";

export default function MeetingRoomsBangalore() {
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
              <span className="badge-premium mb-4 inline-block">Meeting Rooms</span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                <span className="text-gradient">Meeting Rooms</span> for Rent
                <br />
                <span className="text-neutral-900">Basavanagudi, Bangalore</span>
              </h1>
              <p className="text-xl md:text-2xl text-neutral-700 max-w-3xl mx-auto mb-8">
                Professional meeting rooms and conference spaces in Basavanagudi. Fully equipped with 
                AV equipment, video conferencing, whiteboards, and high-speed internet. Book by the hour or day.
              </p>
              <div className="flex flex-col items-center gap-4">
                <ContactCtaPair
                  location="meeting-rooms-bangalore-hero"
                  whatsappMessage={WA.meetingRoom}
                  whatsappLabel="Enquire About Meeting Rooms"
                  callLabel="Call Us"
                  className="justify-center"
                />
                <Link href="/workspaces/meeting-rooms" className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1">
                  View meeting room details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-center mb-12">Meeting Room Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Video, title: "Video Conferencing", desc: "HD video conferencing setup" },
              { icon: Users, title: "Flexible Capacity", desc: "Rooms for about 4–12 people" },
              { icon: Wifi, title: "High-Speed Internet", desc: "1Gbps fiber internet" },
              { icon: CheckCircle2, title: "AV Equipment", desc: "Projectors, screens, and sound" },
              { icon: Clock, title: "Flexible Booking", desc: "Book by hour or full day" },
              { icon: MessageCircle, title: "Whiteboards", desc: "Interactive whiteboards included" },
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

        <PlanVideoSection planId="meeting-rooms" showAllTours />

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Book Your Meeting Room Today</h2>
            <p className="text-xl text-neutral-700 mb-8">
              Professional meeting spaces in Basavanagudi. Perfect for client meetings, team sessions, and presentations.
            </p>
            <ContactCtaPair
              location="meeting-rooms-bangalore-cta"
              whatsappMessage={WA.meetingRoom}
              whatsappLabel="Enquire About Meeting Rooms"
              callLabel="Call Us"
              className="justify-center"
            />
          </div>
        </section>
    </div>
  );
}


