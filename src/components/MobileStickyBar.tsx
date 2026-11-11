"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { whatsappUrl } from "@/lib/site";
import { WA } from "@/lib/whatsapp-messages";
import { trackWhatsAppClick } from "@/lib/tracking";

/** Mobile sticky conversion bar — orange brand; tracking events unchanged. */
export function MobileStickyBar() {
  const pathname = usePathname();
  const hideOnForm =
    pathname?.startsWith("/book-tour") && !pathname.includes("thank-you");

  if (hideOnForm) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 lg:hidden border-t border-neutral-200 bg-white/95 backdrop-blur-md px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(0,0,0,0.06)]"
      role="navigation"
      aria-label="Quick contact"
    >
      <div className="mx-auto max-w-lg grid grid-cols-2 gap-2">
        <a
          href={whatsappUrl(WA.general)}
          onClick={() => trackWhatsAppClick("mobile_sticky_whatsapp")}
          className="inline-flex items-center justify-center min-h-[48px] rounded-xl bg-[#25D366] px-3 text-sm font-semibold text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
        <Link
          href="/book-tour"
          className="inline-flex items-center justify-center min-h-[48px] rounded-xl bg-primary px-3 text-sm font-semibold text-white shadow-md shadow-primary/25"
        >
          Schedule a Tour
        </Link>
      </div>
    </div>
  );
}
