import React from 'react';
import { SALON_CONFIG } from '../config/salonConfig';
import { MapPin, Phone, Mail, Clock, Navigation, MessageSquare, Instagram, ExternalLink } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="w-full bg-[#FAF8F5] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#9B7D56] font-semibold">
                Flagship Atelier
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#18181B] tracking-tight">
                Visit Our Sanctuary
              </h2>
              <p className="text-sm text-[#6E6860] leading-relaxed">
                Located at Gulmohar Greens, Mohan Nagar, welcoming guests from across Ghaziabad and the Delhi NCR.
              </p>
            </div>

            <div className="space-y-5 pt-4 border-y border-[#E5DDD1] py-6 text-sm">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#9B7D56] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#18181B]">Studio Address</p>
                  <p className="text-[#6E6860] mt-0.5 leading-relaxed">
                    {SALON_CONFIG.address}
                  </p>
                  <p className="text-xs text-[#9B7D56] mt-0.5">
                    {SALON_CONFIG.landmark}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-[#9B7D56] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#18181B]">Direct Telephone</p>
                  <a
                    href={`tel:${SALON_CONFIG.phoneClean}`}
                    className="text-[#6E6860] hover:text-[#18181B] transition-colors mt-0.5 block"
                  >
                    {SALON_CONFIG.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Mail className="w-5 h-5 text-[#9B7D56] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#18181B]">Electronic Mail</p>
                  <a
                    href={`mailto:${SALON_CONFIG.email}`}
                    className="text-[#6E6860] hover:text-[#18181B] transition-colors mt-0.5 block"
                  >
                    {SALON_CONFIG.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-[#9B7D56] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#18181B]">Atelier Hours</p>
                  <p className="text-[#6E6860] mt-0.5">
                    {SALON_CONFIG.hours}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={SALON_CONFIG.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 bg-[#18181B] text-[#FAF8F5] text-xs uppercase tracking-[0.14em] font-medium hover:bg-black transition-colors"
              >
                <Navigation className="w-4 h-4 text-[#C5A880]" />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${SALON_CONFIG.phoneClean}`}
                className="flex items-center justify-center gap-2 py-3 px-4 border border-[#18181B] text-[#18181B] text-xs uppercase tracking-[0.14em] font-medium hover:bg-[#F2ECE4] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#9B7D56]" />
                <span>Call Salon</span>
              </a>

              <a
                href={`https://wa.me/${SALON_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Aura Salon, I would like to enquire about your services.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 border border-[#18181B] text-[#18181B] text-xs uppercase tracking-[0.14em] font-medium hover:bg-[#F2ECE4] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#9B7D56]" />
                <span>Chat WhatsApp</span>
              </a>

              <a
                href={SALON_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 border border-[#18181B] text-[#18181B] text-xs uppercase tracking-[0.14em] font-medium hover:bg-[#F2ECE4] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#9B7D56]" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Map Preview Column */}
          <div className="lg:col-span-7 h-96 lg:h-auto min-h-[380px] relative border border-[#E5DDD1] overflow-hidden shadow-sm group">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnQ0hIw3BxeyupPiE87WV2b80-h9ObxHLCWZDE6M3rd_WTrA9E69RIsx_KcLy3G_0HYXygcOCTYNMw0qWAMSewlRMNxEolTaywOlSKan8EdUcoSsoqJhq-JyG-0Jw9ODlbstXbfHbCELtKugz9pSDZOqK888a7dJCiBU2mx3Y_mSjTy10pXvfZZqoLXPd9EcNoijUKdj3ckUKE7PKmPo8ND-URjYlfPoCafFQrCkXqLy9aQwci5K2EVg"
              alt="Architectural location map of AURA Unisex Salon & Studio in Indirapuram, Ghaziabad"
              className="w-full h-full object-cover object-center filter grayscale-[0.15] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              referrerPolicy="no-referrer"
            />

            {/* Ambient Map Scrim */}
            <div className="absolute inset-0 bg-[#F2ECE4]/10 pointer-events-none" />

            {/* Pin Overlay Indicator */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-[#FAF8F5] p-4 sm:p-5 border border-[#E5DDD1] shadow-xl flex items-center gap-3.5 pointer-events-auto">
                <div className="w-9 h-9 rounded-full bg-[#18181B] text-[#FAF8F5] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#C5A880]" />
                </div>
                <div>
                  <p className="font-serif text-base font-bold text-[#18181B] leading-none">
                    {SALON_CONFIG.fullName}
                  </p>
                  <p className="text-xs text-[#6E6860] mt-1">
                    Gulmohar Greens · Mohan Nagar, Ghaziabad
                  </p>
                  <a
                    href={SALON_CONFIG.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.14em] text-[#9B7D56] hover:text-[#18181B] font-semibold mt-1.5"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
