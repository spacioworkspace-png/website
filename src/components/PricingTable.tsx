import Link from "next/link";
import { PLANS, whatsappUrl } from "@/lib/site";
import { WA } from "@/lib/whatsapp-messages";

export function PricingTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm border-collapse">
        <thead>
          <tr className="border-b border-neutral-200">
            <th className="p-4 font-semibold">Workspace</th>
            <th className="p-4 font-semibold">Type</th>
            <th className="p-4 font-semibold">Next step</th>
          </tr>
        </thead>
        <tbody>
          {PLANS.map((plan) => (
            <tr key={plan.id} className="border-b border-neutral-100">
              <td className="p-4">
                <Link href={plan.path} className="font-semibold text-primary hover:underline">
                  {plan.name}
                </Link>
              </td>
              <td className="p-4 text-neutral-600">{plan.unitLabel}</td>
              <td className="p-4">
                <a
                  href={whatsappUrl(WA.membership)}
                  className="font-semibold text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enquire
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
