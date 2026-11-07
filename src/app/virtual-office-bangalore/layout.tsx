import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { SEO_KEYWORDS } from "@/lib/seo-keywords";

export const metadata: Metadata = pageMeta({
  title: "Virtual Office Basavanagudi | Business Address & Mail",
  description:
    "Virtual office in Basavanagudi with GST and ROC-ready business address, mail handling and meeting room access. Get plan details.",
  path: "/virtual-office-bangalore",
  keywords: [...SEO_KEYWORDS.virtualOffice],
});

export default function VirtualOfficeBangaloreLayout({ children }: { children: React.ReactNode }) {
  return children;
}
