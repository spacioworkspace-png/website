import { ServicePageShell } from "@/components/service/ServicePageShell";
import { pageMeta } from "@/lib/seo";
import { SEO_KEYWORDS } from "@/lib/seo-keywords";
import { WA } from "@/lib/whatsapp-messages";

export const metadata = pageMeta({
  title: "Meeting Rooms Basavanagudi | Book by the Hour",
  description:
    "Meeting rooms in Basavanagudi for about 4–12 people with AV for hybrid calls. Enquire for booking availability.",
  path: "/workspaces/meeting-rooms",
  keywords: [...SEO_KEYWORDS.meetingRoom],
  ogImage: "/images/meeting-room-frosted-glass.jpg",
  ogAlt: "Meeting room at Spacio Workspace Basavanagudi",
});

export default function MeetingRoomsPage() {
  return (
    <ServicePageShell
      planId="meeting-rooms"
      eyebrow="Meeting Rooms · Basavanagudi"
      title="Make every conversation count."
      lead="Book an AV-ready meeting room at Spacio for client presentations, interviews, board discussions and team sessions — in the heart of Basavanagudi."
      heroImage="/images/meeting-room-frosted-glass.jpg"
      heroImageAlt="Frosted-glass meeting room at Spacio Workspace"
      trackingLocation="meeting-rooms-hero"
      whatsappMessage={WA.meetingRoom}
      highlights={["About 4–12 people", "AV for hybrid calls", "Hourly booking"]}
      features={[
        { title: "Right-sized rooms", description: "Spaces suited to roughly 4–12 people depending on the room and setup." },
        { title: "Hybrid-ready AV", description: "Screen and connectivity support for remote participants." },
        { title: "Professional interior", description: "A composed setting that presents well for clients and candidates." },
        { title: "Flexible booking", description: "Enquire for slots that match your agenda — same day when available." },
        { title: "Central South Bengaluru", description: "Easy for guests coming from Jayanagar, Banashankari and nearby." },
        { title: "Member convenience", description: "Desk and cabin members can ask about preferred booking access." },
      ]}
      storyTitle="A room when the conversation matters."
      storyBody={[
        "Not every discussion belongs in an open bay. Spacio meeting rooms give you privacy, a clean backdrop and the tools for hybrid calls.",
        "Share your headcount, date and time on WhatsApp — we confirm availability and next steps.",
      ]}
      storyBullets={[
        "Seating for small to mid-size meetings",
        "AV support for presentations and video calls",
        "Booking details shared on enquiry",
      ]}
      storyImage="/images/office-corridor-glass-partitions.jpg"
      storyImageAlt="Glass-partitioned interiors at Spacio Workspace"
      termsTitle="Booking on enquiry"
      termsBody="Meeting room availability and booking terms are confirmed by our team. No public rate cards — enquire for your slot."
      termsFacts={["Capacity: about 4–12", "AV-ready", "Basavanagudi", "Hourly booking"]}
      audiences={[
        { title: "Client meetings", description: "Present proposals and updates in a private, professional room." },
        { title: "Interviews & hiring", description: "A quiet setting for candidate conversations." },
        { title: "Team sessions", description: "Planning, reviews and workshops away from the open floor." },
      ]}
      ctaTitle="Need a meeting room?"
      ctaBody="Tell us your date, time and headcount — we’ll share availability."
      related={[
        { href: "/workspaces/day-pass", label: "Day pass" },
        { href: "/workspaces/dedicated-desks", label: "Dedicated desks" },
        { href: "/workspaces/solo-cabin", label: "Private cabins" },
      ]}
    />
  );
}
