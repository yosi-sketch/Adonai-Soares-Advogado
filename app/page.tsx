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
  Sparkles,
  Star,
  X,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5534991901962";
const PHONE_DISPLAY = "(34) 99190-1962";
const EMAIL_CONTACT = "adv.manuelagoncalves@gmail.com";
const INSTAGRAM_URL = "https://www.instagram.com/adv.manuelagoncalves/";
const INSTAGRAM_HANDLE = "@adv.manuelagoncalves";
const OAB_NUMBER = "OAB/MG 167.889";
const LAWYER_NAME = "Dra. Manuela Gonçalves";

const ADDRESS_TEXT =
  "Rua 104, 1268 - sala 3 - Bairro Brasília, Capinópolis - MG, 38360-000";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Manuela+Gon%C3%A7alves+Advogada+Rua+104+1268+Brasilia+Capinopolis+MG";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Manuela+Gon%C3%A7alves+%E2%80%94+Advogada%0ACapin%C3%B3polis+%C2%B7+MG";

const LOGO_SRC = "/logo-manuela.png";
const LOGO_SYMBOL_SRC = "/logo-symbol.png";
const FOTO_HERO_SRC = "/dra-manuela.jpg";
const FOTO_FACHADA_SRC = "/fachada.png";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Manuela! Gostaria de agendar um atendimento para tirar dúvidas sobre o meu caso.";
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
    title: "Direito Previdenciário & Benefícios do INSS",
    icon: Landmark,
    tag: "Aposentadorias · BPC/LOAS · Auxílios · Revisões · Planejamento",
    summary:
      "Conquista, restabelecimento e proteção do seu benefício previdenciário com o valor integral e justo, comprovando períodos rurais, revertendo indeferimentos e planejando seu futuro.",
    details:
      "Aposentar-se com o valor devido ou ter um auxílio concedido com rapidez é um direito de quem dedicou anos de trabalho. A Dra. Manuela Gonçalves analisa com absoluto rigor seu extrato CNIS, comprova tempo de atividade rural e urbana, reverte negativas indevidas perante a Justiça Federal e executa o Planejamento Previdenciário detalhado para garantir a regra mais vantajosa com o recebimento de todos os atrasados.",
    topics: [
      "Aposentadoria por Idade Urbana e Rural com cômputo minucioso de períodos rurais e campesinos",
      "Aposentadoria por Tempo de Contribuição e regras de transição mais favoráveis ao segurado",
      "Benefício de Prestação Continuada (BPC/LOAS) para idosos a partir de 65 anos e pessoas com deficiência",
      "Auxílio por Incapacidade Temporária (auxílio-doença) e Aposentadoria por Incapacidade Permanente",
      "Pensão por Morte urbana e rural e restabelecimento imediato de benefícios cancelados ou suspensos",
      "Aposentadoria Especial para trabalhadores expostos a agentes nocivos, químicos ou insalubres",
      "Planejamento Previdenciário com auditoria do CNIS, correção de pendências e simulação de renda mensal",
      "Ações judiciais perante a Justiça Federal com cobrança e recebimento integral das parcelas retroativas",
    ],
    whatsAppText:
      "Olá, Dra. Manuela! Gostaria de uma avaliação sobre meu benefício do INSS (aposentadoria, auxílio, BPC/LOAS ou planejamento previdenciário).",
  },
  {
    id: "familia-sucessoes-inventarios",
    title: "Direito de Família & Sucessões (Inventários)",
    icon: FileCheck2,
    tag: "Inventário em Cartório · Partilha de Bens · Divórcio · Pensão · Herança",
    summary:
      "Condução humanizada, ágil e segura de inventários e questões de família, priorizando a via extrajudicial em cartório para proteger o patrimônio e a harmonia familiar.",
    details:
      "Questões que envolvem família e herança exigem equilíbrio emocional, sensibilidade humana e alta solidez jurídica. A Dra. Manuela Gonçalves conduz inventários extrajudiciais diretamente em cartório com rapidez e menor custo tributário e financeiro. Em casos com herdeiros menores ou discordância, atua com combatividade técnica no inventário judicial, divórcios, partilhas e fixação de pensão alimentícia.",
    topics: [
      "Inventário Extrajudicial em Cartório: procedimento célere, econômico e sem a demora do processo judicial",
      "Inventário Judicial eficiente para famílias com menores, incapazes ou partilhas litigiosas",
      "Divórcio Consensual em Cartório e Divórcio Judicial com partilha justa e equilibrada de bens",
      "Ação e revisão de Pensão Alimentícia, regulamentação de guarda e regime de convivência familiar",
      "Planejamento Sucessório Familiar, doações em vida com cláusula de usufruto e confecção de testamentos",
      "Alvarás judiciais para levantamento rápido de valores em contas bancárias, FGTS e benefícios de falecidos",
      "Reconhecimento e dissolução de União Estável com preservação de direitos patrimoniais",
    ],
    whatsAppText:
      "Olá, Dra. Manuela! Gostaria de tirar dúvidas sobre inventário, partilha de bens ou uma questão de direito de família.",
  },
  {
    id: "direito-trabalhista",
    title: "Direito Trabalhista & Defesa do Trabalhador",
    icon: Briefcase,
    tag: "Rescisões · Horas Extras · Acidentes · Insalubridade · FGTS",
    summary:
      "Defesa firme, transparente e técnica dos seus direitos do trabalho, assegurando o recebimento correto de verbas rescisórias, adicionais legais e indenizações devidas.",
    details:
      "O trabalhador merece ter cada direito respeitado e pago integralmente. A Dra. Manuela Gonçalves atua com postura diligente na cobrança de horas extras não quitadas, reversão de justas causas aplicadas injustamente, responsabilização por acidentes de trabalho e doenças ocupacionais, e cobrança de FGTS retido com a multa rescisória.",
    topics: [
      "Rescisão Indireta do Contrato de Trabalho (demissão por justa causa cometida pelo empregador)",
      "Reversão de Justa Causa indevida ou desproporcional aplicada ao empregado",
      "Cobrança rigorosa de Horas Extras, Intervalos Intrajornada suprimidos e Adicional Noturno",
      "Adicionais de Insalubridade e Periculosidade devidos e não pagos",
      "Indenizações por Acidente de Trabalho, Doenças Ocupacionais e estabilidade provisória",
      "Indenizações por Danos Morais decorrentes de Assédio Moral, Perseguição ou Exposição Indevida",
      "Recolhimento obrigatório de FGTS em atraso acrescido da multa rescisória de 40%",
      "Reconhecimento formal de Vínculo Empregatício em carteira de trabalho para trabalhadores sem registro",
    ],
    whatsAppText:
      "Olá, Dra. Manuela! Gostaria de consultar sobre meus direitos trabalhistas (rescisão, horas extras ou acidente de trabalho).",
  },
  {
    id: "direito-civel-indenizacoes",
    title: "Direito Cível, Contratos & Indenizações",
    icon: Scale,
    tag: "Indenizações · Contratos · Cobranças · Consumidor · Responsabilidade Civil",
    summary:
      "Proteção patrimonial, reparação integral de prejuízos causados por terceiros e segurança em relações contratuais, cobranças e direitos do consumidor.",
    details:
      "Danos patrimoniais, cobranças abusivas e descumprimentos de contratos causam prejuízos concretos e desgaste emocional. A Dra. Manuela Gonçalves atua com firmeza na defesa contra abusos de instituições bancárias e seguradoras, elaboração e revisão minuciosa de contratos imobiliários e comerciais, e ações de reparação civil por danos morais e materiais.",
    topics: [
      "Ações Indenizatórias por Danos Morais e Materiais decorrentes de negligência, acidentes ou ofensas",
      "Ações contra Inscrição Indevida em Órgãos de Proteção ao Crédito (SPC/Serasa e negativações ilícitas)",
      "Defesa dos Direitos do Consumidor contra cobranças indevidas, juros abusivos e golpes bancários",
      "Ações de Cobrança e Execução de Títulos Judiciais e Extrajudiciais (cheques, notas e contratos)",
      "Elaboração e revisão jurídica detalhada de contratos de compra e venda, locação e negócios imobiliários",
      "Ações de reintegração de posse, despejo e proteção patrimonial em execuções",
    ],
    whatsAppText:
      "Olá, Dra. Manuela! Gostaria de receber orientações jurídicas sobre uma situação de Direito Cível (indenização, contrato ou cobrança).",
  },
  {
    id: "consultoria-preventiva-acordos",
    title: "Consultoria Preventiva & Mediação Extrajudicial",
    icon: HeartHandshake,
    tag: "Acordos Ágeis · Pareceres Técnicos · Soluções Fora da Justiça",
    summary:
      "Soluções jurídicas estratégicas e preventivas para resolver conflitos com celeridade e economia, evitando anos de desgaste e custos nos tribunais.",
    details:
      "A solução mais inteligente e econômica muitas vezes é conquistada fora do litígio judicial demorado. A Dra. Manuela Gonçalves atua com habilidade técnica na negociação e confecção de acordos extrajudiciais seguros com validade legal plena, além de prestar consultoria preventiva clara e sem termos difíceis para orientar suas decisões com segurança.",
    topics: [
      "Mediação e celebração de acordos extrajudiciais ágeis com plena força executiva",
      "Análise preventiva de riscos antes da assinatura de contratos, escrituras e transações",
      "Notificações extrajudiciais formais para resguardar direitos e viabilizar composições amigáveis",
      "Consultoria jurídica acessível e humanizada para esclarecer dúvidas sobre processos e direitos",
      "Pareceres técnicos sobre viabilidade, custos e probabilidades reais de demandas judiciais",
    ],
    whatsAppText:
      "Olá, Dra. Manuela! Gostaria de consultar sobre a possibilidade de um acordo ou assessoria preventiva para meu caso.",
  },
];

const clientReviews = [
  {
    name: "Bárbara Flores",
    reviewerTag: "6 avaliações no Google",
    badge: "Atenciosa & Competente",
    rating: 5,
    content:
      "Advogada atenciosa e empática no atendimento, atualizada e muito competente. Nos mantém informados sobre o processo, explicando o que está acontecendo e fornecendo suporte sempre que necessário. Recomendo a todos!",
  },
  {
    name: "Danielle Araujo pricinoti",
    reviewerTag: "1 avaliação no Google",
    badge: "Ética & Inteligente",
    rating: 5,
    content:
      "Ótima profissão, ética e inteligente. Excelente advogada, confio plenamente no trabalho da Dra Manuela. Uma ótima pessoa!",
  },
  {
    name: "Maria Izabel Campos",
    reviewerTag: "4 avaliações no Google",
    badge: "Compromisso & Carinho",
    rating: 5,
    content:
      "Excelente advogada, uma profissional comprometida com o trabalho e gratidão pelo carinho e pela competência em todos os processos !!!!!",
  },
  {
    name: "Welington Gomes Gonçalves",
    reviewerTag: "Local Guide · 40 avaliações · 2 fotos",
    badge: "Estudiosa & Competente",
    rating: 5,
    content:
      "Muito estudiosa e competente no que faz! 👏👏👏",
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
      <h2 className="mt-4 font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-[#0d1611] sm:text-4xl lg:text-[3.15rem]">
        {children}
      </h2>
      {description && (
        <p className="mt-4 text-[15px] leading-7 text-[#2c3d33]">
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
      <main className="overflow-hidden bg-[#faf8f5] text-[#0d1611] selection:bg-[#dbebe2] selection:text-[#0a140f]">
        {/* Navigation Bar - Refined Light Luxury with Deep Forest Emerald & Metallic Gold */}
        <header className="sticky top-0 z-40 border-b border-[#e3ded5] bg-white/95 backdrop-blur-xl shadow-xs">
          <div className="mx-auto flex h-[92px] max-w-7xl items-center justify-between gap-6 px-5 sm:h-[104px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Dra. Manuela Gonçalves — Advogada - Página Inicial"
              onClick={closeMenu}
              className="flex shrink-0 items-center transition-opacity hover:opacity-95"
            >
              <div className="relative h-12 w-48 sm:h-14 sm:w-60 lg:h-16 lg:w-64 xl:h-[68px] xl:w-72">
                <Image
                  src={LOGO_SRC}
                  alt="Dra. Manuela Gonçalves — Advogada"
                  fill
                  priority
                  unoptimized
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
                A Advogada
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
                aria-label="Avaliações da Dra. Manuela Gonçalves no Google"
                className="grid size-10 place-items-center rounded-lg border border-[#e3ded5] bg-[#faf8f5] text-[#2c3d33] transition-all hover:border-[#162b21] hover:bg-white hover:text-[#0d1611] shadow-xs"
                title="5,0 ★ no Google (10 avaliações)"
              >
                <GoogleIcon size={16} />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da Dra. Manuela Gonçalves Advogada"
                className="grid size-10 place-items-center rounded-lg border border-[#e3ded5] bg-[#faf8f5] text-[#2c3d33] transition-all hover:border-[#162b21] hover:bg-white hover:text-[#0d1611] shadow-xs"
                title={`Instagram ${INSTAGRAM_HANDLE}`}
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                aria-label="Ligar para a Dra. Manuela Gonçalves Advogada"
                className="grid size-10 place-items-center rounded-lg border border-[#e3ded5] bg-[#faf8f5] text-[#2c3d33] transition-all hover:border-[#162b21] hover:bg-white hover:text-[#0d1611] shadow-xs"
                title={`Ligar: ${PHONE_DISPLAY}`}
              >
                <Phone size={16} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Dra. Manuela Gonçalves Advogada"
                className="grid size-10 place-items-center rounded-lg border border-[#e3ded5] bg-[#faf8f5] text-[#2c3d33] transition-all hover:border-[#162b21] hover:bg-white hover:text-[#0d1611] shadow-xs"
                title="Atendimento no WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Manuela! Gostaria de agendar uma consulta jurídica e receber orientações sobre meu caso."
                )}
                target="_blank"
                size="sm"
                variant="emerald"
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
              className="grid size-11 place-items-center rounded-lg border border-[#e3ded5] bg-[#faf8f5] text-[#0d1611] lg:hidden shadow-xs"
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
                className="overflow-hidden border-t border-[#e3ded5] bg-white px-6 text-[#0d1611] lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["A Advogada", "#sobre"],
                    ["Áreas de Atuação", "#atuacao"],
                    ["Por Que Escolher", "#diferenciais"],
                    ["Avaliações (5,0 ★)", "#avaliacoes"],
                    ["Contato & Sede", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm font-medium text-[#2c3d33] hover:text-[#162b21]"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#0f1d16] via-[#162b21] to-[#0f1d16] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.13em] text-white shadow-md transition-all hover:brightness-105"
                      href={getWhatsAppUrl(
                        "Olá, Dra. Manuela! Gostaria de conversar sobre o meu caso pelo WhatsApp."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} /> WhatsApp: {PHONE_DISPLAY}
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#e3ded5] bg-[#faf8f5] px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-[#0d1611] transition-all hover:border-[#162b21]"
                      href={GOOGLE_SEARCH_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <GoogleIcon size={15} /> 5,0 ★ no Google (10 avaliações)
                    </a>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section - Deep Emerald Green, Metallic Gold & Alabaster Warmth */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-[#e3ded5] bg-gradient-to-b from-white via-[#faf8f5] to-[#f4f0e6]"
        >
          {/* Subtle emerald & champagne gold ambient aura */}
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[36rem] rounded-full bg-[#162b21]/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[28rem] rounded-full bg-[#c5a059]/12 blur-3xl" />

          <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-12 lg:py-12 xl:py-14">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-xl lg:py-2"
            >
              <motion.div
                variants={reveal}
                className="mb-4 inline-flex items-center gap-2 rounded-lg border border-[#162b21]/20 bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#162b21] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#c5a059]" />
                <span>OAB/MG 167.889 · ADVOCACIA ESPECIALIZADA & HUMANIZADA · CAPINÓPOLIS - MG</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="font-serif text-3xl leading-[1.15] tracking-[-0.02em] text-[#0d1611] sm:text-4xl lg:text-[2.65rem] xl:text-[2.85rem]"
              >
                Advocacia Estratégica, Ética e Humanizada:{" "}
                <span className="font-serif italic text-[#162b21]">
                  Defesa Segura dos Seus Direitos.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-lg text-[14px] leading-6 text-[#2c3d33] sm:text-[15px] sm:leading-7"
              >
                A <strong className="font-semibold text-[#0d1611]">Dra. Manuela Gonçalves</strong> ({OAB_NUMBER}) atua com rigor técnico e escuta atenta em <strong className="font-semibold text-[#0d1611]">Direito Previdenciário (INSS), Família & Sucessões (Inventários), Trabalhista e Cível</strong>, mantendo você sempre informado sobre cada fase do processo.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Manuela! Gostaria de agendar uma consulta jurídica para avaliar o meu caso."
                  )}
                  target="_blank"
                  size="md"
                  variant="emerald"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar no WhatsApp com a Dra. Manuela
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 rounded-lg border border-[#e3ded5] bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#0d1611] shadow-xs transition-all hover:border-[#162b21] hover:bg-[#faf8f5]"
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
                className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[#e3ded5] pt-4 text-xs text-[#586b61]"
              >
                <a
                  href={GOOGLE_SEARCH_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-[#0d1611] transition-colors hover:text-[#162b21]"
                >
                  <Star size={14} className="fill-[#c5a059] text-[#c5a059]" /> 5,0 ★ no Google (10 avaliações)
                </a>
                <span className="inline-flex items-center gap-1.5 font-medium text-[#0d1611]">
                  <Award size={14} className="text-[#162b21]" /> Defesa Ética & Atendimento Empático
                </span>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-[#0d1611] transition-colors hover:text-[#162b21]"
                >
                  <MapPin size={14} className="text-[#162b21]" /> Bairro Brasília · Capinópolis - MG
                </a>
              </motion.div>
            </motion.div>

            {/* Hero Visual Presentation - Authentic Lawyer Portrait & Authority Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.95,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-[390px] lg:max-w-[420px] xl:max-w-[440px] lg:ml-auto lg:mr-0"
            >
              <div className="relative aspect-[4/4.8] sm:aspect-[4/4.9] overflow-hidden rounded-2xl border-2 border-[#e3ded5] bg-white shadow-xl ring-1 ring-[#162b21]/20">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dra. Manuela Gonçalves — Advogada"
                  fill
                  priority
                  unoptimized
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0a140f] via-[#0a140f]/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3 text-white sm:bottom-6 sm:left-6 sm:right-6">
                  <div>
                    <p className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-white">
                      Dra. Manuela Gonçalves
                    </p>
                    <p className="mt-0.5 text-[10px] uppercase tracking-[0.2em] text-[#f5ecd9]">
                      Advogada · OAB/MG 167.889
                    </p>
                    <p className="mt-0.5 text-[11px] text-stone-300">
                      Rua 104, 1268 - Sala 3 · Capinópolis - MG
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-[#c5a059]/50 bg-[#0a140f]/85 text-[#fdfbf6] backdrop-blur-sm shadow-md">
                    <Scale size={18} className="text-[#c5a059]" />
                  </span>
                </div>
              </div>

              {/* Floating authority badge */}
              <div className="absolute -left-3 top-4 z-10 rounded-lg border border-[#162b21]/25 bg-white/95 px-3 py-1.5 text-[9px] sm:text-[10px] font-bold tracking-[0.14em] text-[#162b21] shadow-md backdrop-blur-md sm:-left-4">
                SEDE EM CAPINÓPOLIS - MG · ATENDIMENTO ON-LINE EM TODO O BRASIL
              </div>

              {/* Floating Google 5.0 Star Rating */}
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="group absolute -bottom-4 -right-2 z-10 rounded-xl border border-[#c5a059]/50 bg-white/95 p-3 shadow-md backdrop-blur-md transition-all hover:border-[#162b21] hover:bg-white sm:-right-4"
              >
                <div className="flex items-center gap-2">
                  <GoogleIcon size={16} />
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-0.5 text-[#c5a059]">
                      <Star size={12} className="fill-[#c5a059] text-[#c5a059]" />
                    </div>
                    <span className="font-serif text-sm font-bold text-[#0d1611]">
                      5,0
                    </span>
                    <span className="text-[9px] uppercase tracking-wider text-[#162b21]">
                      / 5,0
                    </span>
                  </div>
                </div>
                <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#586b61]">
                  10 Avaliações no Google (100% 5★)
                </p>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner - Authority Metrics */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-[#e3ded5] bg-white"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              [
                "5,0 ★ no Google",
                "avaliação máxima unânime com 10 avaliações elogiando competência, ética e clareza",
              ],
              [
                "Defesa Humanizada",
                "atendimento acolhedor e suporte contínuo, mantendo você sempre informado sobre o processo",
              ],
              [
                "Previdenciário & Família",
                "concessão de benefícios do INSS, inventários rápidos em cartório e defesa de direitos",
              ],
              [
                "Capinópolis • Triângulo • Brasil",
                "sede moderna no Bairro Brasília e consultoria jurídica digital em todo o território nacional",
              ],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-[#e3ded5]"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-xl font-semibold text-[#162b21] sm:text-2xl">
                  {value}
                </span>
                <span className="max-w-[165px] text-[11px] leading-5 text-[#586b61]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre a Dra. Manuela Gonçalves - Editorial Canvas */}
        <section
          id="sobre"
          className="scroll-mt-24 border-y border-[#e3ded5] bg-[#faf8f5] py-20 text-[#0d1611] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
            {/* Visual presentation - Lawyer & Logo Composition */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[490px]"
            >
              <div className="relative aspect-[4/4.8] overflow-hidden rounded-2xl border-2 border-[#e3ded5] bg-white shadow-2xl ring-1 ring-[#162b21]/20">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dra. Manuela Gonçalves — Advogada"
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a140f]/90 via-[#0a140f]/30 to-transparent" />
                
                {/* Central brand emblem inside photo */}
                <div className="absolute top-6 left-6 rounded-lg border border-white/20 bg-white/95 p-2.5 backdrop-blur-md shadow-md">
                  <div className="relative h-10 w-32">
                    <Image
                      src={LOGO_SRC}
                      alt="Logo Dra. Manuela Gonçalves"
                      fill
                      unoptimized
                      sizes="128px"
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="font-cinzel text-xl font-bold tracking-wider text-[#fdfbf6]">
                    MANUELA GONÇALVES
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-stone-200">
                    Advogada · OAB/MG 167.889 · Capinópolis - MG
                  </p>
                </div>
              </div>

              {/* Authority badge card */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-[#c5a059]/50 bg-white px-5 py-4 shadow-xl sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-[#162b21]">
                  <Sparkles size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#162b21]">
                    Excelência Jurídica & Empatia
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-[#0d1611]">
                  Dra. Manuela Gonçalves
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-[#162b21]">
                  Defesa Estratégica, Atualizada e Humanizada
                </p>
                <p className="mt-1 text-[11px] leading-4 text-[#586b61]">
                  Rua 104, 1268 - Sala 3 · Bairro Brasília · Capinópolis - MG
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-[#162b21]/35 sm:-left-7 sm:-top-7 sm:size-32" />
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
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#162b21]/25 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#162b21] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#c5a059]" />
                <span>SOBRE A DRA. MANUELA GONÇALVES</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-[#0d1611] sm:text-4xl lg:text-[3.25rem]"
              >
                Uma advocacia estruturada para defender seus direitos com inteligência e proximidade:{" "}
                <span className="italic text-[#162b21]">
                  estratégia técnica de alto rigor, ética intransigente e acolhimento humano.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-[#2c3d33]"
              >
                Com sede acolhedora localizada na Rua 104, nº 1268 - Sala 3, no Bairro Brasília em{" "}
                <strong className="font-bold text-[#0d1611]">Capinópolis - MG</strong>, e estrutura digital moderna preparada para atender clientes em todo o Brasil, a atuação da{" "}
                <strong className="font-bold text-[#0d1611]">Dra. Manuela Gonçalves</strong> ({OAB_NUMBER}) é pautada por um propósito claro: aliar profundo conhecimento técnico a uma relação de confiança real e transparente com cada cliente.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-[#2c3d33]"
              >
                Reconhecida nas avaliações espontâneas de seus clientes no Google como uma profissional{" "}
                <strong className="font-bold text-[#0d1611]">
                  &ldquo;muito estudiosa, ética, inteligente e atenciosa&rdquo;
                </strong>
                , a Dra. Manuela destaca-se pelo cuidado especial em manter seus clientes constantemente informados sobre cada fase do processo, explicando os passos jurídicos de maneira clara, acessível e sem jargões burocráticos.
              </motion.p>

              {/* Client Quote Card from real Google Reviews */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-xl border border-[#e3ded5] bg-white p-5 shadow-xs"
              >
                <blockquote className="font-serif text-sm italic leading-relaxed text-[#0d1611]">
                  &ldquo;Advogada atenciosa e empática no atendimento, atualizada e muito competente. Nos mantém informados sobre o processo, explicando o que está acontecendo e fornecendo suporte sempre que necessário. Recomendo a todos!&rdquo;
                </blockquote>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-[#162b21]">
                  — Bárbara Flores · Avaliação no Google (5,0 ★)
                </p>
              </motion.div>

              {/* Personality & Profile Cards */}
              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-2 gap-3 text-xs sm:grid-cols-3"
              >
                <div className="rounded-lg border border-[#e3ded5] bg-white p-3 shadow-xs">
                  <p className="font-bold text-[#0d1611]">Qualidade Comprovada</p>
                  <p className="mt-0.5 text-[11px] text-[#586b61]">
                    100% 5 estrelas no Google Meu Negócio
                  </p>
                </div>
                <div className="rounded-lg border border-[#e3ded5] bg-white p-3 shadow-xs">
                  <p className="font-bold text-[#0d1611]">Defesa Humanizada</p>
                  <p className="mt-0.5 text-[11px] text-[#586b61]">
                    Escuta atenta, empatia e suporte constante
                  </p>
                </div>
                <div className="rounded-lg border border-[#e3ded5] bg-white p-3 shadow-xs col-span-2 sm:col-span-1">
                  <p className="font-bold text-[#0d1611]">Rigor & Ética</p>
                  <p className="mt-0.5 text-[11px] text-[#586b61]">
                    Estudo aprofundado e transparência
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-1 gap-2.5 text-xs font-semibold text-[#0d1611] sm:grid-cols-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#162b21]" />
                  <span>Sede na Rua 104, 1268 - Sala 3 · Bairro Brasília · Capinópolis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#162b21]" />
                  <span>Nota 5,0 ★ no Google com 10 avaliações comprovadas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#162b21]" />
                  <span>Contato direto pelo WhatsApp com a própria advogada</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#162b21]" />
                  <span>Atendimento presencial no Triângulo Mineiro e digital para o Brasil</span>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Manuela! Gostaria de agendar uma consulta para conversar sobre meu caso."
                  )}
                  target="_blank"
                  size="md"
                  variant="emerald"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar com a Dra. Manuela
                </GlowingButton>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0d1611] transition-colors hover:text-[#162b21]"
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
          className="scroll-mt-24 border-t border-[#e3ded5] bg-[#f4f0e6] py-20 sm:py-28 lg:py-32"
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
                description="Atuação jurídica altamente especializada, estratégica e humanizada, focada em assegurar benefícios do INSS, inventários rápidos em cartório, direitos trabalhistas e soluções cíveis com segurança e rapidez."
              >
                Soluções jurídicas experientes em{" "}
                <span className="italic text-[#162b21]">
                  Capinópolis, Triângulo Mineiro, Minas Gerais e em todo o Brasil.
                </span>
              </Heading>
              <p className="max-w-[270px] pb-1 text-xs leading-6 text-[#586b61]">
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
                    className="group flex min-h-[350px] flex-col rounded-xl border border-[#e3ded5] bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#162b21] hover:shadow-lg sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-lg border border-[#162b21]/25 bg-[#f2f8f5] text-[#162b21] shadow-xs transition-colors group-hover:bg-[#162b21] group-hover:text-white">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <span className="font-serif text-2xl text-[#162b21]/35">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-md border border-[#162b21]/20 bg-[#e2ede6] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#162b21] shadow-xs">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.45rem] leading-tight text-[#0d1611]">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-6 text-[#586b61]">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-[#162b21] hover:text-[#0d1611]"
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

        {/* Por Que Escolher a Dra. Manuela Gonçalves - Diferenciais */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-t border-[#e3ded5] bg-[#faf8f5] py-20 text-[#0d1611] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                light
                eyebrow="EXCELÊNCIA, ESTRATÉGIA & RESULTADOS"
                description="Seu benefício previdenciário, a partilha de bens da sua família ou seus direitos do trabalho exigem uma assessoria jurídica dedicada, atenta a cada detalhe e verdadeiramente ética."
              >
                Por que confiar seu caso à{" "}
                <span className="italic text-[#162b21]">
                  Dra. Manuela Gonçalves?
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Manuela! Gostaria de uma avaliação para a minha situação jurídica."
                )}
                target="_blank"
                size="md"
                variant="emerald"
                className="rounded-lg shadow-sm"
              >
                <WhatsAppIcon size={16} /> Falar no WhatsApp
              </GlowingButton>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {/* Card 1: Informação Constante & Atendimento Empático */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group flex flex-col justify-between rounded-xl border border-[#e3ded5] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#162b21] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#162b21]/25 bg-[#e2ede6] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0f1d16]">
                      <HeartHandshake size={14} /> Atendimento Empático & Transparente
                    </span>
                    <span className="text-xs font-semibold text-[#162b21]">
                      Você Sempre Informado
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#0d1611] sm:text-[1.75rem]">
                    Você Mantido a Par de Cada Detalhe do Processo
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#2c3d33]">
                    Como atestam os depoimentos dos clientes no Google, nosso grande diferencial é aliar rigor técnico a uma comunicação direta e acolhedora. Você não fica sem resposta: cada andamento, prazo ou decisão é explicado sem rodeios nem termos complicados.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-[#0d1611]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#162b21]" />
                      <span>Comunicação direta pelo WhatsApp com suporte e esclarecimento ágil</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#162b21]" />
                      <span>Atualizações periódicas sobre perícias, despachos e sentenças</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#162b21]" />
                      <span>Transparência total sobre as chances reais, riscos e prazos da ação</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#e3ded5] pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Manuela! Gostaria de conversar para tirar dúvidas sobre meu processo."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#162b21]/25 bg-[#faf8f5] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#0d1611] transition-all hover:border-[#162b21] hover:bg-[#0d1611] hover:text-[#faf8f5]"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Conversar no WhatsApp com a Dra. Manuela
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>

              {/* Card 2: Especialista Estudiosa & Soluções Eficientes */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="group flex flex-col justify-between rounded-xl border border-[#e3ded5] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#162b21] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#c5a059]/40 bg-[#fdfbf6] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#5c3e0c]">
                      <Award size={14} /> Atuação Estudiosa & Atualizada
                    </span>
                    <span className="text-xs font-semibold text-[#162b21]">
                      Soluções Sob Medida
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#0d1611] sm:text-[1.75rem]">
                    Estratégia Técnica Personalizada para Cada Perfil de Causa
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#2c3d33]">
                    Cada cliente tem uma história particular e urgências que não podem esperar. Construímos teses jurídicas sólidas para garantir benefícios previdenciários no INSS, conduzir inventários rápidos em cartório ou defender seus direitos com total determinação.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-[#0d1611]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#162b21]" />
                      <span>Auditoria minuciosa de períodos rurais, especiais e contribuições no CNIS</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#162b21]" />
                      <span>Inventários extrajudiciais céleres diretamente em cartório para herdeiros</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#162b21]" />
                      <span>Cálculo preciso de verbas, adicionais e indenizações cíveis e do trabalho</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#e3ded5] pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Manuela! Gostaria de consultar sobre a melhor estratégia jurídica para o meu caso."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#162b21]/25 bg-[#faf8f5] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#0d1611] transition-all hover:border-[#162b21] hover:bg-[#0d1611] hover:text-[#faf8f5]"
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
        <section className="relative overflow-hidden border-t border-[#e3ded5] bg-[#faf8f5] py-20 text-[#0d1611] sm:py-24 lg:py-28">
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-[#162b21]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-[#c5a059]/12 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                light
                eyebrow="COMO ATUAMOS NO SEU CASO"
                description="Um método transparente, ético e resolutivo para analisar sua situação e aplicar a solução jurídica mais rápida e segura."
              >
                Três etapas claras para{" "}
                <span className="italic text-[#162b21]">
                  proteger seu benefício, seus direitos e sua família.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-[#e3ded5] bg-white p-6 font-serif text-base italic leading-7 text-[#0d1611] shadow-xs">
                &ldquo;Nosso compromisso é exercer uma advocacia estudiosa e humana, garantindo que cada cliente tenha seus direitos reconhecidos com respeito, agilidade e acompanhamento de verdade.&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-[#162b21]">
                  — Dra. Manuela Gonçalves · OAB/MG 167.889
                </footer>
              </blockquote>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-[#e3ded5]"
            >
              {[
                [
                  "01",
                  "Escuta Acolhedora & Diagnóstico Documental",
                  "Atendimento presencial na sede em Capinópolis ou via WhatsApp para examinar com minúcia seus documentos, extratos CNIS, certidões de óbito, contracheques ou laudos médicos.",
                ],
                [
                  "02",
                  "Definição da Rota Estratégica Mais Célere",
                  "Planejamento detalhado para verificar a viabilidade de procedimento extrajudicial rápido em cartório ou propositura de ação judicial contundente com pedido de urgência.",
                ],
                [
                  "03",
                  "Atuação Incisiva, Presença Contínua & Retorno Rápido",
                  "Protocolo imediato, acompanhamento rigoroso perante órgãos e tribunais, com informações regulares sobre cada andamento sem jargões desnecessários.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-semibold text-[#162b21]">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-[#0d1611]">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-[#2c3d33]">
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
          className="scroll-mt-24 border-t border-[#162b21]/20 bg-[#f4f0e6] py-20 text-[#0d1611] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                light
                eyebrow="PROVA SOCIAL VERIFICADA · GOOGLE MEU NEGÓCIO"
                description="Veja avaliações autênticas e espontâneas de clientes no Google sobre o comprometimento, a dedicação e os resultados da Dra. Manuela Gonçalves em Capinópolis - MG."
              >
                Avaliada com nota máxima 5,0 ★ com{" "}
                <span className="italic text-[#162b21]">
                  10 avaliações no Google pela competência, ética e excelência no atendimento.
                </span>
              </Heading>

              {/* Verified Google Badge Card */}
              <div className="flex flex-col gap-3 rounded-xl border border-[#e3ded5] bg-white p-5 shadow-xs sm:flex-row sm:items-center md:min-w-[340px]">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-lg border border-[#162b21]/20 bg-[#faf8f5] shadow-xs">
                  <GoogleIcon size={30} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-3xl font-bold leading-none text-[#0d1611]">
                      5,0
                    </span>
                    <div className="flex gap-0.5 text-[#c5a059]">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-[#c5a059] text-[#c5a059]"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#2c3d33]">
                    Manuela Gonçalves — Advogada
                  </p>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-[#162b21] transition-colors hover:text-[#0d1611]"
                  >
                    10 avaliações no Google (100% 5★) <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Client Reviews Grid */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              {clientReviews.map((review) => (
                <article
                  key={review.name}
                  className="group relative flex flex-col justify-between rounded-xl border border-[#e3ded5] bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#162b21] hover:shadow-md sm:p-8"
                >
                  <div>
                    {/* Header: Stars + Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-1 text-[#c5a059]">
                        {Array.from({ length: review.rating }, (_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-[#c5a059] text-[#c5a059]"
                          />
                        ))}
                      </div>
                      <span className="rounded-md border border-[#162b21]/20 bg-[#faf8f5] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#162b21] shadow-xs">
                        {review.badge}
                      </span>
                    </div>

                    {/* Review content */}
                    <p className="mt-5 text-[14px] italic leading-relaxed text-[#0d1611]">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  {/* Reviewer info */}
                  <div className="mt-6 flex items-center gap-3 border-t border-[#e3ded5] pt-4">
                    <div className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#162b21]/20 bg-[#f2f8f5] font-serif text-sm font-semibold text-[#162b21] shadow-xs">
                      {review.name.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-serif text-base font-semibold text-[#0d1611]">
                        {review.name}
                      </p>
                      <p className="text-[10px] uppercase tracking-wider text-[#586b61]">
                        {review.reviewerTag}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom Actions and Trust Tags */}
            <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-[#e3ded5] pt-8 sm:flex-row">
              <div className="flex flex-wrap items-center gap-2">
                {[
                  "Advogada em Capinópolis - MG",
                  "Atendimento no Triângulo Mineiro",
                  "Nota 5,0 ★ no Google (10 avaliações)",
                  "Direito Previdenciário & INSS",
                  "Inventário em Cartório Extrajudicial",
                  "Direito de Família & Sucessões",
                  "Direito Trabalhista Especializado",
                  "Atendimento Digital para Todo o Brasil",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#e3ded5] bg-white px-3.5 py-1.5 text-[11px] font-medium text-[#0d1611] shadow-xs"
                  >
                    <CheckCircle2 size={13} className="text-[#162b21]" />
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#162b21] transition-colors hover:text-[#0d1611]"
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

        {/* Contato & Localização da Sede em Capinópolis - MG */}
        <section
          id="contato"
          className="scroll-mt-24 border-t border-[#162b21]/20 bg-[#faf8f5] py-20 text-[#0d1611] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                light
                eyebrow="CONTATO & ATENDIMENTO EM CAPINÓPOLIS"
                description="Agende uma consulta presencial em nossa sede no Bairro Brasília em Capinópolis ou inicie seu atendimento imediatamente pelo WhatsApp para examinar seu caso com ética, discrição e agilidade."
              >
                Estamos prontos para{" "}
                <span className="italic text-[#162b21]">
                  escutar sua situação e proteger seus direitos.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Manuela! Gostaria de agendar um atendimento para análise do meu caso."
                  )}
                  target="_blank"
                  size="lg"
                  variant="emerald"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} /> Iniciar Conversa no WhatsApp
                </GlowingButton>
                <p className="text-[11px] leading-5 text-[#2c3d33]">
                  Telefone e WhatsApp direto:{" "}
                  <strong className="text-[#0d1611]">{PHONE_DISPLAY}</strong>
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-[#2c3d33]">
                <div className="flex items-start gap-3">
                  <Clock
                    size={16}
                    className="mt-0.5 shrink-0 text-[#162b21]"
                  />
                  <div>
                    <p className="font-semibold text-[#0d1611]">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-[#0d1611]">
                      Segunda a Sexta-feira a partir das 09:00 (09:00 às 18:00)
                    </p>
                    <p className="text-[11px] text-[#586b61]">
                      Atendimento presencial no Bairro Brasília em Capinópolis - MG e consultoria online em todo o Brasil
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#162b21]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-medium text-[#0d1611] transition-colors hover:text-[#162b21]"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#162b21]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#162b21] text-[#0d1611]"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#162b21]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="transition-colors hover:text-[#162b21] text-[#0d1611]"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#162b21]"
                  />
                  <div>
                    <span className="text-[#0d1611]">{ADDRESS_TEXT}</span>
                    <br />
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex items-center gap-1 font-semibold text-[#162b21] hover:underline"
                    >
                      Ver no Google Maps <ArrowUpRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Office & Storefront Card */}
            <div className="relative overflow-hidden rounded-xl border border-[#e3ded5] bg-white p-7 shadow-sm sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#0f1d16] via-[#162b21] to-[#c5a059]" />

              <div className="flex flex-col gap-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#162b21]">
                  Sede do Escritório em Capinópolis - MG
                </p>
                <div className="relative h-14 w-60 sm:h-16 sm:w-72">
                  <Image
                    src={LOGO_SRC}
                    alt="Dra. Manuela Gonçalves — Advogada"
                    fill
                    unoptimized
                    sizes="288px"
                    className="object-contain object-left"
                  />
                </div>
              </div>

              {/* Storefront photo */}
              <div className="relative mt-5 aspect-[16/9] w-full overflow-hidden rounded-lg border border-[#e3ded5] shadow-xs">
                <Image
                  src={FOTO_FACHADA_SRC}
                  alt="Fachada do Escritório da Dra. Manuela Gonçalves em Capinópolis - MG"
                  fill
                  unoptimized
                  className="object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 text-white">
                  <p className="text-xs font-semibold">Sede Própria no Bairro Brasília</p>
                  <p className="text-[10px] text-stone-200">Capinópolis - MG · Atendimento Presencial e Online</p>
                </div>
              </div>

              <address className="mt-6 max-w-md text-[14px] not-italic leading-7 text-[#2c3d33]">
                <strong className="font-semibold text-[#0d1611]">
                  Dra. Manuela Gonçalves — Advogada
                </strong>
                <br />
                {OAB_NUMBER} · Advocacia Especializada e Humanizada
                <br />
                Atendimento presencial em Capinópolis - MG e online para todo o Brasil
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-lg border border-[#e3ded5] bg-[#faf8f5] p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#162b21]">
                  Atendimento & Horários
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-[#2c3d33]">
                  <span>Segunda a Sexta</span>
                  <span className="text-right font-semibold text-[#0d1611]">
                    09:00 às 18:00
                  </span>
                  <span>Atendimento Presencial</span>
                  <span className="text-right font-medium text-[#162b21]">
                    Bairro Brasília · Capinópolis - MG
                  </span>
                  <span>Endereço</span>
                  <span className="text-right text-[#0d1611]">Rua 104, 1268 - Sala 3</span>
                  <span>Avaliações Google</span>
                  <span className="text-right font-semibold text-[#162b21]">5,0 ★ (10 avaliações)</span>
                  <span>Atendimento Digital</span>
                  <span className="text-right text-[#0d1611]">Todo o Brasil</span>
                </div>
              </div>

              <div className="my-7 h-px bg-[#e3ded5]" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-[#586b61]">
                  Atendimento humanizado, ético e com absoluto sigilo profissional
                </p>
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Manuela! Gostaria de agendar um atendimento no escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#162b21]/25 bg-[#f4f0e6] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#0d1611] transition-colors hover:border-[#162b21] hover:bg-[#0d1611] hover:text-[#faf8f5]"
                >
                  <WhatsAppIcon size={14} /> Falar no WhatsApp <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip */}
        <section className="border-t border-[#162b21]/20 bg-gradient-to-r from-[#f4f0e6] via-[#faf8f5] to-[#f4f0e6] px-5 py-14 text-[#0d1611] shadow-xs sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#162b21]">
                <Sparkles size={13} /> DRA. MANUELA GONÇALVES — ADVOGADA · DEFESA ESTRATÉGICA E HUMANIZADA
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-[#0d1611] sm:text-4xl">
                Precisa de uma advogada competente, atenciosa e dedicada para defender seus direitos com total compromisso?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dra. Manuela! Gostaria de uma avaliação para a minha situação jurídica."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-lg bg-gradient-to-r from-[#0f1d16] via-[#162b21] to-[#0f1d16] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-md transition-all hover:-translate-y-0.5 hover:brightness-105 hover:shadow-lg"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp{" "}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* Footer - Elegant Light Luxury */}
        <footer className="border-t border-[#e3ded5] bg-[#f4f0e6] px-5 py-14 text-[#0d1611] sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <a
                href="#inicio"
                aria-label="Dra. Manuela Gonçalves — Advogada"
                className="inline-block transition-transform hover:scale-[1.01]"
              >
                <div className="relative h-16 w-60 sm:h-20 sm:w-72">
                  <Image
                    src={LOGO_SRC}
                    alt="Dra. Manuela Gonçalves — Advogada"
                    fill
                    unoptimized
                    sizes="288px"
                    className="object-contain object-left"
                  />
                </div>
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-[#586b61]">
                ⚖️ Advocacia especializada com defesa estratégica e humanizada. Atuação em Direito Previdenciário (INSS), Família & Sucessões (Inventários), Trabalhista e Cível em Capinópolis - MG, Triângulo Mineiro e em todo o Brasil.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-[#162b21]">
                Dra. Manuela Gonçalves — Advogada · OAB/MG 167.889
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#162b21]">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-[#586b61]">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  A Advogada
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
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#162b21]">
                Contato & Atendimento
              </h2>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-[#586b61]">
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Manuela! Gostaria de tirar dúvidas com o escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 font-medium text-[#0d1611]"
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
                <p className="inline-flex items-center gap-2 pt-1 text-[11px] text-[#162b21]">
                  <Clock size={14} className="shrink-0" /> Seg a Sex: a partir das 09:00
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-[#e3ded5] pt-6 text-[10px] text-stone-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} DRA. MANUELA GONÇALVES — ADVOGADA (OAB/MG 167.889). Todos os direitos reservados.
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
              "Olá, Dra. Manuela! Gostaria de consultar sobre meu caso e tirar dúvidas pelo WhatsApp."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Dra. Manuela Gonçalves"
            className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          >
            <WhatsAppIcon size={28} />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-[#0d1611] border border-[#162b21]/30 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg transition-opacity group-hover:block">
              Falar com Dra. Manuela Gonçalves
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
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-xl border border-[#e3ded5] bg-white p-7 shadow-2xl sm:max-w-xl sm:rounded-xl sm:p-10 text-[#0d1611]"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-[#e3ded5] bg-[#faf8f5] text-[#0d1611] transition-colors hover:border-[#162b21] hover:text-[#162b21]"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-3 pr-12">
                  <div className="relative size-10 shrink-0 overflow-hidden rounded-lg border border-[#162b21]/20 bg-[#faf8f5] p-1 shadow-xs">
                    <Image
                      src={LOGO_SYMBOL_SRC}
                      alt="Símbolo MG Dra. Manuela Gonçalves"
                      fill
                      sizes="40px"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="eyebrow-light">ÁREA DE ATUAÇÃO</p>
                    <p className="text-[10px] font-semibold tracking-wider text-[#162b21] uppercase">
                      {LAWYER_NAME} · {OAB_NUMBER}
                    </p>
                  </div>
                </div>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-serif text-3xl leading-tight text-[#0d1611] sm:text-4xl"
                >
                  {activeArea.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-[#2c3d33]">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-[#e3ded5] pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#162b21]">
                    Demandas e Pedidos Atendidos pelo Escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-[#1e293b]"
                      >
                        <span className="size-2 shrink-0 rounded-full bg-[#162b21]" />
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
                    variant="emerald"
                    className="rounded-lg shadow-md"
                  >
                    <WhatsAppIcon size={16} /> Consultar sobre esta demanda
                  </GlowingButton>
                  <button
                    type="button"
                    onClick={() => setActiveArea(null)}
                    className="px-5 py-3 text-xs font-semibold text-stone-500 transition-colors hover:text-[#0d1611]"
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
