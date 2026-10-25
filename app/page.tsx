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
  AlertTriangle,
  ShieldCheck,
  Siren,
  Gavel,
  BookOpen,
  X,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5535992755472";
const PHONE_DISPLAY = "(35) 99275-5472";
const EMAIL_CONTACT = "contato@rodrigocorrea.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/rodrigocorrea_adv/";
const INSTAGRAM_HANDLE = "@rodrigocorrea_adv";
const LINKTREE_URL = "https://linktr.ee/rodrigocorrea_adv";
const LAWYER_NAME = "Dr. Rodrigo Gomes Corrêa";
const LAWYER_TITLE = "Advogado Criminalista | OAB/MG";

const ADDRESS_TEXT = "R. Maj. Penha, 299 - Sala 101 - Centro, Caxambu - MG, 37440-000";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Rodrigo+Correa+Advocacia+Criminal+R+Maj+Penha+299+Sala+101+Centro+Caxambu+MG";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Rodrigo+Corr%C3%AAa+Advocacia+Criminal%0ACaxambu+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";

const LOGO_SRC = "/logo.png";
const LOGO_SYMBOL_SRC = "/logo-symbol.png";
const FOTO_HERO_SRC = "/rodrigo-correa-office.jpg";
const FOTO_SOBRE_SRC = "/rodrigo-correa-equipe.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dr. Rodrigo Corrêa! Preciso de atendimento com urgência no Plantão Criminal.";
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
    id: "plantao-criminal-flagrante",
    title: "Plantão Criminal 24h & Flagrante",
    icon: Siren,
    tag: "Delegacia de Polícia · Interrogatório · Plantão Noturno & Fins de Semana",
    summary:
      "Atendimento presencial imediato em delegacias e presídios em Caxambu e região. Garantia inegociável de que nenhum abuso, ilegalidade ou coação ocorra nas primeiras horas da prisão.",
    details:
      "As primeiras horas após a voz de prisão são absolutamente decisivas para o destino do processo. O Dr. Rodrigo Gomes Corrêa atua com prontidão ininterrupta 24 horas por dia, realizando entrevista prévia e reservada com o cliente, acompanhando o interrogatório e a confecção do auto de prisão em flagrante (APFD), impedindo a autoincriminação e requerendo a liberdade provisória imediata.",
    topics: [
      "Atendimento imediato e ininterrupto 24h em delegacias de polícia civil e postos da polícia federal",
      "Entrevista prévia, sigilosa e reservada com o acusado antes de qualquer interrogatório formal",
      "Fiscalização rigorosa da legalidade do flagrante e garantia expressa do direito constitucional ao silêncio",
      "Pedido imediato de arbitramento de fiança pela autoridade policial ou soltura célere",
      "Acompanhamento da apreensão de bens, celulares, veículos e formalização das garantias legais",
      "Comunicação clara e constante com os familiares para prestar tranquilidade e orientações imediatas",
    ],
    whatsAppText:
      "Olá, Dr. Rodrigo Corrêa! Preciso de atendimento urgente no Plantão Criminal 24h para uma situação de prisão em flagrante.",
  },
  {
    id: "audiencia-de-custodia-liberdade",
    title: "Audiência de Custódia & Liberdade",
    icon: ShieldCheck,
    tag: "Relaxamento de Prisão · Revogação de Preventiva · Medidas Cautelares Alternativas",
    summary:
      "Atuação combativa perante o juiz em até 24 horas da prisão para demonstrar a ilegalidade do ato ou a total desnecessidade da prisão preventiva, conquistando a liberdade do cliente.",
    details:
      "Na audiência de custódia, o juiz decide se o custodiado responderá ao processo em liberdade ou se será encaminhado ao presídio. O Dr. Rodrigo Corrêa atua demonstrando a ausência dos requisitos autorizadores do artigo 312 do CPP, comprovando endereço fixo, ocupação lícita e bons antecedentes, realizando sustentação oral contundente pela concessão de liberdade provisória.",
    topics: [
      "Sustentação oral combativa e fundamentada na Audiência de Custódia perante o juiz e o Ministério Público",
      "Pedido de relaxamento imediato de prisão em caso de flagrante ilegal, agressões ou nulidades procedimentais",
      "Pedido de revogação de prisão preventiva por manifesta ausência de contemporaneidade ou risco social",
      "Concessão de liberdade provisória com ou sem aplicação de fiança",
      "Aplicação de medidas cautelares diversas da prisão (Artigo 319 do Código de Processo Penal)",
      "Requerimento de prisão domiciliar para mães com filhos menores ou cidadãos com problemas graves de saúde",
    ],
    whatsAppText:
      "Olá, Dr. Rodrigo Corrêa! Preciso de defesa técnica urgente para uma Audiência de Custódia.",
  },
  {
    id: "habeas-corpus-tribunais-superiores",
    title: "Habeas Corpus & Tribunais Superiores",
    icon: Scale,
    tag: "Pedido Liminar · TJMG em Belo Horizonte · STJ e STF em Brasília",
    summary:
      "Ação constitucional urgente com pedido de liminar contra decisões arbitrárias, prisões desproporcionais, constrangimento ilegal e excesso de prazo em todas as instâncias.",
    details:
      "Quando uma ordem de prisão ilegal é mantida em primeira instância, o remédio heroico do Habeas Corpus é a via soberana para restaurar a liberdade. O escritório atua com impetração técnica de alta densidade doutrinária perante o Tribunal de Justiça de Minas Gerais (TJMG) e perante o Superior Tribunal de Justiça (STJ) e Supremo Tribunal Federal (STF), com despacho pessoal de memoriais e sustentação oral.",
    topics: [
      "Elaboração e impetração ágil de Habeas Corpus com pedido liminar para soltura em caráter de urgência",
      "Combate incisivo ao excesso de prazo injustificado na formação da culpa e na instrução criminal",
      "Trancamento de inquérito policial ou ação penal manifestamente infundada e sem justa causa",
      "Interposição e condução de Recursos em Sentido Estrito, Apelações, RHC, REsp e Recursos Extraordinários",
      "Despacho direto de memoriais conclusivos com Desembargadores no TJMG e Ministros em Brasília",
      "Sustentação oral estratégica em sessões de julgamento das Turmas Criminais",
    ],
    whatsAppText:
      "Olá, Dr. Rodrigo Corrêa! Gostaria de consultar sobre a impetração de um Habeas Corpus com pedido de liminar.",
  },
  {
    id: "tribunal-do-juri-crimes-contra-vida",
    title: "Tribunal do Júri & Crimes Graves",
    icon: Gavel,
    tag: "Homicídio · Tentativa · Feminicídio · Plenário do Júri · Sustentação Oral",
    summary:
      "Defesa estratégica de alta complexidade em crimes dolosos contra a vida. Pleno domínio do plenário, quesitação rigorosa, oratória persuasiva e desmontagem de teses acusatórias.",
    details:
      "O Tribunal do Júri é o rito mais solene do processo penal, no qual a liberdade do réu é decidida por sete jurados da sociedade. Exige anos de especialização, inteligência cênica, oratória persuasiva e minucioso conhecimento técnico de laudos periciais e balística. O Dr. Rodrigo Corrêa atua desde a primeira fase de instrução até a sustentação oral perante o Conselho de Sentença.",
    topics: [
      "Atuação integral na primeira fase do júri (judicium accusationis) visando impronúncia ou desclassificação",
      "Interposição de Recurso em Sentido Estrito (RESE) contra decisões de pronúncia injustas",
      "Investigação defensiva preliminar e reconstituição fática com análise minuciosa de laudos e perícias",
      "Formulação de quesitos estratégicos e impugnação de testemunhas contraditórias",
      "Sustentação oral apaixonada e fundamentada perante os jurados no Plenário do Júri",
      "Recursos em instâncias superiores contra nulidades ocorridas em sessão de julgamento",
    ],
    whatsAppText:
      "Olá, Dr. Rodrigo Corrêa! Gostaria de atendimento especializado para um processo do Tribunal do Júri.",
  },
  {
    id: "inquerito-policial-investigacao",
    title: "Inquérito Policial & Investigação Defensiva",
    icon: BookOpen,
    tag: "Defesa Preliminar · Oitivas · Operações Policiais · Sigilo e Estratégia",
    summary:
      "Atuação técnica preventiva desde o nascedouro da investigação para blindar o investigado contra abusos, produzir contraprovas autônomas e evitar indiciamentos e denúncias.",
    details:
      "Muitas condenações nascem de declarações equivocadas ou da ausência de defesa na fase investigativa. O Dr. Rodrigo Corrêa acompanha depoimentos em delegacias, garante acesso irrestrito às provas já encartadas com base na Súmula Vinculante 14 do STF, formula quesitos e realiza investigação defensiva com coleta lícita de provas para o arquivamento das investigações.",
    topics: [
      "Acompanhamento presencial em oitivas, depoimentos e acareações perante o delegado de polícia",
      "Acesso irrestrito e integral às peças de investigação (Súmula Vinculante nº 14 do STF)",
      "Investigação defensiva com coleta de documentos, declarações juramentadas e provas digitais",
      "Requerimento de diligências essenciais à comprovação da inocência do investigado",
      "Defesa e proteção jurídica em caso de mandados de busca e apreensão e quebras de sigilo",
      "Elaboração de Defesa Prévia e Resposta à Acusação para trancamento pré-processual",
    ],
    whatsAppText:
      "Olá, Dr. Rodrigo Corrêa! Fui intimado para prestar depoimento ou estou sob investigação policial e preciso de orientação.",
  },
  {
    id: "execucao-penal-beneficios",
    title: "Execução Penal & Progressão de Regime",
    icon: FileCheck2,
    tag: "Progressão Fechado/Semiaberto/Aberto · Livramento Condicional · Remição",
    summary:
      "Fiscalização minuciosa do cumprimento de pena no sistema SEEU. Conquista de progressões de regime no dia exato, livramento condicional, saídas temporárias e remição por estudo e trabalho.",
    details:
      "O cumprimento de pena não pode ultrapassar um único dia além do fixado pela lei. O Dr. Rodrigo Corrêa realiza a auditoria matemática contínua da Execução Penal, calculando frações de pena, pleiteando progressões para o semiaberto e aberto, conquistando o livramento condicional e abatendo dias de cárcere por meio da remição por leitura, trabalho e estudos.",
    topics: [
      "Auditoria minuciosa do Atestado de Pena a Cumprir e cálculo de frações no sistema eletrônico SEEU",
      "Pedido imediato de progressão de regime (fechado para semiaberto, e semiaberto para aberto)",
      "Instrução e concessão de Livramento Condicional para cumprimento do restante da pena em liberdade",
      "Remição de pena por trabalho prisional, cursos profissionalizantes, estudo e leitura de obras",
      "Requerimento de Saídas Temporárias (visitas à família) e autorização para trabalho externo",
      "Pedidos de transferência de estabelecimento prisional para unidade próxima à residência da família",
    ],
    whatsAppText:
      "Olá, Dr. Rodrigo Corrêa! Gostaria de consultar sobre a Execução Penal e benefícios de pena no SEEU.",
  },
];

const clientReviews = [
  {
    name: "Priscila Lima Silva",
    reviewerTag: "8 avaliações no Google",
    badge: "Ética & Cuidado Humano",
    rating: 5,
    content:
      "Dr. Rodrigo é um profissional extraordinário! Desde o primeiro contato demonstrou ética, dedicação e um cuidado humano que fazem toda a diferença. Sua competência, transparência e comprometimento passam segurança e confiança em cada passo do processo. Além do conhecimento jurídico impecável, trabalha com seriedade, respeito e uma atenção especial aos detalhes, sempre buscando o melhor resultado. Um advogado tão excelente, responsável e ao mesmo tempo tão acessível e atencioso. Só tenho gratidão pelo trabalho maravilhoso que realizou – com excelência do início ao fim. Recomendo de olhos fechados, pois é um exemplo de advogado comprometido e brilhante no que faz.🌟👏",
  },
  {
    name: "Alberto Ribeiro",
    reviewerTag: "1 avaliação no Google",
    badge: "Resolução em Menos de 1 Semana",
    rating: 5,
    content:
      "Advogado atencioso e competente, amplo conhecimento na área, muito experiente, resolveu meu problema em menos de uma semana, além de me passar muita tranquilidade e confiança. Espero nunca precisar de advogado novamente, mas caso um dia precise, sei que posso contar com o Dr. Rodrigo Correa. Parabéns pelo profissionalismo e ética.",
  },
  {
    name: "Maria Das Graças Andrade",
    reviewerTag: "1 avaliação no Google",
    badge: "Paciência & Caráter Fora do Sério",
    rating: 5,
    content:
      "Inexplicável! Dr Rodrigo Gomes Correa é um excelente profissional muito dedicado atencioso com os clientes. Ele é incrível ele trabalhou para mim em um processo criminal, eu tenho dificuldade para enxergar com uma perca de visão e audição... Ele fazia o impossível pra eu entender ele até aumentava as letras e virava a tela do computador para mim e explicava várias vezes onde eu não conseguia entender. Então eu posso dizer que ele é muito bom advogado e como pessoa também ele é um ser humano especial humilde de um caráter fora do sério. Eu super indico esse profissional para outros clientes, a ele só gratidão mesmo por tudo pela paciência comigo porque eu falo muito, e mando muitos áudios um em cima do outro. Obrigado Dr Rodrigo Gomes Correa. ❤️",
  },
  {
    name: "Andrielly Gomes",
    reviewerTag: "Local Guide · 69 avaliações · 15 fotos",
    badge: "Excelência & Garantias Constitucionais",
    rating: 5,
    content:
      "Oferece orientação técnica de excelência ao cliente e a seus familiares, busca garantir que sejam aplicadas todas as garantias e direitos a que seu cliente faz jus, luta pela obediência aos princípios assegurados pela Constituição Federal, tanto quanto os infraconstitucionais. Indico sem sombra de dúvidas para quem precisa de um especialista na área criminal. 🙏",
  },
  {
    name: "Jao :p",
    reviewerTag: "3 avaliações no Google",
    badge: "Humano & Muito Confiável",
    rating: 5,
    content:
      "Excelente profissional ..dedicado e extremamente competente .. Humano e muito confiável. Minha experiência com Dr. Rodrigo é com certeza a melhor possível.",
  },
  {
    name: "Filipe Maciel Reis",
    reviewerTag: "4 avaliações no Google",
    badge: "Atenção aos Detalhes",
    rating: 5,
    content:
      "Ótimo profissional, realiza seu trabalho com competência e dedicação. Disponível a ajudar e compreender os detalhes minuciosamente. Visa o melhor ao cliente.",
  },
  {
    name: "Alice Alckmin",
    reviewerTag: "6 avaliações no Google",
    badge: "Extremamente Atencioso",
    rating: 5,
    content:
      "Dr. Rodrigo é extremamente atencioso e comprometido com seu trabalho! Só tenho a agradecer por tudo!",
  },
  {
    name: "Éricka Palmieri",
    reviewerTag: "4 avaliações no Google",
    badge: "Clareza & Responsabilidade",
    rating: 5,
    content:
      "Profissional sério, competente e que realmente se preocupa em resolver o problema do seu cliente com clareza e responsabilidade. Super recomendo!",
  },
  {
    name: "Katiarezendesouza Souza",
    reviewerTag: "2 avaliações no Google",
    badge: "Dedicação Plena",
    rating: 5,
    content:
      "Foi ótimo, muito atencioso e dedicado às situações levantadas. Excelente profissional!",
  },
  {
    name: "Laura Vieira",
    reviewerTag: "Local Guide · 11 avaliações",
    badge: "Extremamente Capacitado",
    rating: 5,
    content:
      "Excelente! Sempre muito atencioso e educado! Profissional extremamente capacitado.",
  },
  {
    name: "Maikon Lourenço",
    reviewerTag: "1 avaliação no Google",
    badge: "Nota Máxima & Conhecimento",
    rating: 5,
    content:
      "Nota máxima excelente atendimento e inclusive o conhecimento!!! Super recomendo ..",
  },
  {
    name: "Ana Gabriela de Castro Sousa",
    reviewerTag: "2 avaliações no Google",
    badge: "Capacitado & Prestativo",
    rating: 5,
    content:
      "Profissional muito capacitado e prestativo! Recomendo os seus serviços.",
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
      <p className={light ? "eyebrow-light" : "eyebrow-gold"}>{eyebrow}</p>
      <h2 className="mt-4 font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-[#f8f9fa] sm:text-4xl lg:text-[3.15rem]">
        {children}
      </h2>
      {description && (
        <p className="mt-4 text-[15px] leading-7 text-[#cbd5e1]">
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
      <main className="overflow-hidden bg-[#08090c] text-[#f8f9fa] selection:bg-[#c59b27] selection:text-[#08090c]">
        {/* Navigation Bar - Refined Metallic Gold, Platinum Chrome & Obsidian Luxury */}
        <header className="sticky top-0 z-40 border-b border-[#c59b27]/25 bg-[#08090c]/95 backdrop-blur-xl shadow-card">
          <div className="mx-auto flex h-[98px] max-w-7xl items-center justify-between gap-6 px-5 sm:h-[108px] lg:h-[114px] xl:h-[118px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Rodrigo Corrêa Advocacia Criminal - Início"
              onClick={closeMenu}
              className="flex shrink-0 items-center transition-opacity hover:opacity-95"
            >
              <div className="relative h-[66px] w-[260px] sm:h-[76px] sm:w-[320px] lg:h-[86px] lg:w-[365px] xl:h-[90px] xl:w-[385px]">
                <Image
                  src={LOGO_SRC}
                  alt="Rodrigo Corrêa Advocacia Criminal"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 640px) 260px, (max-width: 1024px) 365px, 385px"
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
                O Advogado
              </a>
              <a className="nav-link" href="#atuacao">
                Atuação Penal
              </a>
              <a className="nav-link" href="#diferenciais">
                Diferenciais
              </a>
              <a className="nav-link" href="#avaliacoes">
                Avaliações (5,0 ★)
              </a>
              <a className="nav-link" href="#contato">
                Plantão 24h & Sede
              </a>
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Avaliações do Dr. Rodrigo Corrêa no Google"
                className="grid size-10 place-items-center rounded-lg border border-[#c59b27]/30 bg-[#0e1016] text-[#cbd5e1] transition-all hover:border-[#d4af37] hover:bg-[#141720] hover:text-white shadow-xs"
                title="5,0 ★ no Google (27 avaliações)"
              >
                <GoogleIcon size={16} />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram do Dr. Rodrigo Corrêa"
                className="grid size-10 place-items-center rounded-lg border border-[#c59b27]/30 bg-[#0e1016] text-[#cbd5e1] transition-all hover:border-[#d4af37] hover:bg-[#141720] hover:text-white shadow-xs"
                title={`Instagram ${INSTAGRAM_HANDLE}`}
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                aria-label="Ligar para o Dr. Rodrigo Corrêa"
                className="grid size-10 place-items-center rounded-lg border border-[#c59b27]/30 bg-[#0e1016] text-[#cbd5e1] transition-all hover:border-[#d4af37] hover:bg-[#141720] hover:text-white shadow-xs"
                title={`Ligar: ${PHONE_DISPLAY}`}
              >
                <Phone size={16} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Dr. Rodrigo Corrêa"
                className="grid size-10 place-items-center rounded-lg border border-[#c59b27]/30 bg-[#0e1016] text-[#cbd5e1] transition-all hover:border-[#d4af37] hover:bg-[#141720] hover:text-white shadow-xs"
                title="Plantão WhatsApp 24 Horas"
              >
                <WhatsAppIcon size={18} />
              </a>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dr. Rodrigo Corrêa! Preciso de atendimento de urgência no Plantão Criminal 24h."
                )}
                target="_blank"
                size="sm"
                variant="gold"
                className="rounded-lg shadow-sm"
              >
                Plantão 24h <ArrowUpRight size={14} className="text-[#08090c]" />
              </GlowingButton>
            </div>

            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="grid size-11 place-items-center rounded-lg border border-[#c59b27]/40 bg-[#0e1016] text-[#f8f9fa] lg:hidden shadow-xs"
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
                className="overflow-hidden border-t border-[#c59b27]/25 bg-[#0e1016] px-6 text-[#f8f9fa] lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["O Advogado & Equipe", "#sobre"],
                    ["Especialidades Criminais", "#atuacao"],
                    ["Diferenciais", "#diferenciais"],
                    ["Avaliações (5,0 ★)", "#avaliacoes"],
                    ["Plantão 24h & Sede", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm font-medium text-[#cbd5e1] hover:text-[#d4af37]"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#fae9b5]/80 bg-gradient-to-r from-[#b38922] via-[#e5c46e] to-[#b38922] px-5 py-3.5 text-xs font-black uppercase tracking-[0.14em] text-[#08090c] shadow-[0_4px_16px_rgba(212,175,55,0.4),inset_0_1px_1px_rgba(255,255,255,0.85)] transition-all hover:brightness-105 active:translate-y-0"
                      href={getWhatsAppUrl(
                        "Olá, Dr. Rodrigo Corrêa! Preciso de atendimento urgente no Plantão Criminal."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} className="text-[#08090c]" /> Plantão 24h: {PHONE_DISPLAY}
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#c59b27]/40 bg-[#141720] px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-[#f8f9fa] transition-all hover:border-[#d4af37]"
                      href={GOOGLE_SEARCH_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <GoogleIcon size={15} /> 5,0 ★ no Google (27 avaliações)
                    </a>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section - Metallic Gold Aura, Chrome Platinum & Obsidian Luxury */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-[#c59b27]/25 bg-gradient-to-b from-[#08090c] via-[#0d0f15] to-[#08090c]"
        >
          {/* Subtle gold and platinum ambient lighting aura */}
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[36rem] rounded-full bg-[#c59b27]/12 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[28rem] rounded-full bg-[#d4af37]/8 blur-3xl" />

          <div className="mx-auto grid min-h-[640px] max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:min-h-[700px] lg:grid-cols-[1.12fr_0.88fr] lg:gap-12 lg:px-12 lg:py-18 xl:min-h-[740px] xl:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-4"
            >
              <motion.div
                variants={reveal}
                className="mb-5 inline-flex items-center gap-2 rounded-lg border border-[#c59b27]/50 bg-[#141720]/80 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#e1c47a] shadow-xs backdrop-blur-md"
              >
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d4af37] opacity-75"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-[#fae9b5]"></span>
                </span>
                <span>PLANTÃO CRIMINAL 24H · CAXAMBU - MG & TRIBUNAIS</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-[#f8f9fa] sm:text-[2.6rem] sm:leading-[1.12] lg:text-[3.25rem] xl:text-[3.45rem]"
              >
                Sua liberdade exige uma defesa criminal especializada,{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#e1c47a] via-[#d4af37] to-[#fbf8ee]">
                  combativa e disponível 24 horas.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-5 max-w-xl text-[15px] leading-7 text-[#cbd5e1] sm:text-base sm:leading-8"
              >
                Liderado pelo <strong className="font-semibold text-white">Dr. Rodrigo Gomes Corrêa</strong>, nosso escritório é especializado em Direito Penal de alta complexidade. Atuação imediata, técnica e intransigente em <strong className="font-semibold text-white">prisões em flagrante, audiências de custódia, habeas corpus, tribunal do júri e recursos perante o TJMG, STJ e STF</strong>, com sede física no Centro de Caxambu - MG e prontidão ininterrupta.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-col items-start gap-3.5 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dr. Rodrigo Corrêa! Preciso acionar o Plantão Criminal 24h para um atendimento de urgência."
                  )}
                  target="_blank"
                  size="md"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} className="text-[#08090c]" /> Acionar Plantão 24h no WhatsApp
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 rounded-lg border border-[#c59b27]/45 bg-[#0e1016]/90 backdrop-blur-md px-5 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-[#f8f9fa] shadow-[0_4px_16px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)] transition-all hover:border-[#fae9b5] hover:bg-[#141720] hover:text-white"
                >
                  Conhecer Áreas de Atuação{" "}
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1 text-[#d4af37]"
                  />
                </a>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[#c59b27]/25 pt-5 text-xs text-[#94a3b8]"
              >
                <a
                  href={GOOGLE_SEARCH_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-[#f8f9fa] transition-colors hover:text-[#d4af37]"
                >
                  <Star size={14} className="fill-[#d4af37] text-[#d4af37]" /> 5,0 ★ no Google (27 avaliações)
                </a>
                <span className="inline-flex items-center gap-1.5 font-medium text-[#f8f9fa]">
                  <Clock size={14} className="text-[#d4af37]" /> Aberto 24 Horas
                </span>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-[#f8f9fa] transition-colors hover:text-[#d4af37]"
                >
                  <MapPin size={14} className="text-[#d4af37]" /> R. Maj. Penha, 299 · Caxambu - MG
                </a>
              </motion.div>
            </motion.div>

            {/* Hero Visual Presentation - Official Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.95,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-[400px] sm:max-w-[430px] lg:max-w-[460px] xl:max-w-[480px] lg:ml-auto lg:mr-0"
            >
              <div className="relative aspect-[4/4.9] overflow-hidden rounded-2xl border-2 border-[#c59b27]/50 bg-[#0e1016] shadow-2xl ring-1 ring-[#d4af37]/35">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dr. Rodrigo Gomes Corrêa — Advogado Criminalista"
                  fill
                  priority
                  loading="eager"
                  unoptimized
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#08090c] via-[#08090c]/85 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3 text-white sm:bottom-6 sm:left-6 sm:right-6">
                  <div>
                    <p className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-white">
                      Dr. Rodrigo Corrêa
                    </p>
                    <p className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-[#e1c47a]">
                      Advogado Criminalista · OAB/MG
                    </p>
                    <p className="mt-0.5 text-[11px] text-stone-300">
                      R. Maj. Penha, 299 · Caxambu - MG & Tribunais
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-[#c59b27]/60 bg-[#08090c]/85 text-[#d4af37] backdrop-blur-sm shadow-md">
                    <Scale size={18} />
                  </span>
                </div>
              </div>

              {/* Floating authority badge */}
              <div className="absolute -left-3 top-4 z-10 rounded-lg border border-[#c59b27]/50 bg-[#08090c]/90 px-3 py-1.5 text-[9px] sm:text-[10px] font-bold tracking-[0.14em] text-[#e1c47a] shadow-md backdrop-blur-md sm:-left-4">
                SEDE EM CAXAMBU · PLANTÃO PENAL 24 HORAS
              </div>

              {/* Floating Google 5.0 Star Rating */}
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="group absolute -bottom-4 -right-2 z-10 rounded-xl border border-[#c59b27]/60 bg-[#0e1016]/95 p-3 shadow-xl backdrop-blur-md transition-all hover:border-[#d4af37] hover:bg-[#141720] sm:-right-4"
              >
                <div className="flex items-center gap-2">
                  <GoogleIcon size={16} />
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-0.5 text-[#d4af37]">
                      <Star size={12} className="fill-[#d4af37] text-[#d4af37]" />
                    </div>
                    <span className="font-serif text-sm font-bold text-white">
                      5,0
                    </span>
                    <span className="text-[9px] uppercase tracking-wider text-[#e1c47a]">
                      / 5,0
                    </span>
                  </div>
                </div>
                <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#cbd5e1]">
                  27 Avaliações no Google (100% 5★)
                </p>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner - Authority Metrics */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-[#c59b27]/25 bg-[#0e1016]"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              [
                "5,0 ★ no Google",
                "nota máxima comprovada em 27 avaliações destacando competência, ética e dedicação",
              ],
              [
                "Plantão 24 Horas",
                "prontidão ininterrupta para flagrantes, custódia e mandados de prisão",
              ],
              [
                "Cuidado Humano",
                "escuta atenta, paciência para sanar dúvidas e acolhimento à família",
              ],
              [
                "Caxambu • MG • Brasil",
                "sede física no Centro de Caxambu e atuação estratégica em todo o país",
              ],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-[#c59b27]/25"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-xl font-semibold text-[#d4af37] sm:text-2xl">
                  {value}
                </span>
                <span className="max-w-[165px] text-[11px] leading-5 text-[#cbd5e1]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre o Dr. Rodrigo Corrêa & Equipe - Luxury Editorial */}
        <section
          id="sobre"
          className="scroll-mt-24 border-y border-[#c59b27]/25 bg-[#08090c] py-20 text-[#f8f9fa] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
            {/* Visual presentation - Team / Partners Photo */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[490px]"
            >
              <div className="relative aspect-[4/4.9] overflow-hidden rounded-2xl border-2 border-[#c59b27]/50 bg-[#0e1016] shadow-2xl ring-1 ring-[#d4af37]/35">
                <Image
                  src={FOTO_SOBRE_SRC}
                  alt="Dr. Rodrigo Corrêa e Equipe de Advocacia Criminal"
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#08090c]/85 to-transparent" />
              </div>

              {/* Authority badge card */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-[#c59b27]/60 bg-[#0e1016]/95 backdrop-blur-md px-5 py-4 shadow-xl sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-[#d4af37]">
                  <Sparkles size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#e1c47a]">
                    Excelência Penal & Ética
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-white">
                  Dr. Rodrigo Gomes Corrêa & Equipe
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-[#d4af37]">
                  Defesa Combativa, Altamente Técnica & Humanizada
                </p>
                <p className="mt-1 text-[11px] leading-4 text-[#94a3b8]">
                  R. Maj. Penha, 299 - Sala 101 · Centro, Caxambu - MG
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-[#c59b27]/40 sm:-left-7 sm:-top-7 sm:size-32" />
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
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#c59b27]/40 bg-[#141720] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#e1c47a] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#d4af37]" />
                <span>SOBRE O DR. RODRIGO GOMES CORRÊA</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-[#f8f9fa] sm:text-4xl lg:text-[3.25rem]"
              >
                Uma advocacia criminal pautada no rigor técnico, na ética e no{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#e1c47a] via-[#d4af37] to-[#fbf8ee]">
                  cuidado profundamente humano em cada caso.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-[#cbd5e1]"
              >
                Com escritório sediado na Rua Major Penha, no Centro de{" "}
                <strong className="font-bold text-white">Caxambu - MG</strong>, e prestando assessoria penal estratégica em todo o estado de Minas Gerais e tribunais superiores, a atuação do{" "}
                <strong className="font-bold text-white">Dr. Rodrigo Gomes Corrêa</strong> se fundamenta na intransigente defesa dos direitos e garantias constitucionais, com disponibilidade 24 horas para situações emergenciais.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-[#cbd5e1]"
              >
                Reconhecido com <strong className="font-bold text-white">nota máxima 5,0 ★ unânime em 27 avaliações no Google</strong>, o Dr. Rodrigo é elogiado constantemente pelo domínio técnico impecável, pela rapidez resolutiva e pelo acolhimento aos clientes e seus familiares em momentos de angústia:{" "}
                <em className="text-white">&ldquo;Desde o primeiro contato demonstrou ética, dedicação e um cuidado humano que fazem toda a diferença. Passa segurança e tranquilidade em cada passo.&rdquo;</em>
              </motion.p>

              {/* Client Quote Card from real Google Reviews */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-xl border border-[#c59b27]/35 bg-[#0e1016] p-5 shadow-xs"
              >
                <blockquote className="font-serif text-sm italic leading-relaxed text-[#f8f9fa]">
                  &ldquo;Ele é incrível, trabalhou para mim em um processo criminal... Ele fazia o impossível pra eu entender, explicava várias vezes com muita paciência. É muito bom advogado e como pessoa também é um ser humano especial, de um caráter fora do sério. Só gratidão!&rdquo;
                </blockquote>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-[#d4af37]">
                  — Depoimento real verificado no Google Meu Negócio (5,0 ★)
                </p>
              </motion.div>

              {/* Personality & Profile Cards */}
              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-2 gap-3 text-xs sm:grid-cols-3"
              >
                <div className="rounded-lg border border-[#c59b27]/30 bg-[#0e1016] p-3 shadow-xs">
                  <p className="font-bold text-white">27 Avaliações 5,0 ★</p>
                  <p className="mt-0.5 text-[11px] text-[#94a3b8]">
                    100% de satisfação comprovada no Google
                  </p>
                </div>
                <div className="rounded-lg border border-[#c59b27]/30 bg-[#0e1016] p-3 shadow-xs">
                  <p className="font-bold text-white">Plantão 24 Horas</p>
                  <p className="mt-0.5 text-[11px] text-[#94a3b8]">
                    Atendimento imediato a qualquer hora
                  </p>
                </div>
                <div className="rounded-lg border border-[#c59b27]/30 bg-[#0e1016] p-3 shadow-xs col-span-2 sm:col-span-1">
                  <p className="font-bold text-white">Rigor Constitucional</p>
                  <p className="mt-0.5 text-[11px] text-[#94a3b8]">
                    Garantia plena de todos os seus direitos
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-1 gap-2.5 text-xs font-semibold text-[#f8f9fa] sm:grid-cols-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#d4af37]" />
                  <span>Sede na R. Maj. Penha, 299 - Sala 101 · Centro, Caxambu - MG</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#d4af37]" />
                  <span>Nota 5,0 ★ máxima no Google em 27 avaliações autênticas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#d4af37]" />
                  <span>Contato direto pelo WhatsApp com o Dr. Rodrigo Corrêa</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#d4af37]" />
                  <span>Atuação em delegacias, comarcas de MG e Tribunais Superiores</span>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dr. Rodrigo Corrêa! Gostaria de uma consulta para analisar um caso criminal."
                  )}
                  target="_blank"
                  size="md"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} className="text-[#08090c]" /> Falar com o Dr. Rodrigo Corrêa
                </GlowingButton>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#cbd5e1] transition-colors hover:text-[#d4af37]"
                >
                  <Phone size={15} /> {PHONE_DISPLAY}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pilares de Atuação / Especialidades Criminais */}
        <section
          id="atuacao"
          className="scroll-mt-24 border-t border-[#c59b27]/25 bg-[#0e1016] py-20 sm:py-28 lg:py-32"
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
                eyebrow="ESPECIALIDADES EM DIREITO PENAL & PROCESSO PENAL"
                description="Defesa criminal estratégica e combativa para resguardar a sua liberdade, a sua integridade e os seus direitos perante a Justiça."
              >
                Soluções jurídicas técnicas para defender você em{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#e1c47a] via-[#d4af37] to-[#fbf8ee]">
                  Caxambu, Minas Gerais e Tribunais Superiores.
                </span>
              </Heading>
              <p className="max-w-[270px] pb-1 text-xs leading-6 text-[#94a3b8]">
                Clique em uma área de atuação abaixo para conferir o detalhamento completo dos serviços e acionar o atendimento no WhatsApp.
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
                    className="group flex min-h-[350px] flex-col rounded-xl border border-[#c59b27]/30 bg-[#12151e] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#d4af37] hover:shadow-gold sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-lg border border-[#c59b27]/40 bg-[#08090c] text-[#d4af37] shadow-xs transition-colors group-hover:bg-[#c59b27] group-hover:text-[#08090c] group-hover:border-[#e1c47a]">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <span className="font-serif text-2xl text-[#c59b27]/40 group-hover:text-[#d4af37]">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-md border border-[#c59b27]/30 bg-[#08090c] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#e1c47a] shadow-xs">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.45rem] leading-tight text-white group-hover:text-[#e1c47a] transition-colors">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-6 text-[#cbd5e1]">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-[#d4af37] hover:text-white"
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

        {/* Por Que Escolher o Dr. Rodrigo Corrêa - Diferenciais */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-t border-[#c59b27]/25 bg-[#08090c] py-20 text-[#f8f9fa] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                light
                eyebrow="PRONTIDÃO 24H, RIGOR TÉCNICO & ATENDIMENTO HUMANO"
                description="Quando a liberdade de quem você ama está ameaçada, cada segundo conta. Você merece uma defesa criminal técnica, combativa e que atende o telefone imediatamente."
              >
                Por que confiar sua defesa criminal ao{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#e1c47a] via-[#d4af37] to-[#fbf8ee]">
                  Dr. Rodrigo Corrêa?
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dr. Rodrigo Corrêa! Gostaria de consultar sobre um caso criminal e entender os passos da defesa."
                )}
                target="_blank"
                size="md"
                variant="gold"
                className="rounded-lg shadow-sm"
              >
                <WhatsAppIcon size={16} className="text-[#08090c]" /> Falar no WhatsApp
              </GlowingButton>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {/* Card 1: Prontidão Noturna & Acolhimento Humano */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group flex flex-col justify-between rounded-xl border border-[#c59b27]/30 bg-[#0e1016] p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af37] hover:shadow-gold sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#c59b27]/40 bg-[#141720] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#e1c47a]">
                      <HeartHandshake size={14} /> Atendimento Humanizado & Próximo
                    </span>
                    <span className="text-xs font-semibold text-[#d4af37]">
                      Você Sempre Amparado
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-white sm:text-[1.75rem]">
                    Comunicação Clara, Empatia e Respostas Imediatas
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#cbd5e1]">
                    Como atestam os depoimentos reais de nossos clientes no Google, o grande diferencial do Dr. Rodrigo Corrêa é unir um conhecimento jurídico impecável a uma atenção humana rara. Em momentos de aflição, você e seus familiares recebem explicações claras, sem juridiquês inacessível, com acompanhamento próximo em cada passo.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-white">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#d4af37]" />
                      <span>Plantão penal 24 horas e contato direto com o advogado pelo WhatsApp</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#d4af37]" />
                      <span>Acolhimento especial e orientações tranquilizadoras aos familiares do preso</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#d4af37]" />
                      <span>Transparência absoluta sobre os riscos, teses e perspectivas do processo</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#c59b27]/25 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dr. Rodrigo Corrêa! Gostaria de conversar para tirar dúvidas sobre um processo criminal."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#c59b27]/40 bg-[#141720] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#f8f9fa] transition-all hover:border-[#d4af37] hover:bg-[#c59b27] hover:text-[#08090c]"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Conversar no WhatsApp com o Dr. Rodrigo
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>

              {/* Card 2: Estratégia Combina Rigor e Combate aos Abusos */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="group flex flex-col justify-between rounded-xl border border-[#c59b27]/30 bg-[#0e1016] p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af37] hover:shadow-gold sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#c59b27]/40 bg-[#141720] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#e1c47a]">
                      <Award size={14} /> Atuação Técnica & Firmeza
                    </span>
                    <span className="text-xs font-semibold text-[#d4af37]">
                      Garantias Constitucionais
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-white sm:text-[1.75rem]">
                    Defesa Estratégica, Investigação e Sustentação Oral
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#cbd5e1]">
                    Não aceitamos acusações genéricas ou prisões arbitrárias. Analisamos minuciosamente cada folha dos autos, identificamos nulidades de busca e apreensão, quebras ilegais de sigilo e depoimentos contraditórios, construindo uma estratégia sólida da delegacia aos tribunais superiores.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-white">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#d4af37]" />
                      <span>Investigação defensiva preliminar para desarticular a narrativa acusatória</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#d4af37]" />
                      <span>Postura combativa em audiências de instrução e perante o Plenário do Júri</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#d4af37]" />
                      <span>Impetração de Habeas Corpus com pedido liminar em todas as instâncias</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#c59b27]/25 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dr. Rodrigo Corrêa! Gostaria de consultar sobre a melhor estratégia jurídica para um caso penal."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#c59b27]/40 bg-[#141720] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#f8f9fa] transition-all hover:border-[#d4af37] hover:bg-[#c59b27] hover:text-[#08090c]"
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
        <section className="relative overflow-hidden border-t border-[#c59b27]/25 bg-[#0e1016] py-20 text-[#f8f9fa] sm:py-24 lg:py-28">
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-[#c59b27]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-[#d4af37]/10 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                light
                eyebrow="COMO ATUAMOS NO SEU CASO"
                description="Um método ágil, ético e resolutivo para agir com urgência na defesa penal e aplicar a estratégia de soltura mais segura e eficiente."
              >
                Três etapas claras para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#e1c47a] via-[#d4af37] to-[#fbf8ee]">
                  proteger sua liberdade e garantir a tranquilidade de sua família.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-[#c59b27]/35 bg-[#12151e] p-6 font-serif text-base italic leading-7 text-[#f8f9fa] shadow-card">
                &ldquo;A liberdade é o bem mais precioso do ser humano. Nosso compromisso é exercer uma advocacia criminal intransigente, ética e acolhedora, garantindo que você compreenda cada etapa do processo e sinta a segurança de estar sob a melhor proteção técnica.&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-[#d4af37]">
                  — Dr. Rodrigo Gomes Corrêa · Advogado Criminalista
                </footer>
              </blockquote>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-[#c59b27]/25"
            >
              {[
                [
                  "01",
                  "Contato Imediato & Intervenção Flagrancial",
                  "Acionamento 24h via WhatsApp ou ligação. Atendimento imediato em delegacia ou presídio, com entrevista prévia sigilosa e garantia do direito ao silêncio.",
                ],
                [
                  "02",
                  "Estratégia de Defesa & Medidas Urgentes",
                  "Atuação incisiva na Audiência de Custódia, elaboração de pedidos de relaxamento de prisão, revogação de preventiva e impetração ágil de Habeas Corpus com liminar.",
                ],
                [
                  "03",
                  "Acompanhamento Contínuo, Sustentação Oral & Apoio",
                  "Atuação técnica rigorosa em todas as fases da instrução processual, plenário do júri ou tribunais superiores, mantendo cliente e familiares 100% informados.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-semibold text-[#d4af37]">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-white">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-[#cbd5e1]">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Avaliações / Depoimentos Reais no Google Meu Negócio (27 Avaliações 5,0 ★) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 border-t border-[#c59b27]/25 bg-[#08090c] py-20 text-[#f8f9fa] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                light
                eyebrow="PROVA SOCIAL VERIFICADA · GOOGLE MEU NEGÓCIO"
                description="Veja depoimentos autênticos e espontâneos de clientes e familiares sobre a dedicação, a competência e a ética do Dr. Rodrigo Corrêa em Caxambu - MG."
              >
                Avaliado com nota máxima 5,0 ★ com{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#e1c47a] via-[#d4af37] to-[#fbf8ee]">
                  27 avaliações no Google pela dedicação, ética e segurança transmitida.
                </span>
              </Heading>

              {/* Verified Google Badge Card */}
              <div className="flex flex-col gap-3 rounded-xl border border-[#c59b27]/35 bg-[#0e1016] p-5 shadow-card sm:flex-row sm:items-center md:min-w-[340px]">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-lg border border-[#c59b27]/30 bg-[#141720] shadow-xs">
                  <GoogleIcon size={30} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-3xl font-bold leading-none text-white">
                      5,0
                    </span>
                    <div className="flex gap-0.5 text-[#d4af37]">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-[#d4af37] text-[#d4af37]"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#cbd5e1]">
                    Rodrigo Corrêa Advocacia Criminal
                  </p>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-[#d4af37] transition-colors hover:text-white"
                  >
                    27 avaliações no Google (100% 5★) <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Client Reviews Grid */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clientReviews.map((review) => (
                <article
                  key={review.name}
                  className="group relative flex flex-col justify-between rounded-xl border border-[#c59b27]/30 bg-[#12151e] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#d4af37] hover:shadow-gold sm:p-8"
                >
                  <div>
                    {/* Header: Stars + Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-1 text-[#d4af37]">
                        {Array.from({ length: review.rating }, (_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-[#d4af37] text-[#d4af37]"
                          />
                        ))}
                      </div>
                      <span className="rounded-md border border-[#c59b27]/35 bg-[#08090c] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#e1c47a] shadow-xs">
                        {review.badge}
                      </span>
                    </div>

                    {/* Review content */}
                    <p className="mt-5 text-[14px] italic leading-relaxed text-[#f8f9fa]">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  {/* Reviewer info */}
                  <div className="mt-6 flex items-center gap-3 border-t border-[#c59b27]/25 pt-4">
                    <div className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#c59b27]/40 bg-[#08090c] font-serif text-sm font-semibold text-[#d4af37] shadow-xs">
                      {review.name.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-serif text-base font-semibold text-white">
                        {review.name}
                      </p>
                      <p className="text-[10px] uppercase tracking-wider text-[#94a3b8]">
                        {review.reviewerTag}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom Actions and Trust Tags */}
            <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-[#c59b27]/25 pt-8 sm:flex-row">
              <div className="flex flex-wrap items-center gap-2">
                {[
                  "Advogado em Caxambu - MG",
                  "Especialista em Direito Penal",
                  "Plantão Criminal 24 Horas",
                  "Nota 5,0 ★ no Google (27 avaliações)",
                  "Audiência de Custódia & Flagrante",
                  "Habeas Corpus TJMG, STJ & STF",
                  "Tribunal do Júri & Execução Penal",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#c59b27]/30 bg-[#12151e] px-3.5 py-1.5 text-[11px] font-medium text-[#f8f9fa] shadow-xs"
                  >
                    <CheckCircle2 size={13} className="text-[#d4af37]" />
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#d4af37] transition-colors hover:text-white"
              >
                Ver Todas as 27 Avaliações no Google{" "}
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Contato & Localização da Sede em Caxambu - MG */}
        <section
          id="contato"
          className="scroll-mt-24 border-t border-[#c59b27]/25 bg-[#0e1016] py-20 text-[#f8f9fa] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                light
                eyebrow="CONTATO & PLANTÃO PENAL 24 HORAS"
                description="Acione imediatamente o Dr. Rodrigo Corrêa pelo WhatsApp para atendimento emergencial de flagrante, prisão ou agendamento de consulta jurídica com sigilo absoluto."
              >
                Prontidão total para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#e1c47a] via-[#d4af37] to-[#fbf8ee]">
                  proteger sua liberdade com técnica e excelência.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dr. Rodrigo Corrêa! Preciso de atendimento no Plantão Penal 24 Horas."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} className="text-[#08090c]" /> Acionar Plantão 24h no WhatsApp
                </GlowingButton>
                <p className="text-[11px] leading-5 text-[#cbd5e1]">
                  Plantão telefônico e WhatsApp direto:{" "}
                  <strong className="text-white">{PHONE_DISPLAY}</strong>
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-[#cbd5e1]">
                <div className="flex items-start gap-3">
                  <Clock
                    size={16}
                    className="mt-0.5 shrink-0 text-[#d4af37]"
                  />
                  <div>
                    <p className="font-semibold text-white">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-[#e1c47a] font-bold">
                      Aberto 24 Horas (Plantão Penal Ininterrupto)
                    </p>
                    <p className="text-[11px] text-[#94a3b8]">
                      Atendimento presencial em Caxambu - MG, delegacias da região e tribunais de todo o Brasil
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#d4af37]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-medium text-white transition-colors hover:text-[#d4af37]"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp 24h)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#d4af37]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#d4af37] text-white"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#d4af37]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="transition-colors hover:text-[#d4af37] text-white"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#d4af37]"
                  />
                  <div>
                    <span className="text-white">{ADDRESS_TEXT}</span>
                    <br />
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex items-center gap-1 font-semibold text-[#d4af37] hover:underline"
                    >
                      Ver no Google Maps <ArrowUpRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Card with executive presentation */}
            <div className="relative overflow-hidden rounded-xl border border-[#c59b27]/35 bg-[#12151e] p-7 shadow-card sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#a37b1e] via-[#d4af37] to-[#e1c47a]" />

              <div className="flex flex-col gap-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#e1c47a]">
                  Sede do Escritório em Caxambu - MG
                </p>
                <div className="relative h-[68px] w-[280px] sm:h-[78px] sm:w-[340px]">
                  <Image
                    src={LOGO_SRC}
                    alt="Rodrigo Corrêa Advocacia Criminal"
                    fill
                    unoptimized
                    sizes="340px"
                    className="object-contain object-left"
                  />
                </div>
              </div>

              {/* Office presentation photo */}
              <div className="relative mt-5 aspect-[16/10] w-full overflow-hidden rounded-lg border border-[#c59b27]/30 bg-[#08090c] shadow-xs">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Espaço de Atendimento do Dr. Rodrigo Corrêa em Caxambu - MG"
                  fill
                  unoptimized
                  className="object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-4 text-white">
                  <p className="text-xs font-semibold">Ambiente Executivo, Moderno e Reservado</p>
                  <p className="text-[10px] text-stone-300">{ADDRESS_TEXT}</p>
                </div>
              </div>

              <address className="mt-6 max-w-md text-[14px] not-italic leading-7 text-[#cbd5e1]">
                <strong className="font-semibold text-white">
                  Rodrigo Corrêa Advocacia Criminal
                </strong>
                <br />
                {LAWYER_TITLE}
                <br />
                Atendimento presencial em Caxambu, Sul de Minas e tribunais de todo o Brasil
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-lg border border-[#c59b27]/25 bg-[#08090c] p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#e1c47a]">
                  Atendimento & Horários
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-[#cbd5e1]">
                  <span>Plantão Criminal</span>
                  <span className="text-right font-semibold text-[#e1c47a]">
                    Aberto 24 Horas
                  </span>
                  <span>Atendimento Presencial</span>
                  <span className="text-right font-medium text-[#d4af37]">
                    Caxambu - MG (Centro)
                  </span>
                  <span>Endereço</span>
                  <span className="text-right text-white">R. Maj. Penha, 299 - Sala 101</span>
                  <span>Avaliações Google</span>
                  <span className="text-right font-semibold text-[#d4af37]">5,0 ★ (27 avaliações)</span>
                  <span>Tribunais Superiores</span>
                  <span className="text-right text-white">TJMG, STJ & STF</span>
                </div>
              </div>

              <div className="my-7 h-px bg-[#c59b27]/25" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-[#94a3b8]">
                  Atendimento sob estrito sigilo profissional e garantia constitucional
                </p>
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dr. Rodrigo Corrêa! Gostaria de agendar um atendimento no escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#c59b27]/50 bg-[#141720] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#d4af37] hover:bg-[#c59b27] hover:text-[#08090c]"
                >
                  <WhatsAppIcon size={14} /> Falar no WhatsApp <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip */}
        <section className="border-t border-[#c59b27]/25 bg-gradient-to-r from-[#08090c] via-[#12151e] to-[#08090c] px-5 py-14 text-[#f8f9fa] shadow-card sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#e1c47a]">
                <Sparkles size={13} /> RODRIGO CORRÊA ADVOCACIA CRIMINAL
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                Precisa de uma defesa criminal combativa, experiente e disponível agora?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dr. Rodrigo Corrêa! Preciso de atendimento emergencial no Plantão Penal."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-lg border border-[#fae9b5]/80 bg-gradient-to-r from-[#b38922] via-[#e5c46e] to-[#b38922] px-8 py-4 text-[11px] font-black uppercase tracking-[0.15em] text-[#08090c] shadow-[0_8px_24px_-4px_rgba(212,175,55,0.45),inset_0_1px_1.5px_rgba(255,255,255,0.85)] transition-all hover:-translate-y-0.5 hover:from-[#c59b27] hover:via-[#fae9b5] hover:to-[#c59b27] hover:shadow-[0_12px_32px_rgba(212,175,55,0.7)]"
            >
              <WhatsAppIcon size={17} className="text-[#08090c]" /> Acionar Plantão 24h{" "}
              <ArrowUpRight size={15} className="text-[#08090c]" />
            </a>
          </div>
        </section>

        {/* Footer - Elegant Luxury Noir */}
        <footer className="border-t border-[#c59b27]/25 bg-[#08090c] px-5 py-14 text-[#f8f9fa] sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <a
                href="#inicio"
                aria-label="Rodrigo Corrêa Advocacia Criminal"
                className="inline-block transition-transform hover:scale-[1.01]"
              >
                <div className="relative h-[78px] w-[300px] sm:h-[95px] sm:w-[360px]">
                  <Image
                    src={LOGO_SRC}
                    alt="Rodrigo Corrêa Advocacia Criminal"
                    fill
                    unoptimized
                    sizes="360px"
                    className="object-contain object-left"
                  />
                </div>
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-[#94a3b8]">
                ⚖️ Advocacia Criminal com rigor técnico, ética inabalável e atendimento humanizado. Foco especializado em Flagrantes, Custódia, Habeas Corpus, Tribunal do Júri e Tribunais Superiores em Caxambu - MG e em todo o Brasil.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-[#d4af37]">
                Dr. Rodrigo Gomes Corrêa — Advogado Criminalista | OAB/MG
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e1c47a]">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-[#cbd5e1]">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  O Advogado & Equipe
                </a>
                <a className="footer-link" href="#atuacao">
                  Especialidades Criminais
                </a>
                <a className="footer-link" href="#diferenciais">
                  Diferenciais
                </a>
                <a className="footer-link" href="#avaliacoes">
                  Avaliações de Clientes (5,0 ★)
                </a>
                <a className="footer-link" href="#contato">
                  Plantão 24h & Sede
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e1c47a]">
                Contato & Atendimento 24h
              </h2>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-[#cbd5e1]">
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dr. Rodrigo Corrêa! Preciso de atendimento no Plantão Penal."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 font-medium text-white"
                >
                  <WhatsAppIcon size={15} /> Plantão WhatsApp: {PHONE_DISPLAY}
                </a>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="footer-link inline-flex items-center gap-2"
                >
                  <Phone size={15} className="shrink-0" /> Telefone 24h: {PHONE_DISPLAY}
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
                  href={LINKTREE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2"
                >
                  <Sparkles size={15} className="shrink-0" /> Linktree Oficial
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
                <p className="inline-flex items-center gap-2 pt-1 text-[11px] text-[#e1c47a] font-semibold">
                  <Clock size={14} className="shrink-0 text-[#d4af37]" /> Plantão Criminal Aberto 24 Horas
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-[#c59b27]/25 pt-6 text-[10px] text-stone-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} RODRIGO CORRÊA ADVOCACIA CRIMINAL. Todos os direitos reservados.
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
              "Olá, Dr. Rodrigo Corrêa! Preciso de atendimento urgente no Plantão Criminal 24h."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com o Dr. Rodrigo Corrêa"
            className="group relative flex size-14 items-center justify-center rounded-full border-2 border-[#d4af37]/80 bg-gradient-to-b from-[#1a1e28] via-[#0e1016] to-[#08090c] text-[#e5c46e] shadow-[0_8px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(212,175,55,0.35)] transition-all duration-300 hover:scale-110 hover:border-[#fae9b5] hover:shadow-[0_10px_35px_rgba(212,175,55,0.6)] focus:outline-none focus:ring-4 focus:ring-[#d4af37]/40"
          >
            {/* Live pulsating status beacon */}
            <span className="absolute -top-0.5 -right-0.5 flex size-3.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d4af37] opacity-75"></span>
              <span className="relative inline-flex size-3.5 rounded-full border-2 border-[#08090c] bg-[#fae9b5]"></span>
            </span>
            <WhatsAppIcon size={26} className="text-[#fae9b5] transition-transform duration-300 group-hover:scale-110" />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg border border-[#c59b27]/60 bg-[#08090c]/95 px-3.5 py-1.5 text-xs font-semibold text-[#f8f9fa] shadow-2xl backdrop-blur-md transition-opacity group-hover:block">
              <span className="text-[#e1c47a]">Plantão Penal 24h</span> · Dr. Rodrigo Corrêa
            </span>
          </a>
        </aside>

        {/* Modal de Detalhes da Especialidade Criminal */}
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
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-xl border border-[#c59b27]/40 bg-[#0e1016] p-7 shadow-2xl sm:max-w-xl sm:rounded-xl sm:p-10 text-[#f8f9fa]"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-[#c59b27]/30 bg-[#141720] text-[#f8f9fa] transition-colors hover:border-[#d4af37] hover:text-[#e1c47a]"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-3 pr-12">
                  <div className="relative size-10 shrink-0 overflow-hidden rounded-lg border border-[#c59b27]/40 bg-[#08090c] p-1 shadow-xs">
                    <Image
                      src={LOGO_SYMBOL_SRC}
                      alt="Símbolo Rodrigo Corrêa Advocacia Criminal"
                      fill
                      sizes="40px"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="eyebrow-light">ADVOCACIA CRIMINAL</p>
                    <p className="text-[10px] font-semibold tracking-wider text-[#d4af37] uppercase">
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

                <p className="mt-5 text-sm leading-7 text-[#cbd5e1]">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-[#c59b27]/25 pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#e1c47a]">
                    Atuação e Procedimentos Adotados pelo Escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-[#cbd5e1]"
                      >
                        <span className="size-2 shrink-0 rounded-full bg-[#d4af37]" />
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
                    <WhatsAppIcon size={16} className="text-[#08090c]" /> Consultar sobre esta demanda
                  </GlowingButton>
                  <button
                    type="button"
                    onClick={() => setActiveArea(null)}
                    className="px-5 py-3 text-xs font-semibold text-[#94a3b8] transition-colors hover:text-white"
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
