import { CabinDeskCompare } from "@/components/CabinDeskCompare";
import { ServicePageShell } from "@/components/service/ServicePageShell";
import { pageMeta } from "@/lib/seo";
import { SEO_KEYWORDS } from "@/lib/seo-keywords";
import { WA } from "@/lib/whatsapp-messages";

export const metadata = pageMeta({
  title: "Dedicated Desk Basavanagudi | Fixed Seat Coworking",
  description:
    "Dedicated desk in Basavanagudi with assigned seat, locker and 24/7 access. Enquire for membership details.",
  path: "/workspaces/dedicated-desks",
  keywords: [...SEO_KEYWORDS.dedicatedDesk],
  ogImage: "/images/workspace-orange-screens.jpg",
  ogAlt: "Dedicated desk coworking space in Basavanagudi",
});

export default function DedicatedDesksPage() {
  return (
    <ServicePageShell
      planId="dedicated-desks"
      eyebrow="Dedicated Desks · Basavanagudi"
      title="A consistent workspace for your everyday routine."
      lead="Your assigned desk at Spacio — ergonomic seating, storage and 24/7 member access — for professionals who want rhythm without a private cabin lease."
      heroImage="/images/workspace-orange-screens.jpg"
      heroImageAlt="Dedicated desks at Spacio Workspace Basavanagudi"
      trackingLocation="dedicated-desks-hero"
      whatsappMessage={WA.dedicatedDesk}
      highlights={["Assigned seat", "Locker storage", "24/7 member access"]}
      features={[
        { title: "Your fixed desk", description: "An assigned seat you can return to each day, with space for your setup." },
        { title: "Secure storage", description: "Locker / pedestal storage so you can leave essentials overnight." },
        { title: "24/7 member access", description: "Cabin and dedicated-desk members can access the centre around the clock." },
        { title: "1Gbps internet", description: "Reliable fibre for video calls, design files and development work." },
        { title: "Professional setting", description: "A composed shared bay suited to everyday client-ready work." },
        { title: "South Bengaluru base", description: "Basavanagudi location with easy links across the south of the city." },
      ]}
      storyTitle="Everyday focus, without the overhead of a full office."
      storyBody={[
        "Dedicated desks suit consultants, freelancers and remote employees who want consistency: the same seat, the same rhythm, and a professional address to work from.",
        "Prefer a door and full privacy? Compare with our private cabins on a tour — inventory is limited.",
      ]}
      storyBullets={[
        "Assigned desk with ergonomic seating",
        "High-speed internet and common amenities",
        "Membership details shared privately on enquiry",
      ]}
      storyImage="/images/workspace-numbered-cabins.jpg"
      storyImageAlt="Numbered workspace bays at Spacio"
      termsTitle="Membership details on enquiry"
      termsBody="We share current dedicated-desk options, inclusions and availability over WhatsApp or during a private tour. No public rates."
      termsFacts={["Assigned seat", "Locker storage", "24/7 member access", "Basavanagudi centre"]}
      audiences={[
        { title: "Consultants & freelancers", description: "A reliable daily base with storage and professional surroundings." },
        { title: "Remote employees", description: "Structure and connectivity without renting a full private office." },
        { title: "Growing independents", description: "Ready for a desk now, with a clear path to a cabin later if needed." },
      ]}
      ctaTitle="Ready for your dedicated desk?"
      ctaBody="Enquire for availability or schedule a tour to see the floor in person."
      related={[
        { href: "/workspaces/solo-cabin", label: "Private cabins" },
        { href: "/workspaces/day-pass", label: "Day pass" },
        { href: "/workspaces/virtual-office", label: "Virtual office" },
      ]}
      afterVideo={<CabinDeskCompare />}
    />
  );
}
