export const SITE_URL = "https://www.spacioworkspace.com";
export const SITE_NAME = "Spacio Workspace";
export const SITE_UPDATED = "2026-11-07";

export const PHONE_DISPLAY = "+91 70227 80310";
export const PHONE_TEL = "+917022780310";
export const PHONE_HREF = `tel:${PHONE_TEL}`;
export const EMAIL = "hello@spacioworkspace.com";
export const WHATSAPP_URL = "https://wa.me/917022780310";

export function whatsappUrl(text?: string): string {
  return text ? `${WHATSAPP_URL}?text=${encodeURIComponent(text)}` : WHATSAPP_URL;
}

export const ADDRESS = {
  street: "No. 7, Sree Devi Complex, N.A.T. Road",
  locality: "Basavanagudi",
  city: "Bengaluru",
  region: "Karnataka",
  postalCode: "560004",
  country: "IN",
  countryName: "India",
  line: "No. 7, Sree Devi Complex, N.A.T. Road, Basavanagudi, Bengaluru, Karnataka 560004",
};

export const GEO = {
  latitude: 12.9449135,
  longitude: 77.5658325,
};

export const MAPS_URL =
  "https://www.google.com/maps/place/Spacio+Workspace/@12.9449135,77.5658325,17z";

export const INSTAGRAM_URL = "https://www.instagram.com/spacioworkspace";

export const OG_IMAGE = "/og-image.jpg";

export const LANDMARKS = ["Bull Temple", "Lalbagh Botanical Gardens", "Gandhi Bazaar", "N.A.T. Road"];

export type Plan = {
  id: string;
  name: string;
  path: string;
  /** Billing cadence label only — no public rates */
  unitLabel: string;
  description: string;
  shortDescription: string;
  image: string;
  videoTour: string;
  ctaLabel: string;
  faqs: { q: string; a: string }[];
};

export const OVERVIEW_VIDEO_TOUR = {
  id: "overview",
  title: "Spacio Workspace centre tour",
  description:
    "A walkthrough of Spacio Workspace in Basavanagudi — private cabins, dedicated desks, meeting rooms and common areas.",
  src: "/tour.mp4",
  poster: "/images/building-exterior-sree-devi-complex.jpg",
};

export const PLANS: Plan[] = [
  {
    id: "day-pass",
    name: "Day pass",
    path: "/workspaces/day-pass",
    unitLabel: "flexible day access",
    description: "Full-day coworking access from 9 AM to 7 PM at Spacio Workspace, Basavanagudi.",
    shortDescription: "Work for a day with WiFi, common areas and a professional setting.",
    image: "/images/workspace-yellow-green-walls.jpg",
    videoTour: "/day-pass-tour.mp4",
    ctaLabel: "Enquire About Day Pass",
    faqs: [
      {
        q: "Can I book a day pass at Spacio Workspace?",
        a: "Yes. Day passes are available for single-day coworking access from 9 AM to 7 PM, including high-speed WiFi and common areas. WhatsApp us for current availability and membership details.",
      },
      {
        q: "What is included in a Spacio day pass?",
        a: "A day pass includes a workspace seat, high-speed internet, printing support, beverages, and access to common areas at the Basavanagudi centre.",
      },
    ],
  },
  {
    id: "dedicated-desks",
    name: "Dedicated desk",
    path: "/workspaces/dedicated-desks",
    unitLabel: "monthly membership",
    description: "Assigned desk with 24/7 access at Spacio Workspace, Basavanagudi.",
    shortDescription: "Your fixed desk with locker storage and round-the-clock member access.",
    image: "/images/workspace-numbered-cabins.jpg",
    videoTour: "/dedicated-desks-tour.mp4",
    ctaLabel: "Enquire About Dedicated Desks",
    faqs: [
      {
        q: "Are dedicated desks available in Basavanagudi?",
        a: "Yes. Dedicated desks include an assigned seat, locker storage, 1Gbps internet and 24/7 access. Contact us for current availability.",
      },
      {
        q: "Is a dedicated desk better than a private cabin?",
        a: "Choose a dedicated desk for a fixed seat in a shared bay. Choose a private cabin if you need a door, privacy for calls, and a lockable room. Our team can help you decide on a tour.",
      },
    ],
  },
  {
    id: "solo-cabin",
    name: "Solo cabin",
    path: "/workspaces/solo-cabin",
    unitLabel: "monthly membership",
    description: "Private 1-person cabin with 24/7 access at Spacio Workspace, Basavanagudi.",
    shortDescription: "A quiet enclosed cabin for focused work and confidential calls.",
    image: "/images/solo-cabin-workspace.jpg",
    videoTour: "/solo-cabin-tour.mp4",
    ctaLabel: "Enquire About Private Cabins",
    faqs: [
      {
        q: "Do you offer private cabins in Basavanagudi?",
        a: "Yes. Spacio offers solo, 3-seater and 6-seater private cabins with 1Gbps internet and 24/7 access. WhatsApp us for membership details and availability.",
      },
      {
        q: "Who is the solo cabin for?",
        a: "The solo cabin is for founders, consultants and professionals who need a quiet enclosed office in Basavanagudi.",
      },
    ],
  },
  {
    id: "three-seater-cabin",
    name: "3-seater cabin",
    path: "/workspaces/three-seater-cabin",
    unitLabel: "monthly membership",
    description: "Private cabin for up to three people at Spacio Workspace, Basavanagudi.",
    shortDescription: "A lockable cabin for co-founders and small partner teams.",
    image: "/images/3-seater-cabin-orange-screens.jpg",
    videoTour: "/three-seater-cabin-tour.mp4",
    ctaLabel: "Enquire About 3-Seater Cabins",
    faqs: [
      {
        q: "Is a 3-seater cabin available?",
        a: "Yes. The 3-seater cabin is built for co-founders or small teams who need a lockable office. Ask our team for current options.",
      },
    ],
  },
  {
    id: "six-seater-cabin",
    name: "6-seater cabin",
    path: "/workspaces/six-seater-cabin",
    unitLabel: "monthly membership",
    description: "Private cabin for teams of up to six at Spacio Workspace, Basavanagudi.",
    shortDescription: "A private team cabin without a long commercial lease.",
    image: "/images/6-seater-cabin-workspace.jpg",
    videoTour: "/six-seater-cabin-tour.mp4",
    ctaLabel: "Enquire About 6-Seater Cabins",
    faqs: [
      {
        q: "Do you have cabins for larger teams?",
        a: "Yes. The 6-seater cabin suits teams that need a private South Bangalore office. Contact us for membership details.",
      },
    ],
  },
  {
    id: "meeting-rooms",
    name: "Meeting rooms",
    path: "/workspaces/meeting-rooms",
    unitLabel: "hourly booking",
    description: "Bookable meeting rooms for 4–12 people with AV for hybrid calls.",
    shortDescription: "Professional rooms for client meetings, interviews and team sessions.",
    image: "/images/meeting-room-frosted-glass.jpg",
    videoTour: "/meeting-rooms-tour.mp4",
    ctaLabel: "Enquire About Meeting Rooms",
    faqs: [
      {
        q: "Are meeting rooms available at Spacio Workspace?",
        a: "Yes. Meeting rooms for about 4 to 12 people include AV for hybrid calls. WhatsApp us to check availability and booking details.",
      },
    ],
  },
  {
    id: "virtual-office",
    name: "Virtual office",
    path: "/workspaces/virtual-office",
    unitLabel: "annual plan",
    description: "GST and ROC business address with mail handling at Spacio Workspace, Basavanagudi.",
    shortDescription: "A professional Basavanagudi business address with mail handling support.",
    image: "/images/building-exterior-sree-devi-complex.jpg",
    videoTour: "/tour.mp4",
    ctaLabel: "Get Virtual Office Details",
    faqs: [
      {
        q: "Do you provide virtual office services?",
        a: "Yes. The virtual office plan includes a GST/ROC-ready Basavanagudi address plus mail handling. Contact us for current plan details.",
      },
      {
        q: "Can I use Spacio for GST registration in Bangalore?",
        a: "The virtual office provides a business address in Basavanagudi, Bengaluru 560004 that members commonly use for GST, ROC and mail. Confirm documentation needs with our team before applying.",
      },
    ],
  },
];

export const SITE_FAQS: { q: string; a: string }[] = [
  {
    q: "Where is Spacio Workspace located?",
    a: "Spacio Workspace is at No. 7, Sree Devi Complex, N.A.T. Road, Basavanagudi, Bengaluru, Karnataka 560004 — near Gandhi Bazaar, Bull Temple and Lalbagh.",
  },
  {
    q: "What coworking options are available?",
    a: "Private cabins (solo, 3-seater and 6-seater), dedicated desks, day passes, meeting rooms and a virtual office address.",
  },
  {
    q: "How can I enquire about membership?",
    a: "WhatsApp +91 70227 80310, book a free tour at spacioworkspace.com/book-tour, or visit the Basavanagudi centre. Our team shares current membership details directly.",
  },
  {
    q: "Do you offer private cabins?",
    a: "Yes. Spacio offers solo, 3-seater and 6-seater private cabins in Basavanagudi with high-speed internet and 24/7 member access.",
  },
  {
    q: "Are dedicated desks available?",
    a: "Yes. Dedicated desks include an assigned seat, locker storage and 24/7 access for members.",
  },
  {
    q: "Can I book a day pass?",
    a: "Yes. Day passes are available for single-day coworking from 9 AM to 7 PM. WhatsApp us for availability.",
  },
  {
    q: "Do you provide virtual office services?",
    a: "Yes. Virtual office includes a Basavanagudi business address with mail handling. Ask our team for plan details and documentation support.",
  },
  {
    q: "Can I use your address for GST registration?",
    a: "Virtual office members commonly use the Basavanagudi address for GST and ROC paperwork. Confirm current documentation requirements with our team before you apply.",
  },
  {
    q: "Are meeting rooms available?",
    a: "Yes. Meeting rooms for roughly 4–12 people are available with AV for hybrid calls. Enquire for booking slots.",
  },
  {
    q: "Can I visit before making a decision?",
    a: "Yes. Book a free private tour online, WhatsApp +91 70227 80310, or visit No. 7, Sree Devi Complex, N.A.T. Road, Basavanagudi.",
  },
];

export const LOCATION_FAQS: { q: string; a: string }[] = [
  SITE_FAQS[0],
  {
    q: "What workspace plans are available in Basavanagudi?",
    a: "Private cabins, dedicated desks, meeting rooms by the hour, day passes, and a virtual office address for GST and mail.",
  },
  {
    q: "How do I get to Spacio Workspace by metro or bus?",
    a: "The centre is about 2.5 km from Lalbagh Metro Station on the Green Line. BMTC stops are a short walk on N.A.T. Road and Gandhi Bazaar. Autos and cabs run throughout the day.",
  },
  {
    q: "Who is this coworking space for?",
    a: "Professionals, consultants, startups and small teams who want a South Bengaluru office with private cabins or a dedicated desk.",
  },
  SITE_FAQS[9],
];

export const PRICING_FAQS = [
  {
    q: "How do I get membership details?",
    a: "WhatsApp +91 70227 80310 or book a free tour. Our team shares current membership options and availability based on what you need.",
  },
  {
    q: "Are there hidden fees?",
    a: "We explain plan inclusions, deposits and any add-ons clearly when you enquire. Confirm GST and deposit details on a tour or WhatsApp.",
  },
  {
    q: "Can I try Spacio before taking a monthly plan?",
    a: "Yes. Use a day pass (9 AM–7 PM) or book a free tour at the Basavanagudi centre before choosing a desk or cabin.",
  },
];

/** Keyword landing pages for Google Ads & Meta Ads campaigns. */
export const AD_LANDING_PAGES: {
  path: string;
  image?: string;
}[] = [
  { path: "/day-pass-bangalore", image: "/images/workspace-yellow-green-walls.jpg" },
  { path: "/private-cabins-bangalore", image: "/images/solo-cabin-workspace.jpg" },
  { path: "/meeting-rooms-bangalore", image: "/images/meeting-room-frosted-glass.jpg" },
  { path: "/virtual-office-bangalore", image: "/images/building-exterior-sree-devi-complex.jpg" },
  { path: "/pricing-bangalore" },
];

export const GALLERY_IMAGES = [
  { src: "/images/building-exterior-sree-devi-complex.jpg", alt: "Sree Devi Complex exterior, Spacio Workspace Basavanagudi" },
  { src: "/images/solo-cabin-workspace.jpg", alt: "Solo private cabin at Spacio Workspace Basavanagudi" },
  { src: "/images/3-seater-cabin-orange-screens.jpg", alt: "3-seater cabin at Spacio Workspace Basavanagudi" },
  { src: "/images/6-seater-cabin-workspace.jpg", alt: "6-seater cabin at Spacio Workspace Basavanagudi" },
  { src: "/images/meeting-room-frosted-glass.jpg", alt: "Meeting room at Spacio Workspace Basavanagudi" },
  { src: "/images/office-corridor-glass-partitions.jpg", alt: "Office corridor at Spacio Workspace Basavanagudi" },
  { src: "/images/workspace-orange-screens.jpg", alt: "Workspace with privacy screens at Spacio Workspace" },
  { src: "/og-image.jpg", alt: "Spacio Workspace coworking space in Basavanagudi, Bengaluru" },
];

export function getPlan(id: string) {
  return PLANS.find((plan) => plan.id === id);
}

export function getAllVideoTours() {
  return [
    OVERVIEW_VIDEO_TOUR,
    ...PLANS.filter((plan) => plan.id !== "virtual-office").map((plan) => ({
      id: plan.id,
      title: `${plan.name} tour`,
      description: plan.description,
      src: plan.videoTour,
      poster: plan.image,
      path: plan.path,
    })),
  ];
}
