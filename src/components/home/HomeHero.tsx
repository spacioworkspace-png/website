import Image from "next/image";
import Link from "next/link";
import styles from "./HomeHero.module.css";

const HERO_IMAGE = "/images/hero-solo-cabin.jpg";

export function HomeHero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[78vh] md:min-h-[88vh] w-full overflow-hidden bg-[var(--navy-deep)]"
    >
      <Image
        src={HERO_IMAGE}
        alt="Private cabin interior at Spacio Workspace, Basavanagudi"
        fill
        priority
        fetchPriority="high"
        quality={75}
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[var(--navy-deep)]/88 via-[var(--navy-deep)]/55 to-[var(--navy-deep)]/25"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/70 via-transparent to-[var(--navy-deep)]/35" aria-hidden />

      <div className="relative z-10 mx-auto flex min-h-[78vh] md:min-h-[88vh] max-w-7xl flex-col justify-end md:justify-center px-4 sm:px-6 pb-16 pt-28 md:pb-24 md:pt-32">
        <div className={`max-w-2xl ${styles["hero-copy"]}`}>
          <p className="font-display text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-5 md:mb-6">
            Spacio Workspace
          </p>
          <p className="eyebrow text-[var(--champagne)] mb-4">
            A boutique workspace in South Bengaluru
          </p>
          <h1
            id="hero-heading"
            className="font-display text-[2rem] sm:text-5xl md:text-6xl lg:text-[3.75rem] font-medium text-white leading-[1.12] tracking-tight"
          >
            A better place to do your best work.
          </h1>
          <p className="mt-5 md:mt-6 text-base md:text-lg text-white/80 max-w-xl leading-relaxed">
            Thoughtfully designed workspaces for independent minds, ambitious founders and growing
            teams in the heart of Basavanagudi.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="/workspaces"
              className="inline-flex min-h-[48px] items-center justify-center rounded-sm bg-[var(--champagne)] px-7 text-sm font-semibold tracking-wide text-[var(--navy-deep)] transition-opacity hover:opacity-90"
            >
              Explore Workspaces
            </Link>
            <Link
              href="/book-tour"
              className="inline-flex min-h-[48px] items-center justify-center rounded-sm border border-white/35 bg-white/5 px-7 text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              Schedule a Private Tour
            </Link>
          </div>
          <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">
            Basavanagudi · South Bengaluru
          </p>
        </div>
      </div>
    </section>
  );
}
