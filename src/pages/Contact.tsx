import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, MessageCircle, Navigation, Calendar, Send, CheckCircle, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { MapPlaceholder } from '../components/MapPlaceholder';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('General Enquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const payload = `Hello Radha Fashions,
New Website Contact Message:
• Name: ${name}
• Phone: ${phone}
• Service: ${service}
• Message: ${message || 'N/A'}`;

    const url = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(payload)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F5] pt-24 pb-20">
      
      {/* HERO SECTION */}
      <section className="bg-stone-900 text-stone-100 py-16 border-b border-rose-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-950 text-rose-200 border border-rose-800">
            Reach Out To Us
          </span>
          <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Contact Radha Fashions
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 font-light max-w-xl">
            We are here to answer your enquiries regarding boutique stitching, Maggam embroidery, bridal makeup packages, hydra facials, and training courses.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* ACTION CARDS ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* CALL NOW */}
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center space-y-3 group"
          >
            <div className="w-12 h-12 rounded-full magenta-gradient-bg text-amber-300 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block">Direct Phone</span>
              <h3 className="font-serif-heading text-lg font-bold text-stone-900 mt-0.5">Call Us</h3>
              <p className="text-xs text-rose-900 font-bold mt-1">{BUSINESS_INFO.formattedPhone}</p>
            </div>
          </a>

          {/* WHATSAPP */}
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Radha%20Fashions,%20I%20would%20like%20to%20enquire%20about%20your%20services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center space-y-3 group"
          >
            <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
              <MessageCircle className="w-5 h-5 fill-current" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block">Instant Chat</span>
              <h3 className="font-serif-heading text-lg font-bold text-stone-900 mt-0.5">WhatsApp</h3>
              <p className="text-xs text-emerald-700 font-bold mt-1">Chat on WhatsApp</p>
            </div>
          </a>

          {/* GET DIRECTIONS */}
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.location.fullAddress)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center space-y-3 group"
          >
            <div className="w-12 h-12 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
              <Navigation className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block">Studio Location</span>
              <h3 className="font-serif-heading text-lg font-bold text-stone-900 mt-0.5">Get Directions</h3>
              <p className="text-xs text-amber-800 font-bold mt-1">Gandhi Nagar, Koilkuntla</p>
            </div>
          </a>

          {/* BOOK A SLOT */}
          <Link
            to="/book-slot"
            className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center space-y-3 group"
          >
            <div className="w-12 h-12 rounded-full bg-stone-900 text-amber-300 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block">Online Appointment</span>
              <h3 className="font-serif-heading text-lg font-bold text-stone-900 mt-0.5">Book a Slot</h3>
              <p className="text-xs text-rose-900 font-bold mt-1">Reserve Preferred Date</p>
            </div>
          </Link>

        </div>

        {/* ENQUIRY FORM & INFO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-stone-200 shadow-lg space-y-6">
            <h3 className="font-serif-heading text-2xl font-bold text-stone-900 border-b border-stone-100 pb-4">
              Studio Address & Details
            </h3>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-rose-800 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-stone-900 block text-sm">Location</span>
                  <span className="text-stone-600 leading-relaxed">{BUSINESS_INFO.location.fullAddress}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-rose-800 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-stone-900 block text-sm">Phone Number</span>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="text-rose-900 font-semibold hover:underline">
                    {BUSINESS_INFO.formattedPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-rose-800 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-stone-900 block text-sm">Store Timings</span>
                  <span className="text-stone-600">{BUSINESS_INFO.businessHours}</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
              <p className="font-bold">Landmark Note:</p>
              <p>We are situated near APG Bank in Gandhi Nagar, Koilkuntla. Parking is available nearby.</p>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-stone-200 shadow-lg space-y-6">
            <h3 className="font-serif-heading text-2xl font-bold text-stone-900 border-b border-stone-100 pb-4">
              Send Quick Message
            </h3>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-stone-900">Message Sent to WhatsApp!</h4>
                <p className="text-xs text-stone-600">Your query has been forwarded to Radha Fashions.</p>
                <button onClick={() => setSubmitted(false)} className="text-xs text-rose-900 font-bold hover:underline">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-stone-300 focus:border-rose-800 focus:outline-none bg-stone-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 7013942601"
                    className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-stone-300 focus:border-rose-800 focus:outline-none bg-stone-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">Service Of Interest</label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-stone-300 focus:border-rose-800 focus:outline-none bg-stone-50/50 font-medium"
                  >
                    <option value="Boutique & Tailoring">Boutique & Tailoring</option>
                    <option value="Maggam & Embroidery">Maggam & Embroidery</option>
                    <option value="Beauty Parlour">Beauty Parlour</option>
                    <option value="Makeup Artist">Makeup Artist</option>
                    <option value="Training Courses">Training Courses</option>
                    <option value="General Enquiry">General Enquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">Message</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your query here..."
                    className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-stone-300 focus:border-rose-800 focus:outline-none bg-stone-50/50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl magenta-gradient-bg text-amber-100 font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-all shadow-md flex items-center justify-center gap-2 border border-amber-300/30"
                >
                  <Send className="w-4 h-4 text-amber-300" />
                  <span>SEND ENQUIRY ON WHATSAPP</span>
                </button>
              </form>
            )}

          </div>

        </div>

        {/* MAP PLACEHOLDER */}
        <MapPlaceholder />

      </div>

    </div>
  );
};
