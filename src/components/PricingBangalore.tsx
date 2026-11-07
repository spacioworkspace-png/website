import Link from "next/link";
import { ContactCtaPair } from "@/components/ContactCtas";
import { PlanVideoSection } from "@/components/PlanVideoSection";
import { PLANS, whatsappUrl } from "@/lib/site";
import { WA } from "@/lib/whatsapp-messages";

export default function PricingBangalore() {
  return (
    <div className="bg-white min-h-screen">
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24 text-center">
        <span className="badge-premium mb-4 inline-block">Basavanagudi</span>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Request a custom quote
        </h1>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
          Spacio Workspace membership options for private cabins, dedicated desks, day passes,
          meeting rooms and virtual office in Basavanagudi. WhatsApp us for current details.
        </p>
        <ContactCtaPair
          location="pricing-bangalore-hero"
          whatsappMessage={WA.quote}
          whatsappLabel="Request a Custom Quote"
          callLabel="Speak With Our Team"
          className="justify-center"
        />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <article key={plan.id} className="rounded-2xl border border-neutral-200 p-6 bg-white">
              <h2 className="text-xl font-bold text-neutral-900">{plan.name}</h2>
              <p className="mt-2 text-sm text-neutral-600">{plan.shortDescription}</p>
              <a
                href={whatsappUrl(WA.membership)}
                className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                Enquire About Availability
              </a>
              <Link href={plan.path} className="mt-3 block text-center text-sm font-semibold text-primary">
                Learn more →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <PlanVideoSection showAllTours />
    </div>
  );
}
