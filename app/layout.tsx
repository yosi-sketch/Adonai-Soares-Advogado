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
  metadataBase: new URL("https://www.manuelagoncalvesadv.com.br"),
  title:
    "Dra. Manuela Gonçalves — Advogada | Advocacia Especializada · Capinópolis - MG",
  description:
    "⚖️ Dra. Manuela Gonçalves — Advocacia Especializada (OAB/MG 167.889). Atendimento humanizado, ético e estratégico em Direito Previdenciário (INSS), Família & Sucessões (Inventários), Trabalhista e Cível. Atendimento presencial no Bairro Brasília, Capinópolis - MG e online para todo o Brasil. Avaliação 5,0 ★ no Google.",
  keywords: [
    "Manuela Gonçalves Advogada",
    "Dra Manuela Gonçalves",
    "Advogada Capinópolis",
    "Advogado em Capinópolis MG",
    "Advocacia Capinópolis MG",
    "OAB MG 167889",
    "Direito Previdenciário Capinópolis",
    "Aposentadoria INSS Capinópolis",
    "Inventário em Cartório Capinópolis",
    "Direito de Família Capinópolis",
    "Advogada Trabalhista Capinópolis",
    "Advogado Triângulo Mineiro",
    "Manuela Gonçalves Capinópolis Minas Gerais",
  ],
  authors: [{ name: "Dra. Manuela Gonçalves — Advogada" }],
  creator: "Dra. Manuela Gonçalves — Advogada",
  publisher: "Dra. Manuela Gonçalves — Advogada",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.manuelagoncalvesadv.com.br",
    title:
      "Dra. Manuela Gonçalves — Advogada | Advocacia Especializada · Capinópolis - MG",
    description:
      "⚖️ Advocacia especializada com defesa estratégica e humanizada. Avaliação máxima 5,0 ★ no Google. Rua 104, 1268 - sala 3 - Bairro Brasília, Capinópolis - MG.",
    siteName: "Manuela Gonçalves — Advogada",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 341,
        alt: "Manuela Gonçalves — Advogada",
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
    name: "Manuela Gonçalves — Advogada",
    alternateName: "Dra. Manuela Gonçalves Advogada",
    legalName: "Manuela Gonçalves — Advogada",
    telephone: "+55-34-99190-1962",
    email: "adv.manuelagoncalves@gmail.com",
    url: "https://www.manuelagoncalvesadv.com.br",
    image: "https://www.manuelagoncalvesadv.com.br/logo-manuela.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua 104, 1268 - sala 3 - Bairro Brasília",
      addressLocality: "Capinópolis",
      addressRegion: "MG",
      postalCode: "38360-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -18.6819,
      longitude: -49.5697,
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "10",
    },
    areaServed: [
      "Capinópolis",
      "Ituiutaba",
      "Canápolis",
      "Ipiaçu",
      "Cachoeira Dourada",
      "Triângulo Mineiro",
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
      "https://www.instagram.com/adv.manuelagoncalves/",
      "https://wa.me/5534991901962",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} ${playfairFont.variable} ${cinzelFont.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-[#faf8f5] font-sans text-[#0d1611] antialiased selection:bg-[#dbebe2] selection:text-[#0a140f]">
        {children}
      </body>
    </html>
  );
}
