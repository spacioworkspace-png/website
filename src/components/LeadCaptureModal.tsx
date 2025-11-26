"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, ArrowRight } from "lucide-react";

export function LeadCaptureModal() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (dismissed) return;

    const hasSeenModal = typeof window !== "undefined" ? sessionStorage.getItem("leadModalShown") : null;
    if (hasSeenModal) return;

    const t = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem("leadModalShown", "true");
    }, 10000);

    return () => clearTimeout(t);
  }, [dismissed]);

  const whatsappHref = `https://wa.me/917022780310?text=${encodeURIComponent(
    `Hi, I'm ${name || ""}. I'd like to know more about Spacio Workspace. My phone: ${phone || ""}.`
  )}`;

  return (
    <AnimatePresence>
      {open && !dismissed && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end md:items-center justify-center bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="mx-4 mb-4 md:mb-0 w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl ring-1 ring-neutral-200"
            initial={{ y: 32, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 32, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 140, damping: 18 }}
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="badge-premium mb-3 inline-block">Limited Spots</div>
                <h3 className="text-xl font-bold text-neutral-900">Book a Free Tour</h3>
                <p className="mt-1 text-sm text-neutral-600">
                  Share your details and we’ll reach out within minutes. Experience Bangalore's premium coworking in Basavanagudi.
                </p>
              </div>
              <button
                aria-label="Close"
                className="rounded-lg p-2 border hover:bg-neutral-50"
                onClick={() => {
                  setOpen(false);
                  setDismissed(true);
                }}
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form
              className="mt-4 grid gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = whatsappHref;
              }}
            >
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="tel"
                placeholder="Phone (WhatsApp)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="btn-premium inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-white text-sm font-semibold hover:bg-primary/90"
              >
                <MessageCircle className="h-4 w-4" />
                Send on WhatsApp
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="tel:+917022780310"
                className="inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm hover:border-primary/40"
              >
                Or call +91 70227 80310
              </a>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
