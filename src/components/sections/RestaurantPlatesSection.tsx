import React from 'react';
import { Utensils, QrCode, Smartphone, ArrowDown, MessageCircle, Star, Wifi, Info } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_MESSAGES, REAL_PLATES_GALLERY } from '../../data/company';

export const RestaurantPlatesSection: React.FC = () => {
  // Use plate 4 or 5 which is great for table placement
  const tablePlate = REAL_PLATES_GALLERY[4];

  const restaurantFeatures = [
    { title: "Cardápio Digital", desc: "Acesso sem demora na mesa através do próprio celular do cliente." },
    { title: "QR Code na Mesa", desc: "Placas resistentes a líquidos, duráveis e elegantes para cada mesa." },
    { title: "Avaliação Google Maps", desc: "Incentive o cliente a elogiar os pratos e atendimento logo após a refeição." },
    { title: "Wi-Fi Automático", desc: "Conexão direta à rede do restaurante sem precisar ditar senhas." },
    { title: "Instagram do Restaurante", desc: "Fotos de pratos especiais, reels e marcações nos stories." },
    { title: "Informações e Reservas", desc: "Horários, telefone, pedidos delivery e dados do estabelecimento." }
  ];

  return (
    <section className="snap-slide relative flex flex-col justify-center py-16 px-4 sm:px-6 max-w-6xl mx-auto w-full min-h-[100dvh]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Heading, Flow & Features */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">
              <Utensils className="w-3.5 h-3.5" />
              <span>Bares, Restaurantes & Cafés</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3 text-balance">
              Seu cardápio mais prático.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed text-balance">
              Facilite o acesso dos clientes ao seu menu.
            </p>
          </div>

          {/* Visual Step-by-Step Flow: CLIENTE -> QR CODE -> CARDÁPIO DIGITAL */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-900/90 border border-amber-500/20 shadow-xl">
            <div className="text-[11px] font-mono uppercase tracking-wider text-amber-400 mb-3 font-semibold">
              Fluxo Rápido na Mesa
            </div>
            
            <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center items-center">
              {/* Step 1 */}
              <div className="p-3 rounded-xl bg-slate-950/80 border border-white/5 flex flex-col items-center">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-1.5 font-bold text-xs">
                  01
                </div>
                <span className="text-xs sm:text-sm font-extrabold text-white">CLIENTE</span>
                <span className="text-[10px] text-slate-400 mt-0.5">Senta à mesa</span>
              </div>

              {/* Step 2 */}
              <div className="p-3 rounded-xl bg-slate-950/80 border border-amber-500/30 flex flex-col items-center relative">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-1.5 font-bold text-xs">
                  <QrCode className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-extrabold text-cyan-300">QR CODE</span>
                <span className="text-[10px] text-slate-400 mt-0.5">Aponta a câmera</span>
              </div>

              {/* Step 3 */}
              <div className="p-3 rounded-xl bg-slate-950/80 border border-emerald-500/30 flex flex-col items-center">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-1.5 font-bold text-xs">
                  <Smartphone className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-extrabold text-emerald-300">CARDÁPIO</span>
                <span className="text-[10px] text-slate-400 mt-0.5">Menu interativo</span>
              </div>
            </div>
          </div>

          {/* Feature Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {restaurantFeatures.map((f) => (
              <div key={f.title} className="p-2.5 rounded-xl bg-slate-900/60 border border-white/5">
                <h4 className="text-xs font-bold text-white">{f.title}</h4>
                <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">{f.desc}</p>
              </div>
            ))}
          </div>

          <div>
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.restaurant)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Quero um cardápio digital</span>
            </a>
          </div>
        </div>

        {/* Right Column: Real Table Plate Product Showcase */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm group">
            <div className="absolute -inset-2 bg-gradient-to-t from-amber-500/20 via-cyan-500/10 to-transparent rounded-3xl blur-2xl opacity-60" />

            <div className="relative rounded-2xl bg-gradient-to-b from-slate-800 to-slate-950 p-4 border border-amber-500/30 shadow-2xl">
              <div className="rounded-xl overflow-hidden bg-[#070b13] p-3 flex items-center justify-center min-h-[320px]">
                <img
                  src={tablePlate.url}
                  alt="Placa para Restaurante WF Mídias"
                  className="w-full h-auto max-h-[380px] object-contain rounded-lg drop-shadow-2xl transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="mt-3 p-2.5 rounded-lg bg-slate-900/90 border border-white/10 text-center">
                <div className="text-xs font-bold text-white">Ideal para Mesas & Balcões</div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  Resistente, higienizável e de leitura imediata por todos os smartphones
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
