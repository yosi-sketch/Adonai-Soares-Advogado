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
  themeColor: "#0c0a08",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cliciabento.adv.br"),
  title:
    "Clícia Bento | Advogada em Ervália — Advocacia e Consultoria Jurídica",
  description:
    "⚖️ Advocacia e Consultoria Jurídica com a Dra. Clícia Bento (OAB/MG 246.137). Nota máxima 5,0 ★ com 41 avaliações no Google. 📍 Rua Sagrado Coração de Jesus, nº 20, Centro, Ervália - MG e atendimento on-line em todo o Brasil.",
  keywords: [
    "Clícia Bento Advocacia",
    "Clícia Bento Advogada",
    "Dra Clícia Bento",
    "Advogada em Ervália",
    "Advogada em Ervália MG",
    "Advogada Viçosa MG",
    "Advogada Ubá MG",
    "Advogada Muriaé MG",
    "Advogada Zona da Mata MG",
    "Escritório de Advocacia Ervália",
    "Advogado Ervália Minas Gerais",
    "OAB MG 246137",
    "Direito do Trabalho Ervália",
    "Rescisão Indireta Ervália",
    "Aposentadoria e INSS Ervália",
    "Divórcio e Pensão Alimentícia Ervália",
    "Inventário e Sucessões Ervália",
    "Defesa do Consumidor e Danos Morais",
    "Advocacia Humanizada e Resolutiva",
    "Advogada Online Brasil",
  ],
  authors: [{ name: "Dra. Clícia Bento" }],
  creator: "Clícia Bento Advocacia",
  publisher: "Clícia Bento Advocacia",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
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
    url: "https://www.cliciabento.adv.br",
    title:
      "Clícia Bento Advocacia | Dra. Clícia Bento — Advocacia e Consultoria Jurídica",
    description:
      "⚖️ Advocacia estratégica, humanizada e combativa. Seus direitos protegidos com rigor técnico e acolhimento. Sede em Ervália - MG e atendimento digital em todo o Brasil.",
    siteName: "Clícia Bento Advocacia",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 512,
        alt: "Clícia Bento Advocacia",
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
    name: "Clícia Bento Advocacia",
    alternateName: "Dra. Clícia Bento Advogada",
    founder: [
      {
        "@type": "Person",
        name: "Dra. Clícia Bento",
        jobTitle: "Advogada e Consultora Jurídica",
        identifier: "OAB/MG 246.137",
      },
    ],
    telephone: "+55-32-98483-8287",
    url: "https://www.cliciabento.adv.br",
    image: "https://www.cliciabento.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Sagrado Coração de Jesus, 20 - Centro",
      addressLocality: "Ervália",
      addressRegion: "MG",
      postalCode: "36555-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -20.8406,
      longitude: -42.8139,
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "41",
    },
    areaServed: [
      "Ervália",
      "Viçosa",
      "Ubá",
      "Muriaé",
      "Juiz de Fora",
      "Zona da Mata",
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
      "https://www.instagram.com/cliciabento.adv/",
      "https://wa.me/5532984838287",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} ${playfairFont.variable} ${cinzelFont.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-[#0c0a08] font-sans text-stone-100 antialiased selection:bg-[#c99b4f] selection:text-[#0c0a08]">
        {children}
      </body>
    </html>
  );
}
