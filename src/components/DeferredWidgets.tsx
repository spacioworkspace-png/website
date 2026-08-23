"use client";

import dynamic from "next/dynamic";

const Breadcrumbs = dynamic(
  () => import("@/components/Breadcrumbs").then((m) => ({ default: m.Breadcrumbs })),
  { ssr: false }
);

const FloatingContact = dynamic(
  () => import("@/components/FloatingContact").then((m) => ({ default: m.FloatingContact })),
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
      <FloatingContact />
      <Analytics />
    </>
  );
}
