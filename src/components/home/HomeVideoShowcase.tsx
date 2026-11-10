import Link from "next/link";
import { WorkspaceVideoTour } from "@/components/WorkspaceVideoTour";
import { CustomerTestimonialVideo } from "@/components/CustomerTestimonialVideo";
import { TestimonialVideoJsonLd } from "@/components/TestimonialVideoJsonLd";
import { Reveal } from "@/components/Reveal";
import { OVERVIEW_VIDEO_TOUR } from "@/lib/site";
import { CUSTOMER_TESTIMONIALS } from "@/lib/testimonials";

export function HomeVideoShowcase() {
  return (
    <section
      id="video-experience"
      aria-labelledby="video-experience-heading"
      className="scroll-mt-24 border-y border-[var(--warm-stone)] bg-[var(--ivory)] py-16 md:py-24"
    >
      <TestimonialVideoJsonLd testimonials={CUSTOMER_TESTIMONIALS} pagePath="/" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center mb-10 md:mb-14">
          <p className="eyebrow text-[var(--primary)] mb-4">A closer look</p>
          <h2 id="video-experience-heading" className="section-title text-3xl md:text-5xl">
            A closer look at Spacio.
          </h2>
          <p className="mt-4 text-[var(--muted-grey)] leading-relaxed">
            Walk through the centre, then hear from members who work here every day.
          </p>
        </Reveal>

        <Reveal>
          <div className="mb-12 max-w-4xl mx-auto overflow-hidden border border-[var(--warm-stone)] bg-[var(--soft-white)]">
            <WorkspaceVideoTour
              id="home-overview-tour"
              src={OVERVIEW_VIDEO_TOUR.src}
              poster={OVERVIEW_VIDEO_TOUR.poster}
              title={OVERVIEW_VIDEO_TOUR.title}
              description={OVERVIEW_VIDEO_TOUR.description}
            />
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {CUSTOMER_TESTIMONIALS.map((testimonial, i) => (
            <Reveal key={testimonial.id} delay={i * 80}>
              <div className="border border-[var(--warm-stone)] bg-[var(--soft-white)] p-3 sm:p-5">
                <CustomerTestimonialVideo testimonial={testimonial} preload="none" />
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-[var(--muted-grey)]">
          Prefer to see it in person?{" "}
          <Link href="/book-tour" className="font-semibold text-[var(--primary-navy)] hover:underline">
            Schedule a private tour
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
