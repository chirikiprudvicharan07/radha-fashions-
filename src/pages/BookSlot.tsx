import React from 'react';
import { BookingForm } from '../components/BookingForm';

export const BookSlot: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF7F5] pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <BookingForm />
      </div>
    </div>
  );
};
