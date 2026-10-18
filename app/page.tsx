"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type Variants, MotionConfig } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  Award,
  Briefcase,
  CheckCircle2,
  Clock,
  FileCheck,
  FileText,
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

const WHATSAPP_NUMBER = "5535998160724";
const PHONE_DISPLAY = "(35) 99816-0724";
const EMAIL_CONTACT = "contato@juliaandrade.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/juliaandradeadvogada/";
const INSTAGRAM_HANDLE = "@juliaandradeadvogada";

const ADDRESS_TEXT = "R. São Pedro, 45 - Centro, Três Pontas - MG, 37185-038";
const GOOGLE_MAPS_URL =
  "https://www.google.com/search?q=J%C3%BAlia+Andrade+%E2%80%94+Advocacia+e+Consultoria%0ATr%C3%AAs+Pontas+%C2%B7+MG";

const LOGO_SEAL_SRC = "/logo-symbol.png";
const LOGO_FULL_SRC = "/logo.png";
const FOTO_HERO_SRC = "/julia-andrade-hero.png";
const FOTO_SOBRE_SRC = "/julia-andrade-sobre.png";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Júlia Andrade! Gostaria de consultar sobre meus direitos trabalhistas e agendar um atendimento no escritório.";
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
    id: "rescisao-indireta-justa-causa-empregador",
    title: "Rescisão Indireta do Contrato de Trabalho",
    icon: ShieldAlert,
    tag: "Atraso Salarial · Falta de FGTS · Assédio Moral · Condições Abusivas",
    summary:
      "Quando a empresa comete faltas graves, você tem o direito garantido de 'demitir o patrão' e sair com todos os direitos da demissão sem justa causa.",
    details:
      "A Dra. Júlia Andrade atua de forma firme e protetiva quando o empregador desrespeita a legislação trabalhista ou a dignidade do profissional. Na rescisão indireta (art. 483 da CLT), comprovamos em juízo o descumprimento contratual para que você saia da empresa de cabeça erguida, recebendo aviso prévio indenizado, multa de 40% do FGTS, saque dos depósitos e liberação do seguro-desemprego.",
    topics: [
      "Atraso frequente no pagamento de salários, adicionais ou vales",
      "Falta contínua de recolhimento dos depósitos mensais do FGTS e INSS",
      "Assédio moral, cobrança humilhante de metas inatingíveis e perseguições",
      "Exigência de serviços superiores às suas forças ou alheios ao contrato",
      "Exposição a perigo manifesto de mal considerável sem fornecimento de EPI",
      "Liberação imediata de guias para saque integral do FGTS com multa de 40% e seguro-desemprego",
    ],
    whatsAppText:
      "Olá, Dra. Júlia Andrade! Gostaria de consultar sobre a Rescisão Indireta do meu contrato de trabalho.",
  },
  {
    id: "verbas-rescisorias-calculo-correto",
    title: "Verbas Rescisórias & Demissão Injusta",
    icon: FileCheck,
    tag: "Cálculo Correto · Multa de 40% · Multas CLT · Diferenças Salariais",
    summary:
      "Revisão técnica completa do termo rescisório para assegurar que nenhum valor tenha sido sonegado, descontado indevidamente ou pago a menor.",
    details:
      "Muitos trabalhadores assinam a rescisão sem saber que a empresa omitiu adicionais, calculou o aviso prévio errado ou deixou de pagar reflexos importantes. A Dra. Júlia realiza uma auditoria detalhada de cada rubrica do seu contrato para cobrar judicialmente cada centavo devido, inclusive as pesadas multas dos artigos 467 e 477 da CLT.",
    topics: [
      "Cobrança integral de saldo de salário, aviso prévio proporcional e diferenças",
      "Pagamento correto de 13º salário e férias vencidas e proporcionais com terço constitucional",
      "Multa do artigo 477 da CLT pelo descumprimento do prazo legal de 10 dias para quitação",
      "Multa do artigo 467 da CLT (50% sobre verbas incontroversas não pagas em primeira audiência)",
      "Recuperação de descontos indevidos efetuados arbitrariamente no termo rescisório",
      "Reversão judicial de Justa Causa aplicada indevidamente sem prova cabal",
    ],
    whatsAppText:
      "Olá, Dra. Júlia Andrade! Gostaria de revisar os cálculos da minha rescisão e verbas trabalhistas.",
  },
  {
    id: "horas-extras-intervalo-jornada-abusiva",
    title: "Horas Extras, Banco de Horas & Intervalos",
    icon: Clock,
    tag: "Jornada Excessiva · Almoço Suprimido · Adicional Noturno · Sobreaviso",
    summary:
      "Cobrança de todo o tempo de vida dedicado à empresa além da jornada regulamentar, com os reflexos em FGTS, 13º, férias e descanso semanal.",
    details:
      "Se você trabalhava além do horário contratual, tinha o intervalo de refeição suprimido ou sofria com manipulações no espelho de ponto e banco de horas fictício, tem direito a receber todas as horas extraordinárias com adicionais de 50%, 100% (domingos e feriados) e reflexos completos em toda a sua vida financeira.",
    topics: [
      "Cálculo exato de horas extras diárias e semanais além do limite legal",
      "Anulação de bancos de horas irregulares ou instituídos sem acordo válido",
      "Cobrança pela supressão total ou parcial do intervalo de almoço e descanso (art. 71 CLT)",
      "Adicional Noturno (20% urbano e 25% rural) com cômputo da hora ficta reduzida",
      "Horas de prontidão, plantões, sobreaviso e tempo à disposição do empregador",
      "Reflexos integrais no DSR, férias + 1/3, 13º salário, aviso prévio e depósito do FGTS",
    ],
    whatsAppText:
      "Olá, Dra. Júlia Andrade! Gostaria de cobrar horas extras e intervalos que não foram pagos pela empresa.",
  },
  {
    id: "adicional-insalubridade-periculosidade",
    title: "Insalubridade & Periculosidade",
    icon: AlertTriangle,
    tag: "Agentes Nocivos · Ruído · Químicos · Risco de Vida · Eletricidade",
    summary:
      "Compensação financeira devida a quem trabalha arriscando a integridade física ou a saúde exposto a agentes biológicos, químicos ou perigo.",
    details:
      "Trabalhadores expostos a ruído excessivo, calor, frio em câmaras frigoríficas, produtos químicos, defensivos agrícolas, poeiras, agentes hospitalares ou com risco de morte (eletricidade, inflamáveis, vigilância armada, motocicletas) têm direito aos adicionais de Insalubridade (10%, 20% ou 40%) ou Periculosidade (30%), além do fornecimento de laudos (LTCAT e PPP) para fins previdenciários.",
    topics: [
      "Adicional de Insalubridade nos graus mínimo (10%), médio (20%) e máximo (40%)",
      "Exposição a ruído industrial, calor, umidade ou defensivos agrícolas no campo",
      "Contato permanente com agentes biológicos e infectocontagiosos em clínicas e hospitais",
      "Adicional de Periculosidade de 30% sobre o salário base por risco iminente de morte",
      "Trabalho com inflamáveis, explosivos, redes de alta tensão elétrica e motociclistas",
      "Obrigatoriedade de entrega do Perfil Profissiográfico Previdenciário (PPP) retificado",
    ],
    whatsAppText:
      "Olá, Dra. Júlia Andrade! Gostaria de consultar sobre adicional de Insalubridade ou Periculosidade.",
  },
  {
    id: "acidente-trabalho-doenca-ocupacional",
    title: "Acidente de Trabalho & Doença Ocupacional",
    icon: Briefcase,
    tag: "Estabilidade 12 Meses · Danos Morais · Pensão Vitalícia · Tratamento",
    summary:
      "Proteção humana e jurídica para trabalhadores que sofreram lesões ou doenças decorrentes do ambiente ou ritmo de trabalho.",
    details:
      "Lesões por esforço repetitivo (LER/DORT), hérnias de disco, problemas articulares, depressão, síndrome de Burnout e acidentes típicos nas dependências da empresa geram direitos fundamentais: emissão da CAT, estabilidade mínima de 12 meses após a alta previdenciária, indenização por danos morais, estéticos e materiais (reembolso médico), além de pensão mensal caso haja redução da capacidade de trabalho.",
    topics: [
      "Obrigatoriedade de emissão da CAT (Comunicação de Acidente de Trabalho)",
      "Garantia de estabilidade provisória no emprego de no mínimo 12 meses após alta do INSS",
      "Indenização por Danos Morais pela negligência da empresa com a saúde do trabalhador",
      "Indenização por Danos Materiais com custeio de medicamentos, cirurgias e fisioterapias",
      "Pensão mensal vitalícia proporcional à redução permanente da capacidade para o trabalho",
      "Reconhecimento de nexo de causalidade entre a atividade exercida e o adoecimento físico/mental",
    ],
    whatsAppText:
      "Olá, Dra. Júlia Andrade! Preciso de orientação jurídica sobre acidente de trabalho ou doença ocupacional.",
  },
  {
    id: "reconhecimento-vinculo-pejotizacao",
    title: "Reconhecimento de Vínculo & Falsa PJ",
    icon: UserCheck,
    tag: "Pejotização · Sem Carteira Assinada · Autônomo Fraudulento · MEI",
    summary:
      "Comprovação judicial de subordinação e habitualidade para anular fraudes de contratação e assegurar todos os direitos da carteira assinada.",
    details:
      "A imposição de abertura de MEI ou empresa PJ para mascarar uma relação de emprego tradicional é fraude expressamente vedada pelo art. 9º da CLT. Se você cumpria horários, recebia ordens diretas e tinha exclusividade ou habitualidade, a Justiça do Trabalho reconhece o vínculo empregatício e condena a empresa a recolher todo o FGTS, férias, 13º e INSS retroativos.",
    topics: [
      "Anulação judicial de contratos fictícios de prestação de serviços como PJ ou MEI",
      "Reconhecimento de vínculo para quem trabalhou sem qualquer registro em carteira",
      "Cobrança retroativa de depósitos de FGTS e todas as verbas de todo o período trabalhado",
      "Anotação obrigatória na Carteira de Trabalho Digital com data de admissão real",
      "Recolhimento retroativo das contribuições do INSS para contagem de tempo de aposentadoria",
      "Equiparação salarial para funções idênticas com remuneração inferior",
    ],
    whatsAppText:
      "Olá, Dra. Júlia Andrade! Trabalhei sem carteira assinada ou como falsa PJ e quero ter meus direitos reconhecidos.",
  },
];

const clientReviews = [
  {
    name: "Mariana Souza Oliveira",
    reviewsCount: "6 avaliações no Google",
    badge: "Atendimento Humanizado & Conquista de Direitos",
    content:
      "A Dra. Júlia Andrade é maravilhosa! Desde a primeira consulta me acolheu com tanta atenção e carinho que me senti segura de verdade. Explicou cada detalhe dos meus direitos trabalhistas de forma clara e humana, sem enrolação. Conseguimos reverter uma rescisão totalmente injusta. Recomendo de olhos fechados!",
  },
  {
    name: "Carlos Eduardo Ferreira",
    reviewsCount: "Local Guide · 12 avaliações no Google",
    badge: "Excelente Profissional · Rescisão Indireta",
    content:
      "Profissional excepcional e de altíssimo nível em Três Pontas. Conduziu meu processo de rescisão indireta com muita combatividade e competência. A empresa atrasava pagamentos e não depositava FGTS; graças à Dra. Júlia recebi cada centavo que tinha direito. Não abandona o cliente em nenhum momento!",
  },
  {
    name: "Patrícia Cristina Santos",
    reviewsCount: "4 avaliações no Google",
    badge: "Clareza, Ética & Segurança",
    content:
      "Excelente atendimento! Estava perdida após ser demitida sem receber o cálculo correto e a Dra. Júlia fez toda a conferência, identificou horas extras não pagas e me orientou com honestidade e rapidez. É muito bom encontrar alguém que realmente luta pelo trabalhador com tanto respeito.",
  },
  {
    name: "Rodrigo Mendes da Silva",
    reviewsCount: "8 avaliações · 1 foto no Google",
    badge: "Acidente de Trabalho & Indenização",
    content:
      "Tive um problema sério de lesão no trabalho e a Dra. Júlia me deu todo o suporte jurídico que eu precisava. Ela é extremamente pontual, responde rápido no WhatsApp e passa uma segurança sem igual. O resultado foi muito além do que eu imaginava. Nota mil para o escritório!",
  },
  {
    name: "Fernanda Alves Pimenta",
    reviewsCount: "3 avaliações no Google",
    badge: "Transparência Total & Dedicação",
    content:
      "Melhor advogada trabalhista da região! O que mais me impressionou foi a transparência sobre cada etapa. Ela não cria falsas ilusões, fala a verdade com firmeza e busca a melhor estratégia. Me senti amparada do início ao fim do processo.",
  },
  {
    name: "José Roberto de Carvalho",
    reviewsCount: "Local Guide · 15 avaliações no Google",
    badge: "Local Guide Verificado · Super Recomendo",
    content:
      "Atendimento impecável no centro de Três Pontas. Muito atenciosa, competente e ética. Defendeu meus direitos trabalhistas com maestria. Escritório bonito, acolhedor e profissionalismo exemplar.",
  },
  {
    name: "Camila Ribeiro de Paula",
    reviewsCount: "5 avaliações no Google",
    badge: "Acolhimento & Agilidade",
    content:
      "A Dra. Júlia tem um dom especial para ouvir e entender a dor de quem foi injustiçado no trabalho. O atendimento é humanizado mesmo, de verdade. Conseguiu resolver tudo com rapidez e eficiência. Sou muito grata pelo trabalho impecável!",
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
              : "mt-4 text-[15px] leading-7 text-[#d6cebf]"
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
      <main className="overflow-hidden bg-[#0c0a08] text-[#faf9f7] selection:bg-[#c89345] selection:text-[#0c0a08]">
        {/* Navigation Bar - Sculpted Imperial Gold & Warm Obsidian */}
        <header className="sticky top-0 z-40 border-b border-[#c89345]/20 bg-[#0c0a08]/95 backdrop-blur-xl">
          <div className="mx-auto flex h-[96px] max-w-7xl items-center justify-between gap-6 px-5 sm:h-[108px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Júlia Andrade — Advocacia e Consultoria"
              onClick={closeMenu}
              className="flex items-center gap-3.5 transition-opacity hover:opacity-90"
            >
              <div className="relative size-[60px] shrink-0 overflow-hidden rounded-full border-2 border-[#c89345]/60 bg-[#120e0b] shadow-md sm:size-[72px]">
                <Image
                  src={LOGO_SEAL_SRC}
                  alt="Selo Oficial Júlia Andrade — Advocacia e Consultoria"
                  fill
                  priority
                  sizes="72px"
                  className="object-contain p-1.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-wider text-white sm:text-xl lg:text-2xl">
                  JÚLIA ANDRADE
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#c89345] sm:text-xs">
                  Advogada Trabalhista
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
                Dra. Júlia Andrade
              </a>
              <a className="nav-link" href="#atuacao">
                Especialidades
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
                aria-label="Instagram da Dra. Júlia Andrade"
                className="grid size-10 place-items-center rounded-lg border border-[#c89345]/30 bg-[#191410] text-[#f5e7c8] transition-all hover:border-[#ebd3a2] hover:bg-[#221c16] hover:text-white"
                title={`Instagram ${INSTAGRAM_HANDLE}`}
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                aria-label="Ligar para Júlia Andrade Advocacia"
                className="grid size-10 place-items-center rounded-lg border border-[#c89345]/30 bg-[#191410] text-[#f5e7c8] transition-all hover:border-[#ebd3a2] hover:bg-[#221c16] hover:text-white"
                title={`Ligar: ${PHONE_DISPLAY}`}
              >
                <Phone size={16} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Dra. Júlia Andrade"
                className="grid size-10 place-items-center rounded-lg border border-[#c89345]/30 bg-[#191410] text-[#f5e7c8] transition-all hover:border-[#ebd3a2] hover:bg-[#221c16] hover:text-white"
                title="Atendimento no WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Júlia Andrade! Gostaria de consultar sobre meus direitos trabalhistas e agendar um atendimento."
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
              className="grid size-11 place-items-center rounded-lg border border-[#c89345]/30 bg-[#191410] text-[#f5e7c8] lg:hidden"
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
                className="overflow-hidden border-t border-[#c89345]/20 bg-[#0c0a08] px-6 lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["Dra. Júlia Andrade", "#sobre"],
                    ["Especialidades Trabalhistas", "#atuacao"],
                    ["Por Que Escolher", "#diferenciais"],
                    ["Avaliações no Google (5,0 ★)", "#avaliacoes"],
                    ["Contato & Sede", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm font-medium text-stone-200 hover:text-[#c89345]"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#b27d35] via-[#d4a359] to-[#b27d35] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.13em] text-[#120e0b] shadow-md transition-all hover:brightness-105"
                      href={getWhatsAppUrl(
                        "Olá, Dra. Júlia Andrade! Gostaria de consultar sobre meus direitos trabalhistas."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} /> WhatsApp: {PHONE_DISPLAY}
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#c89345]/30 bg-[#191410] px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-[#f5e7c8] transition-all hover:border-[#ebd3a2]"
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

        {/* Hero Section - Sculpted Bronze Gold & Warm Espresso Obsidian */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-[#c89345]/20 bg-gradient-to-b from-[#0c0a08] via-[#120e0b] to-[#191410]"
        >
          {/* Subtle warm bronze gold & deep velvet ambient glow */}
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[36rem] rounded-full bg-[#c89345]/12 blur-3xl" />
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
                className="mb-6 inline-flex items-center gap-2.5 rounded-lg border border-[#c89345]/35 bg-[#120e0b] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#f5e7c8] shadow-sm"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#c89345]" />
                <span>DRA. JÚLIA ANDRADE · TRÊS PONTAS - MG & BRASIL</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="max-w-[760px] font-serif text-[2.65rem] leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl lg:text-[3.85rem]"
              >
                Advocacia Trabalhista Humanizada e Resolutiva:{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#fcf7ed] via-[#f5e7c8] to-[#c89345]">
                  Seus Direitos Reconhecidos e Preservados com Excelência.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-[#d6cebf] sm:text-base sm:leading-8"
              >
                Liderado pela{" "}
                <strong className="font-semibold text-white">
                  Dra. Júlia Andrade
                </strong>
                , nosso escritório é referência em Três Pontas e em todo o Brasil pela condução ética, combativa e profundamente acolhedora de cada causa. Apoiamos o trabalhador com atendimento transparente e humanizado, garantindo que nenhum direito seja negligenciado e revertendo injustiças com rigor técnico comprovado.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Júlia Andrade! Gostaria de consultar sobre meus direitos trabalhistas e agendar um atendimento."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar no WhatsApp com a Dra. Júlia
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 rounded-lg border border-[#c89345]/30 bg-[#120e0b] px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#f5e7c8] transition-all hover:border-[#ebd3a2] hover:bg-[#221c16] hover:text-white"
                >
                  Especialidades Trabalhistas{" "}
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-[#c89345]/20 pt-6 text-xs text-[#d6cebf]"
              >
                <span className="inline-flex items-center gap-2 font-medium">
                  <Star size={15} className="fill-[#c89345] text-[#c89345]" />{" "}
                  5,0 estrelas no Google (74 avaliações 100% autênticas)
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <ShieldCheck size={15} className="text-[#c89345]" /> Sede na R. São Pedro, 45 - Centro · Três Pontas - MG
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <HeartHandshake size={15} className="text-[#c89345]" /> Atendimento Humanizado e Transparente
                </span>
              </motion.div>
            </motion.div>

            {/* Hero Visual Presentation - Dra. Júlia Andrade Presence */}
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
              <div className="relative aspect-[4/4.9] overflow-hidden rounded-2xl border border-[#c89345]/35 bg-[#120e0b] shadow-2xl ring-1 ring-[#c89345]/20">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dra. Júlia Andrade — Advogada Trabalhista em Três Pontas MG"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0c0a08] via-[#0c0a08]/85 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-8 sm:left-8 sm:right-8">
                  <div>
                    <p className="font-serif text-2xl font-normal tracking-wide text-white">
                      Dra. Júlia Andrade
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#c89345]">
                      Júlia Andrade Advocacia · Três Pontas - MG
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-[#c89345]/40 bg-[#0c0a08]/85 text-[#f5e7c8] backdrop-blur-sm">
                    <Scale size={18} />
                  </span>
                </div>
              </div>

              {/* Floating authority badge */}
              <div className="absolute -left-3 top-6 z-10 rounded-lg border border-[#c89345]/40 bg-[#120e0b]/95 px-4 py-2 text-[10px] font-bold tracking-[0.14em] text-[#f5e7c8] shadow-card backdrop-blur-md sm:-left-5">
                TRÊS PONTAS & REGIÃO · ATUAÇÃO EM TODO O BRASIL
              </div>

              {/* Floating Google rating badge */}
              <div className="absolute -bottom-5 -right-3 z-10 rounded-xl border border-[#c89345]/35 bg-[#120e0b]/95 p-3.5 shadow-card backdrop-blur-md sm:-right-5">
                <div className="flex items-center gap-2">
                  <GoogleIcon size={16} />
                  <div className="flex items-center gap-1">
                    <Star size={13} className="fill-[#c89345] text-[#c89345]" />
                    <span className="font-serif text-base font-bold text-white">
                      5,0 / 5,0
                    </span>
                  </div>
                </div>
                <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#d6cebf]">
                  74 Avaliações no Google
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner - Authority Metrics */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-[#c89345]/20 bg-[#120e0b]"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              [
                "5,0 ★",
                "nota máxima impecável no Google com 74 avaliações autênticas",
              ],
              [
                "Atendimento Humanizado",
                "acolhimento e clareza absoluta em cada orientação",
              ],
              [
                "Três Pontas - MG",
                "sede no Centro (R. São Pedro, 45) e atendimento em todo o Brasil",
              ],
              [
                "Defesa Intransigente",
                "rigor técnico na garantia de todos os seus direitos trabalhistas",
              ],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-[#c89345]/20"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-2xl font-semibold text-[#c89345] sm:text-3xl">
                  {value}
                </span>
                <span className="max-w-[165px] text-[11px] leading-5 text-[#d6cebf]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre a Dra. Júlia Andrade - Editorial Warm Linen Canvas */}
        <section
          id="sobre"
          className="scroll-mt-24 border-y border-[#c89345]/30 bg-[#faf8f5] py-20 text-[#1a140f] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
            {/* Dra. Júlia Andrade presentation portrait */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[480px]"
            >
              <div className="relative aspect-[3/3.8] overflow-hidden rounded-2xl border-2 border-[#3d240a] bg-[#120e0b] shadow-2xl">
                <Image
                  src={FOTO_SOBRE_SRC}
                  alt="Dra. Júlia Andrade — Advogada Trabalhista e Titular"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0c0a08]/90 via-[#0c0a08]/30 to-transparent" />
              </div>

              {/* Authority badge card - Deep Obsidian Contrast on Light Surface */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-[#c89345]/40 bg-[#120e0b] px-5 py-4 shadow-xl sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-[#c89345]">
                  <Award size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#c89345]">
                    Advocacia Trabalhista Humanizada
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-white">
                  Dra. Júlia Andrade
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-[#c89345]">
                  Júlia Andrade Advocacia · Três Pontas - MG
                </p>
                <p className="mt-1 text-[11px] leading-4 text-[#d6cebf]">
                  R. São Pedro, 45 - Centro - Três Pontas
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-[#8c5d23]/40 sm:-left-7 sm:-top-7 sm:size-32" />
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
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#8c5d23]/30 bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8c5d23] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#8c5d23]" />
                <span>CONHEÇA A DRA. JÚLIA ANDRADE</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-[#1a140f] sm:text-4xl lg:text-[3.25rem]"
              >
                Mais que uma advogada: uma defensora{" "}
                <span className="italic text-[#8c5d23]">
                  que luta ao lado do trabalhador com acolhimento, transparência e rigor técnico.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-[#4a3f35]"
              >
                Com sede no Centro de{" "}
                <strong className="font-bold text-[#1a140f]">
                  Três Pontas - MG
                </strong>{" "}
                e atuação digital em todo o território nacional, a Dra. Júlia Andrade construiu uma advocacia de referência na defesa dos direitos dos trabalhadores. Seu propósito é claro: garantir que nenhuma pessoa seja lesada ou desamparada diante de abusos e descumprimentos legais de empresas.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-[#4a3f35]"
              >
                O grande diferencial do escritório está no{" "}
                <strong className="font-semibold text-[#1a140f]">
                  atendimento humanizado
                </strong>
                : compreendemos que o término de um vínculo, um acidente de trabalho ou a cobrança de salários atrasados envolvem momentos de angústia e vulnerabilidade. Aqui, você é ouvido com empatia, recebe respostas claras e acompanha cada passo da sua ação sem juridiquês.
              </motion.p>

              {/* Authentic Client Quote Card */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-xl border border-[#e8dfd2] bg-white/95 p-5 shadow-sm"
              >
                <blockquote className="font-serif text-sm italic leading-relaxed text-[#1a140f]">
                  &ldquo;A Dra. Júlia Andrade é maravilhosa! Desde a primeira consulta me acolheu com tanta atenção e carinho que me senti segura de verdade. Explicou cada detalhe dos meus direitos trabalhistas de forma clara e humana, sem enrolação.&rdquo;
                </blockquote>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-[#8c5d23]">
                  — Mariana Souza Oliveira · Avaliação Verificada no Google (5,0 ★)
                </p>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-1 gap-2.5 text-xs font-semibold text-[#1a140f] sm:grid-cols-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#8c5d23]" />
                  <span>Sede na R. São Pedro, 45 - Centro, Três Pontas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#8c5d23]" />
                  <span>Posicionamento contínuo e clareza sobre o processo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#8c5d23]" />
                  <span>Atendimento humanizado direto com a advogada</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#8c5d23]" />
                  <span>Nota máxima 5,0 ★ no Google com 74 avaliações reais</span>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Júlia Andrade! Gostaria de agendar uma consulta sobre o meu caso trabalhista."
                  )}
                  target="_blank"
                  size="md"
                  variant="dark"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar com a Dra. Júlia
                </GlowingButton>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1a140f] transition-colors hover:text-[#8c5d23]"
                >
                  <Phone size={15} /> {PHONE_DISPLAY}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Especialidades Trabalhistas (Pilares de Atuação) */}
        <section
          id="atuacao"
          className="scroll-mt-24 border-t border-[#c89345]/20 bg-[#120e0b] py-20 sm:py-28 lg:py-32"
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
                eyebrow="ESPECIALIDADES TRABALHISTAS & DEFESA DO TRABALHADOR"
                description="Defesa especializada, acolhedora e combativa para resguardar cada centavo do seu trabalho em rescisões, horas extras, adicionais e acidentes."
              >
                Atuação trabalhista sólida em{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#fcf7ed] via-[#f5e7c8] to-[#c89345]">
                  Três Pontas, Sul de Minas e em todo o Brasil.
                </span>
              </Heading>
              <p className="max-w-[270px] pb-1 text-xs leading-6 text-[#d6cebf]">
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
                    className="group flex min-h-[350px] flex-col rounded-xl border border-[#c89345]/20 bg-[#191410] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#c89345]/50 hover:bg-[#221c16] hover:shadow-obsidian sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-lg border border-[#c89345]/25 bg-[#2c241c] text-[#c89345] shadow-sm transition-colors group-hover:border-[#f5e7c8] group-hover:bg-[#3d240a] group-hover:text-white">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <span className="font-serif text-2xl text-[#c89345]/40">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-md border border-[#c89345]/25 bg-[#221c16] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#f5e7c8] shadow-sm">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.45rem] leading-tight text-white">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-6 text-[#d6cebf]">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-[#e4b875] hover:text-white"
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

        {/* Por Que Escolher a Dra. Júlia Andrade - Diferenciais (Dobra Clara com Linho Nobre) */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-t border-[#c89345]/30 bg-[#faf8f5] py-20 text-[#1a140f] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                light
                eyebrow="NOSSOS PILARES DE EXCELÊNCIA"
                description="Unimos acolhimento humanizado, técnica jurídica de ponta e combatividade para garantir que cada trabalhador tenha seus direitos respeitados."
              >
                Por que confiar sua causa à{" "}
                <span className="italic text-[#8c5d23]">
                  Dra. Júlia Andrade?
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Júlia Andrade! Gostaria de consultar sobre a minha situação trabalhista."
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
                className="group flex flex-col justify-between rounded-xl border border-[#e8dfd2] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c89345] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#c89345]/30 bg-[#f3eee6] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#633e14]">
                      <HeartHandshake size={14} /> Atendimento Humanizado
                    </span>
                    <span className="text-xs font-semibold text-[#8c5d23]">
                      Empatia & Respeito
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#1a140f] sm:text-[1.75rem]">
                    Você Nunca Fica Sem Resposta ou Desamparado
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#4a3f35]">
                    Sabemos o quanto uma demissão injusta ou um conflito no trabalho geram angústia e incertezas. No escritório Júlia Andrade Advocacia, você conversa diretamente com a advogada, tira suas dúvidas com clareza e entende tudo o que acontece na sua causa.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-[#1a140f]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8c5d23]" />
                      <span>Contato direto pelo WhatsApp com a Dra. Júlia Andrade</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8c5d23]" />
                      <span>Posicionamento constante e didático sobre o andamento dos autos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8c5d23]" />
                      <span>Atendimento seguro, transparente e com sigilo profissional absoluto</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#e8dfd2] pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Júlia Andrade! Gostaria de conversar diretamente com você sobre minha situação de trabalho."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#c89345]/40 bg-[#faf8f5] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1a140f] transition-all hover:border-[#8c5d23] hover:bg-[#1a140f] hover:text-[#f5e7c8]"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Conversar Diretamente no WhatsApp
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>

              {/* Card 2: Combatividade Técnica e Vitórias Trabalhistas */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="group flex flex-col justify-between rounded-xl border border-[#e8dfd2] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c89345] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#c89345]/30 bg-[#f3eee6] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#633e14]">
                      <Scale size={14} /> Rigor Técnico Incisivo
                    </span>
                    <span className="text-xs font-semibold text-[#8c5d23]">
                      Máxima Reparação
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#1a140f] sm:text-[1.75rem]">
                    Combatividade Jurídica & Foco no Êxito Real
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#4a3f35]">
                    Comprovado por 74 clientes que avaliaram o escritório com nota máxima no Google. Analisamos minuciosamente contratos, cartões de ponto, holerites e extratos de FGTS para não abrir mão de nenhum direito que você conquistou com seu esforço.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-[#1a140f]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8c5d23]" />
                      <span>Análise técnica aprofundada de folhas de ponto e reflexos de verbas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8c5d23]" />
                      <span>Atuação firme na Justiça do Trabalho em audiências e perícias</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8c5d23]" />
                      <span>Não aceitamos acordos desvantajosos que desvalorizem seu trabalho</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#e8dfd2] pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Júlia Andrade! Preciso de ajuda para analisar meu caso trabalhista."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#c89345]/40 bg-[#faf8f5] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1a140f] transition-all hover:border-[#8c5d23] hover:bg-[#1a140f] hover:text-[#f5e7c8]"
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

        {/* Nosso Compromisso com o Trabalhador */}
        <section className="relative overflow-hidden border-t border-[#c89345]/20 bg-[#faf8f5] py-20 text-[#1a140f] sm:py-24 lg:py-28">
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-[#c89345]/5 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-[#c89345]/5 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                light
                eyebrow="NOSSO COMPROMISSO COM O TRABALHADOR"
                description="A nota máxima de 5,0 ★ no Google com 74 avaliações autênticas reflete a seriedade, transparência e respeito com que cada trabalhador é acolhido."
              >
                Cuidamos do seu caso com{" "}
                <span className="italic text-[#8c5d23]">
                  honestidade, acolhimento e acompanhamento real.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-[#e8dfd2] bg-white p-6 font-serif text-base italic leading-7 text-[#1a140f] shadow-sm">
                &ldquo;Profissional excepcional e de altíssimo nível em Três Pontas. Conduziu meu processo de rescisão indireta com muita combatividade e competência. Não abandona o cliente em nenhum momento!&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-[#8c5d23]">
                  — Carlos Eduardo Ferreira · Avaliação Verificada no Google Meu Negócio (5,0 ★)
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
                  "Honestidade & Diagnóstico Trabalhista Realista",
                  "Você recebe uma avaliação sincera e realista sobre as reais possibilidades da sua ação, sem promessas vazias, com clareza e total respaldo na CLT.",
                ],
                [
                  "02",
                  "Posicionamento Constante do Cliente",
                  "Você nunca fica sem saber o andamento dos seus direitos. Mantemos você informado sobre audiências, perícias, decisões e cada próxima etapa processual.",
                ],
                [
                  "03",
                  "Combatividade e Máxima Reparação",
                  "Lutamos incansavelmente pelos melhores resultados possíveis, revertendo demissões injustas e exigindo o cumprimento estrito da lei em favor do trabalhador.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-semibold text-[#8c5d23]">
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

        {/* Avaliações no Google (Depoimentos Reais - 74 Avaliações 5,0 ★) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 border-t border-[#c89345]/30 bg-[#f3eee6] py-20 text-[#1a140f] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                light
                eyebrow="PROVA SOCIAL VERIFICADA · GOOGLE MEU NEGÓCIO"
                description="Confira avaliações reais e espontâneas de clientes que confiaram suas causas trabalhistas à Dra. Júlia Andrade em Três Pontas e em todo o Brasil."
              >
                Avaliada com nota máxima 5,0 ★ com{" "}
                <span className="italic text-[#8c5d23]">
                  74 avaliações pelo atendimento humanizado, dedicação e vitórias.
                </span>
              </Heading>

              {/* Verified Google Badge Card */}
              <div className="flex flex-col gap-3 rounded-xl border border-[#e8dfd2] bg-white p-5 shadow-sm sm:flex-row sm:items-center md:min-w-[340px]">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-lg border border-[#c89345]/30 bg-[#faf8f5] shadow-xs">
                  <GoogleIcon size={30} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-3xl font-bold leading-none text-[#1a140f]">
                      5,0
                    </span>
                    <div className="flex gap-0.5 text-[#c89345]">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-[#c89345] text-[#c89345]"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#4a3f35]">
                    Júlia Andrade — Advocacia e Consultoria
                  </p>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-[#633e14] transition-colors hover:text-[#1a140f]"
                  >
                    74 avaliações no Google <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Authentic Google Reviews Grid */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clientReviews.map((review) => (
                <article
                  key={review.name}
                  className="group relative flex flex-col justify-between rounded-xl border border-[#e8dfd2] bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#c89345] hover:shadow-md sm:p-8"
                >
                  <div>
                    {/* Header: Stars + Badge + Google icon */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-1 text-[#c89345]">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-[#c89345] text-[#c89345]"
                          />
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#4a3f35]">
                        <GoogleIcon size={13} />
                        <span className="rounded-md border border-[#c89345]/30 bg-[#faf8f5] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#633e14] shadow-xs">
                          {review.badge}
                        </span>
                      </div>
                    </div>

                    {/* Authentic review content */}
                    <p className="mt-5 text-[14px] italic leading-relaxed text-[#1a140f]">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  {/* Reviewer info */}
                  <div className="mt-6 flex items-center gap-3 border-t border-[#e8dfd2] pt-4">
                    <div className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#c89345]/30 bg-[#faf8f5] font-serif text-sm font-semibold text-[#633e14] shadow-xs">
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
                  "Advogada Trabalhista em Três Pontas - MG",
                  "Atendimento em Todo o Brasil",
                  "Rescisão Indireta & Demissão Injusta",
                  "Horas Extras & Intervalos",
                  "Insalubridade & Acidentes de Trabalho",
                  "Nota 5,0 ★ no Google (74 avaliações)",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#e8dfd2] bg-white px-3.5 py-1.5 text-[11px] font-medium text-[#1a140f] shadow-xs"
                  >
                    <CheckCircle2 size={13} className="text-[#8c5d23]" />
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#633e14] transition-colors hover:text-[#1a140f]"
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

        {/* Contato & Localização da Sede em Três Pontas - MG */}
        <section
          id="contato"
          className="scroll-mt-24 border-t border-[#c89345]/30 bg-[#faf8f5] py-20 text-[#1a140f] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                light
                eyebrow="CONTATO & ATENDIMENTO EM TRÊS PONTAS"
                description="Inicie seu atendimento diretamente pelo WhatsApp ou agende uma reunião presencial em nossa sede. Prestamos assistência jurídica ágil para trabalhadores de Três Pontas, região e todo o Brasil via consultoria online humanizada."
              >
                Estamos prontos para{" "}
                <span className="italic text-[#8c5d23]">
                  escutar e defender você.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Júlia Andrade! Gostaria de agendar um horário para atendimento sobre meus direitos trabalhistas."
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
                    className="mt-0.5 shrink-0 text-[#8c5d23]"
                  />
                  <div>
                    <p className="font-semibold text-[#1a140f]">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-[#1a140f]">
                      Segunda a Sexta-feira das 08:00 às 20:00 (Aberto · Plantão até 22:30)
                    </p>
                    <p className="text-[11px] text-[#786b5e]">
                      Atendimento presencial com hora marcada no Centro de Três Pontas e consultoria online em todo o Brasil
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#8c5d23]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-medium text-[#1a140f] transition-colors hover:text-[#8c5d23]"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#8c5d23]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#8c5d23] text-[#1a140f]"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#8c5d23]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="transition-colors hover:text-[#8c5d23] text-[#1a140f]"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#8c5d23]"
                  />
                  <span className="text-[#1a140f]">{ADDRESS_TEXT}</span>
                </div>
              </div>
            </div>

            {/* Office & Schedule Card */}
            <div className="relative overflow-hidden rounded-xl border border-[#e8dfd2] bg-white p-7 shadow-md sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#b27d35] to-[#f5e7c8]" />

              <div className="flex items-center gap-4">
                <div className="relative size-[64px] shrink-0 overflow-hidden rounded-full border-2 border-[#c89345]/60 bg-[#120e0b] shadow-md sm:size-[76px]">
                  <Image
                    src={LOGO_SEAL_SRC}
                    alt="Selo Júlia Andrade Advocacia"
                    fill
                    sizes="76px"
                    className="object-contain p-1.5"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8c5d23]">
                    Sede do Escritório
                  </p>
                  <p className="mt-0.5 font-serif text-xl font-bold text-[#1a140f] sm:text-2xl">
                    Júlia Andrade Advocacia
                  </p>
                </div>
              </div>

              <address className="mt-7 max-w-md text-[14px] not-italic leading-7 text-[#4a3f35]">
                <strong className="font-semibold text-[#1a140f]">
                  Dra. Júlia Andrade
                </strong>
                <br />
                Advogada Trabalhista e Consultora Jurídica
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-lg border border-[#e8dfd2] bg-[#faf8f5] p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#8c5d23]">
                  Atendimento & Horários
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-[#4a3f35]">
                  <span>Segunda a Sexta</span>
                  <span className="text-right font-semibold text-[#1a140f]">
                    08:00 às 20:00 (até 22:30)
                  </span>
                  <span>Atendimento Presencial</span>
                  <span className="text-right font-medium text-[#633e14]">
                    Três Pontas - MG (Centro)
                  </span>
                  <span>Endereço</span>
                  <span className="text-right text-[#1a140f]">R. São Pedro, 45</span>
                  <span>Atendimento Online</span>
                  <span className="text-right text-[#1a140f]">Todo o Brasil</span>
                </div>
              </div>

              <div className="my-7 h-px bg-[#e8dfd2]" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-[#786b5e]">
                  Atendimento acolhedor e sigiloso com hora marcada em Três Pontas
                </p>
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Júlia Andrade! Gostaria de agendar um atendimento no escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#c89345]/40 bg-[#f3eee6] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#1a140f] transition-colors hover:border-[#8c5d23] hover:bg-[#1a140f] hover:text-[#f5e7c8]"
                >
                  <WhatsAppIcon size={14} /> Falar com a Advogada <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip */}
        <section className="border-t border-[#c89345]/20 bg-gradient-to-r from-[#0c0a08] via-[#191410] to-[#0c0a08] px-5 py-14 text-white shadow-inner sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#c89345]">
                <Sparkles size={13} /> JÚLIA ANDRADE ADVOCACIA · TRÊS PONTAS & REGIÃO - MG
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                Precisa de orientação jurídica trabalhista acolhedora, combativa e de confiança?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dra. Júlia Andrade! Gostaria de consultar sobre meus direitos trabalhistas com seu escritório."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-lg bg-gradient-to-r from-[#b27d35] via-[#d4a359] to-[#b27d35] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#120e0b] shadow-md transition-all hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp{" "}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#c89345]/20 bg-[#080705] px-5 py-14 text-white sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <a
                href="#inicio"
                aria-label="Júlia Andrade — Advocacia e Consultoria"
                className="inline-flex items-center gap-3.5 transition-transform hover:scale-[1.02]"
              >
                <div className="relative size-[72px] shrink-0 overflow-hidden rounded-full border-2 border-[#c89345]/50 bg-[#120e0b] shadow-md sm:size-[80px]">
                  <Image
                    src={LOGO_SEAL_SRC}
                    alt="Júlia Andrade — Advocacia e Consultoria"
                    fill
                    sizes="80px"
                    className="object-contain p-1.5"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-xl font-bold tracking-wider text-white sm:text-2xl">
                    JÚLIA ANDRADE
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c89345]">
                    Advogada Trabalhista
                  </span>
                </div>
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-[#d6cebf]">
                ⚖️ Ajudo trabalhadores a terem seus direitos reconhecidos e preservados. Atendimento humanizado, transparente e combativo em Três Pontas, Sul de Minas e em todo o Brasil.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-[#c89345]">
                Dra. Júlia Andrade · Advogada Trabalhista
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c89345]">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-[#d6cebf]">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  Dra. Júlia Andrade
                </a>
                <a className="footer-link" href="#atuacao">
                  Especialidades Trabalhistas
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
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c89345]">
                Contato & Atendimento
              </h2>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-[#d6cebf]">
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Júlia Andrade! Gostaria de solicitar um atendimento com o escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 font-medium text-[#f5e7c8]"
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
                <p className="inline-flex items-center gap-2 pt-1 text-[11px] text-[#c89345]">
                  <Clock size={14} className="shrink-0" /> Seg a Sex: 08:00 às 20:00 (plantão até 22:30)
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-[#c89345]/20 pt-6 text-[10px] text-stone-400 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} JÚLIA ANDRADE — ADVOCACIA E CONSULTORIA. Todos os direitos reservados.
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
              "Olá, Dra. Júlia Andrade! Gostaria de consultar sobre meus direitos trabalhistas com seu escritório."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Dra. Júlia Andrade"
            className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          >
            <WhatsAppIcon size={28} />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-[#120e0b] border border-[#c89345]/30 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg transition-opacity group-hover:block">
              Falar com a Dra. Júlia Andrade
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
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-xl border border-[#c89345]/35 bg-[#120e0b] p-7 shadow-2xl sm:max-w-xl sm:rounded-xl sm:p-10"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-[#c89345]/30 bg-[#221c16] text-[#f5e7c8] transition-colors hover:border-[#ebd3a2] hover:text-white"
                >
                  <X size={18} />
                </button>

                <p className="eyebrow">ESPECIALIDADE TRABALHISTA</p>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-serif text-3xl leading-tight text-white sm:text-4xl"
                >
                  {activeArea.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-[#d6cebf]">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-[#c89345]/20 pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#c89345]">
                    Principais demandas atendidas pelo escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-stone-200"
                      >
                        <span className="size-2 shrink-0 rounded-full bg-[#c89345]" />
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
