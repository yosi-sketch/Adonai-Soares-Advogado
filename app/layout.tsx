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
  metadataBase: new URL("https://www.janainacarvalhoadv.com.br"),
  title:
    "Dra. Janaína Carvalho — Advogada | Especialista em Direito de Família · Dores do Indaiá - MG",
  description:
    "⚖️ Dra. Janaína Carvalho — Advogada Especialista em Direito de Família & Sucessões. Atendimento humanizado, ético e estratégico em Divórcio, Guarda, Pensão Alimentícia, Partilha de Bens e Inventários. Sede na Praça Pref. Mário Carneiro, nº 50 - 2º andar - Centro, Dores do Indaiá - MG e online para todo o Brasil. Avaliação 5,0 ★ no Google (61 avaliações).",
  keywords: [
    "Janaína Carvalho Advogada",
    "Dra Janaína Carvalho",
    "Advogada Dores do Indaiá",
    "Advogada Direito de Família Dores do Indaiá",
    "Advogado em Dores do Indaiá MG",
    "Direito de Família Dores do Indaiá",
    "Divórcio Dores do Indaiá",
    "Pensão Alimentícia Dores do Indaiá",
    "Guarda dos Filhos Dores do Indaiá",
    "Inventário em Cartório Dores do Indaiá",
    "Partilha de Bens Minas Gerais",
    "Janaína Carvalho Advogada Minas Gerais",
  ],
  authors: [{ name: "Dra. Janaína Carvalho — Advogada" }],
  creator: "Dra. Janaína Carvalho — Advogada",
  publisher: "Dra. Janaína Carvalho — Advogada",
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
    url: "https://www.janainacarvalhoadv.com.br",
    title:
      "Dra. Janaína Carvalho — Advogada | Especialista em Direito de Família · Dores do Indaiá - MG",
    description:
      "⚖️ Advocacia especializada em Direito de Família e Sucessões com defesa estratégica e humanizada. Avaliação máxima 5,0 ★ no Google (61 avaliações). Praça Pref. Mário Carneiro, nº 50 - 2º andar - sala 01 - Centro, Dores do Indaiá - MG.",
    siteName: "Dra. Janaína Carvalho — Advogada",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 341,
        alt: "Dra. Janaína Carvalho — Advogada",
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
    name: "Dra. Janaína Carvalho — Advogada",
    alternateName: "Janaína Carvalho Advogada Especialista em Direito de Família",
    legalName: "Dra. Janaína Carvalho — Advogada",
    telephone: "+55-37-99986-8988",
    email: "contato@janainacarvalhoadv.com.br",
    url: "https://www.janainacarvalhoadv.com.br",
    image: "https://www.janainacarvalhoadv.com.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Praça Pref. Mário Carneiro, nº 50 - 2º andar - sala 01 - Centro",
      addressLocality: "Dores do Indaiá",
      addressRegion: "MG",
      postalCode: "35610-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -19.4611,
      longitude: -45.6022,
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "61",
    },
    areaServed: [
      "Dores do Indaiá",
      "Bom Despacho",
      "Abaeté",
      "Quartel Geral",
      "Luz",
      "Martinho Campos",
      "Serra da Saudade",
      "Divinópolis",
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
        opens: "08:30",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/janainacarvalho_advogada/",
      "https://wa.me/5537999868988",
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
      <body className="min-h-screen overflow-x-clip bg-[#faf8f5] font-sans text-[#12151b] antialiased selection:bg-[#f5ecd9] selection:text-[#0e1116]">
        {children}
      </body>
    </html>
  );
}
