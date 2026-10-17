import React from 'react';

export const HairArtistry: React.FC = () => {
  const panels = [
    {
      step: '01 · Routine & Precision',
      title: 'Everyday Hair & Grooming',
      description:
        'Precision cuts, low-maintenance daily styling, beard tapering, and texture management that looks sharp straight out of bed.',
      tag1: 'Low Maintenance',
      tag2: 'Daily Ease',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCynN-q-2mURwDF1kVFuMSssPAOnaoC88WMKJ-9mJ9rH5Sp2gyZDasXiJ1WeD0dWtYcb5XKtsiHCqz9-ogPYbJXuCXpUsQcquv1AaGeUjH9-bhGI0nh3QgHLIpiDkLvNYDR2oZCUc8FBdJxYhvdbbpI5rkpXiyl5jBFg6C5WVoiJFFxaeBcVu0oMGyU2XKJRi0UzNzAWCvvDFILvBgl2ZjxrAr9xpjqM2uSXEfOCppmD_gy_0UKJQ89iw',
      alt: 'Portrait of stylish Indian man with sculpted fade and beard in architectural studio',
    },
    {
      step: '02 · Celebration & Glam',
      title: 'Festive & Party Styling',
      description:
        'Diwali cocktail glam, textured editorial updos, signature bouncy blowouts, and radiant skin preps built for high-energy Delhi evenings.',
      tag1: 'Cocktail Glow',
      tag2: 'Long-Wear',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBnuY3H2VzUp0F5j43naMl0GFhB8o6IFVNU1okwLDG9Hbhu1mjDPFEFUNZtUaum28Se3Yl6RxpG0ebxaEaW4kuE3KbB8Gwvgs1_-Y_5FDRUtpUfPrerD1fLIwkwibhEaBrQEPTziBFnFF0Vh-Jw_XDhsMkxMHwmKdEG6I7brpmxSNodohtzxW-fLaBAcjjJEEg3ZJGSQj34G9snnQv2nqJfkrD4jml0r5ziKrE2Kc26YNcwnUSAZU0sOg',
      alt: 'Editorial portrait of Indian woman with dewy skin and soft textured waves in ethnic attire',
    },
    {
      step: '03 · Haute Bridal',
      title: 'Bridal Beauty Suite',
      description:
        'Couture wedding hair, bespoke saree and dupatta draping, radiant HD makeup, and complete bridal party choreography.',
      tag1: 'Bespoke Suite',
      tag2: 'Photo-Ready',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDWu8tLexa9yuojM-i8N-Ap-jHcUB7sAvIaltWfD_e2oe8u_-TK8xnBS5CbH2QbS7OLyEQtYn8ruMbXN4DWc9IvYrtGE73VfdEoiCbqpcZzN40aomx8rnuprcLOYaIK0oEg_LGqFiP1iIYWFQf-5_j7LHhpm0pf7X6kwcEH0W8_NUBVF2XBlO643DYZXPUI-Rpe-r-hRi1XX6uWyeJOMyHzHm_tFV2QI9ClwweFR0PHCgqJN5E4B0jPfw',
      alt: 'Editorial portrait of Indian bride with couture hair florals and flawless HD makeup',
    },
  ];

  return (
    <section id="artistry" className="w-full bg-[#F2ECE4]/30 py-20 md:py-28 border-y border-[#E5DDD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#9B7D56] font-semibold">
            The Continuum
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#18181B] tracking-tight mt-1">
            From Everyday Elegance to Your Big Day.
          </h2>
          <p className="text-base sm:text-lg text-[#6E6860] mt-3 leading-relaxed">
            Whether it is your everyday signature look, a bold seasonal transformation, a festive celebration, or your wedding day, our team crafts a look that feels authentic and effortless.
          </p>
        </div>

        {/* 3 Editorial Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {panels.map((panel) => (
            <div
              key={panel.step}
              className="group flex flex-col bg-[#FAF8F5] border border-[#E5DDD1] overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#F2ECE4]">
                <img
                  src={panel.image}
                  alt={panel.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-[#FAF8F5]/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-[0.18em] font-semibold text-[#18181B] border border-[#E5DDD1]">
                  {panel.step}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-2xl text-[#18181B]">
                    {panel.title}
                  </h3>
                  <p className="text-sm text-[#6E6860] mt-2 leading-relaxed">
                    {panel.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5DDD1] flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-[#9B7D56] font-medium">
                  <span>{panel.tag1}</span>
                  <span>{panel.tag2}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
