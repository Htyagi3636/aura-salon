import React from 'react';
import { STYLISTS, Stylist } from '../config/salonConfig';
import { ArrowRight, Sparkles } from 'lucide-react';

interface TeamSectionProps {
  onSelectStylist: (stylistName: string) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onSelectStylist }) => {
  return (
    <section id="team" className="w-full bg-[#FAF8F5] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#E5DDD1] pb-6 gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#9B7D56] font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Artisanal Pedigree</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#18181B] tracking-tight mt-1">
              Master Artisans & Stylists
            </h2>
          </div>
          <p className="text-xs uppercase tracking-[0.16em] text-[#6E6860]">
            Bespoke 1-on-1 consultations with senior specialists
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STYLISTS.map((stylist) => (
            <div
              key={stylist.id}
              className="group flex flex-col bg-[#FAF8F5] border border-[#E5DDD1] overflow-hidden hover:border-[#C5A880] transition-all hover:shadow-md"
            >
              <div className="aspect-[4/5] w-full bg-[#F2ECE4] overflow-hidden relative">
                <img
                  src={stylist.image}
                  alt={`Portrait of ${stylist.name}, ${stylist.role} at AURA Salon`}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-2 left-2 bg-[#18181B]/90 backdrop-blur-sm text-[#FAF8F5] px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] font-medium">
                  {stylist.role}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-xl text-[#18181B]">
                    {stylist.name}
                  </h3>
                  <p className="text-[11px] uppercase tracking-[0.14em] text-[#9B7D56] mt-0.5 font-semibold">
                    {stylist.specialty}
                  </p>
                  <p className="text-xs text-[#6E6860] mt-2.5 leading-relaxed">
                    {stylist.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E5DDD1]">
                  <button
                    type="button"
                    onClick={() => onSelectStylist(stylist.name)}
                    className="w-full py-2.5 bg-[#F2ECE4]/80 hover:bg-[#18181B] hover:text-[#FAF8F5] text-[#18181B] text-xs uppercase tracking-[0.14em] font-medium border border-[#E5DDD1] transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Book with {stylist.name.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
