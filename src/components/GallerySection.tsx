import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryPhoto } from '../config/salonConfig';
import { LightboxModal } from './LightboxModal';
import { Maximize2, Sparkles } from 'lucide-react';

type GalleryFilter = 'all' | 'cuts' | 'colour' | 'bridal' | 'studio';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const filters: { key: GalleryFilter; label: string }[] = [
    { key: 'all', label: 'All Portfolio' },
    { key: 'cuts', label: 'Cuts & Fades' },
    { key: 'colour', label: 'Balayage & Colour' },
    { key: 'bridal', label: 'Bridal Couture' },
    { key: 'studio', label: 'Studio Architecture' },
  ];

  const filteredPhotos =
    activeFilter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((p) => p.category === activeFilter);

  return (
    <section id="gallery" className="w-full bg-[#FAF8F5] py-20 md:py-28 border-t border-[#E5DDD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#E5DDD1] gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#9B7D56] font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Portfolio</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#18181B] tracking-tight mt-1">
              Real Style. Endless Possibilities.
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {filters.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setActiveFilter(f.key)}
                className={`px-3.5 py-1.5 text-[11px] uppercase tracking-[0.16em] font-medium transition-all whitespace-nowrap ${
                  activeFilter === f.key
                    ? 'bg-[#18181B] text-[#FAF8F5]'
                    : 'bg-[#F2ECE4]/80 text-[#18181B] hover:bg-[#F2ECE4]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative aspect-[4/5] bg-[#F2ECE4] overflow-hidden border border-[#E5DDD1] cursor-pointer"
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Hover Scrim & Caption Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#18181B]/85 via-[#18181B]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-[#FAF8F5]">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A880] font-semibold">
                    {photo.category.toUpperCase()}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
                <h3 className="font-serif text-xl text-[#FAF8F5] mt-1">
                  {photo.title}
                </h3>
                <p className="text-xs text-[#FAF8F5]/80 mt-0.5 line-clamp-2">
                  {photo.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="pt-12 flex justify-center">
          <a
            href={`https://instagram.com`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 border border-[#18181B] text-[#18181B] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#18181B] hover:text-[#FAF8F5] transition-colors"
          >
            Explore Complete Instagram Feed
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        photo={selectedPhoto}
        photos={filteredPhotos}
        onClose={() => setSelectedPhoto(null)}
        onNavigate={(photo) => setSelectedPhoto(photo)}
      />
    </section>
  );
};
