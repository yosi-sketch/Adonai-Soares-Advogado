import type { Metadata, Viewport } from "next";
import { Cinzel, Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cinzelFont = Cinzel({
  variable: "--font-cinzel",
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
  themeColor: "#07090e",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hudsondefreitas.adv.br"),
  title:
    "Dr. Hudson de Freitas · Advogado Criminalista em Ituiutaba - MG",
  description:
    "Defesa criminal estratégica, combativa e intransigente em Ituiutaba - MG e tribunais de todo o Brasil. Dr. Hudson de Freitas Advogado Criminalista. Plantão 24h para flagrantes, audiência de custódia, inquérito policial, Tribunal do Júri e habeas corpus perante TJMG, STJ e STF. Sede na Av. Minas Gerais, 15 - Camargo, Ituiutaba - MG. Avaliação 4,9 ★ no Google.",
  keywords: [
    "Dr Hudson de Freitas",
    "Hudson de Freitas Advogado",
    "Advogado Criminal Ituiutaba",
    "Advogado Criminalista Ituiutaba MG",
    "Advocacia Criminal Ituiutaba",
    "Plantão Criminal 24h Ituiutaba",
    "Audiência de Custódia Ituiutaba",
    "Prisão em Flagrante Ituiutaba",
    "Tribunal do Júri Ituiutaba",
    "Habeas Corpus TJMG STJ STF",
    "Advogado Penal Ituiutaba",
    "Defesa Criminal Ituiutaba MG",
    "Av Minas Gerais 15 Camargo Ituiutaba",
  ],
  authors: [
    { name: "Dr. Hudson de Freitas" },
  ],
  creator: "Dr. Hudson de Freitas Advogado Criminal",
  publisher: "Dr. Hudson de Freitas Advogado Criminal",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.hudsondefreitas.adv.br",
    title:
      "Dr. Hudson de Freitas · Advogado Criminalista em Ituiutaba - MG",
    description:
      "Defesa penal de alta complexidade, combate técnico e disponibilidade imediata. Atuação em flagrantes, inquéritos, Tribunal do Júri e Tribunais Superiores. Avaliação 4,9 ★ no Google com 10 avaliações.",
    siteName: "Dr. Hudson de Freitas Advogado Criminal",
    images: [
      {
        url: "/logo-hudson-de-freitas.png",
        width: 1024,
        height: 682,
        alt: "Dr. Hudson de Freitas Advocacia - Logotipo Oficial",
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
    name: "Dr. Hudson de Freitas Advogado Criminal",
    alternateName: "Hudson de Freitas Advocacia",
    founder: [
      {
        "@type": "Person",
        name: "Dr. Hudson de Freitas",
        jobTitle: "Advogado Criminalista",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Minas Gerais, 15 - Camargo",
      addressLocality: "Ituiutaba",
      addressRegion: "MG",
      postalCode: "38305-006",
      addressCountry: "BR",
    },
    telephone: "+55-34-99973-7556",
    url: "https://www.hudsondefreitas.adv.br",
    image: "https://www.hudsondefreitas.adv.br/logo-hudson-de-freitas.png",
    priceRange: "$$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "10",
    },
    areaServed: [
      "Ituiutaba",
      "Triângulo Mineiro",
      "Minas Gerais",
      "Uberlândia",
      "Capinópolis",
      "Santa Vitória",
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
      "https://www.instagram.com/hudsondefreitasfreitas/",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} ${cinzelFont.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-[#07090e] font-sans text-slate-100 antialiased selection:bg-brand-400 selection:text-brand-950">
        {children}
      </body>
    </html>
  );
}
