"use client";
import { motion } from "framer-motion";
import { Instagram, Heart, MessageCircle, ArrowRight } from "lucide-react";

export function InstagramFeed() {
  // Placeholder Instagram posts - Replace with actual Instagram API integration
  const instagramPosts = [
    {
      id: 1,
      image: "https://via.placeholder.com/400x400/ff6b35/ffffff?text=Spacio+Post+1",
      likes: 234,
      comments: 12,
      caption: "Another productive day at Spacio! 🚀",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/400x400/ff6b35/ffffff?text=Spacio+Post+2",
      likes: 189,
      comments: 8,
      caption: "Our amazing community event! 🎉",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/400x400/ff6b35/ffffff?text=Spacio+Post+3",
      likes: 312,
      comments: 15,
      caption: "Beautiful workspace vibes ✨",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/400x400/ff6b35/ffffff?text=Spacio+Post+4",
      likes: 267,
      comments: 10,
      caption: "Team collaboration at its best! 👥",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/400x400/ff6b35/ffffff?text=Spacio+Post+5",
      likes: 198,
      comments: 7,
      caption: "Sunset views from our space 🌅",
    },
    {
      id: 6,
      image: "https://via.placeholder.com/400x400/ff6b35/ffffff?text=Spacio+Post+6",
      likes: 245,
      comments: 11,
      caption: "Networking session success! 🎯",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 bg-gradient-to-b from-neutral-50/50 to-white">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="badge-premium mb-4 inline-block">Follow Us</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-4">
          Join Our <span className="text-gradient peacock-text">Instagram Community</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-neutral-700 max-w-2xl mx-auto">
          See the <strong className="text-primary">real moments</strong> from our vibrant workspace. 
          Follow us for daily inspiration, community events, and behind-the-scenes glimpses of life at Spacio! 
          <span className="block mt-2 text-primary font-semibold">#SpacioWorkspace #NammaBasavanagudi #FindYourTrueSpace</span>
        </p>
        <a
          href="https://www.instagram.com/spacioworkspace"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 text-primary font-semibold hover:underline"
        >
          <Instagram className="w-5 h-5" />
          @spacioworkspace
        </a>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4">
        {instagramPosts.map((post, i) => (
          <motion.a
            key={post.id}
            href="https://www.instagram.com/spacioworkspace"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
          >
            <img
              src={post.image}
              alt={post.caption}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-4 text-white">
                <div className="flex items-center gap-1">
                  <Heart className="w-5 h-5 fill-white" />
                  <span className="text-sm font-semibold">{post.likes}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span className="text-sm font-semibold">{post.comments}</span>
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        className="text-center mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <a
          href="https://www.instagram.com/spacioworkspace"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-premium inline-flex items-center gap-2 rounded-xl bg-primary px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold text-base sm:text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:scale-105"
        >
          <Instagram className="w-5 h-5" />
          Follow Us on Instagram
          <ArrowRight className="w-5 h-5" />
        </a>
      </motion.div>
    </section>
  );
}

