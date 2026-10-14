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
  themeColor: "#17060d",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.julianacarvalho.adv.br"),
  title:
    "Dra. Juliana Carvalho | Advogada Especialista em INSS e RPPS (Servidores Públicos) | São João del Rei - MG",
  description:
    "Assessoria jurídica de excelência em Direito Previdenciário (INSS e RPPS Servidores Públicos) e Trabalhista com 10 anos de experiência. Dra. Juliana Carvalho. Planejamento previdenciário estratégico, concessão da melhor aposentadoria e benefícios. Sede na Av. Tiradentes, 707 - Centro, São João del Rei - MG. Avaliação máxima 5,0 ★ no Google com 58 avaliações.",
  keywords: [
    "Juliana Carvalho Advogada",
    "Dra Juliana Carvalho",
    "Advogada Especialista em INSS e RPPS",
    "Direito Previdenciário São João del Rei",
    "Advogado INSS São João del Rei MG",
    "Aposentadoria Servidor Público RPPS",
    "Planejamento Previdenciário São João del Rei",
    "Advogada Previdenciarista Minas Gerais",
    "Benefício por Incapacidade INSS",
    "Auxílio-Acidente e Auxílio-Doença",
    "BPC LOAS São João del Rei",
    "Advogado Trabalhista São João del Rei",
    "Av Tiradentes 707 São João del Rei",
    "Escritório de Advocacia Previdenciária Campo das Vertentes",
  ],
  authors: [{ name: "Dra. Juliana Carvalho" }],
  creator: "Dra. Juliana Carvalho — Advocacia Especializada",
  publisher: "Dra. Juliana Carvalho — Advocacia Especializada",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "512x512" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.julianacarvalho.adv.br",
    title:
      "Dra. Juliana Carvalho | Especialista em INSS e RPPS (Servidores Públicos)",
    description:
      "Assessoria jurídica com 10 anos de experiência, dedicação incansável e atendimento humanizado. Concessão da melhor aposentadoria e defesa dos seus direitos previdenciários e trabalhistas. 5,0 ★ no Google (58 avaliações).",
    siteName: "Juliana Carvalho Advocacia Previdenciária & Trabalhista",
    images: [
      {
        url: "/Monograma J&C em Borgonha Elegante.png",
        width: 2172,
        height: 724,
        alt: "Dra. Juliana Carvalho Advogada — São João del Rei - MG",
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
    name: "Juliana Carvalho Advogada Especialista em INSS e RPPS (Servidores públicos)",
    alternateName: "Juliana Carvalho Advocacia Previdenciária & Trabalhista",
    founder: [
      {
        "@type": "Person",
        name: "Dra. Juliana Carvalho",
        jobTitle:
          "Advogada Especialista em Direito Previdenciário (INSS e RPPS) e Trabalhista",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Tiradentes, 707 - Centro",
      addressLocality: "São João del Rei",
      addressRegion: "MG",
      postalCode: "36307-346",
      addressCountry: "BR",
    },
    telephone: "+55-32-98886-8022",
    url: "https://www.julianacarvalho.adv.br",
    image: "https://www.julianacarvalho.adv.br/Monograma%20J%26C%20em%20Borgonha%20Elegante.png",
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "58",
    },
    areaServed: [
      "São João del Rei",
      "Campo das Vertentes",
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
        opens: "07:30",
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
