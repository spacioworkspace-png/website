import Link from "next/link";
import { PLANS, SITE_URL } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";

/** Semantic pricing matrix optimized for AEO extractors + human scanning. */
export function PricingTable({
  title = "Workspace pricing at Spacio Basavanagudi",
  showIntro = true,
}: {
  title?: string;
  showIntro?: boolean;
} = {}) {
  const offerCatalog = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Spacio Workspace pricing",
    itemListElement: PLANS.map((plan, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Offer",
        name: plan.name,
        description: plan.description,
        url: `${SITE_URL}${plan.path}`,
        price: String(plan.priceValue),
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
    })),
  };

  return (
    <section
      className="mx-auto max-w-4xl px-4 pb-8"
      aria-labelledby="pricing-matrix-heading"
    >
      <JsonLd data={offerCatalog} />
      <h2 id="pricing-matrix-heading" className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-3 text-center">
        {title}
      </h2>
      {showIntro ? (
        <p className="text-center text-neutral-600 text-sm sm:text-base mb-6 max-w-2xl mx-auto">
          Day pass ₹199, dedicated desk ₹3,499/mo, solo cabin ₹8,499/mo, and more — clear rates for
          Gen Z founders, freelancers, and growing teams in Basavanagudi.
        </p>
      ) : null}
      <div className="overflow-x-auto rounded-2xl border border-neutral-200">
        <table className="w-full text-left text-sm sm:text-base">
          <caption className="sr-only">
            Spacio Workspace plan prices in Basavanagudi, Bangalore
          </caption>
          <thead className="bg-neutral-50">
            <tr>
              <th scope="col" className="px-4 py-3 font-semibold">
                Plan
              </th>
              <th scope="col" className="px-4 py-3 font-semibold">
                Price
              </th>
              <th scope="col" className="px-4 py-3 font-semibold">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            {PLANS.map((plan) => (
              <tr key={plan.id} className="border-t border-neutral-200">
                <th scope="row" className="px-4 py-3 font-medium text-left">
                  <Link href={plan.path} className="text-primary hover:underline">
                    {plan.name}
                  </Link>
                </th>
                <td className="px-4 py-3 whitespace-nowrap">
                  <strong>{plan.price}</strong> {plan.unitLabel}
                </td>
                <td className="px-4 py-3 text-neutral-700">{plan.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ul className="mt-6 grid sm:grid-cols-2 gap-2 text-sm text-neutral-700 max-w-2xl mx-auto">
        <li>
          <strong>Day pass:</strong> ₹199 per day (9 AM–7 PM)
        </li>
        <li>
          <strong>Dedicated desk:</strong> ₹3,499 per month
        </li>
        <li>
          <strong>Solo cabin:</strong> ₹8,499 per month
        </li>
        <li>
          <strong>Meeting rooms:</strong> from ₹399 per hour
        </li>
      </ul>
    </section>
  );
}
