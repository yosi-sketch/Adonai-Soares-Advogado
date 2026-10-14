import type { Metadata, Viewport } from "next";
import { Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const displayFont = Cinzel({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0b0e14",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rodriguesenunes.adv.br"),
  title:
    "RODRIGUES & NUNES ADVOGADOS ASSOCIADOS | Patos de Minas - MG | Atuação Nacional",
  description:
    "Assessoria jurídica de excelência com atendimento acolhedor, clareza e dedicação. Dr. Renato Nunes e Dra. Graciela Rodrigues. Atuação destacada em Direito Previdenciário (Auxílio-Acidente, Aposentadorias e INSS), Trabalhista, Família & Sucessões e Cível. Sede na Av. Paracatu, 880 - Centro, Patos de Minas - MG. Avaliação 4,9 ★ no Google com 98 avaliações.",
  keywords: [
    "Rodrigues & Nunes Advogados Associados",
    "Rodrigues e Nunes Advocacia",
    "Dr. Renato Nunes Advogado",
    "Dra. Graciela Rodrigues Advogada",
    "Advogado Patos de Minas",
    "Advocacia Patos de Minas MG",
    "Advogado em Patos de Minas",
    "Direito Previdenciário Patos de Minas",
    "Auxílio-Acidente Patos de Minas",
    "Advogado INSS Patos de Minas",
    "Advogado Trabalhista Patos de Minas",
    "Direito de Família Patos de Minas",
    "Mediação de Conflitos Patos de Minas",
    "Av. Paracatu 880 Patos de Minas",
    "Escritório de Advocacia Alto Paranaíba",
    "Escritório de Advocacia Minas Gerais",
  ],
  authors: [
    { name: "Dr. Renato Nunes" },
    { name: "Dra. Graciela Rodrigues" },
    { name: "Rodrigues & Nunes Advogados Associados" },
  ],
  creator: "Rodrigues & Nunes Advogados Associados",
  publisher: "Rodrigues & Nunes Advogados Associados",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.rodriguesenunes.adv.br",
    title:
      "RODRIGUES & NUNES ADVOGADOS ASSOCIADOS | Segurança Jurídica & Clareza",
    description:
      "Excelência jurídica em Patos de Minas - MG com atendimento presencial e atuação nacional. Dr. Renato Nunes & Dra. Graciela Rodrigues. Avaliação 4,9 ★ no Google (98 avaliações).",
    siteName: "Rodrigues & Nunes Advogados Associados",
    images: [
      {
        url: "/Logotipo Elegante Rodrigues & Nunes.png",
        width: 2171,
        height: 724,
        alt: "Rodrigues & Nunes Advogados Associados — Patos de Minas - MG",
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
    name: "Rodrigues & Nunes Advogados Associados",
    alternateName:
      "Rodrigues & Nunes Advocacia | Dr. Renato Nunes & Dra. Graciela Rodrigues",
    founder: [
      {
        "@type": "Person",
        name: "Dr. Renato Nunes",
        jobTitle:
          "Advogado Especialista em Direito Previdenciário, Trabalhista e Cível",
      },
      {
        "@type": "Person",
        name: "Dra. Graciela Rodrigues",
        jobTitle:
          "Advogada Especialista em Direito de Família, Sucessões e Mediação de Conflitos",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Paracatu, 880 - Centro",
      addressLocality: "Patos de Minas",
      addressRegion: "MG",
      postalCode: "38700-096",
      addressCountry: "BR",
    },
    telephone: "+55-34-3821-0380",
    url: "https://www.rodriguesenunes.adv.br",
    image: "https://www.rodriguesenunes.adv.br/logo.png",
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "98",
    },
    areaServed: [
      "Patos de Minas",
      "Alto Paranaíba",
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
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-pearl font-sans text-ink antialiased selection:bg-brand-800 selection:text-white">
        {children}
      </body>
    </html>
  );
}
