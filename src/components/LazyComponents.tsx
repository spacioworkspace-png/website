"use client";
import dynamic from "next/dynamic";

export const FloatingWhatsApp = dynamic(
  () => import("@/components/FloatingWhatsApp").then((mod) => ({ default: mod.FloatingWhatsApp })),
  { ssr: false }
);
