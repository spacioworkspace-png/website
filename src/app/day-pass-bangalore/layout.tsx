import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { SEO_KEYWORDS } from "@/lib/seo-keywords";

export const metadata: Metadata = pageMeta({
  title: "Day Pass Basavanagudi | Flexible Day Coworking",
  description:
    "Day pass in Basavanagudi for single-day coworking. 1Gbps WiFi and 9 AM–7 PM access. Enquire for availability.",
  path: "/day-pass-bangalore",
  keywords: [...SEO_KEYWORDS.dayPass],
});

export default function DayPassBangaloreLayout({ children }: { children: React.ReactNode }) {
  return children;
}
