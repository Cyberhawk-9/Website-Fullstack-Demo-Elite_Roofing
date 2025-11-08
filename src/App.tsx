import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import QuoteForm from './components/QuoteForm';
import PopupForm from './components/PopupForm';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import RoofReplacement from './pages/services/RoofReplacement';
import RoofShingles from './pages/services/RoofShingles';
import MetalRoofing from './pages/services/MetalRoofing';
import FlatRoofing from './pages/services/FlatRoofing';
import RoofRepair from './pages/services/RoofRepair';
import MaintenanceProgram from './pages/services/MaintenanceProgram';
import RoofInstallation from './pages/services/RoofInstallation';
import { initScrollAnimations } from './utils/animations';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    initScrollAnimations();

    // Show popup every 3 minutes
    const popupInterval = setInterval(() => {
      setShowPopup(true);
    }, 180000); // 3 minutes

    return () => clearInterval(popupInterval);
  }, []);

  return (
    <Router>
      <div className={`min-h-screen bg-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/services/roof-replacement" element={<RoofReplacement />} />
            <Route path="/services/roof-shingles" element={<RoofShingles />} />
            <Route path="/services/metal-roofing" element={<MetalRoofing />} />
            <Route path="/services/flat-roofing" element={<FlatRoofing />} />
            <Route path="/services/roof-repair" element={<RoofRepair />} />
            <Route path="/services/maintenance-program" element={<MaintenanceProgram />} />
            <Route path="/services/roof-installation" element={<RoofInstallation />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </main>
        <QuoteForm />
        <Footer />
        <PopupForm isOpen={showPopup} onClose={() => setShowPopup(false)} />
      </div>
    </Router>
  );
}

export default App;