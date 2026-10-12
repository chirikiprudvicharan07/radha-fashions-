import React from 'react';
import { Link } from 'react-router-dom';
import { Check, MessageCircle, Calendar, Sparkles } from 'lucide-react';
import type { ServiceItem } from '../types';
import { BUSINESS_INFO } from '../data/businessData';

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const whatsappMsg = encodeURIComponent(
    `Hello Radha Fashions, I am interested in your service: "${service.title}". Please share details and available slots.`
  );
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${whatsappMsg}`;

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-stone-200/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
      
      {/* Service Image Header */}
      <div className="relative h-56 overflow-hidden bg-stone-100">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent" />
        
        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-center gap-2">
          {service.flyerSource && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-stone-900/90 text-rose-200 backdrop-blur-sm border border-stone-700/60 shadow-sm">
              {service.flyerSource}
            </span>
          )}
          {service.badge && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-amber-500 text-stone-950 shadow-md flex items-center gap-1">
              <Sparkles className="w-3 h-3 fill-current" />
              {service.badge}
            </span>
          )}
        </div>

        {/* Bottom Image Overlay Title */}
        <div className="absolute bottom-3 left-4 right-4">
          <h3 className="font-serif-heading text-xl font-bold text-white tracking-wide drop-shadow-sm">
            {service.title}
          </h3>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <p className="text-xs text-stone-600 leading-relaxed">
            {service.description}
          </p>

          {service.highlights && service.highlights.length > 0 && (
            <div className="mt-3.5 space-y-1.5 pt-3 border-t border-stone-100">
              {service.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-stone-700">
                  <Check className="w-3.5 h-3.5 text-rose-800 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Pricing & Call to Actions */}
        <div className="pt-3 border-t border-stone-100 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-500">Pricing Info</span>
            <span className="text-xs font-bold text-rose-900 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200/60">
              {service.priceInfo}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Link
              to={`/book-slot?service=${encodeURIComponent(service.title)}`}
              className="py-2.5 px-2 rounded-xl bg-stone-900 text-amber-100 font-bold text-xs text-center hover:bg-stone-800 transition-colors flex items-center justify-center gap-1.5 shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-300" />
              <span>Book Slot</span>
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-2 rounded-xl bg-emerald-600 text-white font-bold text-xs text-center hover:bg-emerald-500 transition-colors flex items-center justify-center gap-1.5 shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};
