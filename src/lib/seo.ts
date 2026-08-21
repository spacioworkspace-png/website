import type { Metadata } from "next";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "./site";

export function pageMeta({
  title,
  description,
  path,
  noindex = false,
  ogImage = OG_IMAGE,
  ogAlt,
}: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  ogImage?: string;
  ogAlt?: string;
}): Metadata {
  const url = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
  const image = {
    url: ogImage,
    width: 1200,
    height: 630,
    alt: ogAlt ?? title,
  };

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}
