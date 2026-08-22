import { pageMeta } from "@/lib/seo";
import { BookTourThankYouClient } from "./BookTourThankYouClient";

export const metadata = pageMeta({
  title: "Tour Request Received | Spacio Workspace",
  description: "Your Spacio Workspace tour request was received. We will confirm your visit shortly.",
  path: "/book-tour/thank-you",
  noindex: true,
});

export default function BookTourThankYouPage() {
  return <BookTourThankYouClient />;
}
