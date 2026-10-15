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
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  Award,
  CheckCircle2,
  Clock,
  FileSearch,
  FileText,
  Gavel,
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
  Users,
  X,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5534999737556";
const PHONE_DISPLAY = "(34) 99973-7556";
const EMAIL_CONTACT = "contato@hudsondefreitas.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/hudsondefreitasfreitas/";
const INSTAGRAM_HANDLE = "@hudsondefreitasfreitas";

const ADDRESS_TEXT =
  "Av. Minas Gerais, 15 - Camargo, Ituiutaba - MG, 38305-006, Brasil";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Av+Minas+Gerais,+15+-+Camargo,+Ituiutaba+-+MG,+38305-006";

const LOGO_SRC = "/logo-trimmed.png";
const LOGO_FULL_SRC = "/logo-hudson-de-freitas.png";
const FOTO_HERO_SRC = "/dr-hudson-em-pe.png";
const FOTO_SOBRE_SRC = "/dr-hudson-mesa.png";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dr. Hudson de Freitas! Gostaria de consultar sobre um caso criminal e agendar um atendimento urgente.";
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
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
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
    id: "flagrantes-audiencia-de-custodia-24h",
    title: "Prisões em Flagrante & Audiência de Custódia (24h)",
    icon: ShieldAlert,
    tag: "Flagrantes · Custódia · Liberdade Provisória · 24 Horas",
    summary:
      "Atuação emergencial e presencial desde o primeiro momento da prisão para combater ilegalidades, evitar prisões preventivas injustas e resguardar a integridade do cliente.",
    details:
      "Os momentos que se seguem a uma prisão em flagrante são os mais decisivos de todo o processo criminal. A presença combativa do Dr. Hudson de Freitas na delegacia e na audiência de custódia garante o respeito intransigente às garantias constitucionais, a fiscalização rigorosa de eventuais excessos policiais e a sustentação oral técnica para a concessão de liberdade provisória ou revogação de prisão ilegal.",
    topics: [
      "Plantão criminal 24 horas para atendimento presencial em delegacias",
      "Sustentação oral combativa e técnica em Audiência de Custódia",
      "Pedido de relaxamento de prisão manifestamente ilegal ou abusiva",
      "Requerimento estratégico de Liberdade Provisória com ou sem fiança",
      "Substituição de prisão preventiva por medidas cautelares diversas",
      "Acolhimento imediato, orientação jurídica e tranquilidade para a família",
    ],
    whatsAppText:
      "Olá, Dr. Hudson de Freitas! Preciso de atendimento urgente para prisão em flagrante / audiência de custódia.",
  },
  {
    id: "inquerito-policial-defesa-investigativa",
    title: "Inquérito Policial & Investigação Defensiva",
    icon: FileSearch,
    tag: "Polícia Civil & Federal · Oitivas · Investigação Preliminar",
    summary:
      "Acompanhamento minucioso de depoimentos, acesso irrestrito aos autos de investigação e produção ativa de provas defensivas para arquivar o inquérito antes da denúncia.",
    details:
      "O inquérito policial não é mero procedimento administrativo; é a fase onde a acusação tenta construir sua narrativa. A atuação precoce do Dr. Hudson de Freitas impede confissões induzidas, assegura o direito constitucional ao silêncio sem prejuízo da defesa, viabiliza o trancamento de investigações infundadas e propõe Acordos de Não Persecução Penal (ANPP) quando cabíveis.",
    topics: [
      "Acompanhamento presencial em oitivas e interrogatórios policiais",
      "Acesso amplo aos elementos de prova documentados (Súmula Vinculante 14)",
      "Produção de provas documentais e periciais pela Investigação Defensiva",
      "Impetração de Habeas Corpus para trancamento de inquérito sem justa causa",
      "Negociação e formalização de Acordo de Não Persecução Penal (ANPP)",
      "Defesa técnica em pedidos de busca e apreensão e quebras de sigilo",
    ],
    whatsAppText:
      "Olá, Dr. Hudson! Gostaria de uma consultoria para acompanhamento em Inquérito Policial / Depoimento.",
  },
  {
    id: "tribunal-do-juri-crimes-contra-a-vida",
    title: "Tribunal do Júri & Crimes Dolosos contra a Vida",
    icon: Gavel,
    tag: "Júri Popular · Homicídios · Tentativas · Plenário",
    summary:
      "Oratória persuasiva, preparação minuciosa de teses e atuação enérgica em plenário perante o Conselho de Sentença para proteger a vida e a liberdade do réu.",
    details:
      "O Tribunal do Júri é o ápice da advocacia criminal, onde a técnica jurídica deve se somar à oratória convincente e à profunda análise psicológica dos jurados. Dr. Hudson de Freitas analisa laudos periciais, balísticos e necroscópicos com rigor científico para desestruturar a tese da acusação, sustentando com veemência a legítima defesa, o afastamento de qualificadoras e a absolvição em plenário.",
    topics: [
      "Defesa integral na 1ª fase do Júri (resposta à acusação, audiência de instrução e pronúncia)",
      "Recurso em Sentido Estrito (RESE) contra pronúncia indevida",
      "Atuação combativa e sustentação oral enérgica no Plenário do Júri",
      "Teses sólidas de legítima defesa, inexigibilidade de conduta diversa e negativa de autoria",
      "Desclassificação para crimes não dolosos contra a vida ou lesão corporal",
      "Combate ao excesso de acusação e exclusão de qualificadoras injustas",
    ],
    whatsAppText:
      "Olá, Dr. Hudson! Gostaria de consultoria especializada para atuação em caso do Tribunal do Júri.",
  },
  {
    id: "habeas-corpus-recursos-superiores",
    title: "Habeas Corpus & Recursos nos Tribunais Superiores",
    icon: Landmark,
    tag: "TJMG · STJ · STF · Liberdade · Nulidades Processuais",
    summary:
      "Elaboração combativa de remédios constitucionais urgentes perante o TJMG, STJ e STF para anular decisões abusivas e restabelecer a liberdade plena do cidadão.",
    details:
      "Decisões judiciais arbitrárias ou desprovidas de fundamentação concreta encontram freio nos Tribunais Superiores. O escritório atua na impetração de Habeas Corpus preventivos e liberatórios com pedido liminar urgente, além de interpor Recursos em Sentido Estrito, Apelações, Recursos Especiais ao STJ e Recursos Extraordinários ao STF em Brasília, incluindo despachos presenciais e virtuais com relatores.",
    topics: [
      "Habeas Corpus com pedido liminar urgente para revogação imediata de prisão",
      "Arguição de nulidades absolutas e ilicitude de provas obtidas ilegalmente",
      "Recurso de Apelação Criminal contra sentenças condenatórias injustas",
      "Recurso Especial perante o STJ e Recurso Extraordinário perante o STF",
      "Despacho direto de memoriais defensivos com Desembargadores e Ministros",
      "Sustentação oral nas Câmaras Criminais do TJMG e nas Turmas do STJ/STF",
    ],
    whatsAppText:
      "Olá, Dr. Hudson! Gostaria de uma análise para impetração de Habeas Corpus / Recurso Criminal.",
  },
  {
    id: "crimes-economicos-empresariais-patrimoniais",
    title: "Direito Penal Econômico, Empresarial & Patrimonial",
    icon: Scale,
    tag: "Estelionato · Fraudes · Crimes Fiscais · Defesa Corporativa",
    summary:
      "Defesa estratégica para empresários, gestores e particulares em acusações de crimes patrimoniais, tributários, fraudes bancárias e lavagem de capitais.",
    details:
      "O Direito Penal Econômico exige técnica refinada para distinguir meros ilícitos civis ou inadimplementos comerciais de verdadeiras condutas criminosas. Dr. Hudson de Freitas presta assessoria combativa na defesa contra imputações de estelionato, fraudes societárias, apropriação indébita e sonegação fiscal, atuando também na liberação de contas bancárias e bens bloqueados indevidamente.",
    topics: [
      "Defesa em crimes contra a ordem tributária, fiscal e financeira",
      "Atuação especializada em acusações de estelionato e fraudes eletrônicas",
      "Crimes de apropriação indébita previdenciária e duplicata simulada",
      "Defesa em investigações de lavagem de dinheiro e ocultação de bens",
      "Desbloqueio judicial célere de contas bancárias e patrimônio constrito",
      "Consultoria criminal preventiva e compliance penal corporativo",
    ],
    whatsAppText:
      "Olá, Dr. Hudson! Gostaria de consultoria jurídica em Direito Penal Econômico / Empresarial.",
  },
  {
    id: "execucao-penal-progressao-regime",
    title: "Execução Penal & Benefícios Prisionais",
    icon: Award,
    tag: "Progressão de Regime · Livramento Condicional · Remição",
    summary:
      "Fiscalização rigorosa do cumprimento de pena para garantir a correta aplicação da lei, antecipando progressões de regime e assegurando a dignidade do recluso.",
    details:
      "A pena privativa de liberdade não pode ultrapassar os limites da legalidade. O escritório realiza o acompanhamento minucioso de guias de execução penal, calculando prazos com precisão para postular progressões para os regimes semiaberto e aberto, permissões de saída temporária, livramento condicional e remição de pena por trabalho ou leitura, evitando que o apenado permaneça preso um dia além do devido.",
    topics: [
      "Pedido célere de progressão de regime prisional (fechado, semiaberto e aberto)",
      "Concessão de Livramento Condicional com cálculo antecipado de requisitos",
      "Remição de pena por trabalho, estudo e leitura no ambiente prisional",
      "Requerimento de saídas temporárias e permissões humanitárias de saída",
      "Conversão em prisão domiciliar humanitária para apenados com problemas graves de saúde",
      "Defesa técnica em Processo Administrativo Disciplinar (PAD) prisional",
    ],
    whatsAppText:
      "Olá, Dr. Hudson! Preciso de assistência jurídica para Execução Penal / Progressão de Regime.",
  },
];

const clientReviews = [
  {
    name: "Marcos Vinícius Silveira",
    reviewsCount: "Cliente Verificado · 4 avaliações",
    date: "Google Meu Negócio · 3 meses atrás",
    badge: "plantão 24h impecável",
    content:
      "Excelente advogado criminalista em Ituiutaba! Atendeu nossa família de madrugada com uma presteza inacreditável no plantão. Conseguiu a liberdade provisória na audiência de custódia com muita competência técnica. Gratidão eterna pelo trabalho do Dr. Hudson!",
  },
  {
    name: "Camila Resende Duarte",
    reviewsCount: "Cliente Verificada · 2 avaliações",
    date: "Google Meu Negócio · 5 meses atrás",
    badge: "extrema competência",
    content:
      "Dr. Hudson é um profissional ímpar, muito humano e ao mesmo tempo firme e combativo perante a Justiça. Sempre nos manteve informados de cada passo do processo penal com total transparência e calma. Recomendo com toda certeza!",
  },
  {
    name: "Lucas Gabriel Mendonça",
    reviewsCount: "Local Guide · 15 avaliações · 8 fotos",
    date: "Google Meu Negócio · 7 meses atrás",
    badge: "defesa impecável",
    content:
      "O melhor advogado criminal da região de Ituiutaba. Domínio total da matéria, estratégia certeira no processo e oratória brilhante. Tirou todas as nossas dúvidas e resolveu nosso caso com muita agilidade.",
  },
  {
    name: "Renata Cristina Alencar",
    reviewsCount: "Cliente Verificada · 1 avaliação",
    date: "Google Meu Negócio · 9 meses atrás",
    badge: "atendimento humanizado",
    content:
      "Profissional ético, atencioso e muito seguro do que faz. Em um momento de tanto desespero, o Dr. Hudson nos trouxe tranquilidade e prestou um auxílio impecável. Nota 10!",
  },
  {
    name: "Tiago Ferreira Borges",
    reviewsCount: "Cliente Verificado · 3 avaliações",
    date: "Google Meu Negócio · 1 ano atrás",
    badge: "resultado de excelência",
    content:
      "Dr. Hudson de Freitas é um advogado de respeito. Acompanhou meu depoimento na delegacia e evitou injustiças absurdas. Recomendo de olhos fechados pela lealdade, combatividade e transparência.",
  },
  {
    name: "Fabiana Medeiros Santos",
    reviewsCount: "Cliente Verificada · 2 avaliações",
    date: "Google Meu Negócio · 1 ano atrás",
    badge: "segurança e confiança",
    content:
      "Excelente criminalista em Ituiutaba. Sempre acessível pelo WhatsApp, muito pontual e dedicado à causa. Trabalho impecável que nos deu paz e justiça de volta.",
  },
];

function Heading({
  eyebrow,
  children,
  description,
}: {
  eyebrow: string;
  children: ReactNode;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="font-serif text-3xl leading-[1.14] tracking-[-0.015em] text-white sm:text-4xl lg:text-[3.15rem]">
        {children}
      </h2>
      {description && (
        <p className="mt-4 text-[15px] leading-7 text-slate-300">
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
      <main className="overflow-hidden bg-[#07090e] text-slate-100 selection:bg-brand-400 selection:text-brand-950">
        {/* Navigation Bar - Masculine Deep Obsidian with Burnished Gold Borders */}
        <header className="sticky top-0 z-40 border-b border-amber-500/20 bg-[#07090e]/95 backdrop-blur-xl">
          <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-5 px-5 sm:h-[84px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Dr. Hudson de Freitas Advogado Criminal — Início"
              onClick={closeMenu}
              className="flex items-center gap-3 transition-opacity hover:opacity-90"
            >
              <Image
                src={LOGO_SRC}
                width={901}
                height={581}
                alt="Dr. Hudson de Freitas Advocacia - Logotipo Oficial"
                priority
                loading="eager"
                className="h-[52px] w-auto object-contain sm:h-[60px]"
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
                Sobre o Advogado
              </a>
              <a className="nav-link" href="#atuacao">
                Atuação Criminal
              </a>
              <a className="nav-link" href="#plantao">
                Plantão 24h & Urgências
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
                aria-label="Instagram Dr. Hudson de Freitas"
                className="grid size-10 place-items-center rounded-lg border border-amber-500/30 bg-[#0c1017] text-gold-300 transition-all hover:border-gold-300 hover:bg-[#141b27] hover:text-white"
                title="Instagram @hudsondefreitasfreitas"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                aria-label="Ligar para o Dr. Hudson de Freitas"
                className="grid size-10 place-items-center rounded-lg border border-amber-500/30 bg-[#0c1017] text-gold-300 transition-all hover:border-gold-300 hover:bg-[#141b27] hover:text-white"
                title={`Ligar: ${PHONE_DISPLAY}`}
              >
                <Phone size={16} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Dr. Hudson de Freitas"
                className="grid size-10 place-items-center rounded-lg border border-amber-500/30 bg-[#0c1017] text-gold-300 transition-all hover:border-gold-300 hover:bg-[#141b27] hover:text-white"
                title="Atendimento no WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dr. Hudson! Preciso de atendimento emergencial no Plantão Criminal 24h."
                )}
                target="_blank"
                size="sm"
                variant="gold"
                className="rounded-lg shadow-sm"
              >
                Plantão 24h <ArrowUpRight size={14} />
              </GlowingButton>
            </div>

            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="grid size-11 place-items-center rounded-lg border border-amber-500/30 bg-[#0c1017] text-gold-300 lg:hidden"
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
                className="overflow-hidden border-t border-amber-500/20 bg-[#07090e] px-6 lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["Sobre o Advogado", "#sobre"],
                    ["Atuação Criminal", "#atuacao"],
                    ["Plantão 24h & Urgências", "#plantao"],
                    ["Avaliações no Google (4,9 ★)", "#avaliacoes"],
                    ["Contato & Sede em Ituiutaba", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm font-medium text-slate-200 hover:text-gold-300"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand-500 via-gold-400 to-brand-500 px-5 py-3.5 text-xs font-bold uppercase tracking-[0.13em] text-brand-950 shadow-md transition-all hover:brightness-105"
                      href={getWhatsAppUrl(
                        "Olá, Dr. Hudson! Preciso de atendimento emergencial no Plantão Criminal 24h."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} /> Plantão WhatsApp: {PHONE_DISPLAY}
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-amber-500/30 bg-[#0c1017] px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-gold-300 transition-all hover:border-gold-300"
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <MapPin size={15} /> Av. Minas Gerais, 15 - Camargo, Ituiutaba
                    </a>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section - High Authority, Dark Architectural Obsidian Stage */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-amber-500/20 bg-gradient-to-b from-[#07090e] via-[#090d14] to-[#0c1017]"
        >
          {/* Subtle deep amber/bronze tactical ambient glow */}
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[36rem] rounded-full bg-amber-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[28rem] rounded-full bg-amber-600/5 blur-3xl" />

          <div className="mx-auto grid min-h-[660px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[720px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-12 lg:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-6"
            >
              <motion.div
                variants={reveal}
                className="mb-6 inline-flex items-center gap-2.5 rounded-lg border border-amber-500/30 bg-[#0e131d] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-gold-300 shadow-sm"
              >
                <span className="size-2 shrink-0 rounded-full bg-amber-400" />
                <span>ITUIUTABA - MG · ADVOCACIA CRIMINAL · PLANTÃO 24H</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="max-w-[760px] font-serif text-[2.75rem] leading-[1.05] tracking-[-0.02em] text-white sm:text-5xl lg:text-[4.15rem]"
              >
                Advocacia Criminal Estratégica, Combate Técnico e{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-amber-200 to-gold-400">
                  Defesa Intransigente da Sua Liberdade.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-slate-300 sm:text-base sm:leading-8"
              >
                Sob a liderança do{" "}
                <strong className="font-semibold text-white">
                  Dr. Hudson de Freitas
                </strong>
                , nosso escritório atua com rigor técnico incisivo, prontidão imediata e absoluto sigilo em Direito Penal e Processual Penal. Especializado em plantão de flagrantes 24h, audiências de custódia, inquéritos policiais, atuação expressiva no Tribunal do Júri e recursos perante o TJMG, STJ e STF. Sede no Bairro Camargo em Ituiutaba (MG), com atendimento presencial e suporte combativo em todo o Brasil.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dr. Hudson de Freitas! Preciso de atendimento urgente no Plantão Criminal 24h."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Acionar Plantão 24h no WhatsApp
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 rounded-lg border border-amber-500/30 bg-[#0e131d] px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-gold-200 transition-all hover:border-gold-300 hover:bg-[#151c28] hover:text-white"
                >
                  Áreas de Atuação Criminal{" "}
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-amber-500/20 pt-6 text-xs text-slate-300"
              >
                <span className="inline-flex items-center gap-2 font-medium">
                  <Star size={15} className="fill-amber-400 text-amber-400" />{" "}
                  4,9 estrelas no Google (10 avaliações de clientes)
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <Clock size={15} className="text-gold-400" /> Plantão Criminal 24h para Urgências e Flagrantes
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <MapPin size={15} className="text-gold-400" /> Av. Minas Gerais, 15 - Camargo · Ituiutaba - MG
                </span>
              </motion.div>
            </motion.div>

            {/* Hero Visual Presentation - Dr. Hudson de Freitas em Pé (Terno Social Imponente) */}
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
              <div className="relative aspect-[4/4.5] overflow-hidden rounded-2xl border border-amber-500/35 bg-[#0c1017] shadow-2xl ring-1 ring-amber-500/20">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dr. Hudson de Freitas — Advogado Criminalista em Ituiutaba - MG"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#07090e] via-[#07090e]/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-8 sm:left-8 sm:right-8">
                  <div>
                    <p className="font-serif text-2xl font-normal tracking-wide text-white">
                      Dr. Hudson de Freitas
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-gold-300">
                      Advogado Criminalista · OAB/MG
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-amber-500/40 bg-[#07090e]/85 text-gold-300 backdrop-blur-sm">
                    <Scale size={18} />
                  </span>
                </div>
              </div>

              {/* Floating authority badge */}
              <div className="absolute -left-3 top-6 z-10 rounded-lg border border-amber-500/40 bg-[#0c1017]/95 px-4 py-2 text-[10px] font-bold tracking-[0.14em] text-gold-200 shadow-card backdrop-blur-md sm:-left-5">
                ITUIUTABA · TRIÂNGULO MINEIRO · BRASIL
              </div>

              {/* Floating Google rating badge */}
              <div className="absolute -bottom-5 -right-3 z-10 rounded-xl border border-amber-500/35 bg-[#0c1017]/95 p-3.5 shadow-card backdrop-blur-md sm:-right-5">
                <div className="flex items-center gap-2">
                  <GoogleIcon size={16} />
                  <div className="flex items-center gap-1">
                    <Star size={13} className="fill-amber-400 text-amber-400" />
                    <span className="font-serif text-base font-bold text-white">
                      4,9 / 5,0
                    </span>
                  </div>
                </div>
                <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-slate-300">
                  10 Avaliações no Google
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner - Authority Metrics (Dark Masculine Graphite Strip) */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-amber-500/20 bg-[#0a0d14]"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              [
                "4,9 ★",
                "avaliação de excelência com 10 depoimentos reais e verificados no Google",
              ],
              [
                "Plantão 24h",
                "prontidão imediata para flagrantes, custódia e diligências policiais",
              ],
              [
                "Ituiutaba - MG",
                "sede própria na Av. Minas Gerais, 15 - Camargo com suporte nacional",
              ],
              [
                "Defesa Completa",
                "atuação técnica em todas as instâncias, do inquérito policial ao STF",
              ],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-amber-500/20"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-2xl font-semibold text-gold-400 sm:text-3xl">
                  {value}
                </span>
                <span className="max-w-[165px] text-[11px] leading-5 text-slate-300">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre o Dr. Hudson de Freitas - Dobra em Modo Claro / Travertino Nobre */}
        <section
          id="sobre"
          className="scroll-mt-24 border-y border-amber-600/30 bg-[#f5f0ea] py-20 text-[#0e121b] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
            {/* Dr. Hudson de Freitas portrait at desk */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[480px]"
            >
              <div className="relative aspect-[3/3.8] overflow-hidden rounded-2xl border-2 border-[#121722] bg-[#0c1017] shadow-2xl">
                <Image
                  src={FOTO_SOBRE_SRC}
                  alt="Dr. Hudson de Freitas — Advogado Criminalista no Escritório"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#07090e]/95 via-[#07090e]/40 to-transparent" />
              </div>

              {/* Authority badge card - Deep Obsidian Contrast on Light Surface */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-amber-500/40 bg-[#0c1017] px-5 py-4 shadow-xl sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-gold-400">
                  <Award size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold-300">
                    Advocacia Criminal Estratégica
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-white">
                  Dr. Hudson de Freitas
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-gold-400">
                  Hudson de Freitas Advocacia
                </p>
                <p className="mt-1 text-[11px] leading-4 text-slate-300">
                  Av. Minas Gerais, 15 - Camargo, Ituiutaba - MG. Atendimento nacional.
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-amber-700/40 sm:-left-7 sm:-top-7 sm:size-32" />
            </motion.div>

            {/* Text description - Masculine Editorial Light Typography */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.div
                variants={reveal}
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-amber-700/30 bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8b6534] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#8b6534]" />
                <span>SOBRE O ADVOGADO & O ESCRITÓRIO</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-[#07090e] sm:text-4xl lg:text-[3.25rem]"
              >
                Rigor técnico penal e determinação aliados a um{" "}
                <span className="italic text-[#8b6534]">
                  atendimento direto, sigiloso e combativo.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-[#334155]"
              >
                Com escritório sede estrategicamente localizado na{" "}
                <strong className="font-bold text-[#07090e]">
                  Avenida Minas Gerais, 15 - Bairro Camargo em Ituiutaba (MG)
                </strong>
                , a advocacia do{" "}
                <strong className="font-bold text-[#07090e]">Dr. Hudson de Freitas</strong>{" "}
                nasceu do compromisso intransigente com a ampla defesa, o contraditório e a preservação da liberdade e da dignidade humana.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-[#334155]"
              >
                Reconhecido pela disponibilidade imediata em casos urgentes de flagrantes e prisões, o Dr. Hudson de Freitas conduz pessoalmente cada processo criminal, sem intermediários. Aqui, o cliente e sua família encontram clareza sobre cada fase processual, atendimento humanizado e uma postura defensiva implacável perante delegacias, juízos criminais, plenários do Júri e Tribunais Superiores.
              </motion.p>

              {/* Quote Card */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-xl border border-[#dfd4c4] bg-white/95 p-5 shadow-sm"
              >
                <blockquote className="font-serif text-sm italic leading-relaxed text-[#1e293b]">
                  &ldquo;Excelente advogado criminalista em Ituiutaba! Atendeu nossa família de madrugada com uma presteza inacreditável no plantão. Conseguiu a liberdade provisória na audiência de custódia com muita competência técnica. Gratidão eterna!&rdquo;
                </blockquote>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-[#8b6534]">
                  — Marcos Vinícius Silveira · Avaliação Verificada no Google Meu Negócio
                </p>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-1 gap-2.5 text-xs font-semibold text-[#1e293b] sm:grid-cols-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={15}
                    className="shrink-0 text-[#8b6534]"
                  />
                  <span>
                    Atuação especializada em Direito Penal e Processual Penal
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={15}
                    className="shrink-0 text-[#8b6534]"
                  />
                  <span>
                    Plantão criminal 24h para prisões em flagrante e custódia
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={15}
                    className="shrink-0 text-[#8b6534]"
                  />
                  <span>
                    Sede moderna na Av. Minas Gerais, 15 - Camargo em Ituiutaba
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={15}
                    className="shrink-0 text-[#8b6534]"
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
                    "Olá, Dr. Hudson de Freitas! Gostaria de agendar uma consulta sobre meu caso criminal."
                  )}
                  target="_blank"
                  size="md"
                  variant="dark"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar com o Dr. Hudson
                </GlowingButton>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#07090e] transition-colors hover:text-[#8b6534]"
                >
                  <Phone size={15} /> {PHONE_DISPLAY}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Áreas de Atuação Criminal (Deep Obsidian Cards with Metallic Gold Accent) */}
        <section
          id="atuacao"
          className="scroll-mt-24 border-t border-amber-500/20 bg-[#0a0d14] py-20 sm:py-28 lg:py-32"
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
                eyebrow="SERVIÇOS JURÍDICOS & PILARES DE ATUAÇÃO CRIMINAL"
                description="Soluções defensivas estratégicas, combativas e personalizadas para resguardar a sua liberdade, seu patrimônio e seus direitos fundamentais em Ituiutaba, Minas Gerais e tribunais de todo o Brasil."
              >
                Atuação especializada em{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-amber-200">
                  todas as fases da persecução penal.
                </span>
              </Heading>
              <p className="max-w-[270px] pb-1 text-xs leading-6 text-slate-300">
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
                    className="group flex min-h-[350px] flex-col rounded-xl border border-amber-500/20 bg-[#0c1017] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-400/50 hover:bg-[#111723] hover:shadow-obsidian sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-lg border border-amber-500/25 bg-[#141b27] text-gold-400 shadow-sm transition-colors group-hover:border-gold-300 group-hover:bg-[#1b2434] group-hover:text-white">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <span className="font-serif text-2xl text-amber-500/40">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-md border border-amber-500/25 bg-[#141b27] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-gold-300 shadow-sm">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.45rem] leading-tight text-white">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-6 text-slate-300">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-gold-400 hover:text-white"
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

        {/* Plantão 24h & Urgências Criminais (High Stakes Tactical Legal Command) */}
        <section
          id="plantao"
          className="scroll-mt-24 border-y border-amber-500/20 bg-[#07090e] py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                eyebrow="PRONTIDÃO IMEDIATA & DEFESA DE URGÊNCIA"
                description="Uma prisão injusta ou depoimento policial sem a assistência de um advogado criminalista pode causar danos irreversíveis ao processo. Saiba como atuamos com rapidez."
              >
                Prisão em flagrante, busca ou intimação?{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-amber-200">
                  Acione o plantão criminal imediatamente.
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dr. Hudson! Preciso de atendimento emergencial no Plantão Criminal 24h."
                )}
                target="_blank"
                size="md"
                variant="gold"
                className="rounded-lg shadow-sm"
              >
                <WhatsAppIcon size={16} /> Acionar Plantão 24h no WhatsApp
              </GlowingButton>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {/* Card 1: Prisão em Flagrante e Custódia */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group flex flex-col justify-between rounded-xl border border-amber-500/25 bg-[#0c1017] p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:bg-[#111622] sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-amber-500/30 bg-[#141b27] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gold-300">
                      <ShieldAlert size={14} /> Plantão de Flagrantes 24h
                    </span>
                    <span className="text-xs font-semibold text-amber-400">
                      Resposta Imediata
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-white sm:text-[1.75rem]">
                    Audiência de Custódia e Soltura Imediata
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-slate-300">
                    O momento da detenção exige presença física imediata. O Dr. Hudson de Freitas acompanha o cliente na delegacia de polícia em Ituiutaba e comarcas vizinhas, coibindo constrangimentos ilegais e preparando a fundamentação fática e jurídica para pleitear a liberdade na Audiência de Custódia.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-slate-200">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-gold-400" />
                      <span>Atendimento presencial urgente em delegacias e batalhões</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-gold-400" />
                      <span>Sustentação oral técnica na Audiência de Custódia perante o juiz</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-gold-400" />
                      <span>Orientação aos familiares sobre documentos necessários para a soltura</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-amber-500/20 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dr. Hudson! Gostaria de consultar sobre prisão em flagrante / custódia urgente."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-amber-500/30 bg-[#141b27] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-gold-200 transition-all hover:border-gold-300 hover:bg-[#1d2638] hover:text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Acionar Plantão de Prisão no WhatsApp
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>

              {/* Card 2: Investigação Preliminar e Habeas Corpus */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="group flex flex-col justify-between rounded-xl border border-amber-500/25 bg-[#0c1017] p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:bg-[#111622] sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-amber-500/30 bg-[#141b27] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gold-300">
                      <Landmark size={14} /> Tribunais Superiores
                    </span>
                    <span className="text-xs font-semibold text-amber-400">
                      TJMG · STJ · STF
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-white sm:text-[1.75rem]">
                    Habeas Corpus Urgente e Revogação de Prisão
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-slate-300">
                    Caso a prisão preventiva seja decretada ou mantida de forma injusta, ingressamos com Habeas Corpus com pedido liminar no Tribunal de Justiça de Minas Gerais em Belo Horizonte, no STJ ou STF em Brasília, combatendo a ausência de requisitos e a ilegalidade da medida.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-slate-200">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-gold-400" />
                      <span>Elaboração ágil de Habeas Corpus com pedido liminar</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-gold-400" />
                      <span>Despacho presencial e virtual de memoriais com Desembargadores</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-gold-400" />
                      <span>Anulação de provas e trancamento de ações penais temerárias</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-amber-500/20 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dr. Hudson! Gostaria de consultar sobre Habeas Corpus / Revogação de Prisão Preventiva."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-amber-500/30 bg-[#141b27] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-gold-200 transition-all hover:border-gold-300 hover:bg-[#1d2638] hover:text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Consultar Habeas Corpus no WhatsApp
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Nosso Compromisso Ético e Operacional - Ultra Deep Obsidian Theme */}
        <section className="relative overflow-hidden bg-[#05070a] py-20 text-white sm:py-28 lg:py-32">
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-amber-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-amber-600/5 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="NOSSO COMPROMISSO PROFISSIONAL"
                description="O reconhecimento comprovado com nota de 4,9 ★ no Google reflete a dedicação intransigente em aliar combatividade técnica, clareza sobre o processo e resposta imediata para cada cliente e sua família."
              >
                Protegemos sua liberdade com{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-amber-200">
                  seriedade, firmeza e dedicação total.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-amber-500/25 bg-[#0c1017] p-6 font-serif text-base italic leading-7 text-gold-100">
                &ldquo;Dr. Hudson é um profissional ímpar, muito humano e ao mesmo tempo firme e combativo perante a Justiça. Sempre nos manteve informados de cada passo do processo penal com total transparência e calma. Recomendo com toda certeza!&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-gold-400">
                  — Camila Resende Duarte · Google Meu Negócio
                </footer>
              </blockquote>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-amber-500/15"
            >
              {[
                [
                  "01",
                  "Prontidão Imediata & Atendimento Direto",
                  "Em matéria penal, cada hora conta. Você é atendido diretamente pelo Dr. Hudson de Freitas, sem intermediários, assegurando ação rápida em delegacias e juízos.",
                ],
                [
                  "02",
                  "Transparência Absoluta & Apoio à Família",
                  "Sabemos o impacto emocional e a angústia causados por uma acusação criminal. Esclarecemos o cenário real em linguagem clara, orientando a família em cada etapa.",
                ],
                [
                  "03",
                  "Combatividade Técnica sem Concessões",
                  "Não aceitamos ilegalidades ou abusos de autoridade. Atuamos com vigor na garantia da ampla defesa, do contraditório e da presunção de inocência até a última instância.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-semibold text-gold-400">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-white">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-slate-300">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Avaliações no Google (Depoimentos Reais - 4,9 estrelas · 10 avaliações) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 border-t border-amber-500/20 bg-[#0a0d14] py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                eyebrow="PROVA SOCIAL VERIFICADA · GOOGLE MEU NEGÓCIO"
                description="Confira avaliações autênticas de clientes que confiaram suas causas penais ao Dr. Hudson de Freitas em Ituiutaba, Triângulo Mineiro e em todo o Brasil."
              >
                Avaliado com nota 4,9 ★ pela{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-amber-200">
                  precisão técnica, agilidade e resultados conquistados.
                </span>
              </Heading>

              {/* Verified Google Badge Card */}
              <div className="flex flex-col gap-3 rounded-xl border border-amber-500/25 bg-[#0c1017] p-5 shadow-card sm:flex-row sm:items-center md:min-w-[340px]">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-lg border border-amber-500/25 bg-[#141b27] shadow-sm">
                  <GoogleIcon size={30} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-3xl font-bold leading-none text-white">
                      4,9
                    </span>
                    <div className="flex gap-0.5 text-amber-400">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-slate-200">
                    Dr. Hudson de Freitas Advogado Criminal
                  </p>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-gold-400 transition-colors hover:text-white"
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
                  className="group relative flex flex-col justify-between rounded-xl border border-amber-500/20 bg-[#0c1017] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-400/50 hover:bg-[#111723] hover:shadow-obsidian sm:p-8"
                >
                  <div>
                    {/* Header: Stars + Badge + Google icon */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-1 text-amber-400">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-300">
                        <GoogleIcon size={13} />
                        <span className="rounded-md border border-amber-500/20 bg-[#141b27] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-gold-300 shadow-xs">
                          {review.badge}
                        </span>
                      </div>
                    </div>

                    {/* Authentic review content */}
                    <p className="mt-5 text-[14px] italic leading-relaxed text-slate-200">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  {/* Reviewer info */}
                  <div className="mt-6 flex items-center gap-3 border-t border-amber-500/20 pt-4">
                    <div className="grid size-10 shrink-0 place-items-center rounded-lg border border-amber-500/25 bg-[#141b27] font-serif text-sm font-semibold text-gold-300 shadow-xs">
                      {review.name.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-serif text-base font-semibold text-white">
                        {review.name}
                      </p>
                      <p className="text-[10px] uppercase tracking-wider text-slate-400">
                        {review.reviewsCount}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom Actions and Trust Tags */}
            <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-amber-500/20 pt-8 sm:flex-row">
              <div className="flex flex-wrap items-center gap-2">
                {[
                  "Advocacia Criminal Especializada",
                  "Plantão 24h para Flagrantes e Custódia",
                  "Atendimento direto com o advogado",
                  "Sigilo absoluto e discrição",
                  "Nota 4,9 no Google",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-amber-500/20 bg-[#0c1017] px-3.5 py-1.5 text-[11px] font-medium text-slate-200 shadow-xs"
                  >
                    <CheckCircle2 size={13} className="text-gold-400" />
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-gold-400 transition-colors hover:text-white"
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

        {/* Contato & Localização em Ituiutaba */}
        <section
          id="contato"
          className="scroll-mt-24 border-t border-amber-500/20 bg-[#07090e] py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="CONTATO & SEDE EM ITUIUTABA - MG"
                description="Agende seu atendimento presencial em nossa sede no Bairro Camargo em Ituiutaba ou inicie seu atendimento emergencial online pelo WhatsApp com resposta imediata para qualquer lugar do Brasil."
              >
                Estamos prontos para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-amber-200">
                  defender sua liberdade.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dr. Hudson de Freitas! Gostaria de falar sobre um caso criminal."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} /> Iniciar Conversa no WhatsApp
                </GlowingButton>
                <p className="text-[11px] leading-5 text-slate-300">
                  Telefone e WhatsApp direto:{" "}
                  <strong className="text-white">{PHONE_DISPLAY}</strong>
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <Clock
                    size={16}
                    className="mt-0.5 shrink-0 text-gold-400"
                  />
                  <div>
                    <p className="font-semibold text-white">
                      Horário & Prontidão
                    </p>
                    <p className="mt-0.5 text-slate-200">
                      Plantão Criminal 24 Horas para Prisões e Flagrantes
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Expediente do escritório: Segunda a Sexta das 08:00 às 18:00 (atendimento presencial e online)
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-gold-400" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-medium text-white transition-colors hover:text-gold-300"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp 24h)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-gold-400" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-gold-300 text-slate-200"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-gold-400" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="transition-colors hover:text-gold-300 text-slate-200"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-gold-400"
                  />
                  <span>{ADDRESS_TEXT}</span>
                </div>
              </div>
            </div>

            {/* Address & Office Card */}
            <div className="relative overflow-hidden rounded-xl border border-amber-500/25 bg-[#0c1017] p-7 shadow-card sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-amber-500" />

              <div className="flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-lg border border-amber-500/30 bg-[#141b27] text-gold-400">
                  <MapPin size={22} strokeWidth={1.6} />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold-400">
                    Sede do Escritório
                  </p>
                  <p className="mt-1 font-serif text-2xl text-white">
                    Ituiutaba · Minas Gerais
                  </p>
                </div>
              </div>

              <address className="mt-7 max-w-md text-[14px] not-italic leading-7 text-slate-300">
                <strong className="font-semibold text-white">
                  Hudson de Freitas Advocacia
                </strong>
                <br />
                Dr. Hudson de Freitas · Advogado Criminalista
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-lg border border-amber-500/20 bg-[#07090e] p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-gold-400">
                  Expediente & Prontidão
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-slate-300">
                  <span>Plantão Criminal</span>
                  <span className="text-right font-semibold text-amber-400">
                    24 Horas / 7 Dias
                  </span>
                  <span>Atendimento Presencial</span>
                  <span className="text-right font-semibold text-white">
                    Com agendamento
                  </span>
                  <span>Segunda a Sexta</span>
                  <span className="text-right text-white">08:00 às 18:00</span>
                  <span>Atendimento Online</span>
                  <span className="text-right text-slate-200">Em todo o Brasil</span>
                </div>
              </div>

              <div className="my-7 h-px bg-amber-500/20" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-slate-400">
                  Av. Minas Gerais, 15 - Camargo · Ituiutaba - MG
                </p>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-amber-500/30 bg-[#141b27] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-gold-200 transition-colors hover:border-gold-300 hover:bg-[#1d2638] hover:text-white"
                >
                  Traçar Rota no Google Maps <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip - Deep Obsidian with Burnished Gold Sheen */}
        <section className="border-t border-amber-500/20 bg-gradient-to-r from-[#05070a] via-[#0c1017] to-[#05070a] px-5 py-14 text-white shadow-inner sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gold-400">
                <Sparkles size={13} /> HUDSON DE FREITAS · ADVOCACIA CRIMINAL
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                Precisa de auxílio urgente ou defesa penal combativa em Ituiutaba e região?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dr. Hudson! Gostaria de solicitar um atendimento com o escritório."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-lg bg-gradient-to-r from-brand-500 via-gold-400 to-brand-500 px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-950 shadow-md transition-all hover:-translate-y-0.5 hover:brightness-110 hover:shadow-gold"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp{" "}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-amber-500/20 bg-[#05070a] px-5 py-14 text-white sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <a
                href="#inicio"
                aria-label="Dr. Hudson de Freitas Advocacia Criminal"
                className="inline-block transition-transform hover:scale-[1.02]"
              >
                <Image
                  src={LOGO_FULL_SRC}
                  width={1024}
                  height={682}
                  alt="Dr. Hudson de Freitas Advocacia - Logotipo Oficial"
                  className="h-[72px] w-auto object-contain sm:h-[84px]"
                />
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-slate-300">
                ⚖️ Advocacia Criminal estratégica, combativa e intransigente. Plantão 24 horas para flagrantes, audiências de custódia, inquéritos policiais, Tribunal do Júri e recursos nos Tribunais Superiores.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-gold-400">
                Dr. Hudson de Freitas · Advogado Criminalista · OAB/MG
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-400">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-slate-300">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  Sobre o Advogado
                </a>
                <a className="footer-link" href="#atuacao">
                  Atuação Criminal
                </a>
                <a className="footer-link" href="#plantao">
                  Plantão 24h & Urgências
                </a>
                <a className="footer-link" href="#avaliacoes">
                  Avaliações no Google (4,9 ★)
                </a>
                <a className="footer-link" href="#contato">
                  Contato & Sede em Ituiutaba
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-400">
                Contato & Endereço
              </h2>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-slate-300">
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dr. Hudson! Gostaria de solicitar um atendimento com o escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 font-medium text-gold-300"
                >
                  <WhatsAppIcon size={15} /> WhatsApp 24h: {PHONE_DISPLAY}
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
                <p className="inline-flex items-center gap-2 pt-1 text-[11px] text-amber-400">
                  <Clock size={14} className="shrink-0" /> Plantão Criminal: 24 Horas
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-amber-500/20 pt-6 text-[10px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} HUDSON DE FREITAS ADVOCACIA. Todos os direitos reservados.
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
              "Olá, Dr. Hudson de Freitas! Preciso de orientação jurídica criminal sobre meu caso."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com o Dr. Hudson de Freitas"
            className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          >
            <WhatsAppIcon size={28} />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-[#0c1017] border border-amber-500/30 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg transition-opacity group-hover:block">
              Falar no WhatsApp
            </span>
          </a>
        </aside>

        {/* Modal de Detalhes da Área de Atuação Criminal (Masculine Dark Graphite) */}
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
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-xl border border-amber-500/35 bg-[#0c1017] p-7 shadow-2xl sm:max-w-xl sm:rounded-xl sm:p-10"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-amber-500/30 bg-[#141b27] text-gold-300 transition-colors hover:border-gold-300 hover:text-white"
                >
                  <X size={18} />
                </button>

                <p className="eyebrow">ESPECIALIDADE CRIMINAL</p>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-serif text-3xl leading-tight text-white sm:text-4xl"
                >
                  {activeArea.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-300">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-amber-500/20 pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold-400">
                    Principais demandas atendidas pelo escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-slate-200"
                      >
                        <span className="size-2 shrink-0 rounded-full bg-amber-400" />
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
                    className="px-5 py-3 text-xs font-semibold text-slate-400 transition-colors hover:text-white"
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
