import { FaqSection } from "@/components/FaqSection";
import { pageMeta } from "@/lib/seo";
import { SEO_KEYWORDS } from "@/lib/seo-keywords";
import { SITE_FAQS } from "@/lib/site";

export const metadata = pageMeta({
  title: "About Spacio | Coworking & Office Space near South Bangalore",
  description:
    "Spacio Workspace is coworking in Basavanagudi near Bull Temple and Lalbagh. Private cabins, desks, meeting rooms and virtual office.",
  path: "/about",
  keywords: [...SEO_KEYWORDS.location, ...SEO_KEYWORDS.workspaces],
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <FaqSection items={SITE_FAQS} title="About Spacio Workspace" />
    </>
  );
}
