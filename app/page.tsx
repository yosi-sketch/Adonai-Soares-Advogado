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
  HeartHandshake,
  Mail,
  MapPin,
  Menu,
  Phone,
  Scale,
  Sparkles,
  Star,
  Users,
  Briefcase,
  ShieldCheck,
  Gavel,
  BookOpen,
  Home as HomeIcon,
  ScrollText,
  UserCheck,
  Building2,
  X,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5538998126389";
const PHONE_DISPLAY = "(38) 99812-6389";
const EMAIL_CONTACT = "contato@adonaisoares.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/adonaisoares.adv/";
const INSTAGRAM_HANDLE = "@adonaisoares.adv";
const LAWYER_NAME = "Dr. Adonai Soares de Moura";
const LAWYER_TITLE = "Advogado & Consultor Jurídico | OAB/MG 187.717";
const FIRM_NAME = "AS Advocacia e Consultoria Jurídica";

const ADDRESS_TEXT = "R. Dr. Antônio Alvarenga, 371 - Centro, Corinto - MG, 39200-000";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Adonai+Soares+Advogado+R+Dr+Antonio+Alvarenga+371+Centro+Corinto+MG";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Adonai+Soares+%E2%80%94+Advogado%0ACorinto+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";

const LOGO_SRC = "/logo.png";
const LOGO_SYMBOL_SRC = "/logo-symbol.png";
const FOTO_HERO_SRC = "/adonai-soares-team.jpg";
const FOTO_SOBRE_SRC = "/adonai-soares-office.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dr. Adonai Soares! Gostaria de agendar uma consulta jurídica com seu escritório.";
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
    id: "direito-sucessorio-inventarios",
    title: "Direito Sucessório & Inventários",
    icon: ScrollText,
    tag: "Inventário Judicial & Extrajudicial em Cartório · Partilha de Bens · Testamento",
    summary:
      "Resolução ágil, segura e harmoniosa de inventários e partilhas entre herdeiros. Atuação jurídica firme para resguardar o patrimônio da família e evitar desgastes desnecessários.",
    details:
      "O falecimento de um familiar impõe momentos delicados; a regularização patrimonial não pode se tornar um fardo. O Dr. Adonai Soares atua com comprovado domínio em inventários judiciais e extrajudiciais (direto em cartório), partilha consensual ou litigiosa de bens, cessão de direitos hereditários, planejamento sucessório e testamentos, garantindo velocidade, economia tributária (ITCMD) e segurança jurídica para todos os herdeiros.",
    topics: [
      "Inventários extrajudiciais em cartório de notas com máxima celeridade e menor custo",
      "Inventários judiciais e resolução de partilhas complexas entre múltiplos herdeiros",
      "Planejamento sucessório estratégico, doações com reserva de usufruto e testamentos",
      "Economia e planejamento tributário na apuração e recolhimento do ITCMD",
      "Alvarás judiciais para liberação ágil de saldos bancários, FGTS, PIS e veículos",
      "Postura conciliatória e humanizada para preservar a paz e o patrimônio da família",
    ],
    whatsAppText:
      "Olá, Dr. Adonai Soares! Gostaria de uma consultoria especializada sobre inventário e partilha de bens.",
  },
  {
    id: "direito-imobiliario-regularizacao",
    title: "Direito Imobiliário & Regularização de Imóveis",
    icon: HomeIcon,
    tag: "Usucapião Judicial & Extrajudicial · Escrituras · Contratos Imobiliários · Posse",
    summary:
      "Conquiste a escritura definitiva e o registro de sua propriedade. Regularização fundiária urbana e rural, usucapião, reintegração de posse e contratos blindados.",
    details:
      "Imóvel sem escritura ou registro não confere segurança jurídica plena e sofre pesada desvalorização. O Dr. Adonai Soares possui grande prestígio na comarca de Corinto e região na condução de ações de Usucapião (judicial e em cartório), regularização de escrituras, contratos de gaveta, desmembramentos, defesas possessórias e assessoria na compra e venda segura de imóveis urbanos e rurais.",
    topics: [
      "Ações de Usucapião Judicial e Usucapião Extrajudicial perante o Cartório de Registro de Imóveis",
      "Regularização completa de escrituras públicas, certidões de ônus, matrículas e averbações",
      "Assessoria jurídica preventiva e due diligence na compra e venda de casas, lotes e fazendas",
      "Ações possessórias: reintegração de posse, manutenção de posse e interdito proibitório",
      "Elaboração e revisão minuciosa de contratos de locação residencial, comercial e arrendamento rural",
      "Ações de despejo, rescisões contratuais, cobrança de aluguéis e renovatórias",
    ],
    whatsAppText:
      "Olá, Dr. Adonai Soares! Preciso de assessoria jurídica para regularizar um imóvel ou dar entrada em usucapião.",
  },
  {
    id: "direito-de-familia",
    title: "Direito de Família & Relações Parentais",
    icon: HeartHandshake,
    tag: "Divórcio Consensual & Litigioso · Pensão Alimentícia · Guarda · Partilha",
    summary:
      "Atendimento acolhedor, discreto e altamente técnico para momentos cruciais da vida familiar. Protegendo seus direitos e o bem-estar de seus filhos com serenidade.",
    details:
      "Conflitos familiares demandam sensibilidade humana ímpar aliada a uma postura técnica inabalável. O escritório AS Advocacia conduz divórcios em cartório e judiciais, reconhecimento e dissolução de união estável, partilha equilibrada de bens, ações de fixação, revisão ou execução de pensão alimentícia, além de acordos de guarda e convivência parental.",
    topics: [
      "Divórcios em cartório de notas (rápidos, econômicos e sem burocracia para acordos)",
      "Divórcios judiciais litigiosos com blindagem patrimonial e partilha justa de bens",
      "Ações de alimentos: fixação, redução, exoneração e execução urgente sob pena de prisão",
      "Regulamentação de guarda compartilhada, plano de convivência e proteção contra alienação parental",
      "Reconhecimento e dissolução de união estável com partilha de patrimônio acumulado",
      "Pactos antenupciais, contratos de convivência e consultoria patrimonial familiar",
    ],
    whatsAppText:
      "Olá, Dr. Adonai Soares! Gostaria de consultar sobre divórcio, pensão alimentícia ou direitos de família.",
  },
  {
    id: "direito-civil-contratos",
    title: "Direito Civil & Contratos Estratégicos",
    icon: Scale,
    tag: "Contratos · Execuções & Cobranças · Indenizações · Consultoria Jurídica",
    summary:
      "Soluções jurídicas práticas e diretas para blindar negócios, resguardar acordos e recuperar créditos com agilidade e respaldo legal irrefutável.",
    details:
      "Nas relações civis e contratuais, clareza e firmeza técnica evitam prejuízos irreparáveis. O Dr. Adonai Soares elabora e audita contratos personalizados para pessoas físicas e empresas, ajuíza execuções de dívidas, ações de cobrança, indenizações por danos morais e materiais, além de consultoria preventiva para produtores, comerciantes e famílias.",
    topics: [
      "Elaboração, análise e revisão de instrumentos contratuais civis, comerciais e de serviços",
      "Ações de cobrança e execução de títulos de crédito (cheques, notas promissórias, contratos)",
      "Ações indenizatórias por danos morais, danos materiais e prejuízos comerciais",
      "Assessoria consultiva contínua para empresas locais, produtores e empresários",
      "Notificações extrajudiciais estratégicas para solução rápida e amigável de controvérsias",
      "Defesa processual robusta em ações judiciais cíveis e renegociação técnica de passivos",
    ],
    whatsAppText:
      "Olá, Dr. Adonai Soares! Preciso de auxílio jurídico em contratos, cobrança ou matéria de Direito Civil.",
  },
  {
    id: "direito-trabalhista-consultoria",
    title: "Direito Trabalhista & Consultoria",
    icon: Briefcase,
    tag: "Defesa dos Trabalhadores · Verbas Rescisórias · Assessoria Empresarial Preventiva",
    summary:
      "Atuação equilibrada e combativa nas relações de trabalho. Garantia dos direitos fundamentais dos empregados e consultoria preventiva para empresas.",
    details:
      "O escritório AS Advocacia defende os direitos do trabalhador contra abusos patronais — como horas extras não pagas, adicionais de insalubridade e periculosidade, rescisões indiretas e acidentes de trabalho —, ao mesmo tempo em que orienta empregadores para a conformidade legal e mitigação de passivos trabalhistas.",
    topics: [
      "Reclamações trabalhistas para cobrança integral de verbas rescisórias, aviso prévio e FGTS + 40%",
      "Cálculo e pedido de horas extras, intervalos não concedidos e trabalho noturno",
      "Reconhecimento de adicionais de insalubridade, periculosidade e acúmulo de funções",
      "Rescisão indireta do contrato de trabalho por descumprimento de deveres pelo empregador",
      "Indenizações por acidentes de trabalho, doenças ocupacionais e garantia de estabilidade",
      "Consultoria preventiva para empresas, adequação de contratos e prevenção de litígios",
    ],
    whatsAppText:
      "Olá, Dr. Adonai Soares! Gostaria de consultar sobre uma questão trabalhista ou rescisão.",
  },
  {
    id: "direito-previdenciario-inss",
    title: "Direito Previdenciário (INSS)",
    icon: UserCheck,
    tag: "Aposentadorias · BPC/LOAS · Auxílio-Doença · Revisão de Benefícios",
    summary:
      "Conquiste o benefício que é seu por direito. Planejamento previdenciário, aposentadoria urbana ou rural e concessão judicial de benefícios negados pelo INSS.",
    details:
      "Diante das mudanças na previdência, obter o melhor benefício requer estratégia e análise minuciosa de tempo e contribuições. Atuamos administrativamente no INSS e na via judicial para concessão de aposentadorias, auxílio por incapacidade (auxílio-doença), aposentadoria por invalidez, pensão por morte e benefício assistencial BPC/LOAS.",
    topics: [
      "Planejamento previdenciário completo para calcular e antecipar o melhor valor de aposentadoria",
      "Aposentadoria por idade urbana e rural, tempo de contribuição e regras de transição",
      "Benefício de Prestação Continuada (BPC/LOAS) para idosos acima de 65 anos e pessoas com deficiência",
      "Ações judiciais para concessão de auxílio-doença e aposentadoria por invalidez negados pelo INSS",
      "Pensão por morte para dependentes de segurados falecidos",
      "Ações revisionais de cálculo e cobrança de valores atrasados retroativos",
    ],
    whatsAppText:
      "Olá, Dr. Adonai Soares! Gostaria de consultar sobre aposentadoria ou benefício do INSS.",
  },
  {
    id: "defesa-criminal-atendimento-agil",
    title: "Direito Penal & Defesa Técnica",
    icon: Gavel,
    tag: "Atendimento em Flagrantes · Audiência de Custódia · Inquérito Policial",
    summary:
      "Prontidão ininterrupta e defesa técnica combativa para resguardar a liberdade e as garantias constitucionais em delegacias e juizados.",
    details:
      "Em matéria penal, cada hora é decisiva. O Dr. Adonai Soares e sua equipe atuam com dedicação integral em prisões em flagrante, acompanhamento em interrogatórios em delegacias, audiências de custódia, pedidos de liberdade provisória, revogação de preventiva e defesa em processos criminais.",
    topics: [
      "Atendimento presencial ágil em delegacias de polícia e plantões judiciários",
      "Acompanhamento em interrogatórios policiais para resguardar o direito ao silêncio",
      "Atuação incisiva na Audiência de Custódia com pedido de liberdade provisória",
      "Requerimento de relaxamento de prisão ilegal ou substituição por cautelares",
      "Impetração ágil de Habeas Corpus com pedido liminar perante o TJMG",
      "Defesa técnica estratégica durante toda a instrução da ação penal",
    ],
    whatsAppText:
      "Olá, Dr. Adonai Soares! Preciso de atendimento urgente para uma demanda penal ou prisão em flagrante.",
  },
];

const clientReviews = [
  {
    name: "Felipe Marques",
    reviewerTag: "1 avaliação no Google",
    badge: "Atendimento Humanizado & Conhecimento",
    rating: 5,
    content:
      "Ótimo advogado, Dr. Adonai! Sempre me acolheu com respeito, atenção e dedicação, esclarecendo todas as minhas dúvidas de forma clara e paciente. Profissional extremamente competente, transmite segurança e demonstra profundo conhecimento jurídico. Além disso, o atendimento é humanizado e eficiente, tornando todo o processo muito mais tranquilo. O escritório tem ótima localização, e ele é sempre pontual e disponível para ajudar. Recomendo com total confiança!",
  },
  {
    name: "Ana Maciel",
    reviewerTag: "1 avaliação no Google",
    badge: "Competência & Ética Irrepreensível",
    rating: 5,
    content:
      "Gostaria de expressar minha sincera admiração pelo trabalho do Dr Adonai . Um profissional de notável competência, postura ética irrepreensível e profundo conhecimento jurídico. Demonstrou, ao longo de todo o processo, comprometimento, clareza nas orientações e uma dedicação que inspira confiança. Sinto-me extremamente grata pelo acolhimento, pela condução segura do meu caso e pela excelência no atendimento. Sem dúvida, um advogado que honra a advocacia com seriedade, empatia e respeito ao cliente. Recomendo com absoluta confiança.",
  },
  {
    name: "Carlos Daniel",
    reviewerTag: "2 avaliações no Google",
    badge: "Especialista em Sucessões & Imóveis",
    rating: 5,
    content:
      "Profissional sério e atencioso, com grande domínio em áreas essenciais do Direito, como Sucessões e Direito Real. Acompanho sua atuação com firmeza e dedicação em inventários, partilhas de bens entre herdeiros e também em casos que envolvem a regularização de imóveis, como usucapião e escrituras. Explica com clareza, orienta com segurança e resolve com responsabilidade. Recomendo a quem busca um profissional que compreenda não apenas a lei, mas também a realidade vivida por aqueles que dela dependem.",
  },
  {
    name: "Laura Oliveira",
    reviewerTag: "Local Guide · 17 avaliações · 11 fotos",
    badge: "Família, Inventário & Imóveis",
    rating: 5,
    content:
      "Adonai é um profissional altamente capacitado no que diz respeito a direito de família, inventário especialmente e imóveis. Atento, atualizado e atencioso sempre dando retorno ao cliente.",
  },
  {
    name: "Vinicius Santos",
    reviewerTag: "11 avaliações · 8 fotos",
    badge: "Advogado Civil que Resolve",
    rating: 5,
    content:
      "Advogado civil em Corinto que realmente resolve. Já precisei de ajuda com contratos e o Dr. Adonai foi direto, claro e muito profissional.",
  },
  {
    name: "Raíssa Caroline",
    reviewerTag: "1 avaliação no Google",
    badge: "Comprometimento & Clareza",
    rating: 5,
    content:
      "Excelente profissional! Sempre me atendeu com a maior atenção e comprometimento. Sempre muito prestativo, esclareceu todas as minhas dúvidas com clareza e conduziu tudo com muita responsabilidade e profissionalismo. Recomendo o trabalho sem dúvidas!",
  },
  {
    name: "Fernanda Da silva",
    reviewerTag: "1 avaliação no Google",
    badge: "Resolução Célere de Inventário",
    rating: 5,
    content:
      "O Dr Adonai é excelente profissional, precisei resolver o inventário, onde ele resolveu com muita dedicação e competência. Sem duvida, o melhor!",
  },
  {
    name: "Anna Paula Souza Rodrigues",
    reviewerTag: "2 avaliações no Google",
    badge: "Equipe Excelente & Transparente",
    rating: 5,
    content:
      "O escritório possui uma equipe excelente! O advogado Adonai Soares é um profissional muito dedicado, competente e transparente! Recomendo! ✨",
  },
  {
    name: "Josimara Moura",
    reviewerTag: "1 avaliação no Google",
    badge: "Agilidade & Compromisso",
    rating: 5,
    content:
      "Si precisam de um advogado que resolve o problema , é ele Adonai Soares. Esclarece dúvidas frequentes e soluciona situações com muita agilidade e compromisso.",
  },
  {
    name: "Lucas CAmpos",
    reviewerTag: "2 avaliações no Google",
    badge: "Causa Vencida em Corinto",
    rating: 5,
    content:
      "Excelente advogado em Corinto, me ajudou muito na minha causa, graças a ele deu tudo certo.",
  },
  {
    name: "Isabella Gonçalves",
    reviewerTag: "1 avaliação no Google",
    badge: "Qualificação & Firmeza",
    rating: 5,
    content:
      "Advogado muito qualificado, trabalho com o melhor!!",
  },
  {
    name: "Cibele Amancio",
    reviewerTag: "1 avaliação no Google",
    badge: "Atencioso & Prestativo",
    rating: 5,
    content:
      "Excelente trabalho, muito atencioso e prestativo, recomendo muito! 🙏🏻",
  },
];

function Heading({
  eyebrow,
  children,
  description,
  theme = "dark",
  light,
}: {
  eyebrow: string;
  children: React.ReactNode;
  description?: string;
  theme?: "dark" | "light";
  light?: boolean;
}) {
  const isLight = theme === "light";
  return (
    <div>
      <p className={isLight ? "eyebrow-dark" : "eyebrow-light"}>{eyebrow}</p>
      <h2
        className={`mt-4 font-serif text-3xl leading-[1.14] tracking-[-0.02em] sm:text-4xl lg:text-[3.15rem] ${
          isLight ? "text-[#1a1713]" : "text-[#fbfaf8]"
        }`}
      >
        {children}
      </h2>
      {description && (
        <p
          className={`mt-4 text-[15px] leading-7 ${
            isLight ? "text-[#4a443c]" : "text-[#d4cdc1]"
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
      <main className="overflow-hidden bg-[#0b0a08] text-[#fbfaf8] selection:bg-[#c5a882] selection:text-[#0b0a08]">
        {/* Navigation Bar - Refined Metallic Champagne Gold & Obsidian Luxury */}
        <header className="sticky top-0 z-40 border-b border-[#c5a882]/25 bg-[#0b0a08]/95 backdrop-blur-xl shadow-card">
          <div className="mx-auto flex h-[98px] max-w-7xl items-center justify-between gap-6 px-5 sm:h-[108px] lg:h-[114px] xl:h-[118px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Adonai Soares — Advocacia e Consultoria Jurídica - Início"
              onClick={closeMenu}
              className="flex shrink-0 items-center transition-opacity hover:opacity-95"
            >
              <div className="relative h-[68px] w-[260px] sm:h-[80px] sm:w-[320px] lg:h-[90px] lg:w-[370px] xl:h-[94px] xl:w-[390px]">
                <Image
                  src={LOGO_SRC}
                  alt="Adonai Soares de Moura — Advocacia e Consultoria Jurídica"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 640px) 260px, (max-width: 1024px) 370px, 390px"
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
                O Advogado & Equipe
              </a>
              <a className="nav-link" href="#atuacao">
                Áreas de Atuação
              </a>
              <a className="nav-link" href="#diferenciais">
                Diferenciais
              </a>
              <a className="nav-link" href="#avaliacoes">
                Avaliações (4,8 ★)
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
                aria-label="Avaliações do Dr. Adonai Soares no Google"
                className="grid size-10 place-items-center rounded-lg border border-[#c5a882]/30 bg-[#12100d] text-[#d4cdc1] transition-all hover:border-[#dfcaa9] hover:bg-[#1a1713] hover:text-white shadow-xs"
                title="4,8 ★ no Google (25 avaliações)"
              >
                <GoogleIcon size={16} />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram do Dr. Adonai Soares"
                className="grid size-10 place-items-center rounded-lg border border-[#c5a882]/30 bg-[#12100d] text-[#d4cdc1] transition-all hover:border-[#dfcaa9] hover:bg-[#1a1713] hover:text-white shadow-xs"
                title={`Instagram ${INSTAGRAM_HANDLE}`}
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                aria-label="Ligar para o Dr. Adonai Soares"
                className="grid size-10 place-items-center rounded-lg border border-[#c5a882]/30 bg-[#12100d] text-[#d4cdc1] transition-all hover:border-[#dfcaa9] hover:bg-[#1a1713] hover:text-white shadow-xs"
                title={`Ligar: ${PHONE_DISPLAY}`}
              >
                <Phone size={16} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Dr. Adonai Soares"
                className="grid size-10 place-items-center rounded-lg border border-[#c5a882]/30 bg-[#12100d] text-[#d4cdc1] transition-all hover:border-[#dfcaa9] hover:bg-[#1a1713] hover:text-white shadow-xs"
                title="Atendimento WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dr. Adonai Soares! Gostaria de agendar uma consulta jurídica no escritório."
                )}
                target="_blank"
                size="sm"
                variant="gold"
                className="rounded-lg shadow-sm"
              >
                Agendar Consulta <ArrowUpRight size={14} className="text-[#0b0a08]" />
              </GlowingButton>
            </div>

            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="grid size-11 place-items-center rounded-lg border border-[#c5a882]/40 bg-[#12100d] text-[#fbfaf8] lg:hidden shadow-xs"
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
                className="overflow-hidden border-t border-[#c5a882]/25 bg-[#12100d] px-6 text-[#fbfaf8] lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["O Advogado & Equipe", "#sobre"],
                    ["Áreas de Atuação", "#atuacao"],
                    ["Diferenciais", "#diferenciais"],
                    ["Avaliações (4,8 ★)", "#avaliacoes"],
                    ["Contato & Sede", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm font-medium text-[#d4cdc1] hover:text-[#dfcaa9]"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#f4ebd6]/85 bg-gradient-to-r from-[#9e7e57] via-[#dfcaa9] to-[#9e7e57] px-5 py-3.5 text-xs font-black uppercase tracking-[0.14em] text-[#0b0a08] shadow-[0_4px_16px_rgba(197,168,130,0.4),inset_0_1px_1px_rgba(255,255,255,0.85)] transition-all hover:brightness-105 active:translate-y-0"
                      href={getWhatsAppUrl(
                        "Olá, Dr. Adonai Soares! Gostaria de atendimento com seu escritório."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} className="text-[#0b0a08]" /> WhatsApp: {PHONE_DISPLAY}
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#c5a882]/40 bg-[#1a1713] px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-[#fbfaf8] transition-all hover:border-[#dfcaa9]"
                      href={GOOGLE_SEARCH_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <GoogleIcon size={15} /> 4,8 ★ no Google (25 avaliações)
                    </a>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section - Champagne Gold Aura & Warm Obsidian Luxury */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-[#c5a882]/25 bg-gradient-to-b from-[#0b0a08] via-[#12100d] to-[#0b0a08]"
        >
          {/* Subtle champagne and bronze ambient lighting aura */}
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[36rem] rounded-full bg-[#c5a882]/12 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[28rem] rounded-full bg-[#dfcaa9]/8 blur-3xl" />

          <div className="mx-auto grid min-h-[640px] max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:min-h-[700px] lg:grid-cols-[1.14fr_0.86fr] lg:gap-12 lg:px-12 lg:py-18 xl:min-h-[740px] xl:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-4"
            >
              <motion.div
                variants={reveal}
                className="mb-5 inline-flex items-center gap-2 rounded-lg border border-[#c5a882]/50 bg-[#1a1713]/85 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#dfcaa9] shadow-xs backdrop-blur-md"
              >
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c5a882] opacity-75"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-[#f4ebd6]"></span>
                </span>
                <span>AS ADVOCACIA & CONSULTORIA JURÍDICA · CORINTO - MG</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-[#fbfaf8] sm:text-[2.6rem] sm:leading-[1.12] lg:text-[3.25rem] xl:text-[3.45rem]"
              >
                Segurança jurídica, clareza e dedicação para proteger seu patrimônio e{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#dfcaa9] via-[#c5a882] to-[#fbf7ee]">
                  garantir seus direitos com excelência.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-5 max-w-xl text-[15px] leading-7 text-[#d4cdc1] sm:text-base sm:leading-8"
              >
                Sob a liderança do <strong className="font-semibold text-white">Dr. Adonai Soares de Moura (OAB/MG 187.717)</strong>, nosso escritório é referência em atuação resolutiva em <strong className="font-semibold text-white">Direito Imobiliário, Regularização de Imóveis, Inventários & Sucessões, Direito de Família, Contratos Civis e Assessoria Estratégica</strong>. Atendimento humanizado, transparente e ágil com sede física no Centro de Corinto - MG e atuação em todo o Brasil.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-col items-start gap-3.5 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dr. Adonai Soares! Gostaria de conversar para analisar uma demanda jurídica."
                  )}
                  target="_blank"
                  size="md"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} className="text-[#0b0a08]" /> Iniciar Atendimento no WhatsApp
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 rounded-lg border border-[#c5a882]/45 bg-[#12100d]/90 backdrop-blur-md px-5 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-[#fbfaf8] shadow-[0_4px_16px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)] transition-all hover:border-[#f4ebd6] hover:bg-[#1a1713] hover:text-white"
                >
                  Conhecer Nossas Especialidades{" "}
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1 text-[#dfcaa9]"
                  />
                </a>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[#c5a882]/25 pt-5 text-xs text-[#9e978d]"
              >
                <a
                  href={GOOGLE_SEARCH_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-[#fbfaf8] transition-colors hover:text-[#dfcaa9]"
                >
                  <Star size={14} className="fill-[#c5a882] text-[#c5a882]" /> 4,8 ★ no Google (25 avaliações)
                </a>
                <span className="inline-flex items-center gap-1.5 font-medium text-[#fbfaf8]">
                  <Clock size={14} className="text-[#c5a882]" /> Aberto 24 Horas · Agilidade
                </span>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-[#fbfaf8] transition-colors hover:text-[#dfcaa9]"
                >
                  <MapPin size={14} className="text-[#c5a882]" /> R. Dr. Antônio Alvarenga, 371 · Corinto - MG
                </a>
              </motion.div>
            </motion.div>

            {/* Hero Visual Presentation - Dr. Adonai Soares & Legal Team */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.95,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-[420px] sm:max-w-[450px] lg:max-w-[480px] xl:max-w-[500px] lg:ml-auto lg:mr-0"
            >
              <div className="relative aspect-[4/4.9] overflow-hidden rounded-2xl border-2 border-[#c5a882]/50 bg-[#12100d] shadow-2xl ring-1 ring-[#dfcaa9]/35">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dr. Adonai Soares de Moura e Equipe — AS Advocacia e Consultoria Jurídica"
                  fill
                  priority
                  loading="eager"
                  unoptimized
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0b0a08] via-[#0b0a08]/85 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3 text-white sm:bottom-6 sm:left-6 sm:right-6">
                  <div>
                    <p className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-white">
                      Dr. Adonai Soares
                    </p>
                    <p className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-[#dfcaa9]">
                      Advogado & Consultor Jurídico · OAB/MG 187.717
                    </p>
                    <p className="mt-0.5 text-[11px] text-stone-300">
                      R. Dr. Antônio Alvarenga, 371 · Centro, Corinto - MG
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-[#c5a882]/60 bg-[#0b0a08]/85 text-[#dfcaa9] backdrop-blur-sm shadow-md">
                    <Scale size={18} />
                  </span>
                </div>
              </div>

              {/* Floating authority badge */}
              <div className="absolute -left-3 top-4 z-10 rounded-lg border border-[#c5a882]/50 bg-[#0b0a08]/90 px-3 py-1.5 text-[9px] sm:text-[10px] font-bold tracking-[0.14em] text-[#dfcaa9] shadow-md backdrop-blur-md sm:-left-4">
                SEDE PRÓPRIA EM CORINTO · EQUIPE ESPECIALIZADA
              </div>

              {/* Floating Google 4.8 Star Rating */}
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="group absolute -bottom-4 -right-2 z-10 rounded-xl border border-[#c5a882]/60 bg-[#12100d]/95 p-3 shadow-xl backdrop-blur-md transition-all hover:border-[#dfcaa9] hover:bg-[#1a1713] sm:-right-4"
              >
                <div className="flex items-center gap-2">
                  <GoogleIcon size={16} />
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-0.5 text-[#c5a882]">
                      <Star size={12} className="fill-[#c5a882] text-[#c5a882]" />
                    </div>
                    <span className="font-serif text-sm font-bold text-white">
                      4,8
                    </span>
                    <span className="text-[9px] uppercase tracking-wider text-[#dfcaa9]">
                      / 5,0
                    </span>
                  </div>
                </div>
                <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#d4cdc1]">
                  25 Avaliações no Google (Destaque Máximo)
                </p>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner - Authority Metrics */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-[#c5a882]/25 bg-[#12100d]"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              [
                "4,8 ★ no Google",
                "nota excelente com 25 avaliações comprovando agilidade, clareza e dedicação",
              ],
              [
                "Atendimento Ágil",
                "prontidão ininterrupta e respostas imediatas para proteger seus direitos",
              ],
              [
                "Cuidado Humanizado",
                "escuta atenta, acolhimento sincero e paciência para esclarecer todas as dúvidas",
              ],
              [
                "Corinto • MG • Brasil",
                "escritório executivo no Centro de Corinto e atuação estratégica em todo o país",
              ],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-[#c5a882]/25"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-xl font-semibold text-[#dfcaa9] sm:text-2xl">
                  {value}
                </span>
                <span className="max-w-[165px] text-[11px] leading-5 text-[#d4cdc1]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre o Dr. Adonai Soares & Equipe - Dobra Clara (Alabastro & Nogueira Nobre) */}
        <section
          id="sobre"
          className="scroll-mt-24 border-y border-[#c5a882]/30 bg-[#f8f5ee] py-20 text-[#1a1713] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
            {/* Visual presentation - Office Reception Photo with Logo Wall & Wood Slats */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[490px]"
            >
              <div className="relative aspect-[4/4.9] overflow-hidden rounded-2xl border-2 border-[#c5a882]/45 bg-white shadow-2xl ring-1 ring-[#c5a882]/20">
                <Image
                  src={FOTO_SOBRE_SRC}
                  alt="Espaço Executivo AS Advocacia e Consultoria Jurídica — Dr. Adonai Soares"
                  fill
                  unoptimized
                  className="object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#1a1713]/80 to-transparent" />
              </div>

              {/* Authority badge card */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-[#c5a882]/40 bg-white/95 backdrop-blur-md px-5 py-4 shadow-xl sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-[#866843]">
                  <Sparkles size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#866843]">
                    Excelência Jurídica & Modernidade
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-[#1a1713]">
                  AS Advocacia e Consultoria Jurídica
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-[#866843]">
                  Dr. Adonai Soares de Moura · OAB/MG 187.717
                </p>
                <p className="mt-1 text-[11px] leading-4 text-[#6b6257]">
                  R. Dr. Antônio Alvarenga, 371 · Centro, Corinto - MG
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-[#c5a882]/45 sm:-left-7 sm:-top-7 sm:size-32" />
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
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#c5a882]/40 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#866843] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#866843]" />
                <span>SOBRE O DR. ADONAI SOARES & ESCRITÓRIO</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-[#1a1713] sm:text-4xl lg:text-[3.25rem]"
              >
                Uma advocacia pautada na competência técnica, na postura ética e no{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#866843] via-[#b5956f] to-[#5f462a]">
                  acolhimento dedicado a cada cliente.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-[#4a443c]"
              >
                Com escritório moderno e estruturado na Rua Dr. Antônio Alvarenga, no Centro de{" "}
                <strong className="font-bold text-[#1a1713]">Corinto - MG</strong>, a atuação do{" "}
                <strong className="font-bold text-[#1a1713]">Dr. Adonai Soares de Moura (OAB/MG 187.717)</strong> se destaca pela capacidade de traduzir o Direito em soluções práticas, rápidas e seguras para pessoas, famílias e empresas.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-[#4a443c]"
              >
                Amparado por uma equipe multidisciplinar qualificada, o Dr. Adonai conquistou expressivo reconhecimento com <strong className="font-bold text-[#1a1713]">nota 4,8 ★ em 25 avaliações no Google</strong>, sendo amplamente elogiado pela agilidade na resolução de inventários, segurança na regularização de imóveis, clareza nas orientações e pontualidade exemplar em cada etapa processual.
              </motion.p>

              {/* Client Quote Card from real Google Reviews */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-xl border border-[#c5a882]/35 bg-white p-5 shadow-xs"
              >
                <blockquote className="font-serif text-sm italic leading-relaxed text-[#2a241e]">
                  &ldquo;Profissional de notável competência, postura ética irrepreensível e profundo conhecimento jurídico. Demonstrou, ao longo de todo o processo, comprometimento, clareza nas orientações e uma dedicação que inspira confiança. Um advogado que honra a advocacia com seriedade, empatia e respeito ao cliente.&rdquo;
                </blockquote>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-[#866843]">
                  — Ana Maciel · Avaliação real verificada no Google Meu Negócio
                </p>
              </motion.div>

              {/* Personality & Profile Cards */}
              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-2 gap-3 text-xs sm:grid-cols-3"
              >
                <div className="rounded-lg border border-[#c5a882]/30 bg-white p-3 shadow-xs">
                  <p className="font-bold text-[#1a1713]">4,8 ★ no Google</p>
                  <p className="mt-0.5 text-[11px] text-[#6b6257]">
                    25 avaliações espontâneas e verificadas
                  </p>
                </div>
                <div className="rounded-lg border border-[#c5a882]/30 bg-white p-3 shadow-xs">
                  <p className="font-bold text-[#1a1713]">Equipe Especializada</p>
                  <p className="mt-0.5 text-[11px] text-[#6b6257]">
                    Atendimento ágil em múltiplas áreas
                  </p>
                </div>
                <div className="rounded-lg border border-[#c5a882]/30 bg-white p-3 shadow-xs col-span-2 sm:col-span-1">
                  <p className="font-bold text-[#1a1713]">Clareza & Ética</p>
                  <p className="mt-0.5 text-[11px] text-[#6b6257]">
                    Sem juridiquês, direto ao ponto
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-1 gap-2.5 text-xs font-semibold text-[#1a1713] sm:grid-cols-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#866843]" />
                  <span>Sede na R. Dr. Antônio Alvarenga, 371 · Centro, Corinto - MG</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#866843]" />
                  <span>Excelência comprovada em Inventários, Usucapião e Imóveis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#866843]" />
                  <span>Contato direto pelo WhatsApp com o Dr. Adonai Soares</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#866843]" />
                  <span>Atuação em Corinto, comarcas de MG e Tribunais Superiores</span>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dr. Adonai Soares! Gostaria de agendar um atendimento para apresentar meu caso."
                  )}
                  target="_blank"
                  size="md"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} className="text-[#0b0a08]" /> Falar com o Dr. Adonai Soares
                </GlowingButton>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4a443c] transition-colors hover:text-[#866843]"
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
          className="scroll-mt-24 border-t border-[#c5a882]/25 bg-[#12100d] py-20 sm:py-28 lg:py-32"
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
                eyebrow="ÁREAS DE ATUAÇÃO & CONSULTORIA JURÍDICA"
                description="Soluções jurídicas técnicas, modernas e humanizadas para resguardar seu patrimônio, defender sua família e impulsionar seus negócios."
              >
                Especialidades completas para atender você em{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#dfcaa9] via-[#c5a882] to-[#fbf7ee]">
                  Corinto, Minas Gerais e em todo o Brasil.
                </span>
              </Heading>
              <p className="max-w-[270px] pb-1 text-xs leading-6 text-[#9e978d]">
                Clique em qualquer área de atuação abaixo para conferir os procedimentos detalhados e solicitar atendimento direto via WhatsApp.
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
                    className="group flex min-h-[350px] flex-col rounded-xl border border-[#c5a882]/30 bg-[#161310] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#dfcaa9] hover:shadow-gold sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-lg border border-[#c5a882]/40 bg-[#0b0a08] text-[#dfcaa9] shadow-xs transition-colors group-hover:bg-[#c5a882] group-hover:text-[#0b0a08] group-hover:border-[#f4ebd6]">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <span className="font-serif text-2xl text-[#c5a882]/40 group-hover:text-[#dfcaa9]">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-md border border-[#c5a882]/30 bg-[#0b0a08] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#dfcaa9] shadow-xs">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.45rem] leading-tight text-white group-hover:text-[#dfcaa9] transition-colors">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-6 text-[#d4cdc1]">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-[#dfcaa9] hover:text-white"
                    >
                      Ver detalhes e procedimentos{" "}
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

        {/* Por Que Escolher o Dr. Adonai Soares - Dobra Clara (Calcário & Marfim) */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-t border-[#c5a882]/30 bg-[#f5f1e8] py-20 text-[#1a1713] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                theme="light"
                eyebrow="AGILIDADE, PROFISSIONALISMO & ATENDIMENTO HUMANO"
                description="Quando o seu patrimônio, sua família ou seus direitos estão em jogo, você merece um advogado acessível, combativo e que resolve de verdade."
              >
                Por que confiar suas causas ao{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#866843] via-[#b5956f] to-[#5f462a]">
                  Dr. Adonai Soares?
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dr. Adonai Soares! Gostaria de conversar para entender as etapas da minha demanda jurídica."
                )}
                target="_blank"
                size="md"
                variant="gold"
                className="rounded-lg shadow-sm"
              >
                <WhatsAppIcon size={16} className="text-[#0b0a08]" /> Falar no WhatsApp
              </GlowingButton>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {/* Card 1: Comunicação Clara e Resolução Prática */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group flex flex-col justify-between rounded-xl border border-[#c5a882]/30 bg-white p-7 shadow-[0_8px_30px_rgba(26,23,19,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b5956f] hover:shadow-[0_12px_36px_rgba(197,168,130,0.18)] sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#c5a882]/40 bg-[#f8f5ee] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#866843]">
                      <HeartHandshake size={14} /> Atendimento Humanizado & Direto
                    </span>
                    <span className="text-xs font-semibold text-[#866843]">
                      Sempre Próximo de Você
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#1a1713] sm:text-[1.75rem]">
                    Comunicação Sem Juridiquês, Paciência e Respostas Claras
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#4a443c]">
                    Como comprovam os clientes no Google, o grande diferencial do Dr. Adonai Soares é aliar alto conhecimento jurídico a um atendimento acolhedor. Ele explica cada detalhe com calma e transparência, mantendo você sempre informado sobre os passos e perspectivas do processo.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-[#2a241e]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#866843]" />
                      <span>Contato direto com o advogado pelo WhatsApp para sanar dúvidas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#866843]" />
                      <span>Pontualidade rigorosa e retorno constante sobre cada andamento processual</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#866843]" />
                      <span>Transparência total quanto a prazos, custos e estratégias adotadas</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#c5a882]/25 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dr. Adonai Soares! Gostaria de tirar dúvidas com você sobre o meu caso."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#c5a882]/40 bg-[#f8f5ee] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1a1713] transition-all hover:border-[#866843] hover:bg-[#c5a882] hover:text-[#0b0a08]"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Conversar com o Dr. Adonai Soares
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>

              {/* Card 2: Firmeza Técnica e Domínio em Sucessões e Imóveis */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="group flex flex-col justify-between rounded-xl border border-[#c5a882]/30 bg-white p-7 shadow-[0_8px_30px_rgba(26,23,19,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b5956f] hover:shadow-[0_12px_36px_rgba(197,168,130,0.18)] sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#c5a882]/40 bg-[#f8f5ee] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#866843]">
                      <Award size={14} /> Solidez & Eficiência Técnica
                    </span>
                    <span className="text-xs font-semibold text-[#866843]">
                      Resultados Concretos
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#1a1713] sm:text-[1.75rem]">
                    Especialização em Inventários, Regularização de Imóveis e Contratos
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#4a443c]">
                    Em causas imobiliárias e sucessórias, um erro técnico pode travar bens por anos. O Dr. Adonai conduz inventários com celeridade e domínio das vias extrajudiciais, regulariza propriedades por usucapião e elabora contratos à prova de litígios, blindando você contra perdas.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-[#2a241e]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#866843]" />
                      <span>Agilidade na partilha de bens entre herdeiros em cartório ou via judicial</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#866843]" />
                      <span>Conquista de escrituras definitivas e registro de imóveis urbanos e rurais</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#866843]" />
                      <span>Equipe jurídica sincronizada para acompanhar seu caso sem interrupções</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#c5a882]/25 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dr. Adonai Soares! Gostaria de consultar sobre a melhor estratégia para meu inventário ou imóvel."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#c5a882]/40 bg-[#f8f5ee] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1a1713] transition-all hover:border-[#866843] hover:bg-[#c5a882] hover:text-[#0b0a08]"
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
        <section className="relative overflow-hidden border-t border-[#c5a882]/25 bg-[#12100d] py-20 text-[#fbfaf8] sm:py-24 lg:py-28">
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-[#c5a882]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-[#dfcaa9]/10 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                light
                eyebrow="COMO CONDUZIMOS SEU CASO"
                description="Um método transparente, ágil e centrado em resultados práticos para garantir a sua tranquilidade e a segurança de sua família."
              >
                Três etapas claras para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#dfcaa9] via-[#c5a882] to-[#fbf7ee]">
                  proteger seu patrimônio e solucionar sua demanda jurídica.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-[#c5a882]/35 bg-[#161310] p-6 font-serif text-base italic leading-7 text-[#fbfaf8] shadow-card">
                &ldquo;A advocacia deve ser sinônimo de segurança, clareza e dedicação. Nosso compromisso é ouvir a realidade do cliente com empatia e aplicar a técnica jurídica com firmeza, alcançando a solução mais rápida e justa.&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-[#dfcaa9]">
                  — Dr. Adonai Soares de Moura · OAB/MG 187.717
                </footer>
              </blockquote>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-[#c5a882]/25"
            >
              {[
                [
                  "01",
                  "Atendimento Inicial & Análise Diagnóstica",
                  "Conversa reservada via WhatsApp, ligação ou presencial no escritório em Corinto. Escuta detalhada do seu problema e verificação documental inicial.",
                ],
                [
                  "02",
                  "Definição Estratégica & Execução Rápida",
                  "Apresentação da rota mais econômica e rápida (judicial ou extrajudicial em cartório), com elaboração precisa das peças e requerimentos cabíveis.",
                ],
                [
                  "03",
                  "Acompanhamento Contínuo & Prestação de Contas",
                  "Atuação combativa em audiências, cartórios e tribunais, com atualizações periódicas para você acompanhar cada vitória com total tranquilidade.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-semibold text-[#dfcaa9]">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-white">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-[#d4cdc1]">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Avaliações / Depoimentos Reais no Google Meu Negócio - Dobra Clara (Alabastro & Marfim) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 border-t border-[#c5a882]/30 bg-[#f8f5ee] py-20 text-[#1a1713] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                theme="light"
                eyebrow="PROVA SOCIAL VERIFICADA · GOOGLE MEU NEGÓCIO"
                description="Veja depoimentos autênticos e públicos de clientes sobre a competência, a transparência e o acolhimento do Dr. Adonai Soares em Corinto - MG."
              >
                Avaliado com 4,8 ★ em{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#866843] via-[#b5956f] to-[#5f462a]">
                  25 avaliações no Google pela agilidade, clareza e dedicação.
                </span>
              </Heading>

              {/* Verified Google Badge Card */}
              <div className="flex flex-col gap-3 rounded-xl border border-[#c5a882]/35 bg-white p-5 shadow-[0_8px_30px_rgba(26,23,19,0.08)] sm:flex-row sm:items-center md:min-w-[340px]">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-lg border border-[#c5a882]/30 bg-[#f8f5ee] shadow-xs">
                  <GoogleIcon size={30} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-3xl font-bold leading-none text-[#1a1713]">
                      4,8
                    </span>
                    <div className="flex gap-0.5 text-[#c5a882]">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-[#c5a882] text-[#c5a882]"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#4a443c]">
                    Adonai Soares — Advogado
                  </p>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-[#866843] transition-colors hover:text-[#1a1713]"
                  >
                    25 avaliações no Google <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Client Reviews Grid */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clientReviews.map((review) => (
                <article
                  key={review.name}
                  className="group relative flex flex-col justify-between rounded-xl border border-[#c5a882]/30 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#b5956f] hover:shadow-[0_12px_36px_rgba(197,168,130,0.18)] shadow-[0_4px_20px_rgba(26,23,19,0.05)] sm:p-8"
                >
                  <div>
                    {/* Header: Stars + Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-1 text-[#c5a882]">
                        {Array.from({ length: review.rating }, (_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-[#c5a882] text-[#c5a882]"
                          />
                        ))}
                      </div>
                      <span className="rounded-md border border-[#c5a882]/35 bg-[#f8f5ee] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#866843] shadow-xs">
                        {review.badge}
                      </span>
                    </div>

                    {/* Review content */}
                    <p className="mt-5 text-[14px] italic leading-relaxed text-[#2a241e]">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  {/* Reviewer info */}
                  <div className="mt-6 flex items-center gap-3 border-t border-[#c5a882]/25 pt-4">
                    <div className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#c5a882]/40 bg-[#f4ebd6] font-serif text-sm font-semibold text-[#866843] shadow-xs">
                      {review.name.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-serif text-base font-semibold text-[#1a1713]">
                        {review.name}
                      </p>
                      <p className="text-[10px] uppercase tracking-wider text-[#6b6257]">
                        {review.reviewerTag}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom Actions and Trust Tags */}
            <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-[#c5a882]/25 pt-8 sm:flex-row">
              <div className="flex flex-wrap items-center gap-2">
                {[
                  "Advogado em Corinto - MG",
                  "Especialista em Inventários & Partilhas",
                  "Direito Imobiliário & Usucapião",
                  "Nota 4,8 ★ no Google (25 avaliações)",
                  "Direito de Família & Contratos",
                  "Equipe Especializada & Ágil",
                  "Atendimento em Todo o Brasil",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#c5a882]/30 bg-white px-3.5 py-1.5 text-[11px] font-medium text-[#1a1713] shadow-xs"
                  >
                    <CheckCircle2 size={13} className="text-[#866843]" />
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#866843] transition-colors hover:text-[#1a1713]"
              >
                Ver Todas as 25 Avaliações no Google{" "}
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Contato & Localização da Sede em Corinto - MG */}
        <section
          id="contato"
          className="scroll-mt-24 border-t border-[#c5a882]/25 bg-[#12100d] py-20 text-[#fbfaf8] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                light
                eyebrow="CONTATO & AGENDAMENTO DE CONSULTA"
                description="Fale diretamente com o Dr. Adonai Soares pelo WhatsApp para agendamento de consulta ou atendimento com total sigilo profissional."
              >
                Prontidão para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#dfcaa9] via-[#c5a882] to-[#fbf7ee]">
                  proteger seu patrimônio e defender seus direitos.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dr. Adonai Soares! Gostaria de agendar uma consulta jurídica com seu escritório."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} className="text-[#0b0a08]" /> Falar no WhatsApp com o Dr. Adonai
                </GlowingButton>
                <p className="text-[11px] leading-5 text-[#d4cdc1]">
                  WhatsApp e telefone direto:{" "}
                  <strong className="text-white">{PHONE_DISPLAY}</strong>
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-[#d4cdc1]">
                <div className="flex items-start gap-3">
                  <Clock
                    size={16}
                    className="mt-0.5 shrink-0 text-[#c5a882]"
                  />
                  <div>
                    <p className="font-semibold text-white">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-[#dfcaa9] font-bold">
                      Aberto 24 Horas (Atendimento Ágil & Plantão)
                    </p>
                    <p className="text-[11px] text-[#9e978d]">
                      Atendimento presencial em Corinto - MG e assessoria jurídica em todo o estado de Minas Gerais e tribunais do Brasil
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#c5a882]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-medium text-white transition-colors hover:text-[#dfcaa9]"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#c5a882]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#dfcaa9] text-white"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#c5a882]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="transition-colors hover:text-[#dfcaa9] text-white"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#c5a882]"
                  />
                  <div>
                    <span className="text-white">{ADDRESS_TEXT}</span>
                    <br />
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex items-center gap-1 font-semibold text-[#dfcaa9] hover:underline"
                    >
                      Ver no Google Maps <ArrowUpRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Card with executive presentation */}
            <div className="relative overflow-hidden rounded-xl border border-[#c5a882]/35 bg-[#161310] p-7 shadow-card sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#866843] via-[#c5a882] to-[#dfcaa9]" />

              <div className="flex flex-col gap-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#dfcaa9]">
                  Sede do Escritório em Corinto - MG
                </p>
                <div className="relative h-[68px] w-[280px] sm:h-[78px] sm:w-[340px]">
                  <Image
                    src={LOGO_SRC}
                    alt="AS Advocacia e Consultoria Jurídica — Adonai Soares de Moura"
                    fill
                    unoptimized
                    sizes="340px"
                    className="object-contain object-left"
                  />
                </div>
              </div>

              {/* Office presentation photo */}
              <div className="relative mt-5 aspect-[16/10] w-full overflow-hidden rounded-lg border border-[#c5a882]/30 bg-[#0b0a08] shadow-xs">
                <Image
                  src={FOTO_SOBRE_SRC}
                  alt="Espaço de Atendimento do Dr. Adonai Soares em Corinto - MG"
                  fill
                  unoptimized
                  className="object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-4 text-white">
                  <p className="text-xs font-semibold">Ambiente Executivo, Confortável e Reservado</p>
                  <p className="text-[10px] text-stone-300">{ADDRESS_TEXT}</p>
                </div>
              </div>

              <address className="mt-6 max-w-md text-[14px] not-italic leading-7 text-[#d4cdc1]">
                <strong className="font-semibold text-white">
                  {FIRM_NAME}
                </strong>
                <br />
                {LAWYER_NAME} · {LAWYER_TITLE}
                <br />
                Atendimento presencial em Corinto, região Central de Minas e tribunais de todo o Brasil
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-lg border border-[#c5a882]/25 bg-[#0b0a08] p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#dfcaa9]">
                  Atendimento & Horários
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-[#d4cdc1]">
                  <span>Plantão & Consultas</span>
                  <span className="text-right font-semibold text-[#dfcaa9]">
                    Aberto 24 Horas
                  </span>
                  <span>Atendimento Presencial</span>
                  <span className="text-right font-medium text-[#c5a882]">
                    Corinto - MG (Centro)
                  </span>
                  <span>Endereço</span>
                  <span className="text-right text-white">R. Dr. Antônio Alvarenga, 371</span>
                  <span>Avaliações Google</span>
                  <span className="text-right font-semibold text-[#dfcaa9]">4,8 ★ (25 avaliações)</span>
                  <span>Tribunais</span>
                  <span className="text-right text-white">TJMG, TRF, TRT & Tribunais Superiores</span>
                </div>
              </div>

              <div className="my-7 h-px bg-[#c5a882]/25" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-[#9e978d]">
                  Atendimento sob estrito sigilo profissional e conformidade ética com a OAB
                </p>
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dr. Adonai Soares! Gostaria de agendar uma consulta no escritório de Corinto."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#c5a882]/50 bg-[#1a1713] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#dfcaa9] hover:bg-[#c5a882] hover:text-[#0b0a08]"
                >
                  <WhatsAppIcon size={14} /> Falar no WhatsApp <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip */}
        <section className="border-t border-[#c5a882]/25 bg-gradient-to-r from-[#0b0a08] via-[#161310] to-[#0b0a08] px-5 py-14 text-[#fbfaf8] shadow-card sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#dfcaa9]">
                <Sparkles size={13} /> AS ADVOCACIA E CONSULTORIA JURÍDICA
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                Precisa de um advogado dedicado, experiente e que realmente resolve?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dr. Adonai Soares! Preciso de atendimento com seu escritório para analisar uma questão jurídica."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-lg border border-[#f4ebd6]/85 bg-gradient-to-r from-[#9e7e57] via-[#dfcaa9] to-[#9e7e57] px-8 py-4 text-[11px] font-black uppercase tracking-[0.15em] text-[#0b0a08] shadow-[0_8px_24px_-4px_rgba(197,168,130,0.45),inset_0_1px_1.5px_rgba(255,255,255,0.85)] transition-all hover:-translate-y-0.5 hover:from-[#c5a882] hover:via-[#fbf7ee] hover:to-[#c5a882] hover:shadow-[0_12px_32px_rgba(197,168,130,0.7)]"
            >
              <WhatsAppIcon size={17} className="text-[#0b0a08]" /> Iniciar Atendimento Agora{" "}
              <ArrowUpRight size={15} className="text-[#0b0a08]" />
            </a>
          </div>
        </section>

        {/* Footer - Elegant Luxury Noir */}
        <footer className="border-t border-[#c5a882]/25 bg-[#0b0a08] px-5 py-14 text-[#fbfaf8] sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <a
                href="#inicio"
                aria-label="AS Advocacia e Consultoria Jurídica"
                className="inline-block transition-transform hover:scale-[1.01]"
              >
                <div className="relative h-[78px] w-[300px] sm:h-[95px] sm:w-[360px]">
                  <Image
                    src={LOGO_SRC}
                    alt="AS Advocacia e Consultoria Jurídica — Dr. Adonai Soares de Moura"
                    fill
                    unoptimized
                    sizes="360px"
                    className="object-contain object-left"
                  />
                </div>
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-[#9e978d]">
                ⚖️ Advocacia com rigor técnico, ética inabalável, agilidade resolutiva e atendimento humanizado. Atuação em Inventários, Regularização de Imóveis, Família, Contratos e causas estratégicas em Corinto - MG e em todo o Brasil.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-[#dfcaa9]">
                {LAWYER_NAME} — {LAWYER_TITLE}
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#dfcaa9]">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-[#d4cdc1]">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  O Advogado & Equipe
                </a>
                <a className="footer-link" href="#atuacao">
                  Áreas de Atuação
                </a>
                <a className="footer-link" href="#diferenciais">
                  Diferenciais
                </a>
                <a className="footer-link" href="#avaliacoes">
                  Avaliações de Clientes (4,8 ★)
                </a>
                <a className="footer-link" href="#contato">
                  Contato & Sede
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#dfcaa9]">
                Contato & Atendimento
              </h2>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-[#d4cdc1]">
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dr. Adonai Soares! Gostaria de falar com o escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 font-medium text-white"
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
                <p className="inline-flex items-center gap-2 pt-1 text-[11px] text-[#dfcaa9] font-semibold">
                  <Clock size={14} className="shrink-0 text-[#c5a882]" /> Aberto 24 Horas · Atendimento Ágil
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-[#c5a882]/25 pt-6 text-[10px] text-stone-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} AS ADVOCACIA E CONSULTORIA JURÍDICA. Todos os direitos reservados.
            </p>
            <p>
              Conteúdo informativo, em estrita conformidade com o Código de Ética e Disciplina da OAB.
            </p>
          </div>
        </footer>

        {/* Floating WhatsApp Quick Action Button - Luxury Concierge Jewel */}
        <aside
          aria-label="Acesso rápido WhatsApp"
          className="fixed bottom-6 right-6 z-50"
        >
          <a
            href={getWhatsAppUrl(
              "Olá, Dr. Adonai Soares! Gostaria de agendar um atendimento pelo WhatsApp."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com o Dr. Adonai Soares"
            className="group relative flex size-14 items-center justify-center rounded-full border-2 border-[#c5a882]/80 bg-gradient-to-b from-[#221e19] via-[#141210] to-[#0b0a08] text-[#dfcaa9] shadow-[0_8px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(197,168,130,0.35)] transition-all duration-300 hover:scale-110 hover:border-[#f4ebd6] hover:shadow-[0_10px_35px_rgba(197,168,130,0.6)] focus:outline-none focus:ring-4 focus:ring-[#c5a882]/40"
          >
            {/* Live pulsating status beacon */}
            <span className="absolute -top-0.5 -right-0.5 flex size-3.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c5a882] opacity-75"></span>
              <span className="relative inline-flex size-3.5 rounded-full border-2 border-[#0b0a08] bg-[#f4ebd6]"></span>
            </span>
            <WhatsAppIcon size={26} className="text-[#f4ebd6] transition-transform duration-300 group-hover:scale-110" />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg border border-[#c5a882]/60 bg-[#0b0a08]/95 px-3.5 py-1.5 text-xs font-semibold text-[#fbfaf8] shadow-2xl backdrop-blur-md transition-opacity group-hover:block">
              <span className="text-[#dfcaa9]">WhatsApp Direto</span> · Dr. Adonai Soares
            </span>
          </a>
        </aside>

        {/* Modal de Detalhes da Especialidade */}
        <AnimatePresence>
          {activeArea && (
            <motion.div
              className="fixed inset-0 z-50 flex items-end justify-center bg-black/80 p-0 backdrop-blur-md sm:items-center sm:p-6"
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
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-xl border border-[#c5a882]/40 bg-[#12100d] p-7 shadow-2xl sm:max-w-xl sm:rounded-xl sm:p-10 text-[#fbfaf8]"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-[#c5a882]/30 bg-[#1a1713] text-[#fbfaf8] transition-colors hover:border-[#dfcaa9] hover:text-[#f4ebd6]"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-3 pr-12">
                  <div className="relative size-10 shrink-0 overflow-hidden rounded-lg border border-[#c5a882]/40 bg-[#0b0a08] p-1 shadow-xs">
                    <Image
                      src={LOGO_SYMBOL_SRC}
                      alt="Símbolo AS Advocacia e Consultoria Jurídica"
                      fill
                      sizes="40px"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="eyebrow-light">AS ADVOCACIA & CONSULTORIA</p>
                    <p className="text-[10px] font-semibold tracking-wider text-[#dfcaa9] uppercase">
                      {LAWYER_NAME} · {LAWYER_TITLE}
                    </p>
                  </div>
                </div>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-serif text-3xl leading-tight text-white sm:text-4xl"
                >
                  {activeArea.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-[#d4cdc1]">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-[#c5a882]/25 pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#dfcaa9]">
                    Atuação e Procedimentos Adotados pelo Escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-[#d4cdc1]"
                      >
                        <span className="size-2 shrink-0 rounded-full bg-[#c5a882]" />
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
                    <WhatsAppIcon size={16} className="text-[#0b0a08]" /> Consultar sobre esta demanda
                  </GlowingButton>
                  <button
                    type="button"
                    onClick={() => setActiveArea(null)}
                    className="px-5 py-3 text-xs font-semibold text-[#9e978d] transition-colors hover:text-white"
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
