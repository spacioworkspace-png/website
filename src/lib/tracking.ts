type DataLayerEvent = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
  }
}

export function pushDataLayer(payload: DataLayerEvent) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

/** Fires GTM-compatible lead events for Google Ads & Meta conversion tags. */
export function trackLead(source: string, formName = "book_tour") {
  pushDataLayer({
    event: "generate_lead",
    lead_source: source,
    form_name: formName,
  });
}

/** Phone CTA clicks — map to Google Ads call conversions in GTM. */
export function trackPhoneClick(location: string) {
  pushDataLayer({
    event: "phone_click",
    click_location: location,
    method: "phone",
  });
  pushDataLayer({
    event: "contact",
    method: "phone",
    click_location: location,
  });
}

/** WhatsApp CTA clicks — map to Meta Contact and Google Ads secondary conversions in GTM. */
export function trackWhatsAppClick(location: string) {
  pushDataLayer({
    event: "whatsapp_click",
    click_location: location,
    method: "whatsapp",
  });
  pushDataLayer({
    event: "contact",
    method: "whatsapp",
    click_location: location,
  });
}

/** Fires on /book-tour/thank-you for Google Ads URL-based conversions. */
export function trackTourConversion() {
  pushDataLayer({
    event: "conversion",
    conversion_type: "book_tour",
    conversion_label: "tour_request",
  });
  pushDataLayer({
    event: "book_tour_complete",
  });
}
