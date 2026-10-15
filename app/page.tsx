"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Briefcase,
  CheckCircle2,
  Clock,
  FileText,
  Handshake,
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

const WHATSAPP_NUMBER = "5537991642670";
const PHONE_DISPLAY = "(37) 99164-2670";
const EMAIL_CONTACT = "contato@giseleferreira.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/gisele.fferreiraadv/";
const INSTAGRAM_HANDLE = "@gisele.fferreiraadv";

const ADDRESS_TEXT =
  "R. Europa, 176 - Belvedere, Nova Serrana - MG, 35526-720, Brasil";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=R.+Europa,+176+-+Belvedere,+Nova+Serrana+-+MG,+35526-720";

const LOGO_SRC = "/logo-gisele-ferreira.png";
const FOTO_HERO_SRC = "/dra-gisele-ferreira-mesa.png";
const FOTO_SOBRE_SRC = "/dra-gisele-ferreira-perfil.png";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Gisele Ferreira! Gostaria de consultar sobre meus direitos e agendar um atendimento.";
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
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.04 } },
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
    tag: "Divórcio · Inventários · Partilha · Pensão · Guarda",
    summary:
      "Apoio jurídico acolhedor e estratégico em momentos decisivos, garantindo a proteção dos seus entes queridos e a preservação justa do patrimônio familiar.",
    details:
      "Demandas familiares exigem sensibilidade humana aliada a absoluto rigor técnico. A Dra. Gisele Ferreira atua na condução de inventários extrajudiciais em cartório com rapidez, partilhas amigáveis, divórcios consensuais e litigiosos, fixação de pensão alimentícia e guarda, sempre priorizando o equilíbrio, o respeito mútuo e a segurança dos filhos e herdeiros.",
    topics: [
      "Inventário extrajudicial em cartório rápido, econômico e sem burocracia",
      "Inventário judicial contencioso e partilha complexa de patrimônio",
      "Divórcio consensual e litigioso com divisão equilibrada de bens",
      "Fixação, execução e revisão de alimentos (pensão alimentícia)",
      "Regulamentação de guarda, convivência familiar e alienação parental",
      "Planejamento sucessório, testamentos e união estável",
    ],
    whatsAppText:
      "Olá, Dra. Gisele Ferreira! Gostaria de uma consultoria em Direito de Família / Inventário / Divórcio.",
  },
  {
    id: "direito-previdenciario-inss",
    title: "Direito Previdenciário & INSS",
    icon: Landmark,
    tag: "Aposentadorias · BPC/LOAS · Auxílios · Recursos",
    summary:
      "Orientação e representação combativa perante o INSS e na Justiça Federal para obtenção, revisão e restabelecimento de benefícios previdenciários indeferidos.",
    details:
      "Muitos trabalhadores têm benefícios negados indevidamente por falhas cadastrais ou perícias apressadas. A Dra. Gisele Ferreira realiza planejamento previdenciário minucioso, analisando cada período contributivo no CNIS para destravar aposentadorias no valor máximo devido, auxílios por incapacidade e benefícios assistenciais como o BPC/LOAS.",
    topics: [
      "Concessão e planejamento de aposentadoria por idade, tempo e especial",
      "Requerimento e recurso para BPC/LOAS (idosos e pessoas com deficiência)",
      "Auxílio por incapacidade temporária (auxílio-doença) e aposentadoria por invalidez",
      "Pensão por morte, auxílio-reclusão e salário-maternidade",
      "Ações judiciais para reverter indeferimentos e negativas indevidas do INSS",
      "Cálculo minucioso de tempo de contribuição e retificação de CNIS",
    ],
    whatsAppText:
      "Olá, Dra. Gisele! Preciso de orientação jurídica sobre benefícios do INSS / Aposentadoria.",
  },
  {
    id: "direito-civil-contratos-estrategicos",
    title: "Direito Civil & Contratos Estratégicos",
    icon: FileText,
    tag: "Contratos · Indenizações · Cobranças · Notificações",
    summary:
      "Segurança jurídica na elaboração, revisão e rescisão de contratos, além de ações de responsabilidade civil, indenizações e cobranças de créditos.",
    details:
      "Um contrato bem estruturado previne perdas financeiras e resguarda seu patrimônio. Dra. Gisele Ferreira oferece assessoria preventiva e contenciosa minuciosa, assegurando clareza cláusula por cláusula, garantias contratuais sólidas e resolução eficaz de inadimplementos e prejuízos materiais.",
    topics: [
      "Elaboração e revisão criteriosa de contratos civis, imobiliários e comerciais",
      "Ações indenizatórias por descumprimento de obrigações e quebra de contrato",
      "Execução e cobrança judicial e extrajudicial de títulos de crédito e dívidas",
      "Notificações extrajudiciais formais para constituir em mora e resguardar direitos",
      "Ações possessórias, usucapião e regularização imobiliária em Nova Serrana e região",
      "Consultoria preventiva para evitar litígios prolongados e desgastantes",
    ],
    whatsAppText:
      "Olá, Dra. Gisele! Gostaria de consultoria jurídica em Direito Civil / análise contratual.",
  },
  {
    id: "direito-do-consumidor-reparacao-de-danos",
    title: "Direito do Consumidor & Reparação de Danos",
    icon: ShieldCheck,
    tag: "SPC/Serasa · Danos Morais · Fraudes · Cobranças Abusivas",
    summary:
      "Defesa incisiva contra abusos de empresas, negativações indevidas, golpes financeiros, fraudes bancárias e cobranças irregulares.",
    details:
      "Práticas abusivas de bancos, operadoras e fornecedores exigem uma postura jurídica ágil e firme. Atuamos com pedidos liminares para limpar seu nome imediatamente, anular cobranças fraudulentas (empréstimos consignados não contratados, fraudes do Pix) e pleitear indenizações justas por danos morais.",
    topics: [
      "Exclusão liminar de inscrição indevida nos cadastros de SPC e Serasa",
      "Indenização por danos morais decorrentes de negativação irregular e constrangimento",
      "Ações contra fraudes financeiras, empréstimos não autorizados e golpes bancários",
      "Cobranças indevidas de operadoras de telefonia, energia, água e bancos",
      "Descumprimento de prazos e contratos de prestação de serviços",
      "Restituição de valores cobrados indevidamente com repetição de indébito (em dobro)",
    ],
    whatsAppText:
      "Olá, Dra. Gisele! Gostaria de uma análise para um caso de direito do consumidor / cobrança indevida.",
  },
  {
    id: "direito-trabalhista-relacoes-de-emprego",
    title: "Direito Trabalhista & Relações de Emprego",
    icon: Briefcase,
    tag: "Rescisões · Horas Extras · Vínculo · Acidentes",
    summary:
      "Orientação e representação técnica para assegurar o respeito integral aos direitos trabalhistas e o recebimento justo de todas as verbas rescisórias.",
    details:
      "Atuamos na conferência criteriosa de verbas rescisórias, rescisão indireta em casos de descumprimento pelo empregador, cobrança de horas extras e adicionais devidos, além da reparação por danos decorrentes de acidentes e assédio no trabalho.",
    topics: [
      "Cobrança integral de verbas rescisórias, férias, 13º e FGTS não depositado",
      "Rescisão indireta do contrato de trabalho por justa causa do empregador",
      "Horas extras, adicionais noturnos, de insalubridade e periculosidade não pagos",
      "Reconhecimento de vínculo empregatício e anotação formal em carteira",
      "Indenizações por acidentes de trabalho e doenças ocupacionais",
      "Defesa e reparação por assédio moral e condições degradantes de trabalho",
    ],
    whatsAppText:
      "Olá, Dra. Gisele! Gostaria de consultoria sobre meus direitos trabalhistas / rescisão.",
  },
  {
    id: "resolucao-extrajudicial-acordos-ageis",
    title: "Resolução Extrajudicial & Acordos Ágeis",
    icon: Handshake,
    tag: "Mediação Direta · Solução Rápida sem Processo",
    summary:
      "Negociação direta estratégica para resolver conflitos de forma célere, econômica e amigável, sem a lentidão e os custos de uma disputa judicial.",
    details:
      "Muitos dos melhores resultados jurídicos acontecem antes mesmo de acionar a Justiça. A postura conciliadora, técnica e assertiva da Dra. Gisele Ferreira permite obter acordos equilibrados, partilhas pacíficas e indenizações com máxima agilidade e economia emocional para o cliente.",
    topics: [
      "Negociação extrajudicial direta entre partes, empresas e instituições",
      "Redação e homologação de termos de acordo com validade de título executivo",
      "Mediação pacífica em litígios familiares, patrimoniais e contratuais",
      "Notificações formais para viabilizar composição amigável célere",
      "Economia expressiva de despesas processuais, custas cartorárias e anos de espera",
      "Soluções personalizadas com total sigilo, privacidade e respeito mútuo",
    ],
    whatsAppText:
      "Olá, Dra. Gisele! Preciso de auxílio para negociar e resolver um impasse de forma amigável e extrajudicial.",
  },
];

const clientReviews = [
  {
    name: "Welton Ferreira",
    reviewsCount: "Cliente Verificado · 3 avaliações",
    date: "Google Meu Negócio · 7 meses atrás",
    badge: "transparência & segurança",
    content:
      "Excelente profissional! Super atencioso, disponível e transparente em todas as fases do processo. Transmite muita segurança e conhecimento técnico. Recomendo de olhos fechados!",
  },
  {
    name: "Keity Lorrany",
    reviewsCount: "Cliente Verificada · 3 avaliações",
    date: "Google Meu Negócio · 2 anos atrás",
    badge: "trabalho impecável",
    content:
      "Uma Advogada incrível muito precisa seu trabalho impecável atenciosa como sempre, recomendo sempre também 👏🏻👏🏻👏🏻",
  },
  {
    name: "saulo dias benicio",
    reviewsCount: "Local Guide · 19 avaliações · 11 fotos",
    date: "Google Meu Negócio · 1 mês atrás",
    badge: "experiente no que faz",
    content: "Experiente no que faz parabéns",
  },
  {
    name: "Kelly Cristina",
    reviewsCount: "Cliente Verificada · 1 avaliação",
    date: "Google Meu Negócio · 2 anos atrás",
    badge: "atendimento acolhedor",
    content: "Uma ótima advogada, atende super bem",
  },
  {
    name: "Gilmara Lopes",
    reviewsCount: "Cliente Verificada · 1 avaliação",
    date: "Google Meu Negócio · 2 anos atrás",
    badge: "excelente trabalho",
    content: "Ótima profissional, excelente trabalho",
  },
  {
    name: "Jaqueline Oliveira",
    reviewsCount: "Cliente Verificada · 3 avaliações",
    date: "Google Meu Negócio · 2 anos atrás",
    badge: "excelente profissional",
    content: "Excelente profissional 👏🏽👏🏽",
  },
  {
    name: "Vanessa Moreira",
    reviewsCount: "Cliente Verificada · 2 avaliações · 6 fotos",
    date: "Google Meu Negócio · 2 anos atrás",
    badge: "100% dedicação",
    content: "Maravilhoso dedicação 100%",
  },
  {
    name: "Marylane Ferreira",
    reviewsCount: "Cliente Verificada · 2 avaliações",
    date: "Google Meu Negócio · 2 anos atrás",
    badge: "confiança e ética",
    content: "Excelente profissional.",
  },
  {
    name: "Maurício Guedes Guedes",
    reviewsCount: "Cliente Verificado · 4 avaliações",
    date: "Google Meu Negócio · 2 anos atrás",
    badge: "recomendo",
    content: "Ótima advogada",
  },
];

function Heading({
  eyebrow,
  children,
  description,
  light = false,
}: {
  eyebrow: string;
  children: ReactNode;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p className={light ? "eyebrow-light mb-4" : "eyebrow mb-4"}>{eyebrow}</p>
      <h2
        className={`font-serif text-3xl leading-[1.12] tracking-[-0.02em] sm:text-4xl lg:text-[3.15rem] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {children}
      </h2>
      {description && (
        <p
          className={`mt-4 text-[15px] leading-7 ${
            light ? "text-brand-100/80" : "text-ink-soft"
          }`}
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
      <main className="overflow-hidden bg-pearl text-ink">
        {/* Navigation Bar - Luxury Dark Wine with Rose Gold Accents */}
        <header className="sticky top-0 z-40 border-b border-brand-800/40 bg-brand-950/95 backdrop-blur-xl">
          <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-5 px-5 sm:h-[82px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Gisele Ferreira Advogada — Início"
              onClick={closeMenu}
              className="flex items-center gap-3 transition-opacity hover:opacity-90"
            >
              <Image
                src={LOGO_SRC}
                width={1536}
                height={1024}
                alt="Gisele Ferreira Advogada - Logotipo Oficial"
                priority
                loading="eager"
                className="h-[56px] w-auto object-contain sm:h-[64px]"
              />
            </a>

            <nav
              aria-label="Navegação principal"
              className="hidden items-center gap-7 lg:flex"
            >
              <a className="nav-link" href="#inicio">
                Início
              </a>
              <a className="nav-link" href="#sobre">
                Sobre a Advogada
              </a>
              <a className="nav-link" href="#atuacao">
                Áreas de Atuação
              </a>
              <a className="nav-link" href="#diferenciais">
                Por que Escolher?
              </a>
              <a className="nav-link" href="#avaliacoes">
                Avaliações (4,9 ★)
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
                aria-label="Instagram Gisele Ferreira Advogada"
                className="grid size-10 place-items-center rounded-full border border-gold-300/30 text-gold-300 transition-all hover:border-gold-300 hover:bg-brand-900 hover:text-white"
                title="Instagram @gisele.fferreiraadv"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                aria-label="Ligar para a Dra. Gisele Ferreira"
                className="grid size-10 place-items-center rounded-full border border-gold-300/30 text-gold-300 transition-all hover:border-gold-300 hover:bg-brand-900 hover:text-white"
                title={`Ligar: ${PHONE_DISPLAY}`}
              >
                <Phone size={16} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Dra. Gisele Ferreira"
                className="grid size-10 place-items-center rounded-full border border-gold-300/30 text-gold-300 transition-all hover:border-gold-300 hover:bg-brand-900 hover:text-white"
                title="Atendimento no WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <GlowingButton
                href={getWhatsAppUrl()}
                target="_blank"
                size="sm"
                variant="burgundy"
                className="rounded-full shadow-sm"
              >
                Falar no WhatsApp <ArrowUpRight size={14} />
              </GlowingButton>
            </div>

            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="grid size-11 place-items-center rounded-full border border-gold-300/30 text-gold-300 lg:hidden"
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
                className="overflow-hidden border-t border-brand-800/40 bg-brand-950 px-6 lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["Sobre a Advogada", "#sobre"],
                    ["Áreas de Atuação", "#atuacao"],
                    ["Por que Escolher?", "#diferenciais"],
                    ["Avaliações no Google (4,9 ★)", "#avaliacoes"],
                    ["Contato & Sede em Nova Serrana", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm font-medium text-brand-100 hover:text-white"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-700 via-brand-600 to-brand-700 px-5 py-3.5 text-xs font-bold uppercase tracking-[0.13em] text-white shadow-md transition-all hover:brightness-105"
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} /> WhatsApp: {PHONE_DISPLAY}
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-300/30 px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-gold-300 transition-all hover:border-gold-200"
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <MapPin size={15} /> R. Europa, 176 - Belvedere, Nova Serrana
                    </a>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-brand-200/50 bg-gradient-to-b from-brand-50/80 via-pearl to-white"
        >
          {/* Subtle burgundy & rose-gold ambient glow */}
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[36rem] rounded-full bg-brand-200/35 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[28rem] rounded-full bg-brand-100/50 blur-3xl" />

          <div className="mx-auto grid min-h-[660px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[720px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-12 lg:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-6"
            >
              <motion.div variants={reveal} className="eyebrow mb-6">
                <span className="size-2 shrink-0 rounded-full bg-brand-600" />
                <span>
                  Nova Serrana - MG · Atendimento em Todo o Brasil · 4,9 ★ no Google
                </span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="max-w-[760px] font-serif text-[2.75rem] leading-[1.04] tracking-[-0.025em] text-ink sm:text-5xl lg:text-[4.15rem]"
              >
                Defesa jurídica estratégica, célere e humanizada para{" "}
                <span className="font-serif italic text-brand-700">
                  garantir seus direitos e sua família.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-ink-soft sm:text-base sm:leading-8"
              >
                Sob a liderança da{" "}
                <strong className="font-semibold text-ink">
                  Dra. Gisele Ferreira
                </strong>
                , nosso escritório alia combatividade técnica, escuta qualificada e excelência processual. Especialista em Direito de Família e Sucessões (divórcios, inventários em cartório, partilhas e pensão), Direito Previdenciário (INSS), Cível, Consumidor e soluções extrajudiciais de conflitos. Sede no Belvedere em Nova Serrana (MG) com atendimento presencial e suporte online ágil em todo o Brasil.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl()}
                  target="_blank"
                  size="lg"
                  variant="burgundy"
                  className="rounded-full shadow-md"
                >
                  <WhatsAppIcon size={16} /> Consultar Meu Caso no WhatsApp
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-ink transition-colors hover:text-brand-700"
                >
                  Conhecer áreas de atuação{" "}
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-brand-200/70 pt-6 text-xs text-ink-soft"
              >
                <span className="inline-flex items-center gap-2 font-medium">
                  <Star size={15} className="fill-amber-500 text-amber-500" />{" "}
                  4,9 estrelas no Google (12 avaliações reais)
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <Clock size={15} className="text-brand-700" /> Atendimento de Segunda a Sexta: 08:00 às 18:00
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <MapPin size={15} className="text-brand-700" /> R. Europa, 176 - Belvedere · Nova Serrana - MG
                </span>
              </motion.div>
            </motion.div>

            {/* Hero Visual Presentation - Dra. Gisele Ferreira na Mesa com Livro de Família */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.95,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-[500px] lg:ml-auto lg:mr-2"
            >
              <div className="relative aspect-[4/4.3] overflow-hidden rounded-3xl border border-brand-500/35 bg-brand-950 shadow-2xl ring-1 ring-brand-300/30">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dra. Gisele Ferreira — Advogada em Nova Serrana - MG"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-950 via-brand-950/70 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-8 sm:left-8 sm:right-8">
                  <div>
                    <p className="font-serif text-2xl font-normal tracking-wide text-white">
                      Dra. Gisele Ferreira
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-brand-200">
                      Advocacia Especializada · Nova Serrana - MG
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-gold-300/40 bg-brand-950/80 text-gold-300 backdrop-blur-sm">
                    <Scale size={18} />
                  </span>
                </div>
              </div>

              {/* Floating authority badge */}
              <div className="absolute -left-3 top-6 z-10 rounded-full border border-gold-300/40 bg-white/95 px-4 py-2 text-[10px] font-bold tracking-[0.14em] text-brand-900 shadow-card backdrop-blur-md sm:-left-5">
                NOVA SERRANA · ATENDIMENTO BRASIL
              </div>

              {/* Floating Google rating badge */}
              <div className="absolute -bottom-5 -right-3 z-10 rounded-2xl border border-brand-200/80 bg-white/95 p-3.5 shadow-card backdrop-blur-md sm:-right-5">
                <div className="flex items-center gap-2">
                  <GoogleIcon size={16} />
                  <div className="flex items-center gap-1 text-brand-800">
                    <Star size={13} className="fill-amber-500 text-amber-500" />
                    <span className="font-serif text-base font-bold text-ink">
                      4,9 / 5,0
                    </span>
                  </div>
                </div>
                <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-ink-soft">
                  12 Avaliações no Google
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-brand-200/60 bg-white"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              [
                "4,9 ★",
                "avaliação de excelência com 12 depoimentos reais e verificados no Google",
              ],
              [
                "Família & INSS",
                "atuação especializada em direitos patrimoniais, familiares e benefícios",
              ],
              [
                "Nova Serrana",
                "sede própria no Belvedere na R. Europa, 176 com atendimento presencial",
              ],
              [
                "100% Online",
                "atendimento digital célere e seguro para clientes em todo o país",
              ],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-brand-200/70"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-2xl font-semibold text-brand-800 sm:text-3xl">
                  {value}
                </span>
                <span className="max-w-[165px] text-[11px] leading-5 text-ink-soft">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre a Dra. Gisele Ferreira */}
        <section
          id="sobre"
          className="scroll-mt-24 bg-pearl py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
            {/* Dra. Gisele Ferreira portrait */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[480px]"
            >
              <div className="relative aspect-[3/3.8] overflow-hidden rounded-2xl border border-brand-700/30 bg-brand-950 shadow-card">
                <Image
                  src={FOTO_SOBRE_SRC}
                  alt="Dra. Gisele Ferreira — Advogada"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-950/95 via-brand-950/40 to-transparent" />
              </div>

              {/* Authority badge card */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-brand-200 bg-white px-5 py-4 shadow-card sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-brand-800">
                  <Award size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em]">
                    Advocacia Especializada & Humanizada
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-ink">
                  Dra. Gisele Ferreira
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-brand-700">
                  Gisele Ferreira Advogada
                </p>
                <p className="mt-1 text-[11px] leading-4 text-ink-soft">
                  R. Europa, 176 - Belvedere, Nova Serrana - MG. Atendimento nacional.
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l border-t border-brand-400/40 sm:-left-7 sm:-top-7 sm:size-32" />
            </motion.div>

            {/* Text description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.p variants={reveal} className="eyebrow">
                SOBRE A ADVOGADA & O ESCRITÓRIO
              </motion.p>
              <motion.h2
                variants={reveal}
                className="mt-4 max-w-2xl font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-ink sm:text-4xl lg:text-[3.25rem]"
              >
                Rigor técnico e determinação aliados a um{" "}
                <span className="italic text-brand-700">
                  atendimento acolhedor, transparente e resolutivo.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-ink-soft"
              >
                Com sede no bairro Belvedere em{" "}
                <strong className="text-ink">
                  Nova Serrana (MG), na Rua Europa, 176
                </strong>
                , e atuação digital com alcance em todo o país, a advocacia de{" "}
                <strong className="text-ink">
                  Dra. Gisele Ferreira
                </strong>{" "}
                nasceu do compromisso intransigente com a justiça, a ética e a dedicação total aos interesses de cada cliente.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-ink-soft"
              >
                Reconhecida pelos clientes pela disponibilidade, transparência absoluta em cada fase do processo e transmissão de profunda segurança técnica, Dra. Gisele conduz cada caso com atendimento personalizado e atenção máxima aos detalhes. Aqui, você é ouvido com empatia e nunca fica sem resposta.
              </motion.p>

              {/* Quote Card */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-xl border border-brand-300/40 bg-brand-50/80 p-5 shadow-xs"
              >
                <blockquote className="font-serif text-sm italic leading-relaxed text-brand-900">
                  &ldquo;Excelente profissional! Super atencioso, disponível e transparente em todas as fases do processo. Transmite muita segurança e conhecimento técnico. Recomendo de olhos fechados!&rdquo;
                </blockquote>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-brand-700">
                  — Welton Ferreira · Avaliação Verificada no Google Meu Negócio
                </p>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-1 gap-2.5 text-xs font-medium text-ink sm:grid-cols-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={15}
                    className="shrink-0 text-brand-700"
                  />
                  <span>
                    Atuação precisa e sensível em Direito de Família e Sucessões
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={15}
                    className="shrink-0 text-brand-700"
                  />
                  <span>
                    Capacidade resolutiva extrajudicial célere sem lentidão
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={15}
                    className="shrink-0 text-brand-700"
                  />
                  <span>
                    Sede moderna e acessível no Belvedere em Nova Serrana - MG
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={15}
                    className="shrink-0 text-brand-700"
                  />
                  <span>
                    Nota 4,9 ★ no Google com avaliações 100% autênticas
                  </span>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Gisele Ferreira! Gostaria de agendar uma consulta jurídica para meu caso."
                  )}
                  target="_blank"
                  size="md"
                  variant="burgundy"
                  className="rounded-full shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar com a Dra. Gisele
                </GlowingButton>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink-soft hover:text-brand-900"
                >
                  <Phone size={15} /> {PHONE_DISPLAY}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Áreas de Atuação */}
        <section
          id="atuacao"
          className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32"
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
                description="Soluções jurídicas estratégicas, personalizadas e combativas para proteger seus direitos, seu patrimônio e sua família em Nova Serrana, Minas Gerais e em todo o Brasil."
              >
                Atuação especializada em{" "}
                <span className="italic text-brand-700">
                  Família, Sucessões, Previdenciário, Cível e Consumidor.
                </span>
              </Heading>
              <p className="max-w-[270px] pb-1 text-xs leading-6 text-ink-soft">
                Selecione uma especialidade abaixo para conferir os detalhes de
                atuação e iniciar seu atendimento direto pelo WhatsApp.
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
                    className="group flex min-h-[350px] flex-col rounded-xl border border-brand-200/80 bg-pearl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500 hover:shadow-card sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-full bg-white text-brand-800 shadow-sm transition-colors group-hover:bg-brand-900 group-hover:text-white">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <span className="font-serif text-2xl text-brand-400">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-full bg-white px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-brand-800 shadow-sm">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.55rem] leading-tight text-ink">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-6 text-ink-soft">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-800 hover:text-brand-950"
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

        {/* Seção Especial: Por que Escolher a Dra. Gisele Ferreira? */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-y border-brand-200/60 bg-brand-50/50 py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                eyebrow="EFICIÊNCIA COMPROVADA & RESOLUÇÃO DE CASOS"
                description="Veja como o compromisso com a celeridade, a técnica e a empatia transforma problemas jurídicos angustiantes em reparações justas e tranquilidade."
              >
                Conflito familiar, questão previdenciária ou direito violado?{" "}
                <span className="italic text-brand-700">
                  Nós esclarecemos e lutamos pelo seu direito.
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Gisele! Gostaria de uma análise para meu caso."
                )}
                target="_blank"
                size="md"
                variant="burgundy"
                className="rounded-full shadow-sm"
              >
                <WhatsAppIcon size={16} /> Analisar Meu Caso no WhatsApp
              </GlowingButton>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {/* Card 1: Direito de Família e Inventários */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group flex flex-col justify-between rounded-2xl border border-brand-200/80 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-400 sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-300/40 bg-brand-50 px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-800">
                      <Users size={14} /> Direito de Família & Sucessões
                    </span>
                    <span className="text-xs font-semibold text-brand-700">
                      Celeridade & Discrição
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-ink sm:text-[1.75rem]">
                    Inventários Ágeis em Cartório, Divórcios e Partilha de Bens
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
                    Momentos de transição familiar exigem acompanhamento ético, preciso e protetivo. Conduzimos inventários extrajudiciais em cartório de forma desburocratizada, divórcios consensuais e partilhas com total imparcialidade, resguardando o patrimônio e os direitos de cada herdeiro.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-ink">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-brand-700" />
                      <span>Inventário extrajudicial em cartório rápido e sem desgaste litigioso</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-brand-700" />
                      <span>Defesa rigorosa dos interesses de filhos menores em pensão e guarda</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-brand-700" />
                      <span>Atendimento presencial em Nova Serrana e online em todo o Brasil</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-brand-200/60 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Gisele! Gostaria de consultar sobre inventário ou direito de família."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-xl border border-brand-800/20 bg-brand-50/80 px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-900 transition-all hover:border-brand-800 hover:bg-brand-900 hover:text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Consultar Direito de Família no WhatsApp
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>

              {/* Card 2: Resolução Extrajudicial Ágil */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="group flex flex-col justify-between rounded-2xl border border-brand-200/80 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-400 sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-300/40 bg-brand-50 px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-800">
                      <Handshake size={14} /> Resolução Célere
                    </span>
                    <span className="text-xs font-semibold text-brand-700">
                      Sem Processo Judicial
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-ink sm:text-[1.75rem]">
                    Solução de Impasses sem Precisar Entrar na Justiça
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
                    Nem todo litígio precisa enfrentar anos de morosidade no Judiciário. Dra. Gisele Ferreira atua com elevada habilidade conciliadora e negocial, compondo acordos extrajudiciais diretos com empresas, fornecedores e partes contrárias com celeridade e plena segurança jurídica.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-ink">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-brand-700" />
                      <span>Negociação direta e mediação amigável estratégica</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-brand-700" />
                      <span>Economia substancial de tempo, estresse emocional e custas judiciais</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-brand-700" />
                      <span>Termos de acordo formalizados com força de título executivo</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-brand-200/60 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Gisele! Gostaria de saber como resolver um conflito de forma rápida e extrajudicial."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-xl border border-brand-800/20 bg-brand-50/80 px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-900 transition-all hover:border-brand-800 hover:bg-brand-900 hover:text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Consultar Acordo Extrajudicial
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Nosso Compromisso Ético e Operacional */}
        <section className="relative overflow-hidden bg-brand-950 py-20 text-white sm:py-28 lg:py-32">
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-brand-700/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-brand-600/15 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="NOSSO COMPROMISSO PROFISSIONAL"
                light
                description="O reconhecimento comprovado com nota de 4,9 ★ no Google reflete a dedicação intransigente em aliar combatividade técnica, comunicação acolhedora e retorno rápido para cada cliente."
              >
                Protegemos seus direitos com{" "}
                <span className="italic text-brand-200">
                  seriedade, clareza e dedicação total.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-gold-300/25 bg-white/5 p-6 font-serif text-base italic leading-7 text-brand-100">
                &ldquo;Uma Advogada incrível muito precisa seu trabalho impecável atenciosa como sempre, recomendo sempre também 👏🏻👏🏻👏🏻&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-gold-300">
                  — Keity Lorrany · Google Meu Negócio
                </footer>
              </blockquote>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-white/15"
            >
              {[
                [
                  "01",
                  "Atendimento Acolhedor & Escuta Qualificada",
                  "Entendemos que conflitos jurídicos geram angústia e incerteza. Atendemos com paciência, ouvindo com atenção cada detalhe para traçar a melhor estratégia sob medida.",
                ],
                [
                  "02",
                  "Comunicação Clara & Devolutivas Frequentes",
                  "Não deixamos clientes sem resposta. Explicamos cada etapa do processo em linguagem simples e descomplicada, mantendo você sempre informado sobre seu andamento.",
                ],
                [
                  "03",
                  "Combatividade & Destravamento de Demandas",
                  "Não aceitamos negativas automáticas de órgãos ou empresas. Atuamos com firmeza e fundamentação técnica sólida para assegurar a vitória do seu direito.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-semibold text-gold-300">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-white">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-brand-100/75">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Avaliações no Google (Depoimentos Reais - 4,9 estrelas · 12 avaliações) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                eyebrow="PROVA SOCIAL VERIFICADA · GOOGLE MEU NEGÓCIO"
                description="Confira avaliações autênticas de clientes que confiaram suas causas à Dra. Gisele Ferreira em Nova Serrana e em todo o Brasil."
              >
                Avaliada com nota 4,9 ★ pela{" "}
                <span className="italic text-brand-700">
                  precisão técnica, atenção e resultados conquistados.
                </span>
              </Heading>

              {/* Verified Google Badge Card */}
              <div className="flex flex-col gap-3 rounded-2xl border border-brand-200 bg-pearl p-5 shadow-card sm:flex-row sm:items-center md:min-w-[340px]">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-xl border border-brand-300/40 bg-white shadow-sm">
                  <GoogleIcon size={30} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-3xl font-bold leading-none text-ink">
                      4,9
                    </span>
                    <div className="flex gap-0.5 text-amber-500">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-amber-500 text-amber-500"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-brand-900">
                    Gisele Ferreira Advogada
                  </p>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-brand-800 transition-colors hover:text-brand-950"
                  >
                    12 avaliações no Google <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Authentic Google Reviews Grid */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clientReviews.map((review) => (
                <article
                  key={review.name}
                  className="group relative flex flex-col justify-between rounded-xl border border-brand-200/80 bg-pearl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500 hover:shadow-card sm:p-8"
                >
                  <div>
                    {/* Header: Stars + Badge + Google icon */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-1 text-amber-500">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-amber-500 text-amber-500"
                          />
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] font-medium text-ink-soft">
                        <GoogleIcon size={13} />
                        <span className="rounded-full bg-white px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-brand-800 shadow-xs">
                          {review.badge}
                        </span>
                      </div>
                    </div>

                    {/* Authentic review content */}
                    <p className="mt-5 text-[14px] italic leading-relaxed text-ink/90">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  {/* Reviewer info */}
                  <div className="mt-6 flex items-center gap-3 border-t border-brand-200/60 pt-4">
                    <div className="grid size-10 shrink-0 place-items-center rounded-full border border-brand-300/40 bg-white font-serif text-sm font-semibold text-brand-900 shadow-xs">
                      {review.name.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-serif text-base font-semibold text-ink">
                        {review.name}
                      </p>
                      <p className="text-[10px] uppercase tracking-wider text-ink-soft">
                        {review.reviewsCount}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom Actions and Trust Tags */}
            <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-brand-200/60 pt-8 sm:flex-row">
              <div className="flex flex-wrap items-center gap-2">
                {[
                  "Especialista em Direito de Família",
                  "Inventários rápidos em cartório",
                  "Atendimento acolhedor e próximo",
                  "Comunicação clara e transparente",
                  "Nota 4,9 no Google",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-white px-3.5 py-1.5 text-[11px] font-medium text-ink-soft shadow-xs"
                  >
                    <CheckCircle2 size={13} className="text-brand-700" />
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-800 transition-colors hover:text-brand-950"
              >
                Ver perfil e avaliações no Google{" "}
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Contato & Localização */}
        <section
          id="contato"
          className="scroll-mt-24 bg-pearl py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="CONTATO & SEDE EM NOVA SERRANA - MG"
                description="Agende seu atendimento presencial em nossa sede no Belvedere em Nova Serrana ou inicie seu atendimento online pelo WhatsApp com retorno ágil para qualquer lugar do Brasil."
              >
                Estamos prontas para{" "}
                <span className="italic text-brand-700">
                  defender seus direitos.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl()}
                  target="_blank"
                  size="lg"
                  variant="burgundy"
                  className="rounded-full shadow-md"
                >
                  <WhatsAppIcon size={17} /> Iniciar Conversa no WhatsApp
                </GlowingButton>
                <p className="text-[11px] leading-5 text-ink-soft">
                  Telefone e WhatsApp direto:{" "}
                  <strong className="text-ink">{PHONE_DISPLAY}</strong>
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-ink-soft">
                <div className="flex items-start gap-3">
                  <Clock
                    size={16}
                    className="mt-0.5 shrink-0 text-brand-700"
                  />
                  <div>
                    <p className="font-semibold text-ink">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5">
                      Segunda a Sexta-feira: 08:00 às 18:00
                    </p>
                    <p className="text-[11px] text-ink-soft/80">
                      Atendimento presencial com agendamento prévio e atendimento online em todo o Brasil
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-brand-700" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-medium text-ink transition-colors hover:text-brand-800"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-brand-700" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-brand-800"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-brand-700" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="transition-colors hover:text-brand-800"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-brand-700"
                  />
                  <span>{ADDRESS_TEXT}</span>
                </div>
              </div>
            </div>

            {/* Address & Office Card */}
            <div className="relative overflow-hidden rounded-2xl border border-brand-200/80 bg-white p-7 shadow-card sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-brand-700" />

              <div className="flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-full bg-brand-50 text-brand-800">
                  <MapPin size={22} strokeWidth={1.6} />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-800">
                    Sede do Escritório
                  </p>
                  <p className="mt-1 font-serif text-2xl text-ink">
                    Nova Serrana · Minas Gerais
                  </p>
                </div>
              </div>

              <address className="mt-7 max-w-md text-[14px] not-italic leading-7 text-ink-soft">
                <strong className="font-semibold text-ink">
                  Gisele Ferreira Advogada
                </strong>
                <br />
                Dra. Gisele Ferreira
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-xl border border-brand-200/60 bg-pearl p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-brand-800">
                  Expediente & Atendimento
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-ink-soft">
                  <span>Segunda a Sexta-feira</span>
                  <span className="text-right font-semibold text-ink">
                    08:00 às 18:00
                  </span>
                  <span>Atendimento Presencial</span>
                  <span className="text-right font-semibold text-brand-700">
                    Com agendamento
                  </span>
                  <span>Atendimento Digital</span>
                  <span className="text-right text-ink">Em todo o Brasil</span>
                </div>
              </div>

              <div className="my-7 h-px bg-brand-200/60" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-ink-soft">
                  R. Europa, 176 - Belvedere · Nova Serrana - MG
                </p>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-brand-300 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:border-brand-700 hover:bg-brand-50 hover:text-brand-900"
                >
                  Traçar Rota no Google Maps <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip - Deep Burgundy with Rose-Gold Sheen */}
        <section className="bg-gradient-to-r from-brand-950 via-brand-900 to-brand-950 px-5 py-14 text-white shadow-inner sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gold-300">
                <Sparkles size={13} /> GISELE FERREIRA · ADVOCACIA ESPECIALIZADA
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                Precisa de orientação jurídica segura em Família, INSS ou Contratos?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dra. Gisele! Gostaria de agendar uma consulta inicial com o escritório."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-gradient-to-r from-brand-700 via-brand-600 to-brand-700 px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-md transition-all hover:-translate-y-0.5 hover:brightness-110 hover:shadow-burgundy"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp{" "}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-brand-950 px-5 py-14 text-white sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <a
                href="#inicio"
                aria-label="Gisele Ferreira Advogada"
                className="inline-block transition-transform hover:scale-[1.02]"
              >
                <Image
                  src={LOGO_SRC}
                  width={1536}
                  height={1024}
                  alt="Gisele Ferreira Advogada - Logotipo Oficial"
                  className="h-[72px] w-auto object-contain sm:h-[84px]"
                />
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-brand-100/70">
                ⚖️ Assessoria jurídica de excelência com atendimento humanizado, clareza e dedicação. Especialista em Direito de Família e Sucessões, Previdenciário (INSS), Cível e Consumidor.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-gold-300">
                Dra. Gisele Ferreira · Advogada · OAB/MG
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-300">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-brand-100/75">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  Sobre a Advogada
                </a>
                <a className="footer-link" href="#atuacao">
                  Áreas de Atuação
                </a>
                <a className="footer-link" href="#diferenciais">
                  Por que Escolher?
                </a>
                <a className="footer-link" href="#avaliacoes">
                  Avaliações no Google (4,9 ★)
                </a>
                <a className="footer-link" href="#contato">
                  Contato & Sede em Nova Serrana
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-300">
                Contato & Endereço
              </h2>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-brand-100/75">
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Gisele! Gostaria de solicitar um atendimento com o escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 font-medium text-brand-200"
                >
                  <WhatsAppIcon size={15} /> WhatsApp: {PHONE_DISPLAY}
                </a>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="footer-link inline-flex items-center gap-2"
                >
                  <Phone size={15} className="shrink-0" /> Telefone:{" "}
                  {PHONE_DISPLAY}
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
                <p className="inline-flex items-center gap-2 pt-1 text-[11px] text-brand-200/80">
                  <Clock size={14} className="shrink-0" /> Segunda a Sexta: 08:00 às 18:00
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/15 pt-6 text-[10px] text-brand-100/55 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} GISELE FERREIRA ADVOGADA. Todos os direitos reservados.
            </p>
            <p>
              Conteúdo meramente informativo, em estrita conformidade com o Código de Ética e Disciplina da OAB.
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
              "Olá, Dra. Gisele Ferreira! Gostaria de tirar uma dúvida sobre meu caso."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Dra. Gisele Ferreira"
            className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          >
            <WhatsAppIcon size={28} />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-brand-950 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg transition-opacity group-hover:block">
              Falar no WhatsApp
            </span>
          </a>
        </aside>

        {/* Modal de Detalhes da Área de Atuação */}
        <AnimatePresence>
          {activeArea && (
            <motion.div
              className="fixed inset-0 z-50 flex items-end justify-center bg-black/65 p-0 backdrop-blur-sm sm:items-center sm:p-6"
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
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-2xl border border-brand-200/80 bg-white p-7 shadow-2xl sm:max-w-xl sm:rounded-2xl sm:p-10"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-brand-300/60 text-ink transition-colors hover:border-brand-800 hover:text-brand-800"
                >
                  <X size={18} />
                </button>

                <p className="eyebrow">ESPECIALIDADE JURÍDICA</p>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-serif text-3xl leading-tight text-ink sm:text-4xl"
                >
                  {activeArea.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-ink-soft">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-brand-200/60 pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-800">
                    Principais demandas atendidas pelo escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-ink"
                      >
                        <span className="size-2 shrink-0 rounded-full bg-brand-700" />
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
                    variant="burgundy"
                    className="rounded-full shadow-md"
                  >
                    <WhatsAppIcon size={16} /> Consultar sobre esta demanda
                  </GlowingButton>
                  <button
                    type="button"
                    onClick={() => setActiveArea(null)}
                    className="px-5 py-3 text-xs font-semibold text-ink-soft transition-colors hover:text-ink"
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
