"use client";

import { videoObjectJsonLd } from "@/lib/schema";
import type { CustomerTestimonial } from "@/lib/testimonials";

type TestimonialVideoJsonLdProps = {
  testimonials: CustomerTestimonial[];
  pagePath: string;
};

export function TestimonialVideoJsonLd({ testimonials, pagePath }: TestimonialVideoJsonLdProps) {
  if (testimonials.length === 0) return null;

  return (
    <>
      {testimonials.map((testimonial) => (
        <script
          key={`video-schema-${testimonial.id}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(videoObjectJsonLd(testimonial, pagePath)),
          }}
        />
      ))}
    </>
  );
}
