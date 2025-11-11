import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Roof Replacement',
      image: '/images/06_services_replacement.jpg',
      description: 'Complete tear-off and installation with premium materials. Transform your aging roof into a protective barrier that adds value and curb appeal to your home.',
      features: ['Lifetime warranties available', 'Energy-efficient options', 'Complete tear-off & disposal'],
      path: '/services/roof-replacement'
    },
    {
      title: 'Roof Shingles',
      image: '/images/07_services_shingles.jpg',
      description: 'Premium architectural shingles from top manufacturers. Choose from hundreds of colors and styles to perfectly match your home\'s aesthetic.',
      features: ['GAF & CertainTeed certified', 'Impact-resistant options', 'Extended color selection'],
      path: '/services/roof-shingles'
    },
    {
      title: 'Metal Roofing',
      image: '/images/08_services_metal.jpg',
      description: 'Energy-efficient metal roofing systems engineered to last 50+ years. Reduce cooling costs while protecting your home with superior durability.',
      features: ['50+ year lifespan', 'Energy Star rated', 'Fire & wind resistant'],
      path: '/services/metal-roofing'
    },
    {
      title: 'Flat Roofing',
      image: '/images/09_services_flat.jpg',
      description: 'Commercial-grade flat roofing systems using TPO, EPDM, and modified bitumen. Specialized expertise for low-slope and flat roof applications.',
      features: ['Commercial expertise', 'Multiple membrane options', 'Superior waterproofing'],
      path: '/services/flat-roofing'
    },
    {
      title: 'Roof Repair',
      image: '/images/10_services_repair.jpg',
      description: 'Fast, reliable repairs for leaks, storm damage, and general wear. Same-day emergency service available to prevent further damage to your home.',
      features: ['Same-day emergency service', 'Leak detection & repair', 'Storm damage experts'],
      path: '/services/roof-repair'
    },
    {
      title: 'Maintenance Program',
      image: '/images/11_services_maintenance.jpg',
      description: 'Proactive maintenance plans that extend your roof\'s lifespan and prevent costly repairs. Includes biannual inspections and priority service.',
      features: ['Biannual inspections', 'Priority emergency service', 'Detailed condition reports'],
      path: '/services/maintenance-program'
    },
    {
      title: 'Roof Installation',
      image: '/images/12_services_installation.jpg',
      description: 'Expert installation for new construction and additions. We work seamlessly with builders to deliver on-time, on-budget roofing solutions.',
      features: ['New construction specialists', 'Builder partnerships', 'Coordinated scheduling'],
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
            to complete installations, we combine expert craftsmanship with premium materials to deliver
            roofing systems that protect your investment for decades.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-orange-400">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-current" />
              <span className="text-sm font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-current" />
              <span className="text-sm font-medium">15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-current" />
              <span className="text-sm font-medium">Lifetime Warranties Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Complete Roofing Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every service is backed by our commitment to quality, transparent pricing, and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
              >
                <Link to={service.path}>
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center text-orange-500 group-hover:text-orange-600 transition-colors font-semibold">
                      <span>View Details</span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              The Elite Roofing Difference
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What sets our services apart from the competition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="text-4xl font-bold text-orange-500 mb-4">01</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Premium Materials Only</h3>
              <p className="text-gray-600 leading-relaxed">
                We exclusively use top-tier materials from GAF, CertainTeed, Owens Corning, and other industry leaders.
                No shortcuts, no compromises – just quality materials that stand the test of time.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="text-4xl font-bold text-orange-500 mb-4">02</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Certified Professionals</h3>
              <p className="text-gray-600 leading-relaxed">
                Every team member is manufacturer-certified, background-checked, and extensively trained.
                Our installation crews follow strict safety protocols and industry best practices on every job.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="text-4xl font-bold text-orange-500 mb-4">03</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Comprehensive Warranties</h3>
              <p className="text-gray-600 leading-relaxed">
                All services include both workmanship and material warranties. Many of our installations
                qualify for lifetime warranties, giving you decades of peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-xl text-orange-100 mb-8 leading-relaxed">
            Our roofing experts will assess your specific situation and recommend the best solution
            for your home and budget. Schedule a free, no-obligation consultation today.
          </p>
          <Link
            to="/contact"
            className="bg-white text-orange-500 hover:bg-gray-100 px-10 py-5 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center shadow-2xl"
          >
            Get Free Consultation
            <ArrowRight className="ml-3 w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
