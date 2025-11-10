import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Shield, Clock, Award } from 'lucide-react';

const RoofReplacement: React.FC = () => {
  const benefits = [
    'Complete protection from weather elements',
    'Increased home value and curb appeal',
    'Energy efficiency improvements',
    'Long-term cost savings on repairs',
    'Enhanced structural integrity',
    'Modern materials and technology'
  ];

  const process = [
    {
      step: 1,
      title: 'Initial Inspection',
      description: 'Comprehensive assessment of your current roof condition and structural requirements.'
    },
    {
      step: 2,
      title: 'Material Selection',
      description: 'Choose from premium roofing materials that match your style and budget preferences.'
    },
    {
      step: 3,
      title: 'Professional Installation',
      description: 'Expert installation by certified roofers using industry best practices and safety protocols.'
    },
    {
      step: 4,
      title: 'Quality Assurance',
      description: 'Final inspection and cleanup, ensuring your complete satisfaction with the finished project.'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/service-card-roof-installation.png" 
            alt="Roof replacement project"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Complete <span className="text-orange-500">Roof Replacement</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your home with a complete roof replacement. Our expert team provides 
                premium materials, professional installation, and comprehensive warranties for 
                lasting protection and peace of mind.
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
                src="/images/roof-replacement-hero.jpg" 
                alt="Professional roof replacement"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Why Choose Complete Roof Replacement?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A complete roof replacement is an investment in your home's future, providing 
              superior protection and value for decades to come.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Our Replacement Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure your roof replacement project 
              is completed efficiently and to the highest standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-8">
                Premium Materials & Expert Installation
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Shield className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-2">25-Year Warranty</h4>
                    <p className="text-gray-600">Comprehensive warranty coverage on both materials and workmanship for complete peace of mind.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-2">Efficient Timeline</h4>
                    <p className="text-gray-600">Most residential roof replacements completed within 1-3 days, weather permitting.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Award className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-2">Certified Professionals</h4>
                    <p className="text-gray-600">All our roofers are licensed, insured, and certified by leading manufacturers.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/images/service-card-roof-installation.png" 
                alt="Roof replacement materials"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Your New Roof?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Get a free, detailed estimate for your roof replacement project. No obligation, just expert advice.
          </p>
          <Link 
            to="/contact"
            className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
          >
            Schedule Free Inspection
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default RoofReplacement;