import React from 'react';
import { Check, Sparkles, MessageSquare } from 'lucide-react';
import { SALON_CONFIG } from '../config/salonConfig';

interface BridalStudioProps {
  onBookConsultation: () => void;
}

export const BridalStudio: React.FC<BridalStudioProps> = ({ onBookConsultation }) => {
  const bridalFeatures = [
    {
      title: 'Bridal Makeup & HD Finish',
      desc: 'Airbrush and HD formulas that withstand Delhi humidity & ceremonial lights.',
    },
    {
      title: 'Engagement Looks & Glow',
      desc: 'Subtle, modern radiance matched harmoniously with pastel or jewel-toned attire.',
    },
    {
      title: 'Reception Styling & Timeless Updos',
      desc: 'Glamorous red-carpet finishes for grand entrance celebrations.',
    },
    {
      title: 'Bridal Hair Couture & Florals',
      desc: 'Fresh jasmine mogra and baby’s breath architectural placement.',
    },
    {
      title: 'Couture Saree & Dupatta Draping',
      desc: 'Flawless pin-work engineered for grace, comfort, and ease of movement.',
    },
    {
      title: 'Family & Bridal Party Suite',
      desc: 'Coordinated styling schedules for mothers, sisters, and wedding party.',
    },
  ];

  return (
    <section
      id="bridal"
      className="w-full bg-[#171719] text-[#FAF8F5] py-20 md:py-28 relative overflow-hidden"
    >
      {/* Ambient Bronze Accent Glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#C5A880]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#C5A880]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-[0.24em] text-[#C5A880] font-semibold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Haute Bridal Suite</span>
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#FAF8F5] tracking-tight leading-tight">
                Your Wedding. <br />
                <span className="italic font-light text-[#C5A880]">
                  Your Kind of Beautiful.
                </span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#FAF8F5]/80 max-w-xl leading-relaxed">
              Personalised bridal hair and makeup for weddings, engagements, cocktail sangeets, receptions, and intimate celebrations. Every look is planned around your lehenga, skin tone, lighting conditions, and personal comfort.
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {bridalFeatures.map((feat) => (
                <div key={feat.title} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-none bg-[#C5A880]/20 border border-[#C5A880] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#C5A880]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#FAF8F5]">
                      {feat.title}
                    </p>
                    <p className="text-xs text-[#FAF8F5]/60 mt-0.5 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dual Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-6">
              <button
                type="button"
                onClick={onBookConsultation}
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[#C5A880] text-[#18181B] text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#FAF8F5] transition-colors shadow-md"
              >
                Book Bridal Consultation
              </button>

              <a
                href={`https://wa.me/${SALON_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Aura Salon, I would like to enquire about your Bridal & Wedding Packages.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-[#FAF8F5]/30 text-[#FAF8F5] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#FAF8F5]/10 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Enquire via WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Bridal Imagery Diptych */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6">
            <div className="aspect-[3/5] bg-[#2A2A2E] overflow-hidden border border-[#FAF8F5]/10">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqXlAqfEchTyOWtx5-7jAWh1MIoKEY-Az-7HifVAt-fhUMCzMbuoTlyDFw2GN1-K67IQmzWGVbdASBSsdZ2xPCDVrZTjOWZP3d25r0_vwahv7Ae-B28V-V5J7Pv8ljc8W0jf0vYAt2R4Sk-4zbq19LGJM9w57YxhhJHin0clpcAjVChPGVEHcndHj7hdZ02rEq5FNVejtsKrK9uCfMSA71QuKbmNcmZDXtYq2goVzBIMKoq3-Lxz9Y_Q"
                alt="Bridal suite dressing ritual at AURA Salon"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="aspect-[3/5] bg-[#2A2A2E] overflow-hidden border border-[#FAF8F5]/10 mt-8 sm:mt-12">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZFpT3bOZviOTDA1cpnFgeA8y9CJqaaUzXN1KRMC-0PdG0MTkciIqFWZuFSTaHTyyk9SnQubKYszLQhhIHLTy4oqzCtw_AJbH0PQexrJnJsVkdOFSqNGbh3P-7CgB_kNLIv2PGHnTXZtggfdIfmNSd4UJzX0XUm5DTUmEVSX2B4qMKf0xxH6dQrVFH-Mfw3suDTCS9PB1AuKBOaFB0Bwb4IkS1AFWLMTkE8ECqvfNgpPj0I0A4zxI9Gg"
                alt="Close-up of bridal makeup and jasmine floral hair braid"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
