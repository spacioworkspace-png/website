import { preload } from "react-dom";
import { FaqSection } from "@/components/FaqSection";
import { HomeHero } from "@/components/home/HomeHero";
import { HomePage } from "@/components/HomePage";
import { PlanVideoSection } from "@/components/PlanVideoSection";
import { PricingTable } from "@/components/PricingTable";
import { PublicTransportSection } from "@/components/PublicTransportSection";
import { TrustSignalsSection } from "@/components/TrustSignalsSection";
import { SITE_FAQS } from "@/lib/site";

export default function Page() {
  preload("/images/hero-solo-cabin.jpg", { as: "image", fetchPriority: "high" });

  return (
    <>
      <HomeHero />
      <HomePage />
      <PricingTable title="Workspace pricing in Basavanagudi" />
      <TrustSignalsSection />
      <PublicTransportSection />
      <PlanVideoSection showAllTours />
      <FaqSection items={SITE_FAQS} title="Coworking in Basavanagudi: common questions" />
    </>
  );
}
