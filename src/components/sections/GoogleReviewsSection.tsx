import React, { useState } from 'react';
import { Star, QrCode, Radio, Smartphone, Check, MessageCircle, Sparkles } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../../data/company';

export const GoogleReviewsSection: React.FC = () => {
  const [simulatingNfc, setSimulatingNfc] = useState(false);
  const [showReviewSuccess, setShowReviewSuccess] = useState(false);

  const handleSimulate = () => {
    setSimulatingNfc(true);
    setTimeout(() => {
      setSimulatingNfc(false);
      setShowReviewSuccess(true);
      setTimeout(() => setShowReviewSuccess(false), 4500);
    }, 1200);
  };

  return (
    <section className="snap-slide relative flex flex-col justify-center py-16 px-4 sm:px-6 max-w-6xl mx-auto w-full min-h-[100dvh]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Real Image with Interactive NFC Trigger */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center order-2 lg:order-1">
          <div className="relative w-full max-w-md group">
            {/* Ambient Backlight */}
            <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/30 to-cyan-500/30 rounded-3xl blur-2xl opacity-60" />

            {/* Placa Container */}
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-800 to-slate-950 p-3 sm:p-4 border border-cyan-500/30 shadow-2xl overflow-hidden">
              <div className="relative rounded-xl overflow-hidden bg-slate-900 flex items-center justify-center min-h-[300px] sm:min-h-[380px]">
                <img
                  src={COMPANY_INFO.reviewPlateHeroImg}
                  alt="Placa de Avaliação Google WF Mídias"
                  className="w-full h-auto max-h-[460px] object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Simulated NFC wave rings */}
                {simulatingNfc && (
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center animate-fadeIn z-20">
                    <div className="relative flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full border-4 border-cyan-400 animate-ping" />
                      <div className="absolute w-16 h-16 rounded-full border-4 border-emerald-400 animate-ping delay-150" />
                      <Smartphone className="w-10 h-10 text-white z-10 animate-bounce" />
                    </div>
                    <span className="mt-4 text-xs font-bold text-cyan-300 uppercase tracking-widest">
                      Lendo chip NFC...
                    </span>
                  </div>
                )}

                {/* Interactive Simulated Review Prompt Popup */}
                {showReviewSuccess && (
                  <div className="absolute inset-x-4 bottom-4 p-4 rounded-xl bg-slate-950/95 border border-emerald-500/50 shadow-2xl backdrop-blur-xl animate-fadeIn z-30">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-white">Google Meu Negócio Aberto!</span>
                    </div>
                    <div className="flex gap-1 text-amber-400 mb-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-[11px] text-slate-300">
                      O cliente avalia com 5 estrelas em menos de 10 segundos no balcão.
                    </p>
                  </div>
                )}
              </div>

              {/* NFC Simulator Button */}
              <div className="mt-3 flex items-center justify-between gap-2 pt-2 border-t border-white/10">
                <button
                  onClick={handleSimulate}
                  disabled={simulatingNfc}
                  className="w-full py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-cyan-500/30 text-cyan-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                  <span>Toque para simular aproximação NFC</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Title, Subtitle, Key Features, CTA */}
        <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-3">
              <Star className="w-3.5 h-3.5 fill-emerald-400" />
              <span>Avaliações Reais</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3 text-balance">
              Transforme clientes em avaliações.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed text-balance">
              Facilite o acesso dos seus clientes à avaliação da sua empresa no Google.
            </p>
          </div>

          {/* Destaques Cards */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/10 text-center">
              <div className="text-cyan-400 font-bold text-sm sm:text-base">Prática</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Sem digitação manual</div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/10 text-center">
              <div className="text-emerald-400 font-bold text-sm sm:text-base">Moderna</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Design em acrílico</div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/10 text-center">
              <div className="text-amber-400 font-bold text-sm sm:text-base">QR + NFC</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Dupla conectividade</div>
            </div>
          </div>

          {/* Explanation bullet points */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-2 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Basta aproximar o celular (NFC) ou apontar a câmera (QR Code).</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Abre instantaneamente a página oficial de avaliação no Google Maps.</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>Gera mais provas sociais, aumentando a confiança de novos clientes.</span>
            </div>
          </div>

          <div>
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.plates)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Quero minha placa</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
