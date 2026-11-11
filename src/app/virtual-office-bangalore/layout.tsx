import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { SEO_KEYWORDS } from "@/lib/seo-keywords";

export const metadata: Metadata = pageMeta({
  title: "Virtual Office Basavanagudi | Business Address & Mail",
  description:
    "Virtual office in Basavanagudi with business address, mail handling and documentation guidance. GST approval is not guaranteed — enquire for plan details.",
  path: "/virtual-office-bangalore",
  canonicalPath: "/workspaces/virtual-office",
  keywords: [...SEO_KEYWORDS.virtualOffice],
});

export default function VirtualOfficeBangaloreLayout({ children }: { children: React.ReactNode }) {
  return children;
}
