"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

const ITEMS = [
  { href: "/workspaces", label: "All workspaces" },
  { href: "/workspaces/solo-cabin", label: "Private cabins" },
  { href: "/workspaces/three-seater-cabin", label: "3-seater cabin" },
  { href: "/workspaces/six-seater-cabin", label: "6-seater cabin" },
  { href: "/workspaces/dedicated-desks", label: "Dedicated desks" },
  { href: "/workspaces/day-pass", label: "Day pass" },
  { href: "/workspaces/virtual-office", label: "Virtual office" },
  { href: "/workspaces/meeting-rooms", label: "Meeting rooms" },
];

export function WorkspacesNav() {
  const [open, setOpen] = useState(false);
  const id = useId();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="px-3 py-2 text-sm font-medium text-neutral-700 hover:text-primary rounded-xl hover:bg-primary/5 transition-colors inline-flex items-center gap-1"
        aria-expanded={open}
        aria-controls={id}
        aria-haspopup="menu"
        onClick={() => setOpen((v) => !v)}
      >
        Workspaces
        <svg className="w-3.5 h-3.5 opacity-70" viewBox="0 0 12 12" fill="none" aria-hidden>
          <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      <div
        id={id}
        role="menu"
        hidden={!open}
        className="absolute left-0 top-full z-50 min-w-[220px] pt-2"
      >
        <ul className="rounded-xl border border-neutral-200 bg-white py-2 shadow-lg shadow-neutral-900/5">
          {ITEMS.map((item) => (
            <li key={item.href} role="none">
              <Link
                role="menuitem"
                href={item.href}
                className="block px-4 py-2.5 text-sm text-neutral-700 hover:bg-primary/5 hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
