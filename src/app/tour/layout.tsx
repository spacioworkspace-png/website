import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Book a Tour | Spacio Workspace Basavanagudi",
  description: "Book a free tour of Spacio Workspace in Basavanagudi, Bangalore.",
  path: "/tour",
});

export default function TourLayout({ children }: { children: React.ReactNode }) {
  return children;
}
