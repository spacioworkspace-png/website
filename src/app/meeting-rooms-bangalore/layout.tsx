import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Meeting Rooms Basavanagudi from ₹399/hr | Spacio Workspace",
  description:
    "Book meeting rooms in Basavanagudi, Bangalore from ₹399 per hour. AV-ready rooms for 4–12 people at Spacio Workspace, South Bangalore.",
  path: "/meeting-rooms-bangalore",
});

export default function MeetingRoomsBangaloreLayout({ children }: { children: React.ReactNode }) {
  return children;
}
