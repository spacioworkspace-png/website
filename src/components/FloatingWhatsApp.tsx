"use client";
import { motion } from "framer-motion";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/917022780310?text=Hi! I'd like to know more about Spacio Workspace in Bangalore"
      className="fixed bottom-24 sm:bottom-28 right-4 sm:right-6 z-40 inline-flex items-center gap-2 sm:gap-3 rounded-full bg-primary px-4 sm:px-5 py-3 sm:py-4 text-white shadow-2xl hover:shadow-primary/50 active:scale-95 transition-all duration-300 group touch-manipulation"
      aria-label="Chat on WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulsing ring animation */}
      <motion.div
        className="absolute inset-0 rounded-full bg-primary"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className="h-5 w-5 sm:h-6 sm:w-6 relative z-10" 
        aria-hidden
      >
        <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.62-6.003C.122 5.281 5.403 0 12.057 0c3.17 0 6.151 1.237 8.4 3.486A11.79 11.79 0 0124 11.943c0 6.654-5.281 11.943-11.943 11.943a11.95 11.95 0 01-6.003-1.62L.057 24zm6.597-3.807c1.736.995 3.276 1.591 5.392 1.591 5.448 0 9.886-4.438 9.886-9.886 0-2.64-1.027-5.122-2.893-6.988A9.825 9.825 0 0012.05 2.4c-5.448 0-9.886 4.438-9.886 9.886 0 2.116.654 3.892 1.748 5.392l-.995 3.621 3.737-.106zm11.387-5.464c-.074-.123-.272-.197-.568-.345-.296-.148-1.757-.868-2.03-.967-.272-.099-.47-.148-.669.148-.197.296-.768.967-.941 1.164-.173.197-.345.222-.64.074-.296-.148-1.248-.46-2.378-1.468-.879-.783-1.472-1.751-1.645-2.047-.173-.296-.018-.456.13-.604.134-.133.296-.345.444-.518.148-.173.197-.296.296-.494.099-.198.05-.37-.025-.518-.074-.148-.669-1.612-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.197 0-.518.074-.789.37s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.148.197 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.757-.718 2.006-1.413.247-.695.247-1.29.173-1.413z"/>
      </svg>
      <span className="hidden sm:inline font-semibold relative z-10 group-hover:translate-x-1 transition-transform duration-300">
        WhatsApp Us
      </span>
    </motion.a>
  );
}
