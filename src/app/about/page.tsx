"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, MessageCircle, CheckCircle2, MapPin } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* About Section with Tagline */}
      <section className="relative mx-auto max-w-7xl px-4 py-20 overflow-hidden bg-gradient-to-br from-primary/5 via-white to-primary/5">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff6b35' fill-opacity='0.4'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <span className="text-gradient peacock-text heartbeat">Find Your</span>
              <br />
              <span className="text-neutral-900">True Space</span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-neutral-700 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <strong className="text-primary">At Spacio, we believe your workspace should reflect who you are and amplify what you do.</strong> 
              In the heart of Namma Basavanagudi, we've created more than just a coworking space—we've built 
              <strong> a sanctuary where productivity meets peace, where innovation meets inspiration, and where your dreams meet reality.</strong>
              <span className="block mt-3 text-primary font-semibold text-xl">This is where you'll write the next chapter of your success story. 📖✨</span>
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="card-premium rounded-2xl border-2 border-primary/20 p-8 bg-white">
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Our Story</h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Born in Namma Bengaluru, Spacio was created by entrepreneurs who understood the struggle 
                  of finding the perfect workspace. We've designed every corner with intention, following 
                  Vastu principles to create spaces that don't just look good—they feel right.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  Located in historic Basavanagudi, near the iconic Bull Temple and Lalbagh, we're part 
                  of Bangalore's rich cultural tapestry while embracing the future of work.
                </p>
              </div>

              <div className="card-premium rounded-2xl border-2 border-primary/20 p-8 bg-gradient-to-br from-primary/5 to-white overflow-hidden">
                <div className="aspect-video w-full rounded-xl overflow-hidden mb-4 -mx-8 -mt-8 relative">
                  <Image 
                    src="/images/water-fountain-ganesha-green-wall.jpg" 
                    alt="Vastu-compliant water fountain with Ganesha idol and green plant wall at Spacio Workspace"
                    fill
                    className="object-cover"
                    loading="lazy"
                    quality={80}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Vastu-Compliant Design</h2>
                <p className="text-neutral-700 leading-relaxed">
                  Carefully designed according to Indian Vastu principles for maximum productivity and 
                  positive energy. Every space is oriented and arranged to enhance your focus, creativity, 
                  and success. Experience the difference that harmonious design makes to your work output 
                  and mental clarity.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="card-premium rounded-2xl border-2 border-primary/20 p-8 bg-white">
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Our Mission</h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  To provide every entrepreneur, freelancer, and startup in Bangalore with a workspace 
                  that doesn't just accommodate their work—it elevates it. We're building a community 
                  where ambition meets opportunity, where your next breakthrough is just a conversation away.
                </p>
                <ul className="space-y-3 mt-6">
                  {[
                    "Vastu-compliant spaces for positive energy",
                    "Premium amenities without the premium price",
                    "A community of 500+ ambitious professionals",
                    "24/7 access to fuel your hustle",
                    "Prime Basavanagudi location",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-premium rounded-2xl border-2 border-primary/20 p-8 bg-white">
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Why Basavanagudi?</h2>
                <p className="text-neutral-700 leading-relaxed">
                  Basavanagudi isn't just a location—it's a legacy. One of Bangalore's oldest and most 
                  culturally rich neighborhoods, it's where tradition meets innovation. Here, you're 
                  surrounded by history, heritage, and the energy of a community that values both 
                  progress and roots.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <a
              href="https://wa.me/917022780310?text=I want to find my true space at Spacio Workspace in Basavanagudi #FindYourTrueSpace #SpacioWorkspace #CoworkingBangalore #Basavanagudi #NammaBengaluru #VastuCompliant"
              className="btn-premium inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-white font-semibold text-lg hover:bg-primary/90 transition-all duration-300 shadow-xl hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Find Your True Space - WhatsApp Us
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Virtual Tour Video Section */}
      <section className="relative mx-auto max-w-7xl px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-primary/5" />
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <span className="badge-premium mb-4 inline-block">Virtual Experience</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-4">
              Take a <span className="text-gradient">Virtual Tour</span>
            </h2>
            <p className="mt-4 text-lg text-neutral-700 max-w-2xl mx-auto">
              Explore our premium coworking space in Basavanagudi, Bangalore from the comfort of your home. 
              See our private cabins, meeting rooms, and vibrant community spaces.
            </p>
        </div>

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
        </motion.div>
      </section>

      {/* Basavanagudi Heritage & Culture Section */}
      <section className="relative mx-auto max-w-7xl px-4 py-20 overflow-hidden basavanagudi-heritage">
        <div className="absolute inset-0 basavanagudi-gradient" />
        <div className="absolute inset-0 peacock-pattern opacity-25" />
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <span className="badge-premium mb-4 inline-block pulse-glow-peacock">🦚 Namma Basavanagudi 🦚</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-4">
              In the Heart of <span className="text-gradient peacock-text heartbeat">Basavanagudi</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
              <strong className="text-primary">Where Heritage Meets Innovation</strong> - Feel the pulse of Namma Bengaluru in every corner. 
              Located in one of Bangalore's most <strong>vibrant, culturally rich neighborhoods</strong>, just minutes from the iconic 
              <strong> Bull Temple</strong> and <strong>Lalbagh Botanical Gardens</strong>. Experience the perfect blend of 
              <strong> traditional South Indian culture</strong> and <strong>modern innovation</strong> in the heart of South Bangalore. 
              <span className="block mt-2 text-primary font-semibold">This is more than a workspace - it's where your dreams take flight, just like the majestic peacock of our heritage.</span>
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
            {[
              { icon: MapPin, title: "🦚 Near Bull Temple", desc: "Just minutes away from the iconic Bull Temple, one of Bangalore's most sacred and famous landmarks. Feel the spiritual energy that fuels creativity.", emoji: "🦚" },
              { icon: MapPin, title: "🌳 Close to Lalbagh", desc: "Walking distance to Lalbagh Botanical Gardens - perfect for refreshing lunch breaks and nature walks that inspire innovation.", emoji: "🌳" },
              { icon: MapPin, title: "🏛️ Historic Basavanagudi", desc: "In the heart of Basavanagudi, surrounded by traditional South Indian culture, heritage, and the warmth of Namma Bengaluru.", emoji: "🏛️" },
              { icon: MapPin, title: "🚇 South Bangalore Hub", desc: "Well-connected to all major areas of Bangalore with excellent transport links. Easy access from anywhere in the city.", emoji: "🚇" },
              { icon: MapPin, title: "🍛 Local Eateries", desc: "Surrounded by authentic South Indian restaurants serving the best dosas, idlis, and filter coffee - fuel for your entrepreneurial journey.", emoji: "🍛" },
              { icon: MapPin, title: "🧘 Peaceful Neighborhood", desc: "Quiet, serene environment perfect for focused work. Escape the chaos, find your flow, and let your ideas flourish.", emoji: "🧘" },
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="card-premium rounded-2xl border-2 border-primary/20 p-4 sm:p-6 bg-white peacock-shimmer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, borderColor: "oklch(0.72 0.17 58)", scale: 1.02 }}
              >
                <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-2">{feature.title}</h3>
                <p className="text-neutral-700 text-xs sm:text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.a
              href="https://wa.me/917022780310?text=I'd like to visit Spacio Workspace in Basavanagudi, near Bull Temple #SpacioBasavanagudi #BullTemple #Lalbagh #CoworkingSpace #Bangalore #FindYourTrueSpace #NammaBasavanagudi"
              className="btn-premium inline-flex items-center gap-2 rounded-xl bg-primary px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold text-base sm:text-lg hover:bg-primary/90 transition-all duration-300 shadow-xl hover:scale-105 pulse-glow-peacock"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xl">🦚</span>
              <MapPin className="w-5 h-5" />
              Visit Us in Namma Basavanagudi - WhatsApp
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <p className="mt-4 text-sm text-neutral-600 italic">
              "Where every entrepreneur finds their true space, inspired by the beauty of our heritage" 🦚
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

