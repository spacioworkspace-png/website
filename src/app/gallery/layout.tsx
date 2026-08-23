import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { SEO_KEYWORDS } from "@/lib/seo-keywords";

export const metadata: Metadata = pageMeta({
  title: "Gallery | Office Space & Private Cabins Basavanagudi",
  description:
    "Photos of office space in Basavanagudi — private cabins, dedicated desks, meeting rooms and common areas at Spacio Workspace, near Bull Temple and Lalbagh.",
  path: "/gallery",
  keywords: [...SEO_KEYWORDS.workspaces],
});

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
