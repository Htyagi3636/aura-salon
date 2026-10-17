import React, { useState, useEffect } from 'react';
import { SERVICES, STYLISTS, SALON_CONFIG } from '../config/salonConfig';
import { Calendar, CheckCircle2, MessageSquare, AlertCircle, Clock, User, Scissors } from 'lucide-react';

interface BookingSectionProps {
  selectedServicePreset?: string;
  selectedStylistPreset?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  selectedServicePreset,
  selectedStylistPreset,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [stylist, setStylist] = useState('Any Available Master Stylist');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [notes, setNotes] = useState('');

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmation, setBookingConfirmation] = useState<{
    referenceId: string;
    fullName: string;
    phone: string;
    service: string;
    stylist: string;
    date: string;
    timeSlot: string;
    notes: string;
  } | null>(null);

  // Sync incoming presets from other sections
  useEffect(() => {
    if (selectedServicePreset) {
      setService(selectedServicePreset);
    }
  }, [selectedServicePreset]);

  useEffect(() => {
    if (selectedStylistPreset) {
      setStylist(selectedStylistPreset);
    }
  }, [selectedStylistPreset]);

  // Minimum date today (YYYY-MM-DD)
  const todayString = new Date().toISOString().split('T')[0];

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }

    const cleanPhone = phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length !== 10) {
      errs.phone = 'Please enter a valid 10-digit mobile number.';
    }

    if (!service) {
      errs.service = 'Please select a salon discipline or ritual.';
    }

    if (!date) {
      errs.date = 'Please pick a preferred date.';
    }

    if (!timeSlot) {
      errs.timeSlot = 'Please choose a preferred time window.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const refId = `AUR-${Math.floor(1000 + Math.random() * 9000)}`;
      setBookingConfirmation({
        referenceId: refId,
        fullName: fullName.trim(),
        phone: phone.trim(),
        service,
        stylist,
        date,
        timeSlot,
        notes: notes.trim(),
      });
      setIsSubmitting(false);
    }, 400);
  };

  const handleReset = () => {
    setBookingConfirmation(null);
    setFullName('');
    setPhone('');
    setService('');
    setStylist('Any Available Master Stylist');
    setDate('');
    setTimeSlot('');
    setNotes('');
    setErrors({});
  };

  const generateWhatsAppMessage = () => {
    if (!bookingConfirmation) return '';
    const text =
      `Hello AURA Salon & Studio,\n\n` +
      `I would like to confirm my appointment request:\n` +
      `• Reference: ${bookingConfirmation.referenceId}\n` +
      `• Guest Name: ${bookingConfirmation.fullName}\n` +
      `• Contact: +91 ${bookingConfirmation.phone}\n` +
      `• Service: ${bookingConfirmation.service}\n` +
      `• Preferred Stylist: ${bookingConfirmation.stylist}\n` +
      `• Preferred Date: ${bookingConfirmation.date}\n` +
      `• Time Slot: ${bookingConfirmation.timeSlot}\n` +
      (bookingConfirmation.notes ? `• Notes: ${bookingConfirmation.notes}\n` : '') +
      `\nPlease let me know your availability. Thank you!`;
    return encodeURIComponent(text);
  };

  return (
    <section id="booking" className="w-full bg-[#F2ECE4]/50 py-20 md:py-28 border-b border-[#E5DDD1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F5] border border-[#E5DDD1] p-6 sm:p-10 lg:p-12 shadow-lg">
          {/* Header */}
          <div className="border-b border-[#E5DDD1] pb-6 mb-8">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#9B7D56] font-semibold">
              Concierge Service
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#18181B] tracking-tight mt-1">
              Reserve Your Experience
            </h2>
            <p className="text-sm text-[#6E6860] mt-2 leading-relaxed">
              Select your ritual and preferred master artisan. Our concierge team will confirm slot availability with you via telephone or WhatsApp.
            </p>
          </div>

          {bookingConfirmation ? (
            /* Successful Submission Summary Card */
            <div className="space-y-6">
              <div className="p-6 bg-[#F2ECE4]/70 border border-[#C5A880] space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#18181B] text-[#FAF8F5] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-[#C5A880]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-[#18181B]">
                      Appointment Request Received
                    </h3>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#9B7D56] font-semibold">
                      Booking Reference: {bookingConfirmation.referenceId}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E5DDD1] text-xs">
                  <div>
                    <span className="text-[#6E6860] block">Guest Name</span>
                    <span className="font-semibold text-[#18181B] text-sm">
                      {bookingConfirmation.fullName}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#6E6860] block">Phone (+91)</span>
                    <span className="font-semibold text-[#18181B] text-sm">
                      {bookingConfirmation.phone}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#6E6860] block">Selected Ritual</span>
                    <span className="font-semibold text-[#18181B] text-sm">
                      {bookingConfirmation.service}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#6E6860] block">Preferred Stylist</span>
                    <span className="font-semibold text-[#18181B] text-sm">
                      {bookingConfirmation.stylist}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#6E6860] block">Requested Date</span>
                    <span className="font-semibold text-[#18181B] text-sm">
                      {bookingConfirmation.date}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#6E6860] block">Requested Time Slot</span>
                    <span className="font-semibold text-[#18181B] text-sm">
                      {bookingConfirmation.timeSlot}
                    </span>
                  </div>
                </div>

                {bookingConfirmation.notes && (
                  <div className="pt-2 text-xs">
                    <span className="text-[#6E6860] block">Notes / Reference:</span>
                    <p className="italic text-[#18181B]">"{bookingConfirmation.notes}"</p>
                  </div>
                )}
              </div>

              {/* Instant WhatsApp Transmission CTA */}
              <div className="p-5 bg-[#FAF8F5] border border-[#E5DDD1] space-y-3">
                <p className="text-xs text-[#6E6860] leading-relaxed">
                  <strong className="text-[#18181B]">Direct Confirmation via WhatsApp:</strong> To get priority slot allocation, send these request details directly to our front desk in one tap:
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={`https://wa.me/${SALON_CONFIG.whatsappNumber}?text=${generateWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#18181B] text-[#FAF8F5] text-xs uppercase tracking-[0.16em] font-semibold hover:bg-black transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-[#C5A880]" />
                    <span>Send Booking to WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-3.5 border border-[#18181B] text-[#18181B] text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#F2ECE4] transition-colors"
                  >
                    Book Another Visit
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-[0.16em] text-[#18181B] font-semibold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    placeholder="e.g. Siddharth Sharma"
                    className={`w-full px-4 py-3 bg-[#FAF8F5] border text-sm text-[#18181B] placeholder-[#6E6860]/60 focus:outline-none transition-colors ${
                      errors.fullName
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-[#E5DDD1] focus:border-[#18181B]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Mobile Number (+91) */}
                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-[0.16em] text-[#18181B] font-semibold">
                    Mobile Number (+91) *
                  </label>
                  <div className="flex items-center">
                    <span className="px-3.5 py-3 bg-[#F2ECE4] border border-r-0 border-[#E5DDD1] text-xs font-semibold text-[#6E6860]">
                      +91
                    </span>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                        setPhone(val);
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      placeholder="98765 43210"
                      className={`w-full px-4 py-3 bg-[#FAF8F5] border text-sm text-[#18181B] placeholder-[#6E6860]/60 focus:outline-none transition-colors ${
                        errors.phone
                          ? 'border-red-500 focus:border-red-600'
                          : 'border-[#E5DDD1] focus:border-[#18181B]'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                {/* Service Selection */}
                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-[0.16em] text-[#18181B] font-semibold">
                    Select Discipline / Ritual *
                  </label>
                  <select
                    value={service}
                    onChange={(e) => {
                      setService(e.target.value);
                      if (errors.service) setErrors({ ...errors, service: '' });
                    }}
                    className={`w-full px-4 py-3 bg-[#FAF8F5] border text-sm text-[#18181B] focus:outline-none transition-colors ${
                      errors.service
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-[#E5DDD1] focus:border-[#18181B]'
                    }`}
                  >
                    <option value="">Choose a ritual</option>
                    <optgroup label="Hair Services">
                      <option value="Women's Haircut & Styling">Women's Haircut & Styling (from ₹799)</option>
                      <option value="Men's Precision Shear Cut">Men's Precision Shear Cut (from ₹399)</option>
                      <option value="Restorative Scalp & Hair Spa">Restorative Scalp & Hair Spa (from ₹999)</option>
                      <option value="Global Hair Colour (Ammonia-Free)">Global Hair Colour (from ₹2,499)</option>
                      <option value="Balayage & Editorial Highlights">Balayage & Editorial Highlights (from ₹3,999)</option>
                      <option value="Keratin Smoothing Shield">Keratin Smoothing Shield (from ₹2,999)</option>
                    </optgroup>
                    <optgroup label="Men's Grooming">
                      <option value="Executive Precision Haircut">Executive Precision Haircut (₹399)</option>
                      <option value="Beard Sculpting & Hot Lather">Beard Sculpting & Hot Lather (₹249)</option>
                      <option value="Gentleman's Cut & Beard Ritual">Gentleman's Cut & Beard Ritual (₹599)</option>
                      <option value="Men's Charcoal Detox Facial">Men's Charcoal Detox Facial (₹999)</option>
                    </optgroup>
                    <optgroup label="Skin & Aesthetics">
                      <option value="Cellular Radiance Facial">Cellular Radiance Facial (from ₹1,499)</option>
                      <option value="Essential Dermal Cleanup">Essential Dermal Cleanup (from ₹499)</option>
                      <option value="Hypoallergenic Stripless Waxing">Hypoallergenic Stripless Waxing (from ₹299)</option>
                      <option value="AURA Dead Sea Salt Pedicure & Manicure">AURA Dead Sea Salt Pedicure & Manicure (from ₹799)</option>
                    </optgroup>
                    <optgroup label="Bridal & Occasion">
                      <option value="Haute Bridal HD Makeup & Styling">Haute Bridal HD Makeup (from ₹11,999)</option>
                      <option value="Engagement & Sangeet Evening Glow">Engagement & Sangeet Evening Glow (from ₹5,999)</option>
                      <option value="Celebration & Party Glam">Celebration & Party Glam (from ₹2,999)</option>
                      <option value="Bridal Floral Bun & Hair Sculpting">Bridal Floral Bun & Updo (from ₹2,499)</option>
                      <option value="Couture Saree & Dupatta Draping">Couture Saree & Dupatta Draping (from ₹799)</option>
                    </optgroup>
                    <option value="Bespoke Consultation">Other Bespoke Requirement</option>
                  </select>
                  {errors.service && (
                    <p className="text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.service}</span>
                    </p>
                  )}
                </div>

                {/* Preferred Stylist */}
                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-[0.16em] text-[#18181B] font-semibold">
                    Preferred Artisan / Stylist
                  </label>
                  <select
                    value={stylist}
                    onChange={(e) => setStylist(e.target.value)}
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E5DDD1] text-sm text-[#18181B] focus:border-[#18181B] focus:outline-none transition-colors"
                  >
                    <option value="Any Available Master Stylist">Any Available Master Stylist</option>
                    <option value="Rohit Sharma">Rohit Sharma (Creative Director · Precision Haircuts)</option>
                    <option value="Priya Verma">Priya Verma (Senior Colourist · Balayage & Tones)</option>
                    <option value="Aarav Malhotra">Aarav Malhotra (Men's Grooming · Master Barber)</option>
                    <option value="Neha Kapoor">Neha Kapoor (Haute Bridal & Dermal Aesthetics Lead)</option>
                  </select>
                </div>

                {/* Preferred Date */}
                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-[0.16em] text-[#18181B] font-semibold">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    min={todayString}
                    value={date}
                    onChange={(e) => {
                      setDate(e.target.value);
                      if (errors.date) setErrors({ ...errors, date: '' });
                    }}
                    className={`w-full px-4 py-3 bg-[#FAF8F5] border text-sm text-[#18181B] focus:outline-none transition-colors ${
                      errors.date
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-[#E5DDD1] focus:border-[#18181B]'
                    }`}
                  />
                  {errors.date && (
                    <p className="text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.date}</span>
                    </p>
                  )}
                </div>

                {/* Preferred Time Window */}
                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-[0.16em] text-[#18181B] font-semibold">
                    Preferred Time Window *
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => {
                      setTimeSlot(e.target.value);
                      if (errors.timeSlot) setErrors({ ...errors, timeSlot: '' });
                    }}
                    className={`w-full px-4 py-3 bg-[#FAF8F5] border text-sm text-[#18181B] focus:outline-none transition-colors ${
                      errors.timeSlot
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-[#E5DDD1] focus:border-[#18181B]'
                    }`}
                  >
                    <option value="">Select slot</option>
                    <option value="Morning (10:00 AM – 12:00 PM)">Morning (10:00 AM – 12:00 PM)</option>
                    <option value="Afternoon (12:00 PM – 03:00 PM)">Afternoon (12:00 PM – 03:00 PM)</option>
                    <option value="Late Afternoon (03:00 PM – 06:00 PM)">Late Afternoon (03:00 PM – 06:00 PM)</option>
                    <option value="Evening (06:00 PM – 09:00 PM)">Evening (06:00 PM – 09:00 PM)</option>
                  </select>
                  {errors.timeSlot && (
                    <p className="text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.timeSlot}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Additional Requirements */}
              <div className="space-y-1.5">
                <label className="block text-xs uppercase tracking-[0.16em] text-[#18181B] font-semibold">
                  Hair Length, Skin Sensitivities or Reference Style (Optional)
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Share details such as hair length, scalp sensitivity, bridal outfit colors, or specific stylist recommendations..."
                  className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E5DDD1] text-sm text-[#18181B] placeholder-[#6E6860]/60 focus:border-[#18181B] focus:outline-none transition-colors"
                />
              </div>

              {/* Submit Cluster */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3.5 bg-[#18181B] text-[#FAF8F5] text-xs uppercase tracking-[0.18em] font-medium hover:bg-black transition-colors shadow-sm disabled:opacity-50"
                >
                  {isSubmitting ? 'Processing Request...' : 'Request Appointment'}
                </button>

                <a
                  href={`https://wa.me/${SALON_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                    'Hello Aura Salon, I would like to book an appointment.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#18181B] text-[#18181B] text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#F2ECE4] transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#9B7D56]" />
                  <span>Direct WhatsApp Concierge</span>
                </a>
              </div>

              {/* Trust statement */}
              <div className="pt-2">
                <p className="text-xs text-[#6E6860] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <span>
                    Our concierge team will contact you within 60 minutes to confirm therapist schedule and booking window.
                  </span>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
