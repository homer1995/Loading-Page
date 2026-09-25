import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, MessageCircle, Sparkles } from 'lucide-react';
import { REAL_PLATES_GALLERY, PlatePhoto, getWhatsAppUrl } from '../../data/company';

interface PlatesGallerySectionProps {
  onOpenPhotoModal: (photo: PlatePhoto, index: number) => void;
}

export const PlatesGallerySection: React.FC<PlatesGallerySectionProps> = ({ onOpenPhotoModal }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const newIndex = Math.round(scrollLeft / (clientWidth * 0.85));
    setCurrentIndex(Math.min(newIndex, REAL_PLATES_GALLERY.length - 1));
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.clientWidth * 0.85;
    scrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    if (currentIndex > 0) scrollToIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < REAL_PLATES_GALLERY.length - 1) scrollToIndex(currentIndex + 1);
  };

  return (
    <section className="fluid-section flex flex-col justify-center py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto w-full min-h-[calc(100vh-4rem)]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-2">
            <span>Modelos Reais em Acrílico</span>
            <span aria-hidden="true">·</span>
            <span>QR Code + NFC</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Placas Personalizadas.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-1">
            Modelos reais fabricados pela WF Mídias para balcão, recepção e mesas com enquadramento integral das artes.
          </p>
        </div>

        {/* Counter & Controls (Desktop & Mobile) */}
        <div className="flex items-center gap-3 self-end sm:self-auto">
          <div className="text-xs font-mono text-cyan-400 bg-slate-900 px-3 py-1.5 rounded-full border border-white/10">
            <span>{currentIndex + 1}</span>
            <span className="text-slate-500"> / </span>
            <span className="text-slate-400">{REAL_PLATES_GALLERY.length}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Placa anterior"
              className="p-2 rounded-full bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === REAL_PLATES_GALLERY.length - 1}
              aria-label="Próxima placa"
              className="p-2 rounded-full bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Carousel (Touch Swipe on Mobile, Peek of next card) */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4 pt-1 px-1"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {REAL_PLATES_GALLERY.map((photo, idx) => (
          <div
            key={photo.id}
            onClick={() => onOpenPhotoModal(photo, idx)}
            role="button"
            tabIndex={0}
            className="snap-center shrink-0 w-[84vw] sm:w-[350px] md:w-[370px] bg-slate-900/90 hover:bg-slate-900 border border-white/10 hover:border-cyan-500/50 rounded-2xl p-3 sm:p-4 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-2xl cursor-pointer group"
          >
            {/* Image Box with consistent 3/4 aspect ratio and object-cover */}
            <div className="relative rounded-xl overflow-hidden bg-[#050810] border border-white/5 w-full aspect-[3/4] mb-3">
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover object-center rounded-lg transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Gradient overlay for bottom readability & polish */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

              {/* Badge */}
              <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-slate-950/90 backdrop-blur-md border border-white/10 text-[10px] font-bold text-cyan-300 uppercase tracking-wider shadow-sm z-10">
                {photo.badge}
              </div>

              {/* Expand Hint */}
              <div className="absolute top-2.5 right-2.5 p-2 rounded-lg bg-slate-950/85 text-white opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-md">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>

            {/* Meta & Info */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider mb-1">
                  {photo.category}
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                  {photo.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                  {photo.description}
                </p>
              </div>

              {/* Bottom Quick Action */}
              <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-slate-400 group-hover:text-cyan-300 transition-colors flex items-center gap-1">
                  <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Ver arte completa</span>
                </span>

                <span 
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(getWhatsAppUrl(`Olá, WF Mídias! Tenho interesse na placa "${photo.title}"`), '_blank');
                  }}
                  className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>Pedir</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Swipe instructions for Mobile */}
      <div className="flex items-center justify-center gap-2 mt-4 text-xs text-slate-500 sm:hidden">
        <span>← Arraste para o lado para ver todos os modelos reais →</span>
      </div>
    </section>
  );
};
