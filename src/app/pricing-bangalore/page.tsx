import { Metadata } from "next";
import { PricingBangalore } from "@/components/PricingBangalore";

export const metadata: Metadata = {
  title: "Pricing | Spacio Workspace - Affordable Coworking Space Bangalore | Basavanagudi & Jayanagar",
  description: "Transparent pricing for premium coworking space in Bangalore. Private cabins, dedicated desks, meeting rooms starting from affordable rates. No hidden fees. Book your space today!",
  keywords: [
    "coworking space pricing Bangalore",
    "affordable coworking space Basavanagudi",
    "coworking space rates Jayanagar",
    "private cabin price Bangalore",
    "dedicated desk cost Bangalore",
    "meeting room rental Bangalore",
    "virtual office price Bangalore",
    "cheap coworking space Bangalore",
  ],
};

export default function PricingBangalorePage() {
  return <PricingBangalore />;
}

