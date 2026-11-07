/** Context-aware WhatsApp prefills — no public pricing. */
export const WA = {
  general:
    "Hi Spacio Workspace, I would like to explore your workspace options and book a visit.",
  tour: "Hi Spacio Workspace, I would like to book a private tour of your Basavanagudi centre.",
  dayPass:
    "Hi Spacio Workspace, I would like to know more about your day-pass options.",
  privateCabin:
    "Hi Spacio Workspace, I am interested in a private cabin. Could you share the available options?",
  dedicatedDesk:
    "Hi Spacio Workspace, I would like to enquire about dedicated desk availability.",
  virtualOffice:
    "Hi Spacio Workspace, I am interested in your virtual office services. Please share the details.",
  meetingRoom:
    "Hi Spacio Workspace, I would like to enquire about meeting room availability.",
  membership:
    "Hi Spacio Workspace, I would like to get membership details and availability.",
  quote:
    "Hi Spacio Workspace, I would like to request a custom quote for my workspace needs.",
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
