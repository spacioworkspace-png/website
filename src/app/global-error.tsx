"use client";

/** Root-level failure fallback — minimal HTML so crawlers and users still get a shell. */
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en-IN">
      <body style={{ fontFamily: "system-ui, sans-serif", margin: 0, background: "#fff", color: "#171717" }}>
        <main style={{ maxWidth: 560, margin: "0 auto", padding: "64px 24px", textAlign: "center" }}>
          <h1 style={{ fontSize: 28, marginBottom: 12 }}>Spacio Workspace</h1>
          <p style={{ color: "#525252", lineHeight: 1.5, marginBottom: 24 }}>
            We hit a temporary error. Please retry, or visit our Basavanagudi centre / WhatsApp us.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              background: "#0f766e",
              color: "#fff",
              border: 0,
              borderRadius: 12,
              padding: "12px 20px",
              fontWeight: 600,
              cursor: "pointer",
              marginRight: 8,
            }}
          >
            Try again
          </button>
          <a
            href="/"
            style={{
              display: "inline-block",
              border: "2px solid #0f766e",
              color: "#0f766e",
              borderRadius: 12,
              padding: "10px 18px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Go home
          </a>
          <p style={{ marginTop: 32, fontSize: 14, color: "#737373" }}>
            No 7, Sree Devi Complex, NAT Street, Basavanagudi, Bangalore 560004 ·{" "}
            <a href="tel:+917022780310">+91 70227 80310</a>
          </p>
          <p style={{ marginTop: 12, fontSize: 14 }}>
            <a href="/pricing">Pricing</a>
            {" · "}
            <a href="/book-tour">Book a tour</a>
            {" · "}
            <a href="https://wa.me/917022780310">WhatsApp</a>
          </p>
        </main>
      </body>
    </html>
  );
}
