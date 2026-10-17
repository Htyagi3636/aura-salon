import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../config/salonConfig';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F2ECE4]/40 py-20 md:py-28 border-y border-[#E5DDD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#9B7D56] font-semibold">
            Client Testimonials
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#18181B] tracking-tight">
            Loved by Our Clients.
          </h2>
          <p className="text-sm text-[#6E6860]">
            Reflections from patrons across Indirapuram, Noida, and Delhi NCR
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#FAF8F5] p-6 sm:p-8 border border-[#E5DDD1] flex flex-col justify-between shadow-sm hover:border-[#C5A880] transition-colors"
            >
              <div className="space-y-4">
                {/* 5-star rating */}
                <div className="flex items-center gap-1 text-[#9B7D56]">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="font-serif text-lg text-[#18181B] italic leading-snug font-normal">
                  "{testimonial.quote}"
                </p>

                <p className="text-xs sm:text-sm text-[#6E6860] leading-relaxed">
                  {testimonial.body}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E5DDD1] flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-[#18181B]">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-[#6E6860] mt-0.5">
                    {testimonial.location}
                  </p>
                </div>
                <span className="text-[10px] uppercase tracking-[0.14em] text-[#9B7D56] font-semibold">
                  {testimonial.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
