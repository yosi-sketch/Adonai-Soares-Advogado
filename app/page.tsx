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
  Coins,
  FileCheck2,
  HeartHandshake,
  Landmark,
  Mail,
  MapPin,
  Menu,
  Phone,
  Scale,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Users2,
  X,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "553888355914";
const PHONE_DISPLAY = "(38) 98835-5914";
const EMAIL_CONTACT = "contato@michaelysilva.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/michaelysilva_adv/";
const INSTAGRAM_HANDLE = "@michaelysilva_adv";

const ADDRESS_TEXT = "R. Astolfo Moreira, 305 A - Centro, João Pinheiro - MG, 38770-000";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Michaely+Pereira+Silva+%E2%80%94+Advogada+Jo%C3%A3o+Pinheiro+%C2%B7+MG";

const LOGO_SEAL_SRC = "/logo-symbol.png";
const LOGO_FULL_SRC = "/logo.png";
const FOTO_HERO_SRC = "/michaely-portrait.png";
const FOTO_INFOGRAFICO_SRC = "/michaely-infographic.png";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Michaely Silva! Gostaria de agendar uma consulta jurídica e tirar dúvidas sobre o meu caso.";
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
    id: "direito-do-consumidor",
    title: "Direito do Consumidor & Defesa de Direitos",
    icon: ShoppingBag,
    tag: "Negativação Indevida · Danos Morais · Cobranças Abusivas · Falhas na Entrega",
    summary:
      "Defesa incisiva contra práticas abusivas de empresas, bancos e operadoras, buscando a exclusão de negativações ilegais no SPC/Serasa e indenizações devidas.",
    details:
      "O consumidor não pode ser penalizado por falhas e abusos do mercado. A Dra. Michaely Silva atua com agilidade para obter ordens liminares de exclusão do nome dos órgãos de proteção ao crédito, restituição em dobro de quantias cobradas indevidamente e compensação financeira por danos morais decorrentes de cobranças vexatórias, cancelamentos de serviços e golpes digitais.",
    topics: [
      "Exclusão liminar urgente do nome no SPC, Serasa e Boa Vista por negativação indevida",
      "Ações indenizatórias por danos morais por cobrança vexatória ou serviço não prestado",
      "Restituição em dobro de valores cobrados indevidamente (art. 42 do Código de Defesa do Consumidor)",
      "Cancelamento de compras fraudulentas, golpes no PIX e clonagem de cartões de crédito",
      "Ações contra companhias aéreas por atraso, cancelamento de voos e extravio de bagagens",
      "Combate a cláusulas contratuais abusivas, vendas casadas e recusa de garantia legal",
    ],
    whatsAppText:
      "Olá, Dra. Michaely! Gostaria de uma avaliação para um problema de Direito do Consumidor (cobrança indevida, negativação ou dano moral).",
  },
  {
    id: "direito-de-familia",
    title: "Direito de Família, Divórcio & Guarda",
    icon: HeartHandshake,
    tag: "Divórcio · Guarda & Convivência · Pensão Alimentícia · Partilha de Bens",
    summary:
      "Condução sensível, técnica e segura dos conflitos familiares, protegendo o patrimônio dos cônjuges e garantindo o bem-estar e o futuro dos filhos.",
    details:
      "As questões de família exigem um equilíbrio delicado entre firmeza jurídica e profundo respeito humano. Dra. Michaely Pereira Silva acompanha divórcios consensuais e litigiosos, fixação e revisão de pensão alimentícia, regimes de convivência e guarda, atuando para prevenir traumas desnecessários e assegurar uma partilha justa de bens.",
    topics: [
      "Divórcio consensual ágil em cartório (extrajudicial) e divórcio judicial contencioso",
      "Ação de alimentos: fixação, execução de pensão em atraso, revisão de valor e exoneração",
      "Regulamentação e modificação de guarda (compartilhada e unilateral) e plano de convivência",
      "Partilha equilibrada de bens, imóveis, veículos e investimentos do casal",
      "Reconhecimento e dissolução de união estável com resguardo patrimonial",
      "Investigação e reconhecimento de paternidade com retificação de registro civil",
    ],
    whatsAppText:
      "Olá, Dra. Michaely! Gostaria de consultar sobre uma questão de Direito de Família (divórcio, pensão alimentícia ou guarda).",
  },
  {
    id: "inventario-judicial-extrajudicial",
    title: "Inventário Judicial & Extrajudicial em Cartório",
    icon: FileCheck2,
    tag: "Partilha de Herança · Cartório Rápido · Planejamento Sucessório · ITCD MG",
    summary:
      "Regularização e partilha célere de heranças, reduzindo custos tributários e burocracias para que a família receba seu patrimônio em paz.",
    details:
      "A perda de um ente querido já é um momento doloroso e não deve ser agravada por burocracias infindáveis. Havendo consenso entre herdeiros capazes, realizamos o inventário extrajudicial em cartório de forma rápida e segura. Para os casos de herdeiros menores ou discordâncias, atuamos no inventário judicial com firmeza na defesa da justa cota-parte.",
    topics: [
      "Inventário Extrajudicial em Cartório: procedimento célere e econômico para herdeiros em consenso",
      "Inventário Judicial célere para patrimônios complexos ou quando há herdeiros menores/incapazes",
      "Levantamento de alvarás judiciais para liberação de saldos bancários, FGTS e PIS/PASEP",
      "Planejamento sucessório prévio e apuração do imposto sobre herança (ITCD - Minas Gerais)",
      "Cessão de direitos hereditários e regularização documental de imóveis herdados",
      "Mediação entre herdeiros para resolução amigável e pacífica da partilha",
    ],
    whatsAppText:
      "Olá, Dra. Michaely! Gostaria de orientação para dar entrada em um inventário judicial ou extrajudicial.",
  },
  {
    id: "direito-bancario",
    title: "Direito Bancário & Combate a Juros Abusivos",
    icon: Coins,
    tag: "Pós-Graduada · Empréstimo Não Solicitado · Superendividamento · Fraudes Bancárias",
    summary:
      "Combate a abusos de instituições financeiras, juros extorsivos, descontos indevidos de consignados em aposentadorias e renegociação de dívidas.",
    details:
      "Com especialização de pós-graduação em Direito Bancário, Dra. Michaely defende consumidores e aposentados lesados por empréstimos consignados não autorizados, taxas de juros acima da média do Banco Central e fraudes bancárias, atuando na repetição do indébito e na renegociação sob a Lei do Superendividamento.",
    topics: [
      "Cancelamento de empréstimos consignados fraudulentos em benefícios do INSS e indenização",
      "Ações revisionais de financiamentos de veículos e contratos de crédito com juros abusivos",
      "Defesa contra fraudes por engenharia social, transferências via PIX e boletos falsos",
      "Renegociação estruturada e unificação de passivos com base na Lei do Superendividamento",
      "Desbloqueio de contas bancárias e salários indevidamente retidos por dívidas",
      "Defesa técnica em execuções de títulos extrajudiciais e ações de busca e apreensão",
    ],
    whatsAppText:
      "Olá, Dra. Michaely! Gostaria de consultar sobre problemas com banco (empréstimo consignado não solicitado ou juros abusivos).",
  },
  {
    id: "direito-do-trabalho",
    title: "Direito do Trabalho & Rescisões Contratuais",
    icon: Landmark,
    tag: "Pós-Graduada · Verbas Rescisórias · Horas Extras · Rescisão Indireta · Acidentes",
    summary:
      "Proteção técnica dos direitos dos trabalhadores e orientação preventiva, garantindo o recebimento integral de todas as verbas conquistadas pelo trabalho.",
    details:
      "Pós-graduada em Direito do Trabalho, a Dra. Michaely Silva analisa detalhadamente cartões de ponto, holerites e termos de rescisão para identificar supressão de direitos, horas extras não quitadas, insalubridade e hipóteses de rescisão indireta em decorrência de descumprimento das obrigações pelo empregador.",
    topics: [
      "Cálculo e cobrança de verbas rescisórias integrais (aviso prévio, FGTS + 40%, 13º e férias)",
      "Ação de Rescisão Indireta do contrato de trabalho (demissão por justa causa do empregador)",
      "Reconhecimento de vínculo empregatício sem registro em carteira e anotações retroativas",
      "Cobrança de horas extras, intervalos intrajornada, adicional noturno e descanso semanal remunerado",
      "Reivindicação de adicionais de insalubridade e periculosidade devidos",
      "Indenização por assédio moral no ambiente de trabalho e acidentes laborais",
    ],
    whatsAppText:
      "Olá, Dra. Michaely! Gostaria de orientações sobre direitos trabalhistas, rescisão de contrato e horas extras.",
  },
  {
    id: "orientacao-juridica-consultoria",
    title: "Orientação Jurídica & Consultoria Preventiva",
    icon: ShieldCheck,
    tag: "Análise Contratual · Resolução Amigável · Notificações · Clareza sem Juridiquês",
    summary:
      "Consultoria jurídica acessível e estratégica para evitar prejuízos futuros, revisar contratos civis e solucionar conflitos antes que virem processos demorados.",
    details:
      "Uma orientação jurídica preventiva evita anos de disputas judiciais e prejuízos financeiros vultosos. A Dra. Michaely Pereira Silva oferece pareceres claros, elaboração e análise minuciosa de contratos civis e imobiliários, além de mediação para que você tome decisões sempre com segurança e respaldo legal.",
    topics: [
      "Elaboração e revisão segura de contratos de compra e venda de imóveis e locações",
      "Envio de notificações extrajudiciais com validade jurídica formal para resolução amigável",
      "Consultoria jurídica personalizada com respostas diretas e descomplicadas para suas dúvidas",
      "Análise prévia de riscos em transações patrimoniais e acordos comerciais",
      "Mediação entre partes para obtenção de acordos extrajudiciais rápidos e seguros",
      "Acompanhamento em assinaturas de escrituras, contratos e registros públicos",
    ],
    whatsAppText:
      "Olá, Dra. Michaely! Gostaria de agendar uma consulta para orientação jurídica preventiva e análise do meu caso.",
  },
];

const clientReviews = [
  {
    name: "Soane Ferreira",
    reviewsCount: "1 avaliação no Google",
    badge: "Empatia, Conhecimento & Clareza",
    content:
      "Atendimento excelente, a Dra demonstra muito conhecimento é empática, soube esclarecer minhas dúvidas de forma fácil pra eu entender. Adorei o atendimento super recomendo.",
  },
  {
    name: "Kauã Gomes",
    reviewsCount: "1 avaliação no Google",
    badge: "Dedicação & Indicação Constante",
    content:
      "Excelente profissional e muito dedicada, indico sempre.",
  },
  {
    name: "Rodrigo Ferreira",
    reviewsCount: "3 avaliações · 6 fotos no Google",
    badge: "A Melhor de João Pinheiro",
    content:
      "Excelente profissional!!! Recomendo, a melhor de joao pinheiro.",
  },
  {
    name: "Luciene Pereira",
    reviewsCount: "2 avaliações no Google",
    badge: "Ética, Compromisso & Excelência",
    content:
      "Advoga com excelência! Profissional com ética e comprometimento. Sucesso!",
  },
  {
    name: "Casamagrao Magrao",
    reviewsCount: "1 avaliação no Google",
    badge: "Ótima Profissional",
    content:
      "Ótima profissional.",
  },
  {
    name: "Fátima Pereira Alves",
    reviewsCount: "1 avaliação no Google",
    badge: "Atendimento Excelente",
    content:
      "Excelente o atendimento.",
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
      <h2 className="mt-4 font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-[#14110e] sm:text-4xl lg:text-[3.15rem]">
        {children}
      </h2>
      {description && (
        <p className="mt-4 text-[15px] leading-7 text-[#4c433a]">
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
      <main className="overflow-hidden bg-[#faf8f5] text-[#14110e] selection:bg-[#f7e5a9] selection:text-[#14110e]">
        {/* Navigation Bar - Refined Light Luxury with Polished Gold Accents */}
        <header className="sticky top-0 z-40 border-b border-[#e8dfd2] bg-white/95 backdrop-blur-xl shadow-xs">
          <div className="mx-auto flex h-[96px] max-w-7xl items-center justify-between gap-6 px-5 sm:h-[108px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Michaely Silva Advogada"
              onClick={closeMenu}
              className="flex items-center gap-3.5 transition-opacity hover:opacity-90"
            >
              <div className="relative size-[60px] shrink-0 overflow-hidden rounded-full border-2 border-[#deb753]/60 bg-[#120f0d] shadow-sm sm:size-[72px]">
                <Image
                  src={LOGO_SEAL_SRC}
                  alt="Selo Monograma Oficial Michaely Silva Advogada"
                  fill
                  priority
                  sizes="72px"
                  className="object-contain p-1"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-lg font-bold tracking-wider text-[#14110e] sm:text-xl lg:text-2xl">
                  MICHAELY SILVA
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8e6318] sm:text-xs">
                  Advogada · João Pinheiro - MG
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
                Dra. Michaely
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
                aria-label="Avaliações da Dra. Michaely Silva no Google"
                className="grid size-10 place-items-center rounded-lg border border-[#e8dfd2] bg-[#faf7f2] text-[#4c433a] transition-all hover:border-[#deb753] hover:bg-white hover:text-[#14110e] shadow-xs"
                title="5,0 ★ no Google (17 avaliações)"
              >
                <GoogleIcon size={16} />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da Dra. Michaely Silva"
                className="grid size-10 place-items-center rounded-lg border border-[#e8dfd2] bg-[#faf7f2] text-[#4c433a] transition-all hover:border-[#deb753] hover:bg-white hover:text-[#14110e] shadow-xs"
                title={`Instagram ${INSTAGRAM_HANDLE}`}
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                aria-label="Ligar para Michaely Silva Advogada"
                className="grid size-10 place-items-center rounded-lg border border-[#e8dfd2] bg-[#faf7f2] text-[#4c433a] transition-all hover:border-[#deb753] hover:bg-white hover:text-[#14110e] shadow-xs"
                title={`Ligar: ${PHONE_DISPLAY}`}
              >
                <Phone size={16} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Dra. Michaely Silva"
                className="grid size-10 place-items-center rounded-lg border border-[#e8dfd2] bg-[#faf7f2] text-[#4c433a] transition-all hover:border-[#deb753] hover:bg-white hover:text-[#14110e] shadow-xs"
                title="Atendimento no WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Michaely! Gostaria de agendar uma consulta e receber orientação jurídica para o meu caso."
                )}
                target="_blank"
                size="sm"
                variant="gold"
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
              className="grid size-11 place-items-center rounded-lg border border-[#e8dfd2] bg-[#faf7f2] text-[#14110e] lg:hidden shadow-xs"
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
                className="overflow-hidden border-t border-[#e8dfd2] bg-white px-6 text-[#14110e] lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["Dra. Michaely Silva", "#sobre"],
                    ["Áreas de Atuação", "#atuacao"],
                    ["Por Que Escolher", "#diferenciais"],
                    ["Avaliações (5,0 ★)", "#avaliacoes"],
                    ["Contato & Sede", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm font-medium text-[#4c433a] hover:text-[#8e6318]"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#8e6318] via-[#c59a3f] to-[#8e6318] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.13em] text-white shadow-md transition-all hover:brightness-105"
                      href={getWhatsAppUrl(
                        "Olá, Dra. Michaely! Gostaria de falar sobre o meu caso e receber orientação jurídica."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} /> WhatsApp: {PHONE_DISPLAY}
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#e8dfd2] bg-[#faf7f2] px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-[#14110e] transition-all hover:border-[#deb753]"
                      href={GOOGLE_SEARCH_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <GoogleIcon size={15} /> 5,0 ★ no Google (17 avaliações)
                    </a>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section - Warm Ivory & Travertine Canvas with Polished Gold Lighting */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-[#e8dfd2] bg-gradient-to-b from-white via-[#faf8f5] to-[#f4efe6]"
        >
          {/* Subtle warm gold ambient aura */}
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[36rem] rounded-full bg-[#deb753]/12 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[28rem] rounded-full bg-[#c59a3f]/10 blur-3xl" />

          <div className="mx-auto grid min-h-[660px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[720px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-12 lg:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-6"
            >
              <motion.div
                variants={reveal}
                className="mb-6 inline-flex items-center gap-2.5 rounded-lg border border-[#deb753]/40 bg-white px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8e6318] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#8e6318]" />
                <span>MICHAELY SILVA | ADVOGADA · JOÃO PINHEIRO - MG</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="max-w-[760px] font-serif text-[2.5rem] leading-[1.1] tracking-[-0.02em] text-[#14110e] sm:text-5xl lg:text-[3.75rem]"
              >
                Defesa Firme dos Seus Direitos e Cuidado Real com a Sua Família:{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#8e6318] via-[#c59a3f] to-[#5a3c08]">
                  Atuação Jurídica Estratégica, Humanizada e Resolutiva.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-[#4c433a] sm:text-base sm:leading-8"
              >
                Liderado pela{" "}
                <strong className="font-semibold text-[#14110e]">
                  Dra. Michaely Pereira Silva
                </strong>
                , advogada civil em João Pinheiro - MG com pós-graduação em Direito Bancário e Direito do Trabalho. Foco especializado em{" "}
                <strong className="font-semibold text-[#14110e]">
                  Direito do Consumidor, Direito de Família e Inventários (Judiciais e Extrajudiciais)
                </strong>
                , oferecendo orientação jurídica transparente, acolhimento empático e soluções ágeis para você e sua família.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Michaely! Gostaria de agendar uma consulta sobre Direito de Família / Consumidor / Inventário."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar no WhatsApp com a Dra. Michaely
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 rounded-lg border border-[#e8dfd2] bg-white px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#14110e] shadow-xs transition-all hover:border-[#deb753] hover:bg-[#faf7f2]"
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
                className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-[#e8dfd2] pt-6 text-xs text-[#5c5042]"
              >
                <a
                  href={GOOGLE_SEARCH_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-[#14110e] transition-colors hover:text-[#8e6318]"
                >
                  <Star size={15} className="fill-[#deb753] text-[#deb753]" /> 5,0 estrelas no Google (17 avaliações autênticas)
                </a>
                <span className="inline-flex items-center gap-2 font-medium">
                  <Award size={15} className="text-[#8e6318]" /> Aprovada no 9º Período
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <MapPin size={15} className="text-[#8e6318]" /> R. Astolfo Moreira, 305 A · Centro
                </span>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-[#14110e] transition-colors hover:text-[#8e6318]"
                >
                  <InstagramIcon size={15} className="text-[#8e6318]" /> {INSTAGRAM_HANDLE}
                </a>
              </motion.div>
            </motion.div>

            {/* Hero Visual Presentation - Dra. Michaely Silva Portrait */}
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
              <div className="relative aspect-[4/4.9] overflow-hidden rounded-2xl border-2 border-[#e8dfd2] bg-white shadow-xl ring-1 ring-[#deb753]/20">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dra. Michaely Pereira Silva — Advogada em João Pinheiro - MG"
                  fill
                  priority
                  unoptimized
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#14110e] via-[#14110e]/75 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-8 sm:left-8 sm:right-8">
                  <div>
                    <p className="font-serif text-2xl font-normal tracking-wide text-white">
                      Dra. Michaely Pereira Silva
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#deb753]">
                      Consumidor · Família · Inventários
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-[#deb753]/40 bg-[#14110e]/85 text-[#f7e5a9] backdrop-blur-sm">
                    <Scale size={18} />
                  </span>
                </div>
              </div>

              {/* Floating authority badge */}
              <div className="absolute -left-3 top-6 z-10 rounded-lg border border-[#deb753]/40 bg-white/95 px-4 py-2 text-[10px] font-bold tracking-[0.14em] text-[#8e6318] shadow-md backdrop-blur-md sm:-left-5">
                JOÃO PINHEIRO - MG · ATENDIMENTO ON-LINE EM TODO O BRASIL
              </div>

              {/* Floating Google 5.0 Star Rating */}
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="group absolute -bottom-5 -right-3 z-10 rounded-xl border border-[#deb753]/40 bg-white/95 p-3.5 shadow-md backdrop-blur-md transition-all hover:border-[#8e6318] hover:bg-white sm:-right-5"
              >
                <div className="flex items-center gap-2">
                  <GoogleIcon size={17} />
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-0.5 text-[#deb753]">
                      <Star size={13} className="fill-[#deb753] text-[#deb753]" />
                    </div>
                    <span className="font-serif text-base font-bold text-[#14110e]">
                      5,0
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#8e6318]">
                      / 5,0
                    </span>
                  </div>
                </div>
                <p className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-[#5c5042]">
                  17 Avaliações no Google
                </p>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner - Authority Metrics */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-[#e8dfd2] bg-white"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              [
                "5,0 ★ no Google",
                "nota máxima com 17 avaliações autênticas destacando empatia e clareza didática",
              ],
              [
                "Família & Inventários",
                "soluções céleres para divórcio, pensão, guarda e partilha de herança em cartório",
              ],
              [
                "Consumidor & Bancário",
                "combate a negativas indevidas, golpes digitais e abusos do sistema financeiro",
              ],
              [
                "João Pinheiro - MG",
                "sede no Centro da cidade e atendimento digital disponível para todo o Brasil",
              ],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-[#e8dfd2]"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-xl font-semibold text-[#8e6318] sm:text-2xl">
                  {value}
                </span>
                <span className="max-w-[165px] text-[11px] leading-5 text-[#5c5042]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre a Dra. Michaely Silva - Editorial Canvas */}
        <section
          id="sobre"
          className="scroll-mt-24 border-y border-[#e8dfd2] bg-[#faf7f2] py-20 text-[#14110e] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
            {/* Visual presentation - Infográfico "Quem sou eu" */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[480px]"
            >
              <div className="relative aspect-[9/14] overflow-hidden rounded-2xl border-2 border-[#e8dfd2] bg-white shadow-2xl">
                <Image
                  src={FOTO_INFOGRAFICO_SRC}
                  alt="Apresentação Quem Sou Eu — Dra. Michaely Pereira Silva"
                  fill
                  unoptimized
                  className="object-contain bg-white"
                />
              </div>

              {/* Authority badge card */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-[#deb753]/40 bg-white px-5 py-4 shadow-xl sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-[#8e6318]">
                  <Sparkles size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8e6318]">
                    Dedicação · Ética · Acolhimento
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-[#14110e]">
                  Dra. Michaely Pereira Silva
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-[#8e6318]">
                  Pós-Graduada: Bancário • Trabalho
                </p>
                <p className="mt-1 text-[11px] leading-4 text-[#5c5042]">
                  R. Astolfo Moreira, 305 A - Centro · João Pinheiro - MG
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-[#deb753]/40 sm:-left-7 sm:-top-7 sm:size-32" />
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
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#deb753]/40 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8e6318] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#8e6318]" />
                <span>QUEM É A DRA. MICHAELY PEREIRA SILVA</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-[#14110e] sm:text-4xl lg:text-[3.25rem]"
              >
                Uma advocacia que escuta, acolhe e resolve:{" "}
                <span className="italic text-[#8e6318]">
                  clareza que traz segurança e técnica firme para proteger seus direitos.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-[#4c433a]"
              >
                Com sede no Centro de{" "}
                <strong className="font-bold text-[#14110e]">
                  João Pinheiro - MG
                </strong>{" "}
                e atendimento on-line em todo o território nacional, a Dra. Michaely Pereira Silva representa uma advocacia dinâmica, moderna e verdadeiramente humana. Com 25 anos e aprovação na OAB conquistada com destaque precoce ainda durante o{" "}
                <strong className="font-bold text-[#14110e]">
                  9º período da faculdade
                </strong>
                , ela alia dedicação incansável e sólida base acadêmica.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-[#4c433a]"
              >
                Com pós-graduação nas áreas de{" "}
                <strong className="font-bold text-[#14110e]">
                  Direito Bancário e Direito do Trabalho
                </strong>
                , seu trabalho é amplamente reconhecido pela clareza didática. Em vez de termos incompreensíveis, ela explica cada alternativa de forma simples e acolhedora, garantindo que você compreenda seus direitos e participe com confiança de cada decisão sobre seu patrimônio e sua família.
              </motion.p>

              {/* Client Quote Card from real reviews */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-xl border border-[#e8dfd2] bg-white p-5 shadow-xs"
              >
                <blockquote className="font-serif text-sm italic leading-relaxed text-[#14110e]">
                  &ldquo;Atendimento excelente, a Dra demonstra muito conhecimento é empática, soube esclarecer minhas dúvidas de forma fácil pra eu entender. Adorei o atendimento super recomendo.&rdquo;
                </blockquote>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-[#8e6318]">
                  — Soane Ferreira · Avaliação Verificada no Google Meu Negócio (5,0 ★)
                </p>
              </motion.div>

              {/* Personality & Profile Cards from the creative */}
              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-2 gap-3 text-xs sm:grid-cols-3"
              >
                <div className="rounded-lg border border-[#e8dfd2] bg-white p-3 shadow-xs">
                  <p className="font-bold text-[#14110e]">25 Anos</p>
                  <p className="mt-0.5 text-[11px] text-[#6b5d50]">
                    Dinamismo, agilidade & dedicação integral
                  </p>
                </div>
                <div className="rounded-lg border border-[#e8dfd2] bg-white p-3 shadow-xs">
                  <p className="font-bold text-[#14110e]">Aprovada no 9º Período</p>
                  <p className="mt-0.5 text-[11px] text-[#6b5d50]">
                    Destaque acadêmico & rigor técnico precoce
                  </p>
                </div>
                <div className="rounded-lg border border-[#e8dfd2] bg-white p-3 shadow-xs col-span-2 sm:col-span-1">
                  <p className="font-bold text-[#14110e]">Pós-Graduada</p>
                  <p className="mt-0.5 text-[11px] text-[#6b5d50]">
                    Direito Bancário • Direito do Trabalho
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-1 gap-2.5 text-xs font-semibold text-[#14110e] sm:grid-cols-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#8e6318]" />
                  <span>Sede na R. Astolfo Moreira, 305 A - Centro · João Pinheiro</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#8e6318]" />
                  <span>Nota máxima 5,0 ★ no Google com 17 avaliações</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#8e6318]" />
                  <span>Contato direto pelo WhatsApp, sem robôs ou intermediários</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#8e6318]" />
                  <span>Atendimento presencial em Minas Gerais e digital para o Brasil</span>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Michaely! Gostaria de agendar uma consulta para conversar diretamente sobre meu caso."
                  )}
                  target="_blank"
                  size="md"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar com a Dra. Michaely
                </GlowingButton>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#14110e] transition-colors hover:text-[#8e6318]"
                >
                  <Phone size={15} /> {PHONE_DISPLAY}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pilares de Atuação / Especialidades */}
        <section
          id="atuacao"
          className="scroll-mt-24 border-t border-[#e8dfd2] bg-[#f8f5ee] py-20 sm:py-28 lg:py-32"
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
                description="Atuação jurídica minuciosa, preventiva e contenciosa nas principais áreas do Direito, com foco em resolver demandas com celeridade e segurança."
              >
                Soluções jurídicas estratégicas em{" "}
                <span className="italic text-[#8e6318]">
                  João Pinheiro, Noroeste de Minas e em todo o Brasil.
                </span>
              </Heading>
              <p className="max-w-[270px] pb-1 text-xs leading-6 text-[#5c5042]">
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
                    className="group flex min-h-[350px] flex-col rounded-xl border border-[#e8dfd2] bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#deb753] hover:shadow-lg sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-lg border border-[#deb753]/30 bg-[#faf7f2] text-[#8e6318] shadow-xs transition-colors group-hover:bg-[#8e6318] group-hover:text-white">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <span className="font-serif text-2xl text-[#deb753]/60">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-md border border-[#deb753]/30 bg-[#f4efe6] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#5a3c08] shadow-xs">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.45rem] leading-tight text-[#14110e]">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-6 text-[#5c5042]">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-[#8e6318] hover:text-[#14110e]"
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

        {/* Por Que Escolher a Dra. Michaely Silva - Diferenciais */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-t border-[#e8dfd2] bg-[#faf7f2] py-20 text-[#14110e] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                light
                eyebrow="NOSSOS PILARES DE EXCELÊNCIA"
                description="Seu patrimônio, sua família e seus direitos são preciosos demais para ficarem em mãos desatentas ou presos em burocracias sem resposta."
              >
                Por que confiar seu caso à{" "}
                <span className="italic text-[#8e6318]">
                  Dra. Michaely Pereira Silva?
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Michaely! Gostaria de uma avaliação para a minha situação jurídica."
                )}
                target="_blank"
                size="md"
                variant="gold"
                className="rounded-lg shadow-sm"
              >
                <WhatsAppIcon size={16} /> Falar no WhatsApp
              </GlowingButton>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {/* Card 1: Comunicação Clara e Empática */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group flex flex-col justify-between rounded-xl border border-[#e8dfd2] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#deb753] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#deb753]/30 bg-[#f4efe6] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#322003]">
                      <HeartHandshake size={14} /> Atendimento Humanizado & Empático
                    </span>
                    <span className="text-xs font-semibold text-[#8e6318]">
                      Sem Juridiquês
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#14110e] sm:text-[1.75rem]">
                    Você Entende Cada Passo do Seu Processo com Tranquilidade
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#4c433a]">
                    Muitas pessoas chegam ao advogado com medo da complexidade das leis. Aqui, a Dra. Michaely explica cada detalhe com paciência e didática, garantindo que você tenha plena ciência dos seus direitos e saiba exatamente o que está acontecendo.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-[#14110e]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8e6318]" />
                      <span>Explicação clara e acessível em linguagem que qualquer pessoa compreende</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8e6318]" />
                      <span>Empatia com as dores e ansiedades em momentos delicados da vida</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8e6318]" />
                      <span>Transparência total sobre chances, riscos reais e prazos prováveis</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#e8dfd2] pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Michaely! Gostaria de tirar dúvidas sobre o meu caso em uma conversa sem burocracia."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#deb753]/40 bg-[#faf7f2] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#14110e] transition-all hover:border-[#8e6318] hover:bg-[#14110e] hover:text-[#f7e5a9]"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Conversar no WhatsApp com a Dra. Michaely
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>

              {/* Card 2: Agilidade e Soluções Extrajudiciais */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="group flex flex-col justify-between rounded-xl border border-[#e8dfd2] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#deb753] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#deb753]/30 bg-[#f4efe6] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#322003]">
                      <Users2 size={14} /> Foco em Resultados & Celeridade
                    </span>
                    <span className="text-xs font-semibold text-[#8e6318]">
                      Cartório & Acordos Rápidos
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#14110e] sm:text-[1.75rem]">
                    Prioridade em Soluções Rápidas em Cartório Sem Demora Judicial
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#4c433a]">
                    Sabemos que tempo é dinheiro e desgaste emocional. Sempre que os requisitos legais estão presentes, priorizamos inventários, divórcios e dissoluções de união estável em cartório, resolvendo partilhas em semanas com economia e paz.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-[#14110e]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8e6318]" />
                      <span>Inventários extrajudiciais céleres sem arrastar processos por anos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8e6318]" />
                      <span>Acompanhamento direto pelo WhatsApp com retornos ágeis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8e6318]" />
                      <span>Planejamento financeiro e tributário para reduzir custos com ITCD e taxas</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#e8dfd2] pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Michaely! Gostaria de consultar sobre a possibilidade de um inventário ou divórcio rápido em cartório."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#deb753]/40 bg-[#faf7f2] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#14110e] transition-all hover:border-[#8e6318] hover:bg-[#14110e] hover:text-[#f7e5a9]"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Consultar Solução em Cartório no WhatsApp
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Método de Trabalho em 3 Passos */}
        <section className="relative overflow-hidden border-t border-[#e8dfd2] bg-[#faf7f2] py-20 text-[#14110e] sm:py-24 lg:py-28">
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-[#deb753]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-[#deb753]/10 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                light
                eyebrow="COMO ATUAMOS NO SEU CASO"
                description="Um método transparente, técnico e humanizado para analisar sua situação e aplicar a solução jurídica mais rápida e segura."
              >
                Três etapas claras para{" "}
                <span className="italic text-[#8e6318]">
                  proteger seu patrimônio e defender seus direitos.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-[#e8dfd2] bg-white p-6 font-serif text-base italic leading-7 text-[#14110e] shadow-xs">
                &ldquo;Cada caso envolve vidas, famílias e expectativas reais. Meu compromisso é garantir que você se sinta acolhido e seguro, sabendo que sua causa está sendo cuidada com o máximo rigor técnico e atenção pessoal.&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-[#8e6318]">
                  — Dra. Michaely Pereira Silva · Advogada
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
                  "Escuta Atenta & Diagnóstico Documental",
                  "Conversa inicial presencial no escritório em João Pinheiro ou via WhatsApp para compreender a fundo seu relato, recolher os documentos necessários e avaliar detalhadamente os fatos.",
                ],
                [
                  "02",
                  "Definição da Estratégia Mais Rápida e Econômica",
                  "Análise minuciosa para verificar se a causa pode ser resolvida de maneira extrajudicial (acordo ou cartório) com menor custo e tempo, ou se é indispensável uma ação judicial com pedido liminar.",
                ],
                [
                  "03",
                  "Acompanhamento Firme & Feedback Constante",
                  "Protocolo técnico com forte fundamentação jurisprudencial, diligência constante perante os juízos e cartórios e retorno contínuo para mantê-lo sempre informado sobre cada andamento.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-semibold text-[#8e6318]">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-[#14110e]">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-[#4c433a]">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Avaliações / Depoimentos Reais no Google Meu Negócio */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 border-t border-[#deb753]/30 bg-[#f4efe6] py-20 text-[#14110e] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                light
                eyebrow="PROVA SOCIAL VERIFICADA · GOOGLE MEU NEGÓCIO"
                description="Veja avaliações autênticas e espontâneas deixadas por clientes no Google sobre o atendimento e a dedicação da Dra. Michaely Pereira Silva em João Pinheiro - MG."
              >
                Avaliada com nota máxima 5,0 ★ com{" "}
                <span className="italic text-[#8e6318]">
                  17 avaliações no Google pela dedicação, empatia e excelência profissional.
                </span>
              </Heading>

              {/* Verified Google Badge Card */}
              <div className="flex flex-col gap-3 rounded-xl border border-[#e8dfd2] bg-white p-5 shadow-xs sm:flex-row sm:items-center md:min-w-[340px]">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-lg border border-[#deb753]/30 bg-[#faf7f2] shadow-xs">
                  <GoogleIcon size={30} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-3xl font-bold leading-none text-[#14110e]">
                      5,0
                    </span>
                    <div className="flex gap-0.5 text-[#deb753]">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-[#deb753] text-[#deb753]"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#4c433a]">
                    Michaely Pereira Silva — Advogada
                  </p>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-[#8e6318] transition-colors hover:text-[#14110e]"
                  >
                    17 avaliações no Google <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Client Reviews Grid */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clientReviews.map((review) => (
                <article
                  key={review.name}
                  className="group relative flex flex-col justify-between rounded-xl border border-[#e8dfd2] bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#deb753] hover:shadow-md sm:p-8"
                >
                  <div>
                    {/* Header: Stars + Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-1 text-[#deb753]">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-[#deb753] text-[#deb753]"
                          />
                        ))}
                      </div>
                      <span className="rounded-md border border-[#deb753]/30 bg-[#faf7f2] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#8e6318] shadow-xs">
                        {review.badge}
                      </span>
                    </div>

                    {/* Review content */}
                    <p className="mt-5 text-[14px] italic leading-relaxed text-[#14110e]">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  {/* Reviewer info */}
                  <div className="mt-6 flex items-center gap-3 border-t border-[#e8dfd2] pt-4">
                    <div className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#deb753]/30 bg-[#faf7f2] font-serif text-sm font-semibold text-[#8e6318] shadow-xs">
                      {review.name.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-serif text-base font-semibold text-[#14110e]">
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
                  "Advogada em João Pinheiro - MG",
                  "Atendimento Digital para Todo o Brasil",
                  "Nota 5,0 ★ no Google (17 avaliações)",
                  "Direito do Consumidor & SPC/Serasa",
                  "Divórcio, Guarda & Pensão Alimentícia",
                  "Inventário Judicial & Extrajudicial em Cartório",
                  "Pós-Graduação: Bancário • Trabalho",
                  "Aprovada no 9º Período com Excelência",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#e8dfd2] bg-white px-3.5 py-1.5 text-[11px] font-medium text-[#14110e] shadow-xs"
                  >
                    <CheckCircle2 size={13} className="text-[#8e6318]" />
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#8e6318] transition-colors hover:text-[#14110e]"
              >
                Ver Todas as Avaliações no Google{" "}
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Contato & Localização da Sede em João Pinheiro - MG */}
        <section
          id="contato"
          className="scroll-mt-24 border-t border-[#deb753]/30 bg-[#faf7f2] py-20 text-[#14110e] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                light
                eyebrow="CONTATO & ATENDIMENTO EM JOÃO PINHEIRO"
                description="Agende uma consulta presencial no escritório no Centro de João Pinheiro ou inicie seu atendimento imediatamente pelo WhatsApp para relatar seu caso com sigilo e rapidez."
              >
                Estamos prontos para{" "}
                <span className="italic text-[#8e6318]">
                  escutar sua situação e proteger seus direitos.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Michaely! Gostaria de agendar um atendimento para análise jurídica do meu caso."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} /> Iniciar Conversa no WhatsApp
                </GlowingButton>
                <p className="text-[11px] leading-5 text-[#4c433a]">
                  Telefone e WhatsApp direto:{" "}
                  <strong className="text-[#14110e]">{PHONE_DISPLAY}</strong>
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-[#4c433a]">
                <div className="flex items-start gap-3">
                  <Clock
                    size={16}
                    className="mt-0.5 shrink-0 text-[#8e6318]"
                  />
                  <div>
                    <p className="font-semibold text-[#14110e]">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-[#14110e]">
                      Segunda a Sexta-feira das 09:00 às 18:00
                    </p>
                    <p className="text-[11px] text-[#786b5e]">
                      Atendimento presencial no Centro de João Pinheiro - MG e atendimento digital para clientes em todo o Brasil
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#8e6318]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-medium text-[#14110e] transition-colors hover:text-[#8e6318]"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#8e6318]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#8e6318] text-[#14110e]"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#8e6318]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="transition-colors hover:text-[#8e6318] text-[#14110e]"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#8e6318]"
                  />
                  <div>
                    <span className="text-[#14110e]">{ADDRESS_TEXT}</span>
                    <br />
                    <a
                      href={GOOGLE_SEARCH_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex items-center gap-1 font-semibold text-[#8e6318] hover:underline"
                    >
                      Ver no Google Maps <ArrowUpRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Office & Profile Card */}
            <div className="relative overflow-hidden rounded-xl border border-[#e8dfd2] bg-white p-7 shadow-sm sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#8e6318] to-[#deb753]" />

              <div className="flex items-center gap-4">
                <div className="relative size-[64px] shrink-0 overflow-hidden rounded-full border-2 border-[#deb753]/60 bg-[#120f0d] shadow-sm sm:size-[76px]">
                  <Image
                    src={LOGO_SEAL_SRC}
                    alt="Selo Michaely Silva Advogada"
                    fill
                    sizes="76px"
                    className="object-contain p-1"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8e6318]">
                    Sede do Escritório
                  </p>
                  <p className="mt-0.5 font-cinzel text-xl font-bold text-[#14110e] sm:text-2xl">
                    MICHAELY SILVA
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8e6318]">
                    Advogada
                  </p>
                </div>
              </div>

              <address className="mt-7 max-w-md text-[14px] not-italic leading-7 text-[#4c433a]">
                <strong className="font-semibold text-[#14110e]">
                  Dra. Michaely Pereira Silva
                </strong>
                <br />
                Advogada Civil em João Pinheiro - MG
                <br />
                Direito do Consumidor · Família · Inventários
                <br />
                Pós-Graduação: Direito Bancário • Direito do Trabalho
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-lg border border-[#e8dfd2] bg-[#faf7f2] p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#8e6318]">
                  Atendimento & Horários
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-[#4c433a]">
                  <span>Segunda a Sexta</span>
                  <span className="text-right font-semibold text-[#14110e]">
                    09:00 às 18:00
                  </span>
                  <span>Atendimento Presencial</span>
                  <span className="text-right font-medium text-[#8e6318]">
                    João Pinheiro - MG
                  </span>
                  <span>Endereço</span>
                  <span className="text-right text-[#14110e]">R. Astolfo Moreira, 305 A</span>
                  <span>Avaliações Google</span>
                  <span className="text-right font-semibold text-[#8e6318]">5,0 ★ (17 avaliações)</span>
                  <span>Atendimento Digital</span>
                  <span className="text-right text-[#14110e]">Todo o Brasil</span>
                </div>
              </div>

              <div className="my-7 h-px bg-[#e8dfd2]" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-[#786b5e]">
                  Atendimento humanizado, ético e com total sigilo profissional
                </p>
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Michaely! Gostaria de agendar um atendimento no escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#deb753]/40 bg-[#f4efe6] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#14110e] transition-colors hover:border-[#8e6318] hover:bg-[#14110e] hover:text-[#f7e5a9]"
                >
                  <WhatsAppIcon size={14} /> Falar no WhatsApp <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip */}
        <section className="border-t border-[#deb753]/30 bg-gradient-to-r from-[#f4efe6] via-[#faf7f2] to-[#f4efe6] px-5 py-14 text-[#14110e] shadow-xs sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8e6318]">
                <Sparkles size={13} /> MICHAELY SILVA ADVOGADA · JOÃO PINHEIRO & MINAS GERAIS
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-[#14110e] sm:text-4xl">
                Precisa de uma advogada que realmente ouve você e defende seus interesses com firmeza e clareza?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dra. Michaely! Gostaria de uma avaliação para a minha situação jurídica."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-lg bg-gradient-to-r from-[#8e6318] via-[#c59a3f] to-[#8e6318] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-md transition-all hover:-translate-y-0.5 hover:brightness-105 hover:shadow-lg"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp{" "}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* Footer - Elegant Light Luxury */}
        <footer className="border-t border-[#e8dfd2] bg-[#f4efe6] px-5 py-14 text-[#14110e] sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <a
                href="#inicio"
                aria-label="Michaely Silva Advogada"
                className="inline-block transition-transform hover:scale-[1.01]"
              >
                <div className="relative h-14 w-52 sm:h-16 sm:w-60">
                  <Image
                    src={LOGO_FULL_SRC}
                    alt="Michaely Silva Advogada"
                    fill
                    sizes="240px"
                    className="object-contain object-left"
                  />
                </div>
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-[#5c5042]">
                ⚖️ Advocacia de excelência com atendimento humanizado, ética e rigor técnico. Atuação focada em Direito do Consumidor, Direito de Família, Inventários, Direito Bancário e do Trabalho em João Pinheiro - MG e em todo o Brasil.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-[#8e6318]">
                Dra. Michaely Pereira Silva · Advogada
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8e6318]">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-[#5c5042]">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  Dra. Michaely Silva
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
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8e6318]">
                Contato & Atendimento
              </h2>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-[#5c5042]">
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Michaely! Gostaria de falar com o escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 font-medium text-[#14110e]"
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
                  href={GOOGLE_SEARCH_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-start gap-2"
                >
                  <MapPin size={15} className="mt-0.5 shrink-0" />
                  <span>{ADDRESS_TEXT}</span>
                </a>
                <p className="inline-flex items-center gap-2 pt-1 text-[11px] text-[#8e6318]">
                  <Clock size={14} className="shrink-0" /> Seg a Sex: 09:00 às 18:00
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-[#e8dfd2] pt-6 text-[10px] text-stone-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} MICHAELY PEREIRA SILVA ADVOCACIA. Todos os direitos reservados.
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
              "Olá, Dra. Michaely! Gostaria de consultar sobre meu caso e tirar dúvidas pelo WhatsApp."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Dra. Michaely Silva"
            className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          >
            <WhatsAppIcon size={28} />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-[#14110e] border border-[#deb753]/30 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg transition-opacity group-hover:block">
              Falar com a Dra. Michaely Silva
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
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-xl border border-[#e8dfd2] bg-white p-7 shadow-2xl sm:max-w-xl sm:rounded-xl sm:p-10 text-[#14110e]"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-[#e8dfd2] bg-[#faf7f2] text-[#14110e] transition-colors hover:border-[#deb753] hover:text-[#8e6318]"
                >
                  <X size={18} />
                </button>

                <p className="eyebrow-light">ÁREA DE ATUAÇÃO</p>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-serif text-3xl leading-tight text-[#14110e] sm:text-4xl"
                >
                  {activeArea.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-[#4c433a]">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-[#e8dfd2] pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8e6318]">
                    Demandas e Pedidos Atendidos pelo Escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-[#2b241c]"
                      >
                        <span className="size-2 shrink-0 rounded-full bg-[#8e6318]" />
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
                    className="px-5 py-3 text-xs font-semibold text-stone-500 transition-colors hover:text-[#14110e]"
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
