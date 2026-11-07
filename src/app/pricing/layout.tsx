import type { Metadata } from "next";
import { FaqSection } from "@/components/FaqSection";
import { PricingTable } from "@/components/PricingTable";
import { pageMeta } from "@/lib/seo";
import { SEO_KEYWORDS } from "@/lib/seo-keywords";
import { PRICING_FAQS } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Membership Details | Spacio Workspace Basavanagudi",
  description:
    "Get membership details for coworking in Basavanagudi — private cabins, desks, day pass, meeting rooms and virtual office.",
  path: "/pricing",
  keywords: [...SEO_KEYWORDS.workspaces],
});

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <PricingTable />
      <FaqSection items={PRICING_FAQS} title="Before you enquire" />
    </>
  );
}
