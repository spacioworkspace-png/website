import { MemberTestimonialsSection } from "@/components/MemberTestimonialsSection";

type PlanTestimonialSectionProps = {
  planId: string;
  pagePath: string;
  className?: string;
};

/** Relevant member testimonial videos for a workspace plan page. */
export function PlanTestimonialSection({ planId, pagePath, className }: PlanTestimonialSectionProps) {
  return (
    <MemberTestimonialsSection
      planId={planId}
      pagePath={pagePath}
      className={`!bg-neutral-50 ${className ?? ""}`}
    />
  );
}
