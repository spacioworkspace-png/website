import type { Metadata } from "next";
import { FaqSection } from "@/components/FaqSection";
import { PricingTable } from "@/components/PricingTable";
import { pageMeta } from "@/lib/seo";
import { PRICING_FAQS } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Pricing | Spacio Workspace Basavanagudi",
  description:
    "Day pass ₹199, dedicated desk ₹3,499/month, solo cabin ₹8,499/month, meeting rooms ₹399/hour, virtual office ₹12,999/year at Spacio Basavanagudi.",
  path: "/pricing",
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
