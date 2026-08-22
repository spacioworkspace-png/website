import Link from "next/link";
import { WorkspaceVideoTour } from "@/components/WorkspaceVideoTour";
import { getAllVideoTours } from "@/lib/site";

/** Full library of centre + plan video tours — for gallery and hub pages. */
export function VideoTourLibrary() {
  const tours = getAllVideoTours();

  return (
    <section id="video-tours" aria-labelledby="video-tours-heading" className="scroll-mt-24">
      <div className="text-center mb-8">
        <span className="badge-premium mb-3 inline-block">Video tours</span>
        <h2 id="video-tours-heading" className="text-2xl sm:text-3xl font-bold text-neutral-900">
          Watch every workspace at Spacio
        </h2>
        <p className="mt-3 text-neutral-700 max-w-2xl mx-auto">
          Each plan has its own walkthrough. Pick the space that fits you, then book a free in-person tour.
        </p>
      </div>

      <div className="space-y-10">
        {tours.map((tour, index) => (
          <article
            key={tour.id}
            id={tour.id === "overview" ? "video-tour" : `video-tour-${tour.id}`}
            className="scroll-mt-24 rounded-2xl border border-neutral-200 bg-white p-4 sm:p-6"
          >
            <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                  {index === 0 ? "Start here" : "Plan tour"}
                </p>
                <h3 className="text-xl font-bold text-neutral-900">{tour.title}</h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{tour.description}</p>
                {"path" in tour && tour.path ? (
                  <Link
                    href={tour.path}
                    className="mt-4 inline-flex min-h-[44px] items-center text-sm font-semibold text-primary hover:underline"
                  >
                    View plan details →
                  </Link>
                ) : null}
              </div>
              <WorkspaceVideoTour
                id={`library-video-${tour.id}`}
                src={tour.src}
                poster={tour.poster}
                title={tour.title}
                description={tour.description}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
