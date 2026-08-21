import { FaqSection } from "./FaqSection";
import { JsonLd } from "./JsonLd";
import { serviceOfferJsonLd } from "@/lib/schema";
import { getPlan } from "@/lib/site";

export function PlanSeo({ planId }: { planId: string }) {
  const plan = getPlan(planId);
  if (!plan) return null;

  return (
    <>
      <JsonLd data={serviceOfferJsonLd(planId)} />
      <FaqSection items={plan.faqs} title={`Questions about ${plan.name}`} />
    </>
  );
}
