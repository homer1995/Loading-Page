import React, { useState } from 'react';
import { Palette, Check, MessageCircle, Sparkles, Sliders } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_MESSAGES, REAL_PLATES_GALLERY } from '../../data/company';

export const CustomPlatesSection: React.FC = () => {
  const customCapabilities = [
    "Sua logomarca em alta definição",
    "Cores fiéis à identidade da empresa",
    "QR Code com acabamento de precisão",
    "Chip NFC invisível integrado no acrílico",
    "Canais sob medida (Google, Insta, Pix, Wi-Fi)",
    "Formatos verticais, horizontais ou compactos",
    "Base estável para balcões e mesas de atendimento",
    "Instruções claras para o cliente final"
  ];

  // Pick 2 real customized plate samples from the client's photos
  const sample1 = REAL_PLATES_GALLERY[7]; // Placa Personalizada com Identidade Visual
  const sample2 = REAL_PLATES_GALLERY[0]; // Smart Display Acrílico

  return (
    <section className="snap-slide relative flex flex-col justify-center py-16 px-4 sm:px-6 max-w-6xl mx-auto w-full min-h-[100dvh]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Visual Showcase with real personalized products */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 relative">
            {/* Ambient decorative glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-emerald-500/20 rounded-3xl blur-2xl opacity-50 pointer-events-none" />

            {/* Sample Card 1 */}
            <div className="relative rounded-2xl bg-slate-900/90 border border-cyan-500/30 p-2 sm:p-3 shadow-xl overflow-hidden group">
              <div className="h-44 sm:h-56 rounded-xl bg-slate-950 flex items-center justify-center p-2 overflow-hidden">
                <img
                  src={sample1.url}
                  alt={sample1.title}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-2 text-center">
                <span className="text-[10px] font-bold text-cyan-400 uppercase">Identidade Própria</span>
                <p className="text-xs font-semibold text-white truncate">{sample1.title}</p>
              </div>
            </div>

            {/* Sample Card 2 */}
            <div className="relative rounded-2xl bg-slate-900/90 border border-purple-500/30 p-2 sm:p-3 shadow-xl overflow-hidden group mt-4 sm:mt-6">
              <div className="h-44 sm:h-56 rounded-xl bg-slate-950 flex items-center justify-center p-2 overflow-hidden">
                <img
                  src={sample2.url}
                  alt={sample2.title}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-2 text-center">
                <span className="text-[10px] font-bold text-purple-400 uppercase">Acrílico Cristal</span>
                <p className="text-xs font-semibold text-white truncate">{sample2.title}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Customization Value & CTA */}
        <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-2">
              <Palette className="w-3.5 h-3.5" />
              <span>Personalização Total</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3 text-balance">
              Uma placa do jeito da sua empresa.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed text-balance">
              Crie uma solução personalizada para sua necessidade.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10 text-sm text-cyan-300 font-semibold italic">
            "Você escolhe a finalidade. A WF Mídias cria a solução."
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {customCapabilities.map((cap) => (
              <div key={cap} className="flex items-center gap-2 text-xs text-slate-300">
                <div className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5" />
                </div>
                <span>{cap}</span>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.customPlate)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Solicitar orçamento</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
