import Link from "next/link";
import { ArrowRight } from "lucide-react";

type RelatedLink = {
  href: string;
  label: string;
};

export function RelatedPlans({
  links,
}: {
  links: RelatedLink[];
}) {
  return (
    <section className="py-16 bg-white border-t border-neutral-100">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-3 text-center">
          Other plans at Basavanagudi
        </h2>
        <p className="text-neutral-600 text-center mb-8">
          Compare workspace options, then book a tour or contact us.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl border-2 border-neutral-200 px-4 py-2.5 text-sm font-semibold text-neutral-800 hover:border-primary hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book-tour"
            className="rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary/90 transition-colors inline-flex items-center gap-1.5"
          >
            Book a free tour
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="rounded-xl border-2 border-primary px-4 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
