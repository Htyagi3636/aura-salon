import React, { useState } from 'react';
import { Scissors, User, Droplets, Sparkles, Clock, ArrowRight, Info } from 'lucide-react';
import { SERVICES, ServiceItem } from '../config/salonConfig';

interface ServicesMenuProps {
  onSelectService: (serviceName: string) => void;
}

type CategoryTab = 'all' | 'hair' | 'grooming' | 'skin' | 'bridal';

export const ServicesMenu: React.FC<ServicesMenuProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<CategoryTab>('all');

  const categories = [
    { key: 'all' as CategoryTab, label: 'All Disciplines' },
    { key: 'hair' as CategoryTab, label: 'Hair Services' },
    { key: 'grooming' as CategoryTab, label: "Men's Grooming" },
    { key: 'skin' as CategoryTab, label: 'Skin & Beauty' },
    { key: 'bridal' as CategoryTab, label: 'Bridal & Occasion' },
  ];

  const filteredServices =
    activeTab === 'all'
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeTab);

  // Group by category when 'all' is selected for haute editorial layout
  const groupedCategories: {
    category: 'hair' | 'grooming' | 'skin' | 'bridal';
    title: string;
    icon: React.ReactNode;
    subtitle: string;
    items: ServiceItem[];
  }[] = [
    {
      category: 'hair',
      title: 'Hair Services',
      icon: <Scissors className="w-5 h-5 text-[#9B7D56]" />,
      subtitle: 'Category 01 · Architectural cuts & dimensional colour',
      items: SERVICES.filter((s) => s.category === 'hair'),
    },
    {
      category: 'grooming',
      title: "Men's Grooming",
      icon: <User className="w-5 h-5 text-[#9B7D56]" />,
      subtitle: 'Category 02 · Precision fades & hot lather beard craft',
      items: SERVICES.filter((s) => s.category === 'grooming'),
    },
    {
      category: 'skin',
      title: 'Skin & Beauty',
      icon: <Droplets className="w-5 h-5 text-[#9B7D56]" />,
      subtitle: 'Category 03 · Cellular facials & therapeutic care',
      items: SERVICES.filter((s) => s.category === 'skin'),
    },
    {
      category: 'bridal',
      title: 'Bridal & Occasion',
      icon: <Sparkles className="w-5 h-5 text-[#9B7D56]" />,
      subtitle: 'Category 04 · Couture HD makeup & floral updo styling',
      items: SERVICES.filter((s) => s.category === 'bridal'),
    },
  ];

  return (
    <section id="services" className="w-full bg-[#FAF8F5] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title and Currency Info */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#E5DDD1] gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#9B7D56] font-semibold">
              Haute Coiffure & Aesthetics
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#18181B] tracking-tight mt-1">
              Curated Salon Menu & Pricing
            </h2>
            <p className="text-sm text-[#6E6860] mt-1.5">
              Honest, transparent pricing in Indian Rupees (₹) tailored for modern Delhi NCR clients.
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs text-[#6E6860]">
            <Info className="w-4 h-4 text-[#C5A880]" />
            <span>Inclusive of professional consultations & luxury wash</span>
          </div>
        </div>

        {/* Filter Tabs (Interactive Segmented Buttons) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-all whitespace-nowrap ${
                activeTab === tab.key
                  ? 'bg-[#18181B] text-[#FAF8F5] shadow-sm'
                  : 'bg-[#F2ECE4]/70 text-[#18181B] hover:bg-[#F2ECE4]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Layout */}
        {activeTab === 'all' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {groupedCategories.map((group) => (
              <div
                key={group.category}
                className="bg-[#FAF8F5] border border-[#E5DDD1] p-6 sm:p-8 flex flex-col justify-between hover:border-[#C5A880] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#E5DDD1] pb-4 mb-6">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#9B7D56] font-medium">
                        {group.subtitle}
                      </span>
                      <h3 className="font-serif text-2xl text-[#18181B] mt-0.5">
                        {group.title}
                      </h3>
                    </div>
                    {group.icon}
                  </div>

                  <ul className="space-y-6">
                    {group.items.map((service) => (
                      <li
                        key={service.id}
                        className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-[#E5DDD1]/50 pb-4 last:border-b-0"
                      >
                        <div className="space-y-1">
                          <div className="flex items-baseline gap-2">
                            <h4 className="text-base font-semibold text-[#18181B]">
                              {service.name}
                            </h4>
                          </div>
                          <p className="text-xs text-[#6E6860] leading-relaxed">
                            {service.description}
                          </p>
                          <div className="flex items-center gap-1.5 text-[11px] text-[#9B7D56] pt-0.5">
                            <Clock className="w-3 h-3" />
                            <span>{service.duration}</span>
                          </div>
                        </div>

                        <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 shrink-0 pt-1 sm:pt-0">
                          <span className="text-sm font-semibold text-[#18181B] whitespace-nowrap">
                            Starting ₹{service.startingPrice.toLocaleString('en-IN')}
                          </span>
                          <button
                            type="button"
                            onClick={() => onSelectService(service.name)}
                            className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#9B7D56] hover:text-[#18181B] inline-flex items-center gap-1"
                          >
                            <span>Book</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E5DDD1] flex items-center justify-between">
                  <span className="text-xs text-[#6E6860]">
                    In-depth scalp & skin diagnosis included
                  </span>
                  <button
                    type="button"
                    onClick={() => onSelectService(group.title)}
                    className="text-xs uppercase tracking-[0.16em] font-semibold text-[#18181B] hover:text-[#9B7D56] inline-flex items-center gap-1"
                  >
                    <span>Reserve Discipline</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-[#FAF8F5] border border-[#E5DDD1] p-6 flex flex-col justify-between hover:border-[#C5A880] transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-xl text-[#18181B]">
                      {service.name}
                    </h3>
                    <span className="text-base font-semibold text-[#18181B] whitespace-nowrap">
                      Starting ₹{service.startingPrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <p className="text-sm text-[#6E6860] leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-[#9B7D56] pt-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Estimated: {service.duration}</span>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-[#E5DDD1] flex items-center justify-between">
                  <span className="text-xs text-[#6E6860]">
                    Personalised consultation
                  </span>
                  <button
                    type="button"
                    onClick={() => onSelectService(service.name)}
                    className="px-4 py-2 bg-[#18181B] text-[#FAF8F5] text-xs uppercase tracking-[0.14em] font-medium hover:bg-[#2A2A2E] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Book Service</span>
                    <ArrowRight className="w-3 h-3 text-[#C5A880]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pricing Transparency Notice */}
        <div className="mt-10 p-5 sm:p-6 bg-[#F2ECE4]/60 border border-[#E5DDD1] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-[#9B7D56] shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-[#6E6860] leading-relaxed">
              <strong className="text-[#18181B] font-semibold">Pricing Transparency:</strong> Prices are indicative and may vary depending on hair length, density, technical formulas, and bespoke styling requirements. Your master stylist will confirm the precise quote prior to commencing service.
            </p>
          </div>

          <a
            href="#booking"
            className="whitespace-nowrap px-6 py-2.5 bg-[#18181B] text-[#FAF8F5] text-xs uppercase tracking-[0.16em] font-medium hover:bg-black transition-colors shrink-0"
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    </section>
  );
};
