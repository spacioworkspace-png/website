import Image from "next/image";
import Link from "next/link";
import { PlanSeo } from "@/components/PlanSeo";
import { PlanVideoSection } from "@/components/PlanVideoSection";
import { RelatedPlans } from "@/components/RelatedPlans";
import { HeroContactRow, WhatsAppLink, CallLink } from "@/components/ContactCtas";
import { Reveal } from "@/components/Reveal";
import { whatsappUrl } from "@/lib/site";

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
    <div className="bg-white min-h-screen">
      <section className="relative bg-gradient-to-br from-primary/10 via-orange-50/40 to-white">
        <div className="absolute inset-0 gradient-mesh opacity-40 pointer-events-none" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 md:py-20 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <span className="badge-premium mb-4 inline-block">{eyebrow}</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4 tracking-tight">
              {title}
            </h1>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">{lead}</p>
            <HeroContactRow
              className="mb-6"
              location={trackingLocation}
              whatsappMessage={whatsappMessage}
              whatsappLabel="WhatsApp Enquiry"
              bookTourLabel="Book Free Tour"
            />
            {highlights.length > 0 ? (
              <ul className="flex flex-wrap gap-3 text-sm text-neutral-600">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center rounded-full bg-primary/10 text-primary px-3 py-1.5 font-medium"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border border-primary/10">
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

      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-3">
              Why choose this workspace?
            </h2>
            <p className="text-neutral-600">Designed around how you actually work at Spacio.</p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 40}>
                <div className="card-premium rounded-2xl border border-neutral-200 p-6 hover:border-primary/40 bg-gradient-to-br from-white to-orange-50/30 h-full">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">{feature.title}</h3>
                  <p className="text-neutral-700 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2 items-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">{storyTitle}</h2>
            <div className="space-y-4 text-neutral-700 leading-relaxed">
              {storyBody.map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
              ))}
            </div>
            <ul className="mt-6 space-y-3">
              {storyBullets.map((item) => (
                <li key={item} className="flex gap-3 text-neutral-700 text-sm">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={80}>
            <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-xl">
              <Image src={storyImage} alt={storyImageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">{termsTitle}</h2>
          <p className="text-neutral-700 leading-relaxed mb-8">{termsBody}</p>
          <div className="rounded-3xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-white p-6 sm:p-8 mb-8">
            <ul className="grid gap-3 sm:grid-cols-2 text-left text-sm text-neutral-700">
              {termsFacts.map((fact) => (
                <li key={fact} className="rounded-xl bg-white/80 border border-primary/10 px-4 py-3">
                  {fact}
                </li>
              ))}
            </ul>
            <a
              href={whatsappUrl(whatsappMessage)}
              className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-xl bg-primary px-8 py-3.5 text-white font-semibold hover:bg-primary/90 shadow-lg shadow-primary/20"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-br from-orange-50/60 to-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 text-center mb-10">Perfect for</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {audiences.map((item) => (
              <div key={item.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-white to-orange-50">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">{ctaTitle}</h2>
          <p className="text-neutral-700 mb-8 leading-relaxed">{ctaBody}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <WhatsAppLink message={whatsappMessage} location={`${trackingLocation}-cta-whatsapp`}>
              WhatsApp Us
            </WhatsAppLink>
            <CallLink location={`${trackingLocation}-cta-call`} />
            <Link
              href="/book-tour"
              className="rounded-xl border border-primary px-6 py-3 text-primary font-semibold hover:bg-primary hover:text-white transition-all min-h-[44px] inline-flex items-center"
            >
              Book Free Tour
            </Link>
          </div>
        </div>
      </section>

      <PlanSeo planId={planId} />
      <RelatedPlans links={related} />
    </div>
  );
}
