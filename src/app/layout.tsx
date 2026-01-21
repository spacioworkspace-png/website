import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp, ScrollBasedLeadCapture } from "@/components/LazyComponents";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false, // Only preload primary font
});

export const metadata: Metadata = {
  title: "Spacio Workspace | Best Premium Coworking Space in Bangalore | Basavanagudi & Jayanagar | Private Cabins, Dedicated Desks, Meeting Rooms, Virtual Office | 1Gbps WiFi | 24/7 Access | Near Bull Temple | Near Lalbagh | South Bangalore | Book Free Tour",
  description: "Bangalore's #1 premium coworking space for Gen Z entrepreneurs, startups, and freelancers in Basavanagudi. Private cabins (solo, 3-seater, 6-seater), dedicated desks, meeting rooms, and virtual offices. Lightning-fast 1Gbps WiFi, 24/7 secure access, modern amenities, vibrant community of 500+ members. Vastu-compliant workspace near Bull Temple and Lalbagh Botanical Gardens in South Bangalore. Affordable coworking space, flexible workspace solutions, startup office space, shared office, day pass coworking. Book your free tour today!",
  keywords: [
    "best coworking space in Bangalore",
    "coworking space Basavanagudi",
    "coworking space Jayanagar",
    "private office Bangalore",
    "dedicated desk Bangalore",
    "meeting room Bangalore",
    "virtual office Bangalore",
    "startup office Bangalore",
    "shared office Bangalore",
    "day pass coworking Bangalore",
    "rent office Bangalore",
    "coworking south bangalore",
    "basavanagudi coworking",
    "jayanagar coworking",
    "gen z coworking bangalore",
    "flexible workspace Bangalore",
    "coworking space near me Bangalore",
    "modern coworking Bangalore",
    "startup coworking space Bangalore",
    "freelancer workspace Bangalore",
    "affordable coworking Bangalore",
    "24/7 coworking space Bangalore",
    "private cabin Bangalore",
    "solo cabin coworking Bangalore",
    "3 seater cabin",
    "6 seater cabin",
    "office space Basavanagudi",
    "office space Jayanagar",
    "tech coworking space Bangalore",
    "IT workspace Bangalore",
    "near Bull Temple",
    "near Lalbagh",
    "South Bangalore workspace",
    "premium coworking Bangalore",
    "Vastu compliant workspace",
    "best coworking space South Bangalore",
  ],
  openGraph: {
    title: "Spacio Workspace – Premium Coworking Space in Bangalore | Basavanagudi & Jayanagar",
    description:
      "Bangalore's premier coworking space for Gen Z entrepreneurs and startups. Private cabins, dedicated desks, meeting rooms, virtual offices. Lightning-fast internet, 24/7 access, premium amenities. Book your free tour!",
    url: "https://spacioworkspace.com/",
    siteName: "Spacio Workspace",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Spacio Workspace - Premium Coworking Space in Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spacio Workspace – Premium Coworking Space in Bangalore",
    description: "Bangalore's #1 coworking space for Gen Z entrepreneurs. Private cabins, dedicated desks, meeting rooms. Book your free tour!",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://spacioworkspace.com/",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://spacioworkspace.com/#organization",
    name: "Spacio Workspace",
    description: "Premium coworking space in Bangalore offering private cabins, dedicated desks, meeting rooms, and virtual offices for entrepreneurs, startups, and freelancers.",
    url: "https://spacioworkspace.com",
    logo: "https://spacioworkspace.com/logo.png",
    image: "https://spacioworkspace.com/og-image.jpg",
    telephone: "+917022780310",
    email: "hello@spacioworkspace.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "No 7, Sree Devi Complex, NAT Street",
      addressLocality: "Basavanagudi",
      addressRegion: "Karnataka",
      postalCode: "560004",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "12.9449135",
      longitude: "77.5658325",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    priceRange: "₹₹",
    servesCuisine: "Indian",
    areaServed: {
      "@type": "City",
      name: "Bangalore",
    },
    sameAs: [
      "https://www.google.com/maps/place/Spacio+Workspace",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "50",
    },
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://spacioworkspace.com",
      },
    ],
  };

  return (
    <html lang="en-IN">
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PJVS9KPR');
          `}
        </Script>
        {/* End Google Tag Manager */}
        
        {/* Chatling Chatbot */}
        <Script id="chatling-config" strategy="afterInteractive">
          {`
            window.chtlConfig = { chatbotId: "1118293796" };
          `}
        </Script>
        <Script
          id="chatling-script"
          strategy="afterInteractive"
          data-id="1118293796"
          src="https://chatling.ai/js/embed.js"
        />
        
        {/* Structured Data - Inline for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PJVS9KPR"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <ScrollBasedLeadCapture />
        <Analytics />
      </body>
    </html>
  );
}
