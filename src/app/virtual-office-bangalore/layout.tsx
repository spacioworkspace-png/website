import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Virtual Office Basavanagudi ₹12,999/yr | Spacio Workspace",
  description:
    "GST and ROC-ready virtual office in Basavanagudi, Bangalore at ₹12,999 per year. Business address and mail handling at Spacio Workspace.",
  path: "/virtual-office-bangalore",
});

export default function VirtualOfficeBangaloreLayout({ children }: { children: React.ReactNode }) {
  return children;
}
