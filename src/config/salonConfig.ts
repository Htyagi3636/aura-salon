/**
 * Centralized business configuration for AURA Unisex Salon & Studio
 * Edit details here to update phone numbers, hours, location, and service offerings.
 */

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  category: 'hair' | 'grooming' | 'skin' | 'bridal';
  startingPrice: number;
  duration: string;
}

export interface Stylist {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  image: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  subtitle: string;
  category: 'cuts' | 'colour' | 'bridal' | 'studio';
  image: string;
  aspect: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  service: string;
  quote: string;
  body: string;
  rating: number;
}

export interface PackageOffer {
  id: string;
  badge: string;
  title: string;
  priceDisplay: string;
  priceSub?: string;
  description: string;
  whatsappMessage: string;
}

export const SALON_CONFIG = {
  name: 'AURA',
  fullName: 'AURA Unisex Salon & Studio',
  tagline: 'Your Beauty. Your Signature.',
  locationBadge: 'GHAZIABAD ATELIER · MOHAN NAGAR',
  address: 'Gulmohar Greens, Mohan Nagar, Ghaziabad, Uttar Pradesh 201007',
  landmark: 'Mohan Nagar · Ghaziabad 201007',
  phoneDisplay: '+91 98765 43210',
  phoneClean: '+919876543210',
  whatsappNumber: '919876543210', // Digits only in international format without + or spaces
  email: 'concierge@aurasalon.example',
  hours: 'Monday – Sunday: 10:00 AM – 09:00 PM',
  instagramHandle: '@aurasalonstudio',
  instagramUrl: 'https://instagram.com',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Gulmohar+Greens%2C+Mohan+Nagar%2C+Ghaziabad%2C+Uttar+Pradesh+201007',
  googleReviewPlaceholder: '4.9 ★ (520+ Discerning Patrons)',
};

export const SERVICES: ServiceItem[] = [
  // Hair Services
  {
    id: 'hair-women-cut',
    name: "Women's Haircut & Styling",
    description: 'Includes botanical scalp wash, personal architectural consultation, and blowout.',
    category: 'hair',
    startingPrice: 799,
    duration: '45–60 min',
  },
  {
    id: 'hair-men-cut',
    name: "Men's Precision Shear Cut",
    description: 'Bespoke scissor blend, low or mid taper fade, scalp wash and texture finish.',
    category: 'hair',
    startingPrice: 399,
    duration: '35–45 min',
  },
  {
    id: 'hair-spa',
    name: 'Restorative Scalp & Hair Spa',
    description: 'Intense peptide nourishment, hot towel botanical therapy, and acupressure massage.',
    category: 'hair',
    startingPrice: 999,
    duration: '60 min',
  },
  {
    id: 'hair-global-color',
    name: 'Global Hair Colour (Ammonia-Free)',
    description: 'Rich, lustrous conditioning pigment with multidimensional depth and grey coverage.',
    category: 'hair',
    startingPrice: 2499,
    duration: '90–120 min',
  },
  {
    id: 'hair-balayage',
    name: 'Balayage & Editorial Highlights',
    description: 'Hand-painted dimensional transitions calibrated specifically for Indian hair tones.',
    category: 'hair',
    startingPrice: 3999,
    duration: '150–180 min',
  },
  {
    id: 'hair-keratin',
    name: 'Keratin & Protein Smoothing Shield',
    description: 'Deep humidity-resistant smoothing treatment for effortless frizz control and glass shine.',
    category: 'hair',
    startingPrice: 2999,
    duration: '120–150 min',
  },

  // Men's Grooming
  {
    id: 'groom-precision-cut',
    name: 'Executive Precision Haircut',
    description: 'Head-shape mapping, clipper/shear contour, nape shave, and matte styling.',
    category: 'grooming',
    startingPrice: 399,
    duration: '35 min',
  },
  {
    id: 'groom-beard-sculpt',
    name: 'Beard Sculpting & Hot Lather Edging',
    description: 'Straight razor line definition, volume trimming, and sandalwood conditioning balm.',
    category: 'grooming',
    startingPrice: 249,
    duration: '30 min',
  },
  {
    id: 'groom-combo',
    name: "Gentleman's Cut & Beard Ritual",
    description: 'Complete signature grooming session with revitalising neck tension release.',
    category: 'grooming',
    startingPrice: 599,
    duration: '55 min',
  },
  {
    id: 'groom-detox',
    name: "Men's Charcoal Detox Facial",
    description: 'Pore decongestion, botanical scrub, micro-massage, and cooling hydrogel mask.',
    category: 'grooming',
    startingPrice: 999,
    duration: '45 min',
  },

  // Skin & Beauty
  {
    id: 'skin-cellular-facial',
    name: 'Cellular Radiance Facial',
    description: 'Advanced hydration designed to reverse urban Delhi pollution and dullness.',
    category: 'skin',
    startingPrice: 1499,
    duration: '60 min',
  },
  {
    id: 'skin-express-cleanup',
    name: 'Essential Dermal Cleanup',
    description: 'Steaming, sonic blackhead extraction, refining scrub, and calming seaweed pack.',
    category: 'skin',
    startingPrice: 499,
    duration: '40 min',
  },
  {
    id: 'skin-gentle-wax',
    name: 'Hypoallergenic Stripless Waxing',
    description: 'Gentle peel-off formula for sensitive skin, leaving zero sticky residue.',
    category: 'skin',
    startingPrice: 299,
    duration: '20–45 min',
  },
  {
    id: 'skin-spa-pedicure',
    name: 'AURA Dead Sea Salt Pedicure & Manicure',
    description: 'Mineral foot bath, paraffin softening therapy, cuticular massage, and natural buff.',
    category: 'skin',
    startingPrice: 799,
    duration: '50 min',
  },

  // Bridal & Occasion
  {
    id: 'bridal-hd-makeup',
    name: 'Haute Bridal HD Makeup & Styling',
    description: 'Camera-ready airbrush finish, individual mink lashes, lens fitment, and jewellery setting.',
    category: 'bridal',
    startingPrice: 11999,
    duration: '180 min',
  },
  {
    id: 'bridal-engagement',
    name: 'Engagement & Sangeet Evening Glow',
    description: 'Luminous glass-skin base, soft smoky definition, and modern textured waves.',
    category: 'bridal',
    startingPrice: 5999,
    duration: '120 min',
  },
  {
    id: 'bridal-party-glam',
    name: 'Celebration & Party Glam',
    description: 'Refined cocktail makeup and blowout tailored for wedding guests and sisters.',
    category: 'bridal',
    startingPrice: 2999,
    duration: '75 min',
  },
  {
    id: 'bridal-hair-sculpt',
    name: 'Bridal Floral Bun & Hair Sculpting',
    description: 'Architectural textured updo with fresh jasmine mogra or baby’s breath pinning.',
    category: 'bridal',
    startingPrice: 2499,
    duration: '60 min',
  },
  {
    id: 'bridal-draping',
    name: 'Couture Saree & Dupatta Draping',
    description: 'Crease-free pleated stability, Gujarati/Bengali or modern fluid pallu drape.',
    category: 'bridal',
    startingPrice: 799,
    duration: '30 min',
  },
];

export const STYLISTS: Stylist[] = [
  {
    id: 'rohit-sharma',
    name: 'Rohit Sharma',
    role: 'Creative Director & Founder',
    specialty: 'Precision Haircuts & Structural Design',
    bio: '12+ years shaping contemporary styles with architectural precision. Specialises in precision haircuts, modern men’s grooming, and structural consultations.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD9JlvYXq1kn9CH_0awDvKD9QZ-uo1lTXteRZPl50VG7oCMTZ4JeqIHlQzNrm2JPnfov1hGjXV6PIft1gdYtNUKiqIk6x-5hDH49_wRypayD1xG63EM26KRGSRAZkP8IzLRG5_SaHQNY1REXvt19AYviF3xoDPpz7hpBQfwNF7-UNI5b4iUncGscr0roQhKzYdEBsKFTPjj8eTzaAUj0J8EPff8ShJAGU3Yj2cOnYQ5LqrY0EJeYpXKPQ',
  },
  {
    id: 'priya-verma',
    name: 'Priya Verma',
    role: 'Senior Colourist & Tone Artisan',
    specialty: 'Balayage, Seamless Blends & Corrective Colour',
    bio: 'Internationally trained specialist in dimensional pigment chemistry for Indian undertones. Renowned for natural caramel balayage and restorative glossing.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDPkOcXmHX-u5_9nWh0DVkxOk00hixaIOaHkZCeQgO1MM6yWl3Lr8bdgsxn8zHoSkgT_URq7BhygOnrNtYx_b_TZRvNdXpdtagdZe0owSIPxSwUtultBFVvFKYEWM_GVVxm_8_h96zRrP3BFUsVWrsGsn4gWCjUAH69wMcuJ7ugQYojM83rAV0tls8qCJ7fZDx1U_L_0eMecZz_KGzZVsS4bd_6Uu-SwnYp99YoiKls8WlsXDaWr7bECQ',
  },
  {
    id: 'aarav-malhotra',
    name: 'Aarav Malhotra',
    role: "Master Barber & Men's Grooming Lead",
    specialty: 'Skin Fades, Beard Architecture & Hot Lather',
    bio: 'Dedicated to traditional master barbering combined with modern tailoring. Specialist in crisp skin tapers, beard sculpting, and restorative hot towel therapies.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCMMa4liohAw9mHb0O6wAz6O_IgECxnjA_vTCTruQMTYZ082_T54uwmrrCmTO29j-SYxZ3rV3UbX6NHREN6ugU8DkSB5oe-7TABtJ2gYeLQ8vkLlvgW1CgUfF1jEKRASXWlUtoMaWRcFRCbiEeyy9MkWcZuaWjD3gCIK_8JPqg-8XcADFBDsy6FhhW9bchlosH8OGjzyGcnesv00hTSd9VZgOGR_pakMhaOH-OnZLWvJn1EV_giDgL_2A',
  },
  {
    id: 'neha-kapoor',
    name: 'Neha Kapoor',
    role: 'Haute Bridal & Dermal Aesthetics Lead',
    specialty: 'Airbrush HD Bridal Makeup & Saree Draping',
    bio: 'Celebrated for modern, luminous bridal aesthetics and flawless drape engineering. Expert in bespoke wedding day choreography and long-wear skin prep.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDGYWs3u6lo71_5eDQQPAfHNhiFu8Wq9Bl938P9zeituLGCf7ggxj282Qe0Z_c7HIwwF3TwY1NEXLavnyjIQCFovohsua6V9zKOo0VQQ-z00hb0PYywIckgkpWCx7QVv-M07SSU_SOM5xpaoDBeWWTZnCD2uORrtEGYZOAffpQuaYdo3-1EehoymR_Q8i_MBT-mMJQLqQSzFumFVL6N-S5TpOmWBz13hFwkK-tKQaXEIC06iFCXmf3-iA',
  },
];

export const GALLERY_ITEMS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Architectural Low Taper Fade',
    subtitle: 'Textured shear work and crisp beard alignment',
    category: 'cuts',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCOJEMzqbawsuZhGXwK0PHjylQmYZxpMBSlFnqyYeJtjBSn8Gi5xdVwFTHV0UfEoxjZK33NOB-f8G4wGl9jZPRvQ0fx04fSdGu4Hi8lvRkOEb29LxCJPiaVnjYv-v_9RvDv-ahYdoYkK_vD1qJjwP-FkdVsjPfEL1H6LH3BwcU-6-enCqLq-rkNGTibK_8SP3zpPMD0n-xMkHQvj-g9IAqcCtFZU_1FjDPN4VGGMEmQVEC4oTTatkF-6g',
    aspect: 'aspect-[4/5]',
  },
  {
    id: 'gal-2',
    title: 'Caramel Honey Balayage',
    subtitle: 'Seamless multidimensional gradients with soft beach waves',
    category: 'colour',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDOyLQ3Hb8UOB1URA2ihH6Cew3x_ATId9yrHSHsT3AyNTEU6r5vhVJLFmBQ6oW8HCfQqM_sjBQ9zXlDgVVtPQTkZDJoonmMOMXnedg6Vk9WlZ57ekERLSyGg9lLVAUMjvikpAC9tq7lPQRb4HP8gVUzr5Civ56UhuSCB7vMjyE_qbcsbg-FwbB8l3WQyvgNEtbSUgB57rdBcE_rFSvt6jMmu731xy-rI9a9UG77jgJmpQwL8YzSIimwbg',
    aspect: 'aspect-[4/5]',
  },
  {
    id: 'gal-3',
    title: 'Botanical Chignon Updo',
    subtitle: 'Intricate wedding hair with baby’s breath florals',
    category: 'bridal',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCfqzlRWqcA0dpQIBYfrMUz_-fSAHNeVNXhn1VaSl-_cpQoziq8sfVBZPB9M0iFJzqzdJDbbgmN6RZI3PCl5s005b_elqL3G9lAiEys0tL8FU7orCKPnsj5kZ6Jej3ZKY9oDsTcYEWqcKAFE4x3Hn5L52TGigy9dgFgbyXA7eAr_78TMgcQ_88ZF4VIShfUTAkV04WTxerTUDN711jlsq_w61AXj6RCT76eZ30QtaUr6hZTgqk8n-0brA',
    aspect: 'aspect-[4/5]',
  },
  {
    id: 'gal-4',
    title: 'Feathered Collarbone Cut',
    subtitle: 'Effortless textured bob with curtain fringe',
    category: 'cuts',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDoegJQ2kAE4-GSjyb68j5-mPxx9dce87_4JwB2KMpcq3hW2gATZ2-am5iLWNShNVEF1qbBfPzA7ieW0djqqgZ_MC8aok2mc8gNhjNXv1IyAfhU-89k5ynSrsQo0LWnSmzXqfQQsO1BmTNkSKLYVsdm3SF2VJeDX-ptt8gIbMZaHqMuiP23dzdQemlAwJhwsX7_4VF9QAfAfy5Y8siOYuW5u0eiBqcB3T_jMMnnJDPj-tptVyHNf05lww',
    aspect: 'aspect-[4/5]',
  },
  {
    id: 'gal-5',
    title: 'The Mirror Corridor',
    subtitle: 'Warm backlit arched mirrors and dark walnut panelling',
    category: 'studio',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBbr28V52p9XjKVlDKxYpvcdSFrnZjUbpqg9dQz1vbH_ys87fc06IaMYuivboWjm9JEgzVxw8CG6gMerOiwCEiSUo0V3oxeyC5tfHKJl6uvnTx1GcXG1lrrexvxHWbTm5S1wdnG_P0caNI6cCTvIAVgDUuN24yNO2p0-QfjZA-89H-4mzxL-FVaVEO3gW-Jkuj94wj7F0-KCxqqVEV9YV6KmAmbbaFmcIXgC17owebXc6Y93TYXfxg-Tg',
    aspect: 'aspect-[4/5]',
  },
  {
    id: 'gal-6',
    title: 'Mocha Ribbon Gloss',
    subtitle: 'Deep espresso tones with hazelnut dimension',
    category: 'colour',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAYRVjA7ZnuEN_c77K83bb1S6Wk6O3GQ0Emo-v2kweyW5K5wOfFnUTARXmwXNLYyrx0T0NjL3drrccq6-p4U-8FXj8b4XA17rmQs_Dh4blaX5UoXBYP0FMGF9cQmtNc_IsSb5rdkTFRqGlwA_L19oetcImBjkqdT6Llrq4VUgabcrFv1qVruJpgYM1ZFpFiKPFIamng_M0XI9EQUIAsmT76DRvoY94gxfgRSyQ_WB2doyYjlxpVT6z9mA',
    aspect: 'aspect-[4/5]',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Ananya Gupta',
    location: 'Indirapuram, Ghaziabad',
    service: 'Haircut & Balayage',
    quote: 'Loved the consultation and the final haircut. The team really understood what I wanted.',
    body: 'Priya took twenty minutes just analysing my hair texture and natural parting before beginning. The subtle balayage complements my skin tone without looking harsh.',
    rating: 5,
  },
  {
    id: 'test-2',
    name: 'Rishabh Mehta',
    location: 'Noida Sector 62',
    service: 'Beard Trim & Fade',
    quote: 'Great experience for men’s grooming. Professional staff, a clean salon and a really good finish.',
    body: 'Aarav’s razor work is razor sharp yet effortless. The ambiance is relaxed, masculine yet refined, and there’s none of that rush you find at typical commercial salons.',
    rating: 5,
  },
  {
    id: 'test-3',
    name: 'Simran Kaur',
    location: 'Vasundhara, Ghaziabad',
    service: 'Festive Glam & Blowout',
    quote: 'Beautiful styling and such a comfortable experience. Perfect for getting ready for a special occasion.',
    body: 'Booked Neha for a cocktail saree styling and blowout. My hair held shape despite a full night of dancing, and the draping felt like second skin.',
    rating: 5,
  },
];

export const PACKAGES: PackageOffer[] = [
  {
    id: 'pack-1',
    badge: 'Welcome Guest',
    title: 'First Visit Haircut',
    priceDisplay: '10% OFF',
    description: 'Applies to your first architectural haircut and wash ritual with any senior stylist.',
    whatsappMessage: 'Hello Aura Salon, I would like to enquire about the First Visit 10% OFF Haircut offer.',
  },
  {
    id: 'pack-2',
    badge: "Gentleman's Ritual",
    title: 'Haircut & Beard Combo',
    priceDisplay: '₹599',
    priceSub: 'Starting',
    description: 'Precision shear haircut, hot lather beard design, and revitalising scalp wash.',
    whatsappMessage: 'Hello Aura Salon, I would like to book the Haircut and Beard Combo package (₹599).',
  },
  {
    id: 'pack-3',
    badge: 'Rejuvenation',
    title: 'Hair Spa & Styling',
    priceDisplay: '₹1,499',
    priceSub: 'Starting',
    description: 'Deep conditioning botanical mask, 20-min pressure massage, followed by signature blowdry.',
    whatsappMessage: 'Hello Aura Salon, I would like to book the Hair Spa & Styling package (₹1,499).',
  },
  {
    id: 'pack-4',
    badge: 'Bridal Privilege',
    title: 'Bridal Consultation',
    priceDisplay: 'Complimentary',
    description: 'One-on-one session with Neha Kapoor to review wedding outfits, timelines & hair trials.',
    whatsappMessage: 'Hello Aura Salon, I would like to schedule a Complimentary Bridal Consultation.',
  },
];

export const INSTAGRAM_PHOTOS = [
  {
    id: 'ig-1',
    caption: 'The Tools of Craft',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB9Xs7g3rKEibPERjrB9EFozRjM9c28OhkWjZZIy6xa92wrWWLzfE9xGe39Q8kgU4w_jmvFmo7Q3dFX5GV3xsQZ4wCRmHmrmXK6Mxyhlr38U4fuDJfgGYlgoEjoAjvsQ_m91usAJrvtohJVv7n_rl_zvz-YquB9NDnE-tUIZrgJS7_SEOHL1LjWZJPpdSV9Grl1axp1bkHaqynhtAKmght2J-H7Tm01xHm8qdJJ_GhTPr2PyJ_3u4_puQ',
  },
  {
    id: 'ig-2',
    caption: 'Fresh Fringe Reflection',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCKMJK5LvCrZc26wJUW2f5M2TEO2ZAXSLIYXR4sgvuUG9Epf94hTklvSmkyUvMC8YsXd2Zh6jPomQz_HXFLI84wKFnicXel5hKsxaE0dlcucu30rM-63VOW03wFl5Zys2k8Wjp0j7RvV3Q_2JKpsYichE2kABEDBVI_AH1qUif5Ne6gTKyXmwixsQwf7277h0MXL2nxb-y9bhHpUYbv-12w-OaQvaoyKMSroCCPecEq8M_8junqk1ZvaQ',
  },
  {
    id: 'ig-3',
    caption: 'Atelier Details & Amber Glass',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCTVk9HXUI9UJIbP6XNOiZ89kBEc7ao6h8mV5rJFDHgKSXfVRc2p_HlDyhJiGGulVDlTPCj1T26b98-xGS4uTYJCVajYof6s5njlbJXTcDbYphCrBK_P21eviLSOKHkmnNBEKChn3L7csS6Prc51Ria9fBK1jEDK1VRWHFi1rjPrBd6hFq1bfTldsYgCILV-Iga5pHd2_0OTUtd4SxkBYYw8K0RrwPnrU_VFAlsClwm7k-q_SgRp-ZDOw',
  },
  {
    id: 'ig-4',
    caption: 'Hot Towel Ritual',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB8Zv2SRLxADXLnK2mf1wTBbzCbbFNViuZWzS_7ZZ9z5mKPjfkAoY1433e7F6oMzMyQrf0D2LTZFOQG7ZGfNmy2eWfD0D5yMTMVzIUA3cAcyjqpbjp9O5h7ks9_C93UD60oXtlNfnaNgZXRKq793dZwlgCsDu-IfEqoBm0Mh9hIe1GUh9rhLrzJPhueCf66XbylZDHsoaq_wiogpg_uxqeN63H0RzNhx3b4_AFUniN0V5CrCcOeQvjHvg',
  },
  {
    id: 'ig-5',
    caption: 'Wedding Morning Florals',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDwpJaMvIymzvXi36004h0bAfiLzoVvkiUb4kIBHBLdNblqkIYfQeuk9secYmWjChZCkxPkcR4t_KfLz2TxLeVAXI93AYTuYtqPc_a5NTMrV-9T6zJfHqA7wiCnkXn4R_YzNlHNXgprn4nv-eV5UBaBzxKCuzqs23fu1BZmaN6lTIlwSYxSNgpJQzJkAY-Sg2_CE0Ddr3KNOMa2OaqTHFzsXvZDX9xUbNYCPFGUoP_dks7gYAVn0T0spw',
  },
  {
    id: 'ig-6',
    caption: 'The Welcome Espresso Lounge',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD5uNUuj-qiSUxe5uZMn3wfNr6yEUDSqNVUxVRvvzBKnhkVrTUKPOPUkxP9KLyJMLSjfoct_RrST10INP2Cz8YdaLldJ7Bj0JHCNXk0AJlBaBXQpXiEFIf1S5qn-ov1lctejS2_DqAijflkfzX08-7rOaizDG4dy-Kk_Oy0FX951K6SXjtk9r4xPmBSFABJOQX97Vv2kiwp78PzaSY_kxaNqiUrLgBPLTZhLPTtWKMhR1v3tGHw3V_OrA',
  },
];
