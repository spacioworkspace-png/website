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
    <section className="mx-auto max-w-4xl px-4 py-16 md:py-20" aria-labelledby="faq-heading">
      <JsonLd data={faqJsonLd(items)} />
      <h2 id="faq-heading" className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-8 text-center">
        {title}
      </h2>
      <div className="space-y-3">
        {items.map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl border border-neutral-200 bg-white open:border-primary/30 open:bg-gradient-to-br open:from-white open:to-[var(--orange-soft)] shadow-sm"
          >
            <summary className="cursor-pointer list-none px-5 py-4 sm:px-6 sm:py-5 font-semibold text-neutral-900 text-base sm:text-lg flex items-center justify-between gap-4 min-h-[52px]">
              <span>{item.q}</span>
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xl leading-none transition-transform group-open:rotate-45"
                aria-hidden
              >
                +
              </span>
            </summary>
            <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-neutral-700 leading-relaxed border-t border-neutral-100 pt-4">
              {item.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
