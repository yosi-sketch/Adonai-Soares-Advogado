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
  themeColor: "#faf8f6",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kowalskiadvocacia.com.br"),
  title:
    "Kowalski Advocacia | Previdenciário · Trabalhista · Cível · Unaí - MG",
  description:
    "⚖️ Kowalski Advocacia — Advocacia especializada em Direito Previdenciário (Aposentadorias, BPC/LOAS e Benefícios do INSS), Direito Trabalhista e Direito Cível. Avaliação 4,7 ★ com 13 avaliações no Google. 📍 R. Canabrava, 192A - Centro, Unaí - MG. Atendimento em Unaí, Arinos e em todo o Brasil.",
  keywords: [
    "Kowalski Advocacia",
    "Advogado em Unaí MG",
    "Advogado Unaí",
    "Advocacia Unaí MG",
    "Kowalski Advocacia Unaí",
    "Advocacia Arinos MG",
    "Advogado Arinos",
    "Direito Previdenciário Unaí",
    "Aposentadoria INSS Unaí",
    "BPC LOAS Unaí MG",
    "Advogado Trabalhista Unaí",
    "Direitos Trabalhistas Unaí",
    "Rescisão Indireta Horas Extras Unaí",
    "Acidente de Trabalho Indenização",
    "Advogado Cível Unaí MG",
    "Inventário e Partilha Unaí",
    "Contratos e Indenizações Unaí",
    "Kowalski Advocacia Minas Gerais",
  ],
  authors: [{ name: "Kowalski Advocacia" }],
  creator: "Kowalski Advocacia",
  publisher: "Kowalski Advocacia",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.kowalskiadvocacia.com.br",
    title:
      "Kowalski Advocacia | Previdenciário · Trabalhista · Cível · Unaí - MG",
    description:
      "⚖️ Advocacia combativa, ética e resolutiva em Direito Previdenciário, Trabalhista e Cível. Avaliação 4,7 ★ no Google. R. Canabrava, 192A - Centro, Unaí - MG.",
    siteName: "Kowalski Advocacia",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 682,
        alt: "Kowalski Advocacia",
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
    name: "Kowalski Advocacia",
    alternateName: "Advocacia Kowalski",
    legalName: "Kowalski Advocacia",
    telephone: "+55-38-99961-6355",
    email: "contato@kowalskiadvocacia.com.br",
    url: "https://www.kowalskiadvocacia.com.br",
    image: "https://www.kowalskiadvocacia.com.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Canabrava, 192A - Centro",
      addressLocality: "Unaí",
      addressRegion: "MG",
      postalCode: "38610-031",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -16.3575,
      longitude: -46.9038,
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "13",
    },
    areaServed: [
      "Unaí",
      "Arinos",
      "Noroeste de Minas Gerais",
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
      "https://www.instagram.com/advocacia.kowalski/",
      "https://wa.me/5538999616355",
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
      <body className="min-h-screen overflow-x-clip bg-[#faf8f6] font-sans text-[#16080a] antialiased selection:bg-[#fce8e9] selection:text-[#380509]">
        {children}
      </body>
    </html>
  );
}
