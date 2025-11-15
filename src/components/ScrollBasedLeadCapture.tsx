"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, Gift, ArrowRight, MessageCircle } from "lucide-react";

export function ScrollBasedLeadCapture() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      // Show at 60% scroll
      if (scrollPercent >= 60 && scrollPercent < 65) {
        const hasSeenScroll = sessionStorage.getItem("scrollLeadShown");
        if (!hasSeenScroll) {
          setShow(true);
          sessionStorage.setItem("scrollLeadShown", "true");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: "",
          source: "scroll_based",
          source_url: window.location.href,
          user_agent: navigator.userAgent,
          timestamp: new Date().toISOString(),
        }),
      });
      setSubmitted(true);
      setTimeout(() => setShow(false), 4000);
    } catch (error) {
      console.error("Error saving lead:", error);
    } finally {
      setLoading(false);
    }

    // Redirect to WhatsApp
    const message = `Hi! I'm ${formData.name}. I'm interested in Spacio Workspace. Phone: ${formData.phone}`;
    window.open(`https://wa.me/917022780310?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
            onClick={() => setShow(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-[101]"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-6 relative overflow-hidden border-2 border-primary/20">
              <button
                onClick={() => setShow(false)}
                className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              {!submitted ? (
                <>
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Gift className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      Love What You See? 🎁
                    </h3>
                    <p className="text-sm text-neutral-700 mb-1">
                      Get <strong className="text-primary">10% OFF</strong> your first month!
                    </p>
                    <p className="text-xs text-neutral-600">
                      Share your details and we'll send you the offer
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-lg border-2 border-neutral-200 px-3 py-2 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Your name"
                    />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-lg border-2 border-neutral-200 px-3 py-2 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="WhatsApp number"
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-premium w-full rounded-lg bg-primary px-4 py-2.5 text-white font-semibold text-sm hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <MessageCircle className="w-4 h-4" />
                          Get Offer on WhatsApp
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-1">Success! 🎉</h3>
                  <p className="text-sm text-neutral-700">
                    Check WhatsApp for your special offer!
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

