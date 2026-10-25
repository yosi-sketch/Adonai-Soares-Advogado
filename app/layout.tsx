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
  themeColor: "#faf7f2",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.patriciafreyer.adv.br"),
  title: "Patrícia Freyer Advocacia · Advogada Trabalhista · Peçanha - MG & Atendimento Online",
  description:
    "⚖️ Dra. Patrícia Freyer — Advogada Trabalhista. Problemas no trabalho? Eu te ajudo a entender. Conhecer seus direitos faz diferença no seu bolso. Atendimento presencial em Peçanha - MG e online para todo o Brasil. Nota máxima 5,0 ★ no Google (31 avaliações).",
  keywords: [
    "Patrícia Freyer Advocacia",
    "Dra Patrícia Freyer",
    "Advogada Trabalhista Peçanha",
    "Advogada Trabalhista MG",
    "Direito do Trabalho Peçanha MG",
    "Rescisão Trabalhista Peçanha",
    "Horas Extras Peçanha",
    "Acidente de Trabalho Advogada",
    "Rescisão Indireta Peçanha",
    "Advogada Trabalhista Online",
    "Patrícia Freyer Advogada",
  ],
  authors: [{ name: "Patrícia Freyer Advocacia" }],
  creator: "Patrícia Freyer Advocacia",
  publisher: "Patrícia Freyer Advocacia",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=8", sizes: "any" },
      { url: "/favicon-32x32.png?v=8", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png?v=8", type: "image/png", sizes: "16x16" },
      { url: "/icon.png?v=8", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/favicon.ico?v=8",
    apple: [{ url: "/apple-icon.png?v=8", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.patriciafreyer.adv.br",
    title: "Patrícia Freyer Advocacia · Advogada Trabalhista · Peçanha - MG",
    description:
      "⚖️ Advocacia Trabalhista com dedicação, ética, clareza e atendimento humanizado. Nota máxima 5,0 ★ no Google (31 avaliações). Av. dos Bragas, 146 - Centro, Peçanha - MG e atendimento online para todo o Brasil.",
    siteName: "Patrícia Freyer Advocacia",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 341,
        alt: "Patrícia Freyer Advocacia",
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
    name: "Patrícia Freyer Advocacia",
    alternateName: "Dra. Patrícia Freyer — Advogada Trabalhista",
    legalName: "Patrícia Freyer Advocacia",
    telephone: "+55-33-99815-0345",
    email: "contato@patriciafreyer.adv.br",
    url: "https://www.patriciafreyer.adv.br",
    image: "https://www.patriciafreyer.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. dos Bragas, 146 - Centro",
      addressLocality: "Peçanha",
      addressRegion: "MG",
      postalCode: "39700-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -18.5492,
      longitude: -42.5583,
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "31",
    },
    areaServed: [
      "Peçanha",
      "Governador Valadares",
      "Guanhães",
      "Virginópolis",
      "São João Evangelista",
      "Vale do Rio Doce",
      "Leste de Minas",
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
      "https://www.instagram.com/adv.patriciafreyer/",
      "https://wa.me/553398150345",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} ${playfairFont.variable} ${cinzelFont.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=8" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=8" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=8" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=8" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-[#faf7f2] font-sans text-[#140f0c] antialiased selection:bg-[#f7e6d2] selection:text-[#110d0a]">
        {children}
      </body>
    </html>
  );
}
