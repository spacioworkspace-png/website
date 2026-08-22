import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Coworking Pricing Basavanagudi | Spacio Workspace Bangalore",
  description:
    "Full coworking price list in Basavanagudi: day pass ₹199, dedicated desk ₹3,499/mo, solo cabin ₹8,499/mo, meeting rooms ₹399/hr, virtual office ₹12,999/yr.",
  path: "/pricing-bangalore",
});

export default function PricingBangaloreLayout({ children }: { children: React.ReactNode }) {
  return children;
}
