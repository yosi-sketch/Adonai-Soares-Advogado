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
  metadataBase: new URL("https://www.deboragurgel.adv.br"),
  title:
    "Dra. Débora Gurgel | Advocacia e Consultoria Jurídica · Itabirito - MG",
  description:
    "⚖️ Dra. Débora Gurgel — Advocacia e Consultoria Jurídica em Itabirito - MG. 18 anos de experiência em Direito Possessório, Regularização de Imóveis, Inventários e Partilha de Bens, Planejamento Previdenciário e Benefícios do INSS. Avaliação máxima 5,0 ★ com 13 avaliações no Google. 📍 Av. Queiroz Júnior, 211 - 2º andar, loja 6 - Centro, Itabirito - MG.",
  keywords: [
    "Débora Gurgel Advogada",
    "Dra Débora Gurgel",
    "Débora Gurgel Advocacia e Consultoria Jurídica",
    "Advogada em Itabirito MG",
    "Advogada Itabirito",
    "Advocacia Itabirito MG",
    "Direito Possessório Itabirito",
    "Usucapião em Itabirito",
    "Usucapião Extrajudicial Cartório",
    "Reintegração de Posse Itabirito",
    "Regularização de Imóveis Itabirito",
    "Inventário Judicial Itabirito",
    "Inventário Extrajudicial Cartório Itabirito",
    "Partilha de Bens Herança",
    "Advogada Previdenciária Itabirito",
    "Planejamento Previdenciário Itabirito MG",
    "Aposentadoria INSS Itabirito",
    "Concessão de Benefícios INSS",
    "BPC LOAS Itabirito",
    "Consultoria Jurídica Itabirito",
    "Advogada Cível Minas Gerais",
  ],
  authors: [{ name: "Dra. Débora Gurgel" }],
  creator: "Débora Gurgel — Advocacia e Consultoria Jurídica",
  publisher: "Débora Gurgel — Advocacia e Consultoria Jurídica",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "615x615" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.deboragurgel.adv.br",
    title:
      "Dra. Débora Gurgel | Advocacia e Consultoria Jurídica · Itabirito - MG",
    description:
      "⚖️ Quase duas décadas de excelência, ética e resolutividade em Itabirito - MG. Atuação em Direito Possessório, Inventários, Planejamento Previdenciário e Benefícios do INSS. Avaliação máxima 5,0 ★ no Google.",
    siteName: "Débora Gurgel Advocacia e Consultoria Jurídica",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 512,
        alt: "Débora Gurgel — Advocacia e Consultoria Jurídica",
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
    name: "Débora Gurgel — Advocacia e Consultoria Jurídica",
    alternateName: "Dra. Débora Gurgel",
    legalName: "Débora Gurgel Advocacia e Consultoria Jurídica",
    founder: [
      {
        "@type": "Person",
        name: "Dra. Débora Gurgel",
        jobTitle: "Advogada Cível, Direito Possessório, Inventários e Direito Previdenciário",
      },
    ],
    telephone: "+55-31-98888-5570",
    email: "contato@deboragurgel.adv.br",
    url: "https://www.deboragurgel.adv.br",
    image: "https://www.deboragurgel.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Queiroz Júnior, 211 - 2º andar, loja 6 - Centro",
      addressLocality: "Itabirito",
      addressRegion: "MG",
      postalCode: "35450-069",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -20.2522,
      longitude: -43.8058,
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "13",
    },
    areaServed: [
      "Itabirito",
      "Ouro Preto",
      "Mariana",
      "Belo Horizonte",
      "Nova Lima",
      "Congonhas",
      "Região Central de Minas Gerais",
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
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/deboragurgel.adv/",
      "https://wa.me/5531988885570",
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
      <body className="min-h-screen overflow-x-clip bg-[#faf8f5] font-sans text-[#0d121c] antialiased selection:bg-[#fdefca] selection:text-[#0d121c]">
        {children}
      </body>
    </html>
  );
}
