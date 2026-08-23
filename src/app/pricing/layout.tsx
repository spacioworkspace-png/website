import type { Metadata } from "next";
import { FaqSection } from "@/components/FaqSection";
import { PricingTable } from "@/components/PricingTable";
import { pageMeta } from "@/lib/seo";
import { SEO_KEYWORDS } from "@/lib/seo-keywords";
import { PRICING_FAQS } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Office Space Basavanagudi Pricing | Day Pass to Private Cabins",
  description:
    "Office space in Basavanagudi pricing: day pass ₹199, dedicated desk ₹3,499/mo, private cabin ₹8,499/mo, meeting room ₹399/hr, virtual office ₹12,999/yr.",
  path: "/pricing",
  keywords: [...SEO_KEYWORDS.workspaces],
});

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <PricingTable />
      <FaqSection items={PRICING_FAQS} title="Pricing questions" />
    </>
  );
}
