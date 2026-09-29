"use client";

import Link from "next/link";
import { Home, MessageCircle, Phone, RefreshCw } from "lucide-react";
import { PHONE_HREF, whatsappUrl } from "@/lib/site";

/**
 * App Router error boundary — keeps a crawlable shell if a route segment fails
 * (e.g. during host maintenance or a transient render error).
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[70vh] bg-gradient-to-br from-primary/5 via-white to-neutral-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-lg w-full text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-3">
          Something went wrong
        </h1>
        <p className="text-neutral-600 mb-2 leading-relaxed">
          Spacio Workspace is still here — this page hit a temporary glitch. You can retry, go home,
          or reach us directly.
        </p>
        {error?.digest ? (
          <p className="text-xs text-neutral-400 mb-6">Ref: {error.digest}</p>
        ) : (
          <div className="mb-6" />
        )}

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 mb-8">
          <button
            type="button"
            onClick={reset}
            className="rounded-xl bg-primary px-6 py-3 text-white font-semibold hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2 min-h-[48px]"
          >
            <RefreshCw className="w-5 h-5" aria-hidden />
            Try again
          </button>
          <Link
            href="/"
            className="rounded-xl border-2 border-primary px-6 py-3 text-primary font-semibold hover:bg-primary/5 transition-colors inline-flex items-center justify-center gap-2 min-h-[48px]"
          >
            <Home className="w-5 h-5" aria-hidden />
            Homepage
          </Link>
        </div>

        <nav aria-label="Helpful links" className="text-sm text-neutral-600 mb-8">
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            <li>
              <Link href="/pricing" className="hover:text-primary">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/workspaces" className="hover:text-primary">
                Workspaces
              </Link>
            </li>
            <li>
              <Link href="/book-tour" className="hover:text-primary">
                Book a tour
              </Link>
            </li>
            <li>
              <Link href="/locations/basavanagudi" className="hover:text-primary">
                Basavanagudi
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={whatsappUrl("Hi! The website had an error — I'd like help from Spacio Workspace")}
            className="inline-flex items-center gap-2 text-primary font-semibold min-h-[44px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="w-5 h-5" aria-hidden />
            WhatsApp
          </a>
          <a href={PHONE_HREF} className="inline-flex items-center gap-2 text-primary font-semibold min-h-[44px]">
            <Phone className="w-5 h-5" aria-hidden />
            Call +91 70227 80310
          </a>
        </div>
      </div>
    </div>
  );
}
