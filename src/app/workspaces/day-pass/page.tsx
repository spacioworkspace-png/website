import { ServicePageShell } from "@/components/service/ServicePageShell";
import { pageMeta } from "@/lib/seo";
import { SEO_KEYWORDS } from "@/lib/seo-keywords";
import { WA } from "@/lib/whatsapp-messages";

export const metadata = pageMeta({
  title: "Day Pass Basavanagudi | Flexible Day Coworking",
  description:
    "Day pass in Basavanagudi for single-day coworking. Full-day access 9 AM–7 PM and 1Gbps WiFi. Enquire for availability.",
  path: "/workspaces/day-pass",
  keywords: [...SEO_KEYWORDS.dayPass],
  ogImage: "/images/workspace-green-screens.jpg",
  ogAlt: "Day pass coworking space in Basavanagudi",
});

export default function DayPassPage() {
  return (
    <ServicePageShell
      planId="day-pass"
      eyebrow="Day Pass · Basavanagudi"
      title="Step into a better working day."
      lead="A Spacio day pass gives you a full day of productive coworking in Basavanagudi — 9 AM to 7 PM — with high-speed internet and a professional setting. Ideal when you need flexibility without a monthly commitment."
      heroImage="/images/workspace-green-screens.jpg"
      heroImageAlt="Day pass coworking area at Spacio Workspace Basavanagudi"
      trackingLocation="day-pass-hero"
      whatsappMessage={WA.dayPass}
      highlights={["9 AM – 7 PM access", "1Gbps internet", "Enquire for availability"]}
      features={[
        { title: "Daytime access", description: "Work from 9 AM to 7 PM in a calm, professional Basavanagudi centre." },
        { title: "Reliable connectivity", description: "1Gbps fibre for calls, uploads and everyday business tools." },
        { title: "Shared workspace", description: "A seat in our coworking area with natural light and a composed atmosphere." },
        { title: "Pantry access", description: "Tea and coffee available during your day-pass visit." },
        { title: "Meeting room add-ons", description: "Enquire if you need a private room for a client conversation." },
        { title: "No long lock-in", description: "Use Spacio for a day when you need it — membership details on enquiry." },
      ]}
      storyTitle="Perfect for focused days away from home."
      storyBody={[
        "Whether you are visiting South Bengaluru, between offices, or simply need a better setting for the day, a day pass keeps work simple.",
        "Day-pass hours are separate from 24/7 member access — guests work 9 AM to 7 PM.",
      ]}
      storyBullets={[
        "Workspace seat with high-speed WiFi and common areas",
        "Printing support available on request",
        "Purchase or arrange on arrival after confirming availability",
      ]}
      storyImage="/images/workspace-orange-screens.jpg"
      storyImageAlt="Open coworking seating at Spacio Workspace"
      termsTitle="Clear terms. Flexible access."
      termsBody="Membership and day-pass details are shared on enquiry — rates are not published online. WhatsApp us or visit to confirm today’s availability."
      termsFacts={["Access: 9 AM – 7 PM", "Location: Basavanagudi", "Internet: 1Gbps", "Best for: flexible day work"]}
      audiences={[
        { title: "Freelancers", description: "A professional day base for client work, proposals and focused deep work." },
        { title: "Remote employees", description: "A composed alternative to cafés when you need reliable calls and WiFi." },
        { title: "Visiting professionals", description: "In South Bengaluru for the day and need somewhere serious to work." },
      ]}
      ctaTitle="Ready for a better working day?"
      ctaBody="Enquire on WhatsApp for day-pass availability, or schedule a short visit to see the space."
      related={[
        { href: "/workspaces/dedicated-desks", label: "Dedicated desks" },
        { href: "/workspaces/meeting-rooms", label: "Meeting rooms" },
        { href: "/workspaces/virtual-office", label: "Virtual office" },
      ]}
    />
  );
}
