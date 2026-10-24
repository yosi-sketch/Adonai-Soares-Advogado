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
  themeColor: "#f8fafc",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.airesebueno.adv.br"),
  title:
    "Aires & Bueno Sociedade de Advogados | Advocacia Especializada · Nova Era - MG",
  description:
    "⚖️ Aires & Bueno Sociedade de Advogados — Advocacia especializada com defesa estratégica e humanizada. Atendimento presencial no Centro de Nova Era - MG e online para todo o Brasil. Avaliação 5,0 ★ com 11 avaliações no Google. 📍 R. João Pinheiro, N° 120 - Salas 401/402 - Centro, Nova Era - MG.",
  keywords: [
    "Aires & Bueno Sociedade de Advogados",
    "Aires e Bueno Advogados",
    "Advogado Nova Era MG",
    "Advocacia Nova Era MG",
    "Isadora Aires Advogada",
    "Thales Bueno Advogado",
    "Advogado Vale do Aço",
    "Direito Previdenciário Nova Era",
    "Aposentadoria INSS Nova Era",
    "Advogado Trabalhista Nova Era",
    "Direito do Trabalho Nova Era",
    "Advogado Cível Nova Era MG",
    "Inventário e Sucessões Nova Era",
    "Aires e Bueno Nova Era Minas Gerais",
  ],
  authors: [{ name: "Aires & Bueno Sociedade de Advogados" }],
  creator: "Aires & Bueno Sociedade de Advogados",
  publisher: "Aires & Bueno Sociedade de Advogados",
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
    url: "https://www.airesebueno.adv.br",
    title:
      "Aires & Bueno Sociedade de Advogados | Advocacia Especializada · Nova Era - MG",
    description:
      "⚖️ Advocacia especializada com defesa estratégica e humanizada. Avaliação máxima 5,0 ★ no Google. R. João Pinheiro, 120 - Salas 401 e 402 - Centro, Nova Era - MG.",
    siteName: "Aires & Bueno Sociedade de Advogados",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 409,
        alt: "Aires & Bueno Sociedade de Advogados",
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
    name: "Aires & Bueno Sociedade de Advogados",
    alternateName: "Aires e Bueno Sociedade de Advogados",
    legalName: "Aires e Bueno Sociedade de Advogados",
    telephone: "+55-31-3961-2840",
    email: "contato@airesebueno.adv.br",
    url: "https://www.airesebueno.adv.br",
    image: "https://www.airesebueno.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. João Pinheiro, N° 120 - Salas 401 - 402 - Centro",
      addressLocality: "Nova Era",
      addressRegion: "MG",
      postalCode: "35920-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -19.7578,
      longitude: -43.0367,
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "11",
    },
    areaServed: [
      "Nova Era",
      "João Monlevade",
      "Itabira",
      "Vale do Aço",
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
      "https://www.instagram.com/airesebueno/",
      "https://wa.me/553139612840",
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
      <body className="min-h-screen overflow-x-clip bg-[#f8fafc] font-sans text-[#0e1720] antialiased selection:bg-[#d8e5f0] selection:text-[#0e1b27]">
        {children}
      </body>
    </html>
  );
}
