import { CabinDeskCompare } from "@/components/CabinDeskCompare";
import { ServicePageShell } from "@/components/service/ServicePageShell";
import { pageMeta } from "@/lib/seo";
import { SEO_KEYWORDS } from "@/lib/seo-keywords";
import { WA } from "@/lib/whatsapp-messages";

export const metadata = pageMeta({
  title: "Private Solo Cabin Basavanagudi | Enclosed Office",
  description:
    "Solo private cabin in Basavanagudi with 24/7 access and 1Gbps internet. Limited availability — enquire for a tour.",
  path: "/workspaces/solo-cabin",
  keywords: [...SEO_KEYWORDS.privateCabin],
  ogImage: "/images/solo-cabin-workspace.jpg",
  ogAlt: "Solo private cabin at Spacio Workspace Basavanagudi",
});

export default function SoloCabinPage() {
  return (
    <ServicePageShell
      planId="solo-cabin"
      eyebrow="Private Cabins · Solo"
      title="Your own space to focus, build and grow."
      lead="A fully enclosed solo cabin in Basavanagudi for founders, consultants and professionals who need privacy for calls and deep work. Cabin inventory is limited — enquire for current availability."
      heroImage="/images/solo-cabin-workspace.jpg"
      heroImageAlt="Solo private cabin interior at Spacio Workspace"
      trackingLocation="solo-cabin-hero"
      whatsappMessage={WA.privateCabin}
      highlights={["Enclosed cabin", "24/7 member access", "Limited availability"]}
      features={[
        { title: "Private enclosure", description: "A lockable cabin for confidential calls and uninterrupted focus." },
        { title: "Ergonomic setup", description: "Thoughtful furniture for long working days." },
        { title: "1Gbps internet", description: "Reliable connectivity for video, code and file transfers." },
        { title: "24/7 member access", description: "Secure entry for cabin members around the clock." },
        { title: "Personal storage", description: "Space to keep essentials inside your cabin." },
        { title: "Client-ready", description: "A composed room when someone visits you at Spacio." },
      ]}
      storyTitle="Privacy when your work demands it."
      storyBody={[
        "Solo cabins are designed for people who need a door — not just a desk. Work, take calls and host brief visitor conversations in a quiet enclosed room.",
        "Also explore 3-seater and 6-seater cabins if you work with partners or a small team.",
      ]}
      storyBullets={[
        "Enclosed 1-person cabin at Basavanagudi",
        "High-speed internet and member access",
        "Tour recommended before you decide",
      ]}
      storyImage="/images/hero-solo-cabin.jpg"
      storyImageAlt="Premium solo cabin workspace at Spacio"
      termsTitle="Availability on enquiry"
      termsBody="Private cabin membership details and move-in timelines are shared privately. Inventory is limited."
      termsFacts={["Solo cabin", "24/7 access", "1Gbps internet", "Basavanagudi"]}
      audiences={[
        { title: "Founders", description: "Build with focus while staying close to South Bengaluru networks." },
        { title: "Consultants & CAs", description: "Confidential conversations without a café backdrop." },
        { title: "Independent professionals", description: "A serious private office without a long commercial lease." },
      ]}
      ctaTitle="Interested in a private cabin?"
      ctaBody="WhatsApp us for availability, or schedule a private tour of the centre."
      related={[
        { href: "/workspaces/three-seater-cabin", label: "3-seater cabin" },
        { href: "/workspaces/six-seater-cabin", label: "6-seater cabin" },
        { href: "/workspaces/dedicated-desks", label: "Dedicated desks" },
      ]}
      afterVideo={<CabinDeskCompare />}
    />
  );
}
