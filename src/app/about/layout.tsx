import { FaqSection } from "@/components/FaqSection";
import { pageMeta } from "@/lib/seo";
import { SITE_FAQS } from "@/lib/site";

export const metadata = pageMeta({
  title: "About Spacio Workspace | Coworking in Basavanagudi, Bangalore",
  description:
    "Spacio Workspace is a premium coworking centre in Basavanagudi, Bangalore. Private cabins, dedicated desks, meeting rooms and virtual office for South Bangalore teams.",
  path: "/about",
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <FaqSection items={SITE_FAQS} title="About Spacio Workspace" />
    </>
  );
}
