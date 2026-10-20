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
  themeColor: "#0b0907",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gabriellapimenta.adv.br"),
  title:
    "Gabriella Pimenta | Advocacia e Consultoria Jurídica em Mariana - MG",
  description:
    "⚖️ Gabriella Pimenta Advocacia e Consultoria Jurídica (Dra. Gabriella Soares Pimenta, OAB/MG 221.270). Acolhendo histórias, defendendo direitos, construindo soluções jurídicas. Nota máxima 5,0 ★ com 29 avaliações no Google. 📍 R. Zizinha Camelo, Centro, Mariana - MG e atendimento on-line em todo o Brasil.",
  keywords: [
    "Gabriella Pimenta Advocacia",
    "Gabriella Pimenta Advogada",
    "Dra Gabriella Pimenta",
    "Gabriella Soares Pimenta",
    "Advogada em Mariana",
    "Advogada em Mariana MG",
    "Advogada Ouro Preto MG",
    "Advogada Itabirito MG",
    "Advogada Região dos Inconfidentes",
    "Escritório de Advocacia Mariana",
    "Advogado Mariana Minas Gerais",
    "OAB MG 221270",
    "Direito do Trabalho Mariana",
    "Rescisão Indireta Mariana",
    "Aposentadoria e INSS Mariana",
    "Divórcio e Pensão Alimentícia Mariana",
    "Inventário e Sucessões Mariana",
    "Defesa do Consumidor e Danos Morais",
    "Advocacia Humanizada e Resolutiva",
    "Advogada Online Brasil",
  ],
  authors: [{ name: "Dra. Gabriella Soares Pimenta" }],
  creator: "Gabriella Pimenta Advocacia e Consultoria",
  publisher: "Gabriella Pimenta Advocacia e Consultoria",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "464x464" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.gabriellapimenta.adv.br",
    title:
      "Gabriella Pimenta Advocacia | Dra. Gabriella Soares Pimenta — Mariana - MG",
    description:
      "⚖️ Acolhendo histórias, defendendo direitos, construindo soluções jurídicas. Atendimento presencial em Mariana - MG e digital em todo o Brasil.",
    siteName: "Gabriella Pimenta Advocacia e Consultoria",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 682,
        alt: "Gabriella Pimenta Advocacia e Consultoria",
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
    name: "Gabriella Pimenta Advocacia e Consultoria Jurídica",
    alternateName: "Dra. Gabriella Pimenta Advogada",
    legalName: "Gabriella Pimenta Sociedade Individual de Advocacia",
    taxID: "63.196.916/0001-89",
    founder: [
      {
        "@type": "Person",
        name: "Dra. Gabriella Soares Pimenta",
        jobTitle: "Advogada e Consultora Jurídica",
        identifier: "OAB/MG 221.270",
      },
    ],
    telephone: "+55-31-99981-0534",
    email: "gabriellaspimentaadv@gmail.com",
    url: "https://www.gabriellapimenta.adv.br",
    image: "https://www.gabriellapimenta.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Zizinha Camelo - Centro",
      addressLocality: "Mariana",
      addressRegion: "MG",
      postalCode: "35420-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -20.3778,
      longitude: -43.4164,
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "29",
    },
    areaServed: [
      "Mariana",
      "Ouro Preto",
      "Itabirito",
      "Região dos Inconfidentes",
      "Belo Horizonte",
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
      "https://www.instagram.com/gabriellaspimentaadv/",
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
      <body className="min-h-screen overflow-x-clip bg-[#0b0907] font-sans text-stone-100 antialiased selection:bg-[#b88a3e] selection:text-[#0b0907]">
        {children}
      </body>
    </html>
  );
}
