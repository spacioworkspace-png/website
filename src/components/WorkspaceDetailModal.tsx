"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, ArrowRight, CheckCircle2, MapPin, Clock, Wifi, Users, Building2 } from "lucide-react";

interface WorkspaceDetailModalProps {
  workspace: {
    title: string;
    subtitle: string;
    icon: string;
    features: string[];
    description: string;
    images: string[];
    pricing?: string;
    capacity?: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

export function WorkspaceDetailModal({ workspace, isOpen, onClose }: WorkspaceDetailModalProps) {
  if (!workspace) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[201] w-full max-w-5xl max-h-[90vh] mx-4 overflow-y-auto"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-white p-6 border-b-2 border-primary/20">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 hover:bg-white transition-colors shadow-lg"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="pr-12">
                  <div className="text-5xl mb-3">{workspace.icon}</div>
                  <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">{workspace.title}</h2>
                  <p className="text-lg text-neutral-700">{workspace.subtitle}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Images */}
                  <div className="space-y-4">
                    <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center">
                        <Building2 className="w-32 h-32 text-primary/30" />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="aspect-square rounded-lg bg-gradient-to-br from-primary/10 to-primary/5" />
                      ))}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900 mb-3">Description</h3>
                      <p className="text-neutral-700 leading-relaxed">{workspace.description}</p>
                    </div>

                    {workspace.capacity && (
                      <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20">
                        <Users className="w-6 h-6 text-primary" />
                        <div>
                          <div className="font-semibold text-neutral-900">Capacity</div>
                          <div className="text-sm text-neutral-600">{workspace.capacity}</div>
                        </div>
                      </div>
                    )}

                    <div>
                      <h3 className="text-xl font-bold text-neutral-900 mb-3">Features Included</h3>
                      <ul className="space-y-2">
                        {workspace.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-neutral-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-200">
                      <div className="flex items-center gap-2">
                        <Wifi className="w-5 h-5 text-primary" />
                        <span className="text-sm font-semibold">1Gbps WiFi</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-primary" />
                        <span className="text-sm font-semibold">24/7 Access</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span className="text-sm font-semibold">Basavanagudi</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <span className="text-sm font-semibold">Vastu Compliant</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-wrap gap-4">
                  <a
                    href={`https://wa.me/917022780310?text=${encodeURIComponent(`I'm interested in ${workspace.title} at Spacio Workspace Basavanagudi. Please share more details and pricing.`)}`}
                    className="btn-premium flex-1 min-w-[200px] rounded-xl bg-primary px-6 py-4 text-white font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Book via WhatsApp
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href={`https://wa.me/917022780310?text=${encodeURIComponent(`I need pricing for ${workspace.title} at Spacio Basavanagudi`)}`}
                    className="flex-1 min-w-[200px] rounded-xl border-2 border-primary/30 px-6 py-4 font-semibold hover:border-primary hover:bg-primary/5 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Get Pricing
                  </a>
                  <a
                    href="tel:+917022780310"
                    className="flex-1 min-w-[200px] rounded-xl border-2 border-neutral-200 px-6 py-4 font-semibold hover:border-primary hover:bg-primary/5 transition-all duration-300"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

