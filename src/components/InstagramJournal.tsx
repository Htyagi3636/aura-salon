import React from 'react';
import { INSTAGRAM_PHOTOS, SALON_CONFIG } from '../config/salonConfig';
import { Instagram, Sparkles } from 'lucide-react';

export const InstagramJournal: React.FC = () => {
  return (
    <section className="w-full bg-[#F2ECE4]/30 py-20 md:py-28 border-t border-[#E5DDD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#9B7D56] font-semibold flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Social Journal</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#18181B] tracking-tight">
            Follow Your Style Story
          </h2>
          <a
            href={SALON_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-[#9B7D56] tracking-[0.16em] uppercase font-semibold hover:underline"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>{SALON_CONFIG.instagramHandle}</span>
          </a>
        </div>

        {/* 6 Curated Instagram Snapshots */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_PHOTOS.map((item) => (
            <a
              key={item.id}
              href={SALON_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square bg-[#F2ECE4] overflow-hidden border border-[#E5DDD1] block"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#18181B]/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-[#FAF8F5] p-3 text-center">
                <span className="text-[11px] uppercase tracking-wider font-medium leading-snug">
                  {item.caption}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-12 flex justify-center">
          <a
            href={SALON_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#18181B] text-[#FAF8F5] text-xs uppercase tracking-[0.18em] font-medium hover:bg-black transition-colors shadow-sm"
          >
            <Instagram className="w-4 h-4 text-[#C5A880]" />
            <span>Follow Us on Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};
