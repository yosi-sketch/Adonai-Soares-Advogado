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
  themeColor: "#fbf9f5",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.suellemrodrigues.adv.br"),
  title:
    "Suellem Rodrigues | Advogada Criminalista & Execuções Penais em São Sebastião do Paraíso - MG · OAB/MG 174.904",
  description:
    "⚖️ Suellem Rodrigues | Advogada (Dra. Suellem Rodrigues, OAB/MG 174.904). Especialista em Execuções Penais e Defesa Criminal. Avaliação máxima de 5,0 ★ com 20 avaliações no Google. 📍 R. José Albino, 535 - Sl 1 - Centro, São Sebastião do Paraíso - MG e atuação no SEEU em todo o Brasil.",
  keywords: [
    "Suellem Rodrigues Advogada",
    "Suellem Rodrigues Advocacia",
    "Advogada Criminalista São Sebastião do Paraíso",
    "Advogada em São Sebastião do Paraíso MG",
    "Especialista em Execuções Penais",
    "Execução Penal Minas Gerais",
    "Progressão de Regime Prisional",
    "Livramento Condicional",
    "Remição de Pena",
    "Cálculo de Pena SEEU",
    "Habeas Corpus TJMG STJ STF",
    "Audiência de Custódia São Sebastião do Paraíso",
    "Prisão Domiciliar",
    "Indulto e Comutação",
    "Transferência de Presídio",
    "OAB MG 174904",
    "Advocacia Criminal Sul de Minas",
    "Advogada Criminalista Online Brasil",
  ],
  authors: [{ name: "Dra. Suellem Rodrigues" }],
  creator: "Suellem Rodrigues Advocacia",
  publisher: "Suellem Rodrigues Advocacia",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.suellemrodrigues.adv.br",
    title:
      "Suellem Rodrigues | Advogada · São Sebastião do Paraíso - MG",
    description:
      "⚖️ Defesa técnica incisiva e humanizada da liberdade. Especialista em Execuções Penais, Progressão de Regime, Livramento Condicional e Audiência de Custódia. Avaliada com 5,0 ★ no Google.",
    siteName: "Suellem Rodrigues Advocacia",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 512,
        alt: "Suellem Rodrigues Advocacia | OAB/MG 174.904",
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
    name: "Suellem Rodrigues | Advogada",
    alternateName: "Dra. Suellem Rodrigues — Especialista em Execuções Penais",
    legalName: "Suellem Rodrigues Advocacia",
    founder: [
      {
        "@type": "Person",
        name: "Dra. Suellem Rodrigues",
        jobTitle: "Advogada Criminalista e Especialista em Execuções Penais",
        identifier: "OAB/MG 174.904",
      },
    ],
    telephone: "+55-31-99981-0534",
    email: "contato@suellemrodrigues.adv.br",
    url: "https://www.suellemrodrigues.adv.br",
    image: "https://www.suellemrodrigues.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. José Albino, 535 - Sl 1 - Centro",
      addressLocality: "São Sebastião do Paraíso",
      addressRegion: "MG",
      postalCode: "37950-060",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -20.9167,
      longitude: -46.9833,
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "20",
    },
    areaServed: [
      "São Sebastião do Paraíso",
      "Passos",
      "Guaxupé",
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
        ],
        opens: "08:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
        description: "Plantão criminal para urgências, prisões e audiências de custódia",
      },
    ],
    sameAs: [
      "https://www.instagram.com/suellemrodriguesadv/",
      "https://wa.me/5531999810534",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} ${playfairFont.variable} ${cinzelFont.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-[#fbf9f5] font-sans text-[#14110e] antialiased selection:bg-[#f7e5a9] selection:text-[#14110e]">
        {children}
      </body>
    </html>
  );
}
