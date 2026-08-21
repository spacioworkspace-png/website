import { Metadata } from "next";
import { PricingBangalore } from "@/components/PricingBangalore";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Pricing | Spacio Workspace Basavanagudi",
  description:
    "Coworking prices in Basavanagudi: cabins, dedicated desks, meeting rooms and virtual office.",
  path: "/pricing",
});

export default function PricingBangalorePage() {
  return <PricingBangalore />;
}

