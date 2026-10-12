import React from 'react';
import { Scissors, Sparkles, HeartHandshake, GraduationCap, Award } from 'lucide-react';

export const TrustHighlights: React.FC = () => {
  const highlights = [
    {
      icon: Scissors,
      title: 'Precision Tailoring',
      desc: 'Expert custom stitching, designer blouse fits, and meticulous alterations for flawless elegance.'
    },
    {
      icon: Sparkles,
      title: 'Maggam & Embroidery',
      desc: 'Intricate zardosi, thread work, cutdana, and traditional bridal embroidery motifs.'
    },
    {
      icon: HeartHandshake,
      title: 'HD Bridal Makeovers',
      desc: 'Camera-ready bridal makeup, drag-proof long-lasting looks, saree box folding & mehendi.'
    },
    {
      icon: Award,
      title: 'Hydra Facial & Beauty',
      desc: 'Complete beauty parlour treatments including facials, haircuts, pedicure, manicure & waxing.'
    },
    {
      icon: GraduationCap,
      title: 'Professional Training',
      desc: 'Hands-on training courses in Tailoring, Maggam work, Salon care & Makeup Artistry.'
    }
  ];

  return (
    <section className="py-12 bg-stone-900 text-stone-100 border-y border-rose-900/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-stone-950/70 border border-stone-800 hover:border-rose-800/60 transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-full magenta-gradient-bg flex items-center justify-center text-amber-300 mb-3 shadow-md group-hover:scale-110 transition-transform border border-amber-300/30">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-serif-heading font-bold text-base text-white mb-1 tracking-wide">
                  {item.title}
                </h4>
                <p className="text-xs text-stone-400 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
