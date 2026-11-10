import { JsonLd } from "./JsonLd";
import { faqJsonLd } from "@/lib/schema";

export function FaqSection({
  items,
  title = "Questions people ask",
}: {
  items: { q: string; a: string }[];
  title?: string;
}) {
  if (!items.length) return null;

  return (
    <section className="mx-auto max-w-3xl px-4 py-16 md:py-24 sm:px-6" aria-labelledby="faq-heading">
      <JsonLd data={faqJsonLd(items)} />
      <h2 id="faq-heading" className="section-title text-3xl md:text-4xl text-center mb-10">
        {title}
      </h2>
      <div className="space-y-3">
        {items.map((item) => (
          <details
            key={item.q}
            className="group border border-[var(--warm-stone)] bg-[var(--soft-white)] open:bg-white"
          >
            <summary className="cursor-pointer list-none px-5 py-4 md:px-6 md:py-5 font-medium text-[var(--primary-navy)] flex items-center justify-between gap-4">
              <span>{item.q}</span>
              <span
                className="text-[var(--champagne)] text-xl leading-none transition-transform group-open:rotate-45"
                aria-hidden
              >
                +
              </span>
            </summary>
            <div className="px-5 pb-5 md:px-6 md:pb-6 text-[var(--muted-grey)] leading-relaxed border-t border-[var(--warm-stone)] pt-4">
              {item.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
