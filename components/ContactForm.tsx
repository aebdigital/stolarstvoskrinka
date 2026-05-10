"use client";

import { Loader2 } from "lucide-react";
import { type FormEvent, useState } from "react";
import { RollingText } from "@/components/RollingText";

type SubmitState = {
  status: "idle" | "loading" | "success" | "error";
  message: string;
};

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>({
    status: "idle",
    message: ""
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmitState({ status: "loading", message: "Odosielame správu..." });

    try {
      const response = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(Object.fromEntries(formData.entries()))
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
    }
  };

  const isLoading = submitState.status === "loading";

  return (
    <form className="space-y-4" onSubmit={handleSubmit} data-netlify-contact noValidate>
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
        disabled={isLoading}
        className="group rolling-trigger flex w-full items-center justify-center gap-3 bg-primary py-4 text-sm font-semibold uppercase text-secondary transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isLoading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        <RollingText text={isLoading ? "Odosielam" : "Odoslať správu"}>{isLoading ? "Odosielam" : "Odoslať správu"}</RollingText>
      </button>
    </form>
  );
}
