import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Roof Replacement', path: '/services/roof-replacement' },
    { name: 'Roof Shingles', path: '/services/roof-shingles' },
    { name: 'Metal Roofing', path: '/services/metal-roofing' },
    { name: 'Flat Roofing', path: '/services/flat-roofing' },
    { name: 'Roof Repair', path: '/services/roof-repair' },
    { name: 'Maintenance Program', path: '/services/maintenance-program' },
    { name: 'Roof Installation', path: '/services/roof-installation' }
  ];

  const handlePhoneClick = () => {
    window.location.href = 'tel:5551234567';
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled || !isHomePage
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-4">
            <img
              src="/images/logo copy.png"
              alt="Elite Roofing Logo"
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors duration-300 hover:text-orange-500 ${
                isScrolled || !isHomePage ? 'text-slate-800' : 'text-white'
              } ${location.pathname === '/' ? 'text-orange-500' : ''}`}
            >
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setIsServicesHovered(true)}
              onMouseLeave={() => setIsServicesHovered(false)}
            >
              <Link
                to="/services"
                className={`flex items-center transition-colors duration-300 hover:text-orange-500 ${
                  isScrolled || !isHomePage ? 'text-slate-800' : 'text-white'
                } ${location.pathname.includes('/services') ? 'text-orange-500' : ''}`}
              >
                Services
                <ChevronDown className="ml-1 w-4 h-4" />
              </Link>
              
              <div 
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 transition-all duration-200 ${
                  isServicesHovered ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onMouseEnter={() => setIsServicesHovered(true)}
                onMouseLeave={() => setIsServicesHovered(false)}
              >
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className="block px-4 py-2 text-slate-700 hover:bg-orange-50 hover:text-orange-500 transition-colors duration-200"
                    >
                      {service.name}
                    </Link>
                  ))}
              </div>
            </div>
            
            <Link
              to="/gallery"
              className={`transition-colors duration-300 hover:text-orange-500 ${
                isScrolled || !isHomePage ? 'text-slate-800' : 'text-white'
              } ${location.pathname === '/gallery' ? 'text-orange-500' : ''}`}
            >
              Gallery
            </Link>
            <Link
              to="/testimonials"
              className={`transition-colors duration-300 hover:text-orange-500 ${
                isScrolled || !isHomePage ? 'text-slate-800' : 'text-white'
              } ${location.pathname === '/testimonials' ? 'text-orange-500' : ''}`}
            >
              Testimonials
            </Link>
            <Link
              to="/contact"
              className={`transition-colors duration-300 hover:text-orange-500 ${
                isScrolled || !isHomePage ? 'text-slate-800' : 'text-white'
              } ${location.pathname === '/contact' ? 'text-orange-500' : ''}`}
            >
              Contact
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={handlePhoneClick}
              className={`flex items-center space-x-2 hover:text-orange-500 transition-colors duration-300 ${
                isScrolled || !isHomePage ? 'text-slate-700' : 'text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">(555) 123-4567</span>
            </button>
            <Link 
              to="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${isScrolled || !isHomePage ? 'text-slate-800' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-4 space-y-4 bg-white rounded-lg mt-4 shadow-lg">
            <Link 
              to="/"
              className="block w-full text-left px-4 py-2 text-slate-800 hover:text-orange-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services"
              className="block w-full text-left px-4 py-2 text-slate-800 hover:text-orange-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/gallery"
              className="block w-full text-left px-4 py-2 text-slate-800 hover:text-orange-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              to="/testimonials"
              className="block w-full text-left px-4 py-2 text-slate-800 hover:text-orange-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              to="/contact"
              className="block w-full text-left px-4 py-2 text-slate-800 hover:text-orange-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="px-4 py-2">
              <Link 
                to="/contact"
                className="block w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;