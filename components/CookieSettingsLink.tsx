"use client";

import { RollingText } from "@/components/RollingText";
import { cn } from "@/lib/cn";

type CookieSettingsLinkProps = {
  className?: string;
};

export function CookieSettingsLink({ className }: CookieSettingsLinkProps) {
  return (
    <button
      type="button"
      className={cn("rolling-trigger text-left", className)}
      onClick={() => window.dispatchEvent(new Event("skrinka:open-cookie-settings"))}
    >
      <RollingText>Cookies</RollingText>
    </button>
  );
}
