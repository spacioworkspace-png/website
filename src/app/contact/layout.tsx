import { FaqSection } from "@/components/FaqSection";
import { pageMeta } from "@/lib/seo";
import { SITE_FAQS } from "@/lib/site";

export const metadata = pageMeta({
  title: "Contact Spacio Workspace | Basavanagudi, Bangalore",
  description:
    "Call, WhatsApp or visit Spacio Workspace at No 7, Sree Devi Complex, NAT Street, Basavanagudi, Bangalore 560004.",
  path: "/contact",
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
