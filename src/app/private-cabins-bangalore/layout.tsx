import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { SEO_KEYWORDS } from "@/lib/seo-keywords";

export const metadata: Metadata = pageMeta({
  title: "Private Cabin Basavanagudi | Small Office for Rent from ₹8,499",
  description:
    "Private cabin in Basavanagudi — solo, 3-seater and 6-seater small offices for rent with 24/7 access and 1Gbps WiFi. Office space near South Bangalore at Spacio Workspace.",
  path: "/private-cabins-bangalore",
  keywords: [...SEO_KEYWORDS.privateCabin],
});

export default function PrivateCabinsBangaloreLayout({ children }: { children: React.ReactNode }) {
  return children;
}
