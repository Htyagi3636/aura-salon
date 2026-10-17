import React from 'react';
import { PACKAGES, SALON_CONFIG } from '../config/salonConfig';
import { MessageSquare, Sparkles } from 'lucide-react';

export const PackagesSection: React.FC = () => {
  return (
    <section className="w-full bg-[#FAF8F5] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#E5DDD1] pb-6 gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#9B7D56] font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Privileges</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#18181B] tracking-tight mt-1">
              Exclusive Atelier Packages
            </h2>
          </div>
          <p className="text-xs uppercase tracking-[0.16em] text-[#6E6860]">
            Combinations designed for comprehensive salon indulgence
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="p-6 bg-[#FAF8F5] border border-[#E5DDD1] flex flex-col justify-between hover:border-[#C5A880] transition-colors"
            >
              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#9B7D56] font-semibold">
                  {pkg.badge}
                </span>
                <h3 className="font-serif text-xl text-[#18181B]">
                  {pkg.title}
                </h3>
                <div className="my-2">
                  {pkg.priceSub && (
                    <span className="text-xs text-[#6E6860] block font-normal">
                      {pkg.priceSub}
                    </span>
                  )}
                  <p className="font-serif text-3xl text-[#18181B] font-semibold">
                    {pkg.priceDisplay}
                  </p>
                </div>
                <p className="text-xs text-[#6E6860] leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E5DDD1]">
                <a
                  href={`https://wa.me/${SALON_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                    pkg.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] font-semibold text-[#18181B] hover:text-[#9B7D56] transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#9B7D56]" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
