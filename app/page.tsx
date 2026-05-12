import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CookieConsent } from "@/components/CookieConsent";
import { Footer } from "@/components/Footer";
import { HomeHero } from "@/components/HomeHero";
import { Reveal } from "@/components/Reveal";
import { RevealImage } from "@/components/RevealImage";
import { RollingText } from "@/components/RollingText";
import { SiteHeader } from "@/components/SiteHeader";
import { featuredImages, galleryCategories, galleryImages } from "@/lib/gallery-data";

export default function Home() {
  const previewImages = featuredImages.portfolioPreview;

  return (
    <div className="min-h-screen bg-page">
      <SiteHeader active="home" solid />

      <main>
        <HomeHero image={featuredImages.hero} />

        <div className="relative z-10 bg-page shadow-[0_-42px_90px_rgba(28,25,23,0.22)]">
          <section id="onas" className="py-24 md:py-40">
            <div className="mx-auto w-[95vw] px-4 md:px-8">
              <div className="grid grid-cols-1 items-center gap-16 md:gap-24 lg:grid-cols-2">
                <Reveal>
                  <div className="mb-8 flex items-center gap-4">
                    <span className="divider-line" />
                    <span className="text-[11px] font-semibold uppercase text-primary">O nás</span>
                  </div>
                  <h2 className="heading-serif mb-8 text-4xl leading-tight text-secondary md:text-6xl">
                    Poctivá práca a
                    <br />
                    spokojný zákazník.
                  </h2>
                  <p className="mb-6 text-base leading-relaxed text-muted">
                    Hlavnou náplňou našej práce je nábytok na mieru od A po Zet. Od jeho návrhu cez výrobu až po montáž v interiéri.
                  </p>
                  <p className="mb-6 text-base leading-relaxed text-muted">
                    Realizovaním a výrobou zákaziek sa riadime heslom, ktoré kladie dôraz na kvalitu a spokojnosť klienta.
                  </p>
                  <p className="mb-8 text-base leading-relaxed text-muted">
                    Ponúkame kompletný servis pre váš interiér a riešenia, ktoré vznikajú presne podľa potrieb priestoru.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["Návrh", "Výroba", "Montáž", "Nábytok na mieru"].map((tag) => (
                      <span key={tag} className="border border-primary px-5 py-2.5 text-[11px] font-semibold uppercase text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Reveal>

                <Reveal delay={200}>
                  <RevealImage
                    src="/about.jpg"
                    alt="STOLÁRSTVO SKRINKA - poctivá práca a spokojný zákazník"
                    className="aspect-[4/3] shadow-2xl lg:aspect-[5/4]"
                    sizes="(min-width: 1024px) 45vw, 95vw"
                  />
                </Reveal>
              </div>
            </div>
          </section>

          <section className="bg-secondary py-16 md:py-20">
            <div className="mx-auto w-[95vw] px-4 md:px-8">
              <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
                <Reveal>
                  <div className="brand-serif mb-2 text-5xl font-bold text-primary md:text-6xl">OD A PO ZET</div>
                  <div className="text-xs font-medium uppercase text-white/55 md:text-sm">Kompletný servis</div>
                </Reveal>
                <Reveal delay={100}>
                  <div className="brand-serif mb-2 text-5xl font-bold text-primary md:text-6xl">NÁVRH</div>
                  <div className="text-xs font-medium uppercase text-white/55 md:text-sm">Podľa priestoru</div>
                </Reveal>
                <Reveal delay={200}>
                  <div className="brand-serif mb-2 text-5xl font-bold text-primary md:text-6xl">MONTÁŽ</div>
                  <div className="text-xs font-medium uppercase text-white/55 md:text-sm">V interiéri</div>
                </Reveal>
              </div>
            </div>
          </section>

          <section id="sluzby" className="py-24 md:py-40">
            <div className="mx-auto w-[95vw] px-4 md:px-8">
              <Reveal className="mb-16 text-center">
                <div className="mb-6 flex items-center justify-center gap-4">
                  <span className="divider-line" />
                  <span className="text-[11px] font-semibold uppercase text-primary">Naše služby</span>
                  <span className="divider-line" />
                </div>
                <h2 className="heading-serif text-4xl text-secondary md:text-6xl">Čomu sa venujeme</h2>
              </Reveal>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Reveal>
                  <article className="group relative aspect-video overflow-hidden bg-secondary">
                    <Image
                      src={featuredImages.serviceInterior.src}
                      alt={featuredImages.serviceInterior.alt}
                      fill
                      sizes="(min-width: 768px) 48vw, 95vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/35 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <span className="mb-3 block text-[10px] font-semibold uppercase text-primary">01 / Príprava</span>
                      <h3 className="heading-serif mb-3 text-3xl text-white">Návrh nábytku</h3>
                      <p className="max-w-sm text-sm font-light leading-relaxed text-white/65">
                        Kompletný návrh nábytku na mieru podľa vašich predstáv, priestoru a každodenného používania.
                      </p>
                    </div>
                  </article>
                </Reveal>

                <Reveal delay={150}>
                  <article className="group relative aspect-video overflow-hidden bg-secondary">
                    <Image
                      src={featuredImages.serviceExterior.src}
                      alt={featuredImages.serviceExterior.alt}
                      fill
                      sizes="(min-width: 768px) 48vw, 95vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/35 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <span className="mb-3 block text-[10px] font-semibold uppercase text-primary">02 / Realizácia</span>
                      <h3 className="heading-serif mb-3 text-3xl text-white">Výroba a montáž</h3>
                      <p className="max-w-sm text-sm font-light leading-relaxed text-white/65">
                        Poctivá výroba v dielni a profesionálna montáž hotového nábytku priamo vo vašom interiéri.
                      </p>
                    </div>
                  </article>
                </Reveal>
              </div>

              <Reveal className="mt-20 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
                <div className="grid grid-cols-2 gap-4">
                  <RevealImage src={featuredImages.detailOne.src} alt={featuredImages.detailOne.alt} className="aspect-[3/4] shadow-lg" />
                  <RevealImage src={featuredImages.detailTwo.src} alt={featuredImages.detailTwo.alt} className="mt-8 aspect-[3/4] shadow-lg" />
                </div>
                <div>
                  <div className="mb-8 flex items-center gap-4">
                    <span className="divider-line" />
                    <span className="text-[11px] font-semibold uppercase text-primary">Interiérový nábytok</span>
                  </div>
                  <h3 className="heading-serif mb-6 text-3xl leading-tight text-secondary md:text-5xl">Presne pre váš priestor.</h3>
                  <p className="mb-6 text-base leading-relaxed text-muted">
                    Vyrábame interiérový nábytok na mieru pre domácnosti, byty aj rodinné domy. Každý prvok pripravujeme tak,
                    aby mal svoje miesto a zmysel.
                  </p>
                  <p className="mb-10 text-base leading-relaxed text-muted">
                    Zákazku vieme sprevádzať od prvého návrhu až po montáž, aby výsledok pôsobil prirodzene a fungoval v každodennom živote.
                  </p>
                  <Link href="#kontakt" className="group inline-flex items-center gap-3 text-sm font-semibold uppercase text-primary transition-colors">
                    <RollingText>Nezáväzná konzultácia</RollingText>
                    <span className="h-px w-8 bg-primary transition-all duration-300 group-hover:w-16" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </section>

          <section id="portfolio" className="bg-secondary/[0.02] py-24 md:py-40">
            <div className="mx-auto w-[95vw] px-4 md:px-8">
              <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
                <Reveal>
                  <div className="mb-8 flex items-center gap-4">
                    <span className="divider-line" />
                    <span className="text-[11px] font-semibold uppercase text-primary">Ukážky realizácií</span>
                  </div>
                  <h2 className="heading-serif text-4xl leading-tight text-secondary md:text-6xl">
                    Nábytok, ktorý vznikol
                    <br />
                    na mieru.
                  </h2>
                </Reveal>

                <Reveal>
                  <Link
                    href="/referencie"
                    className="group inline-flex items-center gap-3 border border-secondary/10 px-6 py-3 text-xs font-bold uppercase text-secondary transition-colors hover:border-primary hover:text-primary"
                  >
                    <RollingText>Všetky referencie</RollingText>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
                  </Link>
                </Reveal>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {previewImages.map((image, index) => (
                  <Reveal key={image.id} delay={(index % 3) * 100}>
                    <Link href={`/referencie?filter=${image.category}`} className="group block">
                      <RevealImage src={image.src} alt={image.alt} className="aspect-[4/5] bg-secondary shadow-lg" sizes="(min-width: 1024px) 31vw, 95vw">
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                          <span className="border border-white/45 px-4 py-2 text-[10px] font-bold uppercase text-white">
                            <RollingText>Zobraziť</RollingText>
                          </span>
                        </div>
                      </RevealImage>
                    </Link>
                  </Reveal>
                ))}
              </div>

              <div className="mt-14 flex flex-wrap items-center justify-center gap-3 text-xs text-muted">
                <span>{galleryImages.length} fotografií</span>
                <span className="h-1 w-1 rounded-full bg-primary" />
                <span>{galleryCategories.length === 1 ? "1 kategória" : `${galleryCategories.length} kategórií`}</span>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </main>

      <CookieConsent />
    </div>
  );
}
