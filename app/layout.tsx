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
  themeColor: "#0c0a08",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.juliaandrade.adv.br"),
  title:
    "Júlia Andrade — Advocacia e Consultoria | Advogada Trabalhista em Três Pontas - MG",
  description:
    "Advocacia Trabalhista humanizada, ética e combativa com a Dra. Júlia Andrade em Três Pontas e região. Especialista em Rescisão Indireta, Horas Extras, Verbas Rescisórias, Insalubridade, Periculosidade e Acidentes de Trabalho. Nota máxima 5,0 ★ no Google com 74 avaliações.",
  keywords: [
    "Júlia Andrade Advocacia",
    "Júlia Andrade Advogada Trabalhista",
    "Dra Júlia Andrade",
    "Advogada em Três Pontas",
    "Advogada em Três Pontas MG",
    "Advogada Trabalhista Três Pontas",
    "Escritório de Advocacia Três Pontas",
    "Advogado Trabalhista Três Pontas Minas Gerais",
    "Advogado Sul de Minas MG",
    "Rescisão Indireta Três Pontas",
    "Horas Extras Advogada Três Pontas",
    "Acidente de Trabalho Indenização Três Pontas",
    "Insalubridade e Periculosidade Três Pontas",
    "Reconhecimento de Vínculo Três Pontas",
    "Demissão Injusta Direitos Trabalhistas",
    "Advocacia Trabalhista Humanizada",
  ],
  authors: [{ name: "Dra. Júlia Andrade" }],
  creator: "Júlia Andrade — Advocacia e Consultoria",
  publisher: "Júlia Andrade — Advocacia e Consultoria",
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
    url: "https://www.juliaandrade.adv.br",
    title:
      "Júlia Andrade — Advocacia e Consultoria | Advogada Trabalhista em Três Pontas - MG",
    description:
      "⚖️ Ajudo trabalhadores a terem seus direitos reconhecidos e preservados. Atendimento humanizado, transparente e focado em resultados. Nota máxima 5,0 ★ no Google com 74 avaliações.",
    siteName: "Júlia Andrade — Advocacia e Consultoria",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 341,
        alt: "Júlia Andrade — Advocacia e Consultoria",
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
    name: "Júlia Andrade — Advocacia e Consultoria",
    alternateName: "Dra. Júlia Andrade Advogada Trabalhista",
    founder: [
      {
        "@type": "Person",
        name: "Dra. Júlia Andrade",
        jobTitle: "Advogada Trabalhista e Consultora Jurídica",
      },
    ],
    telephone: "+55-35-99816-0724",
    url: "https://www.juliaandrade.adv.br",
    image: "https://www.juliaandrade.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. São Pedro, 45 - Centro",
      addressLocality: "Três Pontas",
      addressRegion: "MG",
      postalCode: "37185-038",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -21.3697,
      longitude: -45.5097,
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "74",
    },
    areaServed: [
      "Três Pontas",
      "Varginha",
      "Santana da Vargem",
      "Boa Esperança",
      "Campos Gerais",
      "Nepomuceno",
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
        closes: "22:30",
      },
    ],
    sameAs: [
      "https://www.instagram.com/juliaandradeadvogada/",
      "https://wa.me/5535998160724",
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
      <body className="min-h-screen overflow-x-clip bg-[#0c0a08] font-sans text-stone-100 antialiased selection:bg-[#c89345] selection:text-[#0c0a08]">
        {children}
      </body>
    </html>
  );
}
