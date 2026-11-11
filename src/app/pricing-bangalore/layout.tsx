import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { SEO_KEYWORDS } from "@/lib/seo-keywords";

export const metadata: Metadata = pageMeta({
  title: "Membership Details | Spacio Workspace Basavanagudi",
  description:
    "Enquire for Spacio Workspace membership details in Basavanagudi — cabins, desks, day pass, meeting rooms and virtual office.",
  path: "/pricing-bangalore",
  canonicalPath: "/pricing",
  keywords: [...SEO_KEYWORDS.workspaces],
});

export default function PricingBangaloreLayout({ children }: { children: React.ReactNode }) {
  return children;
}
