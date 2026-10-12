export interface BusinessInfo {
  name: string;
  tagline: string;
  subTagline: string;
  phone: string;
  formattedPhone: string;
  whatsappNumber: string;
  location: {
    landmark: string;
    area: string;
    town: string;
    fullAddress: string;
  };
  positioningBadges: string[];
  businessHours: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: 'boutique' | 'maggam' | 'beauty' | 'makeup' | 'training';
  description: string;
  highlights?: string[];
  flyerSource?: 'RADHA BEAUTY PARLOUR' | 'RADHA MAKE OVERS' | 'BOUTIQUE & TAILORING' | 'MAGGAM & EMBROIDERY';
  priceInfo: string;
  image: string;
  badge?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'all' | 'tailoring' | 'boutique' | 'maggam' | 'embroidery' | 'bridal makeup' | 'makeup' | 'hair' | 'beauty';
  categoryLabel: string;
  description: string;
  image: string;
  featured?: boolean;
}

export interface TrainingCourse {
  id: string;
  title: string;
  category: 'tailoring' | 'maggam' | 'embroidery' | 'beauty' | 'makeup';
  categoryLabel: string;
  description: string;
  whatYouWillLearn: string[];
  whoItIsFor: string;
  iconName: string;
  enquiryText: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  serviceCategory: string;
  location: string;
  quote: string;
  rating: number;
}

export interface BookingFormData {
  name: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  requirements: string;
}
