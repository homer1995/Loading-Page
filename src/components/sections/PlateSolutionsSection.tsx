import React, { useState } from 'react';
import { PLATE_CHANNELS, getWhatsAppUrl } from '../../data/company';
import { Star, Camera, MessageCircle, Wifi, QrCode, Radio, DollarSign, ArrowUpRight } from 'lucide-react';

export const PlateSolutionsSection: React.FC = () => {
  const [selectedChannel, setSelectedChannel] = useState(PLATE_CHANNELS[0].id);

  const getIcon = (id: string) => {
    switch (id) {
      case 'google': return <Star className="w-5 h-5 fill-amber-400 text-amber-400" />;
      case 'instagram': return <Camera className="w-5 h-5 text-pink-400" />;
      case 'whatsapp': return <MessageCircle className="w-5 h-5 text-emerald-400" />;
      case 'wifi': return <Wifi className="w-5 h-5 text-cyan-400" />;
      case 'pix': return <DollarSign className="w-5 h-5 text-teal-400" />;
      case 'qrcode': return <QrCode className="w-5 h-5 text-indigo-400" />;
      case 'nfc': return <Radio className="w-5 h-5 text-sky-400" />;
      default: return <QrCode className="w-5 h-5" />;
    }
  };

  return (
    <section className="snap-slide relative flex flex-col justify-center py-16 px-4 sm:px-6 max-w-6xl mx-auto w-full min-h-[100dvh]">
      <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-2">
          <span>Aplicações Inteligentes</span>
          <span aria-hidden="true">·</span>
          <span>Versatilidade Total</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3 text-balance">
          Conecte seus clientes com um simples toque.
        </h2>
        <p className="text-base text-slate-300 max-w-xl mx-auto text-balance">
          Cada placa pode ser configurada para uma ou mais funções essenciais do dia a dia do seu negócio.
        </p>
      </div>

      {/* Grid of Channels with Modern 3D Card Styling */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto w-full">
        {PLATE_CHANNELS.map((channel) => {
          const isSelected = selectedChannel === channel.id;
          return (
            <div
              key={channel.id}
              onClick={() => setSelectedChannel(channel.id)}
              role="button"
              tabIndex={0}
              className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer group ${
                isSelected
                  ? `bg-slate-900/90 ${channel.border} shadow-lg shadow-cyan-950/40 scale-[1.02]`
                  : 'bg-slate-900/50 border-white/5 hover:border-white/20 hover:bg-slate-900/80'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl bg-slate-950 border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform`}>
                    {getIcon(channel.id)}
                  </div>
                  <span className={`text-[11px] font-mono font-bold ${channel.accent}`}>
                    {channel.name}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white mb-1.5 leading-snug">
                  {channel.headline}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {channel.detail}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-500 font-medium">Toque ou Câmera</span>
                <a
                  href={getWhatsAppUrl(`Olá, WF Mídias! Tenho interesse em placas com foco em ${channel.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-0.5"
                >
                  <span>Pedir</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}

        {/* Custom Combination Card */}
        <div className="p-4 sm:p-5 rounded-2xl border border-cyan-500/40 bg-gradient-to-br from-slate-900 to-[#0c1a2e] flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                <span className="font-extrabold text-sm">+</span>
              </div>
              <span className="text-[11px] font-mono font-bold text-cyan-300">
                COMBINADO
              </span>
            </div>
            <h3 className="text-sm sm:text-base font-bold text-white mb-1.5 leading-snug">
              2 ou mais canais na mesma placa.
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Google + Instagram + Wi-Fi em uma única peça sofisticada no balcão.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10">
            <a
              href={getWhatsAppUrl("Olá, WF Mídias! Gostaria de combinar múltiplos canais (ex: Google e Instagram) em uma mesma placa.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Montar Placa Dupla</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
