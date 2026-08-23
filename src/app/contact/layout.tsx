import { FaqSection } from "@/components/FaqSection";
import { pageMeta } from "@/lib/seo";
import { SEO_KEYWORDS } from "@/lib/seo-keywords";
import { SITE_FAQS } from "@/lib/site";

export const metadata = pageMeta({
  title: "Contact Spacio | Office Space Basavanagudi, South Bangalore",
  description:
    "Contact Spacio Workspace for office space in Basavanagudi. Call, WhatsApp or visit No 7, Sree Devi Complex, NAT Street — near Bull Temple and Lalbagh.",
  path: "/contact",
  keywords: [...SEO_KEYWORDS.location],
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <FaqSection
        items={[SITE_FAQS[0], SITE_FAQS[1], SITE_FAQS[5]]}
        title="How to reach Spacio"
      />
    </>
  );
}
