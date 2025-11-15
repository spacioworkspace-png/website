import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Pricing | Spacio Workspace | Best Coworking Space in Bangalore | Basavanagudi & Jayanagar | Transparent Pricing",
  description:
    "Simple, transparent pricing for premium coworking space in Bangalore. Private cabins, dedicated desks, meeting rooms, virtual offices, and day passes. Flexible plans starting from affordable rates. Book your free tour today!",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
