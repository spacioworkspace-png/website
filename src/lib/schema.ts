import {
  ADDRESS,
  EMAIL,
  GEO,
  INSTAGRAM_URL,
  MAPS_URL,
  OG_IMAGE,
  PHONE_TEL,
  PLANS,
  SITE_NAME,
  SITE_URL,
} from "./site";

type Faq = { q: string; a: string };

export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? `${SITE_URL}/` : `${SITE_URL}${item.path}`,
    })),
  };
}

export function serviceOfferJsonLd(planId: string) {
  const plan = PLANS.find((item) => item.id === planId);
  if (!plan) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${plan.name} at ${SITE_NAME}`,
    description: plan.description,
    url: `${SITE_URL}${plan.path}`,
    image: `${SITE_URL}${plan.image}`,
    provider: { "@id": `${SITE_URL}/#localbusiness` },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Basavanagudi" },
      { "@type": "City", name: "Bangalore" },
    ],
    offers: {
      "@type": "Offer",
      price: String(plan.priceValue),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}${plan.path}`,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: String(plan.priceValue),
        priceCurrency: "INR",
        unitText: plan.unitText,
      },
    },
  };
}

export function organizationGraph() {
  const localId = `${SITE_URL}/#localbusiness`;
  const orgId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: SITE_NAME,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/logo.png`,
        },
        email: EMAIL,
        telephone: PHONE_TEL,
        sameAs: [MAPS_URL, INSTAGRAM_URL],
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": localId,
        name: SITE_NAME,
        alternateName: "Spacio Workspace Basavanagudi",
        description:
          "Coworking space in Basavanagudi, South Bangalore. Private cabins, dedicated desks, meeting rooms, day pass and virtual office for professionals, startups and growing teams.",
        url: SITE_URL,
        image: GALLERY_IMAGE_URLS(),
        logo: `${SITE_URL}/logo.png`,
        telephone: PHONE_TEL,
        email: EMAIL,
        category: "Coworking space",
        currenciesAccepted: "INR",
        paymentAccepted: "UPI, Card, Bank transfer",
        priceRange: "₹₹",
        parentOrganization: { "@id": orgId },
        address: {
          "@type": "PostalAddress",
          streetAddress: ADDRESS.street,
          addressLocality: ADDRESS.locality,
          addressRegion: ADDRESS.region,
          postalCode: ADDRESS.postalCode,
          addressCountry: ADDRESS.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: GEO.latitude,
          longitude: GEO.longitude,
        },
        hasMap: MAPS_URL,
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        areaServed: [
          { "@type": "AdministrativeArea", name: "Basavanagudi" },
          { "@type": "AdministrativeArea", name: "South Bangalore" },
          { "@type": "City", name: "Bangalore" },
        ],
        knowsAbout: [
          "Coworking space",
          "Private cabins",
          "Dedicated desks",
          "Meeting rooms",
          "Virtual office",
          "GST business address",
        ],
        amenityFeature: [
          { "@type": "LocationFeatureSpecification", name: "1Gbps internet", value: true },
          { "@type": "LocationFeatureSpecification", name: "24/7 access", value: true },
          { "@type": "LocationFeatureSpecification", name: "Private cabins", value: true },
          { "@type": "LocationFeatureSpecification", name: "Meeting rooms", value: true },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Spacio Workspace plans",
          itemListElement: PLANS.map((plan) => ({
            "@type": "Offer",
            name: plan.name,
            url: `${SITE_URL}${plan.path}`,
            price: String(plan.priceValue),
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            itemOffered: {
              "@type": "Service",
              name: plan.name,
              description: plan.description,
            },
          })),
        },
        sameAs: [MAPS_URL, INSTAGRAM_URL],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: "en-IN",
        publisher: { "@id": orgId },
        about: { "@id": localId },
      },
    ],
  };
}

function GALLERY_IMAGE_URLS() {
  return [
    `${SITE_URL}${OG_IMAGE}`,
    `${SITE_URL}/images/building-exterior-sree-devi-complex.jpg`,
    `${SITE_URL}/images/solo-cabin-workspace.jpg`,
    `${SITE_URL}/images/meeting-room-frosted-glass.jpg`,
  ];
}

import type { CustomerTestimonial } from "./testimonials";
import { testimonialContentUrl, testimonialEmbedUrl } from "./testimonials";

export function videoObjectJsonLd(testimonial: CustomerTestimonial, pagePath: string) {
  const data: Record<string, string> = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: testimonial.title,
    description: testimonial.description,
    thumbnailUrl: testimonialContentUrl(testimonial.poster),
    uploadDate: testimonial.uploadDate,
    duration: testimonial.durationIso,
    contentUrl: testimonialContentUrl(testimonial.videoSrc),
    embedUrl: testimonialEmbedUrl(pagePath, testimonial.id),
  };

  if (testimonial.transcript.trim()) {
    data.transcript = testimonial.transcript.trim();
  }

  return data;
}

export function howToTourJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to book a free tour of Spacio Workspace",
    description:
      "Visit the Basavanagudi coworking centre to see private cabins, dedicated desks and meeting rooms.",
    totalTime: "PT20M",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Choose a time",
        text: "Open the book-tour page or WhatsApp +91 70227 80310 with a preferred date and time.",
        url: `${SITE_URL}/book-tour`,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Visit the centre",
        text: "Come to No 7, Sree Devi Complex, NAT Street, Basavanagudi, Bangalore 560004.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Walk the floor",
        text: "A 15–20 minute tour covers cabins, desks, meeting rooms and common areas. There is no obligation to subscribe.",
      },
    ],
  };
}
