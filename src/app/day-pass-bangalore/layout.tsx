import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { SEO_KEYWORDS } from "@/lib/seo-keywords";

export const metadata: Metadata = pageMeta({
  title: "Day Pass Basavanagudi | Coworking from ₹199/day",
  description:
    "Day pass in Basavanagudi for flexible single-day coworking. 1Gbps WiFi, 9 AM–7 PM access and common areas from ₹199/day at Spacio Workspace, South Bangalore.",
  path: "/day-pass-bangalore",
  keywords: [...SEO_KEYWORDS.dayPass],
});

export default function DayPassBangaloreLayout({ children }: { children: React.ReactNode }) {
  return children;
}
