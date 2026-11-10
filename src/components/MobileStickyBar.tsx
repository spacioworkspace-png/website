"use client";

import Link from "next/link";
import { whatsappUrl } from "@/lib/site";
import { WA } from "@/lib/whatsapp-messages";
import { trackWhatsAppClick } from "@/lib/tracking";

/** Mobile sticky conversion bar — WhatsApp + Book a Tour */
export function MobileStickyBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 lg:hidden border-t border-[var(--warm-stone)] bg-[var(--ivory)]/95 backdrop-blur-md px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]"
      role="navigation"
      aria-label="Quick contact"
    >
      <div className="mx-auto max-w-lg grid grid-cols-2 gap-2">
        <a
          href={whatsappUrl(WA.general)}
          onClick={() => trackWhatsAppClick("mobile_sticky_whatsapp")}
          className="inline-flex items-center justify-center min-h-[48px] rounded-sm bg-[#25D366] px-3 text-sm font-semibold text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp Us
        </a>
        <Link
          href="/book-tour"
          className="inline-flex items-center justify-center min-h-[48px] rounded-sm bg-[var(--primary-navy)] px-3 text-sm font-semibold text-white"
        >
          Book a Tour
        </Link>
      </div>
    </div>
  );
}
