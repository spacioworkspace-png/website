import { SITE_URL } from "./site";

export type CustomerTestimonial = {
  id: string;
  /** Crawlable MP4 path under /public */
  videoSrc: string;
  poster: string;
  /** ISO 8601 duration, e.g. PT43S */
  durationIso: string;
  /** Human-readable duration */
  durationLabel: string;
  /** File date on site assets (YYYY-MM-DD) */
  uploadDate: string;
  name?: string;
  company?: string;
  role?: string;
  title: string;
  description: string;
  summary: string;
  transcript: string;
  /** Plan/service pages where this story is relevant */
  relatedPlanIds: string[];
  exploreLink: { href: string; label: string };
};

function secondsToIsoDuration(totalSeconds: number): string {
  const seconds = Math.round(totalSeconds);
  const minutes = Math.floor(seconds / 60);
  const remainder = seconds % 60;
  if (minutes === 0) return `PT${remainder}S`;
  if (remainder === 0) return `PT${minutes}M`;
  return `PT${minutes}M${remainder}S`;
}

function formatDurationLabel(totalSeconds: number): string {
  const seconds = Math.round(totalSeconds);
  const minutes = Math.floor(seconds / 60);
  const remainder = seconds % 60;
  if (minutes === 0) return `${remainder} sec`;
  return `${minutes} min ${remainder} sec`;
}

/** Genuine member videos in /public — metadata from ffprobe + Whisper transcript (Aug 2026). */
export const CUSTOMER_TESTIMONIALS: CustomerTestimonial[] = [
  {
    id: "private-cabin-member",
    videoSrc: "/video-testimonial-founder.mp4",
    poster: "/images/spacio-workspace-customer-testimonial-private-cabin-basavanagudi.jpg",
    durationIso: secondsToIsoDuration(42.56),
    durationLabel: formatDurationLabel(42.56),
    uploadDate: "2026-08-21",
    title: "Private cabin and customized workspace at Spacio Workspace, Basavanagudi",
    description:
      "A Spacio Workspace member describes private cabin options, power backup, internet, cleanliness, and customized office sizes at the Basavanagudi centre.",
    summary:
      "In this video, a member describes Spacio Workspace in Basavanagudi — mentioning facilities such as power backup, internet, cleanliness, interiors, and customized private cabin sizes from single-seater to team layouts.",
    transcript: `So we are now at Spacio office, a coworking space. So basically office, we have a lot of facilities here. From space size, power backup, internet, cleanliness, interior, customized space available, 5-seater, 10-seater, 8-seater, single-seater. We have a lot of space available, customized space available, all the doors are clean and maintained, accessible, one point of contact is available, so all facilities are available.`,
    relatedPlanIds: ["solo-cabin", "three-seater-cabin", "six-seater-cabin"],
    exploreLink: { href: "/workspaces/solo-cabin", label: "Explore private cabins" },
  },
  {
    id: "team-member-basavanagudi",
    videoSrc: "/video-testimonial-team.mp4",
    poster: "/images/spacio-workspace-customer-testimonial-team-basavanagudi.jpg",
    durationIso: secondsToIsoDuration(72.81),
    durationLabel: formatDurationLabel(72.81),
    uploadDate: "2026-08-21",
    title: "Member experience at Spacio Workspace, Basavanagudi",
    description:
      "A member shares their experience coworking at Spacio Workspace in Basavanagudi for about one and a half years — location, atmosphere, and team space.",
    summary:
      "In this video, a member explains that their team has worked from Spacio Workspace in Basavanagudi for about one and a half years. They mention a cooperative owner, a calm friendly atmosphere, their own workspace, plans for a bigger space, and the centre’s location near the metro in South Bangalore.",
    transcript: `We have been here at Spacio coworking in Basavanagudi for about one and a half years. A very good place, the owner is really good, he is very cooperative and we have never had any issues with him and the place is also very good. Most of the people who come and work here are very, very friendly people. Very cool and calm atmosphere, I think most of them like working here. We have our own space here, in fact we are trying to take a bigger space because the place is really good and it's always been good for us to be here. Location wise it's very ideally placed because the metro is just about a kilometer from here and it's close to Basavanagudi and it's on Vani Vilas Road so it's a prime location. So a very good place I would say they have three floors they don't have vacancies generally it's always you know, when the room gets vacated there's another person already in line so in case you want to come here keep your eyes open when you find something just pack your things and come here and take the place.`,
    relatedPlanIds: ["dedicated-desks", "three-seater-cabin", "six-seater-cabin"],
    exploreLink: { href: "/workspaces", label: "Explore workspaces" },
  },
];

export function getTestimonial(id: string): CustomerTestimonial | undefined {
  return CUSTOMER_TESTIMONIALS.find((item) => item.id === id);
}

export function getTestimonialsForPlan(planId: string): CustomerTestimonial[] {
  return CUSTOMER_TESTIMONIALS.filter((item) => item.relatedPlanIds.includes(planId));
}

export function testimonialContentUrl(src: string): string {
  return `${SITE_URL}${src}`;
}

export function testimonialEmbedUrl(pagePath: string, testimonialId: string): string {
  const base = pagePath === "/" ? `${SITE_URL}/` : `${SITE_URL}${pagePath}`;
  return `${base}#testimonial-${testimonialId}`;
}

export const TESTIMONIAL_POSTERS = CUSTOMER_TESTIMONIALS.map((item) => item.poster);
