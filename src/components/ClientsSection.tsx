"use client";
import { motion } from "framer-motion";
import { Building2, Star, Users, TrendingUp, Award, CheckCircle2, Play } from "lucide-react";

export function ClientsSection() {
  const clientTypes = [
    { name: "Tech Startups", count: "150+", icon: "🚀" },
    { name: "SaaS Companies", count: "80+", icon: "💻" },
    { name: "Digital Agencies", count: "60+", icon: "🎨" },
    { name: "Freelancers", count: "120+", icon: "✨" },
    { name: "Consultants", count: "50+", icon: "📊" },
    { name: "E-commerce", count: "40+", icon: "🛒" },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Founder, TechStartup",
      text: "Spacio Workspace transformed how we work. The private cabins give us the focus we need, and the community is incredible. Best decision we made!",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Freelance Designer",
      text: "As a freelancer, I needed a space that felt professional yet inspiring. Spacio delivers exactly that. The 1Gbps WiFi is a game-changer!",
      rating: 5,
    },
    {
      name: "Amit Patel",
      role: "CEO, SaaS Company",
      text: "We've been at Spacio for 6 months now. The location in Basavanagudi is perfect, and the team is always helpful. Highly recommend!",
      rating: 5,
    },
  ];

  const stats = [
    { label: "Happy Members", value: "500+", icon: Users },
    { label: "Average Rating", value: "4.8/5", icon: Star },
    { label: "Success Stories", value: "200+", icon: TrendingUp },
    { label: "Years of Excellence", value: "3+", icon: Award },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 bg-gradient-to-b from-white to-neutral-50/50">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="badge-premium mb-4 inline-block">Our Community</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-4">
          Trusted by <span className="text-gradient">500+ Members</span> in Bangalore
        </h2>
        <p className="mt-4 text-lg text-neutral-700 max-w-2xl mx-auto">
          Join startups, freelancers, and entrepreneurs who've made Spacio their workspace in Basavanagudi, Bangalore.
        </p>
      </motion.div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="card-premium rounded-2xl border-2 border-primary/20 p-6 bg-white text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <stat.icon className="w-10 h-10 text-primary mx-auto mb-3" />
            <div className="text-3xl font-bold text-neutral-900 mb-1">{stat.value}</div>
            <div className="text-sm text-neutral-600">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Client Types */}
      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
        {clientTypes.map((client, i) => (
          <motion.div
            key={client.name}
            className="card-premium rounded-xl border-2 border-neutral-200 p-6 text-center bg-gradient-to-br from-neutral-50 to-white hover:border-primary transition-all duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl mb-3">{client.icon}</div>
            <div className="font-bold text-neutral-900 mb-1">{client.name}</div>
            <div className="text-sm text-primary font-semibold">{client.count}</div>
          </motion.div>
        ))}
      </div>

      {/* Video Testimonials */}
      <div className="mb-12">
        <motion.h3
          className="text-3xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Hear From Our <span className="text-gradient peacock-text heartbeat">Happy Members</span>
        </motion.h3>
        <motion.p
          className="text-center text-neutral-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Real stories from real entrepreneurs who found their true space at Spacio. Watch their journey and feel the passion! 🎬
        </motion.p>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {[
            {
              name: "Rajesh Kumar",
              role: "Founder, TechStartup",
              videoUrl: "#", // Replace with actual video URL
              thumbnail: "https://via.placeholder.com/600x400/ff6b35/ffffff?text=Video+Testimonial+1",
              quote: "Spacio transformed our startup journey. The energy here is incredible!",
            },
            {
              name: "Priya Sharma",
              role: "Freelance Designer",
              videoUrl: "#", // Replace with actual video URL
              thumbnail: "https://via.placeholder.com/600x400/ff6b35/ffffff?text=Video+Testimonial+2",
              quote: "Best decision I made! The community and facilities are amazing.",
            },
          ].map((video, i) => (
            <motion.div
              key={i}
              className="card-premium rounded-2xl border-2 border-primary/20 p-0 bg-white overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              whileHover={{ y: -5, borderColor: "oklch(0.72 0.17 58)", scale: 1.02 }}
            >
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-primary/10 overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={`${video.name} testimonial`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <motion.div
                    className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-10 h-10 text-primary ml-1" fill="currentColor" />
                  </motion.div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-lg mb-1">{video.name}</p>
                  <p className="text-white/90 text-sm">{video.role}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-neutral-700 leading-relaxed italic">"{video.quote}"</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Text Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              className="card-premium rounded-2xl border-2 border-neutral-200 p-6 bg-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, borderColor: "oklch(0.72 0.17 58)" }}
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-neutral-700 mb-4 leading-relaxed italic">"{testimonial.text}"</p>
              <div className="border-t border-neutral-200 pt-4">
                <div className="font-bold text-neutral-900">{testimonial.name}</div>
                <div className="text-sm text-neutral-600">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trust Badges */}
      <motion.div
        className="flex flex-wrap items-center justify-center gap-8 text-neutral-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-primary" />
          <span className="font-semibold">Google Verified</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-primary" />
          <span className="font-semibold">4.8/5 Rating</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-primary" />
          <span className="font-semibold">500+ Reviews</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-primary" />
          <span className="font-semibold">Award Winning</span>
        </div>
      </motion.div>
    </section>
  );
}

