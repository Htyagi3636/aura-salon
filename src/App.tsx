/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStory } from './components/BrandStory';
import { ServicesMenu } from './components/ServicesMenu';
import { HairArtistry } from './components/HairArtistry';
import { BridalStudio } from './components/BridalStudio';
import { TeamSection } from './components/TeamSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PackagesSection } from './components/PackagesSection';
import { BookingSection } from './components/BookingSection';
import { ContactSection } from './components/ContactSection';
import { InstagramJournal } from './components/InstagramJournal';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedServicePreset, setSelectedServicePreset] = useState<string>('');
  const [selectedStylistPreset, setSelectedStylistPreset] = useState<string>('');

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedServicePreset(serviceName);
    scrollToBooking();
  };

  const handleSelectStylist = (stylistName: string) => {
    setSelectedStylistPreset(stylistName);
    scrollToBooking();
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#18181B] flex flex-col font-sans selection:bg-[#C5A880]/20 selection:text-[#18181B]">
      {/* Sticky Navigation */}
      <Navbar onBookClick={scrollToBooking} />

      <main className="flex-1 w-full">
        {/* Section 1: Hero */}
        <Hero
          onBookClick={scrollToBooking}
          onExploreClick={scrollToServices}
        />

        {/* Section 2: Brand Introduction & Atelier Story */}
        <BrandStory />

        {/* Section 3: Curated Services Menu with Indian Pricing */}
        <ServicesMenu onSelectService={handleSelectService} />

        {/* Section 4: Hair Artistry & Continuum */}
        <HairArtistry />

        {/* Section 5 & 6: Haute Bridal Suite */}
        <BridalStudio onBookConsultation={scrollToBooking} />

        {/* Section 7: Master Artisans & Stylists */}
        <TeamSection onSelectStylist={handleSelectStylist} />

        {/* Section 8: Portfolio Lookbook & Interactive Lightbox */}
        <GallerySection />

        {/* Section 9: Client Testimonials */}
        <TestimonialsSection />

        {/* Section 10: Exclusive Atelier Packages */}
        <PackagesSection />

        {/* Section 11: Concierge Appointment Booking */}
        <BookingSection
          selectedServicePreset={selectedServicePreset}
          selectedStylistPreset={selectedStylistPreset}
        />

        {/* Section 12: Flagship Sanctuary & Directions */}
        <ContactSection />

        {/* Section 13: Instagram Visual Journal */}
        <InstagramJournal />
      </main>

      {/* Section 14: Luxury Footer */}
      <Footer onBookClick={scrollToBooking} />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp />
    </div>
  );
}
