import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { DeferredChatling } from "@/components/DeferredChatling";
import { DeferredWidgets } from "@/components/DeferredWidgets";
import { MarketingNoScript, MarketingScripts } from "@/components/MarketingScripts";
import { organizationGraph } from "@/lib/schema";
import { SEO_KEYWORDS } from "@/lib/seo-keywords";
import { EMAIL, PHONE_DISPLAY, SITE_NAME, SITE_URL } from "@/lib/site";

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const fbDomainVerification = process.env.NEXT_PUBLIC_FB_DOMAIN_VERIFICATION;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Coworking & Office Space Basavanagudi | Near Bull Temple & Lalbagh",
  description:
    "Coworking space near Bull Temple and Lalbagh in Basavanagudi, South Bangalore. Private cabins, dedicated desks, meeting rooms, virtual office and day pass. Book a free tour.",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Coworking space",
  keywords: [...SEO_KEYWORDS.site],
  openGraph: {
    title: "Coworking & Office Space Basavanagudi | Spacio Workspace",
    description:
      "Coworking space near Bull Temple and Lalbagh. Private cabin, dedicated desk, meeting room, virtual office and day pass in Basavanagudi, South Bangalore.",
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
    title: "Coworking & Office Space Basavanagudi | Spacio Workspace",
    description:
      "Coworking space near Bull Temple and Lalbagh. Office space, private cabins and day pass in Basavanagudi, South Bangalore.",
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
    // Absolute self-referencing canonical on the preferred www host
    canonical: `${SITE_URL}/`,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  ...(googleSiteVerification || fbDomainVerification
    ? {
        verification: {
          ...(googleSiteVerification ? { google: googleSiteVerification } : {}),
          ...(fbDomainVerification
            ? { other: { "facebook-domain-verification": fbDomainVerification } }
            : {}),
        },
      }
    : {}),
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
  return (
    <html lang="en-IN">
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM facts" />
        <JsonLd data={organizationGraph()} />
      </head>
      <body className={`${geistSans.variable} antialiased`} suppressHydrationWarning>
        <MarketingNoScript />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <Header />
        <Suspense fallback={null}>
          <DeferredWidgets />
        </Suspense>
        <main id="main-content">{children}</main>
        <Footer />
        <MarketingScripts />
        <DeferredChatling />
        <p className="sr-only">
          {SITE_NAME}, {PHONE_DISPLAY}, {EMAIL}. Coworking space at No 7, Sree Devi Complex, NAT Street,
          Basavanagudi, Bangalore 560004. Day pass ₹199, dedicated desk ₹3,499/month, solo cabin ₹8,499/month,
          meeting rooms ₹399/hour, virtual office ₹12,999/year.
        </p>
      </body>
    </html>
  );
}
