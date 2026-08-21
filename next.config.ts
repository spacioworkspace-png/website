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
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
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
    optimizePackageImports: ['lucide-react', 'framer-motion'],
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
        source: "/day-pass-bangalore",
        destination: "/workspaces/day-pass",
        permanent: true,
      },
      {
        source: "/meeting-rooms-bangalore",
        destination: "/workspaces/meeting-rooms",
        permanent: true,
      },
      {
        source: "/private-cabins-bangalore",
        destination: "/workspaces/solo-cabin",
        permanent: true,
      },
      {
        source: "/virtual-office-bangalore",
        destination: "/workspaces/virtual-office",
        permanent: true,
      },
      {
        source: "/pricing-bangalore",
        destination: "/pricing",
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
