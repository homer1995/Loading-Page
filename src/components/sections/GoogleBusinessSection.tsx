import React from 'react';
import { Search, MapPin, CheckCircle2, MessageCircle, Star, TrendingUp, Sparkles } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../../data/company';
import googleBusinessImgNew from '../../assets/images/regenerated_image_1790285213577.png';

export const GoogleBusinessSection: React.FC = () => {
  const benefits = [
    { title: "Criação do Perfil", desc: "Configuração completa e verificação para sua empresa se destacar nos mapas." },
    { title: "Atualização de Informações", desc: "Horários de funcionamento, telefone, endereço, links e categorias corretas." },
    { title: "Gestão de Fotos & Produtos", desc: "Imagens em alta definição e catálogo visual para atrair clientes locais." },
    { title: "Publicação de Conteúdo", desc: "Postagens de novidades, promoções e avisos para manter o perfil ativo e bem ranqueado." },
    { title: "Organização da Presença Digital", desc: "Padronização profissional para passar credibilidade a quem pesquisa no Google." },
  ];

  return (
    <section className="fluid-section flex flex-col justify-center py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto w-full min-h-[calc(100vh-4rem)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Text & Features */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-3">
              <Search className="w-3.5 h-3.5" />
              <span>Google Meu Negócio</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3 text-balance">
              Seu negócio no Google.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed text-balance">
              Mais presença quando seus clientes procuram por você.
            </p>
          </div>

          <div className="space-y-3">
            {benefits.map((benefit) => (
              <div 
                key={benefit.title}
                className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-white/5 hover:border-amber-500/30 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-white">{benefit.title}</h3>
                  <p className="text-xs text-slate-400 leading-normal">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.google)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Quero melhorar meu Google</span>
            </a>
          </div>
        </div>

        {/* Right Column: Professional Mockup of Provided Google Business Image */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="relative w-full max-w-md group">
            {/* Ambient glow behind mockup */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-amber-500/20 via-cyan-500/20 to-transparent rounded-3xl blur-2xl opacity-60" />

            <div className="relative rounded-2xl bg-gradient-to-b from-slate-800 to-slate-950 p-2 sm:p-3 border border-amber-500/30 shadow-2xl overflow-hidden">
              {/* Browser/Device Header */}
              <div className="flex items-center justify-between px-3 py-2 bg-slate-900/90 rounded-t-xl border-b border-white/10 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-300 bg-slate-950 px-3 py-0.5 rounded-md border border-white/5">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  <span>google.com/maps</span>
                </div>
                <div className="flex items-center gap-1 text-amber-400 font-bold text-[11px]">
                  <Star className="w-3 h-3 fill-current" />
                  <span>5.0</span>
                </div>
              </div>

              {/* Real Client Image in mockup container */}
              <div className="relative bg-slate-950 rounded-b-xl overflow-hidden min-h-[280px] sm:min-h-[380px] flex items-center justify-center p-2">
                <img
                  src={googleBusinessImgNew}
                  alt="Google Meu Negócio WF Mídias"
                  className="w-full h-auto max-h-[440px] object-contain rounded-lg drop-shadow-md"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Floating pill badge */}
                <div className="absolute bottom-4 right-4 bg-slate-900/90 border border-amber-500/40 text-amber-300 text-xs px-3 py-1.5 rounded-lg shadow-xl backdrop-blur-md flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span className="font-semibold">Mais Visibilidade</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
