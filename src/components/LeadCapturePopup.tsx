"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, Mail, Phone, User, ArrowRight, Gift } from "lucide-react";

export function LeadCapturePopup() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show popup after 10 seconds
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem("leadPopupShown");
      if (!hasSeenPopup) {
        setShow(true);
        sessionStorage.setItem("leadPopupShown", "true");
      }
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const SHEETS_ENDPOINT = "https://script.google.com/macros/s/AKfycbxZ2APTaDWUMKy-pPrVf6GKS090aRVuwn39dxB0lxp9IMFtaZZiOtqc4OCnK86pF10X/exec";
      
      // Prepare payload matching the original format
      const payload = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email || "",
        source_url: window.location.href,
        user_agent: navigator.userAgent,
        timestamp: new Date().toISOString()
      };

      // Send as URL-encoded form data for compatibility with Apps Script
      const body = new URLSearchParams(payload);

      // Save to Google Sheets directly
      await fetch(SHEETS_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        body: body,
      });

      // Also save locally as backup
      const key = "spacio_leads_local";
      const existing = JSON.parse(localStorage.getItem(key) || "[]");
      existing.push({ ...payload, ts: new Date().toISOString() });
      localStorage.setItem(key, JSON.stringify(existing));

      setSubmitted(true);
      setTimeout(() => {
        setShow(false);
      }, 3000);
    } catch (error) {
      // Fallback to WhatsApp
      const message = `Hi! I'm ${formData.name}. I'm interested in Spacio Workspace. Email: ${formData.email}, Phone: ${formData.phone}`;
      window.open(`https://wa.me/917022780310?text=${encodeURIComponent(message)}`, "_blank");
      setSubmitted(true);
      setTimeout(() => {
        setShow(false);
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
            onClick={() => setShow(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-full max-w-md mx-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden">
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
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Gift className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                      Special Offer for You! 🎁
                    </h3>
                    <p className="text-neutral-700">
                      Get <strong>10% off</strong> on your first month + Free tour when you share your details!
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-neutral-900 mb-2">
                        <User className="w-4 h-4 inline mr-1" />
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
                        <Mail className="w-4 h-4 inline mr-1" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border-2 border-neutral-200 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-neutral-900 mb-2">
                        <Phone className="w-4 h-4 inline mr-1" />
                        Phone Number *
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
                      className="btn-premium w-full rounded-xl bg-primary px-6 py-4 text-white font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-50"
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Claim Offer
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">Thank You! 🎉</h3>
                  <p className="text-neutral-700 mb-4">
                    We've received your details. Our team will contact you shortly with your special offer!
                  </p>
                  <a
                    href="https://wa.me/917022780310?text=Hi! I just submitted my details for the special offer"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                  >
                    Chat with us on WhatsApp <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

