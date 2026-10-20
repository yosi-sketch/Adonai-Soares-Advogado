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
  Flame,
  Gavel,
  HeartHandshake,
  Mail,
  MapPin,
  Menu,
  Phone,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Star,
  Users2,
  X,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5531999810534";
const PHONE_DISPLAY = "(31) 99981-0534";
const EMAIL_CONTACT = "contato@suellemrodrigues.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/suellemrodriguesadv/";
const INSTAGRAM_HANDLE = "@suellemrodriguesadv";
const OAB_REGISTRATION = "OAB/MG 174.904";

const ADDRESS_TEXT = "R. José Albino, 535 - Sl 1 - Centro, São Sebastião do Paraíso - MG, 37950-060";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Suellem+Rodrigues+Advogada+Rua+Jose+Albino+535+Sao+Sebastiao+do+Paraiso+MG";

const LOGO_SEAL_SRC = "/logo-symbol.png";
const LOGO_FULL_SRC = "/logo.png";
const FOTO_HERO_SRC = "/suellem-hero-hd.png";
const FOTO_SOBRE_SRC = "/suellem-portrait-hd.png";
const FOTO_INFOGRAFICO_SRC = "/suellem-infographic.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Suellem Rodrigues! Gostaria de consultar sobre um caso criminal / execução penal e agendar um atendimento.";
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
    id: "execucoes-penais-progressao-regime",
    title: "Execuções Penais & Progressão de Regime",
    icon: Gavel,
    tag: "Especialidade Principal · SEEU · Regime Aberto & Semiaberto · LEP",
    summary:
      "Atuação cirúrgica para garantir que cada dia de pena cumprido seja computado, antecipando progressões de regime e garantindo a aplicação estrita da lei.",
    details:
      "A execução penal exige vigilância técnica permanente. A Dra. Suellem Rodrigues atua na análise e retificação de cálculos de liquidação de penas no SEEU, requerendo a progressão de regime (fechado para semiaberto e semiaberto para aberto), livramento condicional, detração penal e verificação de faltas graves que impeçam indevidamente o benefício, resguardando a dignidade e os direitos do apenado.",
    topics: [
      "Progressão de Regime Prisional (fechado, semiaberto e aberto) com cálculo preciso das frações",
      "Auditoria minuciosa de atestados de pena e retificação de erros de cálculo no sistema SEEU",
      "Livramento Condicional célere assim que preenchidos os requisitos objetivos e subjetivos",
      "Defesa técnica em Procedimentos Administrativos Disciplinares (PAD) por supostas faltas graves",
      "Reabilitação criminal e baixa de antecedentes após o cumprimento integral da pena",
      "Agravos em Execução perante o Tribunal de Justiça contra decisões desfavoráveis do juízo da VEP",
    ],
    whatsAppText:
      "Olá, Dra. Suellem Rodrigues! Gostaria de consultar sobre a situação de um apenado e cálculo de progressão de regime.",
  },
  {
    id: "remicao-pena-indulto-comutacao",
    title: "Remição de Pena, Indulto & Comutação",
    icon: FileCheck2,
    tag: "Trabalho · Estudo · Leitura · Decretos Presidenciais · Redução da Pena",
    summary:
      "Redução legal do tempo de prisão através da comprovação de trabalho, estudo e leitura, além de pedidos fundamentados de indulto e comutação.",
    details:
      "Cada dia trabalhado ou estudado dentro da unidade prisional é um passo a menos para a liberdade. A Dra. Suellem Rodrigues realiza o levantamento de todos os atestados carcerários de trabalho, certificados de estudo e relatórios de leitura para homologar remições de pena, além de pleitear a extinção ou redução substancial da reprimenda por meio dos decretos de indulto e comutação natalinos.",
    topics: [
      "Homologação judicial de remição de pena por dias trabalhados dentro e fora do estabelecimento prisional",
      "Remição por aprovação no ENCCEJA, ENEM, cursos técnicos e certificações educacionais",
      "Remição por leitura conforme diretrizes e resoluções do Conselho Nacional de Justiça (CNJ)",
      "Pedidos de Indulto Humanitário e Extintivo de Pena fundamentados em Decretos Presidenciais",
      "Comutação de pena para abatimento proporcional do montante condenatório remanescente",
      "Unificação de penas de múltiplos processos e soma de guias para redefinição das frações",
    ],
    whatsAppText:
      "Olá, Dra. Suellem Rodrigues! Gostaria de verificar a possibilidade de remição de pena ou pedido de indulto.",
  },
  {
    id: "audiencia-custodia-liberdade-flagrante",
    title: "Plantão Prisional & Audiência de Custódia",
    icon: ShieldAlert,
    tag: "Plantão 24 Horas · Prisão em Flagrante · Liberdade Provisória · Relaxamento",
    summary:
      "Atuação combativa imediata nas primeiras 24 horas da prisão para demonstrar a desnecessidade da prisão cautelar e resguardar a integridade do custodiado.",
    details:
      "As primeiras horas após uma prisão em flagrante são cruciais para o destino do investigado. A Dra. Suellem Rodrigues atua com presença imediata em delegacias e na Audiência de Custódia perante o juiz, demonstrando a ilegalidade da prisão, ausência dos requisitos da custódia preventiva (art. 312 do CPP) e requerendo liberdade provisória com aplicação de medidas cautelares alternativas.",
    topics: [
      "Atendimento presencial urgente em delegacias de polícia civil e federal no momento do flagrante",
      "Defesa técnica combativa na Audiência de Custódia nas primeiras 24 horas após o encarceramento",
      "Pedidos de Liberdade Provisória sem fiança ou com arbitramento de medidas cautelares diversas",
      "Relaxamento de prisão por ilegalidade processual, excesso de prazo ou violação de garantias fundamentais",
      "Revogação de Prisão Preventiva e Prisão Temporária com apresentação de endereço fixo e ocupação lícita",
      "Combate imediato a abusos de autoridade e garantia de exame de corpo de delito idôneo",
    ],
    whatsAppText:
      "Olá, Dra. Suellem Rodrigues! Ocorreu uma prisão em flagrante e preciso de assistência jurídica urgente para a audiência de custódia.",
  },
  {
    id: "habeas-corpus-recursos-superiores",
    title: "Habeas Corpus & Recursos nos Tribunais Superiores",
    icon: Scale,
    tag: "TJMG · TRF · STJ · STF · Medidas Urgentes Contra Constrangimento Ilegal",
    summary:
      "Ações constitucionais de urgência e recursos estratégicos para combater prisões ilegais, excesso de prazo e decisões arbitrárias em instâncias superiores.",
    details:
      "Quando uma ordem de prisão contraria a Constituição ou a jurisprudência consolidada, a via do Habeas Corpus é o instrumento mais poderoso para a liberdade. Atuamos com redação jurídica de alto impacto e pedidos de liminar perante o Tribunal de Justiça de Minas Gerais (TJMG), Tribunais Regionais Federais (TRFs), Superior Tribunal de Justiça (STJ) e Supremo Tribunal Federal (STF).",
    topics: [
      "Impetração célere de Habeas Corpus com pedido liminar em casos de constrangimento ilegal flagrante",
      "Habeas Corpus por excesso de prazo injustificado na formação da culpa ou no julgamento de recursos",
      "Sustentação oral presencial e por videoconferência perante as Turmas e Câmaras Criminais",
      "Recurso Ordinário em Habeas Corpus (RHC) perante o STJ e STF contra indeferimentos de liminares",
      "Recurso em Sentido Estrito (RESE) e Agravo em Execução Penal com foco na jurisprudência dominante",
      "Despacho presencial de memoriais diretamente com desembargadores e ministros relatores",
    ],
    whatsAppText:
      "Olá, Dra. Suellem Rodrigues! Preciso de avaliação para impetração de Habeas Corpus ou recurso em tribunal superior.",
  },
  {
    id: "prisao-domiciliar-transferencia-presidio",
    title: "Prisão Domiciliar & Transferência de Presídio",
    icon: HeartHandshake,
    tag: "Aproximação Familiar · Saúde & Dignidade · Mães de Menores · Tratamento Médico",
    summary:
      "Medidas humanitárias para transferência do apenado para comarca próxima da família e conversão de prisão fechada em domiciliar por razões humanitárias.",
    details:
      "O cumprimento de pena não pode aniquilar os vínculos familiares nem privar o apenado de cuidados médicos essenciais. A Dra. Suellem Rodrigues pleiteia a transferência prisional para estabelecimentos próximos da residência da família (art. 86 da LEP) e atua na conversão da pena em prisão domiciliar humanitária para apenados com doenças graves, idosos ou mães de crianças menores de 12 anos.",
    topics: [
      "Transferência prisional e aproximação familiar garantindo o direito à convivência com parentes",
      "Prisão Domiciliar Humanitária com suporte em laudos médicos para apenados com debilidade física grave",
      "Conversão de prisão preventiva e regime fechado em domiciliar para gestantes e mães de filhos até 12 anos",
      "Permissões de saída para tratamento médico externo e visitas a familiares gravemente enfermos",
      "Regularização de visitas, cadastramento de companheiros(as) e combate a transferências punitivas arbitrárias",
      "Fiscalização do cumprimento de condições dignas e alimentação adequada na unidade prisional",
    ],
    whatsAppText:
      "Olá, Dra. Suellem Rodrigues! Gostaria de consultar sobre pedido de transferência de presídio ou prisão domiciliar.",
  },
  {
    id: "defesa-criminal-tribunal-juri",
    title: "Defesa Penal Integral, Júri & Revisão Criminal",
    icon: ShieldCheck,
    tag: "Inquérito Policial · Audiências de Instrução · Tribunal do Júri · Revisão Criminal",
    summary:
      "Acompanhamento técnico desde a fase de inquérito policial até o plenário do Júri e ações rescisórias criminais para anular condenações injustas.",
    details:
      "A defesa penal exige estudo aprofundado das provas, perspicácia na inquirição de testemunhas e oratória firme. Dra. Suellem Rodrigues defende seus clientes em todas as fases do processo-crime, elaborando teses absolutórias robustas, atuando perante os jurados no Tribunal do Júri e ingressando com Revisão Criminal após a condenação quando surgem novas provas ou nulidades evidentes.",
    topics: [
      "Acompanhamento de depoimentos e oitivas perante delegacias de polícia e Ministério Público",
      "Defesa preliminar, resposta à acusação e requerimento fundamentado de diligências investigativas",
      "Atuação combativa em audiências de instrução e julgamento com inquirição técnica de testemunhas",
      "Atuação destacada em Plenário do Tribunal do Júri em crimes dolosos contra a vida",
      "Alegações finais escritas com teses de desclassificação, excludentes de ilicitude e dosimetria favorável",
      "Ação de Revisão Criminal para desconstituir sentenças transitadas em julgado decorrentes de erro judicial",
    ],
    whatsAppText:
      "Olá, Dra. Suellem Rodrigues! Gostaria de orientação para uma defesa em processo criminal ou Tribunal do Júri.",
  },
];

const clientReviews = [
  {
    name: "Mayara Christina Nunes",
    reviewsCount: "7 avaliações no Google",
    badge: "Advogada Criminalista · Segurança & Confiança",
    content:
      "Profissional excelente e extremamente atenciosa. Demonstrou grande conhecimento como advogada criminalista, esclarecendo todas as dúvidas de forma clara e objetiva. Além disso, transmite muita segurança e confiança, características fundamentais nessa área. Recomendo seu trabalho sem hesitação!",
  },
  {
    name: "Fernanda Menezes",
    reviewsCount: "5 avaliações no Google",
    badge: "Competência & Experiência na Execução",
    content:
      "Excelente profissional. Uma advogada competente e ética. Possui vasto conhecimento e experiência na área criminal e da execução. Indico seu trabalho sem nenhuma dúvida. 👏🏻👏🏻👏🏻",
  },
  {
    name: "Patrick Souza",
    reviewsCount: "9 avaliações no Google",
    badge: "Domínio Absoluto da Execução Penal",
    content:
      "Uma excelente advogada, domina a execução penal.",
  },
  {
    name: "Hamilton Tamosaitis",
    reviewsCount: "Local Guide · 162 avaliações · 62 fotos",
    badge: "Local Guide Google · Objetividade & Resultados",
    content:
      "A melhor advogada criminalista que conheci, sabe como alcançar objetivos com poucas palavras!!",
  },
  {
    name: "Raísa Santos Gonçalves",
    reviewsCount: "3 avaliações · 2 fotos no Google",
    badge: "Empatia, Ética & Determinação",
    content:
      "Uma advogada incrível, altamente competente, ética e dedicada, que busca sempre a melhor solução com empatia e determinação.",
  },
  {
    name: "Izabela Santos",
    reviewsCount: "4 avaliações no Google",
    badge: "A Melhor Advogada · Gratidão",
    content:
      "Excelente profissional! Não tenho palavras para agradecer por tudo que já me ajudou! Recomendo de olhos fechados! A melhor advogada!",
  },
  {
    name: "Angelica Martins",
    reviewsCount: "Local Guide · 18 avaliações · 50 fotos",
    badge: "Local Guide Google · Conhecimento Exemplar",
    content:
      "Profissional exemplar! Comprometida e com muito conhecimento na sua área de atuação. Indico com tranquilidade e segurança.",
  },
  {
    name: "Instituto Bom Samaritano",
    reviewsCount: "2 avaliações no Google",
    badge: "Agilidade, Verdade & Compromisso",
    content:
      "Excelente profissional, ágil, verdadeira, e comprometida com o trabalho, recomendo!!!",
  },
  {
    name: "Lislie Desiree",
    reviewsCount: "2 avaliações · 2 fotos no Google",
    badge: "Honestidade, Competência & Humanidade",
    content:
      "Excelente advogada! Honesta, competente e humana.",
  },
  {
    name: "Andreia Leão",
    reviewsCount: "5 avaliações · 2 fotos no Google",
    badge: "Atualizada, Experiente & Dedicada",
    content:
      "Profissional atualizada, experiente, dedicada. Super indico, ressalto também seu domínio em vários campos do Direito.",
  },
  {
    name: "Glauceli André",
    reviewsCount: "3 avaliações no Google",
    badge: "Confiança Total · A Melhor",
    content:
      "Excelente profissional, sem dúvidas, pode confiar, a melhor!!!!!",
  },
  {
    name: "fabio arruda Nunes",
    reviewsCount: "7 avaliações no Google",
    badge: "Responsabilidade & Solução do Problema",
    content:
      "Profissional responsável e comprometida na solução do problema.",
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
      <h2
        className={
          light
            ? "mt-4 font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-[#14110e] sm:text-4xl lg:text-[3.25rem]"
            : "mt-4 font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-[#14110e] sm:text-4xl lg:text-[3.25rem]"
        }
      >
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
      <main className="overflow-hidden bg-[#fbf9f5] text-[#14110e] selection:bg-[#f7e5a9] selection:text-[#14110e]">
        {/* Navigation Bar - Elegant Light Mode with Gold Highlights */}
        <header className="sticky top-0 z-40 border-b border-[#e8dfd2] bg-white/95 backdrop-blur-xl shadow-xs">
          <div className="mx-auto flex h-[96px] max-w-7xl items-center justify-between gap-6 px-5 sm:h-[108px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Suellem Rodrigues Advocacia"
              onClick={closeMenu}
              className="flex items-center gap-3.5 transition-opacity hover:opacity-90"
            >
              <div className="relative size-[60px] shrink-0 overflow-hidden rounded-full border-2 border-[#deb753]/60 bg-[#120f0d] shadow-sm sm:size-[72px]">
                <Image
                  src={LOGO_SEAL_SRC}
                  alt="Selo Monograma Oficial Suellem Rodrigues Advocacia"
                  fill
                  priority
                  sizes="72px"
                  className="object-contain p-1.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-wider text-[#14110e] sm:text-xl lg:text-2xl">
                  SUELLEM RODRIGUES
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8e6318] sm:text-xs">
                  Advocacia · {OAB_REGISTRATION}
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
                Dra. Suellem Rodrigues
              </a>
              <a className="nav-link" href="#atuacao">
                Execuções Penais
              </a>
              <a className="nav-link" href="#diferenciais">
                Por Que Escolher
              </a>
              <a className="nav-link" href="#avaliacoes">
                Depoimentos
              </a>
              <a className="nav-link" href="#contato">
                Plantão & Sede
              </a>
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Avaliações da Dra. Suellem Rodrigues no Google"
                className="grid size-10 place-items-center rounded-lg border border-[#e8dfd2] bg-[#faf7f2] text-[#4c433a] transition-all hover:border-[#deb753] hover:bg-white hover:text-[#14110e] shadow-xs"
                title="5,0 ★ no Google (20 avaliações)"
              >
                <GoogleIcon size={16} />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da Dra. Suellem Rodrigues"
                className="grid size-10 place-items-center rounded-lg border border-[#e8dfd2] bg-[#faf7f2] text-[#4c433a] transition-all hover:border-[#deb753] hover:bg-white hover:text-[#14110e] shadow-xs"
                title={`Instagram ${INSTAGRAM_HANDLE}`}
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                aria-label="Ligar para Suellem Rodrigues Advocacia"
                className="grid size-10 place-items-center rounded-lg border border-[#e8dfd2] bg-[#faf7f2] text-[#4c433a] transition-all hover:border-[#deb753] hover:bg-white hover:text-[#14110e] shadow-xs"
                title={`Ligar: ${PHONE_DISPLAY}`}
              >
                <Phone size={16} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Dra. Suellem Rodrigues"
                className="grid size-10 place-items-center rounded-lg border border-[#e8dfd2] bg-[#faf7f2] text-[#4c433a] transition-all hover:border-[#deb753] hover:bg-white hover:text-[#14110e] shadow-xs"
                title="Atendimento no WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Suellem Rodrigues! Gostaria de agendar uma consulta sobre caso criminal ou execução penal."
                )}
                target="_blank"
                size="sm"
                variant="gold"
                className="rounded-lg shadow-sm"
              >
                Plantão / Consulta <ArrowUpRight size={14} />
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
                    ["Dra. Suellem Rodrigues", "#sobre"],
                    ["Execuções Penais & Prisões", "#atuacao"],
                    ["Por Que Escolher", "#diferenciais"],
                    ["Depoimentos (5,0 ★)", "#avaliacoes"],
                    ["Plantão Criminal & Sede", "#contato"],
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
                        "Olá, Dra. Suellem Rodrigues! Gostaria de consultar sobre um caso criminal ou execução penal."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} /> WhatsApp Direto: {PHONE_DISPLAY}
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#e8dfd2] bg-[#faf7f2] px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-[#14110e] transition-all hover:border-[#deb753]"
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <GoogleIcon size={15} /> 5,0 ★ no Google (20 avaliações)
                    </a>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section - Crisp Light Editorial Canvas with Warm Amber Accents */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-[#e8dfd2] bg-gradient-to-b from-white via-[#fbf9f5] to-[#f4efe6]"
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
                <span>SUELLEM RODRIGUES | ADVOGADA CRIMINALISTA · {OAB_REGISTRATION}</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="max-w-[760px] font-serif text-[2.65rem] leading-[1.08] tracking-[-0.02em] text-[#14110e] sm:text-5xl lg:text-[3.85rem]"
              >
                Defesa Intransigente da Sua Liberdade:{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#8e6318] via-[#c59a3f] to-[#5a3c08]">
                  Atuação Estratégica e Combativa em Execuções Penais e Direito Criminal.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-[#4c433a] sm:text-base sm:leading-8"
              >
                Liderado pela{" "}
                <strong className="font-semibold text-[#14110e]">
                  Dra. Suellem Rodrigues ({OAB_REGISTRATION})
                </strong>
                , especialista em Execuções Penais e pós-graduada em Advocacia Criminal com sede em São Sebastião do Paraíso - MG. Atuamos com determinação inegociável na defesa dos direitos de apenados e investigados, agilizando progressões de regime, livramento condicional, remição de pena e combatendo ilegalidades em Minas Gerais e no SEEU em todo o Brasil.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Suellem Rodrigues! Gostaria de consultar sobre o caso de um apenado / situação penal urgente."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar no WhatsApp com a Dra. Suellem
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 rounded-lg border border-[#e8dfd2] bg-white px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#14110e] shadow-xs transition-all hover:border-[#deb753] hover:bg-[#faf7f2]"
                >
                  Especialidades Penais{" "}
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
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-[#14110e] transition-colors hover:text-[#8e6318]"
                >
                  <Star size={15} className="fill-[#deb753] text-[#deb753]" /> 5,0 estrelas no Google (20 avaliações autênticas)
                </a>
                <span className="inline-flex items-center gap-2 font-medium">
                  <Award size={15} className="text-[#8e6318]" /> {OAB_REGISTRATION}
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <MapPin size={15} className="text-[#8e6318]" /> R. José Albino, 535 · Paraíso - MG
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

            {/* Hero Visual Presentation - Dra. Suellem Rodrigues */}
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
                  alt="Dra. Suellem Rodrigues — Advogada Criminalista e Especialista em Execuções Penais"
                  fill
                  priority
                  unoptimized
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#14110e] via-[#14110e]/75 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-8 sm:left-8 sm:right-8">
                  <div>
                    <p className="font-serif text-2xl font-normal tracking-wide text-white">
                      Dra. Suellem Rodrigues
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#deb753]">
                      Advocacia Criminal · {OAB_REGISTRATION}
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-[#deb753]/40 bg-[#14110e]/85 text-[#f7e5a9] backdrop-blur-sm">
                    <Scale size={18} />
                  </span>
                </div>
              </div>

              {/* Floating authority badge */}
              <div className="absolute -left-3 top-6 z-10 rounded-lg border border-[#deb753]/40 bg-white/95 px-4 py-2 text-[10px] font-bold tracking-[0.14em] text-[#8e6318] shadow-md backdrop-blur-md sm:-left-5">
                SÃO SEBASTIÃO DO PARAÍSO - MG · ATENDIMENTO ON-LINE SEEU BRASIL
              </div>

              {/* Floating Google 5.0 Star Rating */}
              <a
                href={GOOGLE_MAPS_URL}
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
                  20 Avaliações no Google
                </p>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner - Authority Metrics in Clean White */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-[#e8dfd2] bg-white"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              [
                "5,0 ★ no Google",
                "nota máxima com 20 avaliações autênticas destacando competência e agilidade",
              ],
              [
                "Execuções Penais",
                "domínio da LEP, recálculo no SEEU e antecipação legal de progressões",
              ],
              [
                "Paraíso - MG",
                "sede na R. José Albino, 535 - Sl 1 e atendimento digital em todo o Brasil",
              ],
              [
                "Plantão Criminal",
                "atendimento prioritário para flagrantes e audiências de custódia",
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

        {/* Sobre a Dra. Suellem Rodrigues - Editorial Warm Travertine Linen Canvas */}
        <section
          id="sobre"
          className="scroll-mt-24 border-y border-[#e8dfd2] bg-[#faf7f2] py-20 text-[#14110e] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
            {/* Dra. Suellem Rodrigues presentation portrait */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[480px]"
            >
              <div className="relative aspect-[3/4.2] overflow-hidden rounded-2xl border-2 border-[#e8dfd2] bg-white shadow-2xl">
                <Image
                  src={FOTO_SOBRE_SRC}
                  alt="Dra. Suellem Rodrigues — Advogada Criminalista e Especialista em Execução Penal"
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#14110e]/90 via-[#14110e]/30 to-transparent" />
              </div>

              {/* Authority badge card */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-[#deb753]/40 bg-white px-5 py-4 shadow-xl sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-[#8e6318]">
                  <Flame size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8e6318]">
                    Combatividade · Dedicação · Técnica
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-[#14110e]">
                  Dra. Suellem Rodrigues
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-[#8e6318]">
                  {OAB_REGISTRATION} · Especialista em Execuções Penais
                </p>
                <p className="mt-1 text-[11px] leading-4 text-[#5c5042]">
                  R. José Albino, 535 - Centro · São Sebastião do Paraíso - MG
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-[#deb753]/40 sm:-left-7 sm:-top-7 sm:size-32" />
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
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#deb753]/40 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8e6318] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#8e6318]" />
                <span>QUEM É A DRA. SUELLEM RODRIGUES</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-[#14110e] sm:text-4xl lg:text-[3.25rem]"
              >
                Uma defensora incansável:{" "}
                <span className="italic text-[#8e6318]">
                  determinada em assegurar a ampla defesa e a dignidade na execução penal.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-[#4c433a]"
              >
                Com escritório sediado em{" "}
                <strong className="font-bold text-[#14110e]">
                  São Sebastião do Paraíso - MG
                </strong>{" "}
                e capacidade de atuação eletrônica em todo o território nacional, a Dra. Suellem Rodrigues (OAB/MG 174.904) possui 33 anos, formação sólida em Direito e{" "}
                <strong className="font-bold text-[#14110e]">
                  Pós-graduação em Advocacia Criminal
                </strong>
                , sendo amplamente reconhecida pelo domínio técnico da{" "}
                <strong className="font-bold text-[#14110e]">
                  Lei de Execução Penal (LEP)
                </strong>
                .
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-[#4c433a]"
              >
                Ariana nata e extremamente determinada, ela compreende que por trás de cada guia de execução ou processo criminal existe uma pessoa sob a custódia do Estado e uma família aflita em busca de respostas transparentes. Não promete resultados impossíveis, mas luta com rigor processual para que nenhum direito seja violado e nenhum dia a mais de pena seja cumprido indevidamente.
              </motion.p>

              {/* Client Quote Card from real reviews */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-xl border border-[#e8dfd2] bg-white p-5 shadow-xs"
              >
                <blockquote className="font-serif text-sm italic leading-relaxed text-[#14110e]">
                  &ldquo;Profissional excelente e extremamente atenciosa. Demonstrou grande conhecimento como advogada criminalista, esclarecendo todas as dúvidas de forma clara e objetiva. Além disso, transmite muita segurança e confiança, características fundamentais nessa área. Recomendo seu trabalho sem hesitação!&rdquo;
                </blockquote>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-[#8e6318]">
                  — Mayara Christina Nunes · Avaliação Verificada no Google Meu Negócio (5,0 ★)
                </p>
              </motion.div>

              {/* Personality & Profile Cards from the creative */}
              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-2 gap-3 text-xs sm:grid-cols-3"
              >
                <div className="rounded-lg border border-[#e8dfd2] bg-white p-3 shadow-xs">
                  <p className="font-bold text-[#14110e]">33 Anos</p>
                  <p className="mt-0.5 text-[11px] text-[#6b5d50]">
                    Pós-Graduada em Advocacia Criminal
                  </p>
                </div>
                <div className="rounded-lg border border-[#e8dfd2] bg-white p-3 shadow-xs">
                  <p className="font-bold text-[#14110e]">Especialista</p>
                  <p className="mt-0.5 text-[11px] text-[#6b5d50]">
                    Domínio da Execução Penal & SEEU
                  </p>
                </div>
                <div className="rounded-lg border border-[#e8dfd2] bg-white p-3 shadow-xs col-span-2 sm:col-span-1">
                  <p className="font-bold text-[#14110e]">Extremamente Determinada</p>
                  <p className="mt-0.5 text-[11px] text-[#6b5d50]">
                    Combatividade na defesa da liberdade
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-1 gap-2.5 text-xs font-semibold text-[#14110e] sm:grid-cols-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#8e6318]" />
                  <span>Sede na R. José Albino, 535 - Sl 1 - Paraíso - MG</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#8e6318]" />
                  <span>Nota máxima 5,0 ★ no Google com 20 avaliações</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#8e6318]" />
                  <span>Comunicação direta com familiares via WhatsApp</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#8e6318]" />
                  <span>Atuação presencial em Minas Gerais e no SEEU Brasil</span>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Suellem Rodrigues! Gostaria de agendar uma consulta sobre caso criminal ou execução penal."
                  )}
                  target="_blank"
                  size="md"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar com a Dra. Suellem
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

        {/* Pilares de Atuação / Especialidades Penais & Execuções */}
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
                eyebrow="PILARES DE ATUAÇÃO CRIMINAL & EXECUÇÃO PENAL"
                description="Defesa técnica minuciosa em todas as fases da persecução penal, com ênfase especial na garantia dos direitos dos apenados perante as Varas de Execuções Penais (VEP)."
              >
                Atuação combativa e especializada em{" "}
                <span className="italic text-[#8e6318]">
                  São Sebastião do Paraíso, Minas Gerais e em todo o Brasil.
                </span>
              </Heading>
              <p className="max-w-[270px] pb-1 text-xs leading-6 text-[#5c5042]">
                Clique em uma especialidade abaixo para conferir as demandas
                atendidas e iniciar uma consulta diretamente pelo WhatsApp.
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

        {/* Por Que Escolher a Dra. Suellem Rodrigues - Diferenciais */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-t border-[#e8dfd2] bg-[#faf7f2] py-20 text-[#14110e] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                light
                eyebrow="NOSSOS PILARES DE ATUAÇÃO COMBATIVA"
                description="A liberdade é o bem mais valioso de uma pessoa. Quando ela é cerceada, cada dia conta e cada falha processual pode custar meses ou anos a mais de prisão."
              >
                Por que confiar seu caso à{" "}
                <span className="italic text-[#8e6318]">
                  Dra. Suellem Rodrigues?
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Suellem Rodrigues! Gostaria de consultar sobre a situação jurídica de um apenado."
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
              {/* Card 1: Rigor no SEEU & Execução Penal */}
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
                      <Gavel size={14} /> Especialista em Execução Penal
                    </span>
                    <span className="text-xs font-semibold text-[#8e6318]">
                      SEEU & Cálculos da LEP
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#14110e] sm:text-[1.75rem]">
                    Auditoria Rigorosa do Atestado de Pena & Eliminação de Erros
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#4c433a]">
                    Muitos apenados cumprem pena além do tempo devido simplesmente porque ninguém auditou a guia de execução. Analisamos cada fração, data-base, remições não computadas e unificações para buscar a progressão de regime no dia exato previsto em lei.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-[#14110e]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8e6318]" />
                      <span>Cálculo exato das frações (16%, 20%, 25%, 30%, 40%, 50%, 60%, 70%)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8e6318]" />
                      <span>Inclusão de todas as remições por estudo, trabalho e leitura</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8e6318]" />
                      <span>Peticionamento ágil e insistente perante o juiz da VEP</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#e8dfd2] pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Suellem Rodrigues! Gostaria que você fizesse uma auditoria no cálculo de pena do meu familiar."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#deb753]/40 bg-[#faf7f2] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#14110e] transition-all hover:border-[#8e6318] hover:bg-[#14110e] hover:text-[#f7e5a9]"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Solicitar Auditoria de Pena no WhatsApp
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>

              {/* Card 2: Acolhimento e Verdade com a Família */}
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
                      <Users2 size={14} /> Atendimento Humanizado & Direto
                    </span>
                    <span className="text-xs font-semibold text-[#8e6318]">
                      Sem Falsas Promessas
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#14110e] sm:text-[1.75rem]">
                    Você e Sua Família Nunca Ficam no Escuro Sem Resposta
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#4c433a]">
                    Sabemos a dor e o desgaste emocional que uma prisão causa aos parentes. Com a Dra. Suellem Rodrigues, você fala diretamente com a advogada pelo WhatsApp, recebe atualizações claras sobre o andamento e tem a segurança de uma atuação séria, sem promessas vazias.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-[#14110e]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8e6318]" />
                      <span>Contato direto pelo WhatsApp, sem barreiras ou robôs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8e6318]" />
                      <span>Explicação clara sobre prazos reais e expectativas concretas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8e6318]" />
                      <span>Respeito absoluto à dor da família e à dignidade do apenado</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#e8dfd2] pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Suellem Rodrigues! Gostaria de conversar diretamente sobre a situação do meu familiar."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#deb753]/40 bg-[#faf7f2] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#14110e] transition-all hover:border-[#8e6318] hover:bg-[#14110e] hover:text-[#f7e5a9]"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Conversar Diretamente com a Dra. Suellem
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Nosso Método de Trabalho em 3 Passos */}
        <section className="relative overflow-hidden border-t border-[#e8dfd2] bg-[#faf7f2] py-20 text-[#14110e] sm:py-24 lg:py-28">
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-[#deb753]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-[#deb753]/10 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                light
                eyebrow="COMO ATUAMOS NA SUA DEFESA"
                description="Um método combativo, técnico e transparente para garantir que cada benefício previsto na Lei de Execução Penal seja efetivado o mais rápido possível."
              >
                Três etapas claras para{" "}
                <span className="italic text-[#8e6318]">
                  antecipar direitos e lutar pela liberdade.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-[#e8dfd2] bg-white p-6 font-serif text-base italic leading-7 text-[#14110e] shadow-xs">
                &ldquo;Na execução penal, quem espera pelo ritmo da burocracia perde meses preciosos de liberdade. Nosso papel é agir com combatividade e técnica para colocar o apenado de volta ao convívio de sua família o quanto antes.&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-[#8e6318]">
                  — Dra. Suellem Rodrigues · OAB/MG 174.904
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
                  "Auditoria & Diagnóstico Processual Imediato",
                  "Acessamos os autos no SEEU ou no PJe, auditamos a guia de recolhimento, conferimos a data-base, apuramos remições não computadas e verificamos a data exata em que o benefício deveria ter sido concedido.",
                ],
                [
                  "02",
                  "Peticionamento Técnico & Documentação Completa",
                  "Instruímos o pedido com todos os documentos necessários (atestados de conduta carcerária, comprovantes de trabalho/estudo, laudos e endereços), fundamentando na doutrina e súmulas dos tribunais superiores.",
                ],
                [
                  "03",
                  "Despacho Direto com Juízes & Feedback aos Familiares",
                  "Não deixamos a petição parada. Despachamos prioritariamente para acelerar a manifestação do Ministério Público e a decisão do juiz da VEP, mantendo a família ciente de cada passo.",
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

        {/* Avaliações / Depoimentos Reais Verificados no Google */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 border-t border-[#deb753]/30 bg-[#f4efe6] py-20 text-[#14110e] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                light
                eyebrow="PROVA SOCIAL VERIFICADA · GOOGLE MEU NEGÓCIO"
                description="Confira avaliações reais e espontâneas de clientes e parceiros sobre o trabalho da Dra. Suellem Rodrigues na sede em São Sebastião do Paraíso - MG e através do atendimento on-line em todo o Brasil."
              >
                Avaliada com nota máxima 5,0 ★ com{" "}
                <span className="italic text-[#8e6318]">
                  20 avaliações no Google pela competência na execução penal, ética e agilidade.
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
                    Suellem Rodrigues | Advogada
                  </p>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-[#8e6318] transition-colors hover:text-[#14110e]"
                  >
                    20 avaliações no Google <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Client Reviews Grid (Real Google Reviews) */}
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
                  "Advogada em São Sebastião do Paraíso - MG",
                  "Atuação no SEEU em Todo o Brasil",
                  "Nota 5,0 ★ no Google (20 avaliações)",
                  "Execução Penal & Progressão de Regime",
                  "Remição por Trabalho, Leitura e Estudo",
                  "Plantão de Audiência de Custódia 24h",
                  "Habeas Corpus TJMG, STJ e STF",
                  "Tribunal do Júri & Revisão Criminal",
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
                href={GOOGLE_MAPS_URL}
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

        {/* Contato & Localização da Sede em São Sebastião do Paraíso - MG */}
        <section
          id="contato"
          className="scroll-mt-24 border-t border-[#deb753]/30 bg-[#faf7f2] py-20 text-[#14110e] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                light
                eyebrow="CONTATO & ATENDIMENTO EM SÃO SEBASTIÃO DO PARAÍSO"
                description="Inicie seu atendimento imediatamente pelo WhatsApp para relatar seu caso ou agende uma reunião presencial em nossa sede. Atuamos com celeridade nas Varas de Execuções Penais, presídios, delegacias e tribunais de Minas Gerais e em todo o Brasil através do SEEU nacional."
              >
                Estamos prontos para{" "}
                <span className="italic text-[#8e6318]">
                  escutar sua situação e defender sua liberdade.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Suellem Rodrigues! Gostaria de agendar um atendimento para análise urgente de execução penal / caso criminal."
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
                      Horário de Funcionamento & Plantão
                    </p>
                    <p className="mt-0.5 text-[#14110e]">
                      Segunda a Sexta-feira das 08:00 às 19:00
                    </p>
                    <p className="text-[11px] text-[#786b5e]">
                      Atendimento presencial no Centro de São Sebastião do Paraíso e plantão 24h para prisões em flagrante e custódia
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
                      href={GOOGLE_MAPS_URL}
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
                    alt="Selo Suellem Rodrigues Advocacia"
                    fill
                    sizes="76px"
                    className="object-contain p-1.5"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8e6318]">
                    Sede do Escritório
                  </p>
                  <p className="mt-0.5 font-serif text-xl font-bold text-[#14110e] sm:text-2xl">
                    Suellem Rodrigues | Advogada
                  </p>
                </div>
              </div>

              <address className="mt-7 max-w-md text-[14px] not-italic leading-7 text-[#4c433a]">
                <strong className="font-semibold text-[#14110e]">
                  Dra. Suellem Rodrigues
                </strong>
                <br />
                Advogada Criminalista · {OAB_REGISTRATION}
                <br />
                Especialista em Execuções Penais
                <br />
                Pós-Graduada em Advocacia Criminal
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
                    08:00 às 19:00
                  </span>
                  <span>Atendimento Presencial</span>
                  <span className="text-right font-medium text-[#8e6318]">
                    São Sebastião do Paraíso - MG
                  </span>
                  <span>Endereço</span>
                  <span className="text-right text-[#14110e]">R. José Albino, 535 - Sl 1</span>
                  <span>Plantão Flagrantes</span>
                  <span className="text-right font-semibold text-[#8e6318]">24 Horas</span>
                  <span>Atendimento Online</span>
                  <span className="text-right text-[#14110e]">SEEU Brasil</span>
                </div>
              </div>

              <div className="my-7 h-px bg-[#e8dfd2]" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-[#786b5e]">
                  Atendimento ágil, acolhedor e com total sigilo profissional
                </p>
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Suellem Rodrigues! Gostaria de agendar um atendimento no escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#deb753]/40 bg-[#f4efe6] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#14110e] transition-colors hover:border-[#8e6318] hover:bg-[#14110e] hover:text-[#f7e5a9]"
                >
                  <WhatsAppIcon size={14} /> Falar com a Especialista <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip - Warm Light Gold & Silk Canvas */}
        <section className="border-t border-[#deb753]/30 bg-gradient-to-r from-[#f4efe6] via-[#faf7f2] to-[#f4efe6] px-5 py-14 text-[#14110e] shadow-xs sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8e6318]">
                <Sparkles size={13} /> SUELLEM RODRIGUES ADVOCACIA · SÃO SEBASTIÃO DO PARAÍSO & MINAS GERAIS · {OAB_REGISTRATION}
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-[#14110e] sm:text-4xl">
                Precisa de uma defesa criminal combativa e experiente para defender a sua liberdade?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dra. Suellem Rodrigues! Gostaria de uma avaliação para o caso de um apenado / situação penal urgente."
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

        {/* Footer - Elegant Light Mode */}
        <footer className="border-t border-[#e8dfd2] bg-[#f4efe6] px-5 py-14 text-[#14110e] sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <a
                href="#inicio"
                aria-label="Suellem Rodrigues Advocacia"
                className="inline-flex items-center gap-3.5 transition-transform hover:scale-[1.02]"
              >
                <div className="relative size-[72px] shrink-0 overflow-hidden rounded-full border-2 border-[#deb753]/50 bg-[#120f0d] shadow-sm sm:size-[80px]">
                  <Image
                    src={LOGO_SEAL_SRC}
                    alt="Suellem Rodrigues Advocacia"
                    fill
                    sizes="80px"
                    className="object-contain p-1.5"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-xl font-bold tracking-wider text-[#14110e] sm:text-2xl">
                    SUELLEM RODRIGUES
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8e6318]">
                    Advocacia Criminal · {OAB_REGISTRATION}
                  </span>
                </div>
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-[#5c5042]">
                ⚖️ Defesa combativa, estratégica e intransigente na garantia dos direitos fundamentais. Especialista em Execuções Penais, Progressão de Regime, Livramento Condicional e Habeas Corpus em Minas Gerais e em todo o Brasil.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-[#8e6318]">
                Dra. Suellem Rodrigues · {OAB_REGISTRATION}
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
                  Dra. Suellem Rodrigues
                </a>
                <a className="footer-link" href="#atuacao">
                  Execuções Penais & Prisões
                </a>
                <a className="footer-link" href="#diferenciais">
                  Por Que Escolher
                </a>
                <a className="footer-link" href="#avaliacoes">
                  Depoimentos de Clientes (5,0 ★)
                </a>
                <a className="footer-link" href="#contato">
                  Plantão & Sede
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
                    "Olá, Dra. Suellem Rodrigues! Gostaria de falar com o escritório."
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
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-start gap-2"
                >
                  <MapPin size={15} className="mt-0.5 shrink-0" />
                  <span>{ADDRESS_TEXT}</span>
                </a>
                <p className="inline-flex items-center gap-2 pt-1 text-[11px] text-[#8e6318]">
                  <Clock size={14} className="shrink-0" /> Seg a Sex: 08:00 às 19:00 (Plantão 24h)
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-[#e8dfd2] pt-6 text-[10px] text-stone-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} SUELLEM RODRIGUES ADVOCACIA. Todos os direitos reservados.
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
              "Olá, Dra. Suellem Rodrigues! Gostaria de consultar sobre um caso criminal / execução penal com seu escritório."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Dra. Suellem Rodrigues"
            className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          >
            <WhatsAppIcon size={28} />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-[#14110e] border border-[#deb753]/30 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg transition-opacity group-hover:block">
              Falar com a Dra. Suellem Rodrigues
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

                <p className="eyebrow-light">ESPECIALIDADE PENAL</p>

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
