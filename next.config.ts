import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    // Optimized device sizes for mobile-first approach
    deviceSizes: [640, 750, 828, 1080, 1280],
    imageSizes: [64, 96, 128, 256, 384],
    minimumCacheTTL: 86400,
    // Optimize for mobile - reduce quality on smaller screens
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Mobile optimization - serve smaller images on mobile devices
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
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/:file(og-image.jpg|favicon.ico|logo.png|manifest.json|llms.txt|ads.txt|spacio-hero.jpg|hero-solo-cabin.jpg)",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }],
      },
    ];
  },
  async redirects() {
    return [
      // Enforce HTTPS + www (preferred host for all canonicals)
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
      // Strip trailing slashes so canonicals and crawl paths stay consistent
      {
        source: "/:path+/",
        destination: "/:path+",
        permanent: true,
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
      {
        source: "/locations/jayanagar",
        destination: "/locations/basavanagudi",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
