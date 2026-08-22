"use client";
import { GoogleReviews } from "@/components/GoogleReviews";
import { PlanVideoSection } from "@/components/PlanVideoSection";

export default function ReviewsPage() {
  return (
    <div className="bg-white min-h-screen">
      <GoogleReviews />
      <PlanVideoSection showAllTours />
    </div>
  );
}
