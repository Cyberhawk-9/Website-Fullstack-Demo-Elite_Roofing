import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Palette, Shield, Zap } from 'lucide-react';

const RoofShingles: React.FC = () => {
  const shingleTypes = [
    {
      name: 'Architectural Shingles',
      description: 'Premium dimensional shingles with enhanced durability and aesthetic appeal.',
      features: ['30-year warranty', 'Wind resistance up to 130 mph', 'Multiple color options']
    },
    {
      name: 'Three-Tab Shingles',
      description: 'Cost-effective traditional shingles perfect for budget-conscious homeowners.',
      features: ['20-year warranty', 'Classic appearance', 'Easy installation']
    },
    {
      name: 'Designer Shingles',
      description: 'Luxury shingles that mimic slate, wood, or tile for premium aesthetics.',
      features: ['Lifetime warranty', 'Unique textures', 'Superior weather protection']
    }
  ];

  const benefits = [
    'Excellent weather resistance',
    'Wide variety of colors and styles',
    'Cost-effective roofing solution',
    'Easy maintenance and repair',
    'Fire-resistant materials',
    'Energy-efficient options available'
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/16_shingles_types.jpg" 
            alt="Roof shingles installation"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Premium <span className="text-orange-500">Roof Shingles</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Protect your home with high-quality asphalt shingles. We offer a complete range 
                of shingle options from leading manufacturers, ensuring durability, beauty, and 
                value for your investment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  Get Free Estimate
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                  Call (555) 123-4567
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/images/17_shingles_process.jpg" 
                alt="Shingle roof installation"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Shingle Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Shingle Options for Every Home
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our selection of premium shingle types, each designed to provide 
              optimal protection and enhance your home's curb appeal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {shingleTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{type.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-8">
                Why Choose Asphalt Shingles?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src="/images/18_shingles_closeup.jpg" 
                alt="Shingle roof detail"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Advanced Shingle Technology
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Palette className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Color Matching</h3>
              <p className="text-gray-600">
                Extensive color palette to perfectly complement your home's architecture and style.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Weather Protection</h3>
              <p className="text-gray-600">
                Superior resistance to wind, hail, and UV rays for long-lasting performance.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Energy Efficiency</h3>
              <p className="text-gray-600">
                Reflective granules help reduce cooling costs and improve home comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for New Shingles?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Discover the perfect shingle solution for your home. Get a free estimate and color consultation today.
          </p>
          <Link 
            to="/contact"
            className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
          >
            Schedule Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default RoofShingles;