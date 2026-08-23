"use client";

import Link from "next/link";
import type { CustomerTestimonial } from "@/lib/testimonials";

type CustomerTestimonialVideoProps = {
  testimonial: CustomerTestimonial;
  /** Portrait member videos — default true */
  portrait?: boolean;
  preload?: "none" | "metadata";
  showExploreLink?: boolean;
  showStoryHeading?: boolean;
};

export function CustomerTestimonialVideo({
  testimonial,
  portrait = true,
  preload = "none",
  showExploreLink = true,
  showStoryHeading = true,
}: CustomerTestimonialVideoProps) {
  const videoId = `testimonial-${testimonial.id}`;
  const titleId = `${videoId}-title`;
  const summaryId = `${videoId}-summary`;
  const transcriptId = `${videoId}-transcript`;

  const byline = [testimonial.name, testimonial.company].filter(Boolean).join(" — ");

  return (
    <article
      id={videoId}
      aria-labelledby={titleId}
      className="scroll-mt-24"
    >
      {showStoryHeading ? (
        <header className="mb-4">
          <h3 className="text-lg font-bold text-neutral-900">Customer story</h3>
          {byline ? (
            <p className="mt-1 text-base font-semibold text-neutral-900">{byline}</p>
          ) : null}
          {testimonial.role ? (
            <p className="text-sm text-neutral-600">{testimonial.role}</p>
          ) : null}
          <p id={summaryId} className="mt-3 text-sm text-neutral-700 leading-relaxed">
            {testimonial.summary}
          </p>
        </header>
      ) : null}

      <figure className="w-full">
        <div
          className={`relative w-full overflow-hidden rounded-xl border border-neutral-200 bg-neutral-950 shadow-sm ${
            portrait ? "mx-auto max-w-sm aspect-[478/850]" : "aspect-video"
          }`}
        >
          <video
            className="h-full w-full object-cover"
            controls
            playsInline
            preload={preload}
            poster={testimonial.poster}
            aria-labelledby={titleId}
            aria-describedby={summaryId}
          >
            <source src={testimonial.videoSrc} type="video/mp4" />
            <p className="p-4 text-sm text-white">
              Your browser does not support embedded video.{" "}
              <a href={testimonial.videoSrc} className="underline">
                Open the testimonial video
              </a>
              .
            </p>
          </video>
          <span className="pointer-events-none absolute bottom-3 right-3 rounded-md bg-black/70 px-2 py-1 text-xs font-medium text-white">
            {testimonial.durationLabel}
          </span>
        </div>

        <figcaption className="mt-3 space-y-3">
          <p id={titleId} className="text-base font-semibold text-neutral-900">
            {testimonial.title}
          </p>
          <p className="text-sm text-neutral-600 leading-relaxed">{testimonial.description}</p>

          <details className="group rounded-xl border border-neutral-200 bg-neutral-50/80">
            <summary className="cursor-pointer list-none px-4 py-3 text-sm font-semibold text-neutral-900 min-h-[44px] flex items-center justify-between [&::-webkit-details-marker]:hidden">
              Read transcript
              <span className="text-neutral-500 group-open:rotate-180 transition-transform" aria-hidden>
                ▾
              </span>
            </summary>
            <div
              id={transcriptId}
              className="border-t border-neutral-200 px-4 py-4 text-sm text-neutral-700 leading-relaxed whitespace-pre-wrap"
            >
              {testimonial.transcript}
            </div>
          </details>

          {showExploreLink ? (
            <Link
              href={testimonial.exploreLink.href}
              className="inline-flex min-h-[44px] items-center text-sm font-semibold text-primary hover:underline"
            >
              {testimonial.exploreLink.label} →
            </Link>
          ) : null}
        </figcaption>
      </figure>
    </article>
  );
}
