import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const DISALLOW = ["/api/", "/_next/", "/admin/"];

const RULE = {
  allow: "/" as const,
  disallow: DISALLOW,
};

/** Crawlers used by Google Search, Google Ads, Meta Ads, and AI answer engines. */
const USER_AGENTS = [
  "*",
  "Googlebot",
  "Googlebot-Image",
  "Google-Extended",
  "AdsBot-Google",
  "AdsBot-Google-Mobile",
  "Mediapartners-Google",
  "Storebot-Google",
  "Bingbot",
  "FacebookBot",
  "Facebot",
  "meta-externalagent",
  "Twitterbot",
  "LinkedInBot",
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "PerplexityBot",
  "ClaudeBot",
  "Anthropic-AI",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: USER_AGENTS.map((userAgent) => ({ userAgent, ...RULE })),
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
