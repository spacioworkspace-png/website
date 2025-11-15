"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, Clock, MapPin, CheckCircle2, ArrowRight } from "lucide-react";

export function BookTourForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    location: "basavanagudi",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi! I'm ${formData.name}. I'd like to book a tour at Spacio Workspace ${formData.location === 'basavanagudi' ? 'Basavanagudi' : 'Jayanagar'} on ${formData.preferredDate} at ${formData.preferredTime}. ${formData.message ? `Message: ${formData.message}` : ''}`;
    window.open(`https://wa.me/917022780310?text=${encodeURIComponent(message)}`, '_blank');
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
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-neutral-900 mb-2">Your Name *</label>
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
            <label className="block text-sm font-semibold text-neutral-900 mb-2">Email *</label>
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
            <label className="block text-sm font-semibold text-neutral-900 mb-2">Phone Number *</label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full rounded-xl border-2 border-neutral-200 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              placeholder="+91 98765 43210"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-neutral-900 mb-2">Preferred Location *</label>
            <select
              required
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full rounded-xl border-2 border-neutral-200 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
            >
              <option value="basavanagudi">Basavanagudi</option>
              <option value="jayanagar">Jayanagar (Coming Soon)</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-neutral-900 mb-2">Preferred Date *</label>
              <input
                type="date"
                required
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                className="w-full rounded-xl border-2 border-neutral-200 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-neutral-900 mb-2">Preferred Time *</label>
              <select
                required
                value={formData.preferredTime}
                onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                className="w-full rounded-xl border-2 border-neutral-200 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
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
            <label className="block text-sm font-semibold text-neutral-900 mb-2">Message (Optional)</label>
            <textarea
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full rounded-xl border-2 border-neutral-200 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
              placeholder="Any specific requirements or questions?"
            />
          </div>

          <button
            type="submit"
            className="btn-premium w-full rounded-xl bg-primary px-6 py-4 text-white font-semibold text-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
          >
            Book Free Tour
            <ArrowRight className="w-5 h-5" />
          </button>
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
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-neutral-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card-premium rounded-2xl border-2 border-neutral-200 p-6 bg-white">
          <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            Our Locations
          </h3>
          <div className="space-y-4">
            <div>
              <div className="font-semibold text-neutral-900 mb-1">Basavanagudi</div>
              <p className="text-neutral-600 text-sm">
                No 7, Sree Devi Complex, NAT Street<br />
                Bangalore - 560004
              </p>
            </div>
            <div>
              <div className="font-semibold text-neutral-900 mb-1">Jayanagar</div>
              <p className="text-neutral-600 text-sm">Coming Soon - 4th Block</p>
            </div>
          </div>
        </div>

        <div className="card-premium rounded-2xl border-2 border-neutral-200 p-6 bg-white">
          <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            Tour Duration
          </h3>
          <p className="text-neutral-700">
            Our tours typically last 15-20 minutes. We'll show you around, answer your questions, 
            and help you find the perfect workspace solution for your needs.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

