"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Sparkles, Clock, AlertCircle, Play } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SingleSeaterPromoPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });
  const [showVideo, setShowVideo] = useState(false);
  const pathname = usePathname();

  // Countdown timer for FOMO
  useEffect(() => {
    if (!isVisible) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isVisible]);

  // Check if current page is relevant for showing the popup
  const isRelevantPage = () => {
    const relevantPaths = [
      "/",
      "/pricing",
      "/pricing-bangalore",
      "/workspaces",
      "/workspaces/solo-cabin",
      "/workspaces/day-pass",
      "/workspaces/dedicated-desks",
      "/book-tour",
    ];
    return relevantPaths.includes(pathname);
  };

  useEffect(() => {
    // Check if popup was already shown in this session
    const sessionKey = "single_seater_popup_shown";
    const wasShown = sessionStorage.getItem(sessionKey) === "true";

    if (wasShown || !isRelevantPage()) {
      return;
    }

    let scrollTimer: NodeJS.Timeout | null = null;
    let timeTimer: NodeJS.Timeout | null = null;
    let initialTimer: NodeJS.Timeout | null = null;
    let scrollTriggered = false;
    let timeTriggered = false;

    const showPopup = () => {
      if (!hasShown && !wasShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem(sessionKey, "true");
      }
    };

    // Initial delay trigger - show after 2 seconds on homepage, 4 seconds on other pages
    initialTimer = setTimeout(() => {
      showPopup();
    }, pathname === "/" ? 2000 : 4000);

    // Scroll-based trigger (25% of page - more lenient)
    const handleScroll = () => {
      if (scrollTriggered) return;

      const scrollPercentage =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      if (scrollPercentage >= 25) {
        scrollTriggered = true;
        if (initialTimer) clearTimeout(initialTimer);
        showPopup();
      }
    };

    // Time-based trigger (7 seconds on workspace/pricing pages)
    const checkTimeTrigger = () => {
      if (timeTriggered) return;

      const workspacePricingPages = [
        "/pricing",
        "/pricing-bangalore",
        "/workspaces",
        "/workspaces/solo-cabin",
        "/workspaces/day-pass",
        "/workspaces/dedicated-desks",
      ];

      if (workspacePricingPages.includes(pathname)) {
        timeTimer = setTimeout(() => {
          timeTriggered = true;
          if (!scrollTriggered && initialTimer) {
            clearTimeout(initialTimer);
            showPopup();
          }
        }, 7000);
      }
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Start time-based trigger check
    checkTimeTrigger();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimer) clearTimeout(scrollTimer);
      if (timeTimer) clearTimeout(timeTimer);
      if (initialTimer) clearTimeout(initialTimer);
    };
  }, [pathname, hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleClick = () => {
    // Click handler for popup actions
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.9 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 max-w-[calc(100vw-2rem)] sm:max-w-md w-full"
        >
          <div className="relative bg-gradient-to-br from-white via-white to-primary/5 rounded-xl sm:rounded-2xl shadow-2xl border-2 border-primary/30 p-4 sm:p-6 modern-shadow-xl overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-50" />
            
            {/* Close Button - Mobile Optimized */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 p-1.5 sm:p-1.5 rounded-full hover:bg-neutral-100 active:bg-neutral-200 transition-colors z-10 touch-manipulation"
              aria-label="Close popup"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-600" />
            </button>

            {/* Content */}
            <div className="relative z-10 pr-6 sm:pr-8">
              {/* Urgency Badge */}
              <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                </motion.div>
                <span className="badge-modern text-[10px] sm:text-xs bg-red-500">⚠️ Limited Time Offer</span>
              </div>

              <h3 className="text-lg sm:text-2xl font-extrabold text-neutral-900 mb-2 leading-tight">
                Single-Seater Cabins Available — 
                <span className="text-primary"> Special Offer!</span>
              </h3>

              {/* FOMO Countdown - Mobile Optimized */}
              <div className="mb-3 sm:mb-4 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-red-50 border border-red-200">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-600" />
                  <span className="text-[10px] sm:text-xs font-semibold text-red-600 uppercase">Offer Expires In:</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-lg font-bold text-red-700">
                  <span className="bg-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-base">{String(timeLeft.hours).padStart(2, "0")}</span>
                  <span>:</span>
                  <span className="bg-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-base">{String(timeLeft.minutes).padStart(2, "0")}</span>
                  <span>:</span>
                  <span className="bg-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-base">{String(timeLeft.seconds).padStart(2, "0")}</span>
                </div>
              </div>

              {/* Offer Details - Mobile Optimized */}
              <div className="mb-3 sm:mb-4 p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-primary/10 border border-primary/20">
                <p className="text-xs sm:text-sm font-semibold text-neutral-900 mb-1.5 sm:mb-2">🎯 Today's Special:</p>
                <ul className="text-[10px] sm:text-xs text-neutral-700 space-y-0.5 sm:space-y-1">
                  <li className="flex items-center gap-1.5 sm:gap-2">
                    <span className="text-primary text-xs">✓</span>
                    <span>Starting at <strong className="text-primary">₹6,999/month</strong></span>
                  </li>
                  <li className="flex items-center gap-1.5 sm:gap-2">
                    <span className="text-primary text-xs">✓</span>
                    <span>Move-in within <strong>24 hours</strong></span>
                  </li>
                  <li className="flex items-center gap-1.5 sm:gap-2">
                    <span className="text-primary text-xs">✓</span>
                    <span><strong>Only 3 spots left</strong> this month!</span>
                  </li>
                </ul>
              </div>

              {/* Video Preview - Mobile Optimized */}
              {!showVideo ? (
                <div 
                  className="mb-3 sm:mb-4 rounded-lg sm:rounded-xl overflow-hidden cursor-pointer group relative"
                  onClick={() => setShowVideo(true)}
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/10 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center shadow-lg"
                      >
                        <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-0.5 sm:ml-1" />
                      </motion.div>
                    </div>
                    <div className="absolute bottom-1.5 sm:bottom-2 left-1.5 sm:left-2 bg-black/60 text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                      Watch Solo Cabin Tour
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mb-3 sm:mb-4 rounded-lg sm:rounded-xl overflow-hidden">
                  <video
                    className="w-full h-auto"
                    controls
                    autoPlay
                    preload="metadata"
                    playsInline
                    poster="/images/solo-cabin-workspace.jpg"
                  >
                    <source src="/solo-cabin-tour.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}

              <p className="text-xs sm:text-sm text-neutral-600 mb-3 sm:mb-4 leading-relaxed">
                <strong className="text-primary">Quiet, private space ready for booking.</strong> Perfect for entrepreneurs who need focus and productivity. 
                <span className="block mt-1 text-red-600 font-semibold text-[11px] sm:text-sm">⚡ Don't miss out - Only 3 spots remaining!</span>
              </p>

              {/* CTA Buttons - Mobile Optimized */}
              <div className="flex flex-col gap-2 sm:gap-3">
                <Link
                  href="/workspaces/solo-cabin"
                  onClick={handleClick}
                  className="btn-modern rounded-lg sm:rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-white font-bold text-sm sm:text-base hover:scale-105 transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 shadow-xl touch-manipulation"
                >
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                  See Special Offer
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link
                  href="https://wa.me/917022780310?text=I'm interested in the Single-Seater Cabin special offer at Spacio Workspace - I want to book now!"
                  onClick={handleClick}
                  className="rounded-lg sm:rounded-xl border-2 border-primary bg-white px-4 sm:px-6 py-3 sm:py-4 text-primary font-bold text-sm sm:text-base hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 shadow-lg touch-manipulation"
                >
                  🚀 Book Now - Limited Spots!
                </Link>
              </div>
            </div>

            {/* Decorative gradient accent */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-red-500 to-primary rounded-b-2xl" />
            
            {/* Pulsing glow effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-primary/10"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

