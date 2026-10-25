"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type Variants, MotionConfig } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  CheckCircle2,
  Clock,
  FileCheck2,
  HeartHandshake,
  Mail,
  MapPin,
  Menu,
  Phone,
  Scale,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Briefcase,
  Home as HomeIcon,
  ShoppingBag,
  X,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5538991242534";
const PHONE_DISPLAY = "(38) 99124-2534";
const EMAIL_CONTACT = "contato@carlagisele.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/carla_giseele/";
const INSTAGRAM_HANDLE = "@carla_giseele";
const LAWYER_NAME = "Dra. Carla Gisele";
const LAWYER_TITLE = "Advogada | Graduada pela Universidade Federal de Minas Gerais (UFMG)";

const ADDRESS_TEXT =
  "R. Padre Martin Kirscht - Espinosa, MG, 39510-000";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Carla+Gisele+Advogada+R+Padre+Martin+Kirscht+Espinosa+MG";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Carla+Gisele+%E2%80%94+Advogada%0AEspinosa+%C2%B7+MG%0A&sourceid=chrome&ie=UTF-8#";

const LOGO_SRC = "/logo.png";
const LOGO_SYMBOL_SRC = "/logo-symbol.png";
const FOTO_HERO_SRC = "/carla-gisele-hero.jpg";
const FOTO_SOBRE_SRC = "/carla-gisele-about.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Carla Gisele! Gostaria de agendar uma consulta para orientação jurídica sobre o meu caso.";
  return `https://wa.me/${number}?text=${encodeURIComponent(
    message || defaultText
  )}`;
}

function WhatsAppIcon({
  size = 17,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.39 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.07 8.02 12.23C8.15 12.39 9.74 14.85 12.19 15.91C12.77 16.16 13.23 16.31 13.58 16.42C14.17 16.61 14.71 16.58 15.13 16.52C15.6 16.45 16.58 15.93 16.78 15.35C16.99 14.77 16.99 14.27 16.93 14.17C16.86 14.07 16.71 14.01 16.47 13.89C16.24 13.77 15.11 13.21 14.9 13.14C14.69 13.06 14.54 13.02 14.39 13.25C14.23 13.47 13.8 13.98 13.67 14.13C13.54 14.27 13.41 14.29 13.18 14.17C12.95 14.06 11.98 13.74 10.84 12.72C9.95 11.92 9.34 10.94 9.17 10.65C9.01 10.36 9.15 10.2 9.27 10.08C9.37 9.98 9.5 9.8 9.62 9.66C9.74 9.52 9.78 9.42 9.86 9.26C9.94 9.1 9.9 8.95 9.84 8.83C9.78 8.71 9.32 7.57 9.13 7.11C8.94 6.66 8.75 6.72 8.6 6.71C8.47 6.71 8.31 6.71 8.15 6.71L8.53 7.33Z" />
    </svg>
  );
}

function InstagramIcon({
  size = 17,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0ZM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8ZM18.406 4.155a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </svg>
  );
}

function GoogleIcon({
  size = 16,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

const reveal: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

interface PracticeArea {
  id: string;
  title: string;
  icon: typeof Scale;
  tag: string;
  summary: string;
  details: string;
  topics: string[];
  whatsAppText: string;
}

const practiceAreas: PracticeArea[] = [
  {
    id: "direito-de-familia-sucessoes",
    title: "Direito de Família & Sucessões",
    icon: Users,
    tag: "Inventários · Divórcios · Partilha de Bens · Guarda · Pensão Alimentícia",
    summary:
      "Soluções jurídicas seguras e humanizadas para momentos decisivos da sua família, com foco em agilidade, preservação patrimonial e mediação eficaz de conflitos.",
    details:
      "Demandas familiares e sucessórias exigem sensibilidade humana combinada a uma sólida estratégia jurídica. A Dra. Carla Gisele atua na condução de inventários judiciais e extrajudiciais (em cartório), divórcios consensuais ou litigiosos, regulamentação de guarda, visitas e pensão alimentícia, além de planejamento sucessório preventivo para proteger o patrimônio e a harmonia familiar.",
    topics: [
      "Inventário Extrajudicial célere em cartório e Inventário Judicial complexo",
      "Divórcio Consensual e Litigioso com partilha estratégica de bens",
      "Ações de Fixação, Revisão e Execução de Pensão Alimentícia",
      "Guarda Compartilhada, Regulamentação de Convivência e Regime de Visitas",
      "Reconhecimento e Dissolução de União Estável com partilha de patrimônio",
      "Planejamento Sucessório, Doações em Vida e Testamentos",
    ],
    whatsAppText:
      "Olá, Dra. Carla Gisele! Gostaria de agendar uma consulta sobre Direito de Família ou Inventário.",
  },
  {
    id: "direito-previdenciario-inss",
    title: "Direito Previdenciário & Benefícios INSS",
    icon: FileCheck2,
    tag: "Aposentadorias · Planejamento Previdenciário · BPC/LOAS · Auxílio por Incapacidade",
    summary:
      "Concessão célere e revisão estratégica da sua aposentadoria ou benefício no INSS, revertendo negativas e assegurando o máximo valor financeiro legalmente devido.",
    details:
      "Diante da complexidade das regras da Previdência e das constantes negativas do INSS, a Dra. Carla Gisele realiza auditoria profunda no extrato CNIS, simula regras de transição vantajosas e ingressa com ações judiciais combativas para restabelecer benefícios por incapacidade negados, concessão de aposentadorias (idade, tempo, rural e especial) e BPC/LOAS.",
    topics: [
      "Planejamento Previdenciário Estratégico com cálculo da Renda Mensal Inicial (RMI)",
      "Aposentadoria por Idade Urbana e Rural com cômputo integral de tempo trabalhado",
      "Aposentadoria Especial com conversão de tempo insalubre e análise de PPP/LTCAT",
      "Reversão Judicial de Indeferimento de Auxílio por Incapacidade Temporária e Invalidez",
      "Concessão de BPC/LOAS para Idosos (65+) e Pessoas com Deficiência",
      "Pensão por Morte, Auxílio-Reclusão e Revisões de Benefícios com cálculo de atrasados",
    ],
    whatsAppText:
      "Olá, Dra. Carla Gisele! Gostaria de uma avaliação para minha aposentadoria ou benefício no INSS.",
  },
  {
    id: "direito-civil-contratos-indenizacoes",
    title: "Direito Civil, Contratos & Indenizações",
    icon: Scale,
    tag: "Contratos Blindados · Cobranças · Danos Morais e Materiais · Responsabilidade Civil",
    summary:
      "Proteção jurídica patrimonial, resolução estratégica de disputas e atuação combativa em ações indenizatórias para reparação integral de prejuízos materiais e morais.",
    details:
      "Relações contratuais e disputas civis necessitam de acompanhamento técnico rigoroso para prevenir prejuízos ou buscar ressarcimento célere. A Dra. Carla Gisele elabora contratos seguros, atua na cobrança e execução de títulos judiciais e extrajudiciais, e promove ações de indenização por acidentes, descumprimentos contratuais e violação de direitos.",
    topics: [
      "Elaboração, análise e blindagem jurídica de contratos civis e comerciais",
      "Ações Indenizatórias por Danos Morais, Materiais e Lucros Cessantes",
      "Cobrança Judicial e Extrajudicial de dívidas, cheques, notas promissórias e contratos",
      "Rescisão contratual com restituição de valores e aplicação de cláusulas penais",
      "Notificações extrajudiciais estratégicas para solução rápida sem litígio",
      "Defesa civil contundente em processos judiciais de execução e cobrança",
    ],
    whatsAppText:
      "Olá, Dra. Carla Gisele! Gostaria de consultar sobre uma demanda de Direito Civil, contrato ou indenização.",
  },
  {
    id: "direito-imobiliario-regularizacao",
    title: "Direito Imobiliário & Regularização de Imóveis",
    icon: HomeIcon,
    tag: "Usucapião · Regularização Fundiária · Contratos de Compra e Venda · Posse",
    summary:
      "Regularização registral completa de imóveis urbanos e rurais em Espinosa e região, garantindo segurança jurídica absoluta e valorização do seu patrimônio imobiliário.",
    details:
      "Imóveis sem escritura ou com pendências registrais geram insegurança e desvalorização patrimonial. A Dra. Carla Gisele atua na regularização fundiária de propriedades urbanas e rurais, ações de usucapião judicial e extrajudicial, elaboração de contratos seguros de compra, venda e locação, e resolução de conflitos possessórios.",
    topics: [
      "Ações de Usucapião Extrajudicial (em cartório) e Usucapião Judicial",
      "Regularização de escrituras, registros imobiliários e averbações de imóveis",
      "Assessoria jurídica completa para compra e venda segura de imóveis urbanos e rurais",
      "Ações Possessórias: Reintegração de posse, manutenção de posse e interdito proibitório",
      "Elaboração e análise de Contratos de Locação comercial e residencial",
      "Despejos, cobrança de aluguéis e renovatórias de locação comercial",
    ],
    whatsAppText:
      "Olá, Dra. Carla Gisele! Preciso de orientações sobre usucapião ou regularização de imóvel.",
  },
  {
    id: "direito-do-trabalho-defesa",
    title: "Direito do Trabalho & Defesa dos Direitos",
    icon: Briefcase,
    tag: "Verbas Rescisórias · Rescisão Indireta · Horas Extras · Vínculo Empregatício",
    summary:
      "Defesa firme e intransigente dos direitos e garantias do trabalhador, assegurando o recebimento justo de todas as verbas rescisórias e indenizações devidas.",
    details:
      "O trabalhador que dedicou sua força produtiva tem direito ao recebimento exato de tudo o que a lei prevê. A Dra. Carla Gisele atua no cálculo minucioso de haveres trabalhistas, rescisão indireta em casos de descumprimento pelo empregador, cobrança de horas extras não pagas, equiparação salarial, indenizações por acidente de trabalho e reconhecimento de vínculo.",
    topics: [
      "Cobrança integral de Verbas Rescisórias não pagas no prazo legal",
      "Rescisão Indireta do Contrato de Trabalho por falta grave patronal",
      "Cálculo e cobrança de Horas Extras, intervalos não usufruídos e adicional noturno",
      "Reconhecimento de vínculo de emprego na Carteira de Trabalho (CTPS)",
      "Indenizações por Acidente de Trabalho, doenças ocupacionais e estabilidade provisória",
      "Adicionais de Insalubridade e Periculosidade devidos e não quitados",
    ],
    whatsAppText:
      "Olá, Dra. Carla Gisele! Gostaria de consultar sobre meus direitos trabalhistas e verbas rescisórias.",
  },
  {
    id: "direito-do-consumidor-abusos",
    title: "Direito do Consumidor & Defesa contra Abusos",
    icon: ShoppingBag,
    tag: "Negativação Indevida · Fraudes Bancárias · Empréstimos Não Contratados · Danos",
    summary:
      "Atuação rápida para retirada de negativações indevidas no SPC/Serasa, cancelamento de cobranças fraudulentas e obtenção de indenizações por danos morais.",
    details:
      "Cobranças indevidas, golpes financeiros e falhas graves na prestação de serviços causam sérios transtornos. A Dra. Carla Gisele ingressa com medidas judiciais liminares para limpar imediatamente o nome nos órgãos de proteção ao crédito, cancelar contratos bancários fraudulentos com restituição em dobro e exigir indenizações justas por danos morais.",
    topics: [
      "Retirada imediata de Inscrição Indevida no SPC, Serasa e órgãos de proteção ao crédito",
      "Indenização por Danos Morais em decorrência de cobrança vexatória ou negativação indevida",
      "Cancelamento de Empréstimos Consignados e Cartões de Crédito não autorizados (golpes/fraudes)",
      "Restituição em Dobro de valores descontados indevidamente em conta ou benefício",
      "Ações contra companhias aéreas por atraso, cancelamento de voos e extravio de bagagem",
      "Reparação por produtos com vícios ou defeitos não solucionados pelo fornecedor",
    ],
    whatsAppText:
      "Olá, Dra. Carla Gisele! Tive um problema de consumo, negativação indevida ou fraude bancária e preciso de ajuda.",
  },
];

const clientReviews = [
  {
    name: "Orlando Barros",
    reviewerTag: "2 avaliações no Google",
    badge: "Confiança & Competência",
    rating: 5,
    content: "Profissional de extrema confiança e competência.",
  },
  {
    name: "geo Dias",
    reviewerTag: "2 avaliações no Google",
    badge: "Competente & Responsável",
    rating: 5,
    content: "Profissional competente e responsável!",
  },
  {
    name: "Otávio Augusto Ribeiro Barbosa",
    reviewerTag: "4 avaliações · 6 fotos no Google",
    badge: "Dedicada & Eficiente",
    rating: 5,
    content: "Advogada dedicada, clara nas orientações e muito eficiente.",
  },
  {
    name: "Anderson Júnior",
    reviewerTag: "1 avaliação no Google",
    badge: "Competência & Experiência",
    rating: 5,
    content: "Profissional competente e de experiência.",
  },
  {
    name: "Thiago Ferreira",
    reviewerTag: "3 avaliações no Google",
    badge: "Preparada & Confiável",
    rating: 5,
    content: "Excelente profissional, muito preparada e confiável.",
  },
  {
    name: "Joel Neto De Sa",
    reviewerTag: "Local Guide · 29 avaliações · 68 fotos",
    badge: "Extrema Confiança",
    rating: 5,
    content: "Profissional de extrema confiança, competente e experiente.",
  },
  {
    name: "Jennifer Silva",
    reviewerTag: "3 avaliações · 1 foto no Google",
    badge: "Assessoria de Excelência",
    rating: 5,
    content: "Assessoria de excelência!",
  },
  {
    name: "Jô Dias",
    reviewerTag: "2 avaliações no Google",
    badge: "Extrema Qualidade",
    rating: 5,
    content: "Assessoria de extrema qualidade!!",
  },
  {
    name: "Alexandre do Carmo Santana Xandy",
    reviewerTag: "1 avaliação no Google",
    badge: "Experiência & Confiança",
    rating: 5,
    content: "Profissional competente, experiente e de confiança.",
  },
  {
    name: "Ronan Nogueira",
    reviewerTag: "2 avaliações no Google",
    badge: "Super Indico",
    rating: 5,
    content: "Super indico, ótima profissional.",
  },
  {
    name: "Vitoria Pereira",
    reviewerTag: "2 avaliações no Google",
    badge: "Extrema Competência",
    rating: 5,
    content: "Profissional de extrema competência!",
  },
  {
    name: "Eder Queiroz",
    reviewerTag: "2 avaliações no Google",
    badge: "Qualidade & Competência",
    rating: 5,
    content: "Profissional de competência e qualidade.",
  },
];

function Heading({
  eyebrow,
  children,
  description,
  light = true,
}: {
  eyebrow: string;
  children: React.ReactNode;
  description?: string;
  light?: boolean;
}) {
  return (
    <div>
      <p className={light ? "eyebrow-light" : "eyebrow"}>{eyebrow}</p>
      <h2 className="mt-4 font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-[#141210] sm:text-4xl lg:text-[3.15rem]">
        {children}
      </h2>
      {description && (
        <p className="mt-4 text-[15px] leading-7 text-[#2b241d]">
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeArea, setActiveArea] = useState<PracticeArea | null>(null);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveArea(null);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <MotionConfig reducedMotion="user">
      <main className="overflow-hidden bg-[#faf8f5] text-[#141210] selection:bg-[#f3e5c8] selection:text-[#0e0c0a]">
        {/* Navigation Bar - Refined Imperial Gold & Obsidian Noir Luxury */}
        <header className="sticky top-0 z-40 border-b border-[#e5dccd] bg-white/95 backdrop-blur-xl shadow-xs">
          <div className="mx-auto flex h-[98px] max-w-7xl items-center justify-between gap-6 px-5 sm:h-[108px] lg:h-[114px] xl:h-[118px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Carla Gisele — Advogada - Página Inicial"
              onClick={closeMenu}
              className="flex shrink-0 items-center transition-opacity hover:opacity-95"
            >
              <div className="relative h-[64px] w-[250px] sm:h-[74px] sm:w-[310px] lg:h-[84px] lg:w-[350px] xl:h-[88px] xl:w-[375px]">
                <Image
                  src={LOGO_SRC}
                  alt="Carla Gisele — Advogada"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 640px) 250px, (max-width: 1024px) 350px, 375px"
                  className="object-contain object-left"
                />
              </div>
            </a>

            <nav
              aria-label="Navegação principal"
              className="hidden items-center gap-5 xl:gap-7 lg:flex"
            >
              <a className="nav-link" href="#inicio">
                Início
              </a>
              <a className="nav-link" href="#sobre">
                A Advogada
              </a>
              <a className="nav-link" href="#atuacao">
                Áreas de Atuação
              </a>
              <a className="nav-link" href="#diferenciais">
                Por Que Escolher
              </a>
              <a className="nav-link" href="#avaliacoes">
                Avaliações (5,0 ★)
              </a>
              <a className="nav-link" href="#contato">
                Contato & Sede
              </a>
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Avaliações da Dra. Carla Gisele no Google"
                className="grid size-10 place-items-center rounded-lg border border-[#e5dccd] bg-[#faf8f5] text-[#2b241d] transition-all hover:border-[#c58b2c] hover:bg-white hover:text-[#0e0c0a] shadow-xs"
                title="5,0 ★ no Google (31 avaliações)"
              >
                <GoogleIcon size={16} />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da Dra. Carla Gisele"
                className="grid size-10 place-items-center rounded-lg border border-[#e5dccd] bg-[#faf8f5] text-[#2b241d] transition-all hover:border-[#c58b2c] hover:bg-white hover:text-[#0e0c0a] shadow-xs"
                title={`Instagram ${INSTAGRAM_HANDLE}`}
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                aria-label="Ligar para a Dra. Carla Gisele"
                className="grid size-10 place-items-center rounded-lg border border-[#e5dccd] bg-[#faf8f5] text-[#2b241d] transition-all hover:border-[#c58b2c] hover:bg-white hover:text-[#0e0c0a] shadow-xs"
                title={`Ligar: ${PHONE_DISPLAY}`}
              >
                <Phone size={16} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Dra. Carla Gisele"
                className="grid size-10 place-items-center rounded-lg border border-[#e5dccd] bg-[#faf8f5] text-[#2b241d] transition-all hover:border-[#c58b2c] hover:bg-white hover:text-[#0e0c0a] shadow-xs"
                title="Atendimento no WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Carla Gisele! Gostaria de agendar uma consulta para orientação jurídica sobre meu caso."
                )}
                target="_blank"
                size="sm"
                variant="emerald"
                className="rounded-lg shadow-sm"
              >
                Consulta Jurídica <ArrowUpRight size={14} />
              </GlowingButton>
            </div>

            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="grid size-11 place-items-center rounded-lg border border-[#e5dccd] bg-[#faf8f5] text-[#141210] lg:hidden shadow-xs"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                id="mobile-navigation"
                aria-label="Navegação móvel"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.22 }}
                className="overflow-hidden border-t border-[#e5dccd] bg-white px-6 text-[#141210] lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["A Advogada", "#sobre"],
                    ["Áreas de Atuação", "#atuacao"],
                    ["Por Que Escolher", "#diferenciais"],
                    ["Avaliações (5,0 ★)", "#avaliacoes"],
                    ["Contato & Sede", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm font-medium text-[#2b241d] hover:text-[#c58b2c]"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#0e0c0a] via-[#1a1510] to-[#0e0c0a] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.13em] text-white shadow-md transition-all hover:brightness-105 border border-[#c58b2c]/60"
                      href={getWhatsAppUrl(
                        "Olá, Dra. Carla Gisele! Gostaria de conversar sobre meu caso pelo WhatsApp."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} /> WhatsApp: {PHONE_DISPLAY}
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#e5dccd] bg-[#faf8f5] px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-[#141210] transition-all hover:border-[#c58b2c]"
                      href={GOOGLE_SEARCH_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <GoogleIcon size={15} /> 5,0 ★ no Google (31 avaliações)
                    </a>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section - Imperial Gold, Obsidian Noir & Alabaster Canvas */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-[#e5dccd] bg-gradient-to-b from-white via-[#faf8f5] to-[#f5efe6]"
        >
          {/* Subtle gold and warm ambient lighting aura */}
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[36rem] rounded-full bg-[#c58b2c]/12 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[28rem] rounded-full bg-[#fbb74e]/10 blur-3xl" />

          <div className="mx-auto grid min-h-[640px] max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:min-h-[700px] lg:grid-cols-[1.12fr_0.88fr] lg:gap-12 lg:px-12 lg:py-18 xl:min-h-[740px] xl:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-4"
            >
              <motion.div
                variants={reveal}
                className="mb-5 inline-flex items-center gap-2 rounded-lg border border-[#c58b2c]/40 bg-white px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#833a03] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#c58b2c]" />
                <span>GRADUADA PELA UFMG · ESPINOSA - MG & BELO HORIZONTE</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-[#141210] sm:text-[2.6rem] sm:leading-[1.12] lg:text-[3.25rem] xl:text-[3.45rem]"
              >
                Assessoria jurídica com{" "}
                <span className="font-serif italic text-[#833a03]">
                  extrema competência, clareza e dedicação à sua causa.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-5 max-w-xl text-[15px] leading-7 text-[#2b241d] sm:text-base sm:leading-8"
              >
                Graduada pela prestigiada Faculdade de Direito da{" "}
                <strong className="font-semibold text-[#141210]">Universidade Federal de Minas Gerais (UFMG)</strong>, a{" "}
                <strong className="font-semibold text-[#141210]">Dra. Carla Gisele</strong> alia rigor técnico acadêmico a uma advocacia combativa e acolhedora. Atuação de excelência em{" "}
                <strong className="font-semibold text-[#141210]">Direito Civil, Família e Sucessões, Previdenciário (INSS), Trabalhista e Imobiliário</strong> com sede em Espinosa - MG, presença na capital mineira e consultoria digital em todo o Brasil.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-col items-start gap-3.5 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Carla Gisele! Gostaria de conversar sobre meu caso e tirar dúvidas pelo WhatsApp."
                  )}
                  target="_blank"
                  size="md"
                  variant="emerald"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar no WhatsApp com a Dra. Carla
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 rounded-lg border border-[#e5dccd] bg-white px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#141210] shadow-xs transition-all hover:border-[#c58b2c] hover:bg-[#faf8f5]"
                >
                  Conhecer Áreas de Atuação{" "}
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[#e5dccd] pt-5 text-xs text-[#5c5348]"
              >
                <a
                  href={GOOGLE_SEARCH_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-[#141210] transition-colors hover:text-[#833a03]"
                >
                  <Star size={14} className="fill-[#c58b2c] text-[#c58b2c]" /> 5,0 ★ no Google (31 avaliações)
                </a>
                <span className="inline-flex items-center gap-1.5 font-medium text-[#141210]">
                  <Award size={14} className="text-[#833a03]" /> Formada pela UFMG
                </span>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-[#141210] transition-colors hover:text-[#833a03]"
                >
                  <MapPin size={14} className="text-[#833a03]" /> R. Padre Martin Kirscht · Espinosa - MG
                </a>
              </motion.div>
            </motion.div>

            {/* Hero Visual Presentation - Official Portrait & Authority Badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.95,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-[400px] sm:max-w-[430px] lg:max-w-[460px] xl:max-w-[480px] lg:ml-auto lg:mr-0"
            >
              <div className="relative aspect-[4/4.9] overflow-hidden rounded-2xl border-2 border-[#e5dccd] bg-[#0e0c0a] shadow-xl ring-1 ring-[#c58b2c]/35">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dra. Carla Gisele — Advogada Graduada pela UFMG"
                  fill
                  priority
                  loading="eager"
                  unoptimized
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0e0c0a] via-[#0e0c0a]/85 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3 text-white sm:bottom-6 sm:left-6 sm:right-6">
                  <div>
                    <p className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-white">
                      Dra. Carla Gisele
                    </p>
                    <p className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-[#f3e5c8]">
                      Advogada · Graduada pela UFMG
                    </p>
                    <p className="mt-0.5 text-[11px] text-stone-300">
                      R. Padre Martin Kirscht · Espinosa - MG & Belo Horizonte
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-[#c58b2c]/60 bg-[#0e0c0a]/85 text-[#fdfbf7] backdrop-blur-sm shadow-md">
                    <Scale size={18} className="text-[#fbb74e]" />
                  </span>
                </div>
              </div>

              {/* Floating authority badge */}
              <div className="absolute -left-3 top-4 z-10 rounded-lg border border-[#c58b2c]/40 bg-white/95 px-3 py-1.5 text-[9px] sm:text-[10px] font-bold tracking-[0.14em] text-[#0e0c0a] shadow-md backdrop-blur-md sm:-left-4">
                SEDE EM ESPINOSA · ATENDIMENTO ON-LINE EM TODO O BRASIL
              </div>

              {/* Floating Google 5.0 Star Rating */}
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="group absolute -bottom-4 -right-2 z-10 rounded-xl border border-[#c58b2c]/60 bg-white/95 p-3 shadow-md backdrop-blur-md transition-all hover:border-[#0e0c0a] hover:bg-white sm:-right-4"
              >
                <div className="flex items-center gap-2">
                  <GoogleIcon size={16} />
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-0.5 text-[#c58b2c]">
                      <Star size={12} className="fill-[#c58b2c] text-[#c58b2c]" />
                    </div>
                    <span className="font-serif text-sm font-bold text-[#141210]">
                      5,0
                    </span>
                    <span className="text-[9px] uppercase tracking-wider text-[#833a03]">
                      / 5,0
                    </span>
                  </div>
                </div>
                <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#5c5348]">
                  31 Avaliações no Google (100% 5★)
                </p>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner - Authority Metrics */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-[#e5dccd] bg-white"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              [
                "5,0 ★ no Google",
                "nota máxima comprovada em 31 avaliações destacando competência e confiança",
              ],
              [
                "Graduação UFMG",
                "formação de excelência em uma das faculdades de Direito mais prestigiadas do país",
              ],
              [
                "Extrema Confiança",
                "atendimento transparente, orientações claras e dedicação integral a cada caso",
              ],
              [
                "Espinosa • BH • Brasil",
                "sede na R. Padre Martin Kirscht e assessoria jurídica digital para todo o território nacional",
              ],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-[#e5dccd]"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-xl font-semibold text-[#833a03] sm:text-2xl">
                  {value}
                </span>
                <span className="max-w-[165px] text-[11px] leading-5 text-[#5c5348]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre a Dra. Carla Gisele - Editorial Canvas */}
        <section
          id="sobre"
          className="scroll-mt-24 border-y border-[#e5dccd] bg-[#faf8f5] py-20 text-[#141210] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
            {/* Visual presentation - Lawyer & Logo Composition */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[490px]"
            >
              <div className="relative aspect-[4/4.9] overflow-hidden rounded-2xl border-2 border-[#e5dccd] bg-[#0e0c0a] shadow-2xl ring-1 ring-[#c58b2c]/35">
                <Image
                  src={FOTO_SOBRE_SRC}
                  alt="Dra. Carla Gisele — Advogada"
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c0a]/95 via-[#0e0c0a]/35 to-transparent" />
                
                {/* Central brand emblem inside photo */}
                <div className="absolute top-6 left-6 rounded-lg border border-white/20 bg-white/95 p-2.5 backdrop-blur-md shadow-md">
                  <div className="relative h-[48px] w-[175px]">
                    <Image
                      src={LOGO_SRC}
                      alt="Logo Carla Gisele — Advogada"
                      fill
                      unoptimized
                      sizes="175px"
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="font-cinzel text-xl font-bold tracking-wider text-[#fdfbf7]">
                    CARLA GISELE
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-[#f3e5c8]">
                    Advogada · Graduada pela UFMG · Espinosa - MG
                  </p>
                </div>
              </div>

              {/* Authority badge card */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-[#c58b2c]/60 bg-white px-5 py-4 shadow-xl sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-[#833a03]">
                  <Sparkles size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#833a03]">
                    Graduada pela UFMG
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-[#141210]">
                  Dra. Carla Gisele
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-[#833a03]">
                  Advocacia de Extrema Confiança & Competência
                </p>
                <p className="mt-1 text-[11px] leading-4 text-[#5c5348]">
                  R. Padre Martin Kirscht · Espinosa - MG & Belo Horizonte
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-[#c58b2c]/40 sm:-left-7 sm:-top-7 sm:size-32" />
            </motion.div>

            {/* Story & Biography */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.div
                variants={reveal}
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#c58b2c]/35 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#833a03] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#c58b2c]" />
                <span>SOBRE A DRA. CARLA GISELE</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-[#141210] sm:text-4xl lg:text-[3.25rem]"
              >
                Uma trajetória de rigor técnico, ética inabalável e{" "}
                <span className="italic text-[#833a03]">
                  dedicação genuína à defesa dos seus direitos.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-[#2b241d]"
              >
                Com sede profissional na Rua Padre Martin Kirscht, em{" "}
                <strong className="font-bold text-[#141210]">Espinosa - MG</strong>, e atuação estratégica em Belo Horizonte e em todo o Brasil através de consultoria jurídica digital, a trajetória da{" "}
                <strong className="font-bold text-[#141210]">Dra. Carla Gisele</strong> é pautada na excelência técnica, na transparência absoluta e no compromisso resolutivo.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-[#2b241d]"
              >
                Graduada pela prestigiada Faculdade de Direito da{" "}
                <strong className="font-bold text-[#141210]">Universidade Federal de Minas Gerais (UFMG)</strong> e reconhecida no Google com{" "}
                <strong className="font-bold text-[#141210]">nota máxima 5,0 ★ unânime em 31 avaliações</strong>, a Dra. Carla Gisele destaca-se por sua capacidade de descomplicar o Direito:{" "}
                <em className="text-[#141210]">&ldquo;Advogada dedicada, clara nas orientações e muito eficiente&rdquo;</em>, proporcionando segurança e tranquilidade a cada cliente.
              </motion.p>

              {/* Client Quote Card from real Google Reviews */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-xl border border-[#e5dccd] bg-white p-5 shadow-xs"
              >
                <blockquote className="font-serif text-sm italic leading-relaxed text-[#141210]">
                  &ldquo;Profissional de extrema confiança, competente e experiente. Dedicada e muito clara nas orientações prestadas em cada etapa do processo.&rdquo;
                </blockquote>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-[#833a03]">
                  — Síntese das Avaliações Verificadas no Google Meu Negócio (5,0 ★)
                </p>
              </motion.div>

              {/* Personality & Profile Cards */}
              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-2 gap-3 text-xs sm:grid-cols-3"
              >
                <div className="rounded-lg border border-[#e5dccd] bg-white p-3 shadow-xs">
                  <p className="font-bold text-[#141210]">31 Avaliações 5,0 ★</p>
                  <p className="mt-0.5 text-[11px] text-[#5c5348]">
                    100% de satisfação comprovada no Google
                  </p>
                </div>
                <div className="rounded-lg border border-[#e5dccd] bg-white p-3 shadow-xs">
                  <p className="font-bold text-[#141210]">Graduação UFMG</p>
                  <p className="mt-0.5 text-[11px] text-[#5c5348]">
                    Universidade Federal de Minas Gerais
                  </p>
                </div>
                <div className="rounded-lg border border-[#e5dccd] bg-white p-3 shadow-xs col-span-2 sm:col-span-1">
                  <p className="font-bold text-[#141210]">Clareza & Agilidade</p>
                  <p className="mt-0.5 text-[11px] text-[#5c5348]">
                    Orientações sem juridiquês e atendimento ágil
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-1 gap-2.5 text-xs font-semibold text-[#141210] sm:grid-cols-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#833a03]" />
                  <span>Sede na R. Padre Martin Kirscht · Espinosa - MG</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#833a03]" />
                  <span>Nota máxima 5,0 ★ no Google com 31 avaliações autênticas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#833a03]" />
                  <span>Contato direto pelo WhatsApp com a Dra. Carla Gisele</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#833a03]" />
                  <span>Atendimento presencial em Espinosa e digital para todo o país</span>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Carla Gisele! Gostaria de agendar uma consulta para conversar sobre minha situação jurídica."
                  )}
                  target="_blank"
                  size="md"
                  variant="emerald"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar com a Dra. Carla Gisele
                </GlowingButton>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#141210] transition-colors hover:text-[#833a03]"
                >
                  <Phone size={15} /> {PHONE_DISPLAY}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pilares de Atuação / Áreas de Atuação */}
        <section
          id="atuacao"
          className="scroll-mt-24 border-t border-[#e5dccd] bg-[#f5efe6] py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
            >
              <Heading
                light
                eyebrow="ÁREAS DE ATUAÇÃO JURÍDICA"
                description="Assessoria jurídica multidisciplinar de alta precisão para proteger seu patrimônio, defender seus direitos e garantir soluções eficazes perante a Justiça e órgãos administrativos."
              >
                Especialidades jurídicas para respaldar suas decisões em{" "}
                <span className="italic text-[#833a03]">
                  Espinosa, Belo Horizonte e em todo o Brasil.
                </span>
              </Heading>
              <p className="max-w-[270px] pb-1 text-xs leading-6 text-[#5c5348]">
                Clique em uma especialidade abaixo para conferir o detalhamento completo dos serviços e solicitar uma análise no WhatsApp.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
              className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            >
              {practiceAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.article
                    key={area.id}
                    variants={reveal}
                    className="group flex min-h-[350px] flex-col rounded-xl border border-[#e5dccd] bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#c58b2c] hover:shadow-lg sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-lg border border-[#c58b2c]/35 bg-[#f9f3e5] text-[#833a03] shadow-xs transition-colors group-hover:bg-[#0e0c0a] group-hover:text-[#f3e5c8] group-hover:border-[#c58b2c]">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <span className="font-serif text-2xl text-[#c58b2c]/40">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-md border border-[#c58b2c]/30 bg-[#faf8f5] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#833a03] shadow-xs">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.45rem] leading-tight text-[#141210]">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-6 text-[#5c5348]">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-[#833a03] hover:text-[#141210]"
                    >
                      Ver detalhes e pedidos{" "}
                      <ArrowRight
                        size={14}
                        className="transition-transform group/link:translate-x-1"
                      />
                    </button>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Por Que Escolher a Dra. Carla Gisele - Diferenciais */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-t border-[#e5dccd] bg-[#faf8f5] py-20 text-[#141210] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                light
                eyebrow="EXCELÊNCIA, RIGOR TÉCNICO & RESULTADOS"
                description="O patrimônio da sua família, seus direitos trabalhistas e seus interesses vitais exigem uma advocacia atenta a cada detalhe e verdadeiramente comprometida."
              >
                Por que confiar sua demanda à{" "}
                <span className="italic text-[#833a03]">
                  Dra. Carla Gisele?
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Carla Gisele! Gostaria de consultar sobre meu caso e tirar dúvidas."
                )}
                target="_blank"
                size="md"
                variant="emerald"
                className="rounded-lg shadow-sm"
              >
                <WhatsAppIcon size={16} /> Falar no WhatsApp
              </GlowingButton>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {/* Card 1: Informação Constante & Atendimento Empático */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group flex flex-col justify-between rounded-xl border border-[#e5dccd] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#c58b2c] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#c58b2c]/35 bg-[#f9f3e5] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#833a03]">
                      <HeartHandshake size={14} /> Atendimento Humanizado & Próximo
                    </span>
                    <span className="text-xs font-semibold text-[#833a03]">
                      Você Sempre Informado
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#141210] sm:text-[1.75rem]">
                    Comunicação Transparente e Suporte Acolhedor
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#2b241d]">
                    Como atestam as 31 avaliações 5 estrelas no Google, o grande diferencial do escritório é aliar estratégia jurídica incisiva a uma escuta atenta e orientações claras. Você não fica desamparado nem perdido em termos técnicos difíceis: cada etapa é explicada com total transparência e calma.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-[#141210]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#833a03]" />
                      <span>Comunicação direta pelo WhatsApp com respostas ágeis e acolhedoras</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#833a03]" />
                      <span>Atualizações periódicas sobre prazos, andamentos e decisões judiciais</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#833a03]" />
                      <span>Explicações claras e sem juridiquês para você compreender seus direitos</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#e5dccd] pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Carla Gisele! Gostaria de conversar para tirar dúvidas sobre meu caso."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#c58b2c]/40 bg-[#faf8f5] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#141210] transition-all hover:border-[#c58b2c] hover:bg-[#0e0c0a] hover:text-[#fdfbf7]"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Conversar no WhatsApp com a Dra. Carla
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>

              {/* Card 2: Especialista Estudiosa & Soluções Eficientes */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="group flex flex-col justify-between rounded-xl border border-[#e5dccd] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#c58b2c] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#c58b2c]/40 bg-[#faf8f5] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#5a2606]">
                      <Award size={14} /> Rigor Técnico & Solidez UFMG
                    </span>
                    <span className="text-xs font-semibold text-[#833a03]">
                      Soluções Estratégicas
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#141210] sm:text-[1.75rem]">
                    Estratégia Personalizada para a Realidade do Seu Caso
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#2b241d]">
                    Cada cliente e família possui uma realidade singular. Não aplicamos fórmulas prontas: analisamos a fundo documentos, contratos e provas materiais para construir a rota jurídica mais rápida, segura e financeiramente vantajosa.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-[#141210]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#833a03]" />
                      <span>Formação acadêmica de excelência pela Faculdade de Direito da UFMG</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#833a03]" />
                      <span>Atuação preventiva estratégica para evitar litígios desnecessários e custos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#833a03]" />
                      <span>Combatividade judicial firme para defender seu patrimônio e seus direitos</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#e5dccd] pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Carla Gisele! Gostaria de consultar sobre a melhor estratégia jurídica para o meu caso."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#c58b2c]/40 bg-[#faf8f5] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#141210] transition-all hover:border-[#c58b2c] hover:bg-[#0e0c0a] hover:text-[#fdfbf7]"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Consultar Estratégia no WhatsApp
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Método de Trabalho em 3 Passos */}
        <section className="relative overflow-hidden border-t border-[#e5dccd] bg-[#faf8f5] py-20 text-[#141210] sm:py-24 lg:py-28">
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-[#c58b2c]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-[#fbb74e]/10 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                light
                eyebrow="COMO ATUAMOS NO SEU CASO"
                description="Um método transparente, ético e resolutivo para analisar sua demanda jurídica e aplicar a solução mais rápida e vantajosa."
              >
                Três etapas claras para{" "}
                <span className="italic text-[#833a03]">
                  proteger seus direitos e garantir a tranquilidade que você merece.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-[#e5dccd] bg-white p-6 font-serif text-base italic leading-7 text-[#141210] shadow-xs">
                &ldquo;Nosso compromisso é exercer uma advocacia de extrema confiança, técnica apurada e atendimento próximo, garantindo que você tenha clareza absoluta sobre cada passo e sinta a segurança de estar muito bem representado.&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-[#833a03]">
                  — Dra. Carla Gisele · Advogada (UFMG)
                </footer>
              </blockquote>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-[#e5dccd]"
            >
              {[
                [
                  "01",
                  "Escuta Atenta & Diagnóstico Documental Preciso",
                  "Atendimento presencial na sede em Espinosa ou via WhatsApp/chamada de vídeo para examinar documentos, contratos e a realidade fática do seu caso.",
                ],
                [
                  "02",
                  "Definição da Rota Estratégica Mais Eficaz",
                  "Planejamento personalizado com cálculo de riscos, avaliação de alternativas extrajudiciais mais ágeis e estruturação robusta para a via judicial, se necessária.",
                ],
                [
                  "03",
                  "Atuação Firme, Presença Contínua & Retorno Ágil",
                  "Protocolo imediato, acompanhamento constante perante juizados, cartórios e tribunais, mantendo você atualizado sobre cada andamento sem burocracia.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-semibold text-[#833a03]">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-[#141210]">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-[#2b241d]">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Avaliações / Depoimentos Reais no Google Meu Negócio (31 Avaliações 5,0 ★) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 border-t border-[#c58b2c]/25 bg-[#f5efe6] py-20 text-[#141210] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                light
                eyebrow="PROVA SOCIAL VERIFICADA · GOOGLE MEU NEGÓCIO"
                description="Veja depoimentos autênticos e espontâneos de clientes sobre a competência, a dedicação e os resultados alcançados pela Dra. Carla Gisele em Espinosa - MG."
              >
                Avaliada com nota máxima 5,0 ★ com{" "}
                <span className="italic text-[#833a03]">
                  31 avaliações no Google pela competência, extrema confiança e excelência.
                </span>
              </Heading>

              {/* Verified Google Badge Card */}
              <div className="flex flex-col gap-3 rounded-xl border border-[#e5dccd] bg-white p-5 shadow-xs sm:flex-row sm:items-center md:min-w-[340px]">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-lg border border-[#c58b2c]/30 bg-[#faf8f5] shadow-xs">
                  <GoogleIcon size={30} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-3xl font-bold leading-none text-[#141210]">
                      5,0
                    </span>
                    <div className="flex gap-0.5 text-[#c58b2c]">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-[#c58b2c] text-[#c58b2c]"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#2b241d]">
                    Carla Gisele — Advogada
                  </p>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-[#833a03] transition-colors hover:text-[#141210]"
                  >
                    31 avaliações no Google (100% 5★) <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Client Reviews Grid */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clientReviews.map((review) => (
                <article
                  key={review.name}
                  className="group relative flex flex-col justify-between rounded-xl border border-[#e5dccd] bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#c58b2c] hover:shadow-md sm:p-8"
                >
                  <div>
                    {/* Header: Stars + Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-1 text-[#c58b2c]">
                        {Array.from({ length: review.rating }, (_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-[#c58b2c] text-[#c58b2c]"
                          />
                        ))}
                      </div>
                      <span className="rounded-md border border-[#c58b2c]/30 bg-[#faf8f5] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#833a03] shadow-xs">
                        {review.badge}
                      </span>
                    </div>

                    {/* Review content */}
                    <p className="mt-5 text-[14px] italic leading-relaxed text-[#141210]">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  {/* Reviewer info */}
                  <div className="mt-6 flex items-center gap-3 border-t border-[#e5dccd] pt-4">
                    <div className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#c58b2c]/35 bg-[#f9f3e5] font-serif text-sm font-semibold text-[#833a03] shadow-xs">
                      {review.name.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-serif text-base font-semibold text-[#141210]">
                        {review.name}
                      </p>
                      <p className="text-[10px] uppercase tracking-wider text-[#5c5348]">
                        {review.reviewerTag}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom Actions and Trust Tags */}
            <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-[#e5dccd] pt-8 sm:flex-row">
              <div className="flex flex-wrap items-center gap-2">
                {[
                  "Advogada em Espinosa - MG",
                  "Graduada pela UFMG",
                  "Nota 5,0 ★ no Google (31 avaliações)",
                  "Direito de Família & Sucessões",
                  "Direito Previdenciário & INSS",
                  "Direito Imobiliário & Contratos",
                  "Direito do Trabalho & Consumidor",
                  "Atendimento Digital para Todo o Brasil",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#e5dccd] bg-white px-3.5 py-1.5 text-[11px] font-medium text-[#141210] shadow-xs"
                  >
                    <CheckCircle2 size={13} className="text-[#833a03]" />
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#833a03] transition-colors hover:text-[#141210]"
              >
                Ver Todas as 31 Avaliações no Google{" "}
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Contato & Localização da Sede em Espinosa - MG */}
        <section
          id="contato"
          className="scroll-mt-24 border-t border-[#c58b2c]/25 bg-[#faf8f5] py-20 text-[#141210] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                light
                eyebrow="CONTATO & ATENDIMENTO EM ESPINOSA"
                description="Agende uma consulta presencial em nosso escritório na R. Padre Martin Kirscht ou inicie seu atendimento imediatamente pelo WhatsApp para examinar seu caso com sigilo, agilidade e segurança."
              >
                Estamos prontos para{" "}
                <span className="italic text-[#833a03]">
                  analisar sua demanda e defender seus direitos com excelência.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Carla Gisele! Gostaria de agendar um atendimento para análise jurídica do meu caso."
                  )}
                  target="_blank"
                  size="lg"
                  variant="emerald"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} /> Iniciar Conversa no WhatsApp
                </GlowingButton>
                <p className="text-[11px] leading-5 text-[#2b241d]">
                  Telefone e WhatsApp direto:{" "}
                  <strong className="text-[#141210]">{PHONE_DISPLAY}</strong>
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-[#2b241d]">
                <div className="flex items-start gap-3">
                  <Clock
                    size={16}
                    className="mt-0.5 shrink-0 text-[#833a03]"
                  />
                  <div>
                    <p className="font-semibold text-[#141210]">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-[#141210]">
                      Segunda a Sexta-feira a partir das 08:00
                    </p>
                    <p className="text-[11px] text-[#5c5348]">
                      Atendimento presencial em Espinosa - MG e consultoria online em todo o Brasil
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#833a03]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-medium text-[#141210] transition-colors hover:text-[#833a03]"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#833a03]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#833a03] text-[#141210]"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#833a03]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="transition-colors hover:text-[#833a03] text-[#141210]"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#833a03]"
                  />
                  <div>
                    <span className="text-[#141210]">{ADDRESS_TEXT}</span>
                    <br />
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex items-center gap-1 font-semibold text-[#833a03] hover:underline"
                    >
                      Ver no Google Maps <ArrowUpRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Card with executive presentation */}
            <div className="relative overflow-hidden rounded-xl border border-[#e5dccd] bg-white p-7 shadow-sm sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#833a03] via-[#c58b2c] to-[#fbb74e]" />

              <div className="flex flex-col gap-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#833a03]">
                  Sede do Escritório em Espinosa - MG
                </p>
                <div className="relative h-[68px] w-[280px] sm:h-[78px] sm:w-[340px]">
                  <Image
                    src={LOGO_SRC}
                    alt="Carla Gisele — Advogada"
                    fill
                    unoptimized
                    sizes="340px"
                    className="object-contain object-left"
                  />
                </div>
              </div>

              {/* Office presentation photo */}
              <div className="relative mt-5 aspect-[16/10] w-full overflow-hidden rounded-lg border border-[#e5dccd] bg-[#0e0c0a] shadow-xs">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Espaço de Atendimento da Dra. Carla Gisele em Espinosa - MG"
                  fill
                  unoptimized
                  className="object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent p-4 text-white">
                  <p className="text-xs font-semibold">Ambiente Executivo, Acolhedor e Moderno</p>
                  <p className="text-[10px] text-stone-200">{ADDRESS_TEXT}</p>
                </div>
              </div>

              <address className="mt-6 max-w-md text-[14px] not-italic leading-7 text-[#2b241d]">
                <strong className="font-semibold text-[#141210]">
                  Carla Gisele — Advogada
                </strong>
                <br />
                {LAWYER_TITLE}
                <br />
                Atendimento presencial em Espinosa e online para todo o Brasil
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-lg border border-[#e5dccd] bg-[#faf8f5] p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#833a03]">
                  Atendimento & Horários
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-[#2b241d]">
                  <span>Segunda a Sexta</span>
                  <span className="text-right font-semibold text-[#141210]">
                    Abre às 08:00
                  </span>
                  <span>Atendimento Presencial</span>
                  <span className="text-right font-medium text-[#833a03]">
                    Espinosa - MG
                  </span>
                  <span>Endereço</span>
                  <span className="text-right text-[#141210]">R. Padre Martin Kirscht</span>
                  <span>Avaliações Google</span>
                  <span className="text-right font-semibold text-[#833a03]">5,0 ★ (31 avaliações)</span>
                  <span>Atendimento Digital</span>
                  <span className="text-right text-[#141210]">Belo Horizonte & Todo o Brasil</span>
                </div>
              </div>

              <div className="my-7 h-px bg-[#e5dccd]" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-[#5c5348]">
                  Atendimento humanizado, ético e com absoluto sigilo profissional
                </p>
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Carla Gisele! Gostaria de agendar um atendimento no escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#c58b2c]/40 bg-[#f5efe6] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#141210] transition-colors hover:border-[#c58b2c] hover:bg-[#0e0c0a] hover:text-[#fdfbf7]"
                >
                  <WhatsAppIcon size={14} /> Falar no WhatsApp <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip */}
        <section className="border-t border-[#c58b2c]/25 bg-gradient-to-r from-[#f5efe6] via-[#faf8f5] to-[#f5efe6] px-5 py-14 text-[#141210] shadow-xs sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#833a03]">
                <Sparkles size={13} /> CARLA GISELE — ADVOCACIA DE EXCELÊNCIA · UFMG
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-[#141210] sm:text-4xl">
                Precisa de uma advogada competente, experiente e de confiança para defender seus direitos?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dra. Carla Gisele! Gostaria de uma avaliação jurídica para o meu caso."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-lg bg-gradient-to-r from-[#0e0c0a] via-[#1a1510] to-[#0e0c0a] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#fdfbf7] shadow-md transition-all hover:-translate-y-0.5 hover:brightness-105 hover:shadow-lg border border-[#c58b2c]/60 hover:border-[#fbb74e]"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp{" "}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* Footer - Elegant Light Luxury */}
        <footer className="border-t border-[#e5dccd] bg-[#f5efe6] px-5 py-14 text-[#141210] sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <a
                href="#inicio"
                aria-label="Carla Gisele — Advogada"
                className="inline-block transition-transform hover:scale-[1.01]"
              >
                <div className="relative h-[78px] w-[300px] sm:h-[95px] sm:w-[360px]">
                  <Image
                    src={LOGO_SRC}
                    alt="Carla Gisele — Advogada"
                    fill
                    unoptimized
                    sizes="360px"
                    className="object-contain object-left"
                  />
                </div>
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-[#5c5348]">
                ⚖️ Advocacia pautada na extrema competência, ética e dedicação. Formação pela Universidade Federal de Minas Gerais (UFMG). Atuação estratégica em Direito Civil, Família e Sucessões, Previdenciário (INSS), Trabalhista e Imobiliário em Espinosa - MG, Belo Horizonte e online para todo o Brasil.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-[#833a03]">
                Dra. Carla Gisele — Advogada | OAB/MG
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#833a03]">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-[#5c5348]">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  A Advogada
                </a>
                <a className="footer-link" href="#atuacao">
                  Áreas de Atuação
                </a>
                <a className="footer-link" href="#diferenciais">
                  Por Que Escolher
                </a>
                <a className="footer-link" href="#avaliacoes">
                  Avaliações de Clientes (5,0 ★)
                </a>
                <a className="footer-link" href="#contato">
                  Contato & Sede
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#833a03]">
                Contato & Atendimento
              </h2>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-[#5c5348]">
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Carla Gisele! Gostaria de tirar dúvidas com o escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 font-medium text-[#141210]"
                >
                  <WhatsAppIcon size={15} /> WhatsApp: {PHONE_DISPLAY}
                </a>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="footer-link inline-flex items-center gap-2"
                >
                  <Phone size={15} className="shrink-0" /> Telefone: {PHONE_DISPLAY}
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2"
                >
                  <InstagramIcon size={15} className="shrink-0" /> Instagram: {INSTAGRAM_HANDLE}
                </a>
                <a
                  href={`mailto:${EMAIL_CONTACT}`}
                  className="footer-link inline-flex items-center gap-2"
                >
                  <Mail size={15} className="shrink-0" /> {EMAIL_CONTACT}
                </a>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-start gap-2"
                >
                  <MapPin size={15} className="mt-0.5 shrink-0" />
                  <span>{ADDRESS_TEXT}</span>
                </a>
                <p className="inline-flex items-center gap-2 pt-1 text-[11px] text-[#833a03]">
                  <Clock size={14} className="shrink-0" /> Seg a Sex: Abre às 08:00
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-[#e5dccd] pt-6 text-[10px] text-stone-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} CARLA GISELE — ADVOGADA. Todos os direitos reservados.
            </p>
            <p>
              Conteúdo informativo, em estrita conformidade com o Código de Ética e Disciplina da OAB.
            </p>
          </div>
        </footer>

        {/* Floating WhatsApp Quick Action Button */}
        <aside
          aria-label="Acesso rápido WhatsApp"
          className="fixed bottom-6 right-6 z-50"
        >
          <a
            href={getWhatsAppUrl(
              "Olá, Dra. Carla Gisele! Gostaria de consultar sobre meu caso e tirar dúvidas pelo WhatsApp."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Dra. Carla Gisele"
            className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          >
            <WhatsAppIcon size={28} />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-[#0e0c0a] border border-[#c58b2c]/40 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg transition-opacity group-hover:block">
              Falar com Dra. Carla Gisele
            </span>
          </a>
        </aside>

        {/* Modal de Detalhes da Área de Atuação */}
        <AnimatePresence>
          {activeArea && (
            <motion.div
              className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArea(null)}
            >
              <motion.section
                role="dialog"
                aria-modal="true"
                aria-labelledby="area-dialog-title"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.99 }}
                transition={{ duration: 0.24 }}
                onClick={(event) => event.stopPropagation()}
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-xl border border-[#e5dccd] bg-white p-7 shadow-2xl sm:max-w-xl sm:rounded-xl sm:p-10 text-[#141210]"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-[#e5dccd] bg-[#faf8f5] text-[#141210] transition-colors hover:border-[#c58b2c] hover:text-[#833a03]"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-3 pr-12">
                  <div className="relative size-10 shrink-0 overflow-hidden rounded-lg border border-[#c58b2c]/35 bg-[#faf8f5] p-1 shadow-xs">
                    <Image
                      src={LOGO_SYMBOL_SRC}
                      alt="Balança Dourada Carla Gisele"
                      fill
                      sizes="40px"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="eyebrow-light">ÁREA DE ATUAÇÃO</p>
                    <p className="text-[10px] font-semibold tracking-wider text-[#833a03] uppercase">
                      {LAWYER_NAME} · {LAWYER_TITLE}
                    </p>
                  </div>
                </div>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-serif text-3xl leading-tight text-[#141210] sm:text-4xl"
                >
                  {activeArea.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-[#2b241d]">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-[#e5dccd] pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#833a03]">
                    Demandas e Serviços Atendidos pelo Escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-[#1e293b]"
                      >
                        <span className="size-2 shrink-0 rounded-full bg-[#c58b2c]" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <GlowingButton
                    href={getWhatsAppUrl(activeArea.whatsAppText)}
                    target="_blank"
                    size="md"
                    variant="emerald"
                    className="rounded-lg shadow-md"
                  >
                    <WhatsAppIcon size={16} /> Consultar sobre esta demanda
                  </GlowingButton>
                  <button
                    type="button"
                    onClick={() => setActiveArea(null)}
                    className="px-5 py-3 text-xs font-semibold text-stone-500 transition-colors hover:text-[#141210]"
                  >
                    Fechar
                  </button>
                </div>
              </motion.section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </MotionConfig>
  );
}
