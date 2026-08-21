import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Gallery | Spacio Workspace Basavanagudi",
  description:
    "Photos of private cabins, dedicated desks, meeting rooms and common areas at Spacio Workspace in Basavanagudi, Bangalore.",
  path: "/gallery",
});

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
