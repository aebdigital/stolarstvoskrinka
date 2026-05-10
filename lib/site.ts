export const siteConfig = {
  name: "STOLÁRSTVO SKRINKA",
  legalName: "František Pažin - STOLÁRSTVO SKRINKA",
  shortName: "Skrinka",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://stolarstvo.skrinka.sk",
  locale: "sk_SK",
  phone: "+421903521572",
  phoneDisplay: "0903 521 572",
  email: "",
  address: {
    street: "Herlianská 2230/27",
    locality: "Prešov",
    postalCode: "080 06",
    country: "SK"
  },
  region: "Prešov a okolie",
  ico: "",
  dic: "",
  description:
    "Vyrábame nábytok na mieru od A po Zet. Návrh, výroba a montáž interiérového nábytku s dôrazom na poctivú prácu a spokojnosť zákazníka.",
  keywords: [
    "nábytok na mieru",
    "stolárstvo Prešov",
    "interiérový nábytok",
    "návrh nábytku",
    "výroba nábytku",
    "montáž nábytku",
    "zákazková výroba",
    "Skrinka"
  ]
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  url: siteConfig.url,
  description: siteConfig.description,
  telephone: siteConfig.phone,
  email: siteConfig.email || undefined,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.locality,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country
  },
  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: siteConfig.region
    },
    {
      "@type": "Country",
      name: "Slovensko"
    }
  ],
  taxID: siteConfig.dic || undefined,
  identifier: siteConfig.ico || undefined,
  priceRange: "$$",
  makesOffer: [
    "Nábytok na mieru",
    "Návrh interiéru",
    "Výroba nábytku",
    "Montáž nábytku",
    "Interiérový nábytok",
    "Zákazková výroba"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: siteConfig.name,
  url: siteConfig.url,
  inLanguage: "sk-SK",
  publisher: {
    "@id": `${siteConfig.url}/#organization`
  }
};

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [organizationSchema, websiteSchema]
};
