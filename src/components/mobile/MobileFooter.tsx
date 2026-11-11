import Link from "next/link";
import { ADDRESS, EMAIL, INSTAGRAM_URL, MAPS_URL, PHONE_DISPLAY, PHONE_HREF, whatsappUrl } from "@/lib/site";
import { WA } from "@/lib/whatsapp-messages";

const services = [
  { href: "/workspaces/day-pass", label: "Day Pass" },
  { href: "/workspaces/dedicated-desks", label: "Dedicated Desks" },
  { href: "/workspaces/virtual-office", label: "Virtual Office" },
  { href: "/workspaces/solo-cabin", label: "Private Cabins" },
  { href: "/workspaces/meeting-rooms", label: "Meeting Rooms" },
];

export function MobileFooter() {
  return (
    <footer className="lg:hidden mobile-shell bg-[var(--m-midnight)] text-white pb-[calc(5.5rem+env(safe-area-inset-bottom))]">
      <div className="px-[var(--m-pad)] py-12">
        <p className="font-[family-name:var(--font-mobile-display)] text-2xl tracking-tight">Spacio Workspace</p>
        <div className="m-rule bg-[var(--m-champagne)]" />
        <p className="text-sm text-white/65 leading-relaxed">
          A more considered way to work — boutique coworking in Basavanagudi for founders, professionals and
          growing teams.
        </p>

        <div className="mt-8 space-y-2 text-sm text-white/75 leading-relaxed">
          <p>{ADDRESS.line}</p>
          <p>
            <a href={PHONE_HREF} className="text-white font-medium">
              {PHONE_DISPLAY}
            </a>
          </p>
          <p>
            <a href={`mailto:${EMAIL}`} className="hover:text-white">
              {EMAIL}
            </a>
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-2.5">
          <a href={whatsappUrl(WA.general)} target="_blank" rel="noopener noreferrer" className="m-btn bg-[#25D366] text-white w-full">
            WhatsApp
          </a>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="m-btn border border-white/25 text-white w-full">
            Google Maps directions
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="m-btn border border-white/25 text-white w-full">
            Instagram
          </a>
        </div>

        <details className="mt-10 border-t border-white/10 pt-6 group">
          <summary className="cursor-pointer list-none text-xs font-semibold uppercase tracking-[0.18em] text-[var(--m-champagne)] flex justify-between items-center min-h-[44px]">
            Workspaces
            <span aria-hidden className="text-white/50 group-open:rotate-45 transition-transform">
              +
            </span>
          </summary>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            {services.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="block py-2 min-h-[40px]">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </details>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4 text-xs text-white/45">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
