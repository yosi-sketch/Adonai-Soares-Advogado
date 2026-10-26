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
  themeColor: "#0b0a08",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.adonaisoares.adv.br"),
  title: "Adonai Soares — Advogado · AS Advocacia e Consultoria Jurídica · Corinto - MG",
  description:
    "⚖️ Dr. Adonai Soares de Moura (OAB/MG 187.717) — Advocacia e Consultoria Jurídica de Alta Excelência. Especialista em Direito Imobiliário, Regularização de Imóveis, Inventários e Sucessões, Direito de Família, Contratos e Defesa Técnica. Nota 4,8 ★ no Google (25 avaliações). Sede em Corinto - MG e atendimento em todo o Brasil.",
  keywords: [
    "Adonai Soares Advogado",
    "Dr Adonai Soares",
    "Dr Adonai Soares de Moura",
    "AS Advocacia e Consultoria Jurídica",
    "Advogado em Corinto MG",
    "Advocacia Corinto Minas Gerais",
    "Inventário e Sucessões Corinto",
    "Direito Imobiliário Corinto",
    "Regularização de Imóveis Corinto MG",
    "Usucapião Corinto MG",
    "Direito de Família Corinto",
    "Advogado Civil Corinto",
    "Consultoria Jurídica Corinto MG",
    "OAB MG 187717",
  ],
  authors: [{ name: "AS Advocacia e Consultoria Jurídica" }],
  creator: "AS Advocacia e Consultoria Jurídica",
  publisher: "AS Advocacia e Consultoria Jurídica",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=10", sizes: "any" },
      { url: "/favicon-32x32.png?v=10", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png?v=10", type: "image/png", sizes: "16x16" },
      { url: "/icon.png?v=10", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/favicon.ico?v=10",
    apple: [{ url: "/apple-icon.png?v=10", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.adonaisoares.adv.br",
    title: "Adonai Soares — Advogado · AS Advocacia e Consultoria Jurídica · Corinto - MG",
    description:
      "⚖️ Advocacia com rigor técnico, ética inabalável, agilidade resolutiva e atendimento humanizado. Nota 4,8 ★ no Google (25 avaliações). R. Dr. Antônio Alvarenga, 371 - Centro, Corinto - MG.",
    siteName: "AS Advocacia e Consultoria Jurídica",
    images: [
      {
        url: "/logo.png",
        width: 949,
        height: 303,
        alt: "Adonai Soares de Moura — Advocacia e Consultoria Jurídica",
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
    name: "AS Advocacia e Consultoria Jurídica",
    alternateName: "Adonai Soares — Advogado",
    legalName: "Adonai Soares de Moura — Advocacia e Consultoria Jurídica",
    telephone: "+55-38-99812-6389",
    email: "contato@adonaisoares.adv.br",
    url: "https://www.adonaisoares.adv.br",
    image: "https://www.adonaisoares.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Dr. Antônio Alvarenga, 371 - Centro",
      addressLocality: "Corinto",
      addressRegion: "MG",
      postalCode: "39200-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -18.3792,
      longitude: -44.4556,
    },
    priceRange: "$$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "25",
    },
    areaServed: [
      "Corinto",
      "Curvelo",
      "Diamantina",
      "Pirapora",
      "Montes Claros",
      "Sete Lagoas",
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
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    sameAs: [
      "https://www.instagram.com/adonaisoares.adv/",
      "https://wa.me/5538998126389",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} ${playfairFont.variable} ${cinzelFont.variable} scroll-smooth dark`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=10" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=10" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=10" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=10" />
        <link rel="shortcut icon" href="/favicon.ico?v=10" />
        <meta name="theme-color" content="#0b0a08" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-[#0b0a08] font-sans text-[#fbfaf8] antialiased selection:bg-[#c5a882] selection:text-[#0b0a08]">
        {children}
      </body>
    </html>
  );
}
