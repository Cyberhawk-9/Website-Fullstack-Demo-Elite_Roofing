import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Calendar, Shield, TrendingUp } from 'lucide-react';

const MaintenanceProgram: React.FC = () => {
  const programLevels = [
    {
      name: 'Basic Plan',
      price: '$199/year',
      description: 'Essential maintenance for homeowners on a budget.',
      features: ['Annual inspection', 'Basic cleaning', 'Minor repair priority', 'Maintenance report']
    },
    {
      name: 'Premium Plan',
      price: '$399/year',
      description: 'Comprehensive care for maximum roof protection.',
      features: ['Bi-annual inspections', 'Deep cleaning', 'Priority emergency service', 'Gutter maintenance', 'Detailed reports']
    },
    {
      name: 'Commercial Plan',
      price: 'Custom Quote',
      description: 'Tailored maintenance programs for commercial properties.',
      features: ['Quarterly inspections', 'Preventive repairs', '24/7 emergency response', 'Compliance documentation']
    }
  ];

  const benefits = [
    'Extend roof lifespan by 5-10 years',
    'Prevent costly emergency repairs',
    'Maintain warranty compliance',
    'Early problem detection',
    'Priority service scheduling',
    'Detailed maintenance records'
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/28_maintenance_inspection.jpg" 
            alt="Roof maintenance service"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Roof <span className="text-orange-500">Maintenance Program</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Protect your investment with our comprehensive roof maintenance programs. 
                Regular inspections and preventive care extend your roof's life and prevent 
                costly repairs before they happen.
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
                src="/images/28_maintenance_inspection.jpg" 
                alt="Roof maintenance inspection"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Levels Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Maintenance Program Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the maintenance plan that best fits your needs and budget. 
              All programs include professional inspections and priority service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programLevels.map((program, index) => (
              <div key={index} className={`rounded-2xl p-8 hover:shadow-lg transition-all duration-300 ${
                index === 1 ? 'bg-orange-50 border-2 border-orange-200 transform scale-105' : 'bg-gray-50'
              }`}>
                {index === 1 && (
                  <div className="text-center mb-4">
                    <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{program.name}</h3>
                  <div className="text-3xl font-bold text-orange-500 mb-2">{program.price}</div>
                  <p className="text-gray-600">{program.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 text-center block ${
                    index === 1 
                      ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                      : 'bg-slate-800 hover:bg-orange-500 text-white'
                  }`}
                >
                  Choose Plan
                </Link>
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
                Program Benefits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Save Money Long-Term</h4>
                <p className="text-green-700 text-sm">
                  Regular maintenance can save you thousands in major repairs and extend your roof's life significantly.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="/images/28_maintenance_inspection.jpg" 
                alt="Roof maintenance benefits"
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
              What's Included in Every Program
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Scheduled Inspections</h3>
              <p className="text-gray-600">
                Regular professional inspections to identify potential issues before they become problems.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Preventive Care</h3>
              <p className="text-gray-600">
                Proactive maintenance including cleaning, minor repairs, and protective treatments.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Detailed Reporting</h3>
              <p className="text-gray-600">
                Comprehensive reports with photos and recommendations to track your roof's condition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Protect Your Investment Today
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join our maintenance program and ensure your roof stays in peak condition year-round.
          </p>
          <Link 
            to="/contact"
            className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
          >
            Enroll Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MaintenanceProgram;