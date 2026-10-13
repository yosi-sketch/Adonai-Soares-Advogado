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
  Building2,
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
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Star,
  UserCheck,
  Users,
  X,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5531990882518";
const PHONE_DISPLAY = "(31) 99088-2518";
const EMAIL_CONTACT = "contato@ornelaseferreira.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/ornelaseferreira.adv";
const INSTAGRAM_HANDLE = "@ornelaseferreira.adv";

const ADDRESS_TEXT =
  "Edifício Márcio Paulino | Centro Comercial — Av. Dep. Emílio Vasconcelos Costa, 133 - Segundo andar, Sala 8 - Centro, Sete Lagoas - MG, 35700-009, Brasil";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=ORNELAS+E+FERREIRA+-+ADVOGADOS+Sete+Lagoas+MG";

const LOGO_SRC = "/logo.png";
const EMBLEMA_3D_SRC = "/emblema-ornelas-ferreira.webp";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá! Gostaria de agendar uma consulta jurídica com o escritório Ornelas & Ferreira Advogados.";
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
    id: "direito-previdenciario-inss",
    title: "Direito Previdenciário (INSS & Concessões)",
    icon: Landmark,
    tag: "Concessão Ágil & Revisões",
    summary:
      "Aposentadorias, BPC/LOAS e benefícios por incapacidade concedidos com celeridade extrema e planejamento previdenciário seguro.",
    details:
      "Ter o benefício previdenciário negado ou atrasado pelo INSS compromete a subsistência de famílias e trabalhadores. Sob a liderança da Dra. Izabella Ornelas, nosso escritório é amplamente reconhecido pela rapidez e eficiência na liberação de aposentadorias especiais, auxílios e BPC/LOAS em tempo recorde, tanto na esfera administrativa quanto judicial.",
    topics: [
      "Concessão célere de BPC/LOAS para idosos e pessoas com deficiência",
      "Aposentadoria por Idade, Tempo de Contribuição e Especial (insalubridade)",
      "Benefícios por Incapacidade Temporária e Permanente (Auxílio-Doença e Invalidez)",
      "Auxílio-Acidente, Salário-Maternidade e Pensão por Morte",
      "Planejamento Previdenciário completo para conquista da melhor renda mensal",
      "Reversão de indeferimentos do INSS e Recursos Administrativos ou Judiciais",
    ],
    whatsAppText:
      "Olá, Dra. Izabella! Gostaria de consultar a concessão / revisão de um benefício do INSS.",
  },
  {
    id: "direito-trabalhista-defesa",
    title: "Direito do Trabalho & Defesa Laboral",
    icon: Briefcase,
    tag: "Resgate de Direitos & Rescisões",
    summary:
      "Atuação firme para trabalhadores e consultoria preventiva para empresas, destravando causas complexas e verbas rescisórias devidas.",
    details:
      "Relações de trabalho geram litígios que demandam técnica processual aguçada e agilidade. Atuamos com dedicação notável na cobrança de verbas devidas, rescisões indiretas por faltas graves do empregador, estabilidades violadas e acidentes de trabalho, além de assessoria preventiva e contenciosa estratégica.",
    topics: [
      "Rescisão indireta do contrato de trabalho (justa causa do empregador)",
      "Cobrança de verbas rescisórias inadimplidas, FGTS e multas rescisórias",
      "Horas extras não quitadas, intervalo intrajornada e adicional noturno",
      "Adicionais de insalubridade e periculosidade com suporte pericial",
      "Reconhecimento de vínculo empregatício formal e combate à pejotização irregular",
      "Indenizações por acidentes de trabalho, doenças ocupacionais e assédio moral",
    ],
    whatsAppText:
      "Olá! Gostaria de falar com um advogado especialista em Direito do Trabalho sobre meu caso.",
  },
  {
    id: "direito-penal-criminal-plantao-24h",
    title: "Direito Criminal & Penal Estratégico (Plantão 24h)",
    icon: ShieldAlert,
    tag: "Plantão 24h · Dr. Breno Nilson Ferreira",
    summary:
      "Atuação contundente e imediata em prisões em flagrante, audiências de custódia, inquéritos policiais, júri e habeas corpus.",
    details:
      "Nos momentos mais críticos onde a liberdade individual está em jogo, a intervenção imediata e de alto gabarito técnico é indispensável. O Dr. Breno Nilson Ferreira lidera a defesa criminal com prontidão 24 horas, atuando com sigilo absoluto, estratégia contundente e excelência processual perante autoridades policiais e tribunais.",
    topics: [
      "Plantão 24 horas para atendimento imediato em delegacias e prisões em flagrante",
      "Audiências de Custódia e pedidos urgentes de Liberdade Provisória ou Revogação de Prisão",
      "Impetração célere de Habeas Corpus perante TJMG, STJ e STF",
      "Acompanhamento estratégico em Inquéritos Policiais e investigações",
      "Defesa criminal técnica em Ações Penais e atuação no Tribunal do Júri",
      "Crimes contra o patrimônio, pessoa, crimes tributários, econômicos e da lei de drogas",
    ],
    whatsAppText:
      "Olá, Dr. Breno! Preciso de atendimento criminal urgente / Plantão 24 horas.",
  },
  {
    id: "direito-de-familia-sucessoes",
    title: "Direito de Família & Sucessões",
    icon: HeartHandshake,
    tag: "Atendimento Humanizado & Sigiloso",
    summary:
      "Divórcios consensuais e litigiosos, partilha de patrimônio, pensão alimentícia, guarda e inventários extrajudiciais ágeis.",
    details:
      "Demandas familiares exigem não apenas conhecimento jurídico rigoroso, mas também extrema empatia, equilíbrio e humanização. A Dra. Izabella Ornelas conduz cada caso com discrição exemplar, priorizando a pacificação de conflitos ou defendendo com firmeza os direitos de pais, filhos e herdeiros.",
    topics: [
      "Divórcio extrajudicial rápido em cartório e divórcio judicial contencioso",
      "Pensão alimentícia: fixação justa, pedidos de revisão e execuções de débito",
      "Guarda compartilhada, unilateral e regulamentação de convivência parental",
      "Inventário extrajudicial em cartório de notas e inventário judicial com partilha",
      "Reconhecimento e dissolução de união estável com partilha de bens",
      "Planejamento sucessório familiar, doações em vida e elaboração de testamentos",
    ],
    whatsAppText:
      "Olá, Dra. Izabella! Gostaria de consultoria jurídica em Direito de Família / Inventário.",
  },
  {
    id: "direito-publico-administrativo",
    title: "Direito Público & Administrativo",
    icon: Building2,
    tag: "Servidores Públicos & Defesa Institucional",
    summary:
      "Defesa técnica de servidores públicos, sindicâncias, PADs, concursos públicos, licitações e mandados de segurança.",
    details:
      "O Direito Público requer profundo conhecimento da legislação administrativa e da jurisprudência dos tribunais superiores. Assessoramos servidores públicos municipais, estaduais e federais em procedimentos disciplinares, direitos remuneratórios e ações contra arbitrariedades da administração pública.",
    topics: [
      "Defesa técnica em Processos Administrativos Disciplinares (PAD) e sindicâncias",
      "Mandados de Segurança contra atos ilegais ou abusivos do Poder Público",
      "Ações judiciais de defesa de direitos e verbas devidas a servidores públicos",
      "Impugnação de editais e defesas em concursos públicos e nomeações",
      "Defesa técnica em Ações de Improbidade Administrativa e Ações Civis Públicas",
      "Assessoria em licitações, contratos administrativos e recursos perante tribunais de contas",
    ],
    whatsAppText:
      "Olá! Gostaria de atendimento em Direito Público / Defesa de Servidor com o escritório.",
  },
  {
    id: "contencioso-civel-casos-complexos",
    title: "Contencioso Cível & Resolução de Casos Complexos",
    icon: Scale,
    tag: "Destravamento de Processos Antigos",
    summary:
      "Estratégia jurídica para resolver litígios travados há anos, cobranças, indenizações e contratos com alta técnica processual.",
    details:
      "Clientes chegam ao nosso escritório com causas paradas há anos por falta de movimentação ou estratégias ineficazes anteriores. Com dinamismo e determinação, reestruturamos teses, atuamos fortemente no saneamento processual e entregamos soluções onde outros profissionais não viam saída.",
    topics: [
      "Análise profunda e destravamento de processos judiciais cíveis paralisados",
      "Ações indenizatórias por danos materiais, morais, estéticos e lucros cessantes",
      "Cobrança judicial e extrajudicial de títulos, dívidas e recuperação de crédito",
      "Direito do Consumidor estratégico e ações contra abusos bancários e contratuais",
      "Elaboração, análise preventiva e rescisão de contratos civis e comerciais",
      "Medidas cautelares, embargos à execução e tutelas de urgência",
    ],
    whatsAppText:
      "Olá! Tenho um processo cível em andamento / caso complexo e gostaria de uma avaliação.",
  },
];

const clientReviews = [
  {
    name: "Patrícia Caroline",
    reviewsCount: "11 avaliações no Google",
    date: "Cliente Verificado",
    badge: "quick resolution",
    content:
      "Atendimento de primeira, a advogada Isabella é muito eficiente, flexível, pontual, prestativa, justa e excelente profissional. Tinha uma causa a mais de 10 anos que o advogado anterior não dava esperanças, aí contratei a Isabela e ela resolveu em menos de 5 meses.",
  },
  {
    name: "Guilherme Rodrigues Figueiredo",
    reviewsCount: "8 avaliações · 5 fotos",
    date: "Cliente Verificado",
    badge: "capable lawyers",
    content:
      "Tive contato com o Dr. Breno Nilson Ferreira, profissional exemplar de vasto conhecimento na área e de altíssimo gabarito. Se está procurando um advogado para resolver seu problema e sem dor de cabeça, pode contratar esse escritório e descansar tranquilamente a noite.",
  },
  {
    name: "Kleidsonn Dayann",
    reviewsCount: "5 avaliações · 1 foto",
    date: "Cliente Verificado",
    badge: "impeccable work",
    content:
      "Excelente escritório! Atendimento de altíssima qualidade, com profissionais competentes, atenciosos e extremamente comprometidos com o cliente. Desde o primeiro contato até a resolução do caso, fui tratado com respeito e transparência. Recomendo sem nenhuma dúvida!",
  },
  {
    name: "Eliana Lucia",
    reviewsCount: "1 avaliação no Google",
    date: "Cliente Verificado",
    badge: "efficiency",
    content:
      "Minha experiência foi muito positiva e satisfatória. Em meio a um caso complicado, me deparei com uma pessoa muito humana com um profissionalismo exemplar, que está sempre a disposição pra nos atender. Muito obrigada D. Izabela e sua equipe.",
  },
  {
    name: "Marcos",
    reviewsCount: "Local Guide · 167 avaliações · 513 fotos",
    date: "Cliente Verificado",
    badge: "capable lawyers",
    content:
      "Dra Isabella e Dr Breno. Muito competentes, atenciosos e dedicados ao que fazem. Atendimento humanizado nos momentos de dificuldade. Muito profissionalismo no trabalho. Me ajudaram muito.",
  },
  {
    name: "Vanessa Silva",
    reviewsCount: "Local Guide · 32 avaliações · 1 foto",
    date: "Cliente Verificado",
    badge: "quick resolution",
    content:
      "Dra. Izabella é muito boa, conseguiu o benefício da minha mãe em poucos dias.",
  },
  {
    name: "Advaldo Alves Silva",
    reviewsCount: "1 avaliação no Google",
    date: "Cliente Verificado",
    badge: "efficiency",
    content:
      "Quero expressar minha profunda gratidão pelo excelente serviço que a Dra. Isabela prestou como minha advogada trabalhista. Sua competência, dedicação e habilidade em lidar com meu caso foram verdadeiramente notáveis.",
  },
  {
    name: "Maisa Ornelas",
    reviewsCount: "2 avaliações no Google",
    date: "Cliente Verificado",
    badge: "impeccable work",
    content:
      "A Dra Izabella é de uma competência indescritível. Ela pensa até no conforto do deslocamento de seus clientes. Além de ser super inteligente, dedicada e firme em todos esses anos que ela tem de advocacia.",
  },
  {
    name: "Otto Elian",
    reviewsCount: "Local Guide · 25 avaliações",
    date: "Cliente Verificado",
    badge: "capable lawyers",
    content:
      "Breno e Izabella: Vocês são muito responsáveis e competentes. Resolve tudo com muita seriedade e atenção. Super indico!",
  },
  {
    name: "Renilson Campos",
    reviewsCount: "Local Guide · 8 avaliações · 6 fotos",
    date: "Cliente Verificado",
    badge: "efficiency",
    content:
      "Os melhores advogados que já tive! Muito atenciosos, pontuais e sempre disponíveis quando precisei. Muito obrigado!!",
  },
  {
    name: "Juliana Rocha Rocha",
    reviewsCount: "3 avaliações · 1 foto",
    date: "Cliente Verificado",
    badge: "impeccable work",
    content:
      "Super recomendo profissionais de super competência gratidão Isabella pelo trabalho impecável que fez pra minha mãe. Muito obrigada.",
  },
  {
    name: "Natanne Ramalho",
    reviewsCount: "4 avaliações no Google",
    date: "Cliente Verificado",
    badge: "capable lawyers",
    content:
      "Izabella é sempre muito atenciosa, e esclarecedora, sanando as dúvidas e auxiliando em todo o processo necessário. Indico a profissional de olhos fechados. Obrigada e parabéns pelo excelente profissionalismo.",
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
            ? "font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-white sm:text-4xl lg:text-[3.25rem]"
            : "font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-ink sm:text-4xl lg:text-[3.25rem]"
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
      <main className="overflow-hidden bg-pearl text-ink">
        {/* Navigation Bar - Titanium Dark with Polished Platinum Accents */}
        <header className="sticky top-0 z-40 border-b border-brand-700/30 bg-brand-950/95 backdrop-blur-xl">
          <div className="mx-auto flex h-[88px] max-w-7xl items-center justify-between gap-5 px-5 sm:h-[102px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="ORNELAS E FERREIRA - ADVOGADOS — Início"
              onClick={closeMenu}
              className="flex items-center gap-3 transition-opacity hover:opacity-90"
            >
              <Image
                src={LOGO_SRC}
                width={2172}
                height={724}
                alt="ORNELAS E FERREIRA - ADVOGADOS — Sete Lagoas - MG"
                priority
                className="h-[54px] w-auto object-contain sm:h-[68px]"
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
                Os Sócios & Escritório
              </a>
              <a className="nav-link" href="#atuacao">
                Áreas de Atuação
              </a>
              <a className="nav-link" href="#diferenciais">
                Por que Escolher?
              </a>
              <a className="nav-link" href="#avaliacoes">
                Avaliações (4,9 ★)
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
                aria-label="Instagram de Ornelas e Ferreira Advogados"
                className="grid size-10 place-items-center rounded-full border border-brand-400/30 text-brand-200 transition-all hover:border-brand-200 hover:bg-brand-900 hover:text-white"
                title="Instagram @ornelaseferreira.adv"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                aria-label="Ligar para Ornelas e Ferreira Advogados"
                className="grid size-10 place-items-center rounded-full border border-brand-400/30 text-brand-200 transition-all hover:border-brand-200 hover:bg-brand-900 hover:text-white"
                title={`Ligar: ${PHONE_DISPLAY}`}
              >
                <Phone size={16} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp de Ornelas e Ferreira Advogados"
                className="grid size-10 place-items-center rounded-full border border-brand-400/30 text-brand-200 transition-all hover:border-brand-200 hover:bg-brand-900 hover:text-white"
                title="Atendimento no WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <GlowingButton
                href={getWhatsAppUrl()}
                target="_blank"
                size="sm"
                variant="platinum"
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
              className="grid size-11 place-items-center rounded-full border border-brand-400/25 text-brand-200 lg:hidden"
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
                className="overflow-hidden border-t border-brand-700/25 bg-brand-950 px-6 lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["Os Sócios & Escritório", "#sobre"],
                    ["Áreas de Atuação", "#atuacao"],
                    ["Por que Escolher?", "#diferenciais"],
                    ["Avaliações no Google (4,9 ★)", "#avaliacoes"],
                    ["Contato & Sede em Sete Lagoas", "#contato"],
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
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-100 via-white to-brand-200 px-5 py-3.5 text-xs font-bold uppercase tracking-[0.13em] text-brand-950 shadow-md transition-all hover:brightness-105"
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} /> WhatsApp: {PHONE_DISPLAY}
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-400/25 px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-brand-200 transition-all hover:border-brand-200"
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <MapPin size={15} /> Edifício Márcio Paulino, Sala 8, Sete Lagoas
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
          className="relative isolate scroll-mt-24 border-b border-brand-300/30 bg-gradient-to-b from-brand-50/70 via-pearl to-white"
        >
          {/* Subtle platinum / silver ambient glow */}
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[36rem] rounded-full bg-brand-200/40 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[28rem] rounded-full bg-brand-100/60 blur-3xl" />

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
                  Sete Lagoas - MG · Edifício Márcio Paulino · 4,9 ★ no Google
                </span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="max-w-[760px] font-serif text-[2.75rem] leading-[1.04] tracking-[-0.025em] text-ink sm:text-5xl lg:text-[4.15rem]"
              >
                Protegemos seus direitos e reduzimos riscos com{" "}
                <span className="font-serif italic text-brand-700">
                  excelência e rapidez.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-ink-soft sm:text-base sm:leading-8"
              >
                Atuação de destaque liderada pela{" "}
                <strong className="font-semibold text-ink">
                  Dra. Izabella Ornelas
                </strong>{" "}
                e pelo{" "}
                <strong className="font-semibold text-ink">
                  Dr. Breno Nilson Ferreira
                </strong>{" "}
                no escritório{" "}
                <strong className="font-semibold text-ink">
                  Ornelas & Ferreira Advogados
                </strong>
                . Especialistas em{" "}
                <strong className="font-semibold text-ink">
                  Direito Previdenciário (INSS), Trabalhista, Criminal (Plantão 24h), Família e Direito Público
                </strong>{" "}
                — com atendimento presencial de alto nível em Sete Lagoas (MG) e atuação firme em todo o Brasil.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl()}
                  target="_blank"
                  size="lg"
                  variant="platinum"
                  className="rounded-full shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar no WhatsApp Agora
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
                className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-brand-300/40 pt-6 text-xs text-ink-soft"
              >
                <span className="inline-flex items-center gap-2 font-medium">
                  <Star size={15} className="fill-amber-500 text-amber-500" />{" "}
                  4,9 estrelas no Google (129 avaliações)
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <Clock size={15} className="text-brand-700" /> Atendimento 24h &
                  Plantão Criminal Ativo
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <MapPin size={15} className="text-brand-700" /> Edifício Márcio
                  Paulino, Sala 8 · Centro, Sete Lagoas - MG
                </span>
              </motion.div>
            </motion.div>

            {/* Hero Emblem Presentation - 3D Metallic Insignia */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.95,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-[480px] lg:ml-auto lg:mr-2"
            >
              <div className="relative aspect-square overflow-hidden rounded-3xl border border-brand-500/35 bg-brand-950 shadow-2xl ring-1 ring-brand-300/30">
                <Image
                  src={EMBLEMA_3D_SRC}
                  alt="ORNELAS & FERREIRA - ADVOGADOS — Emblema Jurídico Metálico Oficial em Sete Lagoas - MG"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 42vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-950 via-brand-950/70 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-8 sm:left-8 sm:right-8">
                  <div>
                    <p className="font-serif text-2xl font-normal tracking-wide text-white">
                      Ornelas & Ferreira
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-brand-200">
                      Advogados Associados · Sete Lagoas - MG
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-brand-400/40 bg-brand-950/80 text-brand-200 backdrop-blur-sm">
                    <Scale size={18} />
                  </span>
                </div>
              </div>

              {/* Floating Google rating badge */}
              <div className="absolute -bottom-3 -left-3 rounded-2xl border border-brand-300/50 bg-white/95 p-3.5 shadow-card backdrop-blur-md sm:-left-5">
                <div className="flex items-center gap-2">
                  <GoogleIcon size={16} />
                  <div className="flex items-center gap-1 text-brand-800">
                    <Star size={13} className="fill-amber-500 text-amber-500" />
                    <span className="font-serif text-base font-bold text-ink">
                      4,9 / 5,0
                    </span>
                  </div>
                </div>
                <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-ink-soft">
                  129 Avaliações no Google
                </p>
              </div>

              {/* Floating authority badge */}
              <div className="absolute -right-3 top-6 rounded-full border border-brand-400/40 bg-white/95 px-4 py-2 text-[10px] font-bold tracking-[0.14em] text-brand-900 shadow-card backdrop-blur-md sm:-right-5">
                ATUAÇÃO NACIONAL · PLANTÃO 24H
              </div>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-brand-200/50 bg-white"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              [
                "4,9 ★",
                "nota máxima com 129 avaliações reais no Google Maps",
              ],
              [
                "Plantão 24 Horas",
                "prontidão criminal para emergências e flagrantes",
              ],
              [
                "Sete Lagoas - MG",
                "Edifício Márcio Paulino, Av. Dep. Emílio Vasconcelos, 133",
              ],
              [
                "Atuação Nacional",
                "atendimento em Direito Previdenciário, Trabalhista e Cível",
              ],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-brand-200/60"
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

        {/* Sobre os Sócios & O Escritório */}
        <section
          id="sobre"
          className="scroll-mt-24 bg-pearl py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
            {/* 3D Insignia Presentation */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[500px]"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-brand-700/30 bg-brand-950 shadow-card">
                <Image
                  src={EMBLEMA_3D_SRC}
                  alt="Escritório Ornelas e Ferreira Advogados em Sete Lagoas - MG"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-950/95 via-brand-950/40 to-transparent" />
              </div>

              {/* Authority badge card */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-brand-300/60 bg-white px-5 py-4 shadow-card sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-brand-800">
                  <Award size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em]">
                    Advocacia de Alta Performance
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-ink">
                  Ornelas & Ferreira Advogados
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-brand-700">
                  Dra. Izabella Ornelas & Dr. Breno Nilson Ferreira
                </p>
                <p className="mt-1 text-[11px] leading-4 text-ink-soft">
                  Edifício Márcio Paulino, Av. Dep. Emílio Vasconcelos Costa, 133 - Sala 8, Sete Lagoas - MG.
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
                SOBRE O ESCRITÓRIO & CORPO JURÍDICO
              </motion.p>
              <motion.h2
                variants={reveal}
                className="mt-4 max-w-2xl font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-ink sm:text-4xl lg:text-[3.25rem]"
              >
                Rigor técnico e determinação aliados a um{" "}
                <span className="italic text-brand-700">
                  atendimento humanizado, ágil e resolutivo.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-ink-soft"
              >
                Com sede de destaque no{" "}
                <strong className="text-ink">
                  Edifício Márcio Paulino no Centro de Sete Lagoas (MG)
                </strong>{" "}
                e atuação em todo o Brasil, o escritório{" "}
                <strong className="text-ink">Ornelas & Ferreira Advogados</strong>{" "}
                consolida-se como referência máxima em assessoria jurídica especializada, construindo um histórico consistente de causas vitoriosas e processos destravados com rapidez surpreendente.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-ink-soft"
              >
                Nossa atuação é pautada em dois pilares inegociáveis: a{" "}
                <strong className="text-ink">técnica jurídica impecável</strong>{" "}
                e o <strong className="text-ink">acolhimento humano</strong> de cada pessoa que nos confia seu problema. Nos dedicamos pessoalmente para entender a fundo sua dor, assegurar transparência absoluta e lutar pelo melhor resultado no menor tempo possível.
              </motion.p>

              {/* Partners Profiles Grid */}
              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2"
              >
                {/* Dra. Izabella Ornelas */}
                <div className="rounded-xl border border-brand-200/70 bg-white p-5 transition-all hover:border-brand-400 hover:shadow-card">
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-full bg-brand-50 text-brand-800">
                      <UserCheck size={20} />
                    </span>
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-brand-700">
                        Sócia-Fundadora
                      </span>
                      <h3 className="font-serif text-lg font-bold text-ink">
                        Dra. Izabella Ornelas
                      </h3>
                    </div>
                  </div>
                  <p className="mt-3 text-xs leading-5 text-ink-soft">
                    Reconhecida por anos de experiência, dedicação incansável e atendimento profundamente humanizado. Especialista em Direito Previdenciário (concessões céleres), Trabalhista e de Família.
                  </p>
                </div>

                {/* Dr. Breno Nilson Ferreira */}
                <div className="rounded-xl border border-brand-200/70 bg-white p-5 transition-all hover:border-brand-400 hover:shadow-card">
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-full bg-brand-50 text-brand-800">
                      <Scale size={20} />
                    </span>
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-brand-700">
                        Sócio-Fundador
                      </span>
                      <h3 className="font-serif text-lg font-bold text-ink">
                        Dr. Breno Nilson Ferreira
                      </h3>
                    </div>
                  </div>
                  <p className="mt-3 text-xs leading-5 text-ink-soft">
                    Profissional exemplar de altíssimo gabarito e vasto conhecimento jurídico. Referência em Direito Criminal & Penal Estratégico (plantão 24h), Direito Público e litígios complexos.
                  </p>
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
                    Atendimento humanizado com suporte e escuta atenta
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={15}
                    className="shrink-0 text-brand-700"
                  />
                  <span>
                    Agilidade e rapidez comprovada na resolução de casos
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={15}
                    className="shrink-0 text-brand-700"
                  />
                  <span>
                    Sede moderna no Edifício Márcio Paulino (Sala 8)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={15}
                    className="shrink-0 text-brand-700"
                  />
                  <span>
                    Avaliação 4,9 ★ no Google com mais de 129 avaliações
                  </span>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de agendar uma consulta com a equipe Ornelas & Ferreira Advogados."
                  )}
                  target="_blank"
                  size="md"
                  variant="platinum"
                  className="rounded-full shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar com Nossos Advogados
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
                description="Estratégias jurídicas completas e interdisciplinares para proteger seus direitos, seu patrimônio e sua liberdade em Sete Lagoas, Minas Gerais e em todo o território nacional."
              >
                Defesa jurídica especializada em{" "}
                <span className="italic text-brand-700">
                  áreas essenciais do Direito.
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
                    className="group flex min-h-[350px] flex-col rounded-xl border border-brand-200/70 bg-pearl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500 hover:shadow-card sm:p-8"
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

        {/* Seção Especial: Por que Escolher Ornelas & Ferreira Advogados? */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-y border-brand-200/60 bg-brand-50/50 py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                eyebrow="EFICIÊNCIA COMPROVADA & RESOLUÇÃO DE CASOS"
                description="Veja como o compromisso com a celeridade e o conhecimento técnico transformam problemas aparentemente insolúveis em desfechos rápidos e favoráveis."
              >
                Causas travadas ou sem esperança?{" "}
                <span className="italic text-brand-700">
                  Nós destravamos e buscamos o seu direito.
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá! Gostaria de uma análise para destravar / conduzir meu caso com o escritório Ornelas & Ferreira."
                )}
                target="_blank"
                size="md"
                variant="platinum"
                className="rounded-full shadow-sm"
              >
                <WhatsAppIcon size={16} /> Analisar Meu Caso no WhatsApp
              </GlowingButton>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {/* Card 1: Celeridade Previdenciária e Trabalhista */}
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
                      <Landmark size={14} /> Previdenciário & Trabalhista
                    </span>
                    <span className="text-xs font-semibold text-brand-700">
                      Concessões Ágeis
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-ink sm:text-[1.75rem]">
                    Processos de 10 Anos Resolvidos em Meses
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
                    Histórias reais como a de clientes que aguardavam há uma década sem esperança e viram seu problema solucionado em menos de 5 meses pela Dra. Izabella Ornelas, ou benefícios do INSS liberados em poucos dias. Atuamos com estratégia proativa e peticionamento assertivo para furar filas e acelerar o julgamento.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-ink">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-brand-700" />
                      <span>Análise documental minuciosa no primeiro atendimento</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-brand-700" />
                      <span>Cobrança constante de prazos judiciais e administrativos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-brand-700" />
                      <span>Informação clara e acolhedora em cada etapa ao cliente</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-brand-200/60 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Izabella! Gostaria de consultar um benefício do INSS ou demanda trabalhista."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-xl border border-brand-800/20 bg-brand-50/80 px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-900 transition-all hover:border-brand-800 hover:bg-brand-900 hover:text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Solicitar Análise com Dra. Izabella
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>

              {/* Card 2: Plantão Criminal 24h & Defesa Estratégica */}
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
                      <ShieldAlert size={14} /> Plantão 24 Horas
                    </span>
                    <span className="text-xs font-semibold text-brand-700">
                      Dr. Breno Nilson Ferreira
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-ink sm:text-[1.75rem]">
                    Prontidão Imediata em Matéria Criminal & Penal
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
                    Flagrantes, audiências de custódia e inquéritos não esperam o horário comercial. O Dr. Breno Nilson Ferreira oferece retaguarda criminal de altíssimo gabarito 24 horas por dia, garantindo o respeito estrito às garantias constitucionais e a construção imediata da tese defensiva.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-ink">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-brand-700" />
                      <span>Atendimento urgente 24h em delegacias e presídios</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-brand-700" />
                      <span>Habeas Corpus ágil e defesas em audiências de custódia</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-brand-700" />
                      <span>Atuação segura para que você descanse tranquilamente à noite</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-brand-200/60 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dr. Breno! Preciso de atendimento urgente em Direito Criminal / Plantão 24 horas."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-xl border border-brand-800/20 bg-brand-50/80 px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-900 transition-all hover:border-brand-800 hover:bg-brand-900 hover:text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Acionar Plantão 24h com Dr. Breno
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
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-brand-800/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-brand-700/15 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="NOSSO COMPROMISSO PROFISSIONAL"
                light
                description="O reconhecimento como um dos escritórios mais bem avaliados de Minas Gerais (4,9 ★ no Google com 129 avaliações) é fruto direto de uma advocacia que combina inteligência processual e empatia humana."
              >
                Protegemos direitos e reduzimos riscos com{" "}
                <span className="italic text-brand-200">
                  seriedade e atenção total.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-brand-400/25 bg-white/5 p-6 font-serif text-base italic leading-7 text-brand-100">
                &ldquo;Se está procurando um advogado para resolver seu problema e sem dor de cabeça, pode contratar esse escritório e descansar tranquilamente a noite.&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-brand-300">
                  — Guilherme Rodrigues Figueiredo · Avaliação no Google
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
                  "Atendimento Humanizado & Escuta Acolhedora",
                  "Entendemos que por trás de cada processo existe uma família, um trabalhador ou uma empresa em momento delicado. Explicamos cada passo de forma acessível e transparente.",
                ],
                [
                  "02",
                  "Celeridade e Rapidez Incomparável na Condução",
                  "Não deixamos processos acumularem poeira. Pressionamos prazos, acionamos vias extrajudiciais e judiciais dinâmicas para entregar a solução no menor tempo legal possível.",
                ],
                [
                  "03",
                  "Estrutura de Excelência no Centro de Sete Lagoas",
                  "Localização privilegiada no Edifício Márcio Paulino (Sala 8), com estrutura confortável, sigilo profissional absoluto e tecnologia para atender clientes de qualquer lugar do Brasil.",
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

        {/* Avaliações no Google (Depoimentos Reais - 4,9 estrelas · 129 avaliações) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                eyebrow="PROVA SOCIAL VERIFICADA · GOOGLE MEU NEGÓCIO"
                description="Confira depoimentos autênticos de quem confiou suas causas mais importantes ao escritório Ornelas & Ferreira Advogados em Sete Lagoas e em todo o Brasil."
              >
                Reconhecido com 4,9 ★ pela{" "}
                <span className="italic text-brand-700">
                  eficiência, competência e trabalho impecável.
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
                      4,9
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
                    Ornelas & Ferreira Advogados
                  </p>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-brand-800 transition-colors hover:text-brand-950"
                  >
                    129 avaliações no Google <ArrowUpRight size={13} />
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
                  "Atendimento humanizado",
                  "Profissionais competentes",
                  "Resolução rápida",
                  "Trabalho impecável",
                  "Plantão 24h ativo",
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
                Ver perfil e 129 avaliações no Google{" "}
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
                eyebrow="CONTATO & SEDE EM SETE LAGOAS - MG"
                description="Agende seu atendimento presencial em nosso escritório no Edifício Márcio Paulino ou inicie seu atendimento pelo WhatsApp com retorno ágil para qualquer lugar do país."
              >
                Estamos prontos para{" "}
                <span className="italic text-brand-700">
                  defender seus direitos.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl()}
                  target="_blank"
                  size="lg"
                  variant="platinum"
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
                      Aberto 24 horas (Plantão Jurídico e Atendimento Emergencial)
                    </p>
                    <p className="text-[11px] text-ink-soft/80">
                      Segunda a Domingo: Atendimento Ágil
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
                    Sete Lagoas · Minas Gerais
                  </p>
                </div>
              </div>

              <address className="mt-7 max-w-md text-[14px] not-italic leading-7 text-ink-soft">
                <strong className="font-semibold text-ink">
                  Ornelas & Ferreira Advogados
                </strong>
                <br />
                Dra. Izabella Ornelas & Dr. Breno Nilson Ferreira
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-xl border border-brand-200/60 bg-pearl p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-brand-800">
                  Expediente & Plantão
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-ink-soft">
                  <span>Atendimento & Recepção</span>
                  <span className="text-right font-semibold text-ink">
                    Aberto 24 Horas
                  </span>
                  <span>Plantão Criminal</span>
                  <span className="text-right font-semibold text-emerald-700">
                    24 Horas Ativo
                  </span>
                  <span>Atendimento Digital</span>
                  <span className="text-right text-ink">Nacional</span>
                </div>
              </div>

              <div className="my-7 h-px bg-brand-200/60" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-ink-soft">
                  Edifício Márcio Paulino · Centro Comercial, Sete Lagoas
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

        {/* Pre-Footer CTA Strip - Deep Titanium Slate with Platinum Sheen */}
        <section className="bg-gradient-to-r from-brand-950 via-brand-900 to-brand-950 px-5 py-14 text-white shadow-inner sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-200">
                <Sparkles size={13} /> ORNELAS & FERREIRA ADVOGADOS · SETE LAGOAS - MG
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                Precisa de apoio jurídico seguro, rápido e comprometido com o seu resultado?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá! Gostaria de agendar uma consulta inicial com o escritório Ornelas & Ferreira Advogados."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-gradient-to-r from-brand-100 via-white to-brand-200 px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-950 shadow-md transition-all hover:-translate-y-0.5 hover:brightness-105 hover:shadow-lg"
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
                aria-label="ORNELAS E FERREIRA - ADVOGADOS"
                className="inline-block"
              >
                <Image
                  src={LOGO_SRC}
                  width={2172}
                  height={724}
                  alt="ORNELAS E FERREIRA - ADVOGADOS"
                  className="h-16 w-auto object-contain sm:h-20"
                />
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-brand-100/70">
                🤝 Protegemos direitos e reduzimos riscos. Atuação nacional em Direito Previdenciário (INSS), Trabalhista, Criminal (Plantão 24h), Família e Direito Público.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-brand-300">
                Dra. Izabella Ornelas & Dr. Breno Nilson Ferreira
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
                  Os Sócios & Escritório
                </a>
                <a className="footer-link" href="#atuacao">
                  Áreas de Atuação
                </a>
                <a className="footer-link" href="#diferenciais">
                  Por que Escolher?
                </a>
                <a className="footer-link" href="#avaliacoes">
                  Avaliações no Google (4,9 ★)
                </a>
                <a className="footer-link" href="#contato">
                  Contato & Sede em Sete Lagoas
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
                    "Olá! Gostaria de solicitar um atendimento com a Ornelas & Ferreira Advogados."
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
                  <Clock size={14} className="shrink-0" /> Aberto 24 Horas · Plantão Jurídico
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/15 pt-6 text-[10px] text-brand-100/55 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} ORNELAS E FERREIRA - ADVOGADOS. Todos os direitos reservados.
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
              "Olá! Gostaria de tirar uma dúvida com o escritório Ornelas & Ferreira Advogados."
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
                    variant="platinum"
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
