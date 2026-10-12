import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, ArrowRight, Phone, MessageCircle, Check, Award, HeartHandshake } from 'lucide-react';
import { BUSINESS_INFO, BEAUTY_PARLOUR_SERVICES, MAKEUP_SERVICES, BOUTIQUE_SERVICES, PORTFOLIO_ITEMS, TESTIMONIALS } from '../data/businessData';
import { TrustHighlights } from '../components/TrustHighlights';
import { ServiceCard } from '../components/ServiceCard';
import { PortfolioCard } from '../components/PortfolioCard';
import { LightboxModal } from '../components/LightboxModal';
import { MapPlaceholder } from '../components/MapPlaceholder';
import type { PortfolioItem } from '../types';

export const Home: React.FC = () => {
  const [selectedPortfolio, setSelectedPortfolio] = useState<PortfolioItem | null>(null);

  const featuredPortfolio = PORTFOLIO_ITEMS.slice(0, 4);

  return (
    <div className="min-h-screen bg-[#FAF7F5] text-stone-800">
      
      {/* HERO SECTION */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-28 luxury-hero-bg overflow-hidden border-b border-stone-200/60">
        
        {/* Background Subtle Sparkle Effects */}
        <div className="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-rose-200/40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-amber-100/50 blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Text & CTA */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-950 text-rose-100 text-xs font-bold uppercase tracking-widest border border-amber-300/40 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Boutique • Tailoring • Maggam • Beauty • Makeup</span>
              </div>

              <h1 className="font-serif-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-stone-900 leading-[1.15] tracking-tight">
                Your Style. <br />
                <span className="gold-gradient-text">Your Beauty.</span> <br />
                Your Signature.
              </h1>

              <p className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                {BUSINESS_INFO.subTagline}
              </p>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/book-slot"
                  className="w-full sm:w-auto px-8 py-4 rounded-full text-xs font-bold tracking-wider uppercase text-white magenta-gradient-bg shadow-xl hover:shadow-2xl hover:scale-102 transition-all flex items-center justify-center gap-2 border border-amber-300/30 group"
                >
                  <Calendar className="w-4 h-4 text-amber-300 group-hover:rotate-12 transition-transform" />
                  <span>BOOK A SLOT NOW</span>
                </Link>

                <Link
                  to="/our-works"
                  className="w-full sm:w-auto px-7 py-4 rounded-full text-xs font-bold tracking-wider uppercase text-stone-800 bg-white border border-stone-300 shadow-md hover:bg-stone-50 hover:border-rose-800/40 transition-all flex items-center justify-center gap-2"
                >
                  <span>EXPLORE OUR WORK</span>
                  <ArrowRight className="w-4 h-4 text-rose-900" />
                </Link>
              </div>

              {/* Local Trust Badges */}
              <div className="pt-6 border-t border-stone-200/80 flex flex-wrap justify-center lg:justify-start items-center gap-6 text-xs text-stone-600">
                <div className="flex items-center gap-2 font-medium">
                  <Check className="w-4 h-4 text-rose-800" />
                  <span>Koilkuntla Local Studio</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <Check className="w-4 h-4 text-rose-800" />
                  <span>Personalized Tailoring & Fit</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <Check className="w-4 h-4 text-rose-800" />
                  <span>Bridal & HD Makeovers</span>
                </div>
              </div>

            </div>

            {/* Right Hero Image Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Hero Card Image */}
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative z-10 bg-stone-900 aspect-4/5">
                  <img
                    src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80"
                    alt="Radha Fashions Bridal Maggam & Makeup"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-amber-500 text-stone-950 inline-block mb-1">
                      SIGNATURE LOOKS
                    </span>
                    <h3 className="font-serif-heading text-xl font-bold">Bridal Maggam & Makeup</h3>
                    <p className="text-xs text-stone-300 font-light">Custom craftsmanship for your special celebrations.</p>
                  </div>
                </div>

                {/* Floating Secondary Mini Card */}
                <div className="absolute -bottom-6 -left-6 z-20 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-stone-200 hidden sm:flex items-center gap-3.5 max-w-xs">
                  <div className="w-10 h-10 rounded-full magenta-gradient-bg flex items-center justify-center text-amber-300 shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-stone-900">Hydra Facial & Beauty</h4>
                    <p className="text-[11px] text-stone-500">Advanced skin care & grooming</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TRUST HIGHLIGHTS BAR */}
      <TrustHighlights />

      {/* ABOUT RADHA FASHIONS */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-stone-200 aspect-3/4">
                <img
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=900&q=80"
                  alt="Tailoring craftsmanship at Radha Fashions"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 text-rose-900 text-xs font-bold uppercase tracking-wider border border-rose-200">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                <span>Craftsmanship & Artistry</span>
              </div>

              <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
                About Radha Fashions
              </h2>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                Located near APG Bank in Gandhi Nagar, Koilkuntla, <strong className="font-semibold text-stone-900">Radha Fashions</strong> is a premier local destination for ladies seeking custom boutique tailoring, grand Maggam embroidery, HD bridal makeovers, and professional salon care.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/70 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-stone-900 text-xs sm:text-sm">
                    <HeartHandshake className="w-4 h-4 text-rose-800" />
                    <span>Personalized Attention</span>
                  </div>
                  <p className="text-xs text-stone-500 font-light">
                    Every blouse, outfit, or makeover receives dedicated custom consultation to match your style.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/70 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-stone-900 text-xs sm:text-sm">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>Bridal & Event Focus</span>
                  </div>
                  <p className="text-xs text-stone-500 font-light">
                    End-to-end event styling from Maggam embroidery work to long-lasting HD makeup & saree folding.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  to="/contact"
                  className="px-6 py-3 rounded-xl bg-stone-900 text-amber-100 font-bold text-xs hover:bg-stone-800 transition-colors shadow-sm"
                >
                  Visit Studio / Contact Us
                </Link>
                
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="text-xs font-bold text-rose-900 hover:underline flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {BUSINESS_INFO.formattedPhone}</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FEATURED SERVICES OVERVIEW */}
      <section className="py-16 sm:py-24 bg-[#FAF7F5] border-t border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-rose-950 text-rose-200 border border-rose-800/60">
              Our Core Offerings
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-stone-900">
              Fashion, Beauty & Training Under One Roof
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-light">
              Explore specialized services tailored to elevate your personal style, bridal looks, and salon care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Boutique & Tailoring Card */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-900 flex items-center justify-center font-bold text-xl font-serif border border-rose-200">
                  ✂️
                </div>
                <h3 className="font-serif-heading text-xl font-bold text-stone-900 group-hover:text-rose-900 transition-colors">
                  Boutique & Tailoring
                </h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Designer blouse stitching, princess cuts, custom dress designing, lehengas, and precision fitting alterations.
                </p>
              </div>
              <div className="pt-6 border-t border-stone-100 mt-6">
                <Link to="/boutique-tailoring" className="text-xs font-bold text-rose-900 group-hover:underline flex items-center justify-between">
                  <span>View Tailoring Services</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Maggam & Embroidery Card */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-900 flex items-center justify-center font-bold text-xl font-serif border border-amber-200">
                  ✨
                </div>
                <h3 className="font-serif-heading text-xl font-bold text-stone-900 group-hover:text-rose-900 transition-colors">
                  Maggam & Embroidery
                </h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Grand bridal blouse maggam work, zardosi, thread work, cutdana, mirror work, and customized motifs.
                </p>
              </div>
              <div className="pt-6 border-t border-stone-100 mt-6">
                <Link to="/maggam-embroidery" className="text-xs font-bold text-rose-900 group-hover:underline flex items-center justify-between">
                  <span>Explore Maggam Work</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Beauty Parlour Card */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-900 flex items-center justify-center font-bold text-xl font-serif border border-rose-200">
                  🌸
                </div>
                <h3 className="font-serif-heading text-xl font-bold text-stone-900 group-hover:text-rose-900 transition-colors">
                  Beauty Parlour
                </h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Hydra Facial, facials (all types), haircuts, pedicure, manicure, eyebrow threading, body waxing & event care.
                </p>
              </div>
              <div className="pt-6 border-t border-stone-100 mt-6">
                <Link to="/beauty-parlour" className="text-xs font-bold text-rose-900 group-hover:underline flex items-center justify-between">
                  <span>View Beauty Menu</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Makeup Artist Card */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-900 flex items-center justify-center font-bold text-xl font-serif border border-amber-200">
                  💄
                </div>
                <h3 className="font-serif-heading text-xl font-bold text-stone-900 group-hover:text-rose-900 transition-colors">
                  Makeup Artist
                </h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Bridal makeup, HD makeup, drag-proof long stay looks, traditional makeup, hair styling, saree box folding & mehendi.
                </p>
              </div>
              <div className="pt-6 border-t border-stone-100 mt-6">
                <Link to="/makeup-artist" className="text-xs font-bold text-rose-900 group-hover:underline flex items-center justify-between">
                  <span>Explore Makeup Packages</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURED SERVICES PREVIEW GRID */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-stone-200 pb-6">
            <div>
              <span className="text-xs font-bold text-rose-800 uppercase tracking-widest">Handpicked Services</span>
              <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                Popular Client Choices
              </h2>
            </div>
            <Link
              to="/beauty-parlour"
              className="text-xs font-bold text-rose-900 hover:underline flex items-center gap-1"
            >
              <span>View All Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard service={BEAUTY_PARLOUR_SERVICES[0]} />
            <ServiceCard service={MAKEUP_SERVICES[0]} />
            <ServiceCard service={BOUTIQUE_SERVICES[1]} />
          </div>
        </div>
      </section>

      {/* FEATURED WORKS GALLERY SECTION */}
      <section className="py-16 sm:py-24 bg-stone-900 text-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-stone-800 pb-6">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Work Showcase</span>
              <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-white mt-1">
                Featured Portfolio & Craftsmanship
              </h2>
            </div>
            <Link
              to="/our-works"
              className="text-xs font-bold text-amber-300 hover:underline flex items-center gap-1"
            >
              <span>Explore Full Portfolio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPortfolio.map((item) => (
              <PortfolioCard
                key={item.id}
                item={item}
                onSelect={(selected) => setSelectedPortfolio(selected)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING COURSES BANNER */}
      <section className="py-16 bg-[#FAF7F5] border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-50 text-rose-900 border border-rose-200">
                Professional Skill Training
              </span>
              <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-stone-900">
                Learn Tailoring, Maggam & Beauty Artistry
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                Empowering women in Koilkuntla with hands-on training courses in Boutique Tailoring, Maggam Embroidery, Beauty Parlour Care, and Bridal Makeup.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                to="/training-courses"
                className="w-full py-3.5 px-6 rounded-xl magenta-gradient-bg text-amber-100 font-bold text-xs text-center hover:opacity-95 transition-all shadow-md border border-amber-300/30"
              >
                EXPLORE COURSES & ENQUIRE
              </Link>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Radha%20Fashions,%20I%20would%20like%20to%20enquire%20about%20your%20training%20courses.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 text-white font-bold text-xs text-center hover:bg-emerald-500 transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Course Enquiry</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-16 sm:py-24 bg-white border-t border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-xs font-bold text-rose-800 uppercase tracking-widest">Client Feedback</span>
            <h2 className="font-serif-heading text-3xl font-bold text-stone-900">
              Trusted by Local Clients
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="p-6 rounded-2xl bg-stone-50 border border-stone-200/80 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-xs text-stone-700 italic leading-relaxed font-light">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-200 text-xs">
                  <p className="font-bold text-stone-900">{t.clientName}</p>
                  <p className="text-stone-500 text-[11px]">{t.serviceCategory} • {t.location}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* LOCATION & MAP SECTION */}
      <section className="py-16 sm:py-24 bg-[#FAF7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MapPlaceholder />
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      <LightboxModal
        item={selectedPortfolio}
        onClose={() => setSelectedPortfolio(null)}
      />

    </div>
  );
};
