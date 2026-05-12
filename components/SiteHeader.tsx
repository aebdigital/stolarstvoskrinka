"use client";

import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RollingText } from "@/components/RollingText";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site";

type SiteHeaderProps = {
  active?: "home" | "referencie" | "kontakt";
  solid?: boolean;
};

const navItems = [
  { label: "Domov", href: "/", key: "home" },
  { label: "Referencie", href: "/referencie", key: "referencie" },
  { label: "Kontakt", href: "/kontakt", key: "kontakt" }
] as const;

export function SiteHeader({ active = "home", solid = false }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(solid);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (solid) return;

    const onScroll = () => setScrolled(window.scrollY > 100);
    const frame = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [solid]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "site-header fixed left-0 right-0 top-0 z-50 border-b border-transparent",
          scrolled && "scrolled"
        )}
      >
        <div className="mx-auto flex h-16 w-[95vw] items-center justify-between px-4 md:h-24 md:px-8">
          <Link href="/" className="flex items-center text-white" onClick={() => setMenuOpen(false)}>
            <span className="brand-serif text-lg font-bold uppercase md:text-2xl">
              STOLÁRSTVO <span className="text-primary">SKRINKA</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={cn(
                  "relative pb-2 text-sm font-semibold uppercase text-white transition-colors after:absolute after:left-0 after:top-full after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform hover:text-primary lg:text-[15px]",
                  active === item.key && "text-white after:scale-x-100"
                )}
              >
                <RollingText>{item.label}</RollingText>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-5">
            <a
              href={`tel:${siteConfig.phone}`}
              className="hidden items-center gap-2 text-sm font-medium text-white/75 transition-colors hover:text-white sm:flex"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {siteConfig.phoneDisplay}
            </a>
            <Link
              href="/#kontakt"
              className="group hidden items-center justify-center border border-white/20 px-7 py-3.5 text-xs font-bold uppercase text-white transition-all duration-300 hover:border-primary hover:bg-primary hover:text-secondary sm:inline-flex"
            >
              <RollingText>Dopyt</RollingText>
            </Link>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors hover:border-primary hover:text-primary md:hidden"
              aria-label={menuOpen ? "Zavrieť menu" : "Otvoriť menu"}
              onClick={() => setMenuOpen((value) => !value)}
            >
              {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 transition-[visibility] duration-500 md:hidden",
          menuOpen ? "visible" : "invisible delay-500"
        )}
      >
        <button
          type="button"
          aria-label="Zavrieť menu"
          className={cn(
            "absolute inset-x-0 top-0 h-[30svh] bg-secondary/25 backdrop-blur-md transition-opacity duration-500",
            menuOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={cn(
            "absolute inset-x-0 bottom-0 flex h-[70svh] flex-col justify-between bg-secondary px-6 pb-10 pt-12 shadow-2xl transition-transform duration-500 ease-out",
            menuOpen ? "translate-y-0" : "translate-y-full"
          )}
        >
          <nav className="flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={cn(
                  "heading-serif w-fit text-4xl text-white transition-colors hover:text-primary",
                  active === item.key && "underline decoration-white decoration-1 underline-offset-8"
                )}
                onClick={() => setMenuOpen(false)}
              >
                <RollingText>{item.label}</RollingText>
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/55">
            <a href={`tel:${siteConfig.phone}`} className="hover:text-white" onClick={() => setMenuOpen(false)}>
              {siteConfig.phoneDisplay}
            </a>
            {siteConfig.email && (
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white" onClick={() => setMenuOpen(false)}>
                {siteConfig.email}
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
