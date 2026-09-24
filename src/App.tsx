import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { ImageModal } from './components/ImageModal';
import { HeroSection } from './components/sections/HeroSection';
import { GoogleReviewsSection } from './components/sections/GoogleReviewsSection';
import { PlatesGallerySection } from './components/sections/PlatesGallerySection';
import { GoogleBusinessSection } from './components/sections/GoogleBusinessSection';
import { BioSiteSection } from './components/sections/BioSiteSection';
import { FinalCtaSection } from './components/sections/FinalCtaSection';
import { FooterSection } from './components/sections/FooterSection';
import { REAL_PLATES_GALLERY, PlatePhoto, SLIDES_CONFIG } from './data/company';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLElement | null)[]>([]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [modalPhoto, setModalPhoto] = useState<PlatePhoto | null>(null);
  const [modalPhotoIndex, setModalPhotoIndex] = useState<number>(0);

  // Smoothly scroll to specific slide index
  const scrollToSlide = useCallback((index: number) => {
    if (index < 0 || index >= SLIDES_CONFIG.length) return;
    const targetElement = slideRefs.current[index];
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setCurrentSlideIndex(index);
    }
  }, []);

  const handleNextSlide = useCallback(() => {
    if (currentSlideIndex < SLIDES_CONFIG.length - 1) {
      scrollToSlide(currentSlideIndex + 1);
    }
  }, [currentSlideIndex, scrollToSlide]);

  const handlePrevSlide = useCallback(() => {
    if (currentSlideIndex > 0) {
      scrollToSlide(currentSlideIndex - 1);
    }
  }, [currentSlideIndex, scrollToSlide]);

  // Track active slide with IntersectionObserver
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.45) {
            const indexStr = entry.target.getAttribute('data-slide-index');
            if (indexStr !== null) {
              const idx = parseInt(indexStr, 10);
              if (!isNaN(idx)) {
                setCurrentSlideIndex(idx);
              }
            }
          }
        });
      },
      {
        root: container,
        threshold: [0.45, 0.7],
      }
    );

    slideRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (modalPhoto !== null) return;
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        handleNextSlide();
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNextSlide, handlePrevSlide, modalPhoto]);

  // Modal navigation helpers
  const handleOpenPhotoModal = (photo: PlatePhoto, index: number) => {
    setModalPhoto(photo);
    setModalPhotoIndex(index);
  };

  const handleNextModalPhoto = () => {
    const nextIdx = (modalPhotoIndex + 1) % REAL_PLATES_GALLERY.length;
    setModalPhotoIndex(nextIdx);
    setModalPhoto(REAL_PLATES_GALLERY[nextIdx]);
  };

  const handlePrevModalPhoto = () => {
    const prevIdx = (modalPhotoIndex - 1 + REAL_PLATES_GALLERY.length) % REAL_PLATES_GALLERY.length;
    setModalPhotoIndex(prevIdx);
    setModalPhoto(REAL_PLATES_GALLERY[prevIdx]);
  };

  return (
    <div className="relative bg-[#080B10] text-slate-100 min-h-screen overflow-hidden">
      {/* Top Navigation Bar */}
      <Header
        currentSlideIndex={currentSlideIndex}
        totalSlides={SLIDES_CONFIG.length}
        onNavigateToSlide={scrollToSlide}
      />

      {/* Main Presentation Slides Container */}
      <main
        ref={containerRef}
        className="snap-presentation select-text"
        tabIndex={0}
        aria-label="Apresentação Comercial WF Mídias"
      >
        {/* Slide 01: HERO */}
        <div
          ref={(el) => { slideRefs.current[0] = el; }}
          data-slide-index="0"
          id="hero"
        >
          <HeroSection onExploreClick={() => scrollToSlide(1)} />
        </div>

        {/* Slide 02: PLACAS DE AVALIAÇÃO GOOGLE (QR CODE + NFC) */}
        <div
          ref={(el) => { slideRefs.current[1] = el; }}
          data-slide-index="1"
          id="placas-avaliacao"
        >
          <GoogleReviewsSection />
        </div>

        {/* Slide 03: GALERIA DE PLACAS REAIS */}
        <div
          ref={(el) => { slideRefs.current[2] = el; }}
          data-slide-index="2"
          id="galeria-placas"
        >
          <PlatesGallerySection onOpenPhotoModal={handleOpenPhotoModal} />
        </div>

        {/* Slide 04: GOOGLE MEU NEGÓCIO */}
        <div
          ref={(el) => { slideRefs.current[3] = el; }}
          data-slide-index="3"
          id="google-meu-negocio"
        >
          <GoogleBusinessSection />
        </div>

        {/* Slide 05: CRIAÇÃO DE BIOSITES (COM MODELOS) */}
        <div
          ref={(el) => { slideRefs.current[4] = el; }}
          data-slide-index="4"
          id="biosite"
        >
          <BioSiteSection />
        </div>

        {/* Slide 06: CTA FINAL */}
        <div
          ref={(el) => { slideRefs.current[5] = el; }}
          data-slide-index="5"
          id="cta-final"
        >
          <FinalCtaSection />
        </div>

        {/* Slide 07: RODAPÉ */}
        <div
          ref={(el) => { slideRefs.current[6] = el; }}
          data-slide-index="6"
          id="rodape"
        >
          <FooterSection onBackToTop={() => scrollToSlide(0)} />
        </div>
      </main>

      {/* Lightbox Modal for Real Plates High-Resolution Inspection */}
      <ImageModal
        photo={modalPhoto}
        currentIndex={modalPhotoIndex}
        total={REAL_PLATES_GALLERY.length}
        onClose={() => setModalPhoto(null)}
        onNext={handleNextModalPhoto}
        onPrev={handlePrevModalPhoto}
      />
    </div>
  );
}
