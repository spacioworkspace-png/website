"use client";

import { CustomerTestimonialVideo } from "@/components/CustomerTestimonialVideo";
import { TestimonialVideoJsonLd } from "@/components/TestimonialVideoJsonLd";
import { CUSTOMER_TESTIMONIALS } from "@/lib/testimonials";

type MemberTestimonialsSectionProps = {
  pagePath?: string;
  /** Show only testimonials relevant to a plan page */
  planId?: string;
  /** Show specific testimonials by id */
  testimonialIds?: string[];
  className?: string;
};

export function MemberTestimonialsSection({
  pagePath = "/",
  planId,
  testimonialIds,
  className = "",
}: MemberTestimonialsSectionProps) {
  const testimonials = testimonialIds
    ? CUSTOMER_TESTIMONIALS.filter((item) => testimonialIds.includes(item.id))
    : planId
      ? CUSTOMER_TESTIMONIALS.filter((item) => item.relatedPlanIds.includes(planId))
      : CUSTOMER_TESTIMONIALS;

  if (testimonials.length === 0) return null;

  const headingId = planId ? `member-testimonials-${planId}` : "member-testimonials";

  return (
    <section
      id="member-testimonials"
      aria-labelledby={headingId}
      className={`scroll-mt-24 border-y border-neutral-100 bg-white py-12 md:py-16 ${className}`}
    >
      <TestimonialVideoJsonLd testimonials={testimonials} pagePath={pagePath} />

      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center mb-10 md:mb-12">
          <span className="badge-premium mb-3 inline-block text-xs sm:text-sm">Member stories</span>
          <h2 id={headingId} className="text-2xl sm:text-3xl font-bold text-neutral-900">
            What our members say
          </h2>
          <p className="mt-3 text-neutral-700 leading-relaxed">
            Real experiences from people who work at Spacio Workspace, our coworking space in Basavanagudi,
            South Bangalore.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 md:gap-8 lg:gap-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="card-premium rounded-2xl border border-neutral-200 bg-white p-4 sm:p-6"
            >
              <CustomerTestimonialVideo testimonial={testimonial} preload="none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
