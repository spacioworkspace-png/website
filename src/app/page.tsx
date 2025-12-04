"use client";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Zap, Users, MapPin, Star, Clock, Wifi, Shield, Building2, Heart, Award, Rocket, Target, CheckCircle2, AlertCircle, MessageCircle } from "lucide-react";
import { WorkspaceDetailModal } from "@/components/WorkspaceDetailModal";
import { FOMOCountdown } from "@/components/FOMOCountdown";

export default function Home() {
  const [activeLoc, setActiveLoc] = useState<"basavanagudi" | "jayanagar">("basavanagudi");
  const [currentHero, setCurrentHero] = useState(0);
  const [selectedWorkspace, setSelectedWorkspace] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  
  const heroSections = [
    {
      badge: "#1 Coworking in Bangalore",
      title: "Work Where",
      subtitle: "Gen Z Thrives",
      description:
        "Spacio Workspace is Namma Bengaluru's most vibrant coworking space in Basavanagudi and Jayanagar. We are built for Gen Z entrepreneurs, venture-backed startups, and ambitious freelancers who need private cabins, lightning-fast WiFi, 24/7 secure access, and an accountability-driven community.",
      tagline: "Launch your Bengaluru startup story with India's most trusted coworking tribe.",
      icon: Rocket,
    },
    {
      badge: "Premium Coworking Experience",
      title: "Namma Bengaluru",
      subtitle: "Namma Spacio",
      description:
        "In the heart of Basavanagudi, near Bull Temple and Lalbagh, Spacio delivers a premium coworking experience for Bangalore's ambitious entrepreneurs. Experience the perfect blend of productivity, community, and modern amenities in South Bangalore's most credible neighborhood.",
      tagline: "Where innovation, culture, and community thrive every single workday in South Bangalore.",
      icon: Heart,
    },
    {
      badge: "Lightning-Fast Infrastructure",
      title: "1Gbps Internet",
      subtitle: "Zero Lag, Maximum Speed",
      description:
        "Stream, code, and collaborate without limits. Our enterprise-grade fiber internet keeps hybrid teams connected, productive, and client-ready at all times.",
      tagline: "Work at the speed of thought with always-on tech support inside our Bangalore coworking space.",
      icon: Zap,
    },
  ];

  // Auto-rotate hero sections
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroSections.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [heroSections.length]);

  return (
    <div className="bg-white overflow-hidden">
      {/* Rotating Hero Sections with Carousel - Full Size */}
      <section id="hero" className="relative w-full scroll-mt-16 overflow-hidden min-h-[80vh] md:min-h-screen flex items-center basavanagudi-heritage">
        {/* Full-size animated background with Peacock & Basavanagudi elements */}
        <div className="absolute inset-0 gradient-mesh opacity-40 md:opacity-60" />
        <div className="absolute inset-0 basavanagudi-gradient" />
        <div className="absolute inset-0 peacock-pattern opacity-10 md:opacity-30" />
        <motion.div 
          className="hidden md:block absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="hidden md:block absolute bottom-20 left-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.4, 1],
            x: [0, -60, 0],
            y: [0, 60, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        
        <div className="relative mx-auto max-w-7xl w-full px-4 pt-24 pb-16 md:py-32 grid gap-10 md:gap-12 md:grid-cols-2 md:items-center z-10">
          {/* Logo Placeholder */}
          <div className="absolute top-4 left-4 z-20">
            <div className="w-32 h-12 bg-primary/10 rounded-lg flex items-center justify-center border-2 border-primary/20">
              <span className="text-primary font-bold text-lg">SPACIO WORKSPACE</span>
            </div>
          </div>

          <div className="relative h-full min-h-[500px]">
            <AnimatePresence mode="wait">
              {heroSections.map((hero, index) => (
                index === currentHero && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 50, scale: 0.95 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                    >
                      <span className="badge-premium inline-flex items-center gap-2 animate-pulse-glow">
                        <Sparkles className="w-3 h-3" />
                        {hero.badge}
                      </span>
                    </motion.div>
                    
                    <motion.h1 
                      className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                    >
                      <span className="text-gradient peacock-text">{hero.title}</span>
                      <br />
                      <span className="text-neutral-900">{hero.subtitle}</span>
                    </motion.h1>
                    
                    <motion.p 
                      className="mt-6 text-base sm:text-lg md:text-xl text-neutral-700 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.8 }}
                    >
                      {hero.description}
                      <span className="text-primary font-semibold block mt-2 heartbeat"> {hero.tagline}</span>
                    </motion.p>

                    {/* Premium Stats Bar */}
                    <motion.div 
                      className="mt-8 flex flex-wrap gap-6 text-sm"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    >
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-primary fill-primary" />
                        <span className="font-semibold">4.8/5 Rating</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        <span className="font-semibold">500+ Members</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="font-semibold">2 Locations</span>
                      </div>
                    </motion.div>

                    {/* Multiple Premium CTAs with Peacock Elements */}
                    <motion.div 
                      className="mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                    >
                      <a 
                        href="https://wa.me/917022780310?text=Hi! I want to book a FREE tour of Spacio Workspace in Basavanagudi, near Bull Temple, Bangalore #SpacioWorkspace #BookTour #CoworkingBangalore #Basavanagudi #FindYourTrueSpace #NammaBasavanagudi" 
                        className="btn-premium group relative rounded-xl bg-primary px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 pulse-glow-peacock"
                      >
                        <span>Book a Free Tour in Basavanagudi</span>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                      </a>
                      <a 
                        href="https://wa.me/917022780310?text=I'd like pricing details for Spacio coworking space in Basavanagudi, near Bull Temple, Bangalore #SpacioPricing #CoworkingSpace #Bangalore #Basavanagudi #SouthBangalore" 
                        className="rounded-xl bg-orange-500 px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sm sm:text-base text-white shadow-lg hover:bg-orange-600 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                      >
                        Get Pricing
                      </a>
                      <a 
                        href="tel:+917022780310" 
                        className="rounded-xl bg-orange-500/90 px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sm sm:text-base text-white shadow-lg hover:bg-orange-600 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                      >
                        Call Now
                      </a>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div 
                      className="mt-8 flex flex-wrap gap-4 text-xs text-neutral-600"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                    >
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-primary" />
                        <span>24/7 secure access in Basavanagudi</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Wifi className="w-4 h-4 text-primary" />
                        <span>Lightning-fast WiFi for startups</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>Flexible hours for hybrid teams</span>
                      </div>
                    </motion.div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>

            {/* Hero Navigation Dots */}
            <div className="absolute bottom-0 left-0 flex gap-2 mt-8">
              {heroSections.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentHero(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentHero ? 'bg-primary w-8' : 'bg-neutral-300 hover:bg-primary/50'
                  }`}
                  aria-label={`Go to hero section ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <AnimatePresence mode="wait">
              {heroSections.map((hero, index) => (
                index === currentHero && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="aspect-video w-full rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-neutral-50 ring-2 ring-primary/20 shadow-2xl relative overflow-hidden"
                    style={{ y: y1 }}
                  >
                    {index === 0 && (
                      <Image 
                        src="/images/spacio-sign-green-wall.jpg" 
                        alt="Spacio Workspace sign on green plant wall - Find Your True Space"
                        fill
                        className="object-cover"
                        priority
                        quality={85}
                        sizes="100vw"
                      />
                    )}
                    {index === 1 && (
                      <Image 
                        src="/images/building-exterior-sree-devi-complex.jpg" 
                        alt="Spacio Workspace building exterior in Basavanagudi - Sree Devi Complex"
                        fill
                        className="object-cover"
                        loading="lazy"
                        quality={85}
                        sizes="100vw"
                      />
                    )}
                    {index === 2 && (
                      <Image 
                        src="/images/office-corridor-glass-partitions.jpg" 
                        alt="Modern office corridor with glass partitions at Spacio Workspace"
                        fill
                        className="object-cover"
                        loading="lazy"
                        quality={85}
                        sizes="100vw"
                      />
                    )}
                    {/* Floating elements - reduced animation complexity for performance */}
                    <motion.div 
                      className="absolute top-10 right-10 w-20 h-20 bg-primary/20 rounded-xl blur-sm will-change-transform"
                      animate={{ y: [0, -15, 0] }}
                      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div 
                      className="absolute bottom-10 left-10 w-16 h-16 bg-primary/15 rounded-full blur-sm will-change-transform"
                      animate={{ y: [0, 15, 0] }}
                      transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    />
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Choose Your Perfect Workspace - Premium Cards (moved right after Hero) */}
      <section id="workspaces" className="mx-auto max-w-7xl scroll-mt-16 px-4 py-20 bg-gradient-to-b from-white to-neutral-50/50">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge-premium mb-4 inline-block pulse-glow-peacock">Your Perfect Workspace in Bangalore</span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-gradient peacock-text heartbeat">Choose Your</span> Perfect Workspace
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
            <strong className="text-primary">Every entrepreneur deserves a space that fuels their passion.</strong> From solo cabins to team spaces, 
            we offer private offices, day passes, and dedicated desks for Gen Z entrepreneurs, startups, and freelancers across Basavanagudi and Jayanagar. 
            <span className="block mt-2">Flexible options that match your vibe, your energy, and your ambition. 
            <strong className="text-primary"> This is where your success story begins inside a credible coworking space in South Bangalore.</strong></span>
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              badge: "#1 Most Popular",
              title: "Solo Cabin",
              subtitle: "Perfect for Individual Focus",
              iconLabel: "Private Cabin Workspace",
              image: "/images/solo-cabin-workspace.jpg",
              gallery: [
                "/images/solo-cabin-workspace.jpg",
                "/images/workspace-orange-screens.jpg",
                "/images/workspace-green-screens.jpg",
              ],
              videoUrl: "/solo-cabin-tour.mp4",
              priceLabel: "Starts at ₹6,999/month",
              pricing: "₹6,999/month",
              features: [
                "Private and quiet workspace",
                "Ergonomic furniture",
                "High-speed internet (1Gbps)",
                "24/7 secure access",
                "Personal storage space",
              ],
              cta: "Book Solo Cabin",
              highlight: true,
            },
            {
              title: "3-Seater Cabin",
              subtitle: "Ideal for Small Teams & Partners",
              iconLabel: "3-Seater Startup Hub",
              image: "/images/3-seater-cabin-orange-screens.jpg",
              gallery: [
                "/images/3-seater-cabin-orange-screens.jpg",
                "/images/workspace-numbered-cabins.jpg",
                "/images/workspace-yellow-green-walls.jpg",
              ],
              videoUrl: "/three-seater-cabin-tour.mp4",
              priceLabel: "Starts at ₹11,999/month",
              pricing: "₹11,999/month",
              features: [
                "Space for 3 people",
                "Collaborative workspace",
                "High-speed WiFi (1Gbps)",
                "Meeting space access",
                "Storage lockers",
                "Whiteboard included",
              ],
              cta: "Book 3-Seater Cabin",
            },
            {
              badge: "Great Value for Teams",
              title: "6-Seater Cabin",
              subtitle: "Perfect for Small Teams & Brainstorming",
              iconLabel: "6-Seater Team Cabin",
              image: "/images/6-seater-cabin-workspace.jpg",
               gallery: [
                "/images/6-seater-cabin-workspace.jpg",
                "/images/workspace-orange-screens.jpg",
                "/images/workspace-numbered-cabins.jpg",
              ],
              videoUrl: "/six-seater-cabin-tour.mp4",
              priceLabel: "Starts at ₹17,999/month",
              pricing: "₹17,999/month",
              features: [
                "Spacious for 6 people",
                "Brainstorming space",
                "High-speed WiFi (1Gbps)",
                "Whiteboard & presentation tools",
                "Storage solutions",
                "Team collaboration zone",
              ],
              cta: "Book 6-Seater Cabin",
            },
            {
              badge: "Professional Presence",
              title: "Virtual Office",
              subtitle: "Professional Business Address & Services",
              iconLabel: "Virtual Office Services",
              gallery: [
                "/images/building-exterior-sree-devi-complex.jpg",
                "/images/office-corridor-glass-partitions.jpg",
                "/images/spacio-sign-green-wall.jpg",
              ],
              videoUrl: "/virtual-office-tour.mp4",
              priceLabel: "Starts at ₹999/month",
              pricing: "₹999/month",
              features: [
                "Premium business address in Bangalore",
                "Mail handling & forwarding",
                "Phone answering service",
                "Meeting room access",
                "Compliance support",
                "GST-ready invoicing",
              ],
              cta: "Book Virtual Office",
            },
            {
              title: "Dedicated Desks",
              subtitle: "Your Personal Workspace",
              iconLabel: "Dedicated Desk Plan",
              image: "/images/workspace-orange-screens.jpg",
              gallery: [
                "/images/workspace-orange-screens.jpg",
                "/images/workspace-green-screens.jpg",
                "/images/workspace-numbered-cabins.jpg",
              ],
              videoUrl: "/dedicated-desks-tour.mp4",
              priceLabel: "Starts at ₹2,999/month",
              pricing: "₹2,999/month",
              features: [
                "Assigned desk space",
                "Personal storage",
                "High-speed WiFi (1Gbps)",
                "24/7 access",
                "Community access",
                "Ergonomic chair included",
              ],
              cta: "Book Dedicated Desks",
            },
            {
              badge: "Premium Meeting Rooms",
              title: "Meeting Rooms",
              subtitle: "Professional Meeting Spaces",
              iconLabel: "Meeting Room Access",
              image: "/images/meeting-room-frosted-glass.jpg",
              gallery: [
                "/images/meeting-room-frosted-glass.jpg",
                "/images/office-corridor-glass-partitions.jpg",
                "/images/3-seater-cabin-orange-screens.jpg",
              ],
              videoUrl: "/meeting-rooms-tour.mp4",
              priceLabel: "₹399/hour",
              pricing: "₹399/hour",
              features: [
                "Conference room booking",
                "Audio-visual equipment",
                "Whiteboard access",
                "Professional environment",
                "Flexible booking options",
                "Video conferencing setup",
              ],
              cta: "Book Meeting Rooms",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              className="card-premium rounded-2xl border-2 border-neutral-200 p-6 bg-white relative overflow-hidden"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * i, type: "spring", stiffness: 120 }}
              whileHover={{ y: -10, scale: 1.03, rotate: 2, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
              onClick={() => {
                setSelectedWorkspace({
                  ...card,
                  description: `${card.subtitle}. ${card.title} at Spacio Workspace in Basavanagudi, Bangalore. Perfect for entrepreneurs, freelancers, and teams looking for a premium workspace solution.`,
                  images: card.gallery?.length ? card.gallery : card.image ? [card.image] : [],
                  capacity: card.title.includes("Seater") ? card.title : card.title.includes("Solo") ? "1 person" : "Flexible",
                });
                setIsModalOpen(true);
              }}
            >
              {card.image && (
                <div className="aspect-video w-full rounded-xl overflow-hidden mb-4 -mx-6 -mt-6 relative">
                  <Image 
                    src={card.image} 
                    alt={`${card.title} at Spacio Workspace`}
                    fill
                    className="object-cover"
                    loading="lazy"
                    quality={80}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              {card.iconLabel && (
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                  {card.iconLabel}
                </div>
              )}
              {card.badge ? (
                <span className="badge-premium mb-3 inline-block">{card.badge}</span>
              ) : null}
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">{card.title}</h3>
              <p className="text-neutral-600">{card.subtitle}</p>
              <ul className="space-y-2 mb-6">
                {card.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-2">
                <a
                  href={`https://wa.me/917022780310?text=${encodeURIComponent(`I'm interested in ${card.title} at Spacio Workspace in Basavanagudi, Bangalore #SpacioWorkspace #CoworkingBangalore #Basavanagudi #FindYourTrueSpace`)}`}
                  className="btn-premium rounded-xl bg-primary px-4 py-3 text-white font-semibold text-center hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
                  onClick={(e) => e.stopPropagation()}
                >
                  <MessageCircle className="w-4 h-4" />
                  {card.cta} via WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a 
                  href={`https://wa.me/917022780310?text=${encodeURIComponent(`I need pricing for ${card.title} at Spacio Basavanagudi #SpacioPricing #CoworkingSpace #Bangalore`)}`}
                  className="rounded-xl border border-primary/30 px-4 py-2 text-sm text-center hover:border-primary hover:bg-primary/5 transition-all duration-300 flex items-center justify-center gap-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  <MessageCircle className="w-3 h-3" />
                  Get Pricing on WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Workspace CTA */}
        <motion.div 
          className="mt-12 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-white p-8 text-center border-2 border-primary/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-2">
            <span className="text-gradient peacock-text">Dreaming of a Custom Workspace?</span>
          </h3>
          <p className="text-base sm:text-lg text-neutral-700 mb-6 max-w-2xl mx-auto leading-relaxed">
            <strong className="text-primary">Your vision deserves the perfect space.</strong> We offer tailored plans and long-term bookings for teams of all sizes. 
            <span className="block mt-2">Let's design the perfect workspace for your startup in Namma Basavanagudi - 
            <strong className="text-primary"> where your ideas take shape inside a premium Bangalore coworking space.</strong></span>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+917022780310" 
              className="rounded-xl border-2 border-primary px-6 py-3 font-semibold hover:bg-primary hover:text-white transition-all duration-300"
            >
              Call for Custom Plans
            </a>
            <a 
              href="https://wa.me/917022780310?text=I'd like to schedule a cabin tour at Spacio Workspace Bangalore" 
              className="btn-premium rounded-xl bg-primary px-6 py-3 text-white font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center gap-2"
            >
              Schedule Cabin Tour
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* What Makes Us Special - FOMO Section with Peacock & Basavanagudi Elements */}
      <section className="relative mx-auto max-w-7xl px-4 py-20 overflow-hidden basavanagudi-heritage">
        <div className="absolute inset-0 basavanagudi-gradient" />
        <div className="absolute inset-0 peacock-pattern opacity-20" />
        <motion.div 
          className="relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <span className="badge-premium mb-4 inline-block">Why Spacio?</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-4">
              <span className="text-gradient peacock-text">What Makes Us</span> Special
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-700 max-w-2xl mx-auto">
              <strong className="text-primary">Namma Basavanagudi</strong> is where heritage meets innovation. Spacio is Namma Bengaluru's most trusted coworking space for founders who want credibility, heart, and high performance in one address.
            </p>
            </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: Award,
                title: "Award-Winning Design",
                description: "Recognized as Bangalore's best coworking space. Our zen-inspired design promotes productivity and creativity.",
                highlight: "Awarded Best Coworking Space 2024",
              },
              {
                icon: Target,
                title: "Built for Gen Z",
                description: "Designed by Gen Z, for Gen Z. We understand what modern entrepreneurs need to thrive in today's fast-paced world.",
                highlight: "Gen Z Approved Experience",
              },
              {
                icon: Zap,
                title: "Lightning-Fast Everything",
                description: "1Gbps internet, instant booking, quick responses. We value your time as much as you do.",
                highlight: "Zero Lag Guarantee",
              },
              {
                icon: Heart,
                title: "Namma Bengaluru Spirit",
                description: "Proudly Bangalore. We celebrate the city's entrepreneurial spirit and support local businesses.",
                highlight: "Made in Bangalore",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="card-premium rounded-2xl border-2 border-primary/20 p-8 bg-white relative overflow-hidden"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, borderColor: "oklch(0.72 0.17 58)" }}
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">{feature.title}</h3>
                <p className="text-neutral-700 mb-4">{feature.description}</p>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  {feature.highlight}
                </span>
          </motion.div>
            ))}
        </div>

          {/* FOMO Banner */}
          <motion.div
            className="rounded-2xl bg-gradient-to-r from-primary via-primary/90 to-primary/80 p-8 md:p-12 text-white relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
                <div className="w-full">
                  <motion.div
                    className="flex items-center gap-2 mb-4"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <AlertCircle className="w-6 h-6" />
                    <span className="font-bold text-lg">Limited Spaces Available!</span>
                  </motion.div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                    <span className="heartbeat">Don't Let Your Dreams Wait - Join 500+ Members Now!</span>
                  </h3>
                  <p className="text-white/90 text-base sm:text-lg mb-4 leading-relaxed">
                    <strong>Only 12 spots left this month!</strong> Every day you wait is a day your dreams wait. 
                    Don't miss out on Bangalore's #1 coworking experience where <strong>passion meets purpose</strong> and 
                    <strong> ambition meets opportunity</strong>. 
                    <span className="block mt-2">Your future self will thank you for locking in a premium seat at Basavanagudi's most credible coworking space.</span>
                  </p>
                  <div className="flex items-center gap-2">
                    <FOMOCountdown />
                  </div>
                </div>
                <motion.a
                  href="https://wa.me/917022780310?text=I want to secure my spot at Spacio Workspace!"
                  className="btn-premium rounded-xl bg-white text-primary px-8 py-4 font-bold text-lg hover:bg-white/90 transition-all duration-300 flex items-center gap-2 shadow-xl hover:scale-105 whitespace-nowrap w-full md:w-auto md:self-start"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >Secure Your Spot
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Free tour available today</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Move-in within 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>No long-term commitment</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Premium Contact CTA */}
      <section id="contact" className="mx-auto max-w-7xl scroll-mt-16 px-4 py-20">
        <motion.div 
          className="rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-primary/80 p-12 text-center text-white shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="heartbeat">Ready to Transform Your Work Life?</span>
            </motion.h2>
            <motion.p 
              className="mt-4 text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <strong>Your journey to success starts with one decision.</strong> Book your free tour today and experience why 
              <strong> 500+ passionate entrepreneurs</strong> chose Spacio as their workspace in Namma Basavanagudi. 
              <span className="block mt-2">This isn't just a coworking space - <strong>it's where dreams become reality inside Bangalore's most heartfelt workspace.</strong></span>
            </motion.p>
            <motion.div 
              className="mt-10 flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <a 
                href="/contact" 
                className="rounded-xl bg-white text-primary px-8 py-4 font-bold text-lg hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/917022780310?text=Hi! I'd like to book a free tour at Spacio Workspace Bangalore" 
                className="rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                WhatsApp Us
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="https://www.google.com/maps/place/Spacio+Workspace/@12.9449135,77.5658325,17z" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Google Maps
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="tel:+917022780310" 
                className="rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                Call +91 70227 80310
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Comprehensive SEO Section */}
      <section className="mx-auto max-w-7xl px-4 pb-20 pt-10">
        <div className="prose prose-lg max-w-none text-center">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">
            Spacio Workspace - Best Premium Coworking Space in Bangalore
          </h2>
          <div className="text-neutral-700 leading-relaxed space-y-4 text-left max-w-4xl mx-auto">
            <p>
              <strong>Spacio Workspace</strong> is Bangalore's #1 premium coworking space, specifically designed for 
              <strong> Gen Z entrepreneurs</strong>, <strong>startups</strong>, and <strong>freelancers</strong>. 
              Located in prime areas of <strong>Basavanagudi</strong> and <strong>Jayanagar</strong> in South Bangalore, 
              we offer the perfect blend of productivity, community, and modern amenities.
            </p>
            <p>
              Whether you're looking for a <strong>private cabin</strong>, <strong>dedicated desk</strong>, 
              <strong> meeting room</strong>, or <strong>virtual office</strong> in Bangalore, Spacio delivers. 
              Our <strong>coworking space in Basavanagudi</strong> and <strong>coworking space in Jayanagar</strong> 
              provide flexible workspace solutions for every need - from solo entrepreneurs to growing teams.
            </p>
            <p>
              <strong>Why choose Spacio as your coworking space in Bangalore?</strong> We offer 
              <strong> lightning-fast 1Gbps internet</strong>, <strong>24/7 secure access</strong>, 
              <strong> premium amenities</strong> including meeting rooms with 
              AV equipment, and a vibrant community of 500+ members. Our <strong>private cabins</strong> 
              (solo, 3-seater, and 6-seater options) provide the perfect balance of privacy and collaboration.
            </p>
            <p>
              Looking for the <strong>best shared office space in Bangalore</strong>? Spacio offers 
              <strong> flexible workspace solutions</strong> with transparent pricing, no hidden fees, and 
              month-to-month options. Our <strong>modern coworking space</strong> features ergonomic furniture, 
              zen workspace design, calm and serene environment, and all the amenities you need to succeed.
            </p>
            <p>
              <strong>Book your free tour</strong> today and experience why Spacio is the 
              <strong> best coworking space near you in Bangalore</strong>. Perfect for tech startups, 
              freelancers, entrepreneurs, and teams looking for a <strong>premium workspace</strong> that 
              matches their vibe. Contact us via WhatsApp, call, or visit our locations in Basavanagudi and Jayanagar.
            </p>
          </div>
        </div>
      </section>

      {/* Workspace Detail Modal */}
      <WorkspaceDetailModal
        workspace={selectedWorkspace}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
