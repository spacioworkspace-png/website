import Image from "next/image";
import Link from "next/link";
import { PlanSeo } from "@/components/PlanSeo";
import { PlanVideoSection } from "@/components/PlanVideoSection";
import { RelatedPlans } from "@/components/RelatedPlans";
import { HeroContactRow } from "@/components/ContactCtas";
import { Reveal } from "@/components/Reveal";
import { whatsappUrl } from "@/lib/site";
import { WhatsAppLink, CallLink } from "@/components/ContactCtas";

export type ServiceFeature = { title: string; description: string };
export type ServiceAudience = { title: string; description: string };

type ServicePageShellProps = {
  planId: string;
  eyebrow: string;
  title: string;
  lead: string;
  heroImage: string;
  heroImageAlt: string;
  trackingLocation: string;
  whatsappMessage: string;
  highlights?: string[];
  features: ServiceFeature[];
  storyTitle: string;
  storyBody: string[];
  storyBullets: string[];
  storyImage: string;
  storyImageAlt: string;
  termsTitle: string;
  termsBody: string;
  termsFacts: string[];
  audiences: ServiceAudience[];
  ctaTitle: string;
  ctaBody: string;
  related: { href: string; label: string }[];
  /** Optional block rendered after video (e.g. cabin compare). */
  afterVideo?: React.ReactNode;
};

export function ServicePageShell({
  planId,
  eyebrow,
  title,
  lead,
  heroImage,
  heroImageAlt,
  trackingLocation,
  whatsappMessage,
  highlights = [],
  features,
  storyTitle,
  storyBody,
  storyBullets,
  storyImage,
  storyImageAlt,
  termsTitle,
  termsBody,
  termsFacts,
  audiences,
  ctaTitle,
  ctaBody,
  related,
  afterVideo,
}: ServicePageShellProps) {
  return (
    <div className="bg-[var(--ivory)] min-h-screen">
      <section className="border-b border-[var(--warm-stone)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 py-14 md:py-20 lg:grid-cols-2 lg:gap-14 items-center">
          <div>
            <p className="eyebrow text-[var(--primary)] mb-4">{eyebrow}</p>
            <h1 className="section-title text-3xl sm:text-4xl md:text-5xl">{title}</h1>
            <div className="champagne-rule my-6" />
            <p className="text-base md:text-lg text-[var(--muted-grey)] leading-relaxed mb-8">{lead}</p>
            <HeroContactRow
              className="mb-6 [&_a]:rounded-sm"
              location={trackingLocation}
              whatsappMessage={whatsappMessage}
              whatsappLabel="WhatsApp Enquiry"
              bookTourLabel="Schedule a Tour"
            />
            {highlights.length > 0 ? (
              <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--muted-grey)]">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-[var(--champagne)]" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-[var(--warm-stone)]">
            <Image
              src={heroImage}
              alt={heroImageAlt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <PlanVideoSection planId={planId} showAllTours />
      {afterVideo}

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-20">
        <Reveal className="max-w-2xl mb-10">
          <p className="eyebrow text-[var(--primary)] mb-3">What you get</p>
          <h2 className="section-title text-3xl md:text-4xl">Designed for how you work.</h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 40}>
              <div className="border-t border-[var(--champagne)] pt-5 h-full">
                <h3 className="font-display text-xl text-[var(--primary-navy)]">{feature.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted-grey)] leading-relaxed">{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--warm-stone)] bg-[var(--soft-white)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 py-16 md:py-20 lg:grid-cols-2 items-center">
          <Reveal>
            <h2 className="section-title text-3xl md:text-4xl">{storyTitle}</h2>
            <div className="champagne-rule my-6" />
            <div className="space-y-4 text-[var(--muted-grey)] leading-relaxed">
              {storyBody.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
            <ul className="mt-6 space-y-3">
              {storyBullets.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-[var(--charcoal)]">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--champagne)]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={80}>
            <div className="relative aspect-[4/3] overflow-hidden bg-[var(--warm-stone)]">
              <Image src={storyImage} alt={storyImageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-16 md:py-20 text-center">
        <p className="eyebrow text-[var(--primary)] mb-3">Membership</p>
        <h2 className="section-title text-3xl md:text-4xl">{termsTitle}</h2>
        <p className="mt-4 text-[var(--muted-grey)] leading-relaxed">{termsBody}</p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 text-left text-sm text-[var(--charcoal)]">
          {termsFacts.map((fact) => (
            <li key={fact} className="border border-[var(--warm-stone)] bg-[var(--soft-white)] px-4 py-3">
              {fact}
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <a
            href={whatsappUrl(whatsappMessage)}
            className="inline-flex min-h-[48px] items-center justify-center rounded-sm bg-[var(--primary-navy)] px-7 text-sm font-semibold text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </section>

      <section className="border-y border-[var(--warm-stone)] bg-[var(--soft-white)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-20">
          <h2 className="section-title text-3xl md:text-4xl text-center mb-10">Who it suits</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {audiences.map((item) => (
              <div key={item.title} className="border border-[var(--warm-stone)] bg-[var(--ivory)] p-6">
                <h3 className="font-display text-xl text-[var(--primary-navy)]">{item.title}</h3>
                <p className="mt-3 text-sm text-[var(--muted-grey)] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--navy-deep)] text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 md:py-20 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight">{ctaTitle}</h2>
          <p className="mt-4 text-white/70 leading-relaxed">{ctaBody}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <WhatsAppLink
              message={whatsappMessage}
              location={`${trackingLocation}-cta-whatsapp`}
              className="!rounded-sm"
            >
              WhatsApp Us
            </WhatsAppLink>
            <CallLink location={`${trackingLocation}-cta-call`} className="!rounded-sm !border-white/30 !text-white hover:!bg-white/10" />
            <Link
              href="/book-tour"
              className="rounded-sm border border-[var(--champagne)] bg-[var(--champagne)] px-6 py-3 text-sm font-semibold text-[var(--navy-deep)] min-h-[44px] inline-flex items-center"
            >
              Schedule a Tour
            </Link>
          </div>
        </div>
      </section>

      <PlanSeo planId={planId} />
      <RelatedPlans links={related} />
    </div>
  );
}
