"use client";

import { useEffect } from "react";

const CHATLING_ID = "1118293796";

/** Loads Chatling after idle — does not block LCP or main thread. */
export function DeferredChatling() {
  useEffect(() => {
    const load = () => {
      if (document.getElementById("chatling-script")) return;
      window.chtlConfig = { chatbotId: CHATLING_ID };
      const script = document.createElement("script");
      script.id = "chatling-script";
      script.src = "https://chatling.ai/js/embed.js";
      script.async = true;
      script.dataset.id = CHATLING_ID;
      document.body.appendChild(script);
    };

    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(load, { timeout: 6000 });
      return () => window.cancelIdleCallback(id);
    }

    const timeout = setTimeout(load, 5000);
    return () => clearTimeout(timeout);
  }, []);

  return null;
}

declare global {
  interface Window {
    chtlConfig?: { chatbotId: string };
  }
}
