import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/company';

interface HeaderProps {
  currentSlideIndex: number;
  totalSlides: number;
  onNavigateToSlide: (index: number) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentSlideIndex,
  totalSlides,
  onNavigateToSlide
}) => {
  const progressPercent = ((currentSlideIndex + 1) / totalSlides) * 100;

  const quickLinks = [
    { name: "Início", slideIndex: 0 },
    { name: "Placas de Avaliação", slideIndex: 1 },
    { name: "Placas Personalizadas", slideIndex: 2 },
    { name: "Google Meu Negócio", slideIndex: 3 },
    { name: "BioSites", slideIndex: 4 },
    { name: "Contato", slideIndex: 5 },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#080B10]/85 backdrop-blur-xl border-b border-white/5 transition-all">
      {/* Top Slide Progress Bar */}
      <div className="w-full h-1 bg-slate-900 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 transition-all duration-300 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark / Logo */}
        <div 
          onClick={() => onNavigateToSlide(0)}
          className="flex items-center gap-3 cursor-pointer group"
          role="button"
          tabIndex={0}
          aria-label="Ir para o início"
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden bg-slate-900 border border-cyan-500/30 flex items-center justify-center p-1 group-hover:border-cyan-400 transition-colors">
            <img
              src={COMPANY_INFO.logoUrl}
              alt="WF Mídias Logo"
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-extrabold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              WF MÍDIAS
            </span>
            <span className="text-[10px] text-slate-400 -mt-1 font-medium tracking-wider uppercase">
              Google & Placas Inteligentes
            </span>
          </div>
        </div>

        {/* Zone 2: Navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-xs tracking-wide uppercase font-semibold text-slate-300">
          {quickLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => onNavigateToSlide(link.slideIndex)}
              className={`hover:text-cyan-400 transition-colors py-1 cursor-pointer ${
                currentSlideIndex === link.slideIndex ? 'text-cyan-400 border-b border-cyan-400' : ''
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Zone 3: Direct WhatsApp Action Button */}
        <div className="flex items-center gap-2.5">
          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.plates)}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              height: '59px',
              paddingTop: '5px',
              paddingBottom: '5px',
              marginLeft: '20px',
              marginTop: '0px',
              marginBottom: '0px'
            }}
            className="flex items-center gap-2 px-4 text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 rounded-xl shadow-md shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Pedir Minha Placa</span>
          </a>
        </div>
      </div>
    </header>
  );
};
