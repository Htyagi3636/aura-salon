import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryPhoto } from '../config/salonConfig';

interface LightboxModalProps {
  photo: GalleryPhoto | null;
  photos: GalleryPhoto[];
  onClose: () => void;
  onNavigate: (photo: GalleryPhoto) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photo,
  photos,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    if (!photo) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = photos.findIndex((p) => p.id === photo.id);
        const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
        onNavigate(photos[prevIndex]);
      } else if (e.key === 'ArrowRight') {
        const currentIndex = photos.findIndex((p) => p.id === photo.id);
        const nextIndex = (currentIndex + 1) % photos.length;
        onNavigate(photos[nextIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [photo, photos, onClose, onNavigate]);

  if (!photo) return null;

  const currentIndex = photos.findIndex((p) => p.id === photo.id);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    onNavigate(photos[prevIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % photos.length;
    onNavigate(photos[nextIndex]);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#18181B]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close lightbox"
        className="absolute top-6 right-6 p-2 text-[#FAF8F5]/80 hover:text-white bg-[#FAF8F5]/10 rounded-full transition-colors z-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      {photos.length > 1 && (
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous photograph"
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 text-[#FAF8F5]/80 hover:text-white bg-[#FAF8F5]/10 hover:bg-[#FAF8F5]/20 rounded-full transition-colors z-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next button */}
      {photos.length > 1 && (
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next photograph"
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 text-[#FAF8F5]/80 hover:text-white bg-[#FAF8F5]/10 hover:bg-[#FAF8F5]/20 rounded-full transition-colors z-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Modal Image & Caption Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center relative"
      >
        <div className="relative overflow-hidden max-h-[75vh] border border-[#FAF8F5]/15 shadow-2xl">
          <img
            src={photo.image}
            alt={photo.title}
            className="w-auto h-auto max-h-[75vh] max-w-full object-contain mx-auto"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center max-w-lg px-4">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#C5A880] font-semibold">
            {photo.category.toUpperCase()} · {currentIndex + 1} OF {photos.length}
          </p>
          <h3 className="font-serif text-xl sm:text-2xl text-[#FAF8F5] mt-1">
            {photo.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#FAF8F5]/70 mt-1">
            {photo.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};
