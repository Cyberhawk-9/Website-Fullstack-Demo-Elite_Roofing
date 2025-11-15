import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Clock, AlertTriangle, Wrench } from 'lucide-react';

const RoofRepair: React.FC = () => {
  const repairTypes = [
    {
      name: 'Emergency Repairs',
      description: '24/7 emergency service for storm damage, leaks, and urgent roofing issues.',
      features: ['Same-day response', 'Temporary protection', 'Insurance claim assistance']
    },
    {
      name: 'Leak Detection & Repair',
      description: 'Advanced leak detection and permanent repair solutions to protect your home.',
      features: ['Thermal imaging', 'Moisture mapping', 'Comprehensive sealing']
    },
    {
      name: 'Storm Damage Restoration',
      description: 'Complete assessment and repair of hail, wind, and weather-related damage.',
      features: ['Insurance coordination', 'Full documentation', 'Quality restoration']
    }
  ];

  const commonIssues = [
    'Missing or damaged shingles',
    'Leaks and water damage',
    'Flashing problems',
    'Gutter and downspout issues',
    'Ventilation problems',
    'Storm and hail damage'
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/25_repair_storm_damage.jpg" 
            alt="Roof repair service"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Expert <span className="text-orange-500">Roof Repair</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Don't let small problems become major headaches. Our experienced repair team 
                provides fast, reliable solutions for all types of roofing issues, from 
                emergency leaks to storm damage restoration.
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
                src="/images/25_repair_storm_damage.jpg" 
                alt="Roof repair work"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Repair Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Comprehensive Repair Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From emergency repairs to planned maintenance, we handle all types of roofing 
              issues with expertise and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {repairTypes.map((type, index) => (
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

      {/* Common Issues Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-8">
                Common Roofing Problems We Fix
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {commonIssues.map((issue, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{issue}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">Don't Wait for Small Problems to Become Big Ones</h4>
                    <p className="text-red-700 text-sm">
                      Early intervention can save thousands in repair costs and prevent interior damage to your home.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/images/25_repair_storm_damage.jpg" 
                alt="Roof repair process"
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
              Why Choose Our Repair Service?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">24/7 Emergency Service</h3>
              <p className="text-gray-600">
                Storm damage or emergency leak? We're available around the clock to protect your home.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Expert Diagnostics</h3>
              <p className="text-gray-600">
                Advanced tools and techniques to identify the root cause and provide lasting solutions.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Guaranteed Work</h3>
              <p className="text-gray-600">
                All repairs come with our comprehensive warranty for your complete peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Roof Repair Now?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Don't let roofing problems get worse. Contact us for fast, professional repair service.
          </p>
          <Link 
            to="/contact"
            className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
          >
            Get Immediate Help
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default RoofRepair;