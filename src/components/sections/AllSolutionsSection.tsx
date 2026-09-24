import React from 'react';
import { ALL_SOLUTIONS_LIST, getWhatsAppUrl } from '../../data/company';
import { 
  Search, Star, Camera, MessageCircle, Wifi, QrCode, Cpu, Palette, 
  Utensils, Globe, TrendingUp, ArrowUpRight 
} from 'lucide-react';

export const AllSolutionsSection: React.FC = () => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'search': return <Search className="w-4 h-4 text-amber-400" />;
      case 'star': return <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />;
      case 'camera': return <Camera className="w-4 h-4 text-pink-400" />;
      case 'message-circle': return <MessageCircle className="w-4 h-4 text-emerald-400" />;
      case 'wifi': return <Wifi className="w-4 h-4 text-cyan-400" />;
      case 'qr-code': return <QrCode className="w-4 h-4 text-teal-400" />;
      case 'cpu': return <Cpu className="w-4 h-4 text-sky-400" />;
      case 'palette': return <Palette className="w-4 h-4 text-purple-400" />;
      case 'utensils': return <Utensils className="w-4 h-4 text-orange-400" />;
      case 'globe': return <Globe className="w-4 h-4 text-blue-400" />;
      case 'trending-up': return <TrendingUp className="w-4 h-4 text-emerald-400" />;
      default: return <QrCode className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section className="snap-slide relative flex flex-col justify-center py-16 px-4 sm:px-6 max-w-6xl mx-auto w-full min-h-[100dvh]">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-2">
          <span>Catálogo de Soluções</span>
          <span aria-hidden="true">·</span>
          <span>Visão Geral</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3 text-balance">
          Uma solução para cada necessidade.
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto text-balance">
          Soluções pensadas para facilitar a conexão da sua empresa com os seus clientes no ambiente físico e digital.
        </p>
      </div>

      {/* Grid of the 11 Solutions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 max-w-5xl mx-auto w-full max-h-[62vh] overflow-y-auto pr-1 no-scrollbar">
        {ALL_SOLUTIONS_LIST.map((sol) => (
          <div
            key={sol.id}
            className="p-3.5 rounded-xl bg-slate-900/75 border border-white/5 hover:border-cyan-500/30 hover:bg-slate-900 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 rounded-lg bg-slate-950 border border-white/10 flex items-center justify-center">
                  {getIcon(sol.icon)}
                </div>
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  {sol.category}
                </span>
              </div>

              <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                {sol.title}
              </h3>

              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                {sol.desc}
              </p>
            </div>

            <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-end">
              <a
                href={getWhatsAppUrl(sol.whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
              >
                <span>Consultar</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
