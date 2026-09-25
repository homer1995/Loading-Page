import React from 'react';
import { MessageCircle, Instagram, Sparkles, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../../data/company';

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="fluid-section flex flex-col justify-center py-20 sm:py-28 px-4 sm:px-6 max-w-5xl mx-auto w-full min-h-[calc(100vh-4rem)]">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[600px] h-96 sm:h-[600px] bg-gradient-to-tr from-cyan-500/15 via-emerald-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="relative rounded-3xl bg-gradient-to-b from-slate-900/90 via-[#0d1527] to-[#080d1a] border border-cyan-500/30 p-8 sm:p-14 text-center shadow-2xl overflow-hidden">
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/10 rounded-full blur-2xl" />

        {/* Small brand emblem */}
        <div className="w-16 h-16 mx-auto rounded-2xl bg-slate-900 border border-cyan-500/30 p-2 shadow-xl mb-6 flex items-center justify-center">
          <img
            src={COMPANY_INFO.logoUrl}
            alt="WF Mídias"
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">
          <span>Pronto para o Próximo Nível?</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-4 text-balance">
          Vamos colocar sua empresa no digital?
        </h2>

        <p className="text-base sm:text-xl text-slate-300 max-w-xl mx-auto leading-relaxed mb-8 text-balance">
          Conte para a WF Mídias o que sua empresa precisa. Criamos a solução ideal para fortalecer sua presença e conectar seus clientes.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          {/* Main WhatsApp Button */}
          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-extrabold text-sm sm:text-base shadow-xl shadow-emerald-500/25 transition-all hover:scale-[1.03] active:scale-[0.98]"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Falar pelo WhatsApp</span>
          </a>

          {/* Secondary Instagram Button */}
          <a
            href={COMPANY_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-white/10 hover:border-pink-500/40 hover:text-pink-300 font-bold text-sm sm:text-base transition-all"
          >
            <Instagram className="w-5 h-5" />
            <span>Conhecer nosso Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};
