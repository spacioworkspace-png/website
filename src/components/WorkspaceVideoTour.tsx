import Link from "next/link";
import { PHONE_DISPLAY, PHONE_HREF, whatsappUrl } from "@/lib/site";

export type VideoTourProps = {
  id?: string;
  src: string;
  poster: string;
  title: string;
  description: string;
  /** Shown under the player — e.g. plan price */
  meta?: string;
};

export function WorkspaceVideoTour({
  id = "workspace-video-tour",
  src,
  poster,
  title,
  description,
  meta,
}: VideoTourProps) {
  const titleId = `${id}-title`;
  const descId = `${id}-description`;

  return (
    <figure className="w-full">
      <div className="aspect-video w-full overflow-hidden rounded-xl border border-neutral-200 bg-neutral-950 shadow-sm">
        <video
          id={id}
          className="h-full w-full object-cover"
          controls
          playsInline
          preload="metadata"
          poster={poster}
          aria-labelledby={titleId}
          aria-describedby={descId}
        >
          <source src={src} type="video/mp4" />
          <p className="p-4 text-sm text-white">
            Your browser does not support embedded video.{" "}
            <a href={src} className="underline">
              Open or download the tour video
            </a>{" "}
            or{" "}
            <Link href="/book-tour" className="underline">
              book a free in-person tour
            </Link>
            .
          </p>
        </video>
      </div>

      <figcaption className="mt-3 space-y-2">
        <p id={titleId} className="text-base font-semibold text-neutral-900">
          {title}
        </p>
        <p id={descId} className="text-sm text-neutral-600 leading-relaxed">
          {description}
        </p>
        {meta ? <p className="text-sm font-medium text-primary">{meta}</p> : null}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1 text-xs text-neutral-500">
          <span>Use player controls for play, pause, volume, and fullscreen.</span>
          <a href={src} download className="text-primary font-medium hover:underline min-h-[44px] inline-flex items-center">
            Download tour video
          </a>
          <Link href="/book-tour" className="text-primary font-medium hover:underline min-h-[44px] inline-flex items-center">
            Book a free in-person tour
          </Link>
          <a href={PHONE_HREF} className="text-primary font-medium hover:underline min-h-[44px] inline-flex items-center">
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </figcaption>
    </figure>
  );
}
