import React, { useState } from 'react';
import { Sparkles, Filter } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/businessData';
import { PortfolioCard } from '../components/PortfolioCard';
import { LightboxModal } from '../components/LightboxModal';
import type { PortfolioItem } from '../types';

export const OurWorks: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const categories = [
    'ALL',
    'TAILORING',
    'BOUTIQUE',
    'MAGGAM',
    'EMBROIDERY',
    'BRIDAL MAKEUP',
    'MAKEUP',
    'HAIR',
    'BEAUTY'
  ];

  const filteredItems = activeCategory === 'ALL'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => {
        const cat = item.category.toUpperCase();
        const label = item.categoryLabel.toUpperCase();
        return cat === activeCategory || label === activeCategory || cat.includes(activeCategory);
      });

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 pt-24 pb-20">
      
      {/* PAGE HERO */}
      <section className="py-12 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950 border border-rose-800 text-rose-200 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            Radha Fashions Lookbook
          </div>
          <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Our Portfolio & Works
          </h1>
          <p className="text-xs sm:text-sm text-stone-400 font-light max-w-2xl leading-relaxed">
            Browse our curated showcase of custom boutique tailoring, bridal Maggam blouse work, high-definition makeup, and salon transformations. Click any image to view details and enquire.
          </p>
        </div>
      </section>

      {/* FILTER BAR & GALLERY */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Category Buttons Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 no-scrollbar">
          <Filter className="w-4 h-4 text-amber-400 shrink-0 mr-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-amber-400 text-stone-950 shadow-md scale-105'
                  : 'bg-stone-900 text-stone-300 hover:bg-stone-800 border border-stone-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <PortfolioCard
              key={item.id}
              item={item}
              onSelect={(selected) => setSelectedItem(selected)}
            />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="py-16 text-center text-stone-500 space-y-2">
            <p className="text-sm font-semibold">No designs found under this category.</p>
            <p className="text-xs">Select "ALL" to view the complete lookbook.</p>
          </div>
        )}

      </section>

      {/* LIGHTBOX MODAL */}
      <LightboxModal item={selectedItem} onClose={() => setSelectedItem(null)} />

    </div>
  );
};
