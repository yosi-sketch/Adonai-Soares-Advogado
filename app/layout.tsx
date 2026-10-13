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
  themeColor: "#0a0d12",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ornelaseferreira.adv.br"),
  title:
    "ORNELAS E FERREIRA - ADVOGADOS | Sete Lagoas - MG | Atuação Nacional",
  description:
    "Protegemos direitos e reduzimos riscos com rigor técnico, rapidez e atendimento humanizado. Dra. Izabella Ornelas e Dr. Breno Nilson Ferreira. Atuação nacional em Direito Previdenciário (INSS), Trabalhista, Criminal (Plantão 24h), Família e Direito Público. Sede no Edifício Márcio Paulino - Sala 8, Sete Lagoas - MG. Nota 4,9 ★ no Google com mais de 129 avaliações.",
  keywords: [
    "Ornelas e Ferreira Advogados",
    "Ornelas & Ferreira Advocacia",
    "Dra. Izabella Ornelas",
    "Dr. Breno Nilson Ferreira",
    "Advogado Sete Lagoas",
    "Advocacia Sete Lagoas MG",
    "Advogado em Sete Lagoas",
    "Direito Previdenciário Sete Lagoas",
    "Advogado INSS Sete Lagoas",
    "Advogado Trabalhista Sete Lagoas",
    "Advogado Criminal Sete Lagoas",
    "Plantão Criminal 24 Horas Sete Lagoas",
    "Direito de Família Sete Lagoas",
    "Direito Público MG",
    "Edifício Márcio Paulino Sete Lagoas",
    "Escritório de Advocacia Minas Gerais",
  ],
  authors: [
    { name: "Dra. Izabella Ornelas" },
    { name: "Dr. Breno Nilson Ferreira" },
    { name: "Ornelas e Ferreira Advogados" },
  ],
  creator: "Ornelas e Ferreira Advogados",
  publisher: "Ornelas e Ferreira Advogados",
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
    url: "https://www.ornelaseferreira.adv.br",
    title:
      "ORNELAS E FERREIRA - ADVOGADOS | Protegemos Direitos e Reduzimos Riscos",
    description:
      "Excelência jurídica em Sete Lagoas - MG com atuação nacional. Direito Previdenciário, Trabalhista, Criminal (Plantão 24h), Família e Direito Público. Avaliação 4,9 ★ no Google (129 avaliações).",
    siteName: "Ornelas e Ferreira Advogados",
    images: [
      {
        url: "/logo.png",
        width: 2172,
        height: 724,
        alt: "Ornelas e Ferreira Advogados — Sete Lagoas - MG",
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
    name: "Ornelas e Ferreira Advogados",
    alternateName: "Ornelas & Ferreira Advocacia | Dra. Izabella Ornelas & Dr. Breno Nilson Ferreira",
    founder: [
      {
        "@type": "Person",
        name: "Dra. Izabella Ornelas",
        jobTitle: "Advogada Especialista em Direito Previdenciário, Trabalhista e de Família",
      },
      {
        "@type": "Person",
        name: "Dr. Breno Nilson Ferreira",
        jobTitle: "Advogado Especialista em Direito Criminal e Direito Público",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Dep. Emílio Vasconcelos Costa, 133 - Segundo andar, Sala 8 - Centro",
      addressLocality: "Sete Lagoas",
      addressRegion: "MG",
      postalCode: "35700-009",
      addressCountry: "BR",
    },
    telephone: "+55-31-99088-2518",
    url: "https://www.ornelaseferreira.adv.br",
    image: "https://www.ornelaseferreira.adv.br/logo.png",
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "129",
    },
    areaServed: [
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
