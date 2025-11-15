"use client";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Sparkles, Zap, Users, MapPin, Star, TrendingUp, Clock, Wifi, Shield, Building2, Heart, Award, Rocket, Target, CheckCircle2, AlertCircle, Play, MessageCircle } from "lucide-react";
import { WorkspaceDetailModal } from "@/components/WorkspaceDetailModal";
import { ClientsSection } from "@/components/ClientsSection";
import { FOMOCountdown } from "@/components/FOMOCountdown";
import { PublicTransportSection } from "@/components/PublicTransportSection";
import { InstagramFeed } from "@/components/InstagramFeed";

export default function Home() {
  const [activeLoc, setActiveLoc] = useState<"basavanagudi" | "jayanagar">("basavanagudi");
  const [reviews, setReviews] = useState<Array<{author_name:string; rating:number; text:string}> | null>(null);
  const [currentHero, setCurrentHero] = useState(0);
  const [selectedWorkspace, setSelectedWorkspace] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  
  const heroSections = [
    {
      badge: "🔥 #1 in Bangalore",
      title: "Work Where",
      subtitle: "Gen Z Thrives",
      description: "Namma Bengaluru's most vibrant coworking space for Gen Z entrepreneurs, startups, and freelancers. Private cabins, lightning-fast WiFi, 24/7 access, and a community that gets it.",
      tagline: "Your launchpad to success starts here.",
      icon: Rocket,
    },
    {
      badge: "💎 Premium Experience",
      title: "Namma Bengaluru",
      subtitle: "Namma Spacio",
      description: "In the heart of Basavanagudi, near Bull Temple and Lalbagh. Built for Bangalore's ambitious entrepreneurs. Experience the perfect blend of productivity, community, and modern amenities in South Bangalore's most vibrant neighborhood.",
      tagline: "Where innovation meets community in Basavanagudi.",
      icon: Heart,
    },
    {
      badge: "⚡ Lightning Fast",
      title: "1Gbps Internet",
      subtitle: "Zero Lag, Maximum Speed",
      description: "Stream, code, collaborate without limits. Our blazing-fast fiber internet keeps you connected and productive, always.",
      tagline: "Work at the speed of thought.",
      icon: Zap,
    },
    {
      badge: "🏆 Award Winning",
      title: "500+ Members",
      subtitle: "Growing Community",
      description: "Join Bangalore's most dynamic coworking community. Connect with like-minded entrepreneurs, share ideas, and grow together.",
      tagline: "Your network is your net worth.",
      icon: Users,
    },
  ];
  
  useEffect(() => {
    fetch("/api/reviews")
      .then((r) => r.json())
      .then((d) => setReviews(d.reviews || []))
      .catch(() => setReviews([]));
  }, []);

  // Auto-rotate hero sections
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroSections.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSections.length]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
  return (
      <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4" />
          <p className="text-neutral-600 font-semibold">Loading Spacio Workspace...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white overflow-hidden">
      {/* Rotating Hero Sections with Carousel - Full Size */}
      <section id="hero" className="relative w-full scroll-mt-16 overflow-hidden min-h-screen flex items-center basavanagudi-heritage">
        {/* Full-size animated background with Peacock & Basavanagudi elements */}
        <div className="absolute inset-0 gradient-mesh opacity-60" />
        <div className="absolute inset-0 basavanagudi-gradient" />
        <div className="absolute inset-0 peacock-pattern opacity-30" />
        <motion.div 
          className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.4, 1],
            x: [0, -60, 0],
            y: [0, 60, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        <div className="relative mx-auto max-w-7xl w-full px-4 py-20 md:py-32 grid gap-12 md:grid-cols-2 md:items-center z-10">
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
                        <span>🦚 Book Free Tour - Namma Basavanagudi</span>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                      </a>
                      <a 
                        href="https://wa.me/917022780310?text=I'd like pricing details for Spacio coworking space in Basavanagudi, near Bull Temple, Bangalore #SpacioPricing #CoworkingSpace #Bangalore #Basavanagudi #SouthBangalore" 
                        className="rounded-xl border-2 border-primary/30 px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sm sm:text-base text-neutral-900 hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                      >
                        Get Pricing
                      </a>
                      <a 
                        href="tel:+917022780310" 
                        className="rounded-xl border-2 border-neutral-200 px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sm sm:text-base text-neutral-900 hover:border-primary hover:bg-neutral-50 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                      >
                        📞 Call Now
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
                        <span>24/7 Secure Access</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Wifi className="w-4 h-4 text-primary" />
                        <span>Lightning-Fast WiFi</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>Flexible Hours</span>
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
                      <img 
                        src="/images/spacio-sign-green-wall.jpg" 
                        alt="Spacio Workspace sign on green plant wall - Find Your True Space"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    )}
                    {index === 1 && (
                      <img 
                        src="/images/building-exterior-sree-devi-complex.jpg" 
                        alt="Spacio Workspace building exterior in Basavanagudi - Sree Devi Complex"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    )}
                    {index === 2 && (
                      <img 
                        src="/images/office-corridor-glass-partitions.jpg" 
                        alt="Modern office corridor with glass partitions at Spacio Workspace"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    )}
                    {index === 3 && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <hero.icon className="w-32 h-32 text-primary/30" />
                      </div>
                    )}
                    {/* Floating elements */}
                    <motion.div 
                      className="absolute top-10 right-10 w-20 h-20 bg-primary/20 rounded-xl blur-sm"
                      animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div 
                      className="absolute bottom-10 left-10 w-16 h-16 bg-primary/15 rounded-full blur-sm"
                      animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
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
          <span className="badge-premium mb-4 inline-block pulse-glow-peacock">✨ Your Perfect Space Awaits ✨</span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-gradient peacock-text heartbeat">Choose Your</span> Perfect Workspace
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
            <strong className="text-primary">Every entrepreneur deserves a space that fuels their passion.</strong> From solo cabins to team spaces, 
            we've got the perfect setup for every Gen Z entrepreneur, startup, and freelancer in Namma Bengaluru. 
            <span className="block mt-2">Flexible options that match your vibe, your energy, and your dreams. 
            <strong className="text-primary"> This is where your success story begins.</strong> 🎯</span>
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              badge: "🔥 Most Popular",
              title: "Solo Cabin",
              subtitle: "Perfect for Individual Focus",
              icon: "🚀",
              image: "/images/solo-cabin-workspace.jpg",
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
              icon: "👥",
              image: "/images/3-seater-cabin-orange-screens.jpg",
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
              badge: "💎 Great Value",
              title: "6-Seater Cabin",
              subtitle: "Perfect for Small Teams & Brainstorming",
              icon: "🎯",
              image: "/images/6-seater-cabin-workspace.jpg",
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
              badge: "⭐ Professional",
              title: "Virtual Office",
              subtitle: "Professional Business Address & Services",
              icon: "🏢",
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
              icon: "💻",
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
              badge: "🎤 Professional",
              title: "Meeting Rooms",
              subtitle: "Professional Meeting Spaces",
              icon: "📹",
              image: "/images/meeting-room-frosted-glass.jpg",
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
                  images: [],
                  capacity: card.title.includes("Seater") ? card.title : card.title.includes("Solo") ? "1 person" : "Flexible",
                });
                setIsModalOpen(true);
              }}
            >
              {card.image && (
                <div className="aspect-video w-full rounded-xl overflow-hidden mb-4 -mx-6 -mt-6">
                  <img 
                    src={card.image} 
                    alt={`${card.title} at Spacio Workspace`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              )}
              <div className="text-4xl mb-4">{card.icon}</div>
              {card.badge ? (
                <span className="badge-premium mb-3 inline-block">{card.badge}</span>
              ) : null}
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">{card.title}</h3>
              <p className="text-neutral-600 mb-4">{card.subtitle}</p>
              <ul className="space-y-2 mb-6">
                {card.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-neutral-700">
                    <span className="text-primary mt-1">✓</span>
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
                  Get Pricing on WhatsApp →
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
            <span className="block mt-2">Let's create the perfect workspace for your startup in Namma Basavanagudi - 
            <strong className="text-primary"> where your dreams take shape, one day at a time.</strong> 🎨</span>
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

      {/* Premium Features Bar */}
      <section className="border-y bg-gradient-to-r from-primary/5 via-white to-primary/5 py-8">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Zap, text: "Lightning Fast WiFi", subtext: "1Gbps Internet" },
              { icon: Clock, text: "24/7 Access", subtext: "Work Anytime" },
              { icon: Users, text: "Vibrant Community", subtext: "500+ Members" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <item.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-semibold text-sm">{item.text}</div>
                <div className="text-xs text-neutral-600 mt-1">{item.subtext}</div>
              </motion.div>
            ))}
          </div>
        </div>
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
              🦚 <strong className="text-primary">Namma Basavanagudi</strong> - Where heritage meets innovation. Namma Bengaluru's most trusted coworking space. Here's why 500+ passionate entrepreneurs choose Spacio to build their dreams.
            </p>
            </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: Award,
                title: "Award-Winning Design",
                description: "Recognized as Bangalore's best coworking space. Our zen-inspired design promotes productivity and creativity.",
                highlight: "🏆 Best Coworking Space 2024",
              },
              {
                icon: Target,
                title: "Built for Gen Z",
                description: "Designed by Gen Z, for Gen Z. We understand what modern entrepreneurs need to thrive in today's fast-paced world.",
                highlight: "✨ Gen Z Approved",
              },
              {
                icon: Zap,
                title: "Lightning-Fast Everything",
                description: "1Gbps internet, instant booking, quick responses. We value your time as much as you do.",
                highlight: "⚡ Zero Lag Guarantee",
              },
              {
                icon: Heart,
                title: "Namma Bengaluru Spirit",
                description: "Proudly Bangalore. We celebrate the city's entrepreneurial spirit and support local businesses.",
                highlight: "❤️ Made in Bangalore",
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
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
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
                    <span className="block mt-2">Your future self will thank you for making this decision today. 🚀</span>
                  </p>
                  <div className="flex items-center gap-2">
                    <FOMOCountdown />
                  </div>
                </div>
                <motion.a
                  href="https://wa.me/917022780310?text=I want to secure my spot at Spacio Workspace!"
                  className="btn-premium rounded-xl bg-white text-primary px-8 py-4 font-bold text-lg hover:bg-white/90 transition-all duration-300 flex items-center gap-2 shadow-xl hover:scale-105 whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Secure Your Spot
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
              <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center relative overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <Play className="w-20 h-20 text-white z-10 group-hover:scale-110 transition-transform" fill="white" />
                <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                  <p className="font-semibold text-lg">Spacio Workspace Virtual Tour</p>
                  <p className="text-sm text-white/90">Basavanagudi, Bangalore</p>
                </div>
              </div>
              <p className="mt-4 text-neutral-600 text-center">
                Click to watch our full virtual tour video
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

      {/* About Section with Tagline */}
      <section id="about" className="relative mx-auto max-w-7xl px-4 py-20 overflow-hidden bg-gradient-to-br from-primary/5 via-white to-primary/5">
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
            <motion.h2
              className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <span className="text-gradient peacock-text heartbeat">Find Your</span>
              <br />
              <span className="text-neutral-900">True Space</span>
            </motion.h2>
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
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Our Story</h3>
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
                <div className="aspect-video w-full rounded-xl overflow-hidden mb-4 -mx-8 -mt-8">
                  <img 
                    src="/images/water-fountain-ganesha-green-wall.jpg" 
                    alt="Vastu-compliant water fountain with Ganesha idol and green plant wall at Spacio Workspace"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Vastu-Compliant Design</h3>
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
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Our Mission</h3>
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
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Why Basavanagudi?</h3>
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

      {/* Basavanagudi Heritage & Culture Section - Emotional & Peacock Themed */}
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

      {/* Public Transport Connectivity Section */}
      <PublicTransportSection />

      {/* Enhanced Clients Section with Video Testimonials */}
      <ClientsSection />

      {/* Why Choose Spacio - Premium Grid */}
      <section id="why" className="mx-auto max-w-7xl scroll-mt-16 px-4 py-20 bg-white">
            <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge-premium mb-4 inline-block pulse-glow-peacock">💫 Why Choose Spacio? 💫</span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Built for <span className="text-gradient peacock-text heartbeat">Ambitious Entrepreneurs</span> Like You
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
            <strong className="text-primary">Because your dreams deserve the perfect foundation.</strong> Everything you need to work productively, 
            grow your business, and connect with like-minded entrepreneurs in Namma Bengaluru's most vibrant coworking community. 
            <span className="block mt-2">This isn't just about a workspace - <strong className="text-primary">it's about building the life you've always imagined.</strong> 🌟</span>
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { 
              title: "Prime Location in Basavanagudi", 
              desc: "In the heart of Basavanagudi, near Bull Temple and Lalbagh. Strategically located in South Bangalore's most vibrant neighborhood for easy access",
              icon: MapPin,
              color: "text-blue-500"
            },
            { 
              title: "Lightning-Fast Internet", 
              desc: "1Gbps fiber internet - stream, code, and collaborate without lag",
              icon: Zap,
              color: "text-yellow-500"
            },
            { 
              title: "Vibrant Basavanagudi Community", 
              desc: "Connect with 500+ entrepreneurs, startups, and freelancers in Namma Bengaluru's most dynamic coworking space",
              icon: Users,
              color: "text-purple-500"
            },
            
            { 
              title: "24/7 Secure Access", 
              desc: "Work on your schedule - access your workspace anytime, day or night",
              icon: Shield,
              color: "text-green-500"
            },
            { 
              title: "Smart Meeting Rooms", 
              desc: "Fully equipped spaces with AV equipment, whiteboards, and video conferencing",
              icon: Building2,
              color: "text-indigo-500"
            },
            { 
              title: "Zen Workspace Design", 
              desc: "Calm, modern interiors designed for focus and productivity",
              icon: Sparkles,
              color: "text-pink-500"
            },
            { 
              title: "Calm & Serene Environment", 
              desc: "Escape the chaos - work in a peaceful, distraction-free space",
              icon: Star,
              color: "text-rose-500"
            },
            { 
              title: "Premium Amenities Included", 
              desc: "Printing, scanning, mail handling, phone answering - all included",
              icon: TrendingUp,
              color: "text-primary"
            },
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              className="card-premium rounded-2xl border-2 border-neutral-200 p-6 bg-white hover:border-primary/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20, scale: 0.95, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.05 * i, type: "spring", stiffness: 100 }}
              whileHover={{ y: -8, scale: 1.02, borderColor: "oklch(0.72 0.17 58)", rotate: 1 }}
            >
              <feature.icon className={`w-10 h-10 ${feature.color} mb-4`} />
              <h3 className="text-xl font-bold text-neutral-900 mb-2">{feature.title}</h3>
              <p className="text-neutral-600 mb-4">{feature.desc}</p>
              <a 
                href="https://wa.me/917022780310?text=I'd like to learn more about Spacio's features in Bangalore" 
                className="text-sm text-primary font-semibold hover:underline inline-flex items-center gap-1"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a 
            href="https://wa.me/917022780310?text=I want to experience Spacio's premium features in Basavanagudi #SpacioWorkspace #PremiumCoworking #Basavanagudi #VastuCompliant #FindYourTrueSpace #Bangalore" 
            className="btn-premium inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-white font-semibold text-lg hover:bg-primary/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="heartbeat">Start Your Journey Today - WhatsApp</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </section>

      {/* Pricing Overview - Premium Cards */}
      <section id="pricing" className="mx-auto max-w-7xl scroll-mt-16 px-4 py-20 bg-gradient-to-b from-neutral-50/50 to-white">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge-premium mb-4 inline-block pulse-glow-peacock">💰 Transparent Pricing</span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Simple, <span className="text-gradient peacock-text">Honest Pricing</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
            <strong className="text-primary">No hidden fees, no surprises.</strong> Premium coworking space in Namma Basavanagudi at prices that make sense for Gen Z entrepreneurs, startups, and freelancers. 
            <span className="block mt-2">We believe in <strong className="text-primary">transparency, honesty, and value</strong> - because your success matters more than our profit. 💎</span>
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            { 
              name: "Day Pass", 
              desc: "Perfect for trying out Spacio or occasional work days",
              features: ["Full day access", "High-speed WiFi", "Community access", "Meeting room credits"]
            },
            { 
              name: "Dedicated Desks", 
              desc: "Your personal workspace with all premium amenities",
              features: ["Assigned desk", "24/7 access", "Storage space", "All amenities included"],
              popular: true
            },
            { 
              name: "Solo / 3 / 6-Seater Cabins", 
              desc: "Private cabins for individuals and small teams",
              features: ["Private space", "Team collaboration", "Storage lockers", "Whiteboard access", "Flexible terms"]
            },
          ].map((p, i) => (
            <motion.div
              key={p.name}
              className={`card-premium rounded-2xl border-2 p-8 bg-white ${
                p.popular ? 'border-primary ring-2 ring-primary/20 scale-105' : 'border-neutral-200'
              }`}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: p.popular ? 1.05 : 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              whileHover={{ y: -8, scale: p.popular ? 1.08 : 1.02 }}
            >
              {p.popular && (
                <span className="badge-premium mb-4 inline-block">Most Popular</span>
              )}
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">{p.name}</h3>
              <p className="text-neutral-600 mb-6">{p.desc}</p>
              <ul className="space-y-3 mb-8">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-neutral-700">
                    <span className="text-primary mt-1">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3">
                <a 
                  href={`https://wa.me/917022780310?text=${encodeURIComponent(`I need pricing details for ${p.name} at Spacio Workspace in Basavanagudi #SpacioPricing #${p.name.replace(/\s+/g, '')} #CoworkingBangalore #Basavanagudi`)}`}
                  className="btn-premium rounded-xl bg-primary px-4 py-3 text-white font-semibold text-center hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4" />
                  Get Pricing on WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a 
                  href={`https://wa.me/917022780310?text=${encodeURIComponent(`I want to book a free tour for ${p.name} at Spacio Basavanagudi #BookTour #SpacioWorkspace #FindYourTrueSpace #Basavanagudi`)}`}
                  className="rounded-xl border-2 border-primary/30 px-4 py-3 text-center font-semibold hover:border-primary hover:bg-primary/5 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Book Free Tour via WhatsApp
                </a>
                <a 
                  href="/pricing" 
                  className="rounded-xl border border-neutral-200 px-4 py-2 text-sm text-center hover:border-primary hover:bg-primary/5 transition-all duration-300"
                >
                  View Full Details →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Locations with Toggle - Premium Design */}
      <section id="locations" className="mx-auto max-w-7xl scroll-mt-16 px-4 py-20 bg-white">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge-premium mb-4 inline-block">Our Locations</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
            Choose Your <span className="text-gradient">Bangalore Location</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-700 max-w-2xl mx-auto">
            Strategically located in South Bangalore - easily accessible from all major areas.
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-8">
          <motion.button 
            onClick={() => setActiveLoc("basavanagudi")} 
            className={`rounded-xl px-6 py-3 text-sm font-semibold ring-2 transition-all duration-300 ${
              activeLoc==="basavanagudi"
              ?"bg-primary text-white ring-primary shadow-lg scale-105"
              :"ring-neutral-200 hover:bg-neutral-50 hover:ring-primary/50"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Basavanagudi
          </motion.button>
          <motion.button 
            onClick={() => setActiveLoc("jayanagar")} 
            className={`rounded-xl px-6 py-3 text-sm font-semibold ring-2 transition-all duration-300 ${
              activeLoc==="jayanagar"
              ?"bg-primary text-white ring-primary shadow-lg scale-105"
              :"ring-neutral-200 hover:bg-neutral-50 hover:ring-primary/50"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Jayanagar
          </motion.button>
        </div>

        <div className="mt-8">
          {activeLoc === "basavanagudi" ? (
            <motion.div 
              key="basav" 
              className="grid gap-8 md:grid-cols-2" 
              initial={{opacity:0, x: -20}} 
              animate={{opacity:1, x: 0}}
              transition={{ duration: 0.5 }}
            >
              <div className="card-premium rounded-2xl border-2 border-primary/20 p-8 bg-gradient-to-br from-primary/5 to-white">
                <div className="aspect-video w-full rounded-xl overflow-hidden mb-6 -mx-8 -mt-8">
                  <img 
                    src="/images/building-exterior-sree-devi-complex.jpg" 
                    alt="Spacio Workspace building exterior - Sree Devi Complex, Basavanagudi, Bangalore"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
                <h3 className="text-3xl font-bold text-neutral-900 mb-4">Basavanagudi</h3>
                <p className="text-lg text-neutral-700 mb-6">
                  No 7, Sree Devi Complex, NAT Street, Bangalore - 560004
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Prime South Bangalore Location</span>
                </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>24/7 Access Available</span>
              </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <Wifi className="w-4 h-4 text-primary" />
                    <span>1Gbps High-Speed Internet</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a 
                    className="btn-premium rounded-xl bg-primary px-5 py-3 text-white font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105" 
                    href="https://wa.me/917022780310?text=I want to visit Spacio Workspace in Basavanagudi, near Bull Temple, Bangalore"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Directions
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a 
                    className="rounded-xl border-2 border-primary/30 px-5 py-3 font-semibold hover:border-primary hover:bg-primary/5 transition-all duration-300 flex items-center gap-2" 
                    href="https://wa.me/917022780310?text=I need directions to Spacio Workspace Basavanagudi"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Get Directions via WhatsApp
                  </a>
                  <a 
                    className="rounded-xl border-2 border-neutral-200 px-5 py-3 font-semibold hover:border-primary hover:bg-primary/5 transition-all duration-300" 
                    href="https://www.google.com/maps/place/Spacio+Workspace/@12.9449135,77.5658325,17z" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Open Google Maps
                  </a>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <iframe 
                  className="aspect-video w-full rounded-2xl ring-2 ring-neutral-200 shadow-xl" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade" 
                  src="https://www.google.com/maps?q=Spacio%20Workspace%20Bangalore&output=embed"
                />
              </motion.div>
            </motion.div>
          ) : (
            <motion.div 
              key="jaya" 
              className="grid gap-8 md:grid-cols-2" 
              initial={{opacity:0, x: 20}} 
              animate={{opacity:1, x: 0}}
              transition={{ duration: 0.5 }}
            >
              <div className="card-premium rounded-2xl border-2 border-primary/20 p-8 bg-gradient-to-br from-primary/5 to-white">
                <h3 className="text-3xl font-bold text-neutral-900 mb-4">Jayanagar</h3>
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
              </div>
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
            </motion.div>
          )}
        </div>
      </section>

      {/* Gallery - Premium Grid */}
      <section id="gallery" className="mx-auto max-w-7xl scroll-mt-16 px-4 py-20 bg-gradient-to-b from-white to-neutral-50/50">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge-premium mb-4 inline-block">Gallery</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
            Explore Our <span className="text-gradient">Premium Space</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-700 max-w-2xl mx-auto">
            Take a virtual tour of our modern coworking space in Bangalore. 
            See our private cabins, dedicated desks, meeting rooms, and vibrant community areas.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { src: "/images/office-corridor-glass-partitions.jpg", alt: "Modern office corridor with glass partitions" },
            { src: "/images/workspace-orange-screens.jpg", alt: "Workspace with orange privacy screens" },
            { src: "/images/workspace-green-screens.jpg", alt: "Workspace with green privacy screens" },
            { src: "/images/meeting-room-frosted-glass.jpg", alt: "Professional meeting room with frosted glass" },
            { src: "/images/water-fountain-ganesha-green-wall.jpg", alt: "Vastu-compliant water fountain with Ganesha" },
            { src: "/images/modern-bathroom-wash-area.jpg", alt: "Modern bathroom and wash area amenities" },
            { src: "/images/workspace-yellow-green-walls.jpg", alt: "Modern workspace with colorful walls" },
            { src: "/images/workspace-numbered-cabins.jpg", alt: "Private numbered cabins at Spacio Workspace" },
            { src: "/images/spacio-sign-green-wall.jpg", alt: "Spacio Workspace sign on green plant wall" },
          ].map((img, i) => (
            <motion.div 
              key={i} 
              className="card-premium aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-neutral-50 ring-2 ring-neutral-200 overflow-hidden group cursor-pointer relative" 
              initial={{opacity:0, scale:0.9, rotate: -2}} 
              whileInView={{opacity:1, scale:1, rotate: 0}} 
              viewport={{once:true}} 
              transition={{duration:0.4, delay:0.05*i}}
              whileHover={{ scale: 1.05, rotate: 2, zIndex: 10 }}
            >
              <img 
                src={img.src} 
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = '<div class="w-full h-full flex items-center justify-center"><svg class="w-16 h-16 text-primary/30" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg></div>';
                  }
                }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a 
            href="#contact" 
            className="btn-premium rounded-xl bg-primary px-8 py-4 text-white font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center gap-2"
          >
            Book a Free Tour
            <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="https://wa.me/917022780310?text=I'd like to see more photos of Spacio Workspace Bangalore" 
            className="rounded-xl border-2 border-neutral-200 px-8 py-4 font-semibold hover:border-primary hover:bg-primary/5 transition-all duration-300"
          >
            Request More Photos
          </a>
          <a 
            href="/gallery" 
            className="rounded-xl border-2 border-neutral-200 px-8 py-4 font-semibold hover:border-primary hover:bg-primary/5 transition-all duration-300"
          >
            View Full Gallery →
          </a>
        </motion.div>
      </section>



      {/* Instagram Feed Section */}
      <InstagramFeed />

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
              <span className="block mt-2">This isn't just a coworking space - <strong>it's where dreams become reality.</strong> 🚀</span>
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
