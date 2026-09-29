import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { SEO_KEYWORDS } from "@/lib/seo-keywords";

export const metadata: Metadata = pageMeta({
  title: "Meeting Room Basavanagudi | Book from ₹399/hour",
  description:
    "Meeting room in Basavanagudi for client sessions, interviews and team meetings. AV-ready rooms for 4–12 people from ₹399/hour at Spacio Workspace.",
  path: "/meeting-rooms-bangalore",
  canonicalPath: "/workspaces/meeting-rooms",
  keywords: [...SEO_KEYWORDS.meetingRoom],
});

export default function MeetingRoomsBangaloreLayout({ children }: { children: React.ReactNode }) {
  return children;
}
