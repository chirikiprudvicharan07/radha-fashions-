import React from 'react';
import { MapPin, Navigation, Phone, Clock, Landmark } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const MapPlaceholder: React.FC = () => {
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.location.fullAddress)}`;

  return (
    <div className="bg-stone-900 rounded-3xl overflow-hidden border border-rose-900/30 text-stone-200 shadow-xl p-6 sm:p-8 relative">
      
      {/* Visual Header Map Backdrop Graphic */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fb7185_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Location Info */}
        <div className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950 border border-rose-800/60 text-rose-200 text-xs font-bold uppercase tracking-wider">
            <Landmark className="w-3.5 h-3.5 text-amber-300" />
            Strategic Location
          </div>

          <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-white leading-snug">
            Visit Our Studio in Koilkuntla
          </h3>

          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
            Conveniently located in Gandhi Nagar near APG Bank. Visit us for custom fit measurements, fabric consultations, Maggam pattern selection, bridal makeup trials, or training enrollment.
          </p>

          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-800/80 border border-stone-700/60 text-xs">
              <MapPin className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block text-sm">Full Studio Address</span>
                <span className="text-stone-300">{BUSINESS_INFO.location.fullAddress}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-stone-800/50 border border-stone-800">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <span className="text-[10px] text-stone-400 uppercase font-semibold block">Phone</span>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="font-bold text-white hover:text-amber-300">
                    {BUSINESS_INFO.formattedPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-stone-800/50 border border-stone-800">
                <Clock className="w-4 h-4 text-rose-300 shrink-0" />
                <div>
                  <span className="text-[10px] text-stone-400 uppercase font-semibold block">Store Hours</span>
                  <span className="font-semibold text-stone-200">{BUSINESS_INFO.businessHours}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-500 text-stone-950 font-bold text-xs hover:bg-amber-400 transition-all shadow-md group"
            >
              <Navigation className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              <span>GET DIRECTIONS ON GOOGLE MAPS</span>
            </a>
          </div>
        </div>

        {/* Visual Map Representation Card */}
        <div className="lg:col-span-5 bg-stone-950/80 rounded-2xl p-6 border border-stone-800 flex flex-col items-center text-center space-y-4 relative">
          
          <div className="w-16 h-16 rounded-full bg-rose-950 flex items-center justify-center text-rose-300 border-2 border-amber-400/40 shadow-lg animate-pulse">
            <MapPin className="w-8 h-8 text-amber-400" />
          </div>

          <div>
            <span className="text-xs font-bold text-amber-300 uppercase tracking-widest block">RADHA FASHIONS</span>
            <h4 className="font-serif-heading text-lg font-bold text-white mt-1">Gandhi Nagar, Koilkuntla</h4>
            <p className="text-xs text-stone-400 mt-1">Landmark: Near APG Bank</p>
          </div>

          <div className="w-full pt-4 border-t border-stone-800 text-[11px] text-stone-400 space-y-1">
            <p className="text-rose-200 font-semibold">📍 Easy Landmarks:</p>
            <p>• Walking distance from APG Bank</p>
            <p>• Central Gandhi Nagar location</p>
          </div>
        </div>

      </div>
    </div>
  );
};
