import type { Metadata, Viewport } from "next";
import {
  Cinzel,
  Playfair_Display,
  Cormorant_Garamond,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";

const cinzelFont = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const playfairFont = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#08090c",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rodrigocorrea.adv.br"),
  title: "Rodrigo Corrêa Advocacia Criminal · Plantão 24h · Caxambu - MG & Tribunais",
  description:
    "⚖️ Dr. Rodrigo Gomes Corrêa — Advocacia Criminal de Alta Complexidade e Plantão 24h. Prisões em flagrante, custódia, habeas corpus, tribunal do júri e recursos em tribunais superiores (TJMG, STJ e STF). Nota máxima 5,0 ★ no Google (27 avaliações). Sede em Caxambu - MG e atendimento em todo o Brasil.",
  keywords: [
    "Rodrigo Corrêa Advocacia Criminal",
    "Dr Rodrigo Corrêa",
    "Dr Rodrigo Gomes Corrêa",
    "Advogado Criminalista Caxambu",
    "Advogado Criminalista MG",
    "Plantão Criminal 24 Horas",
    "Audiência de Custódia Caxambu",
    "Prisão em Flagrante MG",
    "Habeas Corpus TJMG",
    "Habeas Corpus STJ STF",
    "Tribunal do Júri MG",
    "Defesa Criminal Especializada",
    "Advocacia Criminal Caxambu MG",
  ],
  authors: [{ name: "Rodrigo Corrêa Advocacia Criminal" }],
  creator: "Rodrigo Corrêa Advocacia Criminal",
  publisher: "Rodrigo Corrêa Advocacia Criminal",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=9", sizes: "any" },
      { url: "/favicon-32x32.png?v=9", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png?v=9", type: "image/png", sizes: "16x16" },
      { url: "/icon.png?v=9", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/favicon.ico?v=9",
    apple: [{ url: "/apple-icon.png?v=9", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.rodrigocorrea.adv.br",
    title: "Rodrigo Corrêa Advocacia Criminal · Plantão 24h · Caxambu - MG",
    description:
      "⚖️ Advocacia Criminal com rigor técnico, prontidão 24 horas, ética e atendimento humanizado. Nota máxima 5,0 ★ no Google (27 avaliações). R. Maj. Penha, 299 - Sala 101 - Centro, Caxambu - MG e atendimento em todo o Brasil.",
    siteName: "Rodrigo Corrêa Advocacia Criminal",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 512,
        alt: "Rodrigo Corrêa Advocacia Criminal",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Rodrigo Corrêa Advocacia Criminal",
    alternateName: "Dr. Rodrigo Gomes Corrêa — Advocacia Criminal",
    legalName: "Rodrigo Corrêa Advocacia Criminal",
    telephone: "+55-35-99275-5472",
    email: "contato@rodrigocorrea.adv.br",
    url: "https://www.rodrigocorrea.adv.br",
    image: "https://www.rodrigocorrea.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Maj. Penha, 299 - Sala 101 - Centro",
      addressLocality: "Caxambu",
      addressRegion: "MG",
      postalCode: "37440-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -21.9774,
      longitude: -44.9332,
    },
    priceRange: "$$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "27",
    },
    areaServed: [
      "Caxambu",
      "Baependi",
      "São Lourenço",
      "Cruzília",
      "Pouso Alto",
      "Itamonte",
      "Itanhandu",
      "Passa Quatro",
      "Varginha",
      "Pouso Alegre",
      "Sul de Minas",
      "Minas Gerais",
      "Brasil",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    sameAs: [
      "https://www.instagram.com/rodrigocorrea_adv/",
      "https://linktr.ee/rodrigocorrea_adv",
      "https://wa.me/5535992755472",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} ${playfairFont.variable} ${cinzelFont.variable} scroll-smooth dark`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=9" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=9" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=9" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=9" />
        <link rel="shortcut icon" href="/favicon.ico?v=9" />
        <meta name="theme-color" content="#08090c" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-[#08090c] font-sans text-[#f8f9fa] antialiased selection:bg-[#c59b27] selection:text-[#08090c]">
        {children}
      </body>
    </html>
  );
}
