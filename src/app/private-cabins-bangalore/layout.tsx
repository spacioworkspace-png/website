import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { SEO_KEYWORDS } from "@/lib/seo-keywords";

export const metadata: Metadata = pageMeta({
  title: "Private Cabin Basavanagudi | From ₹8,499/month",
  description:
    "Private cabin in Basavanagudi — solo, 3-seater and 6-seater offices with 24/7 access and 1Gbps WiFi at Spacio Workspace.",
  path: "/private-cabins-bangalore",
  keywords: [...SEO_KEYWORDS.privateCabin],
});

export default function PrivateCabinsBangaloreLayout({ children }: { children: React.ReactNode }) {
  return children;
}
