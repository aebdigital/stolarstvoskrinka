import type { Metadata } from "next";
import { LenisSmoothScroll } from "@/components/LenisSmoothScroll";
import { PageTransition } from "@/components/PageTransition";
import { absoluteUrl, siteConfig, structuredData } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "STOLÁRSTVO SKRINKA | Nábytok na mieru od návrhu po montáž",
    template: "%s | STOLÁRSTVO SKRINKA"
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  applicationName: siteConfig.shortName,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: absoluteUrl("/")
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: absoluteUrl("/"),
    siteName: siteConfig.name,
    title: "STOLÁRSTVO SKRINKA | Nábytok na mieru od návrhu po montáž",
    description: siteConfig.description,
    images: [
      {
        url: absoluteUrl("/referencie/kuchyne/kuchyne-01.jpg"),
        width: 1200,
        height: 630,
        alt: "STOLÁRSTVO SKRINKA - nábytok na mieru"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "STOLÁRSTVO SKRINKA | Nábytok na mieru od návrhu po montáž",
    description: siteConfig.description,
    images: [absoluteUrl("/referencie/kuchyne/kuchyne-01.jpg")]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body className="antialiased">
        <LenisSmoothScroll />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
