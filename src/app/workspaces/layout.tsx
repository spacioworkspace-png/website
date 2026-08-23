import { FaqSection } from "@/components/FaqSection";
import { pageMeta } from "@/lib/seo";
import { SEO_KEYWORDS } from "@/lib/seo-keywords";
import { SITE_FAQS } from "@/lib/site";

export const metadata = pageMeta({
  title: "Office Space Basavanagudi | Private Cabins, Desks & Meeting Rooms",
  description:
    "Office space in Basavanagudi with private cabins, dedicated desks, meeting rooms, virtual office and day pass. Coworking near South Bangalore from Spacio Workspace.",
  path: "/workspaces",
  keywords: [...SEO_KEYWORDS.workspaces],
});

export default function WorkspacesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <FaqSection
        items={[SITE_FAQS[2], SITE_FAQS[3], SITE_FAQS[5]]}
        title="Choosing a workspace plan"
      />
    </>
  );
}
