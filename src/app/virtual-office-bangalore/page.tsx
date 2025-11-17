"use client";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, CheckCircle2, Building2, Mail, Phone, MapPin } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function VirtualOfficeBangalore() {
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
              <span className="badge-premium mb-4 inline-block">Virtual Office</span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                <span className="text-gradient">Virtual Office</span> Services
                <br />
                <span className="text-neutral-900">Basavanagudi, Bangalore</span>
              </h1>
              <p className="text-xl md:text-2xl text-neutral-700 max-w-3xl mx-auto mb-8">
                Get a premium business address in Basavanagudi without the overhead. Perfect for startups, 
                freelancers, and remote businesses. Professional image, mail handling, and meeting room access included.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://wa.me/917022780310?text=I want Virtual Office services at Spacio Workspace Basavanagudi #VirtualOffice #SpacioWorkspace #CoworkingBangalore #Basavanagudi #BusinessAddress"
                  className="btn-premium inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-white font-semibold text-lg hover:bg-primary/90 transition-all duration-300 shadow-xl hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  Get Virtual Office via WhatsApp
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

        {/* Features */}
        <section className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-center mb-12">Virtual Office Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Building2, title: "Premium Business Address", desc: "Professional address in Basavanagudi, Bangalore" },
              { icon: Mail, title: "Mail Handling & Forwarding", desc: "Receive and forward your business mail" },
              { icon: Phone, title: "Phone Answering Service", desc: "Professional call handling service" },
              { icon: MapPin, title: "Meeting Room Access", desc: "Book meeting rooms when needed" },
              { icon: CheckCircle2, title: "Legal Compliance", desc: "Perfect for business registration" },
              { icon: MessageCircle, title: "Professional Image", desc: "Build credibility with premium address" },
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

        {/* Virtual Tour Section */}
        <section className="max-w-6xl mx-auto px-4 pb-20">
          <motion.div
            className="grid md:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <span className="badge-premium mb-4 inline-block">Take a Virtual Tour</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Premium Coworking Space</h2>
              <p className="text-lg text-neutral-700 mb-4">
                Explore our premium coworking space in Basavanagudi, Bangalore from the comfort of your home.
                See our private cabins, meeting rooms, and vibrant community spaces.
              </p>
              <p className="text-sm text-neutral-600">
                <strong>Spacio Workspace Virtual Tour</strong>
                <br />
                Basavanagudi, Bangalore
              </p>
            </div>
            <div className="w-full">
              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200">
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
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Get Your Virtual Office Today</h2>
            <p className="text-xl text-neutral-700 mb-8">
              Establish your business presence in Basavanagudi with our virtual office services.
            </p>
            <a
              href="https://wa.me/917022780310?text=I want Virtual Office services at Spacio Workspace Basavanagudi #VirtualOffice #SpacioWorkspace #BusinessAddress #Bangalore"
              className="btn-premium inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-white font-semibold text-lg hover:bg-primary/90 transition-all duration-300 shadow-xl hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Get Virtual Office Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


