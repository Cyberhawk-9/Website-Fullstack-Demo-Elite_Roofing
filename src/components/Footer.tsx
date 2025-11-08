import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <span className="text-orange-500">Elite</span> Roofing
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted roofing partner for over 15 years. We provide premium roofing solutions 
              with exceptional craftsmanship and customer service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-orange-500 p-2 rounded-lg transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-orange-500 p-2 rounded-lg transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-orange-500 p-2 rounded-lg transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-orange-500 p-2 rounded-lg transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              {[
                { name: 'Roof Replacement', path: '/services/roof-replacement' },
                { name: 'Roof Shingles', path: '/services/roof-shingles' },
                { name: 'Metal Roofing', path: '/services/metal-roofing' },
                { name: 'Flat Roofing', path: '/services/flat-roofing' },
                { name: 'Roof Repair', path: '/services/roof-repair' },
                { name: 'Maintenance Program', path: '/services/maintenance-program' },
                { name: 'Roof Installation', path: '/services/roof-installation' }
              ].map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/services"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/gallery"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link 
                  to="/testimonials"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <a href="tel:5551234567" className="text-gray-300 hover:text-orange-500 transition-colors">(555) 123-4567</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-300">info@eliteroofing.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  Metro Area & Surrounding<br />
                  50-mile radius coverage
                </span>
              </div>
            </div>
            
            <div className="bg-orange-500/10 p-4 rounded-lg border border-orange-500/20">
              <h4 className="font-semibold mb-2">24/7 Emergency Service</h4>
              <p className="text-sm text-gray-300">
                Storm damage or leak? Call us anytime for immediate assistance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Elite Roofing. All rights reserved. Licensed & Insured.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                Warranty
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;