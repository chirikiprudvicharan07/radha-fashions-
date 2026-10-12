import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Calendar, Menu, X, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'BOUTIQUE & TAILORING', path: '/boutique-tailoring' },
    { name: 'MAGGAM & EMBROIDERY', path: '/maggam-embroidery' },
    { name: 'BEAUTY PARLOUR', path: '/beauty-parlour' },
    { name: 'MAKEUP ARTIST', path: '/makeup-artist' },
    { name: 'TRAINING COURSES', path: '/training-courses' },
    { name: 'OUR WORKS', path: '/our-works' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-rose-100/60' 
        : 'bg-white/80 backdrop-blur-sm py-4 border-b border-stone-200/40'
    }`}>
      {/* Top Banner Bar for Quick Contact */}
      <div className="hidden lg:block bg-stone-900 text-rose-100 py-1.5 px-6 text-xs font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-amber-200">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Boutique • Tailoring • Maggam • Beauty • Makeup • Training</span>
            </span>
            <span className="text-stone-400">|</span>
            <span>📍 {BUSINESS_INFO.location.fullAddress}</span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="hover:text-amber-300 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>
            <a 
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Radha%20Fashions,%20I%20would%20like%20to%20enquire%20about%20your%20services.`}
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-emerald-300 transition-colors flex items-center gap-1 text-emerald-300 font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full magenta-gradient-bg flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform border border-amber-300/40">
              <span className="font-serif-heading font-bold text-xl tracking-wider text-amber-200">R</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif-heading text-xl sm:text-2xl font-bold tracking-tight text-stone-900 group-hover:text-rose-900 transition-colors">
                RADHA <span className="text-rose-900 font-normal">FASHIONS</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-amber-700 -mt-0.5">
                Boutique & Beauty Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1.5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 text-xs font-semibold tracking-wider transition-all duration-200 rounded-md ${
                    isActive
                      ? 'text-rose-900 bg-rose-50 border-b-2 border-rose-800'
                      : 'text-stone-700 hover:text-rose-900 hover:bg-stone-100/60'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Call To Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/book-slot"
              className="px-5 py-2.5 rounded-full text-xs font-bold tracking-wider text-white magenta-gradient-bg shadow-md hover:shadow-lg hover:opacity-95 transition-all flex items-center gap-2 group border border-amber-300/30"
            >
              <Calendar className="w-4 h-4 text-amber-300 group-hover:rotate-12 transition-transform" />
              <span>BOOK A SLOT</span>
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex xl:hidden items-center gap-2">
            <Link
              to="/book-slot"
              className="sm:hidden px-3 py-1.5 rounded-full text-[11px] font-bold text-white bg-rose-900 flex items-center gap-1 shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-300" />
              <span>BOOK</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-rose-900 focus:outline-none rounded-lg hover:bg-stone-100"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fadeIn">
          <div className="py-2 border-b border-stone-100 mb-2">
            <p className="text-xs text-stone-500">Koilkuntla • Near APG Bank, Gandhi Nagar</p>
          </div>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                  isActive
                    ? 'bg-rose-900 text-amber-100'
                    : 'text-stone-800 hover:bg-rose-50 hover:text-rose-900'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          
          <div className="pt-4 border-t border-stone-100 space-y-2">
            <Link
              to="/book-slot"
              className="w-full py-3 text-center rounded-xl font-bold text-sm text-white magenta-gradient-bg flex items-center justify-center gap-2 shadow-md"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>BOOK AN APPOINTMENT</span>
            </Link>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="py-2.5 px-3 rounded-lg border border-stone-300 bg-stone-50 text-stone-800 font-semibold text-xs text-center flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-rose-800" />
                <span>Call Us</span>
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Radha%20Fashions,%20I%20would%20like%20to%20enquire%20about%20your%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-lg bg-emerald-600 text-white font-semibold text-xs text-center flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
