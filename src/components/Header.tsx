"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/workspaces", label: "Workspaces" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/locations/basavanagudi", label: "Locations" },
  { href: "/reviews", label: "Reviews" },
  { href: "/gallery", label: "Gallery" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-neutral-200/50" 
          : "bg-white/80 backdrop-blur-md border-b border-neutral-200/30"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        <Link 
          href="/" 
          className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300 relative group"
        >
          {/* Logo slot: will use /logo.png if present */}
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center border-2 border-primary/20 overflow-hidden bg-primary group-hover:scale-110 transition-transform duration-300">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="Spacio Workspace Logo"
              className="w-full h-full object-contain"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
                const parent = e.currentTarget.parentElement;
                if (parent && !parent.querySelector("span")) {
                  const span = document.createElement("span");
                  span.textContent = "S";
                  span.className = "text-white font-bold text-sm md:text-base";
                  parent.appendChild(span);
                }
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-bold tracking-tight text-neutral-900 leading-tight">Spacio Workspace</span>
            <span className="text-xs md:text-sm text-neutral-600 leading-tight hidden sm:block">Namma Bengaluru</span>
          </div>
        </Link>
        
        <nav className="hidden gap-3 lg:gap-6 md:flex">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-xs lg:text-sm font-medium text-neutral-700 transition-colors hover:text-primary group whitespace-nowrap"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 lg:gap-3">
          <a 
            href="https://wa.me/917022780310?text=Hi! I want to book a tour at Spacio Workspace Bangalore" 
            className="hidden rounded-xl bg-primary px-3 lg:px-5 py-2 lg:py-2.5 text-xs lg:text-sm font-semibold text-white hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl md:inline-flex items-center gap-1 lg:gap-2"
          >
            <span className="hidden lg:inline">Book Free Tour</span>
            <span className="lg:hidden">Tour</span>
            <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4" />
          </a>
          <a 
            href="tel:+917022780310" 
            className="hidden rounded-xl border-2 border-neutral-200 px-3 lg:px-4 py-2 lg:py-2.5 text-xs lg:text-sm font-semibold hover:border-primary hover:bg-primary/5 transition-all duration-300 lg:inline-block"
          >
            <span className="hidden xl:inline">Call Now</span>
            <span className="xl:hidden">Call</span>
          </a>
          <button 
            aria-label="Menu" 
            onClick={() => setOpen((v) => !v)} 
            className="inline-flex items-center justify-center rounded-xl border-2 border-neutral-200 p-2.5 hover:border-primary hover:bg-primary/5 transition-all duration-300 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div 
            className="border-t bg-white/95 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mx-auto max-w-7xl px-4 py-6">
              <div className="grid gap-4">
                {nav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link 
                      href={item.href} 
                      className="block text-base font-medium text-neutral-700 hover:text-primary transition-colors py-2" 
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="mt-4 pt-4 border-t border-neutral-200 flex flex-col gap-3">
                  <a 
                    href="https://wa.me/917022780310?text=Hi! I want to book a tour at Spacio Workspace Bangalore" 
                    className="rounded-xl bg-primary px-5 py-3 text-white font-semibold text-center hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Book Free Tour
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a 
                    href="tel:+917022780310" 
                    className="rounded-xl border-2 border-neutral-200 px-5 py-3 font-semibold text-center hover:border-primary hover:bg-primary/5 transition-all duration-300"
                  >
                    Call +91 70227 80310
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
