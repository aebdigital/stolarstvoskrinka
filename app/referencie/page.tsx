import type { Metadata } from "next";
import { CookieConsent } from "@/components/CookieConsent";
import { Footer } from "@/components/Footer";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Reveal } from "@/components/Reveal";
import { SiteHeader } from "@/components/SiteHeader";
import { galleryCategories, galleryImages } from "@/lib/gallery-data";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Referencie",
  description: "Galéria realizácií STOLÁRSTVO SKRINKA s ukážkami nábytku na mieru.",
  alternates: {
    canonical: absoluteUrl("/referencie")
  }
};

export default function ReferenciePage() {
  return (
    <div className="min-h-screen bg-page">
      <SiteHeader active="referencie" solid />

      <main className="pt-32">
        <section className="pb-24 pt-8 md:pb-32">
          <div className="mx-auto w-[95vw] px-4 md:px-8">
            <Reveal className="mx-auto mb-16 max-w-4xl text-center">
              <div className="mb-6 flex items-center justify-center gap-4">
                <span className="divider-line" />
                <span className="text-[11px] font-semibold uppercase text-primary">Ukážky realizácií</span>
                <span className="divider-line" />
              </div>
              <h1 className="heading-serif mb-8 text-4xl text-secondary md:text-6xl">Nábytok na mieru</h1>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted">
                Výber fotografií zo zdrojového webu ukazuje interiérový nábytok, ktorý vznikol od návrhu cez výrobu až po montáž.
              </p>
            </Reveal>

            <GalleryGrid categories={galleryCategories} images={galleryImages} />
          </div>
        </section>
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
}
