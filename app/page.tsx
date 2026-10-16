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

const WHATSAPP_NUMBER = "5531983892013";
const PHONE_DISPLAY = "(31) 98389-2013";
const EMAIL_CONTACT = "contato@marianaesteves.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/marianaestevesinss/";
const INSTAGRAM_HANDLE = "@marianaestevesinss";

const ADDRESS_TEXT =
  "R. Maria da Conceição Hilário, 263 - Jardim Vera Cruz, Contagem - MG, 32265-300";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Mariana+Esteves+Advogada+Previdenci%C3%A1ria+Contagem+MG";

const LOGO_SRC = "/logo.png";
const LOGO_FULL_SRC = "/logo.png";
const FOTO_HERO_SRC = "/mariana-elegante.png";
const FOTO_SOBRE_SRC = "/mariana-apresentacao.png";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Mariana Esteves! Gostaria de consultar sobre meus direitos no INSS (Aposentadoria / Auxílio / BPC LOAS / Pensão) e agendar um atendimento.";
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
    tag: "Idade · Tempo · Especial · Rural · Transição",
    summary:
      "Planejamento previdenciário estratégico e requerimento de aposentadorias para garantir o valor máximo do seu benefício, sem perda de tempo ou dinheiro com o INSS.",
    details:
      "A aposentadoria é a recompensa de uma vida inteira de trabalho. Com as complexas regras de transição da Reforma e exigências do INSS, muitos segurados se aposentam com valores muito inferiores ao que têm direito ou enfrentam demoras indevidas. A Dra. Mariana Esteves realiza um estudo aprofundado do seu CNIS, computa períodos rurais e especiais, e conduz seu processo administrativo ou judicial com total segurança e agilidade.",
    topics: [
      "Aposentadoria por Idade Urbana e Rural com cômputo de períodos campesinos",
      "Aposentadoria por Tempo de Contribuição e cálculo da Regra de Transição mais vantajosa",
      "Aposentadoria Especial para trabalhadores expostos a agentes nocivos e insalubridade",
      "Aposentadoria da Pessoa com Deficiência (PCD) com requisitos de idade e tempo reduzidos",
      "Planejamento Previdenciário Preventivo para projetar o momento e valor exato da aposentadoria",
      "Acerto de vínculos, pendências e indicadores extemporâneos no CNIS",
    ],
    whatsAppText:
      "Olá, Dra. Mariana! Gostaria de uma análise para minha Aposentadoria / Planejamento Previdenciário no INSS.",
  },
  {
    id: "bpc-loas-beneficio-assistencial",
    title: "BPC / LOAS para Idosos e Pessoas com Deficiência",
    icon: HeartHandshake,
    tag: "BPC Idoso · BPC Deficiência · TEA · Reversão de Negativas",
    summary:
      "Concessão ágil do benefício assistencial de 1 salário mínimo mensal para idosos com 65+ anos ou pessoas com deficiência e baixa renda, mesmo sem histórico de contribuição ao INSS.",
    details:
      "O Benefício de Prestação Continuada (BPC/LOAS) é uma garantia de dignidade e sobrevivência. Frequentemente o INSS indefere pedidos alegando que a renda familiar per capita ultrapassa o teto legal ou que a deficiência não atende aos critérios. Atuamos de forma combativa para comprovar despesas essenciais com remédios, fraldas, terapias e tratamentos, revertendo a negativa na via administrativa ou judicial.",
    topics: [
      "BPC/LOAS para idosos a partir de 65 anos em situação de vulnerabilidade",
      "BPC/LOAS para pessoas com deficiência física, mental, intelectual ou sensorial",
      "Benefício para crianças e adultos com Transtorno do Espectro Autista (TEA)",
      "Dedução comprovada de despesas médicas, tratamentos contínuos e alimentação especial",
      "Ação judicial rápida para reversão de indeferimento indevido pelo INSS",
      "Recebimento de valores retroativos acumulados desde a data do primeiro pedido",
    ],
    whatsAppText:
      "Olá, Dra. Mariana! Gostaria de uma análise para solicitar o benefício do BPC/LOAS.",
  },
  {
    id: "auxilio-doenca-invalidez-acidente",
    title: "Auxílio por Incapacidade, Invalidez & Auxílio-Acidente",
    icon: ShieldCheck,
    tag: "Auxílio-Doença · Invalidez · Adicional 25% · Perícia Médica",
    summary:
      "Amparo imediato para quem adoeceu ou sofreu acidente e está incapaz de trabalhar, com assistência técnica para perícias médicas e liberação de benefícios negados pelo INSS.",
    details:
      "Quando a saúde é abalada, a burocracia do INSS não pode ser um obstáculo. Diante de perícias médicas sumárias e negativas injustas, a Dra. Mariana Esteves reúne a documentação clínica necessária, elabora quesitos periciais assertivos e recorre judicialmente com rapidez para restabelecer o sustento do trabalhador e de seus dependentes.",
    topics: [
      "Auxílio por Incapacidade Temporária (Auxílio-Doença comum ou acidentário)",
      "Aposentadoria por Incapacidade Permanente (Invalidez) com acréscimo de 25% para cuidador",
      "Auxílio-Acidente mensal indenizatório para quem ficou com sequela redutora",
      "Reativação de benefícios indevidamente cessados no 'Pente-Fino' do INSS",
      "Mandado de Segurança contra demora abusiva do INSS na análise de perícias",
      "Assistência e quesitos técnicos detalhados para perícia médica judicial",
    ],
    whatsAppText:
      "Olá, Dra. Mariana! Preciso de ajuda jurídica para Auxílio-Doença / Invalidez / Perícia no INSS.",
  },
  {
    id: "pensao-por-morte-dependentes",
    title: "Pensão por Morte & Direitos dos Dependentes",
    icon: Users,
    tag: "Cônjuge · Companheiro(a) · União Estável · Filhos Menores",
    summary:
      "Segurança e proteção financeira para a família após a perda do segurado, com comprovação sólida de dependência econômica e união estável perante o INSS.",
    details:
      "Em momentos delicados de perda, enfrentar a burocracia do INSS para ter acesso à pensão por morte é um desafio doloroso. Atuamos com extrema sensibilidade, celeridade e rigor técnico para comprovar a qualidade de segurado do falecido, a união estável (mesmo sem certidão formal) e garantir o pagamento tempestivo de todos os retroativos aos dependentes.",
    topics: [
      "Pensão por Morte para cônjuge, companheiro(a) em união estável e filhos dependentes",
      "Comprovação de união estável por meio de documentos, contas conjuntas e prova testemunhal",
      "Pensão por morte decorrente de segurado rural ou trabalhador em período de graça",
      "Pensão vitalícia ou temporária calculada pela faixa etária do beneficiário",
      "Defesa e restabelecimento de pensões por morte indevidamente canceladas",
      "Cobrança de todas as parcelas retroativas desde a data do óbito ou do requerimento",
    ],
    whatsAppText:
      "Olá, Dra. Mariana! Gostaria de consultar sobre o pedido de Pensão por Morte no INSS.",
  },
  {
    id: "revisoes-beneficios-atrasados",
    title: "Revisões de Benefícios & Cobrança de Atrasados",
    icon: Scale,
    tag: "Revisão da Vida Toda · Erro de Cálculo · Atrasados dos Últimos 5 Anos",
    summary:
      "Cálculo detalhado para verificar se você recebe o valor correto do INSS e cobrança judicial de todas as diferenças financeiras não pagas pela Previdência.",
    details:
      "Muitos segurados recebem menos do que a lei garante por falhas de enquadramento do INSS, descarte indevido de salários altos, falta de cômputo de períodos especiais ou salários concomitantes. Realizamos um diagnóstico completo do processo de concessão do seu benefício para pleitear o aumento do valor mensal e o recebimento das diferenças atrasadas devidas nos últimos 5 anos.",
    topics: [
      "Revisão para cômputo de períodos insalubres ou tempo rural não reconhecidos",
      "Revisão de atividades concomitantes para quem contribuiu em mais de um emprego",
      "Revisão do teto constitucional e expurgo de erros nos índices de correção",
      "Mandado de Segurança contra fila e demora abusiva de decisões no INSS",
      "Cobrança de diferenças acumuladas (atrasados) dos últimos 5 anos com juros",
      "Reanálise de benefícios concedidos com regras anteriores ou transitórias",
    ],
    whatsAppText:
      "Olá, Dra. Mariana! Gostaria de calcular e verificar se tenho direito a Revisão de Benefício no INSS.",
  },
  {
    id: "salario-maternidade-rural",
    title: "Salário-Maternidade & Benefícios Rurais",
    icon: Sparkles,
    tag: "Maternidade · Desempregadas · Segurada Especial Rural · MEI",
    summary:
      "Acolhimento e orientação para gestantes, mães adotantes, desempregadas em período de graça, autônomas e trabalhadoras rurais que necessitam do benefício.",
    details:
      "O salário-maternidade é um direito fundamental assegurado não somente para celetistas, mas também para mulheres desempregadas que ainda mantêm a qualidade de segurada, Microempreendedoras Individuais (MEI), contribuintes individuais e produtoras da agricultura familiar. Conduzimos a instrução de provas com assertividade para garantir o recebimento de até 4 meses de benefício sem contratempos.",
    topics: [
      "Salário-Maternidade para trabalhadoras desempregadas no período de graça do INSS",
      "Salário-Maternidade para MEIs, autônomas e contribuintes facultativas",
      "Salário-Maternidade Rural para agricultoras familiares e seguradas especiais",
      "Benefício em casos de adoção, guarda judicial para fins de adoção e parto prematuro",
      "Averbação e reconhecimento de tempo rural para antecipação de aposentadoria",
      "Regularização de carência e histórico de contribuições perante o INSS",
    ],
    whatsAppText:
      "Olá, Dra. Mariana! Gostaria de consultar sobre Salário-Maternidade ou Benefício Rural no INSS.",
  },
];

const clientReviews = [
  {
    name: "Natália Vieira",
    reviewsCount: "Cliente Verificada · 6 avaliações · 1 foto",
    date: "Google Meu Negócio · 8 meses atrás",
    badge: "atendimento humanizado",
    content:
      "A Dra. Mariana é extremamente competente, atenciosa e possui um atendimento verdadeiramente humanizado. Sempre foi muito honesta, demonstra total domínio do assunto e dá retorno rápido mantendo o cliente ciente de todas as etapas.",
  },
  {
    name: "Henrique Vieira",
    reviewsCount: "Cliente Verificado · 5 avaliações",
    date: "Google Meu Negócio · 4 meses atrás",
    badge: "menos de 3 meses",
    content:
      "Meu pai aposentou em menos de 3 meses com ela sem pagar INSS, muito boa essa profissional, super indico sempre!",
  },
  {
    name: "Luciana Simões",
    reviewsCount: "Cliente Verificada · 3 avaliações",
    date: "Google Meu Negócio · 4 meses atrás",
    badge: "super competente",
    content:
      "Precisei auxiliar a minha mãe para dar entrada na sua aposentadoria por idade e encontrei a Mariana, que logo me auxiliou com atenção e rapidez em todos os detalhes, uma advogada super competente. Recomendo muito o trabalho dela.",
  },
  {
    name: "aguilar rey",
    reviewsCount: "Cliente Verificado · 5 avaliações",
    date: "Google Meu Negócio · 7 meses atrás",
    badge: "pensão por morte",
    content:
      "Doutora Mariana Esteves, foi de extrema excelência com relação ao pedido de pensão por morte da minha mãe. Ressalto que foi muito atenciosa conosco. Se você tem um idoso na sua família precisando resolver algo com o INSS, ela é a pessoa certa.",
  },
  {
    name: "Charles sergio soares Sergio",
    reviewsCount: "Local Guide · 19 avaliações · 2 fotos",
    date: "Google Meu Negócio · Recente",
    badge: "atendimento nota 1000",
    content:
      "Recomendo demais, atendimento nota 1000, desde o primeiro contato até a causa sair, super profissional e muito educada.",
  },
  {
    name: "Jose Brandao",
    reviewsCount: "Cliente Verificado · 4 avaliações",
    date: "Google Meu Negócio · 1 mês atrás",
    badge: "excelente advogada",
    content:
      "Uma excelente advogada. Atenciosa, comprometida com o trabalho. Gostei muito do teu atendimento. Muito obrigado!",
  },
  {
    name: "Cleiton Eduardo",
    reviewsCount: "Cliente Verificado · 2 avaliações",
    date: "Google Meu Negócio · 4 meses atrás",
    badge: "compromisso & dedicação",
    content:
      "Excelente profissional! Serviço realizado com qualidade, compromisso e dedicação. Fiquei muito satisfeito com o resultado e recomendo a todos que procuram um trabalho bem feito.",
  },
  {
    name: "Sandra Mara",
    reviewsCount: "Cliente Verificada · 3 avaliações",
    date: "Google Meu Negócio · 3 meses atrás",
    badge: "resolveu rapidinho",
    content:
      "Ótima profissional, super atenciosa e dedicada, resolveu o caso da minha mãe rapidinho, super indico.",
  },
  {
    name: "Ursula Fernanda",
    reviewsCount: "Cliente Verificada · 2 avaliações",
    date: "Google Meu Negócio · 1 mês atrás",
    badge: "paciência & segurança",
    content:
      "Excelente profissional! Muito competente, atenciosa e comprometida. Sempre esclareceu minhas dúvidas com muita paciência e demonstrou segurança e dedicação em cada etapa.",
  },
  {
    name: "Leonardo souza",
    reviewsCount: "Local Guide · 20 avaliações · 1 foto",
    date: "Google Meu Negócio · 8 meses atrás",
    badge: "recomendo 100%",
    content:
      "MARIANA é uma excelente profissional, muito dedicada, competente e educada, recomendo 100%.",
  },
  {
    name: "Maria Neto",
    reviewsCount: "Cliente Verificada · 1 avaliação",
    date: "Google Meu Negócio · 4 meses atrás",
    badge: "olhos fechados",
    content:
      "Excelente profissional! Confio e indico de olhos fechados! Mariana é uma advogada atenciosa, dedicada e muito competente!!!!",
  },
  {
    name: "Daniel Elias",
    reviewsCount: "Cliente Verificado · 2 avaliações · 1 foto",
    date: "Google Meu Negócio · 5 meses atrás",
    badge: "aposentadoria resolvida",
    content:
      "Ótima advogada. Me ajudou a resolver minha aposentadoria.",
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
            ? "mt-4 font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-[#140e07] sm:text-4xl lg:text-[3.25rem]"
            : "mt-4 font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-white sm:text-4xl lg:text-[3.25rem]"
        }
      >
        {children}
      </h2>
      {description && (
        <p
          className={
            light
              ? "mt-4 text-[15px] leading-7 text-[#4a3f31]"
              : "mt-4 text-[15px] leading-7 text-[#dcd4c3]"
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
      <main className="overflow-hidden bg-[#0b0a09] text-[#fdfbf7] selection:bg-[#d4af37] selection:text-[#0b0a09]">
        {/* Navigation Bar - Refined Velvet Obsidian with Luminous Metallic Gold Accents */}
        <header className="sticky top-0 z-40 border-b border-[#d4af37]/20 bg-[#0b0a09]/95 backdrop-blur-xl">
          <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-5 px-5 sm:h-[84px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Mariana Esteves Advocacia — Início"
              onClick={closeMenu}
              className="flex items-center gap-3 transition-opacity hover:opacity-90"
            >
              <Image
                src={LOGO_SRC}
                width={800}
                height={314}
                alt="Mariana Esteves Advocacia Previdenciária"
                priority
                loading="eager"
                className="h-[46px] w-auto object-contain sm:h-[54px]"
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
                Prazer, Mariana
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
                aria-label="Instagram da Dra. Mariana Esteves"
                className="grid size-10 place-items-center rounded-lg border border-[#d4af37]/30 bg-[#12100d] text-[#faeac2] transition-all hover:border-[#f2d078] hover:bg-[#1f1b15] hover:text-white"
                title="Instagram @marianaestevesinss"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                aria-label="Ligar para Mariana Esteves Advocacia"
                className="grid size-10 place-items-center rounded-lg border border-[#d4af37]/30 bg-[#12100d] text-[#faeac2] transition-all hover:border-[#f2d078] hover:bg-[#1f1b15] hover:text-white"
                title={`Ligar: ${PHONE_DISPLAY}`}
              >
                <Phone size={16} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp da Dra. Mariana Esteves"
                className="grid size-10 place-items-center rounded-lg border border-[#d4af37]/30 bg-[#12100d] text-[#faeac2] transition-all hover:border-[#f2d078] hover:bg-[#1f1b15] hover:text-white"
                title="Atendimento no WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Mariana Esteves! Gostaria de agendar uma consulta sobre meu benefício no INSS."
                )}
                target="_blank"
                size="sm"
                variant="gold"
                className="rounded-lg shadow-sm"
              >
                Consultar Benefício <ArrowUpRight size={14} />
              </GlowingButton>
            </div>

            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="grid size-11 place-items-center rounded-lg border border-[#d4af37]/30 bg-[#12100d] text-[#faeac2] lg:hidden"
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
                className="overflow-hidden border-t border-[#d4af37]/20 bg-[#0b0a09] px-6 lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["Prazer, Mariana", "#sobre"],
                    ["Áreas de Atuação", "#atuacao"],
                    ["Por Que Escolher", "#diferenciais"],
                    ["Avaliações no Google (4,9 ★)", "#avaliacoes"],
                    ["Contato & Sede em Contagem", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm font-medium text-stone-200 hover:text-[#f2d078]"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#c59b27] via-[#f2d078] to-[#c59b27] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.13em] text-[#140e07] shadow-md transition-all hover:brightness-105"
                      href={getWhatsAppUrl(
                        "Olá, Dra. Mariana! Gostaria de consultar sobre meus benefícios no INSS."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} /> WhatsApp: {PHONE_DISPLAY}
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#d4af37]/30 bg-[#12100d] px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-[#faeac2] transition-all hover:border-[#f2d078]"
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <MapPin size={15} /> R. Maria da Conceição Hilário, 263 · Contagem - MG
                    </a>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section - High Prestige, Luminous Warm Obsidian Canvas */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-[#d4af37]/20 bg-gradient-to-b from-[#0b0a09] via-[#12100d] to-[#171410]"
        >
          {/* Subtle gold ambient glow */}
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[36rem] rounded-full bg-[#d4af37]/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[28rem] rounded-full bg-[#8c6224]/15 blur-3xl" />

          <div className="mx-auto grid min-h-[660px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[720px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-12 lg:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-6"
            >
              <motion.div
                variants={reveal}
                className="mb-6 inline-flex items-center gap-2.5 rounded-lg border border-[#d4af37]/35 bg-[#171410] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#faeac2] shadow-sm"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#f2d078]" />
                <span>CONTAGEM - MG · ADVOCACIA PREVIDENCIÁRIA INSS</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="max-w-[760px] font-serif text-[2.65rem] leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl lg:text-[3.95rem]"
              >
                Advocacia Previdenciária Estratégica:{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#fff9e6] via-[#f2d078] to-[#d4af37]">
                  O Seu Benefício do INSS com Rigor e Agilidade.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-[#dcd4c3] sm:text-base sm:leading-8"
              >
                Sob a liderança da{" "}
                <strong className="font-semibold text-white">
                  Dra. Mariana Esteves de Carvalho (OAB/MG 172.375)
                </strong>
                , nosso escritório atua com dedicação incansável, transparência e rigor técnico em Direito Previdenciário. Especializado em aposentadorias do INSS, benefícios por incapacidade (auxílio-doença e invalidez), BPC/LOAS para idosos e pessoas com deficiência, pensão por morte e planejamento previdenciário. Sede em Contagem (MG), com atendimento presencial acolhedor e suporte online seguro para todo o Brasil.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Mariana Esteves! Gostaria de consultar sobre meus direitos no INSS."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar no WhatsApp com a Dra. Mariana
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 rounded-lg border border-[#d4af37]/30 bg-[#171410] px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#faeac2] transition-all hover:border-[#f2d078] hover:bg-[#1f1b15] hover:text-white"
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
                className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-[#d4af37]/20 pt-6 text-xs text-[#dcd4c3]"
              >
                <span className="inline-flex items-center gap-2 font-medium">
                  <Star size={15} className="fill-[#f2d078] text-[#f2d078]" />{" "}
                  4,9 estrelas no Google (mais de 50 avaliações de clientes)
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <MapPin size={15} className="text-[#d4af37]" /> Jardim Vera Cruz · Contagem - MG
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <HandHeart size={15} className="text-[#d4af37]" /> Atendimento Humanizado & Direto com a Advogada
                </span>
              </motion.div>
            </motion.div>

            {/* Hero Visual Presentation - Dra. Mariana Esteves */}
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
              <div className="relative aspect-[4/4.8] overflow-hidden rounded-2xl border border-[#d4af37]/35 bg-[#12100d] shadow-2xl ring-1 ring-[#d4af37]/20">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dra. Mariana Esteves de Carvalho — Advogada Previdenciária INSS"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0b0a09] via-[#0b0a09]/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-8 sm:left-8 sm:right-8">
                  <div>
                    <p className="font-serif text-2xl font-normal tracking-wide text-white">
                      Dra. Mariana Esteves
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#f2d078]">
                      Advocacia Previdenciária · OAB/MG 172.375
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-[#d4af37]/40 bg-[#0b0a09]/85 text-[#faeac2] backdrop-blur-sm">
                    <Scale size={18} />
                  </span>
                </div>
              </div>

              {/* Floating authority badge */}
              <div className="absolute -left-3 top-6 z-10 rounded-lg border border-[#d4af37]/40 bg-[#12100d]/95 px-4 py-2 text-[10px] font-bold tracking-[0.14em] text-[#faeac2] shadow-card backdrop-blur-md sm:-left-5">
                CONTAGEM · MINAS GERAIS · BRASIL
              </div>

              {/* Floating Google rating badge */}
              <div className="absolute -bottom-5 -right-3 z-10 rounded-xl border border-[#d4af37]/35 bg-[#12100d]/95 p-3.5 shadow-card backdrop-blur-md sm:-right-5">
                <div className="flex items-center gap-2">
                  <GoogleIcon size={16} />
                  <div className="flex items-center gap-1">
                    <Star size={13} className="fill-[#f2d078] text-[#f2d078]" />
                    <span className="font-serif text-base font-bold text-white">
                      4,9 / 5,0
                    </span>
                  </div>
                </div>
                <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#dcd4c3]">
                  50+ Avaliações no Google
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner - Authority Metrics */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-[#d4af37]/20 bg-[#100d0b]"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              [
                "4,9 ★",
                "avaliação de excelência com mais de 50 depoimentos reais e verificados no Google",
              ],
              [
                "Especialista INSS",
                "atuação focada em aposentadorias, BPC/LOAS, auxílio-doença e pensão por morte",
              ],
              [
                "Contagem - MG",
                "sede no Jardim Vera Cruz com atendimento presencial e online em todo o Brasil",
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
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-[#d4af37]/20"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-2xl font-semibold text-[#f2d078] sm:text-3xl">
                  {value}
                </span>
                <span className="max-w-[165px] text-[11px] leading-5 text-[#dcd4c3]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre a Dra. Mariana Esteves - "Prazer, Mariana!" - Modo Claro Ouro Marfim Nobre */}
        <section
          id="sobre"
          className="scroll-mt-24 border-y border-[#d4af37]/30 bg-[#faf8f4] py-20 text-[#19140e] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
            {/* Dra. Mariana presentation portrait */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[480px]"
            >
              <div className="relative aspect-[3/3.8] overflow-hidden rounded-2xl border-2 border-[#4a3410] bg-[#12100d] shadow-2xl">
                <Image
                  src={FOTO_SOBRE_SRC}
                  alt="Dra. Mariana Esteves de Carvalho — Advogada Previdenciária OAB/MG 172.375"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0b0a09]/90 via-[#0b0a09]/30 to-transparent" />
              </div>

              {/* Authority badge card - Deep Obsidian Contrast on Light Surface */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-[#d4af37]/40 bg-[#12100d] px-5 py-4 shadow-xl sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-[#f2d078]">
                  <Award size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#f2d078]">
                    Advocacia Especializada & Humanizada
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-white">
                  Dra. Mariana Esteves de Carvalho
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-[#d4af37]">
                  OAB/MG 172.375 · Advogada Previdenciária
                </p>
                <p className="mt-1 text-[11px] leading-4 text-[#dcd4c3]">
                  R. Maria da Conceição Hilário, 263 - Jardim Vera Cruz · Contagem - MG
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-[#8c6224]/40 sm:-left-7 sm:-top-7 sm:size-32" />
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
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#8c6224]/30 bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8c6224] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#8c6224]" />
                <span>PRAZER, MARIANA! CONHEÇA MINHA HISTÓRIA</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-[#19140e] sm:text-4xl lg:text-[3.25rem]"
              >
                Amor pela profissão, dedicação incansável e um{" "}
                <span className="italic text-[#8c6224]">
                  atendimento verdadeiramente humano e resolutivo.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-[#4a3f31]"
              >
                Inscrita na{" "}
                <strong className="font-bold text-[#19140e]">
                  OAB/MG sob o nº 172.375
                </strong>
                , exerço a advocacia previdenciária guiada por um propósito inabalável: lutar pelos direitos de segurados, trabalhadores, idosos e famílias que enfrentam a burocracia do INSS e buscam a segurança do seu benefício com rapidez e dignidade.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-[#4a3f31]"
              >
                No meu dia a dia, prezo por um atendimento acolhedor, onde o cliente não é um número de processo, mas alguém cuja história merece respeito e escuta atenta. Seja para acelerar uma aposentadoria, reverter perícias médicas indeferidas de auxílio-doença, conceder o BPC/LOAS ou resguardar uma família com a pensão por morte, o compromisso é estar ao seu lado do início ao fim com total transparência.
              </motion.p>

              {/* Quote Card */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-xl border border-[#e6dcce] bg-white/95 p-5 shadow-sm"
              >
                <blockquote className="font-serif text-sm italic leading-relaxed text-[#2a2013]">
                  &ldquo;A Previdência Social existe para proteger pessoas. O meu trabalho é garantir que cada direito adquirido seja reconhecido sem demoras desnecessárias e com a máxima remuneração que a lei prevê.&rdquo;
                </blockquote>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-[#8c6224]">
                  — Dra. Mariana Esteves de Carvalho · OAB/MG 172.375
                </p>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-1 gap-2.5 text-xs font-semibold text-[#2a2013] sm:grid-cols-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#8c6224]" />
                  <span>Atendimento presencial no Jardim Vera Cruz em Contagem e online para todo o Brasil</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#8c6224]" />
                  <span>Advocacia especializada em Direito Previdenciário (Aposentadorias, BPC/LOAS, Auxílios)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#8c6224]" />
                  <span>Comunicação transparente, humanizada e constante, sem &ldquo;juridiquês&rdquo;</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#8c6224]" />
                  <span>Nota 4,9 ★ no Google com mais de 50 avaliações autênticas de clientes</span>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Mariana Esteves! Gostaria de agendar uma consulta sobre meu caso."
                  )}
                  target="_blank"
                  size="md"
                  variant="dark"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar com a Dra. Mariana
                </GlowingButton>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#19140e] transition-colors hover:text-[#8c6224]"
                >
                  <Phone size={15} /> {PHONE_DISPLAY}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Áreas de Atuação Previdenciária */}
        <section
          id="atuacao"
          className="scroll-mt-24 border-t border-[#d4af37]/20 bg-[#0f0d0b] py-20 sm:py-28 lg:py-32"
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
                description="Defesa especializada e estratégica para garantir seus benefícios previdenciários e resguardar seus direitos perante o INSS em Contagem, na Grande BH e em todo o Brasil."
              >
                Atuação especializada em{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#fff9e6] via-[#f2d078] to-[#d4af37]">
                  Direito Previdenciário do INSS.
                </span>
              </Heading>
              <p className="max-w-[270px] pb-1 text-xs leading-6 text-[#dcd4c3]">
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
                    className="group flex min-h-[350px] flex-col rounded-xl border border-[#d4af37]/20 bg-[#12100d] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#d4af37]/50 hover:bg-[#191612] hover:shadow-obsidian sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-lg border border-[#d4af37]/25 bg-[#1e1913] text-[#f2d078] shadow-sm transition-colors group-hover:border-[#faeac2] group-hover:bg-[#282118] group-hover:text-white">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <span className="font-serif text-2xl text-[#d4af37]/40">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-md border border-[#d4af37]/25 bg-[#1e1913] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#faeac2] shadow-sm">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.45rem] leading-tight text-white">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-6 text-[#dcd4c3]">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-[#f2d078] hover:text-white"
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

        {/* Por Que Escolher Mariana Esteves Advocacia - Diferenciais */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-y border-[#d4af37]/20 bg-[#0b0a09] py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                eyebrow="NOSSOS PILARES DE EXCELÊNCIA"
                description="Unimos acolhimento sincero, proximidade humana e uma postura jurídica firme para transformar direitos previdenciários em conquistas reais."
              >
                Por que confiar seu processo à{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#fff9e6] via-[#f2d078] to-[#d4af37]">
                  Dra. Mariana Esteves?
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Mariana! Gostaria de consultar sobre meus direitos no INSS."
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
              {/* Card 1: Atendimento Humanizado e Acolhedor */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group flex flex-col justify-between rounded-xl border border-[#d4af37]/25 bg-[#12100d] p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af37]/50 hover:bg-[#191612] sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#d4af37]/30 bg-[#1e1913] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#faeac2]">
                      <HeartHandshake size={14} /> Atendimento Humanizado
                    </span>
                    <span className="text-xs font-semibold text-[#f2d078]">
                      Acolhimento Real
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-white sm:text-[1.75rem]">
                    Empatia, Escuta Atenta e Zero &ldquo;Juridiquês&rdquo;
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#dcd4c3]">
                    Sabemos que por trás de cada pedido ao INSS existe uma vida inteira de trabalho, uma família que precisa de amparo e meses de incerteza. Aqui você é atendido diretamente pela advogada, em uma conversa clara, compreensível e que respeita seu tempo e suas dúvidas.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-stone-200">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#f2d078]" />
                      <span>Contato direto com a Dra. Mariana pelo WhatsApp, sem robôs ou intermediários</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#f2d078]" />
                      <span>Esclarecimento detalhado de cada documento e cálculo necessário</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#f2d078]" />
                      <span>Acolhimento com paciência às dúvidas dos idosos e de toda a família</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#d4af37]/20 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Mariana! Gostaria de conversar com você sobre a minha situação no INSS."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#d4af37]/30 bg-[#1e1913] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#faeac2] transition-all hover:border-[#f2d078] hover:bg-[#282118] hover:text-white"
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
                className="group flex flex-col justify-between rounded-xl border border-[#d4af37]/25 bg-[#12100d] p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af37]/50 hover:bg-[#191612] sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#d4af37]/30 bg-[#1e1913] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#faeac2]">
                      <Scale size={14} /> Rigor Técnico Incisivo
                    </span>
                    <span className="text-xs font-semibold text-[#f2d078]">
                      Resultados Rápidos
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-white sm:text-[1.75rem]">
                    Combatividade na Luta Pelos Seus Direitos
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#dcd4c3]">
                    Não nos conformamos com negativas injustas do INSS ou perícias médicas superficiais. Estudamos cada histórico do CNIS, laudo médico e períodos trabalhados para construir teses jurídicas sólidas perante a Justiça Federal e os órgãos recursais previdenciários.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-stone-200">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#f2d078]" />
                      <span>Análise aprofundada de cálculos para buscar o benefício mais vantajoso</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#f2d078]" />
                      <span>Histórico comprovado de casos concedidos com extrema agilidade</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#f2d078]" />
                      <span>Acompanhamento rigoroso de cada prazo e movimentação do processo</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#d4af37]/20 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Mariana! Preciso de ajuda para reverter uma negativa do INSS / analisar meu benefício."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#d4af37]/30 bg-[#1e1913] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#faeac2] transition-all hover:border-[#f2d078] hover:bg-[#282118] hover:text-white"
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
        <section className="relative overflow-hidden bg-[#090807] py-20 text-white sm:py-28 lg:py-32">
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-[#d4af37]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-[#8c6224]/10 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="NOSSO COMPROMISSO COM VOCÊ"
                description="O reconhecimento expresso com nota 4,9 ★ no Google e dezenas de depoimentos reflete a dedicação intransigente em cuidar de cada segurado com carinho, técnica e lealdade."
              >
                Cuidamos do seu futuro com{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#fff9e6] via-[#f2d078] to-[#d4af37]">
                  respeito, transparência e dedicação total.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-[#d4af37]/25 bg-[#12100d] p-6 font-serif text-base italic leading-7 text-[#fbf3d5]">
                &ldquo;A Dra. Mariana é extremamente competente, atenciosa e possui um atendimento verdadeiramente humanizado. Sempre foi muito honesta, demonstra total domínio do assunto e dá retorno rápido mantendo o cliente ciente de todas as etapas.&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-[#f2d078]">
                  — Natália Vieira · Avaliação Verificada no Google Meu Negócio
                </footer>
              </blockquote>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-[#d4af37]/15"
            >
              {[
                [
                  "01",
                  "Acolhimento Genuíno & Empatia",
                  "Você é ouvido com atenção e sensibilidade. Entendemos suas necessidades para traçar a melhor estratégia previdenciária sem nenhum julgamento.",
                ],
                [
                  "02",
                  "Transparência Absoluta & Comunicação Fácil",
                  "Aqui você não fica no escuro. Você tem acesso direto à advogada pelo WhatsApp e entende cada etapa do seu requerimento no INSS em linguagem simples.",
                ],
                [
                  "03",
                  "Combatividade Incisiva & Resultados",
                  "Lutamos incansavelmente pelo melhor resultado possível, exigindo o cumprimento estrito das leis e o pagamento de cada centavo devido pela Previdência.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-semibold text-[#f2d078]">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-white">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-[#dcd4c3]">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Avaliações no Google (Depoimentos Reais - 4,9 estrelas · 50+ avaliações) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 border-t border-[#d4af37]/20 bg-[#0f0d0b] py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                eyebrow="PROVA SOCIAL VERIFICADA · GOOGLE MEU NEGÓCIO"
                description="Confira avaliações autênticas de clientes que confiaram seus benefícios à Dra. Mariana Esteves em Contagem, Minas Gerais e em todo o Brasil."
              >
                Avaliada com nota 4,9 ★ pelo{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#fff9e6] via-[#f2d078] to-[#d4af37]">
                  atendimento humanizado, competência e resultados.
                </span>
              </Heading>

              {/* Verified Google Badge Card */}
              <div className="flex flex-col gap-3 rounded-xl border border-[#d4af37]/25 bg-[#12100d] p-5 shadow-card sm:flex-row sm:items-center md:min-w-[340px]">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-lg border border-[#d4af37]/25 bg-[#1e1913] shadow-sm">
                  <GoogleIcon size={30} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-3xl font-bold leading-none text-white">
                      4,9
                    </span>
                    <div className="flex gap-0.5 text-[#f2d078]">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-[#f2d078] text-[#f2d078]"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-stone-200">
                    Mariana Esteves Advocacia
                  </p>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-[#f2d078] transition-colors hover:text-white"
                  >
                    50 avaliações no Google <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Authentic Google Reviews Grid */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clientReviews.map((review) => (
                <article
                  key={review.name}
                  className="group relative flex flex-col justify-between rounded-xl border border-[#d4af37]/20 bg-[#12100d] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#d4af37]/50 hover:bg-[#191612] hover:shadow-obsidian sm:p-8"
                >
                  <div>
                    {/* Header: Stars + Badge + Google icon */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-1 text-[#f2d078]">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-[#f2d078] text-[#f2d078]"
                          />
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] font-medium text-stone-300">
                        <GoogleIcon size={13} />
                        <span className="rounded-md border border-[#d4af37]/20 bg-[#1e1913] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#faeac2] shadow-xs">
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
                  <div className="mt-6 flex items-center gap-3 border-t border-[#d4af37]/20 pt-4">
                    <div className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#d4af37]/25 bg-[#1e1913] font-serif text-sm font-semibold text-[#faeac2] shadow-xs">
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
            <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-[#d4af37]/20 pt-8 sm:flex-row">
              <div className="flex flex-wrap items-center gap-2">
                {[
                  "Advocacia Previdenciária Especializada",
                  "Aposentadorias do INSS & Planejamento",
                  "BPC / LOAS Idoso e Deficiência",
                  "Atendimento direto com a advogada",
                  "Contagem & Grande BH",
                  "Nota 4,9 no Google",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#d4af37]/20 bg-[#12100d] px-3.5 py-1.5 text-[11px] font-medium text-stone-200 shadow-xs"
                  >
                    <CheckCircle2 size={13} className="text-[#f2d078]" />
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#f2d078] transition-colors hover:text-white"
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

        {/* Contato & Localização em Contagem */}
        <section
          id="contato"
          className="scroll-mt-24 border-t border-[#d4af37]/20 bg-[#0b0a09] py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="CONTATO & SEDE EM CONTAGEM - MG"
                description="Agende seu atendimento presencial em nosso escritório no Jardim Vera Cruz em Contagem ou inicie seu atendimento online pelo WhatsApp de onde você estiver."
              >
                Estamos prontos para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#fff9e6] via-[#f2d078] to-[#d4af37]">
                  escutar e defender você.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Mariana Esteves! Gostaria de agendar um horário para atendimento."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} /> Iniciar Conversa no WhatsApp
                </GlowingButton>
                <p className="text-[11px] leading-5 text-[#dcd4c3]">
                  Telefone e WhatsApp do escritório:{" "}
                  <strong className="text-white">{PHONE_DISPLAY}</strong>
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-[#dcd4c3]">
                <div className="flex items-start gap-3">
                  <Clock
                    size={16}
                    className="mt-0.5 shrink-0 text-[#f2d078]"
                  />
                  <div>
                    <p className="font-semibold text-white">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-stone-200">
                      Segunda a Sexta-feira das 08:00 às 18:00
                    </p>
                    <p className="text-[11px] text-stone-400">
                      Atendimento presencial com agendamento prévio e atendimento online seguro para todo o Brasil
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#f2d078]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-medium text-white transition-colors hover:text-[#f2d078]"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#f2d078]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#f2d078] text-stone-200"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#f2d078]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="transition-colors hover:text-[#f2d078] text-stone-200"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#f2d078]"
                  />
                  <span>{ADDRESS_TEXT}</span>
                </div>
              </div>
            </div>

            {/* Address & Office Card */}
            <div className="relative overflow-hidden rounded-xl border border-[#d4af37]/25 bg-[#12100d] p-7 shadow-card sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#d4af37] to-[#f2d078]" />

              <div className="flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-lg border border-[#d4af37]/30 bg-[#1e1913] text-[#f2d078]">
                  <MapPin size={22} strokeWidth={1.6} />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#f2d078]">
                    Sede do Escritório
                  </p>
                  <p className="mt-1 font-serif text-2xl text-white">
                    Contagem · Minas Gerais
                  </p>
                </div>
              </div>

              <address className="mt-7 max-w-md text-[14px] not-italic leading-7 text-[#dcd4c3]">
                <strong className="font-semibold text-white">
                  Mariana Esteves Advocacia Previdenciária
                </strong>
                <br />
                Dra. Mariana Esteves de Carvalho · OAB/MG 172.375
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-lg border border-[#d4af37]/20 bg-[#0b0a09] p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#f2d078]">
                  Atendimento & Horários
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-stone-300">
                  <span>Segunda a Sexta</span>
                  <span className="text-right font-semibold text-white">
                    08:00 às 18:00
                  </span>
                  <span>Atendimento Presencial</span>
                  <span className="text-right text-[#faeac2]">
                    Com agendamento prévio
                  </span>
                  <span>Localização</span>
                  <span className="text-right text-stone-200">Jardim Vera Cruz · Contagem - MG</span>
                  <span>Atendimento Online</span>
                  <span className="text-right text-stone-200">Todo o Brasil</span>
                </div>
              </div>

              <div className="my-7 h-px bg-[#d4af37]/20" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-stone-400">
                  R. Maria da Conceição Hilário, 263 · Contagem - MG
                </p>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#d4af37]/30 bg-[#1e1913] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#faeac2] transition-colors hover:border-[#f2d078] hover:bg-[#282118] hover:text-white"
                >
                  Traçar Rota no Google Maps <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip */}
        <section className="border-t border-[#d4af37]/20 bg-gradient-to-r from-[#0b0a09] via-[#171410] to-[#0b0a09] px-5 py-14 text-white shadow-inner sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f2d078]">
                <Sparkles size={13} /> MARIANA ESTEVES · ADVOCACIA PREVIDENCIÁRIA
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                Tem dúvidas sobre sua aposentadoria ou benefício no INSS?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dra. Mariana! Gostaria de consultar sobre a minha situação no INSS."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-lg bg-gradient-to-r from-[#c59b27] via-[#f2d078] to-[#c59b27] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#140e07] shadow-md transition-all hover:-translate-y-0.5 hover:brightness-110 hover:shadow-gold"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp{" "}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#d4af37]/20 bg-[#090807] px-5 py-14 text-white sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <a
                href="#inicio"
                aria-label="Mariana Esteves Advocacia"
                className="inline-block transition-transform hover:scale-[1.02]"
              >
                <Image
                  src={LOGO_FULL_SRC}
                  width={1024}
                  height={402}
                  alt="Mariana Esteves Advocacia Previdenciária"
                  className="h-[64px] w-auto object-contain sm:h-[76px]"
                />
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-[#dcd4c3]">
                ⚖️ Advocacia previdenciária especializada, humanizada e combativa. Aposentadorias, BPC/LOAS, Auxílio-Doença, Pensão por Morte e Planejamento Previdenciário.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-[#f2d078]">
                Dra. Mariana Esteves de Carvalho · Advogada · OAB/MG 172.375
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f2d078]">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-[#dcd4c3]">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  Prazer, Mariana
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
                  Contato & Sede em Contagem
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f2d078]">
                Contato & Endereço
              </h2>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-[#dcd4c3]">
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Mariana! Gostaria de solicitar um atendimento com o escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 font-medium text-[#faeac2]"
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
                <p className="inline-flex items-center gap-2 pt-1 text-[11px] text-[#f2d078]">
                  <Clock size={14} className="shrink-0" /> Seg a Sex: 08:00 às 18:00
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-[#d4af37]/20 pt-6 text-[10px] text-stone-400 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} MARIANA ESTEVES ADVOCACIA PREVIDENCIÁRIA. Todos os direitos reservados.
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
              "Olá, Dra. Mariana Esteves! Gostaria de consultar sobre meus direitos no INSS."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Dra. Mariana Esteves"
            className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          >
            <WhatsAppIcon size={28} />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-[#12100d] border border-[#d4af37]/30 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg transition-opacity group-hover:block">
              Falar com a Dra. Mariana
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
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-xl border border-[#d4af37]/35 bg-[#12100d] p-7 shadow-2xl sm:max-w-xl sm:rounded-xl sm:p-10"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-[#d4af37]/30 bg-[#1e1913] text-[#faeac2] transition-colors hover:border-[#f2d078] hover:text-white"
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

                <p className="mt-5 text-sm leading-7 text-[#dcd4c3]">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-[#d4af37]/20 pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#f2d078]">
                    Principais demandas atendidas pelo escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-stone-200"
                      >
                        <span className="size-2 shrink-0 rounded-full bg-[#f2d078]" />
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
