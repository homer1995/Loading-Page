export interface BioTemplate {
  id: string;
  niche: string;
  name: string;
  tagline: string;
  badge: string;
  theme: {
    bgGradient: string;
    border: string;
    avatarBorder: string;
    pillBg: string;
    accentText: string;
  };
  links: {
    title: string;
    subtitle: string;
    icon: string;
    highlight?: boolean;
  }[];
}

export const BIO_TEMPLATES: BioTemplate[] = [
  {
    id: "restaurante",
    niche: "Gastronomia & Restaurantes",
    name: "Sabor & Brasa Grill",
    tagline: "Cortes Nobres, Drinks & Rodízio Especial",
    badge: "Food Service",
    theme: {
      bgGradient: "from-[#1a0f0a] via-[#0f0a07] to-[#080503]",
      border: "border-amber-500/30",
      avatarBorder: "from-amber-500 to-orange-500",
      pillBg: "bg-amber-950/40 border-amber-500/25 hover:border-amber-400/60 text-amber-200",
      accentText: "text-amber-400"
    },
    links: [
      { title: "Ver Cardápio Digital Interativo", subtitle: "Pratos, bebidas e sobremesas", icon: "utensils", highlight: true },
      { title: "Reservar Mesa pelo WhatsApp", subtitle: "Atendimento direto com o maitre", icon: "whatsapp" },
      { title: "Avaliar no Google Maps 5★", subtitle: "Ganhe sobremesa na próxima visita", icon: "google" },
      { title: "Como Chegar (Waze / Maps)", subtitle: "Av. Principal, 1200 - Centro", icon: "map" },
    ]
  },
  {
    id: "estetica",
    niche: "Clínicas, Estética & Barbearias",
    name: "Studio Bella & Laser",
    tagline: "Harmonização, Estética Avançada & Spa",
    badge: "Saúde & Beleza",
    theme: {
      bgGradient: "from-[#1a0c16] via-[#10070e] to-[#080407]",
      border: "border-pink-500/30",
      avatarBorder: "from-pink-500 to-rose-400",
      pillBg: "bg-pink-950/40 border-pink-500/25 hover:border-pink-400/60 text-pink-200",
      accentText: "text-pink-400"
    },
    links: [
      { title: "Agendar Horário no WhatsApp", subtitle: "Consulte disponibilidades imediatas", icon: "whatsapp", highlight: true },
      { title: "Antes e Depois no Instagram", subtitle: "Resultados reais @studiobellalaser", icon: "instagram" },
      { title: "Catálogo de Procedimentos & Preços", subtitle: "Protocolos faciais e corporais", icon: "sparkles" },
      { title: "Nossa Reputação no Google", subtitle: "Mais de 180 avaliações 5 estrelas", icon: "google" },
    ]
  },
  {
    id: "comercio",
    niche: "Lojas, Imobiliárias & Prestadores",
    name: "Imóveis Prime & Negócios",
    tagline: "Consultoria Imobiliária de Alto Padrão",
    badge: "Comercial & Vendas",
    theme: {
      bgGradient: "from-[#081524] via-[#050d17] to-[#03070c]",
      border: "border-cyan-500/30",
      avatarBorder: "from-cyan-400 to-teal-400",
      pillBg: "bg-cyan-950/40 border-cyan-500/25 hover:border-cyan-400/60 text-cyan-200",
      accentText: "text-cyan-400"
    },
    links: [
      { title: "Falar com Corretor de Plantão", subtitle: "Plantão 24h para propostas", icon: "whatsapp", highlight: true },
      { title: "Ver Imóveis Disponíveis", subtitle: "Casas em condomínio e apartamentos", icon: "home" },
      { title: "Avaliações de Clientes no Google", subtitle: "Confiança e credibilidade comprovada", icon: "google" },
      { title: "Localização da Imobiliária", subtitle: "Venha tomar um café conosco", icon: "map" },
    ]
  }
];
