import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Day Pass Coworking Basavanagudi ₹199 | Spacio Workspace",
  description:
    "Flexible day pass coworking in Basavanagudi, Bangalore from ₹199/day. 1Gbps WiFi, 9 AM–7 PM access. Book via WhatsApp or tour Spacio Workspace today.",
  path: "/day-pass-bangalore",
});

export default function DayPassBangaloreLayout({ children }: { children: React.ReactNode }) {
  return children;
}
