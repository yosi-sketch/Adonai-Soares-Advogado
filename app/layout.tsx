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
  themeColor: "#180509",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.giseleferreiraadv.com.br"),
  title:
    "Gisele Ferreira Advogada · Advocacia Especializada em Nova Serrana - MG",
  description:
    "Assessoria jurídica de excelência, humanizada e resolutiva. Dra. Gisele Ferreira. Especialista em Direito de Família e Sucessões (divórcios, inventários, partilhas), Direito Previdenciário (INSS), Direito Civil, Consumidor e Resolução Extrajudicial. Sede na R. Europa, 176 - Belvedere, Nova Serrana - MG. Avaliação 4,9 ★ no Google.",
  keywords: [
    "Gisele Ferreira Advogada",
    "Dra Gisele Ferreira",
    "Advogada Nova Serrana MG",
    "Advocacia Nova Serrana",
    "Direito de Família Nova Serrana",
    "Divórcio e Inventário Nova Serrana",
    "Pensão Alimentícia Nova Serrana",
    "Advogada Previdenciária Nova Serrana INSS",
    "Aposentadoria INSS Nova Serrana",
    "Advogada Belvedere Nova Serrana",
    "Rua Europa 176 Belvedere Nova Serrana",
    "Gisele Ferreira Advocacia",
  ],
  authors: [
    { name: "Dra. Gisele Ferreira" },
  ],
  creator: "Gisele Ferreira Advogada",
  publisher: "Gisele Ferreira Advogada",
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
    url: "https://www.giseleferreiraadv.com.br",
    title:
      "Gisele Ferreira Advogada · Advocacia Especializada em Nova Serrana - MG",
    description:
      "Assessoria jurídica com atendimento humanizado, rigor técnico e excelência. Defesa dedicada em Direito de Família, Previdenciário, Cível e Consumidor. 4,9 ★ no Google com 12 avaliações.",
    siteName: "Gisele Ferreira Advogada",
    images: [
      {
        url: "/logo-gisele-ferreira.png",
        width: 1024,
        height: 682,
        alt: "Gisele Ferreira Advogada - Logotipo Oficial",
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
    name: "Gisele Ferreira Advogada",
    alternateName: "Dra. Gisele Ferreira Advocacia",
    founder: [
      {
        "@type": "Person",
        name: "Dra. Gisele Ferreira",
        jobTitle: "Advogada Fundadora",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Europa, 176 - Belvedere",
      addressLocality: "Nova Serrana",
      addressRegion: "MG",
      postalCode: "35526-720",
      addressCountry: "BR",
    },
    telephone: "+55-37-99164-2670",
    url: "https://www.giseleferreiraadv.com.br",
    image: "https://www.giseleferreiraadv.com.br/logo-gisele-ferreira.png",
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "12",
    },
    areaServed: [
      "Nova Serrana",
      "Minas Gerais",
      "Divinópolis",
      "Bom Despacho",
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
      "https://www.instagram.com/gisele.fferreiraadv/",
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
