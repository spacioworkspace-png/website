import { MetadataRoute } from "next";
import { GALLERY_IMAGES, PLANS, SITE_UPDATED, SITE_URL } from "@/lib/site";

export const revalidate = 3600;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(SITE_UPDATED);

  const pages: { path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number; images?: string[] }[] = [
    {
      path: "",
      changeFrequency: "weekly",
      priority: 1,
      images: GALLERY_IMAGES.map((image) => `${SITE_URL}${image.src}`),
    },
    { path: "/about", changeFrequency: "monthly", priority: 0.8 },
    {
      path: "/workspaces",
      changeFrequency: "weekly",
      priority: 0.9,
      images: PLANS.map((plan) => `${SITE_URL}${plan.image}`),
    },
    ...PLANS.map((plan) => ({
      path: plan.path,
      changeFrequency: "weekly" as const,
      priority: 0.9,
      images: [`${SITE_URL}${plan.image}`],
    })),
    { path: "/pricing", changeFrequency: "weekly", priority: 0.9 },
    {
      path: "/locations/basavanagudi",
      changeFrequency: "weekly",
      priority: 0.9,
      images: [`${SITE_URL}/images/building-exterior-sree-devi-complex.jpg`],
    },
    {
      path: "/gallery",
      changeFrequency: "monthly",
      priority: 0.7,
      images: GALLERY_IMAGES.map((image) => `${SITE_URL}${image.src}`),
    },
    { path: "/reviews", changeFrequency: "weekly", priority: 0.7 },
    { path: "/book-tour", changeFrequency: "monthly", priority: 0.8 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
    { path: "/refund", changeFrequency: "yearly", priority: 0.3 },
  ];

  return pages.map(({ path, changeFrequency, priority, images }) => ({
    url: path ? `${SITE_URL}${path}` : `${SITE_URL}/`,
    lastModified,
    changeFrequency,
    priority,
    ...(images ? { images } : {}),
  }));
}
