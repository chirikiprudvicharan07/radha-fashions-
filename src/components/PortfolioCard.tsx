import React from 'react';
import { ZoomIn, Sparkles } from 'lucide-react';
import type { PortfolioItem } from '../types';

interface PortfolioCardProps {
  item: PortfolioItem;
  onSelect: (item: PortfolioItem) => void;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ item, onSelect }) => {
  return (
    <div 
      onClick={() => onSelect(item)}
      className="group relative rounded-2xl overflow-hidden bg-stone-900 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 border border-stone-200/60"
    >
      <div className="aspect-4/5 sm:aspect-3/4 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

      {/* Top Category Tag */}
      <div className="absolute top-3 left-3">
        <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/90 text-stone-900 backdrop-blur-md shadow-sm flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-rose-800" />
          {item.categoryLabel}
        </span>
      </div>

      {/* Zoom Icon Hint */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-8 h-8 rounded-full bg-stone-900/80 text-amber-300 flex items-center justify-center backdrop-blur-md">
          <ZoomIn className="w-4 h-4" />
        </div>
      </div>

      {/* Bottom Information Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-5 transform group-hover:-translate-y-1 transition-transform">
        <h4 className="font-serif-heading text-lg font-bold text-white mb-1 tracking-wide">
          {item.title}
        </h4>
        <p className="text-xs text-stone-300 line-clamp-2 leading-relaxed font-light">
          {item.description}
        </p>
        
        <div className="mt-3 flex items-center gap-1.5 text-amber-300 text-xs font-semibold group-hover:underline">
          <span>Click to view full design</span>
          <span>→</span>
        </div>
      </div>
    </div>
  );
};
