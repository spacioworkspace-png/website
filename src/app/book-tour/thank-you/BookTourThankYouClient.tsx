"use client";

import { useEffect } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { trackTourConversion } from "@/lib/tracking";

export function BookTourThankYouClient() {
  useEffect(() => {
    trackTourConversion();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <section className="mx-auto max-w-2xl px-4 py-24 text-center">
        <CheckCircle2 className="mx-auto h-16 w-16 text-primary" aria-hidden />
        <h1 className="mt-6 text-3xl font-bold text-neutral-900 md:text-4xl">Tour request sent</h1>
        <p className="mt-4 text-lg text-neutral-700">
          WhatsApp should open with your tour details. Our team at Spacio Workspace, Basavanagudi will
          confirm your visit shortly.
        </p>
        <p className="mt-2 text-neutral-600">
          Need help now? Call{" "}
          <a href="tel:+917022780310" className="font-semibold text-primary hover:underline">
            +91 70227 80310
          </a>
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-premium rounded-xl bg-primary px-6 py-3 text-white font-semibold">
            Back to home
          </Link>
          <Link
            href="/workspaces"
            className="rounded-xl border-2 border-neutral-200 px-6 py-3 font-semibold text-neutral-900 hover:border-primary"
          >
            View plans
          </Link>
        </div>
      </section>
    </div>
  );
}
