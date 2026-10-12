import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Calendar, MessageCircle, Ruler, Shirt, Layers } from 'lucide-react';
import { BOUTIQUE_SERVICES, BUSINESS_INFO, PORTFOLIO_ITEMS } from '../data/businessData';
import { ServiceCard } from '../components/ServiceCard';
import { PortfolioCard } from '../components/PortfolioCard';
import { LightboxModal } from '../components/LightboxModal';
import type { PortfolioItem } from '../types';

export const BoutiqueTailoring: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const tailoringPortfolio = PORTFOLIO_ITEMS.filter(
    (item) => item.category === 'boutique' || item.category === 'tailoring'
  );

  const processSteps = [
    {
      num: '01',
      title: 'Design Consultation & Measurement',
      desc: 'Discuss your outfit vision, neck patterns, sleeve length, padding, and precise body measurements.'
    },
    {
      num: '02',
      title: 'Fabric Selection & Pattern Drafting',
      desc: 'We assist with fabric choices or work with your provided saree & material to draft paper patterns.'
    },
    {
      num: '03',
      title: 'Precision Stitching & Fitting Trial',
      desc: 'Expert tailoring with clean seams, inner lining, piping finish, and fitting trial.'
    },
    {
      num: '04',
      title: 'Final Delivery & Perfect Wear',
      desc: 'Iron-pressed, packed, and ready for your occasion with 100% fitting satisfaction.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F5] pt-24 pb-20">
      
      {/* PAGE HERO */}
      <section className="bg-stone-900 text-stone-100 py-16 sm:py-20 border-b border-rose-900/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950 border border-rose-800/60 text-rose-200 text-xs font-bold uppercase tracking-wider">
              <Scissors className="w-3.5 h-3.5 text-amber-300" />
              Custom Fit Guarantee
            </div>
            <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Boutique & Tailoring Services
            </h1>
            <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed">
              From bespoke designer blouses and princess cut stitching to elegant lehengas and precision outfit alterations — experience tailored perfection designed for your body shape and personal style.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <Link
                to="/book-slot?service=Boutique%20%26%20Tailoring"
                className="px-6 py-3 rounded-xl magenta-gradient-bg text-amber-100 font-bold text-xs hover:opacity-95 transition-all shadow-md flex items-center gap-2 border border-amber-300/30"
              >
                <Calendar className="w-4 h-4 text-amber-300" />
                <span>BOOK A CONSULTATION</span>
              </Link>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Radha%20Fashions,%20I%20would%20like%20to%20enquire%20about%20boutique%20stitching.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-500 transition-colors shadow-md flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WHATSAPP TAILORING ENQUIRY</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TAILORING SERVICES GRID */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-stone-200 pb-4">
          <span className="text-xs font-bold text-rose-800 uppercase tracking-wider">Services</span>
          <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
            Tailoring & Stitching Options
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {BOUTIQUE_SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* SPECIALTIES FEATURE HIGHLIGHTS */}
      <section className="py-16 bg-white border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-xs font-bold text-rose-800 uppercase tracking-widest">Why Choose Us</span>
            <h2 className="font-serif-heading text-3xl font-bold text-stone-900">
              Boutique Craftsmanship Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAF7F5] border border-stone-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-900 flex items-center justify-center font-bold">
                <Ruler className="w-5 h-5 text-rose-900" />
              </div>
              <h3 className="font-serif-heading text-lg font-bold text-stone-900">Custom Measurement Taking</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Detailed measurement record maintained for each client ensuring effortless repeat orders and precise fit.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF7F5] border border-stone-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
                <Shirt className="w-5 h-5 text-amber-900" />
              </div>
              <h3 className="font-serif-heading text-lg font-bold text-stone-900">Blouse Design Expertise</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Princess cut, boat neck, high neck, deep V-back, dori attachments, and padded cup options tailored cleanly.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF7F5] border border-stone-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-900 flex items-center justify-center font-bold">
                <Layers className="w-5 h-5 text-rose-900" />
              </div>
              <h3 className="font-serif-heading text-lg font-bold text-stone-900">Alterations & Restyling</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Transform old sarees into designer dresses, modify readymade outfits, or fix fitting issues accurately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMIZATION PROCESS STEPS */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-xs font-bold text-rose-800 uppercase tracking-widest">Simple Workflow</span>
          <h2 className="font-serif-heading text-3xl font-bold text-stone-900">
            Our Stitching Process
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <div key={step.num} className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3 relative">
              <span className="text-3xl font-serif-heading font-bold text-rose-800/30 block">
                {step.num}
              </span>
              <h3 className="font-serif-heading text-base font-bold text-stone-900">
                {step.title}
              </h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TAILORING GALLERY */}
      {tailoringPortfolio.length > 0 && (
        <section className="py-16 bg-stone-900 text-stone-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="border-b border-stone-800 pb-4">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Gallery</span>
              <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-white mt-1">
                Recent Tailoring Works
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tailoringPortfolio.map((item) => (
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

      {/* BOTTOM CTA BANNER */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 border border-rose-900/40 shadow-xl">
          <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-950 border border-rose-800 text-rose-200">
            Book Your Fitting Appointment
          </span>
          <h2 className="font-serif-heading text-2xl sm:text-4xl font-bold max-w-2xl mx-auto">
            Ready to Stitch Your Next Favorite Outfit?
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 font-light max-w-lg mx-auto">
            Visit Radha Fashions near APG Bank, Gandhi Nagar, Koilkuntla for custom fitting and fabric consultation.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              to="/book-slot?service=Boutique%20%26%20Tailoring"
              className="px-8 py-3.5 rounded-full magenta-gradient-bg text-amber-100 font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-all shadow-md border border-amber-300/30"
            >
              BOOK STITCHING SLOT
            </Link>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <LightboxModal item={selectedItem} onClose={() => setSelectedItem(null)} />

    </div>
  );
};
