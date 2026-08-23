import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { SEO_KEYWORDS } from "@/lib/seo-keywords";

export const metadata: Metadata = pageMeta({
  title: "Office Space Basavanagudi Pricing | Coworking Plans & Rates",
  description:
    "Office space near South Bangalore pricing at Spacio Basavanagudi: day pass ₹199, dedicated desk ₹3,499/mo, private cabin ₹8,499/mo, meeting room ₹399/hr, virtual office ₹12,999/yr.",
  path: "/pricing-bangalore",
  keywords: [...SEO_KEYWORDS.workspaces],
});

export default function PricingBangaloreLayout({ children }: { children: React.ReactNode }) {
  return children;
}
