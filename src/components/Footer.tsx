import React, { useState } from 'react';
import { SALON_CONFIG } from '../config/salonConfig';
import { PolicyModal } from './PolicyModal';
import { MapPin, Phone, Clock, MessageSquare, Instagram, ArrowUp } from 'lucide-react';

interface FooterProps {
  onBookClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBookClick }) => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | 'etiquette' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="w-full bg-[#141416] text-[#FAF8F5] pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">
            {/* Brand Column */}
            <div className="lg:col-span-4 flex flex-col justify-between pr-0 lg:pr-6 space-y-6">
              <div className="space-y-4">
                <div className="flex flex-col">
                  <span className="font-serif text-3xl tracking-[0.22em] text-[#FAF8F5] uppercase">
                    {SALON_CONFIG.name}
                  </span>
                  <span className="text-[10px] tracking-[0.2em] text-[#C5A880] uppercase -mt-0.5 font-medium">
                    UNISEX SALON & STUDIO
                  </span>
                </div>
                <p className="font-serif text-lg italic text-[#FAF8F5]/80 font-light">
                  {SALON_CONFIG.tagline}
                </p>
                <p className="text-xs text-[#FAF8F5]/60 max-w-sm leading-relaxed">
                  An architectural sanctuary tailored for progressive haircare, clinical dermal aesthetics, and bespoke bridal grooming in the heart of Delhi NCR.
                </p>
              </div>

              {/* Digital Channels */}
              <div className="pt-2">
                <span className="text-[10px] uppercase tracking-[0.16em] text-[#C5A880] block mb-2 font-medium">
                  Digital Channels
                </span>
                <div className="flex items-center gap-5">
                  <a
                    href={SALON_CONFIG.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-[0.14em] text-[#FAF8F5]/70 hover:text-[#C5A880] transition-colors flex items-center gap-1.5"
                  >
                    <Instagram className="w-4 h-4 text-[#C5A880]" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href={`https://wa.me/${SALON_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                      'Hello Aura Salon, I would like to enquire about your services.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-[0.14em] text-[#FAF8F5]/70 hover:text-[#C5A880] transition-colors flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-4 h-4 text-[#C5A880]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Atelier Navigation */}
            <div className="lg:col-span-2 flex flex-col space-y-4">
              <span className="text-[10px] uppercase tracking-[0.18em] text-[#C5A880] font-semibold">
                Atelier Navigation
              </span>
              <ul className="space-y-2.5 text-xs text-[#FAF8F5]/70">
                <li>
                  <a href="#home" className="hover:text-[#FAF8F5] transition-colors">
                    Home Overview
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#FAF8F5] transition-colors">
                    Curated Menu
                  </a>
                </li>
                <li>
                  <a href="#team" className="hover:text-[#FAF8F5] transition-colors">
                    Master Artisans
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-[#FAF8F5] transition-colors">
                    Lookbook Folio
                  </a>
                </li>
                <li>
                  <a href="#bridal" className="hover:text-[#FAF8F5] transition-colors">
                    Bridal Suite
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#FAF8F5] transition-colors">
                    Location & Inquiries
                  </a>
                </li>
              </ul>
            </div>

            {/* Disciplines */}
            <div className="lg:col-span-3 flex flex-col space-y-4">
              <span className="text-[10px] uppercase tracking-[0.18em] text-[#C5A880] font-semibold">
                Curated Disciplines
              </span>
              <ul className="space-y-2.5 text-xs text-[#FAF8F5]/70">
                <li>
                  <a href="#services" className="hover:text-[#FAF8F5] transition-colors">
                    Architectural Hair Sculpting
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#FAF8F5] transition-colors">
                    Balayage & Editorial Glossing
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#FAF8F5] transition-colors">
                    Clinical Dermal Aesthetics
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#FAF8F5] transition-colors">
                    Restorative Scalp Rituals
                  </a>
                </li>
                <li>
                  <a href="#bridal" className="hover:text-[#FAF8F5] transition-colors">
                    Haute Couture Bridal Design
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#FAF8F5] transition-colors">
                    Gentlemen's Precision Grooming
                  </a>
                </li>
              </ul>
            </div>

            {/* Studio Flagship */}
            <div className="lg:col-span-3 flex flex-col space-y-4">
              <span className="text-[10px] uppercase tracking-[0.18em] text-[#C5A880] font-semibold">
                Studio Flagship
              </span>
              <div className="space-y-3.5 text-xs text-[#FAF8F5]/70">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    {SALON_CONFIG.address}
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <p>{SALON_CONFIG.phoneDisplay}</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <p>{SALON_CONFIG.hours}</p>
                </div>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={onBookClick}
                    className="inline-flex items-center gap-1.5 border-b border-[#C5A880] pb-0.5 text-xs uppercase tracking-[0.16em] text-[#C5A880] hover:text-[#FAF8F5] transition-colors font-medium"
                  >
                    <span>Schedule Atelier Visit →</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Legal Links */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF8F5]/40">
            <p>
              © 2025–2026 {SALON_CONFIG.fullName}. Crafted with editorial precision. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setModalType('privacy')}
                className="hover:text-[#FAF8F5] transition-colors"
              >
                Privacy Policy
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => setModalType('terms')}
                className="hover:text-[#FAF8F5] transition-colors"
              >
                Terms of Ritual
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => setModalType('etiquette')}
                className="hover:text-[#FAF8F5] transition-colors"
              >
                Salon Etiquette
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Scroll to top of page"
                className="hover:text-[#C5A880] transition-colors flex items-center gap-1"
              >
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Policy Modal */}
      <PolicyModal type={modalType} onClose={() => setModalType(null)} />
    </>
  );
};
