import Image from "next/image";
import Link from "next/link";
import { PHONE_TEL, whatsappUrl } from "@/lib/site";
import styles from "./HomeHero.module.css";

/** Optimized private cabin — best LCP asset for premium hero photography. */
const HERO_IMAGE = "/images/hero-solo-cabin.jpg";

export function HomeHero() {
  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Premium Coworking Space in Basavanagudi, Bangalore</p>

          <h1 id="hero-heading" className={styles.title}>
            A better place to do your best work.
          </h1>

          <p className={styles.lead}>
            Private cabins, dedicated desks, meeting rooms and virtual offices for professionals,
            founders and growing teams in South Bangalore.
          </p>

          <div className={styles.ctas}>
            <Link href="/book-tour" className={styles.primaryCta}>
              Book a Free Tour
            </Link>
            <Link href="/workspaces" className={styles.secondaryCta}>
              Explore Workspaces
            </Link>
          </div>

          <div className={styles.contactCtas}>
            <a href={PHONE_TEL} className={styles.secondaryCta}>
              Call Us
            </a>
            <a
              href={whatsappUrl("Hi! I'd like to know more about Spacio Workspace in Basavanagudi")}
              className={styles.secondaryCta}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>

          <p className={styles.trust}>
            <Link href="/reviews" className={styles.trustLink}>
              Google Reviews
            </Link>
            {" · "}
            1 Gbps Internet
            {" · "}
            24/7 Access for members
          </p>

          <p className={styles.locale}>Namma Basavanagudi · South Bangalore</p>
        </div>

        <div className={styles.media}>
          <figure className={styles.figure}>
            <Image
              src={HERO_IMAGE}
              alt="Private solo cabin interior at Spacio Workspace, Basavanagudi, Bangalore"
              fill
              className={styles.image}
              priority
              fetchPriority="high"
              quality={72}
              sizes="(max-width: 1023px) 100vw, 55vw"
            />
            <figcaption className={styles.locationCard}>
              <span className={styles.locationCardTitle}>Spacio Workspace</span>
              <span className={styles.locationCardSub}>Basavanagudi · Bangalore</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
