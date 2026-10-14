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
  HeartHandshake,
  Landmark,
  Mail,
  MapPin,
  Menu,
  Phone,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Star,
  UserCheck,
  Users,
  X,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "553438210380";
const PHONE_DISPLAY = "(34) 3821-0380";
const EMAIL_CONTACT = "contato@rodriguesenunes.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/rodriguesenunes/";
const INSTAGRAM_HANDLE = "@rodriguesenunes";

const ADDRESS_TEXT =
  "Av. Paracatu, 880 - Centro, Patos de Minas - MG, 38700-096, Brasil";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Rodrigues+%26+Nunes+Advogados+Associados+Patos+de+Minas+MG";

const LOGO_SRC = "/Logotipo Elegante Rodrigues & Nunes.png";
const EMBLEMA_SRC = "/emblema.png";
const FOTO_RENATO_SRC = "/dr-renato-nunes.png";
const FOTO_EQUIPE_SRC = "/equipe-rodrigues-nunes.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá! Gostaria de agendar uma consulta jurídica com o escritório Rodrigues & Nunes Advogados Associados.";
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
    id: "direito-previdenciario-auxilio-acidente",
    title: "Direito Previdenciário & Auxílio-Acidente",
    icon: Landmark,
    tag: "Auxílio-Acidente · Concessões & Revisões",
    summary:
      "Atuação de destaque em auxílio-acidente, aposentadorias e benefícios por incapacidade com clareza total, agilidade e acompanhamento próximo.",
    details:
      "O escritório Rodrigues & Nunes possui ampla experiência na conquista de benefícios previdenciários e na reversão de indeferimentos do INSS. Sob a coordenação do Dr. Renato Nunes, dedicamo-nos com paciência para explicar cada etapa e garantir que o trabalhador e sua família conquistem a proteção social e o valor financeiro a que têm direito legal.",
    topics: [
      "Concessão e restabelecimento do Auxílio-Acidente (trabalhadores com sequelas)",
      "Aposentadoria por Idade Urbana e Rural, Tempo de Contribuição e Especial",
      "Benefícios por Incapacidade Temporária e Permanente (Auxílio-Doença e Invalidez)",
      "BPC/LOAS para idosos em vulnerabilidade e pessoas com deficiência",
      "Planejamento Previdenciário completo para obter a melhor renda mensal",
      "Recursos administrativos perante o INSS e ações judiciais previdenciárias",
    ],
    whatsAppText:
      "Olá! Gostaria de consultar a concessão / revisão de um benefício do INSS ou Auxílio-Acidente com a Rodrigues & Nunes Advogados.",
  },
  {
    id: "direito-do-trabalho-defesa-laboral",
    title: "Direito do Trabalho & Rescisões",
    icon: Briefcase,
    tag: "Resgate de Verbas & Direitos",
    summary:
      "Defesa contundente dos direitos do trabalhador, cobrança de verbas rescisórias, horas extras, insalubridade e acidentes do trabalho.",
    details:
      "Relações trabalhistas exigem rigor técnico e prontidão. Atuamos com empenho para apurar verbas devidas, rescisões indiretas decorrentes de descumprimentos do empregador e indenizações justas por acidentes e danos, sempre com foco em acordos justos ou sentenças favoráveis.",
    topics: [
      "Cobrança integral de verbas rescisórias atrasadas, FGTS e multa de 40%",
      "Rescisão indireta do contrato de trabalho por faltas graves do empregador",
      "Horas extras não quitadas, intervalo intrajornada e adicional noturno",
      "Adicionais de insalubridade e periculosidade com embasamento pericial",
      "Reconhecimento de vínculo de emprego e combate à pejotização fraudulenta",
      "Indenizações por acidentes de trabalho, lesões ocupacionais e assédio",
    ],
    whatsAppText:
      "Olá! Gostaria de falar com um advogado trabalhista da Rodrigues & Nunes Advogados sobre meu caso.",
  },
  {
    id: "direito-de-familia-sucessoes-mediacao",
    title: "Direito de Família, Sucessões & Mediação",
    icon: HeartHandshake,
    tag: "Dra. Graciela Rodrigues · Mediação Humanizada",
    summary:
      "Divórcios, inventários ágeis, partilha de patrimônio, guarda e pensão alimentícia conduzidos com empatia, delicadeza e firmeza técnica.",
    details:
      "Demandas familiares exigem não apenas conhecimento jurídico sólido, mas também extrema sensibilidade e acolhimento humano. A Dra. Graciela Rodrigues é amplamente elogiada pelo atendimento afetuoso, ético e pela capacidade excepcional de mediação de conflitos, resguardando os laços afetivos e o patrimônio das famílias.",
    topics: [
      "Divórcio extrajudicial rápido em cartório e divórcio judicial",
      "Mediação humanizada de conflitos familiares e acordos equilibrados",
      "Pensão alimentícia: fixação, revisão proporcional e execução de débitos",
      "Guarda compartilhada, unilateral e regulamentação de convivência e visitas",
      "Inventários judiciais e extrajudiciais ágeis com partilha de bens",
      "Reconhecimento e dissolução de união estável e planejamento sucessório",
    ],
    whatsAppText:
      "Olá, Dra. Graciela! Gostaria de atendimento em Direito de Família / Inventário com o escritório.",
  },
  {
    id: "direito-civel-indenizacoes-resolucao",
    title: "Direito Cível, Indenizações & Casos Complexos",
    icon: Scale,
    tag: "Causas Ganhas & Resoluções Ágeis",
    summary:
      "Ações indenizatórias, cobranças, cumprimento de contratos, responsabilidade civil e destravamento de processos estagnados.",
    details:
      "Com um histórico expressivo de causas ganhas e clientes satisfeitos, o escritório Rodrigues & Nunes estrutura defesas e teses contundentes para resolver litígios travados, proteger patrimônios e buscar reparações integrais por perdas e danos.",
    topics: [
      "Ações indenizatórias por danos morais, materiais e lucros cessantes",
      "Saneamento e destravamento estratégico de processos judiciais paralisados",
      "Cobrança judicial e extrajudicial de títulos, dívidas e recuperação de crédito",
      "Resolução de conflitos contratuais, distratos e responsabilidade civil",
      "Ações possessórias, despejo e litígios envolvendo bens imóveis",
      "Medidas cautelares, embargos à execução e tutelas de urgência",
    ],
    whatsAppText:
      "Olá! Tenho uma questão cível / indenização e gostaria de uma avaliação com a equipe Rodrigues & Nunes.",
  },
  {
    id: "direito-do-consumidor-bancario",
    title: "Direito do Consumidor & Defesa Patrimonial",
    icon: ShieldCheck,
    tag: "Combate a Abusos & Fraudes",
    summary:
      "Defesa vigorosa contra abusos bancários, fraudes consignadas, negativas indevidas e cobranças abusivas.",
    details:
      "Atuamos na proteção da pessoa física e do consumidor leigo perante instituições financeiras e grandes corporações, anulando fraudes contratuais e buscando a restituição em dobro e compensação moral por cobranças ilícitas.",
    topics: [
      "Anulação de empréstimos consignados fraudulentos e golpes digitais",
      "Ações contra juros abusivos e venda casada de seguros bancários",
      "Exclusão urgente de negativação indevida nos órgãos de proteção (SPC/Serasa)",
      "Indenizações por falhas graves de atendimento e prestação de serviços",
      "Restituição em dobro de valores cobrados indevidamente",
      "Defesa técnica perante Juizados Especiais Cíveis e órgãos de defesa",
    ],
    whatsAppText:
      "Olá! Gostaria de orientações sobre direitos do consumidor / abusos bancários.",
  },
  {
    id: "assessoria-juridica-preventiva",
    title: "Assessoria Jurídica Consultiva & Preventiva",
    icon: Users,
    tag: "Segurança Jurídica & Prevenção",
    summary:
      "Orientação estratégica contínua para pessoas físicas e empresas evitarem litígios e blindarem seus direitos.",
    details:
      "A melhor assessoria jurídica antecipa problemas antes que se tornem processos custosos. Oferecemos suporte consultivo com linguagem transparente e acessível, ajudando nossos clientes a tomar decisões seguras e embasadas em Patos de Minas e região.",
    topics: [
      "Consultoria preventiva para profissionais autônomos e empresas",
      "Elaboração, análise minuciosa e revisão de contratos civis e comerciais",
      "Auditoria jurídica preventiva e redução de riscos trabalhistas",
      "Mediação extrajudicial e negociações com fornecedores e parceiros",
      "Pareceres jurídicos práticos e com respostas claras e ágeis",
      "Acompanhamento contínuo e canal de atendimento prioritário",
    ],
    whatsAppText:
      "Olá! Gostaria de saber mais sobre a assessoria jurídica preventiva do escritório Rodrigues & Nunes.",
  },
];

const clientReviews = [
  {
    name: "Ana Júlia Borges e Silva",
    reviewsCount: "2 avaliações no Google",
    date: "Cliente Verificada",
    badge: "clarity in explanations",
    content:
      "O Dr. Renato Nunes é um excelente profissional. Muito atencioso, claro nas explicações e comprometido com o caso. Passou muita segurança em cada etapa e demonstrou total profissionalismo. É competente, ético e realmente interessado em ajudar seus clientes!",
  },
  {
    name: "Marcelle Karoline",
    reviewsCount: "3 avaliações · 5 fotos",
    date: "Cliente Verificada",
    badge: "impeccable work",
    content:
      "O escritório é muito bem organizado, com um ambiente agradável e profissional. Os colaboradores são sempre atenciosos, educados e demonstram muita competência no que fazem. É perceptível o cuidado em oferecer um atendimento de qualidade!",
  },
  {
    name: "Vitor Nunes",
    reviewsCount: "1 avaliação no Google",
    date: "Cliente Verificado",
    badge: "fair lawyer",
    content:
      "Sou cliente deste escritório há vários anos e sempre fui muito bem atendido. O serviço é excelente, feito com muita atenção, respeito e profissionalismo. A equipe é sempre disponível, explica tudo com paciência e transmite muita segurança em cada orientação. Recomendo de coração, é um escritório em que realmente dá pra confiar!",
  },
  {
    name: "Denise Mello",
    reviewsCount: "4 avaliações no Google",
    date: "Cliente Verificada",
    badge: "humanized care",
    content:
      "Nunca fui tão bem acolhida!!! De longe o melhor atendimento. Advogados com uma tratativa humana e empenhados em auxiliar com orientação jurídica responsável e habilitados para mediar conflitos. Obrigada por TUDO, de modo especial à Dra. Graciela Rodrigues.",
  },
  {
    name: "Patriciapaula Oliveira",
    reviewsCount: "3 avaliações no Google",
    date: "Cliente Verificada",
    badge: "won case",
    content:
      "Fui muito bem atendida durante todo o processo do meu auxílio-acidente. O advogado demonstrou conhecimento, paciência e clareza nas explicações, o que me deixou mais tranquila em um momento difícil. Agradeço pelo acompanhamento e pela dedicação.",
  },
  {
    name: "AJ Consultoria Esportiva",
    reviewsCount: "1 avaliação no Google",
    date: "Cliente Verificado",
    badge: "won case",
    content:
      "Excelente advogado! Sempre demonstrou muita competência e experiência em todas as causas que me representou. Ganhamos todos os processos, e em cada etapa ele me manteve tranquilo e bem amparado. Atendimento excepcional e confiança total no trabalho dele!",
  },
  {
    name: "Julio Cesar da Silva",
    reviewsCount: "3 avaliações no Google",
    date: "Cliente Verificado",
    badge: "clarity in explanations",
    content:
      "Extremamente profissionais! Estou muito satisfeito com a clareza das informações e também com o nível de atenção dado. Recomendo os serviços deles a todos.",
  },
  {
    name: "Alan Mendes",
    reviewsCount: "Local Guide · 10 avaliações",
    date: "Cliente Verificado",
    badge: "great care",
    content:
      "Excelente profissional, principalmente a Dr. Graciela, um amor de pessoa. Atendimento acolhedor, transparente e com muita dedicação ao cliente.",
  },
  {
    name: "Reginaldo Peres Batista",
    reviewsCount: "2 avaliações · 1 foto",
    date: "Cliente Verificado",
    badge: "fair lawyer",
    content:
      "Excelente atendimento doutor Renato um baita ser humano, e também não deixou nada a desejar quanto a direitos e deveres no meu caso, estou completamente satisfeito.",
  },
  {
    name: "Iara Cardoso Cidade Da Silva",
    reviewsCount: "1 avaliação · 1 foto",
    date: "Cliente Verificada",
    badge: "won case",
    content:
      "Graças a Deus e a eficiência desse escritório a minha causa foi ganha e eu estou muito feliz! Super indico a todos que precisam de advogados de confiança!",
  },
  {
    name: "Brodinho TV",
    reviewsCount: "6 avaliações · 1 foto",
    date: "Cliente Verificado",
    badge: "quick resolution",
    content:
      "O Dr. Renato me ajudou de forma rápida e transparente, excelente profissional, atendimento excelente. Uma pessoa altamente capacitada com simplicidade e carisma, sem abrir mão da seriedade do ambiente.",
  },
  {
    name: "Hellen Teixeira",
    reviewsCount: "3 avaliações · 13 fotos",
    date: "Cliente Verificada",
    badge: "impeccable work",
    content:
      "Atendimento excepcional e equipe altamente qualificada. O escritório demonstra comprometimento, ética e agilidade em todas as etapas do processo. Transmitem confiança e profissionalismo do início ao fim. Recomendo sem hesitar!",
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
        className={
          light
            ? "font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-white sm:text-4xl lg:text-[3.25rem]"
            : "font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-ink sm:text-4xl lg:text-[3.25rem]"
        }
      >
        {children}
      </h2>
      {description && (
        <p
          className={
            light
              ? "mt-5 max-w-xl text-[15px] leading-7 text-brand-100/90"
              : "mt-5 max-w-xl text-[15px] leading-7 text-ink-soft"
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
    if (!activeArea) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveArea(null);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [activeArea]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <MotionConfig reducedMotion="user">
      <main className="overflow-hidden bg-pearl text-ink">
        {/* Navigation Bar - Luxury Obsidian Dark with Warm Copper Accents */}
        <header className="sticky top-0 z-40 border-b border-brand-800/40 bg-brand-950/95 backdrop-blur-xl">
          <div className="mx-auto flex h-[88px] max-w-7xl items-center justify-between gap-5 px-5 sm:h-[102px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="RODRIGUES & NUNES ADVOGADOS ASSOCIADOS — Início"
              onClick={closeMenu}
              className="flex items-center gap-3 transition-opacity hover:opacity-90"
            >
              <Image
                src={LOGO_SRC}
                width={2171}
                height={724}
                alt="RODRIGUES & NUNES ADVOGADOS ASSOCIADOS — Patos de Minas - MG"
                priority
                className="h-[52px] w-auto object-contain sm:h-[66px]"
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
                Os Sócios & Escritório
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
                aria-label="Instagram de Rodrigues & Nunes Advogados Associados"
                className="grid size-10 place-items-center rounded-full border border-brand-400/30 text-brand-200 transition-all hover:border-brand-400 hover:bg-brand-900 hover:text-white"
                title="Instagram @rodriguesenunes"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                aria-label="Ligar para Rodrigues & Nunes Advogados Associados"
                className="grid size-10 place-items-center rounded-full border border-brand-400/30 text-brand-200 transition-all hover:border-brand-400 hover:bg-brand-900 hover:text-white"
                title={`Ligar: ${PHONE_DISPLAY}`}
              >
                <Phone size={16} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp de Rodrigues & Nunes Advogados Associados"
                className="grid size-10 place-items-center rounded-full border border-brand-400/30 text-brand-200 transition-all hover:border-brand-400 hover:bg-brand-900 hover:text-white"
                title="Atendimento no WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <GlowingButton
                href={getWhatsAppUrl()}
                target="_blank"
                size="sm"
                variant="copper"
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
              className="grid size-11 place-items-center rounded-full border border-brand-400/30 text-brand-200 lg:hidden"
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
                    ["Os Sócios & Escritório", "#sobre"],
                    ["Áreas de Atuação", "#atuacao"],
                    ["Por que Escolher?", "#diferenciais"],
                    ["Avaliações no Google (4,9 ★)", "#avaliacoes"],
                    ["Contato & Sede em Patos de Minas", "#contato"],
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
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-600 via-brand-500 to-brand-600 px-5 py-3.5 text-xs font-bold uppercase tracking-[0.13em] text-white shadow-md transition-all hover:brightness-105"
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} /> WhatsApp: {PHONE_DISPLAY}
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-400/30 px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-brand-200 transition-all hover:border-brand-200"
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <MapPin size={15} /> Av. Paracatu, 880 - Centro, Patos de Minas
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
          {/* Subtle copper / amber warm ambient glow */}
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[36rem] rounded-full bg-brand-200/40 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[28rem] rounded-full bg-brand-100/60 blur-3xl" />

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
                  Patos de Minas - MG · Av. Paracatu, 880 · 4,9 ★ no Google
                </span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="max-w-[760px] font-serif text-[2.75rem] leading-[1.04] tracking-[-0.025em] text-ink sm:text-5xl lg:text-[4.15rem]"
              >
                Segurança jurídica, clareza e dedicação para defender o que é{" "}
                <span className="font-serif italic text-brand-700">
                  seu por direito.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-ink-soft sm:text-base sm:leading-8"
              >
                Liderado pelo{" "}
                <strong className="font-semibold text-ink">
                  Dr. Renato Nunes
                </strong>{" "}
                e pela{" "}
                <strong className="font-semibold text-ink">
                  Dra. Graciela Rodrigues
                </strong>
                , o escritório{" "}
                <strong className="font-semibold text-ink">
                  Rodrigues & Nunes Advogados Associados
                </strong>{" "}
                une rigor técnico, acolhimento humano e combatividade para solucionar suas demandas em{" "}
                <strong className="font-semibold text-ink">
                  Direito Previdenciário (Auxílio-Acidente e INSS), Trabalhista, Família, Sucessões e Cível
                </strong>{" "}
                — com atendimento presencial de alto nível em Patos de Minas (MG) e atuação digital ágil em todo o Brasil.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl()}
                  target="_blank"
                  size="lg"
                  variant="copper"
                  className="rounded-full shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar no WhatsApp Agora
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
                  4,9 estrelas no Google (98 avaliações reais)
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <Clock size={15} className="text-brand-700" /> Aberto a partir das 08:00
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <MapPin size={15} className="text-brand-700" /> Av. Paracatu, 880 · Centro, Patos de Minas - MG
                </span>
              </motion.div>
            </motion.div>

            {/* Hero Visual Presentation - Dr. Renato & Dra. Graciela */}
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
                  src={FOTO_EQUIPE_SRC}
                  alt="Dr. Renato Nunes e Dra. Graciela Rodrigues — Rodrigues & Nunes Advogados Associados em Patos de Minas - MG"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 45vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-950 via-brand-950/70 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-8 sm:left-8 sm:right-8">
                  <div>
                    <p className="font-serif text-2xl font-normal tracking-wide text-white">
                      Rodrigues & Nunes
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-brand-200">
                      Dr. Renato Nunes & Dra. Graciela Rodrigues
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-brand-400/40 bg-brand-950/80 text-brand-200 backdrop-blur-sm">
                    <Scale size={18} />
                  </span>
                </div>
              </div>

              {/* Floating Google rating badge */}
              <div className="absolute -bottom-3 -left-3 rounded-2xl border border-brand-200/80 bg-white/95 p-3.5 shadow-card backdrop-blur-md sm:-left-5">
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
                  98 Avaliações no Google
                </p>
              </div>

              {/* Floating authority badge */}
              <div className="absolute -right-3 top-6 rounded-full border border-brand-400/40 bg-white/95 px-4 py-2 text-[10px] font-bold tracking-[0.14em] text-brand-900 shadow-card backdrop-blur-md sm:-right-5">
                PATOS DE MINAS · ATUAÇÃO NACIONAL
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
                "nota de excelência com 98 avaliações reais no Google",
              ],
              [
                "Causas Ganhas",
                "histórico comprovado de vitórias e direitos conquistados",
              ],
              [
                "Patos de Minas - MG",
                "Sede própria na Av. Paracatu, 880 - Centro",
              ],
              [
                "Clareza & Ética",
                "explicações didáticas e honestidade com pessoas leigas",
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

        {/* Sobre os Sócios & O Escritório */}
        <section
          id="sobre"
          className="scroll-mt-24 bg-pearl py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
            {/* Dr. Renato Nunes portrait */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[480px]"
            >
              <div className="relative aspect-[3/3.8] overflow-hidden rounded-2xl border border-brand-700/30 bg-brand-950 shadow-card">
                <Image
                  src={FOTO_RENATO_SRC}
                  alt="Dr. Renato Nunes — Advogado Sócio-Fundador de Rodrigues & Nunes Advogados Associados"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-950/95 via-brand-950/40 to-transparent" />
              </div>

              {/* Authority badge card */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-brand-200 bg-white px-5 py-4 shadow-card sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-brand-800">
                  <Award size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em]">
                    Advocacia Humanizada & Combativa
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-ink">
                  Rodrigues & Nunes Advogados
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-brand-700">
                  Dr. Renato Nunes & Dra. Graciela Rodrigues
                </p>
                <p className="mt-1 text-[11px] leading-4 text-ink-soft">
                  Av. Paracatu, 880 - Centro, Patos de Minas - MG.
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
                SOBRE O ESCRITÓRIO & CORPO JURÍDICO
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
                Com sede consolidada na{" "}
                <strong className="text-ink">
                  Av. Paracatu, 880 no Centro de Patos de Minas (MG)
                </strong>{" "}
                e atuação em todo o Brasil, o escritório{" "}
                <strong className="text-ink">Rodrigues & Nunes Advogados Associados</strong>{" "}
                é amplamente reconhecido pela excelência em assessoria jurídica, clareza didática nas explicações e histórico expressivo de causas ganhas.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-ink-soft"
              >
                Nossa atuação fundamenta-se na{" "}
                <strong className="text-ink">transparência absoluta</strong> e no{" "}
                <strong className="text-ink">respeito ao cliente</strong>. Explicamos direitos e deveres em linguagem clara, sem jargões desnecessários, acompanhando de perto cada cliente para que se sinta acolhido, amparado e seguro do início ao fim do processo.
              </motion.p>

              {/* Partners Profiles Grid */}
              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2"
              >
                {/* Dr. Renato Nunes */}
                <div className="rounded-xl border border-brand-200/80 bg-white p-5 transition-all hover:border-brand-400 hover:shadow-card">
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-full bg-brand-50 text-brand-800">
                      <UserCheck size={20} />
                    </span>
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-brand-700">
                        Sócio-Fundador
                      </span>
                      <h3 className="font-serif text-lg font-bold text-ink">
                        Dr. Renato Nunes
                      </h3>
                    </div>
                  </div>
                  <p className="mt-3 text-xs leading-5 text-ink-soft">
                    Reconhecido pela capacidade técnica aliada à simplicidade, carisma e dedicação incansável. Especialista em Direito Previdenciário (Auxílio-Acidente e INSS), Trabalhista e Contencioso Cível.
                  </p>
                </div>

                {/* Dra. Graciela Rodrigues */}
                <div className="rounded-xl border border-brand-200/80 bg-white p-5 transition-all hover:border-brand-400 hover:shadow-card">
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-full bg-brand-50 text-brand-800">
                      <Scale size={20} />
                    </span>
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-brand-700">
                        Sócia-Fundadora
                      </span>
                      <h3 className="font-serif text-lg font-bold text-ink">
                        Dra. Graciela Rodrigues
                      </h3>
                    </div>
                  </div>
                  <p className="mt-3 text-xs leading-5 text-ink-soft">
                    Elogiada pela empatia, sensibilidade humana e excelência em mediação de conflitos. Referência em Direito de Família, Sucessões, Inventários e conciliações responsáveis.
                  </p>
                </div>
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
                    Atendimento humanizado com escuta atenta e respeito
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={15}
                    className="shrink-0 text-brand-700"
                  />
                  <span>
                    Clareza total e honestidade com pessoas leigas
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={15}
                    className="shrink-0 text-brand-700"
                  />
                  <span>
                    Sede moderna e acessível no Centro de Patos de Minas
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={15}
                    className="shrink-0 text-brand-700"
                  />
                  <span>
                    Avaliação 4,9 ★ no Google com 98 avaliações
                  </span>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de agendar uma consulta com o escritório Rodrigues & Nunes Advogados."
                  )}
                  target="_blank"
                  size="md"
                  variant="copper"
                  className="rounded-full shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar com Nossos Advogados
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
                description="Soluções jurídicas estratégicas e personalizadas para proteger seus direitos, seu patrimônio e sua família em Patos de Minas, Minas Gerais e em todo o território nacional."
              >
                Defesa jurídica especializada em{" "}
                <span className="italic text-brand-700">
                  áreas essenciais do Direito.
                </span>
              </Heading>
              <p className="max-w-[270px] pb-1 text-xs leading-6 text-ink-soft">
                Selecione uma área abaixo para conferir os detalhes de
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

        {/* Seção Especial: Por que Escolher Rodrigues & Nunes Advogados? */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-y border-brand-200/60 bg-brand-50/50 py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                eyebrow="EFICIÊNCIA COMPROVADA & RESOLUÇÃO DE CASOS"
                description="Veja como o compromisso com a clareza, honestidade e técnica processual transforma problemas delicados em resultados seguros e positivos para nossos clientes."
              >
                Causas complexas ou sem clareza?{" "}
                <span className="italic text-brand-700">
                  Nós esclarecemos e lutamos pelo seu direito.
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá! Gostaria de uma análise para meu caso com o escritório Rodrigues & Nunes."
                )}
                target="_blank"
                size="md"
                variant="copper"
                className="rounded-full shadow-sm"
              >
                <WhatsAppIcon size={16} /> Analisar Meu Caso no WhatsApp
              </GlowingButton>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {/* Card 1: Previdenciário e Auxílio-Acidente */}
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
                      <Landmark size={14} /> Previdenciário & Auxílio-Acidente
                    </span>
                    <span className="text-xs font-semibold text-brand-700">
                      Dr. Renato Nunes
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-ink sm:text-[1.75rem]">
                    Apoio Seguro em Auxílio-Acidente e Benefícios do INSS
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
                    Relatos reais de clientes atendidos com paciência e clareza absoluta durante todo o processo do auxílio-acidente e concessões do INSS. Entendemos a aflição de quem passou por acidentes ou incapacidades e atuamos com firmeza para reverter negativas do INSS e conquistar o benefício devido.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-ink">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-brand-700" />
                      <span>Análise técnica aprofundada de laudos e perícias médicas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-brand-700" />
                      <span>Comunicação constante e explicação em linguagem simples</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-brand-700" />
                      <span>Acompanhamento próximo para trazer tranquilidade em momentos delicados</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-brand-200/60 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dr. Renato! Gostaria de consultar sobre Auxílio-Acidente ou benefício do INSS."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-xl border border-brand-800/20 bg-brand-50/80 px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-900 transition-all hover:border-brand-800 hover:bg-brand-900 hover:text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Solicitar Análise de Benefício com Dr. Renato
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>

              {/* Card 2: Família, Sucessões & Mediação Humanizada */}
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
                      <HeartHandshake size={14} /> Família & Sucessões
                    </span>
                    <span className="text-xs font-semibold text-brand-700">
                      Dra. Graciela Rodrigues
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-ink sm:text-[1.75rem]">
                    Mediação de Conflitos com Acolhimento e Respeito
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
                    Conflitos familiares exigem muito mais do que petições; demandam empatia, escuta qualificada e postura pacificadora. A Dra. Graciela Rodrigues atua na mediação responsável de divórcios, partilhas e inventários, preservando vínculos e assegurando acordos justos com total discrição.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-ink">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-brand-700" />
                      <span>Tratativa humana e acolhedora em momentos de transição</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-brand-700" />
                      <span>Agilidade em inventários e divórcios consensuais em cartório</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-brand-700" />
                      <span>Proteção integral aos direitos dos filhos e herdeiros</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-brand-200/60 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Graciela! Gostaria de atendimento em Direito de Família / Inventário."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-xl border border-brand-800/20 bg-brand-50/80 px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-900 transition-all hover:border-brand-800 hover:bg-brand-900 hover:text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Falar com Dra. Graciela Rodrigues
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
                description="O reconhecimento como um dos escritórios mais bem avaliados de Patos de Minas e região (4,9 ★ no Google com 98 avaliações) reflete nossa dedicação em aliar competência jurídica, simplicidade e carisma."
              >
                Protegemos seus direitos com{" "}
                <span className="italic text-brand-200">
                  seriedade, clareza e dedicação total.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-brand-400/25 bg-white/5 p-6 font-serif text-base italic leading-7 text-brand-100">
                &ldquo;Sou cliente deste escritório há vários anos e sempre fui muito bem atendido. O serviço é excelente, feito com muita atenção, respeito e profissionalismo. Recomendo de coração, é um escritório em que realmente dá pra confiar!&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-brand-300">
                  — Vitor Nunes · Avaliação no Google
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
                  "Atendimento Acolhedor & Empatia Genuína",
                  "Entendemos que por trás de cada processo existe uma pessoa em momento delicado. Ouvimos com atenção, oferecemos suporte seguro e tratamos cada causa com máxima consideração.",
                ],
                [
                  "02",
                  "Clareza nas Explicações & Honestidade",
                  "Explicamos minuciosamente os direitos, deveres e etapas processuais de forma transparente e acessível para quem não é da área jurídica, mantendo o cliente sempre informado.",
                ],
                [
                  "03",
                  "Agilidade & Compromisso com Resultados",
                  "Trabalhamos com dinamismo, sem deixar processos esquecidos em gavetas. Buscamos soluções céleres e eficazes para resgatar os direitos dos nossos clientes.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-semibold text-brand-300">
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

        {/* Avaliações no Google (Depoimentos Reais - 4,9 estrelas · 98 avaliações) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                eyebrow="PROVA SOCIAL VERIFICADA · GOOGLE MEU NEGÓCIO"
                description="Confira avaliações autênticas de clientes que confiaram suas causas ao escritório Rodrigues & Nunes Advogados Associados em Patos de Minas e em todo o Brasil."
              >
                Reconhecido com 4,9 ★ pela{" "}
                <span className="italic text-brand-700">
                  clareza nas explicações, atenção e causas ganhas.
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
                    Rodrigues & Nunes Advogados
                  </p>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-brand-800 transition-colors hover:text-brand-950"
                  >
                    98 avaliações no Google <ArrowUpRight size={13} />
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
                  "Clareza nas explicações",
                  "Atendimento acolhedor",
                  "Causas ganhas",
                  "Advogados justos e éticos",
                  "Agilidade e transparência",
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
                Ver perfil e 98 avaliações no Google{" "}
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
                eyebrow="CONTATO & SEDE EM PATOS DE MINAS - MG"
                description="Agende seu atendimento presencial em nossa sede na Av. Paracatu ou inicie seu atendimento pelo WhatsApp com retorno ágil para qualquer lugar do país."
              >
                Estamos prontos para{" "}
                <span className="italic text-brand-700">
                  defender seus direitos.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl()}
                  target="_blank"
                  size="lg"
                  variant="copper"
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
                      Segunda a Sexta-feira: Aberto a partir das 08:00
                    </p>
                    <p className="text-[11px] text-ink-soft/80">
                      Atendimento com horário agendado e retorno ágil
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
                    Patos de Minas · Minas Gerais
                  </p>
                </div>
              </div>

              <address className="mt-7 max-w-md text-[14px] not-italic leading-7 text-ink-soft">
                <strong className="font-semibold text-ink">
                  Rodrigues & Nunes Advogados Associados
                </strong>
                <br />
                Dr. Renato Nunes & Dra. Graciela Rodrigues
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
                    Abre às 08:00
                  </span>
                  <span>Atendimento Presencial</span>
                  <span className="text-right font-semibold text-brand-700">
                    Com agendamento
                  </span>
                  <span>Atendimento Digital</span>
                  <span className="text-right text-ink">Nacional</span>
                </div>
              </div>

              <div className="my-7 h-px bg-brand-200/60" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-ink-soft">
                  Av. Paracatu, 880 · Centro, Patos de Minas - MG
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

        {/* Pre-Footer CTA Strip - Deep Obsidian with Warm Amber Sheen */}
        <section className="bg-gradient-to-r from-brand-950 via-brand-900 to-brand-950 px-5 py-14 text-white shadow-inner sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-300">
                <Sparkles size={13} /> RODRIGUES & NUNES ADVOGADOS ASSOCIADOS · PATOS DE MINAS - MG
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                Precisa de orientação jurídica segura, clara e comprometida com o seu resultado?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá! Gostaria de agendar uma consulta inicial com o escritório Rodrigues & Nunes Advogados Associados."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-gradient-to-r from-brand-600 via-brand-500 to-brand-600 px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-md transition-all hover:-translate-y-0.5 hover:brightness-110 hover:shadow-copper"
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
                aria-label="RODRIGUES & NUNES ADVOGADOS ASSOCIADOS"
                className="inline-block"
              >
                <Image
                  src={LOGO_SRC}
                  width={2171}
                  height={724}
                  alt="RODRIGUES & NUNES ADVOGADOS ASSOCIADOS"
                  className="h-14 w-auto object-contain sm:h-16"
                />
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-brand-100/70">
                🤝 Segurança jurídica com atendimento humanizado, clareza e dedicação. Atuação em Direito Previdenciário (Auxílio-Acidente e INSS), Trabalhista, Família & Sucessões e Cível.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-brand-300">
                Dr. Renato Nunes & Dra. Graciela Rodrigues
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-300">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-brand-100/75">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  Os Sócios & Escritório
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
                  Contato & Sede em Patos de Minas
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-300">
                Contato & Endereço
              </h2>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-brand-100/75">
                <a
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de solicitar um atendimento com a Rodrigues & Nunes Advogados."
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
                  <Clock size={14} className="shrink-0" /> Aberto a partir das 08:00
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/15 pt-6 text-[10px] text-brand-100/55 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} RODRIGUES & NUNES ADVOGADOS ASSOCIADOS. Todos os direitos reservados.
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
              "Olá! Gostaria de tirar uma dúvida com o escritório Rodrigues & Nunes Advogados Associados."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp"
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
                    variant="copper"
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
