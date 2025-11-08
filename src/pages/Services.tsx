import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Roof Replacement',
      image: '/images/ab761407-e29c-4997-97a1-a6fea05f52bc.jpg',
      description: 'Complete roof replacement with premium materials and expert installation.',
      path: '/services/roof-replacement'
    },
    {
      title: 'Roof Shingles',
      image: '/images/937747cc-9d96-4812-b939-e50f507777a6.png',
      description: 'High-quality shingle installation and replacement services.',
      path: '/services/roof-shingles'
    },
    {
      title: 'Metal Roofing',
      image: '/images/b157e493-5533-4a69-8843-13074773f594.png',
      description: 'Durable metal roofing solutions for superior protection.',
      path: '/services/metal-roofing'
    },
    {
      title: 'Flat Roofing',
      image: '/images/f26cece2-913e-4465-b7a9-d46528ba5b72.png',
      description: 'Specialized flat roofing systems for commercial properties.',
      path: '/services/flat-roofing'
    },
    {
      title: 'Roof Repair',
      image: '/images/b22be670-76ef-4333-b4ed-74f48d0ec65c.png',
      description: 'Quick and reliable roof repair services for all issues.',
      path: '/services/roof-repair'
    },
    {
      title: 'Maintenance Program',
      image: '/images/files_8003291-1762553295549-output.jpg',
      description: 'Comprehensive maintenance programs to extend roof life.',
      path: '/services/maintenance-program'
    },
    {
      title: 'Roof Installation',
      image: '/images/output.jpg',
      description: 'Professional roof installation for new construction.',
      path: '/services/roof-installation'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-orange-500">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive roofing solutions tailored to your specific needs. From emergency repairs 
            to complete installations, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
              >
                <div className="relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex items-center text-orange-500 group-hover:text-orange-600 transition-colors">
                    <span className="font-semibold">Learn More</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Help Choosing the Right Service?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Our experts are here to help you find the perfect roofing solution for your home.
          </p>
          <Link 
            to="/contact"
            className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
          >
            Get Free Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;