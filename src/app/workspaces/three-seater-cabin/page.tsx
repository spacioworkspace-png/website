import { ServicePageShell } from "@/components/service/ServicePageShell";
import { pageMeta } from "@/lib/seo";
import { SEO_KEYWORDS } from "@/lib/seo-keywords";
import { WA } from "@/lib/whatsapp-messages";

export const metadata = pageMeta({
  title: "3-Seater Private Cabin Basavanagudi | Small Team Office",
  description:
    "3-seater private cabin in Basavanagudi for co-founders and small teams. Enquire for availability and a tour.",
  path: "/workspaces/three-seater-cabin",
  keywords: [...SEO_KEYWORDS.privateCabin],
  ogImage: "/images/3-seater-cabin-orange-screens.jpg",
  ogAlt: "3-seater private cabin at Spacio Workspace Basavanagudi",
});

export default function ThreeSeaterCabinPage() {
  return (
    <ServicePageShell
      planId="three-seater-cabin"
      eyebrow="Private Cabins · 3-Seater"
      title="A private cabin for partners and small teams."
      lead="Room for up to three people in an enclosed cabin — suited to co-founders, boutique agencies and partner practices in Basavanagudi. Availability is limited."
      heroImage="/images/3-seater-cabin-orange-screens.jpg"
      heroImageAlt="3-seater cabin at Spacio Workspace"
      trackingLocation="three-seater-cabin-hero"
      whatsappMessage={WA.privateCabin}
      highlights={["Up to 3 people", "Enclosed cabin", "24/7 member access"]}
      features={[
        { title: "Team-scale privacy", description: "A lockable cabin for three — collaborate without an open bay." },
        { title: "Professional presence", description: "Host clients and partners in a composed private room." },
        { title: "1Gbps internet", description: "Shared connectivity that supports calls and creative work." },
        { title: "24/7 access", description: "Member access around the clock for cabin teams." },
        { title: "Storage", description: "Space for team essentials inside the cabin." },
        { title: "Meeting rooms nearby", description: "Book larger rooms when you need more seats." },
      ]}
      storyTitle="A compact HQ in South Bengaluru."
      storyBody={[
        "The 3-seater cabin is for teams that have outgrown a single desk but do not need a large commercial lease.",
        "See solo and 6-seater options if your headcount differs — we will help you choose on a tour.",
      ]}
      storyBullets={[
        "Private cabin for up to three",
        "Basavanagudi location",
        "Membership details on enquiry",
      ]}
      storyImage="/images/workspace-yellow-green-walls.jpg"
      storyImageAlt="Cabin interiors at Spacio Workspace"
      termsTitle="Limited cabin inventory"
      termsBody="Ask for current 3-seater availability and membership details. We do not publish rates online."
      termsFacts={["Capacity: 3", "Private cabin", "24/7 access", "Basavanagudi"]}
      audiences={[
        { title: "Co-founders", description: "A shared private room to build and meet from." },
        { title: "Agencies", description: "A boutique team base with room for collaboration." },
        { title: "Professional partners", description: "CAs, lawyers and consultants working as a small practice." },
      ]}
      ctaTitle="Enquire about a 3-seater cabin"
      ctaBody="WhatsApp our team or schedule a private tour."
      related={[
        { href: "/workspaces/solo-cabin", label: "Solo cabin" },
        { href: "/workspaces/six-seater-cabin", label: "6-seater cabin" },
        { href: "/workspaces/dedicated-desks", label: "Dedicated desks" },
      ]}
    />
  );
}
