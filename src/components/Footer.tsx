import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, MessageCircle, Clock, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-24 lg:pb-12 border-t border-rose-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand & Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full magenta-gradient-bg flex items-center justify-center text-white shadow-md border border-amber-400/40">
                <span className="font-serif-heading font-bold text-xl text-amber-200">R</span>
              </div>
              <div>
                <h3 className="font-serif-heading text-xl font-bold text-white tracking-wide">
                  RADHA <span className="text-rose-400 font-normal">FASHIONS</span>
                </h3>
                <p className="text-[10px] tracking-widest text-amber-400 font-medium uppercase">Koilkuntla</p>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              Boutique • Tailoring • Maggam • Embroidery • Beauty • Makeup • Training
            </p>

            <p className="text-xs text-stone-400 italic font-serif">
              "{BUSINESS_INFO.tagline}"
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] bg-rose-950/80 border border-rose-800/40 text-rose-200 font-medium">
                <Sparkles className="w-3 h-3 text-amber-400" />
                Ladies-focused Fashion & Beauty Studio
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-amber-300 tracking-wider uppercase font-serif-heading">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span>›</span> Home
                </Link>
              </li>
              <li>
                <Link to="/boutique-tailoring" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span>›</span> Boutique & Tailoring
                </Link>
              </li>
              <li>
                <Link to="/maggam-embroidery" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span>›</span> Maggam & Embroidery
                </Link>
              </li>
              <li>
                <Link to="/beauty-parlour" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span>›</span> Beauty Parlour
                </Link>
              </li>
              <li>
                <Link to="/makeup-artist" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span>›</span> Makeup Artist
                </Link>
              </li>
              <li>
                <Link to="/training-courses" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span>›</span> Training Courses
                </Link>
              </li>
              <li>
                <Link to="/our-works" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span>›</span> Our Works
                </Link>
              </li>
              <li>
                <Link to="/book-slot" className="hover:text-amber-300 transition-colors flex items-center gap-2 font-semibold text-rose-300">
                  <span>›</span> Book a Slot
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Key Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-amber-300 tracking-wider uppercase font-serif-heading">Services Offered</h4>
            <ul className="space-y-1.5 text-xs text-stone-400">
              <li>• Bridal Makeup & HD Makeover</li>
              <li>• Drag Proof & Traditional Looks</li>
              <li>• Hydra Facial & Beauty Treatments</li>
              <li>• Designer Blouse & Lehenga Stitching</li>
              <li>• Heavy Maggam & Thread Embroidery</li>
              <li>• Saree Box Folding & Draping</li>
              <li>• Mehendi Artistry & Hair Styling</li>
              <li>• Professional Skill Training Courses</li>
            </ul>
          </div>

          {/* Direct Contact & Address */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-amber-300 tracking-wider uppercase font-serif-heading">Contact & Location</h4>
            
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span className="text-stone-300 leading-snug">
                  {BUSINESS_INFO.location.fullAddress}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-white hover:text-amber-300 font-semibold transition-colors">
                  {BUSINESS_INFO.formattedPhone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Radha%20Fashions,%20I%20would%20like%20to%20enquire%20about%20your%20services.`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-emerald-300 hover:underline font-semibold"
                >
                  WhatsApp: {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5 pt-1 text-stone-400">
                <Clock className="w-4 h-4 text-rose-300 shrink-0" />
                <span>{BUSINESS_INFO.businessHours}</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/book-slot"
                className="inline-block w-full text-center py-2.5 px-4 rounded-lg bg-rose-900 text-amber-100 font-bold text-xs hover:bg-rose-800 transition-colors border border-amber-300/30"
              >
                BOOK YOUR APPOINTMENT NOW
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="mt-12 pt-8 border-t border-stone-800 text-center sm:flex sm:justify-between sm:items-center text-xs text-stone-500 space-y-2 sm:space-y-0">
          <p>© {new Date().getFullYear()} Radha Fashions. All rights reserved.</p>
          <p className="text-[11px]">Designed for Radha Fashions • Koilkuntla</p>
        </div>
      </div>
    </footer>
  );
};
