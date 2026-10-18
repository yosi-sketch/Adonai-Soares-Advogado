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

const WHATSAPP_NUMBER = "5534997163580";
const PHONE_DISPLAY = "(34) 99716-3580";
const EMAIL_CONTACT = "contato@brunomarques.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/brunomarques.advv/";
const INSTAGRAM_HANDLE = "@brunomarques.advv";

const ADDRESS_TEXT =
  "Rua Franklin Mendonça, 341 - Carmo do Paranaíba, MG, 38840-056, Brasil";
const GOOGLE_MAPS_URL =
  "https://www.google.com/search?q=Bruno+Marques+Advocacia%0ACarmo+do+Parana%C3%ADba+%C2%B7+MG";

const LOGO_SEAL_SRC = "/logo-symbol.png";
const LOGO_FULL_SRC = "/logo.png";
const FOTO_HERO_SRC = "/bruno-marques-sobre.png";
const FOTO_SOBRE_SRC = "/bruno-marques-hero.png";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dr. Bruno Marques! Gostaria de consultar sobre meus direitos e agendar um atendimento no escritório.";
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
    id: "direito-civel-conflitos-complexos",
    title: "Direito Cível & Resolução Estratégica de Conflitos",
    icon: Scale,
    tag: "Indenizações · Casos Complexos · Cobranças · Disputas Cíveis",
    summary:
      "Defesa contundente do seu patrimônio e direitos civis, com estratégias acertadas para reverter demandas desafiadoras e garantir justa reparação.",
    details:
      "O Dr. Bruno Marques atua de maneira incisiva e altamente estratégica em litígios cíveis. Seja na recuperação de créditos, defesas patrimoniais ou ações indenizatórias por danos morais e materiais, construímos uma fundamentação jurídica robusta para garantir o êxito que o cliente busca, com acompanhamento próximo em cada fase processual.",
    topics: [
      "Ações indenizatórias por Danos Morais, Danos Materiais e Danos Estéticos",
      "Condução estratégica e reversão de demandas complexas ou tidas como casos desafiadores",
      "Cobrança judicial e extrajudicial de títulos de crédito, contratos e haveres",
      "Ações possessórias, usucapião, reintegração de posse e litígios imobiliários",
      "Defesa patrimonial contra penhoras indevidas e embargos à execução",
      "Mediação de conflitos, negociação estratégica e acordos com segurança jurídica",
    ],
    whatsAppText:
      "Olá, Dr. Bruno Marques! Gostaria de consultar sobre uma ação na área Cível / Indenizações.",
  },
  {
    id: "direito-de-familia-sucessoes-carmo",
    title: "Direito de Família & Sucessões",
    icon: Users,
    tag: "Divórcio · Guarda · Alimentos · Inventário & Partilha",
    summary:
      "Condução ética, humana e segura para resguardar seus filhos, seu patrimônio e trazer tranquilidade em momentos familiares decisivos.",
    details:
      "Atuação com escuta atenta, discrição e firmeza técnica em causas de família e sucessões. Atuamos em divórcios consensuais em cartório e judiciais, pensão alimentícia, guarda e convivência, partilha de bens e inventários ágeis, priorizando sempre a segurança jurídica e a dignidade das partes.",
    topics: [
      "Divórcio Consensual em Cartório (rápido e desburocratizado) e Divórcio Litigioso",
      "Fixação, Revisional e Execução de Pensão Alimentícia com cobrança ágil",
      "Guarda Compartilhada, Regulamentação de Convivência e Proteção dos Filhos",
      "Inventário Extrajudicial em Cartório e Inventário Judicial com partilha justa de bens",
      "Reconhecimento e Dissolução de União Estável com apuração de meação",
      "Planejamento Sucessório, Doações em Vida e Testamentos patrimoniais",
    ],
    whatsAppText:
      "Olá, Dr. Bruno Marques! Gostaria de orientação sobre uma questão de Direito de Família / Inventário.",
  },
  {
    id: "direito-do-consumidor-defesa-bancaria",
    title: "Direito do Consumidor & Defesa Bancária",
    icon: ShieldCheck,
    tag: "SPC/Serasa · Golpes Bancários · Juros Abusivos · Empréstimos",
    summary:
      "Combate incisivo contra abusos de instituições financeiras, negativações indevidas, fraudes em empréstimos e cobranças ilegais.",
    details:
      "Atuação célere para proteger cidadãos e produtores contra arbitrariedades bancárias, fraudes eletrônicas (golpes do Pix, consignados não contratados), negativações ilegais no SPC e Serasa com pedido de liminar e indenização por danos morais, além de revisão judicial de cláusulas financeiras abusivas.",
    topics: [
      "Liminar urgente para exclusão imediata do nome do SPC/Serasa e indenização moral",
      "Ações judiciais contra fraudes em empréstimos consignados, cartões e golpes via Pix",
      "Ações revisionais de financiamentos e contratos com juros extorsivos e tarifas ilegais",
      "Restituição em dobro de quantias cobradas indevidamente por bancos e empresas",
      "Defesa contra cobranças vexatórias, vendas casadas e abusos contratuais",
      "Indenizações por cancelamento/atraso de voos e falhas graves na prestação de serviços",
    ],
    whatsAppText:
      "Olá, Dr. Bruno Marques! Preciso de assessoria jurídica contra abusos de banco ou problemas com consumidor.",
  },
  {
    id: "direito-trabalhista-carmo-paranaiba",
    title: "Direito Trabalhista & Defesa de Direitos",
    icon: Briefcase,
    tag: "Rescisão · Horas Extras · Insalubridade · Acidente de Trabalho",
    summary:
      "Atuação combativa para assegurar o recebimento integral de todas as verbas rescisórias, adicionais de risco e direitos sonegados.",
    details:
      "Análise técnica e rigorosa de contratos, holerites e cartões de ponto para recuperar direitos violados. Atuamos com dedicação em rescisões indiretas por descumprimento do empregador, cálculo exato de horas extras, adicionais de insalubridade e periculosidade, e indenizações decorrentes de acidentes de trabalho.",
    topics: [
      "Cobrança integral de verbas rescisórias, aviso prévio e multas da CLT (arts. 467 e 477)",
      "Rescisão Indireta por atraso salarial, falta de recolhimento de FGTS ou assédio moral",
      "Cálculo e cobrança de Horas Extras, adicional noturno e intervalos suprimidos",
      "Adicionais de Insalubridade e Periculosidade para funções expostas a agentes nocivos",
      "Reconhecimento de vínculo empregatício sem registro em carteira e liberação de FGTS",
      "Indenização por Acidente de Trabalho, doença ocupacional e garantia de estabilidade",
    ],
    whatsAppText:
      "Olá, Dr. Bruno Marques! Gostaria de uma avaliação sobre os meus direitos trabalhistas.",
  },
  {
    id: "direito-previdenciario-inss-carmo",
    title: "Direito Previdenciário (INSS) & BPC/LOAS",
    icon: Landmark,
    tag: "Aposentadorias · Auxílio-Doença · BPC LOAS · Planejamento",
    summary:
      "Concessão de aposentadorias mais vantajosas, reversão de indeferimentos do INSS e amparo a pessoas com deficiência e idosos.",
    details:
      "Planejamento previdenciário minucioso e atuação judicial firme contra negativas indevidas do INSS. Ajuizamos ações para concessão e restabelecimento de auxílio-doença cortado, conversão em aposentadoria por invalidez, benefício de prestação continuada (BPC/LOAS) e recuperação de retroativos acumulados.",
    topics: [
      "Aposentadoria por Idade Urbana e Rural com aplicação da regra mais vantajosa",
      "Aposentadoria Especial para trabalhadores expostos a agentes nocivos ou periculosos",
      "Ação contra negativa de benefício por incapacidade temporária (Auxílio-Doença)",
      "BPC/LOAS para idosos (65+) e pessoas com deficiência em situação de vulnerabilidade",
      "Pensão por Morte para viúvos(as) e dependentes com retroativos desde o falecimento",
      "Planejamento Previdenciário completo com acerto e retificação de vínculos no CNIS",
    ],
    whatsAppText:
      "Olá, Dr. Bruno Marques! Gostaria de auxílio para requerer aposentadoria ou benefício no INSS.",
  },
  {
    id: "consultoria-contratos-prevencao",
    title: "Elaboração de Contratos & Advocacia Preventiva",
    icon: FileText,
    tag: "Contratos · Agronegócio · Blindagem Jurídica · Pareceres",
    summary:
      "Segurança jurídica sólida e blindagem patrimonial através de contratos bem estruturados, pareceres claros e negociações preventivas.",
    details:
      "Redação personalizada e revisão técnica de contratos civis, imobiliários, rurais (arrendamentos e parcerias agrícolas) e empresariais. Notificações extrajudiciais com fundamentação probatória e assessoria consultiva para prevenir passivos e litígios onerosos.",
    topics: [
      "Elaboração e revisão minuciosa de Contratos de Compra e Venda de Imóveis e Propriedades Rurais",
      "Contratos de Arrendamento Rural, Parceria Agrícola e Prestação de Serviços",
      "Contratos de Locação residencial e comercial com cláusulas protetivas seguras",
      "Notificações Extrajudiciais formais para constituir devedores em mora com valor probatório",
      "Análise preventiva de riscos contratuais e blindagem do patrimônio familiar e empresarial",
      "Renegociação de passivos e elaboração de termos de confissão de dívida e quitação",
    ],
    whatsAppText:
      "Olá, Dr. Bruno Marques! Gostaria de assessoria na elaboração ou revisão de contratos.",
  },
];

const clientReviews = [
  {
    name: "Gabriel Ribeiro",
    reviewsCount: "4 avaliações no Google",
    badge: "Atendimento Atencioso & Seriedade",
    content:
      "Excelente profissional! Atendimento atencioso, comprometido e realizado com muita seriedade. Demonstra conhecimento técnico e dedicação na condução das demandas. Recomendo pelos serviços prestados.",
  },
  {
    name: "Gabriela Matos",
    reviewsCount: "5 avaliações · 1 foto no Google",
    badge: "Segurança, Cuidado & Clareza",
    content:
      "Um profissional excelente! Atendimento sempre muito atencioso, respeitoso e claro em todas as orientações. É nítido o comprometimento e o cuidado, transmite segurança e tranquilidade durante todo o processo. Além de acessível, demonstra verdadeira preocupação em ajudar da melhor maneira possível.",
  },
  {
    name: "Black Rock Shooter",
    reviewsCount: "2 avaliações no Google",
    badge: "Vitória em Caso Desafiador",
    content:
      "graças a ele venci um processo que eu achava que era caso perdido",
  },
  {
    name: "Antonio Augusto Moreira Silva",
    reviewsCount: "11 avaliações · 2 fotos no Google",
    badge: "Solução Acertada & Acompanhamento",
    content:
      "Excelente profissional, solução jurídica muito acertada, e o melhor, não abandona o cliente e o posiciona durante todo o processo.",
  },
  {
    name: "Giovanna Morais",
    reviewsCount: "1 avaliação no Google",
    badge: "Melhor Atendimento & Competência",
    content:
      "O melhor atendimento e competência! 🙏🏻👏🏻",
  },
  {
    name: "Gabriel Véras",
    reviewsCount: "Local Guide · 3 avaliações · 3 fotos",
    badge: "Local Guide Verificado",
    content:
      "Excelente profissional, recomendo.",
  },
  {
    name: "Daniel Andrade dos Reis",
    reviewsCount: "2 avaliações no Google",
    badge: "Honestidade & Proatividade",
    content:
      "Profissional excepcional, sempre que precisei, me orientou com honestidade e proatividade, demonstrando grande conhecimento sobre o que se comprometeu a fazer.",
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
            ? "mt-4 font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-[#0f1420] sm:text-4xl lg:text-[3.25rem]"
            : "mt-4 font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-white sm:text-4xl lg:text-[3.25rem]"
        }
      >
        {children}
      </h2>
      {description && (
        <p
          className={
            light
              ? "mt-4 text-[15px] leading-7 text-[#334155]"
              : "mt-4 text-[15px] leading-7 text-[#cbd5e1]"
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
      <main className="overflow-hidden bg-[#080b11] text-[#f8f9fa] selection:bg-[#c59b48] selection:text-[#080b11]">
        {/* Navigation Bar - Refined Imperial Antique Bronze & Midnight Slate Navy */}
        <header className="sticky top-0 z-40 border-b border-[#c59b48]/20 bg-[#080b11]/95 backdrop-blur-xl">
          <div className="mx-auto flex h-[96px] max-w-7xl items-center justify-between gap-6 px-5 sm:h-[108px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Bruno Marques Advocacia — Escritório de Advocacia"
              onClick={closeMenu}
              className="flex items-center gap-3.5 transition-opacity hover:opacity-90"
            >
              <div className="relative size-[60px] shrink-0 overflow-hidden rounded-full border-2 border-[#c59b48]/60 bg-[#0d121c] shadow-md sm:size-[72px]">
                <Image
                  src={LOGO_SEAL_SRC}
                  alt="Selo Oficial Bruno Marques Advocacia"
                  fill
                  priority
                  sizes="72px"
                  className="object-contain p-1.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-lg font-bold tracking-wider text-white sm:text-xl lg:text-2xl">
                  BRUNO MARQUES
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#c59b48] sm:text-xs">
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
                Dr. Bruno Marques
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
                aria-label="Instagram do Dr. Bruno Marques"
                className="grid size-10 place-items-center rounded-lg border border-[#c59b48]/30 bg-[#121825] text-[#faeed2] transition-all hover:border-[#f3dfa7] hover:bg-[#182030] hover:text-white"
                title={`Instagram ${INSTAGRAM_HANDLE}`}
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                aria-label="Ligar para Bruno Marques Advocacia"
                className="grid size-10 place-items-center rounded-lg border border-[#c59b48]/30 bg-[#121825] text-[#faeed2] transition-all hover:border-[#f3dfa7] hover:bg-[#182030] hover:text-white"
                title={`Ligar: ${PHONE_DISPLAY}`}
              >
                <Phone size={16} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Dr. Bruno Marques"
                className="grid size-10 place-items-center rounded-lg border border-[#c59b48]/30 bg-[#121825] text-[#faeed2] transition-all hover:border-[#f3dfa7] hover:bg-[#182030] hover:text-white"
                title="Atendimento no WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dr. Bruno Marques! Gostaria de consultar sobre meus direitos e agendar um atendimento."
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
              className="grid size-11 place-items-center rounded-lg border border-[#c59b48]/30 bg-[#121825] text-[#faeed2] lg:hidden"
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
                className="overflow-hidden border-t border-[#c59b48]/20 bg-[#080b11] px-6 lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["Dr. Bruno Marques", "#sobre"],
                    ["Áreas de Atuação", "#atuacao"],
                    ["Por Que Escolher", "#diferenciais"],
                    ["Avaliações no Google (5,0 ★)", "#avaliacoes"],
                    ["Contato & Sede", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm font-medium text-stone-200 hover:text-[#c59b48]"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#b38836] via-[#dfb76c] to-[#b38836] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.13em] text-[#090c12] shadow-md transition-all hover:brightness-105"
                      href={getWhatsAppUrl(
                        "Olá, Dr. Bruno Marques! Gostaria de consultar sobre o meu caso."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} /> WhatsApp: {PHONE_DISPLAY}
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#c59b48]/30 bg-[#121825] px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-[#faeed2] transition-all hover:border-[#f3dfa7]"
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

        {/* Hero Section - Executive Antique Bronze & Midnight Slate Navy */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-[#c59b48]/20 bg-gradient-to-b from-[#080b11] via-[#0d121c] to-[#121825]"
        >
          {/* Subtle masculine metallic bronze & deep slate ambient glow */}
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[36rem] rounded-full bg-[#c59b48]/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[28rem] rounded-full bg-[#182030]/40 blur-3xl" />

          <div className="mx-auto grid min-h-[660px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[720px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-12 lg:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-6"
            >
              <motion.div
                variants={reveal}
                className="mb-6 inline-flex items-center gap-2.5 rounded-lg border border-[#c59b48]/35 bg-[#0d121c] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#faeed2] shadow-sm"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#c59b48]" />
                <span>DR. BRUNO MARQUES · CARMO DO PARANAÍBA & REGIÃO - MG</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="max-w-[760px] font-serif text-[2.65rem] leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl lg:text-[3.85rem]"
              >
                Advocacia Estratégica, Resolutiva e de Confiança:{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#fdfaf3] via-[#faeed2] to-[#c59b48]">
                  Seus Direitos com Rigor Técnico, Agilidade e Honestidade.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-[#cbd5e1] sm:text-base sm:leading-8"
              >
                Liderado pelo{" "}
                <strong className="font-semibold text-white">
                  Dr. Bruno Marques
                </strong>
                , nosso escritório é referência em Carmo do Paranaíba e Minas Gerais pela condução séria, combativa e personalizada de cada demanda. Conquistamos a confiança dos clientes revertendo causas desafiadoras com soluções jurídicas acertadas, acompanhamento próximo e atendimento verdadeiramente acessível e transparente.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dr. Bruno Marques! Gostaria de consultar sobre meus direitos e agendar um atendimento."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar no WhatsApp com o Dr. Bruno
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 rounded-lg border border-[#c59b48]/30 bg-[#0d121c] px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#faeed2] transition-all hover:border-[#f3dfa7] hover:bg-[#182030] hover:text-white"
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
                className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-[#c59b48]/20 pt-6 text-xs text-[#cbd5e1]"
              >
                <span className="inline-flex items-center gap-2 font-medium">
                  <Star size={15} className="fill-[#c59b48] text-[#c59b48]" />{" "}
                  5,0 estrelas no Google (10 avaliações 100% autênticas)
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <ShieldCheck size={15} className="text-[#c59b48]" /> Sede na Rua Franklin Mendonça, 341 · Carmo do Paranaíba - MG
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <HeartHandshake size={15} className="text-[#c59b48]" /> Atendimento Direto com o Advogado
                </span>
              </motion.div>
            </motion.div>

            {/* Hero Visual Presentation - Dr. Bruno Marques Executive Presence */}
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
              <div className="relative aspect-[4/4.9] overflow-hidden rounded-2xl border border-[#c59b48]/35 bg-[#0d121c] shadow-2xl ring-1 ring-[#c59b48]/20">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dr. Bruno Marques — Advogado em Carmo do Paranaíba MG"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#080b11] via-[#080b11]/85 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-8 sm:left-8 sm:right-8">
                  <div>
                    <p className="font-serif text-2xl font-normal tracking-wide text-white">
                      Dr. Bruno Marques
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#c59b48]">
                      Bruno Marques Advocacia · Carmo do Paranaíba - MG
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-[#c59b48]/40 bg-[#080b11]/85 text-[#faeed2] backdrop-blur-sm">
                    <Scale size={18} />
                  </span>
                </div>
              </div>

              {/* Floating authority badge */}
              <div className="absolute -left-3 top-6 z-10 rounded-lg border border-[#c59b48]/40 bg-[#0d121c]/95 px-4 py-2 text-[10px] font-bold tracking-[0.14em] text-[#faeed2] shadow-card backdrop-blur-md sm:-left-5">
                CARMO DO PARANAÍBA & REGIÃO · MINAS GERAIS
              </div>

              {/* Floating Google rating badge */}
              <div className="absolute -bottom-5 -right-3 z-10 rounded-xl border border-[#c59b48]/35 bg-[#0d121c]/95 p-3.5 shadow-card backdrop-blur-md sm:-right-5">
                <div className="flex items-center gap-2">
                  <GoogleIcon size={16} />
                  <div className="flex items-center gap-1">
                    <Star size={13} className="fill-[#c59b48] text-[#c59b48]" />
                    <span className="font-serif text-base font-bold text-white">
                      5,0 / 5,0
                    </span>
                  </div>
                </div>
                <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#cbd5e1]">
                  10 Avaliações no Google
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner - Authority Metrics */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-[#c59b48]/20 bg-[#0a0e16]"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              [
                "5,0 ★",
                "nota máxima impecável no Google com 10 avaliações autênticas",
              ],
              [
                "Não Abandona o Cliente",
                "posicionamento contínuo e clareza durante todo o processo",
              ],
              [
                "Carmo do Paranaíba - MG",
                "sede estruturada na Rua Franklin Mendonça, 341",
              ],
              [
                "Soluções Acertadas",
                "conhecimento técnico e combatividade em causas desafiadoras",
              ],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-[#c59b48]/20"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-2xl font-semibold text-[#c59b48] sm:text-3xl">
                  {value}
                </span>
                <span className="max-w-[165px] text-[11px] leading-5 text-[#cbd5e1]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre o Dr. Bruno Marques - Editorial Warm Ivory Stone Canvas */}
        <section
          id="sobre"
          className="scroll-mt-24 border-y border-[#c59b48]/30 bg-[#f7f6f3] py-20 text-[#0f1420] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
            {/* Dr. Bruno Marques presentation portrait */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[480px]"
            >
              <div className="relative aspect-[3/3.8] overflow-hidden rounded-2xl border-2 border-[#382506] bg-[#0d121c] shadow-2xl">
                <Image
                  src={FOTO_SOBRE_SRC}
                  alt="Dr. Bruno Marques — Advogado Titular"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#080b11]/90 via-[#080b11]/30 to-transparent" />
              </div>

              {/* Authority badge card - Deep Obsidian Bronze Contrast on Light Surface */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-[#c59b48]/40 bg-[#0d121c] px-5 py-4 shadow-xl sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-[#c59b48]">
                  <Award size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#c59b48]">
                    Advocacia Especializada & Consultoria
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-white">
                  Dr. Bruno Marques
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-[#c59b48]">
                  Bruno Marques Advocacia · Carmo do Paranaíba - MG
                </p>
                <p className="mt-1 text-[11px] leading-4 text-[#cbd5e1]">
                  Rua Franklin Mendonça, 341 - Carmo do Paranaíba
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-[#8c6622]/40 sm:-left-7 sm:-top-7 sm:size-32" />
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
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#8c6622]/30 bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8c6622] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#8c6622]" />
                <span>CONHEÇA O DR. BRUNO MARQUES</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-[#0f1420] sm:text-4xl lg:text-[3.25rem]"
              >
                Mais que um advogado: um defensor{" "}
                <span className="italic text-[#8c6622]">
                  dedicado, atencioso, que não abandona o cliente e busca soluções assertivas.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-[#334155]"
              >
                Com escritório sediado em{" "}
                <strong className="font-bold text-[#0f1420]">
                  Carmo do Paranaíba - MG
                </strong>
                , o Dr. Bruno Marques consolidou uma advocacia de prestígio e alta resolutividade pelo compromisso inegociável com a ética, seriedade técnica e transparência em cada orientação prestada.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-[#334155]"
              >
                O diferencial do seu atendimento está na dedicação e no acompanhamento próximo: aqui o cliente nunca fica sem resposta ou desamparado durante o processo. Seja em disputas civis complexas tidas como causas desafiadoras, demandas de família ou direitos trabalhistas e previdenciários, cada caso é conduzido com honestidade, proatividade e vigor técnico.
              </motion.p>

              {/* Authentic Client Quote Card */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-xl border border-[#e2ded6] bg-white/95 p-5 shadow-sm"
              >
                <blockquote className="font-serif text-sm italic leading-relaxed text-[#0f172a]">
                  &ldquo;Excelente profissional, solução jurídica muito acertada, e o melhor, não abandona o cliente e o posiciona durante todo o processo.&rdquo;
                </blockquote>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-[#8c6622]">
                  — Antonio Augusto Moreira Silva · Avaliação Verificada no Google (5,0 ★)
                </p>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-1 gap-2.5 text-xs font-semibold text-[#0f172a] sm:grid-cols-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#8c6622]" />
                  <span>Sede na Rua Franklin Mendonça, 341 - Carmo do Paranaíba</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#8c6622]" />
                  <span>Posicionamento contínuo e transparência sobre o processo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#8c6622]" />
                  <span>Honestidade e proatividade em todas as orientações</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#8c6622]" />
                  <span>Nota máxima 5,0 ★ no Google com 10 avaliações reais</span>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dr. Bruno Marques! Gostaria de agendar uma consulta sobre o meu caso."
                  )}
                  target="_blank"
                  size="md"
                  variant="dark"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar com o Dr. Bruno
                </GlowingButton>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0f1420] transition-colors hover:text-[#8c6622]"
                >
                  <Phone size={15} /> {PHONE_DISPLAY}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Áreas de Atuação Bruno Marques Advocacia */}
        <section
          id="atuacao"
          className="scroll-mt-24 border-t border-[#c59b48]/20 bg-[#0a0e16] py-20 sm:py-28 lg:py-32"
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
                description="Defesa especializada, estratégica e personalizada para resguardar seus direitos em demandas cíveis, contratuais, familiares, consumidor, trabalhistas e previdenciárias."
              >
                Atuação jurídica sólida em{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#fdfaf3] via-[#faeed2] to-[#c59b48]">
                  Carmo do Paranaíba, Alto Paranaíba e Minas Gerais.
                </span>
              </Heading>
              <p className="max-w-[270px] pb-1 text-xs leading-6 text-[#cbd5e1]">
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
                    className="group flex min-h-[350px] flex-col rounded-xl border border-[#c59b48]/20 bg-[#0d121c] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#c59b48]/50 hover:bg-[#121825] hover:shadow-obsidian sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-lg border border-[#c59b48]/25 bg-[#182030] text-[#c59b48] shadow-sm transition-colors group-hover:border-[#faeed2] group-hover:bg-[#202c46] group-hover:text-white">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <span className="font-serif text-2xl text-[#c59b48]/40">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-md border border-[#c59b48]/25 bg-[#182030] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#faeed2] shadow-sm">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.45rem] leading-tight text-white">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-6 text-[#cbd5e1]">
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

        {/* Por Que Escolher Bruno Marques Advocacia - Diferenciais (Dobra Clara com Pedra Quente) */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-t border-[#c59b48]/30 bg-[#f7f6f3] py-20 text-[#0f1420] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                light
                eyebrow="NOSSOS PILARES DE EXCELÊNCIA"
                description="Unimos dedicação intransigente, capacidade técnica comprovada e postura ética inegociável para transformar direitos em conquistas reais."
              >
                Por que confiar seu caso ao{" "}
                <span className="italic text-[#8c6622]">
                  Dr. Bruno Marques?
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dr. Bruno Marques! Gostaria de consultar sobre a minha situação jurídica."
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
              {/* Card 1: Acompanhamento Contínuo & O Cliente Não Fica Desamparado */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group flex flex-col justify-between rounded-xl border border-[#e2ded6] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c59b48] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#c59b48]/30 bg-[#ece8df] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#634512]">
                      <HeartHandshake size={14} /> Acompanhamento Contínuo
                    </span>
                    <span className="text-xs font-semibold text-[#8c6622]">
                      Presença & Respeito
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#0f1420] sm:text-[1.75rem]">
                    O Cliente Nunca Fica Sem Resposta ou Desamparado
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#334155]">
                    Sabemos que processos judiciais geram ansiedade e incerteza. No escritório Bruno Marques Advocacia, você conversa diretamente com o advogado, recebe atualizações claras sobre cada etapa e compreende exatamente o que está acontecendo com a sua causa.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-[#0f172a]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8c6622]" />
                      <span>Contato direto pelo WhatsApp com o Dr. Bruno Marques</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8c6622]" />
                      <span>Posicionamento constante e didático sobre o andamento dos autos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8c6622]" />
                      <span>Atendimento seguro, transparente e com sigilo profissional absoluto</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#e2ded6] pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dr. Bruno Marques! Gostaria de conversar diretamente com você sobre minha situação."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#c59b48]/40 bg-[#faf8f4] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#0f1420] transition-all hover:border-[#8c6622] hover:bg-[#0f1420] hover:text-[#faeed2]"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Conversar Diretamente no WhatsApp
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>

              {/* Card 2: Combatividade Técnica e Vitórias em Causas Desafiadoras */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="group flex flex-col justify-between rounded-xl border border-[#e2ded6] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c59b48] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#c59b48]/30 bg-[#ece8df] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#634512]">
                      <Scale size={14} /> Rigor Técnico Incisivo
                    </span>
                    <span className="text-xs font-semibold text-[#8c6622]">
                      Soluções Acertadas
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#0f1420] sm:text-[1.75rem]">
                    Combatividade Jurídica & Foco no Êxito Processual
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#334155]">
                    Comprovado por clientes que venceram processos antes tidos como desafiadores ou casos perdidos. Analisamos minuciosamente o conjunto probatório e aplicamos a jurisprudência mais sólida para lutar incansavelmente por cada direito devido a você.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-[#0f172a]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8c6622]" />
                      <span>Análise técnica aprofundada de documentos, provas e precedentes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8c6622]" />
                      <span>Atuação firme perante a Justiça Estadual, Federal e do Trabalho</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8c6622]" />
                      <span>Cumprimento rigoroso de prazos e recursos estratégicos cabíveis</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#e2ded6] pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dr. Bruno Marques! Preciso de ajuda jurídica para analisar meu caso."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#c59b48]/40 bg-[#faf8f4] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#0f1420] transition-all hover:border-[#8c6622] hover:bg-[#0f1420] hover:text-[#faeed2]"
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

        {/* Nosso Compromisso com Você (Dobra Clara - Continuação) */}
        <section className="relative overflow-hidden border-t border-[#c59b48]/20 bg-[#f7f6f3] py-20 text-[#0f1420] sm:py-24 lg:py-28">
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-[#c59b48]/5 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-[#c59b48]/5 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                light
                eyebrow="NOSSO COMPROMISSO COM VOCÊ"
                description="A nota máxima de 5,0 ★ no Google com 10 avaliações autênticas reflete a seriedade, transparência e respeito com que cada causa é defendida."
              >
                Cuidamos do seu caso com{" "}
                <span className="italic text-[#8c6622]">
                  honestidade, proatividade e acompanhamento real.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-[#e2ded6] bg-white p-6 font-serif text-base italic leading-7 text-[#0f172a] shadow-sm">
                &ldquo;Um profissional excelente! Atendimento sempre muito atencioso, respeitoso e claro em todas as orientações. É nítido o comprometimento e o cuidado, transmite segurança e tranquilidade durante todo o processo.&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-[#8c6622]">
                  — Gabriela Matos · Avaliação Verificada no Google Meu Negócio (5,0 ★)
                </footer>
              </blockquote>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-[#e2ded6]"
            >
              {[
                [
                  "01",
                  "Honestidade & Diagnóstico Jurídico Realista",
                  "Você recebe uma avaliação sincera e proativa sobre as reais possibilidades do seu caso, sem falsas promessas, com clareza e solidez técnica.",
                ],
                [
                  "02",
                  "Posicionamento Constante do Cliente",
                  "Você nunca fica sem saber o andamento dos seus direitos. Mantemos você informado sobre cada protocolo, decisão e próxima etapa processual.",
                ],
                [
                  "03",
                  "Combatividade e Soluções Acertadas",
                  "Lutamos incansavelmente pelos melhores resultados possíveis, revertendo desafios e exigindo o cumprimento estrito da lei em favor do cliente.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-semibold text-[#8c6622]">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-[#0f1420]">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-[#334155]">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Avaliações no Google (Depoimentos Reais) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 border-t border-[#c59b48]/30 bg-[#f1efe9] py-20 text-[#0f1420] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                light
                eyebrow="PROVA SOCIAL VERIFICADA · GOOGLE MEU NEGÓCIO"
                description="Confira avaliações reais e espontâneas de clientes que confiaram suas causas ao Dr. Bruno Marques em Carmo do Paranaíba e Minas Gerais."
              >
                Avaliado com nota máxima 5,0 ★ pela{" "}
                <span className="italic text-[#8c6622]">
                  competência, segurança, dedicação e acompanhamento contínuo.
                </span>
              </Heading>

              {/* Verified Google Badge Card */}
              <div className="flex flex-col gap-3 rounded-xl border border-[#e2ded6] bg-white p-5 shadow-sm sm:flex-row sm:items-center md:min-w-[340px]">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-lg border border-[#c59b48]/30 bg-[#ece8df] shadow-xs">
                  <GoogleIcon size={30} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-3xl font-bold leading-none text-[#0f1420]">
                      5,0
                    </span>
                    <div className="flex gap-0.5 text-[#c59b48]">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-[#c59b48] text-[#c59b48]"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#334155]">
                    Bruno Marques Advocacia
                  </p>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-[#634512] transition-colors hover:text-[#0f1420]"
                  >
                    10 avaliações no Google <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Authentic Google Reviews Grid */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clientReviews.map((review) => (
                <article
                  key={review.name}
                  className="group relative flex flex-col justify-between rounded-xl border border-[#e2ded6] bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#c59b48] hover:shadow-md sm:p-8"
                >
                  <div>
                    {/* Header: Stars + Badge + Google icon */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-1 text-[#c59b48]">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-[#c59b48] text-[#c59b48]"
                          />
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#334155]">
                        <GoogleIcon size={13} />
                        <span className="rounded-md border border-[#c59b48]/30 bg-[#ece8df] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#634512] shadow-xs">
                          {review.badge}
                        </span>
                      </div>
                    </div>

                    {/* Authentic review content */}
                    <p className="mt-5 text-[14px] italic leading-relaxed text-[#0f172a]">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  {/* Reviewer info */}
                  <div className="mt-6 flex items-center gap-3 border-t border-[#e2ded6] pt-4">
                    <div className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#c59b48]/30 bg-[#ece8df] font-serif text-sm font-semibold text-[#634512] shadow-xs">
                      {review.name.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-serif text-base font-semibold text-[#0f1420]">
                        {review.name}
                      </p>
                      <p className="text-[10px] uppercase tracking-wider text-[#64748b]">
                        {review.reviewsCount}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom Actions and Trust Tags */}
            <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-[#e2ded6] pt-8 sm:flex-row">
              <div className="flex flex-wrap items-center gap-2">
                {[
                  "Advogado em Carmo do Paranaíba - MG",
                  "Atendimento em Todo o Alto Paranaíba",
                  "Direito Cível & Indenizações",
                  "Direito de Família & Sucessões",
                  "Trabalhista & INSS Previdenciário",
                  "Nota 5,0 ★ no Google (10 avaliações)",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#e2ded6] bg-white px-3.5 py-1.5 text-[11px] font-medium text-[#0f172a] shadow-xs"
                  >
                    <CheckCircle2 size={13} className="text-[#8c6622]" />
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#634512] transition-colors hover:text-[#0f1420]"
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

        {/* Contato & Localização da Sede em Carmo do Paranaíba */}
        <section
          id="contato"
          className="scroll-mt-24 border-t border-[#c59b48]/30 bg-[#f7f6f3] py-20 text-[#0f1420] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                light
                eyebrow="CONTATO & ATENDIMENTO EM CARMO DO PARANAÍBA"
                description="Inicie seu atendimento diretamente pelo WhatsApp ou agende uma reunião presencial em nossa sede. Prestamos assistência jurídica ágil para clientes de Carmo do Paranaíba, região e todo o Brasil via consultoria online."
              >
                Estamos prontos para{" "}
                <span className="italic text-[#8c6622]">
                  escutar e defender você.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dr. Bruno Marques! Gostaria de agendar um horário para atendimento."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} /> Iniciar Conversa no WhatsApp
                </GlowingButton>
                <p className="text-[11px] leading-5 text-[#334155]">
                  Telefone e WhatsApp do escritório:{" "}
                  <strong className="text-[#0f1420]">{PHONE_DISPLAY}</strong>
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-[#334155]">
                <div className="flex items-start gap-3">
                  <Clock
                    size={16}
                    className="mt-0.5 shrink-0 text-[#8c6622]"
                  />
                  <div>
                    <p className="font-semibold text-[#0f1420]">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-[#0f172a]">
                      Segunda a Sexta-feira das 08:00 às 18:00
                    </p>
                    <p className="text-[11px] text-[#64748b]">
                      Atendimento presencial com hora marcada em Carmo do Paranaíba e consultoria jurídica online em todo o Brasil
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#8c6622]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-medium text-[#0f1420] transition-colors hover:text-[#8c6622]"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#8c6622]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#8c6622] text-[#0f172a]"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#8c6622]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="transition-colors hover:text-[#8c6622] text-[#0f172a]"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#8c6622]"
                  />
                  <span className="text-[#0f172a]">{ADDRESS_TEXT}</span>
                </div>
              </div>
            </div>

            {/* Office & Schedule Card */}
            <div className="relative overflow-hidden rounded-xl border border-[#e2ded6] bg-white p-7 shadow-md sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#b38836] to-[#faeed2]" />

              <div className="flex items-center gap-4">
                <div className="relative size-[64px] shrink-0 overflow-hidden rounded-full border-2 border-[#c59b48]/60 bg-[#080b11] shadow-md sm:size-[76px]">
                  <Image
                    src={LOGO_SEAL_SRC}
                    alt="Selo Bruno Marques Advocacia"
                    fill
                    sizes="76px"
                    className="object-contain p-1.5"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8c6622]">
                    Sede do Escritório
                  </p>
                  <p className="mt-0.5 font-cinzel text-xl font-bold text-[#0f1420] sm:text-2xl">
                    Bruno Marques Advocacia
                  </p>
                </div>
              </div>

              <address className="mt-7 max-w-md text-[14px] not-italic leading-7 text-[#334155]">
                <strong className="font-semibold text-[#0f1420]">
                  Dr. Bruno Marques
                </strong>
                <br />
                Advogado Titular e Consultor Jurídico
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-lg border border-[#e2ded6] bg-[#faf8f4] p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#8c6622]">
                  Atendimento & Horários
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-[#334155]">
                  <span>Segunda a Sexta</span>
                  <span className="text-right font-semibold text-[#0f1420]">
                    08:00 às 18:00
                  </span>
                  <span>Atendimento Presencial</span>
                  <span className="text-right font-medium text-[#634512]">
                    Carmo do Paranaíba - MG
                  </span>
                  <span>Localização</span>
                  <span className="text-right text-[#0f172a]">Rua Franklin Mendonça, 341</span>
                  <span>Atendimento Online</span>
                  <span className="text-right text-[#0f172a]">Todo o Brasil</span>
                </div>
              </div>

              <div className="my-7 h-px bg-[#e2ded6]" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-[#64748b]">
                  Atendimento seguro com hora marcada em Carmo do Paranaíba
                </p>
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dr. Bruno Marques! Gostaria de agendar um atendimento no escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#c59b48]/40 bg-[#ece8df] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#0f1420] transition-colors hover:border-[#8c6622] hover:bg-[#0f1420] hover:text-[#faeed2]"
                >
                  <WhatsAppIcon size={14} /> Falar com o Advogado <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip */}
        <section className="border-t border-[#c59b48]/20 bg-gradient-to-r from-[#080b11] via-[#121825] to-[#080b11] px-5 py-14 text-white shadow-inner sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#c59b48]">
                <Sparkles size={13} /> BRUNO MARQUES ADVOCACIA · CARMO DO PARANAÍBA & REGIÃO - MG
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                Precisa de orientação jurídica ética, combativa e de confiança?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dr. Bruno Marques! Gostaria de consultar sobre meus direitos com seu escritório."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-lg bg-gradient-to-r from-[#b38836] via-[#dfb76c] to-[#b38836] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#090c12] shadow-md transition-all hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp{" "}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#c59b48]/20 bg-[#05070c] px-5 py-14 text-white sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <a
                href="#inicio"
                aria-label="Bruno Marques Advocacia — Escritório de Advocacia"
                className="inline-flex items-center gap-3.5 transition-transform hover:scale-[1.02]"
              >
                <div className="relative size-[72px] shrink-0 overflow-hidden rounded-full border-2 border-[#c59b48]/50 bg-[#080b11] shadow-md sm:size-[80px]">
                  <Image
                    src={LOGO_SEAL_SRC}
                    alt="Bruno Marques Advocacia"
                    fill
                    sizes="80px"
                    className="object-contain p-1.5"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-cinzel text-xl font-bold tracking-wider text-white sm:text-2xl">
                    BRUNO MARQUES
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c59b48]">
                    Advocacia & Consultoria
                  </span>
                </div>
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-[#cbd5e1]">
                ⚖️ Advocacia resolutiva, estratégica e ética. Atuação com excelência técnica em Direito Cível, Família, Consumidor, Trabalhista, Previdenciário e Contratos em Carmo do Paranaíba e Minas Gerais.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-[#c59b48]">
                Dr. Bruno Marques · Advogado
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c59b48]">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-[#cbd5e1]">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  Dr. Bruno Marques
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
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c59b48]">
                Contato & Atendimento
              </h2>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-[#cbd5e1]">
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dr. Bruno Marques! Gostaria de solicitar um atendimento com o escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 font-medium text-[#faeed2]"
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
                <p className="inline-flex items-center gap-2 pt-1 text-[11px] text-[#c59b48]">
                  <Clock size={14} className="shrink-0" /> Seg a Sex: 08:00 às 18:00
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-[#c59b48]/20 pt-6 text-[10px] text-stone-400 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} BRUNO MARQUES ADVOCACIA · DR. BRUNO MARQUES. Todos os direitos reservados.
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
              "Olá, Dr. Bruno Marques! Gostaria de consultar sobre meus direitos com seu escritório."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com o Dr. Bruno Marques"
            className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          >
            <WhatsAppIcon size={28} />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-[#0d121c] border border-[#c59b48]/30 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg transition-opacity group-hover:block">
              Falar com o Dr. Bruno Marques
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
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-xl border border-[#c59b48]/35 bg-[#0d121c] p-7 shadow-2xl sm:max-w-xl sm:rounded-xl sm:p-10"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-[#c59b48]/30 bg-[#182030] text-[#faeed2] transition-colors hover:border-[#f3dfa7] hover:text-white"
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

                <p className="mt-5 text-sm leading-7 text-[#cbd5e1]">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-[#c59b48]/20 pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#c59b48]">
                    Principais demandas atendidas pelo escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-stone-200"
                      >
                        <span className="size-2 shrink-0 rounded-full bg-[#c59b48]" />
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
