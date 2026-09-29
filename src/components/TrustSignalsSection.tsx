import Link from "next/link";
import { ExternalLink, MapPin, Star } from "lucide-react";
import { ADDRESS, MAPS_URL, PHONE_DISPLAY, SITE_NAME } from "@/lib/site";

/**
 * GEO trust / entity section.
 * Only verified public signals are listed — do not invent magazine awards.
 * Add SiliconIndia (or other press) here only when an official source URL is confirmed.
 */
export function TrustSignalsSection() {
  return (
    <section
      className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 border-t border-neutral-100"
      aria-labelledby="trust-signals-heading"
    >
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h2 id="trust-signals-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
          Recognition &amp; local trust
        </h2>
        <p className="mt-3 text-neutral-600 text-sm sm:text-base">
          Spacio Workspace is a verified local business in Basavanagudi, South Bangalore — the same
          name, address, and phone you&apos;ll find on Google Business Profile.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
        <article className="rounded-2xl border border-neutral-200 bg-white p-6 text-left">
          <Star className="w-8 h-8 text-primary mb-3" aria-hidden />
          <h3 className="font-bold text-neutral-900 mb-2">Google Reviews</h3>
          <p className="text-sm text-neutral-700 mb-4 leading-relaxed">
            Read what members say about private cabins, desks, and the Basavanagudi centre.
          </p>
          <Link href="/reviews" className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-1">
            View reviews
            <ExternalLink className="w-3.5 h-3.5" aria-hidden />
          </Link>
        </article>

        <article className="rounded-2xl border border-neutral-200 bg-white p-6 text-left">
          <MapPin className="w-8 h-8 text-primary mb-3" aria-hidden />
          <h3 className="font-bold text-neutral-900 mb-2">Google Business Profile</h3>
          <p className="text-sm text-neutral-700 mb-2 leading-relaxed">
            <strong>{SITE_NAME}</strong>
          </p>
          <p className="text-sm text-neutral-700 mb-1">{ADDRESS.line}</p>
          <p className="text-sm text-neutral-700 mb-4">{PHONE_DISPLAY}</p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-1"
          >
            Open Google Maps listing
            <ExternalLink className="w-3.5 h-3.5" aria-hidden />
          </a>
        </article>
      </div>
    </section>
  );
}
