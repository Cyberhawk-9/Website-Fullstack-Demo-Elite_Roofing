import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Building, Droplets, Settings } from 'lucide-react';

const FlatRoofing: React.FC = () => {
  const flatRoofTypes = [
    {
      name: 'EPDM Rubber',
      description: 'Single-ply membrane roofing system known for durability and weather resistance.',
      features: ['20-30 year lifespan', 'Excellent UV resistance', 'Easy maintenance and repair']
    },
    {
      name: 'TPO Membrane',
      description: 'Energy-efficient white membrane that reflects heat and reduces cooling costs.',
      features: ['Heat-welded seams', 'Energy Star rated', 'Chemical and puncture resistant']
    },
    {
      name: 'Modified Bitumen',
      description: 'Multi-layer system providing excellent waterproofing and flexibility.',
      features: ['Superior waterproofing', 'Flexible in temperature changes', 'Self-healing properties']
    }
  ];

  const benefits = [
    'Cost-effective installation',
    'Excellent drainage solutions',
    'Energy-efficient options available',
    'Suitable for commercial buildings',
    'Easy access for maintenance',
    'Space for HVAC equipment'
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/22_flat_system.jpg" 
            alt="Flat roofing system"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Professional <span className="text-orange-500">Flat Roofing</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Specialized flat roofing solutions for commercial and residential properties. 
                Our expert installation ensures proper drainage, waterproofing, and long-term 
                performance for your flat roof system.
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
                src="/images/22_flat_system.jpg" 
                alt="Flat roof installation"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Flat Roof Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Flat Roofing Systems
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer various flat roofing systems, each designed to provide optimal 
              waterproofing and durability for different building types and budgets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {flatRoofTypes.map((type, index) => (
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
                Flat Roofing Advantages
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
                src="/images/22_flat_system.jpg" 
                alt="Flat roof benefits"
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
              Specialized Flat Roof Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Commercial Expertise</h3>
              <p className="text-gray-600">
                Specialized in large commercial flat roof installations with minimal business disruption.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Droplets className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Drainage Systems</h3>
              <p className="text-gray-600">
                Proper drainage design and installation to prevent water pooling and structural damage.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Equipment Integration</h3>
              <p className="text-gray-600">
                Seamless integration of HVAC units and other rooftop equipment with proper sealing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Flat Roof Solutions?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Get expert flat roofing installation or repair. Our specialists will assess your needs and recommend the best system.
          </p>
          <Link 
            to="/contact"
            className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
          >
            Schedule Assessment
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FlatRoofing;