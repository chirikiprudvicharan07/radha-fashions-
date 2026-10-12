import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, MessageCircle, CheckCircle2 } from 'lucide-react';
import { MAKEUP_SERVICES, BUSINESS_INFO, PORTFOLIO_ITEMS } from '../data/businessData';
import { ServiceCard } from '../components/ServiceCard';
import { PortfolioCard } from '../components/PortfolioCard';
import { LightboxModal } from '../components/LightboxModal';
import type { PortfolioItem } from '../types';

export const MakeupArtist: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const makeupPortfolio = PORTFOLIO_ITEMS.filter(
    (item) => item.category === 'bridal makeup' || item.category === 'makeup' || item.category === 'hair'
  );

  return (
    <div className="min-h-screen bg-[#FAF7F5] pt-24 pb-20">
      
      {/* HERO SECTION */}
      <section className="bg-stone-950 text-stone-100 py-16 sm:py-20 border-b border-rose-900/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950 border border-rose-800/60 text-rose-200 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Radha Make Overs • Professional Bridal Studio
            </div>
            <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Bridal & Event Makeup Artistry
            </h1>
            <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed">
              Exquisite bridal makeovers, HD camera-ready makeup, drag-proof sweat resistant formulas, traditional looks, hair styling (Poola Jada), saree box folding, and intricate mehendi artistry.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <Link
                to="/book-slot?service=Bridal%20Makeup"
                className="px-6 py-3 rounded-xl magenta-gradient-bg text-amber-100 font-bold text-xs hover:opacity-95 transition-all shadow-md flex items-center gap-2 border border-amber-300/30"
              >
                <Calendar className="w-4 h-4 text-amber-300" />
                <span>BOOK BRIDAL SLOT</span>
              </Link>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Radha%20Fashions,%20I%20would%20like%20to%20enquire%20about%20bridal%20makeup%20packages.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-500 transition-colors shadow-md flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>ENQUIRE FOR MAKEUP PACKAGE</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MAKEUP SERVICES & PACKAGES */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-stone-200 pb-4">
          <span className="text-xs font-bold text-rose-800 uppercase tracking-wider">Flyer Offerings</span>
          <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
            Radha Make Overs Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MAKEUP_SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* SPECIAL FEATURES: SAREE BOX FOLDING & DRAG PROOF */}
      <section className="py-16 bg-white border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-50 text-rose-900 border border-rose-200">
                Specialized Service
              </span>
              <h2 className="font-serif-heading text-3xl font-bold text-stone-900">
                Saree Box Folding & Pre-Pleating
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                Save hours on your wedding or event morning! Our professional saree pre-pleating and box folding allows you to drape your heavy silk saree perfectly in less than 5 minutes with zero hassle.
              </p>

              <div className="space-y-2 text-xs text-stone-700 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-800" />
                  <span>Precision Pallu & Waist Pleating</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-800" />
                  <span>Crisp Iron-Pressed Borders</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-800" />
                  <span>Effortless 5-Minute Self Draping</span>
                </div>
              </div>

              <div className="pt-3">
                <Link
                  to="/book-slot?service=Saree%20Box%20Folding"
                  className="inline-block px-6 py-3 rounded-xl bg-stone-900 text-amber-100 font-bold text-xs uppercase tracking-wider hover:bg-stone-800 transition-colors shadow-sm"
                >
                  ENQUIRE FOR SAREE BOX FOLDING
                </Link>
              </div>

            </div>

            <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-xl border border-stone-200 aspect-4/3">
              <img
                src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80"
                alt="Saree box folding service at Radha Fashions"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

        </div>
      </section>

      {/* PORTFOLIO SHOWCASE */}
      {makeupPortfolio.length > 0 && (
        <section className="py-16 bg-stone-900 text-stone-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="border-b border-stone-800 pb-4">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Portfolio</span>
              <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-white mt-1">
                Bridal & Event Lookbook
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {makeupPortfolio.map((item) => (
                <PortfolioCard
                  key={item.id}
                  item={item}
                  onSelect={(selected) => setSelectedItem(selected)}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* LIGHTBOX */}
      <LightboxModal item={selectedItem} onClose={() => setSelectedItem(null)} />

    </div>
  );
};
