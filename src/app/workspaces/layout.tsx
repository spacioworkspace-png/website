import { FaqSection } from "@/components/FaqSection";
import { pageMeta } from "@/lib/seo";
import { SITE_FAQS } from "@/lib/site";

export const metadata = pageMeta({
  title: "Workspace Plans | Spacio Workspace Basavanagudi",
  description:
    "Compare private cabins, dedicated desks, day pass, meeting rooms and virtual office at Spacio Workspace in Basavanagudi.",
  path: "/workspaces",
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
