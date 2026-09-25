import React from 'react';
import { ArrowDown, Sparkles, MessageCircle, Smartphone, Wifi, QrCode, Star } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../../data/company';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  return (
    <section className="fluid-section flex flex-col justify-between pt-12 pb-16 px-4 sm:px-6 max-w-6xl mx-auto w-full min-h-[calc(100vh-4rem)]">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-2/3 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Hero Content */}
      <div className="my-auto flex flex-col items-center text-center max-w-3xl mx-auto pt-4 sm:pt-8">
        {/* Brand Lockup */}
        <div className="relative mb-6 group inline-block">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-emerald-400 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#0d1424] border border-cyan-500/30 p-2 shadow-2xl flex items-center justify-center">
            <img
              src={COMPANY_INFO.logoUrl}
              alt="WF Mídias Logo"
              className="w-full h-full object-contain drop-shadow-md"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Clean kicker text */}
        <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">
          <span>Placas Inteligentes</span>
          <span aria-hidden="true">·</span>
          <span>Google Meu Negócio</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-4 text-balance">
          Transforme clientes em <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-cyan-400 bg-clip-text text-transparent">avaliações 5 estrelas</span> no Google.
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-slate-300 font-normal max-w-2xl leading-relaxed mb-8 text-balance">
          Placas interativas com QR Code + NFC e gestão completa do seu Google Meu Negócio para colocar sua empresa no topo das pesquisas locais.
        </p>

        {/* 3D-Style Interactive Showcase Badge */}
        <div className="w-full max-w-md p-4 mb-8 rounded-2xl bg-gradient-to-b from-slate-800/80 to-slate-900/90 border border-cyan-500/20 shadow-2xl backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/5 rounded-full blur-xl" />
          
          <div className="flex items-center justify-between gap-3 text-left">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-inner">
                <QrCode className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <span>Aproximação NFC + QR Code</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                </div>
                <div className="text-[11px] text-slate-400">
                  Avaliação no Google em segundos
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md text-xs font-bold border border-amber-500/20">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>5.0 ★</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            Ver Placas de Avaliação
          </button>

          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.plates)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-white/10 font-semibold text-sm transition-all hover:border-emerald-500/40 hover:text-emerald-300"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 fill-current" />
            <span>Pedir no WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Slide footer exploration indicator */}
      <div 
        onClick={onExploreClick}
        role="button"
        tabIndex={0}
        className="flex flex-col items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer pt-4 select-none group"
      >
        <span className="text-xs font-medium tracking-wider uppercase">
          Role para explorar ↓
        </span>
        <ArrowDown className="w-4 h-4 animate-bounce text-cyan-400" />
      </div>
    </section>
  );
};
