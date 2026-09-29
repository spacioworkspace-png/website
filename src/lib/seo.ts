import type { Metadata } from "next";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "./site";

/**
 * Canonical host is always https://www.spacioworkspace.com (non-www 301s in next.config).
 * Paths never end with a trailing slash except the homepage.
 */
export function normalizePath(path: string): string {
  if (!path || path === "/") return "/";
  const withSlash = path.startsWith("/") ? path : `/${path}`;
  const trimmed = withSlash.replace(/\/+$/, "");
  return trimmed || "/";
}

export function absoluteUrl(path: string): string {
  const normalized = normalizePath(path);
  return normalized === "/" ? `${SITE_URL}/` : `${SITE_URL}${normalized}`;
}

function absoluteAsset(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
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
  const pagePath = normalizePath(path);
  const canonicalTarget = normalizePath(canonicalPath ?? path);
  const url = absoluteUrl(pagePath);
  const canonical = absoluteUrl(canonicalTarget);
  const resolvedImage = absoluteAsset(ogImage);

  const image = {
    url: resolvedImage,
    width: 1200,
    height: 630,
    alt: ogAlt ?? title,
  };

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    ...(keywords?.length ? { keywords } : {}),
    alternates: {
      canonical,
    },
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
      images: [resolvedImage],
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
