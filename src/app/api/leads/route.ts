import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, source, timestamp } = body;
    const sheetsUrl = process.env.GOOGLE_SHEETS_WEB_APP_URL;

    if (!sheetsUrl) {
      console.error("GOOGLE_SHEETS_WEB_APP_URL is not set");
      return NextResponse.json(
        { success: false, message: "Lead storage is not configured" },
        { status: 503 }
      );
    }

    const payload = {
      name: name || "",
      phone: phone || "",
      email: email || "",
      source: source || "",
      source_url: body.source_url || request.headers.get("referer") || "",
      user_agent: body.user_agent || request.headers.get("user-agent") || "",
      timestamp: timestamp || new Date().toISOString(),
    };

    const formData = new URLSearchParams();
    Object.entries(payload).forEach(([key, value]) => {
      formData.append(key, String(value));
    });

    const sheetsResponse = await fetch(sheetsUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData,
      redirect: "follow",
    });

    if (!sheetsResponse.ok) {
      console.error("Google Sheets webhook status", sheetsResponse.status);
    }

    return NextResponse.json({ success: true, message: "Lead saved" });
  } catch (error) {
    console.error("Error saving lead:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
