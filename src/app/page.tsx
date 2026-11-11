import { HomeHero } from "@/components/home/HomeHero";
import { HomePage } from "@/components/HomePage";

/** One shared homepage tree — same orange brand, content and CTAs on mobile and desktop. */
export default function Page() {
  return (
    <>
      <HomeHero />
      <HomePage />
    </>
  );
}
