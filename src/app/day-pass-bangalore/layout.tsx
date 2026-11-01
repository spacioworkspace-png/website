import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { SEO_KEYWORDS } from "@/lib/seo-keywords";

export const metadata: Metadata = pageMeta({
  title: "Day Pass Basavanagudi | Coworking from ₹199/day",
  description:
    "Day pass in Basavanagudi for single-day coworking. 1Gbps WiFi and 9 AM–7 PM access from ₹199/day at Spacio Workspace.",
  path: "/day-pass-bangalore",
  keywords: [...SEO_KEYWORDS.dayPass],
});

export default function DayPassBangaloreLayout({ children }: { children: React.ReactNode }) {
  return children;
}
