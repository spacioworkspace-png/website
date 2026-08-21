"use client";

import { useEffect, useState } from "react";

type Review = {
  author_name: string;
  rating: number;
  text: string;
};

type ReviewsResponse = {
  reviews: Review[];
  rating?: number;
  total?: number;
};

const GBP_URL =
  "https://www.google.com/maps/place/Spacio+Workspace/@12.9449135,77.5658325,17z";

export function GoogleReviews() {
  const [data, setData] = useState<ReviewsResponse>({ reviews: [] });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((json) => {
        setData({
          reviews: Array.isArray(json.reviews) ? json.reviews : [],
          rating: json.rating,
          total: json.total,
        });
      })
      .catch(() => setData({ reviews: [] }))
      .finally(() => setLoaded(true));
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900">
          Reviews of Spacio Workspace
        </h1>
        <p className="mt-4 text-neutral-700 max-w-2xl mx-auto">
          Google reviews for our Basavanagudi coworking centre. We only show reviews from Google — no invented counts or sample quotes.
        </p>
        {loaded && data.rating && data.total ? (
          <p className="mt-3 font-semibold text-neutral-900">
            {data.rating.toFixed(1)} on Google from {data.total} reviews
          </p>
        ) : null}
      </div>

      {loaded && data.reviews.length === 0 ? (
        <div className="max-w-xl mx-auto text-center rounded-2xl border border-neutral-200 p-8">
          <p className="text-neutral-700 mb-6">
            Live Google reviews are not connected on this site yet. Read what members wrote on Google Maps, or book a tour and see the space yourself.
          </p>
          <a
            href={GBP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-primary px-6 py-3 text-white font-semibold"
          >
            Read Google reviews
          </a>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.reviews.map((review) => (
            <article key={`${review.author_name}-${review.text.slice(0, 24)}`} className="rounded-2xl border border-neutral-200 p-6 bg-white">
              <div className="font-semibold text-neutral-900 mb-1">{review.author_name}</div>
              <div className="text-sm text-primary mb-3">{"★".repeat(review.rating)}</div>
              <p className="text-neutral-700 text-sm leading-relaxed">{review.text}</p>
            </article>
          ))}
        </div>
      )}

      <p className="text-center mt-10">
        <a href={GBP_URL} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold">
          Open Spacio Workspace on Google Maps
        </a>
      </p>
    </section>
  );
}
