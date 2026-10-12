import type { BusinessInfo, ServiceItem, PortfolioItem, TrainingCourse, Testimonial } from '../types';

export const BUSINESS_INFO: BusinessInfo = {
  name: 'Radha Fashions',
  tagline: 'Your Style. Your Beauty. Your Signature.',
  subTagline: 'From elegant tailoring and intricate Maggam work to bridal makeup and professional beauty services — Radha Fashions brings fashion, beauty and artistry together under one roof.',
  phone: '7013942601',
  formattedPhone: '+91 70139 42601',
  whatsappNumber: '917013942601',
  location: {
    landmark: 'Near APG Bank',
    area: 'Gandhi Nagar',
    town: 'Koilkuntla',
    fullAddress: 'Near APG Bank, Gandhi Nagar, Koilkuntla, Andhra Pradesh'
  },
  positioningBadges: [
    'Boutique & Tailoring',
    'Maggam & Embroidery',
    'Beauty Parlour',
    'Makeup Artist',
    'Training Courses'
  ],
  businessHours: 'Monday – Sunday: 9:00 AM – 8:30 PM'
};

export const BEAUTY_PARLOUR_SERVICES: ServiceItem[] = [
  {
    id: 'bp-hydra-facial',
    title: 'Hydra Facial',
    category: 'beauty',
    description: 'Advanced deep-cleansing, exfoliating, and hydrating facial treatment for instant luminous radiance.',
    highlights: ['Deep Pore Cleansing', 'Exfoliation & Serums', 'Instant Skin Glow'],
    flyerSource: 'RADHA BEAUTY PARLOUR',
    priceInfo: 'Contact us for pricing',
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bp-facial-all',
    title: 'Facial (All Types)',
    category: 'beauty',
    description: 'Customized facial care suited for all skin types including Herbal, Fruit, Gold, and Whitening Facials.',
    highlights: ['Herbal & Fruit Facials', 'Skin Brightening', 'Relaxing Head & Neck Massage'],
    flyerSource: 'RADHA BEAUTY PARLOUR',
    priceInfo: 'Contact us for pricing',
    image: 'https://images.unsplash.com/photo-1512290900673-7002b54173b4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bp-pedicure',
    title: 'Pedicure',
    category: 'beauty',
    description: 'Soothing foot soak, scrub, nail shaping, dead skin removal, and deeply relaxing massage.',
    highlights: ['Foot Exfoliation', 'Nail Care & Polish', 'Relaxing Massage'],
    flyerSource: 'RADHA BEAUTY PARLOUR',
    priceInfo: 'Contact us for pricing',
    image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bp-manicure',
    title: 'Manicure',
    category: 'beauty',
    description: 'Nail shaping, cuticle treatment, hand exfoliation, and relaxing hand massage for polished nails.',
    highlights: ['Nail Shaping & Buffing', 'Cuticle Care', 'Hand Scrub & Moisture'],
    flyerSource: 'RADHA BEAUTY PARLOUR',
    priceInfo: 'Contact us for pricing',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bp-eyebrows',
    title: 'Eye Brows & Threading',
    category: 'beauty',
    description: 'Precision brow shaping and face threading to frame your eyes and enhance natural features.',
    highlights: ['Precision Shaping', 'Upper Lip Threading', 'Gentle Touch'],
    flyerSource: 'RADHA BEAUTY PARLOUR',
    priceInfo: 'Contact us for pricing',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bp-haircut',
    title: 'Hair Cut & Styling',
    category: 'beauty',
    description: 'Trendy layer cuts, feather cuts, step cuts, straight trims, and professional blow-dry styling.',
    highlights: ['Layer & Step Cuts', 'Trim & Split-End Removal', 'Blow-Dry Finish'],
    flyerSource: 'RADHA BEAUTY PARLOUR',
    priceInfo: 'Contact us for pricing',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bp-waxing',
    title: 'Body Waxing',
    category: 'beauty',
    description: 'Gentle, effective hair removal using premium waxes for soft, smooth, hair-free skin.',
    highlights: ['Full Arms & Legs', 'Rica & Chocolate Wax', 'Post-Wax Soothing Care'],
    flyerSource: 'RADHA BEAUTY PARLOUR',
    priceInfo: 'Contact us for pricing',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bp-events',
    title: 'Event & Festival Beauty Grooming',
    category: 'beauty',
    description: 'Comprehensive beauty packages tailored for festive occasions, family events, and celebrations.',
    highlights: ['Full Body Polish', 'Party Ready Glow', 'Special Event Packages'],
    flyerSource: 'RADHA BEAUTY PARLOUR',
    priceInfo: 'Contact us for pricing',
    badge: 'Special',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80'
  }
];

export const MAKEUP_SERVICES: ServiceItem[] = [
  {
    id: 'mk-bridal',
    title: 'Bridal Makeup',
    category: 'makeup',
    description: 'Exquisite, long-lasting bridal makeover tailored to traditional outfit colors, jewelry, and ceremony lighting.',
    highlights: ['Pre-Bridal Consultation', 'Waterproof Formula', 'Complete Hair & Jewelry Draping'],
    flyerSource: 'RADHA MAKE OVERS',
    priceInfo: 'Enquire for Package',
    badge: 'Signature',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mk-hd',
    title: 'HD Makeup',
    category: 'makeup',
    description: 'High-Definition seamless finish designed for high-resolution photography and video cameras without flashback.',
    highlights: ['Camera-Ready Finish', 'Weightless Feel', 'Flawless Coverage'],
    flyerSource: 'RADHA MAKE OVERS',
    priceInfo: 'Enquire for Package',
    badge: 'Trending',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mk-dragproof',
    title: 'Drag Proof Makeup',
    category: 'makeup',
    description: 'Sweat-resistant, smudge-proof, and humidity-defying makeup formula that lasts through hours of rituals.',
    highlights: ['Sweat & Humidity Proof', '12+ Hour Wear', 'Zero Transfer Finish'],
    flyerSource: 'RADHA MAKE OVERS',
    priceInfo: 'Enquire for Package',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mk-traditional',
    title: 'Traditional Makeup Looks',
    category: 'makeup',
    description: 'Authentic South Indian & classic festive looks featuring bold kajal, graceful bindi styling, and warm tones.',
    highlights: ['Traditional Aesthetic', 'Temple Jewelry Match', 'Classic Elegance'],
    flyerSource: 'RADHA MAKE OVERS',
    priceInfo: 'Enquire for Package',
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mk-grooming',
    title: 'Event Grooming & Party Makeup',
    category: 'makeup',
    description: 'Refined makeup for sangeet, reception guests, engagement, and special social gatherings.',
    highlights: ['Subtle Glam', 'Skin Tone Color Correction', 'Quick Turnaround'],
    flyerSource: 'RADHA MAKE OVERS',
    priceInfo: 'Enquire for Package',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mk-hairstyle',
    title: 'Hair Styling & Flowers (Poola Jada)',
    category: 'makeup',
    description: 'Traditional braided styling, flower attachment (Poola Jada), elegant buns, soft waves, and hair accessories.',
    highlights: ['Poola Jada Attachment', 'Bridal Buns & Extensions', 'Long-Hold Sprays'],
    flyerSource: 'RADHA MAKE OVERS',
    priceInfo: 'Enquire for Pricing',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mk-saree-folding',
    title: 'Saree Box Folding & Draping',
    category: 'makeup',
    description: 'Professional pre-pleating, iron press, and box folding for effortless 5-minute saree draping at events.',
    highlights: ['Pre-Pleated Box Folding', 'Crisp Ironing', 'Quick Event Draping'],
    flyerSource: 'RADHA MAKE OVERS',
    priceInfo: 'Enquire for Pricing',
    badge: 'Popular Service',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mk-mehendi',
    title: 'Mehendi Artistry',
    category: 'makeup',
    description: 'Intricate Arabic, bridal, and traditional henna mehendi designs with rich natural dark stain.',
    highlights: ['Bridal Mehendi Patterns', 'Arabic & Mandala Designs', 'Organic Henna'],
    flyerSource: 'RADHA MAKE OVERS',
    priceInfo: 'Enquire for Pricing',
    image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80'
  }
];

export const BOUTIQUE_SERVICES: ServiceItem[] = [
  {
    id: 'bt-custom-stitching',
    title: 'Custom Stitching & Tailoring',
    category: 'boutique',
    description: 'Precision tailoring for lehengas, Anarkalis, suits, dresses, and customized designer ethnic wear.',
    highlights: ['Perfect Fit Guarantee', 'Custom Measurements', 'Pattern Customization'],
    flyerSource: 'BOUTIQUE & TAILORING',
    priceInfo: 'Enquire for Pricing',
    badge: 'Essential',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bt-blouse-stitching',
    title: 'Designer Blouse Stitching',
    category: 'boutique',
    description: 'Specialized saree blouse stitching featuring princess cut, boat neck, deep back, dori work, and elbow sleeve cuts.',
    highlights: ['Princess Cut & Padded Options', 'Custom Neckline & Back Pattern', 'Precision Fit'],
    flyerSource: 'BOUTIQUE & TAILORING',
    priceInfo: 'Enquire for Pricing',
    badge: 'Most Requested',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bt-dress-designing',
    title: 'Dress & Outfit Designing',
    category: 'boutique',
    description: 'Transform raw fabrics into bespoke modern kurtis, gowns, Indo-Western fusion wear, and festive attire.',
    highlights: ['Fabrics to Fashion', 'Indo-Western Styles', 'Personal Styling Advice'],
    flyerSource: 'BOUTIQUE & TAILORING',
    priceInfo: 'Enquire for Pricing',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bt-alterations',
    title: 'Expert Alterations & Fitting',
    category: 'boutique',
    description: 'Size alterations, reshaping, sleeve attachments, length adjustments, and fitting touch-ups for readymade dresses.',
    highlights: ['Quick Turnaround', 'Reshaping Ready-made Wear', 'Seamless Finish'],
    flyerSource: 'BOUTIQUE & TAILORING',
    priceInfo: 'Enquire for Pricing',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80'
  }
];

export const MAGGAM_SERVICES: ServiceItem[] = [
  {
    id: 'mg-bridal-blouse',
    title: 'Bridal Maggam Blouse Work',
    category: 'maggam',
    description: 'Grand bridal embroidery with zardosi, cutdana, stone embellishment, pearls, and royal Kundan handwork.',
    highlights: ['Rich Zardosi & Cutdana', 'Peacock & Elephant Motifs', 'Heavy Grand Sleeves'],
    flyerSource: 'MAGGAM & EMBROIDERY',
    priceInfo: 'Enquire for Pricing',
    badge: 'Masterpiece',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mg-hand-embroidery',
    title: 'Hand Embroidery',
    category: 'maggam',
    description: 'Intricate needlework, thread embroidery, mirror work, and bead accents tailored to your preference.',
    highlights: ['Silk Thread Detailing', 'Mirror & Bead Accents', 'Handcrafted Precision'],
    flyerSource: 'MAGGAM & EMBROIDERY',
    priceInfo: 'Enquire for Pricing',
    image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mg-machine-embroidery',
    title: 'Computerized & Machine Embroidery',
    category: 'maggam',
    description: 'Crisp, uniform embroidered borders, necklines, and motifs with quick completion times for budget-friendly elegance.',
    highlights: ['Crisp Thread Work', 'Uniform Motifs', 'Quick Delivery'],
    flyerSource: 'MAGGAM & EMBROIDERY',
    priceInfo: 'Enquire for Pricing',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mg-custom-motifs',
    title: 'Custom Traditional & Modern Motifs',
    category: 'maggam',
    description: 'Personalized motifs including floral vines, temple architecture patterns, initials, and contemporary art.',
    highlights: ['Custom Concept Sketches', 'Monogram / Initial Work', 'Unique Pattern Creation'],
    flyerSource: 'MAGGAM & EMBROIDERY',
    priceInfo: 'Enquire for Pricing',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80'
  }
];

export const COURSES: TrainingCourse[] = [
  {
    id: 'course-tailoring',
    title: 'Boutique & Tailoring Professional Course',
    category: 'tailoring',
    categoryLabel: 'Tailoring',
    description: 'Hands-on practical training covering measurement techniques, drafting, pattern cutting, sewing, and dress construction.',
    whatYouWillLearn: [
      'Body measurement taking & drafting basics',
      'Blouse patterns (Princess cut, Katori, Padded)',
      'Churidar, Kurti, and Lehenga stitching',
      'Finishing, piping, zip attachment & fitting techniques'
    ],
    whoItIsFor: 'Beginners & aspiring boutique owners who want to learn professional garment construction from scratch.',
    iconName: 'Scissors',
    enquiryText: 'Enquire About Tailoring Course'
  },
  {
    id: 'course-maggam',
    title: 'Maggam & Embroidery Masterclass',
    category: 'maggam',
    categoryLabel: 'Maggam & Embroidery',
    description: 'Learn needle handling, thread work, zardosi, beadwork, stone fixing, and full bridal blouse design drafting.',
    whatYouWillLearn: [
      'Maggam frame setup & needle techniques',
      'Basic to advanced stitches (Chain, Satin, Feather)',
      'Zardosi, cutdana, stone & pearl embellishment',
      'Bridal neck design transfer & execution'
    ],
    whoItIsFor: 'Artistic individuals wishing to master luxury embroidery for business or personal fashion.',
    iconName: 'Sparkles',
    enquiryText: 'Enquire About Maggam Course'
  },
  {
    id: 'course-beauty',
    title: 'Professional Beauty Parlour Course',
    category: 'beauty',
    categoryLabel: 'Beauty Parlour',
    description: 'Comprehensive salon skill training including facials, hair cutting, waxing, threading, skin analysis, and client care.',
    whatYouWillLearn: [
      'Threading & brow shaping mastery',
      'Facial techniques & skin type analysis',
      'Basic to advanced hair cuts & blow drying',
      'Pedicure, manicure & body waxing procedures'
    ],
    whoItIsFor: 'Women interested in starting their own home salon or working as certified beauty professionals.',
    iconName: 'Smile',
    enquiryText: 'Enquire About Beauty Course'
  },
  {
    id: 'course-makeup',
    title: 'Bridal & HD Makeup Artistry Course',
    category: 'makeup',
    categoryLabel: 'Makeup Artistry',
    description: 'Professional makeup art course covering skin prep, color theory, foundation blending, HD makeup, eye art, and saree draping.',
    whatYouWillLearn: [
      'Skin preparation & color correction',
      'Bridal, HD & Drag-proof makeup application',
      'Eye makeup (Smokey, Cut-crease, Glitter)',
      'Hair styling & Saree box folding techniques'
    ],
    whoItIsFor: 'Aspiring makeup artists seeking career training in high-demand bridal & event makeup artistry.',
    iconName: 'Palette',
    enquiryText: 'Enquire About Makeup Course'
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'Bridal Maggam Blouse with Kundan Work',
    category: 'maggam',
    categoryLabel: 'Maggam',
    description: 'Heavy silk blouse embroidered with antique gold zardosi, ruby red stones, and intricate peacock back motif.',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80',
    featured: true
  },
  {
    id: 'port-2',
    title: 'Traditional South Indian Bridal Makeover',
    category: 'bridal makeup',
    categoryLabel: 'Bridal Makeup',
    description: 'HD glowing skin, classic winged eyeliner, bold lips, and gold temple jewelry pairing.',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80',
    featured: true
  },
  {
    id: 'port-3',
    title: 'Designer Silk Lehenga Custom Stitching',
    category: 'boutique',
    categoryLabel: 'Boutique',
    description: 'Custom stitched ceremonial silk lehenga with hand-tailored pleats and matching embroidered blouse.',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=80',
    featured: true
  },
  {
    id: 'port-4',
    title: 'Hydra Facial & Skin Radiance Treatment',
    category: 'beauty',
    categoryLabel: 'Beauty',
    description: 'Client result showing hydrated, glowing skin after a customized Hydra Facial session.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80',
    featured: true
  },
  {
    id: 'port-5',
    title: 'Hand Embroidered Floral Sleeves',
    category: 'embroidery',
    categoryLabel: 'Embroidery',
    description: 'Delicate floral vine threadwork embellished with pearls on pastel pink raw silk.',
    image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'port-6',
    title: 'High Definition Event Makeup',
    category: 'makeup',
    categoryLabel: 'Makeup',
    description: 'Weightless HD makeup with natural radiance created for a family reception evening.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'port-7',
    title: 'Bridal Hair Style & Poola Jada',
    category: 'hair',
    categoryLabel: 'Hair',
    description: 'Traditional long braid decorated with fresh jasmine and golden Poola Jada billalu.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'port-8',
    title: 'Saree Box Folding & Pre-Pleating',
    category: 'tailoring',
    categoryLabel: 'Tailoring',
    description: 'Crisp pre-pleated and box-folded Kanchipuram silk saree ready for instant wear.',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    clientName: 'Sravanthi R.',
    serviceCategory: 'Bridal Makeup & Maggam Blouse',
    location: 'Koilkuntla',
    quote: 'Radha Fashions made my wedding day unforgettable! The Maggam work on my bridal blouse was so detailed, and my makeup lasted through all the rituals without any smudging.',
    rating: 5
  },
  {
    id: 't-2',
    clientName: 'Lakshmi Prasanna',
    serviceCategory: 'Boutique Tailoring & Stitching',
    location: 'Gandhi Nagar',
    quote: 'The blouse fitting was absolute perfection on the first try. Highly recommend Radha Fashions for anyone who wants custom stitching in Koilkuntla.',
    rating: 5
  },
  {
    id: 't-3',
    clientName: 'Anusha K.',
    serviceCategory: 'Hydra Facial & Beauty Services',
    location: 'Koilkuntla',
    quote: 'I got a Hydra Facial before a family function and my skin was glowing! The parlour staff is very gentle, professional, and hygiene is maintained extremely well.',
    rating: 5
  }
];
