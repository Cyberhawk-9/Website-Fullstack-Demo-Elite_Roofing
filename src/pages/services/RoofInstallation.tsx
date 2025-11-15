import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Home, Ruler, Hammer } from 'lucide-react';

const RoofInstallation: React.FC = () => {
  const installationTypes = [
    {
      name: 'New Construction',
      description: 'Complete roofing systems for new home construction and additions.',
      features: ['Code compliance', 'Structural integration', 'Energy efficiency planning']
    },
    {
      name: 'Renovation Projects',
      description: 'Roof installation for major home renovations and remodeling projects.',
      features: ['Design coordination', 'Timeline management', 'Minimal disruption']
    },
    {
      name: 'Commercial Installation',
      description: 'Large-scale roofing installation for commercial and industrial buildings.',
      features: ['Project management', 'Safety protocols', 'Warranty programs']
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Design Consultation',
      description: 'Work with our experts to design the perfect roofing system for your project.'
    },
    {
      step: 2,
      title: 'Material Selection',
      description: 'Choose from premium materials that match your specifications and budget.'
    },
    {
      step: 3,
      title: 'Professional Installation',
      description: 'Expert installation by certified professionals following industry best practices.'
    },
    {
      step: 4,
      title: 'Final Inspection',
      description: 'Comprehensive quality check and warranty activation for your new roof.'
    }
  ];

  const benefits = [
    'Custom design solutions',
    'Premium material options',
    'Code compliance guarantee',
    'Energy efficiency optimization',
    'Comprehensive warranties',
    'Professional project management'
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/32_installation_process.jpg" 
            alt="Roof installation project"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Professional <span className="text-orange-500">Roof Installation</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Expert roof installation for new construction, renovations, and commercial projects. 
                We deliver precision craftsmanship, quality materials, and comprehensive warranties 
                for lasting protection and peace of mind.
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
                src="/images/32_installation_process.jpg"
                alt="New roof installation"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Installation Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Installation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're building new or renovating, we provide expert roof installation 
              services tailored to your specific project requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {installationTypes.map((type, index) => (
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

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Our Installation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure your roof installation project 
              is completed on time, on budget, and to the highest quality standards.
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-8">
                Why Choose Our Installation Service?
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
                src="/images/32_installation_process.jpg" 
                alt="Professional installation"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Professional Installation Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Custom Design</h3>
              <p className="text-gray-600">
                Tailored roofing solutions designed to match your architectural style and performance needs.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Ruler className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Precision Installation</h3>
              <p className="text-gray-600">
                Meticulous attention to detail ensuring proper installation and long-term performance.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Hammer className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Expert Craftsmanship</h3>
              <p className="text-gray-600">
                Skilled professionals with years of experience in all types of roofing installations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Get a detailed quote for your roof installation project. We'll work with you every step of the way.
          </p>
          <Link 
            to="/contact"
            className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default RoofInstallation;