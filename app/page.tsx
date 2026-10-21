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
  Compass,
  FileCheck2,
  HeartHandshake,
  Home as HomeIcon,
  Landmark,
  Mail,
  MapPin,
  Menu,
  Phone,
  Scale,
  ShieldCheck,
  Sparkles,
  Star,
  Users2,
  X,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5531988885570";
const PHONE_DISPLAY = "(31) 98888-5570";
const EMAIL_CONTACT = "contato@deboragurgel.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/deboragurgel.adv/";
const INSTAGRAM_HANDLE = "@deboragurgel.adv";

const ADDRESS_TEXT =
  "Av. Queiroz Júnior, 211 - 2º andar, loja 6 - Centro, Itabirito - MG, 35450-069";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=D%C3%A9bora+Gurgel+%E2%80%94+Advogada+Itabirito+%C2%B7+MG";

const LOGO_SEAL_SRC = "/logo-symbol.png";
const LOGO_FULL_SRC = "/logo.png";
const LOGO_HORIZONTAL_SRC = "/logo-horizontal.png";
const LOGO_VERTICAL_SRC = "/logo-vertical.png";
const FOTO_HERO_SRC = "/debora-gurgel.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Débora! Gostaria de agendar uma consulta jurídica e tirar dúvidas sobre o meu caso.";
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
    id: "direito-possessorio-regularizacao",
    title: "Direito Possessório & Regularização de Imóveis",
    icon: HomeIcon,
    tag: "Usucapião · Reintegração de Posse · Titulação · Conflitos Fundiários",
    summary:
      "Proteção intransigente da sua posse e regularização definitiva da escritura de imóveis urbanos e rurais, assegurando valorização e tranquilidade jurídica para sua família.",
    details:
      "A moradia e a propriedade da terra são conquistas sagradas que representam o esforço de uma vida. Com quase duas décadas de atuação direta em Minas Gerais, a Dra. Débora Gurgel atua com sólida experiência prática na condução de ações de Usucapião (tanto extrajudicial em cartório quanto judicial), ações possessórias de reintegração e manutenção contra invasões ou turbações, retificação de áreas e titulação definitiva de imóveis sem escritura.",
    topics: [
      "Usucapião Extrajudicial em Cartório de Imóveis (procedimento célere, econômico e sem processo judicial)",
      "Usucapião Judicial para imóveis urbanos, rurais, especiais e familiares",
      "Ação de Reintegração e Manutenção de Posse e Interdito Proibitório com pedido liminar urgente",
      "Regularização documental de imóveis de herança e contratos de gaveta sem escritura",
      "Ações demarcatórias, divisão de terras e solução amigável de conflitos de confrontações",
      "Defesa contínua de posse mansa e pacífica com assessoria jurídica minuciosa até o registro formal",
    ],
    whatsAppText:
      "Olá, Dra. Débora! Gostaria de uma avaliação para regularizar ou defender a posse do meu imóvel (usucapião ou reintegração de posse).",
  },
  {
    id: "inventario-partilha-sucessoes",
    title: "Inventário, Partilha de Bens & Sucessões",
    icon: FileCheck2,
    tag: "Cartório Ágil · Inventário Judicial · Planejamento Sucessório · ITCD MG",
    summary:
      "Condução célere, segura e conciliadora da transmissão de bens da família, desatando entraves cartorários e preservando a harmonia entre os herdeiros.",
    details:
      "A perda de um familiar é um momento doloroso que não deve ser agravado por conflitos ou demoras burocráticas infindáveis. Havendo consenso entre herdeiros capazes, viabilizamos o inventário extrajudicial em cartório de forma célere e com expressiva economia tributária de ITCD em Minas Gerais. Nos casos de desacordo ou havendo herdeiros menores, conduzimos o inventário judicial com firmeza na defesa da justa cota-parte e no diálogo familiar.",
    topics: [
      "Inventário Extrajudicial em Cartório: partilha rápida, econômica e segura para herdeiros em consenso",
      "Inventário Judicial célere para patrimônios complexos ou quando há herdeiros menores/incapazes",
      "Planejamento Sucessório Familiar, doações em vida com reserva de usufruto e testamentos",
      "Cálculo otimizado e desembaraço ágil de ITCD (Imposto sobre Herança) junto à Fazenda de Minas Gerais",
      "Levantamento célere de alvarás judiciais para liberação de saldos bancários, FGTS e benefícios",
      "Mediação pacífica entre herdeiros para preservação do patrimônio e da harmonia familiar",
    ],
    whatsAppText:
      "Olá, Dra. Débora! Gostaria de orientação para dar entrada em um inventário (extrajudicial em cartório ou judicial) e partilha de bens.",
  },
  {
    id: "planejamento-previdenciario",
    title: "Planejamento Previdenciário Estratégico",
    icon: Landmark,
    tag: "Análise CNIS · Regras de Transição · Projeção de Valor · Aposentadoria Máxima",
    summary:
      "Estudo aprofundado do seu histórico de contribuições para garantir que você se aposente na regra mais vantajosa e com o maior valor mensal possível pelo INSS.",
    details:
      "Aposentar-se sem planejamento prévio é um dos maiores erros financeiros, pois a escolha de uma regra desvantajosa reduz seu benefício para o resto da vida. A Dra. Débora Gurgel realiza uma auditoria completa no seu extrato CNIS, identificando períodos não computados pelo INSS, corrigindo indicadores de pendência e calculando matematicamente a data exata e o valor da melhor aposentadoria.",
    topics: [
      "Auditoria minuciosa do Extrato Previdenciário (CNIS) e regularização de pendências cadastrais",
      "Simulação comparativa entre todas as regras de transição pós-Reforma da Previdência (EC 103/19)",
      "Projeção financeira do valor estimado da aposentadoria em cada modalidade e cenário futuro",
      "Reconhecimento de períodos rurais de economia familiar, regime militar e serviço público",
      "Conversão e comprovação de períodos especiais trabalhados sob insalubridade ou periculosidade",
      "Parecer conclusivo com cronograma ideal de recolhimentos para obter o teto mais vantajoso",
    ],
    whatsAppText:
      "Olá, Dra. Débora! Gostaria de agendar um Planejamento Previdenciário para analisar o melhor momento e valor da minha aposentadoria.",
  },
  {
    id: "concessao-beneficios-inss",
    title: "Concessão & Restabelecimento de Benefícios do INSS",
    icon: ShieldCheck,
    tag: "Aposentadorias · BPC/LOAS · Auxílio-Doença · Invalidez · Pagamento de Retroativos",
    summary:
      "Atuação combatente no INSS e na Justiça Federal para reverter negativas injustas e conquistar o benefício que garante a sua tranquilidade e subsistência.",
    details:
      "Receber uma resposta negativa do INSS gera profunda angústia. Com 18 anos de vivência jurídica, a Dra. Débora Gurgel atua com rigor na instrução de laudos médicos, perícias e recursos, tanto na via administrativa quanto em ações judiciais perante a Justiça Federal, garantindo a concessão de aposentadorias, benefícios por incapacidade e BPC/LOAS com o pagamento integral de todos os valores retroativos.",
    topics: [
      "Aposentadoria por Idade Urbana e Rural com aproveitamento integral do tempo de serviço",
      "Aposentadoria por Tempo de Contribuição e Aposentadoria Especial para atividades insalubres",
      "Benefício de Prestação Continuada (BPC/LOAS) para idosos a partir de 65 anos e pessoas com deficiência",
      "Auxílio por Incapacidade Temporária (auxílio-doença) e Aposentadoria por Incapacidade Permanente",
      "Pensão por Morte urbana e rural e restabelecimento de benefícios cancelados indevidamente",
      "Ação judicial com recebimento de todas as parcelas retroativas desde a data do primeiro requerimento",
    ],
    whatsAppText:
      "Olá, Dra. Débora! Preciso de ajuda jurídica para conseguir ou restabelecer um benefício do INSS (aposentadoria, auxílio-doença ou BPC/LOAS).",
  },
  {
    id: "direito-civel-contratual",
    title: "Advocacia Cível & Direito Contratual",
    icon: Scale,
    tag: "Contratos Imobiliários · Cobranças & Execuções · Indenizações · Obrigações Civis",
    summary:
      "Segurança jurídica na compra e venda de bens, recuperação ágil de créditos e defesa intransigente em litígios e obrigações cíveis.",
    details:
      "Relações patrimoniais e contratuais exigem redação minuciosa e acompanhamento experiente para não se tornarem disputas traumáticas e onerosas. Na esfera cível, atuamos na elaboração e revisão segura de contratos de compra e venda imobiliária, contratos de locação comercial e residencial, cobranças de títulos executivos e ações indenizatórias por descumprimento de obrigações.",
    topics: [
      "Elaboração e revisão criteriosa de contratos de compra e venda de imóveis, permuta e cessão de direitos",
      "Contratos de locação com cláusulas protetivas, garantias sólidas e notificações extrajudiciais",
      "Ações de cobrança e execuções de títulos de crédito (cheques, notas promissórias e confissões de dívida)",
      "Ações indenizatórias por perdas, danos materiais e descumprimento de cláusulas contratuais",
      "Notificações extrajudiciais com validade jurídica formal para constituição em mora e rescisão amigável",
      "Ações de despejo por falta de pagamento e defesa patrimonial em execuções de dívidas",
    ],
    whatsAppText:
      "Olá, Dra. Débora! Gostaria de consultar sobre uma questão de Direito Cível ou análise de contrato imobiliário/comercial.",
  },
  {
    id: "consultoria-estrategica-preventiva",
    title: "Consultoria Jurídica Estratégica & Preventiva",
    icon: HeartHandshake,
    tag: "Pareceres Técnicos · Mediação Extrajudicial · Segurança Patrimonial · Ética",
    summary:
      "Assessoria preventiva que antecipa riscos, resolve impasses antes do processo judicial e proporciona total tranquilidade para as decisões da sua vida.",
    details:
      "A melhor solução jurídica é aquela que evita o processo demorado e oneroso. Com 18 anos de prática jurídica consolidada em Itabirito e Minas Gerais, a Dra. Débora Gurgel oferece uma escuta acolhedora e pareceres diretos, mediando acordos extrajudiciais de forma ética e resolutiva para que sua família tome decisões com respaldo irrefutável.",
    topics: [
      "Análise preventiva de riscos e certidões em aquisições de imóveis urbanos e rurais",
      "Mediação extrajudicial e redação de acordos formais com plena eficácia legal executiva",
      "Orientação preventiva e estruturação de segurança patrimonial para famílias",
      "Acompanhamento pessoal e assessoria técnica em assinaturas de escrituras em cartórios",
      "Consultoria jurídica com respostas claras, descomplicadas e sem juridiquês para suas dúvidas",
      "Pareceres técnicos prévios para decisões sucessórias, imobiliárias e previdenciárias",
    ],
    whatsAppText:
      "Olá, Dra. Débora! Gostaria de agendar uma consulta para orientação jurídica preventiva e análise estratégica do meu caso.",
  },
];

const clientReviews = [
  {
    name: "Tatiane Franca",
    timeAgo: "11 meses atrás",
    reviewsCount: "2 avaliações no Google",
    badge: "Competência & Resultado Garantido",
    content:
      "Dra. Débora é muito competente, comprometida e o resultado é garantido. Do começo ao fim do processo que iniciei com ela, esteve presente e com informações precisas. Gratidão.",
  },
  {
    name: "Lauro Mendanha",
    timeAgo: "2 anos atrás",
    reviewsCount: "1 avaliação no Google",
    badge: "Atendimento Excepcional no Inventário",
    content:
      "Avalio o atendimento da Dra. Débora como excepcional. Sua atuação no desdobramento do processo de inventário foi exemplar, com todas as orientações e informações fornecidas de maneira rápida e clara. Desde o início até a finalização do processo.",
  },
  {
    name: "Maria Luiza Faria",
    timeAgo: "2 anos atrás",
    reviewsCount: "4 avaliações · 11 fotos",
    badge: "Causa Ganha & Super Recomendo",
    content:
      "Excelente profissional. As vzs q eu, amigos(as) precisamos do seu serviço: Foi causa ganha. Gratidão Drª Débora 'super recomendo'.",
  },
  {
    name: "Pollyana Castro Ferreira",
    timeAgo: "3 anos atrás",
    reviewsCount: "1 avaliação no Google",
    badge: "Competente & Super Solícita",
    content:
      "Débora é uma profissional excelente, extremamente competente e super solícita quanto às minhas dúvidas. Não tenho palavras para agradecê-la pelo profissionalismo.",
  },
  {
    name: "Paulo Henrique Gouvêa Santos",
    timeAgo: "3 anos atrás",
    reviewsCount: "3 avaliações no Google",
    badge: "Supera as Expectativas",
    content:
      "Excelente trabalho. Profissional super dedicada, comprometida, esforçada e engajada. Sempre supera minhas expectativas. Estou muito grato ao seu trabalho. Super recomendo.",
  },
  {
    name: "Ana Celia",
    timeAgo: "um ano atrás",
    reviewsCount: "1 avaliação no Google",
    badge: "Dedicada nos Mínimos Detalhes",
    content:
      "Débora uma excelente profissional, dedicada nos mínimos detalhes e apoio. Eu super recomendo.",
  },
  {
    name: "Thelma Diroki",
    timeAgo: "2 anos atrás",
    reviewsCount: "4 avaliações no Google",
    badge: "Merece Toda Credibilidade",
    content:
      "Sim, a Débora merece toda credibilidade, é uma excelente profissional!",
  },
  {
    name: "Gláucia Gurgel",
    timeAgo: "6 anos atrás",
    reviewsCount: "1 avaliação no Google",
    badge: "Ética & Resolutividade",
    content:
      "Profissional excelente, tem sua atuação pautada na ética e resolutividade.",
  },
  {
    name: "Marina Soares & Patrícia Antunes",
    timeAgo: "Avaliação Verificada",
    reviewsCount: "Avaliações no Google",
    badge: "Qualidade & Profissionalismo",
    content:
      "Aspectos positivos: Qualidade, Profissionalismo, ética e dedicação impecável em cada causa. Excelente profissional que inspira confiança e entrega resultados.",
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
      <h2 className="mt-4 font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-[#0d121c] sm:text-4xl lg:text-[3.15rem]">
        {children}
      </h2>
      {description && (
        <p className="mt-4 text-[15px] leading-7 text-[#4a433d]">
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
      <main className="overflow-hidden bg-[#faf8f5] text-[#0d121c] selection:bg-[#fdefca] selection:text-[#0d121c]">
        {/* Navigation Bar - Refined Light Luxury with Polished Champagne Gold Accents */}
        <header className="sticky top-0 z-40 border-b border-[#e8dfd2] bg-white/95 backdrop-blur-xl shadow-xs">
          <div className="mx-auto flex h-[96px] max-w-7xl items-center justify-between gap-6 px-5 sm:h-[108px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Débora Gurgel Advocacia e Consultoria Jurídica"
              onClick={closeMenu}
              className="flex shrink-0 items-center transition-opacity hover:opacity-90"
            >
              <div className="relative h-12 w-52 sm:h-14 sm:w-64 lg:h-16 lg:w-72 xl:h-[70px] xl:w-80">
                <Image
                  src={LOGO_HORIZONTAL_SRC}
                  alt="Débora Gurgel — Advocacia e Consultoria Jurídica"
                  fill
                  priority
                  sizes="(max-width: 640px) 210px, (max-width: 1024px) 256px, 320px"
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
                Dra. Débora
              </a>
              <a className="nav-link" href="#atuacao">
                Áreas de Atuação
              </a>
              <a className="nav-link" href="#diferenciais">
                18 Anos de Experiência
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
                aria-label="Avaliações da Dra. Débora Gurgel no Google"
                className="grid size-10 place-items-center rounded-lg border border-[#e8dfd2] bg-[#faf8f5] text-[#4a433d] transition-all hover:border-[#cba273] hover:bg-white hover:text-[#0d121c] shadow-xs"
                title="5,0 ★ no Google (13 avaliações)"
              >
                <GoogleIcon size={16} />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da Dra. Débora Gurgel"
                className="grid size-10 place-items-center rounded-lg border border-[#e8dfd2] bg-[#faf8f5] text-[#4a433d] transition-all hover:border-[#cba273] hover:bg-white hover:text-[#0d121c] shadow-xs"
                title={`Instagram ${INSTAGRAM_HANDLE}`}
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                aria-label="Ligar para Débora Gurgel Advogada"
                className="grid size-10 place-items-center rounded-lg border border-[#e8dfd2] bg-[#faf8f5] text-[#4a433d] transition-all hover:border-[#cba273] hover:bg-white hover:text-[#0d121c] shadow-xs"
                title={`Ligar: ${PHONE_DISPLAY}`}
              >
                <Phone size={16} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Dra. Débora Gurgel"
                className="grid size-10 place-items-center rounded-lg border border-[#e8dfd2] bg-[#faf8f5] text-[#4a433d] transition-all hover:border-[#cba273] hover:bg-white hover:text-[#0d121c] shadow-xs"
                title="Atendimento no WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Débora! Gostaria de agendar uma consulta e receber orientação jurídica para o meu caso."
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
              className="grid size-11 place-items-center rounded-lg border border-[#e8dfd2] bg-[#faf8f5] text-[#0d121c] lg:hidden shadow-xs"
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
                className="overflow-hidden border-t border-[#e8dfd2] bg-white px-6 text-[#0d121c] lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["Dra. Débora Gurgel", "#sobre"],
                    ["Áreas de Atuação", "#atuacao"],
                    ["18 Anos de Experiência", "#diferenciais"],
                    ["Avaliações (5,0 ★)", "#avaliacoes"],
                    ["Contato & Sede", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm font-medium text-[#4a433d] hover:text-[#a46d2f]"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#a46d2f] via-[#cba273] to-[#a46d2f] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.13em] text-white shadow-md transition-all hover:brightness-105"
                      href={getWhatsAppUrl(
                        "Olá, Dra. Débora! Gostaria de falar sobre o meu caso e receber orientação jurídica."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} /> WhatsApp: {PHONE_DISPLAY}
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#e8dfd2] bg-[#faf8f5] px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-[#0d121c] transition-all hover:border-[#cba273]"
                      href={GOOGLE_SEARCH_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <GoogleIcon size={15} /> 5,0 ★ no Google (13 avaliações)
                    </a>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section - Warm Ivory & Champagne Gold Elegance */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-[#e8dfd2] bg-gradient-to-b from-white via-[#faf8f5] to-[#f4efe6]"
        >
          {/* Subtle warm champagne gold ambient aura */}
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[36rem] rounded-full bg-[#cba273]/12 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[28rem] rounded-full bg-[#eece9e]/15 blur-3xl" />

          <div className="mx-auto grid min-h-[660px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[720px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-12 lg:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-6"
            >
              <motion.div
                variants={reveal}
                className="mb-6 inline-flex items-center gap-2.5 rounded-lg border border-[#cba273]/50 bg-white px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#7d5120] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#a46d2f]" />
                <span>18 ANOS DE EXPERIÊNCIA · ITABIRITO - MG</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="max-w-[760px] font-serif text-[2.5rem] leading-[1.1] tracking-[-0.02em] text-[#0d121c] sm:text-5xl lg:text-[3.75rem]"
              >
                Defesa Firme do Seu Patrimônio e Segurança Para o Seu Futuro:{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#7d5120] via-[#cba273] to-[#5d3618]">
                  Atuação Jurídica Estratégica, Ética e Resolutiva.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-[#4a433d] sm:text-base sm:leading-8"
              >
                Sob a liderança da{" "}
                <strong className="font-semibold text-[#0d121c]">
                  Dra. Débora Gurgel
                </strong>
                , com 18 anos de sólida trajetória jurídica em Itabirito e Minas Gerais. Atendimento altamente especializado e humanizado em{" "}
                <strong className="font-semibold text-[#0d121c]">
                  Direito Possessório e Regularização de Imóveis, Inventários e Partilha de Bens, Planejamento Previdenciário e Benefícios do INSS
                </strong>
                , conduzindo cada caso com proximidade, clareza e dedicação pessoal.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Débora! Gostaria de agendar uma consulta sobre Direito Possessório / Inventário / Previdenciário."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar no WhatsApp com a Dra. Débora
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 rounded-lg border border-[#e8dfd2] bg-white px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#0d121c] shadow-xs transition-all hover:border-[#cba273] hover:bg-[#faf8f5]"
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
                  className="inline-flex items-center gap-2 font-medium text-[#0d121c] transition-colors hover:text-[#a46d2f]"
                >
                  <Star size={15} className="fill-[#cba273] text-[#cba273]" /> 5,0 estrelas no Google (13 avaliações autênticas)
                </a>
                <span className="inline-flex items-center gap-2 font-medium text-[#0d121c]">
                  <Award size={15} className="text-[#a46d2f]" /> 18 Anos de Advocacia
                </span>
                <span className="inline-flex items-center gap-2 font-medium text-[#0d121c]">
                  <MapPin size={15} className="text-[#a46d2f]" /> Av. Queiroz Júnior, 211 · Centro
                </span>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-[#0d121c] transition-colors hover:text-[#a46d2f]"
                >
                  <InstagramIcon size={15} className="text-[#a46d2f]" /> {INSTAGRAM_HANDLE}
                </a>
              </motion.div>
            </motion.div>

            {/* Hero Visual Presentation - Dra. Débora Gurgel Portrait */}
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
              <div className="relative aspect-[4/4.9] overflow-hidden rounded-2xl border-2 border-[#e8dfd2] bg-white shadow-xl ring-1 ring-[#cba273]/30">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dra. Débora Gurgel — Advogada em Itabirito - MG"
                  fill
                  priority
                  unoptimized
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0b111e] via-[#0b111e]/75 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-8 sm:left-8 sm:right-8">
                  <div>
                    <p className="font-serif text-2xl font-normal tracking-wide text-white">
                      Dra. Débora Gurgel
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#eece9e]">
                      Possessório · Inventários · Previdenciário
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-[#cba273]/40 bg-[#0b111e]/85 text-[#fdefca] backdrop-blur-sm">
                    <Scale size={18} />
                  </span>
                </div>
              </div>

              {/* Floating authority badge */}
              <div className="absolute -left-3 top-6 z-10 rounded-lg border border-[#cba273]/40 bg-white/95 px-4 py-2 text-[10px] font-bold tracking-[0.14em] text-[#7d5120] shadow-md backdrop-blur-md sm:-left-5">
                ITABIRITO - MG · ATENDIMENTO ON-LINE EM TODO O BRASIL
              </div>

              {/* Floating Google 5.0 Star Rating */}
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="group absolute -bottom-5 -right-3 z-10 rounded-xl border border-[#cba273]/40 bg-white/95 p-3.5 shadow-md backdrop-blur-md transition-all hover:border-[#a46d2f] hover:bg-white sm:-right-5"
              >
                <div className="flex items-center gap-2">
                  <GoogleIcon size={17} />
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-0.5 text-[#cba273]">
                      <Star size={13} className="fill-[#cba273] text-[#cba273]" />
                    </div>
                    <span className="font-serif text-base font-bold text-[#0d121c]">
                      5,0
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#a46d2f]">
                      / 5,0
                    </span>
                  </div>
                </div>
                <p className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-[#5c5042]">
                  13 Avaliações no Google
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
                "18 Anos de Atuação",
                "quase duas décadas de advocacia pautada na ética, técnica e resolutividade",
              ],
              [
                "5,0 ★ no Google",
                "nota máxima com 13 avaliações comprovando presença e informações precisas",
              ],
              [
                "Possessório & Inventários",
                "regularização de imóveis, usucapião e partilha de herança célere em cartório",
              ],
              [
                "Sede em Itabirito - MG",
                "escritório no Centro de Itabirito e atendimento digital em todo o Brasil",
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
                <span className="font-serif text-xl font-semibold text-[#a46d2f] sm:text-2xl">
                  {value}
                </span>
                <span className="max-w-[165px] text-[11px] leading-5 text-[#5c5042]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre a Dra. Débora Gurgel - Editorial Canvas */}
        <section
          id="sobre"
          className="scroll-mt-24 border-y border-[#e8dfd2] bg-[#faf8f5] py-20 text-[#0d121c] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
            {/* Visual presentation - Dra. Débora Gurgel portrait with refined frame */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[480px]"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border-2 border-[#e8dfd2] bg-white shadow-2xl ring-1 ring-[#cba273]/30">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dra. Débora Gurgel — Advocacia e Consultoria Jurídica"
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b111e]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="font-cinzel text-xl font-bold tracking-wider text-[#fdefca]">
                    DÉBORA GURGEL
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-stone-200">
                    Advocacia e Consultoria Jurídica
                  </p>
                </div>
              </div>

              {/* Authority badge card */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-[#cba273]/40 bg-white px-5 py-4 shadow-xl sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-[#a46d2f]">
                  <Sparkles size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#7d5120]">
                    18 Anos de Experiência Jurídica
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-[#0d121c]">
                  Dra. Débora Gurgel
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-[#a46d2f]">
                  Advocacia Cível & Previdenciária
                </p>
                <p className="mt-1 text-[11px] leading-4 text-[#5c5042]">
                  Av. Queiroz Júnior, 211 - 2º andar, loja 6 · Centro, Itabirito - MG
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-[#cba273]/40 sm:-left-7 sm:-top-7 sm:size-32" />
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
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#cba273]/40 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#7d5120] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#a46d2f]" />
                <span>QUEM É A DRA. DÉBORA GURGEL</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-[#0d121c] sm:text-4xl lg:text-[3.25rem]"
              >
                Uma advocacia que une quase duas décadas de técnica:{" "}
                <span className="italic text-[#a46d2f]">
                  presença contínua, informações precisas e compromisso real com seus direitos.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-[#4a433d]"
              >
                Com sede no Centro de{" "}
                <strong className="font-bold text-[#0d121c]">
                  Itabirito - MG
                </strong>{" "}
                e atuação presencial em toda a Região Central de Minas Gerais e digital para clientes em todo o Brasil, a{" "}
                <strong className="font-bold text-[#0d121c]">
                  Dra. Débora Gurgel
                </strong>{" "}
                acumula mais de 18 anos de experiência pautada na ética inabalável, resolutividade e dedicação pessoal a cada caso.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-[#4a433d]"
              >
                Especialista em{" "}
                <strong className="font-bold text-[#0d121c]">
                  Advocacia Cível (com ênfase expressiva em Direito Possessório, Usucapião e Inventários) e Advocacia Previdenciária (Planejamento Previdenciário e Concessão de Benefícios do INSS)
                </strong>
                , seu diferencial é o acompanhamento transparente: o cliente nunca fica sem resposta, tendo acesso a informações claras e precisas do início até o desfecho vitorioso do processo.
              </motion.p>

              {/* Client Quote Card from real reviews */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-xl border border-[#e8dfd2] bg-white p-5 shadow-xs"
              >
                <blockquote className="font-serif text-sm italic leading-relaxed text-[#0d121c]">
                  &ldquo;Dra. Débora é muito competente, comprometida e o resultado é garantido. Do começo ao fim do processo que iniciei com ela, esteve presente e com informações precisas. Gratidão.&rdquo;
                </blockquote>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-[#a46d2f]">
                  — Tatiane Franca · Avaliação Verificada no Google Meu Negócio (5,0 ★)
                </p>
              </motion.div>

              {/* Personality & Profile Cards */}
              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-2 gap-3 text-xs sm:grid-cols-3"
              >
                <div className="rounded-lg border border-[#e8dfd2] bg-white p-3 shadow-xs">
                  <p className="font-bold text-[#0d121c]">18 Anos de Experiência</p>
                  <p className="mt-0.5 text-[11px] text-[#6b5d50]">
                    Solidez, maturidade técnica & autoridade
                  </p>
                </div>
                <div className="rounded-lg border border-[#e8dfd2] bg-white p-3 shadow-xs">
                  <p className="font-bold text-[#0d121c]">Presença Contínua</p>
                  <p className="mt-0.5 text-[11px] text-[#6b5d50]">
                    Informações precisas do início ao fim
                  </p>
                </div>
                <div className="rounded-lg border border-[#e8dfd2] bg-white p-3 shadow-xs col-span-2 sm:col-span-1">
                  <p className="font-bold text-[#0d121c]">Atuação Integrada</p>
                  <p className="mt-0.5 text-[11px] text-[#6b5d50]">
                    Cível, Possessório & Previdenciário
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-1 gap-2.5 text-xs font-semibold text-[#0d121c] sm:grid-cols-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#a46d2f]" />
                  <span>Sede na Av. Queiroz Júnior, 211 - Centro · Itabirito</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#a46d2f]" />
                  <span>Nota máxima 5,0 ★ no Google com 13 avaliações</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#a46d2f]" />
                  <span>Contato direto pelo WhatsApp, com atenção pessoal</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#a46d2f]" />
                  <span>Atendimento presencial em Minas Gerais e digital para o Brasil</span>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Débora! Gostaria de agendar uma consulta para conversar diretamente sobre meu caso."
                  )}
                  target="_blank"
                  size="md"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar com a Dra. Débora
                </GlowingButton>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0d121c] transition-colors hover:text-[#a46d2f]"
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
                description="Atuação jurídica altamente estratégica, preventiva e contenciosa, focada em resolver litígios possessórios, partilhas de herança e aposentadorias com celeridade e segurança."
              >
                Soluções jurídicas experientes em{" "}
                <span className="italic text-[#a46d2f]">
                  Itabirito, Região Central de Minas Gerais e em todo o Brasil.
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
                    className="group flex min-h-[350px] flex-col rounded-xl border border-[#e8dfd2] bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#cba273] hover:shadow-lg sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-lg border border-[#cba273]/30 bg-[#faf8f5] text-[#a46d2f] shadow-xs transition-colors group-hover:bg-[#a46d2f] group-hover:text-white">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <span className="font-serif text-2xl text-[#cba273]/60">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-md border border-[#cba273]/30 bg-[#f4efe6] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#5d3618] shadow-xs">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.45rem] leading-tight text-[#0d121c]">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-6 text-[#5c5042]">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-[#a46d2f] hover:text-[#0d121c]"
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

        {/* Por Que Escolher a Dra. Débora Gurgel - Diferenciais */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-t border-[#e8dfd2] bg-[#faf8f5] py-20 text-[#0d121c] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                light
                eyebrow="18 ANOS DE EXCELÊNCIA & RESULTADOS"
                description="Seu patrimônio, sua aposentadoria e sua família exigem a experiência consolidada de quase duas décadas de atuação jurídica com ética e transparência."
              >
                Por que confiar seu caso à{" "}
                <span className="italic text-[#a46d2f]">
                  Dra. Débora Gurgel?
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Débora! Gostaria de uma avaliação para a minha situação jurídica."
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
              {/* Card 1: Presença Constante & Informações Precisas */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group flex flex-col justify-between rounded-xl border border-[#e8dfd2] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#cba273] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#cba273]/30 bg-[#f4efe6] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#3b220d]">
                      <HeartHandshake size={14} /> Atendimento Humanizado & Próximo
                    </span>
                    <span className="text-xs font-semibold text-[#a46d2f]">
                      Informações Precisas
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#0d121c] sm:text-[1.75rem]">
                    Você Acompanha Cada Etapa com Clareza e Sem Incertezas
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#4a433d]">
                    Muitos clientes relatam angústia ao contratar advogados que somem e não prestam esclarecimentos. Aqui, a Dra. Débora Gurgel mantém uma rotina de presença e retorno constante, explicando cada andamento em linguagem clara e precisa.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-[#0d121c]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#a46d2f]" />
                      <span>Comunicação direta pelo WhatsApp, sem intermediários ou robôs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#a46d2f]" />
                      <span>Atualizações periódicas sobre prazos, audiências e andamentos cartorários</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#a46d2f]" />
                      <span>Transparência total sobre as chances reais, riscos e custos do processo</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#e8dfd2] pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Débora! Gostaria de tirar dúvidas sobre o meu caso em uma conversa sem burocracia."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#cba273]/40 bg-[#faf8f5] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#0d121c] transition-all hover:border-[#a46d2f] hover:bg-[#0b111e] hover:text-[#fdefca]"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Conversar no WhatsApp com a Dra. Débora
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>

              {/* Card 2: 18 Anos de Experiência & Soluções Ágeis em Cartório */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="group flex flex-col justify-between rounded-xl border border-[#e8dfd2] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#cba273] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#cba273]/30 bg-[#f4efe6] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#3b220d]">
                      <Compass size={14} /> Quase Duas Décadas de Prática
                    </span>
                    <span className="text-xs font-semibold text-[#a46d2f]">
                      Cartório & Soluções Céleres
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#0d121c] sm:text-[1.75rem]">
                    Prioridade em Vias Extrajudiciais Sem o Desgaste de Anos na Justiça
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#4a433d]">
                    Com 18 anos de vivência nos tribunais e cartórios de Minas Gerais, a Dra. Débora prioriza soluções em cartório (usucapião extrajudicial, inventários consensuais e acordos amigáveis), poupando tempo precioso e custos tributários aos clientes.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-[#0d121c]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#a46d2f]" />
                      <span>Inventários e partilhas extrajudiciais concluídos com rapidez em cartório</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#a46d2f]" />
                      <span>Regularização fundiária e usucapião administrativa para titulação definitiva</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#a46d2f]" />
                      <span>Planejamento previdenciário para obter o teto máximo da aposentadoria</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#e8dfd2] pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Débora! Gostaria de consultar sobre a possibilidade de um inventário ou usucapião rápido em cartório."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#cba273]/40 bg-[#faf8f5] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#0d121c] transition-all hover:border-[#a46d2f] hover:bg-[#0b111e] hover:text-[#fdefca]"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Consultar Solução Extrajudicial no WhatsApp
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Método de Trabalho em 3 Passos */}
        <section className="relative overflow-hidden border-t border-[#e8dfd2] bg-[#faf8f5] py-20 text-[#0d121c] sm:py-24 lg:py-28">
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-[#cba273]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-[#eece9e]/12 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                light
                eyebrow="COMO ATUAMOS NO SEU CASO"
                description="Um método transparente, ético e resolutivo para analisar sua situação e aplicar a solução jurídica mais rápida e segura."
              >
                Três etapas claras para{" "}
                <span className="italic text-[#a46d2f]">
                  proteger seu patrimônio, sua família e seus direitos.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-[#e8dfd2] bg-white p-6 font-serif text-base italic leading-7 text-[#0d121c] shadow-xs">
                &ldquo;Cada causa envolve a história, a moradia e o futuro de pessoas reais. Meu compromisso é garantir que você tenha clareza absoluta e tranquilidade, sabendo que seus interesses estão sendo conduzidos com quase duas décadas de rigor técnico e atenção pessoal.&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-[#a46d2f]">
                  — Dra. Débora Gurgel · Advogada
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
                  "Escuta Acolhedora & Diagnóstico Minucioso",
                  "Atendimento presencial no escritório em Itabirito ou via WhatsApp para compreender em detalhes seu relato, examinar documentos de posse, certidões ou extrato CNIS do INSS.",
                ],
                [
                  "02",
                  "Definição da Rota Jurídica Mais Rápida e Rentável",
                  "Análise estratégica para verificar a possibilidade de resolução extrajudicial (cartório ou acordo) com economia de tempo e custos, ou a propositura de ação judicial com pedido liminar.",
                ],
                [
                  "03",
                  "Atuação Incisiva, Presença Contínua & Retorno Rápido",
                  "Protocolo técnico com fundamentação jurídica sólida, acompanhamento diligente perante juizados, varas e cartórios de registro de imóveis, com informações constantes até o resultado.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-semibold text-[#a46d2f]">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-[#0d121c]">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-[#4a433d]">
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
          className="scroll-mt-24 border-t border-[#cba273]/30 bg-[#f4efe6] py-20 text-[#0d121c] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                light
                eyebrow="PROVA SOCIAL VERIFICADA · GOOGLE MEU NEGÓCIO"
                description="Veja avaliações autênticas e espontâneas de clientes no Google sobre o comprometimento, a presença e os resultados da Dra. Débora Gurgel em Itabirito - MG."
              >
                Avaliada com nota máxima 5,0 ★ com{" "}
                <span className="italic text-[#a46d2f]">
                  13 avaliações no Google pela competência, ética e resolução de casos.
                </span>
              </Heading>

              {/* Verified Google Badge Card */}
              <div className="flex flex-col gap-3 rounded-xl border border-[#e8dfd2] bg-white p-5 shadow-xs sm:flex-row sm:items-center md:min-w-[340px]">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-lg border border-[#cba273]/30 bg-[#faf8f5] shadow-xs">
                  <GoogleIcon size={30} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-3xl font-bold leading-none text-[#0d121c]">
                      5,0
                    </span>
                    <div className="flex gap-0.5 text-[#cba273]">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-[#cba273] text-[#cba273]"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#4a433d]">
                    Débora Gurgel Advogada
                  </p>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-[#a46d2f] transition-colors hover:text-[#0d121c]"
                  >
                    13 avaliações no Google <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Client Reviews Grid */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clientReviews.map((review) => (
                <article
                  key={review.name}
                  className="group relative flex flex-col justify-between rounded-xl border border-[#e8dfd2] bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#cba273] hover:shadow-md sm:p-8"
                >
                  <div>
                    {/* Header: Stars + Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-1 text-[#cba273]">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-[#cba273] text-[#cba273]"
                          />
                        ))}
                      </div>
                      <span className="rounded-md border border-[#cba273]/30 bg-[#faf8f5] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#7d5120] shadow-xs">
                        {review.badge}
                      </span>
                    </div>

                    {/* Review content */}
                    <p className="mt-5 text-[14px] italic leading-relaxed text-[#0d121c]">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  {/* Reviewer info */}
                  <div className="mt-6 flex items-center gap-3 border-t border-[#e8dfd2] pt-4">
                    <div className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#cba273]/30 bg-[#faf8f5] font-serif text-sm font-semibold text-[#a46d2f] shadow-xs">
                      {review.name.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-serif text-base font-semibold text-[#0d121c]">
                        {review.name}
                      </p>
                      <p className="text-[10px] uppercase tracking-wider text-[#786b5e]">
                        {review.reviewsCount} {review.timeAgo && `· ${review.timeAgo}`}
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
                  "Advogada em Itabirito - MG",
                  "18 Anos de Experiência Jurídica",
                  "Nota 5,0 ★ no Google (13 avaliações)",
                  "Direito Possessório & Usucapião",
                  "Inventário Extrajudicial em Cartório",
                  "Planejamento Previdenciário Estratégico",
                  "Benefícios do INSS & Restabelecimento",
                  "Atendimento Digital para Todo o Brasil",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#e8dfd2] bg-white px-3.5 py-1.5 text-[11px] font-medium text-[#0d121c] shadow-xs"
                  >
                    <CheckCircle2 size={13} className="text-[#a46d2f]" />
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#a46d2f] transition-colors hover:text-[#0d121c]"
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

        {/* Contato & Localização da Sede em Itabirito - MG */}
        <section
          id="contato"
          className="scroll-mt-24 border-t border-[#cba273]/30 bg-[#faf8f5] py-20 text-[#0d121c] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                light
                eyebrow="CONTATO & ATENDIMENTO EM ITABIRITO"
                description="Agende uma consulta presencial em nosso escritório no Centro de Itabirito ou inicie seu atendimento imediatamente pelo WhatsApp para analisar seu caso com discrição, ética e agilidade."
              >
                Estamos prontos para{" "}
                <span className="italic text-[#a46d2f]">
                  escutar sua situação e proteger seus direitos.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Débora! Gostaria de agendar um atendimento para análise jurídica do meu caso."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} /> Iniciar Conversa no WhatsApp
                </GlowingButton>
                <p className="text-[11px] leading-5 text-[#4a433d]">
                  Telefone e WhatsApp direto:{" "}
                  <strong className="text-[#0d121c]">{PHONE_DISPLAY}</strong>
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-[#4a433d]">
                <div className="flex items-start gap-3">
                  <Clock
                    size={16}
                    className="mt-0.5 shrink-0 text-[#a46d2f]"
                  />
                  <div>
                    <p className="font-semibold text-[#0d121c]">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-[#0d121c]">
                      Segunda a Sexta-feira das 09:00 às 18:00
                    </p>
                    <p className="text-[11px] text-[#786b5e]">
                      Atendimento presencial no Centro de Itabirito - MG e atendimento digital para clientes em todo o Brasil
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#a46d2f]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-medium text-[#0d121c] transition-colors hover:text-[#a46d2f]"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#a46d2f]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#a46d2f] text-[#0d121c]"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#a46d2f]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="transition-colors hover:text-[#a46d2f] text-[#0d121c]"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#a46d2f]"
                  />
                  <div>
                    <span className="text-[#0d121c]">{ADDRESS_TEXT}</span>
                    <br />
                    <a
                      href={GOOGLE_SEARCH_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex items-center gap-1 font-semibold text-[#a46d2f] hover:underline"
                    >
                      Ver no Google Maps <ArrowUpRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Office & Profile Card */}
            <div className="relative overflow-hidden rounded-xl border border-[#e8dfd2] bg-white p-7 shadow-sm sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#a46d2f] to-[#cba273]" />

              <div className="flex flex-col gap-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#a46d2f]">
                  Sede do Escritório
                </p>
                <div className="relative h-14 w-60 sm:h-16 sm:w-72">
                  <Image
                    src={LOGO_HORIZONTAL_SRC}
                    alt="Débora Gurgel — Advocacia e Consultoria Jurídica"
                    fill
                    sizes="288px"
                    className="object-contain object-left"
                  />
                </div>
              </div>

              <address className="mt-7 max-w-md text-[14px] not-italic leading-7 text-[#4a433d]">
                <strong className="font-semibold text-[#0d121c]">
                  Dra. Débora Gurgel
                </strong>
                <br />
                Advocacia Cível (Direito Possessório, Inventários) e Previdenciária
                <br />
                18 Anos de Experiência e Atuação Resolutiva
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-lg border border-[#e8dfd2] bg-[#faf8f5] p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#a46d2f]">
                  Atendimento & Horários
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-[#4a433d]">
                  <span>Segunda a Sexta</span>
                  <span className="text-right font-semibold text-[#0d121c]">
                    09:00 às 18:00
                  </span>
                  <span>Atendimento Presencial</span>
                  <span className="text-right font-medium text-[#a46d2f]">
                    Centro · Itabirito - MG
                  </span>
                  <span>Endereço</span>
                  <span className="text-right text-[#0d121c]">Av. Queiroz Júnior, 211 - Lj 6</span>
                  <span>Avaliações Google</span>
                  <span className="text-right font-semibold text-[#a46d2f]">5,0 ★ (13 avaliações)</span>
                  <span>Atendimento Digital</span>
                  <span className="text-right text-[#0d121c]">Todo o Brasil</span>
                </div>
              </div>

              <div className="my-7 h-px bg-[#e8dfd2]" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-[#786b5e]">
                  Atendimento humanizado, ético e com absoluto sigilo profissional
                </p>
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Débora! Gostaria de agendar um atendimento no escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#cba273]/40 bg-[#f4efe6] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#0d121c] transition-colors hover:border-[#a46d2f] hover:bg-[#0b111e] hover:text-[#fdefca]"
                >
                  <WhatsAppIcon size={14} /> Falar no WhatsApp <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip */}
        <section className="border-t border-[#cba273]/30 bg-gradient-to-r from-[#f4efe6] via-[#faf8f5] to-[#f4efe6] px-5 py-14 text-[#0d121c] shadow-xs sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#a46d2f]">
                <Sparkles size={13} /> DÉBORA GURGEL ADVOCACIA · 18 ANOS DE TRADIÇÃO & RESULTADOS
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-[#0d121c] sm:text-4xl">
                Precisa de uma advogada com quase duas décadas de experiência que esteja presente e defenda seus interesses do início ao fim?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dra. Débora! Gostaria de uma avaliação para a minha situação jurídica."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-lg bg-gradient-to-r from-[#a46d2f] via-[#cba273] to-[#a46d2f] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-md transition-all hover:-translate-y-0.5 hover:brightness-105 hover:shadow-lg"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp{" "}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* Footer - Elegant Light Luxury */}
        <footer className="border-t border-[#e8dfd2] bg-[#f4efe6] px-5 py-14 text-[#0d121c] sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <a
                href="#inicio"
                aria-label="Débora Gurgel Advocacia e Consultoria Jurídica"
                className="inline-block transition-transform hover:scale-[1.01]"
              >
                <div className="relative h-16 w-60 sm:h-20 sm:w-72">
                  <Image
                    src={LOGO_HORIZONTAL_SRC}
                    alt="Débora Gurgel Advocacia e Consultoria Jurídica"
                    fill
                    sizes="288px"
                    className="object-contain object-left"
                  />
                </div>
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-[#5c5042]">
                ⚖️ 18 anos de excelência jurídica, ética e resolutividade. Atuação consolidada em Direito Possessório, Regularização de Imóveis, Inventários e Partilha de Bens, Planejamento Previdenciário e Benefícios do INSS em Itabirito - MG e em todo o Brasil.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-[#a46d2f]">
                Dra. Débora Gurgel · Advogada
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a46d2f]">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-[#5c5042]">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  Dra. Débora Gurgel
                </a>
                <a className="footer-link" href="#atuacao">
                  Áreas de Atuação
                </a>
                <a className="footer-link" href="#diferenciais">
                  18 Anos de Experiência
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
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a46d2f]">
                Contato & Atendimento
              </h2>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-[#5c5042]">
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Débora! Gostaria de falar com o escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 font-medium text-[#0d121c]"
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
                <p className="inline-flex items-center gap-2 pt-1 text-[11px] text-[#a46d2f]">
                  <Clock size={14} className="shrink-0" /> Seg a Sex: 09:00 às 18:00
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-[#e8dfd2] pt-6 text-[10px] text-stone-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} DÉBORA GURGEL ADVOCACIA E CONSULTORIA JURÍDICA. Todos os direitos reservados.
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
              "Olá, Dra. Débora! Gostaria de consultar sobre meu caso e tirar dúvidas pelo WhatsApp."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Dra. Débora Gurgel"
            className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          >
            <WhatsAppIcon size={28} />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-[#0b111e] border border-[#cba273]/30 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg transition-opacity group-hover:block">
              Falar com a Dra. Débora Gurgel
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
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-xl border border-[#e8dfd2] bg-white p-7 shadow-2xl sm:max-w-xl sm:rounded-xl sm:p-10 text-[#0d121c]"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-[#e8dfd2] bg-[#faf8f5] text-[#0d121c] transition-colors hover:border-[#cba273] hover:text-[#a46d2f]"
                >
                  <X size={18} />
                </button>

                <p className="eyebrow-light">ÁREA DE ATUAÇÃO</p>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-serif text-3xl leading-tight text-[#0d121c] sm:text-4xl"
                >
                  {activeArea.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-[#4a433d]">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-[#e8dfd2] pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#a46d2f]">
                    Demandas e Pedidos Atendidos pelo Escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-[#2b241c]"
                      >
                        <span className="size-2 shrink-0 rounded-full bg-[#a46d2f]" />
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
                    className="px-5 py-3 text-xs font-semibold text-stone-500 transition-colors hover:text-[#0d121c]"
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
