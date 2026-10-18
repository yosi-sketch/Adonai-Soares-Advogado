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
  themeColor: "#080b11",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.brunomarques.adv.br"),
  title:
    "Bruno Marques Advocacia | Escritório de Advocacia em Carmo do Paranaíba - MG",
  description:
    "Advocacia ética, combativa e resolutiva com o Dr. Bruno Marques em Carmo do Paranaíba e região. Atendimento especializado em Direito Cível, Família e Sucessões, Consumidor, Trabalhista, Previdenciário (INSS) e Contratos. Nota máxima 5,0 ★ no Google.",
  keywords: [
    "Bruno Marques Advocacia",
    "Bruno Marques Advogado",
    "Dr Bruno Marques",
    "Advogado em Carmo do Paranaíba",
    "Advogado em Carmo do Paranaíba MG",
    "Escritório de Advocacia Carmo do Paranaíba",
    "Advogado Carmo do Paranaíba Minas Gerais",
    "Advogado Alto Paranaíba MG",
    "Advogado Direito de Família Carmo do Paranaíba",
    "Divórcio e Inventário Carmo do Paranaíba",
    "Advogado Trabalhista Carmo do Paranaíba",
    "Advogado Previdenciário INSS Carmo do Paranaíba",
    "Aposentadoria INSS Carmo do Paranaíba",
    "BPC LOAS Carmo do Paranaíba",
    "Direito do Consumidor Carmo do Paranaíba",
    "Ações Contra Bancos Carmo do Paranaíba",
    "Contratos e Indenizações Carmo do Paranaíba",
    "Advocacia Carmo do Paranaíba Minas Gerais",
  ],
  authors: [{ name: "Dr. Bruno Marques" }],
  creator: "Bruno Marques Advocacia",
  publisher: "Bruno Marques Advocacia",
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
    url: "https://www.brunomarques.adv.br",
    title:
      "Bruno Marques Advocacia | Escritório de Advocacia em Carmo do Paranaíba - MG",
    description:
      "Atendimento jurídico de excelência, resolutivo e focado em resultados reais. Referência em Carmo do Paranaíba e região. Nota máxima 5,0 ★ no Google.",
    siteName: "Bruno Marques Advocacia",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 341,
        alt: "Bruno Marques Advocacia",
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
    name: "Bruno Marques Advocacia",
    alternateName: "Dr. Bruno Marques Advogado",
    founder: [
      {
        "@type": "Person",
        name: "Dr. Bruno Marques",
        jobTitle: "Advogado Titular e Consultor Jurídico",
      },
    ],
    telephone: "+55-34-99716-3580",
    url: "https://www.brunomarques.adv.br",
    image: "https://www.brunomarques.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Franklin Mendonça, 341",
      addressLocality: "Carmo do Paranaíba",
      addressRegion: "MG",
      postalCode: "38840-056",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -19.0019,
      longitude: -46.3142,
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "10",
    },
    areaServed: [
      "Carmo do Paranaíba",
      "Arapuá",
      "Rio Paranaíba",
      "Patos de Minas",
      "São Gotardo",
      "Tiros",
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
      "https://www.instagram.com/brunomarques.advv/",
      "https://wa.me/5534997163580",
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
      <body className="min-h-screen overflow-x-clip bg-[#080b11] font-sans text-stone-100 antialiased selection:bg-[#c59b48] selection:text-[#080b11]">
        {children}
      </body>
    </html>
  );
}
