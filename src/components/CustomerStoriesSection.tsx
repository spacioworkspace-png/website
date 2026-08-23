"use client";

import { CustomerTestimonialVideo } from "@/components/CustomerTestimonialVideo";
import { TestimonialVideoJsonLd } from "@/components/TestimonialVideoJsonLd";
import { CUSTOMER_TESTIMONIALS } from "@/lib/testimonials";

/** Customer Stories — separate from workspace tour videos on the gallery page. */
export function CustomerStoriesSection() {
  return (
    <section
      id="customer-stories"
      aria-labelledby="customer-stories-heading"
      className="scroll-mt-24 border-t border-neutral-200 pt-12 md:pt-16"
    >
      <TestimonialVideoJsonLd testimonials={CUSTOMER_TESTIMONIALS} pagePath="/gallery" />

      <div className="text-center mb-8 md:mb-10">
        <span className="badge-premium mb-3 inline-block">Customer stories</span>
        <h2 id="customer-stories-heading" className="text-2xl sm:text-3xl font-bold text-neutral-900">
          What our members say
        </h2>
        <p className="mt-3 text-neutral-700 max-w-2xl mx-auto leading-relaxed">
          Genuine member videos — not workspace walkthroughs. Hear why teams choose Spacio Workspace
          in Basavanagudi.
        </p>
      </div>

      <div className="space-y-10">
        {CUSTOMER_TESTIMONIALS.map((testimonial) => (
          <article
            key={testimonial.id}
            className="rounded-2xl border-2 border-primary/15 bg-gradient-to-br from-primary/5 to-white p-4 sm:p-6"
          >
            <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-start">
              <div className="lg:order-2">
                <CustomerTestimonialVideo testimonial={testimonial} preload="none" showStoryHeading={false} />
              </div>
              <div className="lg:order-1 flex flex-col justify-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                  Member testimonial
                </p>
                <h3 className="text-xl font-bold text-neutral-900">{testimonial.title}</h3>
                {[testimonial.name, testimonial.company].filter(Boolean).length > 0 ? (
                  <p className="mt-2 text-base font-semibold text-neutral-900">
                    {[testimonial.name, testimonial.company].filter(Boolean).join(" — ")}
                  </p>
                ) : null}
                <p className="mt-3 text-sm text-neutral-700 leading-relaxed">{testimonial.summary}</p>
                <p className="mt-2 text-xs text-neutral-500">{testimonial.durationLabel}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
