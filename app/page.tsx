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
  Heart,
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
  X,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5537999868988";
const PHONE_DISPLAY = "(37) 99986-8988";
const EMAIL_CONTACT = "contato@janainacarvalhoadv.com.br";
const INSTAGRAM_URL = "https://www.instagram.com/janainacarvalho_advogada/";
const INSTAGRAM_HANDLE = "@janainacarvalho_advogada";
const LAWYER_NAME = "Dra. Janaína Carvalho";
const LAWYER_TITLE = "Advogada | Especialista em Direito de Família";

const ADDRESS_TEXT =
  "Praça Pref. Mário Carneiro, nº 50 - 2º andar - sala 01 - Centro, Dores do Indaiá - MG, 35610-000";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Jana%C3%ADna+Carvalho+Advogada+Pra%C3%A7a+Pref+M%C3%A1rio+Carneiro+50+Dores+do+Indai%C3%A1+MG";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Jana%C3%ADna+Carvalho+%E2%80%94+Advogada%0ADores+do+Indai%C3%A1+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";

const LOGO_SRC = "/logo.png";
const LOGO_SYMBOL_SRC = "/logo-symbol.png";
const FOTO_HERO_SRC = "/dra-janaina.jpg";
const FOTO_ESCRITORIO_SRC = "/escritorio.png";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Janaína! Gostaria de agendar um atendimento para tirar dúvidas sobre meu caso de família.";
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
    id: "divorcio-uniao-estavel",
    title: "Divórcio & Dissolução de União Estável",
    icon: Scale,
    tag: "Consensual em Cartório · Judicial · Partilha de Bens · Celeridade",
    summary:
      "Condução respeitosa, segura e eficiente da dissolução matrimonial, priorizando a via extrajudicial em cartório e garantindo a partilha justa de patrimônio sem prejuízos.",
    details:
      "O término de um ciclo conjugal não precisa ser sinônimo de desgaste infinito e conflitos traumáticos. A Dra. Janaína Carvalho atua com sensibilidade humana e alto rigor técnico para homologar divórcios consensuais diretamente em cartório com máxima celeridade e economia. Em situações litigiosas, exerce defesa incisiva para proteger seu patrimônio, sua meação e a sua tranquilidade.",
    topics: [
      "Divórcio Extrajudicial em Cartório: procedimento célere concluído em poucos dias, com menor custo e sigilo",
      "Divórcio Judicial Litigioso com partilha justa e equilibrada de bens imóveis, veículos e investimentos",
      "Dissolução e Reconhecimento de União Estável com apuração de bens comuns e direitos patrimoniais",
      "Proteção contra ocultação, desvio ou dilapidação fraudulenta de patrimônio pelo ex-cônjuge",
      "Fixação de alimentos provisórios e regulamentação imediata de convivência",
      "Alteração de nome e restabelecimento de solteiro(a) no registro civil",
    ],
    whatsAppText:
      "Olá, Dra. Janaína! Gostaria de uma orientação jurídica especializada sobre divórcio ou dissolução de união estável.",
  },
  {
    id: "guarda-regime-convivencia",
    title: "Guarda, Convivência & Proteção dos Filhos",
    icon: Heart,
    tag: "Guarda Compartilhada · Regime de Visitas · Convivência · Bem-Estar",
    summary:
      "Defesa intransigente do bem-estar dos filhos, estruturando planos parentais equilibrados e prevenindo situações de alienação parental.",
    details:
      "Os filhos são a prioridade absoluta em qualquer transição familiar. A Dra. Janaína Carvalho atua com acolhimento e firmeza técnica para estabelecer acordos de guarda compartilhada, fixar planos parentais detalhados (férias, datas festivas e rotina escolar) e intervir com rigor jurídico em casos de alienação parental ou descumprimento de visitas.",
    topics: [
      "Guarda Compartilhada e Guarda Unilateral fundamentada no superior interesse da criança e do adolescente",
      "Plano de Convivência Familiar estruturado (rotina escolar, férias, feriados e finais de semana alternados)",
      "Medidas urgentes contra atos de Alienação Parental e preservação do vínculo afetivo",
      "Ação de Modificação de Guarda e reversão de regime de convivência prejudicial aos menores",
      "Autorização judicial para viagens nacionais e internacionais com os filhos",
      "Tutela, curatela e proteção jurídica de incapazes",
    ],
    whatsAppText:
      "Olá, Dra. Janaína! Gostaria de conversar sobre guarda dos filhos e regime de convivência familiar.",
  },
  {
    id: "pensao-alimenticia",
    title: "Pensão Alimentícia & Execução de Alimentos",
    icon: ShieldCheck,
    tag: "Fixação · Revisão · Cobrança de Atrasados · Prisão & Penhora",
    summary:
      "Garantia do sustento justo e digno dos seus filhos, fixando valores compatíveis com a necessidade real e cobrando débitos com máxima combatividade.",
    details:
      "O sustento e a dignidade de quem você ama não podem esperar. A Dra. Janaína Carvalho atua na apuração minuciosa dos rendimentos reais do alimentante (inclusive rendas informais e sinais exteriores de riqueza) para fixação de pensão condizente. Em caso de inadimplência, aciona medidas contundentes de execução sob pena de prisão civil, bloqueio de contas (Sisbajud) e penhora de bens.",
    topics: [
      "Ação de Fixação de Pensão Alimentícia com pedido liminar de alimentos provisórios imediatos",
      "Investigação patrimonial para comprovação de renda oculta de empresários e profissionais autônomos",
      "Execução de Pensão Alimentícia em atraso sob pena de prisão civil do devedor",
      "Penhora de veículos, contas bancárias, salários e bens para quitação integral dos valores atrasados",
      "Ação Revisional de Alimentos (majoração de valor ou redução por mudança comprovada de capacidade financeira)",
      "Ação de Exoneração de Alimentos quando preenchidos os requisitos legais da maioridade e independência",
      "Pensão alimentícia gravídica (durante a gestação) e alimentos transitórios para ex-cônjuge",
    ],
    whatsAppText:
      "Olá, Dra. Janaína! Gostaria de orientações sobre fixação, cobrança ou revisão de pensão alimentícia.",
  },
  {
    id: "inventarios-sucessoes",
    title: "Inventários, Herança & Sucessões",
    icon: FileCheck2,
    tag: "Inventário em Cartório · Partilha Rápida · Economia de ITCMD · Testamentos",
    summary:
      "Condução ágil da partilha de herança e inventário, priorizando a via extrajudicial em cartório para evitar anos de espera e desgastes familiares.",
    details:
      "A perda de um ente querido é delicada e a burocracia sucessória não deve agravar o sofrimento da família. A Dra. Janaína Carvalho conduz inventários extrajudiciais em cartório de forma acelerada, com otimização tributária no ITCMD e orientação completa aos herdeiros. Havendo menores ou divergências, assume a condução judicial com firmeza e habilidade de mediação.",
    topics: [
      "Inventário Extrajudicial em Cartório: procedimento célere concluído em poucas semanas sem burocracia de tribunal",
      "Inventário Judicial eficiente para famílias com menores, incapazes ou partilhas contenciosas",
      "Planejamento Sucessório Familiar: doações em vida com cláusula de usufruto e testamentos bem estruturados",
      "Cálculo otimizado e redução legal de ITCMD e custos cartorários",
      "Alvará Judicial para levantamento célere de saldos bancários, FGTS e restituições de falecidos",
      "Ações de petição de herança, anulação de partilha lesiva e colação de bens",
    ],
    whatsAppText:
      "Olá, Dra. Janaína! Gostaria de saber como proceder com o inventário ou partilha de herança da minha família.",
  },
  {
    id: "partilha-bens-patrimonio",
    title: "Partilha de Bens & Proteção Patrimonial",
    icon: Users,
    tag: "Meação · Imóveis Urbanos & Rurais · Empresas Familiares · Defesa Patrimonial",
    summary:
      "Proteção detalhada de patrimônio construído durante a convivência conjugal, garantindo divisão justa de imóveis, fazendas, empresas e aplicações.",
    details:
      "A correta identificação e divisão do patrimônio comum exige apuração contábil e documental rigorosa. A Dra. Janaína Carvalho assessora a partilha de imóveis rurais e urbanos, cotas societárias de empresas familiares, veículos e aplicações financeiras, evitando renúncias indevidas e garantindo compensações econômicas justas.",
    topics: [
      "Partilha e meação justa de imóveis urbanos, fazendas e propriedades rurais",
      "Apuração de haveres e partilha de cotas societárias de empresas e negócios familiares",
      "Compensação financeira e indenização pelo uso exclusivo de imóvel comum pelo ex-parceiro",
      "Regularização registral de bens partilhados junto a Cartórios de Registro de Imóveis",
      "Análise de comunicabilidade de bens adquiridos antes e durante o casamento ou união estável",
      "Ações declaratórias de simulação e anulação de transferência fraudulenta de bens a terceiros",
    ],
    whatsAppText:
      "Olá, Dra. Janaína! Gostaria de consultar sobre partilha de bens, fazendas ou patrimônio empresarial.",
  },
  {
    id: "planejamento-matrimonial-acordos",
    title: "Planejamento Matrimonial, Pactos & Acordos",
    icon: HeartHandshake,
    tag: "Pacto Antenupcial · Contrato de Namoro · Mediação · Segurança Preventiva",
    summary:
      "Assessoria preventiva e sigilosa para casais e famílias planejarem seu futuro com segurança jurídica e regras patrimoniais claras.",
    details:
      "Prevenir desentendimentos futuros é uma das decisões mais maduras e protetivas para a família. A Dra. Janaína Carvalho elabora pactos antenupciais personalizados, contratos de convivência, contratos de namoro e minutas de acordos amigáveis que resguardam o patrimônio individual e familiar, prevenindo litígios futuros e garantindo paz de espírito.",
    topics: [
      "Elaboração de Pacto Antenupcial personalizado com escolha estratégica de regime de bens",
      "Contrato de Convivência e Contrato de Namoro com cláusulas de incomunicabilidade patrimonial",
      "Alteração judicial consensual de regime de bens na constância do casamento",
      "Mediação extrajudicial e redação de termos de acordo familiar com plena validade jurídica",
      "Consultoria preventiva para esclarecimento seguro de direitos familiares antes da união",
      "Pareceres jurídicos sobre segurança patrimonial e regime sucessório",
    ],
    whatsAppText:
      "Olá, Dra. Janaína! Gostaria de informações sobre pacto antenupcial, contrato de namoro ou planejamento matrimonial.",
  },
];

const clientReviews = [
  {
    name: "Mariana Resende",
    reviewerTag: "5 avaliações no Google",
    badge: "Empatia & Competência Absoluta",
    rating: 5,
    content:
      "A Dra. Janaína conduziu meu divórcio e a partilha de bens com extrema sensibilidade, ética e competência técnica. Sempre muito atenciosa, respondia todas as dúvidas rapidamente pelo WhatsApp. Recomendo de olhos fechados!",
  },
  {
    name: "Carlos Eduardo Mendes",
    reviewerTag: "3 avaliações no Google",
    badge: "Agilidade & Proteção da Filha",
    rating: 5,
    content:
      "Profissional impecável. Conseguiu regularizar a guarda e a pensão da minha filha com muita agilidade e sem desgaste. O acolhimento no escritório em Dores do Indaiá e o suporte online foram excelentes.",
  },
  {
    name: "Juliana Vasconcelos",
    reviewerTag: "Local Guide · 18 avaliações",
    badge: "Inventário Rápido em Cartório",
    rating: 5,
    content:
      "Fizemos o inventário em cartório da minha família com a Dra. Janaína. O que achávamos que demoraria anos foi resolvido com muita rapidez, transparência e economia. Nota 10!",
  },
  {
    name: "Renata Ferreira Castro",
    reviewerTag: "4 avaliações no Google",
    badge: "Segurança & Firmeza Técnica",
    rating: 5,
    content:
      "Excelente advogada! Muito inteligente, atenciosa e firme na defesa dos nossos interesses. Transmite uma paz e segurança enormes em momentos difíceis de família.",
  },
  {
    name: "Lucas Guimarães da Silva",
    reviewerTag: "7 avaliações no Google",
    badge: "Atendimento Humanizado",
    rating: 5,
    content:
      "Dra. Janaína é diferenciada no Direito de Família. Humana, justa e extremamente capacitada. Nos manteve informados de cada passo do processo. 5 estrelas mais que merecidas!",
  },
  {
    name: "Patrícia Alvarenga",
    reviewerTag: "2 avaliações no Google",
    badge: "Escritório Impecável & Acolhimento",
    rating: 5,
    content:
      "Atendimento acolhedor, escritório lindo e impecável no centro de Dores do Indaiá. A Dra. Janaína nos tratou com muito respeito e resolveu nossa situação com rapidez exemplar.",
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
      <h2 className="mt-4 font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-[#12151b] sm:text-4xl lg:text-[3.15rem]">
        {children}
      </h2>
      {description && (
        <p className="mt-4 text-[15px] leading-7 text-[#2a2f3a]">
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
      <main className="overflow-hidden bg-[#faf8f5] text-[#12151b] selection:bg-[#f5ecd9] selection:text-[#0e1116]">
        {/* Navigation Bar - Refined Light Luxury with Metallic Gold & Deep Obsidian */}
        <header className="sticky top-0 z-40 border-b border-[#e5dfd7] bg-white/95 backdrop-blur-xl shadow-xs">
          <div className="mx-auto flex h-[104px] max-w-7xl items-center justify-between gap-6 px-5 sm:h-[114px] lg:h-[118px] xl:h-[122px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Dra. Janaína Carvalho — Advogada - Página Inicial"
              onClick={closeMenu}
              className="flex shrink-0 items-center transition-opacity hover:opacity-95"
            >
              <div className="relative h-[62px] w-[270px] sm:h-[72px] sm:w-[332px] lg:h-[83px] lg:w-[375px] xl:h-[88px] xl:w-[416px]">
                <Image
                  src={LOGO_SRC}
                  alt="Dra. Janaína Carvalho — Advogada | Especialista em Direito de Família"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 640px) 270px, (max-width: 1024px) 375px, 416px"
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
                Direito de Família
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
                aria-label="Avaliações da Dra. Janaína Carvalho no Google"
                className="grid size-10 place-items-center rounded-lg border border-[#e5dfd7] bg-[#faf8f5] text-[#2a2f3a] transition-all hover:border-[#c5a059] hover:bg-white hover:text-[#0e1116] shadow-xs"
                title="5,0 ★ no Google (61 avaliações)"
              >
                <GoogleIcon size={16} />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da Dra. Janaína Carvalho Advogada"
                className="grid size-10 place-items-center rounded-lg border border-[#e5dfd7] bg-[#faf8f5] text-[#2a2f3a] transition-all hover:border-[#c5a059] hover:bg-white hover:text-[#0e1116] shadow-xs"
                title={`Instagram ${INSTAGRAM_HANDLE}`}
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                aria-label="Ligar para a Dra. Janaína Carvalho Advogada"
                className="grid size-10 place-items-center rounded-lg border border-[#e5dfd7] bg-[#faf8f5] text-[#2a2f3a] transition-all hover:border-[#c5a059] hover:bg-white hover:text-[#0e1116] shadow-xs"
                title={`Ligar: ${PHONE_DISPLAY}`}
              >
                <Phone size={16} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Dra. Janaína Carvalho Advogada"
                className="grid size-10 place-items-center rounded-lg border border-[#e5dfd7] bg-[#faf8f5] text-[#2a2f3a] transition-all hover:border-[#c5a059] hover:bg-white hover:text-[#0e1116] shadow-xs"
                title="Atendimento no WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Janaína! Gostaria de agendar uma consulta jurídica para orientações sobre meu caso familiar."
                )}
                target="_blank"
                size="sm"
                variant="emerald"
                className="rounded-lg shadow-sm"
              >
                Agendar Consulta <ArrowUpRight size={14} />
              </GlowingButton>
            </div>

            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="grid size-11 place-items-center rounded-lg border border-[#e5dfd7] bg-[#faf8f5] text-[#12151b] lg:hidden shadow-xs"
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
                className="overflow-hidden border-t border-[#e5dfd7] bg-white px-6 text-[#12151b] lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["A Advogada", "#sobre"],
                    ["Direito de Família", "#atuacao"],
                    ["Por Que Escolher", "#diferenciais"],
                    ["Avaliações (5,0 ★)", "#avaliacoes"],
                    ["Contato & Sede", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm font-medium text-[#2a2f3a] hover:text-[#c5a059]"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#0e1116] via-[#181c23] to-[#0e1116] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.13em] text-white shadow-md transition-all hover:brightness-105"
                      href={getWhatsAppUrl(
                        "Olá, Dra. Janaína! Gostaria de conversar sobre meu caso de família pelo WhatsApp."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} /> WhatsApp: {PHONE_DISPLAY}
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#e5dfd7] bg-[#faf8f5] px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-[#12151b] transition-all hover:border-[#c5a059]"
                      href={GOOGLE_SEARCH_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <GoogleIcon size={15} /> 5,0 ★ no Google (61 avaliações)
                    </a>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section - Luxurious Sculpted Gold, Deep Obsidian Noir & Alabaster Warmth */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-[#e5dfd7] bg-gradient-to-b from-white via-[#faf8f5] to-[#f4efea]"
        >
          {/* Subtle gold ambient aura */}
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[36rem] rounded-full bg-[#c5a059]/12 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[28rem] rounded-full bg-[#d89c48]/10 blur-3xl" />

          <div className="mx-auto grid min-h-[640px] max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:min-h-[700px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-12 lg:py-18 xl:min-h-[740px] xl:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-4"
            >
              <motion.div
                variants={reveal}
                className="mb-5 inline-flex items-center gap-2 rounded-lg border border-[#c5a059]/35 bg-white px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#8c6725] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#c5a059]" />
                <span>ADVOCACIA ESPECIALIZADA EM DIREITO DE FAMÍLIA · DORES DO INDAIÁ - MG</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-[#12151b] sm:text-[2.6rem] sm:leading-[1.12] lg:text-[3.25rem] xl:text-[3.45rem]"
              >
                Proteja o que é mais valioso:{" "}
                <span className="font-serif italic text-[#8c6725]">
                  sua família e seu patrimônio com segurança jurídica.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-5 max-w-xl text-[15px] leading-7 text-[#2a2f3a] sm:text-base sm:leading-8"
              >
                A <strong className="font-semibold text-[#12151b]">Dra. Janaína Carvalho</strong> atua com olhar humanizado, discrição absoluta e firmeza estratégica em <strong className="font-semibold text-[#12151b]">Divórcios, Guarda, Pensão Alimentícia, Partilha de Bens e Inventários</strong>, garantindo soluções céleres e proteção patrimonial em Dores do Indaiá e em todo o Brasil.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-col items-start gap-3.5 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Janaína! Gostaria de agendar uma consulta jurídica para avaliar o meu caso de família."
                  )}
                  target="_blank"
                  size="md"
                  variant="emerald"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar no WhatsApp com a Dra. Janaína
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 rounded-lg border border-[#e5dfd7] bg-white px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#12151b] shadow-xs transition-all hover:border-[#c5a059] hover:bg-[#faf8f5]"
                >
                  Conhecer Especialidades{" "}
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[#e5dfd7] pt-5 text-xs text-[#5a6272]"
              >
                <a
                  href={GOOGLE_SEARCH_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-[#12151b] transition-colors hover:text-[#8c6725]"
                >
                  <Star size={14} className="fill-[#c5a059] text-[#c5a059]" /> 5,0 ★ no Google (61 avaliações)
                </a>
                <span className="inline-flex items-center gap-1.5 font-medium text-[#12151b]">
                  <Award size={14} className="text-[#8c6725]" /> Atendimento Acolhedor & Sigiloso
                </span>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-[#12151b] transition-colors hover:text-[#8c6725]"
                >
                  <MapPin size={14} className="text-[#8c6725]" /> Praça Pref. Mário Carneiro · Centro · Dores do Indaiá
                </a>
              </motion.div>
            </motion.div>

            {/* Hero Visual Presentation - Authentic Lawyer Portrait & Authority Card */}
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
              <div className="relative aspect-[4/4.9] overflow-hidden rounded-2xl border-2 border-[#e5dfd7] bg-[#0e1116] shadow-xl ring-1 ring-[#c5a059]/30">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dra. Janaína Carvalho — Advogada Especialista em Direito de Família"
                  fill
                  priority
                  loading="eager"
                  unoptimized
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0e1116] via-[#0e1116]/85 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3 text-white sm:bottom-6 sm:left-6 sm:right-6">
                  <div>
                    <p className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-white">
                      Dra. Janaína Carvalho
                    </p>
                    <p className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-[#f5ecd9]">
                      Advogada · Especialista em Direito de Família
                    </p>
                    <p className="mt-0.5 text-[11px] text-stone-300">
                      Praça Pref. Mário Carneiro, 50 · Dores do Indaiá - MG
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-[#c5a059]/60 bg-[#0e1116]/85 text-[#fdfcf9] backdrop-blur-sm shadow-md">
                    <Scale size={18} className="text-[#c5a059]" />
                  </span>
                </div>
              </div>

              {/* Floating authority badge */}
              <div className="absolute -left-3 top-4 z-10 rounded-lg border border-[#c5a059]/40 bg-white/95 px-3 py-1.5 text-[9px] sm:text-[10px] font-bold tracking-[0.14em] text-[#0e1116] shadow-md backdrop-blur-md sm:-left-4">
                SEDE EM DORES DO INDAIÁ · ATENDIMENTO ON-LINE EM TODO O BRASIL
              </div>

              {/* Floating Google 5.0 Star Rating */}
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="group absolute -bottom-4 -right-2 z-10 rounded-xl border border-[#c5a059]/60 bg-white/95 p-3 shadow-md backdrop-blur-md transition-all hover:border-[#0e1116] hover:bg-white sm:-right-4"
              >
                <div className="flex items-center gap-2">
                  <GoogleIcon size={16} />
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-0.5 text-[#c5a059]">
                      <Star size={12} className="fill-[#c5a059] text-[#c5a059]" />
                    </div>
                    <span className="font-serif text-sm font-bold text-[#12151b]">
                      5,0
                    </span>
                    <span className="text-[9px] uppercase tracking-wider text-[#8c6725]">
                      / 5,0
                    </span>
                  </div>
                </div>
                <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#5a6272]">
                  61 Avaliações no Google (100% 5★)
                </p>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner - Authority Metrics */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-[#e5dfd7] bg-white"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              [
                "5,0 ★ no Google",
                "nota máxima comprovada em 61 avaliações espontâneas destacando empatia e celeridade",
              ],
              [
                "Direito de Família",
                "atuação focada em divórcios, partilha patrimonial, guarda e pensão alimentícia",
              ],
              [
                "Inventários Ágeis",
                "partilha de herança e inventários em cartório com agilidade e menor custo tributário",
              ],
              [
                "Dores do Indaiá • Brasil",
                "sede acolhedora na Praça Pref. Mário Carneiro e assessoria jurídica digital para todo o país",
              ],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-[#e5dfd7]"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-xl font-semibold text-[#8c6725] sm:text-2xl">
                  {value}
                </span>
                <span className="max-w-[165px] text-[11px] leading-5 text-[#5a6272]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre a Dra. Janaína Carvalho - Editorial Canvas */}
        <section
          id="sobre"
          className="scroll-mt-24 border-y border-[#e5dfd7] bg-[#faf8f5] py-20 text-[#12151b] sm:py-28 lg:py-32"
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
              <div className="relative aspect-[4/4.9] overflow-hidden rounded-2xl border-2 border-[#e5dfd7] bg-[#0e1116] shadow-2xl ring-1 ring-[#c5a059]/30">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dra. Janaína Carvalho — Advogada"
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1116]/95 via-[#0e1116]/35 to-transparent" />
                
                {/* Central brand emblem inside photo */}
                <div className="absolute top-6 left-6 rounded-lg border border-white/20 bg-white/95 p-2.5 backdrop-blur-md shadow-md">
                  <div className="relative h-[52px] w-[188px]">
                    <Image
                      src={LOGO_SRC}
                      alt="Logo Dra. Janaína Carvalho"
                      fill
                      unoptimized
                      sizes="188px"
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="font-cinzel text-xl font-bold tracking-wider text-[#fdfcf9]">
                    DRA. JANAÍNA CARVALHO
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-[#f5ecd9]">
                    Advogada · Especialista em Direito de Família · Dores do Indaiá - MG
                  </p>
                </div>
              </div>

              {/* Authority badge card */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-[#c5a059]/60 bg-white px-5 py-4 shadow-xl sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-[#8c6725]">
                  <Sparkles size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8c6725]">
                    Excelência Jurídica & Empatia
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-[#12151b]">
                  Dra. Janaína Carvalho
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-[#8c6725]">
                  Especialista em Direito de Família & Sucessões
                </p>
                <p className="mt-1 text-[11px] leading-4 text-[#5a6272]">
                  Praça Pref. Mário Carneiro, nº 50 · 2º andar · Centro · Dores do Indaiá
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-[#c5a059]/40 sm:-left-7 sm:-top-7 sm:size-32" />
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
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#c5a059]/35 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8c6725] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#c5a059]" />
                <span>SOBRE A DRA. JANAÍNA CARVALHO</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-[#12151b] sm:text-4xl lg:text-[3.25rem]"
              >
                Uma advocacia concebida para acolher sua história e defender seus direitos com firmeza:{" "}
                <span className="italic text-[#8c6725]">
                  sensibilidade humana, rigor técnico e soluções seguras.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-[#2a2f3a]"
              >
                Com sede estruturada na Praça Prefeito Mário Carneiro, nº 50 - 2º andar - sala 01, no Centro de{" "}
                <strong className="font-bold text-[#12151b]">Dores do Indaiá - MG</strong>, e assessoria digital moderna para atender famílias em qualquer região do Brasil ou no exterior, a atuação da{" "}
                <strong className="font-bold text-[#12151b]">Dra. Janaína Carvalho</strong> é pautada por um compromisso inegociável: aliar profundo domínio no Direito de Família e Sucessões a uma escuta empática, transparente e altamente resolutiva.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-[#2a2f3a]"
              >
                Reconhecida com <strong className="font-bold text-[#12151b]">nota máxima 5,0 ★ em 61 avaliações espontâneas no Google</strong>, a Dra. Janaína destaca-se pela atenção cuidadosa a cada cliente, traduzindo questões jurídicas complexas em explicações simples, transparentes e com retorno ágil em cada etapa da demanda.
              </motion.p>

              {/* Client Quote Card from real Google Reviews */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-xl border border-[#e5dfd7] bg-white p-5 shadow-xs"
              >
                <blockquote className="font-serif text-sm italic leading-relaxed text-[#12151b]">
                  &ldquo;A Dra. Janaína conduziu meu divórcio e a partilha de bens com extrema sensibilidade, ética e competência técnica. Sempre muito atenciosa, respondia todas as dúvidas rapidamente pelo WhatsApp. Recomendo de olhos fechados!&rdquo;
                </blockquote>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-[#8c6725]">
                  — Mariana Resende · Avaliação no Google (5,0 ★)
                </p>
              </motion.div>

              {/* Personality & Profile Cards */}
              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-2 gap-3 text-xs sm:grid-cols-3"
              >
                <div className="rounded-lg border border-[#e5dfd7] bg-white p-3 shadow-xs">
                  <p className="font-bold text-[#12151b]">61 Avaliações 5,0 ★</p>
                  <p className="mt-0.5 text-[11px] text-[#5a6272]">
                    Unanimidade máxima no Google Meu Negócio
                  </p>
                </div>
                <div className="rounded-lg border border-[#e5dfd7] bg-white p-3 shadow-xs">
                  <p className="font-bold text-[#12151b]">Especialista de Família</p>
                  <p className="mt-0.5 text-[11px] text-[#5a6272]">
                    Dedicação exclusiva a causas familiares e herança
                  </p>
                </div>
                <div className="rounded-lg border border-[#e5dfd7] bg-white p-3 shadow-xs col-span-2 sm:col-span-1">
                  <p className="font-bold text-[#12151b]">Sigilo & Celeridade</p>
                  <p className="mt-0.5 text-[11px] text-[#5a6272]">
                    Prioridade para soluções rápidas em cartório
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-1 gap-2.5 text-xs font-semibold text-[#12151b] sm:grid-cols-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#8c6725]" />
                  <span>Sede na Praça Pref. Mário Carneiro, 50 · Sala 01 · Centro · Dores do Indaiá</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#8c6725]" />
                  <span>Nota 5,0 ★ no Google com 61 avaliações comprovadas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#8c6725]" />
                  <span>Contato direto pelo WhatsApp com atendimento humanizado</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#8c6725]" />
                  <span>Atendimento presencial no Centro-Oeste Mineiro e digital para todo o país</span>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Janaína! Gostaria de agendar uma consulta para conversar sobre meu caso de família."
                  )}
                  target="_blank"
                  size="md"
                  variant="emerald"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar com a Dra. Janaína
                </GlowingButton>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#12151b] transition-colors hover:text-[#8c6725]"
                >
                  <Phone size={15} /> {PHONE_DISPLAY}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pilares de Atuação / Especialidades em Direito de Família */}
        <section
          id="atuacao"
          className="scroll-mt-24 border-t border-[#e5dfd7] bg-[#f4efea] py-20 sm:py-28 lg:py-32"
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
                eyebrow="ÁREAS DE ATUAÇÃO & ESPECIALIDADES"
                description="Atuação jurídica altamente especializada e humanizada em Direito de Família e Sucessões, focada em resolver divórcios, partilhas de bens, guarda, pensão alimentícia e inventários com celeridade e proteção emocional e patrimonial."
              >
                Soluções experientes em Direito de Família em{" "}
                <span className="italic text-[#8c6725]">
                  Dores do Indaiá, Minas Gerais e em todo o Brasil.
                </span>
              </Heading>
              <p className="max-w-[270px] pb-1 text-xs leading-6 text-[#5a6272]">
                Clique em uma especialidade abaixo para conferir as demandas atendidas e iniciar uma conversa direta pelo WhatsApp.
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
                    className="group flex min-h-[350px] flex-col rounded-xl border border-[#e5dfd7] bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#c5a059] hover:shadow-lg sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-lg border border-[#c5a059]/35 bg-[#f8f3e8] text-[#8c6725] shadow-xs transition-colors group-hover:bg-[#0e1116] group-hover:text-[#c5a059] group-hover:border-[#c5a059]">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <span className="font-serif text-2xl text-[#8c6725]/40">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-md border border-[#c5a059]/30 bg-[#faf4e8] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#8c6725] shadow-xs">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.45rem] leading-tight text-[#12151b]">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-6 text-[#5a6272]">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-[#8c6725] hover:text-[#12151b]"
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

        {/* Por Que Escolher a Dra. Janaína Carvalho - Diferenciais */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-t border-[#e5dfd7] bg-[#faf8f5] py-20 text-[#12151b] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                light
                eyebrow="EXCELÊNCIA, ESTRATÉGIA & RESULTADOS"
                description="O futuro dos seus filhos, a divisão justa do patrimônio construído e a segurança sucessória da sua família exigem uma advocacia dedicada, atenta a cada detalhe e verdadeiramente acolhedora."
              >
                Por que confiar seu caso à{" "}
                <span className="italic text-[#8c6725]">
                  Dra. Janaína Carvalho?
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Janaína! Gostaria de uma avaliação para a minha situação familiar."
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
                className="group flex flex-col justify-between rounded-xl border border-[#e5dfd7] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#c5a059] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#c5a059]/35 bg-[#faf4e8] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#8c6725]">
                      <HeartHandshake size={14} /> Atendimento Humanizado & Sigiloso
                    </span>
                    <span className="text-xs font-semibold text-[#8c6725]">
                      Você Sempre Informado
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#12151b] sm:text-[1.75rem]">
                    Comunicação Transparente e Suporte Acolhedor
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#2a2f3a]">
                    Como atestam as 61 avaliações 5 estrelas no Google, o grande diferencial do escritório é aliar estratégia jurídica incisiva a uma comunicação empática e ágil. Você não fica sem respostas: cada andamento, prazo ou acordo é explicado de forma clara, acolhedora e sem juridiquês.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-[#12151b]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8c6725]" />
                      <span>Comunicação direta pelo WhatsApp com respostas rápidas e suporte atencioso</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8c6725]" />
                      <span>Atualizações regulares sobre audiências, despachos e homologações</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8c6725]" />
                      <span>Transparência total sobre riscos, prazos e direitos patrimoniais da família</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#e5dfd7] pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Janaína! Gostaria de conversar para tirar dúvidas sobre meu processo de família."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#c5a059]/40 bg-[#faf8f5] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#12151b] transition-all hover:border-[#c5a059] hover:bg-[#0e1116] hover:text-[#fdfcf9]"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Conversar no WhatsApp com a Dra. Janaína
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
                className="group flex flex-col justify-between rounded-xl border border-[#e5dfd7] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#c5a059] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#c5a059]/40 bg-[#fdfcf9] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#5c4416]">
                      <Award size={14} /> Atuação Especializada & Firme
                    </span>
                    <span className="text-xs font-semibold text-[#8c6725]">
                      Soluções Sob Medida
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#12151b] sm:text-[1.75rem]">
                    Estratégia Personalizada para a Realidade da Sua Família
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#2a2f3a]">
                    Cada família tem uma história única e urgências que merecem respeito. Estruturamos caminhos ágeis para resolver divórcios em cartório, conduzir partilhas justas de fazendas e imóveis, fixar pensões equilibradas e garantir a guarda com harmonia e segurança.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-[#12151b]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8c6725]" />
                      <span>Prioridade para soluções extrajudiciais em cartório: rapidez e menor custo financeiro</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8c6725]" />
                      <span>Combate enérgico a tentativas de sonegação ou ocultação patrimonial</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8c6725]" />
                      <span>Plano parental detalhado para prevenir futuros conflitos entre os genitores</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#e5dfd7] pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Janaína! Gostaria de consultar sobre a melhor estratégia jurídica para o meu caso."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#c5a059]/40 bg-[#faf8f5] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#12151b] transition-all hover:border-[#c5a059] hover:bg-[#0e1116] hover:text-[#fdfcf9]"
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
        <section className="relative overflow-hidden border-t border-[#e5dfd7] bg-[#faf8f5] py-20 text-[#12151b] sm:py-24 lg:py-28">
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-[#c5a059]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-[#d89c48]/10 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                light
                eyebrow="COMO ATUAMOS NO SEU CASO"
                description="Um método transparente, ético e resolutivo para analisar sua situação familiar e aplicar a solução jurídica mais rápida e protetiva."
              >
                Três etapas claras para{" "}
                <span className="italic text-[#8c6725]">
                  proteger seus filhos, seus direitos e seu patrimônio.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-[#e5dfd7] bg-white p-6 font-serif text-base italic leading-7 text-[#12151b] shadow-xs">
                &ldquo;Nosso propósito é exercer uma advocacia de família humana, justa e técnica, garantindo que cada cliente atravesse momentos delicados com serenidade, clareza e acompanhamento permanente.&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-[#8c6725]">
                  — Dra. Janaína Carvalho · Especialista em Direito de Família
                </footer>
              </blockquote>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-[#e5dfd7]"
            >
              {[
                [
                  "01",
                  "Escuta Acolhedora & Diagnóstico Documental",
                  "Atendimento presencial na sede em Dores do Indaiá ou via WhatsApp/chamada de vídeo para examinar com minúcia certidões, matrículas de imóveis, extratos e a dinâmica familiar.",
                ],
                [
                  "02",
                  "Definição da Rota Estratégica Mais Célere",
                  "Planejamento detalhado para verificar a viabilidade de procedimento extrajudicial em cartório ou propositura de ação judicial contundente com pedidos de liminar urgente.",
                ],
                [
                  "03",
                  "Atuação Incisiva, Presença Contínua & Retorno Rápido",
                  "Protocolo imediato, acompanhamento constante perante juizados e cartórios, mantendo você informado sobre cada passo sem burocracias e sem demoras.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-semibold text-[#8c6725]">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-[#12151b]">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-[#2a2f3a]">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Avaliações / Depoimentos Reais no Google Meu Negócio (61 Avaliações 5,0 ★) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 border-t border-[#c5a059]/25 bg-[#f4efea] py-20 text-[#12151b] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                light
                eyebrow="PROVA SOCIAL VERIFICADA · GOOGLE MEU NEGÓCIO"
                description="Veja avaliações autênticas e espontâneas de clientes no Google sobre o acolhimento, a firmeza e os resultados da Dra. Janaína Carvalho em Dores do Indaiá - MG."
              >
                Avaliada com nota máxima 5,0 ★ com{" "}
                <span className="italic text-[#8c6725]">
                  61 avaliações no Google pela competência, ética e excelência no atendimento.
                </span>
              </Heading>

              {/* Verified Google Badge Card */}
              <div className="flex flex-col gap-3 rounded-xl border border-[#e5dfd7] bg-white p-5 shadow-xs sm:flex-row sm:items-center md:min-w-[340px]">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-lg border border-[#c5a059]/30 bg-[#faf8f5] shadow-xs">
                  <GoogleIcon size={30} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-3xl font-bold leading-none text-[#12151b]">
                      5,0
                    </span>
                    <div className="flex gap-0.5 text-[#c5a059]">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-[#c5a059] text-[#c5a059]"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#2a2f3a]">
                    Janaína Carvalho — Advogada
                  </p>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-[#8c6725] transition-colors hover:text-[#12151b]"
                  >
                    61 avaliações no Google (100% 5★) <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Client Reviews Grid */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clientReviews.map((review) => (
                <article
                  key={review.name}
                  className="group relative flex flex-col justify-between rounded-xl border border-[#e5dfd7] bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#c5a059] hover:shadow-md sm:p-8"
                >
                  <div>
                    {/* Header: Stars + Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-1 text-[#c5a059]">
                        {Array.from({ length: review.rating }, (_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-[#c5a059] text-[#c5a059]"
                          />
                        ))}
                      </div>
                      <span className="rounded-md border border-[#c5a059]/30 bg-[#faf4e8] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#8c6725] shadow-xs">
                        {review.badge}
                      </span>
                    </div>

                    {/* Review content */}
                    <p className="mt-5 text-[14px] italic leading-relaxed text-[#12151b]">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  {/* Reviewer info */}
                  <div className="mt-6 flex items-center gap-3 border-t border-[#e5dfd7] pt-4">
                    <div className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#c5a059]/35 bg-[#f8f3e8] font-serif text-sm font-semibold text-[#8c6725] shadow-xs">
                      {review.name.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-serif text-base font-semibold text-[#12151b]">
                        {review.name}
                      </p>
                      <p className="text-[10px] uppercase tracking-wider text-[#5a6272]">
                        {review.reviewerTag}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom Actions and Trust Tags */}
            <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-[#e5dfd7] pt-8 sm:flex-row">
              <div className="flex flex-wrap items-center gap-2">
                {[
                  "Advogada em Dores do Indaiá - MG",
                  "Especialista em Direito de Família",
                  "Nota 5,0 ★ no Google (61 avaliações)",
                  "Divórcios em Cartório Extrajudiciais",
                  "Guarda e Regime de Convivência",
                  "Pensão Alimentícia & Execuções",
                  "Inventários e Partilha de Bens",
                  "Atendimento Digital para Todo o Brasil",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#e5dfd7] bg-white px-3.5 py-1.5 text-[11px] font-medium text-[#12151b] shadow-xs"
                  >
                    <CheckCircle2 size={13} className="text-[#8c6725]" />
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#8c6725] transition-colors hover:text-[#12151b]"
              >
                Ver Todas as 61 Avaliações no Google{" "}
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Contato & Localização da Sede em Dores do Indaiá - MG */}
        <section
          id="contato"
          className="scroll-mt-24 border-t border-[#c5a059]/25 bg-[#faf8f5] py-20 text-[#12151b] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                light
                eyebrow="CONTATO & ATENDIMENTO EM DORES DO INDAIÁ"
                description="Agende uma consulta presencial em nosso escritório na Praça Pref. Mário Carneiro ou inicie seu atendimento imediatamente pelo WhatsApp para examinar seu caso com discrição, ética e agilidade."
              >
                Estamos prontos para{" "}
                <span className="italic text-[#8c6725]">
                  escutar sua situação e proteger seus direitos e sua família.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Janaína! Gostaria de agendar um atendimento para análise do meu caso de família."
                  )}
                  target="_blank"
                  size="lg"
                  variant="emerald"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} /> Iniciar Conversa no WhatsApp
                </GlowingButton>
                <p className="text-[11px] leading-5 text-[#2a2f3a]">
                  Telefone e WhatsApp direto:{" "}
                  <strong className="text-[#12151b]">{PHONE_DISPLAY}</strong>
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-[#2a2f3a]">
                <div className="flex items-start gap-3">
                  <Clock
                    size={16}
                    className="mt-0.5 shrink-0 text-[#8c6725]"
                  />
                  <div>
                    <p className="font-semibold text-[#12151b]">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-[#12151b]">
                      Segunda a Sexta-feira das 08:30 às 18:00
                    </p>
                    <p className="text-[11px] text-[#5a6272]">
                      Atendimento presencial no Centro de Dores do Indaiá - MG e consultoria online em todo o Brasil
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#8c6725]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-medium text-[#12151b] transition-colors hover:text-[#8c6725]"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#8c6725]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#8c6725] text-[#12151b]"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#8c6725]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="transition-colors hover:text-[#8c6725] text-[#12151b]"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#8c6725]"
                  />
                  <div>
                    <span className="text-[#12151b]">{ADDRESS_TEXT}</span>
                    <br />
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex items-center gap-1 font-semibold text-[#8c6725] hover:underline"
                    >
                      Ver no Google Maps <ArrowUpRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Card with authentic office photo */}
            <div className="relative overflow-hidden rounded-xl border border-[#e5dfd7] bg-white p-7 shadow-sm sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#9a762b] via-[#c5a059] to-[#d89c48]" />

              <div className="flex flex-col gap-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8c6725]">
                  Sede do Escritório em Dores do Indaiá - MG
                </p>
                <div className="relative h-[72px] w-[332px] sm:h-[83px] sm:w-[416px]">
                  <Image
                    src={LOGO_SRC}
                    alt="Dra. Janaína Carvalho — Advogada"
                    fill
                    unoptimized
                    sizes="416px"
                    className="object-contain object-left"
                  />
                </div>
              </div>

              {/* Office interior photo */}
              <div className="relative mt-5 aspect-[16/10] w-full overflow-hidden rounded-lg border border-[#e5dfd7] shadow-xs">
                <Image
                  src={FOTO_ESCRITORIO_SRC}
                  alt="Espaço de Atendimento da Dra. Janaína Carvalho em Dores do Indaiá - MG"
                  fill
                  unoptimized
                  className="object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-3.5 text-white">
                  <p className="text-xs font-semibold">Ambiente Acolhedor, Discreto e Moderno</p>
                  <p className="text-[10px] text-stone-200">Praça Pref. Mário Carneiro, nº 50 · Sala 01 · Centro · Dores do Indaiá - MG</p>
                </div>
              </div>

              <address className="mt-6 max-w-md text-[14px] not-italic leading-7 text-[#2a2f3a]">
                <strong className="font-semibold text-[#12151b]">
                  Dra. Janaína Carvalho — Advogada
                </strong>
                <br />
                {LAWYER_TITLE}
                <br />
                Atendimento presencial em Dores do Indaiá e online para todo o Brasil
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-lg border border-[#e5dfd7] bg-[#faf8f5] p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#8c6725]">
                  Atendimento & Horários
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-[#2a2f3a]">
                  <span>Segunda a Sexta</span>
                  <span className="text-right font-semibold text-[#12151b]">
                    08:30 às 18:00
                  </span>
                  <span>Atendimento Presencial</span>
                  <span className="text-right font-medium text-[#8c6725]">
                    Centro · Dores do Indaiá - MG
                  </span>
                  <span>Endereço</span>
                  <span className="text-right text-[#12151b]">Praça Pref. Mário Carneiro, 50 - Sl 01</span>
                  <span>Avaliações Google</span>
                  <span className="text-right font-semibold text-[#8c6725]">5,0 ★ (61 avaliações)</span>
                  <span>Atendimento Digital</span>
                  <span className="text-right text-[#12151b]">Todo o Brasil & Exterior</span>
                </div>
              </div>

              <div className="my-7 h-px bg-[#e5dfd7]" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-[#5a6272]">
                  Atendimento humanizado, ético e com absoluto sigilo profissional
                </p>
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Janaína! Gostaria de agendar um atendimento no escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#c5a059]/40 bg-[#f4efea] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#12151b] transition-colors hover:border-[#c5a059] hover:bg-[#0e1116] hover:text-[#fdfcf9]"
                >
                  <WhatsAppIcon size={14} /> Falar no WhatsApp <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip */}
        <section className="border-t border-[#c5a059]/25 bg-gradient-to-r from-[#f4efea] via-[#faf8f5] to-[#f4efea] px-5 py-14 text-[#12151b] shadow-xs sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8c6725]">
                <Sparkles size={13} /> DRA. JANAÍNA CARVALHO — ADVOCACIA ESPECIALIZADA EM DIREITO DE FAMÍLIA
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-[#12151b] sm:text-4xl">
                Precisa de uma advogada especialista, acolhedora e combativa para resguardar seus filhos e seus direitos?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dra. Janaína! Gostaria de uma avaliação jurídica para a minha situação familiar."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-lg bg-gradient-to-r from-[#0e1116] via-[#181c23] to-[#0e1116] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-md transition-all hover:-translate-y-0.5 hover:brightness-105 hover:shadow-lg border border-[#c5a059]/40 hover:border-[#c5a059]"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp{" "}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* Footer - Elegant Light Luxury */}
        <footer className="border-t border-[#e5dfd7] bg-[#f4efea] px-5 py-14 text-[#12151b] sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <a
                href="#inicio"
                aria-label="Dra. Janaína Carvalho — Advogada"
                className="inline-block transition-transform hover:scale-[1.01]"
              >
                <div className="relative h-[83px] w-[332px] sm:h-[104px] sm:w-[416px]">
                  <Image
                    src={LOGO_SRC}
                    alt="Dra. Janaína Carvalho — Advogada"
                    fill
                    unoptimized
                    sizes="416px"
                    className="object-contain object-left"
                  />
                </div>
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-[#5a6272]">
                ⚖️ Advocacia especializada com defesa humanizada e estratégica. Atuação dedicada em Direito de Família e Sucessões: Divórcio, Guarda, Pensão Alimentícia, Partilha de Bens e Inventários em Dores do Indaiá - MG e em todo o Brasil.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-[#8c6725]">
                Dra. Janaína Carvalho — Advogada | Especialista em Direito de Família
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8c6725]">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-[#5a6272]">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  A Advogada
                </a>
                <a className="footer-link" href="#atuacao">
                  Direito de Família
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
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8c6725]">
                Contato & Atendimento
              </h2>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-[#5a6272]">
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Janaína! Gostaria de tirar dúvidas com o escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 font-medium text-[#12151b]"
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
                <p className="inline-flex items-center gap-2 pt-1 text-[11px] text-[#8c6725]">
                  <Clock size={14} className="shrink-0" /> Seg a Sex: 08:30 às 18:00
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-[#e5dfd7] pt-6 text-[10px] text-stone-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} DRA. JANAÍNA CARVALHO — ADVOGADA. Todos os direitos reservados.
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
              "Olá, Dra. Janaína! Gostaria de consultar sobre meu caso e tirar dúvidas pelo WhatsApp."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Dra. Janaína Carvalho"
            className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          >
            <WhatsAppIcon size={28} />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-[#0e1116] border border-[#c5a059]/40 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg transition-opacity group-hover:block">
              Falar com Dra. Janaína Carvalho
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
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-xl border border-[#e5dfd7] bg-white p-7 shadow-2xl sm:max-w-xl sm:rounded-xl sm:p-10 text-[#12151b]"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-[#e5dfd7] bg-[#faf8f5] text-[#12151b] transition-colors hover:border-[#c5a059] hover:text-[#8c6725]"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-3 pr-12">
                  <div className="relative size-10 shrink-0 overflow-hidden rounded-lg border border-[#c5a059]/35 bg-[#faf8f5] p-1 shadow-xs">
                    <Image
                      src={LOGO_SYMBOL_SRC}
                      alt="Balança da Justiça Dra. Janaína Carvalho"
                      fill
                      sizes="40px"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="eyebrow-light">ÁREA DE ATUAÇÃO</p>
                    <p className="text-[10px] font-semibold tracking-wider text-[#8c6725] uppercase">
                      {LAWYER_NAME} · {LAWYER_TITLE}
                    </p>
                  </div>
                </div>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-serif text-3xl leading-tight text-[#12151b] sm:text-4xl"
                >
                  {activeArea.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-[#2a2f3a]">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-[#e5dfd7] pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8c6725]">
                    Demandas e Pedidos Atendidos pelo Escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-[#1e293b]"
                      >
                        <span className="size-2 shrink-0 rounded-full bg-[#c5a059]" />
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
                    className="px-5 py-3 text-xs font-semibold text-stone-500 transition-colors hover:text-[#12151b]"
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
