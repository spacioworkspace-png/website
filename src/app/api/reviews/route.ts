import { NextResponse } from "next/server";

// Fetch Google Reviews via Places API if env vars are set, otherwise return sample reviews
export async function GET() {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID; // e.g., ChIJ... from Google Maps Place Details

  try {
    if (key && placeId) {
      const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
      url.searchParams.set("place_id", placeId);
      url.searchParams.set("fields", "reviews,rating,user_ratings_total");
      url.searchParams.set("key", key);

      const res = await fetch(url.toString());
      const data = await res.json();
      const reviews = (data?.result?.reviews || []).map((r: any) => ({
        author_name: r.author_name,
        rating: r.rating,
        text: r.text,
      }));
      return NextResponse.json({ reviews });
    }
  } catch (e) {
    // fall back to samples
  }

  // Sample fallback content (replace once env vars provided)
  return NextResponse.json({
    reviews: [
      {
        author_name: "Arjun R.",
        rating: 5,
        text: "Best coworking space in Bangalore with fast Wi‑Fi and calm vibe. Our team loves the Basavanagudi location!",
      },
      {
        author_name: "Priya S.",
        rating: 5,
        text: "Beautiful interiors, ergonomic chairs, and plenty of meeting rooms. Highly recommended!",
      },
      {
        author_name: "Mukesh K.",
        rating: 4,
        text: "Great community and flexible plans. The dedicated desks are perfect for my workflow.",
      },
    ],
  });
}
