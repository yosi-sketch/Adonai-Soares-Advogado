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
  themeColor: "#faf8f5",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.palomafernandesadv.com.br"),
  title:
    "Dra. Paloma Fernandes — Advocacia Previdenciária INSS · Guanhães - MG",
  description:
    "⚖️ Dra. Paloma Fernandes — Advocacia Previdenciária especializada em INSS, Aposentadorias, Benefícios por Incapacidade, Planejamento Previdenciário e BPC/LOAS. Atendimento humanizado, combativo e estratégico. Sede na Av. Gov. Milton Campos, 2973 - Sl 204 - Centro, Guanhães - MG e online para todo o Brasil. Avaliação 5,0 ★ no Google (47 avaliações).",
  keywords: [
    "Paloma Fernandes Advocacia",
    "Dra Paloma Fernandes",
    "Advogada Previdenciária Guanhães",
    "Advogada INSS Guanhães MG",
    "Advogado Previdenciário Guanhães",
    "Aposentadoria Guanhães MG",
    "Direito Previdenciário Guanhães",
    "Planejamento Previdenciário Guanhães",
    "Auxílio Doença Guanhães",
    "Aposentadoria por Invalidez Guanhães",
    "BPC LOAS Guanhães",
    "Aposentadoria Rural Minas Gerais",
    "Paloma Fernandes Advogada Minas Gerais",
  ],
  authors: [{ name: "Dra. Paloma Fernandes — Advocacia Previdenciária INSS" }],
  creator: "Dra. Paloma Fernandes — Advocacia Previdenciária INSS",
  publisher: "Dra. Paloma Fernandes — Advocacia Previdenciária INSS",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "any" },
      { url: "/favicon-32x32.png?v=2", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png?v=2", type: "image/png", sizes: "16x16" },
      { url: "/icon.png?v=2", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: [{ url: "/apple-icon.png?v=2", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.palomafernandesadv.com.br",
    title:
      "Dra. Paloma Fernandes — Advocacia Previdenciária INSS · Guanhães - MG",
    description:
      "⚖️ Advocacia Previdenciária especializada no INSS com defesa combativa, estratégica e humanizada. Conquiste sua aposentadoria e seus direitos com avaliação máxima 5,0 ★ no Google (47 avaliações). Av. Gov. Milton Campos, 2973 - Sl 204 - Centro, Guanhães - MG.",
    siteName: "Dra. Paloma Fernandes — Advocacia Previdenciária INSS",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 341,
        alt: "Dra. Paloma Fernandes — Advocacia Previdenciária INSS",
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
    name: "Paloma Fernandes — Advocacia Previdenciária INSS",
    alternateName: "Dra. Paloma Fernandes Advocacia Previdenciária",
    legalName: "Paloma Fernandes — Advocacia Previdenciária INSS",
    telephone: "+55-33-99983-2397",
    email: "contato@palomafernandesadv.com.br",
    url: "https://www.palomafernandesadv.com.br",
    image: "https://www.palomafernandesadv.com.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Gov. Milton Campos, 2973 - Sl 204 - Centro",
      addressLocality: "Guanhães",
      addressRegion: "MG",
      postalCode: "39740-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -18.7753,
      longitude: -42.9325,
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "47",
    },
    areaServed: [
      "Guanhães",
      "Virginópolis",
      "Sabinópolis",
      "São João Evangelista",
      "Peçanha",
      "Dores de Guanhães",
      "Materlândia",
      "Governador Valadares",
      "Vale do Rio Doce",
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
        opens: "08:30",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/adv.palomafernandes",
      "https://wa.me/553399832397",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} ${playfairFont.variable} ${cinzelFont.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=2" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-[#faf8f5] font-sans text-[#11141a] antialiased selection:bg-[#f0e6d8] selection:text-[#0b0d11]">
        {children}
      </body>
    </html>
  );
}
