import { ServicePageShell } from "@/components/service/ServicePageShell";
import { pageMeta } from "@/lib/seo";
import { SEO_KEYWORDS } from "@/lib/seo-keywords";
import { WA } from "@/lib/whatsapp-messages";

export const metadata = pageMeta({
  title: "6-Seater Private Cabin Basavanagudi | Team Office",
  description:
    "6-seater private cabin in Basavanagudi for growing teams. Enquire for availability and schedule a tour.",
  path: "/workspaces/six-seater-cabin",
  keywords: [...SEO_KEYWORDS.privateCabin],
  ogImage: "/images/6-seater-cabin-workspace.jpg",
  ogAlt: "6-seater private cabin at Spacio Workspace Basavanagudi",
});

export default function SixSeaterCabinPage() {
  return (
    <ServicePageShell
      planId="six-seater-cabin"
      eyebrow="Private Cabins · 6-Seater"
      title="A private cabin for growing teams."
      lead="Space for up to six in an enclosed Basavanagudi cabin — for teams that need privacy, presence and flexibility without a traditional office lease. Inventory is limited."
      heroImage="/images/6-seater-cabin-workspace.jpg"
      heroImageAlt="6-seater team cabin at Spacio Workspace"
      trackingLocation="six-seater-cabin-hero"
      whatsappMessage={WA.privateCabin}
      highlights={["Up to 6 people", "Enclosed team cabin", "24/7 member access"]}
      features={[
        { title: "Team enclosure", description: "A private room scaled for small teams and project pods." },
        { title: "Collaboration ready", description: "Room to plan, build and review together behind a door." },
        { title: "1Gbps internet", description: "Connectivity for hybrid teammates and heavy files." },
        { title: "24/7 access", description: "Members can work on their own schedules." },
        { title: "Client visits", description: "A professional setting when stakeholders stop by." },
        { title: "Meeting rooms", description: "Book larger rooms when you invite a wider group." },
      ]}
      storyTitle="Team privacy without the lease complexity."
      storyBody={[
        "The 6-seater cabin suits product teams, agencies and operators who need a serious South Bengaluru base.",
        "Cabin availability changes — enquire early and visit before you commit.",
      ]}
      storyBullets={[
        "Private cabin for up to six",
        "Basavanagudi centre",
        "Details shared on enquiry",
      ]}
      storyImage="/images/office-corridor-glass-partitions.jpg"
      storyImageAlt="Glass cabin corridor at Spacio Workspace"
      termsTitle="Enquire for team cabin options"
      termsBody="We share current 6-seater availability and membership details privately — no public pricing."
      termsFacts={["Capacity: 6", "Private cabin", "24/7 access", "Basavanagudi"]}
      audiences={[
        { title: "Growing startups", description: "A private floor-plate for a core team of up to six." },
        { title: "Agencies & studios", description: "Keep creative and client work behind a door." },
        { title: "Ops & delivery teams", description: "A stable room for execution without a long lease." },
      ]}
      ctaTitle="Looking for a 6-seater cabin?"
      ctaBody="Message us on WhatsApp or book a private tour."
      related={[
        { href: "/workspaces/three-seater-cabin", label: "3-seater cabin" },
        { href: "/workspaces/solo-cabin", label: "Solo cabin" },
        { href: "/workspaces/meeting-rooms", label: "Meeting rooms" },
      ]}
    />
  );
}
