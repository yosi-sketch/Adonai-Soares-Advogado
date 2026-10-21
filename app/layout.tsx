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
  metadataBase: new URL("https://www.michaelysilva.adv.br"),
  title:
    "Michaely Silva | Advogada em João Pinheiro - MG · Direito do Consumidor, Família & Inventário",
  description:
    "⚖️ Michaely Pereira Silva — Advogada em João Pinheiro - MG. Atendimento especializado em Direito do Consumidor, Direito de Família, Inventário Judicial e Extrajudicial, Direito Bancário e do Trabalho. Nota máxima de 5,0 ★ com 17 avaliações no Google. 📍 R. Astolfo Moreira, 305 A - Centro, João Pinheiro - MG.",
  keywords: [
    "Michaely Pereira Silva Advogada",
    "Michaely Silva Advogada",
    "Advogada em João Pinheiro MG",
    "Advogada João Pinheiro",
    "Advocacia João Pinheiro MG",
    "Direito do Consumidor João Pinheiro",
    "Direito de Família João Pinheiro",
    "Inventário Judicial João Pinheiro",
    "Inventário Extrajudicial em Cartório",
    "Divórcio e Pensão Alimentícia João Pinheiro",
    "Advogada Direito Bancário",
    "Revisão Contratos Bancários e Juros",
    "Advogada Trabalhista João Pinheiro",
    "Orientação Jurídica João Pinheiro MG",
    "Advogada Civil Minas Gerais",
  ],
  authors: [{ name: "Dra. Michaely Pereira Silva" }],
  creator: "Michaely Silva Advocacia",
  publisher: "Michaely Silva Advocacia",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.michaelysilva.adv.br",
    title:
      "Michaely Silva | Advogada · João Pinheiro - MG",
    description:
      "⚖️ Advocacia de excelência, ética e acolhimento humano em João Pinheiro - MG. Foco em Direito do Consumidor, Família, Inventários, Direito Bancário e do Trabalho. Avaliação máxima de 5,0 ★ no Google.",
    siteName: "Michaely Silva Advocacia",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 512,
        alt: "Michaely Silva | Advogada — João Pinheiro - MG",
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
    name: "Michaely Silva | Advogada",
    alternateName: "Dra. Michaely Pereira Silva — Advogada",
    legalName: "Michaely Pereira Silva Advocacia",
    founder: [
      {
        "@type": "Person",
        name: "Dra. Michaely Pereira Silva",
        jobTitle: "Advogada Civil, Família, Consumidor, Inventários e Consultoria Jurídica",
      },
    ],
    telephone: "+55-38-98835-5914",
    email: "contato@michaelysilva.adv.br",
    url: "https://www.michaelysilva.adv.br",
    image: "https://www.michaelysilva.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Astolfo Moreira, 305 A - Centro",
      addressLocality: "João Pinheiro",
      addressRegion: "MG",
      postalCode: "38770-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -17.7444,
      longitude: -46.1739,
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "17",
    },
    areaServed: [
      "João Pinheiro",
      "Paracatu",
      "Brasilândia de Minas",
      "Lagoa Grande",
      "Vazante",
      "Noroeste de Minas",
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
      "https://www.instagram.com/michaelysilva_adv/",
      "https://wa.me/553888355914",
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
      <body className="min-h-screen overflow-x-clip bg-[#faf8f5] font-sans text-[#14110e] antialiased selection:bg-[#f7e5a9] selection:text-[#14110e]">
        {children}
      </body>
    </html>
  );
}
