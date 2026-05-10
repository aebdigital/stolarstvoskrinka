"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { RollingText } from "@/components/RollingText";
import type { GalleryImage } from "@/lib/gallery-data";
import { siteConfig } from "@/lib/site";

type HomeHeroProps = {
  image: GalleryImage;
};

export function HomeHero({ image }: HomeHeroProps) {
  const parallaxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translate3d(0, ${window.scrollY * 0.12}px, 0)`;
      }
      frame = 0;
    };

    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="top" className="sticky top-0 z-0 flex h-[100svh] min-h-[660px] w-full items-end overflow-hidden">
      <div className="absolute inset-0">
        <div ref={parallaxRef} className="absolute -top-[15%] left-0 h-[115%] w-full will-change-transform">
          <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/30 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-[95vw] px-4 pb-14 md:px-8 md:pb-24">
        <div className="max-w-4xl">
          <div className="mb-8 flex items-center gap-4 opacity-0 [animation:fadeUp_0.8s_ease-out_0.15s_forwards]">
            <span className="divider-line" />
            <span className="text-[11px] font-semibold uppercase text-primary">Nábytok na mieru od A po Zet</span>
          </div>
          <h1 className="heading-serif mb-8 text-5xl leading-none text-white opacity-0 [animation:fadeUp_0.8s_ease-out_0.3s_forwards] md:text-7xl lg:text-8xl">
            Návrh,
            <br />
            výroba a
            <br />
            <span className="text-primary">montáž nábytku</span>
          </h1>
          <p className="mb-10 max-w-2xl text-lg font-light leading-relaxed text-white/75 opacity-0 [animation:fadeUp_0.8s_ease-out_0.45s_forwards] md:mb-12 md:text-xl">
            Hlavnou náplňou našej práce je nábytok na mieru. Od návrhu cez výrobu až po montáž v interiéri.
          </p>
          <div className="flex flex-col gap-4 opacity-0 [animation:fadeUp_0.8s_ease-out_0.6s_forwards] sm:flex-row">
            <Link
              href={`tel:${siteConfig.phone}`}
              className="group inline-flex items-center justify-center bg-primary px-10 py-4 text-sm font-semibold uppercase text-secondary transition-opacity hover:opacity-90"
            >
              <RollingText>Zavolajte nám</RollingText>
            </Link>
            <Link
              href="#onas"
              className="group inline-flex items-center justify-center border border-white/25 px-10 py-4 text-sm font-medium uppercase text-white transition-colors hover:bg-white/10"
            >
              <RollingText>O nás</RollingText>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
