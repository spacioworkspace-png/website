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
    <section className="mx-auto max-w-4xl px-4 py-16 md:py-20">
      <JsonLd data={faqJsonLd(items)} />
      <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-8 text-center">
        {title}
      </h2>
      <dl className="space-y-4">
        {items.map((item) => (
          <div
            key={item.q}
            className="rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6"
          >
            <dt className="font-semibold text-neutral-900 text-lg">{item.q}</dt>
            <dd className="mt-2 text-neutral-700 leading-relaxed">{item.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
