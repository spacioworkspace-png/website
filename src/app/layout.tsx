import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp, ScrollBasedLeadCapture } from "@/components/LazyComponents";
import { SITE_NAME, SITE_URL } from "@/lib/site";

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
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Coworking Space in Basavanagudi | Spacio",
  description:
    "Private cabins, dedicated desks, meeting rooms and virtual office in Basavanagudi, South Bangalore. Book a free tour.",
  keywords: [
    "coworking space Basavanagudi",
    "coworking space South Bangalore",
    "coworking space Bangalore",
    "private cabin Basavanagudi",
    "dedicated desk South Bangalore",
    "meeting room Basavanagudi",
    "virtual office Bangalore",
  ],
  openGraph: {
    title: "Coworking Space in Basavanagudi | Spacio",
    description:
      "Private cabins, dedicated desks, meeting rooms and virtual office in Basavanagudi, South Bangalore.",
    url: "/",
    siteName: SITE_NAME,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Spacio Workspace in Basavanagudi, Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coworking Space in Basavanagudi | Spacio",
    description:
      "Private cabins, dedicated desks, meeting rooms and virtual office in Basavanagudi, South Bangalore.",
    images: ["/og-image.jpg"],
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
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    alternateName: "Spacio Workspace Basavanagudi",
    description:
      "Coworking space in Basavanagudi, South Bangalore. Private cabins, dedicated desks, meeting rooms and virtual office for professionals, startups and growing teams.",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/og-image.jpg`,
    telephone: "+917022780310",
    email: "hello@spacioworkspace.com",
    category: "Coworking space",
    knowsAbout: [
      "Coworking space",
      "Private cabins",
      "Dedicated desks",
      "Meeting rooms",
      "Virtual office",
    ],
    makesOffer: [
      { "@type": "Offer", "itemOffered": { "@type": "Service", name: "Private cabin coworking" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", name: "Dedicated desk coworking" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", name: "Meeting room hire" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", name: "Virtual office" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", name: "Day pass coworking" } },
    ],
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
    hasMap: "https://www.google.com/maps/place/Spacio+Workspace/@12.9449135,77.5658325,17z",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    priceRange: "₹₹",
    areaServed: [
      { "@type": "AdministrativeArea", name: "Basavanagudi" },
      { "@type": "AdministrativeArea", name: "South Bangalore" },
      { "@type": "City", name: "Bangalore" },
    ],
    sameAs: [
      "https://www.google.com/maps/place/Spacio+Workspace/@12.9449135,77.5658325,17z",
    ],
  };

  return (
    <html lang="en-IN">
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PJVS9KPR');
          `}
        </Script>
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PJVS9KPR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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
