import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const revalidate = 3600;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const paths: { path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "/about", changeFrequency: "monthly", priority: 0.8 },
    { path: "/workspaces", changeFrequency: "weekly", priority: 0.9 },
    { path: "/workspaces/solo-cabin", changeFrequency: "weekly", priority: 0.9 },
    { path: "/workspaces/three-seater-cabin", changeFrequency: "weekly", priority: 0.9 },
    { path: "/workspaces/six-seater-cabin", changeFrequency: "weekly", priority: 0.9 },
    { path: "/workspaces/dedicated-desks", changeFrequency: "weekly", priority: 0.9 },
    { path: "/workspaces/day-pass", changeFrequency: "weekly", priority: 0.9 },
    { path: "/workspaces/meeting-rooms", changeFrequency: "weekly", priority: 0.9 },
    { path: "/workspaces/virtual-office", changeFrequency: "weekly", priority: 0.9 },
    { path: "/pricing", changeFrequency: "weekly", priority: 0.9 },
    { path: "/locations/basavanagudi", changeFrequency: "weekly", priority: 0.9 },
    { path: "/gallery", changeFrequency: "monthly", priority: 0.7 },
    { path: "/reviews", changeFrequency: "weekly", priority: 0.7 },
    { path: "/book-tour", changeFrequency: "monthly", priority: 0.8 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
    { path: "/refund", changeFrequency: "yearly", priority: 0.3 },
  ];

  return paths.map(({ path, changeFrequency, priority }) => ({
    url: path ? `${SITE_URL}${path}` : `${SITE_URL}/`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
