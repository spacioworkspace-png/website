import { preload } from "react-dom";
import { HomeHero } from "@/components/home/HomeHero";
import { HomePage } from "@/components/HomePage";
import { MobileHero } from "@/components/mobile/MobileHero";
import { MobileHomePage } from "@/components/mobile/MobileHomePage";

export default function Page() {
  preload("/images/hero-solo-cabin.jpg", { as: "image", fetchPriority: "high" });

  return (
    <>
      {/* Purpose-built mobile experience */}
      <div className="lg:hidden">
        <MobileHero />
        <MobileHomePage />
      </div>

      {/* Desktop orange brand presentation retained */}
      <div className="hidden lg:block">
        <HomeHero />
        <HomePage />
      </div>
    </>
  );
}
