import { ServicePageShell } from "@/components/service/ServicePageShell";
import { pageMeta } from "@/lib/seo";
import { SEO_KEYWORDS } from "@/lib/seo-keywords";
import { WA } from "@/lib/whatsapp-messages";

export const metadata = pageMeta({
  title: "Virtual Office Basavanagudi | GST Business Address Bangalore",
  description:
    "Virtual office in Basavanagudi with business address and mail handling. Enquire for documentation support — GST approval is not guaranteed.",
  path: "/workspaces/virtual-office",
  keywords: [...SEO_KEYWORDS.virtualOffice],
  ogImage: "/images/building-exterior-sree-devi-complex.jpg",
  ogAlt: "Spacio Workspace building for virtual office address in Basavanagudi",
});

export default function VirtualOfficePage() {
  return (
    <ServicePageShell
      planId="virtual-office"
      eyebrow="Virtual Office · Basavanagudi"
      title="A professional business presence, wherever you work."
      lead="Use Spacio’s Basavanagudi address for business correspondence and documentation support, with mail handling. We help you understand paperwork requirements — GST registration approval is decided by the authorities, not by Spacio."
      heroImage="/images/building-exterior-sree-devi-complex.jpg"
      heroImageAlt="Sree Devi Complex exterior — Spacio Workspace Basavanagudi"
      trackingLocation="virtual-office-hero"
      whatsappMessage={WA.virtualOffice}
      highlights={["Basavanagudi address", "Mail handling", "Documentation guidance"]}
      features={[
        { title: "Business address", description: "A recognised Basavanagudi centre address for correspondence and filings." },
        { title: "Mail handling", description: "Incoming mail managed with clear processes explained at enrolment." },
        { title: "Documentation support", description: "Guidance on typical papers such as NOC, utility references and agreements where applicable." },
        { title: "Transparent process", description: "We explain what we can provide — and what government departments decide." },
        { title: "Renewal clarity", description: "Renewal steps and timelines are shared when you enquire." },
        { title: "Optional workspace access", description: "Ask about day pass or desk options if you also need a place to work." },
      ]}
      storyTitle="Useful for GST, ROC and everyday business presence."
      storyBody={[
        "Many members use the Spacio address for GST and ROC-related paperwork. Requirements change — confirm the current document set with our team before you apply.",
        "Spacio does not guarantee GST registration approval. We provide address and documentation support; statutory decisions rest with the authorities.",
      ]}
      storyBullets={[
        "Basavanagudi, Bengaluru 560004 business address",
        "Mail handling for virtual office members",
        "Eligibility and documents explained case by case",
      ]}
      storyImage="/images/spacio-sign-green-wall.jpg"
      storyImageAlt="Spacio Workspace signage in Basavanagudi"
      termsTitle="Plan details on enquiry"
      termsBody="Virtual office inclusions, documentation lists and renewal terms are shared privately. Enquire on WhatsApp for the current plan."
      termsFacts={[
        "Address: Gandhi Bazaar, Basavanagudi",
        "Mail handling included",
        "GST approval not guaranteed",
        "Documents confirmed before you apply",
      ]}
      audiences={[
        { title: "Founders & startups", description: "Need a credible Bengaluru address without leasing an office yet." },
        { title: "Consultants & freelancers", description: "Want a professional footprint for invoices and registrations." },
        { title: "Remote businesses", description: "Operate elsewhere but need a South Bengaluru correspondence base." },
      ]}
      ctaTitle="Need a Basavanagudi business address?"
      ctaBody="Chat with our team about virtual office options, documents and next steps."
      related={[
        { href: "/workspaces/day-pass", label: "Day pass" },
        { href: "/workspaces/dedicated-desks", label: "Dedicated desks" },
        { href: "/book-tour", label: "Book a tour" },
      ]}
    />
  );
}
