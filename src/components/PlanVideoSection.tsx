import Link from "next/link";
import { WorkspaceVideoTour } from "@/components/WorkspaceVideoTour";
import { OVERVIEW_VIDEO_TOUR, PLANS, getPlan } from "@/lib/site";

type PlanVideoSectionProps = {
  /** Plan id from site.ts — omit for centre overview tour */
  planId?: string;
  /** Show links to every plan tour below the main video */
  showAllTours?: boolean;
  className?: string;
};

export function PlanVideoSection({
  planId,
  showAllTours = false,
  className = "",
}: PlanVideoSectionProps) {
  const plan = planId ? getPlan(planId) : null;
  const video = plan
    ? {
        id: `video-tour-${plan.id}`,
        src: plan.videoTour,
        poster: plan.image,
        title: `${plan.name} video tour`,
        description: `See the ${plan.name.toLowerCase()} at Spacio Workspace, Basavanagudi before you visit or book.`,
        meta: `${plan.price} ${plan.unitLabel}`,
      }
    : {
        id: "video-tour-overview",
        src: OVERVIEW_VIDEO_TOUR.src,
        poster: OVERVIEW_VIDEO_TOUR.poster,
        title: OVERVIEW_VIDEO_TOUR.title,
        description: OVERVIEW_VIDEO_TOUR.description,
      };

  const otherTours = planId
    ? PLANS.filter((p) => p.id !== planId)
    : PLANS;

  return (
    <section
      id="video-tour"
      aria-labelledby={`${video.id}-heading`}
      className={`scroll-mt-24 py-12 md:py-16 bg-neutral-50 border-y border-neutral-100 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <a
          href="#video-tour-player"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:z-10 focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:shadow"
        >
          Skip to video tour
        </a>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <span className="badge-premium mb-3 inline-block text-xs sm:text-sm">Video tour</span>
            <h2 id={`${video.id}-heading`} className="text-2xl sm:text-3xl font-bold text-neutral-900">
              {plan ? `Watch the ${plan.name} tour` : "Watch the centre tour"}
            </h2>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              {plan
                ? `Explore the ${plan.name.toLowerCase()} at our Basavanagudi centre from your phone or laptop. When you are ready, book a free visit to see it in person.`
                : "Explore Spacio Workspace in Basavanagudi before you visit. Each plan below has its own walkthrough video."}
            </p>
            <ul className="mt-5 space-y-2 text-sm text-neutral-700">
              <li>▸ Native player controls — play, pause, volume, fullscreen</li>
              <li>▸ Works on mobile — tap to play, no app required</li>
              <li>▸ {plan ? "Prefer in person?" : "Ready to visit?"} Book a free tour anytime</li>
            </ul>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href="/book-tour"
                className="inline-flex items-center justify-center min-h-[44px] rounded-xl bg-primary px-5 py-3 text-white font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                Book a Free Tour
              </Link>
              {plan ? (
                <Link
                  href={plan.path}
                  className="inline-flex items-center justify-center min-h-[44px] rounded-xl border border-neutral-300 px-5 py-3 text-neutral-900 font-semibold text-sm hover:border-primary hover:text-primary transition-colors"
                >
                  View {plan.name} details
                </Link>
              ) : (
                <Link
                  href="/workspaces"
                  className="inline-flex items-center justify-center min-h-[44px] rounded-xl border border-neutral-300 px-5 py-3 text-neutral-900 font-semibold text-sm hover:border-primary hover:text-primary transition-colors"
                >
                  Explore all plans
                </Link>
              )}
            </div>
          </div>

          <div id="video-tour-player">
            <WorkspaceVideoTour {...video} />
          </div>
        </div>

        {(showAllTours || !planId) && otherTours.length > 0 ? (
          <div className="mt-12 pt-10 border-t border-neutral-200">
            <h3 className="text-lg font-bold text-neutral-900 mb-4">More workspace video tours</h3>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {!planId ? null : (
                <li>
                  <Link
                    href="/tour#video-tour"
                    className="block rounded-xl border border-primary/30 bg-primary/5 px-4 py-3 text-sm font-semibold text-primary hover:bg-primary/10 transition-colors min-h-[44px] flex items-center"
                  >
                    Centre overview tour
                  </Link>
                </li>
              )}
              {otherTours.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`${item.path}#video-tour`}
                    className="flex flex-col rounded-xl border border-neutral-200 bg-white px-4 py-3 hover:border-primary hover:shadow-sm transition-all min-h-[44px] justify-center"
                  >
                    <span className="text-sm font-semibold text-neutral-900">{item.name} tour</span>
                    <span className="text-xs text-neutral-500 mt-0.5">{item.price} {item.unitLabel}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
