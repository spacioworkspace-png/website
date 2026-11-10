"use client";

import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { PHONE_HREF, whatsappUrl } from "@/lib/site";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/tracking";

type CtaVariant = "primary" | "outline" | "header";

const variantClass: Record<CtaVariant, string> = {
  primary:
    "rounded-sm bg-[var(--primary-navy)] px-6 py-3 text-white font-semibold hover:bg-[var(--navy-deep)] transition-colors inline-flex items-center justify-center gap-2 min-h-[44px]",
  outline:
    "rounded-sm border border-[var(--primary-navy)]/30 px-6 py-3 text-[var(--primary-navy)] font-semibold hover:border-[var(--primary-navy)] hover:bg-[var(--warm-stone)] transition-colors inline-flex items-center justify-center gap-2 min-h-[44px]",
  header:
    "rounded-sm border border-[var(--primary-navy)]/30 px-4 py-2.5 text-sm font-semibold text-[var(--primary-navy)] hover:bg-[var(--warm-stone)] transition-colors inline-flex items-center justify-center gap-2 min-h-[44px]",
};

type WhatsAppLinkProps = {
  message?: string;
  location: string;
  children?: React.ReactNode;
  className?: string;
  variant?: CtaVariant;
};

export function WhatsAppLink({
  message,
  location,
  children = "WhatsApp",
  className = "",
  variant = "primary",
}: WhatsAppLinkProps) {
  return (
    <a
      href={whatsappUrl(message)}
      onClick={() => trackWhatsAppClick(location)}
      className={`${variantClass[variant]} ${className}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${typeof children === "string" ? children : "WhatsApp"} (opens in a new window)`}
    >
      <MessageCircle className="w-5 h-5 shrink-0" aria-hidden />
      {children}
    </a>
  );
}

type CallLinkProps = {
  location: string;
  children?: React.ReactNode;
  className?: string;
  variant?: CtaVariant;
};

export function CallLink({
  location,
  children = "Call Us",
  className = "",
  variant = "outline",
}: CallLinkProps) {
  return (
    <a
      href={PHONE_HREF}
      onClick={() => trackPhoneClick(location)}
      className={`${variantClass[variant]} ${className}`}
    >
      <Phone className="w-5 h-5 shrink-0" aria-hidden />
      {children}
    </a>
  );
}

type ContactCtaPairProps = {
  whatsappMessage?: string;
  location: string;
  whatsappLabel?: string;
  callLabel?: string;
  className?: string;
  whatsappVariant?: CtaVariant;
  callVariant?: CtaVariant;
};

/** WhatsApp + Call side by side — use wherever both contact options belong together. */
export function ContactCtaPair({
  whatsappMessage,
  location,
  whatsappLabel = "WhatsApp",
  callLabel = "Call Us",
  className = "",
  whatsappVariant = "primary",
  callVariant = "outline",
}: ContactCtaPairProps) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <WhatsAppLink message={whatsappMessage} location={location} variant={whatsappVariant}>
        {whatsappLabel}
      </WhatsAppLink>
      <CallLink location={location} variant={callVariant}>
        {callLabel}
      </CallLink>
    </div>
  );
}

type HeroContactRowProps = {
  whatsappMessage?: string;
  location: string;
  bookTourHref?: string;
  bookTourLabel?: string;
  whatsappLabel?: string;
  callLabel?: string;
  className?: string;
};

/** Hero pattern: WhatsApp + Call + optional book-tour link. */
export function HeroContactRow({
  whatsappMessage,
  location,
  bookTourHref = "/book-tour",
  bookTourLabel = "Book Free Tour",
  whatsappLabel = "WhatsApp to Book",
  callLabel = "Call Us",
  className = "",
}: HeroContactRowProps) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <WhatsAppLink message={whatsappMessage} location={`${location}-whatsapp`}>
        {whatsappLabel}
      </WhatsAppLink>
      <CallLink location={`${location}-call`}>{callLabel}</CallLink>
      <Link
        href={bookTourHref}
        className="rounded-sm border border-[var(--primary-navy)]/30 px-6 py-3 text-[var(--primary-navy)] font-semibold hover:bg-[var(--warm-stone)] transition-colors inline-flex items-center justify-center gap-2 min-h-[44px]"
      >
        {bookTourLabel}
      </Link>
    </div>
  );
}
