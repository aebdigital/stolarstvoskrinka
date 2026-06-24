"use client";

import { Loader2 } from "lucide-react";
import Script from "next/script";
import { type FormEvent, useEffect, useRef, useState } from "react";
import { RollingText } from "@/components/RollingText";

type SubmitState = {
  status: "idle" | "loading" | "success" | "error";
  message: string;
};

type TurnstileOptions = {
  sitekey: string;
  theme: "light" | "dark" | "auto";
  language: string;
  callback: (token: string) => void;
  "expired-callback": () => void;
  "error-callback": () => void;
};

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: TurnstileOptions) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

const turnstileSiteKey =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "0x4AAAAAADqPsY1iT5RmXROu";

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>({
    status: "idle",
    message: ""
  });
  const [turnstileReady, setTurnstileReady] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileError, setTurnstileError] = useState("");
  const turnstileContainerRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (
      !turnstileReady ||
      !window.turnstile ||
      !turnstileContainerRef.current ||
      turnstileWidgetIdRef.current
    ) {
      return;
    }

    turnstileWidgetIdRef.current = window.turnstile.render(turnstileContainerRef.current, {
      sitekey: turnstileSiteKey,
      theme: "dark",
      language: "sk",
      callback: (token) => {
        setTurnstileToken(token);
        setTurnstileError("");
      },
      "expired-callback": () => {
        setTurnstileToken("");
        setTurnstileError("Overenie vypršalo. Prosím, skúste to znova.");
      },
      "error-callback": () => {
        setTurnstileToken("");
        setTurnstileError("Bezpečnostné overenie sa nepodarilo načítať.");
      }
    });

    return () => {
      if (turnstileWidgetIdRef.current && window.turnstile) {
        window.turnstile.remove(turnstileWidgetIdRef.current);
        turnstileWidgetIdRef.current = null;
      }
    };
  }, [turnstileReady]);

  const resetTurnstile = () => {
    if (turnstileWidgetIdRef.current && window.turnstile) {
      window.turnstile.reset(turnstileWidgetIdRef.current);
    }
    setTurnstileToken("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    if (!turnstileToken) {
      setSubmitState({
        status: "error",
        message: "Pred odoslaním prosím dokončite bezpečnostné overenie."
      });
      return;
    }

    setSubmitState({ status: "loading", message: "Odosielame správu..." });

    try {
      const response = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...Object.fromEntries(formData.entries()),
          turnstileToken
        })
      });

      const result = (await response.json().catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        throw new Error(result?.message || "Správu sa nepodarilo odoslať.");
      }

      form.reset();
      setSubmitState({
        status: "success",
        message: result?.message || "Ďakujeme, správa bola odoslaná."
      });
    } catch (error) {
      setSubmitState({
        status: "error",
        message: error instanceof Error ? error.message : "Správu sa nepodarilo odoslať."
      });
    } finally {
      resetTurnstile();
    }
  };

  const isLoading = submitState.status === "loading";

  return (
    <form className="space-y-4" onSubmit={handleSubmit} data-netlify-contact noValidate>
      <Script
        id="cloudflare-turnstile"
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={() => setTurnstileReady(true)}
      />
      <h3 className="heading-serif mb-6 text-2xl text-white">Kontaktný formulár</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          type="text"
          name="name"
          placeholder="Vaše meno"
          required
          minLength={2}
          autoComplete="name"
          className="border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-primary"
        />
        <input
          type="email"
          name="email"
          placeholder="Váš email"
          required
          autoComplete="email"
          className="border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-primary"
        />
      </div>
      <input
        type="text"
        name="subject"
        placeholder="Predmet"
        autoComplete="off"
        className="w-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-primary"
      />
      <textarea
        name="message"
        placeholder="Vaša správa"
        rows={4}
        required
        minLength={10}
        className="w-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-primary"
      />
      <label className="flex items-center gap-3 text-xs text-white/45">
        <input type="checkbox" name="privacy" value="accepted" required className="h-4 w-4 accent-primary" />
        Súhlas so spracovaním osobných údajov
      </label>

      <div>
        <div ref={turnstileContainerRef} className="min-h-[65px]" />
        {turnstileError && <p className="mt-2 text-xs text-red-200">{turnstileError}</p>}
      </div>

      {submitState.message && (
        <div
          role="status"
          data-form-message
          className={[
            "border px-4 py-3 text-sm",
            submitState.status === "success" && "border-emerald-400/30 bg-emerald-400/10 text-emerald-100",
            submitState.status === "error" && "border-red-400/30 bg-red-400/10 text-red-100",
            submitState.status === "loading" && "border-white/10 bg-white/5 text-white/65"
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {submitState.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading || !turnstileToken}
        className="group rolling-trigger flex w-full items-center justify-center gap-3 bg-primary py-4 text-sm font-semibold uppercase text-secondary transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isLoading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        <RollingText text={isLoading ? "Odosielam" : "Odoslať správu"}>{isLoading ? "Odosielam" : "Odoslať správu"}</RollingText>
      </button>
    </form>
  );
}
