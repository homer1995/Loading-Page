import React, { useState } from 'react';
import { Globe, Smartphone, MessageCircle, Star, ExternalLink, Check, Utensils, MapPin, Sparkles, Building2, ChevronRight } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../../data/company';
import { BIO_TEMPLATES, BioTemplate } from '../../data/bioTemplates';

export const BioSiteSection: React.FC = () => {
  const [selectedTemplateIndex, setSelectedTemplateIndex] = useState(0);
  const [clickedLink, setClickedLink] = useState<string | null>(null);

  const currentTemplate = BIO_TEMPLATES[selectedTemplateIndex];

  const handleLinkClick = (title: string) => {
    setClickedLink(title);
    setTimeout(() => setClickedLink(null), 2500);
  };

  const getLinkIcon = (icon: string) => {
    switch (icon) {
      case 'whatsapp':
        return <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />;
      case 'google':
        return <Star className="w-4 h-4 text-amber-400 fill-amber-400" />;
      case 'utensils':
        return <Utensils className="w-4 h-4 text-orange-400" />;
      case 'instagram':
        return <Sparkles className="w-4 h-4 text-pink-400" />;
      case 'home':
        return <Building2 className="w-4 h-4 text-cyan-400" />;
      default:
        return <MapPin className="w-4 h-4 text-sky-400" />;
    }
  };

  return (
    <section className="snap-slide relative flex flex-col justify-center py-16 px-4 sm:px-6 max-w-6xl mx-auto w-full min-h-[100dvh]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Heading, Model Selector Tabs & Value Prop */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-2">
              <Globe className="w-3.5 h-3.5" />
              <span>BioSite Profissional</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3 text-balance">
              Todos os seus links em um só lugar.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed text-balance">
              Um BioSite profissional moderno para centralizar WhatsApp, avaliação no Google, cardápio, redes e localização.
            </p>
          </div>

          {/* Model Selector Tabs */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-2">
              <span>Selecione um modelo para testar:</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {BIO_TEMPLATES.map((tmpl, idx) => {
                const isActive = selectedTemplateIndex === idx;
                return (
                  <button
                    key={tmpl.id}
                    onClick={() => setSelectedTemplateIndex(idx)}
                    className={`p-2.5 sm:p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      isActive
                        ? 'bg-slate-800/90 border-cyan-400 text-white shadow-lg shadow-cyan-950/40 ring-1 ring-cyan-400/50'
                        : 'bg-slate-900/50 border-white/10 text-slate-400 hover:text-white hover:bg-slate-900/80 hover:border-white/20'
                    }`}
                  >
                    <div className="text-[10px] font-mono font-bold uppercase text-cyan-400 truncate">
                      {tmpl.badge}
                    </div>
                    <div className="text-xs font-bold truncate mt-0.5">
                      {tmpl.name}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Key Advantages Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
            <div className="p-2.5 rounded-xl bg-slate-900/60 border border-white/5">
              <span className="text-xs font-bold text-white block">Sua Marca</span>
              <span className="text-[10px] text-slate-400">Design exclusivo</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/60 border border-white/5">
              <span className="text-xs font-bold text-white block">Google Maps</span>
              <span className="text-[10px] text-slate-400">Avaliações 5★</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/60 border border-white/5">
              <span className="text-xs font-bold text-white block">WhatsApp</span>
              <span className="text-[10px] text-slate-400">Contato direto</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/60 border border-white/5">
              <span className="text-xs font-bold text-white block">Zero Travamento</span>
              <span className="text-[10px] text-slate-400">Ultra veloz</span>
            </div>
          </div>

          <div className="space-y-1.5 text-xs text-slate-300">
            <p className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Ideal para o link da bio do Instagram e integrado à sua placa QR Code / NFC.</span>
            </p>
            <p className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Sem custos mensais abusivos de plataformas genéricas.</span>
            </p>
          </div>

          <div>
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.bioSite)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-400/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Quero criar meu BioSite</span>
            </a>
          </div>
        </div>

        {/* Right Column: 3D-Styled Smartphone with Live Template Switching */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-72 sm:w-80 rounded-[3rem] p-3.5 bg-gradient-to-b from-slate-700 via-slate-900 to-slate-950 border-2 border-cyan-500/40 shadow-2xl shadow-cyan-950/60">
            {/* Dynamic Island / Speaker notch */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-20 flex items-center justify-end px-2">
              <div className="w-2 h-2 rounded-full bg-cyan-950" />
            </div>

            {/* Smartphone Display Screen with Selected Model */}
            <div className={`rounded-[2.4rem] bg-gradient-to-b ${currentTemplate.theme.bgGradient} border border-white/10 overflow-hidden pt-8 pb-6 px-4 text-center transition-all duration-500`}>
              {/* Profile Avatar / Logo Lockup */}
              <div className="relative mb-3 inline-block">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${currentTemplate.theme.avatarBorder} p-0.5 shadow-lg`}>
                  <div className="w-full h-full rounded-2xl bg-slate-950 flex items-center justify-center p-2 overflow-hidden">
                    <img
                      src={COMPANY_INFO.logoUrl}
                      alt="Logo da Empresa"
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <span className="absolute -bottom-1 -right-1 px-1.5 py-0.5 bg-emerald-500 text-[9px] font-bold text-slate-950 rounded-full">
                  Online
                </span>
              </div>

              <h4 className="text-sm font-extrabold text-white leading-tight">
                {currentTemplate.name}
              </h4>
              <p className="text-[11px] text-slate-300 mt-0.5 mb-4 leading-tight">
                {currentTemplate.tagline}
              </p>

              {/* Bio Links List for this Model */}
              <div className="space-y-2 mb-3 text-left">
                {currentTemplate.links.map((link, i) => (
                  <button
                    key={i}
                    onClick={() => handleLinkClick(link.title)}
                    className={`w-full p-2.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer group ${
                      link.highlight
                        ? 'bg-slate-900/90 border-cyan-400 text-white shadow-md shadow-cyan-500/20'
                        : `${currentTemplate.theme.pillBg}`
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-7 h-7 rounded-lg bg-slate-950/80 flex items-center justify-center shrink-0">
                        {getLinkIcon(link.icon)}
                      </div>
                      <div className="truncate">
                        <div className="text-xs font-bold text-white truncate group-hover:text-cyan-300 transition-colors">
                          {link.title}
                        </div>
                        <div className="text-[10px] text-slate-400 truncate">
                          {link.subtitle}
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white shrink-0 ml-1" />
                  </button>
                ))}
              </div>

              {/* Interactive Feedback notice */}
              <div className="text-[10px] text-cyan-300 font-mono py-1 px-2 rounded-md bg-slate-950/70 border border-white/5 truncate">
                {clickedLink ? `Simulação: ${clickedLink} ✓` : `Toque nos botões para testar o modelo`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
