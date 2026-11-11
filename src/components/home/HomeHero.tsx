import Image from "next/image";
import Link from "next/link";
import { CallLink, WhatsAppLink } from "@/components/ContactCtas";
import { WA } from "@/lib/whatsapp-messages";
import styles from "./HomeHero.module.css";

/** Optimized private cabin — best LCP asset for premium hero photography. */
const HERO_IMAGE = "/images/hero-solo-cabin.jpg";

export function HomeHero() {
  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Boutique coworking · Basavanagudi, South Bengaluru</p>

          <h1 id="hero-heading" className={styles.title}>
            A better place to do your best work.
          </h1>

          <p className={styles.lead}>
            Thoughtfully designed workspaces for independent minds, ambitious founders and growing
            businesses in the heart of Basavanagudi.
          </p>

          <div className={styles.ctas}>
            <Link href="/workspaces" className={styles.primaryCta}>
              Explore Workspaces
            </Link>
            <Link href="/book-tour" className={styles.secondaryCta}>
              Schedule a Private Tour
            </Link>
          </div>

          <div className={styles.contactCtas}>
            <CallLink location="home_hero_call" className={styles.secondaryCta} variant="inherit" />
            <WhatsAppLink
              location="home_hero_whatsapp"
              message={WA.general}
              className={styles.secondaryCta}
              variant="inherit"
            />
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

          <p className={styles.locale}>Private cabins · Dedicated desks · Day pass · Virtual office</p>
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
              quality={68}
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
