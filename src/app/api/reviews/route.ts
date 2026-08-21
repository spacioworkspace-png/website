import { NextResponse } from "next/server";

export async function GET() {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  try {
    if (key && placeId) {
      const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
      url.searchParams.set("place_id", placeId);
      url.searchParams.set("fields", "reviews,rating,user_ratings_total");
      url.searchParams.set("key", key);

      const res = await fetch(url.toString(), { next: { revalidate: 3600 } });
      const data = await res.json();
      const reviews = (data?.result?.reviews || []).map((r: { author_name: string; rating: number; text: string }) => ({
        author_name: r.author_name,
        rating: r.rating,
        text: r.text,
      }));
      return NextResponse.json({
        reviews,
        rating: data?.result?.rating ?? null,
        total: data?.result?.user_ratings_total ?? null,
      });
    }
  } catch {
    // No sample reviews. Empty list is honest.
  }

  return NextResponse.json({ reviews: [], rating: null, total: null });
}
