import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface FloatingCTAProps {
  customMessage?: string;
}

export const FloatingCTA: React.FC<FloatingCTAProps> = ({ customMessage }) => {
  const defaultText = "Hello Radha Fashions, I would like to enquire about your boutique, beauty and makeup services.";
  const encodedMsg = encodeURIComponent(customMessage || defaultText);
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodedMsg}`;

  return (
    <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col gap-3">
      {/* WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-xl hover:bg-emerald-500 hover:scale-110 transition-all duration-300 group border-2 border-white relative"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-stone-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          Chat on WhatsApp
        </span>
      </a>

      {/* Phone Call Floating Button */}
      <a
        href={`tel:${BUSINESS_INFO.phone}`}
        className="w-13 h-13 rounded-full bg-rose-900 text-amber-200 flex items-center justify-center shadow-xl hover:bg-rose-800 hover:scale-110 transition-all duration-300 group border-2 border-amber-300/40 relative"
        aria-label="Call Radha Fashions"
        title="Call Radha Fashions"
      >
        <Phone className="w-5 h-5" />
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-stone-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          Call: {BUSINESS_INFO.phone}
        </span>
      </a>
    </div>
  );
};
