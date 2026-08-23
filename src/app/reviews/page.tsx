import { GoogleReviews } from "@/components/GoogleReviews";
import { MemberTestimonialsSection } from "@/components/MemberTestimonialsSection";
import { PlanVideoSection } from "@/components/PlanVideoSection";

export default function ReviewsPage() {
  return (
    <div className="bg-white min-h-screen">
      <GoogleReviews />
      <MemberTestimonialsSection pagePath="/reviews" />
      <PlanVideoSection showAllTours />
    </div>
  );
}
