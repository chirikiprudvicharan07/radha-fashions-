import React, { useEffect } from 'react';
import { X, Calendar, MessageCircle, Sparkles } from 'lucide-react';
import type { PortfolioItem } from '../types';
import { BUSINESS_INFO } from '../data/businessData';
import { Link } from 'react-router-dom';

interface LightboxModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  const whatsappMsg = encodeURIComponent(
    `Hello Radha Fashions, I loved this design from your gallery: "${item.title}" (${item.categoryLabel}). Please let me know pricing and customization options.`
  );
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${whatsappMsg}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/90 backdrop-blur-md animate-fadeIn">
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative bg-stone-900 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl border border-rose-900/40 z-10 flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-stone-950/80 text-white hover:bg-stone-800 transition-colors border border-stone-700"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Large Image Container */}
        <div className="md:w-3/5 bg-black flex items-center justify-center relative overflow-hidden min-h-[300px] md:min-h-[500px]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain max-h-[75vh]"
          />
        </div>

        {/* Details Side Panel */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between space-y-6 text-stone-200 overflow-y-auto">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-rose-950 border border-rose-800/60 text-rose-200">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              {item.categoryLabel}
            </span>

            <h3 className="font-serif-heading text-2xl font-bold text-white leading-tight">
              {item.title}
            </h3>

            <p className="text-xs text-stone-300 leading-relaxed font-light">
              {item.description}
            </p>

            <div className="p-3.5 rounded-xl bg-stone-800/80 border border-stone-700/60 text-xs text-stone-300 space-y-1">
              <p className="font-semibold text-amber-300">Customization & Fit:</p>
              <p>Each design can be customized in fabric color, neckline pattern, sleeve length, and embroidery density.</p>
            </div>
          </div>

          <div className="space-y-2.5 pt-4 border-t border-stone-800">
            <Link
              to={`/book-slot?service=${encodeURIComponent(item.title)}`}
              onClick={onClose}
              className="w-full py-3 px-4 rounded-xl magenta-gradient-bg text-amber-100 font-bold text-xs text-center hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-md border border-amber-300/30"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>Discuss or Book This Design</span>
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-emerald-600 text-white font-bold text-xs text-center hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
