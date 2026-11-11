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
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Coworking Space Basavanagudi | Spacio Workspace",
  description:
    "Premium coworking in Basavanagudi near Gandhi Bazaar. Private cabins, desks, meeting rooms and virtual office. Book a tour.",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Coworking space",
  keywords: [...SEO_KEYWORDS.site],
  openGraph: {
    title: "Coworking Space Basavanagudi | Spacio Workspace",
    description:
      "Thoughtfully designed workspaces in Basavanagudi for founders, professionals and teams in South Bengaluru.",
    url: "/",
    siteName: SITE_NAME,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Spacio Workspace in Basavanagudi, Bengaluru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coworking Space Basavanagudi | Spacio Workspace",
    description:
      "Thoughtfully designed workspaces in Basavanagudi for founders, professionals and teams in South Bengaluru.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
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
  themeColor: "#ff6b35",
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
      <body className={`${geistSans.variable} font-sans antialiased`} suppressHydrationWarning>
        <MarketingNoScript />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <Suspense fallback={null}>
          <DeferredWidgets />
        </Suspense>
        <main id="main-content" tabIndex={-1} className="pb-20 lg:pb-0">
          {children}
        </main>
        <Footer />
        <MarketingScripts />
        <DeferredChatling />
        <p className="sr-only" aria-hidden="false">
          {SITE_NAME}, phone {PHONE_DISPLAY}, email {EMAIL}. Address: No. 7, Sree Devi Complex, N.A.T. Road,
          Gandhi Bazaar, Basavanagudi, Bengaluru, Karnataka 560004, India.
        </p>
      </body>
    </html>
  );
}
