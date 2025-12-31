"use client";
import Script from "next/script";
import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Mail, Send, MessageCircle, Clock, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    workspace: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    // For now, we'll redirect to WhatsApp with the form data
    const message = `Hi! I'm ${formData.name}. ${formData.message}${formData.workspace ? ` I'm interested in: ${formData.workspace}` : ''}`;
    window.open(`https://wa.me/917022780310?text=${encodeURIComponent(message)}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative mx-auto max-w-7xl px-4 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <span className="badge-premium mb-4 inline-block">Get In Touch</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mt-4">
            <span className="text-gradient">Let's Build</span> Something Great
          </h1>
          <p className="mt-6 text-lg md:text-xl text-neutral-700 max-w-2xl mx-auto">
            Ready to join Namma Bengaluru's most vibrant coworking community? 
            Get in touch and let's make it happen.
          </p>
        </motion.div>
      </section>

      {/* Contact Form & Info */}
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-premium rounded-2xl border-2 border-neutral-200 p-8 bg-white"
          >
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-neutral-900 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border-2 border-neutral-200 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-neutral-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border-2 border-neutral-200 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-neutral-900 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-xl border-2 border-neutral-200 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label htmlFor="workspace" className="block text-sm font-semibold text-neutral-900 mb-2">
                  Interested In
                </label>
                <select
                  id="workspace"
                  value={formData.workspace}
                  onChange={(e) => setFormData({ ...formData, workspace: e.target.value })}
                  className="w-full rounded-xl border-2 border-neutral-200 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 bg-white"
                >
                  <option value="">Select workspace type</option>
                  <option value="Solo Cabin">Solo Cabin</option>
                  <option value="3-Seater Cabin">3-Seater Cabin</option>
                  <option value="6-Seater Cabin">6-Seater Cabin</option>
                  <option value="Dedicated Desk">Dedicated Desk</option>
                  <option value="Meeting Room">Meeting Room</option>
                  <option value="Virtual Office">Virtual Office</option>
                  <option value="Day Pass">Day Pass</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-neutral-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-xl border-2 border-neutral-200 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 resize-none"
                  placeholder="Tell us about your workspace needs..."
                />
              </div>

              <button
                type="submit"
                className="btn-premium w-full rounded-xl bg-primary px-6 py-4 text-white font-semibold text-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                {submitted ? (
                  <>
                    <span>✓ Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Quick Contact Cards */}
            <div className="card-premium rounded-2xl border-2 border-primary/20 p-6 bg-gradient-to-br from-primary/5 to-white">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Get In Touch</h3>
              <p className="text-neutral-700 mb-6">
                We're here to help! Reach out through any of these channels and we'll get back to you within 24 hours.
              </p>
              
              <div className="space-y-4">
                <a
                  href="tel:+917022780310"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border-2 border-neutral-200 hover:border-primary hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Phone className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900">Call Us</div>
                    <div className="text-neutral-600">+91-7022780310</div>
                  </div>
                </a>

                <a
                  href="mailto:hello@spacioworkspace.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border-2 border-neutral-200 hover:border-primary hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Mail className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900">Email Us</div>
                    <div className="text-neutral-600">hello@spacioworkspace.com</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/917022780310?text=Hi! I'd like to know more about Spacio Workspace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border-2 border-neutral-200 hover:border-primary hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <MessageCircle className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900">WhatsApp</div>
                    <div className="text-neutral-600">Chat with us instantly</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="card-premium rounded-2xl border-2 border-neutral-200 p-6 bg-white">
              <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Visit Us
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="font-semibold text-neutral-900 mb-1">Basavanagudi</div>
                  <p className="text-neutral-600 text-sm">
                    No 7, Sree Devi Complex, NAT Street<br />
                    Bangalore - 560004, Karnataka
                  </p>
                  <a
                    href="https://www.google.com/maps/place/Spacio+Workspace/@12.9449135,77.5658325,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold text-sm mt-2 inline-flex items-center gap-1 hover:underline"
                  >
                    View on Google Maps <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>


            {/* Office Hours */}
            <div className="card-premium rounded-2xl border-2 border-neutral-200 p-6 bg-white">
              <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Office Hours
              </h3>
              <div className="space-y-2 text-neutral-700">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">10:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
                <div className="mt-4 pt-4 border-t border-neutral-200">
                  <p className="text-sm text-primary font-semibold">
                    24/7 Access Available for Members
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
  );
}
