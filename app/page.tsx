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
  HandHeart,
  HeartHandshake,
  Landmark,
  Mail,
  MapPin,
  Menu,
  Phone,
  Plane,
  Scale,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5531995859111";
const PHONE_DISPLAY = "(31) 99585-9111";
const EMAIL_CONTACT = "contato@apolinarioadvogados.com.br";
const INSTAGRAM_URL = "https://www.instagram.com/advogada_yara_apolinario/";
const INSTAGRAM_HANDLE = "@advogada_yara_apolinario";

const ADDRESS_TEXT =
  "Minas Gerais · Atendimento Presencial com Agendamento Prévio e Assessoria Online para Todo o Brasil";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Apolin%C3%A1rio+Advogados+Yara+Aline+Apolinario";

const LOGO_SRC = "/logo.png";
const LOGO_FULL_SRC = "/logo.png";
const FOTO_HERO_SRC = "/yara-apolinario-hero.jpg";
const FOTO_SOBRE_SRC = "/yara-apolinario-apresentacao.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Yara Aline Apolinário! Gostaria de consultar sobre meus direitos e agendar um atendimento com o escritório Apolinário Advogados.";
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
    id: "direito-previdenciario-inss",
    title: "Direito Previdenciário & Benefícios do INSS",
    icon: Landmark,
    tag: "Aposentadorias · BPC/LOAS · Auxílio-Doença · Planejamento",
    summary:
      "Planejamento previdenciário estratégico e requerimento de benefícios do INSS para assegurar o valor máximo, sem travas burocráticas ou perdas financeiras.",
    details:
      "A Dra. Yara Aline Apolinário atua com rigor técnico e combatividade na análise profunda do seu CNIS, computando vínculos de trabalho, períodos rurais e especiais, revertendo negativas do INSS e garantindo o melhor benefício na via administrativa ou judicial com rapidez e total transparência.",
    topics: [
      "Aposentadoria por Idade Urbana e Rural com cômputo de períodos de lavoura",
      "Aposentadoria por Tempo de Contribuição e cálculo da Regra de Transição mais vantajosa",
      "Aposentadoria Especial para trabalhadores com exposição a agentes nocivos e insalubres",
      "Auxílio por Incapacidade Temporária (Auxílio-Doença) e Aposentadoria por Invalidez",
      "Pensão por Morte para dependentes com comprovação segura de união estável",
      "Cobrança judicial de parcelas atrasadas acumuladas dos últimos 5 anos",
    ],
    whatsAppText:
      "Olá, Dra. Yara Aline! Gostaria de consultar sobre meus direitos previdenciários no INSS.",
  },
  {
    id: "salario-maternidade-urbano-rural",
    title: "Salário-Maternidade Urbano & Rural",
    icon: Sparkles,
    tag: "Maternidade · Desempregadas · MEI · Agricultoras",
    summary:
      "Concessão ágil de até 4 meses de benefício para gestantes, mães adotantes, autônomas, microempreendedoras (MEI) e trabalhadoras desempregadas no período de graça.",
    details:
      "O salário-maternidade é um direito fundamental de amparo à mãe e ao recém-nascido. Muitas mães desconhecem que mesmo desempregadas, contribuintes individuais ou trabalhadoras do meio rural têm direito ao recebimento integral das parcelas. Cuidamos de toda a comprovação documental para liberar seu benefício sem contratempos.",
    topics: [
      "Salário-Maternidade para trabalhadoras desempregadas que mantêm qualidade de segurada",
      "Benefício para MEIs, autônomas e contribuintes facultativas",
      "Salário-Maternidade Rural para trabalhadoras da agricultura familiar e seguradas especiais",
      "Amparo financeiro em casos de adoção, guarda judicial para adoção e parto prematuro",
      "Reversão imediata de indeferimentos e atrasos injustificados no INSS",
      "Recebimento integral das 4 parcelas do benefício diretamente na conta bancária",
    ],
    whatsAppText:
      "Olá, Dra. Yara Aline! Gostaria de uma análise para solicitar o meu Salário-Maternidade.",
  },
  {
    id: "direito-do-trabalho",
    title: "Direito do Trabalho & Defesa do Trabalhador",
    icon: Briefcase,
    tag: "Rescisão Indireta · Horas Extras · Acidentes · Verbas Devidas",
    summary:
      "Atuação assertiva e combativa em reclamatórias trabalhistas para assegurar o pagamento integral de todas as verbas rescisórias e direitos violados.",
    details:
      "Defendemos trabalhadores que enfrentam abusos no ambiente corporativo, atrasos de salários, jornadas excessivas sem compensação, assédio moral ou acidentes de trabalho. Buscamos a justa reparação com estratégia e combatividade na Justiça do Trabalho.",
    topics: [
      "Rescisão Indireta do Contrato de Trabalho por falta grave ou descumprimento do empregador",
      "Cobrança de Horas Extras, adicional noturno e intervalos intrajornada não concedidos",
      "Indenização por Acidente de Trabalho, doenças ocupacionais e estabilidade provisória",
      "Reconhecimento de vínculo de emprego sem carteira assinada e liberação de FGTS + multa",
      "Indenização por Danos Morais em decorrência de assédio moral ou tratamento degradante",
      "Equiparação Salarial e diferenças por acúmulo ou desvio de função",
    ],
    whatsAppText:
      "Olá, Dra. Yara Aline! Gostaria de consultar sobre meus direitos trabalhistas.",
  },
  {
    id: "direitos-passageiros-aereos",
    title: "Direitos dos Passageiros Aéreos",
    icon: Plane,
    tag: "Voo Cancelado · Atraso Superior a 4h · Bagagem Extraviada · Overbooking",
    summary:
      "Reparação justa e indenização por danos morais e materiais contra companhias aéreas diante de transtornos em viagens nacionais e internacionais.",
    details:
      "Passageiros aéreos contam com proteção especial no Código de Defesa do Consumidor e normas da ANAC. Se o seu voo foi cancelado de última hora, atrasou excessivamente, sua bagagem foi perdida ou danificada, ou você foi impedido de embarcar por sobreposição de assentos, atuamos com rapidez para buscar sua devida indenização financeira.",
    topics: [
      "Indenização por Cancelamento de Voo sem reacomodação ou assistência material devida",
      "Atrasos de Voo superiores a 4 horas com perda de compromissos ou conexões",
      "Extravio definitivo ou temporário de bagagem e ressarcimento por pertences danificados",
      "Preterição de Embarque (Overbooking) por venda excessiva de passagens pela companhia",
      "Reembolso de gastos imprevistos com hospedagem, alimentação e transporte emergencial",
      "Atuação ágil e 100% online sem necessidade de burocracias desgastantes",
    ],
    whatsAppText:
      "Olá, Dra. Yara Aline! Tive um problema com meu voo e gostaria de saber sobre indenização.",
  },
  {
    id: "bpc-loas-assistencial",
    title: "BPC / LOAS para Idosos e Pessoas com Deficiência",
    icon: HeartHandshake,
    tag: "1 Salário Mínimo Mensal · Sem Contribuição Prévia · Reversão de Negativas",
    summary:
      "Concessão célere do benefício assistencial de 1 salário mínimo mensal para idosos com 65+ anos ou pessoas com deficiência e impedimentos de longo prazo de baixa renda.",
    details:
      "O Benefício de Prestação Continuada (BPC/LOAS) garante dignidade e sustento fundamental. Se o INSS negou o seu pedido alegando renda superior ao teto ou não reconhecendo a condição de saúde, atuamos de forma incisiva demonstrando despesas com farmácia e tratamentos para reverter a negativa.",
    topics: [
      "BPC/LOAS para idosos a partir de 65 anos em situação de vulnerabilidade financeira",
      "BPC/LOAS para pessoas com deficiência física, intelectual, mental ou sensorial",
      "Benefício para crianças e adultos diagnosticados com Transtorno do Espectro Autista (TEA)",
      "Dedução comprovada de gastos médicos essenciais, exames e cuidadores",
      "Ação judicial rápida para liberação do benefício e pagamento dos retroativos devidos",
      "Acompanhamento cuidadoso com linguagem acessível para toda a família",
    ],
    whatsAppText:
      "Olá, Dra. Yara Aline! Gostaria de consultar sobre a concessão do BPC/LOAS.",
  },
  {
    id: "consultoria-juridica-contratos",
    title: "Consultoria Jurídica, Contratos & Prevenção de Riscos",
    icon: FileText,
    tag: "Elaboração de Contratos · Revisão Preventiva · Segurança Patrimonial",
    summary:
      "Assessoria jurídica consultiva para confecção, análise minuciosa e reestruturação de instrumentos contratuais, blindando seus interesses contra litígios futuros.",
    details:
      "Um contrato bem estruturado é a maior garantia de tranquilidade e proteção patrimonial. A Dra. Yara Aline Apolinário analisa cláusulas de risco, elabora contratos personalizados e conduz negociações extrajudiciais com foco na segurança do cliente e na clareza dos termos acordados.",
    topics: [
      "Elaboração e revisão técnica de contratos cíveis, comerciais e de prestação de serviços",
      "Reestruturação de cláusulas leoninas, abusivas ou desequilibradas",
      "Contratos de compra e venda, locação e cessão de direitos patrimoniais",
      "Distratos, acordos extrajudiciais e termos de confidencialidade",
      "Consultoria jurídica preventiva para autônomos e pequenos empreendedores",
      "Pareceres jurídicos objetivos para tomada de decisões com segurança",
    ],
    whatsAppText:
      "Olá, Dra. Yara Aline! Gostaria de assessoria jurídica para elaboração ou revisão de contratos.",
  },
];

const clientReviews = [
  {
    name: "Daniela Mudesto",
    reviewsCount: "Cliente Verificada · 2 avaliações",
    date: "Google Meu Negócio · 2 meses atrás",
    badge: "ética & excelência",
    content:
      "Tive uma excelente experiência! Atendimento extremamente profissional, humano e atencioso. A dedicação, a competência e o compromisso em buscar a melhor solução para cada situação transmitem muita confiança e tranquilidade. Recomendo de olhos fechados para quem procura um trabalho sério, ético e de excelência. Sucesso sempre!",
  },
  {
    name: "Adrielle Reis",
    reviewsCount: "Cliente Verificada · 5 avaliações",
    date: "Google Meu Negócio · 1 mês atrás",
    badge: "causa ganha",
    content:
      "A Dra. Yara é uma excelente advogada. Cuidou muito bem do meu caso e me deu todo suporte necessário durante o processo. Não me deixou na mão e me orientou com clareza, tanto que resultou em uma causa ganha. Indico para todos!",
  },
  {
    name: "Leonardo Fernandes Neto",
    reviewsCount: "Cliente Verificado · 2 avaliações",
    date: "Google Meu Negócio · 3 meses atrás",
    badge: "clareza & dedicação",
    content:
      "Excelente profissional! O escritório Apolinário Advogados refez meu contrato com muita dedicação, clareza e profissionalismo. Sempre muito atenciosa e disponível para esclarecer minhas dúvidas. Fiquei muito satisfeito com o atendimento e recomendo seu trabalho com total confiança.",
  },
  {
    name: "Rithielle Dias",
    reviewsCount: "Cliente Verificada · 1 avaliação",
    date: "Google Meu Negócio · 1 mês atrás",
    badge: "atendimento 100%",
    content:
      "Excelente atendimento! Atenciosa, transparente e tirou todas as minhas dúvidas do início ao fim do processo. Uma assessoria impecável que traz muita paz de espírito.",
  },
  {
    name: "Vanessa Barão",
    reviewsCount: "Cliente Verificada · 5 avaliações · 10 fotos",
    date: "Google Meu Negócio · 3 meses atrás",
    badge: "representa sua causa",
    content:
      "Perfeito! Atendimento com excelência e dedicação total. Representa com excelência a sua causa do começo ao fim. ✨",
  },
  {
    name: "Thainara Fernandes",
    reviewsCount: "Cliente Verificada · 5 avaliações · 1 foto",
    date: "Google Meu Negócio · 1 mês atrás",
    badge: "cuidado & respeito",
    content:
      "Escritório competente e serviços altamente qualificados. Profissional além de muito capacitada, tem um carinho especial por ajudar as pessoas a resolverem suas pendências com todo cuidado e respeito! Super indico!!",
  },
  {
    name: "Willian Alves",
    reviewsCount: "Cliente Verificado · 1 avaliação",
    date: "Google Meu Negócio · 2 meses atrás",
    badge: "transparência total",
    content:
      "Uma excelente empresa onde a transparência e a responsabilidade com os clientes são o foco principal. Profissionalismo e humanidade andam juntos para o melhor atendimento. Parabéns pelo trabalho!",
  },
  {
    name: "Isabella Bispo",
    reviewsCount: "Local Guide · 8 avaliações · 2 fotos",
    date: "Google Meu Negócio · 1 mês atrás",
    badge: "segurança & ética",
    content:
      "A Dra. Yara é uma excelente profissional! Desde o primeiro atendimento, foi muito atenciosa, ética e esclareceu todas as minhas dúvidas. Demonstrou muito conhecimento e segurança durante todo o processo, além de sempre me manter informada sobre cada etapa.",
  },
  {
    name: "Guilherme Moura Cascone",
    reviewsCount: "Cliente Verificado · 2 avaliações",
    date: "Google Meu Negócio · 3 meses atrás",
    badge: "profundo conhecimento",
    content:
      "Excelente experiência! Desde o primeiro contato me deparei com extremo profissionalismo e transparência. Demonstram profundo conhecimento jurídico e conduzem cada etapa do processo com muita organização.",
  },
  {
    name: "Leonardo Machado",
    reviewsCount: "Cliente Verificado · 3 avaliações",
    date: "Google Meu Negócio · 1 mês atrás",
    badge: "acolhedora & eficiente",
    content:
      "Já tive a oportunidade de atuar em parceria com ela em um caso e também de acompanhar de perto o cuidado que ela tem com processos. É uma profissional extremamente acolhedora e eficiente em resultados.",
  },
  {
    name: "Guilherme Henrique",
    reviewsCount: "Cliente Verificado · 3 avaliações",
    date: "Google Meu Negócio · 2 meses atrás",
    badge: "orientação exemplar",
    content:
      "Gostaria de agradecer pelo excelente atendimento e profissionalismo. Fui muito bem orientado durante todo o processo, com clareza, atenção e dedicação em cada etapa. Sempre disponível para esclarecer minhas dúvidas.",
  },
  {
    name: "Marcos Henrique Rangel",
    reviewsCount: "Cliente Verificado · 2 avaliações",
    date: "Google Meu Negócio · 2 meses atrás",
    badge: "comprometimento",
    content:
      "Muito bem orientado juridicamente. Profissionalismo, competência, ética e comprometimento total com o cliente. Escritório de alta credibilidade!",
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
            ? "mt-4 font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-[#140e07] sm:text-4xl lg:text-[3.25rem]"
            : "mt-4 font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-white sm:text-4xl lg:text-[3.25rem]"
        }
      >
        {children}
      </h2>
      {description && (
        <p
          className={
            light
              ? "mt-4 text-[15px] leading-7 text-[#4a3f31]"
              : "mt-4 text-[15px] leading-7 text-[#dfd7c8]"
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
      <main className="overflow-hidden bg-[#080706] text-[#fdfcf9] selection:bg-[#d49b29] selection:text-[#080706]">
        {/* Navigation Bar - Refined Velvet Obsidian with Luminous Metallic Gold Accents */}
        <header className="sticky top-0 z-40 border-b border-[#d49b29]/20 bg-[#080706]/95 backdrop-blur-xl">
          <div className="mx-auto flex h-[88px] max-w-7xl items-center justify-between gap-5 px-5 sm:h-[98px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Apolinário Advogados — Início"
              onClick={closeMenu}
              className="flex items-center gap-3 transition-opacity hover:opacity-90"
            >
              <Image
                src={LOGO_SRC}
                width={1024}
                height={409}
                alt="Apolinário Advogados — Logotipo Oficial"
                priority
                loading="eager"
                className="h-[67px] w-auto object-contain sm:h-[78px]"
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
                Dra. Yara Apolinário
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
                Contato & Atendimento
              </a>
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da Dra. Yara Aline Apolinário"
                className="grid size-10 place-items-center rounded-lg border border-[#d49b29]/30 bg-[#110f0c] text-[#fdf6cc] transition-all hover:border-[#f9d26c] hover:bg-[#1d1914] hover:text-white"
                title={`Instagram ${INSTAGRAM_HANDLE}`}
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                aria-label="Ligar para Apolinário Advogados"
                className="grid size-10 place-items-center rounded-lg border border-[#d49b29]/30 bg-[#110f0c] text-[#fdf6cc] transition-all hover:border-[#f9d26c] hover:bg-[#1d1914] hover:text-white"
                title={`Ligar: ${PHONE_DISPLAY}`}
              >
                <Phone size={16} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Apolinário Advogados"
                className="grid size-10 place-items-center rounded-lg border border-[#d49b29]/30 bg-[#110f0c] text-[#fdf6cc] transition-all hover:border-[#f9d26c] hover:bg-[#1d1914] hover:text-white"
                title="Atendimento no WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Yara Aline! Gostaria de agendar uma consulta com o escritório Apolinário Advogados."
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
              className="grid size-11 place-items-center rounded-lg border border-[#d49b29]/30 bg-[#110f0c] text-[#fdf6cc] lg:hidden"
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
                className="overflow-hidden border-t border-[#d49b29]/20 bg-[#080706] px-6 lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["Dra. Yara Apolinário", "#sobre"],
                    ["Áreas de Atuação", "#atuacao"],
                    ["Por Que Escolher", "#diferenciais"],
                    ["Avaliações no Google (5,0 ★)", "#avaliacoes"],
                    ["Contato & Atendimento", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm font-medium text-stone-200 hover:text-[#f9d26c]"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#c08322] via-[#f9d26c] to-[#c08322] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.13em] text-[#0a0805] shadow-md transition-all hover:brightness-105"
                      href={getWhatsAppUrl(
                        "Olá, Dra. Yara Aline! Gostaria de consultar sobre o meu caso."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} /> WhatsApp: {PHONE_DISPLAY}
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#d49b29]/30 bg-[#110f0c] px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-[#fdf6cc] transition-all hover:border-[#f9d26c]"
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

        {/* Hero Section - High Prestige, Luminous Warm Obsidian Canvas */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-[#d49b29]/20 bg-gradient-to-b from-[#080706] via-[#110f0c] to-[#15130f]"
        >
          {/* Subtle gold ambient glow */}
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[36rem] rounded-full bg-[#d49b29]/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[28rem] rounded-full bg-[#8e5813]/15 blur-3xl" />

          <div className="mx-auto grid min-h-[660px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[720px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-12 lg:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-6"
            >
              <motion.div
                variants={reveal}
                className="mb-6 inline-flex items-center gap-2.5 rounded-lg border border-[#d49b29]/35 bg-[#15130f] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#fdf6cc] shadow-sm"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#f9d26c]" />
                <span>APOLINÁRIO ADVOGADOS · OAB/MG 156.433</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="max-w-[760px] font-serif text-[2.65rem] leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl lg:text-[3.95rem]"
              >
                Advocacia Estratégica & Humanizada:{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#fffceb] via-[#f9d26c] to-[#d49b29]">
                  Seus Direitos com Rigor Técnico e Respeito.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-[#dfd7c8] sm:text-base sm:leading-8"
              >
                Liderado pela{" "}
                <strong className="font-semibold text-white">
                  Dra. Yara Aline Apolinário (OAB/MG 156.433)
                </strong>
                , o escritório Apolinário Advogados oferece uma advocacia combativa, ética e transparente. Atuação especializada em Direito Previdenciário (Aposentadorias, BPC/LOAS e Salário-Maternidade), Direito do Trabalho e Direitos dos Passageiros Aéreos. Atendimento presencial e assessoria jurídica 100% online para todo o Brasil.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Yara Aline! Gostaria de consultar sobre meus direitos e agendar um atendimento."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar no WhatsApp com a Dra. Yara
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 rounded-lg border border-[#d49b29]/30 bg-[#15130f] px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#fdf6cc] transition-all hover:border-[#f9d26c] hover:bg-[#1d1914] hover:text-white"
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
                className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-[#d49b29]/20 pt-6 text-xs text-[#dfd7c8]"
              >
                <span className="inline-flex items-center gap-2 font-medium">
                  <Star size={15} className="fill-[#f9d26c] text-[#f9d26c]" />{" "}
                  5,0 estrelas no Google (41+ avaliações reais de clientes)
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <ShieldCheck size={15} className="text-[#d49b29]" /> OAB/MG 156.433
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <HandHeart size={15} className="text-[#d49b29]" /> Atendimento Humanizado & Direto com a Advogada
                </span>
              </motion.div>
            </motion.div>

            {/* Hero Visual Presentation - Dra. Yara Aline Apolinário */}
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
              <div className="relative aspect-[4/4.8] overflow-hidden rounded-2xl border border-[#d49b29]/35 bg-[#110f0c] shadow-2xl ring-1 ring-[#d49b29]/20">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dra. Yara Aline Apolinário — Advogada Fundadora Apolinário Advogados"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#080706] via-[#080706]/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-8 sm:left-8 sm:right-8">
                  <div>
                    <p className="font-serif text-2xl font-normal tracking-wide text-white">
                      Dra. Yara Aline Apolinário
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#f9d26c]">
                      Apolinário Advogados · OAB/MG 156.433
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-[#d49b29]/40 bg-[#080706]/85 text-[#fdf6cc] backdrop-blur-sm">
                    <Scale size={18} />
                  </span>
                </div>
              </div>

              {/* Floating authority badge */}
              <div className="absolute -left-3 top-6 z-10 rounded-lg border border-[#d49b29]/40 bg-[#110f0c]/95 px-4 py-2 text-[10px] font-bold tracking-[0.14em] text-[#fdf6cc] shadow-card backdrop-blur-md sm:-left-5">
                MINAS GERAIS · ATENDIMENTO BRASIL
              </div>

              {/* Floating Google rating badge */}
              <div className="absolute -bottom-5 -right-3 z-10 rounded-xl border border-[#d49b29]/35 bg-[#110f0c]/95 p-3.5 shadow-card backdrop-blur-md sm:-right-5">
                <div className="flex items-center gap-2">
                  <GoogleIcon size={16} />
                  <div className="flex items-center gap-1">
                    <Star size={13} className="fill-[#f9d26c] text-[#f9d26c]" />
                    <span className="font-serif text-base font-bold text-white">
                      5,0 / 5,0
                    </span>
                  </div>
                </div>
                <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#dfd7c8]">
                  41+ Avaliações no Google
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner - Authority Metrics */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-[#d49b29]/20 bg-[#0d0b09]"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              [
                "5,0 ★",
                "nota máxima no Google com 41+ depoimentos autênticos e verificados",
              ],
              [
                "OAB/MG 156.433",
                "advocacia sólida e combativa em Previdenciário, Trabalhista e Consumidor",
              ],
              [
                "Atendimento Brasil",
                "suporte presencial em MG e atendimento 100% online para todo o território nacional",
              ],
              [
                "100% Humanizado",
                "atendimento acolhedor, transparente e direto com a advogada, sem barreiras",
              ],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-[#d49b29]/20"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-2xl font-semibold text-[#f9d26c] sm:text-3xl">
                  {value}
                </span>
                <span className="max-w-[165px] text-[11px] leading-5 text-[#dfd7c8]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre a Dra. Yara Aline Apolinário - Modo Claro Ouro Marfim Nobre */}
        <section
          id="sobre"
          className="scroll-mt-24 border-y border-[#d49b29]/30 bg-[#faf8f4] py-20 text-[#19140e] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
            {/* Dra. Yara presentation portrait */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[480px]"
            >
              <div className="relative aspect-[3/3.8] overflow-hidden rounded-2xl border-2 border-[#5a370b] bg-[#110f0c] shadow-2xl">
                <Image
                  src={FOTO_SOBRE_SRC}
                  alt="Dra. Yara Aline Apolinário — Advogada OAB/MG 156.433"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#080706]/90 via-[#080706]/30 to-transparent" />
              </div>

              {/* Authority badge card - Deep Obsidian Contrast on Light Surface */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-[#d49b29]/40 bg-[#110f0c] px-5 py-4 shadow-xl sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-[#f9d26c]">
                  <Award size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#f9d26c]">
                    Advocacia Especializada & Consultoria
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-white">
                  Dra. Yara Aline Apolinário
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-[#d49b29]">
                  OAB/MG 156.433 · Apolinário Advogados
                </p>
                <p className="mt-1 text-[11px] leading-4 text-[#dfd7c8]">
                  Minas Gerais · Atendimento Online Seguro em Todo o Brasil
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-[#8e5813]/40 sm:-left-7 sm:-top-7 sm:size-32" />
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
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#8e5813]/30 bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8e5813] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#8e5813]" />
                <span>CONHEÇA A DRA. YARA ALINE APOLINÁRIO</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-[#19140e] sm:text-4xl lg:text-[3.25rem]"
              >
                Compromisso com a verdade, combatividade jurídica e um{" "}
                <span className="italic text-[#8e5813]">
                  atendimento verdadeiramente humano e resolutivo.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-[#4a3f31]"
              >
                Inscrita na{" "}
                <strong className="font-bold text-[#19140e]">
                  OAB/MG sob o nº 156.433
                </strong>
                , a Dra. Yara Aline Apolinário conduz o escritório Apolinário Advogados com a missão inegociável de assegurar que cidadãos, trabalhadores, mães e consumidores tenham seus direitos plenamente respeitados e efetivados.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-[#4a3f31]"
              >
                Com ampla atuação em Direito Previdenciário (aposentadorias, BPC/LOAS e salário-maternidade), Direito do Trabalho e Direitos dos Passageiros Aéreos, o escritório alia rigor técnico processual a uma escuta atenta e personalizada. Aqui, cada cliente tem contato direto com a advogada, acompanhando cada andamento em linguagem clara e objetiva.
              </motion.p>

              {/* Quote Card */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-xl border border-[#e8decb] bg-white/95 p-5 shadow-sm"
              >
                <blockquote className="font-serif text-sm italic leading-relaxed text-[#2a2013]">
                  &ldquo;A advocacia séria se constrói com dedicação incansável, transparência em cada explicação e a coragem de lutar pelo que é justo em benefício de quem confia em nosso trabalho.&rdquo;
                </blockquote>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-[#8e5813]">
                  — Dra. Yara Aline Apolinário · OAB/MG 156.433
                </p>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-1 gap-2.5 text-xs font-semibold text-[#2a2013] sm:grid-cols-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#8e5813]" />
                  <span>Atendimento presencial em Minas Gerais e online para todo o Brasil</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#8e5813]" />
                  <span>Especialista em Previdenciário (INSS e Salário-Maternidade) e Trabalhista</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#8e5813]" />
                  <span>Defesa ágil dos direitos de passageiros contra companhias aéreas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#8e5813]" />
                  <span>Nota máxima 5,0 ★ no Google com mais de 40 avaliações autênticas</span>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Yara Aline! Gostaria de agendar uma consulta sobre o meu caso."
                  )}
                  target="_blank"
                  size="md"
                  variant="dark"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar com a Dra. Yara
                </GlowingButton>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#19140e] transition-colors hover:text-[#8e5813]"
                >
                  <Phone size={15} /> {PHONE_DISPLAY}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Áreas de Atuação Apolinário Advogados */}
        <section
          id="atuacao"
          className="scroll-mt-24 border-t border-[#d49b29]/20 bg-[#0d0b09] py-20 sm:py-28 lg:py-32"
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
                description="Defesa especializada, estratégica e personalizada para resguardar seus direitos em demandas previdenciárias, trabalhistas, contratuais e do consumidor."
              >
                Atuação jurídica sólida em{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#fffceb] via-[#f9d26c] to-[#d49b29]">
                  Minas Gerais e em Todo o Brasil.
                </span>
              </Heading>
              <p className="max-w-[270px] pb-1 text-xs leading-6 text-[#dfd7c8]">
                Selecione uma área abaixo para conferir as demandas
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
                    className="group flex min-h-[350px] flex-col rounded-xl border border-[#d49b29]/20 bg-[#110f0c] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#d49b29]/50 hover:bg-[#181512] hover:shadow-obsidian sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-lg border border-[#d49b29]/25 bg-[#1d1914] text-[#f9d26c] shadow-sm transition-colors group-hover:border-[#fae48f] group-hover:bg-[#29231c] group-hover:text-white">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <span className="font-serif text-2xl text-[#d49b29]/40">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-md border border-[#d49b29]/25 bg-[#1d1914] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#fdf6cc] shadow-sm">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.45rem] leading-tight text-white">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-6 text-[#dfd7c8]">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-[#f9d26c] hover:text-white"
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

        {/* Por Que Escolher Apolinário Advogados - Diferenciais */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-y border-[#d49b29]/20 bg-[#080706] py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                eyebrow="NOSSOS PILARES DE EXCELÊNCIA"
                description="Unimos acolhimento sincero, proximidade humana e uma postura jurídica firme para transformar direitos em conquistas reais."
              >
                Por que confiar seu caso à{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#fffceb] via-[#f9d26c] to-[#d49b29]">
                  Dra. Yara Aline Apolinário?
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Yara Aline! Gostaria de consultar sobre a minha situação jurídica."
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
              {/* Card 1: Atendimento Humanizado e Acolhedor */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group flex flex-col justify-between rounded-xl border border-[#d49b29]/25 bg-[#110f0c] p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-[#d49b29]/50 hover:bg-[#181512] sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#d49b29]/30 bg-[#1d1914] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#fdf6cc]">
                      <HeartHandshake size={14} /> Atendimento Humanizado
                    </span>
                    <span className="text-xs font-semibold text-[#f9d26c]">
                      Acolhimento Real
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-white sm:text-[1.75rem]">
                    Empatia, Escuta Atenta e Zero &ldquo;Juridiquês&rdquo;
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#dfd7c8]">
                    Entendemos que por trás de cada processo existe a história de uma família, meses de expectativa ou uma injustiça que precisa ser reparada. No escritório Apolinário Advogados, você conversa diretamente com a Dra. Yara Aline, com explicações francas, acessíveis e suporte contínuo.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-stone-200">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#f9d26c]" />
                      <span>Contato direto pelo WhatsApp com a advogada responsável pelo seu caso</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#f9d26c]" />
                      <span>Esclarecimento detalhado de cada cálculo, documento e fase processual</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#f9d26c]" />
                      <span>Acolhimento dedicado a trabalhadores, mães e famílias em situação delicada</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#d49b29]/20 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Yara Aline! Gostaria de conversar com você sobre a minha situação."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#d49b29]/30 bg-[#1d1914] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#fdf6cc] transition-all hover:border-[#f9d26c] hover:bg-[#29231c] hover:text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Conversar Diretamente no WhatsApp
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>

              {/* Card 2: Combatividade Técnica e Resultados */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="group flex flex-col justify-between rounded-xl border border-[#d49b29]/25 bg-[#110f0c] p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-[#d49b29]/50 hover:bg-[#181512] sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#d49b29]/30 bg-[#1d1914] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#fdf6cc]">
                      <Scale size={14} /> Rigor Técnico Incisivo
                    </span>
                    <span className="text-xs font-semibold text-[#f9d26c]">
                      Resultados Comprovados
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-white sm:text-[1.75rem]">
                    Combatividade na Luta Pelos Seus Direitos
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#dfd7c8]">
                    Não nos conformamos com negativas infundadas de órgãos públicos ou abusos praticados por grandes empresas e companhias aéreas. Construímos teses jurídicas sólidas, amparadas na legislação vigente e nas melhores decisões dos tribunais do país.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-stone-200">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#f9d26c]" />
                      <span>Análise jurídica aprofundada para buscar a indenização e o benefício máximo</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#f9d26c]" />
                      <span>Histórico consistente de causas vitoriosas e acordos vantajosos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#f9d26c]" />
                      <span>Acompanhamento tempestivo de cada prazo e movimentação do seu caso</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#d49b29]/20 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Yara Aline! Preciso de ajuda jurídica para analisar meu caso."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#d49b29]/30 bg-[#1d1914] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#fdf6cc] transition-all hover:border-[#f9d26c] hover:bg-[#29231c] hover:text-white"
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

        {/* Nosso Compromisso Ético e Operacional */}
        <section className="relative overflow-hidden bg-[#070605] py-20 text-white sm:py-28 lg:py-32">
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-[#d49b29]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-[#8e5813]/10 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="NOSSO COMPROMISSO COM VOCÊ"
                description="A nota 5,0 ★ no Google com dezenas de avaliações autênticas reflete a lealdade inegociável em defender cada cliente com rigor, transparência e respeito."
              >
                Cuidamos do seu caso com{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#fffceb] via-[#f9d26c] to-[#d49b29]">
                  respeito, transparência e combatividade total.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-[#d49b29]/25 bg-[#110f0c] p-6 font-serif text-base italic leading-7 text-[#fae48f]">
                &ldquo;Tive uma excelente experiência! Atendimento extremamente profissional, humano e atencioso. A dedicação, a competência e o compromisso em buscar a melhor solução transmitem muita confiança e tranquilidade. Recomendo de olhos fechados.&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-[#f9d26c]">
                  — Daniela Mudesto · Avaliação Verificada no Google Meu Negócio
                </footer>
              </blockquote>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-[#d49b29]/15"
            >
              {[
                [
                  "01",
                  "Acolhimento Humanizado & Empatia",
                  "Você é ouvido com atenção e sensibilidade. Analisamos cada detalhe da sua situação para traçar a melhor rota jurídica sem nenhum julgamento.",
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
                  <span className="font-serif text-2xl font-semibold text-[#f9d26c]">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-white">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-[#dfd7c8]">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Avaliações no Google (Depoimentos Reais - 5,0 estrelas · 41+ avaliações) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 border-t border-[#d49b29]/20 bg-[#0d0b09] py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                eyebrow="PROVA SOCIAL VERIFICADA · GOOGLE MEU NEGÓCIO"
                description="Confira avaliações autênticas de clientes que confiaram seus direitos e processos ao escritório Apolinário Advogados."
              >
                Avaliada com nota máxima 5,0 ★ pela{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#fffceb] via-[#f9d26c] to-[#d49b29]">
                  competência, transparência e causas ganhas.
                </span>
              </Heading>

              {/* Verified Google Badge Card */}
              <div className="flex flex-col gap-3 rounded-xl border border-[#d49b29]/25 bg-[#110f0c] p-5 shadow-card sm:flex-row sm:items-center md:min-w-[340px]">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-lg border border-[#d49b29]/25 bg-[#1d1914] shadow-sm">
                  <GoogleIcon size={30} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-3xl font-bold leading-none text-white">
                      5,0
                    </span>
                    <div className="flex gap-0.5 text-[#f9d26c]">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-[#f9d26c] text-[#f9d26c]"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-stone-200">
                    Apolinário Advogados
                  </p>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-[#f9d26c] transition-colors hover:text-white"
                  >
                    41+ avaliações no Google <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Authentic Google Reviews Grid */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clientReviews.map((review) => (
                <article
                  key={review.name}
                  className="group relative flex flex-col justify-between rounded-xl border border-[#d49b29]/20 bg-[#110f0c] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#d49b29]/50 hover:bg-[#181512] hover:shadow-obsidian sm:p-8"
                >
                  <div>
                    {/* Header: Stars + Badge + Google icon */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-1 text-[#f9d26c]">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-[#f9d26c] text-[#f9d26c]"
                          />
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] font-medium text-stone-300">
                        <GoogleIcon size={13} />
                        <span className="rounded-md border border-[#d49b29]/20 bg-[#1d1914] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#fdf6cc] shadow-xs">
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
                  <div className="mt-6 flex items-center gap-3 border-t border-[#d49b29]/20 pt-4">
                    <div className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#d49b29]/25 bg-[#1d1914] font-serif text-sm font-semibold text-[#fdf6cc] shadow-xs">
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
            <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-[#d49b29]/20 pt-8 sm:flex-row">
              <div className="flex flex-wrap items-center gap-2">
                {[
                  "Advocacia Previdenciária & INSS",
                  "Salário-Maternidade Urbano & Rural",
                  "Direito do Trabalho & Verbas Rescisórias",
                  "Direitos dos Passageiros Aéreos",
                  "Atendimento Direto com a Advogada",
                  "Nota 5,0 no Google",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#d49b29]/20 bg-[#110f0c] px-3.5 py-1.5 text-[11px] font-medium text-stone-200 shadow-xs"
                  >
                    <CheckCircle2 size={13} className="text-[#f9d26c]" />
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#f9d26c] transition-colors hover:text-white"
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

        {/* Contato & Atendimento Nacional */}
        <section
          id="contato"
          className="scroll-mt-24 border-t border-[#d49b29]/20 bg-[#080706] py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="CONTATO & ATENDIMENTO NACIONAL"
                description="Inicie seu atendimento diretamente pelo WhatsApp ou agende uma reunião presencial em nosso escritório. Prestamos assistência jurídica para clientes de todo o Brasil."
              >
                Estamos prontos para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#fffceb] via-[#f9d26c] to-[#d49b29]">
                  escutar e defender você.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Yara Aline! Gostaria de agendar um horário para atendimento."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} /> Iniciar Conversa no WhatsApp
                </GlowingButton>
                <p className="text-[11px] leading-5 text-[#dfd7c8]">
                  Telefone e WhatsApp profissional:{" "}
                  <strong className="text-white">{PHONE_DISPLAY}</strong>
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-[#dfd7c8]">
                <div className="flex items-start gap-3">
                  <Clock
                    size={16}
                    className="mt-0.5 shrink-0 text-[#f9d26c]"
                  />
                  <div>
                    <p className="font-semibold text-white">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-stone-200">
                      Segunda a Sexta-feira das 08:30 às 18:00
                    </p>
                    <p className="text-[11px] text-stone-400">
                      Atendimento presencial com agendamento prévio e consultoria jurídica online para todo o território nacional
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#f9d26c]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-medium text-white transition-colors hover:text-[#f9d26c]"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#f9d26c]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#f9d26c] text-stone-200"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#f9d26c]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="transition-colors hover:text-[#f9d26c] text-stone-200"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#f9d26c]"
                  />
                  <span>{ADDRESS_TEXT}</span>
                </div>
              </div>
            </div>

            {/* Office & Schedule Card */}
            <div className="relative overflow-hidden rounded-xl border border-[#d49b29]/25 bg-[#110f0c] p-7 shadow-card sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#d49b29] to-[#f9d26c]" />

              <div className="flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-lg border border-[#d49b29]/30 bg-[#1d1914] text-[#f9d26c]">
                  <Scale size={22} strokeWidth={1.6} />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#f9d26c]">
                    Escritório Jurídico
                  </p>
                  <p className="mt-1 font-serif text-2xl text-white">
                    Apolinário Advogados
                  </p>
                </div>
              </div>

              <address className="mt-7 max-w-md text-[14px] not-italic leading-7 text-[#dfd7c8]">
                <strong className="font-semibold text-white">
                  Dra. Yara Aline Apolinário
                </strong>
                <br />
                Inscrição na OAB: OAB/MG 156.433
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-lg border border-[#d49b29]/20 bg-[#080706] p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#f9d26c]">
                  Atendimento & Horários
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-stone-300">
                  <span>Segunda a Sexta</span>
                  <span className="text-right font-semibold text-white">
                    08:30 às 18:00
                  </span>
                  <span>Atendimento Presencial</span>
                  <span className="text-right text-[#fdf6cc]">
                    Com agendamento prévio
                  </span>
                  <span>Sede Regional</span>
                  <span className="text-right text-stone-200">Minas Gerais</span>
                  <span>Atendimento Online</span>
                  <span className="text-right text-stone-200">Todo o Brasil</span>
                </div>
              </div>

              <div className="my-7 h-px bg-[#d49b29]/20" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-stone-400">
                  Atendimento presencial e online em todo o Brasil
                </p>
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Yara Aline! Gostaria de agendar um atendimento com o escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#d49b29]/30 bg-[#1d1914] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#fdf6cc] transition-colors hover:border-[#f9d26c] hover:bg-[#29231c] hover:text-white"
                >
                  <WhatsAppIcon size={14} /> Falar com a Advogada <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip */}
        <section className="border-t border-[#d49b29]/20 bg-gradient-to-r from-[#080706] via-[#15130f] to-[#080706] px-5 py-14 text-white shadow-inner sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f9d26c]">
                <Sparkles size={13} /> APOLINÁRIO ADVOGADOS · OAB/MG 156.433
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                Precisa de orientação jurídica especializada e segura?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dra. Yara Aline! Gostaria de consultar sobre meus direitos com o escritório Apolinário Advogados."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-lg bg-gradient-to-r from-[#c08322] via-[#f9d26c] to-[#c08322] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#0a0805] shadow-md transition-all hover:-translate-y-0.5 hover:brightness-110 hover:shadow-gold"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp{" "}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#d49b29]/20 bg-[#060504] px-5 py-14 text-white sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <a
                href="#inicio"
                aria-label="Apolinário Advogados"
                className="inline-block transition-transform hover:scale-[1.02]"
              >
                <Image
                  src={LOGO_FULL_SRC}
                  width={1024}
                  height={409}
                  alt="Apolinário Advogados — Logotipo Oficial"
                  className="h-[90px] w-auto object-contain sm:h-[106px]"
                />
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-[#dfd7c8]">
                ⚖️ Advocacia combativa, especializada e humanizada. Direito Previdenciário (INSS e Salário-Maternidade), Direito do Trabalho e Direitos dos Passageiros Aéreos.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-[#f9d26c]">
                Dra. Yara Aline Apolinário · Advogada · OAB/MG 156.433
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f9d26c]">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-[#dfd7c8]">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  Dra. Yara Apolinário
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
                  Contato & Atendimento
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f9d26c]">
                Contato & Atendimento
              </h2>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-[#dfd7c8]">
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Yara Aline! Gostaria de solicitar um atendimento com o escritório Apolinário Advogados."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 font-medium text-[#fdf6cc]"
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
                <p className="inline-flex items-center gap-2 pt-1 text-[11px] text-[#f9d26c]">
                  <Clock size={14} className="shrink-0" /> Seg a Sex: 08:30 às 18:00
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-[#d49b29]/20 pt-6 text-[10px] text-stone-400 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} APOLINÁRIO ADVOGADOS · DRA. YARA ALINE APOLINÁRIO. Todos os direitos reservados.
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
              "Olá, Dra. Yara Aline! Gostaria de consultar sobre meus direitos com o escritório Apolinário Advogados."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Dra. Yara Aline Apolinário"
            className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          >
            <WhatsAppIcon size={28} />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-[#110f0c] border border-[#d49b29]/30 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg transition-opacity group-hover:block">
              Falar com a Dra. Yara
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
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-xl border border-[#d49b29]/35 bg-[#110f0c] p-7 shadow-2xl sm:max-w-xl sm:rounded-xl sm:p-10"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-[#d49b29]/30 bg-[#1d1914] text-[#fdf6cc] transition-colors hover:border-[#f9d26c] hover:text-white"
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

                <p className="mt-5 text-sm leading-7 text-[#dfd7c8]">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-[#d49b29]/20 pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#f9d26c]">
                    Principais demandas atendidas pelo escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-stone-200"
                      >
                        <span className="size-2 shrink-0 rounded-full bg-[#f9d26c]" />
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
