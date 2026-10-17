import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { SALON_CONFIG } from '../config/salonConfig';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Popover Bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 bg-[#FAF8F5] border border-[#E5DDD1] shadow-xl text-xs text-[#18181B] animate-fadeIn">
          <span>Concierge WhatsApp · Online</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            aria-label="Dismiss tooltip"
            className="text-[#6E6860] hover:text-[#18181B]"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={`https://wa.me/${SALON_CONFIG.whatsappNumber}?text=${encodeURIComponent(
          'Hello Aura Salon, I would like to enquire about your services and appointment availability.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        aria-label="Chat with AURA Salon Concierge on WhatsApp"
        className="w-13 h-13 rounded-full bg-[#18181B] hover:bg-[#2A2A2E] text-[#FAF8F5] shadow-lg flex items-center justify-center border border-[#C5A880]/40 transition-transform hover:scale-105 active:scale-95 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
      >
        <MessageSquare className="w-6 h-6 text-[#C5A880] transition-colors group-hover:text-white" />
        <span className="sr-only">WhatsApp Quick Contact</span>
      </a>
    </div>
  );
};
