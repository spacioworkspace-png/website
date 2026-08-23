import { pageMeta } from "@/lib/seo";
import { SEO_KEYWORDS } from "@/lib/seo-keywords";

export const metadata = pageMeta({
  title: "Virtual Tour | Office Space & Coworking Basavanagudi",
  description:
    "Take a virtual tour of office space in Basavanagudi. Watch walkthrough videos of private cabins, dedicated desks and meeting rooms at Spacio Workspace.",
  path: "/tour",
  keywords: [...SEO_KEYWORDS.workspaces],
});

export default function TourLayout({ children }: { children: React.ReactNode }) {
  return children;
}
