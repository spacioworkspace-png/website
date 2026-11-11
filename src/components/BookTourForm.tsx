"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Clock, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { trackLead } from "@/lib/tracking";
import { CallLink } from "@/components/ContactCtas";

const fieldClass =
  "w-full rounded-xl border-2 border-neutral-200 px-4 py-3 focus:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary focus:ring-2 focus:ring-primary/20 transition-all";

export function BookTourForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const emailBit = formData.email ? ` Email: ${formData.email}.` : "";
    const message = `Hi! I'm ${formData.name}.${emailBit} I'd like to book a tour at Spacio Workspace Basavanagudi on ${formData.preferredDate} at ${formData.preferredTime}. ${formData.message ? `Message: ${formData.message}` : ""}`;
    trackLead("book_tour_form");
    window.open(`https://wa.me/917022780310?text=${encodeURIComponent(message)}`, "_blank");
    router.push("/book-tour/thank-you");
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="card-premium rounded-2xl border-2 border-primary/20 p-8 bg-white"
      >
        <h2 className="text-2xl font-bold text-neutral-900 mb-6">Tour Details</h2>
        <form onSubmit={handleSubmit} className="space-y-6" noValidate={false}>
          <div>
            <label htmlFor="tour-name" className="block text-sm font-semibold text-neutral-900 mb-2">
              Your Name <span aria-hidden="true">*</span>
            </label>
            <input
              type="text"
              id="tour-name"
              name="name"
              required
              aria-required="true"
              autoComplete="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={fieldClass}
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="tour-email" className="block text-sm font-semibold text-neutral-900 mb-2">
              Email <span className="font-normal text-neutral-500">(optional)</span>
            </label>
            <input
              type="email"
              id="tour-email"
              name="email"
              autoComplete="email"
              inputMode="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={fieldClass}
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="tour-phone" className="block text-sm font-semibold text-neutral-900 mb-2">
              Phone Number <span aria-hidden="true">*</span>
            </label>
            <input
              type="tel"
              id="tour-phone"
              name="phone"
              required
              aria-required="true"
              autoComplete="tel"
              inputMode="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={fieldClass}
              placeholder="+91 98765 43210"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="tour-date" className="block text-sm font-semibold text-neutral-900 mb-2">
                Preferred Date <span aria-hidden="true">*</span>
              </label>
              <input
                type="date"
                id="tour-date"
                name="preferredDate"
                required
                aria-required="true"
                autoComplete="off"
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="tour-time" className="block text-sm font-semibold text-neutral-900 mb-2">
                Preferred Time <span aria-hidden="true">*</span>
              </label>
              <select
                id="tour-time"
                name="preferredTime"
                required
                aria-required="true"
                autoComplete="off"
                value={formData.preferredTime}
                onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                className={`${fieldClass} bg-white`}
              >
                <option value="">Select time</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="3:00 PM">3:00 PM</option>
                <option value="4:00 PM">4:00 PM</option>
                <option value="5:00 PM">5:00 PM</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="tour-message" className="block text-sm font-semibold text-neutral-900 mb-2">
              Message (Optional)
            </label>
            <textarea
              id="tour-message"
              name="message"
              rows={3}
              autoComplete="off"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={`${fieldClass} resize-none`}
              placeholder="Any specific requirements or questions?"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            aria-busy={submitting}
            className="btn-premium w-full rounded-xl bg-primary px-6 py-4 text-white font-semibold text-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-70 disabled:cursor-wait min-h-[52px]"
          >
            {submitting ? "Opening WhatsApp…" : "Book Free Tour via WhatsApp"}
            {!submitting ? <ArrowRight className="w-5 h-5" aria-hidden /> : null}
          </button>
          <CallLink
            location="book-tour-form"
            className="w-full rounded-xl border-2 border-primary/30 px-6 py-4 text-base font-semibold"
            variant="outline"
          >
            Or Call Us to Book
          </CallLink>
        </form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div className="card-premium rounded-2xl border-2 border-primary/20 p-6 bg-gradient-to-br from-primary/5 to-white">
          <h3 className="text-xl font-bold text-neutral-900 mb-4">What to Expect</h3>
          <ul className="space-y-3">
            {[
              "Tour of private cabins and dedicated desks",
              "See our meeting rooms and common areas",
              "Experience our lightning-fast WiFi",
              "Meet our community manager",
              "Get answers to all your questions",
              "No pressure, just information",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden />
                <span className="text-neutral-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card-premium rounded-2xl border-2 border-neutral-200 p-6 bg-white">
          <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" aria-hidden />
            Our Location
          </h3>
          <div className="space-y-4">
            <div>
              <div className="font-semibold text-neutral-900 mb-1">Basavanagudi</div>
              <p className="text-neutral-600 text-sm">
                No 7, Sree Devi Complex, NAT Street
                <br />
                Bangalore - 560004
              </p>
            </div>
          </div>
        </div>

        <div className="card-premium rounded-2xl border-2 border-neutral-200 p-6 bg-white">
          <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" aria-hidden />
            Tour Duration
          </h3>
          <p className="text-neutral-700">
            Our tours typically last 15-20 minutes. We&apos;ll show you around, answer your questions, and help
            you find the perfect workspace solution for your needs.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
