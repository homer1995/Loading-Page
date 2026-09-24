import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { SLIDES_CONFIG } from '../data/company';

interface SlideControllerProps {
  currentSlideIndex: number;
  totalSlides: number;
  onNavigateToSlide: (index: number) => void;
  onNextSlide: () => void;
  onPrevSlide: () => void;
}

export const SlideController: React.FC<SlideControllerProps> = ({
  currentSlideIndex,
  totalSlides,
  onNavigateToSlide,
  onNextSlide,
  onPrevSlide
}) => {
  return (
    <>
      {/* Right-side vertical dots (Desktop / Tablet) */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col items-center gap-2.5 bg-slate-950/60 p-2 rounded-full backdrop-blur-md border border-white/10 shadow-xl">
        {SLIDES_CONFIG.map((slide, idx) => {
          const isActive = currentSlideIndex === idx;
          return (
            <button
              key={slide.id}
              onClick={() => onNavigateToSlide(idx)}
              className="relative group p-1.5 focus:outline-none"
              aria-label={`Ir para ${slide.title}`}
            >
              <div 
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-3 h-3 bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)] scale-110'
                    : 'bg-slate-600 hover:bg-slate-400 group-hover:scale-125'
                }`}
              />

              {/* Tooltip on hover */}
              <div className="absolute right-7 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded bg-slate-900 border border-white/10 text-[11px] font-medium text-slate-200 whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 shadow-lg">
                <span className="text-cyan-400 font-mono mr-1.5">{String(idx + 1).padStart(2, '0')}</span>
                {slide.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Floating Bottom Navigation Arrows (Mobile and Desktop) */}
      <div className="fixed bottom-4 right-4 z-30 flex items-center gap-1.5 bg-slate-900/90 backdrop-blur-lg p-1.5 rounded-full border border-white/10 shadow-2xl">
        <button
          onClick={onPrevSlide}
          disabled={currentSlideIndex === 0}
          aria-label="Slide anterior"
          className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 disabled:opacity-30 disabled:pointer-events-none transition-colors"
        >
          <ChevronUp className="w-4 h-4" />
        </button>

        <span className="text-[11px] font-mono text-cyan-300 px-2 font-semibold select-none">
          {String(currentSlideIndex + 1).padStart(2, '0')}/{String(totalSlides).padStart(2, '0')}
        </span>

        <button
          onClick={onNextSlide}
          disabled={currentSlideIndex === totalSlides - 1}
          aria-label="Próximo slide"
          className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 disabled:opacity-30 disabled:pointer-events-none transition-colors"
        >
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </>
  );
};
