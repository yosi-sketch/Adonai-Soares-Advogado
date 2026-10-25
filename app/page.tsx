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
  Coins,
  ShieldCheck,
  X,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "553398150345";
const PHONE_DISPLAY = "(33) 99815-0345";
const EMAIL_CONTACT = "contato@patriciafreyer.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/adv.patriciafreyer/";
const INSTAGRAM_HANDLE = "@adv.patriciafreyer";
const LAWYER_NAME = "Dra. Patrícia Freyer";
const LAWYER_TITLE = "Advogada Trabalhista | OAB/MG";

const ADDRESS_TEXT = "Av. dos Bragas, 146 - Centro, Peçanha - MG, 39700-000";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Patr%C3%ADcia+Freyer+Advocacia+Av+dos+Bragas+146+Centro+Pe%C3%A7anha+MG";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Patr%C3%ADcia+Freyer+Advocacia%0APe%C3%A7anha+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";

const LOGO_SRC = "/logo.png";
const LOGO_SYMBOL_SRC = "/logo-symbol.png";
const FOTO_HERO_SRC = "/hero.jpg";
const FOTO_SOBRE_SRC = "/sobre.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Patrícia Freyer! Gostaria de agendar um atendimento para tirar dúvidas sobre meus direitos trabalhistas.";
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
    id: "verbas-rescisorias-demissao",
    title: "Verbas Rescisórias & Demissão",
    icon: Coins,
    tag: "Demissão Sem Justa Causa · Cálculo de Verbas · Multa de 40% · Seguro-Desemprego",
    summary:
      "Cálculo rigoroso e cobrança integral de todas as verbas rescisórias devidas, combatendo descontos abusivos e garantindo a liberação imediata do FGTS e seguro-desemprego.",
    details:
      "Ao ser demitido ou pedir demissão, o trabalhador precisa ter a certeza absoluta de que todos os valores devidos estão sendo quitados. A Dra. Patrícia Freyer realiza a auditoria completa do Termo de Rescisão (TRCT), holerites e extrato de FGTS, calculando aviso prévio, férias proporcionais com 1/3, 13º salário e a multa de 40%, além de acionar a Justiça caso a empresa atrase o pagamento ou efetue retenções indevidas.",
    topics: [
      "Auditoria minuciosa do TRCT e recálculo de saldo de salário e comissões",
      "Cobrança da multa do Art. 477 da CLT por atraso na homologação ou pagamento da rescisão",
      "Liberação imediata do saque do FGTS com a multa rescisória de 40%",
      "Emissão judicial de guias para habilitação urgente no Seguro-Desemprego",
      "Cálculo exato de aviso prévio proporcional ao tempo de serviço (Lei 12.506/11)",
      "Reversão judicial de Justa Causa aplicada indevidamente pelo empregador",
    ],
    whatsAppText:
      "Olá, Dra. Patrícia Freyer! Gostaria de uma análise para conferir minhas verbas rescisórias e cálculo de demissão.",
  },
  {
    id: "rescisao-indireta-falta-grave",
    title: "Rescisão Indireta (A 'Demissão do Patrão')",
    icon: ShieldCheck,
    tag: "Salários Atrasados · Falta de FGTS · Assédio Moral · Desvio de Função",
    summary:
      "Quando a empresa descumpre a lei, você tem o direito legal de romper o vínculo e receber todas as verbas como se tivesse sido demitido sem justa causa, inclusive seguro-desemprego e multa de 40%.",
    details:
      "Muitos trabalhadores continuam em ambientes nocivos ou toleram atrasos recorrentes de salários por receio de pedir demissão e perder direitos. A rescisão indireta (Artigo 483 da CLT) é a punição legal ao empregador inadimplente ou abusivo. A Dra. Patrícia Freyer instrui a ação com provas contundentes para garantir sua saída digna com o pagamento de todo o pacote rescisório integral.",
    topics: [
      "Falta de depósito contínuo ou irregularidade reiterada no FGTS do trabalhador",
      "Atrasos frequentes de salários, férias vencidas não remuneradas e adicionais",
      "Assédio moral, cobrança de metas abusivas, humilhações e rigor excessivo",
      "Exigência de serviços superiores às forças do empregado ou alheios ao contrato (desvio de função)",
      "Perigo manifesto de mal considerável no ambiente de trabalho sem proteção necessária",
      "Saída imediata com direito a saque do FGTS com 40% e acesso ao seguro-desemprego",
    ],
    whatsAppText:
      "Olá, Dra. Patrícia Freyer! A empresa está descumprindo obrigações e gostaria de avaliar a Rescisão Indireta.",
  },
  {
    id: "horas-extras-intervalos",
    title: "Horas Extras & Intervalos Suprimidos",
    icon: Clock,
    tag: "Jornadas Abusivas · Horas Extras Não Pagas · Almoço Reduzido · Sobreaviso",
    summary:
      "Defesa contundente para receber por cada minuto trabalhado além da jornada. Recuperação de valores devidos com adicionais legais de 50% e 100% e reflexos em todas as verbas.",
    details:
      "Trabalhar além do expediente contratual sem remuneração justa é uma das violações mais recorrentes na Justiça do Trabalho. A Dra. Patrícia Freyer analisa cartões de ponto, mensagens corporativas, registros eletrônicos e testemunhas para comprovar a jornada real, desconstituir bancos de horas fraudulentos e cobrar as horas extraordinárias com todos os reflexos em FGTS, 13º e férias.",
    topics: [
      "Cobrança de horas extras com adicional de no mínimo 50% em dias úteis e 100% em domingos e feriados",
      "Indenização por intervalo intrajornada (horário de almoço e descanso) reduzido ou não usufruído",
      "Adicional noturno e hora noturna reduzida para trabalhos entre 22h e 05h",
      "Horas de sobreaviso, prontidão e exigência de atendimento via celular e mensagens fora do expediente",
      "Descaracterização de acordos individuais de compensação e banco de horas descumprido",
      "Reflexos legais das horas extras em DSR, férias + 1/3, 13º salário e aviso prévio",
    ],
    whatsAppText:
      "Olá, Dra. Patrícia Freyer! Gostaria de consultar sobre horas extras e intervalos que não foram pagos.",
  },
  {
    id: "acidente-trabalho-doenca-ocupacional",
    title: "Acidente de Trabalho & Doença Ocupacional",
    icon: AlertTriangle,
    tag: "Estabilidade de 12 Meses · Indenização Moral e Material · LER/DORT · Burnout",
    summary:
      "Proteção jurídica ampla em caso de lesão no trabalho ou adoecimento ocupacional, assegurando estabilidade provisória, indenizações reparatórias, pensão e cobertura médica.",
    details:
      "O trabalhador que sofre acidente no exercício da profissão ou adquire doença decorrente do trabalho (como LER/DORT, problemas na coluna ou Síndrome de Burnout) tem direito à proteção legal específica. A Dra. Patrícia Freyer atua com perícia técnica e sensibilidade para assegurar estabilidade no emprego, reparação por danos morais e estéticos, além de pensão mensal caso haja redução da capacidade de trabalho.",
    topics: [
      "Garantia de estabilidade provisória de emprego por no mínimo 12 meses após a cessação do benefício do INSS",
      "Ação indenizatória por danos morais, materiais e estéticos decorrentes de acidente típico ou de trajeto",
      "Doenças ocupacionais equiparadas a acidente de trabalho: LER, DORT, hérnias discais e esgotamento psíquico (Burnout)",
      "Pensão mensal vitalícia ou temporária proporcional à diminuição da capacidade laborativa",
      "Custeio e ressarcimento integral de despesas hospitalares, medicamentos e tratamentos continuados",
      "Emissão forçada de CAT (Comunicação de Acidente de Trabalho) sonegada pelo empregador",
    ],
    whatsAppText:
      "Olá, Dra. Patrícia Freyer! Preciso de orientação sobre acidente de trabalho ou doença ocupacional.",
  },
  {
    id: "adicionais-insalubridade-periculosidade",
    title: "Insalubridade & Periculosidade",
    icon: Briefcase,
    tag: "Agentes Nocivos · 10%, 20% ou 40% · Inflamáveis e Eletricidade · 30%",
    summary:
      "Cobrança dos adicionais legais devidos para funções exercidas sob condições prejudiciais à saúde ou em contato com riscos à integridade física do empregado.",
    details:
      "O trabalho realizado com exposição a agentes nocivos (como calor excessivo, ruído, produtos químicos ou agentes biológicos) exige o pagamento de adicional de insalubridade de até 40%. Já o contato com energia elétrica de alta tensão, combustíveis, inflamáveis ou atividade de segurança impõe o adicional de periculosidade de 30%. O escritório atua com acompanhamento pericial rigoroso para fazer valer esse direito.",
    topics: [
      "Adicional de insalubridade em graus mínimo (10%), médio (20%) e máximo (40%)",
      "Adicional de periculosidade de 30% calculado sobre o salário base do trabalhador",
      "Atividades com motocicletas (motoboys e entregadores) e profissionais de vigilância armada ou desarmada",
      "Perícia técnica na Justiça do Trabalho para demonstrar insuficiência ou ausência de EPIs eficazes",
      "Cobrança retroativa de adicionais não pagos dos últimos 5 anos de contrato de trabalho",
      "Impacto do trabalho especial na contagem previdenciária e tempo para aposentadoria",
    ],
    whatsAppText:
      "Olá, Dra. Patrícia Freyer! Gostaria de consultar sobre adicional de insalubridade ou periculosidade.",
  },
  {
    id: "vinculo-empregaticio-pejotizacao",
    title: "Vínculo de Emprego & Falsa PJ",
    icon: FileCheck2,
    tag: "Carteira Não Assinada · Pejotização Fraudulenta · MEI Forçado · Equiparação",
    summary:
      "Reconhecimento formal do vínculo de emprego na Carteira de Trabalho para quem trabalhou sem registro ou foi forçado a abrir CNPJ/MEI para mascarar relação empregatícia.",
    details:
      "Se você cumpre horários, recebe ordens diretas, tem remuneração habitual e não pode se fazer substituir, você é empregado protegido pela CLT, mesmo que a empresa o tenha obrigado a emitir notas como MEI ou PJ. A Dra. Patrícia Freyer busca a declaração judicial de nulidade dessa fraude, garantindo a anotação na carteira e o pagamento retroativo de férias, 13º, FGTS e recolhimentos ao INSS.",
    topics: [
      "Reconhecimento de vínculo na Carteira de Trabalho (CTPS) com contagem de tempo para o INSS",
      "Nulidade da 'pejotização' fraudulenta e recuperação de direitos trabalhistas sonegados",
      "Cobrança de FGTS com multa de 40%, 13º salários integrais e férias remuneradas + 1/3 de todo o período",
      "Integração ao salário de valores, gratificações ou comissões pagos 'por fora'",
      "Equiparação salarial quando você exerce as mesmas atribuições que colega que recebe mais",
      "Segurança jurídica para que seu tempo de trabalho informal conte para a aposentadoria",
    ],
    whatsAppText:
      "Olá, Dra. Patrícia Freyer! Trabalhei sem carteira assinada ou como falsa PJ e quero regularizar meus direitos.",
  },
];

const clientReviews = [
  {
    name: "Karen Jaqueline Haselroth",
    reviewerTag: "2 avaliações · 7 fotos no Google",
    badge: "Eficiência & Atenção",
    rating: 5,
    content:
      "Excelente profissional! Muito atenciosa em entender o caso e esclarecer as dúvidas, ajudando no caso de forma eficiente!",
  },
  {
    name: "Joao Claudino",
    reviewerTag: "1 avaliação no Google",
    badge: "Resolução Rápida",
    rating: 5,
    content:
      "Dra. Patrícia, além de ser uma excelente pessoa, ótima advogada, pegou meu caso de última hora e com pouco tempo meus problemas estavam resolvidos. À Dra. Patrícia só agradecer, que Deus continue te ajudando a ajudar mais pessoas assim como eu.",
  },
  {
    name: "Lucas Eduardo Freyer",
    reviewerTag: "4 avaliações no Google",
    badge: "Segurança & Paciência",
    rating: 5,
    content:
      "Excelente profissional! A Dra. Patrícia é muito atenciosa, competente e dedicada. Sempre esclarece as dúvidas com muita paciência e transmite segurança durante todo o atendimento. Fiquei muito satisfeito com o trabalho e com a forma cuidadosa como conduziu tudo. Recomendo muito!",
  },
  {
    name: "Jessiele Ferreira Da Silva",
    reviewerTag: "1 avaliação no Google",
    badge: "Atendimento Humano",
    rating: 5,
    content:
      "Profissional extremamente dedicada, atenciosa e comprometida com seu trabalho. Admiro muito a forma humana e cuidadosa com que lida com as pessoas.",
  },
  {
    name: "Luisivan da Costa",
    reviewerTag: "3 avaliações no Google",
    badge: "Retorno Imediato",
    rating: 5,
    content:
      "Ótima profissional! Super dedicada, retornos de casos jurídicos imediatos, super indico!",
  },
  {
    name: "Rudolfo Freyer",
    reviewerTag: "1 avaliação no Google",
    badge: "Ética & Clareza",
    rating: 5,
    content:
      "Como profissional, você é dedicada, responsável, tens clareza na comunicação, e transmite segurança e ética profissional...",
  },
  {
    name: "Ketlin Pritsch",
    reviewerTag: "1 avaliação no Google",
    badge: "Prestativa & Ágil",
    rating: 5,
    content:
      "Profissional incrível!!!! Maravilhosa, atenciosa e muito prestativa… responde logo, com muita atenção! Indico muito!!!!",
  },
  {
    name: "Tania Freyer",
    reviewerTag: "1 avaliação no Google",
    badge: "Compromisso com a Justiça",
    rating: 5,
    content:
      "Uma excelente profissional, cuja competência, ética, dedicação e compromisso com a justiça são verdadeiramente admiráveis.",
  },
  {
    name: "Simone Silva",
    reviewerTag: "1 avaliação no Google",
    badge: "Causa Trabalhista",
    rating: 5,
    content:
      "Muito competente! Esclareceu as dúvidas referente à causa trabalhista!",
  },
  {
    name: "Cristiano Zimmermann",
    reviewerTag: "2 avaliações no Google",
    badge: "Competente & Ética",
    rating: 5,
    content:
      "Excelente profissional, competente, ética e extremamente dedicada.",
  },
  {
    name: "Victória Moraes",
    reviewerTag: "1 avaliação no Google",
    badge: "Atenção aos Detalhes",
    rating: 5,
    content:
      "Advogada super atenciosa e muito atenta aos detalhes! Indico de olhos fechados!",
  },
  {
    name: "Edinei Cason",
    reviewerTag: "3 avaliações · 1 foto no Google",
    badge: "Condução Espetacular",
    rating: 5,
    content:
      "Dra. Patrícia sempre excelente e prestativa, conseguiu sanar todas as minhas dúvidas e conduziu o processo de forma espetacular, só tenho a agradecer.",
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
      <h2 className="mt-4 font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-[#140f0c] sm:text-4xl lg:text-[3.15rem]">
        {children}
      </h2>
      {description && (
        <p className="mt-4 text-[15px] leading-7 text-[#2c221b]">
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
      <main className="overflow-hidden bg-[#faf7f2] text-[#140f0c] selection:bg-[#f7e6d2] selection:text-[#110d0a]">
        {/* Navigation Bar - Refined Champagne Rose-Gold & Espresso Luxury */}
        <header className="sticky top-0 z-40 border-b border-[#e6dcce] bg-white/95 backdrop-blur-xl shadow-xs">
          <div className="mx-auto flex h-[98px] max-w-7xl items-center justify-between gap-6 px-5 sm:h-[108px] lg:h-[114px] xl:h-[118px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Patrícia Freyer Advocacia - Página Inicial"
              onClick={closeMenu}
              className="flex shrink-0 items-center transition-opacity hover:opacity-95"
            >
              <div className="relative h-[66px] w-[260px] sm:h-[76px] sm:w-[320px] lg:h-[86px] lg:w-[365px] xl:h-[90px] xl:w-[385px]">
                <Image
                  src={LOGO_SRC}
                  alt="Patrícia Freyer Advocacia Trabalhista"
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
                A Advogada
              </a>
              <a className="nav-link" href="#atuacao">
                Direito do Trabalho
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
                aria-label="Avaliações da Dra. Patrícia Freyer no Google"
                className="grid size-10 place-items-center rounded-lg border border-[#e6dcce] bg-[#faf7f2] text-[#2c221b] transition-all hover:border-[#be8a50] hover:bg-white hover:text-[#110d0a] shadow-xs"
                title="5,0 ★ no Google (31 avaliações)"
              >
                <GoogleIcon size={16} />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da Dra. Patrícia Freyer"
                className="grid size-10 place-items-center rounded-lg border border-[#e6dcce] bg-[#faf7f2] text-[#2c221b] transition-all hover:border-[#be8a50] hover:bg-white hover:text-[#110d0a] shadow-xs"
                title={`Instagram ${INSTAGRAM_HANDLE}`}
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                aria-label="Ligar para a Dra. Patrícia Freyer"
                className="grid size-10 place-items-center rounded-lg border border-[#e6dcce] bg-[#faf7f2] text-[#2c221b] transition-all hover:border-[#be8a50] hover:bg-white hover:text-[#110d0a] shadow-xs"
                title={`Ligar: ${PHONE_DISPLAY}`}
              >
                <Phone size={16} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Dra. Patrícia Freyer"
                className="grid size-10 place-items-center rounded-lg border border-[#e6dcce] bg-[#faf7f2] text-[#2c221b] transition-all hover:border-[#be8a50] hover:bg-white hover:text-[#110d0a] shadow-xs"
                title="Atendimento no WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Patrícia Freyer! Gostaria de consultar sobre meus direitos trabalhistas pelo WhatsApp."
                )}
                target="_blank"
                size="sm"
                variant="emerald"
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
              className="grid size-11 place-items-center rounded-lg border border-[#e6dcce] bg-[#faf7f2] text-[#140f0c] lg:hidden shadow-xs"
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
                className="overflow-hidden border-t border-[#e6dcce] bg-white px-6 text-[#140f0c] lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["A Advogada", "#sobre"],
                    ["Direito do Trabalho", "#atuacao"],
                    ["Por Que Escolher", "#diferenciais"],
                    ["Avaliações (5,0 ★)", "#avaliacoes"],
                    ["Contato & Sede", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm font-medium text-[#2c221b] hover:text-[#be8a50]"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#110d0a] via-[#1f1712] to-[#110d0a] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.13em] text-white shadow-md transition-all hover:brightness-105 border border-[#be8a50]/60"
                      href={getWhatsAppUrl(
                        "Olá, Dra. Patrícia Freyer! Gostaria de conversar sobre meu caso pelo WhatsApp."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} /> WhatsApp: {PHONE_DISPLAY}
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#e6dcce] bg-[#faf7f2] px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-[#140f0c] transition-all hover:border-[#be8a50]"
                      href={GOOGLE_SEARCH_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <GoogleIcon size={15} /> 5,0 ★ no Google (31 avaliações)
                    </a>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section - Champagne Gold, Warm Espresso & Alabaster Canvas */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-[#e6dcce] bg-gradient-to-b from-white via-[#faf7f2] to-[#f4eee5]"
        >
          {/* Subtle warm rose gold and champagne ambient lighting aura */}
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[36rem] rounded-full bg-[#be8a50]/12 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[28rem] rounded-full bg-[#eabf89]/10 blur-3xl" />

          <div className="mx-auto grid min-h-[640px] max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:min-h-[700px] lg:grid-cols-[1.12fr_0.88fr] lg:gap-12 lg:px-12 lg:py-18 xl:min-h-[740px] xl:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-4"
            >
              <motion.div
                variants={reveal}
                className="mb-5 inline-flex items-center gap-2 rounded-lg border border-[#be8a50]/40 bg-white px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#7a4f21] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#be8a50]" />
                <span>ADVOGADA TRABALHISTA · PEÇANHA - MG & ATENDIMENTO ONLINE</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-[#140f0c] sm:text-[2.6rem] sm:leading-[1.12] lg:text-[3.25rem] xl:text-[3.45rem]"
              >
                Problemas no trabalho?{" "}
                <span className="font-serif italic text-[#7a4f21]">
                  Conhecer e defender seus direitos faz toda a diferença no seu bolso.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-5 max-w-xl text-[15px] leading-7 text-[#2c221b] sm:text-base sm:leading-8"
              >
                Liderado pela <strong className="font-semibold text-[#140f0c]">Dra. Patrícia Freyer</strong>, nosso escritório é especializado na defesa intransigente dos direitos do trabalhador. Atuamos com extrema dedicação, rapidez e comunicação clara em <strong className="font-semibold text-[#140f0c]">rescisões contratuais, horas extras, rescisão indireta, acidentes de trabalho e verbas sonegadas</strong>, com sede física em Peçanha - MG e consultoria digital para todo o Brasil.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-col items-start gap-3.5 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Patrícia Freyer! Gostaria de uma avaliação sobre meu caso trabalhista pelo WhatsApp."
                  )}
                  target="_blank"
                  size="md"
                  variant="emerald"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar no WhatsApp com a Dra. Patrícia
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 rounded-lg border border-[#e6dcce] bg-white px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#140f0c] shadow-xs transition-all hover:border-[#be8a50] hover:bg-[#faf7f2]"
                >
                  Ver Áreas de Atuação{" "}
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[#e6dcce] pt-5 text-xs text-[#5e5246]"
              >
                <a
                  href={GOOGLE_SEARCH_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-[#140f0c] transition-colors hover:text-[#7a4f21]"
                >
                  <Star size={14} className="fill-[#be8a50] text-[#be8a50]" /> 5,0 ★ no Google (31 avaliações)
                </a>
                <span className="inline-flex items-center gap-1.5 font-medium text-[#140f0c]">
                  <Award size={14} className="text-[#7a4f21]" /> Especialista Trabalhista
                </span>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-[#140f0c] transition-colors hover:text-[#7a4f21]"
                >
                  <MapPin size={14} className="text-[#7a4f21]" /> Av. dos Bragas, 146 · Peçanha - MG
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
              <div className="relative aspect-[4/4.9] overflow-hidden rounded-2xl border-2 border-[#e6dcce] bg-[#110d0a] shadow-xl ring-1 ring-[#be8a50]/35">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dra. Patrícia Freyer — Advogada Trabalhista"
                  fill
                  priority
                  loading="eager"
                  unoptimized
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#110d0a] via-[#110d0a]/85 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3 text-white sm:bottom-6 sm:left-6 sm:right-6">
                  <div>
                    <p className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-white">
                      Dra. Patrícia Freyer
                    </p>
                    <p className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-[#f7e6d2]">
                      Advogada Trabalhista · OAB/MG
                    </p>
                    <p className="mt-0.5 text-[11px] text-stone-300">
                      Av. dos Bragas, 146 · Peçanha - MG & Atendimento Online
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-[#be8a50]/60 bg-[#110d0a]/85 text-[#fdfbf8] backdrop-blur-sm shadow-md">
                    <Scale size={18} className="text-[#eabf89]" />
                  </span>
                </div>
              </div>

              {/* Floating authority badge */}
              <div className="absolute -left-3 top-4 z-10 rounded-lg border border-[#be8a50]/40 bg-white/95 px-3 py-1.5 text-[9px] sm:text-[10px] font-bold tracking-[0.14em] text-[#110d0a] shadow-md backdrop-blur-md sm:-left-4">
                SEDE EM PEÇANHA · ATENDIMENTO ON-LINE EM TODO O BRASIL
              </div>

              {/* Floating Google 5.0 Star Rating */}
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="group absolute -bottom-4 -right-2 z-10 rounded-xl border border-[#be8a50]/60 bg-white/95 p-3 shadow-md backdrop-blur-md transition-all hover:border-[#110d0a] hover:bg-white sm:-right-4"
              >
                <div className="flex items-center gap-2">
                  <GoogleIcon size={16} />
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-0.5 text-[#be8a50]">
                      <Star size={12} className="fill-[#be8a50] text-[#be8a50]" />
                    </div>
                    <span className="font-serif text-sm font-bold text-[#140f0c]">
                      5,0
                    </span>
                    <span className="text-[9px] uppercase tracking-wider text-[#7a4f21]">
                      / 5,0
                    </span>
                  </div>
                </div>
                <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#5e5246]">
                  31 Avaliações no Google (100% 5★)
                </p>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner - Authority Metrics */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-[#e6dcce] bg-white"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              [
                "5,0 ★ no Google",
                "nota máxima comprovada em 31 avaliações destacando competência, ética e segurança",
              ],
              [
                "Advocacia Trabalhista",
                "foco exclusivo e combativo na defesa e recuperação dos direitos do trabalhador",
              ],
              [
                "Atendimento Humanizado",
                "escuta atenta, paciência para esclarecer dúvidas e retornos jurídicos imediatos",
              ],
              [
                "Peçanha • MG • Brasil",
                "sede física na Av. dos Bragas e assessoria digital moderna para todo o país",
              ],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-[#e6dcce]"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-xl font-semibold text-[#7a4f21] sm:text-2xl">
                  {value}
                </span>
                <span className="max-w-[165px] text-[11px] leading-5 text-[#5e5246]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre a Dra. Patrícia Freyer - Editorial Canvas */}
        <section
          id="sobre"
          className="scroll-mt-24 border-y border-[#e6dcce] bg-[#faf7f2] py-20 text-[#140f0c] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
            {/* Visual presentation - Office Photo & Brand Emblem */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[490px]"
            >
              <div className="relative aspect-[4/4.9] overflow-hidden rounded-2xl border-2 border-[#e6dcce] bg-[#110d0a] shadow-2xl ring-1 ring-[#be8a50]/35">
                <Image
                  src={FOTO_SOBRE_SRC}
                  alt="Dra. Patrícia Freyer em seu escritório de advocacia"
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#110d0a]/95 via-[#110d0a]/35 to-transparent" />

                {/* Central brand emblem inside photo */}
                <div className="absolute top-6 left-6 rounded-lg border border-white/20 bg-white/95 p-2.5 backdrop-blur-md shadow-md">
                  <div className="relative h-[48px] w-[180px]">
                    <Image
                      src={LOGO_SRC}
                      alt="Logo Patrícia Freyer Advocacia"
                      fill
                      unoptimized
                      sizes="180px"
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="font-cinzel text-xl font-bold tracking-wider text-[#fdfbf8]">
                    PATRÍCIA FREYER
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-[#f7e6d2]">
                    Advogada Trabalhista · Peçanha - MG
                  </p>
                </div>
              </div>

              {/* Authority badge card */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-[#be8a50]/60 bg-white px-5 py-4 shadow-xl sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-[#7a4f21]">
                  <Sparkles size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#7a4f21]">
                    Excelência Trabalhista
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-[#140f0c]">
                  Dra. Patrícia Freyer
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-[#7a4f21]">
                  Advocacia de Extrema Confiança, Ética & Segurança
                </p>
                <p className="mt-1 text-[11px] leading-4 text-[#5e5246]">
                  Av. dos Bragas, 146 · Peçanha - MG & Consultoria Online
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-[#be8a50]/40 sm:-left-7 sm:-top-7 sm:size-32" />
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
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#be8a50]/35 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#7a4f21] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#be8a50]" />
                <span>SOBRE A DRA. PATRÍCIA FREYER</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-[#140f0c] sm:text-4xl lg:text-[3.25rem]"
              >
                Uma advocacia humanizada, ética e combativa para{" "}
                <span className="italic text-[#7a4f21]">
                  fazer valer cada direito que você conquistou com seu trabalho.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-[#2c221b]"
              >
                Com escritório sediado na Avenida dos Bragas, no Centro de{" "}
                <strong className="font-bold text-[#140f0c]">Peçanha - MG</strong>, e prestando assessoria jurídica digital para trabalhadores em todo o território nacional, a atuação da{" "}
                <strong className="font-bold text-[#140f0c]">Dra. Patrícia Freyer</strong> se fundamenta na premissa de que o trabalhador precisa ser ouvido com atenção, respeito e total clareza.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-[#2c221b]"
              >
                Reconhecida com <strong className="font-bold text-[#140f0c]">nota máxima 5,0 ★ unânime em 31 avaliações no Google</strong>, a Dra. Patrícia é elogiada constantemente pela clareza nas orientações, pela agilidade em dar respostas e pela condução cuidadosa e eficiente:{" "}
                <em className="text-[#140f0c]">&ldquo;Sempre esclarece as dúvidas com muita paciência e transmite segurança durante todo o atendimento&rdquo;</em>.
              </motion.p>

              {/* Client Quote Card from real Google Reviews */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-xl border border-[#e6dcce] bg-white p-5 shadow-xs"
              >
                <blockquote className="font-serif text-sm italic leading-relaxed text-[#140f0c]">
                  &ldquo;Excelente profissional! Muito atenciosa em entender o caso e esclarecer as dúvidas, ajudando no caso de forma eficiente! Tens clareza na comunicação e transmite segurança e ética profissional.&rdquo;
                </blockquote>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-[#7a4f21]">
                  — Síntese das Avaliações Verificadas no Google Meu Negócio (5,0 ★)
                </p>
              </motion.div>

              {/* Personality & Profile Cards */}
              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-2 gap-3 text-xs sm:grid-cols-3"
              >
                <div className="rounded-lg border border-[#e6dcce] bg-white p-3 shadow-xs">
                  <p className="font-bold text-[#140f0c]">31 Avaliações 5,0 ★</p>
                  <p className="mt-0.5 text-[11px] text-[#5e5246]">
                    100% de satisfação comprovada no Google
                  </p>
                </div>
                <div className="rounded-lg border border-[#e6dcce] bg-white p-3 shadow-xs">
                  <p className="font-bold text-[#140f0c]">Foco Trabalhista</p>
                  <p className="mt-0.5 text-[11px] text-[#5e5246]">
                    Defesa especializada dos seus direitos
                  </p>
                </div>
                <div className="rounded-lg border border-[#e6dcce] bg-white p-3 shadow-xs col-span-2 sm:col-span-1">
                  <p className="font-bold text-[#140f0c]">Respostas Rápidas</p>
                  <p className="mt-0.5 text-[11px] text-[#5e5246]">
                    Retornos imediatos e sem juridiquês
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-1 gap-2.5 text-xs font-semibold text-[#140f0c] sm:grid-cols-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#7a4f21]" />
                  <span>Sede na Av. dos Bragas, 146 · Centro, Peçanha - MG</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#7a4f21]" />
                  <span>Nota 5,0 ★ máxima no Google em 31 avaliações autênticas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#7a4f21]" />
                  <span>Contato direto pelo WhatsApp com a Dra. Patrícia Freyer</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#7a4f21]" />
                  <span>Atendimento presencial em Peçanha e digital para todo o país</span>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Patrícia Freyer! Gostaria de agendar um atendimento para analisar minha situação de trabalho."
                  )}
                  target="_blank"
                  size="md"
                  variant="emerald"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar com a Dra. Patrícia Freyer
                </GlowingButton>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#140f0c] transition-colors hover:text-[#7a4f21]"
                >
                  <Phone size={15} /> {PHONE_DISPLAY}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pilares de Atuação / Especialidades Trabalhistas */}
        <section
          id="atuacao"
          className="scroll-mt-24 border-t border-[#e6dcce] bg-[#f4eee5] py-20 sm:py-28 lg:py-32"
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
                eyebrow="ESPECIALIDADES EM DIREITO DO TRABALHO"
                description="Assessoria jurídica especializada para garantir que nenhum centavo dos seus direitos seja deixado para trás pela empresa."
              >
                Soluções jurídicas combativas para proteger você em{" "}
                <span className="italic text-[#7a4f21]">
                  Peçanha, Minas Gerais e em todo o Brasil.
                </span>
              </Heading>
              <p className="max-w-[270px] pb-1 text-xs leading-6 text-[#5e5246]">
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
                    className="group flex min-h-[350px] flex-col rounded-xl border border-[#e6dcce] bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#be8a50] hover:shadow-lg sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-lg border border-[#be8a50]/35 bg-[#fcf4eb] text-[#7a4f21] shadow-xs transition-colors group-hover:bg-[#110d0a] group-hover:text-[#f7e6d2] group-hover:border-[#be8a50]">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <span className="font-serif text-2xl text-[#be8a50]/40">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-md border border-[#be8a50]/30 bg-[#faf7f2] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#7a4f21] shadow-xs">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.45rem] leading-tight text-[#140f0c]">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-6 text-[#5e5246]">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-[#7a4f21] hover:text-[#140f0c]"
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

        {/* Por Que Escolher a Dra. Patrícia Freyer - Diferenciais */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-t border-[#e6dcce] bg-[#faf7f2] py-20 text-[#140f0c] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                light
                eyebrow="DEDICAÇÃO, CLAREZA & RESULTADOS REAIS"
                description="O suor do seu trabalho e a segurança financeira da sua família merecem uma advogada atenta a cada detalhe e comprometida com a verdade."
              >
                Por que confiar seus direitos trabalhistas à{" "}
                <span className="italic text-[#7a4f21]">
                  Dra. Patrícia Freyer?
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Patrícia Freyer! Gostaria de consultar sobre meu caso trabalhista e tirar dúvidas."
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
                className="group flex flex-col justify-between rounded-xl border border-[#e6dcce] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#be8a50] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#be8a50]/35 bg-[#fcf4eb] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#7a4f21]">
                      <HeartHandshake size={14} /> Atendimento Humanizado & Próximo
                    </span>
                    <span className="text-xs font-semibold text-[#7a4f21]">
                      Você Sempre Informado
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#140f0c] sm:text-[1.75rem]">
                    Comunicação Sem Juridiquês e Respostas Ágeis
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#2c221b]">
                    Como atestam os depoimentos reais de nossos clientes no Google, o grande diferencial da Dra. Patrícia Freyer é aliar técnica jurídica incisiva a uma paciência genuína para esclarecer dúvidas. Você não fica desamparado: cada fase do processo é explicada de forma transparente e acessível.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-[#140f0c]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#7a4f21]" />
                      <span>Retornos imediatos e atendimento direto com a própria advogada pelo WhatsApp</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#7a4f21]" />
                      <span>Acompanhamento passo a passo de audiências, laudos e decisões judiciais</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#7a4f21]" />
                      <span>Explicações claras sobre valores devidos para que você tome decisões sem medo</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#e6dcce] pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Patrícia Freyer! Gostaria de conversar para tirar dúvidas sobre meu caso trabalhista."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#be8a50]/40 bg-[#faf7f2] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#140f0c] transition-all hover:border-[#be8a50] hover:bg-[#110d0a] hover:text-[#fdfbf8]"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Conversar no WhatsApp com a Dra. Patrícia
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
                className="group flex flex-col justify-between rounded-xl border border-[#e6dcce] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#be8a50] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#be8a50]/40 bg-[#faf7f2] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#523112]">
                      <Award size={14} /> Atuação Especializada & Firmeza
                    </span>
                    <span className="text-xs font-semibold text-[#7a4f21]">
                      Cálculos Transparentes
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#140f0c] sm:text-[1.75rem]">
                    Cálculo Exato dos Seus Direitos e Rigor Probatório
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#2c221b]">
                    Não aceitamos aproximações: examinamos minuciosamente cartões de ponto, extratos de FGTS, recibos salariais e testemunhas para comprovar exatamente o que a empresa sonegou ao longo de todo o período trabalhado.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-[#140f0c]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#7a4f21]" />
                      <span>Auditoria profunda de holerites para identificar horas extras e adicionais suprimidos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#7a4f21]" />
                      <span>Postura combativa em audiências de conciliação e instrução na Justiça do Trabalho</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#7a4f21]" />
                      <span>Negociação firme que impede acordos desvantajosos impostos por grandes empresas</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#e6dcce] pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Patrícia Freyer! Gostaria de consultar sobre a melhor estratégia jurídica para o meu caso trabalhista."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#be8a50]/40 bg-[#faf7f2] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#140f0c] transition-all hover:border-[#be8a50] hover:bg-[#110d0a] hover:text-[#fdfbf8]"
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
        <section className="relative overflow-hidden border-t border-[#e6dcce] bg-[#faf7f2] py-20 text-[#140f0c] sm:py-24 lg:py-28">
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-[#be8a50]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-[#eabf89]/10 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                light
                eyebrow="COMO ATUAMOS NO SEU CASO"
                description="Um método transparente, ético e resolutivo para analisar sua demanda trabalhista e aplicar a solução mais rápida e vantajosa."
              >
                Três etapas claras para{" "}
                <span className="italic text-[#7a4f21]">
                  proteger seus direitos e garantir a tranquilidade que você merece.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-[#e6dcce] bg-white p-6 font-serif text-base italic leading-7 text-[#140f0c] shadow-xs">
                &ldquo;Conhecer seus direitos faz toda a diferença no seu bolso. Nosso compromisso é exercer uma advocacia acolhedora, transparente e incisiva, garantindo que você compreenda cada etapa e sinta a segurança de estar muito bem amparado.&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-[#7a4f21]">
                  — Dra. Patrícia Freyer · Advogada Trabalhista
                </footer>
              </blockquote>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-[#e6dcce]"
            >
              {[
                [
                  "01",
                  "Atendimento Inicial & Análise Documental",
                  "Atendimento no escritório em Peçanha ou via WhatsApp para examinar carteira de trabalho, holerites, contrato e a rotina real de suas atividades.",
                ],
                [
                  "02",
                  "Cálculo Rigoroso & Definição da Rota Estratégica",
                  "Cálculo exato de tudo o que a empresa deixou de pagar e planejamento da estratégia mais rápida, segura e financeiramente vantajosa.",
                ],
                [
                  "03",
                  "Atuação Incisiva, Retorno Constante & Resultados",
                  "Ajuizamento rápido, acompanhamento contínuo na Vara do Trabalho e informação constante a você em cada andamento até a liberação dos valores devidos.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-semibold text-[#7a4f21]">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-[#140f0c]">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-[#2c221b]">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Avaliações / Depoimentos Reais no Google Meu Negócio (31 Avaliações 5,0 ★) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 border-t border-[#be8a50]/25 bg-[#f4eee5] py-20 text-[#140f0c] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                light
                eyebrow="PROVA SOCIAL VERIFICADA · GOOGLE MEU NEGÓCIO"
                description="Veja depoimentos autênticos e espontâneos de clientes sobre a dedicação, a clareza e os resultados alcançados pela Dra. Patrícia Freyer em Peçanha - MG."
              >
                Avaliada com nota máxima 5,0 ★ com{" "}
                <span className="italic text-[#7a4f21]">
                  31 avaliações no Google pela competência, ética e segurança transmitida.
                </span>
              </Heading>

              {/* Verified Google Badge Card */}
              <div className="flex flex-col gap-3 rounded-xl border border-[#e6dcce] bg-white p-5 shadow-xs sm:flex-row sm:items-center md:min-w-[340px]">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-lg border border-[#be8a50]/30 bg-[#faf7f2] shadow-xs">
                  <GoogleIcon size={30} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-3xl font-bold leading-none text-[#140f0c]">
                      5,0
                    </span>
                    <div className="flex gap-0.5 text-[#be8a50]">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-[#be8a50] text-[#be8a50]"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#2c221b]">
                    Patrícia Freyer Advocacia
                  </p>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-[#7a4f21] transition-colors hover:text-[#140f0c]"
                  >
                    31 avaliações no Google (100% 5★) <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Client Reviews Grid */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clientReviews.map((review) => (
                <article
                  key={review.name}
                  className="group relative flex flex-col justify-between rounded-xl border border-[#e6dcce] bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#be8a50] hover:shadow-md sm:p-8"
                >
                  <div>
                    {/* Header: Stars + Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-1 text-[#be8a50]">
                        {Array.from({ length: review.rating }, (_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-[#be8a50] text-[#be8a50]"
                          />
                        ))}
                      </div>
                      <span className="rounded-md border border-[#be8a50]/30 bg-[#faf7f2] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#7a4f21] shadow-xs">
                        {review.badge}
                      </span>
                    </div>

                    {/* Review content */}
                    <p className="mt-5 text-[14px] italic leading-relaxed text-[#140f0c]">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  {/* Reviewer info */}
                  <div className="mt-6 flex items-center gap-3 border-t border-[#e6dcce] pt-4">
                    <div className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#be8a50]/35 bg-[#fcf4eb] font-serif text-sm font-semibold text-[#7a4f21] shadow-xs">
                      {review.name.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-serif text-base font-semibold text-[#140f0c]">
                        {review.name}
                      </p>
                      <p className="text-[10px] uppercase tracking-wider text-[#5e5246]">
                        {review.reviewerTag}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom Actions and Trust Tags */}
            <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-[#e6dcce] pt-8 sm:flex-row">
              <div className="flex flex-wrap items-center gap-2">
                {[
                  "Advogada em Peçanha - MG",
                  "Especialista em Direito do Trabalho",
                  "Nota 5,0 ★ no Google (31 avaliações)",
                  "Rescisão Indireta & Demissão",
                  "Horas Extras & Intervalos",
                  "Acidente de Trabalho & Estabilidade",
                  "Atendimento Digital para Todo o Brasil",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#e6dcce] bg-white px-3.5 py-1.5 text-[11px] font-medium text-[#140f0c] shadow-xs"
                  >
                    <CheckCircle2 size={13} className="text-[#7a4f21]" />
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#7a4f21] transition-colors hover:text-[#140f0c]"
              >
                Ver Todas as 31 Avaliações no Google{" "}
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Contato & Localização da Sede em Peçanha - MG */}
        <section
          id="contato"
          className="scroll-mt-24 border-t border-[#be8a50]/25 bg-[#faf7f2] py-20 text-[#140f0c] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                light
                eyebrow="CONTATO & ATENDIMENTO EM PEÇANHA"
                description="Agende uma consulta presencial em nosso escritório na Av. dos Bragas ou inicie seu atendimento imediatamente pelo WhatsApp para examinar sua situação trabalhista com sigilo, rapidez e segurança."
              >
                Estamos prontos para{" "}
                <span className="italic text-[#7a4f21]">
                  analisar seu caso e defender seus direitos com excelência.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Patrícia Freyer! Gostaria de agendar um atendimento para análise jurídica do meu caso trabalhista."
                  )}
                  target="_blank"
                  size="lg"
                  variant="emerald"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} /> Iniciar Conversa no WhatsApp
                </GlowingButton>
                <p className="text-[11px] leading-5 text-[#2c221b]">
                  Telefone e WhatsApp direto:{" "}
                  <strong className="text-[#140f0c]">{PHONE_DISPLAY}</strong>
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-[#2c221b]">
                <div className="flex items-start gap-3">
                  <Clock
                    size={16}
                    className="mt-0.5 shrink-0 text-[#7a4f21]"
                  />
                  <div>
                    <p className="font-semibold text-[#140f0c]">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-[#140f0c]">
                      Segunda a Sexta-feira a partir das 09:00
                    </p>
                    <p className="text-[11px] text-[#5e5246]">
                      Atendimento presencial em Peçanha - MG e consultoria online em todo o Brasil
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#7a4f21]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-medium text-[#140f0c] transition-colors hover:text-[#7a4f21]"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#7a4f21]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#7a4f21] text-[#140f0c]"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#7a4f21]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="transition-colors hover:text-[#7a4f21] text-[#140f0c]"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#7a4f21]"
                  />
                  <div>
                    <span className="text-[#140f0c]">{ADDRESS_TEXT}</span>
                    <br />
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex items-center gap-1 font-semibold text-[#7a4f21] hover:underline"
                    >
                      Ver no Google Maps <ArrowUpRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Card with executive presentation */}
            <div className="relative overflow-hidden rounded-xl border border-[#e6dcce] bg-white p-7 shadow-sm sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#7a4f21] via-[#be8a50] to-[#eabf89]" />

              <div className="flex flex-col gap-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7a4f21]">
                  Sede do Escritório em Peçanha - MG
                </p>
                <div className="relative h-[68px] w-[280px] sm:h-[78px] sm:w-[340px]">
                  <Image
                    src={LOGO_SRC}
                    alt="Patrícia Freyer Advocacia"
                    fill
                    unoptimized
                    sizes="340px"
                    className="object-contain object-left"
                  />
                </div>
              </div>

              {/* Office presentation photo */}
              <div className="relative mt-5 aspect-[16/10] w-full overflow-hidden rounded-lg border border-[#e6dcce] bg-[#110d0a] shadow-xs">
                <Image
                  src={FOTO_SOBRE_SRC}
                  alt="Espaço de Atendimento da Dra. Patrícia Freyer em Peçanha - MG"
                  fill
                  unoptimized
                  className="object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent p-4 text-white">
                  <p className="text-xs font-semibold">Ambiente Acolhedor, Moderno e Reservado</p>
                  <p className="text-[10px] text-stone-200">{ADDRESS_TEXT}</p>
                </div>
              </div>

              <address className="mt-6 max-w-md text-[14px] not-italic leading-7 text-[#2c221b]">
                <strong className="font-semibold text-[#140f0c]">
                  Patrícia Freyer Advocacia
                </strong>
                <br />
                {LAWYER_TITLE}
                <br />
                Atendimento presencial em Peçanha e online para todo o Brasil
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-lg border border-[#e6dcce] bg-[#faf7f2] p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#7a4f21]">
                  Atendimento & Horários
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-[#2c221b]">
                  <span>Segunda a Sexta</span>
                  <span className="text-right font-semibold text-[#140f0c]">
                    Abre às 09:00
                  </span>
                  <span>Atendimento Presencial</span>
                  <span className="text-right font-medium text-[#7a4f21]">
                    Peçanha - MG
                  </span>
                  <span>Endereço</span>
                  <span className="text-right text-[#140f0c]">Av. dos Bragas, 146 - Centro</span>
                  <span>Avaliações Google</span>
                  <span className="text-right font-semibold text-[#7a4f21]">5,0 ★ (31 avaliações)</span>
                  <span>Atendimento Digital</span>
                  <span className="text-right text-[#140f0c]">Minas Gerais & Todo o Brasil</span>
                </div>
              </div>

              <div className="my-7 h-px bg-[#e6dcce]" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-[#5e5246]">
                  Atendimento humanizado, ético e com absoluto sigilo profissional
                </p>
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Patrícia Freyer! Gostaria de agendar um atendimento no escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#be8a50]/40 bg-[#f4eee5] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#140f0c] transition-colors hover:border-[#be8a50] hover:bg-[#110d0a] hover:text-[#fdfbf8]"
                >
                  <WhatsAppIcon size={14} /> Falar no WhatsApp <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip */}
        <section className="border-t border-[#be8a50]/25 bg-gradient-to-r from-[#f4eee5] via-[#faf7f2] to-[#f4eee5] px-5 py-14 text-[#140f0c] shadow-xs sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#7a4f21]">
                <Sparkles size={13} /> PATRÍCIA FREYER ADVOCACIA TRABALHISTA
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-[#140f0c] sm:text-4xl">
                Precisa de uma advogada competente, atenciosa e ágil para defender seus direitos trabalhistas?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dra. Patrícia Freyer! Gostaria de uma avaliação jurídica para o meu caso trabalhista."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-lg bg-gradient-to-r from-[#110d0a] via-[#1f1712] to-[#110d0a] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#fdfbf8] shadow-md transition-all hover:-translate-y-0.5 hover:brightness-105 hover:shadow-lg border border-[#be8a50]/60 hover:border-[#eabf89]"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp{" "}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* Footer - Elegant Light Luxury */}
        <footer className="border-t border-[#e6dcce] bg-[#f4eee5] px-5 py-14 text-[#140f0c] sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <a
                href="#inicio"
                aria-label="Patrícia Freyer Advocacia"
                className="inline-block transition-transform hover:scale-[1.01]"
              >
                <div className="relative h-[78px] w-[300px] sm:h-[95px] sm:w-[360px]">
                  <Image
                    src={LOGO_SRC}
                    alt="Patrícia Freyer Advocacia"
                    fill
                    unoptimized
                    sizes="360px"
                    className="object-contain object-left"
                  />
                </div>
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-[#5e5246]">
                ⚖️ Advocacia pautada na ética, na dedicação e no atendimento humanizado. Foco especializado em Direito do Trabalho, verbas rescisórias, rescisão indireta, horas extras e acidentes laborais em Peçanha - MG e atendimento online para todo o Brasil.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-[#7a4f21]">
                Dra. Patrícia Freyer — Advogada Trabalhista | OAB/MG
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7a4f21]">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-[#5e5246]">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  A Advogada
                </a>
                <a className="footer-link" href="#atuacao">
                  Direito do Trabalho
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
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7a4f21]">
                Contato & Atendimento
              </h2>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-[#5e5246]">
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Patrícia Freyer! Gostaria de tirar dúvidas com o escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 font-medium text-[#140f0c]"
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
                <p className="inline-flex items-center gap-2 pt-1 text-[11px] text-[#7a4f21]">
                  <Clock size={14} className="shrink-0" /> Seg a Sex: Abre às 09:00
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-[#e6dcce] pt-6 text-[10px] text-stone-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} PATRÍCIA FREYER ADVOCACIA. Todos os direitos reservados.
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
              "Olá, Dra. Patrícia Freyer! Gostaria de consultar sobre meu caso trabalhista e tirar dúvidas pelo WhatsApp."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Dra. Patrícia Freyer"
            className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          >
            <WhatsAppIcon size={28} />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-[#110d0a] border border-[#be8a50]/40 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg transition-opacity group-hover:block">
              Falar com Dra. Patrícia Freyer
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
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-xl border border-[#e6dcce] bg-white p-7 shadow-2xl sm:max-w-xl sm:rounded-xl sm:p-10 text-[#140f0c]"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-[#e6dcce] bg-[#faf7f2] text-[#140f0c] transition-colors hover:border-[#be8a50] hover:text-[#7a4f21]"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-3 pr-12">
                  <div className="relative size-10 shrink-0 overflow-hidden rounded-lg border border-[#be8a50]/35 bg-[#faf7f2] p-1 shadow-xs">
                    <Image
                      src={LOGO_SYMBOL_SRC}
                      alt="Símbolo Patrícia Freyer Advocacia"
                      fill
                      sizes="40px"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="eyebrow-light">DIREITO DO TRABALHO</p>
                    <p className="text-[10px] font-semibold tracking-wider text-[#7a4f21] uppercase">
                      {LAWYER_NAME} · {LAWYER_TITLE}
                    </p>
                  </div>
                </div>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-serif text-3xl leading-tight text-[#140f0c] sm:text-4xl"
                >
                  {activeArea.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-[#2c221b]">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-[#e6dcce] pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#7a4f21]">
                    Demandas e Serviços Atendidos pelo Escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-[#2c221b]"
                      >
                        <span className="size-2 shrink-0 rounded-full bg-[#be8a50]" />
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
                    className="px-5 py-3 text-xs font-semibold text-stone-500 transition-colors hover:text-[#140f0c]"
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
