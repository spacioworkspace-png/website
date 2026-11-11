"use client";

import { useSyncExternalStore } from "react";
import { HomeHero } from "@/components/home/HomeHero";
import { HomePage } from "@/components/HomePage";
import { MobileHero } from "@/components/mobile/MobileHero";
import { MobileHomePage } from "@/components/mobile/MobileHomePage";

function subscribe(onStoreChange: () => void) {
  const mq = window.matchMedia("(min-width: 1024px)");
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getSnapshot() {
  return window.matchMedia("(min-width: 1024px)").matches;
}

function getServerSnapshot() {
  // Mobile-first SSR matches Google mobile indexing and halves homepage DOM.
  return false;
}

/** Mounts one homepage tree per viewport — cuts DOM size vs dual CSS-hidden trees. */
export function ResponsiveHome() {
  const isDesktop = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (isDesktop) {
    return (
      <>
        <HomeHero />
        <HomePage />
      </>
    );
  }

  return (
    <>
      <MobileHero />
      <MobileHomePage />
    </>
  );
}
