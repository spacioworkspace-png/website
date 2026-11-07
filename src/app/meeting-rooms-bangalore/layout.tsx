import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { SEO_KEYWORDS } from "@/lib/seo-keywords";

export const metadata: Metadata = pageMeta({
  title: "Meeting Room Basavanagudi | Book a Professional Room",
  description:
    "Meeting room in Basavanagudi for client sessions, interviews and team meetings. AV-ready rooms for 4–12 people.",
  path: "/meeting-rooms-bangalore",
  keywords: [...SEO_KEYWORDS.meetingRoom],
});

export default function MeetingRoomsBangaloreLayout({ children }: { children: React.ReactNode }) {
  return children;
}
