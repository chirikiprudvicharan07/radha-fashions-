import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Calendar, Clock, User, Phone, MessageSquare, CheckCircle, MessageCircle, PhoneCall, Sparkles } from 'lucide-react';
import type { BookingFormData } from '../types';
import { BUSINESS_INFO } from '../data/businessData';

export const BookingForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || '';

  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    service: preselectedService || 'Boutique & Tailoring',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 1:00 PM)',
    requirements: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const serviceOptions = [
    'Boutique & Tailoring',
    'Maggam & Embroidery',
    'Beauty Parlour',
    'Makeup Artist',
    'Training Courses',
    'Hydra Facial',
    'Bridal Makeup',
    'Designer Blouse Stitching',
    'Other'
  ];

  const timeSlotOptions = [
    'Morning (10:00 AM - 1:00 PM)',
    'Afternoon (1:00 PM - 4:00 PM)',
    'Evening (4:00 PM - 7:30 PM)'
  ];

  const validateForm = () => {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name.';
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service.';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Generate prefilled WhatsApp message payload
    const messagePayload = `Hello Radha Fashions,
I would like to book an appointment slot:
• Name: ${formData.name}
• Phone: ${formData.phone}
• Service: ${formData.service}
• Preferred Date: ${formData.preferredDate}
• Preferred Time: ${formData.preferredTime}
${formData.requirements ? `• Requirements: ${formData.requirements}` : ''}

Please confirm availability. Thank you!`;

    const generatedWhatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(messagePayload)}`;
    setWhatsappUrl(generatedWhatsappUrl);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      service: 'Boutique & Tailoring',
      preferredDate: '',
      preferredTime: 'Morning (10:00 AM - 1:00 PM)',
      requirements: ''
    });
    setErrors({});
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-xl max-w-2xl mx-auto text-center space-y-6 animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle className="w-10 h-10" />
        </div>

        <div>
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">APPOINTMENT REQUEST RECEIVED</span>
          <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
            Thank You, {formData.name}!
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-md mx-auto leading-relaxed">
            Your booking request for <span className="font-bold text-rose-900">{formData.service}</span> on{' '}
            <span className="font-bold text-stone-900">{formData.preferredDate}</span> ({formData.preferredTime}) has been recorded.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/70 text-xs text-amber-900 text-left space-y-1">
          <p className="font-bold flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Instant Confirmation Tip:
          </p>
          <p>
            Click below to send your request directly to our WhatsApp for immediate confirmation and slot reservation!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3.5 px-4 rounded-xl bg-emerald-600 text-white font-bold text-xs sm:text-sm text-center hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2 shadow-md"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>CONFIRM ON WHATSAPP NOW</span>
          </a>

          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="py-3.5 px-4 rounded-xl bg-stone-900 text-amber-100 font-bold text-xs sm:text-sm text-center hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 shadow-md"
          >
            <PhoneCall className="w-4 h-4 text-amber-300" />
            <span>CALL US: {BUSINESS_INFO.phone}</span>
          </a>
        </div>

        <div className="pt-4 border-t border-stone-100">
          <button
            onClick={handleReset}
            className="text-xs font-semibold text-rose-800 hover:underline"
          >
            ← Book another slot or edit details
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-xl max-w-2xl mx-auto space-y-6">
      
      <div className="text-center space-y-2 border-b border-stone-100 pb-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-rose-50 text-rose-900 border border-rose-200/60">
          <Calendar className="w-3.5 h-3.5 text-amber-500" />
          Easy Online Booking
        </span>
        <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-stone-900">
          Book Your Appointment Slot
        </h3>
        <p className="text-xs text-stone-500 max-w-md mx-auto">
          Reserve your slot for tailored consultations, bridal makeup sessions, beauty treatments, or course enquiries.
        </p>
      </div>

      <div className="space-y-4">
        {/* Name Input */}
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
            <User className="w-3.5 h-3.5 text-rose-800" />
            Full Name <span className="text-rose-600">*</span>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Enter your full name"
            className={`w-full px-4 py-3 text-xs sm:text-sm rounded-xl border bg-stone-50/50 focus:bg-white focus:outline-none transition-colors ${
              errors.name ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-stone-300 focus:border-rose-800'
            }`}
          />
          {errors.name && <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.name}</p>}
        </div>

        {/* Phone Input */}
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
            <Phone className="w-3.5 h-3.5 text-rose-800" />
            Phone Number <span className="text-rose-600">*</span>
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="e.g. 7013942601"
            className={`w-full px-4 py-3 text-xs sm:text-sm rounded-xl border bg-stone-50/50 focus:bg-white focus:outline-none transition-colors ${
              errors.phone ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-stone-300 focus:border-rose-800'
            }`}
          />
          {errors.phone && <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.phone}</p>}
        </div>

        {/* Service Select */}
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-rose-800" />
            Select Service <span className="text-rose-600">*</span>
          </label>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-stone-300 bg-stone-50/50 focus:bg-white focus:border-rose-800 focus:outline-none transition-colors font-medium text-stone-800"
          >
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.service && <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.service}</p>}
        </div>

        {/* Date & Time Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-rose-800" />
              Preferred Date <span className="text-rose-600">*</span>
            </label>
            <input
              type="date"
              min={new Date().toISOString().split('T')[0]}
              value={formData.preferredDate}
              onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
              className={`w-full px-4 py-3 text-xs sm:text-sm rounded-xl border bg-stone-50/50 focus:bg-white focus:outline-none transition-colors ${
                errors.preferredDate ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-stone-300 focus:border-rose-800'
              }`}
            />
            {errors.preferredDate && <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.preferredDate}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-rose-800" />
              Preferred Time
            </label>
            <select
              value={formData.preferredTime}
              onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
              className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-stone-300 bg-stone-50/50 focus:bg-white focus:border-rose-800 focus:outline-none transition-colors font-medium text-stone-800"
            >
              {timeSlotOptions.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Message / Requirements */}
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
            <MessageSquare className="w-3.5 h-3.5 text-rose-800" />
            Special Requirements / Notes (Optional)
          </label>
          <textarea
            rows={3}
            value={formData.requirements}
            onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
            placeholder="Tell us about your outfit specifications, bridal event date, facial skin type, or course queries..."
            className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-stone-300 bg-stone-50/50 focus:bg-white focus:border-rose-800 focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="w-full py-4 px-6 rounded-2xl text-white font-bold text-sm tracking-wider uppercase magenta-gradient-bg shadow-lg hover:shadow-xl hover:opacity-95 transition-all flex items-center justify-center gap-2 border border-amber-300/40"
        >
          <Calendar className="w-4 h-4 text-amber-300" />
          <span>REQUEST APPOINTMENT SLOT</span>
        </button>
      </div>

    </form>
  );
};
