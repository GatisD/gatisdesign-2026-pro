import { useEffect, useCallback } from "react";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
  }
}

const SITE_KEY =
  (import.meta.env.VITE_RECAPTCHA_SITE_KEY as string | undefined) ||
  "6Le0ldgrAAAAAH_LmVyO6UVcmKaWmL4rqElb6SHE";

const SCRIPT_ATTR = `script[data-recaptcha="${SITE_KEY}"]`;

function loadScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof document === "undefined") return reject(new Error("no-document"));
    const existing = document.querySelector<HTMLScriptElement>(SCRIPT_ATTR);
    if (existing) {
      if (window.grecaptcha) return resolve();
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("script-error")), { once: true });
      return;
    }
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
    script.async = true;
    script.defer = true;
    script.dataset.recaptcha = SITE_KEY;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("script-error"));
    document.head.appendChild(script);
  });
}

async function waitForGrecaptcha(timeoutMs = 8000): Promise<boolean> {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    if (window.grecaptcha && typeof window.grecaptcha.execute === "function") return true;
    await new Promise((r) => setTimeout(r, 100));
  }
  return Boolean(window.grecaptcha);
}

export function useRecaptcha() {
  useEffect(() => {
    if (!SITE_KEY) return;
    loadScript().catch((err) => console.warn("[recaptcha] load failed", err));
  }, []);

  const execute = useCallback(async (action: string): Promise<string | null> => {
    if (!SITE_KEY) return null;
    try {
      await loadScript();
      const ready = await waitForGrecaptcha();
      if (!ready || !window.grecaptcha) {
        console.warn("[recaptcha] grecaptcha not available");
        return null;
      }
      return await new Promise<string | null>((resolve) => {
        window.grecaptcha!.ready(async () => {
          try {
            const token = await window.grecaptcha!.execute(SITE_KEY, { action });
            resolve(token);
          } catch (err) {
            console.warn("[recaptcha] execute failed", err);
            resolve(null);
          }
        });
      });
    } catch (err) {
      console.warn("[recaptcha] init failed", err);
      return null;
    }
  }, []);

  return { execute, enabled: Boolean(SITE_KEY) };
}
