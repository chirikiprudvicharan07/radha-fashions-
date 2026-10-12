import { CheckCircle2, UserCheck, MessageCircle, Calendar, Sparkles } from 'lucide-react';
import type { TrainingCourse } from '../types';
import { BUSINESS_INFO } from '../data/businessData';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  course: TrainingCourse;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const whatsappMsg = encodeURIComponent(
    `Hello Radha Fashions, I would like to enquire about your course: "${course.title}". Please share details regarding upcoming batches and training schedules.`
  );
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${whatsappMsg}`;

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between p-6 group">
      
      <div className="space-y-4">
        {/* Category Badge & Title */}
        <div className="flex justify-between items-start">
          <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-rose-50 text-rose-900 border border-rose-200/60 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-500" />
            {course.categoryLabel} Course
          </span>
        </div>

        <h3 className="font-serif-heading text-xl font-bold text-stone-900 group-hover:text-rose-900 transition-colors">
          {course.title}
        </h3>

        <p className="text-xs text-stone-600 leading-relaxed font-light">
          {course.description}
        </p>

        {/* What You'll Learn */}
        <div className="space-y-2 pt-3 border-t border-stone-100">
          <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider">What You'll Learn:</h4>
          <ul className="space-y-1.5">
            {course.whatYouWillLearn.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-800 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Who It's For */}
        <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/60 text-xs text-stone-700 space-y-1">
          <div className="flex items-center gap-1.5 font-bold text-stone-900">
            <UserCheck className="w-3.5 h-3.5 text-rose-800" />
            <span>Who It's For:</span>
          </div>
          <p className="text-stone-600 text-[11px] leading-normal">{course.whoItIsFor}</p>
        </div>
      </div>

      {/* Pricing/Schedule Notice & CTAs */}
      <div className="mt-6 pt-4 border-t border-stone-100 space-y-3">
        <div className="p-2.5 rounded-lg bg-amber-50/70 border border-amber-200/60 text-center">
          <p className="text-[11px] font-medium text-amber-900">
            Contact us for course fees, batch schedules & practical timings.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-2 rounded-xl bg-emerald-600 text-white font-bold text-xs text-center hover:bg-emerald-500 transition-colors flex items-center justify-center gap-1.5 shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>WhatsApp</span>
          </a>

          <Link
            to={`/book-slot?service=${encodeURIComponent(course.title)}`}
            className="py-2.5 px-2 rounded-xl bg-stone-900 text-amber-100 font-bold text-xs text-center hover:bg-stone-800 transition-colors flex items-center justify-center gap-1.5 shadow-sm"
          >
            <Calendar className="w-3.5 h-3.5 text-amber-300" />
            <span>Enquire Slot</span>
          </Link>
        </div>
      </div>

    </div>
  );
};
