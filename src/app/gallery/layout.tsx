import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Gallery | Spacio Workspace | Premium Coworking Space Photos | Basavanagudi, Bangalore",
  description:
    "Explore our premium coworking space in Bangalore through photos. See our private cabins, dedicated desks, meeting rooms, common areas, and modern amenities in Basavanagudi. Book a free tour to experience the space in person!",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
