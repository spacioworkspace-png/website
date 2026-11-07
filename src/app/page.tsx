import { preload } from "react-dom";
import { HomeHero } from "@/components/home/HomeHero";
import { HomePage } from "@/components/HomePage";

export default function Page() {
  preload("/images/hero-solo-cabin.jpg", { as: "image", fetchPriority: "high" });

  return (
    <>
      <HomeHero />
      <HomePage />
    </>
  );
}
