import { Metadata } from "next";
import { BookTourForm } from "@/components/BookTourForm";

export const metadata: Metadata = {
  title: "Book Free Tour | Spacio Workspace - Premium Coworking Space Bangalore",
  description: "Book your free tour of Spacio Workspace in Basavanagudi & Jayanagar, Bangalore. See our private cabins, dedicated desks, and premium amenities. Limited spots available!",
  keywords: [
    "book coworking space tour Bangalore",
    "free tour coworking space Basavanagudi",
    "visit coworking space Jayanagar",
    "coworking space tour Bangalore",
    "premium workspace tour",
  ],
};

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
            See why 500+ entrepreneurs choose Spacio as their workspace in Bangalore. 
            Book your free tour and experience premium coworking firsthand.
          </p>
        </div>
        <BookTourForm />
      </section>
    </div>
  );
}

