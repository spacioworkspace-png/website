"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { JsonLd } from "./JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";

const LABELS: Record<string, string> = {
  about: "About",
  workspaces: "Workspaces",
  pricing: "Pricing",
  locations: "Locations",
  basavanagudi: "Basavanagudi",
  gallery: "Gallery",
  reviews: "Reviews",
  contact: "Contact",
  "book-tour": "Book a tour",
  "solo-cabin": "Solo cabin",
  "three-seater-cabin": "3-seater cabin",
  "six-seater-cabin": "6-seater cabin",
  "dedicated-desks": "Dedicated desks",
  "day-pass": "Day pass",
  "meeting-rooms": "Meeting rooms",
  "virtual-office": "Virtual office",
  privacy: "Privacy",
  terms: "Terms",
  refund: "Refund",
};

export function Breadcrumbs() {
  const pathname = usePathname() || "/";
  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);
  const crumbs = [
    { name: "Home", path: "/" },
    ...segments.map((segment, index) => ({
      name: LABELS[segment] ?? segment.replace(/-/g, " "),
      path: `/${segments.slice(0, index + 1).join("/")}`,
    })),
  ];

  return (
    <nav aria-label="Breadcrumb" className="border-b border-neutral-100 bg-white">
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <ol className="mx-auto flex max-w-7xl flex-wrap gap-1 px-4 py-3 text-sm text-neutral-600">
        {crumbs.map((crumb, index) => {
          const last = index === crumbs.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-1">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {last ? (
                <span className="font-medium text-neutral-900" aria-current="page">
                  {crumb.name}
                </span>
              ) : (
                <Link href={crumb.path} className="hover:text-primary">
                  {crumb.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
