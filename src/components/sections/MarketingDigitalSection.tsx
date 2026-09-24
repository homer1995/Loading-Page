import React from 'react';
import { TrendingUp, Share2, BarChart3, Target, Layers, MessageCircle, Sparkles, Megaphone } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../../data/company';

export const MarketingDigitalSection: React.FC = () => {
  const marketingPillars = [
    {
      title: "Presença Online",
      desc: "Posicionamento consistente nos principais canais onde seu cliente pesquisa e consome.",
      icon: <Layers className="w-5 h-5 text-cyan-400" />
    },
    {
      title: "Redes Sociais",
      desc: "Gestão estratégica de Instagram e perfis para gerar engajamento e atrair novos seguidores.",
      icon: <Share2 className="w-5 h-5 text-pink-400" />
    },
    {
      title: "Conteúdo & Criativos",
      desc: "Comunicação visual e artes profissionais alinhadas à sua identidade e público.",
      icon: <Sparkles className="w-5 h-5 text-amber-400" />
    },
    {
      title: "Estratégia & Publicidade",
      desc: "Ações focadas em conectar pessoas reais à sua empresa com clareza e autoridade.",
      icon: <Target className="w-5 h-5 text-emerald-400" />
    }
  ];

  return (
    <section className="snap-slide relative flex flex-col justify-center py-16 px-4 sm:px-6 max-w-6xl mx-auto w-full min-h-[100dvh]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Heading & Value */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-2">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Crescimento & Autoridade</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3 text-balance">
              Marketing para sua empresa crescer.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed text-balance">
              Fortaleça sua presença digital com soluções pensadas para sua empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {marketingPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-3.5 rounded-xl bg-slate-900/80 border border-white/5 hover:border-cyan-500/30 transition-colors"
              >
                <div className="mb-2">{pillar.icon}</div>
                <h3 className="text-sm font-bold text-white mb-1">{pillar.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>

          <div>
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.marketing)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Falar com a WF Mídias</span>
            </a>
          </div>
        </div>

        {/* Right Column: 3D Marketing Dashboard & Growth Composition */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/20 via-emerald-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-60" />

            <div className="relative rounded-2xl bg-gradient-to-b from-slate-800 to-slate-950 p-5 border border-cyan-500/30 shadow-2xl space-y-4">
              {/* Header card indicator */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Posicionamento Digital</span>
                    <span className="text-[10px] text-slate-400">WF Mídias Estratégia</span>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Crescimento Ativo
                </span>
              </div>

              {/* Graphic Mockup simulation */}
              <div className="space-y-3 pt-1">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">Visibilidade de Marca</span>
                    <span className="text-cyan-400 font-mono font-bold">Alta</span>
                  </div>
                  <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-500 to-teal-400 rounded-full w-[88%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">Facilidade de Contato (WhatsApp)</span>
                    <span className="text-emerald-400 font-mono font-bold">Imediato</span>
                  </div>
                  <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full w-[95%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">Autoridade Local (Google Maps)</span>
                    <span className="text-amber-400 font-mono font-bold">5 Estrelas</span>
                  </div>
                  <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full w-[92%]" />
                  </div>
                </div>
              </div>

              {/* Strategy Highlights Box */}
              <div className="p-3 rounded-xl bg-slate-900/90 border border-white/5 space-y-1.5 text-xs text-slate-300">
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <Megaphone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>União do Físico com o Digital</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  As placas no seu estabelecimento guiam o fluxo de clientes diretamente para as suas redes, avaliações e canais de venda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
