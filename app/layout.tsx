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
  themeColor: "#090706",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tomazhenrique.adv.br"),
  title:
    "Tomaz Henrique — Advogado Especializado | Trabalhista & Previdenciário em Itaúna - MG",
  description:
    "Advocacia especializada em Direito do Trabalho e Direito Previdenciário (INSS) com o Dr. Tomaz Henrique. Atendimento atencioso, combate técnico incisivo e foco em resultados em Itaúna e região. Nota máxima 5,0 ★ no Google.",
  keywords: [
    "Tomaz Henrique Advogado",
    "Tomaz Henrique Advogado Especializado",
    "Advogado em Itaúna",
    "Advogado Trabalhista em Itaúna",
    "Advogado Previdenciário Itaúna",
    "Escritório de Advocacia Itaúna MG",
    "Dr Tomaz Henrique",
    "Aposentadoria INSS Itaúna",
    "Auxílio Doença INSS Itaúna",
    "BPC LOAS Itaúna",
    "Cálculo Trabalhista e Rescisão",
    "Horas Extras e Direitos do Trabalhador",
    "Pensão por Morte Itaúna",
    "Advocacia Itaúna Minas Gerais",
  ],
  authors: [{ name: "Dr. Tomaz Henrique" }],
  creator: "Tomaz Henrique — Escritório de Advocacia",
  publisher: "Tomaz Henrique — Escritório de Advocacia",
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
    url: "https://www.tomazhenrique.adv.br",
    title:
      "Tomaz Henrique — Advogado Especializado | Trabalhista & Previdenciário em Itaúna - MG",
    description:
      "Atendimento jurídico de excelência, humanizado e focado em resultados reais. Referência em Direito do Trabalho e Previdenciário em Itaúna e região. Nota 5,0 ★ no Google.",
    siteName: "Tomaz Henrique — Escritório de Advocacia",
    images: [
      {
        url: "/logo-seal.png",
        width: 660,
        height: 652,
        alt: "Tomaz Henrique — Escritório de Advocacia",
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
    name: "Tomaz Henrique — Escritório de Advocacia",
    alternateName: "Tomaz Henrique Advogado Especializado",
    founder: [
      {
        "@type": "Person",
        name: "Dr. Tomaz Henrique",
        jobTitle: "Advogado Especialista em Direito Trabalhista e Previdenciário",
      },
    ],
    telephone: "+55-37-99841-2455",
    url: "https://www.tomazhenrique.adv.br",
    image: "https://www.tomazhenrique.adv.br/logo-seal.png",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Rua Godofredo Gonçalves, 159, Centro (Próximo à Clinaus)",
      addressLocality: "Itaúna",
      addressRegion: "MG",
      postalCode: "35680-047",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -20.0754,
      longitude: -44.5764,
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "37",
    },
    areaServed: [
      "Itaúna",
      "Pará de Minas",
      "Divinópolis",
      "Mateus Leme",
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
      "https://www.instagram.com/advogado.tomaz/",
      "https://wa.me/5537998412455",
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
      <body className="min-h-screen overflow-x-clip bg-[#090706] font-sans text-stone-100 antialiased selection:bg-[#c97f48] selection:text-[#090706]">
        {children}
      </body>
    </html>
  );
}
