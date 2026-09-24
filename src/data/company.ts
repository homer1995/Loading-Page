import plateSmartDisplayImg from '../assets/images/regenerated_image_1790286118070.png';

export interface PlatePhoto {
  id: number;
  url: string;
  title: string;
  category: string;
  description: string;
  badge: string;
}

export interface SolutionItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  whatsappMessage: string;
}

export const COMPANY_INFO = {
  name: "WF Mídias",
  tagline: "Marketing e Soluções Digitais",
  headline: "Presença digital que valoriza sua empresa.",
  subheadline: "Marketing, Google, placas inteligentes e soluções digitais para o seu negócio.",
  instagramHandle: "@wf.midias",
  instagramUrl: "https://www.instagram.com/wf.midias",
  whatsappNumber: "(31) 98904-2370",
  whatsappRaw: "55031989042370",
  email: "Wfmidiaswf@gmail.com",
  logoUrl: "https://i.postimg.cc/hjCr6RQS/1-LOGOMARCA.png",
  googleBusinessImg: "https://i.postimg.cc/L41YrM1t/file-00000000d8d8820eb89e5276d40d100e.png",
  reviewPlateHeroImg: "https://i.postimg.cc/JzkkZDNz/Chat-GPT-Image-24-de-set-de-2026-17-31-24.png",
};

export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || "Olá, WF Mídias! Gostaria de saber mais sobre as soluções digitais para minha empresa.";
  return `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_MESSAGES = {
  general: "Olá, WF Mídias! Gostaria de conhecer melhor os serviços para minha empresa.",
  google: "Olá, WF Mídias! Tenho interesse no serviço de Google Meu Negócio.",
  plates: "Olá, WF Mídias! Tenho interesse nas placas QR Code/NFC.",
  customPlate: "Olá, WF Mídias! Quero solicitar um orçamento para uma placa personalizada.",
  restaurant: "Olá, WF Mídias! Tenho interesse no cardápio digital e placas para restaurante.",
  bioSite: "Olá, WF Mídias! Tenho interesse em criar um BioSite profissional.",
  marketing: "Olá, WF Mídias! Quero saber mais sobre os serviços de marketing digital.",
};

// Real physical plate photos provided by the client (never modify arts or replace with mockups)
export const REAL_PLATES_GALLERY: PlatePhoto[] = [
  {
    id: 1,
    url: plateSmartDisplayImg,
    title: "Placa Smart Display Acrílico",
    category: "Google & Redes Sociais",
    description: "Design moderno com acabamento em acrílico cristal e QR Code de alta precisão para balcão.",
    badge: "Mais Procurada"
  },
  {
    id: 2,
    url: "https://i.postimg.cc/4yp3nVk6/IMG-20260915-WA0459.jpg",
    title: "Placa Balcão Redes Sociais & Contato",
    category: "Instagram & WhatsApp",
    description: "Placa vertical em acrílico com QR Codes de leitura rápida para WhatsApp e Instagram, com suporte estável para balcão.",
    badge: "Balcão & Caixa"
  },
  {
    id: 3,
    url: "https://i.postimg.cc/Wz04tgLk/IMG-20260915-WA0460.jpg",
    title: "Display de Mesa Conectividade Completa",
    category: "Conexão & Redes",
    description: "Display elegante com base em acrílico destacando canais de atendimento, redes sociais e acesso rápido para clientes.",
    badge: "Engajamento"
  },
  {
    id: 4,
    url: "https://i.postimg.cc/ZYNnft9Q/IMG-20260915-WA0461(1).jpg",
    title: "Display Multi-Ações com QR Code",
    category: "Multi-Ações",
    description: "Estrutura personalizada em acrílico de alta qualidade com múltiplos pontos de contato e chamadas claras à ação.",
    badge: "Versátil"
  },
  {
    id: 5,
    url: "https://i.postimg.cc/VvXN5nQX/IMG-20260915-WA0462.jpg",
    title: "Display Slim Acrílico Cristal",
    category: "Acrílico & Base Sólida",
    description: "Acabamento transparente de fino padrão, ideal para recepções, consultórios, salões e mesas de atendimento.",
    badge: "Elegante"
  },
  {
    id: 6,
    url: "https://i.postimg.cc/90yfzZ5G/IMG-20260915-WA0463.jpg",
    title: "Placa Avalie no Google 5 Estrelas",
    category: "Avaliações 5 Estrelas",
    description: "Foco total na coleta de avaliações no Google Meu Negócio, com destaque das estrelas e acesso direto via QR Code/NFC.",
    badge: "Foco Google"
  }
];

export const PLATE_CHANNELS = [
  {
    id: "google",
    name: "GOOGLE",
    headline: "Facilite suas avaliações.",
    detail: "Leve o cliente direto para a tela de avaliação 5 estrelas do Google Meu Negócio.",
    color: "from-amber-500/20 to-amber-600/10",
    border: "border-amber-500/30",
    accent: "text-amber-400"
  },
  {
    id: "instagram",
    name: "INSTAGRAM",
    headline: "Leve clientes para seu perfil.",
    detail: "Aumente seguidores reais e apresente stories, fotos e novidades da sua marca.",
    color: "from-pink-500/20 to-purple-600/10",
    border: "border-pink-500/30",
    accent: "text-pink-400"
  },
  {
    id: "whatsapp",
    name: "WHATSAPP",
    headline: "Facilite o contato.",
    detail: "Inicie conversas com mensagem pré-definida sem o cliente precisar salvar seu número.",
    color: "from-emerald-500/20 to-teal-600/10",
    border: "border-emerald-500/30",
    accent: "text-emerald-400"
  },
  {
    id: "wifi",
    name: "WI-FI",
    headline: "Compartilhe sua rede com facilidade.",
    detail: "Conecte clientes ao seu Wi-Fi instantaneamente, sem precisar digitar senhas longas.",
    color: "from-cyan-500/20 to-blue-600/10",
    border: "border-cyan-500/30",
    accent: "text-cyan-400"
  },
  {
    id: "pix",
    name: "PIX",
    headline: "Facilite o pagamento.",
    detail: "Chave Pix e QR Code estático ou dinâmico visíveis para pagamentos ágeis no balcão.",
    color: "from-teal-500/20 to-emerald-600/10",
    border: "border-teal-500/30",
    accent: "text-teal-400"
  },
  {
    id: "qrcode",
    name: "QR CODE",
    headline: "Direcione para qualquer link.",
    detail: "Compatível com qualquer smartphone Android e iPhone com câmera de ponta.",
    color: "from-indigo-500/20 to-violet-600/10",
    border: "border-indigo-500/30",
    accent: "text-indigo-400"
  },
  {
    id: "nfc",
    name: "NFC",
    headline: "Conecte com apenas um toque.",
    detail: "Tecnologia de aproximação que abre seu link instantaneamente no celular do cliente.",
    color: "from-sky-500/20 to-cyan-600/10",
    border: "border-sky-500/30",
    accent: "text-sky-400"
  }
];

export const ALL_SOLUTIONS_LIST = [
  {
    id: "sol-google-biz",
    title: "Google Meu Negócio",
    desc: "Criação, otimização, fotos e gestão estratégica da sua presença local para ser encontrado no Google.",
    category: "Presença no Google",
    whatsappMsg: WHATSAPP_MESSAGES.google,
    icon: "search"
  },
  {
    id: "sol-placas-google",
    title: "Placas de Avaliação Google",
    desc: "Placas inteligentes em acrílico com QR Code e NFC para multiplicar avaliações 5 estrelas dos clientes.",
    category: "Placas Inteligentes",
    whatsappMsg: WHATSAPP_MESSAGES.plates,
    icon: "star"
  },
  {
    id: "sol-placas-insta",
    title: "Placas para Instagram",
    desc: "Aumente seu público e conecte os clientes da sua loja física diretamente ao seu feed e stories.",
    category: "Placas Inteligentes",
    whatsappMsg: WHATSAPP_MESSAGES.plates,
    icon: "camera"
  },
  {
    id: "sol-placas-wpp",
    title: "Placas para WhatsApp",
    desc: "Direcionamento imediato para o atendimento da sua empresa com apenas um toque no celular.",
    category: "Placas Inteligentes",
    whatsappMsg: WHATSAPP_MESSAGES.plates,
    icon: "message-circle"
  },
  {
    id: "sol-placas-wifi",
    title: "Placas Wi-Fi",
    desc: "Conexão sem senha manual para clientes em restaurantes, bares, hotéis, clínicas e lojas.",
    category: "Placas Inteligentes",
    whatsappMsg: WHATSAPP_MESSAGES.plates,
    icon: "wifi"
  },
  {
    id: "sol-placas-pix",
    title: "Placas Pix",
    desc: "Agilidade no caixa para receber transferências instantâneas com segurança e praticidade.",
    category: "Placas Inteligentes",
    whatsappMsg: WHATSAPP_MESSAGES.plates,
    icon: "qr-code"
  },
  {
    id: "sol-placas-nfc",
    title: "Placas QR Code + NFC",
    desc: "O que há de mais moderno em interação física-digital: leitura por câmera ou aproximação.",
    category: "Tecnologia",
    whatsappMsg: WHATSAPP_MESSAGES.plates,
    icon: "cpu"
  },
  {
    id: "sol-placas-custom",
    title: "Placas Personalizadas",
    desc: "Produção com a identidade visual completa da sua empresa, formatos e canais sob medida.",
    category: "Design Sob Medida",
    whatsappMsg: WHATSAPP_MESSAGES.customPlate,
    icon: "palette"
  },
  {
    id: "sol-cardapio",
    title: "Cardápios Digitais",
    desc: "Solução prática para restaurantes, bares e cafeterias com acesso veloz ao menu na mesa.",
    category: "Food Service",
    whatsappMsg: WHATSAPP_MESSAGES.restaurant,
    icon: "utensils"
  },
  {
    id: "sol-biosite",
    title: "BioSite Profissional",
    desc: "Página moderna e veloz reunindo todos os canais de contato, serviços e redes da sua empresa.",
    category: "Web & Mobile",
    whatsappMsg: WHATSAPP_MESSAGES.bioSite,
    icon: "globe"
  },
  {
    id: "sol-marketing",
    title: "Marketing Digital",
    desc: "Planejamento, fortalecimento da marca, conteúdo estratégico e presença digital consistente.",
    category: "Estratégia & Crescimento",
    whatsappMsg: WHATSAPP_MESSAGES.marketing,
    icon: "trending-up"
  }
];

export const SLIDES_CONFIG = [
  { id: "hero", label: "01. Início", title: "WF Mídias" },
  { id: "placas-avaliacao", label: "02. Placa de Avaliação", title: "Placas com NFC + QR Code" },
  { id: "galeria-placas", label: "03. Placas Personalizadas", title: "Placas Personalizadas" },
  { id: "google-meu-negocio", label: "04. Google Meu Negócio", title: "Seu Negócio no Google" },
  { id: "biosite", label: "05. BioSite Profissional", title: "BioSite com Modelos" },
  { id: "cta-final", label: "06. Contato", title: "Pedir Minha Placa" },
  { id: "rodape", label: "07. Informações", title: "Canais Oficiais" },
];
