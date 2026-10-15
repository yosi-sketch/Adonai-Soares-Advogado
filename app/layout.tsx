import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

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
  themeColor: "#1c070b",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.valadaresesouza.adv.br"),
  title:
    "Valadares & Souza | Sociedade de Advogadas · Ouro Preto - MG",
  description:
    "Assessoria jurídica de excelência, humanizada e resolutiva. Dra. Patrícia Valadares e Dra. Iasmin Souza. Especialistas em Direito do Passageiro Aéreo (indenização por atraso, cancelamento e extravio de bagagem), Direito do Consumidor, Cível e Previdenciário. Sede na R. João XXIII, 296 - Ouro Preto, MG. Avaliação máxima 5,0 ★ no Google.",
  keywords: [
    "Valadares e Souza",
    "Valadares e Souza Sociedade de Advogadas",
    "Advogadas Ouro Preto MG",
    "Dra Patricia Valadares",
    "Dra Iasmin Souza",
    "Direito do Passageiro Aéreo",
    "Indenização Voo Cancelado",
    "Atraso de Voo Reembolso Indenização",
    "Extravio de Bagagem Companhia Aérea",
    "Direito do Consumidor Ouro Preto",
    "Reparação de Danos Ouro Preto",
    "Advocacia Ouro Preto Minas Gerais",
    "Rua João XXIII 296 Ouro Preto",
    "Advogado de Viagens",
  ],
  authors: [
    { name: "Dra. Patrícia Valadares" },
    { name: "Dra. Iasmin Souza" },
  ],
  creator: "Valadares e Souza - Sociedade de Advogadas",
  publisher: "Valadares e Souza - Sociedade de Advogadas",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "512x512" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.valadaresesouza.adv.br",
    title:
      "Valadares & Souza | Sociedade de Advogadas · Ouro Preto - MG",
    description:
      "Assessoria jurídica com atendimento humanizado, rigor técnico e excelência. Defesa combativa em Direito do Passageiro Aéreo, Consumidor, Cível e Previdenciário. 5,0 ★ no Google (39 avaliações).",
    siteName: "Valadares & Souza - Sociedade de Advogadas",
    images: [
      {
        url: "/valadares-souza-logo.png",
        width: 1024,
        height: 341,
        alt: "Valadares & Souza - Sociedade de Advogadas",
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
    name: "Valadares e Souza - Sociedade de Advogadas",
    alternateName: "Valadares & Souza Sociedade de Advogadas",
    founder: [
      {
        "@type": "Person",
        name: "Dra. Patrícia Valadares",
        jobTitle: "Advogada Sócia Fundadora",
      },
      {
        "@type": "Person",
        name: "Dra. Iasmin Souza",
        jobTitle: "Advogada Sócia Fundadora",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. João XXIII, 296",
      addressLocality: "Ouro Preto",
      addressRegion: "MG",
      postalCode: "35404-332",
      addressCountry: "BR",
    },
    telephone: "+55-31-97128-8470",
    url: "https://www.valadaresesouza.adv.br",
    image: "https://www.valadaresesouza.adv.br/valadares-souza-logo.png",
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "39",
    },
    areaServed: [
      "Ouro Preto",
      "Minas Gerais",
      "Curitiba",
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
