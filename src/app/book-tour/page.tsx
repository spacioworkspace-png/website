import { Metadata } from "next";
import { BookTourForm } from "@/components/BookTourForm";
import { FaqSection } from "@/components/FaqSection";
import { PlanVideoSection } from "@/components/PlanVideoSection";
import { PublicTransportSection } from "@/components/PublicTransportSection";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta } from "@/lib/seo";
import { SEO_KEYWORDS } from "@/lib/seo-keywords";
import { howToTourJsonLd } from "@/lib/schema";
import { SITE_FAQS } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Book a Free Tour | Office Space & Coworking Basavanagudi",
  description:
    "Book a free tour of office space in Basavanagudi. See private cabins, dedicated desks and meeting rooms at Spacio Workspace, near Bull Temple and Lalbagh.",
  path: "/book-tour",
  keywords: [...SEO_KEYWORDS.location, "book coworking tour Basavanagudi"],
});

export default function BookTourPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative mx-auto max-w-7xl px-4 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="relative z-10 text-center mb-12">
          <span className="badge-premium mb-4 inline-block">Book Your Free Tour</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mt-4">
            <span className="text-gradient">Experience Spacio</span> Today
          </h1>
          <p className="mt-6 text-lg md:text-xl text-neutral-700 max-w-2xl mx-auto">
            See the private cabins, dedicated desks and meeting rooms at our Basavanagudi centre. 
            Book your free tour and experience premium coworking firsthand.
          </p>
        </div>
        <PlanVideoSection showAllTours className="!bg-white !border-0 py-8 md:py-12" />
        <BookTourForm />
        <PublicTransportSection />
        <JsonLd data={howToTourJsonLd()} />
        <FaqSection items={[SITE_FAQS[5], SITE_FAQS[0], SITE_FAQS[2]]} title="Before you visit" />
      </section>
    </div>
  );
}

