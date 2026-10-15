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
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  Award,
  CheckCircle2,
  Clock,
  FileCheck,
  FileSearch,
  FileText,
  HandHeart,
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
  Users,
  X,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5532984997442";
const PHONE_DISPLAY = "(32) 98499-7442";
const EMAIL_CONTACT = "contato@leticiasaldanha.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/leticiasaldanha.adv/";
const INSTAGRAM_HANDLE = "@leticiasaldanha.adv";

const ADDRESS_TEXT =
  "Praça Rui Barbosa, 170 - Sl 108 - Centro, Cataguases - MG, 36770-034 (Calçadão Shopping)";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Let%C3%ADcia+Saldanha+Advocacia+Pra%C3%A7a+Rui+Barbosa+170+Cataguases+MG";

const LOGO_SRC = "/logo-trimmed.png";
const LOGO_FULL_SRC = "/logo-leticia-saldanha.png";
const FOTO_HERO_SRC = "/leticia-elegante.png";
const FOTO_SOBRE_SRC = "/leticia-apresentacao.png";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Letícia Saldanha! Gostaria de consultar sobre meus direitos trabalhistas / previdenciários e agendar um atendimento.";
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
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
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
    id: "aposentadorias-planejamento-inss",
    title: "Aposentadorias do INSS & Planejamento Previdenciário",
    icon: Landmark,
    tag: "Aposentadorias · Regras de Transição · CNIS · Planejamento",
    summary:
      "Planejamento previdenciário estratégico e requerimento de aposentadorias para garantir o valor máximo do seu benefício, sem perda de tempo ou dinheiro com o INSS.",
    details:
      "A aposentadoria é a conquista de uma vida inteira de trabalho. Com as constantes mudanças legislativas e regras de transição complexas, muitos segurados se aposentam precocemente com valores reduzidos ou enfrentam demoras indevidas. A Dra. Letícia Saldanha realiza um estudo minucioso de cada vínculo no CNIS, averba períodos rurais e especiais, e conduz seu processo administrativo e judicial com precisão.",
    topics: [
      "Aposentadoria por Idade Urbana e Rural com cômputo de períodos campesinos",
      "Aposentadoria por Tempo de Contribuição e cálculo da Regra de Transição mais vantajosa",
      "Aposentadoria Especial para trabalhadores expostos a agentes nocivos e insalubridade",
      "Aposentadoria da Pessoa com Deficiência (PCD) com requisitos diferenciados",
      "Planejamento Previdenciário Preventivo para projetar o momento e valor ideal",
      "Acerto de vínculos, pendências e indicadores extemporâneos no CNIS",
    ],
    whatsAppText:
      "Olá, Dra. Letícia! Gostaria de consultar sobre Aposentadoria / Planejamento Previdenciário no INSS.",
  },
  {
    id: "bpc-loas-beneficio-assistencial",
    title: "BPC / LOAS para Idosos e Pessoas com Deficiência",
    icon: HeartHandshake,
    tag: "BPC Idoso · BPC Deficiência · TEA · Reversão de Negativas",
    summary:
      "Concessão ágil do benefício assistencial de 1 salário mínimo mensal para idosos com 65+ anos ou pessoas com deficiência e baixa renda, mesmo sem histórico de contribuição.",
    details:
      "O Benefício de Prestação Continuada (BPC/LOAS) é uma garantia de dignidade e sobrevivência. Frequentemente o INSS indefere pedidos alegando que a renda familiar per capita ultrapassa o teto legal ou que a deficiência não atende aos critérios. Atuamos de forma combativa para comprovar despesas essenciais com remédios, fraldas e tratamentos, revertendo a negativa na via administrativa ou judicial.",
    topics: [
      "BPC/LOAS para idosos a partir de 65 anos em situação de vulnerabilidade",
      "BPC/LOAS para pessoas com deficiência física, mental, intelectual ou sensorial",
      "Benefício para crianças e adultos com Transtorno do Espectro Autista (TEA)",
      "Dedução comprovada de despesas médicas, tratamentos contínuos e alimentação especial",
      "Ação judicial rápida para reversão de indeferimento indevido pelo INSS",
      "Recebimento de valores retroativos acumulados desde a data do primeiro pedido",
    ],
    whatsAppText:
      "Olá, Dra. Letícia! Gostaria de uma análise para solicitar o benefício do BPC/LOAS.",
  },
  {
    id: "auxilio-doenca-invalidez-pensao",
    title: "Auxílio por Incapacidade, Invalidez & Pensão por Morte",
    icon: ShieldCheck,
    tag: "Auxílio-Doença · Invalidez · Pensão por Morte · Auxílio-Acidente",
    summary:
      "Amparo imediato para quem adoeceu, sofreu acidente ou perdeu o provedor da família, com assistência técnica para perícias médicas e liberação de benefícios negados.",
    details:
      "Quando a saúde é abalada, a burocracia do INSS não pode ser um obstáculo. Diante de perícias médicas sumárias e negativas injustas, a Dra. Letícia Saldanha reúne a documentação clínica necessária, elabora quesitos periciais assertivos e recorre judicialmente com rapidez para restabelecer o sustento do trabalhador e de seus dependentes.",
    topics: [
      "Auxílio por Incapacidade Temporária (Auxílio-Doença comum ou acidentário)",
      "Aposentadoria por Incapacidade Permanente (Invalidez) com acréscimo de 25% para cuidador",
      "Auxílio-Acidente mensal indenizatório para quem ficou com sequela redutora",
      "Pensão por Morte para cônjuges, companheiros em união estável, filhos e dependentes",
      "Mandado de Segurança contra demora abusiva do INSS na análise de pedidos",
      "Revisões de benefícios para aumento do valor mensal e cobrança de diferenças",
    ],
    whatsAppText:
      "Olá, Dra. Letícia! Preciso de ajuda jurídica para Auxílio-Doença / Invalidez / Pensão por Morte no INSS.",
  },
  {
    id: "rescisao-indireta-direitos-trabalhistas",
    title: "Rescisão Indireta & Demissão por Falta do Empregador",
    icon: FileText,
    tag: "Rescisão Indireta · FGTS Atrasado · Salários · Demissão Justa",
    summary:
      "Liberte-se de condições contratuais abusivas e 'demita a empresa' com direito a todas as verbas rescisórias integrais, multa de 40% do FGTS e seguro-desemprego.",
    details:
      "Trabalhar sem receber FGTS, enfrentar atrasos salariais constantes ou suportar descumprimento de obrigações contratuais são faltas graves do empregador previstas no art. 483 da CLT. Através da ação de Rescisão Indireta, o trabalhador encerra o vínculo sem pedir demissão, assegurando o saque imediato do FGTS acumulado, aviso prévio indenizado e seguro-desemprego.",
    topics: [
      "Falta de recolhimento de FGTS ou atraso reiterado de salários e benefícios",
      "Descumprimento grave das cláusulas contratuais pelo empregador",
      "Liberação imediata das guias de saque do FGTS com multa de 40%",
      "Habilitação no seguro-desemprego e recebimento de aviso prévio indenizado",
      "Reversão de demissão por justa causa infundada aplicada pelo empregador",
      "Cobrança de saldo de salário, 13º proporcional e férias vencidas com 1/3",
    ],
    whatsAppText:
      "Olá, Dra. Letícia! Gostaria de consultar sobre Rescisão Indireta / Direitos Trabalhistas.",
  },
  {
    id: "acidentes-doencas-ocupacionais",
    title: "Acidentes de Trabalho, Doenças Ocupacionais & Estabilidade",
    icon: AlertCircle,
    tag: "Acidente de Trabalho · Burnout · LER/DORT · Estabilidade 12 Meses",
    summary:
      "Defesa incisiva para trabalhadores lesionados, adoecidos pelo trabalho ou demitidos irregularmente durante o período de estabilidade legal provisória.",
    details:
      "Seja por acidente nas dependências da empresa, no trajeto ou pelo desenvolvimento de doenças como Burnout, depressão e lesões por esforços repetitivos (LER/DORT), o trabalhador tem direitos específicos resguardados pela CLT e pela Previdência. Garantimos a emissão da CAT, reintegração ao emprego ou indenização substitutiva e reparação por danos morais e materiais.",
    topics: [
      "Exigência e emissão da Comunicação de Acidente de Trabalho (CAT)",
      "Garantia da estabilidade provisória no emprego de no mínimo 12 meses",
      "Indenização por Danos Morais, Danos Materiais e Danos Estéticos",
      "Pensão mensal proporcional em caso de redução permanente da capacidade laboral",
      "Doenças psicológicas ocupacionais decorrentes de sobrecarga e pressão (Burnout)",
      "Reintegração ao trabalho ou indenização do período de estabilidade violado",
    ],
    whatsAppText:
      "Olá, Dra. Letícia! Preciso de orientação para caso de Acidente de Trabalho / Doença Ocupacional.",
  },
  {
    id: "horas-extras-insalubridade-assedio",
    title: "Horas Extras, Insalubridade, Periculosidade & Assédio",
    icon: Scale,
    tag: "Horas Extras · Adicionais 10% a 40% · Assédio Moral · Equiparação",
    summary:
      "Remuneração justa para cada hora dedicada ao trabalho, cobrança de adicionais de risco à saúde e combate severo a situações de humilhação ou perseguição.",
    details:
      "Muitos trabalhadores realizam jornadas exaustivas sem o devido pagamento de horas extras ou cumprem funções expostos a agentes nocivos, químicos ou risco de vida sem receber insalubridade ou periculosidade. Além disso, coibimos qualquer forma de assédio moral, cobranças vexatórias e desvio de função, resguardando a sua dignidade profissional.",
    topics: [
      "Cálculo detalhado de horas extras, intervalo intrajornada suprimido e sobreaviso",
      "Adicional de Insalubridade (10%, 20% ou 40%) por exposição a calor, ruído ou agentes biológicos",
      "Adicional de Periculosidade (30%) para funções com risco à integridade física e eletricidade",
      "Equiparação Salarial e Desvio de Função com reflexos em todas as verbas",
      "Indenização reparatória por Assédio Moral, perseguição ou humilhação no ambiente de trabalho",
      "Consultoria preventiva trabalhista e conformidade legal para empresas",
    ],
    whatsAppText:
      "Olá, Dra. Letícia! Gostaria de consultar sobre Horas Extras / Insalubridade / Assédio no Trabalho.",
  },
];

const clientReviews = [
  {
    name: "Raul Guedes TV",
    reviewsCount: "Cliente Verificado · 4 avaliações",
    date: "Google Meu Negócio · 6 meses atrás",
    badge: "atendimento impecável",
    content:
      "Atendimento impecável. A Dra. Letícia é uma profissional muito preparada, ética e que transmite total confiança ao cliente. Com certeza uma das melhores referências na advocacia aqui em Cataguases e região. Parabéns pelo trabalho!",
  },
  {
    name: "Leticia Oliveira",
    reviewsCount: "Cliente Verificada · 4 avaliações",
    date: "Google Meu Negócio · 2 anos atrás",
    badge: "acolhimento & segurança",
    content:
      "Eu nunca me senti tão bem, tão acolhida por alguém como a Dra Letícia. Sempre ouvia falar dos trabalhos feitos por ela, só quando entreguei o caso nas mãos dela que pude ter a certeza e sentir de onde veio tantos elogios. Super recomendo !!! Parabéns e continue com esse profissionalismo, Cataguases e região precisa.",
  },
  {
    name: "Luciana Castro",
    reviewsCount: "Cliente Verificada · 1 avaliação",
    date: "Google Meu Negócio · 3 meses atrás",
    badge: "muito competente",
    content:
      "Letícia, além de ser profissional muito competente e responsável. Tem um carisma, está sempre disposta a ajudar e esclarecer todas as dúvidas.",
  },
  {
    name: "Amanda Moura",
    reviewsCount: "Cliente Verificada · 4 avaliações · 1 foto",
    date: "Google Meu Negócio · 4 anos atrás",
    badge: "resultado surpreendente",
    content:
      "Excelente profissional! Conseguiu reverter uma causa que já considerava perdida! Recomendo muito.",
  },
  {
    name: "Guilherme Ferraz Rodrigues",
    reviewsCount: "Local Guide · 14 avaliações · 1 foto",
    date: "Google Meu Negócio · 4 anos atrás",
    badge: "clareza & dedicação",
    content:
      "Extremamente atenciosas e explicativas. Passaram tudo do meu processo de forma clara que eu pudesse entender. Eu recomendo.",
  },
  {
    name: "Livia Maria",
    reviewsCount: "Cliente Verificada · 1 avaliação",
    date: "Google Meu Negócio · 1 ano atrás",
    badge: "trabalhista & previdenciária",
    content:
      "Excelente profissional nas áreas trabalhista e previdenciária. Certeza que fiz ótima escolha!!!!!!",
  },
  {
    name: "Victor Silva",
    reviewsCount: "Cliente Verificado · 2 avaliações",
    date: "Google Meu Negócio · 1 ano atrás",
    badge: "ótimo resultado",
    content:
      "Excelente! Conseguiu tirar todas as minhas dúvidas, e assim conseguimos ter um ótimo resultado. Recomendo muito!! Uma excelente profissional!.",
  },
  {
    name: "Jussara Helena",
    reviewsCount: "Cliente Verificada · 2 avaliações · 1 foto",
    date: "Google Meu Negócio · 6 meses atrás",
    badge: "atenção maravilhosa",
    content:
      "Nossa ela é super simpática, carismática e dá uma atenção maravilhosa pra gente. Ameiiii o atendimento com ela, quem procurar ela garanto que não vai se arrepender!",
  },
  {
    name: "Sergio de Pinho",
    reviewsCount: "Cliente Verificado · 4 avaliações",
    date: "Google Meu Negócio · 4 anos atrás",
    badge: "disposição & técnica",
    content:
      "Incrível a disposição dessas advogadas na orientação aos seus clientes e na luta pelos interesses dos mesmos. Tudo com a racionalidade profissional e com a disposição que a juventude dá.",
  },
  {
    name: "Elaine Lima do Carmo",
    reviewsCount: "Cliente Verificada · 1 avaliação",
    date: "Google Meu Negócio · 4 anos atrás",
    badge: "empenho total",
    content:
      "Advogada muito competente, responsável com o trabalho dela. Faz tudo para resolver da melhor maneira atendendo os clientes na busca da melhor solução. Parabéns pelo empenho Letícia!",
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
      <p className={light ? "eyebrow-light mb-3" : "eyebrow mb-3"}>{eyebrow}</p>
      <h2
        className={
          light
            ? "font-serif text-3xl leading-[1.15] tracking-[-0.015em] text-[#191115] sm:text-4xl lg:text-[3.15rem]"
            : "font-serif text-3xl leading-[1.15] tracking-[-0.015em] text-white sm:text-4xl lg:text-[3.15rem]"
        }
      >
        {children}
      </h2>
      {description && (
        <p
          className={
            light
              ? "mt-4 text-[15px] leading-7 text-[#4a3a40]"
              : "mt-4 text-[15px] leading-7 text-[#d6c2be]"
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
      <main className="overflow-hidden bg-[#0d090b] text-[#fdf8f6] selection:bg-[#d49389] selection:text-[#0d090b]">
        {/* Navigation Bar - Refined Velvet Obsidian with Luminous Metallic Rose Gold Accents */}
        <header className="sticky top-0 z-40 border-b border-[#d49389]/20 bg-[#0d090b]/95 backdrop-blur-xl">
          <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-5 px-5 sm:h-[84px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Letícia Saldanha Advocacia — Início"
              onClick={closeMenu}
              className="flex items-center gap-3 transition-opacity hover:opacity-90"
            >
              <Image
                src={LOGO_SRC}
                width={800}
                height={483}
                alt="Letícia Saldanha Advocacia e Consultoria Especializada"
                priority
                loading="eager"
                className="h-[50px] w-auto object-contain sm:h-[58px]"
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
                Prazer, Letícia
              </a>
              <a className="nav-link" href="#atuacao">
                Áreas de Atuação
              </a>
              <a className="nav-link" href="#diferenciais">
                Por Que Escolher
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
                aria-label="Instagram da Dra. Letícia Saldanha"
                className="grid size-10 place-items-center rounded-lg border border-[#d49389]/30 bg-[#140e11] text-[#f2d2cb] transition-all hover:border-[#f2d2cb] hover:bg-[#22161c] hover:text-white"
                title="Instagram @leticiasaldanha.adv"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                aria-label="Ligar para Letícia Saldanha Advocacia"
                className="grid size-10 place-items-center rounded-lg border border-[#d49389]/30 bg-[#140e11] text-[#f2d2cb] transition-all hover:border-[#f2d2cb] hover:bg-[#22161c] hover:text-white"
                title={`Ligar: ${PHONE_DISPLAY}`}
              >
                <Phone size={16} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp da Dra. Letícia Saldanha"
                className="grid size-10 place-items-center rounded-lg border border-[#d49389]/30 bg-[#140e11] text-[#f2d2cb] transition-all hover:border-[#f2d2cb] hover:bg-[#22161c] hover:text-white"
                title="Atendimento no WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Letícia! Gostaria de agendar uma consulta sobre meu caso trabalhista / previdenciário."
                )}
                target="_blank"
                size="sm"
                variant="rosegold"
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
              className="grid size-11 place-items-center rounded-lg border border-[#d49389]/30 bg-[#140e11] text-[#f2d2cb] lg:hidden"
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
                className="overflow-hidden border-t border-[#d49389]/20 bg-[#0d090b] px-6 lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["Prazer, Letícia", "#sobre"],
                    ["Áreas de Atuação", "#atuacao"],
                    ["Por Que Escolher", "#diferenciais"],
                    ["Avaliações no Google (4,9 ★)", "#avaliacoes"],
                    ["Contato & Sede em Cataguases", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm font-medium text-stone-200 hover:text-[#e8aea6]"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#c47d73] via-[#e8aea6] to-[#c47d73] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.13em] text-[#190c10] shadow-md transition-all hover:brightness-105"
                      href={getWhatsAppUrl(
                        "Olá, Dra. Letícia! Gostaria de consultar sobre meus direitos trabalhistas / previdenciários."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} /> WhatsApp: {PHONE_DISPLAY}
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#d49389]/30 bg-[#140e11] px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-[#f2d2cb] transition-all hover:border-[#f2d2cb]"
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <MapPin size={15} /> Calçadão Shopping · Cataguases - MG
                    </a>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section - High Prestige, Luminous Warm Plum Obsidian Canvas */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-[#d49389]/20 bg-gradient-to-b from-[#0d090b] via-[#120c0f] to-[#160e13]"
        >
          {/* Subtle rose gold / champagne ambient glow */}
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[36rem] rounded-full bg-[#d49389]/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[28rem] rounded-full bg-[#7b2938]/15 blur-3xl" />

          <div className="mx-auto grid min-h-[660px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[720px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-12 lg:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-6"
            >
              <motion.div
                variants={reveal}
                className="mb-6 inline-flex items-center gap-2.5 rounded-lg border border-[#d49389]/35 bg-[#170e12] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#f2d2cb] shadow-sm"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#e8aea6]" />
                <span>CATAGUASES - MG · ADVOCACIA TRABALHISTA & PREVIDENCIÁRIA</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="max-w-[760px] font-serif text-[2.65rem] leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl lg:text-[3.95rem]"
              >
                Advocacia Humanizada, Técnica e Firme:{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#fdf5f3] via-[#f0bcb4] to-[#d49389]">
                  Defesa Estratégica dos Seus Direitos.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-[#d6c2be] sm:text-base sm:leading-8"
              >
                Sob a liderança da{" "}
                <strong className="font-semibold text-white">
                  Dra. Letícia Saldanha
                </strong>
                , nosso escritório atua com dedicação incansável, empatia e rigor jurídico em Direito do Trabalho e Direito Previdenciário. Especializado em aposentadorias do INSS, benefícios por incapacidade, BPC/LOAS, rescisão indireta, horas extras e reparação por acidentes de trabalho. Sede no Calçadão Shopping em Cataguases (MG), com atendimento presencial e suporte online para todo o Brasil.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Letícia Saldanha! Gostaria de uma consultoria sobre meus direitos trabalhistas / previdenciários."
                  )}
                  target="_blank"
                  size="lg"
                  variant="rosegold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar no WhatsApp com a Dra. Letícia
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 rounded-lg border border-[#d49389]/30 bg-[#170e12] px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#f2d2cb] transition-all hover:border-[#f2d2cb] hover:bg-[#22161c] hover:text-white"
                >
                  Áreas de Atuação{" "}
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-[#d49389]/20 pt-6 text-xs text-[#d6c2be]"
              >
                <span className="inline-flex items-center gap-2 font-medium">
                  <Star size={15} className="fill-[#e8aea6] text-[#e8aea6]" />{" "}
                  4,9 estrelas no Google (mais de 70 avaliações de clientes)
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <MapPin size={15} className="text-[#d49389]" /> Calçadão Shopping, Sl 108 · Cataguases - MG
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <HandHeart size={15} className="text-[#d49389]" /> Atendimento Humanizado & Direto com a Advogada
                </span>
              </motion.div>
            </motion.div>

            {/* Hero Visual Presentation - Dra. Letícia Saldanha */}
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
              <div className="relative aspect-[4/4.8] overflow-hidden rounded-2xl border border-[#d49389]/35 bg-[#140e11] shadow-2xl ring-1 ring-[#d49389]/20">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dra. Letícia Saldanha — Advogada Trabalhista e Previdenciarista"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0d090b] via-[#0d090b]/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-8 sm:left-8 sm:right-8">
                  <div>
                    <p className="font-serif text-2xl font-normal tracking-wide text-white">
                      Dra. Letícia Saldanha
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#e8aea6]">
                      Advocacia & Consultoria Especializada · OAB/MG
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-[#d49389]/40 bg-[#0d090b]/85 text-[#f2d2cb] backdrop-blur-sm">
                    <Scale size={18} />
                  </span>
                </div>
              </div>

              {/* Floating authority badge */}
              <div className="absolute -left-3 top-6 z-10 rounded-lg border border-[#d49389]/40 bg-[#140e11]/95 px-4 py-2 text-[10px] font-bold tracking-[0.14em] text-[#f2d2cb] shadow-card backdrop-blur-md sm:-left-5">
                CATAGUASES · MINAS GERAIS · BRASIL
              </div>

              {/* Floating Google rating badge */}
              <div className="absolute -bottom-5 -right-3 z-10 rounded-xl border border-[#d49389]/35 bg-[#140e11]/95 p-3.5 shadow-card backdrop-blur-md sm:-right-5">
                <div className="flex items-center gap-2">
                  <GoogleIcon size={16} />
                  <div className="flex items-center gap-1">
                    <Star size={13} className="fill-[#e8aea6] text-[#e8aea6]" />
                    <span className="font-serif text-base font-bold text-white">
                      4,9 / 5,0
                    </span>
                  </div>
                </div>
                <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#d6c2be]">
                  70+ Avaliações no Google
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner - Authority Metrics */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-[#d49389]/20 bg-[#120b0e]"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              [
                "4,9 ★",
                "avaliação de excelência com mais de 70 depoimentos reais e verificados no Google",
              ],
              [
                "Trabalhista & INSS",
                "atuação focada em aposentadorias, BPC/LOAS, auxílios e rescisões contratuais",
              ],
              [
                "Cataguases - MG",
                "sede no Calçadão Shopping (Sl 108) com atendimento presencial e online em todo o país",
              ],
              [
                "100% Humanizado",
                "atendimento acolhedor, transparente e direto com a advogada, sem intermediários",
              ],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-[#d49389]/20"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-2xl font-semibold text-[#e8aea6] sm:text-3xl">
                  {value}
                </span>
                <span className="max-w-[165px] text-[11px] leading-5 text-[#d6c2be]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre a Dra. Letícia Saldanha - "Prazer, Letícia!" - Modo Claro Alabastro Rosé Nobre */}
        <section
          id="sobre"
          className="scroll-mt-24 border-y border-[#d49389]/30 bg-[#faf5f3] py-20 text-[#1a1115] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
            {/* Dra. Letícia presentation portrait */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[480px]"
            >
              <div className="relative aspect-[3/3.8] overflow-hidden rounded-2xl border-2 border-[#3b1c24] bg-[#140e11] shadow-2xl">
                <Image
                  src={FOTO_SOBRE_SRC}
                  alt="Dra. Letícia Saldanha — Advogada Previdenciarista e Trabalhista"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0d090b]/90 via-[#0d090b]/30 to-transparent" />
              </div>

              {/* Authority badge card - Deep Obsidian Contrast on Light Surface */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-[#d49389]/40 bg-[#140e11] px-5 py-4 shadow-xl sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-[#e8aea6]">
                  <Award size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#e8aea6]">
                    Advocacia Especializada & Humanizada
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-white">
                  Dra. Letícia Saldanha
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-[#d49389]">
                  Letícia Saldanha Advocacia
                </p>
                <p className="mt-1 text-[11px] leading-4 text-[#d6c2be]">
                  Praça Rui Barbosa, 170 - Sl 108 (Calçadão Shopping) · Cataguases - MG
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-[#914f46]/40 sm:-left-7 sm:-top-7 sm:size-32" />
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
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#914f46]/30 bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#853d35] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#853d35]" />
                <span>PRAZER, LETÍCIA! CONHEÇA MINHA HISTÓRIA</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-[#191115] sm:text-4xl lg:text-[3.25rem]"
              >
                Amor pelo que faço, determinação e um{" "}
                <span className="italic text-[#853d35]">
                  atendimento verdadeiramente humano e acolhedor.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-[#4a3a40]"
              >
                Mineira raiz, com 31 anos de idade, comecei na advocacia movida por um sonho que trago desde criança: a{" "}
                <strong className="font-bold text-[#191115]">
                  independência
                </strong>
                . Acredito profundamente na potência transformadora de pessoas determinadas — e é exatamente essa energia que entrego todos os dias na defesa de cada um dos meus clientes.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-[#4a3a40]"
              >
                No meu dia a dia, quem me acompanha conhece de perto minha rotina: o amor apaixonado pelo Direito, o carinho gigante pelos animais de estimação (são muitos pets em casa!), o compromisso com uma vida saudável e a família como base de tudo. No escritório, essa mesma dedicação se traduz em carregar nos ombros a responsabilidade de ajudar trabalhadores e segurados do INSS a alcançarem seus objetivos e seus direitos esquecidos.
              </motion.p>

              {/* Quote Card */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-xl border border-[#e8d5d0] bg-white/95 p-5 shadow-sm"
              >
                <blockquote className="font-serif text-sm italic leading-relaxed text-[#2d1b22]">
                  &ldquo;Todos temos dores a serem sanadas e direitos a serem requeridos. Com a ajuda certa, o acolhimento sincero e o rigor técnico adequado, tudo fica mais fácil e claro para você.&rdquo;
                </blockquote>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-[#853d35]">
                  — Dra. Letícia Saldanha · Advogada Trabalhista e Previdenciarista
                </p>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-1 gap-2.5 text-xs font-semibold text-[#2d1b22] sm:grid-cols-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#853d35]" />
                  <span>Atendimento presencial no Calçadão Shopping e online para todo o Brasil</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#853d35]" />
                  <span>Advocacia especializada em Direito Previdenciário (INSS) e do Trabalho</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#853d35]" />
                  <span>Comunicação clara, transparente e acolhedora, sem &ldquo;juridiquês&rdquo;</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#853d35]" />
                  <span>Nota 4,9 ★ no Google com mais de 70 avaliações autênticas de clientes</span>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Letícia Saldanha! Gostaria de agendar uma consulta sobre meu caso."
                  )}
                  target="_blank"
                  size="md"
                  variant="dark"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar com a Dra. Letícia
                </GlowingButton>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#191115] transition-colors hover:text-[#853d35]"
                >
                  <Phone size={15} /> {PHONE_DISPLAY}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Áreas de Atuação Trabalhista e Previdenciária */}
        <section
          id="atuacao"
          className="scroll-mt-24 border-t border-[#d49389]/20 bg-[#100a0d] py-20 sm:py-28 lg:py-32"
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
                description="Defesa estratégica e personalizada para garantir seus benefícios previdenciários e resguardar seus direitos no ambiente de trabalho em Cataguases, Minas Gerais e em todo o Brasil."
              >
                Atuação especializada em{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#fdf5f3] via-[#f0bcb4] to-[#d49389]">
                  Direito Trabalhista e Previdenciário.
                </span>
              </Heading>
              <p className="max-w-[270px] pb-1 text-xs leading-6 text-[#d6c2be]">
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
                    className="group flex min-h-[350px] flex-col rounded-xl border border-[#d49389]/20 bg-[#140e11] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#d49389]/50 hover:bg-[#1a1217] hover:shadow-obsidian sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-lg border border-[#d49389]/25 bg-[#201419] text-[#e8aea6] shadow-sm transition-colors group-hover:border-[#f2d2cb] group-hover:bg-[#2b1922] group-hover:text-white">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <span className="font-serif text-2xl text-[#d49389]/40">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-md border border-[#d49389]/25 bg-[#201419] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#f2d2cb] shadow-sm">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.45rem] leading-tight text-white">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-6 text-[#d6c2be]">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-[#e8aea6] hover:text-white"
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

        {/* Por Que Escolher Letícia Saldanha Advocacia - Diferenciais */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-y border-[#d49389]/20 bg-[#0d090b] py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                eyebrow="NOSSOS PILARES DE EXCELÊNCIA"
                description="Unimos empatia sincera, acolhimento às suas dores e uma postura jurídica incisiva para transformar direitos em conquistas reais."
              >
                Por que confiar seu processo à{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#fdf5f3] via-[#f0bcb4] to-[#d49389]">
                  Dra. Letícia Saldanha?
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Letícia! Gostaria de consultar sobre meus direitos."
                )}
                target="_blank"
                size="md"
                variant="rosegold"
                className="rounded-lg shadow-sm"
              >
                <WhatsAppIcon size={16} /> Falar no WhatsApp
              </GlowingButton>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {/* Card 1: Atendimento Humanizado e Acolhedor */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group flex flex-col justify-between rounded-xl border border-[#d49389]/25 bg-[#140e11] p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-[#d49389]/50 hover:bg-[#1a1217] sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#d49389]/30 bg-[#201419] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#f2d2cb]">
                      <HeartHandshake size={14} /> Atendimento Humanizado
                    </span>
                    <span className="text-xs font-semibold text-[#e8aea6]">
                      Acolhimento Real
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-white sm:text-[1.75rem]">
                    Empatia, Escuta Atenta e Zero &ldquo;Juridiquês&rdquo;
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#d6c2be]">
                    Sabemos que por trás de um benefício do INSS ou de uma reclamação trabalhista existe uma vida, uma família e meses de angústia. Aqui você conversa diretamente com a advogada, em uma linguagem simples e acessível, entendendo com clareza cada passo da sua ação.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-stone-200">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#e8aea6]" />
                      <span>Contato direto com a advogada pelo WhatsApp, sem robôs ou intermediários</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#e8aea6]" />
                      <span>Esclarecimento detalhado de cada documento e cálculo necessário</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#e8aea6]" />
                      <span>Acolhimento às dúvidas da família com paciência e carinho</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#d49389]/20 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Letícia! Gostaria de conversar com você sobre a minha situação."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#d49389]/30 bg-[#201419] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#f2d2cb] transition-all hover:border-[#f2d2cb] hover:bg-[#2c1a23] hover:text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Conversar Diretamente no WhatsApp
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>

              {/* Card 2: Combatividade Técnica e Resultados */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="group flex flex-col justify-between rounded-xl border border-[#d49389]/25 bg-[#140e11] p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-[#d49389]/50 hover:bg-[#1a1217] sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#d49389]/30 bg-[#201419] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#f2d2cb]">
                      <Scale size={14} /> Rigor Técnico Incisivo
                    </span>
                    <span className="text-xs font-semibold text-[#e8aea6]">
                      Defesa Incondicional
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-white sm:text-[1.75rem]">
                    Combatividade na Luta Pelos Seus Direitos
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#d6c2be]">
                    Não nos conformamos com negativas do INSS ou abusos do empregador. Estudamos minuciosamente cada prova documental, registros de ponto, laudos médicos e histórico do CNIS para construir teses jurídicas sólidas perante a Justiça Federal e a Justiça do Trabalho.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-stone-200">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#e8aea6]" />
                      <span>Análise aprofundada de cálculos para buscar o benefício mais vantajoso</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#e8aea6]" />
                      <span>Reversão comprovada de causas consideradas difíceis ou perdidas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#e8aea6]" />
                      <span>Acompanhamento ágil de cada prazo e movimentação processual</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#d49389]/20 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Letícia! Preciso de ajuda para reverter uma decisão / recorrer sobre meu benefício."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#d49389]/30 bg-[#201419] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#f2d2cb] transition-all hover:border-[#f2d2cb] hover:bg-[#2c1a23] hover:text-white"
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

        {/* Nosso Compromisso Ético e Operacional */}
        <section className="relative overflow-hidden bg-[#0a0709] py-20 text-white sm:py-28 lg:py-32">
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-[#d49389]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-[#7b2938]/10 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="NOSSO COMPROMISSO COM VOCÊ"
                description="O reconhecimento expresso com nota 4,9 ★ no Google e dezenas de avaliações reflete a dedicação intransigente em cuidar de cada pessoa com carinho, técnica e lealdade."
              >
                Cuidamos do seu futuro com{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#fdf5f3] via-[#f0bcb4] to-[#d49389]">
                  respeito, transparência e dedicação total.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-[#d49389]/25 bg-[#140e11] p-6 font-serif text-base italic leading-7 text-[#faeae6]">
                &ldquo;Eu nunca me senti tão bem, tão acolhida por alguém como a Dra Letícia. Sempre ouvia falar dos trabalhos feitos por ela, só quando entreguei o caso nas mãos dela que pude ter a certeza e sentir de onde veio tantos elogios. Super recomendo !!! Parabéns e continue com esse profissionalismo, Cataguases e região precisa.&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-[#e8aea6]">
                  — Leticia Oliveira · Avaliação Verificada no Google Meu Negócio
                </footer>
              </blockquote>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-[#d49389]/15"
            >
              {[
                [
                  "01",
                  "Acolhimento Genuíno & Empatia",
                  "Você é ouvida com atenção e sensibilidade. Entendemos suas necessidades individuais para traçar a melhor estratégia jurídica sem nenhum julgamento.",
                ],
                [
                  "02",
                  "Transparência Absoluta & Comunicação Fácil",
                  "Aqui você não fica no escuro. Você tem acesso direto à advogada pelo WhatsApp e entende todas as etapas do seu processo em linguagem clara.",
                ],
                [
                  "03",
                  "Combatividade Incisiva & Resultados",
                  "Lutamos incansavelmente pelo melhor resultado possível, exigindo o cumprimento estrito das leis e o pagamento de cada direito garantido pela CLT e pela Previdência.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-semibold text-[#e8aea6]">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-white">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-[#d6c2be]">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Avaliações no Google (Depoimentos Reais - 4,9 estrelas · 70+ avaliações) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 border-t border-[#d49389]/20 bg-[#100a0d] py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                eyebrow="PROVA SOCIAL VERIFICADA · GOOGLE MEU NEGÓCIO"
                description="Confira avaliações autênticas de clientes que confiaram seus direitos à Dra. Letícia Saldanha em Cataguases, Zona da Mata e em todo o Brasil."
              >
                Avaliada com nota 4,9 ★ pelo{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#fdf5f3] via-[#f0bcb4] to-[#d49389]">
                  atendimento humanizado, competência e resultados.
                </span>
              </Heading>

              {/* Verified Google Badge Card */}
              <div className="flex flex-col gap-3 rounded-xl border border-[#d49389]/25 bg-[#140e11] p-5 shadow-card sm:flex-row sm:items-center md:min-w-[340px]">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-lg border border-[#d49389]/25 bg-[#201419] shadow-sm">
                  <GoogleIcon size={30} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-3xl font-bold leading-none text-white">
                      4,9
                    </span>
                    <div className="flex gap-0.5 text-[#e8aea6]">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-[#e8aea6] text-[#e8aea6]"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-stone-200">
                    Letícia Saldanha Advocacia
                  </p>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-[#e8aea6] transition-colors hover:text-white"
                  >
                    70 avaliações no Google <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Authentic Google Reviews Grid */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clientReviews.map((review) => (
                <article
                  key={review.name}
                  className="group relative flex flex-col justify-between rounded-xl border border-[#d49389]/20 bg-[#140e11] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#d49389]/50 hover:bg-[#1a1217] hover:shadow-obsidian sm:p-8"
                >
                  <div>
                    {/* Header: Stars + Badge + Google icon */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-1 text-[#e8aea6]">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-[#e8aea6] text-[#e8aea6]"
                          />
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] font-medium text-stone-300">
                        <GoogleIcon size={13} />
                        <span className="rounded-md border border-[#d49389]/20 bg-[#201419] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#f2d2cb] shadow-xs">
                          {review.badge}
                        </span>
                      </div>
                    </div>

                    {/* Authentic review content */}
                    <p className="mt-5 text-[14px] italic leading-relaxed text-stone-200">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  {/* Reviewer info */}
                  <div className="mt-6 flex items-center gap-3 border-t border-[#d49389]/20 pt-4">
                    <div className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#d49389]/25 bg-[#201419] font-serif text-sm font-semibold text-[#f2d2cb] shadow-xs">
                      {review.name.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-serif text-base font-semibold text-white">
                        {review.name}
                      </p>
                      <p className="text-[10px] uppercase tracking-wider text-stone-400">
                        {review.reviewsCount}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom Actions and Trust Tags */}
            <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-[#d49389]/20 pt-8 sm:flex-row">
              <div className="flex flex-wrap items-center gap-2">
                {[
                  "Advocacia Trabalhista Especializada",
                  "Direito Previdenciário & INSS",
                  "Atendimento direto com a advogada",
                  "Calçadão Shopping Cataguases",
                  "Nota 4,9 no Google",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#d49389]/20 bg-[#140e11] px-3.5 py-1.5 text-[11px] font-medium text-stone-200 shadow-xs"
                  >
                    <CheckCircle2 size={13} className="text-[#e8aea6]" />
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#e8aea6] transition-colors hover:text-white"
              >
                Ver todas as 70 avaliações no Google{" "}
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Contato & Localização em Cataguases */}
        <section
          id="contato"
          className="scroll-mt-24 border-t border-[#d49389]/20 bg-[#0d090b] py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="CONTATO & SEDE EM CATAGUASES - MG"
                description="Agende seu atendimento presencial em nossa sede no Calçadão Shopping em Cataguases ou inicie seu atendimento online pelo WhatsApp de onde você estiver."
              >
                Estamos prontos para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#fdf5f3] via-[#f0bcb4] to-[#d49389]">
                  escutar e defender você.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Letícia Saldanha! Gostaria de agendar um horário para atendimento."
                  )}
                  target="_blank"
                  size="lg"
                  variant="rosegold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} /> Iniciar Conversa no WhatsApp
                </GlowingButton>
                <p className="text-[11px] leading-5 text-[#d6c2be]">
                  Telefone e WhatsApp do escritório:{" "}
                  <strong className="text-white">{PHONE_DISPLAY}</strong>
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-[#d6c2be]">
                <div className="flex items-start gap-3">
                  <Clock
                    size={16}
                    className="mt-0.5 shrink-0 text-[#e8aea6]"
                  />
                  <div>
                    <p className="font-semibold text-white">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-stone-200">
                      Segunda a Sexta-feira das 09:00 às 18:00
                    </p>
                    <p className="text-[11px] text-stone-400">
                      Atendimento presencial no Calçadão Shopping e atendimento online para todo o Brasil
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#e8aea6]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-medium text-white transition-colors hover:text-[#e8aea6]"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#e8aea6]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#e8aea6] text-stone-200"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#e8aea6]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="transition-colors hover:text-[#e8aea6] text-stone-200"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#e8aea6]"
                  />
                  <span>{ADDRESS_TEXT}</span>
                </div>
              </div>
            </div>

            {/* Address & Office Card */}
            <div className="relative overflow-hidden rounded-xl border border-[#d49389]/25 bg-[#140e11] p-7 shadow-card sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#d49389] to-[#e8aea6]" />

              <div className="flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-lg border border-[#d49389]/30 bg-[#201419] text-[#e8aea6]">
                  <MapPin size={22} strokeWidth={1.6} />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#e8aea6]">
                    Sede do Escritório
                  </p>
                  <p className="mt-1 font-serif text-2xl text-white">
                    Cataguases · Minas Gerais
                  </p>
                </div>
              </div>

              <address className="mt-7 max-w-md text-[14px] not-italic leading-7 text-[#d6c2be]">
                <strong className="font-semibold text-white">
                  Letícia Saldanha Advocacia
                </strong>
                <br />
                Dra. Letícia Saldanha · OAB/MG
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-lg border border-[#d49389]/20 bg-[#0d090b] p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#e8aea6]">
                  Atendimento & Horários
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-stone-300">
                  <span>Segunda a Sexta</span>
                  <span className="text-right font-semibold text-white">
                    09:00 às 18:00
                  </span>
                  <span>Atendimento Presencial</span>
                  <span className="text-right text-[#f2d2cb]">
                    Com agendamento prévio
                  </span>
                  <span>Localização</span>
                  <span className="text-right text-stone-200">Calçadão Shopping - Sl 108</span>
                  <span>Atendimento Online</span>
                  <span className="text-right text-stone-200">Todo o Brasil</span>
                </div>
              </div>

              <div className="my-7 h-px bg-[#d49389]/20" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-stone-400">
                  Praça Rui Barbosa, 170 - Sl 108 · Cataguases - MG
                </p>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#d49389]/30 bg-[#201419] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#f2d2cb] transition-colors hover:border-[#f2d2cb] hover:bg-[#2c1a23] hover:text-white"
                >
                  Traçar Rota no Google Maps <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip */}
        <section className="border-t border-[#d49389]/20 bg-gradient-to-r from-[#0d090b] via-[#160d12] to-[#0d090b] px-5 py-14 text-white shadow-inner sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#e8aea6]">
                <Sparkles size={13} /> LETÍCIA SALDANHA · ADVOCACIA & CONSULTORIA
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                Tem dúvidas sobre sua aposentadoria ou direitos no trabalho?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dra. Letícia! Gostaria de consultar sobre a minha situação trabalhista / previdenciária."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-lg bg-gradient-to-r from-[#c47d73] via-[#e8aea6] to-[#c47d73] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#190c10] shadow-md transition-all hover:-translate-y-0.5 hover:brightness-110 hover:shadow-rosegold"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp{" "}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#d49389]/20 bg-[#0a0709] px-5 py-14 text-white sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <a
                href="#inicio"
                aria-label="Letícia Saldanha Advocacia"
                className="inline-block transition-transform hover:scale-[1.02]"
              >
                <Image
                  src={LOGO_FULL_SRC}
                  width={1024}
                  height={512}
                  alt="Letícia Saldanha Advocacia e Consultoria Especializada"
                  className="h-[72px] w-auto object-contain sm:h-[84px]"
                />
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-[#d6c2be]">
                ⚖️ Advocacia humanizada, técnica e combativa. Especializada em Direito do Trabalho e Direito Previdenciário (INSS, BPC/LOAS, aposentadorias e rescisões).
              </p>
              <p className="mt-3 text-[11px] font-semibold text-[#e8aea6]">
                Dra. Letícia Saldanha · Advogada · OAB/MG
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e8aea6]">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-[#d6c2be]">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  Prazer, Letícia
                </a>
                <a className="footer-link" href="#atuacao">
                  Áreas de Atuação
                </a>
                <a className="footer-link" href="#diferenciais">
                  Por Que Escolher
                </a>
                <a className="footer-link" href="#avaliacoes">
                  Avaliações no Google (4,9 ★)
                </a>
                <a className="footer-link" href="#contato">
                  Contato & Sede em Cataguases
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e8aea6]">
                Contato & Endereço
              </h2>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-[#d6c2be]">
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Letícia! Gostaria de solicitar um atendimento com o escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 font-medium text-[#f2d2cb]"
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
                <p className="inline-flex items-center gap-2 pt-1 text-[11px] text-[#e8aea6]">
                  <Clock size={14} className="shrink-0" /> Seg a Sex: 09:00 às 18:00
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-[#d49389]/20 pt-6 text-[10px] text-stone-400 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} LETÍCIA SALDANHA ADVOCACIA. Todos os direitos reservados.
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
              "Olá, Dra. Letícia Saldanha! Gostaria de consultar sobre meus direitos trabalhistas / previdenciários."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Dra. Letícia Saldanha"
            className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          >
            <WhatsAppIcon size={28} />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-[#140e11] border border-[#d49389]/30 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg transition-opacity group-hover:block">
              Falar com a Dra. Letícia
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
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-xl border border-[#d49389]/35 bg-[#140e11] p-7 shadow-2xl sm:max-w-xl sm:rounded-xl sm:p-10"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-[#d49389]/30 bg-[#201419] text-[#f2d2cb] transition-colors hover:border-[#f2d2cb] hover:text-white"
                >
                  <X size={18} />
                </button>

                <p className="eyebrow">ESPECIALIDADE JURÍDICA</p>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-serif text-3xl leading-tight text-white sm:text-4xl"
                >
                  {activeArea.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-[#d6c2be]">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-[#d49389]/20 pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#e8aea6]">
                    Principais demandas atendidas pelo escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-stone-200"
                      >
                        <span className="size-2 shrink-0 rounded-full bg-[#e8aea6]" />
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
                    variant="rosegold"
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
