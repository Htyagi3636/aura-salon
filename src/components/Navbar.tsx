import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, Calendar, ChevronRight } from 'lucide-react';
import { SALON_CONFIG } from '../config/salonConfig';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'story', 'services', 'artistry', 'bridal', 'team', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle escape key to close drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Overview', href: '#home', id: 'home' },
    { label: 'Atelier', href: '#story', id: 'story' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Hair & Grooming', href: '#artistry', id: 'artistry' },
    { label: 'Bridal Suite', href: '#bridal', id: 'bridal' },
    { label: 'Artisans', href: '#team', id: 'team' },
    { label: 'Lookbook', href: '#gallery', id: 'gallery' },
    { label: 'Sanctuary', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E5DDD1] shadow-[0_2px_12px_rgba(24,24,27,0.04)] py-3'
            : 'bg-[#FAF8F5]/80 backdrop-blur-sm border-b border-[#E5DDD1]/60 py-4 md:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
          {/* Brand Wordmark */}
          <a
            href="#home"
            className="flex flex-col group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
          >
            <span className="font-serif text-2xl md:text-3xl tracking-[0.22em] text-[#18181B] uppercase font-normal transition-colors group-hover:text-[#9B7D56]">
              {SALON_CONFIG.name}
            </span>
            <span className="text-[9px] md:text-[10px] tracking-[0.25em] text-[#9B7D56] uppercase -mt-0.5 font-medium">
              UNISEX SALON · DELHI NCR
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden xl:flex items-center gap-7 text-[12px] uppercase tracking-[0.15em] font-medium text-[#6E6860]"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative py-1 transition-colors hover:text-[#18181B] whitespace-nowrap ${
                    isActive ? 'text-[#18181B] font-semibold' : ''
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#C5A880] rounded-none animate-fadeIn" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* WhatsApp Quick Action */}
            <a
              href={`https://wa.me/${SALON_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                'Hello Aura Salon, I would like to enquire about your services and appointments.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Aura Salon on WhatsApp"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-[11px] uppercase tracking-[0.14em] text-[#18181B] hover:text-[#9B7D56] transition-colors border border-transparent hover:border-[#E5DDD1]"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#9B7D56]" />
              <span className="font-medium">WhatsApp</span>
            </a>

            {/* Primary Booking CTA */}
            <button
              type="button"
              onClick={onBookClick}
              className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2.5 bg-[#18181B] text-[#FAF8F5] text-[11px] sm:text-[12px] uppercase tracking-[0.16em] font-medium hover:bg-[#2A2A2E] active:scale-[0.98] transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
              <span className="whitespace-nowrap">Book Visit</span>
            </button>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              className="xl:hidden p-2 text-[#18181B] hover:text-[#9B7D56] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#18181B]/40 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Content */}
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Drawer"
            className="fixed top-0 right-0 w-full max-w-sm h-full bg-[#FAF8F5] border-l border-[#E5DDD1] shadow-2xl flex flex-col justify-between p-6 overflow-y-auto animate-slideInRight"
          >
            {/* Drawer Header */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E5DDD1]">
                <div className="flex flex-col">
                  <span className="font-serif text-2xl tracking-[0.2em] text-[#18181B] uppercase">
                    {SALON_CONFIG.name}
                  </span>
                  <span className="text-[10px] tracking-[0.2em] text-[#9B7D56] uppercase font-medium">
                    UNISEX SALON · DELHI NCR
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close navigation drawer"
                  className="p-2 text-[#18181B] hover:text-[#9B7D56] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-8 flex flex-col space-y-4">
                {navLinks.map((link, idx) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`flex items-center justify-between py-2 text-sm uppercase tracking-[0.16em] transition-colors ${
                      activeSection === link.id
                        ? 'text-[#18181B] font-semibold border-b border-[#C5A880]'
                        : 'text-[#6E6860] hover:text-[#18181B]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="text-xs text-[#9B7D56]">0{idx + 1}</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Drawer Footer Actions */}
            <div className="pt-8 border-t border-[#E5DDD1] space-y-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#18181B] text-[#FAF8F5] text-xs uppercase tracking-[0.16em] font-medium hover:bg-black transition-colors"
              >
                <Calendar className="w-4 h-4 text-[#C5A880]" />
                <span>Reserve Appointment</span>
              </button>

              <a
                href={`https://wa.me/${SALON_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Aura Salon, I would like to book an appointment.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 border border-[#18181B] text-[#18181B] text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#F2ECE4] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#9B7D56]" />
                <span>Chat on WhatsApp</span>
              </a>

              <div className="pt-2 text-center">
                <p className="text-[11px] text-[#6E6860]">
                  {SALON_CONFIG.hours}
                </p>
                <p className="text-[11px] text-[#9B7D56] font-medium mt-1">
                  Indirapuram · Ghaziabad · Delhi NCR
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
