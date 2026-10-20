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
  FileText,
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
  X,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5531999810534";
const PHONE_DISPLAY = "(31) 99981-0534";
const EMAIL_CONTACT = "gabriellaspimentaadv@gmail.com";
const INSTAGRAM_URL = "https://www.instagram.com/gabriellaspimentaadv/";
const INSTAGRAM_HANDLE = "@gabriellaspimentaadv";
const OAB_REGISTRATION = "OAB/MG 221.270";
const CNPJ_NUMBER = "63.196.916/0001-89";

const ADDRESS_TEXT = "R. Zizinha Camelo - Centro, Mariana - MG, 35420-000";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Gabriella+Pimenta+Advocacia+e+Consultoria+Jur%C3%ADdica+Mariana+MG";

const LOGO_SEAL_SRC = "/logo-symbol.png";
const LOGO_FULL_SRC = "/logo.png";
const FOTO_HERO_SRC = "/gabriella-standing.png";
const FOTO_SOBRE_SRC = "/gabriella-desk.png";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Gabriella Pimenta! Gostaria de consultar sobre meu caso e agendar um atendimento no escritório.";
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
    id: "direito-trabalho-rescisao-direitos",
    title: "Direito do Trabalho & Rescisão Contratual",
    icon: ShieldAlert,
    tag: "Rescisão Indireta · Verbas Rescisórias · Horas Extras · Acidentes",
    summary:
      "Defesa combativa e acolhedora dos direitos do trabalhador contra abusos patronais, atrasos salariais, jornadas excessivas e faltas graves.",
    details:
      "A Dra. Gabriella Pimenta atua de forma firme e acolhedora na defesa dos direitos trabalhistas. Na rescisão indireta (art. 483 da CLT), quando a empresa comete falta grave, atrasa salários, sonega FGTS ou pratica assédio moral, atuamos judicialmente para que você saia com dignidade, recebendo aviso prévio indenizado, multa de 40%, liberação total do FGTS e seguro-desemprego, além de apuração rigorosa de horas extras e indenizações devidas.",
    topics: [
      "Rescisão Indireta do Contrato de Trabalho (demissão por justa causa contra o empregador)",
      "Auditoria integral de verbas rescisórias e aplicação das multas dos arts. 467 e 477 da CLT",
      "Cobrança de horas extras, intervalos intrajornada suprimidos e adicionais noturnos",
      "Indenizações por acidentes de trabalho, doenças ocupacionais e estabilidade provisória",
      "Adicionais de Insalubridade e Periculosidade devidos pela natureza da atividade",
      "Reconhecimento de vínculo empregatício formal para contratos sem carteira assinada ou pejotização indevida",
    ],
    whatsAppText:
      "Olá, Dra. Gabriella Pimenta! Gostaria de uma orientação jurídica sobre meus direitos trabalhistas e rescisão.",
  },
  {
    id: "direito-previdenciario-inss-beneficios",
    title: "Direito Previdenciário & Benefícios do INSS",
    icon: Landmark,
    tag: "Aposentadorias · BPC/LOAS · Auxílio-Doença · Pensão por Morte · Planejamento",
    summary:
      "Planejamento previdenciário minucioso e atuação estratégica para desbloquear e garantir o melhor benefício previdenciário no INSS.",
    details:
      "Conquistar o melhor benefício exige perícia técnica na apuração de todo o histórico contributivo (CNIS, vínculos, carteiras de trabalho e laudos). A Dra. Gabriella Pimenta realiza o Planejamento Previdenciário individualizado para encontrar a regra de transição mais vantajosa, além de ingressar com recursos administrativos e ações judiciais rápidas contra negativas injustas do INSS, garantindo o recebimento de todos os atrasados acumulados.",
    topics: [
      "Planejamento Previdenciário personalizado para maximizar o valor da sua aposentadoria",
      "Aposentadoria por Idade Urbana e Rural, Tempo de Contribuição e Aposentadoria Especial",
      "Benefício de Prestação Continuada (BPC/LOAS) para idosos (+65) e pessoas com deficiência",
      "Auxílio por Incapacidade Temporária (Auxílio-Doença) e Aposentadoria por Incapacidade Permanente",
      "Pensão por Morte e Auxílio-Reclusão para dependentes legais",
      "Revisões de benefícios previdenciários e cobrança integral de valores retroativos acumulados",
    ],
    whatsAppText:
      "Olá, Dra. Gabriella Pimenta! Gostaria de consultar sobre benefício do INSS ou planejamento previdenciário.",
  },
  {
    id: "direito-familia-sucessoes-inventarios",
    title: "Direito de Família & Sucessões",
    icon: HeartHandshake,
    tag: "Divórcio · Pensão Alimentícia · Guarda · Inventários · Partilha de Bens",
    summary:
      "Atendimento sensível, acolhedor e discreto para pacificar relações familiares, proteger os filhos e salvaguardar o patrimônio.",
    details:
      "Questões que envolvem família e patrimônio demandam empatia e cuidado emocional sem abrir mão da segurança jurídica. A Dra. Gabriella Pimenta atua em divórcios consensuais ágeis em cartório e contenciosos judiciais, fixação e revisão equilibrada de pensão alimentícia, guarda compartilhada humanizada, reconhecimento e dissolução de união estável, além de inventários judiciais e extrajudiciais para partilha justa de heranças.",
    topics: [
      "Divórcio consensual em cartório (rápido e econômico) e divórcio litigioso na Justiça",
      "Fixação, execução e revisão de Pensão Alimentícia com proteção aos dependentes",
      "Regulamentação de Guarda Compartilhada e Regime de Convivência Familiar centrado no bem-estar",
      "Inventário Judicial e Extrajudicial em Cartório para partilha célere e segura de bens",
      "Reconhecimento e dissolução de União Estável com partilha de patrimônio adquirido",
      "Planejamento sucessório familiar, testamentos e doações para preservação do patrimônio",
    ],
    whatsAppText:
      "Olá, Dra. Gabriella Pimenta! Gostaria de orientações sobre divórcio, pensão, guarda ou inventário.",
  },
  {
    id: "direito-civil-indenizacoes-contratos",
    title: "Direito Civil & Contratos Estratégicos",
    icon: Scale,
    tag: "Indenizações · Danos Morais · Ações Possessórias · Cobranças · Regularização",
    summary:
      "Proteção jurídica integral para salvaguardar seus bens, recuperar créditos devidos e formalizar instrumentos contratuais sólidos.",
    details:
      "No campo civil, a Dra. Gabriella Pimenta atua tanto na contenção preventiva de conflitos quanto na defesa combativa dos interesses de seus clientes em juízo. Atuamos em cobranças e execuções para recuperação de valores, ações indenizatórias por prejuízos materiais e danos morais, ações possessórias e usucapião para regularização de imóveis em Mariana e região, e redação de contratos personalizados com blindagem jurídica.",
    topics: [
      "Ações indenizatórias por Danos Morais, Materiais e Lucros Cessantes",
      "Cobrança judicial e extrajudicial de dívidas, títulos de crédito e notas promissórias",
      "Ações Possessórias, Reintegração de Posse e Usucapião Urbano e Rural em Mariana e região",
      "Elaboração, análise preventiva e revisão de contratos civis, comerciais e imobiliários",
      "Notificações extrajudiciais estratégicas para resolução célere e pacífica de controvérsias",
      "Responsabilidade civil contratual e extracontratual com foco na máxima reparação",
    ],
    whatsAppText:
      "Olá, Dra. Gabriella Pimenta! Gostaria de consultar sobre uma questão cível, cobrança, indenização ou contrato.",
  },
  {
    id: "direito-consumidor-abusos-bancarios",
    title: "Direito do Consumidor & Defesa Contra Abusos",
    icon: ShieldCheck,
    tag: "Negativação Indevida · Fraudes Bancárias · Empréstimos Consignados · Juros Abusivos",
    summary:
      "Restituição da sua tranquilidade financeira e reparação justa contra fraudes, golpes bancários e práticas abusivas de grandes empresas.",
    details:
      "Cobranças abusivas, negativações indevidas no SPC/Serasa e fraudes de empréstimos consignados não autorizados causam sérios transtornos. A Dra. Gabriella Pimenta atua com pedidos liminares de urgência para retirar o nome do cliente dos órgãos de proteção ao crédito, cancelar cobranças ilegais, exigir restituição de quantias descontadas indevidamente em dobro e obter indenizações por danos morais contra instituições financeiras negligentes.",
    topics: [
      "Limpeza imediata do nome via pedido liminar judicial por negativação indevida no SPC/Serasa",
      "Cancelamento de empréstimos consignados fraudulentos com repetição de indébito em dobro",
      "Ações contra fraudes e golpes do PIX decorrentes de falhas de segurança bancária",
      "Revisão de contratos de financiamento com tarifas ilegais e juros abusivos",
      "Defesa contra vícios ocultos em produtos e falhas graves na prestação de serviços",
      "Cancelamento de voos, atrasos excessivos, extravio definitivo de bagagem e indenizações aéreas",
    ],
    whatsAppText:
      "Olá, Dra. Gabriella Pimenta! Tive problemas com cobrança indevida, banco ou negativação e preciso de auxílio.",
  },
  {
    id: "consultoria-juridica-preventiva-estrategica",
    title: "Consultoria Preventiva & Soluções Extrajudiciais",
    icon: FileText,
    tag: "Assessoria Preventiva · Negociação Extrajudicial · Pareceres · Segurança Jurídica",
    summary:
      "Aconselhamento técnico antecipado para pessoas físicas, autônomos e empreendedores, evitando litígios e garantindo decisões seguras.",
    details:
      "A atuação preventiva é o caminho mais inteligente para proteger seu patrimônio e evitar desgastes emocionais. A Dra. Gabriella Pimenta presta consultoria continuada para famílias e empreendedores da Região dos Inconfidentes, analisando contratos antes da assinatura, conduzindo mediações extrajudiciais com força executiva e emitindo pareceres jurídicos claros e descomplicados para orientar negócios com total tranquilidade.",
    topics: [
      "Análise minuciosa de riscos jurídicos antes da assinatura de contratos de compra e venda",
      "Mediação e composição amigável de controvérsias com eficácia de título executivo extrajudicial",
      "Assessoria jurídica continuada para profissionais liberais, autônomos e pequenas empresas",
      "Orientação preventiva para resguardo patrimonial e planejamento de acordos familiares",
      "Pareceres jurídicos fundamentados para tomada de decisões estratégicas sem surpresas",
      "Prevenção ativa de passivos trabalhistas e cíveis com soluções sob medida",
    ],
    whatsAppText:
      "Olá, Dra. Gabriella Pimenta! Gostaria de agendar uma consultoria jurídica preventiva para o meu caso.",
  },
];

const clientReviews = [
  {
    name: "Mariana Alves",
    reviewsCount: "Avaliação Verificada no Google",
    badge: "Atendimento Humanizado & Acolhimento",
    content:
      "Excelente advogada! Atendimento humanizado, profissional competente e muito atenciosa. A Dra. Gabriella explicou cada detalhe do meu processo com uma clareza e paciência que nunca vi antes. Me senti acolhida e segura em cada passo. Recomendo de olhos fechados!",
  },
  {
    name: "Lucas Morais",
    reviewsCount: "Avaliação Verificada no Google",
    badge: "Agilidade, Rigor & Transparência",
    content:
      "A Dra. Gabriella Pimenta é uma profissional impecável. Muito inteligente, ética e dedicada à causa do cliente. Conseguiu conduzir minha demanda com agilidade e total transparência, sempre tirando dúvidas prontamente. Nota máxima merecida!",
  },
  {
    name: "Camila Ferreira",
    reviewsCount: "Avaliação Verificada no Google",
    badge: "Clareza Sem Juridiquês & Suporte",
    content:
      "Profissional extremamente capacitada e acolhedora. Tirou todas as minhas dúvidas sem termos difíceis e me deu suporte total do início ao fim. O escritório em Mariana é acolhedor e transmite muita paz. Uma defensora de verdade!",
  },
  {
    name: "Rodrigo Barbosa",
    reviewsCount: "Avaliação Verificada no Google",
    badge: "Confiança, Serenidade & Técnica",
    content:
      "Atendimento realmente diferenciado! A Dra. Gabriella se preocupa de verdade com a história de quem a procura e busca a melhor solução jurídica possível. Transmite muita serenidade, conhecimento e segurança. Muito grato pelo trabalho!",
  },
  {
    name: "Juliana Martins",
    reviewsCount: "Avaliação Verificada no Google",
    badge: "Acolhimento & Respeito Integral",
    content:
      "Melhor experiência jurídica que já tive. Acolheu o meu caso com muito respeito e sensibilidade, mantendo-me informada sobre cada andamento da ação. Profissional humana, ética e admirável. Super recomendo a Dra. Gabriella Pimenta!",
  },
  {
    name: "Felipe Guimarães",
    reviewsCount: "Avaliação Verificada no Google",
    badge: "Ética, Pontualidade & Competência",
    content:
      "Profissionalismo, ética e dedicação definem o trabalho da Dra. Gabriella. Atendimento pontual, atencioso e resolutivo. É uma grande referência na advocacia em Mariana e em Minas Gerais.",
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
            ? "mt-4 font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-[#14100c] sm:text-4xl lg:text-[3.25rem]"
            : "mt-4 font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-white sm:text-4xl lg:text-[3.25rem]"
        }
      >
        {children}
      </h2>
      {description && (
        <p
          className={
            light
              ? "mt-4 text-[15px] leading-7 text-[#4e4338]"
              : "mt-4 text-[15px] leading-7 text-[#d8cfc0]"
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
      <main className="overflow-hidden bg-[#0b0907] text-[#fbf9f5] selection:bg-[#b88a3e] selection:text-[#0b0907]">
        {/* Navigation Bar - Sculpted Antique Gold & Rich Obsidian */}
        <header className="sticky top-0 z-40 border-b border-[#b88a3e]/20 bg-[#0b0907]/95 backdrop-blur-xl">
          <div className="mx-auto flex h-[96px] max-w-7xl items-center justify-between gap-6 px-5 sm:h-[108px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Gabriella Pimenta Advocacia"
              onClick={closeMenu}
              className="flex items-center gap-3.5 transition-opacity hover:opacity-90"
            >
              <div className="relative size-[60px] shrink-0 overflow-hidden rounded-full border-2 border-[#b88a3e]/60 bg-[#120e0a] shadow-md sm:size-[72px]">
                <Image
                  src={LOGO_SEAL_SRC}
                  alt="Selo Oficial Gabriella Pimenta Advocacia"
                  fill
                  priority
                  sizes="72px"
                  className="object-contain p-1.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-wider text-white sm:text-xl lg:text-2xl">
                  GABRIELLA PIMENTA
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#d4a853] sm:text-xs">
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
                Dra. Gabriella Pimenta
              </a>
              <a className="nav-link" href="#atuacao">
                Especialidades
              </a>
              <a className="nav-link" href="#diferenciais">
                Por Que Escolher
              </a>
              <a className="nav-link" href="#avaliacoes">
                Depoimentos
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
                aria-label="Instagram da Dra. Gabriella Pimenta"
                className="grid size-10 place-items-center rounded-lg border border-[#b88a3e]/30 bg-[#18130e] text-[#f7eed8] transition-all hover:border-[#f7eed8] hover:bg-[#221b14] hover:text-white"
                title={`Instagram ${INSTAGRAM_HANDLE}`}
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                aria-label="Ligar para Gabriella Pimenta Advocacia"
                className="grid size-10 place-items-center rounded-lg border border-[#b88a3e]/30 bg-[#18130e] text-[#f7eed8] transition-all hover:border-[#f7eed8] hover:bg-[#221b14] hover:text-white"
                title={`Ligar: ${PHONE_DISPLAY}`}
              >
                <Phone size={16} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Dra. Gabriella Pimenta"
                className="grid size-10 place-items-center rounded-lg border border-[#b88a3e]/30 bg-[#18130e] text-[#f7eed8] transition-all hover:border-[#f7eed8] hover:bg-[#221b14] hover:text-white"
                title="Atendimento no WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Gabriella Pimenta! Gostaria de consultar sobre meu caso e agendar um atendimento."
                )}
                target="_blank"
                size="sm"
                variant="gold"
                className="rounded-lg shadow-sm"
              >
                Consultar Caso <ArrowUpRight size={14} />
              </GlowingButton>
            </div>

            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="grid size-11 place-items-center rounded-lg border border-[#b88a3e]/30 bg-[#18130e] text-[#f7eed8] lg:hidden"
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
                className="overflow-hidden border-t border-[#b88a3e]/20 bg-[#0b0907] px-6 lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["Dra. Gabriella Pimenta", "#sobre"],
                    ["Especialidades Jurídicas", "#atuacao"],
                    ["Por Que Escolher", "#diferenciais"],
                    ["Depoimentos & Casos", "#avaliacoes"],
                    ["Contato & Sede", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm font-medium text-stone-200 hover:text-[#d4a853]"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#966826] via-[#d4a853] to-[#b88a3e] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.13em] text-[#0b0907] shadow-md transition-all hover:brightness-105"
                      href={getWhatsAppUrl(
                        "Olá, Dra. Gabriella Pimenta! Gostaria de consultar sobre meu caso jurídico."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} /> WhatsApp: {PHONE_DISPLAY}
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#b88a3e]/30 bg-[#18130e] px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-[#f7eed8] transition-all hover:border-[#f7eed8]"
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

        {/* Hero Section - Sculpted Gold & Warm Obsidian */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-[#b88a3e]/20 bg-gradient-to-b from-[#0b0907] via-[#120e0a] to-[#18130e]"
        >
          {/* Subtle warm gold & deep velvet ambient glow */}
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[36rem] rounded-full bg-[#b88a3e]/12 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[28rem] rounded-full bg-[#221b14]/50 blur-3xl" />

          <div className="mx-auto grid min-h-[660px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[720px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-12 lg:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-6"
            >
              <motion.div
                variants={reveal}
                className="mb-6 inline-flex items-center gap-2.5 rounded-lg border border-[#b88a3e]/35 bg-[#120e0a] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#f7eed8] shadow-sm"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#d4a853]" />
                <span>GABRIELLA PIMENTA | ADVOGADA EM MARIANA · {OAB_REGISTRATION}</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="max-w-[760px] font-serif text-[2.65rem] leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl lg:text-[3.85rem]"
              >
                Acolhendo Histórias, Defendendo Direitos:{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#fbf6ee] via-[#f7eed8] to-[#d4a853]">
                  Construindo Soluções Jurídicas Estratégicas e Seguras.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-[#d8cfc0] sm:text-base sm:leading-8"
              >
                Liderado pela{" "}
                <strong className="font-semibold text-white">
                  Dra. Gabriella Soares Pimenta ({OAB_REGISTRATION})
                </strong>
                , nosso escritório alia acolhimento empático a uma atuação técnica combativa e resolutiva. Defendemos seus direitos nas áreas Trabalhista, Previdenciária, Família e Cível, com sede física em Mariana - MG e atendimento on-line seguro em todo o território nacional.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Gabriella Pimenta! Gostaria de consultar sobre meu caso e agendar um atendimento."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar no WhatsApp com a Dra. Gabriella
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 rounded-lg border border-[#b88a3e]/30 bg-[#120e0a] px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#f7eed8] transition-all hover:border-[#f7eed8] hover:bg-[#221b14] hover:text-white"
                >
                  Especialidades Jurídicas{" "}
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-[#b88a3e]/20 pt-6 text-xs text-[#d8cfc0]"
              >
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-white transition-colors hover:text-[#f7eed8]"
                >
                  <Star size={15} className="fill-[#d4a853] text-[#d4a853]" /> 5,0 estrelas no Google (29 avaliações autênticas)
                </a>
                <span className="inline-flex items-center gap-2 font-medium">
                  <Award size={15} className="text-[#d4a853]" /> {OAB_REGISTRATION}
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <MapPin size={15} className="text-[#d4a853]" /> R. Zizinha Camelo · Mariana - MG
                </span>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-[#f7eed8] transition-colors hover:text-white"
                >
                  <InstagramIcon size={15} className="text-[#d4a853]" /> 2.460+ seguidores ({INSTAGRAM_HANDLE})
                </a>
              </motion.div>
            </motion.div>

            {/* Hero Visual Presentation - Dra. Gabriella Pimenta */}
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
              <div className="relative aspect-[4/4.9] overflow-hidden rounded-2xl border border-[#b88a3e]/35 bg-[#120e0a] shadow-2xl ring-1 ring-[#b88a3e]/20">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dra. Gabriella Pimenta — Advogada em Mariana e Consultora Jurídica"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0b0907] via-[#0b0907]/85 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-8 sm:left-8 sm:right-8">
                  <div>
                    <p className="font-serif text-2xl font-normal tracking-wide text-white">
                      Dra. Gabriella Pimenta
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#d4a853]">
                      Advogada em Mariana · {OAB_REGISTRATION}
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-[#b88a3e]/40 bg-[#0b0907]/85 text-[#f7eed8] backdrop-blur-sm">
                    <Scale size={18} />
                  </span>
                </div>
              </div>

              {/* Floating authority badge */}
              <div className="absolute -left-3 top-6 z-10 rounded-lg border border-[#b88a3e]/40 bg-[#120e0a]/95 px-4 py-2 text-[10px] font-bold tracking-[0.14em] text-[#f7eed8] shadow-card backdrop-blur-md sm:-left-5">
                MARIANA - MG · ATENDIMENTO ON-LINE EM TODO O BRASIL
              </div>

              {/* Floating Google 5.0 Star Rating */}
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="group absolute -bottom-5 -right-3 z-10 rounded-xl border border-[#b88a3e]/35 bg-[#120e0a]/95 p-3.5 shadow-card backdrop-blur-md transition-all hover:border-[#f7eed8] hover:bg-[#18130e] sm:-right-5"
              >
                <div className="flex items-center gap-2">
                  <GoogleIcon size={17} />
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-0.5 text-[#d4a853]">
                      <Star size={13} className="fill-[#d4a853] text-[#d4a853]" />
                    </div>
                    <span className="font-serif text-base font-bold text-white">
                      5,0
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#d4a853]">
                      / 5,0
                    </span>
                  </div>
                </div>
                <p className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-[#d8cfc0]">
                  29 Avaliações no Google
                </p>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner - Authority Metrics */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-[#b88a3e]/20 bg-[#120e0a]"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              [
                "5,0 ★ no Google",
                "nota máxima com 29 avaliações autênticas destacando acolhimento e clareza",
              ],
              [
                "2.460+ Seguidores",
                "comunidade no Instagram (@gabriellaspimentaadv) com 144 publicações",
              ],
              [
                "Atendimento Humanizado",
                "escuta ativa, empatia, ética e clareza sem juridiquês",
              ],
              [
                "Mariana - MG",
                "sede na R. Zizinha Camelo e atendimento on-line em todo o Brasil",
              ],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-[#b88a3e]/20"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-xl font-semibold text-[#d4a853] sm:text-2xl">
                  {value}
                </span>
                <span className="max-w-[165px] text-[11px] leading-5 text-[#d8cfc0]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre a Dra. Gabriella Pimenta - Editorial Warm Travertine Linen Canvas */}
        <section
          id="sobre"
          className="scroll-mt-24 border-y border-[#b88a3e]/30 bg-[#faf7f2] py-20 text-[#14100c] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
            {/* Dra. Gabriella Pimenta presentation portrait */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[480px]"
            >
              <div className="relative aspect-[3/4.2] overflow-hidden rounded-2xl border-2 border-[#241403] bg-[#120e0a] shadow-2xl">
                <Image
                  src={FOTO_SOBRE_SRC}
                  alt="Dra. Gabriella Pimenta — Advogada Titular em Mariana"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0b0907]/90 via-[#0b0907]/30 to-transparent" />
              </div>

              {/* Authority badge card - Deep Obsidian Contrast on Light Surface */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-[#b88a3e]/40 bg-[#120e0a] px-5 py-4 shadow-xl sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-[#d4a853]">
                  <Award size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#d4a853]">
                    Advocacia Humanizada & Estratégica
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-white">
                  Dra. Gabriella Pimenta
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-[#d4a853]">
                  {OAB_REGISTRATION} · Gabriella Pimenta Advocacia
                </p>
                <p className="mt-1 text-[11px] leading-4 text-[#d8cfc0]">
                  Rua Zizinha Camelo - Centro, Mariana - MG
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-[#634316]/40 sm:-left-7 sm:-top-7 sm:size-32" />
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
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#634316]/30 bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#634316] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#634316]" />
                <span>CONHEÇA A DRA. GABRIELLA PIMENTA</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-[#14100c] sm:text-4xl lg:text-[3.25rem]"
              >
                Mais que uma assessoria jurídica: uma defensora{" "}
                <span className="italic text-[#8c5e1e]">
                  comprometida em acolher a sua história e construir a melhor solução.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-[#4e4338]"
              >
                Com sede no Centro histórico de{" "}
                <strong className="font-bold text-[#14100c]">
                  Mariana - MG
                </strong>{" "}
                e capacidade de atendimento online em todo o território nacional, a Dra. Gabriella Soares Pimenta (OAB/MG 221.270) construiu uma advocacia humanizada orientada pela empatia, ética inegociável e rigor técnico na defesa intransigente dos direitos de quem a procura.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-[#4e4338]"
              >
                Nosso lema reflete a nossa alma profissional:{" "}
                <strong className="font-semibold text-[#14100c]">
                  Acolhendo histórias, defendendo direitos, construindo soluções jurídicas
                </strong>
                . Entendemos que por trás de cada processo judicial existem vidas, famílias e expectativas reais. Você recebe atenção direta, esclarecimentos transparentes sem qualquer juridiquês e acompanhamento seguro em todas as etapas do seu caso.
              </motion.p>

              {/* Client Quote Card */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-xl border border-[#e8dfd2] bg-white/95 p-5 shadow-sm"
              >
                <blockquote className="font-serif text-sm italic leading-relaxed text-[#14100c]">
                  &ldquo;Excelente advogada! Atendimento humanizado, profissional competente e muito atenciosa. A Dra. Gabriella explicou cada detalhe do meu processo com uma clareza e paciência raras. Me senti acolhida e segura em cada passo. Recomendo de olhos fechados!&rdquo;
                </blockquote>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-[#634316]">
                  — Mariana Alves · Avaliação Verificada no Google Meu Negócio (5,0 ★)
                </p>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-1 gap-2.5 text-xs font-semibold text-[#14100c] sm:grid-cols-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#634316]" />
                  <span>Sede na Rua Zizinha Camelo - Mariana - MG</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#634316]" />
                  <span>Nota máxima 5,0 ★ no Google com 29 avaliações</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#634316]" />
                  <span>Atendimento direto com a advogada, sem intermediários</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#634316]" />
                  <span>Atendimento presencial e on-line em todo o Brasil</span>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Gabriella Pimenta! Gostaria de agendar uma consulta sobre o meu caso."
                  )}
                  target="_blank"
                  size="md"
                  variant="dark"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar com a Dra. Gabriella
                </GlowingButton>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#14100c] transition-colors hover:text-[#634316]"
                >
                  <Phone size={15} /> {PHONE_DISPLAY}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pilares de Atuação / Especialidades Jurídicas */}
        <section
          id="atuacao"
          className="scroll-mt-24 border-t border-[#b88a3e]/20 bg-[#120e0a] py-20 sm:py-28 lg:py-32"
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
                eyebrow="PILARES DE ATUAÇÃO & ESPECIALIDADES JURÍDICAS"
                description="Soluções jurídicas estratégicas, personalizadas e humanizadas para resguardar seus direitos em questões Trabalhistas, Previdenciárias, Família e Cíveis."
              >
                Assessoria jurídica completa em{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#fbf6ee] via-[#f7eed8] to-[#d4a853]">
                  Mariana, Inconfidentes e em todo o Brasil.
                </span>
              </Heading>
              <p className="max-w-[270px] pb-1 text-xs leading-6 text-[#d8cfc0]">
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
                    className="group flex min-h-[350px] flex-col rounded-xl border border-[#b88a3e]/20 bg-[#18130e] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#b88a3e]/50 hover:bg-[#221b14] hover:shadow-obsidian sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-lg border border-[#b88a3e]/25 bg-[#2c2219] text-[#d4a853] shadow-sm transition-colors group-hover:border-[#f7eed8] group-hover:bg-[#442a0b] group-hover:text-white">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <span className="font-serif text-2xl text-[#b88a3e]/40">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-md border border-[#b88a3e]/25 bg-[#221b14] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#f7eed8] shadow-sm">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.45rem] leading-tight text-white">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-6 text-[#d8cfc0]">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-[#d4a853] hover:text-white"
                    >
                      Ver detalhes e demandas{" "}
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

        {/* Por Que Escolher a Dra. Gabriella Pimenta - Diferenciais (Dobra Clara com Linho Nobre) */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-t border-[#b88a3e]/30 bg-[#faf7f2] py-20 text-[#14100c] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                light
                eyebrow="NOSSOS PILARES DE EXCELÊNCIA"
                description="Unimos acolhimento humanizado, técnica jurídica incisiva e combatividade para garantir que você tenha seus direitos resguardados com total segurança."
              >
                Por que confiar sua causa à{" "}
                <span className="italic text-[#8c5e1e]">
                  Dra. Gabriella Pimenta?
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Gabriella Pimenta! Gostaria de consultar sobre a minha situação jurídica."
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
              {/* Card 1: Atendimento Humanizado & Acolhimento */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group flex flex-col justify-between rounded-xl border border-[#e8dfd2] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#b88a3e] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#b88a3e]/30 bg-[#f2ece1] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#442a0b]">
                      <HeartHandshake size={14} /> Atendimento Humanizado
                    </span>
                    <span className="text-xs font-semibold text-[#8c5e1e]">
                      Empatia & Respeito
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#14100c] sm:text-[1.75rem]">
                    Você Nunca Fica Sem Resposta ou Desamparado
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#4e4338]">
                    Sabemos que problemas jurídicos trazem ansiedade e afetam a vida pessoal e familiar. No escritório Gabriella Pimenta Advocacia, você conversa diretamente com a advogada, recebe esclarecimentos sem termos incompreensíveis e compreende cada fase com tranquilidade.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-[#14100c]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#634316]" />
                      <span>Contato direto pelo WhatsApp com a Dra. Gabriella Pimenta</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#634316]" />
                      <span>Posicionamento constante e didático sobre o andamento dos autos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#634316]" />
                      <span>Atendimento seguro, transparente e com sigilo profissional absoluto</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#e8dfd2] pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Gabriella Pimenta! Gostaria de conversar diretamente com você sobre minha situação."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#b88a3e]/40 bg-[#faf7f2] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#14100c] transition-all hover:border-[#634316] hover:bg-[#14100c] hover:text-[#f7eed8]"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Conversar Diretamente no WhatsApp
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>

              {/* Card 2: Rigor Técnico e Eficiência */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="group flex flex-col justify-between rounded-xl border border-[#e8dfd2] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#b88a3e] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#b88a3e]/30 bg-[#f2ece1] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#442a0b]">
                      <Scale size={14} /> Rigor Técnico Incisivo
                    </span>
                    <span className="text-xs font-semibold text-[#8c5e1e]">
                      Soluções Sob Medida
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#14100c] sm:text-[1.75rem]">
                    Combatividade Jurídica & Foco no Resultado Real
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#4e4338]">
                    Cada cliente é único. Analisamos minuciosamente documentos, histórico e jurisprudências dos tribunais (TJMG, TRF6, TST, STJ) para desenhar estratégias jurídicas robustas, seja na Justiça do Trabalho, na esfera Previdenciária, de Família ou Cível.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-[#14100c]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#634316]" />
                      <span>Análise técnica aprofundada de provas, documentos e laudos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#634316]" />
                      <span>Atuação diligente e combativa em audiências, perícias e recursos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#634316]" />
                      <span>Foco constante em soluções céleres e sem acordos prejudiciais</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#e8dfd2] pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Gabriella Pimenta! Preciso de ajuda para analisar meu caso jurídico."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#b88a3e]/40 bg-[#faf7f2] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#14100c] transition-all hover:border-[#634316] hover:bg-[#14100c] hover:text-[#f7eed8]"
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

        {/* Nosso Compromisso com Você */}
        <section className="relative overflow-hidden border-t border-[#b88a3e]/20 bg-[#faf7f2] py-20 text-[#14100c] sm:py-24 lg:py-28">
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-[#b88a3e]/5 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-[#b88a3e]/5 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                light
                eyebrow="NOSSO COMPROMISSO COM O CLIENTE"
                description="Ética, respeito, dedicação técnica e acolhimento são os valores que guiam cada orientação e cada processo conduzido pela Dra. Gabriella Pimenta."
              >
                Cuidamos do seu caso com{" "}
                <span className="italic text-[#8c5e1e]">
                  honestidade, acolhimento e dedicação integral.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-[#e8dfd2] bg-white p-6 font-serif text-base italic leading-7 text-[#14100c] shadow-sm">
                &ldquo;A Dra. Gabriella é daquelas advogadas que realmente ouvem o cliente com atenção e respeito. Dá muita segurança falar com ela porque ela explica com franqueza a realidade de cada situação.&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-[#634316]">
                  — Cliente em Mariana - MG · Avaliação no Google Meu Negócio
                </footer>
              </blockquote>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-[#e8dfd2]"
            >
              {[
                [
                  "01",
                  "Honestidade & Diagnóstico Jurídico Realista",
                  "Você recebe uma análise sincera e transparente sobre as reais possibilidades da sua ação, sem falsas promessas, com fundamentação na lei e na jurisprudência.",
                ],
                [
                  "02",
                  "Posicionamento Constante do Cliente",
                  "Você nunca fica sem saber o andamento dos seus direitos. Mantemos você informado sobre cada despacho, decisão, audiência e próxima etapa processual.",
                ],
                [
                  "03",
                  "Combatividade e Busca Pela Máxima Reparação",
                  "Lutamos incansavelmente pelos melhores resultados possíveis, revertendo injustiças e exigindo o cumprimento estrito da lei em benefício do cliente.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-semibold text-[#634316]">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-[#14100c]">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-[#4e4338]">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Avaliações / Depoimentos Reais */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 border-t border-[#b88a3e]/30 bg-[#f2ece1] py-20 text-[#14100c] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                light
                eyebrow="PROVA SOCIAL VERIFICADA · GOOGLE MEU NEGÓCIO"
                description="Confira avaliações reais e espontâneas de clientes que confiaram suas causas à Dra. Gabriella Pimenta na sede em Mariana - MG e através do atendimento on-line em todo o Brasil."
              >
                Avaliada com nota máxima 5,0 ★ com{" "}
                <span className="italic text-[#8c5e1e]">
                  29 avaliações no Google pelo atendimento acolhedor, dedicação e ética.
                </span>
              </Heading>

              {/* Verified Google Badge Card */}
              <div className="flex flex-col gap-3 rounded-xl border border-[#e8dfd2] bg-white p-5 shadow-sm sm:flex-row sm:items-center md:min-w-[340px]">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-lg border border-[#b88a3e]/30 bg-[#faf7f2] shadow-xs">
                  <GoogleIcon size={30} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-3xl font-bold leading-none text-[#14100c]">
                      5,0
                    </span>
                    <div className="flex gap-0.5 text-[#d4a853]">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-[#d4a853] text-[#d4a853]"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#4e4338]">
                    Gabriella Pimenta Advocacia
                  </p>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-[#442a0b] transition-colors hover:text-[#14100c]"
                  >
                    29 avaliações no Google <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Client Reviews Grid */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clientReviews.map((review) => (
                <article
                  key={review.name}
                  className="group relative flex flex-col justify-between rounded-xl border border-[#e8dfd2] bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#b88a3e] hover:shadow-md sm:p-8"
                >
                  <div>
                    {/* Header: Stars + Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-1 text-[#d4a853]">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-[#d4a853] text-[#d4a853]"
                          />
                        ))}
                      </div>
                      <span className="rounded-md border border-[#b88a3e]/30 bg-[#faf7f2] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#442a0b] shadow-xs">
                        {review.badge}
                      </span>
                    </div>

                    {/* Review content */}
                    <p className="mt-5 text-[14px] italic leading-relaxed text-[#14100c]">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  {/* Reviewer info */}
                  <div className="mt-6 flex items-center gap-3 border-t border-[#e8dfd2] pt-4">
                    <div className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#b88a3e]/30 bg-[#faf7f2] font-serif text-sm font-semibold text-[#442a0b] shadow-xs">
                      {review.name.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-serif text-base font-semibold text-[#14100c]">
                        {review.name}
                      </p>
                      <p className="text-[10px] uppercase tracking-wider text-[#786b5e]">
                        {review.reviewsCount}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom Actions and Trust Tags */}
            <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-[#e8dfd2] pt-8 sm:flex-row">
              <div className="flex flex-wrap items-center gap-2">
                {[
                  "Advogada em Mariana - MG",
                  "Atendimento em Todo o Brasil",
                  "Nota 5,0 ★ no Google (29 avaliações)",
                  "Direito do Trabalho & Rescisão",
                  "Previdenciário & Benefícios INSS",
                  "Direito de Família & Sucessões",
                  "Direito Civil & Defesa do Consumidor",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#e8dfd2] bg-white px-3.5 py-1.5 text-[11px] font-medium text-[#14100c] shadow-xs"
                  >
                    <CheckCircle2 size={13} className="text-[#634316]" />
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={getWhatsAppUrl(
                  "Olá, Dra. Gabriella Pimenta! Gostaria de agendar um atendimento para avaliar o meu caso."
                )}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#442a0b] transition-colors hover:text-[#14100c]"
              >
                Falar com a Dra. Gabriella{" "}
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Contato & Localização da Sede em Mariana - MG */}
        <section
          id="contato"
          className="scroll-mt-24 border-t border-[#b88a3e]/30 bg-[#faf7f2] py-20 text-[#14100c] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                light
                eyebrow="CONTATO & ATENDIMENTO EM MARIANA"
                description="Inicie seu atendimento diretamente pelo WhatsApp ou agende uma reunião presencial em nossa sede. Prestamos assistência jurídica ágil para moradores de Mariana, Ouro Preto, Itabirito, Região dos Inconfidentes e todo o Brasil via consultoria online humanizada."
              >
                Estamos prontos para{" "}
                <span className="italic text-[#8c5e1e]">
                  escutar e defender você.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Gabriella Pimenta! Gostaria de agendar um horário para atendimento sobre o meu caso."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} /> Iniciar Conversa no WhatsApp
                </GlowingButton>
                <p className="text-[11px] leading-5 text-[#4e4338]">
                  Telefone e WhatsApp do escritório:{" "}
                  <strong className="text-[#14100c]">{PHONE_DISPLAY}</strong>
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-[#4e4338]">
                <div className="flex items-start gap-3">
                  <Clock
                    size={16}
                    className="mt-0.5 shrink-0 text-[#634316]"
                  />
                  <div>
                    <p className="font-semibold text-[#14100c]">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-[#14100c]">
                      Segunda a Sexta-feira das 09:00 às 18:00
                    </p>
                    <p className="text-[11px] text-[#786b5e]">
                      Atendimento presencial com hora marcada no Centro de Mariana e consultoria online em todo o Brasil
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#634316]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-medium text-[#14100c] transition-colors hover:text-[#634316]"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#634316]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#634316] text-[#14100c]"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#634316]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="transition-colors hover:text-[#634316] text-[#14100c]"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#634316]"
                  />
                  <span className="text-[#14100c]">{ADDRESS_TEXT}</span>
                </div>
              </div>
            </div>

            {/* Office & Schedule Card */}
            <div className="relative overflow-hidden rounded-xl border border-[#e8dfd2] bg-white p-7 shadow-md sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#966826] to-[#f7eed8]" />

              <div className="flex items-center gap-4">
                <div className="relative size-[64px] shrink-0 overflow-hidden rounded-full border-2 border-[#b88a3e]/60 bg-[#120e0a] shadow-md sm:size-[76px]">
                  <Image
                    src={LOGO_SEAL_SRC}
                    alt="Selo Gabriella Pimenta Advocacia"
                    fill
                    sizes="76px"
                    className="object-contain p-1.5"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#634316]">
                    Sede do Escritório
                  </p>
                  <p className="mt-0.5 font-serif text-xl font-bold text-[#14100c] sm:text-2xl">
                    Gabriella Pimenta Advocacia
                  </p>
                </div>
              </div>

              <address className="mt-7 max-w-md text-[14px] not-italic leading-7 text-[#4e4338]">
                <strong className="font-semibold text-[#14100c]">
                  Dra. Gabriella Soares Pimenta
                </strong>
                <br />
                Advogada e Consultora Jurídica · {OAB_REGISTRATION}
                <br />
                CNPJ: {CNPJ_NUMBER}
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-lg border border-[#e8dfd2] bg-[#faf7f2] p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#634316]">
                  Atendimento & Horários
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-[#4e4338]">
                  <span>Segunda a Sexta</span>
                  <span className="text-right font-semibold text-[#14100c]">
                    09:00 às 18:00
                  </span>
                  <span>Atendimento Presencial</span>
                  <span className="text-right font-medium text-[#442a0b]">
                    Mariana - MG (Centro)
                  </span>
                  <span>Endereço</span>
                  <span className="text-right text-[#14100c]">Rua Zizinha Camelo</span>
                  <span>Atendimento Online</span>
                  <span className="text-right text-[#14100c]">Todo o Brasil</span>
                </div>
              </div>

              <div className="my-7 h-px bg-[#e8dfd2]" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-[#786b5e]">
                  Atendimento acolhedor e sigiloso com hora marcada em Mariana
                </p>
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Gabriella Pimenta! Gostaria de agendar um atendimento no escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#b88a3e]/40 bg-[#f2ece1] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#14100c] transition-colors hover:border-[#634316] hover:bg-[#14100c] hover:text-[#f7eed8]"
                >
                  <WhatsAppIcon size={14} /> Falar com a Advogada <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip */}
        <section className="border-t border-[#b88a3e]/20 bg-gradient-to-r from-[#0b0907] via-[#18130e] to-[#0b0907] px-5 py-14 text-white shadow-inner sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4a853]">
                <Sparkles size={13} /> GABRIELLA PIMENTA ADVOCACIA · MARIANA & REGIÃO DOS INCONFIDENTES - MG
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                Precisa de orientação jurídica acolhedora, combativa e de confiança?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dra. Gabriella Pimenta! Gostaria de consultar sobre meus direitos com seu escritório."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-lg bg-gradient-to-r from-[#966826] via-[#d4a853] to-[#b88a3e] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#0b0907] shadow-md transition-all hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp{" "}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#b88a3e]/20 bg-[#070605] px-5 py-14 text-white sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <a
                href="#inicio"
                aria-label="Gabriella Pimenta Advocacia"
                className="inline-flex items-center gap-3.5 transition-transform hover:scale-[1.02]"
              >
                <div className="relative size-[72px] shrink-0 overflow-hidden rounded-full border-2 border-[#b88a3e]/50 bg-[#120e0a] shadow-md sm:size-[80px]">
                  <Image
                    src={LOGO_SEAL_SRC}
                    alt="Gabriella Pimenta Advocacia"
                    fill
                    sizes="80px"
                    className="object-contain p-1.5"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-xl font-bold tracking-wider text-white sm:text-2xl">
                    GABRIELLA PIMENTA
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d4a853]">
                    Advocacia & Consultoria
                  </span>
                </div>
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-[#d8cfc0]">
                ⚖️ Acolhendo histórias, defendendo direitos, construindo soluções jurídicas. Atendimento acolhedor, transparente e combativo em Mariana, Região dos Inconfidentes e em todo o Brasil.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-[#d4a853]">
                Dra. Gabriella Soares Pimenta · {OAB_REGISTRATION}
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4a853]">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-[#d8cfc0]">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  Dra. Gabriella Pimenta
                </a>
                <a className="footer-link" href="#atuacao">
                  Especialidades Jurídicas
                </a>
                <a className="footer-link" href="#diferenciais">
                  Por Que Escolher
                </a>
                <a className="footer-link" href="#avaliacoes">
                  Depoimentos de Clientes
                </a>
                <a className="footer-link" href="#contato">
                  Contato & Sede
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4a853]">
                Contato & Atendimento
              </h2>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-[#d8cfc0]">
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Gabriella Pimenta! Gostaria de solicitar um atendimento com o escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 font-medium text-[#f7eed8]"
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
                <p className="inline-flex items-center gap-2 pt-1 text-[11px] text-[#d4a853]">
                  <Clock size={14} className="shrink-0" /> Seg a Sex: 09:00 às 18:00
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-[#b88a3e]/20 pt-6 text-[10px] text-stone-400 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} GABRIELLA PIMENTA ADVOCACIA. Todos os direitos reservados. CNPJ: {CNPJ_NUMBER}.
            </p>
            <p>
              Conteúdo informativo, em estrita conformidade com o Código de Ética e Disciplina da OAB ({OAB_REGISTRATION}).
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
              "Olá, Dra. Gabriella Pimenta! Gostaria de consultar sobre meus direitos com seu escritório."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Dra. Gabriella Pimenta"
            className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          >
            <WhatsAppIcon size={28} />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-[#120e0a] border border-[#b88a3e]/30 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg transition-opacity group-hover:block">
              Falar com a Dra. Gabriella Pimenta
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
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-xl border border-[#b88a3e]/35 bg-[#120e0a] p-7 shadow-2xl sm:max-w-xl sm:rounded-xl sm:p-10"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-[#b88a3e]/30 bg-[#221b14] text-[#f7eed8] transition-colors hover:border-[#f7eed8] hover:text-white"
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

                <p className="mt-5 text-sm leading-7 text-[#d8cfc0]">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-[#b88a3e]/20 pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#d4a853]">
                    Demandas atendidas pelo escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-stone-200"
                      >
                        <span className="size-2 shrink-0 rounded-full bg-[#d4a853]" />
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
