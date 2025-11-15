import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, source, timestamp } = body;

    // Google Sheets Web App URL
    const GOOGLE_SHEETS_WEB_APP_URL = process.env.GOOGLE_SHEETS_WEB_APP_URL || "https://script.google.com/macros/s/AKfycbxZ2APTaDWUMKy-pPrVf6GKS090aRVuwn39dxB0lxp9IMFtaZZiOtqc4OCnK86pF10X/exec";

    // Prepare payload matching the original format
    const payload = {
      name: name || "",
      phone: phone || "",
      email: email || "",
      source_url: body.source_url || request.headers.get("referer") || "",
      user_agent: body.user_agent || request.headers.get("user-agent") || "",
      timestamp: timestamp || new Date().toISOString(),
    };

    // Send as URL-encoded form data for compatibility with Apps Script
    const formData = new URLSearchParams();
    Object.entries(payload).forEach(([key, value]) => {
      formData.append(key, String(value));
    });

    // Send to Google Sheets (no-cors mode for Apps Script)
    await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    });

    return NextResponse.json({ success: true, message: "Lead saved to Google Sheets" });
  } catch (error) {
    console.error("Error saving lead:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}

