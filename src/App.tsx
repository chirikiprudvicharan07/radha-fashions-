import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileStickyActionBar } from './components/MobileStickyActionBar';
import { FloatingCTA } from './components/FloatingCTA';

import { Home } from './pages/Home';
import { BoutiqueTailoring } from './pages/BoutiqueTailoring';
import { MaggamEmbroidery } from './pages/MaggamEmbroidery';
import { BeautyParlour } from './pages/BeautyParlour';
import { MakeupArtist } from './pages/MakeupArtist';
import { TrainingCourses } from './pages/TrainingCourses';
import { OurWorks } from './pages/OurWorks';
import { BookSlot } from './pages/BookSlot';
import { Contact } from './pages/Contact';

// Scroll to top helper on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen relative font-sans text-stone-800 bg-[#FAF7F5]">
        
        {/* Main Header */}
        <Header />

        {/* Dynamic Route Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/boutique-tailoring" element={<BoutiqueTailoring />} />
            <Route path="/maggam-embroidery" element={<MaggamEmbroidery />} />
            <Route path="/beauty-parlour" element={<BeautyParlour />} />
            <Route path="/makeup-artist" element={<MakeupArtist />} />
            <Route path="/training-courses" element={<TrainingCourses />} />
            <Route path="/our-works" element={<OurWorks />} />
            <Route path="/book-slot" element={<BookSlot />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Main Footer */}
        <Footer />

        {/* Mobile Sticky Bottom Action Bar */}
        <MobileStickyActionBar />

        {/* Desktop Floating Action CTAs */}
        <FloatingCTA />

      </div>
    </Router>
  );
}

export default App;
