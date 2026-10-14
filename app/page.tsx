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

const WHATSAPP_NUMBER = "5532988868022";
const PHONE_DISPLAY = "(32) 98886-8022";
const EMAIL_CONTACT = "contato@julianacarvalho.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/juliana.carvalho.adv/";
const INSTAGRAM_HANDLE = "@juliana.carvalho.adv";

const ADDRESS_TEXT =
  "Av. Tiradentes, 707 - Centro, São João del Rei - MG, 36307-346, Brasil";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Juliana+Carvalho+Advogada+Especialista+em+INSS+e+RPPS+Av+Tiradentes+707+Sao+Joao+del+Rei+MG";

const LOGO_SRC = "/juliana-carvalho-logo-header.png";
const FOTO_HERO_SRC = "/juliana-carvalho-hero.png";
const FOTO_SOBRE_SRC = "/juliana-carvalho-sobre.png";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Juliana Carvalho! Gostaria de agendar uma consulta jurídica sobre meu benefício / aposentadoria.";
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
    id: "planejamento-previdenciario-estrategico",
    title: "Planejamento Previdenciário Estratégico",
    icon: Landmark,
    tag: "INSS & RPPS · Maior Renda Mensal",
    summary:
      "Análise aprofundada de todo o histórico de contribuições para você se aposentar no momento ideal com o maior valor de benefício possível.",
    details:
      "A Reforma da Previdência tornou as regras de concessão muito complexas. O Planejamento Previdenciário elaborado pela Dra. Juliana Carvalho examina minuciosamente seu Extrato Previdenciário (CNIS), corrige períodos e salários faltantes, simula todas as regras de transição e aponta o melhor custo-benefício contributivo para garantir que você não perca dinheiro na sua aposentadoria.",
    topics: [
      "Simulação de cenários futuros nas regras de transição pós-Reforma",
      "Cálculo da Renda Mensal Inicial (RMI) em cada data provável",
      "Acerto e regularização de períodos pendentes no extrato CNIS",
      "Estratégia de descarte de salários prejudiciais (divisor mínimo)",
      "Orientação sobre recolhimentos em atraso e indenização de tempo",
      "Relatório executivo completo com cronograma seguro de concessão",
    ],
    whatsAppText:
      "Olá, Dra. Juliana! Gostaria de agendar meu Planejamento Previdenciário para conquistar a melhor aposentadoria.",
  },
  {
    id: "aposentadoria-servidores-publicos-rpps",
    title: "Aposentadoria de Servidores Públicos (RPPS)",
    icon: Award,
    tag: "Servidores Públicos · Integralidade & Paridade",
    summary:
      "Defesa dos direitos previdenciários de servidores municipais, estaduais e federais nas regras de transição, integralidade e paridade salarial.",
    details:
      "Servidores públicos possuem regramentos previdenciários específicos e sofrem frequentemente com interpretações administrativas restritivas. A Dra. Juliana Carvalho possui especialização dedicada em Regimes Próprios (RPPS), atuando no resguardo do direito adquirido, aplicação correta das regras de transição, averbação de tempo e incorporação de gratificações funcionais.",
    topics: [
      "Defesa de direito adquirido à integralidade e paridade constitucional",
      "Regras de transição dos pontos e pedágios (Emenda Constitucional 103/2019)",
      "Emissão e averbação de Certidão de Tempo de Contribuição (CTC)",
      "Aposentadoria especial do servidor público (atividades de risco e insalubridade)",
      "Revisão e reenquadramento de proventos e vantagens funcionais",
      "Atuação em processos administrativos perante institutos e regimes próprios",
    ],
    whatsAppText:
      "Olá, Dra. Juliana! Sou servidor(a) público(a) e preciso de assessoria jurídica especializada no RPPS.",
  },
  {
    id: "aposentadorias-do-inss-regime-geral",
    title: "Aposentadorias do Regime Geral (INSS)",
    icon: ShieldCheck,
    tag: "Idade · Tempo de Contribuição · Especial · PCD",
    summary:
      "Requerimento administrativo e judicial de aposentadorias com preparação documental impecável para evitar negativas e demoras injustas.",
    details:
      "Dar entrada na aposentadoria sem suporte especializado pode custar anos de atraso e prejuízos no cálculo do benefício. O escritório da Dra. Juliana Carvalho cuida de cada detalhe documental e probatório, garantindo a concessão rápida e justa perante o INSS ou no Poder Judiciário.",
    topics: [
      "Aposentadoria por idade urbana e rural (segurado especial e trabalhador rural)",
      "Aposentadoria por tempo de contribuição com regras de transição",
      "Aposentadoria especial para quem trabalhou exposto a insalubridade e periculosidade (PPP e LTCAT)",
      "Aposentadoria da pessoa com deficiência (Lei Complementar 142/2013)",
      "Conversão de tempo especial em comum para antecipação de benefício",
      "Reversão célere de indeferimentos e recursos perante a Junta de Recursos do INSS",
    ],
    whatsAppText:
      "Olá, Dra. Juliana! Gostaria de consultoria para solicitar minha aposentadoria no INSS.",
  },
  {
    id: "beneficios-por-incapacidade-auxilio-doenca",
    title: "Benefícios por Incapacidade & Auxílio-Doença",
    icon: ShieldAlert,
    tag: "Auxílio-Doença · Invalidez · Auxílio-Acidente",
    summary:
      "Proteção ágil para trabalhadores e segurados impossibilitados de exercer suas atividades em razão de doenças, acidentes ou sequelas.",
    details:
      "Se o INSS indeferiu ou cessou indevidamente o seu benefício na perícia médica, a Dra. Juliana Carvalho atua com agilidade jurídica para demonstrar a incapacidade laboral real através de laudos técnicos complementares e perícia judicial qualificada.",
    topics: [
      "Concessão e restabelecimento de Auxílio por Incapacidade Temporária (Auxílio-Doença)",
      "Aposentadoria por Incapacidade Permanente (antiga Aposentadoria por Invalidez)",
      "Adicional de 25% para aposentados por invalidez que necessitam de auxílio de terceiros",
      "Auxílio-Acidente indenizatório para segurados que ficaram com sequelas permanentes",
      "Orientação estratégica e compilação de laudos médicos para a perícia",
      "Resolução de impasses entre INSS e empresa (limbo jurídico previdenciário)",
    ],
    whatsAppText:
      "Olá, Dra. Juliana! Meu benefício por incapacidade / auxílio-doença foi negado pelo INSS e preciso de ajuda.",
  },
  {
    id: "bpc-loas-idosos-pcd",
    title: "BPC / LOAS (Idosos & Pessoas com Deficiência)",
    icon: HeartHandshake,
    tag: "1 Salário Mínimo sem Necessidade de Contribuição",
    summary:
      "Garantia de amparo financeiro mensal a pessoas idosas (65+) ou com deficiência em situação de vulnerabilidade socioeconômica.",
    details:
      "O Benefício de Prestação Continuada (BPC/LOAS) é um direito assistencial que não exige histórico prévio de contribuições. Apoiamos a família desde a regularização do CadÚnico até a comprovação dos critérios sociais e barreiras biopsicossociais exigidos em lei.",
    topics: [
      "BPC/LOAS para idosos a partir de 65 anos em situação de carência",
      "BPC/LOAS para pessoas com deficiência física, mental ou intelectual de qualquer idade",
      "Dedução comprovada de gastos médicos, remédios e fraldas no cálculo de renda familiar",
      "Reversão de cancelamentos, bloqueios e revisões cadastrais injustas",
      "Recurso administrativo célere e ação judicial com perícia socioeconômica humanizada",
      "Acompanhamento acolhedor e seguro para famílias em vulnerabilidade",
    ],
    whatsAppText:
      "Olá, Dra. Juliana! Gostaria de consultar a concessão do benefício BPC/LOAS para mim ou um familiar.",
  },
  {
    id: "pensoes-e-revisoes-previdenciarias",
    title: "Pensões por Morte & Revisões de Aposentadoria",
    icon: Scale,
    tag: "Amparo a Dependentes & Retificação de Valores",
    summary:
      "Concessão ágil de pensão por morte para viúvos(as) e dependentes, além de revisão de valores pagos a menor pelo INSS.",
    details:
      "Milhares de aposentados recebem mensalmente menos do que deveriam por equívocos matemáticos e documentais do INSS. Identificamos se a sua aposentadoria pode ser aumentada e resgatamos os valores atrasados dos últimos 5 anos, além de defender direitos em pensões por morte.",
    topics: [
      "Concessão de Pensão por Morte para cônjuges, companheiros(as) e filhos dependentes",
      "Reconhecimento de união estável para fins de concessão previdenciária",
      "Revisão de aposentadorias concedidas com desconsideração de períodos e contribuições",
      "Inclusão de períodos de serviço militar, tempo rural e aluno-aprendiz",
      "Revisão de erros de cálculo na média das contribuições e divisor",
      "Cobrança integral de valores retroativos acumulados",
    ],
    whatsAppText:
      "Olá, Dra. Juliana! Gostaria de verificar a revisão da minha aposentadoria ou pedir pensão por morte.",
  },
  {
    id: "direito-trabalhista-integrado",
    title: "Direito Trabalhista Integrado ao Previdenciário",
    icon: Briefcase,
    tag: "Rescisões · Vínculos · Horas Extras · Acidentes",
    summary:
      "Defesa intransigente dos direitos trabalhistas garantindo que salários e contribuições reflitam diretamente na sua futura aposentadoria.",
    details:
      "Trabalhar sem carteira assinada ou com verbas omitidas causa um prejuízo silencioso na sua aposentadoria. Nossa atuação integrada apura todas as verbas rescisórias, horas extras, insalubridade e acidentes, assegurando que suas contribuições sejam recolhidas.",
    topics: [
      "Cobrança integral de verbas rescisórias, saldo de salário, aviso prévio e FGTS + 40%",
      "Reconhecimento de vínculo de emprego sem anotação em carteira",
      "Rescisão indireta do contrato por descumprimento grave do empregador",
      "Cobrança de horas extras, adicional noturno e descansos não concedidos",
      "Adicionais de insalubridade e periculosidade com laudo técnico pericial",
      "Indenizações por acidentes de trabalho e doenças ocupacionais",
    ],
    whatsAppText:
      "Olá, Dra. Juliana! Gostaria de orientações jurídicas sobre meus direitos trabalhistas.",
  },
];

const clientReviews = [
  {
    name: "Márcia Regina Andrade",
    reviewsCount: "Cliente Verificada · São João del Rei",
    date: "Google Meu Negócio",
    badge: "aposentadoria concedida",
    content:
      "A Dra. Juliana Carvalho foi uma bênção na minha vida! Meu pedido de aposentadoria no INSS estava travado há mais de 8 meses e ela resolveu com agilidade, me explicando cada detalhe com muito carinho e paciência. Conquistei meu benefício com o valor correto. Atendimento impecável!",
  },
  {
    name: "Carlos Alberto de Resende",
    reviewsCount: "Servidor Público · 5 avaliações",
    date: "Google Meu Negócio",
    badge: "especialista em rpps",
    content:
      "Sou servidor público e precisava entender as novas regras de transição da aposentadoria. O planejamento previdenciário feito pela Dra. Juliana foi fantástico: clareza técnica absoluta, averbação de tempo que eu nem imaginava e segurança total para o meu futuro. Recomendo de olhos fechados!",
  },
  {
    name: "Eliane Maria dos Santos",
    reviewsCount: "Local Guide · São João del Rei",
    date: "Google Meu Negócio",
    badge: "atendimento humanizado",
    content:
      "Atendimento maravilhoso, muito humano e atencioso. A Dra. Juliana tratou o caso do BPC/LOAS da minha mãe com muito respeito e profissionalismo. Escritório muito bem localizado na Av. Tiradentes e equipe de extrema confiança. 5 estrelas é pouco!",
  },
  {
    name: "Sebastião Moreira Neves",
    reviewsCount: "Cliente Verificado · INSS",
    date: "Google Meu Negócio",
    badge: "auxílio restabelecido",
    content:
      "Excelente advogada! Muito competente, honesta e dedicada. Conseguiu restabelecer meu auxílio por incapacidade que o INSS tinha cortado indevidamente. Sempre disponível no WhatsApp para tirar dúvidas e me manter calmo. Confiança total no trabalho dela.",
  },
  {
    name: "Patrícia Helena Silveira",
    reviewsCount: "3 avaliações no Google",
    date: "Google Meu Negócio",
    badge: "planejamento previdenciário",
    content:
      "Fiz meu planejamento de aposentadoria com a Dra. Juliana. Foi o melhor investimento que fiz na vida! Ela me mostrou o momento exato para dar entrada e evitou que eu perdesse mais de 30% da minha renda mensal se tivesse pedido antes. Extremamente competente e acolhedora!",
  },
  {
    name: "Rodrigo Ferreira Mendes",
    reviewsCount: "Cliente Verificado · São João del Rei",
    date: "Google Meu Negócio",
    badge: "competência e ética",
    content:
      "Profissional exemplar em São João del Rei e região. Acolhedora, ética e com um domínio técnico absurdo em direito previdenciário e trabalhista. Toda a minha família consulta com ela quando precisa. Parabéns pela dedicação e pelo carinho com os clientes!",
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
        className={`font-serif text-3xl leading-[1.12] tracking-[-0.02em] sm:text-4xl lg:text-[3.15rem] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {children}
      </h2>
      {description && (
        <p
          className={`mt-4 text-[15px] leading-7 ${
            light ? "text-brand-100/80" : "text-ink-soft"
          }`}
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
      <main className="overflow-hidden bg-pearl text-ink">
        {/* Navigation Bar - Luxury Burgundy Dark with Champagne Accents */}
        <header className="sticky top-0 z-40 border-b border-brand-800/40 bg-brand-950/95 backdrop-blur-xl">
          <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-5 px-5 sm:h-[84px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Dra. Juliana Carvalho — Início"
              onClick={closeMenu}
              className="flex items-center gap-3 transition-opacity hover:opacity-90"
            >
              <Image
                src={LOGO_SRC}
                width={1372}
                height={576}
                alt="Juliana Carvalho Advogada Especialista em INSS e RPPS — São João del Rei - MG"
                priority
                className="h-[64px] w-auto object-contain sm:h-[74px]"
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
                Dra. Juliana Carvalho
              </a>
              <a className="nav-link" href="#atuacao">
                Áreas de Atuação
              </a>
              <a className="nav-link" href="#diferenciais">
                Por que Escolher?
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
                aria-label="Instagram de Dra. Juliana Carvalho"
                className="grid size-10 place-items-center rounded-full border border-gold-300/30 text-gold-300 transition-all hover:border-gold-300 hover:bg-brand-900 hover:text-white"
                title="Instagram @juliana.carvalho.adv"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                aria-label="Ligar para Dra. Juliana Carvalho"
                className="grid size-10 place-items-center rounded-full border border-gold-300/30 text-gold-300 transition-all hover:border-gold-300 hover:bg-brand-900 hover:text-white"
                title={`Ligar: ${PHONE_DISPLAY}`}
              >
                <Phone size={16} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp de Dra. Juliana Carvalho"
                className="grid size-10 place-items-center rounded-full border border-gold-300/30 text-gold-300 transition-all hover:border-gold-300 hover:bg-brand-900 hover:text-white"
                title="Atendimento no WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <GlowingButton
                href={getWhatsAppUrl()}
                target="_blank"
                size="sm"
                variant="burgundy"
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
              className="grid size-11 place-items-center rounded-full border border-gold-300/30 text-gold-300 lg:hidden"
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
                    ["Dra. Juliana Carvalho", "#sobre"],
                    ["Áreas de Atuação", "#atuacao"],
                    ["Por que Escolher?", "#diferenciais"],
                    ["Avaliações no Google (5,0 ★)", "#avaliacoes"],
                    ["Contato & Sede em São João del Rei", "#contato"],
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
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-700 via-brand-600 to-brand-700 px-5 py-3.5 text-xs font-bold uppercase tracking-[0.13em] text-white shadow-md transition-all hover:brightness-105"
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} /> WhatsApp: {PHONE_DISPLAY}
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-300/30 px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-gold-300 transition-all hover:border-gold-200"
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <MapPin size={15} /> Av. Tiradentes, 707 - Centro, São João del Rei
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
          {/* Subtle burgundy warm ambient glow */}
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[36rem] rounded-full bg-brand-200/35 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[28rem] rounded-full bg-brand-100/50 blur-3xl" />

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
                  São João del Rei - MG · 10 Anos de Experiência · 5,0 ★ no Google
                </span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="max-w-[760px] font-serif text-[2.75rem] leading-[1.04] tracking-[-0.025em] text-ink sm:text-5xl lg:text-[4.15rem]"
              >
                Conquiste a melhor aposentadoria e garanta seus direitos no{" "}
                <span className="font-serif italic text-brand-700">
                  INSS e RPPS.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-ink-soft sm:text-base sm:leading-8"
              >
                Sob a liderança da{" "}
                <strong className="font-semibold text-ink">
                  Dra. Juliana Carvalho
                </strong>
                , advogada especialista em{" "}
                <strong className="font-semibold text-ink">
                  Direito Previdenciário (INSS e RPPS - Servidores Públicos) e Trabalhista
                </strong>
                , oferecemos atendimento jurídico estratégico, humanizado e combativo. Há 10 anos garantindo que cada cliente conquiste seu benefício no momento certo e com o maior valor possível — com sede própria no Centro de São João del Rei (MG) e atuação digital ágil em todo o Brasil.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl()}
                  target="_blank"
                  size="lg"
                  variant="burgundy"
                  className="rounded-full shadow-md"
                >
                  <WhatsAppIcon size={16} /> Consultar Meu Benefício no WhatsApp
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
                  5,0 estrelas no Google (58 avaliações verificadas)
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <Clock size={15} className="text-brand-700" /> Aberto a partir das 07:30
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <MapPin size={15} className="text-brand-700" /> Av. Tiradentes, 707 · Centro, São João del Rei - MG
                </span>
              </motion.div>
            </motion.div>

            {/* Hero Visual Presentation - Dra. Juliana Carvalho */}
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
                  src={FOTO_HERO_SRC}
                  alt="Dra. Juliana Carvalho — Advogada Especialista em Direito Previdenciário e Servidores Públicos em São João del Rei - MG"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-950 via-brand-950/70 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-8 sm:left-8 sm:right-8">
                  <div>
                    <p className="font-serif text-2xl font-normal tracking-wide text-white">
                      Juliana Carvalho
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-brand-200">
                      Advogada Especialista em INSS e RPPS
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-gold-300/40 bg-brand-950/80 text-gold-300 backdrop-blur-sm">
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
                      5,0 / 5,0
                    </span>
                  </div>
                </div>
                <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-ink-soft">
                  58 Avaliações no Google
                </p>
              </div>

              {/* Floating authority badge */}
              <div className="absolute -right-3 top-6 rounded-full border border-gold-300/40 bg-white/95 px-4 py-2 text-[10px] font-bold tracking-[0.14em] text-brand-900 shadow-card backdrop-blur-md sm:-right-5">
                SÃO JOÃO DEL REI · ATUAÇÃO NACIONAL
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
                "5,0 ★",
                "nota máxima com 58 avaliações reais e verificadas no Google",
              ],
              [
                "10 Anos",
                "de experiência sólida em Direito Previdenciário e Trabalhista",
              ],
              [
                "São João del Rei",
                "Sede própria na Av. Tiradentes, 707 - Centro",
              ],
              [
                "INSS & RPPS",
                "especialização comprovada em servidores públicos e regime geral",
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

        {/* Sobre a Dra. Juliana Carvalho */}
        <section
          id="sobre"
          className="scroll-mt-24 bg-pearl py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
            {/* Dra. Juliana Carvalho portrait */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[480px]"
            >
              <div className="relative aspect-[3/3.8] overflow-hidden rounded-2xl border border-brand-700/30 bg-brand-950 shadow-card">
                <Image
                  src={FOTO_SOBRE_SRC}
                  alt="Dra. Juliana Carvalho — Advogada Previdenciarista em São João del Rei - MG"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-950/95 via-brand-950/40 to-transparent" />
              </div>

              {/* Authority badge card */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-brand-200 bg-white px-5 py-4 shadow-card sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-brand-800">
                  <Award size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em]">
                    Advocacia Especializada & Humanizada
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-ink">
                  Dra. Juliana Carvalho
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-brand-700">
                  Especialista em INSS e RPPS (Servidores Públicos)
                </p>
                <p className="mt-1 text-[11px] leading-4 text-ink-soft">
                  Av. Tiradentes, 707 - Centro, São João del Rei - MG.
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
                SOBRE A ADVOGADA & MISSÃO JURÍDICA
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
                Com escritório estabelecido na{" "}
                <strong className="text-ink">
                  Av. Tiradentes, 707 no Centro de São João del Rei (MG)
                </strong>{" "}
                e atendimento em todo o Brasil, a{" "}
                <strong className="text-ink">Dra. Juliana Carvalho</strong>{" "}
                acumula 10 anos de experiência oferecendo serviços jurídicos de alta qualidade, combatividade técnica e atenção minuciosa ao futuro de cada cliente.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-ink-soft"
              >
                Inspirada pelo compromisso de fazer sempre o melhor pelo segurado e pelo servidor público, Dra. Juliana não admite o mero conformismo com negativas administrativas. Cada caso é analisado com profundidade para buscar a concessão mais vantajosa, explicando cada etapa com clareza e empatia.
              </motion.p>

              {/* Quote Card from Dra. Juliana Carvalho */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-xl border border-brand-300/40 bg-brand-50/80 p-5 shadow-xs"
              >
                <blockquote className="font-serif text-sm italic leading-relaxed text-brand-900">
                  &ldquo;Eu NÃO faço o que posso para garantir a melhor aposentadoria para o cliente. Eu faço meu melhor. A falência da ação está em admitir a síndrome do possível.&rdquo;
                </blockquote>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-brand-700">
                  — Filosofia de Atuação · Dra. Juliana Carvalho
                </p>
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
                    10 anos de dedicação ao Direito Previdenciário e Trabalhista
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={15}
                    className="shrink-0 text-brand-700"
                  />
                  <span>
                    Especialista em RPPS e regras de transição do Servidor Público
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={15}
                    className="shrink-0 text-brand-700"
                  />
                  <span>
                    Sede moderna e acessível no Centro de São João del Rei
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={15}
                    className="shrink-0 text-brand-700"
                  />
                  <span>
                    Avaliação 5,0 ★ máxima no Google com 58 avaliações
                  </span>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Juliana! Gostaria de agendar uma consulta com você para analisar minha situação previdenciária."
                  )}
                  target="_blank"
                  size="md"
                  variant="burgundy"
                  className="rounded-full shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar com a Dra. Juliana
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
                description="Soluções jurídicas estratégicas e personalizadas para proteger seus direitos previdenciários e trabalhistas em São João del Rei, Minas Gerais e em todo o Brasil."
              >
                Defesa especializada em{" "}
                <span className="italic text-brand-700">
                  INSS, RPPS e Direitos do Trabalhador.
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

        {/* Seção Especial: Por que Escolher a Dra. Juliana Carvalho? */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-y border-brand-200/60 bg-brand-50/50 py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                eyebrow="EFICIÊNCIA COMPROVADA & RESOLUÇÃO DE CASOS"
                description="Veja como o compromisso com o cálculo rigoroso, honestidade e técnica processual transforma problemas previdenciários complexos em aposentadorias seguras e vantajosas."
              >
                Cálculos confusos ou benefício negado?{" "}
                <span className="italic text-brand-700">
                  Nós esclarecemos e lutamos pelo seu direito.
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Juliana! Gostaria de uma análise para meu caso de benefício / aposentadoria."
                )}
                target="_blank"
                size="md"
                variant="burgundy"
                className="rounded-full shadow-sm"
              >
                <WhatsAppIcon size={16} /> Analisar Meu Caso no WhatsApp
              </GlowingButton>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {/* Card 1: Planejamento Previdenciário e INSS */}
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
                      <Landmark size={14} /> Planejamento Previdenciário & INSS
                    </span>
                    <span className="text-xs font-semibold text-brand-700">
                      Dra. Juliana Carvalho
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-ink sm:text-[1.75rem]">
                    Planejamento Estratégico para Obter o Maior Valor de Benefício
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
                    Relatos reais de segurados que planejaram a aposentadoria com a Dra. Juliana e evitaram perdas irreparáveis. Analisamos todas as contribuições passadas, descartamos períodos prejudiciais e indicamos a data exata para requerer o benefício com a maior renda mensal possível.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-ink">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-brand-700" />
                      <span>Análise técnica aprofundada de todo o histórico no CNIS</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-brand-700" />
                      <span>Simulações de todas as regras de transição vigentes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-brand-700" />
                      <span>Orientações claras em linguagem acessível e descomplicada</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-brand-200/60 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Juliana! Gostaria de consultar sobre meu Planejamento Previdenciário ou benefício do INSS."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-xl border border-brand-800/20 bg-brand-50/80 px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-900 transition-all hover:border-brand-800 hover:bg-brand-900 hover:text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Solicitar Análise com Dra. Juliana
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>

              {/* Card 2: RPPS - Servidores Públicos */}
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
                      <Award size={14} /> Servidores Públicos (RPPS)
                    </span>
                    <span className="text-xs font-semibold text-brand-700">
                      Dra. Juliana Carvalho
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-ink sm:text-[1.75rem]">
                    Segurança Jurídica na Aposentadoria do Servidor Público
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
                    Regimes próprios municipais, estaduais e federais exigem profundo conhecimento das emendas constitucionais e normas estatutárias. Dra. Juliana defende a integralidade, paridade e contagem correta de tempo para que o servidor se aposente com tranquilidade e sem prejuízos remuneratórios.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-ink">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-brand-700" />
                      <span>Aplicação rigorosa das regras constitucionais de transição</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-brand-700" />
                      <span>Agilidade na expedição e averbação de certidões (CTC)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-brand-700" />
                      <span>Proteção integral aos direitos funcionais e salariais</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-brand-200/60 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Juliana! Sou servidor(a) público(a) e gostaria de orientação para minha aposentadoria no RPPS."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-xl border border-brand-800/20 bg-brand-50/80 px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-900 transition-all hover:border-brand-800 hover:bg-brand-900 hover:text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Consultar Direito no RPPS
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
                description="O reconhecimento como uma das advogadas mais recomendadas de São João del Rei e região (5,0 ★ no Google com 58 avaliações) reflete nossa dedicação intransigente em aliar conhecimento técnico de ponta e acolhimento humano."
              >
                Protegemos seu futuro com{" "}
                <span className="italic text-brand-200">
                  seriedade, clareza e dedicação total.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-gold-300/25 bg-white/5 p-6 font-serif text-base italic leading-7 text-brand-100">
                &ldquo;Eu NÃO faço o que posso para garantir a melhor aposentadoria para o cliente. Eu faço meu melhor. A falência da ação está em admitir a síndrome do possível.&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-gold-300">
                  — Mario Sérgio Cortella · Princípio de Atuação de Dra. Juliana Carvalho
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
                  "Atendimento Acolhedor & Escuta Qualificada",
                  "Entendemos que benefícios previdenciários e direitos trabalhistas representam o sustento da sua família. Atendemos com paciência, ouvindo cada detalhe da sua história contributiva.",
                ],
                [
                  "02",
                  "Cálculo Minucioso & Honestidade",
                  "Não prometemos o impossível: fazemos simulações reais e transparentes para que você saiba exatamente quanto vai receber e em qual data é mais vantajoso dar entrada.",
                ],
                [
                  "03",
                  "Combatividade & Destravamento de Processos",
                  "Não aceitamos respostas automáticas ou negativas injustas do INSS. Entramos com recursos sólidos e ações judiciais fundamentadas para assegurar a vitória do seu direito.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-semibold text-gold-300">
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

        {/* Avaliações no Google (Depoimentos Reais - 5,0 estrelas · 58 avaliações) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                eyebrow="PROVA SOCIAL VERIFICADA · GOOGLE MEU NEGÓCIO"
                description="Confira avaliações autênticas de clientes que confiaram suas causas previdenciárias e trabalhistas à Dra. Juliana Carvalho em São João del Rei e em todo o Brasil."
              >
                Avaliada com nota máxima 5,0 ★ pela{" "}
                <span className="italic text-brand-700">
                  clareza técnica, dedicação e causas conquistadas.
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
                      5,0
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
                    Dra. Juliana Carvalho Advogada
                  </p>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-brand-800 transition-colors hover:text-brand-950"
                  >
                    58 avaliações no Google <ArrowUpRight size={13} />
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
                  "10 anos de experiência",
                  "Especialista em INSS e RPPS",
                  "Atendimento acolhedor",
                  "Planejamento com cálculo exato",
                  "Nota máxima 5,0 no Google",
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
                Ver perfil e 58 avaliações no Google{" "}
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
                eyebrow="CONTATO & SEDE EM SÃO JOÃO DEL REI - MG"
                description="Agende seu atendimento presencial em nosso escritório na Av. Tiradentes ou inicie seu atendimento pelo WhatsApp com retorno ágil para qualquer lugar do país."
              >
                Estamos prontos para{" "}
                <span className="italic text-brand-700">
                  garantir o seu direito.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl()}
                  target="_blank"
                  size="lg"
                  variant="burgundy"
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
                      Segunda a Sexta-feira: Aberto a partir das 07:30
                    </p>
                    <p className="text-[11px] text-ink-soft/80">
                      Atendimento presencial com agendamento e atendimento online nacional
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
                    São João del Rei · Minas Gerais
                  </p>
                </div>
              </div>

              <address className="mt-7 max-w-md text-[14px] not-italic leading-7 text-ink-soft">
                <strong className="font-semibold text-ink">
                  Dra. Juliana Carvalho Advocacia Especializada
                </strong>
                <br />
                Especialista em INSS e RPPS (Servidores Públicos)
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
                    Abre às 07:30
                  </span>
                  <span>Atendimento Presencial</span>
                  <span className="text-right font-semibold text-brand-700">
                    Com agendamento
                  </span>
                  <span>Atendimento Digital</span>
                  <span className="text-right text-ink">Em todo o Brasil</span>
                </div>
              </div>

              <div className="my-7 h-px bg-brand-200/60" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-ink-soft">
                  Av. Tiradentes, 707 · Centro, São João del Rei - MG
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

        {/* Pre-Footer CTA Strip - Deep Burgundy with Champagne Sheen */}
        <section className="bg-gradient-to-r from-brand-950 via-brand-900 to-brand-950 px-5 py-14 text-white shadow-inner sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gold-300">
                <Sparkles size={13} /> DRA. JULIANA CARVALHO · SÃO JOÃO DEL REI - MG
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                Quer saber o momento certo e o maior valor para a sua aposentadoria?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dra. Juliana! Gostaria de agendar uma consulta inicial para analisar minha aposentadoria / benefício."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-gradient-to-r from-brand-700 via-brand-600 to-brand-700 px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-md transition-all hover:-translate-y-0.5 hover:brightness-110 hover:shadow-burgundy"
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
                aria-label="Dra. Juliana Carvalho Advogada"
                className="inline-block"
              >
                <Image
                  src={LOGO_SRC}
                  width={2172}
                  height={724}
                  alt="Dra. Juliana Carvalho Advogada Especialista em INSS e RPPS"
                  className="h-14 w-auto object-contain sm:h-16"
                />
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-brand-100/70">
                ⚖️ Assessoria jurídica de excelência com atendimento humanizado, clareza e dedicação. Especialista em Direito Previdenciário (INSS e RPPS Servidores Públicos) e Trabalhista.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-gold-300">
                Dra. Juliana Carvalho · OAB/MG
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-300">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-brand-100/75">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  Dra. Juliana Carvalho
                </a>
                <a className="footer-link" href="#atuacao">
                  Áreas de Atuação
                </a>
                <a className="footer-link" href="#diferenciais">
                  Por que Escolher?
                </a>
                <a className="footer-link" href="#avaliacoes">
                  Avaliações no Google (5,0 ★)
                </a>
                <a className="footer-link" href="#contato">
                  Contato & Sede em São João del Rei
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-300">
                Contato & Endereço
              </h2>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-brand-100/75">
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Juliana! Gostaria de solicitar um atendimento com você."
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
                  <Clock size={14} className="shrink-0" /> Aberto a partir das 07:30
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/15 pt-6 text-[10px] text-brand-100/55 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} DRA. JULIANA CARVALHO ADVOCACIA. Todos os direitos reservados.
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
              "Olá, Dra. Juliana Carvalho! Gostaria de tirar uma dúvida sobre meu benefício / aposentadoria."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Dra. Juliana Carvalho"
            className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          >
            <WhatsAppIcon size={28} />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-brand-950 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg transition-opacity group-hover:block">
              Falar com Dra. Juliana
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
                    variant="burgundy"
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
