import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { CookieSettingsLink } from "@/components/CookieSettingsLink";
import { Reveal } from "@/components/Reveal";
import { RollingText } from "@/components/RollingText";
import { siteConfig } from "@/lib/site";

type FooterProps = {
  showContactCta?: boolean;
};

export function Footer({ showContactCta = true }: FooterProps) {
  return (
    <footer id="kontakt" className="bg-secondary pb-12 pt-24 text-white md:pt-40">
      <div className="relative z-10 mx-auto w-[95vw] px-4 md:px-8">
        {showContactCta && (
          <Reveal className="mb-20 grid grid-cols-1 gap-16 border-b border-white/10 pb-20 lg:grid-cols-2">
            <div>
              <h2 className="heading-serif mb-6 text-4xl leading-tight text-white md:text-6xl">
                Máte záujem o
                <br />
                <span className="text-primary">nábytok na mieru?</span>
              </h2>
              <p className="mb-10 max-w-xl text-base font-light leading-relaxed text-white/55">
                Od prvého návrhu až po finálnu montáž. Ozvite sa nám a spoločne navrhneme riešenie presne pre váš interiér.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="group inline-flex items-center justify-center gap-3 bg-primary px-10 py-4 text-sm font-semibold uppercase text-secondary transition-opacity hover:opacity-90"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  <RollingText>Zavolajte nám</RollingText>
                </a>
                <a
                  href="/kontakt"
                  className="group inline-flex items-center justify-center gap-3 border border-white/20 px-10 py-4 text-sm font-medium uppercase text-white transition-colors hover:bg-white/10"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <RollingText>Kontaktný formulár</RollingText>
                </a>
              </div>
            </div>

            <ContactForm />
          </Reveal>
        )}

        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="brand-serif mb-6 block text-xl font-bold uppercase text-white">
              STOLÁRSTVO <span className="text-primary">SKRINKA</span>
            </span>
            <p className="text-sm font-light leading-relaxed text-white/45">
              Nábytok na mieru od návrhu cez výrobu až po montáž, s dôrazom na poctivú prácu a spokojného zákazníka.
            </p>
          </div>
          <div>
            <h4 className="mb-6 text-[11px] font-semibold uppercase text-white/35">Navigácia</h4>
            <ul className="space-y-3 text-sm text-white/55">
              <li>
                <Link href="/#top" className="transition-colors hover:text-white">
                  Domov
                </Link>
              </li>
              <li>
                <Link href="/#onas" className="transition-colors hover:text-white">
                  O nás
                </Link>
              </li>
              <li>
                <Link href="/#sluzby" className="transition-colors hover:text-white">
                  Služby
                </Link>
              </li>
              <li>
                <Link href="/referencie" className="transition-colors hover:text-white">
                  Referencie
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 text-[11px] font-semibold uppercase text-white/35">Služby</h4>
            <ul className="space-y-3 text-sm font-light text-white/45">
              <li>Návrh nábytku</li>
              <li>Výroba nábytku</li>
              <li>Montáž v interiéri</li>
              <li>Interiérový nábytok</li>
              <li>Nábytok na mieru</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 text-[11px] font-semibold uppercase text-white/35">Kontakt</h4>
            <ul className="space-y-4 text-sm font-light text-white/55">
              <li>
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 transition-colors hover:text-white">
                  <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              {siteConfig.email && (
                <li>
                  <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 transition-colors hover:text-white">
                    <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                    {siteConfig.email}
                  </a>
                </li>
              )}
              <li className="flex items-start gap-3 leading-relaxed text-white/35">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-primary" aria-hidden="true" />
                <span>
                  {siteConfig.legalName}
                  <br />
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.postalCode} {siteConfig.address.locality}
                </span>
              </li>
              <li className="text-xs text-white/25">Sídlo: {siteConfig.region}</li>
              {(siteConfig.ico || siteConfig.dic) && (
                <li className="text-xs text-white/25">
                  {siteConfig.ico && <>IČO: {siteConfig.ico}</>}
                  {siteConfig.ico && siteConfig.dic && " · "}
                  {siteConfig.dic && <>DIČ: {siteConfig.dic}</>}
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-[11px] text-white/25 md:flex-row">
          <a href="https://aebdigital.sk" target="_blank" rel="noreferrer" className="transition-colors hover:text-white/45">
            Tvorba webu - AEB Digital
          </a>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white/45">
              <RollingText>Ochrana osobných údajov</RollingText>
            </a>
            <CookieSettingsLink className="transition-colors hover:text-white/45" />
          </div>
        </div>
      </div>
    </footer>
  );
}
