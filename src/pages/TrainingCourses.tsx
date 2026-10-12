import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, MessageCircle, Calendar } from 'lucide-react';
import { COURSES, BUSINESS_INFO } from '../data/businessData';
import { CourseCard } from '../components/CourseCard';

export const TrainingCourses: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF7F5] pt-24 pb-20">
      
      {/* PAGE HERO */}
      <section className="bg-stone-900 text-stone-100 py-16 sm:py-20 border-b border-rose-900/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950 border border-rose-800/60 text-rose-200 text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5 text-amber-300" />
              Skill Development & Career Training
            </div>
            <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Professional Training Courses
            </h1>
            <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed">
              Master high-demand fashion and beauty skills in Koilkuntla. Professional practical training in Tailoring, Maggam Embroidery, Beauty Parlour Care, and Bridal Makeup Artistry.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Radha%20Fashions,%20I%20would%20like%20to%20enquire%20about%20training%20courses.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-500 transition-colors shadow-md flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WHATSAPP COURSE ENQUIRY</span>
              </a>
              <Link
                to="/book-slot?service=Training%20Courses"
                className="px-6 py-3 rounded-xl magenta-gradient-bg text-amber-100 font-bold text-xs hover:opacity-95 transition-all shadow-md flex items-center gap-2 border border-amber-300/30"
              >
                <Calendar className="w-4 h-4 text-amber-300" />
                <span>ENQUIRE COURSE SLOT</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COURSES LIST GRID */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-stone-200 pb-4">
          <span className="text-xs font-bold text-rose-800 uppercase tracking-wider">Available Training</span>
          <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
            Training Programs Offered
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COURSES.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-xl text-center space-y-6">
          <h2 className="font-serif-heading text-2xl sm:text-4xl font-bold text-stone-900 max-w-xl mx-auto">
            Ready to Start Your Skill Journey?
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-light max-w-md mx-auto">
            Contact Radha Fashions to learn about upcoming batch openings, practical class timings, and enrollment details.
          </p>
          <div className="pt-2">
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Radha%20Fashions,%20I%20would%20like%20to%20enquire%20about%20course%20enrollment.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-emerald-500 transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>ENQUIRE ON WHATSAPP NOW</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
