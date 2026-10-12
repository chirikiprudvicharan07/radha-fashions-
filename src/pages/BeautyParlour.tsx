import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, MessageCircle, CheckCircle2 } from 'lucide-react';
import { BEAUTY_PARLOUR_SERVICES, BUSINESS_INFO } from '../data/businessData';
import { ServiceCard } from '../components/ServiceCard';

export const BeautyParlour: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF7F5] pt-24 pb-20">
      
      {/* PAGE HERO */}
      <section className="bg-stone-900 text-stone-100 py-16 sm:py-20 border-b border-rose-900/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950 border border-rose-800/60 text-rose-200 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Radha Beauty Parlour • Koilkuntla
            </div>
            <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Beauty Parlour Services
            </h1>
            <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed">
              Experience gentle, hygienic, and professional salon care. From Hydra Facials and skin brightening treatments to haircut styling, pedicures, manicures, and body waxing.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <Link
                to="/book-slot?service=Beauty%20Parlour"
                className="px-6 py-3 rounded-xl magenta-gradient-bg text-amber-100 font-bold text-xs hover:opacity-95 transition-all shadow-md flex items-center gap-2 border border-amber-300/30"
              >
                <Calendar className="w-4 h-4 text-amber-300" />
                <span>BOOK BEAUTY APPOINTMENT</span>
              </Link>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Radha%20Fashions,%20I%20would%20like%20to%20enquire%20about%20beauty%20parlour%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-500 transition-colors shadow-md flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WHATSAPP PARLOUR ENQUIRY</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BEAUTY SERVICES GRID */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-stone-200 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
          <div>
            <span className="text-xs font-bold text-rose-800 uppercase tracking-wider">Salon Care Menu</span>
            <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
              All Beauty Services
            </h2>
          </div>
          <p className="text-xs text-stone-500 font-medium">
            Contact us for custom package combinations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BEAUTY_PARLOUR_SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* HYDRA FACIAL HIGHLIGHT SPOTLIGHT */}
      <section className="py-16 bg-white border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-xl border border-stone-200 aspect-4/3">
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80"
                alt="Hydra Facial treatment at Radha Beauty Parlour"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-6 space-y-4">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-50 text-rose-900 border border-rose-200">
                Spotlight Treatment
              </span>
              <h2 className="font-serif-heading text-3xl font-bold text-stone-900">
                Hydra Facial for Instant Radiance
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                Our Hydra Facial deep cleanses pores, removes dead skin cells, extracts impurities, and infuses essential hydrating serums for an immediate bridal and party-ready glow.
              </p>

              <div className="space-y-2 text-xs text-stone-700 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-800" />
                  <span>Deep Pore Cleansing & Blackhead Extraction</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-800" />
                  <span>Gentle Exfoliation & Nourishing Serums</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-800" />
                  <span>Suitable for Sensitive & Festive-Ready Skin</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/book-slot?service=Hydra%20Facial"
                  className="inline-block px-6 py-3 rounded-xl magenta-gradient-bg text-amber-100 font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-all shadow-md border border-amber-300/30"
                >
                  BOOK HYDRA FACIAL SLOT
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* BOOKING BANNER */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 border border-rose-900/40 shadow-xl">
          <h2 className="font-serif-heading text-2xl sm:text-4xl font-bold max-w-2xl mx-auto">
            Book Your Salon Care Session
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 font-light max-w-md mx-auto">
            Visit Radha Beauty Parlour near APG Bank, Gandhi Nagar, Koilkuntla or book a slot online.
          </p>
          <div>
            <Link
              to="/book-slot?service=Beauty%20Parlour"
              className="inline-block px-8 py-3.5 rounded-full magenta-gradient-bg text-amber-100 font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-all shadow-md border border-amber-300/30"
            >
              BOOK BEAUTY SLOT NOW
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
