"use client";

import dynamic from "next/dynamic";

const Breadcrumbs = dynamic(
  () => import("@/components/Breadcrumbs").then((m) => ({ default: m.Breadcrumbs })),
  { ssr: false }
);

const FloatingWhatsApp = dynamic(
  () => import("@/components/FloatingWhatsApp").then((m) => ({ default: m.FloatingWhatsApp })),
  { ssr: false }
);

const Analytics = dynamic(
  () => import("@vercel/analytics/next").then((m) => ({ default: m.Analytics })),
  { ssr: false }
);

export function DeferredWidgets() {
  return (
    <>
      <Breadcrumbs />
      <FloatingWhatsApp />
      <Analytics />
    </>
  );
}
