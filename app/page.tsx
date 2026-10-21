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
  FileCheck2,
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
  Users2,
  X,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5538999616355";
const PHONE_DISPLAY = "(38) 99961-6355";
const EMAIL_CONTACT = "contato@kowalskiadvocacia.com.br";
const INSTAGRAM_URL = "https://www.instagram.com/advocacia.kowalski/";
const INSTAGRAM_HANDLE = "@advocacia.kowalski";

const ADDRESS_TEXT = "R. Canabrava, 192A - Centro, Unaí - MG, 38610-031";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Kowalski+Advocacia+R.+Canabrava+192A+Centro+Una%C3%AD+MG";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Kowalski+Advocacia+Una%C3%AD+%C2%B7+MG";

const LOGO_SRC = "/logo.png";
const LOGO_HORIZONTAL_SRC = "/logo-horizontal.png";
const LOGO_SYMBOL_SRC = "/logo-symbol.png";
const FOTO_ESCRITORIO_SRC = "/escritorio.png";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá! Gostaria de agendar um atendimento com a Kowalski Advocacia para tirar dúvidas sobre o meu caso.";
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
    id: "direito-previdenciario",
    title: "Direito Previdenciário & INSS",
    icon: Landmark,
    tag: "Aposentadorias · BPC/LOAS · Auxílios · Revisões · Planejamento",
    summary:
      "Conquista e proteção do seu benefício previdenciário com o valor justo que você merece, revertendo negativas do INSS e antecipando sua aposentadoria com segurança.",
    details:
      "Aposentar-se ou conquistar um benefício por incapacidade ou assistência social não pode ser motivo de angústia. Na Kowalski Advocacia, realizamos uma análise aprofundada de todo o seu histórico contributivo (CNIS), comprovamos tempo de atividade rural ou especial sob insalubridade, revertemos indeferimentos injustos na Justiça Federal e calculamos o cronograma exato para que você conquiste o benefício mais vantajoso com todos os retroativos.",
    topics: [
      "Aposentadoria por Idade Urbana e Rural com cômputo integral de economia familiar",
      "Aposentadoria por Tempo de Contribuição e aplicação da regra de transição mais rentável",
      "Aposentadoria Especial para profissionais expostos a agentes nocivos, perigosos ou insalubres",
      "Benefício de Prestação Continuada (BPC/LOAS) para idosos a partir de 65 anos e pessoas com deficiência",
      "Auxílio por Incapacidade Temporária (auxílio-doença) e Aposentadoria por Incapacidade Permanente",
      "Pensão por Morte urbana e rural e restabelecimento imediato de benefícios cancelados",
      "Planejamento Previdenciário Estratégico com auditoria de pendências no CNIS e projeção financeira",
      "Ação judicial perante a Justiça Federal com recebimento de todas as parcelas retroativas",
    ],
    whatsAppText:
      "Olá! Gostaria de uma avaliação para dar entrada ou revisar um benefício do INSS (aposentadoria, auxílio-doença ou BPC/LOAS).",
  },
  {
    id: "direito-trabalhista",
    title: "Direito Trabalhista Combativo",
    icon: Briefcase,
    tag: "Rescisões · Horas Extras · Acidentes de Trabalho · FGTS · Assédio",
    summary:
      "Defesa firme e intransigente dos direitos dos trabalhadores, assegurando o recebimento integral de todas as verbas rescisórias, adicionais e indenizações devidas.",
    details:
      "Trabalhadores dedicam sua vida ao trabalho e merecem ter cada direito rigorosamente respeitado. A equipe da Kowalski Advocacia atua de forma estratégica na condução de Reclamações Trabalhistas, cobrando horas extras não quitadas, revertendo justas causas descabidas, acionando empregadores por assédio moral ou condições degradantes e buscando expressivas indenizações por acidentes de trabalho e doenças ocupacionais.",
    topics: [
      "Rescisão Indireta do Contrato de Trabalho (demissão por justa causa cometida pelo empregador)",
      "Reversão de Justa Causa indevida ou desproporcional aplicada ao empregado",
      "Cobrança rigorosa de Horas Extras, Intervalos Intrajornada suprimidos e Adicional Noturno",
      "Adicionais de Insalubridade e Periculosidade devidos e não pagos",
      "Ações por Acidente de Trabalho, Doenças Ocupacionais, estabilidade acidentária e indenizações",
      "Indenizações por Danos Morais decorrentes de Assédio Moral, Perseguição ou Assédio Sexual",
      "Recolhimento obrigatório de FGTS atrasado com a multa rescisória de 40%",
      "Reconhecimento formal de Vínculo Empregatício para trabalhadores sem registro em carteira",
    ],
    whatsAppText:
      "Olá! Gostaria de consultar a Kowalski Advocacia sobre os meus direitos trabalhistas (rescisão, horas extras ou acidente de trabalho).",
  },
  {
    id: "direito-civel-indenizacoes",
    title: "Direito Cível & Indenizações",
    icon: Scale,
    tag: "Indenizações · Contratos · Cobranças · Consumidor · Responsabilidade Civil",
    summary:
      "Proteção do seu patrimônio, reparação de prejuízos causados por terceiros e segurança em relações contratuais, cobranças e obrigações cíveis.",
    details:
      "Litígios e descumprimentos de contratos geram prejuízos econômicos e desequilíbrio na vida das pessoas. Atuamos com sólida técnica na defesa contra abusos comerciais e bancários, elaboração e rescisão de contratos, recuperação ágil de créditos inadimplidos e ações indenizatórias por danos morais, materiais e estéticos para restabelecer a justiça aos nossos clientes.",
    topics: [
      "Ações Indenizatórias por Danos Morais e Materiais causados por negligência, acidentes ou ofensas",
      "Ações contra Inscrição Indevida em Órgãos de Proteção ao Crédito (SPC/Serasa e cheques sem fundo)",
      "Defesa dos Direitos do Consumidor contra abusos de instituições bancárias, seguradoras e empresas",
      "Ações de Cobrança e Execução de Títulos Judiciais e Extrajudiciais (cheques, notas e contratos)",
      "Elaboração e revisão jurídica minuciosa de contratos imobiliários, de compra e venda e locação",
      "Ações de despejo, rescisões contratuais e defesas patrimoniais em execuções",
    ],
    whatsAppText:
      "Olá! Gostaria de orientações jurídicas sobre uma questão de Direito Cível (indenização, contrato ou cobrança).",
  },
  {
    id: "familia-sucessoes-inventarios",
    title: "Direito de Família & Sucessões",
    icon: FileCheck2,
    tag: "Inventário em Cartório · Divórcio · Partilha de Bens · Pensão Alimentícia",
    summary:
      "Condução sensível, rápida e segura de inventários e questões familiares, priorizando a via extrajudicial para preservar o patrimônio e a harmonia.",
    details:
      "A transmissão de bens e as questões familiares exigem um olhar acolhedor aliado à máxima precisão técnica. Na Kowalski Advocacia, priorizamos a via do inventário extrajudicial em cartório quando há acordo entre os herdeiros, garantindo rapidez e economia de tributos. Em casos complexos ou litigiosos, conduzimos o inventário judicial com firmeza, assim como ações de divórcio, partilha de bens e pensão alimentícia.",
    topics: [
      "Inventário Extrajudicial em Cartório: procedimento célere, econômico e sem burocracia judicial",
      "Inventário Judicial célere para patrimônios com discordância ou presença de herdeiros menores",
      "Divórcio Consensual em Cartório e Divórcio Litigioso com partilha justa de patrimônio",
      "Ação e revisão de Pensão Alimentícia, regulamentação de guarda e convivência familiar",
      "Planejamento Sucessório Familiar, doações em vida com cláusula de usufruto e testamentos",
      "Alvarás judiciais para levantamento de valores bancários, saldos de FGTS e benefícios de falecidos",
    ],
    whatsAppText:
      "Olá! Gostaria de tirar dúvidas com a Kowalski Advocacia sobre inventário, partilha de bens ou direito de família.",
  },
  {
    id: "consultoria-preventiva-acordos",
    title: "Consultoria Preventiva & Mediação Extrajudicial",
    icon: HeartHandshake,
    tag: "Acordos Ágeis · Pareceres Técnicos · Soluções Fora da Justiça",
    summary:
      "Soluções inteligentes para resolver disputas com economia de tempo e custos, evitando desgastes judiciais prolongados.",
    details:
      "A melhor solução jurídica é aquela que entrega o resultado sem o custo e o tempo de anos em um tribunal. A Kowalski Advocacia atua fortemente na mediação extrajudicial, redigindo acordos com força de título executivo e fornecendo pareceres jurídicos claros e descomplicados para que você tome decisões com total segurança jurídica.",
    topics: [
      "Mediação de acordos extrajudiciais rápidos com plena eficácia executiva e validade legal",
      "Análise preventiva de riscos e conferência de certidões em negócios imobiliários e contratuais",
      "Notificações extrajudiciais formais para constituição em mora e acordos amigáveis",
      "Consultoria jurídica transparente, acolhedora e sem juridiquês para tirar todas as dúvidas",
      "Pareceres técnicos prévios sobre a viabilidade econômica e jurídica de demandas",
    ],
    whatsAppText:
      "Olá! Gostaria de consultar sobre a possibilidade de um acordo ou orientação preventiva com a Kowalski Advocacia.",
  },
];

const clientReviews = [
  {
    name: "Thaís Dornellas",
    reviewerTag: "Local Guide · 11 avaliações no Google",
    badge: "Melhor Escritório da Região",
    rating: 5,
    content:
      "Sempre que precisei, foram muito atenciosos e prestativos! Sem dúvida o melhor escritório da região!",
  },
  {
    name: "Samira Angela",
    reviewerTag: "5 avaliações no Google",
    badge: "Agilidade & Super Indicação",
    rating: 5,
    content:
      "Excelente! São muito profissionais, agilizam tudo que depende deles. Super indico!",
  },
  {
    name: "Maria Eduarda Rodrigues Alves Amaral",
    reviewerTag: "4 avaliações no Google",
    badge: "Atenciosas & Simpáticas",
    rating: 5,
    content:
      "Excelentes profissionais. Muito atenciosas e simpáticas também.",
  },
  {
    name: "Ivelize Gontijo",
    reviewerTag: "2 avaliações no Google",
    badge: "Equipe Muito Bem Preparada",
    rating: 5,
    content:
      "Ótimo escritório, equipe muito bem preparada.",
  },
  {
    name: "Jussara Carvalho",
    reviewerTag: "2 avaliações no Google",
    badge: "Profissionais Competentes",
    rating: 5,
    content:
      "Melhor escritório de advocacia com profissionais competentes!",
  },
  {
    name: "Patrícia Mendonca",
    reviewerTag: "2 avaliações no Google",
    badge: "Ética & Legalidade",
    rating: 5,
    content:
      "Ética e legalidade👏👏",
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
      <h2 className="mt-4 font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-[#16080a] sm:text-4xl lg:text-[3.15rem]">
        {children}
      </h2>
      {description && (
        <p className="mt-4 text-[15px] leading-7 text-[#4f3d40]">
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
      <main className="overflow-hidden bg-[#faf8f6] text-[#16080a] selection:bg-[#fce8e9] selection:text-[#380509]">
        {/* Navigation Bar - Refined Light Luxury with Noble Ruby & Gold Accents */}
        <header className="sticky top-0 z-40 border-b border-[#e7dcce] bg-white/95 backdrop-blur-xl shadow-xs">
          <div className="mx-auto flex h-[92px] max-w-7xl items-center justify-between gap-6 px-5 sm:h-[104px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Kowalski Advocacia - Página Inicial"
              onClick={closeMenu}
              className="flex shrink-0 items-center transition-opacity hover:opacity-95"
            >
              <div className="relative h-12 w-48 sm:h-14 sm:w-60 lg:h-16 lg:w-64 xl:h-[68px] xl:w-72">
                <Image
                  src={LOGO_HORIZONTAL_SRC}
                  alt="Kowalski Advocacia"
                  fill
                  priority
                  sizes="(max-width: 640px) 192px, (max-width: 1024px) 256px, 288px"
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
                O Escritório
              </a>
              <a className="nav-link" href="#atuacao">
                Áreas de Atuação
              </a>
              <a className="nav-link" href="#diferenciais">
                Por Que Escolher
              </a>
              <a className="nav-link" href="#avaliacoes">
                Avaliações (4,7 ★)
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
                aria-label="Avaliações da Kowalski Advocacia no Google"
                className="grid size-10 place-items-center rounded-lg border border-[#e7dcce] bg-[#faf8f6] text-[#4f3d40] transition-all hover:border-[#871017] hover:bg-white hover:text-[#16080a] shadow-xs"
                title="4,7 ★ no Google (13 avaliações)"
              >
                <GoogleIcon size={16} />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Kowalski Advocacia"
                className="grid size-10 place-items-center rounded-lg border border-[#e7dcce] bg-[#faf8f6] text-[#4f3d40] transition-all hover:border-[#871017] hover:bg-white hover:text-[#16080a] shadow-xs"
                title={`Instagram ${INSTAGRAM_HANDLE}`}
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                aria-label="Ligar para Kowalski Advocacia"
                className="grid size-10 place-items-center rounded-lg border border-[#e7dcce] bg-[#faf8f6] text-[#4f3d40] transition-all hover:border-[#871017] hover:bg-white hover:text-[#16080a] shadow-xs"
                title={`Ligar: ${PHONE_DISPLAY}`}
              >
                <Phone size={16} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Kowalski Advocacia"
                className="grid size-10 place-items-center rounded-lg border border-[#e7dcce] bg-[#faf8f6] text-[#4f3d40] transition-all hover:border-[#871017] hover:bg-white hover:text-[#16080a] shadow-xs"
                title="Atendimento no WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá! Gostaria de agendar uma consulta com a Kowalski Advocacia e receber orientação sobre meu caso."
                )}
                target="_blank"
                size="sm"
                variant="ruby"
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
              className="grid size-11 place-items-center rounded-lg border border-[#e7dcce] bg-[#faf8f6] text-[#16080a] lg:hidden shadow-xs"
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
                className="overflow-hidden border-t border-[#e7dcce] bg-white px-6 text-[#16080a] lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["O Escritório", "#sobre"],
                    ["Áreas de Atuação", "#atuacao"],
                    ["Por Que Escolher", "#diferenciais"],
                    ["Avaliações (4,7 ★)", "#avaliacoes"],
                    ["Contato & Sede", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm font-medium text-[#4f3d40] hover:text-[#871017]"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#700a12] via-[#871017] to-[#700a12] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.13em] text-white shadow-md transition-all hover:brightness-105"
                      href={getWhatsAppUrl(
                        "Olá! Gostaria de falar sobre o meu caso com a Kowalski Advocacia."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} /> WhatsApp: {PHONE_DISPLAY}
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#e7dcce] bg-[#faf8f6] px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-[#16080a] transition-all hover:border-[#871017]"
                      href={GOOGLE_SEARCH_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <GoogleIcon size={15} /> 4,7 ★ no Google (13 avaliações)
                    </a>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section - Noble Wine, Ruby & Warm Linen Elegance */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-[#e7dcce] bg-gradient-to-b from-white via-[#faf8f6] to-[#f5efea]"
        >
          {/* Subtle warm ruby & gold ambient aura */}
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[36rem] rounded-full bg-[#871017]/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[28rem] rounded-full bg-[#cfa05e]/12 blur-3xl" />

          <div className="mx-auto grid min-h-[660px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[720px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-12 lg:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-6"
            >
              <motion.div
                variants={reveal}
                className="mb-6 inline-flex items-center gap-2.5 rounded-lg border border-[#871017]/30 bg-white px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#700a12] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#871017]" />
                <span>ADVOCACIA ESPECIALIZADA · UNAÍ • ARINOS • ATENDIMENTO NACIONAL</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="max-w-[760px] font-serif text-[2.5rem] leading-[1.1] tracking-[-0.02em] text-[#16080a] sm:text-5xl lg:text-[3.75rem]"
              >
                Advocacia Especializada com Firmeza Técnica e Dedicação Total aos Seus Direitos:{" "}
                <span className="font-serif italic text-[#871017]">
                  Atuação Jurídica Ágil, Ética e Resolutiva.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-[#4f3d40] sm:text-base sm:leading-8"
              >
                O escritório <strong className="font-semibold text-[#16080a]">Kowalski Advocacia</strong> oferece atuação jurídica de excelência técnica e atendimento acolhedor nas áreas de{" "}
                <strong className="font-semibold text-[#16080a]">
                  Direito Previdenciário (INSS), Direito Trabalhista e Direito Cível
                </strong>
                . Sediado no Centro de Unaí - MG, com unidade em Arinos e atendimento digital em todo o Brasil, agilizamos tudo que depende de nós para proteger seu patrimônio, sua renda e sua dignidade.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de agendar uma consulta jurídica com a Kowalski Advocacia para analisar meu caso."
                  )}
                  target="_blank"
                  size="lg"
                  variant="ruby"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar no WhatsApp com o Escritório
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 rounded-lg border border-[#e7dcce] bg-white px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#16080a] shadow-xs transition-all hover:border-[#871017] hover:bg-[#faf8f6]"
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
                className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-[#e7dcce] pt-6 text-xs text-[#5c474b]"
              >
                <a
                  href={GOOGLE_SEARCH_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-[#16080a] transition-colors hover:text-[#871017]"
                >
                  <Star size={15} className="fill-[#b6813b] text-[#b6813b]" /> 4,7 estrelas no Google (13 avaliações autênticas)
                </a>
                <span className="inline-flex items-center gap-2 font-medium text-[#16080a]">
                  <Award size={15} className="text-[#871017]" /> Advocacia Especializada
                </span>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-[#16080a] transition-colors hover:text-[#871017]"
                >
                  <MapPin size={15} className="text-[#871017]" /> R. Canabrava, 192A · Centro · Unaí
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-[#16080a] transition-colors hover:text-[#871017]"
                >
                  <InstagramIcon size={15} className="text-[#871017]" /> {INSTAGRAM_HANDLE}
                </a>
              </motion.div>
            </motion.div>

            {/* Hero Visual Presentation - Authentic Reception Photo & Logo Seal */}
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
              <div className="relative aspect-[4/3.8] overflow-hidden rounded-2xl border-2 border-[#e7dcce] bg-white shadow-xl ring-1 ring-[#871017]/25 sm:aspect-[4/4.2]">
                <Image
                  src={FOTO_ESCRITORIO_SRC}
                  alt="Recepção do escritório Kowalski Advocacia em Unaí - MG"
                  fill
                  priority
                  unoptimized
                  className="object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#16080a] via-[#16080a]/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-7 sm:left-7 sm:right-7">
                  <div>
                    <p className="font-serif text-2xl font-bold tracking-wide text-white">
                      Kowalski Advocacia
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#f3d8a8]">
                      Previdenciário · Trabalhista · Cível
                    </p>
                    <p className="mt-0.5 text-[11px] text-stone-300">
                      R. Canabrava, 192A - Centro, Unaí - MG
                    </p>
                  </div>
                  <span className="grid size-12 shrink-0 place-items-center rounded-lg border border-[#cfa05e]/50 bg-[#16080a]/85 text-[#fbf0de] backdrop-blur-sm shadow-md">
                    <Scale size={20} className="text-[#cfa05e]" />
                  </span>
                </div>
              </div>

              {/* Floating authority badge */}
              <div className="absolute -left-3 top-6 z-10 rounded-lg border border-[#871017]/30 bg-white/95 px-4 py-2 text-[10px] font-bold tracking-[0.14em] text-[#700a12] shadow-md backdrop-blur-md sm:-left-5">
                SEDE EM UNAÍ - MG · ATENDIMENTO ON-LINE EM TODO O BRASIL
              </div>

              {/* Floating Google 4.7 Star Rating */}
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="group absolute -bottom-5 -right-3 z-10 rounded-xl border border-[#cfa05e]/50 bg-white/95 p-3.5 shadow-md backdrop-blur-md transition-all hover:border-[#871017] hover:bg-white sm:-right-5"
              >
                <div className="flex items-center gap-2">
                  <GoogleIcon size={18} />
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-0.5 text-[#b6813b]">
                      <Star size={13} className="fill-[#b6813b] text-[#b6813b]" />
                    </div>
                    <span className="font-serif text-base font-bold text-[#16080a]">
                      4,7
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#871017]">
                      / 5,0
                    </span>
                  </div>
                </div>
                <p className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-[#5c474b]">
                  13 Avaliações no Google
                </p>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner - Authority Metrics */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-[#e7dcce] bg-white"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              [
                "4,7 ★ no Google",
                "reconhecido por clientes como o melhor escritório da região com agilidade e ética",
              ],
              [
                "Previdenciário & INSS",
                "aposentadorias, BPC/LOAS, auxílios por incapacidade e planejamento previdenciário",
              ],
              [
                "Trabalhista & Cível",
                "rescisões, horas extras, acidentes de trabalho, indenizações, contratos e inventários",
              ],
              [
                "Unaí • Arinos • Brasil",
                "sede moderna no Centro de Unaí - MG e atendimento digital em todo o território nacional",
              ],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-[#e7dcce]"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-xl font-semibold text-[#871017] sm:text-2xl">
                  {value}
                </span>
                <span className="max-w-[165px] text-[11px] leading-5 text-[#5c474b]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre a Kowalski Advocacia - Editorial Canvas */}
        <section
          id="sobre"
          className="scroll-mt-24 border-y border-[#e7dcce] bg-[#faf8f6] py-20 text-[#16080a] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
            {/* Visual presentation - Reception & Logo Composition */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[490px]"
            >
              <div className="relative aspect-[4/4.5] overflow-hidden rounded-2xl border-2 border-[#e7dcce] bg-white shadow-2xl ring-1 ring-[#871017]/25">
                <Image
                  src={FOTO_ESCRITORIO_SRC}
                  alt="Sede da Kowalski Advocacia em Unaí"
                  fill
                  unoptimized
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16080a]/90 via-[#16080a]/30 to-transparent" />
                
                {/* Central brand emblem inside photo */}
                <div className="absolute top-6 left-6 rounded-lg border border-white/20 bg-white/90 p-2.5 backdrop-blur-md shadow-md">
                  <div className="relative h-10 w-32">
                    <Image
                      src={LOGO_HORIZONTAL_SRC}
                      alt="Logo Kowalski Advocacia"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="font-cinzel text-xl font-bold tracking-wider text-[#fbf0de]">
                    KOWALSKI ADVOCACIA
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-stone-200">
                    Advocacia Especializada · Unaí - MG
                  </p>
                </div>
              </div>

              {/* Authority badge card */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-[#cfa05e]/50 bg-white px-5 py-4 shadow-xl sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-[#871017]">
                  <Sparkles size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#700a12]">
                    Excelência Jurídica & Proximidade
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-[#16080a]">
                  Kowalski Advocacia
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-[#871017]">
                  Previdenciário · Trabalhista · Cível
                </p>
                <p className="mt-1 text-[11px] leading-4 text-[#5c474b]">
                  R. Canabrava, 192A - Centro · Unaí - MG
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-[#871017]/40 sm:-left-7 sm:-top-7 sm:size-32" />
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
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#871017]/30 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#700a12] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#871017]" />
                <span>SOBRE A KOWALSKI ADVOCACIA</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-[#16080a] sm:text-4xl lg:text-[3.25rem]"
              >
                Uma advocacia estruturada para defender seus interesses com velocidade:{" "}
                <span className="italic text-[#871017]">
                  agilidade no que depende de nós, ética intransigente e acolhimento humano.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-[#4f3d40]"
              >
                Com sede na Rua Canabrava, no Centro de{" "}
                <strong className="font-bold text-[#16080a]">Unaí - MG</strong>, unidade de atendimento em{" "}
                <strong className="font-bold text-[#16080a]">Arinos</strong> e estrutura digital preparada para atender clientes em todo o Brasil, a{" "}
                <strong className="font-bold text-[#16080a]">Kowalski Advocacia</strong> se consolidou pela resolutividade, agilidade e postura combativa na defesa dos direitos dos seus clientes.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-[#4f3d40]"
              >
                Especializado em{" "}
                <strong className="font-bold text-[#16080a]">
                  Direito Previdenciário (Aposentadorias e Benefícios do INSS), Direito Trabalhista e Direito Cível (Indenizações, Contratos e Família/Sucessões)
                </strong>
                , o escritório se destaca pelo acompanhamento próximo: você conta com profissionais altamente capacitados que agilizam cada andamento e mantêm você informado de forma clara, sem juridiquês e com total transparência.
              </motion.p>

              {/* Client Quote Card from real reviews */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-xl border border-[#e7dcce] bg-white p-5 shadow-xs"
              >
                <blockquote className="font-serif text-sm italic leading-relaxed text-[#16080a]">
                  &ldquo;Sempre que precisei, foram muito atenciosos e prestativos! Sem dúvida o melhor escritório da região!&rdquo;
                </blockquote>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-[#871017]">
                  — Thaís Dornellas · Local Guide (11 avaliações no Google · 5,0 ★)
                </p>
              </motion.div>

              {/* Personality & Profile Cards */}
              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-2 gap-3 text-xs sm:grid-cols-3"
              >
                <div className="rounded-lg border border-[#e7dcce] bg-white p-3 shadow-xs">
                  <p className="font-bold text-[#16080a]">Agilidade Comprovada</p>
                  <p className="mt-0.5 text-[11px] text-[#6b585c]">
                    Agilizamos tudo que depende de nós
                  </p>
                </div>
                <div className="rounded-lg border border-[#e7dcce] bg-white p-3 shadow-xs">
                  <p className="font-bold text-[#16080a]">Atendimento Próximo</p>
                  <p className="mt-0.5 text-[11px] text-[#6b585c]">
                    Equipe atenciosa, simpática & acessível
                  </p>
                </div>
                <div className="rounded-lg border border-[#e7dcce] bg-white p-3 shadow-xs col-span-2 sm:col-span-1">
                  <p className="font-bold text-[#16080a]">Ética & Legalidade</p>
                  <p className="mt-0.5 text-[11px] text-[#6b585c]">
                    Transparência total em cada causa
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-1 gap-2.5 text-xs font-semibold text-[#16080a] sm:grid-cols-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#871017]" />
                  <span>Sede na R. Canabrava, 192A - Centro · Unaí - MG</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#871017]" />
                  <span>Avaliação 4,7 ★ no Google com 13 depoimentos autênticos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#871017]" />
                  <span>Contato direto pelo WhatsApp com a equipe jurídica</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#871017]" />
                  <span>Atendimento presencial em Unaí e Arinos e digital para o Brasil</span>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de agendar uma consulta com a Kowalski Advocacia para conversar sobre meu caso."
                  )}
                  target="_blank"
                  size="md"
                  variant="ruby"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar com o Escritório
                </GlowingButton>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#16080a] transition-colors hover:text-[#871017]"
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
          className="scroll-mt-24 border-t border-[#e7dcce] bg-[#f5efea] py-20 sm:py-28 lg:py-32"
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
                description="Atuação jurídica altamente especializada, estratégica e contenciosa, focada em garantir benefícios do INSS, verbas trabalhistas e soluções cíveis com celeridade e segurança."
              >
                Soluções jurídicas experientes em{" "}
                <span className="italic text-[#871017]">
                  Unaí, Arinos, Noroeste de Minas Gerais e em todo o Brasil.
                </span>
              </Heading>
              <p className="max-w-[270px] pb-1 text-xs leading-6 text-[#5c474b]">
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
                    className="group flex min-h-[350px] flex-col rounded-xl border border-[#e7dcce] bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#871017] hover:shadow-lg sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-lg border border-[#871017]/30 bg-[#faf8f6] text-[#871017] shadow-xs transition-colors group-hover:bg-[#871017] group-hover:text-white">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <span className="font-serif text-2xl text-[#871017]/40">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-md border border-[#871017]/25 bg-[#fce8e9] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#700a12] shadow-xs">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.45rem] leading-tight text-[#16080a]">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-6 text-[#5c474b]">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-[#871017] hover:text-[#16080a]"
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

        {/* Por Que Escolher a Kowalski Advocacia - Diferenciais */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-t border-[#e7dcce] bg-[#faf8f6] py-20 text-[#16080a] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                light
                eyebrow="EXCELÊNCIA, AGILIDADE & RESULTADOS"
                description="Seus direitos trabalhistas, sua aposentadoria e o patrimônio da sua família exigem uma advocacia combativa que atue com agilidade e ética."
              >
                Por que confiar seu caso à{" "}
                <span className="italic text-[#871017]">
                  Kowalski Advocacia?
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá! Gostaria de uma avaliação para a minha situação jurídica com a Kowalski Advocacia."
                )}
                target="_blank"
                size="md"
                variant="ruby"
                className="rounded-lg shadow-sm"
              >
                <WhatsAppIcon size={16} /> Falar no WhatsApp
              </GlowingButton>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {/* Card 1: Agilidade Comprovada & Atendimento Próximo */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group flex flex-col justify-between rounded-xl border border-[#e7dcce] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#871017] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#871017]/30 bg-[#fce8e9] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#4a070c]">
                      <HeartHandshake size={14} /> Atendimento Humanizado & Próximo
                    </span>
                    <span className="text-xs font-semibold text-[#871017]">
                      Agilidade Real
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#16080a] sm:text-[1.75rem]">
                    Agilizamos Tudo o Que Depende de Nós Sem Fazer Você Esperar
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#4f3d40]">
                    Como atestam os depoimentos dos nossos clientes no Google, nossa prioridade é a celeridade. Você não fica dias sem resposta: cada protocolo, recurso ou movimentação é conduzido com o máximo de presteza e acompanhamento detalhado.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-[#16080a]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#871017]" />
                      <span>Comunicação direta pelo WhatsApp com atendimento humanizado</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#871017]" />
                      <span>Atualizações periódicas sobre prazos, perícias e audiências</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#871017]" />
                      <span>Transparência total sobre as chances reais, riscos e custos da ação</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#e7dcce] pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá! Gostaria de conversar com a Kowalski Advocacia para tirar dúvidas sobre meu processo."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#871017]/30 bg-[#faf8f6] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#16080a] transition-all hover:border-[#871017] hover:bg-[#16080a] hover:text-[#fbf0de]"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Conversar no WhatsApp com o Escritório
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>

              {/* Card 2: Especialistas Preparados & Soluções Eficientes */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="group flex flex-col justify-between rounded-xl border border-[#e7dcce] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#871017] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#cfa05e]/40 bg-[#fbf0de] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#573711]">
                      <Award size={14} /> Equipe Altamente Preparada
                    </span>
                    <span className="text-xs font-semibold text-[#871017]">
                      Previdenciário & Trabalhista
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#16080a] sm:text-[1.75rem]">
                    Estratégia Técnica Personalizada para Cada Perfil de Causa
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#4f3d40]">
                    Cada cliente tem uma história única e necessidades urgentes. Montamos teses jurídicas robustas para comprovar períodos de trabalho no INSS, garantir verbas rescisórias na Justiça do Trabalho ou resguardar bens de família em inventários.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-[#16080a]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#871017]" />
                      <span>Auditoria minuciosa de vínculos rurais, especiais e urbanos no CNIS</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#871017]" />
                      <span>Cálculo exato de horas extras, adicionais e reflexos trabalhistas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#871017]" />
                      <span>Inventários extrajudiciais rápidos em cartório para herdeiros</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#e7dcce] pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá! Gostaria de consultar a Kowalski Advocacia sobre a melhor estratégia para o meu caso."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#871017]/30 bg-[#faf8f6] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#16080a] transition-all hover:border-[#871017] hover:bg-[#16080a] hover:text-[#fbf0de]"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Consultar Estratégia no WhatsApp
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Método de Trabalho em 3 Passos */}
        <section className="relative overflow-hidden border-t border-[#e7dcce] bg-[#faf8f6] py-20 text-[#16080a] sm:py-24 lg:py-28">
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-[#871017]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-[#cfa05e]/12 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                light
                eyebrow="COMO ATUAMOS NO SEU CASO"
                description="Um método transparente, ético e resolutivo para analisar sua situação e aplicar a solução jurídica mais rápida e segura."
              >
                Três etapas claras para{" "}
                <span className="italic text-[#871017]">
                  proteger seu benefício, seus direitos e sua família.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-[#e7dcce] bg-white p-6 font-serif text-base italic leading-7 text-[#16080a] shadow-xs">
                &ldquo;Nosso propósito é desatar entraves burocráticos e fazer com que cada cliente receba o que é seu por direito, com respeito, clareza e dedicação incansável.&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-[#871017]">
                  — Equipe Kowalski Advocacia
                </footer>
              </blockquote>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-[#e7dcce]"
            >
              {[
                [
                  "01",
                  "Escuta Acolhedora & Diagnóstico Documental",
                  "Atendimento na sede em Unaí ou via WhatsApp para examinar em detalhes seu relato, carteiras de trabalho, contracheques, laudos médicos ou extrato CNIS do INSS.",
                ],
                [
                  "02",
                  "Definição da Rota Jurídica Mais Rápida e Rentável",
                  "Análise estratégica para verificar a possibilidade de resolução extrajudicial ágil ou ingresso com ação judicial contundente com pedido de liminar e retroativos.",
                ],
                [
                  "03",
                  "Atuação Incisiva, Presença Contínua & Retorno Rápido",
                  "Protocolo imediato, acompanhamento minucioso perante juizados, varas trabalhistas, agências do INSS e tribunais, com informações regulares sobre cada andamento.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-semibold text-[#871017]">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-[#16080a]">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-[#4f3d40]">
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
          className="scroll-mt-24 border-t border-[#871017]/25 bg-[#f5efea] py-20 text-[#16080a] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                light
                eyebrow="PROVA SOCIAL VERIFICADA · GOOGLE MEU NEGÓCIO"
                description="Veja avaliações autênticas e espontâneas de clientes no Google sobre o comprometimento, a agilidade e os resultados da Kowalski Advocacia em Unaí - MG."
              >
                Avaliada com nota 4,7 ★ com{" "}
                <span className="italic text-[#871017]">
                  13 avaliações no Google pela competência, ética e agilidade na resolução dos casos.
                </span>
              </Heading>

              {/* Verified Google Badge Card */}
              <div className="flex flex-col gap-3 rounded-xl border border-[#e7dcce] bg-white p-5 shadow-xs sm:flex-row sm:items-center md:min-w-[340px]">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-lg border border-[#871017]/25 bg-[#faf8f6] shadow-xs">
                  <GoogleIcon size={30} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-3xl font-bold leading-none text-[#16080a]">
                      4,7
                    </span>
                    <div className="flex gap-0.5 text-[#b6813b]">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-[#b6813b] text-[#b6813b]"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#4f3d40]">
                    Kowalski Advocacia
                  </p>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-[#871017] transition-colors hover:text-[#16080a]"
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
                  className="group relative flex flex-col justify-between rounded-xl border border-[#e7dcce] bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#871017] hover:shadow-md sm:p-8"
                >
                  <div>
                    {/* Header: Stars + Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-1 text-[#b6813b]">
                        {Array.from({ length: review.rating }, (_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-[#b6813b] text-[#b6813b]"
                          />
                        ))}
                      </div>
                      <span className="rounded-md border border-[#871017]/25 bg-[#faf8f6] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#700a12] shadow-xs">
                        {review.badge}
                      </span>
                    </div>

                    {/* Review content */}
                    <p className="mt-5 text-[14px] italic leading-relaxed text-[#16080a]">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  {/* Reviewer info */}
                  <div className="mt-6 flex items-center gap-3 border-t border-[#e7dcce] pt-4">
                    <div className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#871017]/25 bg-[#faf8f6] font-serif text-sm font-semibold text-[#871017] shadow-xs">
                      {review.name.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-serif text-base font-semibold text-[#16080a]">
                        {review.name}
                      </p>
                      <p className="text-[10px] uppercase tracking-wider text-[#756064]">
                        {review.reviewerTag}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom Actions and Trust Tags */}
            <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-[#e7dcce] pt-8 sm:flex-row">
              <div className="flex flex-wrap items-center gap-2">
                {[
                  "Advocacia em Unaí - MG",
                  "Atendimento em Arinos - MG",
                  "Nota 4,7 ★ no Google (13 avaliações)",
                  "Direito Previdenciário & INSS",
                  "Direito Trabalhista Especializado",
                  "Direito Cível & Indenizações",
                  "Inventário Rápido em Cartório",
                  "Atendimento Digital para Todo o Brasil",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#e7dcce] bg-white px-3.5 py-1.5 text-[11px] font-medium text-[#16080a] shadow-xs"
                  >
                    <CheckCircle2 size={13} className="text-[#871017]" />
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#871017] transition-colors hover:text-[#16080a]"
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

        {/* Contato & Localização da Sede em Unaí - MG */}
        <section
          id="contato"
          className="scroll-mt-24 border-t border-[#871017]/25 bg-[#faf8f6] py-20 text-[#16080a] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                light
                eyebrow="CONTATO & ATENDIMENTO EM UNAÍ"
                description="Agende uma consulta presencial em nosso escritório no Centro de Unaí ou inicie seu atendimento imediatamente pelo WhatsApp para analisar seu caso com discrição, ética e agilidade."
              >
                Estamos prontos para{" "}
                <span className="italic text-[#871017]">
                  escutar sua situação e proteger seus direitos.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de agendar um atendimento na Kowalski Advocacia para análise do meu caso."
                  )}
                  target="_blank"
                  size="lg"
                  variant="ruby"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} /> Iniciar Conversa no WhatsApp
                </GlowingButton>
                <p className="text-[11px] leading-5 text-[#4f3d40]">
                  Telefone e WhatsApp direto:{" "}
                  <strong className="text-[#16080a]">{PHONE_DISPLAY}</strong>
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-[#4f3d40]">
                <div className="flex items-start gap-3">
                  <Clock
                    size={16}
                    className="mt-0.5 shrink-0 text-[#871017]"
                  />
                  <div>
                    <p className="font-semibold text-[#16080a]">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-[#16080a]">
                      Segunda a Sexta-feira a partir das 08:00 (08:00 às 18:00)
                    </p>
                    <p className="text-[11px] text-[#756064]">
                      Atendimento presencial no Centro de Unaí - MG, unidade em Arinos e atendimento digital em todo o Brasil
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#871017]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-medium text-[#16080a] transition-colors hover:text-[#871017]"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#871017]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#871017] text-[#16080a]"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#871017]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="transition-colors hover:text-[#871017] text-[#16080a]"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#871017]"
                  />
                  <div>
                    <span className="text-[#16080a]">{ADDRESS_TEXT}</span>
                    <br />
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex items-center gap-1 font-semibold text-[#871017] hover:underline"
                    >
                      Ver no Google Maps <ArrowUpRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Office & Profile Card */}
            <div className="relative overflow-hidden rounded-xl border border-[#e7dcce] bg-white p-7 shadow-sm sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#700a12] via-[#871017] to-[#cfa05e]" />

              <div className="flex flex-col gap-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#871017]">
                  Sede do Escritório
                </p>
                <div className="relative h-14 w-60 sm:h-16 sm:w-72">
                  <Image
                    src={LOGO_HORIZONTAL_SRC}
                    alt="Kowalski Advocacia"
                    fill
                    sizes="288px"
                    className="object-contain object-left"
                  />
                </div>
              </div>

              <address className="mt-7 max-w-md text-[14px] not-italic leading-7 text-[#4f3d40]">
                <strong className="font-semibold text-[#16080a]">
                  Kowalski Advocacia
                </strong>
                <br />
                Advocacia Especializada · Previdenciário, Trabalhista e Cível
                <br />
                Atendimento em Unaí • Arinos • Em todo o Brasil
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-lg border border-[#e7dcce] bg-[#faf8f6] p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#871017]">
                  Atendimento & Horários
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-[#4f3d40]">
                  <span>Segunda a Sexta</span>
                  <span className="text-right font-semibold text-[#16080a]">
                    08:00 às 18:00
                  </span>
                  <span>Atendimento Presencial</span>
                  <span className="text-right font-medium text-[#871017]">
                    Centro · Unaí - MG
                  </span>
                  <span>Unidade Regional</span>
                  <span className="text-right text-[#16080a]">Arinos - MG</span>
                  <span>Avaliações Google</span>
                  <span className="text-right font-semibold text-[#871017]">4,7 ★ (13 avaliações)</span>
                  <span>Atendimento Digital</span>
                  <span className="text-right text-[#16080a]">Todo o Brasil</span>
                </div>
              </div>

              <div className="my-7 h-px bg-[#e7dcce]" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-[#756064]">
                  Atendimento humanizado, ético e com absoluto sigilo profissional
                </p>
                <a
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de agendar um atendimento na Kowalski Advocacia."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#871017]/30 bg-[#f5efea] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#16080a] transition-colors hover:border-[#871017] hover:bg-[#16080a] hover:text-[#fbf0de]"
                >
                  <WhatsAppIcon size={14} /> Falar no WhatsApp <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip */}
        <section className="border-t border-[#871017]/25 bg-gradient-to-r from-[#f5efea] via-[#faf8f6] to-[#f5efea] px-5 py-14 text-[#16080a] shadow-xs sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#871017]">
                <Sparkles size={13} /> KOWALSKI ADVOCACIA · PREVIDENCIÁRIO · TRABALHISTA · CÍVEL
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-[#16080a] sm:text-4xl">
                Precisa de um escritório combativo e transparente que agilize tudo que depende dele e defenda você com firmeza?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá! Gostaria de uma avaliação para a minha situação jurídica com a Kowalski Advocacia."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-lg bg-gradient-to-r from-[#700a12] via-[#871017] to-[#700a12] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-md transition-all hover:-translate-y-0.5 hover:brightness-105 hover:shadow-lg"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp{" "}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* Footer - Elegant Light Luxury */}
        <footer className="border-t border-[#e7dcce] bg-[#f5efea] px-5 py-14 text-[#16080a] sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <a
                href="#inicio"
                aria-label="Kowalski Advocacia"
                className="inline-block transition-transform hover:scale-[1.01]"
              >
                <div className="relative h-16 w-60 sm:h-20 sm:w-72">
                  <Image
                    src={LOGO_HORIZONTAL_SRC}
                    alt="Kowalski Advocacia"
                    fill
                    sizes="288px"
                    className="object-contain object-left"
                  />
                </div>
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-[#5c474b]">
                ⚖️ Advocacia combativa, ética e resolutiva. Atuação especializada em Direito Previdenciário (Aposentadorias e Benefícios do INSS), Direito Trabalhista e Direito Cível em Unaí - MG, Arinos e em todo o Brasil.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-[#871017]">
                Kowalski Advocacia · Sede em Unaí - MG
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#871017]">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-[#5c474b]">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  O Escritório
                </a>
                <a className="footer-link" href="#atuacao">
                  Áreas de Atuação
                </a>
                <a className="footer-link" href="#diferenciais">
                  Por Que Escolher
                </a>
                <a className="footer-link" href="#avaliacoes">
                  Avaliações de Clientes (4,7 ★)
                </a>
                <a className="footer-link" href="#contato">
                  Contato & Sede
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#871017]">
                Contato & Atendimento
              </h2>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-[#5c474b]">
                <a
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de falar com o escritório Kowalski Advocacia."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 font-medium text-[#16080a]"
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
                <p className="inline-flex items-center gap-2 pt-1 text-[11px] text-[#871017]">
                  <Clock size={14} className="shrink-0" /> Seg a Sex: a partir das 08:00
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-[#e7dcce] pt-6 text-[10px] text-stone-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} KOWALSKI ADVOCACIA. Todos os direitos reservados.
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
              "Olá! Gostaria de consultar sobre meu caso e tirar dúvidas pelo WhatsApp com a Kowalski Advocacia."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Kowalski Advocacia"
            className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          >
            <WhatsAppIcon size={28} />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-[#16080a] border border-[#871017]/30 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg transition-opacity group-hover:block">
              Falar com Kowalski Advocacia
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
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-xl border border-[#e7dcce] bg-white p-7 shadow-2xl sm:max-w-xl sm:rounded-xl sm:p-10 text-[#16080a]"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-[#e7dcce] bg-[#faf8f6] text-[#16080a] transition-colors hover:border-[#871017] hover:text-[#871017]"
                >
                  <X size={18} />
                </button>

                <p className="eyebrow-light">ÁREA DE ATUAÇÃO</p>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-serif text-3xl leading-tight text-[#16080a] sm:text-4xl"
                >
                  {activeArea.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-[#4f3d40]">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-[#e7dcce] pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#871017]">
                    Demandas e Pedidos Atendidos pelo Escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-[#2b181b]"
                      >
                        <span className="size-2 shrink-0 rounded-full bg-[#871017]" />
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
                    variant="ruby"
                    className="rounded-lg shadow-md"
                  >
                    <WhatsAppIcon size={16} /> Consultar sobre esta demanda
                  </GlowingButton>
                  <button
                    type="button"
                    onClick={() => setActiveArea(null)}
                    className="px-5 py-3 text-xs font-semibold text-stone-500 transition-colors hover:text-[#16080a]"
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
