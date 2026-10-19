"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type Variants, MotionConfig } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  Award,
  Banknote,
  Briefcase,
  CheckCircle2,
  Clock,
  FileCheck,
  FileText,
  Heart,
  HeartHandshake,
  Landmark,
  Mail,
  MapPin,
  Menu,
  Phone,
  Scale,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Star,
  UserCheck,
  Users,
  X,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5532984838287";
const PHONE_DISPLAY = "(32) 98483-8287";
const EMAIL_CONTACT = "contato@cliciabento.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/cliciabento.adv/";
const INSTAGRAM_HANDLE = "@cliciabento.adv";
const OAB_REGISTRATION = "OAB/MG 246.137";

const ADDRESS_TEXT = "Rua Sagrado Coração de Jesus, 20 - Centro, Ervália - MG, 36555-000";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Rua+Sagrado+Cora%C3%A7%C3%A3o+de+Jesus+20+Centro+Erv%C3%A1lia+MG";

const LOGO_SEAL_SRC = "/logo-symbol.png";
const LOGO_FULL_SRC = "/logo.png";
const FOTO_HERO_SRC = "/clicia-bento-hero.png";
const FOTO_SOBRE_SRC = "/clicia-bento-sobre.png";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Clícia Bento! Gostaria de consultar sobre meu caso e agendar um atendimento no escritório.";
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
      "Defesa combativa e acolhedora dos direitos do trabalhador contra injustiças, abusos, jornadas excessivas e faltas graves do empregador.",
    details:
      "A Dra. Clícia Bento atua de forma firme e incisiva na defesa dos direitos trabalhistas. Na rescisão indireta (art. 483 da CLT), quando a empresa atrasa salários, sonega FGTS ou pratica assédio moral, atuamos para que você saia da empresa de cabeça erguida, recebendo aviso prévio, multa de 40%, saque total do FGTS e seguro-desemprego, além de cobrança rigorosa de horas extras e reparações por acidentes de trabalho.",
    topics: [
      "Rescisão Indireta do Contrato de Trabalho (demissão por justa causa do empregador)",
      "Auditoria completa de verbas rescisórias e multas dos artigos 467 e 477 da CLT",
      "Horas extras, intervalo de refeição suprimido, banco de horas irregular e adicional noturno",
      "Indenizações por acidentes de trabalho, doenças ocupacionais e garantia de estabilidade",
      "Adicionais de Insalubridade (10%, 20%, 40%) e Periculosidade (30%)",
      "Reconhecimento de vínculo para quem trabalhou sem carteira assinada ou como falsa PJ/MEI",
    ],
    whatsAppText:
      "Olá, Dra. Clícia Bento! Gostaria de consultar sobre meus direitos trabalhistas e rescisão.",
  },
  {
    id: "direito-previdenciario-inss-beneficios",
    title: "Direito Previdenciário & Benefícios do INSS",
    icon: Landmark,
    tag: "Aposentadorias · BPC/LOAS · Auxílio-Doença · Pensão por Morte · Planejamento",
    summary:
      "Planejamento estratégico e atuação jurídica segura para desbloquear e conquistar o melhor benefício previdenciário no INSS.",
    details:
      "Conquistar o melhor benefício exige perícia técnica na análise de todo o histórico de contribuições (CNIS, carteiras antigas, carnês e laudos). A Dra. Clícia Bento realiza o Planejamento Previdenciário para antecipar o momento ideal de se aposentar com o maior valor possível, além de ingressar com recursos administrativos e ações judiciais rápidas contra negativas injustas do INSS, garantindo o recebimento de todos os atrasados.",
    topics: [
      "Planejamento Previdenciário personalizado para alcançar a regra de transição mais vantajosa",
      "Aposentadoria por Idade Urbana e Rural, Tempo de Contribuição e Aposentadoria Especial",
      "Benefício de Prestação Continuada (BPC/LOAS) para idosos (+65) e pessoas com deficiência",
      "Auxílio por Incapacidade Temporária (Auxílio-Doença) e Aposentadoria por Invalidez",
      "Pensão por Morte e Auxílio-Reclusão para dependentes legais",
      "Revisões de benefícios previdenciários e cobrança integral de valores retroativos acumulados",
    ],
    whatsAppText:
      "Olá, Dra. Clícia Bento! Gostaria de consultar sobre benefício do INSS ou planejamento previdenciário.",
  },
  {
    id: "direito-familia-sucessoes-inventarios",
    title: "Direito de Família & Sucessões",
    icon: HeartHandshake,
    tag: "Divórcio · Pensão Alimentícia · Guarda · Inventários · Partilha de Bens",
    summary:
      "Atendimento sensível, discreto e seguro para pacificar relações familiares, resguardar a convivência com os filhos e proteger o patrimônio.",
    details:
      "Questões que envolvem família e patrimônio demandam empatia e cuidado emocional sem abrir mão da segurança jurídica. Atuamos em divórcios consensuais ágeis em cartório e contenciosos na Justiça, fixação e revisão equilibrada de pensão alimentícia, definição de guarda e regime de convivência centrado no bem-estar dos filhos, além de inventários judiciais e extrajudiciais para partilha justa de heranças e planejamento sucessório familiar.",
    topics: [
      "Divórcio consensual em cartório (rápido e econômico) e divórcio litigioso",
      "Fixação, execução por prisão/penhora e revisão de Pensão Alimentícia",
      "Regulamentação de Guarda Compartilhada e Regime de Convivência Familiar",
      "Inventário Judicial e Extrajudicial em Cartório para partilha de bens com agilidade",
      "Reconhecimento e dissolução de União Estável com partilha patrimonial",
      "Planejamento sucessório familiar, testamentos e doações para preservação do patrimônio",
    ],
    whatsAppText:
      "Olá, Dra. Clícia Bento! Gostaria de orientações sobre divórcio, pensão, guarda ou inventário.",
  },
  {
    id: "direito-civil-indenizacoes-contratos",
    title: "Direito Civil & Contratos Estratégicos",
    icon: Scale,
    tag: "Indenizações · Danos Morais · Ações Possessórias · Cobranças · Contratos",
    summary:
      "Proteção jurídica integral para salvaguardar seus bens, recuperar créditos inadimplidos e formalizar instrumentos contratuais sólidos.",
    details:
      "No campo civil, a Dra. Clícia Bento atua tanto na contenção preventiva de conflitos quanto na defesa litigiosa dos direitos de seus clientes. Atuamos em cobranças e execuções de títulos para recuperação de valores devidos, ações indenizatórias por prejuízos materiais e danos morais, defesa da posse de imóveis urbanos e rurais (usucapião e reintegração) e redação de contratos personalizados com blindagem jurídica.",
    topics: [
      "Ações indenizatórias por Danos Morais, Materiais e Lucros Cessantes",
      "Execução de dívidas, títulos executivos, notas promissórias e cheques",
      "Ações Possessórias, Reintegração de Posse e Ações de Usucapião Urbano e Rural",
      "Elaboração, análise preventiva e rescisão motivada de contratos civis e imobiliários",
      "Notificações extrajudiciais estratégicas para resolução célere e amigável de litígios",
      "Responsabilidade civil por inadimplemento e prejuízos causados por terceiros",
    ],
    whatsAppText:
      "Olá, Dra. Clícia Bento! Gostaria de consultar sobre uma questão cível, cobrança, indenização ou contrato.",
  },
  {
    id: "direito-consumidor-abusos-bancarios",
    title: "Direito do Consumidor & Defesa Contra Abusos",
    icon: ShieldCheck,
    tag: "Negativação Indevida · Fraudes Bancárias · Empréstimos Consignados · Juros Abusivos",
    summary:
      "Restituição da sua tranquilidade financeira e reparação justa contra fraudes, golpes bancários e abusos de grandes corporações.",
    details:
      "Cobranças abusivas, negativações indevidas no SPC/Serasa e golpes de empréstimos consignados não contratados causam sérios transtornos. A Dra. Clícia Bento atua para retirar seu nome dos cadastros de inadimplentes com urgência por meio de liminares judiciais, cancelar débitos fraudulentos, exigir devolução de valores em dobro e obter indenizações por danos morais contra instituições financeiras e empresas negligentes.",
    topics: [
      "Limpeza imediata do nome via pedido liminar por negativação indevida no SPC/Serasa",
      "Cancelamento de empréstimos consignados fraudulentos com devolução em dobro",
      "Ações contra fraudes e golpes do PIX decorrentes de falhas de segurança dos bancos",
      "Revisão de contratos bancários e financiamentos com juros abusivos e tarifas ilegais",
      "Problemas com compras de veículos, falha na prestação de serviços e vícios ocultos",
      "Cancelamento injustificado de viagens e voos, extravio de bagagem e cobranças indevidas",
    ],
    whatsAppText:
      "Olá, Dra. Clícia Bento! Tive problemas com cobrança indevida, banco ou negativação e preciso de ajuda.",
  },
  {
    id: "consultoria-juridica-preventiva-estrategica",
    title: "Consultoria Preventiva & Soluções Extrajudiciais",
    icon: FileText,
    tag: "Assessoria Preventiva · Negociação Extrajudicial · Pareceres · Segurança Jurídica",
    summary:
      "Aconselhamento técnico antecipado para pessoas físicas e empresas, evitando litígios demorados e garantindo decisões seguras.",
    details:
      "A atuação preventiva é a forma mais inteligente de evitar desgastes emocionais e prejuízos financeiros. A Dra. Clícia Bento oferece consultoria continuada para famílias, empreendedores locais e produtores rurais, analisando contratos, mediando acordos amigáveis com força de título executivo e fornecendo pareceres jurídicos claros para orientar negócios e salvaguardar direitos.",
    topics: [
      "Análise prévia de riscos jurídicos antes da assinatura de contratos de compra e venda",
      "Mediação extrajudicial e composição amigável de controvérsias patrimoniais",
      "Formalização de acordos com valor de título executivo extrajudicial",
      "Assessoria jurídica continuada para profissionais liberais e pequenas empresas",
      "Orientação jurídica e pareceres estratégicos para produtores e empreendedores",
      "Prevenção de passivos e litígios judiciais com soluções práticas e seguras",
    ],
    whatsAppText:
      "Olá, Dra. Clícia Bento! Gostaria de agendar uma consultoria jurídica preventiva para o meu caso.",
  },
];

const clientReviews = [
  {
    name: "Danielle Machado",
    reviewsCount: "1 avaliação no Google",
    badge: "Comprometimento & Ética",
    content:
      "Uma profissional admirável, muito inteligente, comprometida e ética. Dá para perceber o cuidado e a dedicação em cada atendimento. Passa muita confiança e realmente se preocupa em buscar a melhor solução para cada caso. Recomendo com toda certeza!",
  },
  {
    name: "Ana Paula Pereira",
    reviewsCount: "3 avaliações no Google",
    badge: "Atendimento & Resultado Impecável",
    content:
      "Excelente profissional! Fui muito bem atendida, sempre com muita atenção, educação e clareza nas explicações. Demonstrou conhecimento, responsabilidade e dedicação durante todo o atendimento. Fiquei muito satisfeita com o trabalho e com o resultado. Recomendo de olhos fechados!",
  },
  {
    name: "Lara Bento",
    reviewsCount: "3 avaliações no Google",
    badge: "Atendimento Humanizado & Confiança",
    content:
      "Excelente escritório de advocacia! Atendimento humanizado, profissional competente e muito comprometida com seus clientes. Transmite confiança e segurança do início ao fim. Sempre fui muito bem orientada e minhas dúvidas sempre esclarecidas. Recomendo muito.",
  },
  {
    name: "Eduardo Mateus",
    reviewsCount: "2 avaliações · 1 foto no Google",
    badge: "Análise Minuciosa & Sem Burocracia",
    content:
      "Gostei muito do auxílio jurídico da Dra Clícia, analisou cada detalhe do meu caso conseguiu me explicar toda a burocracia. Recomendo!",
  },
  {
    name: "Flávia Ventura e Silva",
    reviewsCount: "1 avaliação no Google",
    badge: "Simpatia, Acolhimento & Linguagem Acessível",
    content:
      "Dra Clícia é uma excelente profissional, atenciosa e comprometida! Me senti muito acolhida com o atendimento dela, principalmente pela simpatia e linguagem acessível. Recomendo o escritório da Dra Clícia Bento!",
  },
  {
    name: "Lucas Ferreira Nascimento (Lucas Lufen)",
    reviewsCount: "1 avaliação no Google",
    badge: "Referência Judicial & Extrajudicial",
    content:
      "Clícia é uma profissional excelente, dedicada e acessível. É referência quando o assunto é resolver assuntos jurídicos, extrajudicialmente e judicialmente.",
  },
  {
    name: "Rafael Silva",
    reviewsCount: "Local Guide · 14 avaliações no Google",
    badge: "Local Guide · Cuidado em Cada Detalhe",
    content:
      "Tive uma excelente experiência com o atendimento da Clicia. Desde o primeiro contato, ela foi muito atenciosa, profissional e prestativa, demonstrando conhecimento e cuidado em todos os detalhes. Sempre se mostrou disponível para esclarecer dúvidas.",
  },
  {
    name: "Clara Souza",
    reviewsCount: "1 avaliação no Google",
    badge: "Atenção, Dedicação & Acolhimento",
    content:
      "Ótima advogada, atenciosa e sempre tira as dúvidas e tem um ótimo café 🤌🏼 Atendimento acolhedor, dedicado e muito profissional!",
  },
  {
    name: "Janice Lopes",
    reviewsCount: "5 avaliações no Google",
    badge: "Competência & Brilhantismo",
    content:
      "A profissional Clícia Bento, além de uma pessoa linda é muito competente. Acompanhei sua trajetória e nunca decepcionou. Ela tem um futuro brilhante, com certeza!",
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
            ? "mt-4 font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-[#1a140f] sm:text-4xl lg:text-[3.25rem]"
            : "mt-4 font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-white sm:text-4xl lg:text-[3.25rem]"
        }
      >
        {children}
      </h2>
      {description && (
        <p
          className={
            light
              ? "mt-4 text-[15px] leading-7 text-[#4a3f35]"
              : "mt-4 text-[15px] leading-7 text-[#d7cfc0]"
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
      <main className="overflow-hidden bg-[#0c0a08] text-[#faf9f7] selection:bg-[#c99b4f] selection:text-[#0c0a08]">
        {/* Navigation Bar - Sculpted Imperial Gold & Warm Obsidian */}
        <header className="sticky top-0 z-40 border-b border-[#c99b4f]/20 bg-[#0c0a08]/95 backdrop-blur-xl">
          <div className="mx-auto flex h-[96px] max-w-7xl items-center justify-between gap-6 px-5 sm:h-[108px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Clícia Bento Advocacia"
              onClick={closeMenu}
              className="flex items-center gap-3.5 transition-opacity hover:opacity-90"
            >
              <div className="relative size-[60px] shrink-0 overflow-hidden rounded-full border-2 border-[#c99b4f]/60 bg-[#120e0b] shadow-md sm:size-[72px]">
                <Image
                  src={LOGO_SEAL_SRC}
                  alt="Selo Oficial Clícia Bento Advocacia"
                  fill
                  priority
                  sizes="72px"
                  className="object-contain p-1.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-wider text-white sm:text-xl lg:text-2xl">
                  CLÍCIA BENTO
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#c99b4f] sm:text-xs">
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
                Dra. Clícia Bento
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
                aria-label="Instagram da Dra. Clícia Bento"
                className="grid size-10 place-items-center rounded-lg border border-[#c99b4f]/30 bg-[#191410] text-[#fce2a2] transition-all hover:border-[#fce2a2] hover:bg-[#221c16] hover:text-white"
                title={`Instagram ${INSTAGRAM_HANDLE}`}
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                aria-label="Ligar para Clícia Bento Advocacia"
                className="grid size-10 place-items-center rounded-lg border border-[#c99b4f]/30 bg-[#191410] text-[#fce2a2] transition-all hover:border-[#fce2a2] hover:bg-[#221c16] hover:text-white"
                title={`Ligar: ${PHONE_DISPLAY}`}
              >
                <Phone size={16} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Dra. Clícia Bento"
                className="grid size-10 place-items-center rounded-lg border border-[#c99b4f]/30 bg-[#191410] text-[#fce2a2] transition-all hover:border-[#fce2a2] hover:bg-[#221c16] hover:text-white"
                title="Atendimento no WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Clícia Bento! Gostaria de consultar sobre meu caso e agendar um atendimento."
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
              className="grid size-11 place-items-center rounded-lg border border-[#c99b4f]/30 bg-[#191410] text-[#fce2a2] lg:hidden"
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
                className="overflow-hidden border-t border-[#c99b4f]/20 bg-[#0c0a08] px-6 lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["Dra. Clícia Bento", "#sobre"],
                    ["Especialidades Jurídicas", "#atuacao"],
                    ["Por Que Escolher", "#diferenciais"],
                    ["Depoimentos & Casos", "#avaliacoes"],
                    ["Contato & Sede", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm font-medium text-stone-200 hover:text-[#c99b4f]"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#a4732a] via-[#e0b370] to-[#b08144] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.13em] text-[#120e0b] shadow-md transition-all hover:brightness-105"
                      href={getWhatsAppUrl(
                        "Olá, Dra. Clícia Bento! Gostaria de consultar sobre meu caso jurídico."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} /> WhatsApp: {PHONE_DISPLAY}
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#c99b4f]/30 bg-[#191410] px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-[#fce2a2] transition-all hover:border-[#fce2a2]"
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

        {/* Hero Section - Sculpted Imperial Gold & Warm Espresso Obsidian */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-[#c99b4f]/20 bg-gradient-to-b from-[#0c0a08] via-[#120e0b] to-[#191410]"
        >
          {/* Subtle warm gold & deep velvet ambient glow */}
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[36rem] rounded-full bg-[#c99b4f]/12 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[28rem] rounded-full bg-[#221c16]/50 blur-3xl" />

          <div className="mx-auto grid min-h-[660px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[720px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-12 lg:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-6"
            >
              <motion.div
                variants={reveal}
                className="mb-6 inline-flex items-center gap-2.5 rounded-lg border border-[#c99b4f]/35 bg-[#120e0b] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#fce2a2] shadow-sm"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#c99b4f]" />
                <span>CLÍCIA BENTO | ADVOGADA EM ERVÁLIA · {OAB_REGISTRATION}</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="max-w-[760px] font-serif text-[2.65rem] leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl lg:text-[3.85rem]"
              >
                Advocacia Estratégica, Humanizada e Resolutiva:{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#fcf7ed] via-[#fce2a2] to-[#c99b4f]">
                  Seus Direitos Protegidos com Rigor Técnico e Excelência.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-[#d7cfc0] sm:text-base sm:leading-8"
              >
                Liderado pela{" "}
                <strong className="font-semibold text-white">
                  Dra. Clícia Bento ({OAB_REGISTRATION})
                </strong>
                , nosso escritório alia sensibilidade humana no acolhimento de cada cliente a uma atuação combativa e estratégica nos tribunais. Defendemos seus direitos nas áreas Trabalhista, Previdenciária, Família e Cível, com sede física em Ervália - MG e atendimento on-line em todo o território nacional.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Clícia Bento! Gostaria de consultar sobre meu caso e agendar um atendimento."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar no WhatsApp com a Dra. Clícia
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 rounded-lg border border-[#c99b4f]/30 bg-[#120e0b] px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#fce2a2] transition-all hover:border-[#fce2a2] hover:bg-[#221c16] hover:text-white"
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
                className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-[#c99b4f]/20 pt-6 text-xs text-[#d7cfc0]"
              >
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-white transition-colors hover:text-[#fce2a2]"
                >
                  <Star size={15} className="fill-[#c99b4f] text-[#c99b4f]" /> 5,0 estrelas no Google (41 avaliações autênticas)
                </a>
                <span className="inline-flex items-center gap-2 font-medium">
                  <Award size={15} className="text-[#c99b4f]" /> {OAB_REGISTRATION}
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <MapPin size={15} className="text-[#c99b4f]" /> R. Sagrado Coração de Jesus, 20 · Ervália - MG
                </span>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-[#fce2a2] transition-colors hover:text-white"
                >
                  <InstagramIcon size={15} className="text-[#c99b4f]" /> 3.627 seguidores no Instagram ({INSTAGRAM_HANDLE})
                </a>
              </motion.div>
            </motion.div>

            {/* Hero Visual Presentation - Dra. Clícia Bento */}
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
              <div className="relative aspect-[4/4.9] overflow-hidden rounded-2xl border border-[#c99b4f]/35 bg-[#120e0b] shadow-2xl ring-1 ring-[#c99b4f]/20">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dra. Clícia Bento — Advogada em Ervália e Consultora Jurídica"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0c0a08] via-[#0c0a08]/85 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-8 sm:left-8 sm:right-8">
                  <div>
                    <p className="font-serif text-2xl font-normal tracking-wide text-white">
                      Dra. Clícia Bento
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#c99b4f]">
                      Advogada em Ervália · {OAB_REGISTRATION}
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-[#c99b4f]/40 bg-[#0c0a08]/85 text-[#fce2a2] backdrop-blur-sm">
                    <Scale size={18} />
                  </span>
                </div>
              </div>

              {/* Floating authority badge */}
              <div className="absolute -left-3 top-6 z-10 rounded-lg border border-[#c99b4f]/40 bg-[#120e0b]/95 px-4 py-2 text-[10px] font-bold tracking-[0.14em] text-[#fce2a2] shadow-card backdrop-blur-md sm:-left-5">
                ERVÁLIA - MG · ATENDIMENTO ON-LINE EM TODO O BRASIL
              </div>

              {/* Floating Google 5.0 Star Rating */}
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="group absolute -bottom-5 -right-3 z-10 rounded-xl border border-[#c99b4f]/35 bg-[#120e0b]/95 p-3.5 shadow-card backdrop-blur-md transition-all hover:border-[#fce2a2] hover:bg-[#191410] sm:-right-5"
              >
                <div className="flex items-center gap-2">
                  <GoogleIcon size={17} />
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-0.5 text-[#c99b4f]">
                      <Star size={13} className="fill-[#c99b4f] text-[#c99b4f]" />
                    </div>
                    <span className="font-serif text-base font-bold text-white">
                      5,0
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#c99b4f]">
                      / 5,0
                    </span>
                  </div>
                </div>
                <p className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-[#d7cfc0]">
                  41 Avaliações no Google
                </p>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner - Authority Metrics */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-[#c99b4f]/20 bg-[#120e0b]"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              [
                "5,0 ★ no Google",
                "nota máxima com 41 avaliações autênticas destacando competência e ética",
              ],
              [
                "3.627 Seguidores",
                "comunidade no Instagram (@cliciabento.adv) com 54 publicações jurídicas",
              ],
              [
                "Atendimento Humanizado",
                "acolhimento, simpatia, ética e clareza sem juridiquês",
              ],
              [
                "Ervália - MG",
                "sede na R. Sagrado Coração de Jesus, 20 e atendimento on-line em todo o Brasil",
              ],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-[#c99b4f]/20"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-xl font-semibold text-[#c99b4f] sm:text-2xl">
                  {value}
                </span>
                <span className="max-w-[165px] text-[11px] leading-5 text-[#d7cfc0]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre a Dra. Clícia Bento - Editorial Warm Linen Canvas */}
        <section
          id="sobre"
          className="scroll-mt-24 border-y border-[#c99b4f]/30 bg-[#faf8f5] py-20 text-[#1a140f] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
            {/* Dra. Clícia Bento presentation portrait */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[480px]"
            >
              <div className="relative aspect-[3/4.2] overflow-hidden rounded-2xl border-2 border-[#331b05] bg-[#120e0b] shadow-2xl">
                <Image
                  src={FOTO_SOBRE_SRC}
                  alt="Dra. Clícia Bento — Advogada Titular"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0c0a08]/90 via-[#0c0a08]/30 to-transparent" />
              </div>

              {/* Authority badge card - Deep Obsidian Contrast on Light Surface */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-[#c99b4f]/40 bg-[#120e0b] px-5 py-4 shadow-xl sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-[#c99b4f]">
                  <Award size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#c99b4f]">
                    Advocacia Humanizada & Estratégica
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-white">
                  Dra. Clícia Bento
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-[#c99b4f]">
                  {OAB_REGISTRATION} · Clícia Bento Advocacia
                </p>
                <p className="mt-1 text-[11px] leading-4 text-[#d7cfc0]">
                  Rua Sagrado Coração de Jesus, 20 - Centro, Ervália - MG
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-[#834e20]/40 sm:-left-7 sm:-top-7 sm:size-32" />
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
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#834e20]/30 bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#834e20] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#834e20]" />
                <span>CONHEÇA A DRA. CLÍCIA BENTO</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-[#1a140f] sm:text-4xl lg:text-[3.25rem]"
              >
                Mais que uma assessoria jurídica: uma defensora{" "}
                <span className="italic text-[#834e20]">
                  comprometida em ouvir você com empatia e lutar com rigor técnico.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-[#4a3f35]"
              >
                Com sede no Centro de{" "}
                <strong className="font-bold text-[#1a140f]">
                  Ervália - MG
                </strong>{" "}
                e capacidade de atendimento online em todo o território nacional, a Dra. Clícia Bento (OAB/MG 246.137) construiu uma advocacia orientada pela excelência técnica, ética inegociável e defesa intransigente dos direitos de quem a procura.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-[#4a3f35]"
              >
                Nosso diferencial está no{" "}
                <strong className="font-semibold text-[#1a140f]">
                  atendimento próximo e humanizado
                </strong>
                : entendemos que por trás de cada processo há vidas, famílias e expectativas. Seja na conquista de um benefício previdenciário, na reparação de uma injustiça no trabalho, na resolução de um divórcio ou na proteção do patrimônio familiar, você recebe atenção direta, esclarecimentos transparentes e acompanhamento seguro em todas as etapas.
              </motion.p>

              {/* Client Quote Card */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-xl border border-[#e8dfd2] bg-white/95 p-5 shadow-sm"
              >
                <blockquote className="font-serif text-sm italic leading-relaxed text-[#1a140f]">
                  &ldquo;Uma profissional admirável, muito inteligente, comprometida e ética. Dá para perceber o cuidado e a dedicação em cada atendimento. Passa muita confiança e realmente se preocupa em buscar a melhor solução para cada caso. Recomendo com toda certeza!&rdquo;
                </blockquote>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-[#834e20]">
                  — Danielle Machado · Avaliação Verificada no Google (5,0 ★)
                </p>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-1 gap-2.5 text-xs font-semibold text-[#1a140f] sm:grid-cols-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#834e20]" />
                  <span>Sede na Rua Sagrado Coração de Jesus, 20 - Centro</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#834e20]" />
                  <span>Nota máxima 5,0 ★ no Google com 41 avaliações</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#834e20]" />
                  <span>Atendimento direto com a advogada, sem intermediários</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#834e20]" />
                  <span>Atendimento presencial e on-line em todo o Brasil</span>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Clícia Bento! Gostaria de agendar uma consulta sobre o meu caso."
                  )}
                  target="_blank"
                  size="md"
                  variant="dark"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar com a Dra. Clícia
                </GlowingButton>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1a140f] transition-colors hover:text-[#834e20]"
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
          className="scroll-mt-24 border-t border-[#c99b4f]/20 bg-[#120e0b] py-20 sm:py-28 lg:py-32"
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
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#fcf7ed] via-[#fce2a2] to-[#c99b4f]">
                  Ervália, Zona da Mata e em todo o Brasil.
                </span>
              </Heading>
              <p className="max-w-[270px] pb-1 text-xs leading-6 text-[#d7cfc0]">
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
                    className="group flex min-h-[350px] flex-col rounded-xl border border-[#c99b4f]/20 bg-[#191410] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#c99b4f]/50 hover:bg-[#221c16] hover:shadow-obsidian sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-lg border border-[#c99b4f]/25 bg-[#2c241c] text-[#c99b4f] shadow-sm transition-colors group-hover:border-[#fce2a2] group-hover:bg-[#331b05] group-hover:text-white">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <span className="font-serif text-2xl text-[#c99b4f]/40">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-md border border-[#c99b4f]/25 bg-[#221c16] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#fce2a2] shadow-sm">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.45rem] leading-tight text-white">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-6 text-[#d7cfc0]">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-[#e0b370] hover:text-white"
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

        {/* Por Que Escolher a Dra. Clícia Bento - Diferenciais (Dobra Clara com Linho Nobre) */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-t border-[#c99b4f]/30 bg-[#faf8f5] py-20 text-[#1a140f] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                light
                eyebrow="NOSSOS PILARES DE EXCELÊNCIA"
                description="Unimos acolhimento humanizado, técnica jurídica de ponta e combatividade para garantir que você tenha seus direitos resguardados com segurança."
              >
                Por que confiar sua causa à{" "}
                <span className="italic text-[#834e20]">
                  Dra. Clícia Bento?
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Clícia Bento! Gostaria de consultar sobre a minha situação jurídica."
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
                className="group flex flex-col justify-between rounded-xl border border-[#e8dfd2] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c99b4f] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#c99b4f]/30 bg-[#f4efe6] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#5c340d]">
                      <HeartHandshake size={14} /> Atendimento Humanizado
                    </span>
                    <span className="text-xs font-semibold text-[#834e20]">
                      Empatia & Respeito
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#1a140f] sm:text-[1.75rem]">
                    Você Nunca Fica Sem Resposta ou Desamparado
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#4a3f35]">
                    Sabemos que questões jurídicas geram ansiedade e incertezas. No escritório Clícia Bento Advocacia, você conversa diretamente com a advogada, recebe orientações claras sem juridiquês e entende cada etapa do seu processo com tranquilidade e transparência.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-[#1a140f]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#834e20]" />
                      <span>Contato direto pelo WhatsApp com a Dra. Clícia Bento</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#834e20]" />
                      <span>Posicionamento constante e didático sobre o andamento dos autos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#834e20]" />
                      <span>Atendimento seguro, transparente e com sigilo profissional absoluto</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#e8dfd2] pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Clícia Bento! Gostaria de conversar diretamente com você sobre minha situação."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#c99b4f]/40 bg-[#faf8f5] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1a140f] transition-all hover:border-[#834e20] hover:bg-[#1a140f] hover:text-[#fce2a2]"
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
                className="group flex flex-col justify-between rounded-xl border border-[#e8dfd2] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c99b4f] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#c99b4f]/30 bg-[#f4efe6] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#5c340d]">
                      <Scale size={14} /> Rigor Técnico Incisivo
                    </span>
                    <span className="text-xs font-semibold text-[#834e20]">
                      Soluções Sob Medida
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#1a140f] sm:text-[1.75rem]">
                    Combatividade Jurídica & Foco no Resultado Real
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#4a3f35]">
                    Cada caso é tratado de forma exclusiva. Analisamos minuciosamente documentos, histórico e jurisprudência para construir estratégias jurídicas robustas, seja na Justiça do Trabalho, na esfera Previdenciária, de Família ou Cível.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-[#1a140f]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#834e20]" />
                      <span>Análise técnica aprofundada de provas e documentos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#834e20]" />
                      <span>Atuação diligente em audiências, perícias e recursos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#834e20]" />
                      <span>Foco em soluções céleres e sem acordos desfavoráveis</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#e8dfd2] pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Clícia Bento! Preciso de ajuda para analisar meu caso jurídico."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#c99b4f]/40 bg-[#faf8f5] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1a140f] transition-all hover:border-[#834e20] hover:bg-[#1a140f] hover:text-[#fce2a2]"
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
        <section className="relative overflow-hidden border-t border-[#c99b4f]/20 bg-[#faf8f5] py-20 text-[#1a140f] sm:py-24 lg:py-28">
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-[#c99b4f]/5 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-[#c99b4f]/5 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                light
                eyebrow="NOSSO COMPROMISSO COM O CLIENTE"
                description="Ética, respeito, dedicação técnica e acolhimento são os valores que guiam cada orientação e cada processo conduzido pela Dra. Clícia Bento."
              >
                Cuidamos do seu caso com{" "}
                <span className="italic text-[#834e20]">
                  honestidade, acolhimento e dedicação integral.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-[#e8dfd2] bg-white p-6 font-serif text-base italic leading-7 text-[#1a140f] shadow-sm">
                &ldquo;Doutora Clícia é daquelas advogadas que realmente ouvem o cliente com atenção e respeito. Dá muita segurança falar com ela porque ela explica com franqueza a realidade de cada situação.&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-[#834e20]">
                  — Sebastião Alves Ribeiro · Cliente em Ervália - MG
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
                  "Você recebe uma análise sincera e realista sobre as reais possibilidades da sua ação, sem promessas vazias, com total transparência e embasamento legal.",
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
                  <span className="font-serif text-2xl font-semibold text-[#834e20]">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-[#1a140f]">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-[#4a3f35]">
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
          className="scroll-mt-24 border-t border-[#c99b4f]/30 bg-[#f4efe6] py-20 text-[#1a140f] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                light
                eyebrow="PROVA SOCIAL VERIFICADA · GOOGLE MEU NEGÓCIO"
                description="Confira avaliações reais e espontâneas de clientes que confiaram suas causas à Dra. Clícia Bento na sede em Ervália - MG e através do atendimento on-line em todo o Brasil."
              >
                Avaliada com nota máxima 5,0 ★ com{" "}
                <span className="italic text-[#834e20]">
                  41 avaliações no Google pelo atendimento humanizado, dedicação e ética.
                </span>
              </Heading>

              {/* Verified Google Badge Card */}
              <div className="flex flex-col gap-3 rounded-xl border border-[#e8dfd2] bg-white p-5 shadow-sm sm:flex-row sm:items-center md:min-w-[340px]">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-lg border border-[#c99b4f]/30 bg-[#faf8f5] shadow-xs">
                  <GoogleIcon size={30} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-3xl font-bold leading-none text-[#1a140f]">
                      5,0
                    </span>
                    <div className="flex gap-0.5 text-[#c99b4f]">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-[#c99b4f] text-[#c99b4f]"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#4a3f35]">
                    Clícia Bento Advocacia
                  </p>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-[#5c340d] transition-colors hover:text-[#1a140f]"
                  >
                    41 avaliações no Google <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Client Reviews Grid */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clientReviews.map((review) => (
                <article
                  key={review.name}
                  className="group relative flex flex-col justify-between rounded-xl border border-[#e8dfd2] bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#c99b4f] hover:shadow-md sm:p-8"
                >
                  <div>
                    {/* Header: Stars + Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-1 text-[#c99b4f]">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-[#c99b4f] text-[#c99b4f]"
                          />
                        ))}
                      </div>
                      <span className="rounded-md border border-[#c99b4f]/30 bg-[#faf8f5] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#5c340d] shadow-xs">
                        {review.badge}
                      </span>
                    </div>

                    {/* Review content */}
                    <p className="mt-5 text-[14px] italic leading-relaxed text-[#1a140f]">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  {/* Reviewer info */}
                  <div className="mt-6 flex items-center gap-3 border-t border-[#e8dfd2] pt-4">
                    <div className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#c99b4f]/30 bg-[#faf8f5] font-serif text-sm font-semibold text-[#5c340d] shadow-xs">
                      {review.name.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-serif text-base font-semibold text-[#1a140f]">
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
                  "Advogada em Ervália - MG",
                  "Atendimento em Todo o Brasil",
                  "Nota 5,0 ★ no Google (41 avaliações)",
                  "Direito do Trabalho & Rescisão",
                  "Previdenciário & Benefícios INSS",
                  "Direito de Família & Sucessões",
                  "Direito Civil & Defesa do Consumidor",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#e8dfd2] bg-white px-3.5 py-1.5 text-[11px] font-medium text-[#1a140f] shadow-xs"
                  >
                    <CheckCircle2 size={13} className="text-[#834e20]" />
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={getWhatsAppUrl(
                  "Olá, Dra. Clícia Bento! Gostaria de agendar um atendimento para avaliar o meu caso."
                )}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#5c340d] transition-colors hover:text-[#1a140f]"
              >
                Falar com a Dra. Clícia{" "}
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Contato & Localização da Sede em Ervália - MG */}
        <section
          id="contato"
          className="scroll-mt-24 border-t border-[#c99b4f]/30 bg-[#faf8f5] py-20 text-[#1a140f] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                light
                eyebrow="CONTATO & ATENDIMENTO EM ERVÁLIA"
                description="Inicie seu atendimento diretamente pelo WhatsApp ou agende uma reunião presencial em nossa sede. Prestamos assistência jurídica ágil para moradores de Ervália, Viçosa, Ubá, Muriaé e todo o Brasil via consultoria online humanizada."
              >
                Estamos prontos para{" "}
                <span className="italic text-[#834e20]">
                  escutar e defender você.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Clícia Bento! Gostaria de agendar um horário para atendimento sobre o meu caso."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} /> Iniciar Conversa no WhatsApp
                </GlowingButton>
                <p className="text-[11px] leading-5 text-[#4a3f35]">
                  Telefone e WhatsApp do escritório:{" "}
                  <strong className="text-[#1a140f]">{PHONE_DISPLAY}</strong>
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-[#4a3f35]">
                <div className="flex items-start gap-3">
                  <Clock
                    size={16}
                    className="mt-0.5 shrink-0 text-[#834e20]"
                  />
                  <div>
                    <p className="font-semibold text-[#1a140f]">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-[#1a140f]">
                      Segunda a Sexta-feira das 08:00 às 18:00
                    </p>
                    <p className="text-[11px] text-[#786b5e]">
                      Atendimento presencial com hora marcada no Centro de Ervália e consultoria online em todo o Brasil
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#834e20]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-medium text-[#1a140f] transition-colors hover:text-[#834e20]"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#834e20]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#834e20] text-[#1a140f]"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#834e20]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="transition-colors hover:text-[#834e20] text-[#1a140f]"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#834e20]"
                  />
                  <span className="text-[#1a140f]">{ADDRESS_TEXT}</span>
                </div>
              </div>
            </div>

            {/* Office & Schedule Card */}
            <div className="relative overflow-hidden rounded-xl border border-[#e8dfd2] bg-white p-7 shadow-md sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#a4732a] to-[#fce2a2]" />

              <div className="flex items-center gap-4">
                <div className="relative size-[64px] shrink-0 overflow-hidden rounded-full border-2 border-[#c99b4f]/60 bg-[#120e0b] shadow-md sm:size-[76px]">
                  <Image
                    src={LOGO_SEAL_SRC}
                    alt="Selo Clícia Bento Advocacia"
                    fill
                    sizes="76px"
                    className="object-contain p-1.5"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#834e20]">
                    Sede do Escritório
                  </p>
                  <p className="mt-0.5 font-serif text-xl font-bold text-[#1a140f] sm:text-2xl">
                    Clícia Bento Advocacia
                  </p>
                </div>
              </div>

              <address className="mt-7 max-w-md text-[14px] not-italic leading-7 text-[#4a3f35]">
                <strong className="font-semibold text-[#1a140f]">
                  Dra. Clícia Bento
                </strong>
                <br />
                Advogada e Consultora Jurídica · {OAB_REGISTRATION}
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-lg border border-[#e8dfd2] bg-[#faf8f5] p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#834e20]">
                  Atendimento & Horários
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-[#4a3f35]">
                  <span>Segunda a Sexta</span>
                  <span className="text-right font-semibold text-[#1a140f]">
                    08:00 às 18:00
                  </span>
                  <span>Atendimento Presencial</span>
                  <span className="text-right font-medium text-[#5c340d]">
                    Ervália - MG (Centro)
                  </span>
                  <span>Endereço</span>
                  <span className="text-right text-[#1a140f]">Rua Sagrado Coração de Jesus, 20</span>
                  <span>Atendimento Online</span>
                  <span className="text-right text-[#1a140f]">Todo o Brasil</span>
                </div>
              </div>

              <div className="my-7 h-px bg-[#e8dfd2]" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-[#786b5e]">
                  Atendimento acolhedor e sigiloso com hora marcada em Ervália
                </p>
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Clícia Bento! Gostaria de agendar um atendimento no escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#c99b4f]/40 bg-[#f4efe6] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#1a140f] transition-colors hover:border-[#834e20] hover:bg-[#1a140f] hover:text-[#fce2a2]"
                >
                  <WhatsAppIcon size={14} /> Falar com a Advogada <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip */}
        <section className="border-t border-[#c99b4f]/20 bg-gradient-to-r from-[#0c0a08] via-[#191410] to-[#0c0a08] px-5 py-14 text-white shadow-inner sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#c99b4f]">
                <Sparkles size={13} /> CLÍCIA BENTO ADVOCACIA · ERVÁLIA & REGIÃO - MG
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                Precisa de orientação jurídica acolhedora, combativa e de confiança?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dra. Clícia Bento! Gostaria de consultar sobre meus direitos com seu escritório."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-lg bg-gradient-to-r from-[#a4732a] via-[#e0b370] to-[#b08144] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#120e0b] shadow-md transition-all hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp{" "}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#c99b4f]/20 bg-[#080705] px-5 py-14 text-white sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <a
                href="#inicio"
                aria-label="Clícia Bento Advocacia"
                className="inline-flex items-center gap-3.5 transition-transform hover:scale-[1.02]"
              >
                <div className="relative size-[72px] shrink-0 overflow-hidden rounded-full border-2 border-[#c99b4f]/50 bg-[#120e0b] shadow-md sm:size-[80px]">
                  <Image
                    src={LOGO_SEAL_SRC}
                    alt="Clícia Bento Advocacia"
                    fill
                    sizes="80px"
                    className="object-contain p-1.5"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-xl font-bold tracking-wider text-white sm:text-2xl">
                    CLÍCIA BENTO
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c99b4f]">
                    Advocacia & Consultoria
                  </span>
                </div>
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-[#d7cfc0]">
                ⚖️ Advocacia estratégica e humanizada. Atendimento acolhedor, transparente e combativo em Ervália, Zona da Mata e em todo o Brasil.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-[#c99b4f]">
                Dra. Clícia Bento · {OAB_REGISTRATION}
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c99b4f]">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-[#d7cfc0]">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  Dra. Clícia Bento
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
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c99b4f]">
                Contato & Atendimento
              </h2>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-[#d7cfc0]">
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Clícia Bento! Gostaria de solicitar um atendimento com o escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 font-medium text-[#fce2a2]"
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
                <p className="inline-flex items-center gap-2 pt-1 text-[11px] text-[#c99b4f]">
                  <Clock size={14} className="shrink-0" /> Seg a Sex: 08:00 às 18:00
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-[#c99b4f]/20 pt-6 text-[10px] text-stone-400 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} CLÍCIA BENTO ADVOCACIA. Todos os direitos reservados.
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
              "Olá, Dra. Clícia Bento! Gostaria de consultar sobre meus direitos com seu escritório."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Dra. Clícia Bento"
            className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          >
            <WhatsAppIcon size={28} />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-[#120e0b] border border-[#c99b4f]/30 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg transition-opacity group-hover:block">
              Falar com a Dra. Clícia Bento
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
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-xl border border-[#c99b4f]/35 bg-[#120e0b] p-7 shadow-2xl sm:max-w-xl sm:rounded-xl sm:p-10"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-[#c99b4f]/30 bg-[#221c16] text-[#fce2a2] transition-colors hover:border-[#fce2a2] hover:text-white"
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

                <p className="mt-5 text-sm leading-7 text-[#d7cfc0]">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-[#c99b4f]/20 pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#c99b4f]">
                    Demandas atendidas pelo escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-stone-200"
                      >
                        <span className="size-2 shrink-0 rounded-full bg-[#c99b4f]" />
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
