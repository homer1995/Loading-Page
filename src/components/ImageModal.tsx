import React, { useEffect } from 'react';
import { X, ExternalLink, MessageCircle, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { PlatePhoto, getWhatsAppUrl } from '../data/company';

interface ImageModalProps {
  photo: PlatePhoto | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  currentIndex?: number;
  total?: number;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  photo,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  total
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onNext, onPrev]);

  if (!photo) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/95 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl w-full bg-[#0d1424] border border-cyan-500/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fechar visualização"
          className="absolute top-3 right-3 z-20 p-2.5 rounded-full bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors border border-white/10 shadow-lg cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Container with 100% complete framing and no clipping */}
        <div className="relative flex-1 bg-[#050810] flex items-center justify-center p-3 sm:p-6 min-h-[320px] md:min-h-[520px] overflow-hidden group">
          <img
            src={photo.url}
            alt={photo.title}
            className="max-h-[55vh] md:max-h-[82vh] w-auto max-w-full object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-[1.01]"
            loading="eager"
            referrerPolicy="no-referrer"
          />

          {/* Nav arrows on modal */}
          {onPrev && (
            <button
              onClick={(e) => { e.stopPropagation(); onPrev(); }}
              aria-label="Foto anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 text-white hover:bg-cyan-500 hover:text-slate-950 transition-colors border border-white/10 shadow-md cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {onNext && (
            <button
              onClick={(e) => { e.stopPropagation(); onNext(); }}
              aria-label="Próxima foto"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 text-white hover:bg-cyan-500 hover:text-slate-950 transition-colors border border-white/10 shadow-md cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          {currentIndex !== undefined && total !== undefined && (
            <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 text-xs font-mono text-cyan-300 border border-white/10 shadow-md">
              Modelo {currentIndex + 1} de {total}
            </div>
          )}
        </div>

        {/* Details Panel */}
        <div className="w-full md:w-80 p-5 sm:p-6 flex flex-col justify-between bg-[#0b1120] border-t md:border-t-0 md:border-l border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-2">
              <span>{photo.category}</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-400">WF Mídias</span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-tight">
              {photo.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 sm:mb-6">
              {photo.description}
            </p>

            <div className="p-3 rounded-xl bg-slate-900/90 border border-white/5 space-y-1.5 mb-4 sm:mb-6 text-xs text-slate-400">
              <div className="flex items-center gap-2 text-slate-200 font-medium">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span>QR Code + Chip NFC Integrado</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Arte impressa em alta definição com corte a laser em acrílico cristal de alta durabilidade.
              </p>
            </div>
          </div>

          <div className="space-y-2.5 pt-2">
            <a
              href={getWhatsAppUrl(`Olá, WF Mídias! Gostei do modelo de placa "${photo.title}" e quero solicitar um orçamento.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-950/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Pedir Este Modelo</span>
            </a>

            <button
              onClick={onClose}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 text-xs font-medium transition-colors cursor-pointer"
            >
              Fechar Visualização
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
