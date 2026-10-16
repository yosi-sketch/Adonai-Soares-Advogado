import type { Metadata, Viewport } from "next";
import { Playfair_Display, Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

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
  themeColor: "#080706",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.apolinarioadvogados.com.br"),
  title:
    "Apolinário Advogados · Dra. Yara Aline Apolinário | Advocacia & Consultoria Jurídica",
  description:
    "Advocacia especializada, combativa e humanizada liderada pela Dra. Yara Aline Apolinário (OAB/MG 156.433). Direito Previdenciário (Aposentadorias, BPC/LOAS, Salário-Maternidade), Direito do Trabalho e Direitos dos Passageiros Aéreos. Atendimento presencial e online em todo o Brasil. Nota 5,0 ★ no Google.",
  keywords: [
    "Apolinário Advogados",
    "Dra. Yara Aline Apolinário",
    "Yara Apolinário Advogada",
    "Advocacia Apolinário",
    "OAB MG 156433",
    "Advogada Previdenciária MG",
    "Aposentadoria INSS",
    "BPC LOAS",
    "Salário Maternidade INSS",
    "Advogada Trabalhista Minas Gerais",
    "Direitos dos Passageiros Aéreos",
    "Voo Cancelado Indenização",
    "Atraso de Voo e Extravio de Bagagem",
    "Consultoria Jurídica Contratos",
    "Atendimento Online Brasil",
  ],
  authors: [{ name: "Dra. Yara Aline Apolinário" }],
  creator: "Apolinário Advogados",
  publisher: "Apolinário Advogados",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
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
    url: "https://www.apolinarioadvogados.com.br",
    title:
      "Apolinário Advogados · Dra. Yara Aline Apolinário | Advocacia & Consultoria Jurídica",
    description:
      "Atendimento jurídico de excelência, humanizado e focado em resultados. Previdenciário (INSS e Maternidade), Trabalhista e Direito do Passageiro Aéreo. Nota 5,0 ★ no Google.",
    siteName: "Apolinário Advogados",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 409,
        alt: "Apolinário Advogados - Logotipo Oficial",
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
    name: "Apolinário Advogados",
    alternateName: "Dra. Yara Aline Apolinário – Advocacia & Consultoria Jurídica",
    founder: [
      {
        "@type": "Person",
        name: "Dra. Yara Aline Apolinário",
        jobTitle: "Advogada Fundadora (OAB/MG 156.433)",
      },
    ],
    telephone: "+55-31-99585-9111",
    url: "https://www.apolinarioadvogados.com.br",
    image: "https://www.apolinarioadvogados.com.br/logo.png",
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "41",
    },
    areaServed: [
      "Belo Horizonte",
      "Santa Bárbara",
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
        opens: "08:30",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/advogada_yara_apolinario/",
      "https://wa.me/5531995859111",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} ${playfairFont.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-[#080706] font-sans text-stone-100 antialiased selection:bg-[#d49b29] selection:text-[#080706]">
        {children}
      </body>
    </html>
  );
}
