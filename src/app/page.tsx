import { preload } from "react-dom";
import { FaqSection } from "@/components/FaqSection";
import { HomeHero } from "@/components/home/HomeHero";
import { HomePage } from "@/components/HomePage";
import { PlanVideoSection } from "@/components/PlanVideoSection";
import { SITE_FAQS } from "@/lib/site";

export default function Page() {
  preload("/images/hero-solo-cabin.jpg", { as: "image", fetchPriority: "high" });

  return (
    <>
      <HomeHero />
      <HomePage />
      <PlanVideoSection showAllTours />
      <FaqSection items={SITE_FAQS} title="Coworking in Basavanagudi: common questions" />
    </>
  );
}
