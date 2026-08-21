import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const allowAi = {
    allow: "/",
    disallow: ["/api/", "/_next/", "/admin/"],
  };

  return {
    rules: [
      { userAgent: "*", ...allowAi },
      { userAgent: "Googlebot", ...allowAi },
      { userAgent: "Google-Extended", ...allowAi },
      { userAgent: "GPTBot", ...allowAi },
      { userAgent: "ChatGPT-User", ...allowAi },
      { userAgent: "PerplexityBot", ...allowAi },
      { userAgent: "ClaudeBot", ...allowAi },
      { userAgent: "Anthropic-AI", ...allowAi },
      { userAgent: "Applebot-Extended", ...allowAi },
      { userAgent: "Bingbot", ...allowAi },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
