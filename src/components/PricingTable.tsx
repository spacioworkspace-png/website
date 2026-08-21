import { PLANS } from "@/lib/site";
import Link from "next/link";

export function PricingTable() {
  return (
    <section className="mx-auto max-w-4xl px-4 pb-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-6 text-center">
        Spacio Workspace prices in Basavanagudi
      </h2>
      <div className="overflow-x-auto rounded-2xl border border-neutral-200">
        <table className="w-full text-left text-sm sm:text-base">
          <thead className="bg-neutral-50">
            <tr>
              <th className="px-4 py-3 font-semibold">Plan</th>
              <th className="px-4 py-3 font-semibold">Price</th>
              <th className="px-4 py-3 font-semibold">Details</th>
            </tr>
          </thead>
          <tbody>
            {PLANS.map((plan) => (
              <tr key={plan.id} className="border-t border-neutral-200">
                <td className="px-4 py-3 font-medium">
                  <Link href={plan.path} className="text-primary hover:underline">
                    {plan.name}
                  </Link>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  {plan.price} {plan.unitLabel}
                </td>
                <td className="px-4 py-3 text-neutral-700">{plan.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
