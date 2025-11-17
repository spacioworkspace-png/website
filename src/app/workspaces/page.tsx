"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WorkspaceDetailModal } from "@/components/WorkspaceDetailModal";

export default function WorkspacesPage() {
  const [selectedWorkspace, setSelectedWorkspace] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen">
      {/* Choose Your Perfect Workspace - Premium Cards */}
      <section className="mx-auto max-w-7xl scroll-mt-16 px-4 py-20 bg-gradient-to-b from-white to-neutral-50/50">
        <div className="mb-12 text-center">
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
        </div>

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
              image: "/images/workspace-orange-screens.jpg",
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
          ].map((card) => (
            <div
              key={card.title}
              className="card-premium rounded-2xl border-2 border-neutral-200 p-6 bg-white relative overflow-hidden hover:border-primary/50 transition-all duration-300 cursor-pointer"
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
            </div>
          ))}
        </div>

        {/* Custom Workspace CTA */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-white p-8 text-center border-2 border-primary/20">
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

