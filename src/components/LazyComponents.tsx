"use client";
import dynamic from "next/dynamic";

// Lazy load heavy components to improve initial page load
export const FloatingWhatsApp = dynamic(() => import("@/components/FloatingWhatsApp").then(mod => ({ default: mod.FloatingWhatsApp })), {
  ssr: false,
});

export const LeadCaptureModal = dynamic(() => import("@/components/LeadCaptureModal").then(mod => ({ default: mod.LeadCaptureModal })), {
  ssr: false,
});

export const ExitIntentLeadCapture = dynamic(() => import("@/components/ExitIntentLeadCapture").then(mod => ({ default: mod.ExitIntentLeadCapture })), {
  ssr: false,
});

export const ScrollBasedLeadCapture = dynamic(() => import("@/components/ScrollBasedLeadCapture").then(mod => ({ default: mod.ScrollBasedLeadCapture })), {
  ssr: false,
});

