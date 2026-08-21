import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Reviews | Spacio Workspace Basavanagudi",
  description:
    "What members say about coworking at Spacio Workspace in Basavanagudi, Bangalore.",
  path: "/reviews",
});

export default function ReviewsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
