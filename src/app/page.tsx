import { ResponsiveHome } from "@/components/home/ResponsiveHome";

export default function Page() {
  // LCP uses next/image priority (AVIF/WebP). Do not preload the raw JPG —
  // that bypasses the optimizer and fights the LCP candidate.
  return <ResponsiveHome />;
}
