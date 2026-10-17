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
  themeColor: "#08080a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jaquelinesoares.adv.br"),
  title:
    "Jaqueline Soares — Advogada | Escritório de Advocacia em Lagoa Santa - MG",
  description:
    "Advocacia ética, combativa e humanizada com a Dra. Jaqueline Soares em Lagoa Santa e Vetor Norte - MG. Atendimento especializado em Direito de Família, Cível, Consumidor, Trabalhista e Previdenciário (INSS). Nota máxima 5,0 ★ no Google.",
  keywords: [
    "Jaqueline Soares Advogada",
    "Jaqueline Soares Advocacia",
    "Advogada em Lagoa Santa",
    "Advogada em Lagoa Santa MG",
    "Escritório de Advocacia Lagoa Santa",
    "Dra Jaqueline Soares",
    "Advogada Vetor Norte MG",
    "Advogada Direito de Família Lagoa Santa",
    "Divórcio e Pensão Lagoa Santa",
    "Inventário e Partilha Lagoa Santa",
    "Advogada Trabalhista Lagoa Santa",
    "Advogada Previdenciário INSS Lagoa Santa",
    "Aposentadoria INSS Lagoa Santa",
    "BPC LOAS Lagoa Santa",
    "Direito do Consumidor Lagoa Santa",
    "Contratos e Indenizações Lagoa Santa",
    "Advocacia Lagoa Santa Minas Gerais",
  ],
  authors: [{ name: "Dra. Jaqueline Soares" }],
  creator: "Jaqueline Soares — Escritório de Advocacia",
  publisher: "Jaqueline Soares — Escritório de Advocacia",
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
    url: "https://www.jaquelinesoares.adv.br",
    title:
      "Jaqueline Soares — Advogada | Escritório de Advocacia em Lagoa Santa - MG",
    description:
      "Atendimento jurídico de excelência, humanizado e focado em resultados reais. Referência em Lagoa Santa e Vetor Norte. Nota 5,0 ★ no Google.",
    siteName: "Jaqueline Soares — Escritório de Advocacia",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 512,
        alt: "Jaqueline Soares — Escritório de Advocacia",
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
    name: "Jaqueline Soares — Escritório de Advocacia",
    alternateName: "Dra. Jaqueline Soares Advogada",
    founder: [
      {
        "@type": "Person",
        name: "Dra. Jaqueline Soares",
        jobTitle: "Advogada Fundadora e Consultora Jurídica",
      },
    ],
    telephone: "+55-31-97577-2112",
    url: "https://www.jaquelinesoares.adv.br",
    image: "https://www.jaquelinesoares.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Timbiras, 150 - Bela Vista",
      addressLocality: "Lagoa Santa",
      addressRegion: "MG",
      postalCode: "33239-314",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -19.6305,
      longitude: -43.9015,
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "19",
    },
    areaServed: [
      "Lagoa Santa",
      "Vetor Norte",
      "Confins",
      "Pedro Leopoldo",
      "Vespasiano",
      "Santa Luzia",
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
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/adv.jaquelinesoaress/",
      "https://wa.me/5531975772112",
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
      <body className="min-h-screen overflow-x-clip bg-[#08080a] font-sans text-stone-100 antialiased selection:bg-[#dfb76c] selection:text-[#08080a]">
        {children}
      </body>
    </html>
  );
}
