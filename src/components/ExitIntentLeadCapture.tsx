"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, Gift, ArrowRight, MessageCircle, Clock, Users } from "lucide-react";

export function ExitIntentLeadCapture() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        const hasSeenExit = sessionStorage.getItem("exitIntentShown");
        if (!hasSeenExit) {
          setShow(true);
          sessionStorage.setItem("exitIntentShown", "true");
        }
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: "",
          source: "exit_intent",
          source_url: window.location.href,
          user_agent: navigator.userAgent,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => setShow(false), 4000);
      }
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={() => setShow(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-full max-w-lg mx-4"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 relative overflow-hidden">
              <button
                onClick={() => setShow(false)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {!submitted ? (
                <>
                  <div className="text-center mb-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                      className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                    >
                      <Gift className="w-10 h-10 text-white" />
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-3xl font-bold text-neutral-900 mb-3"
                    >
                      Wait! Don't Miss Out 🎁
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-lg text-neutral-700 mb-2"
                    >
                      <strong className="text-primary">Only 12 spots left</strong> this month!
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-neutral-600 mb-4"
                    >
                      Get <strong className="text-primary">10% OFF</strong> your first month + <strong>Free Tour</strong> when you book today!
                    </motion.p>
                    <div className="flex items-center justify-center gap-4 text-sm text-neutral-600 mb-6">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>Book in 24hrs</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-primary" />
                        <span>500+ Members</span>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-neutral-900 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border-2 border-neutral-200 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-neutral-900 mb-2">
                        WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border-2 border-neutral-200 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-premium w-full rounded-xl bg-primary px-6 py-4 text-white font-bold text-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl disabled:opacity-50"
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Claiming Offer...
                        </>
                      ) : (
                        <>
                          <Gift className="w-5 h-5" />
                          Claim My 10% OFF + Free Tour
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                    <p className="text-xs text-center text-neutral-500">
                      By submitting, you agree to receive WhatsApp messages from Spacio Workspace
                    </p>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">Success! 🎉</h3>
                  <p className="text-neutral-700 mb-4">
                    We've received your details! Our team will contact you within 5 minutes with your special offer.
                  </p>
                  <a
                    href="https://wa.me/917022780310?text=Hi! I just claimed the special offer"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat with us on WhatsApp
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

