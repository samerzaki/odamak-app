"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: Record<string, unknown>) => string;
      remove: (widgetId: string) => void;
    };
  }
}

interface TurnstileProps {
  onVerify: (token: string) => void;
  onExpire?: () => void;
  onError?: () => void;
  language?: "ar" | "en";
  action?: "login" | "register" | "forgot-password" | "reset-password" | "mobile-auth";
}

const SCRIPT_ID = "cloudflare-turnstile-script";
export function Turnstile({ onVerify, onExpire, onError, language = "ar", action }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | undefined>(undefined);
  const [loadError, setLoadError] = useState(false);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "0x4AAAAAAEmG76SwgrNfKpoF";
  const resolvedAction = action ??
    (typeof window !== "undefined" && window.location.pathname.endsWith("/reset-password")
      ? "reset-password"
      : undefined);

  useEffect(() => {
    if (!siteKey || !containerRef.current) return;
    let active = true;
    const fail = () => {
      if (!active) return;
      setLoadError(true);
      onExpire?.();
      onError?.();
    };

    const render = () => {
      if (!active || !window.turnstile || !containerRef.current || widgetIdRef.current) return;
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        theme: "auto",
        language,
        callback: onVerify,
        ...(resolvedAction ? { action: resolvedAction } : {}),
        "expired-callback": onExpire,
        "error-callback": fail,
        "timeout-callback": fail,
      });
    };

    const existingScript = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (window.turnstile) {
      render();
    } else if (existingScript) {
      existingScript.addEventListener("load", render);
      existingScript.addEventListener("error", fail);
    } else {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      script.addEventListener("load", render);
      script.addEventListener("error", fail);
      document.head.appendChild(script);
    }

    return () => {
      active = false;
      const script = document.getElementById(SCRIPT_ID);
      script?.removeEventListener("load", render);
      script?.removeEventListener("error", fail);
      if (widgetIdRef.current && window.turnstile) window.turnstile.remove(widgetIdRef.current);
      widgetIdRef.current = undefined;
    };
  }, [language, onExpire, onError, onVerify, resolvedAction, siteKey]);

  if (!siteKey) {
    return <p className="text-sm text-down">Cloudflare Turnstile is not configured.</p>;
  }

  if (loadError) {
    return <p className="text-sm text-down">Unable to load the security check. Please refresh and try again.</p>;
  }

  return <div ref={containerRef} className="flex justify-center" />;
}
