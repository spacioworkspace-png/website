import Link from "next/link";
import { WorkspaceVideoTour } from "@/components/WorkspaceVideoTour";
import { CustomerTestimonialVideo } from "@/components/CustomerTestimonialVideo";
import { TestimonialVideoJsonLd } from "@/components/TestimonialVideoJsonLd";
import { OVERVIEW_VIDEO_TOUR } from "@/lib/site";
import { CUSTOMER_TESTIMONIALS } from "@/lib/testimonials";

export function HomeVideoShowcase() {
  return (
    <section
      id="video-experience"
      aria-labelledby="video-experience-heading"
      className="cv-auto scroll-mt-24 border-y border-neutral-100 bg-neutral-50 py-14 md:py-20"
    >
      <TestimonialVideoJsonLd testimonials={CUSTOMER_TESTIMONIALS} pagePath="/" />

      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center mb-10 md:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            Workspace tour
          </p>
          <h2 id="video-experience-heading" className="text-3xl md:text-4xl font-bold text-neutral-900">
            Watch the workspace tour
          </h2>
          <p className="mt-3 text-neutral-600 leading-relaxed">
            A centre walkthrough and member stories — see the space before you visit.
          </p>
        </div>

        <div className="mb-12 max-w-4xl mx-auto">
          <WorkspaceVideoTour
            id="home-overview-tour"
            src={OVERVIEW_VIDEO_TOUR.src}
            poster={OVERVIEW_VIDEO_TOUR.poster}
            title={OVERVIEW_VIDEO_TOUR.title}
            description={OVERVIEW_VIDEO_TOUR.description}
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {CUSTOMER_TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-2xl border border-neutral-200 bg-white p-4 sm:p-6"
            >
              <CustomerTestimonialVideo testimonial={testimonial} preload="none" />
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-neutral-600">
          Prefer to see it in person?{" "}
          <Link href="/book-tour" className="font-semibold text-primary hover:underline">
            Book a private tour
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
