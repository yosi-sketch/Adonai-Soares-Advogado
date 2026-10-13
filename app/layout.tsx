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
  themeColor: "#100f0d",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.guimaraesecanuto.adv.br"),
  title:
    "Guimarães e Canuto Advogados | Direito Imobiliário em Diamantina - MG | Dra. Ana Flávia Guimarães",
  description:
    "Estratégias jurídicas seguras e eficientes para a regularização de imóveis, usucapião judicial e extrajudicial, inventários, desmembramento e demandas cartorárias em Diamantina e região. Dra. Ana Flávia Guimarães. Sede na R. Macau do Meio, 135 - 2° andar - Centro, Diamantina - MG. Nota máxima 5,0 ★ no Google (13 avaliações).",
  keywords: [
    "Guimarães e Canuto Advogados",
    "Ana Flávia Guimarães",
    "Dra. Ana Flávia Guimarães",
    "Advogada Diamantina MG",
    "Advogado em Diamantina",
    "Direito Imobiliário Diamantina",
    "Regularização de Imóveis Diamantina MG",
    "Usucapião Diamantina",
    "Usucapião Extrajudicial Diamantina",
    "Inventário de Imóveis Diamantina",
    "Retificação de Matrícula Diamantina",
    "Divisão e Desmembramento de Imóveis",
    "Regularização Fundiária Vale do Jequitinhonha",
    "Escritório de Advocacia Diamantina MG",
  ],
  authors: [
    { name: "Dra. Ana Flávia Guimarães" },
    { name: "Guimarães e Canuto Advogados" },
  ],
  creator: "Guimarães e Canuto Advogados",
  publisher: "Guimarães e Canuto Advogados",
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
    url: "https://www.guimaraesecanuto.adv.br",
    title:
      "Guimarães e Canuto Advogados | Direito Imobiliário & Regularização em Diamantina - MG",
    description:
      "Advocacia especializada em Direito Imobiliário, Regularização de Imóveis, Usucapião e Inventários no Centro de Diamantina - MG. Atendimento próximo, seguro e ágil. Nota 5,0 ★ no Google.",
    siteName: "Guimarães e Canuto Advogados",
    images: [
      {
        url: "/logo.png",
        width: 2172,
        height: 724,
        alt: "Guimarães e Canuto Advogados — Diamantina - MG",
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
    name: "Guimarães e Canuto Advogados",
    alternateName: "Guimarães & Canuto Advogados | Dra. Ana Flávia Guimarães",
    founder: {
      "@type": "Person",
      name: "Dra. Ana Flávia Guimarães",
      jobTitle: "Advogada Especialista em Regularização de Imóveis",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Macau do Meio, n° 135 - 2° andar - Centro",
      addressLocality: "Diamantina",
      addressRegion: "MG",
      postalCode: "39100-000",
      addressCountry: "BR",
    },
    telephone: "+55-38-99186-8160",
    url: "https://www.guimaraesecanuto.adv.br",
    image: "https://www.guimaraesecanuto.adv.br/logo.png",
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "13",
    },
    areaServed: [
      "Diamantina",
      "Microrregião de Diamantina",
      "Vale do Jequitinhonha",
      "Minas Gerais",
      "Brasil",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
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
      <body className="min-h-screen overflow-x-clip bg-ivory font-sans text-ink antialiased selection:bg-brand-800 selection:text-white">
        {children}
      </body>
    </html>
  );
}
