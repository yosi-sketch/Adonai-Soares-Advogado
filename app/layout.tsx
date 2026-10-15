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
  themeColor: "#0d090b",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.leticiasaldanha.adv.br"),
  title:
    "Dra. Letícia Saldanha · Advocacia Trabalhista & Previdenciária em Cataguases - MG",
  description:
    "Advocacia especializada, humanizada e combativa em Direito Trabalhista e Previdenciário (INSS, BPC/LOAS, Aposentadorias, Auxílios e Rescisão Indireta). Atendimento presencial no Calçadão Shopping (Cataguases - MG) e online em todo o Brasil. Nota 4,9 ★ no Google com mais de 70 avaliações.",
  keywords: [
    "Letícia Saldanha Advocacia",
    "Dra Letícia Saldanha",
    "Advogada em Cataguases",
    "Advogada Trabalhista Cataguases MG",
    "Advocacia Previdenciária Cataguases",
    "Aposentadoria INSS Cataguases",
    "BPC LOAS Cataguases MG",
    "Auxílio Doença INSS Cataguases",
    "Rescisão Indireta do Trabalho",
    "Calçadão Shopping Cataguases",
    "Advogado Zona da Mata Mineira",
    "Consultoria Jurídica Trabalhista MG",
    "Direito Previdenciário Minas Gerais",
  ],
  authors: [{ name: "Dra. Letícia Saldanha" }],
  creator: "Letícia Saldanha Advocacia e Consultoria Especializada",
  publisher: "Letícia Saldanha Advocacia e Consultoria Especializada",
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
    url: "https://www.leticiasaldanha.adv.br",
    title:
      "Dra. Letícia Saldanha · Advocacia Trabalhista & Previdenciária em Cataguases - MG",
    description:
      "Atendimento humanizado, combativo e acolhedor para proteger seus direitos no trabalho e garantir seus benefícios no INSS. Nota 4,9 ★ no Google com mais de 70 avaliações.",
    siteName: "Letícia Saldanha Advocacia",
    images: [
      {
        url: "/logo-leticia-saldanha.png",
        width: 1024,
        height: 512,
        alt: "Letícia Saldanha Advocacia e Consultoria Especializada - Logotipo Oficial",
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
    name: "Letícia Saldanha Advocacia",
    alternateName: "Letícia Saldanha Advocacia e Consultoria Especializada",
    founder: [
      {
        "@type": "Person",
        name: "Dra. Letícia Saldanha",
        jobTitle: "Advogada Trabalhista e Previdenciarista",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Praça Rui Barbosa, 170 - Sl 108 - Centro (Calçadão Shopping)",
      addressLocality: "Cataguases",
      addressRegion: "MG",
      postalCode: "36770-034",
      addressCountry: "BR",
    },
    telephone: "+55-32-98499-7442",
    url: "https://www.leticiasaldanha.adv.br",
    image: "https://www.leticiasaldanha.adv.br/logo-leticia-saldanha.png",
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "70",
    },
    areaServed: [
      "Cataguases",
      "Leopoldina",
      "Muriaé",
      "Ubá",
      "Juiz de Fora",
      "Zona da Mata Mineira",
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
    sameAs: ["https://www.instagram.com/leticiasaldanha.adv/"],
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
      <body className="min-h-screen overflow-x-clip bg-[#0d090b] font-sans text-stone-100 antialiased selection:bg-[#d49389] selection:text-[#0d090b]">
        {children}
      </body>
    </html>
  );
}
