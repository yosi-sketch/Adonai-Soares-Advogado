import type { Metadata, Viewport } from "next";
import { Playfair_Display, Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

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
  themeColor: "#0b0a09",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.marianaesteves.adv.br"),
  title:
    "Dra. Mariana Esteves · Advogada Previdenciária INSS em Contagem - MG",
  description:
    "Advocacia Previdenciária especializada e humanizada em Contagem - MG. Aposentadorias (Idade, Tempo, Especial, Rural), BPC/LOAS, Auxílio-Doença, Pensão por Morte e Planejamento Previdenciário. Dra. Mariana Esteves de Carvalho (OAB/MG 172.375). Nota 4,9 ★ no Google.",
  keywords: [
    "Mariana Esteves Advogada",
    "Dra Mariana Esteves",
    "Mariana Esteves de Carvalho",
    "Advogada Previdenciária Contagem",
    "Advocacia Previdenciária Contagem MG",
    "Aposentadoria INSS Contagem",
    "BPC LOAS Contagem MG",
    "Auxílio Doença INSS Contagem",
    "Pensão por Morte Contagem",
    "Planejamento Previdenciário Contagem",
    "Advogado INSS Contagem e BH",
    "OAB MG 172375",
    "Direito Previdenciário Minas Gerais",
  ],
  authors: [{ name: "Dra. Mariana Esteves de Carvalho" }],
  creator: "Mariana Esteves Advocacia Previdenciária",
  publisher: "Mariana Esteves Advocacia Previdenciária",
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
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.marianaesteves.adv.br",
    title:
      "Dra. Mariana Esteves · Advogada Previdenciária INSS em Contagem - MG",
    description:
      "Atendimento humanizado, combativo e acolhedor para garantir seus benefícios no INSS. Aposentadoria, BPC/LOAS, Auxílio-Doença e Pensão por Morte. Nota 4,9 ★ no Google com mais de 50 avaliações.",
    siteName: "Mariana Esteves Advocacia Previdenciária",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 402,
        alt: "Mariana Esteves Advocacia Previdenciária - Logotipo Oficial",
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
    name: "Mariana Esteves Advocacia Previdenciária",
    alternateName: "Mariana Esteves – Advogada Previdenciária INSS (Aposentadoria, Auxílio-Doença, BPC LOAS, Pensão por Morte)",
    founder: [
      {
        "@type": "Person",
        name: "Dra. Mariana Esteves de Carvalho",
        jobTitle: "Advogada Previdenciarista (OAB/MG 172.375)",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Maria da Conceição Hilário, 263 - Jardim Vera Cruz",
      addressLocality: "Contagem",
      addressRegion: "MG",
      postalCode: "32265-300",
      addressCountry: "BR",
    },
    telephone: "+55-31-98389-2013",
    url: "https://www.marianaesteves.adv.br",
    image: "https://www.marianaesteves.adv.br/logo.png",
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "50",
    },
    areaServed: [
      "Contagem",
      "Belo Horizonte",
      "Betim",
      "Ibirité",
      "Ribeirão das Neves",
      "Região Metropolitana de Belo Horizonte",
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
    sameAs: ["https://www.instagram.com/marianaestevesinss/"],
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} ${playfairFont.variable} scroll-smooth`}
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
      <body className="min-h-screen overflow-x-clip bg-[#0b0a09] font-sans text-stone-100 antialiased selection:bg-[#d4af37] selection:text-[#0b0a09]">
        {children}
      </body>
    </html>
  );
}
