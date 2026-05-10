"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { RollingText } from "@/components/RollingText";
import type { GalleryCategory, GalleryImage } from "@/lib/gallery-data";
import { cn } from "@/lib/cn";

type GalleryGridProps = {
  categories: GalleryCategory[];
  images: GalleryImage[];
};

export function GalleryGrid({ categories, images }: GalleryGridProps) {
  const [active, setActive] = useState(() => {
    if (typeof window === "undefined") return "all";
    const filter = new URLSearchParams(window.location.search).get("filter");
    return filter && categories.some((category) => category.slug === filter) ? filter : "all";
  });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [lightboxDirection, setLightboxDirection] = useState<"open" | "next" | "prev">("open");

  const visibleImages = useMemo(() => {
    if (active === "all") return images;
    return images.filter((image) => image.category === active);
  }, [active, images]);

  const lightbox = lightboxIndex === null ? null : visibleImages[lightboxIndex] ?? null;
  const hasMultipleImages = visibleImages.length > 1;

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const openLightbox = useCallback((index: number) => {
    setLightboxDirection("open");
    setLightboxIndex(index);
  }, []);

  const showNextImage = useCallback(() => {
    if (visibleImages.length < 2) return;

    setLightboxDirection("next");
    setLightboxIndex((current) => (current === null ? 0 : (current + 1) % visibleImages.length));
  }, [visibleImages.length]);

  const showPreviousImage = useCallback(() => {
    if (visibleImages.length < 2) return;

    setLightboxDirection("prev");
    setLightboxIndex((current) => (current === null ? 0 : (current - 1 + visibleImages.length) % visibleImages.length));
  }, [visibleImages.length]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight") showNextImage();
      if (event.key === "ArrowLeft") showPreviousImage();
    };

    if (lightbox) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [closeLightbox, lightbox, showNextImage, showPreviousImage]);

  const changeFilter = (nextFilter: string) => {
    closeLightbox();
    setActive(nextFilter);
  };

  return (
    <>
      <div className="mb-12 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          className={cn(
            "filter-btn border border-secondary/10 px-6 py-3 text-[10px] font-bold uppercase hover:border-primary",
            active === "all" && "active"
          )}
          onClick={() => changeFilter("all")}
        >
          <RollingText text={`Všetko ${images.length}`}>
            Všetko <span className="ml-2 opacity-60">{images.length}</span>
          </RollingText>
        </button>
        {categories.map((category) => (
          <button
            key={category.slug}
            type="button"
            className={cn(
              "filter-btn border border-secondary/10 px-6 py-3 text-[10px] font-bold uppercase hover:border-primary",
              active === category.slug && "active"
            )}
            onClick={() => changeFilter(category.slug)}
          >
            <RollingText text={`${category.label} ${category.imageCount}`}>
              {category.label} <span className="ml-2 opacity-60">{category.imageCount}</span>
            </RollingText>
          </button>
        ))}
      </div>

      <div className="mb-8 text-center text-xs uppercase text-muted">
        {visibleImages.length} realizácií
      </div>

      <div key={active} className="gallery-grid-motion grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {visibleImages.map((image, index) => (
          <button
            key={image.id}
            type="button"
            className="group relative aspect-[8/7] overflow-hidden bg-secondary text-left shadow-lg"
            style={{ animationDelay: `${Math.min(index, 15) * 35}ms` }}
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 24vw, (min-width: 640px) 48vw, 95vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <span className="border border-white/45 px-4 py-2 text-[10px] font-bold uppercase text-white">
                <RollingText>Zobraziť</RollingText>
              </span>
            </span>
          </button>
        ))}
      </div>

      {lightbox && (
        <div
          className="lightbox-overlay-motion fixed inset-0 z-[100] flex items-center justify-center bg-secondary/95 p-4 backdrop-blur-sm md:p-12"
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center text-white/65 transition-colors hover:text-white"
            aria-label="Zavrieť náhľad"
            onClick={closeLightbox}
          >
            <X className="h-8 w-8" aria-hidden="true" />
          </button>

          {hasMultipleImages && (
            <>
              <button
                type="button"
                className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/15 bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white md:left-8 md:h-16 md:w-16"
                aria-label="Predchádzajúca fotografia"
                onClick={(event) => {
                  event.stopPropagation();
                  showPreviousImage();
                }}
              >
                <ChevronLeft className="h-7 w-7" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/15 bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white md:right-8 md:h-16 md:w-16"
                aria-label="Ďalšia fotografia"
                onClick={(event) => {
                  event.stopPropagation();
                  showNextImage();
                }}
              >
                <ChevronRight className="h-7 w-7" aria-hidden="true" />
              </button>
            </>
          )}

          <div className="lightbox-panel-motion flex max-h-full w-full max-w-6xl flex-col items-center justify-center" onClick={(event) => event.stopPropagation()}>
            <div key={lightbox.id} data-direction={lightboxDirection} className="lightbox-image-motion relative h-[80vh] w-full">
              <Image src={lightbox.src} alt={lightbox.alt} fill sizes="90vw" className="object-contain drop-shadow-2xl" priority />
            </div>
            <p className="mt-6 text-xs font-medium uppercase text-white/60">
              {lightbox.categoryLabel} · {lightbox.title}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
