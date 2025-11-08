import React from 'react';
import { Home, Layers, Shield, Wrench, Settings, CheckCircle, Hammer } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Home,
      title: 'Roof Replacement',
      description: 'Complete roof replacement with premium materials and expert installation for maximum protection and longevity.',
      features: ['Premium Materials', 'Expert Installation', '25-Year Warranty']
    },
    {
      icon: Layers,
      title: 'Roof Shingles',
      description: 'High-quality shingle installation and replacement using top-tier materials for durability and aesthetic appeal.',
      features: ['Asphalt Shingles', 'Architectural Options', 'Color Matching']
    },
    {
      icon: Shield,
      title: 'Metal Roofing',
      description: 'Durable metal roofing solutions that provide superior protection and energy efficiency for decades.',
      features: ['50-Year Lifespan', 'Energy Efficient', 'Weather Resistant']
    },
    {
      icon: Settings,
      title: 'Flat Roofing',
      description: 'Specialized flat roofing systems for commercial and residential properties with superior drainage solutions.',
      features: ['EPDM Systems', 'TPO Installation', 'Proper Drainage']
    },
    {
      icon: Wrench,
      title: 'Roof Repair',
      description: 'Quick and reliable roof repair services to address leaks, damage, and wear before they become major issues.',
      features: ['Emergency Service', 'Leak Detection', 'Storm Damage']
    },
    {
      icon: CheckCircle,
      title: 'Maintenance Program',
      description: 'Comprehensive maintenance programs to extend your roof\'s life and prevent costly repairs through regular inspections.',
      features: ['Annual Inspections', 'Preventive Care', 'Priority Service']
    },
    {
      icon: Hammer,
      title: 'Roof Installation',
      description: 'Professional roof installation for new construction and major renovations with precision and quality craftsmanship.',
      features: ['New Construction', 'Code Compliance', 'Quality Assurance']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From complete roof replacements to regular maintenance, we provide comprehensive roofing solutions 
            tailored to your specific needs and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-on-scroll group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-8">
                <div className="bg-orange-500/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-orange-500 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-slate-800 hover:bg-orange-500 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
              
              {/* Hover Effect Overlay */}
              <div className="h-1 bg-gradient-to-r from-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;