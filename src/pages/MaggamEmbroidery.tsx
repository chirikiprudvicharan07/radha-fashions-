import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, MessageCircle } from 'lucide-react';
import { MAGGAM_SERVICES, BUSINESS_INFO, PORTFOLIO_ITEMS } from '../data/businessData';
import { ServiceCard } from '../components/ServiceCard';
import { PortfolioCard } from '../components/PortfolioCard';
import { LightboxModal } from '../components/LightboxModal';
import type { PortfolioItem } from '../types';

export const MaggamEmbroidery: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const maggamPortfolio = PORTFOLIO_ITEMS.filter(
    (item) => item.category === 'maggam' || item.category === 'embroidery'
  );

  const filterCategories = ['ALL', 'BRIDAL', 'MAGGAM', 'EMBROIDERY', 'BLOUSE', 'CUSTOM'];

  const filteredPortfolio = selectedFilter === 'ALL'
    ? maggamPortfolio
    : maggamPortfolio.filter((item) => {
        const cat = item.category.toUpperCase();
        const label = item.categoryLabel.toUpperCase();
        return cat.includes(selectedFilter) || label.includes(selectedFilter);
      });

  return (
    <div className="min-h-screen bg-[#FAF7F5] pt-24 pb-20">
      
      {/* HERO SECTION */}
      <section className="bg-stone-950 text-stone-100 py-16 sm:py-20 border-b border-rose-900/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950 border border-rose-800/60 text-rose-200 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Royal Handcrafted Embroidery
            </div>
            <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Maggam & Embroidery Work
            </h1>
            <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed">
              Transform your raw silk blouses into royal masterpieces. Featuring intricate Zardosi, Cutdana, Kundan stone fixing, thread embroidery, traditional peacocks, temple motifs, and custom modern patterns.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <Link
                to="/book-slot?service=Maggam%20%26%20Embroidery"
                className="px-6 py-3 rounded-xl magenta-gradient-bg text-amber-100 font-bold text-xs hover:opacity-95 transition-all shadow-md flex items-center gap-2 border border-amber-300/30"
              >
                <Calendar className="w-4 h-4 text-amber-300" />
                <span>DISCUSS YOUR DESIGN</span>
              </Link>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Radha%20Fashions,%20I%20would%20like%20to%20enquire%20about%20maggam%20blouse%20embroidery.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-500 transition-colors shadow-md flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WHATSAPP EMBROIDERY ENQUIRY</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MAGGAM SERVICES LIST */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-stone-200 pb-4">
          <span className="text-xs font-bold text-rose-800 uppercase tracking-wider">Embroidery Styles</span>
          <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
            Maggam & Embroidery Options
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MAGGAM_SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* FILTERABLE GALLERY */}
      <section className="py-16 bg-stone-900 text-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-stone-800 pb-4">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Handcraft Portfolio</span>
              <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-white mt-1">
                Maggam Design Gallery
              </h2>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {filterCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                    selectedFilter === cat
                      ? 'bg-amber-400 text-stone-950 shadow-md'
                      : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolio.map((item) => (
              <PortfolioCard
                key={item.id}
                item={item}
                onSelect={(selected) => setSelectedItem(selected)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM ENQUIRY BANNER */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-xl text-center space-y-6">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-50 text-rose-900 border border-rose-200">
            Custom Motif Sketching Available
          </span>
          <h2 className="font-serif-heading text-2xl sm:text-4xl font-bold text-stone-900 max-w-2xl mx-auto">
            Have a Specific Maggam Design in Mind?
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-light max-w-md mx-auto">
            Bring your reference photos or discuss customized patterns with our embroidery artisans at Radha Fashions in Koilkuntla.
          </p>
          <div>
            <Link
              to="/book-slot?service=Maggam%20%26%20Embroidery"
              className="inline-block px-8 py-3.5 rounded-full magenta-gradient-bg text-amber-100 font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-all shadow-md border border-amber-300/30"
            >
              DISCUSS YOUR DESIGN NOW
            </Link>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <LightboxModal item={selectedItem} onClose={() => setSelectedItem(null)} />

    </div>
  );
};
