import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CabinDeskCompare() {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-3 text-center">
          Private cabin or dedicated desk?
        </h2>
        <p className="text-neutral-600 text-center max-w-2xl mx-auto mb-8">
          Both are at Spacio Basavanagudi with 1Gbps internet and 24/7 access. Pick the enclosed cabin if you need a door. Pick the desk if you want a reserved seat at a lower monthly rate.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-neutral-200 bg-white">
          <table className="w-full text-sm text-left">
            <thead className="bg-neutral-50 text-neutral-700">
              <tr>
                <th className="p-4 font-semibold"> </th>
                <th className="p-4 font-semibold">
                  <Link href="/workspaces/solo-cabin" className="text-primary hover:underline">
                    Solo cabin
                  </Link>
                </th>
                <th className="p-4 font-semibold">
                  <Link href="/workspaces/dedicated-desks" className="text-primary hover:underline">
                    Dedicated desk
                  </Link>
                </th>
              </tr>
            </thead>
            <tbody className="text-neutral-700">
              <tr className="border-t">
                <td className="p-4 font-medium">Starting price</td>
                <td className="p-4">₹8,499 / month</td>
                <td className="p-4">₹3,499 / month</td>
              </tr>
              <tr className="border-t bg-neutral-50/60">
                <td className="p-4 font-medium">Space</td>
                <td className="p-4">Enclosed private cabin, 1 person</td>
                <td className="p-4">Assigned desk in the shared workspace</td>
              </tr>
              <tr className="border-t">
                <td className="p-4 font-medium">Best if you</td>
                <td className="p-4">Take confidential calls or need a door for clients</td>
                <td className="p-4">Want a fixed seat without a private room</td>
              </tr>
              <tr className="border-t bg-neutral-50/60">
                <td className="p-4 font-medium">Access</td>
                <td className="p-4">24/7</td>
                <td className="p-4">24/7</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/workspaces/solo-cabin"
            className="rounded-xl bg-primary px-5 py-3 text-white font-semibold inline-flex items-center gap-2"
          >
            View private cabins
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/workspaces/dedicated-desks"
            className="rounded-xl border-2 border-primary px-5 py-3 text-primary font-semibold"
          >
            View dedicated desks
          </Link>
        </div>
      </div>
    </section>
  );
}
