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
  ShieldCheck,
  Sparkles,
  Star,
  Wheat,
  X,
  Stethoscope,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "553399832397";
const PHONE_DISPLAY = "(33) 99983-2397";
const EMAIL_CONTACT = "contato@palomafernandesadv.com.br";
const INSTAGRAM_URL = "https://www.instagram.com/adv.palomafernandes";
const INSTAGRAM_HANDLE = "@adv.palomafernandes";
const LAWYER_NAME = "Dra. Paloma Fernandes";
const LAWYER_TITLE = "Advogada Previdenciária | Especialista em INSS";

const ADDRESS_TEXT =
  "Av. Gov. Milton Campos, 2973 - Sl 204 - Centro, Guanhães - MG, 39740-000";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Paloma+Fernandes+Advocacia+Previdenci%C3%A1ria+INSS+Av+Gov+Milton+Campos+2973+Guanh%C3%A3es+MG";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Paloma+Fernandes+%E2%80%94+Advocacia+Previdenci%C3%A1ria%0AGuanh%C3%A3es+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";

const LOGO_SRC = "/logo.png";
const LOGO_SYMBOL_SRC = "/logo-symbol.png";
const FOTO_HERO_SRC = "/dra-paloma.jpg";
const FOTO_SOBRE_SRC = "/dra-paloma.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Paloma! Gostaria de agendar um atendimento para tirar dúvidas sobre meu benefício ou aposentadoria no INSS.";
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
    id: "planejamento-previdenciario",
    title: "Planejamento Previdenciário Estratégico",
    icon: FileCheck2,
    tag: "Auditoria CNIS · Regras de Transição · Cálculo de RMI · Melhor Momento",
    summary:
      "Auditoria minuciosa de todo o seu histórico de contribuições para você saber o dia exato de se aposentar com o maior valor mensal possível, evitando perdas financeiras irreversíveis.",
    details:
      "A Reforma da Previdência (EC 103/2019) criou múltiplas regras de transição complexas (pedágio de 50%, pedágio de 100%, pontos e idade mínima progressiva). Requerer seu benefício na hora errada ou com pendências cadastrais no INSS pode custar milhares de reais todos os meses. A Dra. Paloma Fernandes realiza uma auditoria aprofundada do seu extrato CNIS, simula todos os cenários legais, define o descarte inteligente de contribuições desfavoráveis e entrega um roteiro claro para você conquistar a melhor renda.",
    topics: [
      "Auditoria detalhada do extrato CNIS e identificação de indicadores de pendência (PEXT, PREC-MENOR, etc.)",
      "Simulação comparativa entre todas as regras de transição da Reforma da Previdência",
      "Cálculo exato de Renda Mensal Inicial (RMI) e projeção de retorno financeiro",
      "Descarte estratégico de salários prejudiciais para alavancar a média de aposentadoria",
      "Orientação precisa sobre o valor e o prazo ideal de futuras contribuições",
      "Resgate e validação de períodos trabalhados sem recolhimento regular pelo empregador",
    ],
    whatsAppText:
      "Olá, Dra. Paloma! Gostaria de agendar um Planejamento Previdenciário para analisar meu caso e saber o melhor momento de me aposentar.",
  },
  {
    id: "aposentadorias-urbanas-especial",
    title: "Aposentadorias Urbanas & Especial",
    icon: Scale,
    tag: "Idade Urbana · Tempo de Contribuição · Especial PPP/LTCAT · Defesa Integral",
    summary:
      "Concessão célere e estratégica da sua aposentadoria urbana ou especial, incluindo todos os períodos trabalhados, conversão de insalubridade e correção de falhas do INSS.",
    details:
      "O INSS frequentemente indefere pedidos ou concede valores inferiores por desconsiderar períodos com insalubridade, tempo de serviço militar, vínculos sem baixa na carteira ou recolhimentos extemporâneos. A Dra. Paloma Fernandes analisa cada detalhe documental, reúne a documentação técnica necessária (PPP, LTCAT, holerites, carteiras profissionais) e atua com combatividade administrativa e judicial para garantir cada centavo a que você tem direito.",
    topics: [
      "Aposentadoria por Idade Urbana com validação integral do período de carência",
      "Aposentadoria por Tempo de Contribuição pelas regras de transição vigentes",
      "Aposentadoria Especial para profissionais expostos a ruído, calor, agentes químicos e biológicos",
      "Conversão de tempo especial em comum com multiplicador vantajoso",
      "Aposentadoria da Pessoa com Deficiência (Lei Complementar nº 142/2013) com critérios reduzidos",
      "Regularização de empresas baixadas, extintas ou que não efetuaram repasse das contribuições",
    ],
    whatsAppText:
      "Olá, Dra. Paloma! Gostaria de uma avaliação para dar entrada na minha aposentadoria urbana ou especial no INSS.",
  },
  {
    id: "aposentadoria-rural-trabalhador-campo",
    title: "Aposentadoria Rural & Segurado Especial",
    icon: Wheat,
    tag: "Agricultura Familiar · Lavoura · Boia-Fria · Produtor Rural · Guanhães & Região",
    summary:
      "Reconhecimento integral do tempo de trabalho na lavoura e agricultura familiar, garantindo a redução de idade para aposentadoria (55 anos mulher e 60 anos homem).",
    details:
      "Quem dedicou a vida à terra e à lavoura enfrenta grandes exigências burocráticas no INSS. A Dra. Paloma Fernandes possui ampla vivência na realidade dos trabalhadores do campo em Guanhães e em todo o interior mineiro, organizando um robusto conjunto de provas materiais (notas de produtor, contratos de comodato/arrendamento, certidões públicas históricas e autodeclaração rural) para vencer indeferimentos e garantir sua aposentadoria com dignidade.",
    topics: [
      "Aposentadoria por Idade Rural com redução de 5 anos (55 anos mulher e 60 anos homem)",
      "Aposentadoria Híbrida / Mista: soma do tempo rural com o tempo de trabalho urbano",
      "Elaboração correta da Autodeclaração do Segurado Especial perante o INSS",
      "Resgate e validação de provas materiais contemporâneas de agricultura familiar",
      "Concessão de salário-maternidade rural e auxílio por incapacidade rural",
      "Ação judicial para reversão de indeferimentos causados por recusa injusta de documentos rurais",
    ],
    whatsAppText:
      "Olá, Dra. Paloma! Gostaria de auxílio para comprovar meu tempo de trabalho na roça/campo e solicitar minha aposentadoria rural.",
  },
  {
    id: "beneficios-incapacidade-pericia",
    title: "Benefícios por Incapacidade & Perícia Médica",
    icon: Stethoscope,
    tag: "Auxílio por Incapacidade Temporária · Aposentadoria por Invalidez · Auxílio-Acidente",
    summary:
      "Defesa incisiva para trabalhadores incapacitados por doença física, mental ou acidente, revertendo negativas de perícia do INSS administrativamente e na Justiça.",
    details:
      "Estar doente ou incapacitado já é um fardo pesado; receber um indeferimento injusto na perícia médica do INSS agrava ainda mais o momento. A Dra. Paloma Fernandes prepara uma blindagem documental médica rigorosa (laudos detalhados, exames complementares e relatórios de especialistas), ingressa com recursos ou Ação Judicial com pedido de tutela de urgência e perícia médica judicial especializada para restabelecer ou conceder o seu benefício com rapidez.",
    topics: [
      "Auxílio por Incapacidade Temporária (antigo Auxílio-Doença) para tratamento de saúde",
      "Aposentadoria por Incapacidade Permanente (antiga Aposentadoria por Invalidez)",
      "Adicional de 25% na aposentadoria por invalidez para quem necessita de acompanhamento constante",
      "Auxílio-Acidente: indenização mensal de 50% para quem ficou com sequelas permanentes após alta",
      "Preparação técnica e documental para perícias presenciais ou perícia documental (Atestmed)",
      "Ação Judicial com pedido liminar para liberação imediata dos pagamentos e atrasados",
    ],
    whatsAppText:
      "Olá, Dra. Paloma! Tive meu benefício por incapacidade ou auxílio-doença negado pelo INSS e preciso de ajuda urgente.",
  },
  {
    id: "bpc-loas-assistencial",
    title: "BPC / LOAS (Idosos & Pessoas com Deficiência)",
    icon: HeartHandshake,
    tag: "1 Salário Mínimo Mensal · Sem Contribuição Prévia · Idosos 65+ · PCD de Qualquer Idade",
    summary:
      "Concessão do benefício assistencial mensal de 1 salário mínimo para idosos acima de 65 anos e pessoas com deficiência em situação de vulnerabilidade socioeconômica.",
    details:
      "O Benefício de Prestação Continuada (BPC/LOAS) é uma garantia constitucional fundamental que não exige histórico prévio de contribuição ao INSS. A Dra. Paloma Fernandes conduz todo o processo com sensibilidade e precisão: orienta a regularização no CadÚnico, demonstra documentalmente as despesas essenciais com remédios, fraldas e tratamentos que abatem a renda da família, e supera os bloqueios e exigências indevidas do INSS.",
    topics: [
      "BPC para Idosos a partir de 65 anos que vivem em condição de vulnerabilidade",
      "BPC para Pessoas com Deficiência de qualquer idade com impedimentos de longo prazo",
      "Dedução legal de gastos contínuos com saúde, remédios, alimentação especial e terapias",
      "Orientação completa para inscrição e atualização do Cadastro Único (CadÚnico/CRAS)",
      "Defesa contra suspensão indevida, bloqueio de pagamentos ou corte do benefício",
      "Ação judicial contundente contra negativas baseadas em critérios rígidos de renda per capita",
    ],
    whatsAppText:
      "Olá, Dra. Paloma! Gostaria de saber como solicitar o BPC/LOAS para mim ou para um familiar no INSS.",
  },
  {
    id: "pensao-por-morte-revisoes",
    title: "Pensão por Morte & Revisões de Benefícios",
    icon: ShieldCheck,
    tag: "Amparo a Dependentes · Revisão de Cálculo · Erros do INSS · Atrasados dos Últimos 5 Anos",
    summary:
      "Concessão rápida e desburocratizada de pensão por morte para proteger a família enlutada e revisão minuciosa de benefícios concedidos com erros para recebimento de atrasados.",
    details:
      "No momento da perda de um ente querido, a família precisa de acolhimento ágil e segurança financeira. A Dra. Paloma Fernandes habilita dependentes (cônjuge, companheiro com união estável, filhos menores ou inválidos) para concessão imediata da pensão. Além disso, realiza diagnósticos revisionais para segurados que já recebem benefícios: recalculamos se o INSS descartou vínculos, aplicou tetos errados ou gerou valores inferiores ao legalmente devido.",
    topics: [
      "Pensão por Morte Urbana e Rural com comprovação documental de dependência econômica",
      "Reconhecimento post mortem de união estável para concessão de pensão ao parceiro(a)",
      "Auxílio-Reclusão para famílias de segurados de baixa renda recolhidos à prisão",
      "Revisão de aposentadorias para inclusão de períodos trabalhados e vínculos rurais",
      "Cobrança integral de parcelas atrasadas retroativas à Data de Entrada do Requerimento (DER)",
      "Restabelecimento imediato de pensões ou aposentadorias suspensas indevidamente",
    ],
    whatsAppText:
      "Olá, Dra. Paloma! Preciso de orientações jurídicas sobre pensão por morte ou revisão do valor do meu benefício.",
  },
];

const clientReviews = [
  {
    name: "Jaciara Angelina",
    reviewerTag: "Local Guide · 14 avaliações",
    badge: "Humana & Estratégica",
    rating: 5,
    content:
      "Excelente! Realmente defende o interesse do cliente! Humana e estratégica! É Advogada da nossa família e recomendamos de olhos fechados! Em meio a dúvidas e incertezas ter alguém competente ao seu lado faz toda a diferença! Obrigada Dra. Paloma!",
  },
  {
    name: "Marcos Vinícius",
    reviewerTag: "2 avaliações no Google",
    badge: "Competência & Clareza",
    rating: 5,
    content:
      "A Dra. Paloma é uma advogada extremamente competente, atenciosa e dedicada. Desde o primeiro contato, mostrou grande conhecimento e profissionalismo, sempre explicando tudo de forma clara e objetiva. Seu comprometimento e atenção aos detalhes fizeram toda a diferença no meu caso. Recomendo seus serviços com total confiança!",
  },
  {
    name: "Wanderléia Tomás Oficial",
    reviewerTag: "4 avaliações no Google",
    badge: "Êxito em Todas as Causas",
    rating: 5,
    content:
      "Maravilhoso atendimento, excelente advogada, muito séria no que faz, e todas as vezes que precisei dos seus serviços tivemos êxito em todos eles. Além de sério e compromissado o trabalho da advogada Paloma, ela nos passa tranquilidade, sem perder a assertividade que a causa exige, muito controle emocional! Amei todas as vezes que precisei. Obrigada Dra. Paloma por todo empenho e competência!",
  },
  {
    name: "Girlane de Oliveira",
    reviewerTag: "3 avaliações no Google",
    badge: "Parceria de 10 Anos",
    rating: 5,
    content:
      "Conheci a Dra. Paloma Fernandes em um momento muito difícil da minha vida. Ela foi mais que uma advogada, foi uma amiga que me deu suporte. Dez anos se fez agora. Vencemos batalhas difíceis. Ela toda vida ali, persistente em seu trabalho. Se eu pudesse daria nota 1000 pela dedicação e profissionalismo. A OAB tem em sua instituição uma grande advogada!",
  },
  {
    name: "Gislaine Fernandes",
    reviewerTag: "2 avaliações no Google",
    badge: "Resultado de Sucesso",
    rating: 5,
    content:
      "Prezada Paloma, agradeço sua paciência e atenção pessoal prestada durante todo esse meu processo. Seus esforços tiveram um impacto positivo significativo em minha vida. Sua experiência e dedicação foram fundamentais para alcançar um resultado de sucesso. Você é uma profissional de excelência! Obrigada por tudo!",
  },
  {
    name: "Carmen Ildeu",
    reviewerTag: "1 avaliação no Google",
    badge: "Empatia & Luta Junto",
    rating: 5,
    content:
      "É uma das melhores e ótima profissional. A Dra. Paloma não quer só o seu dinheiro, ela se envolve, tem empatia, sofre junto, luta junto. Muito obrigada por tudo! Deus abençoe sempre!",
  },
  {
    name: "Paula Fernandes",
    reviewerTag: "3 avaliações no Google",
    badge: "Melhor Advogada da Região",
    rating: 5,
    content:
      "Melhor advogada de Guanhães e região! Espaço, atendimento e trabalho impecável. Eu não conheço outro serviço melhor. Serviço de extrema qualidade e acolhimento!",
  },
  {
    name: "Edilene Lopes",
    reviewerTag: "2 avaliações no Google",
    badge: "Honestidade & Rapidez",
    rating: 5,
    content:
      "Pessoa excelente, responsável, agiu com uma honestidade e rapidez exemplar com nosso processo. Só agradeço por toda a atenção com a minha família num momento tão delicado. Recomendo muito uma profissional muito eficiente!",
  },
  {
    name: "Tiago Santos",
    reviewerTag: "4 avaliações no Google",
    badge: "Causa Ganha & Seriedade",
    rating: 5,
    content:
      "Excelente advogada, trabalha com seriedade, super indico causa ganha!",
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
      <h2 className="mt-4 font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-[#11141a] sm:text-4xl lg:text-[3.15rem]">
        {children}
      </h2>
      {description && (
        <p className="mt-4 text-[15px] leading-7 text-[#282e3b]">
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
      <main className="overflow-hidden bg-[#faf8f5] text-[#11141a] selection:bg-[#f0e6d8] selection:text-[#0b0d11]">
        {/* Navigation Bar - Refined Platinum Champagne & Deep Obsidian Luxury */}
        <header className="sticky top-0 z-40 border-b border-[#e2dad0] bg-white/95 backdrop-blur-xl shadow-xs">
          <div className="mx-auto flex h-[98px] max-w-7xl items-center justify-between gap-6 px-5 sm:h-[108px] lg:h-[114px] xl:h-[118px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Dra. Paloma Fernandes — Advocacia Previdenciária INSS - Página Inicial"
              onClick={closeMenu}
              className="flex shrink-0 items-center transition-opacity hover:opacity-95"
            >
              <div className="relative h-[62px] w-[260px] sm:h-[72px] sm:w-[320px] lg:h-[82px] lg:w-[365px] xl:h-[88px] xl:w-[395px]">
                <Image
                  src={LOGO_SRC}
                  alt="Dra. Paloma Fernandes — Advocacia Previdenciária INSS"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 640px) 260px, (max-width: 1024px) 365px, 395px"
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
                Especialidades INSS
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
                aria-label="Avaliações da Dra. Paloma Fernandes no Google"
                className="grid size-10 place-items-center rounded-lg border border-[#e2dad0] bg-[#faf8f5] text-[#282e3b] transition-all hover:border-[#a8927b] hover:bg-white hover:text-[#0b0d11] shadow-xs"
                title="5,0 ★ no Google (47 avaliações)"
              >
                <GoogleIcon size={16} />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da Dra. Paloma Fernandes"
                className="grid size-10 place-items-center rounded-lg border border-[#e2dad0] bg-[#faf8f5] text-[#282e3b] transition-all hover:border-[#a8927b] hover:bg-white hover:text-[#0b0d11] shadow-xs"
                title={`Instagram ${INSTAGRAM_HANDLE}`}
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                aria-label="Ligar para a Dra. Paloma Fernandes"
                className="grid size-10 place-items-center rounded-lg border border-[#e2dad0] bg-[#faf8f5] text-[#282e3b] transition-all hover:border-[#a8927b] hover:bg-white hover:text-[#0b0d11] shadow-xs"
                title={`Ligar: ${PHONE_DISPLAY}`}
              >
                <Phone size={16} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Dra. Paloma Fernandes"
                className="grid size-10 place-items-center rounded-lg border border-[#e2dad0] bg-[#faf8f5] text-[#282e3b] transition-all hover:border-[#a8927b] hover:bg-white hover:text-[#0b0d11] shadow-xs"
                title="Atendimento no WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Paloma! Gostaria de agendar uma consulta para orientação sobre meus direitos no INSS."
                )}
                target="_blank"
                size="sm"
                variant="emerald"
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
              className="grid size-11 place-items-center rounded-lg border border-[#e2dad0] bg-[#faf8f5] text-[#11141a] lg:hidden shadow-xs"
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
                className="overflow-hidden border-t border-[#e2dad0] bg-white px-6 text-[#11141a] lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["A Advogada", "#sobre"],
                    ["Especialidades INSS", "#atuacao"],
                    ["Por Que Escolher", "#diferenciais"],
                    ["Avaliações (5,0 ★)", "#avaliacoes"],
                    ["Contato & Sede", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm font-medium text-[#282e3b] hover:text-[#a8927b]"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#0b0d11] via-[#171b22] to-[#0b0d11] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.13em] text-white shadow-md transition-all hover:brightness-105"
                      href={getWhatsAppUrl(
                        "Olá, Dra. Paloma! Gostaria de conversar sobre minha aposentadoria ou benefício pelo WhatsApp."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} /> WhatsApp: {PHONE_DISPLAY}
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#e2dad0] bg-[#faf8f5] px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-[#11141a] transition-all hover:border-[#a8927b]"
                      href={GOOGLE_SEARCH_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <GoogleIcon size={15} /> 5,0 ★ no Google (47 avaliações)
                    </a>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section - Executive Titanium Platinum, Obsidian Noir & Incandescent Warmth */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-[#e2dad0] bg-gradient-to-b from-white via-[#faf8f5] to-[#f4efe8]"
        >
          {/* Subtle champagne and warm ambient lighting aura */}
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[36rem] rounded-full bg-[#a8927b]/12 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[28rem] rounded-full bg-[#d4a359]/10 blur-3xl" />

          <div className="mx-auto grid min-h-[640px] max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:min-h-[700px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-12 lg:py-18 xl:min-h-[740px] xl:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-4"
            >
              <motion.div
                variants={reveal}
                className="mb-5 inline-flex items-center gap-2 rounded-lg border border-[#a8927b]/40 bg-white px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#745f4d] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#a8927b]" />
                <span>ADVOCACIA PREVIDENCIÁRIA & INSS · GUANHÃES - MG</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-[#11141a] sm:text-[2.6rem] sm:leading-[1.12] lg:text-[3.25rem] xl:text-[3.45rem]"
              >
                Sua aposentadoria e seus direitos no INSS conquistados com{" "}
                <span className="font-serif italic text-[#745f4d]">
                  estratégia, humanidade e o máximo valor.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-5 max-w-xl text-[15px] leading-7 text-[#282e3b] sm:text-base sm:leading-8"
              >
                Mais de <strong className="font-semibold text-[#11141a]">10 anos de advocacia combativa</strong> ao lado de quem trabalhou duro a vida inteira. A <strong className="font-semibold text-[#11141a]">Dra. Paloma Fernandes</strong> atua com rigor investigativo no CNIS, acolhimento empático e firmeza na concessão de <strong className="font-semibold text-[#11141a]">Aposentadorias, Benefícios por Incapacidade, BPC/LOAS e Planejamento Previdenciário</strong> em Guanhães e em todo o Brasil.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-col items-start gap-3.5 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Paloma! Gostaria de uma avaliação jurídica para o meu benefício/aposentadoria no INSS."
                  )}
                  target="_blank"
                  size="md"
                  variant="emerald"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar no WhatsApp com a Dra. Paloma
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 rounded-lg border border-[#e2dad0] bg-white px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#11141a] shadow-xs transition-all hover:border-[#a8927b] hover:bg-[#faf8f5]"
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
                className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[#e2dad0] pt-5 text-xs text-[#565e6e]"
              >
                <a
                  href={GOOGLE_SEARCH_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-[#11141a] transition-colors hover:text-[#745f4d]"
                >
                  <Star size={14} className="fill-[#d4a359] text-[#d4a359]" /> 5,0 ★ no Google (47 avaliações)
                </a>
                <span className="inline-flex items-center gap-1.5 font-medium text-[#11141a]">
                  <Award size={14} className="text-[#745f4d]" /> +10 Anos de Dedicação ao Segurado
                </span>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-[#11141a] transition-colors hover:text-[#745f4d]"
                >
                  <MapPin size={14} className="text-[#745f4d]" /> Av. Gov. Milton Campos, 2973 · Centro · Guanhães
                </a>
              </motion.div>
            </motion.div>

            {/* Hero Visual Presentation - Official Portrait & Authority Badges */}
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
              <div className="relative aspect-[4/4.9] overflow-hidden rounded-2xl border-2 border-[#e2dad0] bg-[#0b0d11] shadow-xl ring-1 ring-[#a8927b]/35">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dra. Paloma Fernandes — Advogada Previdenciária Especialista em INSS"
                  fill
                  priority
                  loading="eager"
                  unoptimized
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0b0d11] via-[#0b0d11]/85 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3 text-white sm:bottom-6 sm:left-6 sm:right-6">
                  <div>
                    <p className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-white">
                      Dra. Paloma Fernandes
                    </p>
                    <p className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-[#e5dacb]">
                      Advogada · Especialista em Direito Previdenciário
                    </p>
                    <p className="mt-0.5 text-[11px] text-stone-300">
                      Av. Gov. Milton Campos, 2973 - Sl 204 · Guanhães - MG
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-[#a8927b]/60 bg-[#0b0d11]/85 text-[#faf8f5] backdrop-blur-sm shadow-md">
                    <Scale size={18} className="text-[#bea993]" />
                  </span>
                </div>
              </div>

              {/* Floating authority badge */}
              <div className="absolute -left-3 top-4 z-10 rounded-lg border border-[#a8927b]/40 bg-white/95 px-3 py-1.5 text-[9px] sm:text-[10px] font-bold tracking-[0.14em] text-[#0b0d11] shadow-md backdrop-blur-md sm:-left-4">
                SEDE EM GUANHÃES · ATENDIMENTO ON-LINE EM TODO O BRASIL
              </div>

              {/* Floating Google 5.0 Star Rating */}
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="group absolute -bottom-4 -right-2 z-10 rounded-xl border border-[#a8927b]/60 bg-white/95 p-3 shadow-md backdrop-blur-md transition-all hover:border-[#0b0d11] hover:bg-white sm:-right-4"
              >
                <div className="flex items-center gap-2">
                  <GoogleIcon size={16} />
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-0.5 text-[#d4a359]">
                      <Star size={12} className="fill-[#d4a359] text-[#d4a359]" />
                    </div>
                    <span className="font-serif text-sm font-bold text-[#11141a]">
                      5,0
                    </span>
                    <span className="text-[9px] uppercase tracking-wider text-[#745f4d]">
                      / 5,0
                    </span>
                  </div>
                </div>
                <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#565e6e]">
                  47 Avaliações no Google (100% 5★)
                </p>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner - Authority Metrics */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-[#e2dad0] bg-white"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              [
                "5,0 ★ no Google",
                "nota máxima comprovada em 47 avaliações destacando humanidade e estratégia",
              ],
              [
                "+10 Anos de Luta",
                "mais de uma década vencendo batalhas e defendendo direitos previdenciários",
              ],
              [
                "100% Foco no INSS",
                "especialização pura em aposentadorias, benefícios por incapacidade e BPC/LOAS",
              ],
              [
                "Guanhães • Brasil",
                "sede moderna na Av. Gov. Milton Campos e assessoria jurídica digital para todo o país",
              ],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-[#e2dad0]"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-xl font-semibold text-[#745f4d] sm:text-2xl">
                  {value}
                </span>
                <span className="max-w-[165px] text-[11px] leading-5 text-[#565e6e]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre a Dra. Paloma Fernandes - Editorial Canvas */}
        <section
          id="sobre"
          className="scroll-mt-24 border-y border-[#e2dad0] bg-[#faf8f5] py-20 text-[#11141a] sm:py-28 lg:py-32"
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
              <div className="relative aspect-[4/4.9] overflow-hidden rounded-2xl border-2 border-[#e2dad0] bg-[#0b0d11] shadow-2xl ring-1 ring-[#a8927b]/35">
                <Image
                  src={FOTO_SOBRE_SRC}
                  alt="Dra. Paloma Fernandes — Advocacia Previdenciária"
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d11]/95 via-[#0b0d11]/35 to-transparent" />
                
                {/* Central brand emblem inside photo */}
                <div className="absolute top-6 left-6 rounded-lg border border-white/20 bg-white/95 p-2.5 backdrop-blur-md shadow-md">
                  <div className="relative h-[48px] w-[175px]">
                    <Image
                      src={LOGO_SRC}
                      alt="Logo Dra. Paloma Fernandes"
                      fill
                      unoptimized
                      sizes="175px"
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="font-cinzel text-xl font-bold tracking-wider text-[#faf8f5]">
                    PALOMA FERNANDES
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-[#e5dacb]">
                    Advogada · Direito Previdenciário INSS · Guanhães - MG
                  </p>
                </div>
              </div>

              {/* Authority badge card */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-[#a8927b]/60 bg-white px-5 py-4 shadow-xl sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-[#745f4d]">
                  <Sparkles size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#745f4d]">
                    Mais de 10 Anos de Advocacia
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-[#11141a]">
                  Dra. Paloma Fernandes
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-[#745f4d]">
                  Especialista em Direito Previdenciário (INSS)
                </p>
                <p className="mt-1 text-[11px] leading-4 text-[#565e6e]">
                  Av. Gov. Milton Campos, 2973 · Sl 204 · Centro · Guanhães - MG
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-[#a8927b]/40 sm:-left-7 sm:-top-7 sm:size-32" />
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
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#a8927b]/35 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#745f4d] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#a8927b]" />
                <span>SOBRE A DRA. PALOMA FERNANDES</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-[#11141a] sm:text-4xl lg:text-[3.25rem]"
              >
                Uma advocacia de firmeza técnica e acolhimento humano:{" "}
                <span className="italic text-[#745f4d]">
                  defendemos sua história de trabalho e lutamos pelo que é seu por direito.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-[#282e3b]"
              >
                Com sede estruturada na Avenida Governador Milton Campos, nº 2973 - Sala 204, no Centro de{" "}
                <strong className="font-bold text-[#11141a]">Guanhães - MG</strong>, e consultoria digital segura para segurados em todo o Brasil, a trajetória da{" "}
                <strong className="font-bold text-[#11141a]">Dra. Paloma Fernandes</strong> é fundamentada em uma década de lutas árduas contra a burocracia e as negativas do INSS.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-[#282e3b]"
              >
                Reconhecida com <strong className="font-bold text-[#11141a]">avaliação máxima 5,0 ★ unânime em 47 avaliações no Google</strong>, a Dra. Paloma destaca-se por seu atendimento verdadeiramente humano, estratégico e transparente:{" "}
                <em className="text-[#11141a]">&ldquo;Não quer só o seu dinheiro; ela se envolve, tem empatia, sofre junto e luta junto&rdquo;</em>, garantindo que nenhum trabalhador ou família fique desamparado.
              </motion.p>

              {/* Client Quote Card from real Google Reviews */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-xl border border-[#e2dad0] bg-white p-5 shadow-xs"
              >
                <blockquote className="font-serif text-sm italic leading-relaxed text-[#11141a]">
                  &ldquo;Excelente! Realmente defende o interesse do cliente! Humana e estratégica! É Advogada da nossa família e recomendamos de olhos fechados! Em meio a dúvidas e incertezas ter alguém competente ao seu lado faz toda a diferença!&rdquo;
                </blockquote>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-[#745f4d]">
                  — Jaciara Angelina · Local Guide no Google (5,0 ★)
                </p>
              </motion.div>

              {/* Personality & Profile Cards */}
              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-2 gap-3 text-xs sm:grid-cols-3"
              >
                <div className="rounded-lg border border-[#e2dad0] bg-white p-3 shadow-xs">
                  <p className="font-bold text-[#11141a]">47 Avaliações 5,0 ★</p>
                  <p className="mt-0.5 text-[11px] text-[#565e6e]">
                    100% de satisfação comprovada no Google
                  </p>
                </div>
                <div className="rounded-lg border border-[#e2dad0] bg-white p-3 shadow-xs">
                  <p className="font-bold text-[#11141a]">+10 Anos de Carreira</p>
                  <p className="mt-0.5 text-[11px] text-[#565e6e]">
                    Experiência prática em casos complexos de INSS
                  </p>
                </div>
                <div className="rounded-lg border border-[#e2dad0] bg-white p-3 shadow-xs col-span-2 sm:col-span-1">
                  <p className="font-bold text-[#11141a]">Assertividade & Calma</p>
                  <p className="mt-0.5 text-[11px] text-[#565e6e]">
                    Controle emocional e firmeza em cada ação
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-1 gap-2.5 text-xs font-semibold text-[#11141a] sm:grid-cols-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#745f4d]" />
                  <span>Sede na Av. Gov. Milton Campos, 2973 · Sl 204 · Centro · Guanhães</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#745f4d]" />
                  <span>Nota máxima 5,0 ★ no Google com 47 avaliações verificadas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#745f4d]" />
                  <span>Contato direto pelo WhatsApp com a Dra. Paloma</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#745f4d]" />
                  <span>Atendimento presencial em Guanhães e digital em todo o Brasil</span>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Paloma! Gostaria de agendar uma consulta para conversar sobre minha situação no INSS."
                  )}
                  target="_blank"
                  size="md"
                  variant="emerald"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar com a Dra. Paloma
                </GlowingButton>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#11141a] transition-colors hover:text-[#745f4d]"
                >
                  <Phone size={15} /> {PHONE_DISPLAY}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pilares de Atuação / Especialidades Previdenciárias */}
        <section
          id="atuacao"
          className="scroll-mt-24 border-t border-[#e2dad0] bg-[#f4efe8] py-20 sm:py-28 lg:py-32"
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
                eyebrow="ÁREAS DE ATUAÇÃO PREVIDENCIÁRIA & INSS"
                description="Assessoria jurídica especializada para garantir que você receba o benefício correto, no momento certo e com o maior valor financeiro possível perante o INSS ou na Justiça Federal."
              >
                Especialidades jurídicas dedicadas aos seus direitos em{" "}
                <span className="italic text-[#745f4d]">
                  Guanhães, Minas Gerais e em todo o Brasil.
                </span>
              </Heading>
              <p className="max-w-[270px] pb-1 text-xs leading-6 text-[#565e6e]">
                Clique em uma especialidade abaixo para conferir o detalhamento completo dos serviços e solicitar uma análise no WhatsApp.
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
                    className="group flex min-h-[350px] flex-col rounded-xl border border-[#e2dad0] bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#a8927b] hover:shadow-lg sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-lg border border-[#a8927b]/35 bg-[#f3ede4] text-[#745f4d] shadow-xs transition-colors group-hover:bg-[#0b0d11] group-hover:text-[#e5dacb] group-hover:border-[#a8927b]">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <span className="font-serif text-2xl text-[#a8927b]/40">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-md border border-[#a8927b]/30 bg-[#faf8f5] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#745f4d] shadow-xs">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.45rem] leading-tight text-[#11141a]">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-6 text-[#565e6e]">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-[#745f4d] hover:text-[#11141a]"
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

        {/* Por Que Escolher a Dra. Paloma Fernandes - Diferenciais */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-t border-[#e2dad0] bg-[#faf8f5] py-20 text-[#11141a] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                light
                eyebrow="EXCELÊNCIA, ESTRATÉGIA & RESULTADOS"
                description="O sustento da sua família, os anos dedicados ao trabalho duro e a sua tranquilidade financeira merecem uma advocacia atenta a cada detalhe e verdadeiramente combativa."
              >
                Por que confiar seu benefício à{" "}
                <span className="italic text-[#745f4d]">
                  Dra. Paloma Fernandes?
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Paloma! Gostaria de uma avaliação para a minha situação no INSS."
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
                className="group flex flex-col justify-between rounded-xl border border-[#e2dad0] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#a8927b] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#a8927b]/35 bg-[#f3ede4] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#745f4d]">
                      <HeartHandshake size={14} /> Atendimento Humanizado & Próximo
                    </span>
                    <span className="text-xs font-semibold text-[#745f4d]">
                      Você Sempre Informado
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#11141a] sm:text-[1.75rem]">
                    Comunicação Transparente e Suporte Acolhedor
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#282e3b]">
                    Como atestam as 47 avaliações 5 estrelas no Google, o grande diferencial do escritório é aliar estratégia jurídica incisiva a uma escuta verdadeiramente atenta. Você não fica desamparado nem perdido em termos difíceis: cada etapa, exigência do INSS ou andamento judicial é explicado com calma e total transparência.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-[#11141a]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#745f4d]" />
                      <span>Comunicação direta pelo WhatsApp com respostas rápidas e suporte atencioso</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#745f4d]" />
                      <span>Atualizações regulares sobre perícias médicas, laudos e decisões</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#745f4d]" />
                      <span>Explicações claras sem juridiquês para você entender seus direitos</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#e2dad0] pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Paloma! Gostaria de conversar para tirar dúvidas sobre meu processo do INSS."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#a8927b]/40 bg-[#faf8f5] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#11141a] transition-all hover:border-[#a8927b] hover:bg-[#0b0d11] hover:text-[#faf8f5]"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Conversar no WhatsApp com a Dra. Paloma
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
                className="group flex flex-col justify-between rounded-xl border border-[#e2dad0] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#a8927b] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#a8927b]/40 bg-[#faf8f5] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#59493c]">
                      <Award size={14} /> Atuação Especializada & Firme
                    </span>
                    <span className="text-xs font-semibold text-[#745f4d]">
                      Soluções Sob Medida
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#11141a] sm:text-[1.75rem]">
                    Estratégia Personalizada para a Realidade do Seu Caso
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#282e3b]">
                    Cada segurado tem um histórico contributivo único. Não usamos soluções genéricas: auditamos cada vínculo de carteira, tempo rural e atestados médicos para montar a melhor estratégia, seja na via administrativa ou em ação judicial contundente.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-[#11141a]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#745f4d]" />
                      <span>Auditoria minuciosa de vínculos e acerto de pendências do extrato CNIS</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#745f4d]" />
                      <span>Reversão judicial de perícias médicas superficiais e indeferimentos injustos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#745f4d]" />
                      <span>Cobrança rigorosa de valores em atraso retroativos desde o primeiro pedido</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#e2dad0] pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Paloma! Gostaria de consultar sobre a melhor estratégia jurídica para o meu caso no INSS."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#a8927b]/40 bg-[#faf8f5] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#11141a] transition-all hover:border-[#a8927b] hover:bg-[#0b0d11] hover:text-[#faf8f5]"
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
        <section className="relative overflow-hidden border-t border-[#e2dad0] bg-[#faf8f5] py-20 text-[#11141a] sm:py-24 lg:py-28">
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-[#a8927b]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-[#d4a359]/10 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                light
                eyebrow="COMO ATUAMOS NO SEU CASO"
                description="Um método transparente, ético e resolutivo para analisar sua história previdenciária e aplicar a rota mais rápida e vantajosa."
              >
                Três etapas claras para{" "}
                <span className="italic text-[#745f4d]">
                  proteger seu benefício e garantir o valor que você merece.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-[#e2dad0] bg-white p-6 font-serif text-base italic leading-7 text-[#11141a] shadow-xs">
                &ldquo;Nosso propósito é exercer uma advocacia previdenciária humana, técnica e combativa, garantindo que quem trabalhou duro a vida inteira receba sua aposentadoria com respeito, celeridade e acompanhamento permanente.&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-[#745f4d]">
                  — Dra. Paloma Fernandes · Advogada Previdenciária
                </footer>
              </blockquote>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-[#e2dad0]"
            >
              {[
                [
                  "01",
                  "Análise Detalhada & Diagnóstico do CNIS",
                  "Atendimento presencial na sede em Guanhães ou via WhatsApp/chamada de vídeo para examinar com minúcia carteiras de trabalho, laudos médicos, extratos do CNIS e períodos rurais.",
                ],
                [
                  "02",
                  "Definição da Rota Estratégica Mais Vantajosa",
                  "Planejamento detalhado para calcular o melhor momento de requerer o benefício, preparar documentos à prova de indeferimento ou acionar a Justiça Federal com pedido liminar.",
                ],
                [
                  "03",
                  "Atuação Incisiva, Presença Contínua & Retorno Rápido",
                  "Protocolo imediato, acompanhamento constante perante o INSS e tribunais, mantendo você informado sobre cada andamento sem burocracias e sem demoras.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-semibold text-[#745f4d]">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-[#11141a]">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-[#282e3b]">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Avaliações / Depoimentos Reais no Google Meu Negócio (47 Avaliações 5,0 ★) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 border-t border-[#a8927b]/25 bg-[#f4efe8] py-20 text-[#11141a] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                light
                eyebrow="PROVA SOCIAL VERIFICADA · GOOGLE MEU NEGÓCIO"
                description="Veja avaliações autênticas e espontâneas de clientes no Google sobre o acolhimento, a persistência e as causas ganhas pela Dra. Paloma Fernandes em Guanhães - MG."
              >
                Avaliada com nota máxima 5,0 ★ com{" "}
                <span className="italic text-[#745f4d]">
                  47 avaliações no Google pela competência, ética e excelência no atendimento.
                </span>
              </Heading>

              {/* Verified Google Badge Card */}
              <div className="flex flex-col gap-3 rounded-xl border border-[#e2dad0] bg-white p-5 shadow-xs sm:flex-row sm:items-center md:min-w-[340px]">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-lg border border-[#a8927b]/30 bg-[#faf8f5] shadow-xs">
                  <GoogleIcon size={30} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-3xl font-bold leading-none text-[#11141a]">
                      5,0
                    </span>
                    <div className="flex gap-0.5 text-[#d4a359]">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-[#d4a359] text-[#d4a359]"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#282e3b]">
                    Paloma Fernandes Advocacia Previdenciária
                  </p>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-[#745f4d] transition-colors hover:text-[#11141a]"
                  >
                    47 avaliações no Google (100% 5★) <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Client Reviews Grid */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clientReviews.map((review) => (
                <article
                  key={review.name}
                  className="group relative flex flex-col justify-between rounded-xl border border-[#e2dad0] bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#a8927b] hover:shadow-md sm:p-8"
                >
                  <div>
                    {/* Header: Stars + Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-1 text-[#d4a359]">
                        {Array.from({ length: review.rating }, (_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-[#d4a359] text-[#d4a359]"
                          />
                        ))}
                      </div>
                      <span className="rounded-md border border-[#a8927b]/30 bg-[#faf8f5] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#745f4d] shadow-xs">
                        {review.badge}
                      </span>
                    </div>

                    {/* Review content */}
                    <p className="mt-5 text-[14px] italic leading-relaxed text-[#11141a]">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  {/* Reviewer info */}
                  <div className="mt-6 flex items-center gap-3 border-t border-[#e2dad0] pt-4">
                    <div className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#a8927b]/35 bg-[#f3ede4] font-serif text-sm font-semibold text-[#745f4d] shadow-xs">
                      {review.name.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-serif text-base font-semibold text-[#11141a]">
                        {review.name}
                      </p>
                      <p className="text-[10px] uppercase tracking-wider text-[#565e6e]">
                        {review.reviewerTag}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom Actions and Trust Tags */}
            <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-[#e2dad0] pt-8 sm:flex-row">
              <div className="flex flex-wrap items-center gap-2">
                {[
                  "Advogada em Guanhães - MG",
                  "Direito Previdenciário INSS",
                  "Nota 5,0 ★ no Google (47 avaliações)",
                  "Planejamento Previdenciário",
                  "Aposentadoria Rural e Urbana",
                  "Auxílio-Doença e Invalidez",
                  "BPC / LOAS",
                  "Atendimento Digital para Todo o Brasil",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#e2dad0] bg-white px-3.5 py-1.5 text-[11px] font-medium text-[#11141a] shadow-xs"
                  >
                    <CheckCircle2 size={13} className="text-[#745f4d]" />
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#745f4d] transition-colors hover:text-[#11141a]"
              >
                Ver Todas as 47 Avaliações no Google{" "}
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Contato & Localização da Sede em Guanhães - MG */}
        <section
          id="contato"
          className="scroll-mt-24 border-t border-[#a8927b]/25 bg-[#faf8f5] py-20 text-[#11141a] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                light
                eyebrow="CONTATO & ATENDIMENTO EM GUANHÃES"
                description="Agende uma consulta presencial em nosso escritório na Av. Gov. Milton Campos ou inicie seu atendimento imediatamente pelo WhatsApp para examinar seu caso com discrição, ética e agilidade."
              >
                Estamos prontos para{" "}
                <span className="italic text-[#745f4d]">
                  escutar sua história e conquistar sua aposentadoria e benefícios.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Paloma! Gostaria de agendar um atendimento para análise do meu benefício previdenciário no INSS."
                  )}
                  target="_blank"
                  size="lg"
                  variant="emerald"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} /> Iniciar Conversa no WhatsApp
                </GlowingButton>
                <p className="text-[11px] leading-5 text-[#282e3b]">
                  Telefone e WhatsApp direto:{" "}
                  <strong className="text-[#11141a]">{PHONE_DISPLAY}</strong>
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-[#282e3b]">
                <div className="flex items-start gap-3">
                  <Clock
                    size={16}
                    className="mt-0.5 shrink-0 text-[#745f4d]"
                  />
                  <div>
                    <p className="font-semibold text-[#11141a]">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-[#11141a]">
                      Segunda a Sexta-feira das 08:30 às 18:00
                    </p>
                    <p className="text-[11px] text-[#565e6e]">
                      Atendimento presencial no Centro de Guanhães - MG e consultoria online em todo o Brasil
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#745f4d]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-medium text-[#11141a] transition-colors hover:text-[#745f4d]"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#745f4d]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#745f4d] text-[#11141a]"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#745f4d]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="transition-colors hover:text-[#745f4d] text-[#11141a]"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#745f4d]"
                  />
                  <div>
                    <span className="text-[#11141a]">{ADDRESS_TEXT}</span>
                    <br />
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex items-center gap-1 font-semibold text-[#745f4d] hover:underline"
                    >
                      Ver no Google Maps <ArrowUpRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Card with executive presentation */}
            <div className="relative overflow-hidden rounded-xl border border-[#e2dad0] bg-white p-7 shadow-sm sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#745f4d] via-[#a8927b] to-[#bea993]" />

              <div className="flex flex-col gap-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#745f4d]">
                  Sede do Escritório em Guanhães - MG
                </p>
                <div className="relative h-[68px] w-[290px] sm:h-[78px] sm:w-[350px]">
                  <Image
                    src={LOGO_SRC}
                    alt="Dra. Paloma Fernandes — Advocacia Previdenciária"
                    fill
                    unoptimized
                    sizes="350px"
                    className="object-contain object-left"
                  />
                </div>
              </div>

              {/* Office presentation card */}
              <div className="relative mt-5 aspect-[16/10] w-full overflow-hidden rounded-lg border border-[#e2dad0] bg-[#0b0d11] shadow-xs">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Espaço de Atendimento da Dra. Paloma Fernandes em Guanhães - MG"
                  fill
                  unoptimized
                  className="object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent p-4 text-white">
                  <p className="text-xs font-semibold">Ambiente Executivo, Acolhedor e Moderno</p>
                  <p className="text-[10px] text-stone-200">Av. Gov. Milton Campos, 2973 · Sala 204 · Centro · Guanhães - MG</p>
                </div>
              </div>

              <address className="mt-6 max-w-md text-[14px] not-italic leading-7 text-[#282e3b]">
                <strong className="font-semibold text-[#11141a]">
                  Dra. Paloma Fernandes — Advocacia Previdenciária INSS
                </strong>
                <br />
                {LAWYER_TITLE}
                <br />
                Atendimento presencial em Guanhães e online para todo o Brasil
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-lg border border-[#e2dad0] bg-[#faf8f5] p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#745f4d]">
                  Atendimento & Horários
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-[#282e3b]">
                  <span>Segunda a Sexta</span>
                  <span className="text-right font-semibold text-[#11141a]">
                    08:30 às 18:00
                  </span>
                  <span>Atendimento Presencial</span>
                  <span className="text-right font-medium text-[#745f4d]">
                    Centro · Guanhães - MG
                  </span>
                  <span>Endereço</span>
                  <span className="text-right text-[#11141a]">Av. Gov. Milton Campos, 2973 - Sl 204</span>
                  <span>Avaliações Google</span>
                  <span className="text-right font-semibold text-[#745f4d]">5,0 ★ (47 avaliações)</span>
                  <span>Atendimento Digital</span>
                  <span className="text-right text-[#11141a]">Todo o Brasil & Exterior</span>
                </div>
              </div>

              <div className="my-7 h-px bg-[#e2dad0]" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-[#565e6e]">
                  Atendimento humanizado, ético e com absoluto sigilo profissional
                </p>
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Paloma! Gostaria de agendar um atendimento no escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#a8927b]/40 bg-[#f4efe8] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#11141a] transition-colors hover:border-[#a8927b] hover:bg-[#0b0d11] hover:text-[#faf8f5]"
                >
                  <WhatsAppIcon size={14} /> Falar no WhatsApp <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip */}
        <section className="border-t border-[#a8927b]/25 bg-gradient-to-r from-[#f4efe8] via-[#faf8f5] to-[#f4efe8] px-5 py-14 text-[#11141a] shadow-xs sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#745f4d]">
                <Sparkles size={13} /> DRA. PALOMA FERNANDES — ADVOCACIA PREVIDENCIÁRIA ESPECIALIZADA
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-[#11141a] sm:text-4xl">
                Precisa de uma advogada especialista, combativa e acolhedora para conquistar sua aposentadoria ou benefício no INSS?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dra. Paloma! Gostaria de uma avaliação jurídica para o meu benefício do INSS."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-lg bg-gradient-to-r from-[#0b0d11] via-[#171b22] to-[#0b0d11] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-md transition-all hover:-translate-y-0.5 hover:brightness-105 hover:shadow-lg border border-[#a8927b]/40 hover:border-[#bea993]"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp{" "}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* Footer - Elegant Light Luxury */}
        <footer className="border-t border-[#e2dad0] bg-[#f4efe8] px-5 py-14 text-[#11141a] sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <a
                href="#inicio"
                aria-label="Dra. Paloma Fernandes — Advocacia Previdenciária"
                className="inline-block transition-transform hover:scale-[1.01]"
              >
                <div className="relative h-[78px] w-[310px] sm:h-[95px] sm:w-[380px]">
                  <Image
                    src={LOGO_SRC}
                    alt="Dra. Paloma Fernandes — Advocacia Previdenciária"
                    fill
                    unoptimized
                    sizes="380px"
                    className="object-contain object-left"
                  />
                </div>
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-[#565e6e]">
                ⚖️ Advocacia previdenciária especializada com defesa humana e estratégica. Atuação combativa no INSS: Planejamento Previdenciário, Aposentadorias, Benefícios por Incapacidade, BPC/LOAS e Pensão por Morte em Guanhães - MG e em todo o Brasil.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-[#745f4d]">
                Dra. Paloma Fernandes — Advogada | OAB/MG
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#745f4d]">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-[#565e6e]">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  A Advogada
                </a>
                <a className="footer-link" href="#atuacao">
                  Especialidades INSS
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
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#745f4d]">
                Contato & Atendimento
              </h2>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-[#565e6e]">
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Paloma! Gostaria de tirar dúvidas com o escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 font-medium text-[#11141a]"
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
                <p className="inline-flex items-center gap-2 pt-1 text-[11px] text-[#745f4d]">
                  <Clock size={14} className="shrink-0" /> Seg a Sex: 08:30 às 18:00
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-[#e2dad0] pt-6 text-[10px] text-stone-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} DRA. PALOMA FERNANDES — ADVOCACIA PREVIDENCIÁRIA. Todos os direitos reservados.
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
              "Olá, Dra. Paloma! Gostaria de consultar sobre meu caso e tirar dúvidas pelo WhatsApp."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Dra. Paloma Fernandes"
            className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          >
            <WhatsAppIcon size={28} />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-[#0b0d11] border border-[#a8927b]/40 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg transition-opacity group-hover:block">
              Falar com Dra. Paloma Fernandes
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
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-xl border border-[#e2dad0] bg-white p-7 shadow-2xl sm:max-w-xl sm:rounded-xl sm:p-10 text-[#11141a]"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-[#e2dad0] bg-[#faf8f5] text-[#11141a] transition-colors hover:border-[#a8927b] hover:text-[#745f4d]"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-3 pr-12">
                  <div className="relative size-10 shrink-0 overflow-hidden rounded-lg border border-[#a8927b]/35 bg-[#faf8f5] p-1 shadow-xs">
                    <Image
                      src={LOGO_SYMBOL_SRC}
                      alt="Monograma PF Dra. Paloma Fernandes"
                      fill
                      sizes="40px"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="eyebrow-light">ESPECIALIDADE INSS</p>
                    <p className="text-[10px] font-semibold tracking-wider text-[#745f4d] uppercase">
                      {LAWYER_NAME} · {LAWYER_TITLE}
                    </p>
                  </div>
                </div>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-serif text-3xl leading-tight text-[#11141a] sm:text-4xl"
                >
                  {activeArea.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-[#282e3b]">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-[#e2dad0] pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#745f4d]">
                    Demandas e Serviços Atendidos pelo Escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-[#1e293b]"
                      >
                        <span className="size-2 shrink-0 rounded-full bg-[#a8927b]" />
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
                    className="px-5 py-3 text-xs font-semibold text-stone-500 transition-colors hover:text-[#11141a]"
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
