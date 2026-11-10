/** Context-aware WhatsApp prefills — no public pricing. Tracking events unchanged. */
export const WA = {
  general:
    "Hello Spacio, I would like to explore your workspace options and arrange a visit.",
  tour: "Hello Spacio, I would like to schedule a private tour of your Basavanagudi workspace.",
  dayPass:
    "Hello Spacio, I'd like to enquire about your day pass and availability.",
  privateCabin:
    "Hello Spacio, I'm interested in your private cabins. Could you share the available options and arrange a workspace tour?",
  dedicatedDesk:
    "Hello Spacio, I'm interested in a dedicated desk. Could you share the details?",
  virtualOffice:
    "Hello Spacio, I'm interested in your virtual office services for business/GST registration. Could you share the details?",
  meetingRoom:
    "Hello Spacio, I'd like to enquire about meeting-room availability.",
  membership:
    "Hello Spacio, I would like membership details and availability.",
  quote:
    "Hello Spacio, I would like to request a custom quote for my workspace needs.",
} as const;

export function whatsappMessageForPlan(planId: string): string {
  switch (planId) {
    case "day-pass":
      return WA.dayPass;
    case "solo-cabin":
    case "three-seater-cabin":
    case "six-seater-cabin":
      return WA.privateCabin;
    case "dedicated-desks":
      return WA.dedicatedDesk;
    case "virtual-office":
      return WA.virtualOffice;
    case "meeting-rooms":
      return WA.meetingRoom;
    default:
      return WA.general;
  }
}
