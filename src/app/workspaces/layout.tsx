import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Workspace Plans | Spacio Workspace Basavanagudi",
  description:
    "Compare private cabins, dedicated desks, day pass, meeting rooms and virtual office at Spacio Workspace in Basavanagudi.",
  path: "/workspaces",
});

export default function WorkspacesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
