import React from 'react';
import { Smartphone, QrCode, Wifi, ArrowUpRight, MessageCircle, Radio, Sparkles } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../../data/company';

export const PresentationSection: React.FC = () => {
  const ecosystemItems = [
    {
      label: "Google Meu Negócio",
      desc: "Avaliações 5★ e mapa local",
      icon: "G",
      color: "border-amber-500/30 bg-amber-500/10 text-amber-300"
    },
    {
      label: "Instagram",
      desc: "Engajamento e novos seguidores",
      icon: "IG",
      color: "border-pink-500/30 bg-pink-500/10 text-pink-300"
    },
    {
      label: "WhatsApp Comercial",
      desc: "Atendimento direto com 1 toque",
      icon: "WA",
      color: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
    },
    {
      label: "Tecnologia NFC",
      desc: "Aproximação instantânea",
      icon: "NFC",
      color: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300"
    },
    {
      label: "QR Code Inteligente",
      desc: "Compatível com qualquer celular",
      icon: "QR",
      color: "border-purple-500/30 bg-purple-500/10 text-purple-300"
    },
    {
      label: "Marketing Estratégico",
      desc: "Posicionamento e autoridade",
      icon: "MKT",
      color: "border-sky-500/30 bg-sky-500/10 text-sky-300"
    }
  ];

  return (
    <section className="snap-slide relative flex flex-col justify-center py-16 px-4 sm:px-6 max-w-6xl mx-auto w-full min-h-[100dvh]">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">
          <span>Apresentação</span>
          <span aria-hidden="true">·</span>
          <span>Ecossistema WF Mídias</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
          Sua empresa mais presente no digital.
        </h2>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed text-balance">
          A WF Mídias oferece soluções para empresas que querem fortalecer sua presença, facilitar o contato com seus clientes e melhorar sua imagem profissional.
        </p>
      </div>

      {/* Visual Composition: Smartphone Mockup Central + Connected Ecosystem Cards */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-5xl mx-auto w-full">
        {/* Left Side: Highlights */}
        <div className="md:col-span-4 space-y-3.5 order-2 md:order-1">
          {ecosystemItems.slice(0, 3).map((item) => (
            <div 
              key={item.label}
              className="p-4 rounded-xl bg-slate-900/80 border border-white/10 hover:border-cyan-500/30 transition-all backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold border ${item.color}`}>
                  {item.icon}
                </span>
                <div>
                  <h3 className="text-sm font-bold text-white leading-tight">{item.label}</h3>
                  <p className="text-xs text-slate-400">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Center: Interactive Stylized Smartphone Mockup */}
        <div className="md:col-span-4 flex justify-center order-1 md:order-2">
          <div className="relative w-64 sm:w-72 rounded-[2.5rem] p-3 bg-gradient-to-b from-slate-700 via-slate-900 to-slate-950 border-2 border-cyan-500/40 shadow-2xl shadow-cyan-950/50">
            {/* Camera notch */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-20" />
            
            {/* Screen */}
            <div className="rounded-[2rem] bg-[#090e17] border border-white/10 overflow-hidden pt-7 pb-5 px-4 text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center mb-3">
                <Radio className="w-6 h-6 text-cyan-400 animate-pulse" />
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-1">
                Toque ou Aproxime
              </div>
              <div className="text-base font-extrabold text-white mb-3">
                Acesso Imediato
              </div>

              <div className="space-y-2 text-left mb-4">
                <div className="p-2 rounded-lg bg-slate-800/80 border border-white/5 flex items-center justify-between text-xs">
                  <span className="text-slate-300">Avaliação Google</span>
                  <span className="text-amber-400 font-bold">5.0 ★</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-800/80 border border-white/5 flex items-center justify-between text-xs">
                  <span className="text-slate-300">WhatsApp Comercial</span>
                  <span className="text-emerald-400 font-bold">Online</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-800/80 border border-white/5 flex items-center justify-between text-xs">
                  <span className="text-slate-300">Redes & Links</span>
                  <span className="text-cyan-400 font-bold">Conectado</span>
                </div>
              </div>

              <div className="text-[10px] text-slate-400">
                Experiência moderna sem necessidade de instalar aplicativos
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Highlights */}
        <div className="md:col-span-4 space-y-3.5 order-3">
          {ecosystemItems.slice(3, 6).map((item) => (
            <div 
              key={item.label}
              className="p-4 rounded-xl bg-slate-900/80 border border-white/10 hover:border-cyan-500/30 transition-all backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold border ${item.color}`}>
                  {item.icon}
                </span>
                <div>
                  <h3 className="text-sm font-bold text-white leading-tight">{item.label}</h3>
                  <p className="text-xs text-slate-400">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        <a
          href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-cyan-500/30 text-cyan-300 hover:text-white font-semibold text-xs tracking-wider uppercase transition-colors"
        >
          <span>Descubra a solução ideal para você</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};
