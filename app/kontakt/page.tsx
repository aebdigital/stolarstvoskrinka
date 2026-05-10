import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { CookieConsent } from "@/components/CookieConsent";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { RollingText } from "@/components/RollingText";
import { SiteHeader } from "@/components/SiteHeader";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktujte STOLÁRSTVO SKRINKA pre návrh, výrobu a montáž nábytku na mieru v Prešove a okolí.",
  alternates: {
    canonical: absoluteUrl("/kontakt")
  }
};

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-page">
      <SiteHeader active="kontakt" solid />

      <main className="pt-32">
        <section className="pb-24 pt-8 md:pb-32">
          <div className="mx-auto grid w-[95vw] grid-cols-1 gap-16 px-4 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="mb-8 flex items-center gap-4">
                <span className="divider-line" />
                <span className="text-[11px] font-semibold uppercase text-primary">Kontakt</span>
              </div>
              <h1 className="heading-serif mb-8 text-4xl leading-tight text-secondary md:text-6xl">
                Napíšte nám
                <br />
                o vašej realizácii.
              </h1>
              <p className="mb-10 max-w-xl leading-relaxed text-muted">
                Pošlite nám základnú predstavu alebo zavolajte. Ozveme sa vám späť s ďalším postupom pre návrh, výrobu a montáž nábytku.
              </p>

              <div className="space-y-5 text-sm text-muted">
                <a href={`tel:${siteConfig.phone}`} className="group flex items-center gap-3 text-secondary transition-colors hover:text-primary">
                  <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                  <RollingText>{siteConfig.phoneDisplay}</RollingText>
                </a>
                {siteConfig.email && (
                  <a href={`mailto:${siteConfig.email}`} className="group flex items-center gap-3 text-secondary transition-colors hover:text-primary">
                    <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                    <RollingText>{siteConfig.email}</RollingText>
                  </a>
                )}
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                  <span>
                    {siteConfig.legalName}
                    <br />
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.postalCode} {siteConfig.address.locality}
                    <br />
                    {siteConfig.region}
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="bg-secondary p-6 shadow-2xl md:p-10">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer showContactCta={false} />
      <CookieConsent />
    </div>
  );
}
