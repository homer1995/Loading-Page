import React from 'react';
import { Instagram, MessageCircle, Mail, ArrowUp, Phone } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../../data/company';

interface FooterSectionProps {
  onBackToTop: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onBackToTop }) => {
  return (
    <footer className="snap-slide relative flex flex-col justify-between py-12 px-4 sm:px-6 max-w-5xl mx-auto w-full min-h-[100dvh]">
      <div className="my-auto max-w-3xl mx-auto text-center w-full">
        {/* Logo */}
        <div className="w-20 h-20 mx-auto rounded-2xl bg-slate-900 border border-cyan-500/30 p-2 shadow-2xl mb-5 flex items-center justify-center">
          <img
            src={COMPANY_INFO.logoUrl}
            alt="WF Mídias Logo"
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
          WF MÍDIAS
        </h3>

        <p className="text-sm sm:text-base text-slate-300 max-w-md mx-auto mb-8 text-balance">
          Marketing e soluções digitais para empresas.
        </p>

        {/* Clickable Channel Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-2xl mx-auto mb-10">
          {/* WhatsApp */}
          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-slate-900/80 border border-emerald-500/30 hover:bg-slate-900 hover:border-emerald-400 text-left transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-5 h-5 fill-current" />
              </div>
              <div className="truncate">
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">WhatsApp</span>
                <span className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {COMPANY_INFO.whatsappNumber}
                </span>
              </div>
            </div>
          </a>

          {/* Instagram */}
          <a
            href={COMPANY_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-slate-900/80 border border-pink-500/30 hover:bg-slate-900 hover:border-pink-400 text-left transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="truncate">
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">Instagram</span>
                <span className="text-xs font-bold text-white group-hover:text-pink-300 transition-colors">
                  {COMPANY_INFO.instagramHandle}
                </span>
              </div>
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="p-4 rounded-2xl bg-slate-900/80 border border-cyan-500/30 hover:bg-slate-900 hover:border-cyan-400 text-left transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div className="truncate">
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">E-mail</span>
                <span className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                  {COMPANY_INFO.email}
                </span>
              </div>
            </div>
          </a>
        </div>

        {/* Back to top button */}
        <button
          onClick={onBackToTop}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <ArrowUp className="w-4 h-4 text-cyan-400" />
          <span>Voltar ao Início da Apresentação</span>
        </button>
      </div>

      {/* Copyright & Meta */}
      <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500 text-center sm:text-left">
        <div>
          © {new Date().getFullYear()} WF Mídias. Todos os direitos reservados.
        </div>
        <div className="flex items-center gap-3 text-[11px]">
          <span>Google Meu Negócio</span>
          <span aria-hidden="true">·</span>
          <span>Placas QR Code & NFC</span>
          <span aria-hidden="true">·</span>
          <span>BioSite</span>
        </div>
      </div>
    </footer>
  );
};
