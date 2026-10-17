import React from 'react';
import { Sparkles, HeartHandshake, Award, ArrowRight } from 'lucide-react';

export const BrandStory: React.FC = () => {
  return (
    <section
      id="story"
      className="w-full bg-[#F2ECE4]/40 py-20 md:py-28 border-b border-[#E5DDD1]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column with Asymmetric Plaster Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden shadow-lg bg-[#FAF8F5] border border-[#E5DDD1]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQHKUR4z1wTczidMcvxyiTincWd58O_EYtQAj2NxWJjzJyOhldMiqnzz72nfKnGbovrG6tCkeU0Lwe-fUt59qCPQ0octlJGx4RfbynBcZphCfYEU0M4QbjW-s-_H5kqilMadZwX_1a4xeGHWSgbZCALLVl3Nf71bBNwJX85KkVvd6Yr8QMFY76NYg_IGNYGeC77zU1as53AKFKccjJqMpy1UBJvDXrQ6R2TIoItmZ9sKrV6_8a1p_j6Q"
                alt="Luxury architectural salon interior at AURA Unisex Salon & Studio with backlit arched mirrors and dark walnut panelling"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Overlapping Editorial Quote Plaque */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#FAF8F5] p-5 sm:p-6 border border-[#E5DDD1] shadow-md max-w-xs">
              <span className="font-serif text-lg text-[#18181B] block italic">
                "A sanctuary for deliberate transformation."
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#9B7D56] mt-2 block font-medium">
                DELHI NCR ATELIER
              </span>
            </div>
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 lg:pl-6">
            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#9B7D56] font-semibold">
                About the Atelier
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#18181B] tracking-tight leading-snug">
                Your Neighbourhood Salon. <br />
                <span className="italic font-normal text-[#9B7D56]">A Premium Experience.</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#6E6860] leading-relaxed">
              At AURA, we believe great style starts with understanding you. From precision haircuts and radiant colour to clinical skincare, artisanal grooming, and bespoke bridal styling, every ritual is meticulously calibrated to your facial structure, lifestyle, and aesthetic philosophy.
            </p>

            {/* 3 Craft Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-y border-[#E5DDD1] py-6">
              <div className="space-y-1.5">
                <Sparkles className="w-5 h-5 text-[#9B7D56]" />
                <p className="text-sm font-semibold text-[#18181B]">100% Personalised</p>
                <p className="text-xs text-[#6E6860] leading-relaxed">
                  In-depth consultation before scissors touch hair.
                </p>
              </div>

              <div className="space-y-1.5">
                <HeartHandshake className="w-5 h-5 text-[#9B7D56]" />
                <p className="text-sm font-semibold text-[#18181B]">Cruelty-Free</p>
                <p className="text-xs text-[#6E6860] leading-relaxed">
                  Curated international formulations safe for sensitive scalp.
                </p>
              </div>

              <div className="space-y-1.5">
                <Award className="w-5 h-5 text-[#9B7D56]" />
                <p className="text-sm font-semibold text-[#18181B]">Master Artisans</p>
                <p className="text-xs text-[#6E6860] leading-relaxed">
                  Senior certified specialists in modern Indian hair textures.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#team"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-medium text-[#18181B] border-b-2 border-[#18181B] pb-1 hover:text-[#9B7D56] hover:border-[#9B7D56] transition-all group"
              >
                <span>Meet Our Master Artisans</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
