"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const IMAGES = [
  { src: "/images/solo-cabin-workspace.jpg", alt: "Solo private cabin at Spacio" },
  { src: "/images/3-seater-cabin-orange-screens.jpg", alt: "3-seater cabin at Spacio" },
  { src: "/images/6-seater-cabin-workspace.jpg", alt: "6-seater cabin at Spacio" },
  { src: "/images/workspace-numbered-cabins.jpg", alt: "Dedicated desk bay at Spacio" },
  { src: "/images/meeting-room-frosted-glass.jpg", alt: "Meeting room at Spacio" },
  { src: "/images/office-corridor-glass-partitions.jpg", alt: "Corridor at Spacio Workspace" },
  { src: "/images/building-exterior-sree-devi-complex.jpg", alt: "Spacio building exterior" },
  { src: "/images/spacio-sign-green-wall.jpg", alt: "Spacio Workspace signage" },
];

export function MobileGallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => (i === null ? 0 : (i + 1) % IMAGES.length));
      if (e.key === "ArrowLeft")
        setActive((i) => (i === null ? 0 : (i - 1 + IMAGES.length) % IMAGES.length));
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <>
      <div className="mobile-gallery-track px-[var(--m-pad)]">
        {IMAGES.map((img, index) => (
          <button
            key={img.src}
            type="button"
            className="relative aspect-[4/5] overflow-hidden bg-[var(--m-stone)] text-left"
            onClick={() => setActive(index)}
            aria-label={`Expand photo: ${img.alt}`}
          >
            <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="86vw" loading="lazy" />
          </button>
        ))}
      </div>

      {active !== null ? (
        <div
          className="fixed inset-0 z-[70] bg-black/95 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded gallery image"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 text-white min-h-11 min-w-11"
            aria-label="Close lightbox"
            onClick={() => setActive(null)}
          >
            ✕
          </button>
          <div
            className="relative w-full max-w-lg aspect-[3/4]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={IMAGES[active].src}
              alt={IMAGES[active].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
