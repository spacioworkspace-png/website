import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Amenities | Spacio Workspace Basavanagudi",
  description: "Amenities at Spacio Workspace in Basavanagudi, South Bangalore.",
  path: "/about",
  noindex: true,
});

export default function FeaturesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
