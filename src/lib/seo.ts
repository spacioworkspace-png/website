import type { Metadata } from "next";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "./site";

function absoluteUrl(path: string) {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

export function pageMeta({
  title,
  description,
  path,
  canonicalPath,
  noindex = false,
  ogImage = OG_IMAGE,
  ogAlt,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  /** Override canonical when an ad landing page mirrors a primary URL. */
  canonicalPath?: string;
  noindex?: boolean;
  ogImage?: string;
  ogAlt?: string;
  keywords?: string[];
}): Metadata {
  const url = absoluteUrl(path);
  const canonical = absoluteUrl(canonicalPath ?? path);
  const image = {
    url: ogImage,
    width: 1200,
    height: 630,
    alt: ogAlt ?? title,
  };

  return {
    title,
    description,
    ...(keywords?.length ? { keywords } : {}),
    alternates: { canonical },
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
