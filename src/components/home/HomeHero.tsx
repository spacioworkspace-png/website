import Image from "next/image";
import Link from "next/link";
import { whatsappUrl } from "@/lib/site";
import { WA } from "@/lib/whatsapp-messages";
import styles from "./HomeHero.module.css";

const HERO_IMAGE = "/images/hero-solo-cabin.jpg";

export function HomeHero() {
  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Spacio Workspace · Basavanagudi, Bengaluru</p>

          <h1 id="hero-heading" className={styles.title}>
            Your Next Big Idea Deserves a Better Space.
          </h1>

          <p className={styles.lead}>
            Thoughtfully designed workspaces for founders, professionals, growing teams and independent
            thinkers in Basavanagudi, Bengaluru.
          </p>

          <div className={styles.ctas}>
            <Link href="/book-tour" className={styles.primaryCta}>
              Book a Tour
            </Link>
            <a
              href={whatsappUrl(WA.general)}
              className={styles.secondaryCta}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Us (opens in a new window)"
            >
              WhatsApp Us
            </a>
          </div>

          <p className={styles.trust}>
            <Link href="/reviews" className={styles.trustLink}>
              Member stories & Google reviews
            </Link>
            {" · "}
            1 Gbps Internet
            {" · "}
            24/7 Access for members
          </p>

          <p className={styles.locale}>Near Gandhi Bazaar · South Bengaluru</p>
        </div>

        <div className={styles.media}>
          <figure className={styles.figure}>
            <Image
              src={HERO_IMAGE}
              alt="Private solo cabin interior at Spacio Workspace, Basavanagudi, Bengaluru"
              fill
              className={styles.image}
              priority
              fetchPriority="high"
              quality={72}
              sizes="(max-width: 1023px) 100vw, 55vw"
            />
            <figcaption className={styles.locationCard}>
              <span className={styles.locationCardTitle}>Spacio Workspace</span>
              <span className={styles.locationCardSub}>Basavanagudi · Bengaluru</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
