import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    formats: ["image/avif", "image/webp"],
    // Mobile-first widths; skip oversized desktop variants that inflate delivery
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [],
  },
  // Optimize production builds
  compress: true,
  poweredByHeader: false,
  // Note: swcMinify is enabled by default in Next.js 16+ (no need to configure)
  // SWC (Speedy Web Compiler) handles minification automatically
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion", "@vercel/analytics"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/:file(.*)\\.(mp4|webm|vtt|woff2)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/captions/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/:file(og-image.jpg|favicon.ico|logo.png|manifest.json|llms.txt|ads.txt)",
        headers: [{ key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=2592000" }],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/",
        has: [{ type: "host", value: "spacioworkspace.com" }],
        destination: "https://www.spacioworkspace.com/",
        statusCode: 301,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "spacioworkspace.com" }],
        destination: "https://www.spacioworkspace.com/:path*",
        statusCode: 301,
      },
      {
        source: "/tour",
        destination: "/book-tour",
        permanent: true,
      },
      {
        source: "/features",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
