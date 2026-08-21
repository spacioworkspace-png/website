import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./site";

export function pageMeta({
  title,
  description,
  path,
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}): Metadata {
  const url = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
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
    },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
