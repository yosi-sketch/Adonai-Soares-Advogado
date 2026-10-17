"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type Variants, MotionConfig } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Briefcase,
  CheckCircle2,
  Clock,
  FileText,
  HeartHandshake,
  Landmark,
  Mail,
  MapPin,
  Menu,
  Phone,
  Scale,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5531975772112";
const PHONE_DISPLAY = "(31) 97577-2112";
const EMAIL_CONTACT = "contato@jaquelinesoares.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/adv.jaquelinesoaress/";
const INSTAGRAM_HANDLE = "@adv.jaquelinesoaress";

const ADDRESS_TEXT =
  "R. Timbiras, 150 - Bela Vista, Lagoa Santa - MG, 33239-314, Brasil";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Jaqueline+Soares+Advogada+Rua+Timbiras+150+Lagoa+Santa+MG";

const LOGO_SEAL_SRC = "/logo-seal.png";
const LOGO_FULL_SRC = "/logo.png";
const FOTO_HERO_SRC = "/jaqueline-soares-hero.png";
const FOTO_SOBRE_SRC = "/jaqueline-soares-sobre.png";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Jaqueline Soares! Gostaria de consultar sobre meus direitos e agendar um atendimento no escritório.";
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
    id: "direito-de-familia-sucessoes-lagoa-santa",
    title: "Direito de Família & Sucessões",
    icon: Users,
    tag: "Divórcio · Guarda · Alimentos · Inventário & Partilha",
    summary:
      "Acolhimento sensível e proteção jurídica integral para resguardar seus filhos, seu patrimônio e a harmonia familiar em momentos delicados.",
    details:
      "A Dra. Jaqueline Soares conduz causas de família com empatia, discrição e firmeza técnica. Atuamos em divórcios consensuais e litigiosos, fixação e revisão de pensão alimentícia, guarda compartilhada, partilha criteriosa de patrimônio, inventários rápidos em cartório e judiciais, sempre buscando soluções equilibradas e seguras.",
    topics: [
      "Divórcio Consensual em Cartório (rápido e desburocratizado) e Divórcio Litigioso",
      "Fixação, Revisional e Execução de Pensão Alimentícia com cobrança ágil",
      "Guarda Compartilhada, Regime de Convivência e Alienação Parental",
      "Inventário Extrajudicial em Cartório e Inventário Judicial com partilha justa de bens",
      "Reconhecimento e Dissolução de União Estável com meação e proteção de direitos",
      "Planejamento Sucessório, Doações em Vida e Testamentos patrimoniais",
    ],
    whatsAppText:
      "Olá, Dra. Jaqueline Soares! Gostaria de consultar sobre uma questão de Direito de Família / Inventário.",
  },
  {
    id: "direito-civel-indenizacoes-lagoa-santa",
    title: "Direito Cível & Responsabilidade Civil",
    icon: Scale,
    tag: "Indenizações · Danos Morais · Cobranças · Disputas Cíveis",
    summary:
      "Defesa contundente dos seus interesses patrimoniais e morais, com foco na reparação integral de danos e resolução rápida de litígios.",
    details:
      "Atuação minuciosa e estratégica em ações de cobrança judicial e extrajudicial, execução de títulos, reparações por perdas e danos, indenizações decorrentes de ilícitos contratuais ou extracontratuais, ações de despejo, rescisões e regularização de imóveis perante cartórios e órgãos públicos.",
    topics: [
      "Ações indenizatórias por Danos Morais, Materiais e Danos Estéticos",
      "Cobrança extrajudicial e judicial de títulos, notas promissórias e créditos devidos",
      "Ações possessórias, reintegração de posse, usucapião e litígios imobiliários",
      "Ações de despejo, rescisões de contratos de aluguel e cobrança de aluguéis",
      "Embargos à Execução e defesa patrimonial contra penhoras ilegais",
      "Mediação de conflitos e acordos extrajudiciais seguros",
    ],
    whatsAppText:
      "Olá, Dra. Jaqueline Soares! Gostaria de uma assessoria jurídica na área Cível / Indenizações.",
  },
  {
    id: "direito-do-consumidor-defesa-bancaria",
    title: "Direito do Consumidor & Defesa Bancária",
    icon: ShieldCheck,
    tag: "SPC/Serasa · Golpes Bancários · Empréstimos · Planos de Saúde",
    summary:
      "Defesa firme contra arbitrariedades financeiras, negativações indevidas, fraudes em empréstimos e abusos praticados por grandes empresas.",
    details:
      "Combatemos com agilidade fraudes bancárias (golpe do Pix, consignados não contratados), negativações ilegais no SPC e Serasa com pedido de liminar e indenização por danos morais, cancelamento de planos de saúde abusivos e exigência de tratamentos médicos essenciais negados.",
    topics: [
      "Liminar urgente para retirada do nome do SPC/Serasa e indenização por dano moral",
      "Ações contra fraudes em empréstimos consignados, cartões de crédito e fraudes Pix",
      "Ações contra planos de saúde por negativa indevida de cirurgias, remédios e exames",
      "Revisão de contratos com juros abusivos, tarifas ilegais e vendas casadas",
      "Indenizações por atraso ou cancelamento de voos e extravio de bagagens",
      "Devolução em dobro de quantias cobradas indevidamente de consumidores",
    ],
    whatsAppText:
      "Olá, Dra. Jaqueline Soares! Gostaria de consultar sobre problemas com consumidor, banco ou negativação indevida.",
  },
  {
    id: "direito-do-trabalho-lagoa-santa",
    title: "Direito Trabalhista & Defesa do Trabalhador",
    icon: Briefcase,
    tag: "Rescisão · Horas Extras · Insalubridade · Acidente de Trabalho",
    summary:
      "Atuação combativa para assegurar o pagamento integral de todas as verbas rescisórias, adicionais de risco e direitos sonegados pelo empregador.",
    details:
      "Análise profunda de contratos, holerites e cartões de ponto para recuperar direitos violados. Atuamos com rigor no cálculo de horas extras, adicionais de insalubridade e periculosidade, rescisão indireta quando o empregador descumpre obrigações, e indenizações por assédio moral ou acidente no trabalho.",
    topics: [
      "Cobrança integral de verbas rescisórias, aviso prévio e multas da CLT (arts. 467 e 477)",
      "Rescisão Indireta por atraso salarial, falta de recolhimento de FGTS ou assédio moral",
      "Cálculo e cobrança de Horas Extras, intervalo intrajornada suprimido e adicional noturno",
      "Adicionais de Insalubridade e Periculosidade para funções expostas a riscos",
      "Reconhecimento de vínculo de emprego sem carteira assinada e liberação de FGTS",
      "Indenização por Acidente de Trabalho, doença profissional e garantia de estabilidade",
    ],
    whatsAppText:
      "Olá, Dra. Jaqueline Soares! Gostaria de consultar sobre meus direitos trabalhistas com seu escritório.",
  },
  {
    id: "direito-previdenciario-inss-lagoa-santa",
    title: "Direito Previdenciário (INSS) & BPC/LOAS",
    icon: Landmark,
    tag: "Aposentadorias · Auxílio-Doença · BPC LOAS · Planejamento",
    summary:
      "Reversão de negativas do INSS, concessão de aposentadorias mais vantajosas e amparo a pessoas com deficiência e idosos.",
    details:
      "Planejamento previdenciário minucioso para conquistar o melhor benefício sem atrasos. Ajuizamos ações para restabelecer auxílio-doença cortado indevidamente, conversão em aposentadoria por invalidez, concessão de BPC/LOAS de 1 salário mínimo e cobrança de retroativos acumulados.",
    topics: [
      "Aposentadoria por Idade Urbana/Rural e aplicação da Regra de Transição mais vantajosa",
      "Planejamento Previdenciário completo com retificação e acertos no CNIS",
      "Ação contra negativa de Benefício por Incapacidade Temporária (Auxílio-Doença)",
      "BPC/LOAS para idosos (65+) e pessoas com deficiência em situação de vulnerabilidade",
      "Pensão por Morte para viúvos(as) e dependentes com retroativos desde o óbito",
      "Cobrança de parcelas atrasadas e correção monetária desde a data do primeiro pedido",
    ],
    whatsAppText:
      "Olá, Dra. Jaqueline Soares! Gostaria de auxílio para requerer aposentadoria ou benefício no INSS.",
  },
  {
    id: "consultoria-contratos-extrajudicial",
    title: "Elaboração de Contratos & Assessoria Preventiva",
    icon: FileText,
    tag: "Contratos · Blindagem Jurídica · Notificações · Pareceres",
    summary:
      "Segurança jurídica e tranquilidade em seus negócios através de contratos bem estruturados, pareceres claros e negociações preventivas.",
    details:
      "Redação personalizada e revisão técnica de contratos de compra e venda imobiliária, locação residencial e empresarial, prestação de serviços e distratos. Notificações extrajudiciais formais para constituir devedores em mora e evitar ações judiciais onerosas e prolongadas.",
    topics: [
      "Elaboração e revisão minuciosa de Contratos de Compra e Venda de Imóveis",
      "Contratos de Locação residencial e comercial com cláusulas protetivas seguras",
      "Contratos de Prestação de Serviços para profissionais autônomos e empresas",
      "Notificações Extrajudiciais com fundamentação legal e valor probatório",
      "Análise de riscos contratuais e prevenção de litígios judiciais",
      "Renegociação de débitos e elaboração de termos de confissão e quitação",
    ],
    whatsAppText:
      "Olá, Dra. Jaqueline Soares! Gostaria de assessoria na elaboração ou revisão de contratos.",
  },
];

const clientReviews = [
  {
    name: "Eric Batista",
    reviewsCount: "Avaliação no Google",
    badge: "Ética Constitucional & Confiança",
    content:
      "Ótima Advogada, séria competente e extremamente responsável… Pode confiar pois ela é sim uma advogada que respeita a constituição e sempre dará o melhor para ter êxito nos seus processos… 5 estrelas é pouco perto do que ela merece… Confio de olhos vendados!",
  },
  {
    name: "Luciana Carolina",
    reviewsCount: "4 avaliações no Google",
    badge: "Segurança & Paciência",
    content:
      "Excelente profissional! Uma advogada extremamente competente, dedicada e responsável. Sempre muito atenciosa, esclarece todas as dúvidas com muita paciência e transmite muita segurança durante todo o atendimento. É nítido o quanto ela ama o que faz.",
  },
  {
    name: "Maria Eduarda Henrique",
    reviewsCount: "2 avaliações no Google",
    badge: "Acolhimento & Clareza",
    content:
      "A Dra. Jaqueline oferece um atendimento excepcional. Muito atenciosa, cuidadosa e prestativa, transmite segurança e acolhimento em cada consulta. Explica tudo com clareza, demonstra grande profissionalismo e realmente se preocupa com o bem-estar dos clientes. Recomendo de olhos fechados!",
  },
  {
    name: "Daniela Luiza",
    reviewsCount: "9 avaliações · 3 fotos",
    badge: "Agilidade & Inteligência",
    content:
      "Ótima advogada! Agilidade, atenção, muito inteligente, um amor de pessoa! Agradeço a Deus por ter colocado ela na minha vida 🙌🏽",
  },
  {
    name: "Naysa Abreu",
    reviewsCount: "13 avaliações · 5 fotos",
    badge: "Referência no Vetor Norte",
    content:
      "A melhor do vetor norte!",
  },
  {
    name: "Catiulcia Falconi",
    reviewsCount: "4 avaliações no Google",
    badge: "Apoio nos Momentos Difíceis",
    content:
      "Uma grande profissional, pessoa extremamente dedicada e nos passa segurança nos momentos mais difíceis.",
  },
  {
    name: "Cristiane Durso",
    reviewsCount: "6 avaliações no Google",
    badge: "Ética & Proatividade",
    content:
      "Excelente profissional, muito ética, educada, dedicada, atenciosa, proativa, super recomendo.",
  },
  {
    name: "Paula Matildes",
    reviewsCount: "Avaliação no Google",
    badge: "Eficiência & Dedicação",
    content:
      "A Dra Jaqueline tem me mostrado muita eficiência no seu trabalho, excelente advogada! Ela é muito competente, atenciosa e dedicada. Recomendo pelo profissionalismo e pelo ótimo atendimento.",
  },
  {
    name: "Nay Abreu",
    reviewsCount: "Local Guide · 117 avaliações",
    badge: "Local Guide Verificado",
    content:
      "Muito atenciosa e competente.",
  },
  {
    name: "Maisa Nunes",
    reviewsCount: "9 avaliações · 4 fotos",
    badge: "Excelência & Responsabilidade",
    content:
      "Muita competência. Atendimento de muita excelência e responsabilidade.",
  },
  {
    name: "Laura Luiza",
    reviewsCount: "3 avaliações no Google",
    badge: "A Melhor Encontrada",
    content:
      "A melhor que eu já encontrei! Obrigada por tudo, dra!!",
  },
  {
    name: "Aliny Mtek",
    reviewsCount: "Avaliação no Google",
    badge: "Comprometimento Sério",
    content:
      "Super indico, profissional séria e comprometida.",
  },
  {
    name: "Laís Stefany Paixão Soares",
    reviewsCount: "Avaliação no Google",
    badge: "Educação & Respeito",
    content:
      "Ótima!!! Educação e respeito sempre presente, e por mim é o que mais vale.",
  },
  {
    name: "Fabianohvf Henrique",
    reviewsCount: "2 avaliações · 18 fotos",
    badge: "Profissional Excelente",
    content:
      "Excelente profissional 👏",
  },
];

function Heading({
  eyebrow,
  children,
  description,
  light = false,
}: {
  eyebrow: string;
  children: React.ReactNode;
  description?: string;
  light?: boolean;
}) {
  return (
    <div>
      <p className={light ? "eyebrow-light" : "eyebrow"}>{eyebrow}</p>
      <h2
        className={
          light
            ? "mt-4 font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-[#140e04] sm:text-4xl lg:text-[3.25rem]"
            : "mt-4 font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-white sm:text-4xl lg:text-[3.25rem]"
        }
      >
        {children}
      </h2>
      {description && (
        <p
          className={
            light
              ? "mt-4 text-[15px] leading-7 text-[#4a3b2c]"
              : "mt-4 text-[15px] leading-7 text-[#dcd6cb]"
          }
        >
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
      <main className="overflow-hidden bg-[#08080a] text-[#fbfaf7] selection:bg-[#dfb76c] selection:text-[#08080a]">
        {/* Navigation Bar - Refined Royal Gold & Obsidian Canvas */}
        <header className="sticky top-0 z-40 border-b border-[#dfb76c]/20 bg-[#08080a]/95 backdrop-blur-xl">
          <div className="mx-auto flex h-[96px] max-w-7xl items-center justify-between gap-6 px-5 sm:h-[108px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Jaqueline Soares — Escritório de Advocacia"
              onClick={closeMenu}
              className="flex items-center gap-3.5 transition-opacity hover:opacity-90"
            >
              <div className="relative size-[60px] shrink-0 overflow-hidden rounded-full border-2 border-[#dfb76c]/60 bg-[#0c0c10] shadow-md sm:size-[72px]">
                <Image
                  src={LOGO_SEAL_SRC}
                  alt="Selo Oficial Jaqueline Soares Advocacia"
                  fill
                  priority
                  sizes="72px"
                  className="object-contain p-1"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-lg font-bold tracking-wider text-white sm:text-xl lg:text-2xl">
                  JAQUELINE SOARES
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#dfb76c] sm:text-xs">
                  Advocacia & Consultoria
                </span>
              </div>
            </a>

            <nav
              aria-label="Navegação principal"
              className="hidden items-center gap-7 lg:flex"
            >
              <a className="nav-link" href="#inicio">
                Início
              </a>
              <a className="nav-link" href="#sobre">
                Dra. Jaqueline Soares
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
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da Dra. Jaqueline Soares"
                className="grid size-10 place-items-center rounded-lg border border-[#dfb76c]/30 bg-[#121216] text-[#fdefb4] transition-all hover:border-[#f4c87b] hover:bg-[#1c1c24] hover:text-white"
                title={`Instagram ${INSTAGRAM_HANDLE}`}
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                aria-label="Ligar para Jaqueline Soares Advogada"
                className="grid size-10 place-items-center rounded-lg border border-[#dfb76c]/30 bg-[#121216] text-[#fdefb4] transition-all hover:border-[#f4c87b] hover:bg-[#1c1c24] hover:text-white"
                title={`Ligar: ${PHONE_DISPLAY}`}
              >
                <Phone size={16} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Dra. Jaqueline Soares"
                className="grid size-10 place-items-center rounded-lg border border-[#dfb76c]/30 bg-[#121216] text-[#fdefb4] transition-all hover:border-[#f4c87b] hover:bg-[#1c1c24] hover:text-white"
                title="Atendimento no WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Jaqueline Soares! Gostaria de consultar sobre meus direitos e agendar uma consulta."
                )}
                target="_blank"
                size="sm"
                variant="gold"
                className="rounded-lg shadow-sm"
              >
                Consultar Direitos <ArrowUpRight size={14} />
              </GlowingButton>
            </div>

            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="grid size-11 place-items-center rounded-lg border border-[#dfb76c]/30 bg-[#121216] text-[#fdefb4] lg:hidden"
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
                className="overflow-hidden border-t border-[#dfb76c]/20 bg-[#08080a] px-6 lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["Dra. Jaqueline Soares", "#sobre"],
                    ["Áreas de Atuação", "#atuacao"],
                    ["Por Que Escolher", "#diferenciais"],
                    ["Avaliações no Google (5,0 ★)", "#avaliacoes"],
                    ["Contato & Sede", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm font-medium text-stone-200 hover:text-[#dfb76c]"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#c59b48] via-[#f4c87b] to-[#c59b48] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.13em] text-[#140e04] shadow-md transition-all hover:brightness-105"
                      href={getWhatsAppUrl(
                        "Olá, Dra. Jaqueline Soares! Gostaria de consultar sobre o meu caso."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} /> WhatsApp: {PHONE_DISPLAY}
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#dfb76c]/30 bg-[#121216] px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-[#fdefb4] transition-all hover:border-[#f4c87b]"
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <InstagramIcon size={15} /> Instagram: {INSTAGRAM_HANDLE}
                    </a>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section - High Prestige Gold & Obsidian Tone */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-[#dfb76c]/20 bg-gradient-to-b from-[#08080a] via-[#101014] to-[#15151a]"
        >
          {/* Subtle metallic royal gold ambient glow */}
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[36rem] rounded-full bg-[#dfb76c]/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[28rem] rounded-full bg-[#991b1b]/10 blur-3xl" />

          <div className="mx-auto grid min-h-[660px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[720px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-12 lg:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-6"
            >
              <motion.div
                variants={reveal}
                className="mb-6 inline-flex items-center gap-2.5 rounded-lg border border-[#dfb76c]/35 bg-[#141419] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#fdefb4] shadow-sm"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#dfb76c]" />
                <span>DRA. JAQUELINE SOARES · LAGOA SANTA & VETOR NORTE - MG</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="max-w-[760px] font-serif text-[2.65rem] leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl lg:text-[3.85rem]"
              >
                Advocacia Estratégica, Ética e Humanizada:{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#fdf8e8] via-[#fdefb4] to-[#dfb76c]">
                  Seus Direitos com Rigor Técnico, Agilidade e Empatia.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-[#dcd6cb] sm:text-base sm:leading-8"
              >
                Liderado pela{" "}
                <strong className="font-semibold text-white">
                  Dra. Jaqueline Soares
                </strong>
                , nosso escritório é referência em Lagoa Santa e no Vetor Norte pela dedicação intransigente aos direitos de cada cliente. Unimos acolhimento caloroso, respeito à Constituição e rigor técnico incisivo para proporcionar a você segurança e resultados concretos.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Jaqueline Soares! Gostaria de consultar sobre meus direitos e agendar um atendimento."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar no WhatsApp com a Dra. Jaqueline
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 rounded-lg border border-[#dfb76c]/30 bg-[#141419] px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#fdefb4] transition-all hover:border-[#f4c87b] hover:bg-[#1c1c24] hover:text-white"
                >
                  Áreas de Atuação{" "}
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-[#dfb76c]/20 pt-6 text-xs text-[#dcd6cb]"
              >
                <span className="inline-flex items-center gap-2 font-medium">
                  <Star size={15} className="fill-[#dfb76c] text-[#dfb76c]" />{" "}
                  5,0 estrelas no Google (19 avaliações 100% autênticas)
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <ShieldCheck size={15} className="text-[#dfb76c]" /> Sede no Bairro Bela Vista · Lagoa Santa - MG
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <HeartHandshake size={15} className="text-[#dfb76c]" /> Atendimento Direto com a Advogada
                </span>
              </motion.div>
            </motion.div>

            {/* Hero Visual Presentation - Dra. Jaqueline Soares */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.95,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-[490px] lg:ml-auto lg:mr-2"
            >
              <div className="relative aspect-[4/4.9] overflow-hidden rounded-2xl border border-[#dfb76c]/35 bg-[#121216] shadow-2xl ring-1 ring-[#dfb76c]/20">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dra. Jaqueline Soares — Advogada em Lagoa Santa MG"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#08080a] via-[#08080a]/85 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-8 sm:left-8 sm:right-8">
                  <div>
                    <p className="font-serif text-2xl font-normal tracking-wide text-white">
                      Dra. Jaqueline Soares
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#dfb76c]">
                      Jaqueline Soares Advocacia · Lagoa Santa - MG
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-[#dfb76c]/40 bg-[#08080a]/85 text-[#fdefb4] backdrop-blur-sm">
                    <Scale size={18} />
                  </span>
                </div>
              </div>

              {/* Floating authority badge */}
              <div className="absolute -left-3 top-6 z-10 rounded-lg border border-[#dfb76c]/40 bg-[#121216]/95 px-4 py-2 text-[10px] font-bold tracking-[0.14em] text-[#fdefb4] shadow-card backdrop-blur-md sm:-left-5">
                LAGOA SANTA & VETOR NORTE · MINAS GERAIS
              </div>

              {/* Floating Google rating badge */}
              <div className="absolute -bottom-5 -right-3 z-10 rounded-xl border border-[#dfb76c]/35 bg-[#121216]/95 p-3.5 shadow-card backdrop-blur-md sm:-right-5">
                <div className="flex items-center gap-2">
                  <GoogleIcon size={16} />
                  <div className="flex items-center gap-1">
                    <Star size={13} className="fill-[#dfb76c] text-[#dfb76c]" />
                    <span className="font-serif text-base font-bold text-white">
                      5,0 / 5,0
                    </span>
                  </div>
                </div>
                <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#dcd6cb]">
                  19 Avaliações no Google
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner - Authority Metrics */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-[#dfb76c]/20 bg-[#0c0c10]"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              [
                "5,0 ★",
                "nota máxima impecável no Google com 19 avaliações autênticas",
              ],
              [
                "Atendimento Humanizado",
                "escuta atenta, empatia e segurança nos momentos mais decisivos",
              ],
              [
                "Lagoa Santa & Região",
                "sede estruturada na R. Timbiras, 150 - Bela Vista (Vetor Norte)",
              ],
              [
                "Ética & Rigor",
                "compromisso inegociável com a Constituição e êxito processual",
              ],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-[#dfb76c]/20"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-2xl font-semibold text-[#dfb76c] sm:text-3xl">
                  {value}
                </span>
                <span className="max-w-[165px] text-[11px] leading-5 text-[#dcd6cb]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre a Dra. Jaqueline Soares - Editorial Warm Alabaster Canvas */}
        <section
          id="sobre"
          className="scroll-mt-24 border-y border-[#dfb76c]/30 bg-[#faf8f5] py-20 text-[#140e04] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
            {/* Dra. Jaqueline presentation portrait */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[480px]"
            >
              <div className="relative aspect-[3/3.8] overflow-hidden rounded-2xl border-2 border-[#472c06] bg-[#121216] shadow-2xl">
                <Image
                  src={FOTO_SOBRE_SRC}
                  alt="Dra. Jaqueline Soares — Solenidade Jurídica e Formatura em Direito"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#08080a]/90 via-[#08080a]/30 to-transparent" />
              </div>

              {/* Authority badge card - Deep Obsidian Gold Contrast on Light Surface */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-[#dfb76c]/40 bg-[#121216] px-5 py-4 shadow-xl sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-[#dfb76c]">
                  <Award size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#dfb76c]">
                    Advocacia Especializada & Consultoria
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-white">
                  Dra. Jaqueline Soares
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-[#dfb76c]">
                  Jaqueline Soares Advocacia · Lagoa Santa - MG
                </p>
                <p className="mt-1 text-[11px] leading-4 text-[#dcd6cb]">
                  R. Timbiras, 150 - Bela Vista (Lagoa Santa)
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-[#a67c1e]/40 sm:-left-7 sm:-top-7 sm:size-32" />
            </motion.div>

            {/* Story & Biography - Editorial Warm Light Typography */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.div
                variants={reveal}
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#a67c1e]/30 bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#a67c1e] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#a67c1e]" />
                <span>CONHEÇA A DRA. JAQUELINE SOARES</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-[#140e04] sm:text-4xl lg:text-[3.25rem]"
              >
                Mais que uma procuradora da causa: uma{" "}
                <span className="italic text-[#a67c1e]">
                  defensora dedicada, atenciosa e firme na busca pelo seu direito.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-[#4a3b2c]"
              >
                Com escritório sediado em{" "}
                <strong className="font-bold text-[#140e04]">
                  Lagoa Santa - MG
                </strong>
                , a Dra. Jaqueline Soares consolidou uma advocacia de prestígio no Vetor Norte mineiro pela seriedade, ética incondicional e extremo respeito à Constituição e aos cidadãos.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-[#4a3b2c]"
              >
                Seu atendimento se destaca pelo acolhimento genuíno e pela clareza pedagógica. Aqui você não encontra termos jurídicos distantes ou burocracia desnecessária: você conversa diretamente com a advogada, com respostas ágeis, orientação transparente e uma estratégia técnica desenhada sob medida para a sua tranquilidade.
              </motion.p>

              {/* Authentic Client Quote Card */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-xl border border-[#e6decb] bg-white/95 p-5 shadow-sm"
              >
                <blockquote className="font-serif text-sm italic leading-relaxed text-[#26190b]">
                  &ldquo;Ótima Advogada, séria competente e extremamente responsável… Pode confiar pois ela é sim uma advogada que respeita a constituição e sempre dará o melhor para ter êxito nos seus processos… Confio de olhos vendados!&rdquo;
                </blockquote>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-[#a67c1e]">
                  — Eric Batista · Avaliação Verificada no Google (5,0 ★)
                </p>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-1 gap-2.5 text-xs font-semibold text-[#26190b] sm:grid-cols-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#a67c1e]" />
                  <span>Sede no Bairro Bela Vista em Lagoa Santa - MG</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#a67c1e]" />
                  <span>Referência jurídica no Vetor Norte de Belo Horizonte</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#a67c1e]" />
                  <span>Paciência para esclarecer todas as dúvidas do cliente</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#a67c1e]" />
                  <span>Nota máxima 5,0 ★ no Google com 19 avaliações reais</span>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Jaqueline Soares! Gostaria de agendar uma consulta sobre o meu caso."
                  )}
                  target="_blank"
                  size="md"
                  variant="dark"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar com a Dra. Jaqueline
                </GlowingButton>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#140e04] transition-colors hover:text-[#a67c1e]"
                >
                  <Phone size={15} /> {PHONE_DISPLAY}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Áreas de Atuação Jaqueline Soares Advocacia */}
        <section
          id="atuacao"
          className="scroll-mt-24 border-t border-[#dfb76c]/20 bg-[#0c0c10] py-20 sm:py-28 lg:py-32"
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
                eyebrow="SERVIÇOS JURÍDICOS & PILARES DE ATUAÇÃO"
                description="Defesa especializada, estratégica e personalizada para resguardar seus direitos em demandas familiares, cíveis, do consumidor, trabalhistas e previdenciárias."
              >
                Atuação jurídica sólida em{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#fdf8e8] via-[#fdefb4] to-[#dfb76c]">
                  Lagoa Santa, Vetor Norte e Minas Gerais.
                </span>
              </Heading>
              <p className="max-w-[270px] pb-1 text-xs leading-6 text-[#dcd6cb]">
                Selecione uma especialidade abaixo para conferir as demandas
                atendidas e iniciar sua consulta diretamente pelo WhatsApp.
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
                    className="group flex min-h-[350px] flex-col rounded-xl border border-[#dfb76c]/20 bg-[#121216] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#dfb76c]/50 hover:bg-[#1a1a22] hover:shadow-obsidian sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-lg border border-[#dfb76c]/25 bg-[#1c1c24] text-[#dfb76c] shadow-sm transition-colors group-hover:border-[#fdefb4] group-hover:bg-[#262632] group-hover:text-white">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <span className="font-serif text-2xl text-[#dfb76c]/40">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-md border border-[#dfb76c]/25 bg-[#1c1c24] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#fdefb4] shadow-sm">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.45rem] leading-tight text-white">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-6 text-[#dcd6cb]">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-[#dfb76c] hover:text-white"
                    >
                      Ver detalhes e demandas{" "}
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover/link:translate-x-1"
                      />
                    </button>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Por Que Escolher Jaqueline Soares Advocacia - Diferenciais (Dobra Branca) */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-t border-[#dfb76c]/30 bg-[#faf8f5] py-20 text-[#140e04] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                light
                eyebrow="NOSSOS PILARES DE EXCELÊNCIA"
                description="Unimos acolhimento sincero, atenção aos mínimos detalhes e uma postura jurídica firme para transformar direitos em conquistas reais."
              >
                Por que confiar seu caso à{" "}
                <span className="italic text-[#a67c1e]">
                  Dra. Jaqueline Soares?
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Jaqueline Soares! Gostaria de consultar sobre a minha situação jurídica."
                )}
                target="_blank"
                size="md"
                variant="dark"
                className="rounded-lg shadow-sm"
              >
                <WhatsAppIcon size={16} /> Falar no WhatsApp
              </GlowingButton>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {/* Card 1: Atenção aos Mínimos Detalhes & Acolhimento */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group flex flex-col justify-between rounded-xl border border-[#e6decb] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#dfb76c] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#dfb76c]/30 bg-[#f4f0e8] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#8a5d12]">
                      <HeartHandshake size={14} /> Atendimento Humanizado
                    </span>
                    <span className="text-xs font-semibold text-[#a67c1e]">
                      Acolhimento Real
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#140e04] sm:text-[1.75rem]">
                    Paciência em Esclarecer Dúvidas & Empatia Incondicional
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#4a3b2c]">
                    Sabemos que momentos de conflito familiar, rescisão de trabalho ou abusos de consumo causam desgaste emocional. No escritório Jaqueline Soares, cada cliente é recebido com paciência, escuta ativa e explicações didáticas, compreendendo todas as fases do processo.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-[#26190b]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#a67c1e]" />
                      <span>Contato direto pelo WhatsApp com a Dra. Jaqueline Soares</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#a67c1e]" />
                      <span>Esclarecimento detalhado e calmo de cada etapa jurídica</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#a67c1e]" />
                      <span>Atendimento acolhedor, transparente e com total confidencialidade</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#e6decb] pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Jaqueline Soares! Gostaria de conversar diretamente com você sobre minha situação."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#dfb76c]/40 bg-[#fbf9f6] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#140e04] transition-all hover:border-[#a67c1e] hover:bg-[#140e04] hover:text-[#fdefb4]"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Conversar Diretamente no WhatsApp
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>

              {/* Card 2: Combatividade Técnica e Rigor Processual */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="group flex flex-col justify-between rounded-xl border border-[#e6decb] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#dfb76c] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#dfb76c]/30 bg-[#f4f0e8] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#8a5d12]">
                      <Scale size={14} /> Rigor Técnico Incisivo
                    </span>
                    <span className="text-xs font-semibold text-[#a67c1e]">
                      Resultados Comprovados
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#140e04] sm:text-[1.75rem]">
                    Combatividade Jurídica & Foco no Êxito Processual
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#4a3b2c]">
                    Não aceitamos negativas abusivas ou injustiças. Construímos um conjunto probatório minucioso e fundamentado na jurisprudência mais recente para lutar por cada centavo e direito devido a você, com agilidade e compromisso inabalável.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-[#26190b]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#a67c1e]" />
                      <span>Análise aprofundada de documentos, certidões e histórico probatório</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#a67c1e]" />
                      <span>Atuação célere na Justiça Estadual, Federal e do Trabalho</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#a67c1e]" />
                      <span>Acompanhamento rigoroso de prazos e recursos estratégicos</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#e6decb] pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Jaqueline Soares! Preciso de ajuda jurídica para analisar meu caso."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#dfb76c]/40 bg-[#fbf9f6] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#140e04] transition-all hover:border-[#a67c1e] hover:bg-[#140e04] hover:text-[#fdefb4]"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Analisar Meu Caso no WhatsApp
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Nosso Compromisso com Você (Dobra Branca - Continuação) */}
        <section className="relative overflow-hidden border-t border-[#dfb76c]/20 bg-[#faf8f5] py-20 text-[#140e04] sm:py-24 lg:py-28">
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-[#dfb76c]/5 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-[#dfb76c]/5 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                light
                eyebrow="NOSSO COMPROMISSO COM VOCÊ"
                description="A nota máxima de 5,0 ★ no Google com 19 avaliações autênticas reflete a lealdade inegociável em defender cada cliente com seriedade, respeito e agilidade."
              >
                Cuidamos do seu caso com{" "}
                <span className="italic text-[#a67c1e]">
                  ética, transparência e combatividade total.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-[#e6decb] bg-white p-6 font-serif text-base italic leading-7 text-[#26190b] shadow-sm">
                &ldquo;Uma grande profissional, pessoa extremamente dedicada e nos passa segurança nos momentos mais difíceis.&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-[#a67c1e]">
                  — Catiulcia Falconi · Avaliação Verificada no Google Meu Negócio (5,0 ★)
                </footer>
              </blockquote>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-[#e6decb]"
            >
              {[
                [
                  "01",
                  "Acolhimento Humanizado & Escuta Atenta",
                  "Você é ouvido com total respeito e sensibilidade. Analisamos cada detalhe da sua situação para definir a melhor rota jurídica sem julgamentos.",
                ],
                [
                  "02",
                  "Transparência Total & Comunicação Clara",
                  "Você nunca fica sem respostas. Mantemos você informado de cada passo do seu processo em linguagem simples, objetiva e transparente.",
                ],
                [
                  "03",
                  "Combatividade Incisiva & Agilidade",
                  "Lutamos incansavelmente pelo melhor resultado possível, exigindo o cumprimento estrito da lei e a reparação justa dos seus direitos.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-semibold text-[#a67c1e]">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-[#140e04]">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-[#4a3b2c]">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Avaliações no Google (Depoimentos Reais - Dobra Branca com Fundo Marfim Suave) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 border-t border-[#dfb76c]/30 bg-[#f7f4ee] py-20 text-[#140e04] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                light
                eyebrow="PROVA SOCIAL VERIFICADA · GOOGLE MEU NEGÓCIO"
                description="Confira avaliações reais e espontâneas de clientes que confiaram suas causas e momentos decisivos à Dra. Jaqueline Soares."
              >
                Avaliada com nota máxima 5,0 ★ pela{" "}
                <span className="italic text-[#a67c1e]">
                  competência, segurança e atendimento acolhedor.
                </span>
              </Heading>

              {/* Verified Google Badge Card */}
              <div className="flex flex-col gap-3 rounded-xl border border-[#e6decb] bg-white p-5 shadow-sm sm:flex-row sm:items-center md:min-w-[340px]">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-lg border border-[#dfb76c]/30 bg-[#f4f0e8] shadow-xs">
                  <GoogleIcon size={30} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-3xl font-bold leading-none text-[#140e04]">
                      5,0
                    </span>
                    <div className="flex gap-0.5 text-[#dfb76c]">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-[#dfb76c] text-[#dfb76c]"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#4a3b2c]">
                    Jaqueline Soares — Advogada
                  </p>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-[#8a5d12] transition-colors hover:text-[#140e04]"
                  >
                    19 avaliações no Google <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Authentic Google Reviews Grid */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clientReviews.map((review) => (
                <article
                  key={review.name}
                  className="group relative flex flex-col justify-between rounded-xl border border-[#e6decb] bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#dfb76c] hover:shadow-md sm:p-8"
                >
                  <div>
                    {/* Header: Stars + Badge + Google icon */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-1 text-[#dfb76c]">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-[#dfb76c] text-[#dfb76c]"
                          />
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#4a3b2c]">
                        <GoogleIcon size={13} />
                        <span className="rounded-md border border-[#dfb76c]/30 bg-[#f4f0e8] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#8a5d12] shadow-xs">
                          {review.badge}
                        </span>
                      </div>
                    </div>

                    {/* Authentic review content */}
                    <p className="mt-5 text-[14px] italic leading-relaxed text-[#26190b]">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  {/* Reviewer info */}
                  <div className="mt-6 flex items-center gap-3 border-t border-[#e6decb] pt-4">
                    <div className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#dfb76c]/30 bg-[#f4f0e8] font-serif text-sm font-semibold text-[#8a5d12] shadow-xs">
                      {review.name.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-serif text-base font-semibold text-[#140e04]">
                        {review.name}
                      </p>
                      <p className="text-[10px] uppercase tracking-wider text-[#7d7063]">
                        {review.reviewsCount}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom Actions and Trust Tags */}
            <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-[#e6decb] pt-8 sm:flex-row">
              <div className="flex flex-wrap items-center gap-2">
                {[
                  "Advogada em Lagoa Santa - MG",
                  "Vetor Norte de Belo Horizonte",
                  "Direito de Família & Sucessões",
                  "Direito do Consumidor & Cível",
                  "Trabalhista & INSS Previdenciário",
                  "Nota 5,0 ★ no Google (19 avaliações)",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#e6decb] bg-white px-3.5 py-1.5 text-[11px] font-medium text-[#26190b] shadow-xs"
                  >
                    <CheckCircle2 size={13} className="text-[#a67c1e]" />
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#8a5d12] transition-colors hover:text-[#140e04]"
              >
                Ver todas as avaliações no Google{" "}
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Contato & Localização da Sede em Lagoa Santa (Dobra Branca) */}
        <section
          id="contato"
          className="scroll-mt-24 border-t border-[#dfb76c]/30 bg-[#faf8f5] py-20 text-[#140e04] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                light
                eyebrow="CONTATO & ATENDIMENTO EM LAGOA SANTA"
                description="Inicie seu atendimento diretamente pelo WhatsApp ou agende uma reunião presencial em nossa sede no Bairro Bela Vista. Prestamos assistência ágil para clientes de Lagoa Santa, Vetor Norte e todo o Brasil."
              >
                Estamos prontos para{" "}
                <span className="italic text-[#a67c1e]">
                  escutar e defender você.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Jaqueline Soares! Gostaria de agendar um horário para atendimento."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} /> Iniciar Conversa no WhatsApp
                </GlowingButton>
                <p className="text-[11px] leading-5 text-[#4a3b2c]">
                  Telefone e WhatsApp do escritório:{" "}
                  <strong className="text-[#140e04]">{PHONE_DISPLAY}</strong>
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-[#4a3b2c]">
                <div className="flex items-start gap-3">
                  <Clock
                    size={16}
                    className="mt-0.5 shrink-0 text-[#a67c1e]"
                  />
                  <div>
                    <p className="font-semibold text-[#140e04]">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-[#26190b]">
                      Segunda a Sexta-feira das 08:00 às 18:00
                    </p>
                    <p className="text-[11px] text-[#7d7063]">
                      Atendimento presencial com hora marcada em Lagoa Santa e consultoria jurídica online em todo o Brasil
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#a67c1e]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-medium text-[#140e04] transition-colors hover:text-[#a67c1e]"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#a67c1e]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#a67c1e] text-[#26190b]"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#a67c1e]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="transition-colors hover:text-[#a67c1e] text-[#26190b]"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#a67c1e]"
                  />
                  <span className="text-[#26190b]">{ADDRESS_TEXT}</span>
                </div>
              </div>
            </div>

            {/* Office & Schedule Card */}
            <div className="relative overflow-hidden rounded-xl border border-[#e6decb] bg-white p-7 shadow-md sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#c59b48] to-[#fdefb4]" />

              <div className="flex items-center gap-4">
                <div className="relative size-[64px] shrink-0 overflow-hidden rounded-full border-2 border-[#dfb76c]/60 bg-[#08080a] shadow-md sm:size-[76px]">
                  <Image
                    src={LOGO_SEAL_SRC}
                    alt="Selo Jaqueline Soares Advocacia"
                    fill
                    sizes="76px"
                    className="object-contain p-1"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#a67c1e]">
                    Sede do Escritório
                  </p>
                  <p className="mt-0.5 font-cinzel text-xl font-bold text-[#140e04] sm:text-2xl">
                    Jaqueline Soares Advocacia
                  </p>
                </div>
              </div>

              <address className="mt-7 max-w-md text-[14px] not-italic leading-7 text-[#4a3b2c]">
                <strong className="font-semibold text-[#140e04]">
                  Dra. Jaqueline Soares
                </strong>
                <br />
                Advogada e Consultora Jurídica
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-lg border border-[#e6decb] bg-[#fbf9f6] p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#a67c1e]">
                  Atendimento & Horários
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-[#4a3b2c]">
                  <span>Segunda a Sexta</span>
                  <span className="text-right font-semibold text-[#140e04]">
                    08:00 às 18:00
                  </span>
                  <span>Atendimento Presencial</span>
                  <span className="text-right font-medium text-[#8a5d12]">
                    Lagoa Santa - MG
                  </span>
                  <span>Bairro</span>
                  <span className="text-right text-[#26190b]">Bela Vista</span>
                  <span>Atendimento Online</span>
                  <span className="text-right text-[#26190b]">Todo o Brasil</span>
                </div>
              </div>

              <div className="my-7 h-px bg-[#e6decb]" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-[#7d7063]">
                  Atendimento humanizado com hora marcada em Lagoa Santa
                </p>
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Jaqueline Soares! Gostaria de agendar um atendimento no escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#dfb76c]/40 bg-[#f4f0e8] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#140e04] transition-colors hover:border-[#a67c1e] hover:bg-[#140e04] hover:text-[#fdefb4]"
                >
                  <WhatsAppIcon size={14} /> Falar com a Advogada <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip */}
        <section className="border-t border-[#dfb76c]/20 bg-gradient-to-r from-[#08080a] via-[#15151a] to-[#08080a] px-5 py-14 text-white shadow-inner sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#dfb76c]">
                <Sparkles size={13} /> JAQUELINE SOARES ADVOCACIA · LAGOA SANTA & VETOR NORTE - MG
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                Precisa de orientação jurídica ética, segura e humanizada?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dra. Jaqueline Soares! Gostaria de consultar sobre meus direitos com seu escritório."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-lg bg-gradient-to-r from-[#c59b48] via-[#f4c87b] to-[#c59b48] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#140e04] shadow-md transition-all hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp{" "}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#dfb76c]/20 bg-[#060608] px-5 py-14 text-white sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <a
                href="#inicio"
                aria-label="Jaqueline Soares — Escritório de Advocacia"
                className="inline-flex items-center gap-3.5 transition-transform hover:scale-[1.02]"
              >
                <div className="relative size-[72px] shrink-0 overflow-hidden rounded-full border-2 border-[#dfb76c]/50 bg-[#08080a] shadow-md sm:size-[80px]">
                  <Image
                    src={LOGO_SEAL_SRC}
                    alt="Jaqueline Soares — Escritório de Advocacia"
                    fill
                    sizes="80px"
                    className="object-contain p-1"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-cinzel text-xl font-bold tracking-wider text-white sm:text-2xl">
                    JAQUELINE SOARES
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#dfb76c]">
                    Advocacia & Consultoria
                  </span>
                </div>
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-[#dcd6cb]">
                ⚖️ Advocacia humanizada, estratégica e comprometida com a Constituição. Atuação de excelência em Direito de Família, Sucessões, Cível, Consumidor, Trabalhista e Previdenciário em Lagoa Santa e Vetor Norte.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-[#dfb76c]">
                Dra. Jaqueline Soares · Advogada
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#dfb76c]">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-[#dcd6cb]">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  Dra. Jaqueline Soares
                </a>
                <a className="footer-link" href="#atuacao">
                  Áreas de Atuação
                </a>
                <a className="footer-link" href="#diferenciais">
                  Por Que Escolher
                </a>
                <a className="footer-link" href="#avaliacoes">
                  Avaliações no Google (5,0 ★)
                </a>
                <a className="footer-link" href="#contato">
                  Contato & Sede
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#dfb76c]">
                Contato & Atendimento
              </h2>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-[#dcd6cb]">
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Jaqueline Soares! Gostaria de solicitar um atendimento com o escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 font-medium text-[#fdefb4]"
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
                <div className="footer-link inline-flex items-start gap-2">
                  <MapPin size={15} className="mt-0.5 shrink-0" />
                  <span>{ADDRESS_TEXT}</span>
                </div>
                <p className="inline-flex items-center gap-2 pt-1 text-[11px] text-[#dfb76c]">
                  <Clock size={14} className="shrink-0" /> Seg a Sex: 08:00 às 18:00
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-[#dfb76c]/20 pt-6 text-[10px] text-stone-400 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} JAQUELINE SOARES ADVOCACIA · DRA. JAQUELINE SOARES. Todos os direitos reservados.
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
              "Olá, Dra. Jaqueline Soares! Gostaria de consultar sobre meus direitos com seu escritório."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Dra. Jaqueline Soares"
            className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          >
            <WhatsAppIcon size={28} />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-[#121216] border border-[#dfb76c]/30 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg transition-opacity group-hover:block">
              Falar com a Dra. Jaqueline
            </span>
          </a>
        </aside>

        {/* Modal de Detalhes da Área de Atuação */}
        <AnimatePresence>
          {activeArea && (
            <motion.div
              className="fixed inset-0 z-50 flex items-end justify-center bg-black/85 p-0 backdrop-blur-md sm:items-center sm:p-6"
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
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-xl border border-[#dfb76c]/35 bg-[#121216] p-7 shadow-2xl sm:max-w-xl sm:rounded-xl sm:p-10"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-[#dfb76c]/30 bg-[#1c1c24] text-[#fdefb4] transition-colors hover:border-[#f4c87b] hover:text-white"
                >
                  <X size={18} />
                </button>

                <p className="eyebrow">ESPECIALIDADE JURÍDICA</p>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-serif text-3xl leading-tight text-white sm:text-4xl"
                >
                  {activeArea.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-[#dcd6cb]">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-[#dfb76c]/20 pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#dfb76c]">
                    Principais demandas atendidas pelo escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-stone-200"
                      >
                        <span className="size-2 shrink-0 rounded-full bg-[#dfb76c]" />
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
                    variant="gold"
                    className="rounded-lg shadow-md"
                  >
                    <WhatsAppIcon size={16} /> Consultar sobre esta demanda
                  </GlowingButton>
                  <button
                    type="button"
                    onClick={() => setActiveArea(null)}
                    className="px-5 py-3 text-xs font-semibold text-stone-400 transition-colors hover:text-white"
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
