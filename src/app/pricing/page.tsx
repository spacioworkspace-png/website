import Link from "next/link";
import { ContactCtaPair } from "@/components/ContactCtas";
import { FaqSection } from "@/components/FaqSection";
import { PlanVideoSection } from "@/components/PlanVideoSection";
import { PRICING_FAQS, PLANS, whatsappUrl } from "@/lib/site";
import { WA } from "@/lib/whatsapp-messages";

export default function PricingPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24 text-center">
        <span className="badge-premium mb-4 inline-block">Membership</span>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
          Get membership details
        </h1>
        <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
          Tell us what you need — private cabin, dedicated desk, day pass, meeting room or virtual
          office. Our team will share current options and availability.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ContactCtaPair
            location="membership-hero"
            whatsappMessage={WA.membership}
            whatsappLabel="Get Membership Details"
            callLabel="Speak With Our Team"
          />
          <Link
            href="/book-tour"
            className="rounded-xl border border-neutral-300 px-6 py-3 font-semibold text-neutral-900 hover:border-primary hover:text-primary min-h-[44px] inline-flex items-center"
          >
            Book a Private Tour
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16">
        <h2 className="text-2xl font-bold text-neutral-900 text-center mb-8">
          Explore workspace options
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <li
              key={plan.id}
              className="rounded-2xl border border-neutral-200 p-5 bg-white flex flex-col"
            >
              <h3 className="text-lg font-bold text-neutral-900">{plan.name}</h3>
              <p className="mt-2 text-sm text-neutral-600 flex-1">{plan.shortDescription}</p>
              <p className="mt-2 text-xs text-neutral-500">{plan.unitLabel}</p>
              <div className="mt-4 flex flex-col gap-2">
                <Link
                  href={plan.path}
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  View details →
                </Link>
                <a
                  href={whatsappUrl(
                    plan.id.includes("cabin")
                      ? WA.privateCabin
                      : plan.id === "day-pass"
                        ? WA.dayPass
                        : plan.id === "dedicated-desks"
                          ? WA.dedicatedDesk
                          : plan.id === "meeting-rooms"
                            ? WA.meetingRoom
                            : plan.id === "virtual-office"
                              ? WA.virtualOffice
                              : WA.membership
                  )}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {plan.ctaLabel}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <PlanVideoSection showAllTours />
      <FaqSection items={PRICING_FAQS} title="Before you enquire" />
    </div>
  );
}
