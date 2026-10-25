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
  metadataBase: new URL("https://www.carlagisele.adv.br"),
  title: "Carla Gisele — Advogada · Espinosa - MG & Belo Horizonte",
  description:
    "⚖️ Dra. Carla Gisele — Advogada graduada pela Universidade Federal de Minas Gerais (UFMG). Atuação jurídica com extrema confiança, competência e ética em Espinosa, Belo Horizonte e atendimento online em todo o Brasil. Nota máxima 5,0 ★ no Google (31 avaliações).",
  keywords: [
    "Carla Gisele Advogada",
    "Dra Carla Gisele",
    "Advogada Espinosa MG",
    "Advogada UFMG",
    "Advogado Espinosa Minas Gerais",
    "Serviços Jurídicos Espinosa",
    "Direito de Família Espinosa",
    "Inventário Espinosa MG",
    "Aposentadoria Espinosa MG",
    "Advogada Previdenciária Espinosa",
    "Advogada Belo Horizonte",
    "Carla Gisele Advocacia",
  ],
  authors: [{ name: "Carla Gisele — Advogada" }],
  creator: "Carla Gisele — Advogada",
  publisher: "Carla Gisele — Advogada",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=5", sizes: "any" },
      { url: "/favicon-32x32.png?v=5", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png?v=5", type: "image/png", sizes: "16x16" },
      { url: "/icon.png?v=5", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/favicon.ico?v=5",
    apple: [{ url: "/apple-icon.png?v=5", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.carlagisele.adv.br",
    title: "Carla Gisele — Advogada · Espinosa - MG & Belo Horizonte",
    description:
      "⚖️ Advocacia pautada na extrema competência, ética e dedicação. Graduada pela UFMG com nota máxima 5,0 ★ no Google (31 avaliações). R. Padre Martin Kirscht - Espinosa, MG.",
    siteName: "Carla Gisele — Advogada",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 341,
        alt: "Carla Gisele — Advogada",
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
    name: "Carla Gisele — Advogada",
    alternateName: "Dra. Carla Gisele Advocacia",
    legalName: "Carla Gisele — Advogada",
    telephone: "+55-38-99124-2534",
    email: "contato@carlagisele.adv.br",
    url: "https://www.carlagisele.adv.br",
    image: "https://www.carlagisele.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Padre Martin Kirscht",
      addressLocality: "Espinosa",
      addressRegion: "MG",
      postalCode: "39510-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -14.9264,
      longitude: -42.8197,
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "31",
    },
    areaServed: [
      "Espinosa",
      "Monte Azul",
      "Mato Verde",
      "Porteirinha",
      "Janaúba",
      "Montes Claros",
      "Belo Horizonte",
      "Norte de Minas",
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
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/carla_giseele/",
      "https://wa.me/5538991242534",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} ${playfairFont.variable} ${cinzelFont.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=5" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=5" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=5" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-[#faf8f5] font-sans text-[#141210] antialiased selection:bg-[#f3e5c8] selection:text-[#0e0c0a]">
        {children}
      </body>
    </html>
  );
}
