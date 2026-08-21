"use client";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Zap, MapPin, Clock, Wifi, Shield, Building2, Heart, Rocket, Target, CheckCircle2, MessageCircle } from "lucide-react";
import { WorkspaceDetailModal } from "@/components/WorkspaceDetailModal";

export default function Home() {
  const [currentHero, setCurrentHero] = useState(0);
  const [selectedWorkspace, setSelectedWorkspace] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  
  const heroSections = [
    {
      badge: "Basavanagudi, Bangalore",
      title: "Premium Coworking Space",
      subtitle: "in Basavanagudi, Bangalore",
      description:
        "Private cabins, dedicated desks, meeting rooms and virtual office solutions for professionals, startups and growing teams in South Bangalore.",
      tagline: "Visit us at Sree Devi Complex, NAT Street, Basavanagudi.",
      icon: Rocket,
    },
    {
      badge: "South Bangalore",
      title: "Premium Coworking Space",
      subtitle: "in Basavanagudi, Bangalore",
      description:
        "Private cabins, dedicated desks, meeting rooms and virtual office solutions for professionals, startups and growing teams in South Bangalore.",
      tagline: "Near Bull Temple and Lalbagh, with 1Gbps internet and 24/7 access.",
      icon: Heart,
    },
    {
      badge: "Flexible workspace",
      title: "Premium Coworking Space",
      subtitle: "in Basavanagudi, Bangalore",
      description:
        "Private cabins, dedicated desks, meeting rooms and virtual office solutions for professionals, startups and growing teams in South Bangalore.",
      tagline: "Book a free tour and see the space before you commit.",
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
      {/* Rotating Hero Sections with Carousel - Optimized for All Devices */}
      <section id="hero" className="relative w-full scroll-mt-16 overflow-hidden min-h-[90vh] sm:min-h-[92vh] md:min-h-[95vh] lg:min-h-screen flex items-center basavanagudi-heritage">
        {/* Full-size animated background with Peacock & Basavanagudi elements */}
        <div className="absolute inset-0 gradient-mesh opacity-25 sm:opacity-35 md:opacity-50 lg:opacity-60" />
        <div className="absolute inset-0 basavanagudi-gradient" />
        <div className="absolute inset-0 peacock-pattern opacity-3 sm:opacity-5 md:opacity-10 lg:opacity-30" />
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
        
        <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-5 md:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-10 sm:pb-12 md:pb-16 lg:py-32 grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 md:grid-cols-2 md:items-center z-10">
          {/* Logo Placeholder - Hidden on mobile */}
          <div className="hidden lg:block absolute top-4 left-4 z-20">
            <div className="w-32 h-12 bg-primary/10 rounded-lg flex items-center justify-center border-2 border-primary/20">
              <span className="text-primary font-bold text-lg">SPACIO WORKSPACE</span>
            </div>
          </div>

          <div className="relative h-full min-h-[380px] xs:min-h-[420px] sm:min-h-[480px] md:min-h-[520px] lg:min-h-[580px]">
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
                      <span className="badge-premium inline-flex items-center gap-1.5 sm:gap-2 text-[10px] xs:text-xs sm:text-sm">
                        <Sparkles className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                        <span className="whitespace-nowrap">Basavanagudi, Bangalore</span>
                      </span>
                    </motion.div>
                    
                    <h1 className="mt-3 xs:mt-4 sm:mt-5 md:mt-6 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tight leading-[1.1] sm:leading-[1.15] md:leading-tight">
                      <span className="text-gradient peacock-text block">Premium Coworking Space</span>
                      <span className="text-neutral-900 block mt-1 xs:mt-1.5 sm:mt-2">in Basavanagudi, Bangalore</span>
                    </h1>
                    
                    <motion.p 
                      className="mt-3 xs:mt-4 sm:mt-5 md:mt-6 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-neutral-700 leading-relaxed sm:leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.8 }}
                    >
                      {hero.description}
                      <span className="text-primary font-semibold block mt-2 xs:mt-2.5 sm:mt-3 md:mt-4 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl heartbeat"> {hero.tagline}</span>
                    </motion.p>

                    {/* Premium Stats Bar */}
                    <motion.div 
                      className="mt-4 xs:mt-5 sm:mt-6 md:mt-8 flex flex-wrap gap-3 xs:gap-4 sm:gap-5 md:gap-6 text-[10px] xs:text-xs sm:text-sm md:text-base"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    >
                      <div className="flex items-center gap-1.5 xs:gap-2">
                        <MapPin className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                        <span className="font-semibold whitespace-nowrap">Basavanagudi</span>
                      </div>
                      <div className="flex items-center gap-1.5 xs:gap-2">
                        <Building2 className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                        <span className="font-semibold whitespace-nowrap">Private cabins</span>
                      </div>
                      <div className="flex items-center gap-1.5 xs:gap-2">
                        <Wifi className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                        <span className="font-semibold whitespace-nowrap">1Gbps WiFi</span>
                      </div>
                    </motion.div>

                    {/* Multiple Premium CTAs with Peacock Elements - Optimized for All Devices */}
                    <motion.div 
                      className="mt-5 xs:mt-6 sm:mt-7 md:mt-8 lg:mt-10 flex flex-col gap-2.5 xs:gap-3 sm:gap-3.5 md:gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                    >
                      <a 
                        href="https://wa.me/917022780310?text=Hi! I want to book a FREE tour of Spacio Workspace in Basavanagudi, near Bull Temple, Bangalore #SpacioWorkspace #BookTour #CoworkingBangalore #Basavanagudi #FindYourTrueSpace #NammaBasavanagudi" 
                        className="btn-premium group relative rounded-xl bg-primary px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 py-3 xs:py-3.5 sm:py-4 md:py-4.5 text-white font-bold text-xs xs:text-sm sm:text-base md:text-lg shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 pulse-glow-peacock touch-manipulation min-h-[48px] xs:min-h-[52px] sm:min-h-[56px] md:min-h-[60px]"
                      >
                        <span className="text-center">Book a Free Tour</span>
                        <ArrowRight className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                      </a>
                      <div className="grid grid-cols-2 gap-2.5 xs:gap-3 sm:gap-3.5 md:gap-4">
                        <a 
                          href="https://wa.me/917022780310?text=I'd like pricing details for Spacio coworking space in Basavanagudi, near Bull Temple, Bangalore #SpacioPricing #CoworkingSpace #Bangalore #Basavanagudi #SouthBangalore" 
                          className="rounded-xl bg-orange-500 px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 py-2.5 xs:py-3 sm:py-3.5 md:py-4 font-bold text-[10px] xs:text-xs sm:text-sm md:text-base text-white shadow-lg hover:bg-orange-600 active:scale-95 transition-all duration-300 flex items-center justify-center touch-manipulation min-h-[44px] xs:min-h-[48px] sm:min-h-[52px] md:min-h-[56px]"
                        >
                          Get Pricing
                        </a>
                        <a 
                          href="tel:+917022780310" 
                          className="rounded-xl bg-orange-500/90 px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 py-2.5 xs:py-3 sm:py-3.5 md:py-4 font-bold text-[10px] xs:text-xs sm:text-sm md:text-base text-white shadow-lg hover:bg-orange-600 active:scale-95 transition-all duration-300 flex items-center justify-center touch-manipulation min-h-[44px] xs:min-h-[48px] sm:min-h-[52px] md:min-h-[56px]"
                        >
                          Call Now
                        </a>
                      </div>
                    </motion.div>

                    {/* Trust Indicators - Optimized for All Devices */}
                    <motion.div 
                      className="mt-4 xs:mt-5 sm:mt-6 md:mt-8 flex flex-col xs:flex-row xs:flex-wrap gap-2.5 xs:gap-3 sm:gap-3.5 md:gap-4 text-[10px] xs:text-xs sm:text-sm md:text-base text-neutral-600"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                    >
                      <div className="flex items-center gap-1.5 xs:gap-2">
                        <Shield className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                        <span className="whitespace-nowrap">24/7 secure access</span>
                      </div>
                      <div className="flex items-center gap-1.5 xs:gap-2">
                        <Wifi className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                        <span className="whitespace-nowrap">Lightning-fast WiFi</span>
                      </div>
                      <div className="flex items-center gap-1.5 xs:gap-2">
                        <Clock className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                        <span className="whitespace-nowrap">Flexible hours</span>
                      </div>
                    </motion.div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>

            {/* Hero Navigation Dots - Optimized for All Devices */}
            <div className="absolute bottom-0 left-0 flex gap-1.5 xs:gap-2 sm:gap-2.5 mt-6 xs:mt-7 sm:mt-8">
              {heroSections.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentHero(index)}
                  className={`h-1.5 xs:h-2 sm:h-2.5 rounded-full transition-all duration-300 touch-manipulation ${
                    index === currentHero 
                      ? 'bg-primary w-6 xs:w-7 sm:w-8 md:w-10' 
                      : 'bg-neutral-300 hover:bg-primary/50 w-1.5 xs:w-2 sm:w-2.5'
                  }`}
                  aria-label={`Go to hero section ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <motion.div 
            className="relative mt-6 xs:mt-8 sm:mt-10 md:mt-0"
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
                    className="aspect-video w-full rounded-xl xs:rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-neutral-50 ring-2 ring-primary/20 shadow-xl sm:shadow-2xl relative overflow-hidden"
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
                    {/* Floating elements - reduced animation complexity for performance, hidden on mobile */}
                    <motion.div 
                      className="hidden sm:block absolute top-6 right-6 sm:top-8 sm:right-8 md:top-10 md:right-10 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-primary/20 rounded-xl blur-sm will-change-transform"
                      animate={{ y: [0, -15, 0] }}
                      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div 
                      className="hidden sm:block absolute bottom-6 left-6 sm:bottom-8 sm:left-8 md:bottom-10 md:left-10 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-primary/15 rounded-full blur-sm will-change-transform"
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
      <section id="workspaces" className="mx-auto max-w-7xl scroll-mt-16 px-4 sm:px-6 py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-neutral-50/50">
        <motion.div 
          className="mb-8 sm:mb-10 md:mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge-premium mb-3 sm:mb-4 inline-block pulse-glow-peacock text-xs sm:text-sm">Your Perfect Workspace in Bangalore</span>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight px-2">
            <span className="text-gradient peacock-text heartbeat">Choose Your</span> Perfect Workspace
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed px-2">
            Private cabins, dedicated desks, meeting rooms and virtual office solutions for professionals, startups and growing teams in South Bangalore.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3 px-2">
            {[
              { href: "/workspaces", label: "all workspaces" },
              { href: "/workspaces/solo-cabin", label: "private cabins" },
              { href: "/workspaces/three-seater-cabin", label: "3-seater cabin" },
              { href: "/workspaces/six-seater-cabin", label: "6-seater cabin" },
              { href: "/workspaces/dedicated-desks", label: "dedicated desks" },
              { href: "/workspaces/meeting-rooms", label: "meeting rooms" },
              { href: "/workspaces/virtual-office", label: "virtual office" },
              { href: "/workspaces/day-pass", label: "day pass" },
              { href: "/locations/basavanagudi", label: "Basavanagudi" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-neutral-700 hover:border-primary hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              badge: "Private cabin",
              title: "Solo Cabin",
              href: "/workspaces/solo-cabin",
              subtitle: "Perfect for Individual Focus",
              iconLabel: "Private Cabin Workspace",
              image: "/images/solo-cabin-workspace.jpg",
              gallery: [
                "/images/solo-cabin-workspace.jpg",
                "/images/workspace-orange-screens.jpg",
                "/images/workspace-green-screens.jpg",
              ],
              videoUrl: "/solo-cabin-tour.mp4",
              priceLabel: "Starts at ₹8,499/month",
              pricing: "₹8,499/month",
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
              href: "/workspaces/three-seater-cabin",
              subtitle: "Ideal for Small Teams & Partners",
              iconLabel: "3-Seater Startup Hub",
              image: "/images/3-seater-cabin-orange-screens.jpg",
              gallery: [
                "/images/3-seater-cabin-orange-screens.jpg",
                "/images/workspace-numbered-cabins.jpg",
                "/images/workspace-yellow-green-walls.jpg",
              ],
              videoUrl: "/three-seater-cabin-tour.mp4",
              priceLabel: "Starts at ₹14,999/month",
              pricing: "₹14,999/month",
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
              href: "/workspaces/six-seater-cabin",
              subtitle: "Perfect for Small Teams & Brainstorming",
              iconLabel: "6-Seater Team Cabin",
              image: "/images/6-seater-cabin-workspace.jpg",
               gallery: [
                "/images/6-seater-cabin-workspace.jpg",
                "/images/workspace-orange-screens.jpg",
                "/images/workspace-numbered-cabins.jpg",
              ],
              videoUrl: "/six-seater-cabin-tour.mp4",
              priceLabel: "Starts at ₹24,999/month",
              pricing: "₹24,999/month",
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
              href: "/workspaces/virtual-office",
              subtitle: "Professional Business Address & Services",
              iconLabel: "Virtual Office Services",
              gallery: [
                "/images/building-exterior-sree-devi-complex.jpg",
                "/images/office-corridor-glass-partitions.jpg",
                "/images/spacio-sign-green-wall.jpg",
              ],
              videoUrl: "/virtual-office-tour.mp4",
              priceLabel: "Starts at ₹12,999/year",
              pricing: "₹12,999/year",
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
              href: "/workspaces/dedicated-desks",
              subtitle: "Your Personal Workspace",
              iconLabel: "Dedicated Desk Plan",
              image: "/images/workspace-orange-screens.jpg",
              gallery: [
                "/images/workspace-orange-screens.jpg",
                "/images/workspace-green-screens.jpg",
                "/images/workspace-numbered-cabins.jpg",
              ],
              videoUrl: "/dedicated-desks-tour.mp4",
              priceLabel: "Starts at ₹3,499/month",
              pricing: "₹3,499/month",
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
              href: "/workspaces/meeting-rooms",
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
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                <Link
                  href={card.href}
                  className="hover:text-primary transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  {card.title}
                </Link>
              </h3>
              <p className="text-neutral-600">{card.subtitle}</p>
              <ul className="space-y-2 mb-6">
                {card.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-2.5 sm:gap-3">
                <a
                  href={`https://wa.me/917022780310?text=${encodeURIComponent(`I'm interested in ${card.title} at Spacio Workspace in Basavanagudi, Bangalore #SpacioWorkspace #CoworkingBangalore #Basavanagudi #FindYourTrueSpace`)}`}
                  className="btn-premium rounded-xl bg-primary px-4 sm:px-5 py-3.5 sm:py-4 text-white font-bold text-sm sm:text-base text-center hover:bg-primary/90 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 touch-manipulation min-h-[52px] sm:min-h-[56px]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="flex-1">{card.cta}</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                </a>
                <Link
                  href={card.href}
                  className="rounded-xl border-2 border-primary/30 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-center hover:border-primary hover:bg-primary/5 active:scale-95 transition-all duration-300 flex items-center justify-center gap-1.5 touch-manipulation min-h-[44px]"
                  onClick={(e) => e.stopPropagation()}
                >
                  View plan
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>
                <a 
                  href={`https://wa.me/917022780310?text=${encodeURIComponent(`I need pricing for ${card.title} at Spacio Basavanagudi #SpacioPricing #CoworkingSpace #Bangalore`)}`}
                  className="rounded-xl border-2 border-primary/30 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-center hover:border-primary hover:bg-primary/5 active:scale-95 transition-all duration-300 flex items-center justify-center gap-1.5 touch-manipulation min-h-[44px]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span>Get Pricing</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Workspace CTA */}
        <motion.div 
          className="mt-8 sm:mt-10 md:mt-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-white p-6 sm:p-8 text-center border-2 border-primary/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mb-2 sm:mb-3">
            <span className="text-gradient peacock-text">Dreaming of a Custom Workspace?</span>
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-neutral-700 mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed px-2">
            <strong className="text-primary">Your vision deserves the perfect space.</strong> We offer tailored plans and long-term bookings for teams of all sizes. 
            <span className="block mt-2">Let's design the perfect workspace for your startup in Namma Basavanagudi - 
            <strong className="text-primary"> where your ideas take shape inside a premium Bangalore coworking space.</strong></span>
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <a 
              href="tel:+917022780310" 
              className="rounded-xl border-2 border-primary px-5 sm:px-6 py-3 sm:py-4 font-bold text-sm sm:text-base hover:bg-primary hover:text-white active:scale-95 transition-all duration-300 touch-manipulation min-h-[52px] sm:min-h-[56px] flex items-center justify-center"
            >
              Call for Custom Plans
            </a>
            <a 
              href="https://wa.me/917022780310?text=I'd like to schedule a cabin tour at Spacio Workspace Bangalore" 
              className="btn-premium rounded-xl bg-primary px-5 sm:px-6 py-3 sm:py-4 text-white font-bold text-sm sm:text-base hover:bg-primary/90 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 touch-manipulation min-h-[52px] sm:min-h-[56px]"
            >
              Schedule Cabin Tour
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* What Makes Us Special */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 md:py-20 overflow-hidden basavanagudi-heritage">
        <div className="absolute inset-0 basavanagudi-gradient" />
        <div className="absolute inset-0 peacock-pattern opacity-20" />
        <motion.div 
          className="relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="badge-premium mb-3 sm:mb-4 inline-block text-xs sm:text-sm">Why Spacio?</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-3 sm:mt-4 px-2">
              <span className="text-gradient peacock-text">What Makes Us</span> Special
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-neutral-700 max-w-2xl mx-auto px-2">
              <strong className="text-primary">Namma Basavanagudi</strong> is a practical South Bangalore address for focused work. Spacio is a premium coworking space for professionals, startups and growing teams.
            </p>
            </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
            {[
              {
                icon: Building2,
                title: "Calm, focused interiors",
                description: "Private cabins and shared desks in a quiet Basavanagudi centre designed for day-to-day work, not a showroom.",
                highlight: "Cabins, desks and meeting rooms",
              },
              {
                icon: Target,
                title: "Built for working teams",
                description: "Solo professionals, small startups and growing teams can pick a plan that matches how they actually work.",
                highlight: "Flexible workspace plans",
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
        </motion.div>
      </section>

      {/* Premium Contact CTA */}
      <section id="contact" className="mx-auto max-w-7xl scroll-mt-16 px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <motion.div 
          className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-primary/80 p-6 sm:p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden"
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
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 sm:mb-4 px-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="heartbeat">Ready to Transform Your Work Life?</span>
            </motion.h2>
            <motion.p 
              className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed px-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Book a free tour of our Basavanagudi centre. Private cabins, dedicated desks, meeting rooms and virtual office plans are available for professionals, startups and growing teams in South Bangalore.
            </motion.p>
            <motion.div 
              className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <a 
                href="/contact" 
                className="rounded-xl bg-white text-primary px-5 sm:px-6 md:px-8 py-3.5 sm:py-4 font-bold text-sm sm:text-base md:text-lg hover:bg-white/90 active:scale-95 transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center gap-2 touch-manipulation min-h-[52px] sm:min-h-[56px]"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              </a>
              <a 
                href="https://wa.me/917022780310?text=Hi! I'd like to book a free tour at Spacio Workspace Bangalore" 
                className="rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-5 sm:px-6 md:px-8 py-3.5 sm:py-4 font-bold text-sm sm:text-base md:text-lg hover:bg-white/20 active:scale-95 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 touch-manipulation min-h-[52px] sm:min-h-[56px]"
              >
                WhatsApp Us
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              </a>
              <a 
                href="https://www.google.com/maps/place/Spacio+Workspace/@12.9449135,77.5658325,17z" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-5 sm:px-6 md:px-8 py-3.5 sm:py-4 font-bold text-sm sm:text-base md:text-lg hover:bg-white/20 active:scale-95 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 touch-manipulation min-h-[52px] sm:min-h-[56px]"
              >
                Google Maps
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              </a>
              <a 
                href="tel:+917022780310" 
                className="rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-5 sm:px-6 md:px-8 py-3.5 sm:py-4 font-bold text-sm sm:text-base md:text-lg hover:bg-white/20 active:scale-95 transition-all duration-300 hover:scale-105 touch-manipulation min-h-[52px] sm:min-h-[56px] flex items-center justify-center"
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
            Premium Coworking Space in Basavanagudi, Bangalore
          </h2>
          <div className="text-neutral-700 leading-relaxed space-y-4 text-left max-w-4xl mx-auto">
            <p>
              <strong>Spacio Workspace</strong> is a{" "}
              <Link href="/locations/basavanagudi" className="text-primary font-semibold hover:underline">
                premium coworking space in Basavanagudi, Bangalore
              </Link>
              .{" "}
              <Link href="/workspaces/solo-cabin" className="text-primary hover:underline">Private cabins</Link>,{" "}
              <Link href="/workspaces/dedicated-desks" className="text-primary hover:underline">dedicated desks</Link>,{" "}
              <Link href="/workspaces/meeting-rooms" className="text-primary hover:underline">meeting rooms</Link> and{" "}
              <Link href="/workspaces/virtual-office" className="text-primary hover:underline">virtual office</Link>{" "}
              solutions for professionals, startups and growing teams in South Bangalore.
            </p>
            <p>
              The centre is at No 7, Sree Devi Complex, NAT Street, Basavanagudi, near Bull Temple and Lalbagh.
              Browse{" "}
              <Link href="/workspaces" className="text-primary hover:underline">all workspaces</Link>, including a{" "}
              <Link href="/workspaces/solo-cabin" className="text-primary hover:underline">solo cabin</Link>,{" "}
              <Link href="/workspaces/three-seater-cabin" className="text-primary hover:underline">3-seater cabin</Link>,{" "}
              <Link href="/workspaces/six-seater-cabin" className="text-primary hover:underline">6-seater cabin</Link>, a{" "}
              <Link href="/workspaces/day-pass" className="text-primary hover:underline">day pass</Link>, or a virtual office address.
            </p>
            <p>
              Amenities include 1Gbps internet, 24/7 access, and meeting rooms with AV equipment.
              <Link href="/book-tour" className="text-primary font-semibold hover:underline"> Book a free tour</Link>,{" "}
              <Link href="/contact" className="text-primary hover:underline">contact us</Link>, call, or WhatsApp to see the space.
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
