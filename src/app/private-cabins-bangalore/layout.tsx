import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Private Cabins Basavanagudi from ₹8,499/mo | Spacio Workspace",
  description:
    "Private coworking cabins in Basavanagudi, Bangalore. Solo cabin ₹8,499/month, 3-seater ₹14,999, 6-seater ₹24,999. 24/7 access and 1Gbps WiFi.",
  path: "/private-cabins-bangalore",
});

export default function PrivateCabinsBangaloreLayout({ children }: { children: React.ReactNode }) {
  return children;
}
