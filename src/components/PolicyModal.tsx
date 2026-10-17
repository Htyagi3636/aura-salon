import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface PolicyModalProps {
  type: 'privacy' | 'terms' | 'etiquette' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    if (!type) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#18181B]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-xl w-full bg-[#FAF8F5] border border-[#E5DDD1] shadow-2xl p-6 sm:p-8 relative max-h-[85vh] overflow-y-auto"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 p-2 text-[#18181B] hover:text-[#9B7D56] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'etiquette' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#9B7D56]">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold">
                Salon Etiquette & Rituals
              </span>
            </div>
            <h3 className="font-serif text-2xl text-[#18181B]">
              Atelier Etiquette & Punctuality
            </h3>
            <div className="text-xs sm:text-sm text-[#6E6860] space-y-3 leading-relaxed">
              <p>
                <strong>Arrival:</strong> We invite guests to arrive 10 minutes prior to scheduled appointments to enjoy our welcome botanical tea or espresso and complete their hair & skin diagnosis questionnaire.
              </p>
              <p>
                <strong>Rescheduling & Cancellation:</strong> Because our senior artisans dedicate private time for each bespoke consultation, we kindly request at least 4 hours notice for rescheduling or cancellations.
              </p>
              <p>
                <strong>Sanitization & Hygiene:</strong> All shears, clipper blades, brushes, and hot styling irons undergo medical-grade ultrasonic sanitization and UV sterilization between every patron.
              </p>
            </div>
          </div>
        )}

        {type === 'terms' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#9B7D56]">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold">
                Terms of Ritual
              </span>
            </div>
            <h3 className="font-serif text-2xl text-[#18181B]">
              Service Terms & Consultation
            </h3>
            <div className="text-xs sm:text-sm text-[#6E6860] space-y-3 leading-relaxed">
              <p>
                <strong>Consultation Transparency:</strong> All service quotes displayed on this website are baseline starting prices in Indian Rupees (₹). Precise quotes will be confirmed in person after analysing hair length, density, and chemical history.
              </p>
              <p>
                <strong>Patch Tests:</strong> For all global coloring, bleaching, and chemical smoothing services, we recommend a 24-hour allergy patch test for new clients.
              </p>
              <p>
                <strong>Bridal Bookings:</strong> Haute Bridal and wedding party bookings require an advance date reservation deposit upon trial confirmation.
              </p>
            </div>
          </div>
        )}

        {type === 'privacy' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#9B7D56]">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold">
                Privacy Policy
              </span>
            </div>
            <h3 className="font-serif text-2xl text-[#18181B]">
              Privacy & Client Care
            </h3>
            <div className="text-xs sm:text-sm text-[#6E6860] space-y-3 leading-relaxed">
              <p>
                <strong>Personal Data:</strong> Your name and mobile number are utilized solely by AURA concierge staff to confirm your booking, send appointment reminders, or coordinate your customized styling consultations.
              </p>
              <p>
                <strong>No Third-Party Sharing:</strong> We respect your privacy and never sell, rent, or distribute client contact records or treatment logs to external parties.
              </p>
            </div>
          </div>
        )}

        <div className="pt-6 mt-6 border-t border-[#E5DDD1] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 bg-[#18181B] text-[#FAF8F5] text-xs uppercase tracking-[0.16em] font-medium hover:bg-black transition-colors"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
