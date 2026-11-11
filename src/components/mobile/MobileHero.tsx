import Image from "next/image";
import Link from "next/link";

const HERO = "/images/hero-solo-cabin.jpg";

export function MobileHero() {
  return (
    <section
      className="relative isolate min-h-[100svh] w-full overflow-hidden bg-[var(--m-midnight)]"
      aria-labelledby="mobile-hero-heading"
    >
      <Image
        src={HERO}
        alt="Private cabin interior at Spacio Workspace, Basavanagudi"
        fill
        priority
        fetchPriority="high"
        quality={72}
        sizes="100vw"
        className="object-cover object-[center_35%]"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[var(--m-midnight)] via-[var(--m-midnight)]/55 to-[var(--m-midnight)]/40"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-[var(--m-pad)] pb-28 pt-24">
        <div className="m-stagger max-w-md">
          <p className="m-eyebrow m-anim text-[var(--m-champagne)]">Boutique workspace · South Bengaluru</p>
          <p className="m-serif m-anim mt-4 text-3xl text-white tracking-tight">Spacio Workspace</p>
          <h1 id="mobile-hero-heading" className="m-serif m-h1 m-anim mt-3 text-white">
            A better place to do your best work.
          </h1>
          <p className="m-anim mt-4 text-[0.975rem] leading-relaxed text-white/75">
            Thoughtfully designed workspaces for independent minds, ambitious founders and growing
            businesses in Basavanagudi.
          </p>
          <div className="m-anim mt-7 flex flex-col gap-3">
            <Link href="/workspaces" className="m-btn m-btn-primary w-full">
              Explore Workspaces
            </Link>
            <Link href="/book-tour" className="m-btn m-btn-secondary w-full">
              Schedule a Private Tour
            </Link>
          </div>
          <p className="m-anim mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
            Basavanagudi · South Bengaluru
          </p>
        </div>
      </div>
    </section>
  );
}
