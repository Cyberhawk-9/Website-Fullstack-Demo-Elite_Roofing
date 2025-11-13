import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Zap, Shield, Leaf } from 'lucide-react';

const MetalRoofing: React.FC = () => {
  const metalTypes = [
    {
      name: 'Standing Seam',
      description: 'Premium metal roofing with concealed fasteners for superior weather protection.',
      features: ['50+ year lifespan', 'No exposed fasteners', 'Thermal expansion accommodation']
    },
    {
      name: 'Metal Shingles',
      description: 'Metal roofing that mimics traditional shingles with enhanced durability.',
      features: ['Lightweight design', 'Multiple style options', 'Impact resistant']
    },
    {
      name: 'Corrugated Metal',
      description: 'Cost-effective metal roofing solution perfect for agricultural and commercial use.',
      features: ['Budget-friendly', 'Quick installation', 'Excellent drainage']
    }
  ];

  const benefits = [
    'Exceptional longevity (50+ years)',
    'Energy efficient and eco-friendly',
    'Fire and weather resistant',
    'Low maintenance requirements',
    'Lightweight yet extremely durable',
    'Increases property value significantly'
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/19_metal_architectural.jpg" 
            alt="Metal roofing installation"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Durable <span className="text-orange-500">Metal Roofing</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Invest in the ultimate roofing solution with our premium metal roofing systems. 
                Offering unmatched durability, energy efficiency, and style that lasts for decades 
                with minimal maintenance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  Request a Site Like This
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button onClick={(e) => e.preventDefault()} className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                  Call (555) 123-4567
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/images/19_metal_architectural.jpg" 
                alt="Metal roof detail"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Metal Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Metal Roofing Systems
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of metal roofing options, each engineered for specific 
              applications and designed to provide decades of reliable protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metalTypes.map((type, index) => (
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
                Why Choose Metal Roofing?
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
                src="/images/19_metal_architectural.jpg" 
                alt="Metal roofing benefits"
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
              Advanced Metal Roofing Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Energy Efficiency</h3>
              <p className="text-gray-600">
                Reflective coatings reduce cooling costs by up to 25%, making your home more comfortable and efficient.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Weather Resistance</h3>
              <p className="text-gray-600">
                Withstands extreme weather conditions including high winds, hail, and heavy snow loads.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Eco-Friendly</h3>
              <p className="text-gray-600">
                100% recyclable materials with minimal environmental impact throughout the product lifecycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Invest in Metal Roofing Today
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Discover the long-term value and protection of metal roofing. Get your free estimate and material consultation.
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

export default MetalRoofing;