export const SITE_URL = "https://www.spacioworkspace.com";
export const SITE_NAME = "Spacio Workspace";
export const SITE_UPDATED = "2026-08-21";

export const PHONE_DISPLAY = "+91 70227 80310";
export const PHONE_TEL = "+917022780310";
export const EMAIL = "hello@spacioworkspace.com";
export const WHATSAPP_URL = "https://wa.me/917022780310";

export const ADDRESS = {
  street: "No 7, Sree Devi Complex, NAT Street",
  locality: "Basavanagudi",
  city: "Bangalore",
  region: "Karnataka",
  postalCode: "560004",
  country: "IN",
  countryName: "India",
  line: "No 7, Sree Devi Complex, NAT Street, Basavanagudi, Bangalore 560004",
};

export const GEO = {
  latitude: 12.9449135,
  longitude: 77.5658325,
};

export const MAPS_URL =
  "https://www.google.com/maps/place/Spacio+Workspace/@12.9449135,77.5658325,17z";

export const INSTAGRAM_URL = "https://www.instagram.com/spacioworkspace";

export const OG_IMAGE = "/og-image.jpg";

export const LANDMARKS = ["Bull Temple", "Lalbagh Botanical Gardens", "Gandhi Bazaar", "NAT Street"];

export type Plan = {
  id: string;
  name: string;
  path: string;
  price: string;
  priceValue: number;
  unitText: "DAY" | "MON" | "HUR" | "ANN";
  unitLabel: string;
  description: string;
  image: string;
  faqs: { q: string; a: string }[];
};

export const PLANS: Plan[] = [
  {
    id: "day-pass",
    name: "Day pass",
    path: "/workspaces/day-pass",
    price: "₹199",
    priceValue: 199,
    unitText: "DAY",
    unitLabel: "per day",
    description: "Full-day coworking access from 9 AM to 7 PM at Spacio Workspace, Basavanagudi.",
    image: "/images/workspace-yellow-green-walls.jpg",
    faqs: [
      {
        q: "How much is a coworking day pass in Basavanagudi?",
        a: "A day pass at Spacio Workspace costs ₹199 per day, with access from 9 AM to 7 PM, 1Gbps WiFi, and common areas included.",
      },
      {
        q: "What is included in the Spacio day pass?",
        a: "The ₹199 day pass includes a workspace seat, high-speed internet, printing support, beverages, and access to common areas at the Basavanagudi centre.",
      },
    ],
  },
  {
    id: "dedicated-desks",
    name: "Dedicated desk",
    path: "/workspaces/dedicated-desks",
    price: "₹3,499",
    priceValue: 3499,
    unitText: "MON",
    unitLabel: "per month",
    description: "Assigned desk with 24/7 access at Spacio Workspace, Basavanagudi.",
    image: "/images/workspace-numbered-cabins.jpg",
    faqs: [
      {
        q: "How much is a dedicated desk in Basavanagudi?",
        a: "A dedicated desk at Spacio Workspace costs ₹3,499 per month and includes an assigned desk, 24/7 access, and 1Gbps internet.",
      },
      {
        q: "Is a dedicated desk better than a private cabin?",
        a: "Choose a dedicated desk if you want a fixed seat in a shared bay at ₹3,499/month. Choose a solo cabin at ₹8,499/month if you need a door, privacy for calls, and a lockable room.",
      },
    ],
  },
  {
    id: "solo-cabin",
    name: "Solo cabin",
    path: "/workspaces/solo-cabin",
    price: "₹8,499",
    priceValue: 8499,
    unitText: "MON",
    unitLabel: "per month",
    description: "Private 1-person cabin with 24/7 access at Spacio Workspace, Basavanagudi.",
    image: "/images/solo-cabin-workspace.jpg",
    faqs: [
      {
        q: "How much does a private cabin cost in Basavanagudi?",
        a: "A solo private cabin at Spacio Workspace costs ₹8,499 per month. 3-seater cabins are ₹14,999/month and 6-seater cabins are ₹24,999/month.",
      },
      {
        q: "Who is the solo cabin for?",
        a: "The solo cabin is for founders, consultants, and professionals who need a quiet enclosed office in Basavanagudi with 1Gbps internet and 24/7 access.",
      },
    ],
  },
  {
    id: "three-seater-cabin",
    name: "3-seater cabin",
    path: "/workspaces/three-seater-cabin",
    price: "₹14,999",
    priceValue: 14999,
    unitText: "MON",
    unitLabel: "per month",
    description: "Private cabin for up to three people at Spacio Workspace, Basavanagudi.",
    image: "/images/3-seater-cabin-orange-screens.jpg",
    faqs: [
      {
        q: "How much is a 3-seater cabin in Basavanagudi?",
        a: "The 3-seater private cabin at Spacio Workspace costs ₹14,999 per month and is built for co-founders or small teams who need a lockable office.",
      },
    ],
  },
  {
    id: "six-seater-cabin",
    name: "6-seater cabin",
    path: "/workspaces/six-seater-cabin",
    price: "₹24,999",
    priceValue: 24999,
    unitText: "MON",
    unitLabel: "per month",
    description: "Private cabin for teams of up to six at Spacio Workspace, Basavanagudi.",
    image: "/images/6-seater-cabin-workspace.jpg",
    faqs: [
      {
        q: "How much is a 6-seater cabin in Basavanagudi?",
        a: "The 6-seater cabin at Spacio Workspace costs ₹24,999 per month for teams that need a private South Bangalore office without a long commercial lease.",
      },
    ],
  },
  {
    id: "meeting-rooms",
    name: "Meeting rooms",
    path: "/workspaces/meeting-rooms",
    price: "₹399",
    priceValue: 399,
    unitText: "HUR",
    unitLabel: "per hour",
    description: "Bookable meeting rooms for 4–12 people from ₹399 per hour.",
    image: "/images/meeting-room-frosted-glass.jpg",
    faqs: [
      {
        q: "How much do meeting rooms cost at Spacio Workspace?",
        a: "Meeting rooms at Spacio Workspace in Basavanagudi start at ₹399 per hour, with rooms for about 4 to 12 people and AV for hybrid calls.",
      },
    ],
  },
  {
    id: "virtual-office",
    name: "Virtual office",
    path: "/workspaces/virtual-office",
    price: "₹12,999",
    priceValue: 12999,
    unitText: "ANN",
    unitLabel: "per year",
    description: "GST and ROC business address with mail handling at Spacio Workspace, Basavanagudi.",
    image: "/images/building-exterior-sree-devi-complex.jpg",
    faqs: [
      {
        q: "How much is a virtual office in Basavanagudi?",
        a: "The virtual office plan at Spacio Workspace costs ₹12,999 per year and includes a GST/ROC-ready Basavanagudi address plus mail handling.",
      },
      {
        q: "Can I use Spacio for GST registration in Bangalore?",
        a: "Yes. The virtual office provides a business address in Basavanagudi, Bangalore 560004 for GST, ROC, and mail, billed at ₹12,999 per year.",
      },
    ],
  },
];

export const SITE_FAQS: { q: string; a: string }[] = [
  {
    q: "Where is Spacio Workspace in Bangalore?",
    a: "Spacio Workspace is at No 7, Sree Devi Complex, NAT Street, Basavanagudi, Bangalore 560004, near Bull Temple, Lalbagh, and Gandhi Bazaar.",
  },
  {
    q: "What is the phone number for Spacio Workspace?",
    a: "Call or WhatsApp Spacio Workspace on +91 70227 80310. Email hello@spacioworkspace.com.",
  },
  {
    q: "How much does coworking cost at Spacio Workspace?",
    a: "Day pass ₹199/day, dedicated desk ₹3,499/month, solo cabin ₹8,499/month, 3-seater cabin ₹14,999/month, 6-seater cabin ₹24,999/month, meeting rooms ₹399/hour, virtual office ₹12,999/year.",
  },
  {
    q: "Does Spacio Workspace have private cabins?",
    a: "Yes. Spacio offers solo, 3-seater, and 6-seater private cabins in Basavanagudi, plus dedicated desks, meeting rooms, day passes, and a virtual office.",
  },
  {
    q: "Is Spacio Workspace open 24/7?",
    a: "Members on cabin and dedicated-desk plans have 24/7 access. Day-pass visitors can use the centre from 9 AM to 7 PM.",
  },
  {
    q: "How do I book a tour of Spacio Workspace?",
    a: "Book a free tour at https://www.spacioworkspace.com/book-tour, WhatsApp +91 70227 80310, or visit No 7, Sree Devi Complex, NAT Street, Basavanagudi.",
  },
];

export const LOCATION_FAQS: { q: string; a: string }[] = [
  SITE_FAQS[0],
  {
    q: "What workspace plans are available in Basavanagudi?",
    a: "Private cabins (solo, 3-seater, and 6-seater), dedicated desks, meeting rooms by the hour, day passes, and a virtual office address for GST and mail.",
  },
  {
    q: "How do I get to Spacio Workspace by metro or bus?",
    a: "The centre is about 2.5 km from Lalbagh Metro Station on the Green Line. BMTC stops are a short walk on NAT Street and Gandhi Bazaar. Autos and cabs run throughout the day.",
  },
  {
    q: "Who is this coworking space for?",
    a: "Professionals, consultants, startups, and small teams who want a South Bangalore office with private cabins or a dedicated desk, without commuting to Koramangala or the CBD every day.",
  },
  SITE_FAQS[5],
];

export const PRICING_FAQS = [
  SITE_FAQS[2],
  {
    q: "Are there hidden fees on Spacio Workspace plans?",
    a: "Listed prices are the plan rates: day pass ₹199/day, desks and cabins billed monthly, meeting rooms ₹399/hour, virtual office ₹12,999/year. Confirm GST and deposits on a tour or WhatsApp +91 70227 80310.",
  },
  {
    q: "Can I try Spacio before taking a monthly plan?",
    a: "Yes. Use the ₹199 day pass (9 AM–7 PM) or book a free tour at the Basavanagudi centre before choosing a desk or cabin.",
  },
];

export const GALLERY_IMAGES = [
  { src: "/images/building-exterior-sree-devi-complex.jpg", alt: "Sree Devi Complex exterior, Spacio Workspace Basavanagudi" },
  { src: "/images/solo-cabin-workspace.jpg", alt: "Solo private cabin at Spacio Workspace Basavanagudi" },
  { src: "/images/3-seater-cabin-orange-screens.jpg", alt: "3-seater cabin at Spacio Workspace Basavanagudi" },
  { src: "/images/6-seater-cabin-workspace.jpg", alt: "6-seater cabin at Spacio Workspace Basavanagudi" },
  { src: "/images/meeting-room-frosted-glass.jpg", alt: "Meeting room at Spacio Workspace Basavanagudi" },
  { src: "/og-image.jpg", alt: "Spacio Workspace coworking space in Basavanagudi, Bangalore" },
];

export function getPlan(id: string) {
  return PLANS.find((plan) => plan.id === id);
}
