import React from 'react';
import { ArrowDown, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { SALON_CONFIG } from '../config/salonConfig';

interface HeroProps {
  onBookClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreClick }) => {
  return (
    <section
      id="home"
      className="relative w-full min-h-[90vh] md:min-h-[920px] flex flex-col justify-between pt-24 pb-12 overflow-hidden bg-[#FAF8F5]"
    >
      {/* Background Cinematic Editorial Image with Scrims */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtTj4Tk4947QAV1qfIJfeIMlhiDbSFC1mz4D6riYDtDNEYMPpuXn4APOPSmwHkwSy6RMKMA6FKeDabl-W8MlCBpsdtNqX1wDuDPciP5jQZjfN_6JT9fTIeb4DcdATf7lk_7o8AltmaWZXXu31WcyuNbmFIw60nX1z4ehWQKEAIbPBXZElLrpYriOhaFS-j9WDWWZ6HHtEG0NUq1vebwF6v2MIEwxsHbWwC69YqPokcMsp0OfnCisVu3g"
          alt="Cinematic editorial photograph of styled clients at AURA Unisex Salon & Studio in a warm plaster atelier with arched mirrors"
          className="w-full h-full object-cover object-center transform scale-100 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
          fetchPriority="high"
        />

        {/* Directional scrims for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/95 via-[#FAF8F5]/80 to-[#FAF8F5]/30 lg:from-[#FAF8F5]/95 lg:via-[#FAF8F5]/70 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-transparent to-[#FAF8F5]/40" />
      </div>

      {/* Top Editorial Eyebrow */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F2ECE4]/90 backdrop-blur-md border border-[#E5DDD1] shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#9B7D56]" />
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-semibold text-[#18181B]">
            {SALON_CONFIG.locationBadge}
          </span>
        </div>
      </div>

      {/* Central Hero Narrative */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 my-auto py-12 md:py-16">
        <div className="max-w-2xl space-y-6">
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl tracking-tight text-[#18181B] leading-[1.08]">
            Style That Feels <br />
            <span className="italic font-normal text-[#9B7D56]">Like You.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#6E6860] max-w-xl leading-relaxed">
            Expert hair artistry, clinical dermal aesthetics, and bespoke grooming designed around your raw individuality. Discover your best look with an atelier team that honours your personal signature.
          </p>

          {/* Dual Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            <button
              type="button"
              onClick={onBookClick}
              className="inline-flex items-center justify-center px-7 py-3.5 bg-[#18181B] text-[#FAF8F5] text-xs uppercase tracking-[0.18em] font-medium shadow-md hover:bg-black active:scale-[0.99] transition-all"
            >
              Book Your Appointment
            </button>
            <button
              type="button"
              onClick={onExploreClick}
              className="inline-flex items-center justify-center px-7 py-3.5 bg-[#F2ECE4]/80 border border-[#18181B] text-[#18181B] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#18181B] hover:text-[#FAF8F5] active:scale-[0.99] transition-all"
            >
              Explore Our Menu
            </button>
          </div>

          {/* Trust Statement */}
          <div className="pt-2 flex items-center gap-2 text-[#6E6860]">
            <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
            <span className="text-xs uppercase tracking-[0.14em]">
              Personalised consultations · Professional care · Transparent pricing
            </span>
          </div>
        </div>
      </div>

      {/* Hero Bottom Indicators */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 border-t border-[#E5DDD1] pt-4 flex items-center justify-between">
        <div className="flex items-center gap-4 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#6E6860]">
          <span className="font-medium text-[#18181B]">01 / 06 ATELIER OVERVIEW</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">INDIRAPURAM · GHAZIABAD</span>
        </div>

        <a
          href="#story"
          className="inline-flex items-center gap-1.5 text-[#18181B] hover:text-[#9B7D56] transition-colors text-[10px] sm:text-[11px] uppercase tracking-[0.16em] font-medium group"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#9B7D56] transform group-hover:translate-y-0.5 transition-transform" />
        </a>
      </div>
    </section>
  );
};
