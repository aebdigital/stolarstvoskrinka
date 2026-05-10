"use client";

import { Settings, X } from "lucide-react";
import { useEffect, useState } from "react";
import { RollingText } from "@/components/RollingText";
import { cn } from "@/lib/cn";

const storageKey = "skrinka_cookies";
type CookieStatus = "checking" | "visible" | "hidden";
type CookiePreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false
};

function readPreferences() {
  const stored = localStorage.getItem(storageKey);
  if (!stored) return null;

  try {
    return { ...defaultPreferences, ...JSON.parse(stored), necessary: true } as CookiePreferences;
  } catch {
    return defaultPreferences;
  }
}

export function CookieConsent() {
  const [status, setStatus] = useState<CookieStatus>("checking");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const stored = readPreferences();
      if (stored) {
        setPreferences(stored);
        setStatus("hidden");
      } else {
        setStatus("visible");
      }
    }, 0);

    const openSettings = () => {
      const stored = readPreferences();
      setPreferences(stored ?? defaultPreferences);
      setSettingsOpen(true);
      setStatus("hidden");
    };

    window.addEventListener("skrinka:open-cookie-settings", openSettings);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("skrinka:open-cookie-settings", openSettings);
    };
  }, []);

  const savePreferences = (nextPreferences: CookiePreferences) => {
    localStorage.setItem(storageKey, JSON.stringify(nextPreferences));
    setPreferences(nextPreferences);
    setStatus("hidden");
    setSettingsOpen(false);
  };

  const acceptAll = () => {
    savePreferences({ necessary: true, analytics: true, marketing: true });
  };

  const rejectOptional = () => {
    savePreferences(defaultPreferences);
  };

  if (status === "checking") return null;

  const visible = status === "visible";

  return (
    <>
      <div
        className={cn(
          "cookie-banner fixed inset-x-0 bottom-0 z-[70] border-t border-primary/20 bg-secondary shadow-2xl",
          visible && "is-visible"
        )}
      >
        <div className="mx-auto flex w-[95vw] flex-col items-start justify-between gap-5 px-4 py-5 md:flex-row md:items-center md:px-8">
          <div className="flex-1">
            <p className="mb-1 text-sm font-semibold text-white">Táto stránka používa cookies</p>
            <p className="max-w-xl text-xs font-light leading-relaxed text-white/45">
              Používame nevyhnutné cookies pre správne fungovanie stránky a analytické cookies na zlepšenie vašej skúsenosti.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="rolling-trigger border border-white/15 px-5 py-3 text-xs font-semibold uppercase text-white/60 transition-colors hover:bg-white/5"
              onClick={() => {
                setSettingsOpen(true);
                setStatus("hidden");
              }}
            >
              <RollingText>Nastavenia</RollingText>
            </button>
            <button
              type="button"
              className="rolling-trigger border border-white/15 px-5 py-3 text-xs font-semibold uppercase text-white/60 transition-colors hover:bg-white/5"
              onClick={rejectOptional}
            >
              <RollingText>Odmietnuť</RollingText>
            </button>
            <button
              type="button"
              className="rolling-trigger bg-primary px-6 py-3 text-xs font-semibold uppercase text-secondary transition-opacity hover:opacity-90"
              onClick={acceptAll}
            >
              <RollingText>Prijať všetky</RollingText>
            </button>
          </div>
        </div>
      </div>

      <button
        type="button"
        className={cn(
          "cookie-revisit fixed bottom-6 left-6 z-[65] flex h-10 w-10 items-center justify-center border border-primary/30 bg-secondary text-primary/70 shadow-lg transition-colors hover:bg-white/10",
          !visible && "is-visible"
        )}
        aria-label="Nastavenia cookies"
        title="Nastavenia cookies"
        onClick={() => setStatus("visible")}
      >
        <Settings className="h-4 w-4" aria-hidden="true" />
      </button>

      {settingsOpen && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-secondary/75 p-4 backdrop-blur-sm" role="dialog" aria-modal="true">
          <div className="w-full max-w-xl bg-page p-6 text-secondary shadow-2xl md:p-8">
            <div className="mb-8 flex items-start justify-between gap-6">
              <div>
                <p className="mb-2 text-[11px] font-semibold uppercase text-primary">Cookies</p>
                <h2 className="heading-serif text-3xl">Nastavenia súkromia</h2>
              </div>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center border border-secondary/10 text-secondary transition-colors hover:border-primary hover:text-primary"
                aria-label="Zavrieť nastavenia cookies"
                onClick={() => setSettingsOpen(false)}
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="space-y-4">
              <CookieToggle
                title="Nevyhnutné cookies"
                description="Zabezpečujú správne fungovanie stránky a kontaktného formulára."
                checked
                disabled
                onChange={() => undefined}
              />
              <CookieToggle
                title="Analytické cookies"
                description="Pomáhajú nám pochopiť návštevnosť a zlepšovať stránku."
                checked={preferences.analytics}
                onChange={(analytics) => setPreferences((current) => ({ ...current, analytics }))}
              />
              <CookieToggle
                title="Marketingové cookies"
                description="Slúžia na meranie kampaní a relevantnejšiu komunikáciu."
                checked={preferences.marketing}
                onChange={(marketing) => setPreferences((current) => ({ ...current, marketing }))}
              />
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <button
                type="button"
                className="rolling-trigger border border-secondary/10 px-5 py-3 text-xs font-semibold uppercase transition-colors hover:border-primary hover:text-primary"
                onClick={rejectOptional}
              >
                <RollingText>Odmietnuť</RollingText>
              </button>
              <button
                type="button"
                className="rolling-trigger border border-secondary/10 px-5 py-3 text-xs font-semibold uppercase transition-colors hover:border-primary hover:text-primary"
                onClick={() => savePreferences(preferences)}
              >
                <RollingText>Uložiť</RollingText>
              </button>
              <button
                type="button"
                className="rolling-trigger bg-primary px-5 py-3 text-xs font-semibold uppercase text-secondary transition-opacity hover:opacity-90"
                onClick={acceptAll}
              >
                <RollingText>Prijať všetky</RollingText>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

type CookieToggleProps = {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
};

function CookieToggle({ title, description, checked, disabled = false, onChange }: CookieToggleProps) {
  return (
    <label className="flex items-center justify-between gap-5 border border-secondary/10 bg-white/40 p-4">
      <span>
        <span className="block text-sm font-semibold">{title}</span>
        <span className="mt-1 block text-sm leading-relaxed text-muted">{description}</span>
      </span>
      <input
        type="checkbox"
        className="peer sr-only"
        checked={checked}
        disabled={disabled}
        onChange={(event) => onChange(event.target.checked)}
      />
      <span className="relative h-7 w-12 flex-none bg-secondary/15 transition-colors peer-checked:bg-primary peer-disabled:opacity-60">
        <span className={cn("absolute left-1 top-1 h-5 w-5 bg-white shadow transition-transform", checked && "translate-x-5")} />
      </span>
    </label>
  );
}
