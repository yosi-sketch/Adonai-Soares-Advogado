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

const WHATSAPP_NUMBER = "5537998412455";
const PHONE_DISPLAY = "(37) 99841-2455";
const EMAIL_CONTACT = "contato@tomazhenrique.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/advogado.tomaz/";
const INSTAGRAM_HANDLE = "@advogado.tomaz";

const ADDRESS_TEXT =
  "Rua Godofredo Gonçalves, 159, (Próximo à Clinaus) - Centro, Itaúna - MG, 35680-047, Brasil";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Tomaz+Henrique+Advogado+Especializado+Itauna";

const LOGO_SEAL_SRC = "/logo-seal.png";
const FOTO_HERO_SRC = "/tomaz-henrique-hero.jpg";
const FOTO_SOBRE_SRC = "/tomaz-henrique-apresentacao.png";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dr. Tomaz Henrique! Gostaria de consultar sobre meus direitos e agendar um atendimento no escritório.";
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
    id: "direito-do-trabalho-itauna",
    title: "Direito Trabalhista & Defesa do Trabalhador",
    icon: Briefcase,
    tag: "Rescisão · Horas Extras · Insalubridade · Acidentes",
    summary:
      "Atuação combativa em reclamatórias trabalhistas para assegurar o pagamento integral de todas as verbas rescisórias, adicionais e direitos sonegados pelo empregador.",
    details:
      "O Dr. Tomaz Henrique é referência em Itaúna na defesa firme dos direitos dos trabalhadores. Atuamos com minúcia técnica no cálculo de horas extras, adicionais de insalubridade e periculosidade, indenizações por acidente de trabalho ou doença ocupacional, assédio moral e pedidos de rescisão indireta quando o empregador descumpre a lei.",
    topics: [
      "Cobrança integral de verbas rescisórias e multas dos artigos 467 e 477 da CLT",
      "Rescisão Indireta do Contrato de Trabalho por falta grave ou atraso de salários",
      "Cálculo e cobrança de Horas Extras, intervalo intrajornada e adicional noturno",
      "Adicionais de Insalubridade e Periculosidade para funções de risco ou agentes nocivos",
      "Indenização por Acidente de Trabalho, estabilidade provisória e pensão vitalícia",
      "Reconhecimento de vínculo empregatício sem carteira assinada e liberação de FGTS",
    ],
    whatsAppText:
      "Olá, Dr. Tomaz Henrique! Gostaria de consultar sobre meus direitos trabalhistas.",
  },
  {
    id: "direito-previdenciario-inss-itauna",
    title: "Aposentadorias do INSS & Planejamento",
    icon: Landmark,
    tag: "Tempo de Contribuição · Idade · Especial · Planejamento",
    summary:
      "Planejamento previdenciário e requerimento estratégico de aposentadorias para garantir o benefício mais vantajoso, sem atrasos ou prejuízos financeiros.",
    details:
      "O planejamento previdenciário analisa a fundo todo o histórico de contribuições no CNIS, averbando períodos trabalhados sem registro, tempo de serviço rural ou em condições insalubres/especiais. O Dr. Tomaz Henrique atua na via administrativa e judicial para buscar a regra de transição mais favorável e o valor máximo da sua aposentadoria.",
    topics: [
      "Aposentadoria por Idade Urbana e Rural com cômputo de períodos de atividade no campo",
      "Aposentadoria por Tempo de Contribuição e aplicação da Regra de Transição mais benéfica",
      "Aposentadoria Especial para trabalhadores expostos a agentes nocivos e insalubres (PPP)",
      "Planejamento Previdenciário com cálculo prévio do melhor momento para requerer o benefício",
      "Reversão de negativas do INSS e cobrança das parcelas atrasadas retroativas",
      "Acerto de vínculos e pendências no extrato previdenciário (CNIS)",
    ],
    whatsAppText:
      "Olá, Dr. Tomaz Henrique! Gostaria de uma análise para planejar ou requerer minha aposentadoria no INSS.",
  },
  {
    id: "beneficios-incapacidade-auxilio-doenca",
    title: "Auxílio-Doença & Benefícios por Incapacidade",
    icon: Scale,
    tag: "Auxílio por Incapacidade · Invalidez · Auxílio-Acidente",
    summary:
      "Defesa rigorosa perante o INSS e na Justiça Federal para concessão e restabelecimento de auxílio-doença e aposentadoria por incapacidade permanente.",
    details:
      "Diante da recusa injusta da perícia médica do INSS, realizamos um levantamento probatório criterioso com laudos, exames e atestados médicos atualizados. Buscamos a liminar judicial para implantação imediata do benefício por incapacidade temporária (auxílio-doença) ou a conversão em aposentadoria por invalidez, além do recebimento dos retroativos.",
    topics: [
      "Auxílio por Incapacidade Temporária (antigo Auxílio-Doença) negado ou cancelado indevidamente",
      "Aposentadoria por Incapacidade Permanente (Aposentadoria por Invalidez)",
      "Auxílio-Acidente mensal para trabalhadores que ficaram com sequelas redutoras da capacidade",
      "Acompanhamento pericial e formulação de quesitos técnicos especializados",
      "Ações judiciais contra altas médicas programadas do INSS sem melhora clínica",
      "Garantia de recebimento dos valores retroativos desde a data do primeiro requerimento",
    ],
    whatsAppText:
      "Olá, Dr. Tomaz Henrique! Tive meu benefício por incapacidade/auxílio-doença negado pelo INSS e preciso de ajuda.",
  },
  {
    id: "bpc-loas-idosos-deficientes",
    title: "BPC / LOAS para Idosos e Pessoas com Deficiência",
    icon: HeartHandshake,
    tag: "1 Salário Mínimo Mensal · Sem Contribuição · Reversão de Negativa",
    summary:
      "Concessão ágil de 1 salário mínimo mensal para idosos com 65 anos ou mais e pessoas com deficiência em situação de vulnerabilidade social.",
    details:
      "O Benefício de Prestação Continuada (BPC/LOAS) é uma garantia constitucional fundamental. Se o INSS indeferiu o seu pedido alegando renda familiar acima do limite ou não reconheceu os impedimentos de longo prazo, ingressamos com ação judicial demonstrando gastos reais com medicamentos, fraldas, exames e alimentação especial para reverter a negativa.",
    topics: [
      "BPC/LOAS para idosos a partir de 65 anos sem renda ou contribuição ao INSS",
      "BPC/LOAS para pessoas com deficiência física, intelectual, motora ou sensorial",
      "Benefício para crianças e jovens com Transtorno do Espectro Autista (TEA)",
      "Abatimento comprovado de gastos médicos essenciais da renda familiar per capita",
      "Ação judicial célere para liberação do benefício e quitação de parcelas retroativas",
      "Orientação completa e humanizada para a família em todas as fases do processo",
    ],
    whatsAppText:
      "Olá, Dr. Tomaz Henrique! Gostaria de consultar sobre o benefício BPC/LOAS.",
  },
  {
    id: "pensao-por-morte-salario-maternidade",
    title: "Pensão por Morte & Benefícios aos Dependentes",
    icon: Sparkles,
    tag: "Pensão por Morte · Salário-Maternidade · Dependência Econômica",
    summary:
      "Amparo seguro e humanizado para dependentes obterem a pensão por morte e trabalhadoras conquistarem o salário-maternidade sem burocracias.",
    details:
      "Em momentos delicados como o falecimento do provedor da família ou a chegada de um filho, a segurança financeira é urgente. Auxiliamos na comprovação de união estável, dependência de filhos ou pais, bem como na liberação de até 4 meses de salário-maternidade para autônomas, MEIs, desempregadas ou trabalhadoras rurais.",
    topics: [
      "Pensão por Morte para cônjuge, companheiro(a) com prova segura de união estável",
      "Pensão por Morte para filhos menores ou dependentes inválidos",
      "Salário-Maternidade para trabalhadoras desempregadas no período de graça",
      "Salário-Maternidade para MEIs, contribuintes facultativas e seguradas especiais rurais",
      "Revisão de valores de benefícios concedidos com erro de cálculo no INSS",
      "Recebimento de valores atrasados acumulados desde o falecimento ou nascimento",
    ],
    whatsAppText:
      "Olá, Dr. Tomaz Henrique! Gostaria de consultar sobre Pensão por Morte ou Salário-Maternidade.",
  },
  {
    id: "direito-do-consumidor-contratos-civel",
    title: "Direito do Consumidor, Cível & Contratos",
    icon: FileText,
    tag: "Indenizações · Negativação Indevida · Contratos · Defesa Cível",
    summary:
      "Defesa incisiva contra abusos comerciais, negativações indevidas em órgãos de proteção ao crédito e assessoria em contratos civis e comerciais.",
    details:
      "Atuamos na reparação por danos morais e materiais decorrentes de cobranças abusivas, negativações ilegais no SPC e Serasa, golpes bancários e fraudes no crédito consignado. Também elaboramos e revisamos contratos para assegurar blindagem patrimonial e segurança jurídica aos nossos clientes.",
    topics: [
      "Indenização por negativação indevida no SPC/Serasa e exclusão imediata do nome",
      "Ações contra fraudes em empréstimos consignados, cartões e golpes bancários",
      "Elaboração, análise e revisão técnica de contratos civis, locatícios e comerciais",
      "Defesa do consumidor em vícios de produtos, falha de serviços e cláusulas abusivas",
      "Cobrança extrajudicial e judicial de títulos, notas promissórias e créditos devidos",
      "Soluções amigáveis e mediação de conflitos para evitar litígios desnecessários",
    ],
    whatsAppText:
      "Olá, Dr. Tomaz Henrique! Gostaria de assessoria jurídica na área Cível / Consumidor / Contratos.",
  },
];

const clientReviews = [
  {
    name: "Tarsis Lucas",
    reviewsCount: "1 avaliação no Google",
    date: "Google Meu Negócio",
    badge: "atendimento qualificado",
    content:
      "Ótimo atendimento profissional de qualidade e bem qualificado para prestar o atendimento necessário.",
  },
  {
    name: "Luciano R Miranda",
    reviewsCount: "2 avaliações no Google",
    date: "Google Meu Negócio",
    badge: "excelência & acolhimento",
    content:
      "Só elogios, atendimento excelente sem contar aquela cerveja gelada enquanto espera sua vez. Recomendo muito!",
  },
  {
    name: "Braulio Silva",
    reviewsCount: "2 avaliações no Google",
    date: "Google Meu Negócio",
    badge: "atenção aos detalhes",
    content:
      "Um ótimo profissional. Atencioso em todos os detalhes, super indico.",
  },
  {
    name: "Alexandre Fernandes",
    reviewsCount: "7 avaliações no Google",
    date: "Google Meu Negócio",
    badge: "ética & empatia",
    content:
      "Excelente advogado, comportamento ético e empatia com seus clientes. Fui bem atendido e o problema solucionado.",
  },
  {
    name: "Nilmar Machado",
    reviewsCount: "8 avaliações no Google",
    date: "Google Meu Negócio",
    badge: "informação clara",
    content:
      "Ótimo profissional, atencioso aos detalhes e muito bom em repassar as informações.",
  },
  {
    name: "Jéssica Alves",
    reviewsCount: "4 avaliações no Google",
    date: "Google Meu Negócio",
    badge: "melhor da cidade",
    content:
      "Advogado extremamente profissional e capacitado. Melhor da cidade trabalhista e previdenciario!!",
  },
  {
    name: "Tainara Cristina",
    reviewsCount: "1 avaliação no Google",
    date: "Google Meu Negócio",
    badge: "o melhor de itaúna",
    content:
      "Um excelente advogado, está de parabéns 👏👏👏👏👏 na minha opinião o melhor de Itaúna 😍",
  },
  {
    name: "Rafael Silva",
    reviewsCount: "4 avaliações no Google",
    date: "Google Meu Negócio",
    badge: "competente e honesto",
    content:
      "Advogado muito competente e honesto! Transmite muita segurança durante todo o processo.",
  },
  {
    name: "Pedro Henrique",
    reviewsCount: "2 avaliações no Google",
    date: "Google Meu Negócio",
    badge: "super indico",
    content:
      "Ótimo profissional! Excelente advogado. Super indico!",
  },
  {
    name: "Thales Henrique",
    reviewsCount: "3 avaliações no Google",
    date: "Google Meu Negócio",
    badge: "advogado excepcional",
    content:
      "Advogado excepcional, atendimento excelente !",
  },
  {
    name: "Jairo Henrique",
    reviewsCount: "1 avaliação no Google",
    date: "Google Meu Negócio",
    badge: "muito competente",
    content:
      "Excelente profissional, muito competente!",
  },
  {
    name: "Rafael Victor",
    reviewsCount: "1 avaliação no Google",
    date: "Google Meu Negócio",
    badge: "melhor da região",
    content:
      "O melhor de Itaúna e região!",
  },
  {
    name: "Paulo Tadeu",
    reviewsCount: "1 avaliação no Google",
    date: "Google Meu Negócio",
    badge: "extremamente qualificado",
    content:
      "Profissional extremamente qualificado! Recomendo!!!",
  },
  {
    name: "Tainan Duarte",
    reviewsCount: "1 avaliação no Google",
    date: "Google Meu Negócio",
    badge: "excelente advogado",
    content:
      "Super indico, excelente advogado.",
  },
  {
    name: "Ana Paula Macieira",
    reviewsCount: "Local Guide · 3 avaliações · 37 fotos",
    date: "Google Meu Negócio",
    badge: "recomendo",
    content:
      "Excelente Advogado!! Recomendo!!",
  },
  {
    name: "Antunes Paiva",
    reviewsCount: "Local Guide · 14 avaliações",
    date: "Google Meu Negócio",
    badge: "grande profissional",
    content:
      "Grande profissional! Dedicado e comprometido com seus clientes.",
  },
  {
    name: "Daiane Miranda",
    reviewsCount: "2 avaliações no Google",
    date: "Google Meu Negócio",
    badge: "excelente profissional",
    content:
      "Excelente profissional.",
  },
  {
    name: "Jonatas Rabelo",
    reviewsCount: "2 avaliações no Google",
    date: "Google Meu Negócio",
    badge: "competência comprovada",
    content:
      "Excelente profissional.",
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
            ? "mt-4 font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-[#1c130b] sm:text-4xl lg:text-[3.25rem]"
            : "mt-4 font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-white sm:text-4xl lg:text-[3.25rem]"
        }
      >
        {children}
      </h2>
      {description && (
        <p
          className={
            light
              ? "mt-4 text-[15px] leading-7 text-[#4f3d2f]"
              : "mt-4 text-[15px] leading-7 text-[#dfd6cb]"
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
      <main className="overflow-hidden bg-[#090706] text-[#fcfbfa] selection:bg-[#c97f48] selection:text-[#090706]">
        {/* Navigation Bar - Refined Velvet Bronze Obsidian Canvas */}
        <header className="sticky top-0 z-40 border-b border-[#c97f48]/20 bg-[#090706]/95 backdrop-blur-xl">
          <div className="mx-auto flex h-[104px] max-w-7xl items-center justify-between gap-6 px-5 sm:h-[116px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Tomaz Henrique — Escritório de Advocacia"
              onClick={closeMenu}
              className="flex items-center gap-4 transition-opacity hover:opacity-90"
            >
              <div className="relative size-[68px] shrink-0 overflow-hidden rounded-full border-2 border-[#c97f48]/60 bg-white shadow-md sm:size-[80px]">
                <Image
                  src={LOGO_SEAL_SRC}
                  alt="Selo Oficial Tomaz Henrique Escritório de Advocacia"
                  fill
                  priority
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-xl font-bold tracking-wider text-white sm:text-2xl">
                  TOMAZ HENRIQUE
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d48c52] sm:text-[13px]">
                  Escritório de Advocacia
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
                Dr. Tomaz Henrique
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
                aria-label="Instagram do Dr. Tomaz Henrique"
                className="grid size-10 place-items-center rounded-lg border border-[#c97f48]/30 bg-[#120e0b] text-[#fae0c8] transition-all hover:border-[#e5a26c] hover:bg-[#1f1610] hover:text-white"
                title={`Instagram ${INSTAGRAM_HANDLE}`}
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                aria-label="Ligar para Tomaz Henrique Advogado"
                className="grid size-10 place-items-center rounded-lg border border-[#c97f48]/30 bg-[#120e0b] text-[#fae0c8] transition-all hover:border-[#e5a26c] hover:bg-[#1f1610] hover:text-white"
                title={`Ligar: ${PHONE_DISPLAY}`}
              >
                <Phone size={16} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Dr. Tomaz Henrique"
                className="grid size-10 place-items-center rounded-lg border border-[#c97f48]/30 bg-[#120e0b] text-[#fae0c8] transition-all hover:border-[#e5a26c] hover:bg-[#1f1610] hover:text-white"
                title="Atendimento no WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dr. Tomaz Henrique! Gostaria de agendar uma consulta com seu escritório."
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
              className="grid size-11 place-items-center rounded-lg border border-[#c97f48]/30 bg-[#120e0b] text-[#fae0c8] lg:hidden"
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
                className="overflow-hidden border-t border-[#c97f48]/20 bg-[#090706] px-6 lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["Dr. Tomaz Henrique", "#sobre"],
                    ["Áreas de Atuação", "#atuacao"],
                    ["Por Que Escolher", "#diferenciais"],
                    ["Avaliações no Google (5,0 ★)", "#avaliacoes"],
                    ["Contato & Sede", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm font-medium text-stone-200 hover:text-[#e5a26c]"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#8f4d22] via-[#c97f48] to-[#8f4d22] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.13em] text-white shadow-md transition-all hover:brightness-105"
                      href={getWhatsAppUrl(
                        "Olá, Dr. Tomaz Henrique! Gostaria de consultar sobre o meu caso."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} /> WhatsApp: {PHONE_DISPLAY}
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#c97f48]/30 bg-[#120e0b] px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-[#fae0c8] transition-all hover:border-[#e5a26c]"
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

        {/* Hero Section - High Prestige Bronze & Obsidian Tone */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-[#c97f48]/20 bg-gradient-to-b from-[#090706] via-[#120e0b] to-[#17110c]"
        >
          {/* Subtle metallic bronze ambient glow */}
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[36rem] rounded-full bg-[#c97f48]/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[28rem] rounded-full bg-[#743c18]/15 blur-3xl" />

          <div className="mx-auto grid min-h-[660px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[720px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-12 lg:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-6"
            >
              <motion.div
                variants={reveal}
                className="mb-6 inline-flex items-center gap-2.5 rounded-lg border border-[#c97f48]/35 bg-[#17110c] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#fae0c8] shadow-sm"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#e5a26c]" />
                <span>TOMAZ HENRIQUE ADVOGADO ESPECIALIZADO · ITAÚNA - MG</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="max-w-[760px] font-serif text-[2.65rem] leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl lg:text-[3.85rem]"
              >
                Advocacia Trabalhista & Previdenciária:{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#fdf6ee] via-[#fae0c8] to-[#c97f48]">
                  Seus Direitos com Rigor Técnico, Ética e Combatividade.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-[#dfd6cb] sm:text-base sm:leading-8"
              >
                Liderado pelo{" "}
                <strong className="font-semibold text-white">
                  Dr. Tomaz Henrique
                </strong>
                , o escritório Tomaz Henrique Advocacia é referência em Itaúna e região na defesa incisiva dos direitos de trabalhadores e segurados do INSS. Aliamos atenção minuciosa aos detalhes, atuação ética comprovada e atendimento humanizado para transformar seus direitos em conquistas seguras.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dr. Tomaz Henrique! Gostaria de consultar sobre meus direitos e agendar um atendimento."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar no WhatsApp com o Dr. Tomaz
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 rounded-lg border border-[#c97f48]/30 bg-[#17110c] px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#fae0c8] transition-all hover:border-[#e5a26c] hover:bg-[#211812] hover:text-white"
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
                className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-[#c97f48]/20 pt-6 text-xs text-[#dfd6cb]"
              >
                <span className="inline-flex items-center gap-2 font-medium">
                  <Star size={15} className="fill-[#e5a26c] text-[#e5a26c]" />{" "}
                  5,0 estrelas no Google (37+ avaliações reais e verificadas)
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <ShieldCheck size={15} className="text-[#c97f48]" /> Sede no Centro de Itaúna - MG
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <HeartHandshake size={15} className="text-[#c97f48]" /> Atendimento Humanizado & Direto com o Advogado
                </span>
              </motion.div>
            </motion.div>

            {/* Hero Visual Presentation - Dr. Tomaz Henrique */}
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
              <div className="relative aspect-[4/4.8] overflow-hidden rounded-2xl border border-[#c97f48]/35 bg-[#120e0b] shadow-2xl ring-1 ring-[#c97f48]/20">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dr. Tomaz Henrique — Advogado Especializado em Itaúna"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#090706] via-[#090706]/85 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-8 sm:left-8 sm:right-8">
                  <div>
                    <p className="font-serif text-2xl font-normal tracking-wide text-white">
                      Dr. Tomaz Henrique
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#e5a26c]">
                      Tomaz Henrique Advocacia · Itaúna - MG
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-[#c97f48]/40 bg-[#090706]/85 text-[#fae0c8] backdrop-blur-sm">
                    <Scale size={18} />
                  </span>
                </div>
              </div>

              {/* Floating authority badge */}
              <div className="absolute -left-3 top-6 z-10 rounded-lg border border-[#c97f48]/40 bg-[#120e0b]/95 px-4 py-2 text-[10px] font-bold tracking-[0.14em] text-[#fae0c8] shadow-card backdrop-blur-md sm:-left-5">
                ITAÚNA - MG · ATENDIMENTO REGIONAL
              </div>

              {/* Floating Google rating badge */}
              <div className="absolute -bottom-5 -right-3 z-10 rounded-xl border border-[#c97f48]/35 bg-[#120e0b]/95 p-3.5 shadow-card backdrop-blur-md sm:-right-5">
                <div className="flex items-center gap-2">
                  <GoogleIcon size={16} />
                  <div className="flex items-center gap-1">
                    <Star size={13} className="fill-[#e5a26c] text-[#e5a26c]" />
                    <span className="font-serif text-base font-bold text-white">
                      5,0 / 5,0
                    </span>
                  </div>
                </div>
                <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#dfd6cb]">
                  37 Avaliações no Google
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner - Authority Metrics */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-[#c97f48]/20 bg-[#0e0a08]"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              [
                "5,0 ★",
                "nota máxima no Google com 37 avaliações autênticas e verificadas",
              ],
              [
                "Trabalhista & INSS",
                "especialização combativa em causas trabalhistas e benefícios previdenciários",
              ],
              [
                "Centro de Itaúna",
                "escritório estruturado na Rua Godofredo Gonçalves 159 (próximo à Clinaus)",
              ],
              [
                "Atenção ao Detalhe",
                "cuidado minucioso em cada cálculo, documento e fase do processo judicial",
              ],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-[#c97f48]/20"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-2xl font-semibold text-[#e5a26c] sm:text-3xl">
                  {value}
                </span>
                <span className="max-w-[165px] text-[11px] leading-5 text-[#dfd6cb]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre o Dr. Tomaz Henrique - Editorial Warm Alabaster Canvas */}
        <section
          id="sobre"
          className="scroll-mt-24 border-y border-[#c97f48]/30 bg-[#faf7f2] py-20 text-[#1c130b] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
            {/* Dr. Tomaz presentation portrait */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[480px]"
            >
              <div className="relative aspect-[3/3.8] overflow-hidden rounded-2xl border-2 border-[#54280c] bg-[#120e0b] shadow-2xl">
                <Image
                  src={FOTO_SOBRE_SRC}
                  alt="Dr. Tomaz Henrique — Advogado em Itaúna MG"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#090706]/90 via-[#090706]/30 to-transparent" />
              </div>

              {/* Authority badge card - Deep Obsidian Bronze Contrast on Light Surface */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-[#c97f48]/40 bg-[#120e0b] px-5 py-4 shadow-xl sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-[#e5a26c]">
                  <Award size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#e5a26c]">
                    Advocacia Especializada & Consultoria
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-white">
                  Dr. Tomaz Henrique
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-[#c97f48]">
                  Tomaz Henrique Advocacia · Itaúna - MG
                </p>
                <p className="mt-1 text-[11px] leading-4 text-[#dfd6cb]">
                  Rua Godofredo Gonçalves, 159 - Centro (Próximo à Clinaus)
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-[#80441c]/40 sm:-left-7 sm:-top-7 sm:size-32" />
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
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#80441c]/30 bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#80441c] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#80441c]" />
                <span>CONHEÇA O DR. TOMAZ HENRIQUE</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-[#1c130b] sm:text-4xl lg:text-[3.25rem]"
              >
                Mais que um patrono da causa: um{" "}
                <span className="italic text-[#80441c]">
                  defensor incansável e atencioso em cada detalhe.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-[#4f3d2f]"
              >
                Com escritório sediado no coração de{" "}
                <strong className="font-bold text-[#1c130b]">
                  Itaúna - MG
                </strong>
                , o Dr. Tomaz Henrique consolidou uma atuação jurídica marcada pela seriedade, conduta ética exemplar e profundo rigor técnico. Sua prática é orientada pelo compromisso de que cada trabalhador, segurado e cidadão tenha seus direitos plenamente compreendidos, defendidos e concretizados.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-[#4f3d2f]"
              >
                Especialista em Direito Trabalhista e Previdenciário (INSS), o escritório destaca-se pelo acolhimento próximo e pela transparência em cada explicação. Aqui, você não enfrenta termos burocráticos indecifráveis: você conversa diretamente com o advogado responsável pelo seu processo, com clareza em todas as etapas e estratégia desenhada sob medida.
              </motion.p>

              {/* Authentic Client Quote Card */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-xl border border-[#e8decb] bg-white/95 p-5 shadow-sm"
              >
                <blockquote className="font-serif text-sm italic leading-relaxed text-[#2c1b10]">
                  &ldquo;Excelente advogado, comportamento ético e empatia com seus clientes. Fui bem atendido e o problema solucionado.&rdquo;
                </blockquote>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-[#80441c]">
                  — Alexandre Fernandes · Avaliação Verificada no Google Meu Negócio
                </p>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-1 gap-2.5 text-xs font-semibold text-[#2c1b10] sm:grid-cols-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#80441c]" />
                  <span>Sede no Centro de Itaúna (Rua Godofredo Gonçalves 159)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#80441c]" />
                  <span>Especialista em Direito do Trabalho e Benefícios do INSS</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#80441c]" />
                  <span>Análise probatória rigorosa e atenção máxima aos detalhes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#80441c]" />
                  <span>Nota máxima 5,0 ★ no Google com 37 avaliações reais</span>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dr. Tomaz Henrique! Gostaria de agendar uma consulta sobre o meu caso."
                  )}
                  target="_blank"
                  size="md"
                  variant="dark"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar com o Dr. Tomaz
                </GlowingButton>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1c130b] transition-colors hover:text-[#80441c]"
                >
                  <Phone size={15} /> {PHONE_DISPLAY}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Áreas de Atuação Tomaz Henrique Advocacia */}
        <section
          id="atuacao"
          className="scroll-mt-24 border-t border-[#c97f48]/20 bg-[#0e0a08] py-20 sm:py-28 lg:py-32"
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
                description="Defesa especializada, estratégica e personalizada para resguardar seus direitos em demandas trabalhistas, previdenciárias, contratuais e cíveis."
              >
                Atuação jurídica sólida em{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#fdf6ee] via-[#fae0c8] to-[#c97f48]">
                  Itaúna, Região e Minas Gerais.
                </span>
              </Heading>
              <p className="max-w-[270px] pb-1 text-xs leading-6 text-[#dfd6cb]">
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
                    className="group flex min-h-[350px] flex-col rounded-xl border border-[#c97f48]/20 bg-[#120e0b] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#c97f48]/50 hover:bg-[#1a1410] hover:shadow-obsidian sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-lg border border-[#c97f48]/25 bg-[#211812] text-[#e5a26c] shadow-sm transition-colors group-hover:border-[#fae0c8] group-hover:bg-[#2d2119] group-hover:text-white">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <span className="font-serif text-2xl text-[#c97f48]/40">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-md border border-[#c97f48]/25 bg-[#211812] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#fae0c8] shadow-sm">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.45rem] leading-tight text-white">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-6 text-[#dfd6cb]">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-[#e5a26c] hover:text-white"
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

        {/* Por Que Escolher Tomaz Henrique Advocacia - Diferenciais */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-y border-[#c97f48]/20 bg-[#090706] py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                eyebrow="NOSSOS PILARES DE EXCELÊNCIA"
                description="Unimos acolhimento sincero, atenção aos mínimos detalhes e uma postura jurídica firme para transformar direitos em conquistas reais."
              >
                Por que confiar seu caso ao{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#fdf6ee] via-[#fae0c8] to-[#c97f48]">
                  Dr. Tomaz Henrique?
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dr. Tomaz Henrique! Gostaria de consultar sobre a minha situação jurídica."
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
              {/* Card 1: Atenção aos Mínimos Detalhes & Ética */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group flex flex-col justify-between rounded-xl border border-[#c97f48]/25 bg-[#120e0b] p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-[#c97f48]/50 hover:bg-[#1a1410] sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#c97f48]/30 bg-[#211812] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#fae0c8]">
                      <HeartHandshake size={14} /> Atendimento Humanizado
                    </span>
                    <span className="text-xs font-semibold text-[#e5a26c]">
                      Acolhimento Real
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-white sm:text-[1.75rem]">
                    Atenção em Todos os Detalhes & Comunicação Clara
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#dfd6cb]">
                    Sabemos que por trás de cada ação trabalhista ou pedido no INSS existe a subsistência de uma família e anos de dedicação. No escritório Tomaz Henrique, você é recebido com cordialidade, paciência e respeito, com explicações objetivas e sem nenhum obstáculo de comunicação.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-stone-200">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#e5a26c]" />
                      <span>Contato direto pelo WhatsApp com o Dr. Tomaz Henrique</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#e5a26c]" />
                      <span>Esclarecimento detalhado de cada cálculo e fase processual</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#e5a26c]" />
                      <span>Atendimento acolhedor, transparente e com total empatia</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#c97f48]/20 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dr. Tomaz Henrique! Gostaria de conversar diretamente com você sobre minha situação."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#c97f48]/30 bg-[#211812] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#fae0c8] transition-all hover:border-[#e5a26c] hover:bg-[#2d2119] hover:text-white"
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
                className="group flex flex-col justify-between rounded-xl border border-[#c97f48]/25 bg-[#120e0b] p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-[#c97f48]/50 hover:bg-[#1a1410] sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#c97f48]/30 bg-[#211812] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#fae0c8]">
                      <Scale size={14} /> Rigor Técnico Incisivo
                    </span>
                    <span className="text-xs font-semibold text-[#e5a26c]">
                      Resultados Comprovados
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-white sm:text-[1.75rem]">
                    Combatividade Jurídica & Foco no Resultado Máximo
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#dfd6cb]">
                    Não nos conformamos com negativas administrativas sem fundamento do INSS ou abusos contratuais de empregadores. Estruturamos provas documentais e periciais contundentes para buscar o valor justo e tempestivo de cada indenização ou benefício.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-stone-200">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#e5a26c]" />
                      <span>Análise aprofundada de holerites, contratos e extratos previdenciários</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#e5a26c]" />
                      <span>Atuação firme na Justiça do Trabalho e na Justiça Federal</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#e5a26c]" />
                      <span>Acompanhamento rigoroso de prazos e recursos em todas as instâncias</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#c97f48]/20 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dr. Tomaz Henrique! Preciso de ajuda jurídica para analisar meu caso."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#c97f48]/30 bg-[#211812] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#fae0c8] transition-all hover:border-[#e5a26c] hover:bg-[#2d2119] hover:text-white"
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
        <section className="relative overflow-hidden bg-[#090706] py-20 text-white sm:py-28 lg:py-32">
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-[#c97f48]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-[#743c18]/10 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="NOSSO COMPROMISSO COM VOCÊ"
                description="A nota 5,0 ★ no Google com 37 avaliações autênticas reflete a lealdade inegociável em defender cada cliente com rigor, transparência e respeito."
              >
                Cuidamos do seu caso com{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#fdf6ee] via-[#fae0c8] to-[#c97f48]">
                  ética, transparência e combatividade total.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-[#c97f48]/25 bg-[#120e0b] p-6 font-serif text-base italic leading-7 text-[#fae0c8]">
                &ldquo;Um ótimo profissional. Atencioso em todos os detalhes, super indico.&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-[#e5a26c]">
                  — Braulio Silva · Avaliação Verificada no Google Meu Negócio
                </footer>
              </blockquote>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-[#c97f48]/15"
            >
              {[
                [
                  "01",
                  "Acolhimento Humanizado & Empatia",
                  "Você é ouvido com atenção e sensibilidade. Analisamos cada detalhe da sua situação para traçar a melhor rota jurídica sem julgamentos.",
                ],
                [
                  "02",
                  "Transparência Absoluta & Comunicação Fácil",
                  "Você nunca fica sem respostas. Mantemos você informado de cada passo do seu processo em linguagem simples e descomplicada.",
                ],
                [
                  "03",
                  "Combatividade Incisiva & Resultados",
                  "Lutamos incansavelmente pelo melhor resultado possível, cobrando a aplicação integral da lei e a reparação justa dos seus direitos.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-semibold text-[#e5a26c]">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-white">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-[#dfd6cb]">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Avaliações no Google (Depoimentos Reais dos Clientes - 5,0 ★ · 37 avaliações) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 border-t border-[#c97f48]/20 bg-[#0e0a08] py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                eyebrow="PROVA SOCIAL VERIFICADA · GOOGLE MEU NEGÓCIO"
                description="Confira avaliações autênticas de clientes que confiaram seus direitos trabalhistas e previdenciários ao Dr. Tomaz Henrique."
              >
                Avaliado com nota máxima 5,0 ★ pela{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#fdf6ee] via-[#fae0c8] to-[#c97f48]">
                  competência, atenção aos detalhes e ética.
                </span>
              </Heading>

              {/* Verified Google Badge Card */}
              <div className="flex flex-col gap-3 rounded-xl border border-[#c97f48]/25 bg-[#120e0b] p-5 shadow-card sm:flex-row sm:items-center md:min-w-[340px]">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-lg border border-[#c97f48]/25 bg-[#211812] shadow-sm">
                  <GoogleIcon size={30} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-3xl font-bold leading-none text-white">
                      5,0
                    </span>
                    <div className="flex gap-0.5 text-[#e5a26c]">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-[#e5a26c] text-[#e5a26c]"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-stone-200">
                    Tomaz Henrique Advocacia
                  </p>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-[#e5a26c] transition-colors hover:text-white"
                  >
                    37 avaliações no Google <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Authentic Google Reviews Grid */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clientReviews.map((review) => (
                <article
                  key={review.name}
                  className="group relative flex flex-col justify-between rounded-xl border border-[#c97f48]/20 bg-[#120e0b] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#c97f48]/50 hover:bg-[#1a1410] hover:shadow-obsidian sm:p-8"
                >
                  <div>
                    {/* Header: Stars + Badge + Google icon */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-1 text-[#e5a26c]">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-[#e5a26c] text-[#e5a26c]"
                          />
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] font-medium text-stone-300">
                        <GoogleIcon size={13} />
                        <span className="rounded-md border border-[#c97f48]/20 bg-[#211812] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#fae0c8] shadow-xs">
                          {review.badge}
                        </span>
                      </div>
                    </div>

                    {/* Authentic review content */}
                    <p className="mt-5 text-[14px] italic leading-relaxed text-stone-200">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  {/* Reviewer info */}
                  <div className="mt-6 flex items-center gap-3 border-t border-[#c97f48]/20 pt-4">
                    <div className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#c97f48]/25 bg-[#211812] font-serif text-sm font-semibold text-[#fae0c8] shadow-xs">
                      {review.name.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-serif text-base font-semibold text-white">
                        {review.name}
                      </p>
                      <p className="text-[10px] uppercase tracking-wider text-stone-400">
                        {review.reviewsCount}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom Actions and Trust Tags */}
            <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-[#c97f48]/20 pt-8 sm:flex-row">
              <div className="flex flex-wrap items-center gap-2">
                {[
                  "Advogado em Itaúna - MG",
                  "Advogado Trabalhista Especializado",
                  "Aposentadorias e Benefícios do INSS",
                  "Auxílio-Doença & Incapacidade",
                  "BPC / LOAS Idosos e PcD",
                  "Nota 5,0 com 37 Avaliações",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#c97f48]/20 bg-[#120e0b] px-3.5 py-1.5 text-[11px] font-medium text-stone-200 shadow-xs"
                  >
                    <CheckCircle2 size={13} className="text-[#e5a26c]" />
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#e5a26c] transition-colors hover:text-white"
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

        {/* Contato & Localização da Sede em Itaúna */}
        <section
          id="contato"
          className="scroll-mt-24 border-t border-[#c97f48]/20 bg-[#090706] py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="CONTATO & ATENDIMENTO EM ITAÚNA"
                description="Inicie seu atendimento diretamente pelo WhatsApp ou agende uma reunião presencial em nosso escritório no Centro de Itaúna. Prestamos assistência ágil para clientes de toda a região."
              >
                Estamos prontos para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#fdf6ee] via-[#fae0c8] to-[#c97f48]">
                  escutar e defender você.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dr. Tomaz Henrique! Gostaria de agendar um horário para atendimento."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} /> Iniciar Conversa no WhatsApp
                </GlowingButton>
                <p className="text-[11px] leading-5 text-[#dfd6cb]">
                  Telefone e WhatsApp do escritório:{" "}
                  <strong className="text-white">{PHONE_DISPLAY}</strong>
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-[#dfd6cb]">
                <div className="flex items-start gap-3">
                  <Clock
                    size={16}
                    className="mt-0.5 shrink-0 text-[#e5a26c]"
                  />
                  <div>
                    <p className="font-semibold text-white">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-stone-200">
                      Segunda a Sexta-feira das 08:30 às 18:00
                    </p>
                    <p className="text-[11px] text-stone-400">
                      Atendimento presencial no Centro de Itaúna e assessoria jurídica online para todo o estado
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#e5a26c]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-medium text-white transition-colors hover:text-[#e5a26c]"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#e5a26c]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#e5a26c] text-stone-200"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#e5a26c]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="transition-colors hover:text-[#e5a26c] text-stone-200"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#e5a26c]"
                  />
                  <span>{ADDRESS_TEXT}</span>
                </div>
              </div>
            </div>

            {/* Office & Schedule Card */}
            <div className="relative overflow-hidden rounded-xl border border-[#c97f48]/25 bg-[#120e0b] p-7 shadow-card sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#c97f48] to-[#fae0c8]" />

              <div className="flex items-center gap-4">
                <div className="relative size-[68px] shrink-0 overflow-hidden rounded-full border-2 border-[#c97f48]/50 bg-white shadow-md sm:size-[76px]">
                  <Image
                    src={LOGO_SEAL_SRC}
                    alt="Selo Tomaz Henrique"
                    fill
                    sizes="76px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#e5a26c]">
                    Sede do Escritório
                  </p>
                  <p className="mt-0.5 font-cinzel text-2xl font-bold text-white">
                    Tomaz Henrique Advocacia
                  </p>
                </div>
              </div>

              <address className="mt-7 max-w-md text-[14px] not-italic leading-7 text-[#dfd6cb]">
                <strong className="font-semibold text-white">
                  Dr. Tomaz Henrique
                </strong>
                <br />
                Advogado Especializado em Direito Trabalhista e Previdenciário
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-lg border border-[#c97f48]/20 bg-[#090706] p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#e5a26c]">
                  Atendimento & Horários
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-stone-300">
                  <span>Segunda a Sexta</span>
                  <span className="text-right font-semibold text-white">
                    08:30 às 18:00
                  </span>
                  <span>Atendimento Presencial</span>
                  <span className="text-right text-[#fae0c8]">
                    Centro de Itaúna - MG
                  </span>
                  <span>Referência</span>
                  <span className="text-right text-stone-200">Próximo à Clinaus</span>
                  <span>Atendimento Online</span>
                  <span className="text-right text-stone-200">Todo o Estado</span>
                </div>
              </div>

              <div className="my-7 h-px bg-[#c97f48]/20" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-stone-400">
                  Atendimento acolhedor e com hora marcada em Itaúna
                </p>
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dr. Tomaz Henrique! Gostaria de agendar um atendimento no escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#c97f48]/30 bg-[#211812] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#fae0c8] transition-colors hover:border-[#e5a26c] hover:bg-[#2d2119] hover:text-white"
                >
                  <WhatsAppIcon size={14} /> Falar com o Advogado <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip */}
        <section className="border-t border-[#c97f48]/20 bg-gradient-to-r from-[#090706] via-[#17110c] to-[#090706] px-5 py-14 text-white shadow-inner sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#e5a26c]">
                <Sparkles size={13} /> TOMAZ HENRIQUE ADVOCACIA · ITAÚNA - MG
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                Precisa de orientação jurídica especializada e segura?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dr. Tomaz Henrique! Gostaria de consultar sobre meus direitos com seu escritório."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-lg bg-gradient-to-r from-[#8f4d22] via-[#c97f48] to-[#8f4d22] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-md transition-all hover:-translate-y-0.5 hover:brightness-110 hover:shadow-bronze"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp{" "}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#c97f48]/20 bg-[#070504] px-5 py-14 text-white sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <a
                href="#inicio"
                aria-label="Tomaz Henrique — Escritório de Advocacia"
                className="inline-flex items-center gap-4 transition-transform hover:scale-[1.02]"
              >
                <div className="relative size-[78px] shrink-0 overflow-hidden rounded-full border-2 border-[#c97f48]/50 bg-white shadow-md sm:size-[88px]">
                  <Image
                    src={LOGO_SEAL_SRC}
                    alt="Tomaz Henrique — Escritório de Advocacia"
                    fill
                    sizes="88px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-cinzel text-2xl font-bold tracking-wider text-white sm:text-[1.75rem]">
                    TOMAZ HENRIQUE
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d48c52]">
                    Escritório de Advocacia
                  </span>
                </div>
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-[#dfd6cb]">
                ⚖️ Advocacia especializada em Direito Trabalhista e Previdenciário (INSS). Atuação ética, combativa e com extrema atenção aos detalhes no Centro de Itaúna - MG.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-[#e5a26c]">
                Dr. Tomaz Henrique · Advogado Especializado
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e5a26c]">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-[#dfd6cb]">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  Dr. Tomaz Henrique
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
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e5a26c]">
                Contato & Atendimento
              </h2>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-[#dfd6cb]">
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dr. Tomaz Henrique! Gostaria de solicitar um atendimento com o escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 font-medium text-[#fae0c8]"
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
                <p className="inline-flex items-center gap-2 pt-1 text-[11px] text-[#e5a26c]">
                  <Clock size={14} className="shrink-0" /> Seg a Sex: 08:30 às 18:00
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-[#c97f48]/20 pt-6 text-[10px] text-stone-400 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} TOMAZ HENRIQUE ADVOCACIA · DR. TOMAZ HENRIQUE. Todos os direitos reservados.
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
              "Olá, Dr. Tomaz Henrique! Gostaria de consultar sobre meus direitos com seu escritório."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com o Dr. Tomaz Henrique"
            className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          >
            <WhatsAppIcon size={28} />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-[#120e0b] border border-[#c97f48]/30 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg transition-opacity group-hover:block">
              Falar com o Dr. Tomaz
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
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-xl border border-[#c97f48]/35 bg-[#120e0b] p-7 shadow-2xl sm:max-w-xl sm:rounded-xl sm:p-10"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-[#c97f48]/30 bg-[#211812] text-[#fae0c8] transition-colors hover:border-[#e5a26c] hover:text-white"
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

                <p className="mt-5 text-sm leading-7 text-[#dfd6cb]">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-[#c97f48]/20 pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#e5a26c]">
                    Principais demandas atendidas pelo escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-stone-200"
                      >
                        <span className="size-2 shrink-0 rounded-full bg-[#e5a26c]" />
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
