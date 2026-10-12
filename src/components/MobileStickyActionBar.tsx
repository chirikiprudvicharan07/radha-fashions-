import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const MobileStickyActionBar: React.FC = () => {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Radha%20Fashions,%20I%20would%20like%20to%20enquire%20about%20your%20boutique%20and%20beauty%20services.`;

  return (
    <div className="xl:hidden fixed bottom-0 left-0 right-0 z-50 bg-stone-900/95 backdrop-blur-lg border-t border-rose-900/40 p-2.5 shadow-2xl">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* CALL */}
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-stone-800 text-stone-100 hover:bg-stone-700 transition-colors border border-stone-700/60 active:scale-95"
          aria-label="Call Radha Fashions"
        >
          <Phone className="w-4 h-4 text-amber-400 mb-0.5" />
          <span className="text-[11px] font-bold tracking-wider">CALL</span>
        </a>

        {/* WHATSAPP */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-700 text-white hover:bg-emerald-600 transition-colors active:scale-95 shadow-sm"
          aria-label="Chat on WhatsApp with Radha Fashions"
        >
          <MessageCircle className="w-4 h-4 text-white mb-0.5 fill-current" />
          <span className="text-[11px] font-bold tracking-wider">WHATSAPP</span>
        </a>

        {/* BOOK NOW */}
        <Link
          to="/book-slot"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl magenta-gradient-bg text-amber-100 font-bold hover:opacity-95 transition-all active:scale-95 shadow-md border border-amber-300/30"
          aria-label="Book a slot at Radha Fashions"
        >
          <Calendar className="w-4 h-4 text-amber-300 mb-0.5" />
          <span className="text-[11px] font-bold tracking-wider">BOOK NOW</span>
        </Link>
      </div>
    </div>
  );
};
