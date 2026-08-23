import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { SEO_KEYWORDS } from "@/lib/seo-keywords";

export const metadata: Metadata = pageMeta({
  title: "Virtual Office Basavanagudi | Business Address ₹12,999/year",
  description:
    "Virtual office in Basavanagudi with GST and ROC-ready business address, mail handling and meeting room access from ₹12,999/year at Spacio Workspace.",
  path: "/virtual-office-bangalore",
  keywords: [...SEO_KEYWORDS.virtualOffice],
});

export default function VirtualOfficeBangaloreLayout({ children }: { children: React.ReactNode }) {
  return children;
}
