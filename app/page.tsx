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
  BookOpen,
  Briefcase,
  Building2,
  CheckCircle2,
  Clock,
  Compass,
  FileCheck,
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
  X,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5538991868160";
const PHONE_DISPLAY = "(38) 99186-8160";
const EMAIL_CONTACT = "contato@guimaraesecanuto.adv.br";

const ADDRESS_TEXT =
  "R. Macau do Meio, n° 135 - 2° andar - Centro, Diamantina - MG, 39100-000, Brasil";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Guimar%C3%A3es+e+Canuto+Advogados+R.+Macau+do+Meio+135+Diamantina+MG";

const LOGO_SRC = "/logo.png";
const IMG_PERFIL_SRC = "/ana-flavia-perfil.jpg";
const IMG_REGISTRO_SRC = "/ana-flavia-registro-imoveis.jpg";
const IMG_BLAZER_SRC = "/ana-flavia-blazer.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Ana Flávia! Gostaria de agendar uma consulta sobre regularização de imóvel / serviços jurídicos.";
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
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.07 8.02 12.23C8.15 12.39 9.74 14.85 12.19 15.91C12.77 16.16 13.23 16.31 13.58 16.42C14.17 16.61 14.71 16.58 15.13 16.52C15.6 16.45 16.58 15.93 16.78 15.35C16.99 14.77 16.99 14.27 16.93 14.17C16.86 14.07 16.71 14.01 16.47 13.89C16.24 13.77 15.11 13.21 14.9 13.14C14.69 13.06 14.54 13.02 14.39 13.25C14.23 13.47 13.8 13.98 13.67 14.13C13.54 14.27 13.41 14.29 13.18 14.17C12.95 14.06 11.98 13.74 10.84 12.72C9.95 11.92 9.34 10.94 9.17 10.65C9.01 10.36 9.15 10.2 9.27 10.08C9.37 9.98 9.5 9.8 9.62 9.66C9.74 9.52 9.78 9.42 9.86 9.26C9.94 9.1 9.9 8.95 9.84 8.83C9.78 8.71 9.32 7.57 9.13 7.11C8.94 6.66 8.75 6.72 8.6 6.71C8.47 6.71 8.31 6.71 8.15 6.71L8.53 7.33Z" />
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
    id: "regularizacao-imoveis-escritura",
    title: "Regularização de Imóveis & Saneamento Cartorário",
    icon: Building2,
    tag: "Segurança Jurídica & Matrícula Definitiva",
    summary:
      "Transforme contratos de gaveta e posses informais em escritura e registro definitivo no Cartório de Registro de Imóveis.",
    details:
      "Ter apenas a posse ou contrato de compra e venda informal deixa seu patrimônio vulnerável a penhoras, golpes e disputas. O escritório Guimarães e Canuto Advogados desenvolve estratégias jurídicas seguras e eficientes para obtenção de escritura pública, saneamento de títulos e registro definitivo, viabilizando vendas formais, financiamentos bancários e partilhas tranquilas.",
    topics: [
      "Regularização de imóveis urbanos e rurais sem escritura ou registro",
      "Regularização Fundiária Urbana e Rural (REURB)",
      "Saneamento e validação de contratos de compra e venda ('gaveta')",
      "Averbação de construções, reformas prediais e Habite-se",
      "Regularização de posse para viabilizar alienação ou financiamento bancário",
      "Cancelamento de penhoras, hipotecas e gravames indevidos na matrícula",
    ],
    whatsAppText:
      "Olá, Dra. Ana Flávia! Gostaria de uma análise para regularizar a documentação do meu imóvel.",
  },
  {
    id: "usucapiao-extrajudicial-judicial",
    title: "Usucapião Extrajudicial & Judicial",
    icon: Scale,
    tag: "Aquisição Originária da Propriedade",
    summary:
      "Conquiste a propriedade oficial do seu imóvel pela posse prolongada com agilidade em cartório ou com firmeza na Justiça.",
    details:
      "O Usucapião Extrajudicial permite obter o registro definitivo diretamente no Cartório de Registro de Imóveis, sem a lentidão de um processo judicial. Quando há litígio ou peculiaridades probatórias, atuamos com rigor e excelência na via judicial para assegurar que seu direito de posse seja transformado em titularidade legal incontestável.",
    topics: [
      "Usucapião Extrajudicial rápido direto no Cartório de Registro de Imóveis",
      "Usucapião Extraordinária, Ordinária, Especial Urbana e Especial Rural",
      "Assessoria em levantamento topográfico, planta e memorial descritivo",
      "Notificação de confrontantes, colheita de anuências e saneamento de exigências",
      "Usucapião Familiar e Usucapião Coletiva de áreas consolidadas",
      "Defesa possessória contra reivindicações indevidas e imissão na posse",
    ],
    whatsAppText:
      "Olá, Dra. Ana Flávia! Gostaria de consultoria jurídica sobre Usucapião para o meu imóvel.",
  },
  {
    id: "inventario-partilha-bens-imoveis",
    title: "Inventário & Partilha de Bens Imóveis",
    icon: HeartHandshake,
    tag: "Transmissão Legal sem Travamento de Bens",
    summary:
      "Inventários em cartório rápidos e judiciais para transferir imóveis herdados com planejamento tributário e segurança.",
    details:
      "A transmissão sucessória de imóveis exige cuidado para evitar que o patrimônio familiar fique bloqueado por anos em burocracias. Conduzimos inventários extrajudiciais em cartório de notas com rapidez ou inventários judiciais estratégicos, garantindo a partilha justa entre herdeiros, a correta apuração do ITCMD e o registro definitivo de cada quota.",
    topics: [
      "Inventário Extrajudicial rápido em Cartório de Notas (conclusão em semanas)",
      "Inventário Judicial para casos com litígio entre herdeiros ou menores",
      "Partilha amigável de imóveis urbanos, fazendas, sítios e terrenos",
      "Regularização de imóveis pendentes de inventários antigos não concluídos",
      "Planejamento tributário sucessório para redução legal de ITCMD e custas",
      "Alvarás judiciais para venda de imóveis no curso do inventário",
    ],
    whatsAppText:
      "Olá, Dra. Ana Flávia! Gostaria de atendimento para realizar um inventário e regularizar imóveis de herança.",
  },
  {
    id: "divisao-desmembramento-demarcacao",
    title: "Divisão, Desmembramento & Demarcação de Terras",
    icon: Compass,
    tag: "Imóveis Rurais e Lotes Urbanos",
    summary:
      "Individualização de lotes, divisão amigável de condomínio imobiliário e demarcação precisa de divisas rurais e urbanas.",
    details:
      "Imóveis em condomínio (indivisos) frequentemente impedem investimentos e geram impasses entre coproprietários. Atuamos na divisão e desmembramento formal de propriedades, fixação perimétrica de divisas de fazendas e terrenos no Vale do Jequitinhonha, extinguindo condomínios e garantindo matrículas autônomas.",
    topics: [
      "Desmembramento e desdobro de lotes perante Prefeitura e Cartório de Imóveis",
      "Divisão e extinção amigável ou judicial de condomínio entre coproprietários",
      "Ação Demarcatória para fixação, restauração ou retificação de marcos e divisas",
      "Adequação documental de imóveis rurais (CAR, CCIR e Georreferenciamento)",
      "Instituição e regularização de servidões de passagem e estradas rurais",
      "Ações possessórias: manutenção e reintegração de posse rural e urbana",
    ],
    whatsAppText:
      "Olá, Dra. Ana Flávia! Preciso de orientação sobre divisão ou desmembramento de um imóvel.",
  },
  {
    id: "retificacao-matriculas-demandas-cartorarias",
    title: "Retificação de Matrículas & Demandas Cartorárias",
    icon: FileCheck,
    tag: "Correção de Metragens & Registros",
    summary:
      "Correção de divergências de área na matrícula, resposta a notas devolutivas e cumprimento de exigências cartorárias com precisão.",
    details:
      "Erros nas medidas perimetrais ou notas devolutivas emitidas pelo Cartório de Registro de Imóveis travam escrituras, financiamentos e vendas. Examinamos a cadeia dominial histórica, elaboramos respostas técnicas a notas devolutivas e conduzimos a retificação de área extrajudicial ou judicial para sincronizar a realidade com o registro.",
    topics: [
      "Retificação de Área e Medidas Perimetrais (extrajudicial e judicial)",
      "Cumprimento técnico e impugnação de Notas Devolutivas de Cartórios",
      "Averbação de benfeitorias, construções e remembramento (unificação de lotes)",
      "Cancelamento de ônus, cláusulas de inalienabilidade e alienações fiduciárias quitadas",
      "Suscitação de Dúvida Registral perante o Juízo de Registros Públicos",
      "Auditoria da cadeia dominial histórica e emissão de certidões vintenárias",
    ],
    whatsAppText:
      "Olá, Dra. Ana Flávia! Preciso retificar a matrícula do meu imóvel / responder a uma exigência do cartório.",
  },
  {
    id: "contratos-imobiliarios-due-diligence",
    title: "Contratos Imobiliários & Due Diligence Preventiva",
    icon: FileText,
    tag: "Blindagem Patrimonial na Compra e Venda",
    summary:
      "Auditoria preventiva de riscos na compra e venda de imóveis e elaboração de contratos personalizados para blindar seu patrimônio.",
    details:
      "A compra de um imóvel envolve valores expressivos e riscos que nem sempre estão aparentes na matrícula, como dívidas tributárias, fraudes contra credores e ações cíveis contra vendedores. Realizamos auditoria jurídica completa (Due Diligence) e redigimos contratos customizados que resguardam cada centavo investido.",
    topics: [
      "Due Diligence Imobiliária: auditoria completa de vendedores e da cadeia do imóvel",
      "Redação e revisão de Contratos de Compra e Venda, Promessas e Cessões de Posse",
      "Contratos de Locação residencial, comercial e contratos de arrendamento rural",
      "Ações locatícias: despejo por falta de pagamento, cobranças e renovatórias",
      "Assessoria jurídica preventiva para investidores imobiliários em Diamantina e região",
      "Resolução de conflitos de vizinhança e direito de construir",
    ],
    whatsAppText:
      "Olá, Dra. Ana Flávia! Gostaria de assessoria jurídica preventiva para comprar/vender um imóvel.",
  },
];

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

const clientReviews = [
  {
    name: "Marta Barbosa",
    reviewsCount: "1 avaliação no Google",
    date: "Há 2 meses",
    content:
      "Advogados como poucos! Super humanos, responsáveis com a orientação para o cliente, e super eficientes! Resolveram meu problema com total responsabilidade, agilidade e carinho comigo!",
    reply:
      "Ficamos felizes em saber que nosso trabalho atendeu às suas expectativas. No Guimarães & Canuto Advogados, buscamos oferecer um atendimento próximo, responsável e seguro em cada etapa dos processos de regularização de imóveis.",
  },
  {
    name: "Leticia Canuto Treinamentos",
    reviewsCount: "2 avaliações no Google",
    date: "Há 3 anos",
    content:
      "Advogados super preparados para diversas eventualidades, prontos para esclarecer dúvidas e caminhar junto com o cliente para melhor resolução em questão! Atenciosos, educados e de uma eficácia e rapidez ímpar. Recomendo.",
    reply:
      "Ficamos muito felizes com seu retorno, obrigado pela avaliação. Nosso escritório, em Diamantina/MG, permanece à disposição, atuando com excelência em Direito Imobiliário, sempre com atendimento personalizado e foco na segurança jurídica de cada caso.",
  },
  {
    name: "Deiwiane Coelho",
    reviewsCount: "1 avaliação no Google",
    date: "Há 3 anos",
    content:
      "Primeiramente, um escritório muito bem localizado e um ambiente acolhedor. Por fim, formado por excelentes profissionais. Super recomendo.",
    reply:
      "Agradecemos imensamente pela confiança. É sempre uma satisfação atender nossos clientes em Diamantina e região, oferecendo soluções completas em Direito Imobiliário e regularização de imóveis em processos judiciais e extrajudiciais.",
  },
  {
    name: "Layane Lorene",
    reviewsCount: "1 avaliação no Google",
    date: "Há 3 anos",
    content:
      "Lugar impecável! Os advogados super atenciosos! Lugar favorável para quem está procurando profissionais de qualidade! Indico de olhos fechados!",
    reply:
      "Seu feedback é muito importante para nós. Em Diamantina e na região, nosso escritório é especializado em regularização de imóveis, retificação de matrículas, inventários e demandas cartorárias, sempre buscando a melhor solução para os imóveis dos nossos clientes.",
  },
  {
    name: "João Antônio Bernardo Lima",
    reviewsCount: "1 avaliação no Google",
    date: "Editado há 3 anos",
    content: "Ótimo escritório.",
    reply:
      "Ficamos felizes com sua satisfação. Nosso escritório boutique, com sede em Diamantina/MG, é especialista em regularização fundiária, usucapião, divisão e desmembramento de imóveis rurais e urbanos.",
  },
  {
    name: "Ana Luiza Guimarães",
    reviewsCount: "2 avaliações · 2 fotos",
    date: "Há 3 anos",
    content:
      "Ótimo atendimento! Advogada desenvolvendo estratégias jurídicas seguras e eficientes para a regularização de imóveis no Guimarães e Canuto Advogados.",
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
        className={
          light
            ? "font-serif text-4xl leading-[1.07] tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.5rem]"
            : "font-serif text-4xl leading-[1.07] tracking-[-0.03em] text-ink sm:text-5xl lg:text-[3.5rem]"
        }
      >
        {children}
      </h2>
      {description && (
        <p
          className={
            light
              ? "mt-5 max-w-xl text-[15px] leading-7 text-brand-100/85"
              : "mt-5 max-w-xl text-[15px] leading-7 text-ink-soft"
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
    if (!activeArea) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveArea(null);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [activeArea]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <MotionConfig reducedMotion="user">
      <main className="overflow-hidden bg-ivory text-ink">
        {/* Navigation Bar - Luxury Dark with Champagne Gold Metallic Details */}
        <header className="sticky top-0 z-40 border-b border-brand-300/20 bg-brand-950/95 backdrop-blur-xl">
          <div className="mx-auto flex h-[88px] max-w-7xl items-center justify-between gap-5 px-5 sm:h-[102px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Guimarães e Canuto Advogados — Início"
              onClick={closeMenu}
              className="flex items-center gap-3 transition-opacity hover:opacity-90"
            >
              <Image
                src={LOGO_SRC}
                width={2172}
                height={724}
                alt="Guimarães e Canuto Advogados — Diamantina - MG"
                priority
                className="h-[52px] w-auto object-contain sm:h-[66px]"
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
                O Escritório & Advogada
              </a>
              <a className="nav-link" href="#atuacao">
                Especialidades
              </a>
              <a className="nav-link" href="#regularizacao">
                Por que Regularizar?
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
                href={`tel:+${WHATSAPP_NUMBER}`}
                aria-label="Ligar para Guimarães e Canuto Advogados"
                className="grid size-10 place-items-center rounded-full border border-brand-300/30 text-brand-200 transition-all hover:border-brand-300 hover:bg-brand-900 hover:text-white"
                title={`Ligar: ${PHONE_DISPLAY}`}
              >
                <Phone size={16} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp de Guimarães e Canuto Advogados"
                className="grid size-10 place-items-center rounded-full border border-brand-300/30 text-brand-200 transition-all hover:border-brand-300 hover:bg-brand-900 hover:text-white"
                title="Atendimento no WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <GlowingButton
                href={getWhatsAppUrl()}
                target="_blank"
                size="sm"
                variant="champagne"
                className="rounded-full shadow-sm"
              >
                Consulta no WhatsApp <ArrowUpRight size={14} />
              </GlowingButton>
            </div>

            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="grid size-11 place-items-center rounded-full border border-brand-300/25 text-brand-200 lg:hidden"
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
                className="overflow-hidden border-t border-brand-300/15 bg-brand-950 px-6 lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["O Escritório & Advogada", "#sobre"],
                    ["Especialidades Jurídicas", "#atuacao"],
                    ["Por que Regularizar o Imóvel?", "#regularizacao"],
                    ["Avaliações no Google (5,0 ★)", "#avaliacoes"],
                    ["Contato & Sede em Diamantina", "#contato"],
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
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-300 via-brand-200 to-brand-300 px-5 py-3.5 text-xs font-bold uppercase tracking-[0.13em] text-brand-950 shadow-md transition-all hover:brightness-105"
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} /> Falar no WhatsApp: {PHONE_DISPLAY}
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-300/25 px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-brand-200 transition-all hover:border-brand-300"
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <MapPin size={15} /> R. Macau do Meio, 135 - 2° andar, Diamantina
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
          className="relative isolate scroll-mt-24 border-b border-ink/10"
        >
          {/* Subtle champagne gold ambient glow */}
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
                  Diamantina - MG · Centro · 5,0 ★ no Google (13 avaliações)
                </span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="max-w-[760px] font-serif text-[3.1rem] leading-[0.99] tracking-[-0.035em] text-ink sm:text-6xl lg:text-[4.5rem]"
              >
                Estratégias jurídicas seguras e eficientes para a{" "}
                <span className="font-serif italic text-brand-700">
                  regularização do seu imóvel.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-ink-soft sm:text-base sm:leading-8"
              >
                Atendimento boutique, próximo e resolutivo liderado pela{" "}
                <strong className="font-semibold text-ink">
                  Dra. Ana Flávia Guimarães
                </strong>{" "}
                no escritório{" "}
                <strong className="font-semibold text-ink">
                  Guimarães e Canuto Advogados
                </strong>
                . Especialistas em{" "}
                <strong className="font-semibold text-ink">
                  Direito Imobiliário, Regularização Fundiária, Usucapião Extrajudicial e Judicial, Inventários de Bens Imóveis, Divisão e Retificação de Matrículas
                </strong>{" "}
                — com sede no Centro de Diamantina (MG) e atuação em todo o Vale do Jequitinhonha e no Brasil.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl()}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-full shadow-md"
                >
                  <WhatsAppIcon size={16} /> Agendar Consulta no WhatsApp
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
                className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-ink/10 pt-6 text-xs text-ink-soft"
              >
                <span className="inline-flex items-center gap-2 font-medium">
                  <Star size={15} className="fill-brand-600 text-brand-600" />{" "}
                  5,0 estrelas no Google (13 avaliações)
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <Building2 size={16} className="text-brand-700" /> Regularização,
                  Usucapião, Inventário & Matrículas
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <MapPin size={15} className="text-brand-700" /> R. Macau do Meio,
                  135 · Centro, Diamantina - MG
                </span>
              </motion.div>
            </motion.div>

            {/* Hero Portrait Presentation - Dra. Ana Flávia Guimarães */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.95,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-[460px] lg:ml-auto lg:mr-2"
            >
              <div className="relative aspect-[0.82] overflow-hidden rounded-3xl border border-brand-500/35 bg-brand-950 shadow-2xl ring-1 ring-brand-300/20">
                <Image
                  src={IMG_PERFIL_SRC}
                  alt="Dra. Ana Flávia Guimarães — Advogada Especialista em Regularização de Imóveis em Diamantina - MG"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 42vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-brand-950 via-brand-950/75 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-8 sm:left-8 sm:right-8">
                  <div>
                    <p className="font-serif text-2xl font-normal tracking-wide text-white">
                      Dra. Ana Flávia Guimarães
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-brand-200">
                      Guimarães e Canuto Advogados · Diamantina - MG
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-brand-300/40 bg-brand-950/70 text-brand-200 backdrop-blur-sm">
                    <Scale size={18} />
                  </span>
                </div>
              </div>

              {/* Floating Google rating badge */}
              <div className="absolute -bottom-3 -left-3 rounded-2xl border border-brand-700/25 bg-white/95 p-3.5 shadow-card backdrop-blur-md sm:-left-5">
                <div className="flex items-center gap-2">
                  <GoogleIcon size={16} />
                  <div className="flex items-center gap-1 text-brand-700">
                    <Star size={13} className="fill-brand-600 text-brand-600" />
                    <span className="font-serif text-base font-bold text-ink">
                      5,0 / 5,0
                    </span>
                  </div>
                </div>
                <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-ink-soft">
                  13 Avaliações no Google
                </p>
              </div>

              {/* Floating authority badge */}
              <div className="absolute -right-3 top-6 rounded-full border border-brand-700/25 bg-ivory/95 px-4 py-2 text-[10px] font-bold tracking-[0.14em] text-brand-800 shadow-card backdrop-blur-md sm:-right-5">
                DIREITO IMOBILIÁRIO & REGULARIZAÇÃO
              </div>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-ink/10 bg-white/80"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              [
                "5,0 ★",
                "nota máxima unânime com 13 avaliações no Google Maps",
              ],
              [
                "Direito Imobiliário",
                "especialistas em regularização, usucapião e inventários",
              ],
              [
                "Diamantina - MG",
                "sede na R. Macau do Meio, 135 - 2° andar (Centro)",
              ],
              [
                "Seg a Sex · 8h–18h",
                "atendimento acolhedor, transparente e de rapidez ímpar",
              ],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-ink/10"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-2xl font-semibold text-brand-700 sm:text-3xl">
                  {value}
                </span>
                <span className="max-w-[165px] text-[11px] leading-5 text-ink-soft">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre a Dra. Ana Flávia Guimarães & O Escritório */}
        <section
          id="sobre"
          className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.94fr_1.06fr] lg:gap-20 lg:px-12">
            {/* Real Office photo of Dra. Ana Flávia Guimarães with the official "Registro de Imóveis 2025" treatise */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[500px]"
            >
              <div className="relative aspect-[0.88] overflow-hidden rounded-2xl border border-brand-700/20 bg-brand-950 shadow-card">
                <Image
                  src={IMG_REGISTRO_SRC}
                  alt="Dra. Ana Flávia Guimarães com o livro Registro de Imóveis no escritório de advocacia em Diamantina - MG"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-950/90 via-brand-950/35 to-transparent" />
              </div>

              {/* Authority badge card */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-brand-700/30 bg-ivory px-5 py-4 shadow-card sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-brand-800">
                  <Award size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em]">
                    Advocacia Boutique em Diamantina
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-ink">
                  Guimarães e Canuto Advogados
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-brand-700">
                  Dra. Ana Flávia Guimarães · Regularização de Imóveis
                </p>
                <p className="mt-1 text-[11px] leading-4 text-ink-soft">
                  Sede na R. Macau do Meio, 135 - 2° andar — Centro, Diamantina - MG.
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l border-t border-brand-700/40 sm:-left-7 sm:-top-7 sm:size-32" />
            </motion.div>

            {/* Text description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.p variants={reveal} className="eyebrow">
                SOBRE O ESCRITÓRIO & ADVOGADA
              </motion.p>
              <motion.h2
                variants={reveal}
                className="mt-4 max-w-2xl font-serif text-4xl leading-[1.09] tracking-[-0.03em] text-ink sm:text-5xl lg:text-[3.4rem]"
              >
                Rigor técnico imobiliário aliado a um{" "}
                <span className="italic text-brand-700">
                  atendimento próximo, ágil e resolutivo.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-ink-soft"
              >
                Com atuação de destaque em{" "}
                <strong className="text-ink">
                  Diamantina e em toda a Microrregião do Vale do Jequitinhonha (MG)
                </strong>
                , o escritório boutique{" "}
                <strong className="text-ink">Guimarães e Canuto Advogados</strong>{" "}
                é especializado no saneamento, registro e regularização de imóveis urbanos e rurais, inventários e usucapião.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-ink-soft"
              >
                Sob a liderança da{" "}
                <strong className="text-ink">
                  Dra. Ana Flávia Guimarães
                </strong>
                , unimos profundo domínio das normas cartorárias e registrais à dedicação personalizada a cada cliente. Atuamos com rapidez ímpar tanto na via extrajudicial (direto em Cartórios de Registro de Imóveis e Notas) quanto em demandas judiciais complexas.
              </motion.p>

              {/* Profile Highlight Card */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-xl border border-ink/10 bg-ivory/80 p-5 transition-all hover:border-brand-700/40 hover:bg-ivory"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="relative size-16 shrink-0 overflow-hidden rounded-full border-2 border-brand-700/40 shadow-sm">
                    <Image
                      src={IMG_BLAZER_SRC}
                      alt="Dra. Ana Flávia Guimarães"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-brand-800">
                      Advogada Titular & Sócia
                    </span>
                    <h3 className="font-serif text-xl font-semibold text-ink">
                      Dra. Ana Flávia Guimarães
                    </h3>
                    <p className="text-xs text-ink-soft">
                      Direito Imobiliário · Regularização Fundiária · Usucapião · Inventários · Retificação de Matrícula
                    </p>
                    <p className="mt-1 text-[11px] font-medium text-brand-900">
                      R. Macau do Meio, 135 - 2° andar - Centro, Diamantina - MG · Atendimento presencial e digital
                    </p>
                  </div>
                </div>
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
                    Atendimento humanizado, acolhedor e focado no cliente
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={15}
                    className="shrink-0 text-brand-700"
                  />
                  <span>
                    Agilidade e rapidez ímpar na condução extrajudicial
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={15}
                    className="shrink-0 text-brand-700"
                  />
                  <span>
                    Escritório acolhedor no Centro de Diamantina - MG
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={15}
                    className="shrink-0 text-brand-700"
                  />
                  <span>
                    Avaliação máxima de 5,0 estrelas unânimes no Google
                  </span>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Ana Flávia! Gostaria de agendar uma consulta sobre regularização de imóvel."
                  )}
                  target="_blank"
                  size="md"
                  variant="gold"
                  className="rounded-full shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar com a Dra. Ana Flávia
                </GlowingButton>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink-soft hover:text-brand-800"
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
          className="scroll-mt-24 bg-ivory py-20 sm:py-28 lg:py-32"
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
                description="Soluções completas em Direito Imobiliário para garantir segurança jurídica, registro definitivo e proteção do patrimônio da sua família ou empresa em Diamantina e no Vale do Jequitinhonha."
              >
                Estratégias jurídicas completas em{" "}
                <span className="italic text-brand-700">
                  Direito Imobiliário & Cartorário.
                </span>
              </Heading>
              <p className="max-w-[270px] pb-1 text-xs leading-6 text-ink-soft">
                Selecione uma especialidade abaixo para ver os detalhes de
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
                    className="group flex min-h-[350px] flex-col rounded-xl border border-ink/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500 hover:shadow-card sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-full bg-brand-50 text-brand-800 transition-colors group-hover:bg-brand-800 group-hover:text-white">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <span className="font-serif text-2xl text-brand-700/50">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-full bg-brand-50 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-brand-800">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.65rem] leading-tight text-ink">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-6 text-ink-soft">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-800 hover:text-brand-700"
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

        {/* Seção Especial: Por que Regularizar o seu Imóvel? (Destaque Imobiliário) */}
        <section
          id="regularizacao"
          className="scroll-mt-24 border-y border-ink/10 bg-[#f6f1e8] py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                eyebrow="SEGURANÇA JURÍDICA & VALORIZAÇÃO PATRIMONIAL"
                description="Entenda os riscos reais de possuir um imóvel sem matrícula ou escritura e saiba como a regularização jurídica transforma posse em patrimônio valorizado e protegido."
              >
                Imóvel sem escritura ou com pendência?{" "}
                <span className="italic text-brand-700">
                  Quem não registra não é dono.
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Ana Flávia! Gostaria de analisar a situação documental do meu imóvel."
                )}
                target="_blank"
                size="md"
                variant="gold"
                className="rounded-full shadow-sm"
              >
                <WhatsAppIcon size={16} /> Analisar Documentação no WhatsApp
              </GlowingButton>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {/* Card 1: Regularização Cartorária e Escritura (imgi_21 reading book) */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group grid items-center gap-6 rounded-2xl border border-brand-700/25 bg-white p-4 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-700/45 sm:grid-cols-[1fr_1.05fr] sm:gap-7 sm:p-5"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-brand-700/25 bg-brand-950 shadow-md">
                  <Image
                    src={IMG_REGISTRO_SRC}
                    alt="Regularização de Imóveis e Registro Cartorário — Guimarães e Canuto Advogados"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 28vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex h-full flex-col justify-between py-1 sm:pr-2">
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-700/20 bg-brand-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-800">
                      <BookOpen size={13} /> Registro de Imóveis & Saneamento
                    </span>
                    <h3 className="mt-3.5 font-serif text-2xl leading-tight text-ink sm:text-[1.65rem]">
                      Contratos de Gaveta & Escritura Definitiva
                    </h3>
                    <p className="mt-2.5 text-[13px] leading-6 text-ink-soft">
                      O contrato de gaveta comprova apenas a negociação, mas não transfere a propriedade legal perante o Cartório. Sem a matrícula regularizada, o imóvel corre risco de penhora por dívidas do antigo proprietário e perde até 40% do seu valor comercial.
                    </p>
                    <ul className="mt-3.5 space-y-1.5 text-xs font-medium text-ink">
                      <li className="flex items-center gap-2">
                        <CheckCircle2
                          size={14}
                          className="shrink-0 text-brand-700"
                        />
                        <span>Valorização imediata de mercado e facilidade de venda</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2
                          size={14}
                          className="shrink-0 text-brand-700"
                        />
                        <span>Apto para financiamento bancário e caução</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-5 border-t border-ink/10 pt-3">
                    <a
                      href={getWhatsAppUrl(
                        "Olá, Dra. Ana Flávia! Tenho um contrato de gaveta / imóvel sem escritura e gostaria de orientação para regularizar."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full items-center justify-between rounded-xl border border-brand-800/25 bg-brand-50/80 px-4 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-900 transition-all hover:border-brand-800 hover:bg-brand-800 hover:text-white"
                    >
                      <span className="inline-flex items-center gap-2">
                        <WhatsAppIcon size={15} /> Solicitar análise de escritura
                      </span>
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
              </motion.article>

              {/* Card 2: Usucapião & Inventário (imgi_31 dark background blazer) */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="group grid items-center gap-6 rounded-2xl border border-brand-700/25 bg-white p-4 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-700/45 sm:grid-cols-[1fr_1.05fr] sm:gap-7 sm:p-5"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-brand-700/25 bg-brand-950 shadow-md">
                  <Image
                    src={IMG_BLAZER_SRC}
                    alt="Usucapião Extrajudicial e Inventários de Imóveis em Diamantina - MG"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 28vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex h-full flex-col justify-between py-1 sm:pr-2">
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-700/20 bg-brand-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-800">
                      <Landmark size={13} /> Extrajudicial & Cartório
                    </span>
                    <h3 className="mt-3.5 font-serif text-2xl leading-tight text-ink sm:text-[1.65rem]">
                      Usucapião em Cartório & Inventário Ágil
                    </h3>
                    <p className="mt-2.5 text-[13px] leading-6 text-ink-soft">
                      Possui a posse mansa e pacífica de um imóvel há anos? Ou herdou uma propriedade e o inventário está travado? Conduzimos procedimentos extrajudiciais céleres diretamente nos cartórios de notas e registro, solucionando a titularidade sem anos de espera no Judiciário.
                    </p>
                    <ul className="mt-3.5 space-y-1.5 text-xs font-medium text-ink">
                      <li className="flex items-center gap-2">
                        <CheckCircle2
                          size={14}
                          className="shrink-0 text-brand-700"
                        />
                        <span>Usucapião extrajudicial ágil no Cartório de Imóveis</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2
                          size={14}
                          className="shrink-0 text-brand-700"
                        />
                        <span>Inventários extrajudiciais finalizados em semanas</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-5 border-t border-ink/10 pt-3">
                    <a
                      href={getWhatsAppUrl(
                        "Olá, Dra. Ana Flávia! Gostaria de consultar a viabilidade de Usucapião ou Inventário de um imóvel."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full items-center justify-between rounded-xl border border-brand-800/25 bg-brand-50/80 px-4 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-900 transition-all hover:border-brand-800 hover:bg-brand-800 hover:text-white"
                    >
                      <span className="inline-flex items-center gap-2">
                        <WhatsAppIcon size={15} /> Consultar Usucapião ou Inventário
                      </span>
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Nosso Compromisso Ético e Operacional */}
        <section className="relative overflow-hidden bg-brand-950 py-20 text-white sm:py-28 lg:py-32">
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-brand-700/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-brand-800/15 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="NOSSO COMPROMISSO PROFISSIONAL"
                light
                description="O reconhecimento unânime como um dos escritórios mais bem avaliados de Diamantina - MG é reflexo direto de um método de trabalho que alia o rigor técnico do Direito Imobiliário à escuta acolhedora de cada família."
              >
                Dedicação personalizada e{" "}
                <span className="italic text-brand-200">
                  segurança jurídica em cada etapa.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-brand-300/25 bg-white/5 p-6 font-serif text-base italic leading-7 text-brand-100">
                &ldquo;Advogados como poucos! Super humanos, responsáveis com a orientação para o cliente, e super eficientes! Resolveram meu problema com total responsabilidade, agilidade e carinho comigo!&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-brand-300">
                  — Marta Barbosa · Avaliação 5,0 ★ no Google
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
                  "Orientação focada no cliente com escuta atenta",
                  "Explicamos cada fase do processo e da regularização cartorária em linguagem clara, transparente e acessível, esclarecendo todas as dúvidas.",
                ],
                [
                  "02",
                  "Eficácia e rapidez ímpar na condução extrajudicial",
                  "Priorizamos procedimentos extrajudiciais em cartórios e órgãos públicos para entregar a regularização do imóvel no menor tempo legal possível.",
                ],
                [
                  "03",
                  "Escritório acolhedor e localização privilegiada no Centro",
                  "Estrutura moderna e confortável na R. Macau do Meio, 135, proporcionando tranquilidade e sigilo absoluto para tratar do patrimônio da sua família.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-semibold text-brand-300">
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

        {/* Avaliações no Google (Depoimentos Reais - 5,0 estrelas · 13 avaliações) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                eyebrow="AVALIAÇÕES NO GOOGLE · NOTA 5,0 ★ (13 AVALIAÇÕES)"
                description="Confira os depoimentos reais de clientes que confiaram a regularização de seus imóveis e demandas jurídicas ao escritório Guimarães e Canuto Advogados em Diamantina e região."
              >
                Reconhecido pela{" "}
                <span className="italic text-brand-700">
                  orientação atenciosa, rapidez e eficácia ímpar.
                </span>
              </Heading>

              {/* Verified Google Badge Card */}
              <div className="flex flex-col gap-3 rounded-2xl border border-brand-700/25 bg-ivory/80 p-5 shadow-card sm:flex-row sm:items-center md:min-w-[340px]">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-xl border border-brand-700/15 bg-white shadow-sm">
                  <GoogleIcon size={30} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-3xl font-bold leading-none text-ink">
                      5,0
                    </span>
                    <div className="flex gap-0.5 text-brand-600">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-brand-600 text-brand-600"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-brand-900">
                    Guimarães e Canuto Advogados · Diamantina
                  </p>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-brand-800 transition-colors hover:text-brand-950"
                  >
                    13 avaliações no Google <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Authentic Google Reviews Grid */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clientReviews.map((review) => (
                <article
                  key={review.name}
                  className="group relative flex flex-col justify-between rounded-xl border border-ink/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500 hover:shadow-card sm:p-8"
                >
                  <div>
                    {/* Header: Stars + Date + Google icon */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-1 text-brand-600">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-brand-600 text-brand-600"
                          />
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] font-medium text-ink-soft">
                        <GoogleIcon size={13} />
                        <span>{review.date}</span>
                      </div>
                    </div>

                    {/* Authentic review content */}
                    <p className="mt-5 text-[14px] italic leading-relaxed text-ink/90">
                      &ldquo;{review.content}&rdquo;
                    </p>

                    {/* Owner reply if present */}
                    {review.reply && (
                      <div className="mt-4 rounded-lg border border-brand-700/20 bg-brand-50/80 p-3 text-[11px] leading-relaxed text-brand-950">
                        <span className="mb-0.5 block text-[9px] font-bold uppercase tracking-wider text-brand-800">
                          Resposta de Guimarães e Canuto Advogados:
                        </span>
                        &ldquo;{review.reply}&rdquo;
                      </div>
                    )}
                  </div>

                  {/* Reviewer info */}
                  <div className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-4">
                    <div className="grid size-10 shrink-0 place-items-center rounded-full border border-brand-700/30 bg-brand-50 font-serif text-sm font-semibold text-brand-900">
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
            <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-ink/10 pt-8 sm:flex-row">
              <div className="flex flex-wrap items-center gap-2">
                {[
                  "Orientação para o cliente",
                  "Eficiência e rapidez ímpar",
                  "Escritório acolhedor",
                  "Direito Imobiliário & Cartórios",
                  "Atendimento humano e responsável",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-ivory px-3.5 py-1.5 text-[11px] font-medium text-ink-soft"
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
                Ver perfil completo no Google Maps{" "}
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
          className="scroll-mt-24 bg-ivory py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="CONTATO & SEDE EM DIAMANTINA - MG"
                description="Agende seu atendimento presencial em nosso escritório boutique no Centro de Diamantina ou fale conosco pelo WhatsApp para consultoria rápida em toda a região."
              >
                Estamos à disposição para{" "}
                <span className="italic text-brand-700">
                  regularizar o seu imóvel.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl()}
                  target="_blank"
                  size="lg"
                  variant="gold"
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
                      Segunda a Sexta-feira: 08:00 às 18:00
                    </p>
                    <p className="text-[11px] text-ink-soft/80">
                      Sábado e Domingo: Fechado
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

            {/* Address & Office Hours Card */}
            <div className="relative overflow-hidden rounded-2xl border border-ink/10 bg-white p-7 shadow-card sm:p-10">
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
                    Diamantina · Minas Gerais
                  </p>
                </div>
              </div>

              <address className="mt-7 max-w-md text-[14px] not-italic leading-7 text-ink-soft">
                <strong className="font-semibold text-ink">
                  Guimarães e Canuto Advogados
                </strong>
                <br />
                Dra. Ana Flávia Guimarães · Direito Imobiliário & Regularização de Imóveis
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-xl border border-ink/10 bg-ivory/70 p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-brand-800">
                  Expediente Semanal
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-ink-soft">
                  <span>Segunda a Sexta-feira</span>
                  <span className="text-right font-semibold text-ink">
                    08:00 – 18:00
                  </span>
                  <span>Sábado e Domingo</span>
                  <span className="text-right text-ink-soft">Fechado</span>
                </div>
              </div>

              <div className="my-7 h-px bg-ink/10" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-ink-soft">
                  Centro de Diamantina · Atendimento presencial e digital
                </p>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:border-brand-700 hover:bg-brand-50 hover:text-brand-900"
                >
                  Traçar Rota no Google Maps <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip - Deep Luxury Gold/Espresso Accent */}
        <section className="bg-gradient-to-r from-brand-900 via-brand-800 to-brand-900 px-5 py-14 text-white shadow-inner sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-200">
                <Sparkles size={13} /> GUIMARÃES E CANUTO ADVOGADOS · DIAMANTINA - MG
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                Precisa regularizar seu imóvel com agilidade, segurança jurídica e eficácia?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dra. Ana Flávia! Gostaria de agendar uma consulta inicial para avaliar a regularização do meu imóvel."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-gradient-to-r from-brand-300 via-brand-200 to-brand-300 px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-950 shadow-md transition-all hover:-translate-y-0.5 hover:brightness-105 hover:shadow-lg"
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
                aria-label="Guimarães e Canuto Advogados"
                className="inline-block"
              >
                <Image
                  src={LOGO_SRC}
                  width={2172}
                  height={724}
                  alt="Guimarães e Canuto Advogados"
                  className="h-16 w-auto object-contain sm:h-20"
                />
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-brand-100/70">
                Direito Imobiliário, Regularização Fundiária, Usucapião, Inventários e Demandas Cartorárias em Diamantina - MG e em todo o Brasil.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-brand-300">
                Dra. Ana Flávia Guimarães · Guimarães e Canuto Advogados
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-300">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-brand-100/75">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  O Escritório & Advogada
                </a>
                <a className="footer-link" href="#atuacao">
                  Especialidades Jurídicas
                </a>
                <a className="footer-link" href="#regularizacao">
                  Por que Regularizar o Imóvel?
                </a>
                <a className="footer-link" href="#avaliacoes">
                  Avaliações no Google (5,0 ★)
                </a>
                <a className="footer-link" href="#contato">
                  Contato & Sede em Diamantina
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-300">
                Contato & Endereço
              </h2>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-brand-100/75">
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Ana Flávia! Gostaria de solicitar um atendimento para o meu imóvel."
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
                  <Clock size={14} className="shrink-0" /> Seg a Sex: 08:00 às
                  18:00
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/15 pt-6 text-[10px] text-brand-100/55 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Guimarães e Canuto Advogados. Todos os direitos reservados.
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
              "Olá, Dra. Ana Flávia! Gostaria de tirar uma dúvida sobre a regularização do meu imóvel."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp"
            className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          >
            <WhatsAppIcon size={28} />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-brand-950 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg transition-opacity group-hover:block">
              Falar no WhatsApp
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
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-2xl border border-ink/10 bg-ivory p-7 shadow-2xl sm:max-w-xl sm:rounded-2xl sm:p-10"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:border-brand-800 hover:text-brand-800"
                >
                  <X size={18} />
                </button>

                <p className="eyebrow">DIREITO IMOBILIÁRIO & CARTÓRIOS</p>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-serif text-3xl leading-tight text-ink sm:text-4xl"
                >
                  {activeArea.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-ink-soft">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-ink/10 pt-5">
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
                    variant="gold"
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
