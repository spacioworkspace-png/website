"use client";

import Image from "next/image";
import Link from "next/link";
import { PHONE_HREF, whatsappUrl } from "@/lib/site";
import { trackBookTourClick, trackPhoneClick, trackWhatsAppClick } from "@/lib/tracking";
import styles from "./HomeHero.module.css";

/** Optimized private cabin — best LCP asset for premium hero photography. */
const HERO_IMAGE = "/images/hero-solo-cabin.jpg";

export function HomeHero() {
  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Spacio Workspace · Basavanagudi, Bangalore</p>

          <h1 id="hero-heading" className={styles.title}>
            A better place to do your best work.
          </h1>

          <p className={styles.lead}>
            Plug-and-play startup office and premium coworking in Basavanagudi — acoustic soundproof
            cabins, dedicated desks with biometric 24/7 access for members, meeting rooms, and
            lightning-fast 1Gbps internet for freelancers, founders, and Gen Z teams in South
            Bangalore.
          </p>

          <div className={styles.ctas}>
            <Link
              href="/book-tour"
              className={styles.primaryCta}
              onClick={() => trackBookTourClick("home_hero")}
            >
              Book a Free Tour
            </Link>
            <a
              href={whatsappUrl("Hi! I'd like to know more about Spacio Workspace in Basavanagudi")}
              className={styles.secondaryCta}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("home_hero")}
            >
              WhatsApp Spacio
            </a>
          </div>

          <div className={styles.contactCtas}>
            <a
              href={PHONE_HREF}
              className={styles.secondaryCta}
              onClick={() => trackPhoneClick("home_hero")}
            >
              Call Us
            </a>
            <Link href="/workspaces" className={styles.secondaryCta}>
              Explore Workspaces
            </Link>
          </div>

          <p className={styles.trust}>
            <Link href="/reviews" className={styles.trustLink}>
              Google Reviews
            </Link>
            {" · "}
            Lightning-fast 1Gbps internet
            {" · "}
            Biometric 24/7 access for members
          </p>

          <p className={styles.locale}>Namma Basavanagudi · South Bangalore</p>
        </div>

        <div className={styles.media}>
          <figure className={styles.figure}>
            <Image
              src={HERO_IMAGE}
              alt="Acoustic private solo cabin at Spacio Workspace, Basavanagudi, Bangalore"
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
