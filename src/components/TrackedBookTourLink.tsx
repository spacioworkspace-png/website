"use client";

import Link from "next/link";
import { trackBookTourClick } from "@/lib/tracking";

type Props = {
  href?: string;
  location: string;
  children: React.ReactNode;
  className?: string;
};

/** Book-tour link with GA4 / GTM click tracking. */
export function TrackedBookTourLink({
  href = "/book-tour",
  location,
  children,
  className = "",
}: Props) {
  return (
    <Link href={href} className={className} onClick={() => trackBookTourClick(location)}>
      {children}
    </Link>
  );
}
