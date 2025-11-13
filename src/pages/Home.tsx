import React from 'react';
import { ArrowRight, Shield, Award, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import CountUpStats from '../components/CountUpStats';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-0">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/01_homepage_hero.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-slate-900/75"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeInUp">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Premium <span className="text-orange-500">Roofing</span>
              <br />
              Solutions
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
              Protecting your home with expert craftsmanship, quality materials, and exceptional service.
              Your trusted roofing partner for over 15 years, delivering peace of mind one roof at a time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center group"
              >
                Get Free Estimate
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                View Services
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <CountUpStats />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Why <span className="text-orange-500">Choose Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We don't just install roofs – we deliver comprehensive roofing solutions that stand the test of time.
              Here's what sets us apart from the competition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Licensed & Insured',
                description: 'Fully licensed, bonded, and insured for your complete protection. All work comes with comprehensive warranties covering both materials and workmanship.'
              },
              {
                icon: Award,
                title: 'Premium Quality',
                description: 'We partner with leading manufacturers like GAF, CertainTeed, and Owens Corning to bring you the highest quality roofing materials at competitive prices.'
              },
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Our certified roofing professionals bring decades of combined experience. Every team member is background-checked, trained, and committed to excellence.'
              },
              {
                icon: Clock,
                title: '24/7 Emergency',
                description: 'Storms don\'t wait, and neither do we. Our emergency response team is available around the clock to protect your home when you need us most.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Your Trusted <span className="text-orange-500">Roofing Partner</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                For over 15 years, Elite Roofing has been protecting homes and businesses throughout the
                metro area. Our commitment to excellence, combined with our extensive experience and
                manufacturer certifications, makes us the preferred choice for all your roofing needs.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We understand that your roof is one of your most important investments. That's why we use
                only premium materials from trusted manufacturers and employ certified professionals who
                take pride in every project. From the initial inspection to the final walkthrough, we
                ensure transparent communication and meticulous attention to detail.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you need emergency repairs after a storm, a complete roof replacement, or regular
                maintenance to extend your roof's lifespan, our team has the expertise and dedication to
                deliver exceptional results that stand the test of time.
              </p>
            </div>
            <div>
              <img
                src="/images/02_homepage_about.jpg"
                alt="Professional roofing team at work"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Our <span className="text-orange-500">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From complete roof replacements to emergency repairs, we provide comprehensive roofing solutions
              tailored to your home's unique needs. Every project is backed by our satisfaction guarantee and
              exceptional craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Roof Replacement',
               image: '/images/03_card_roof_replacement.jpg',
                path: '/services/roof-replacement',
                description: 'Complete tear-off and installation with premium materials'
              },
              {
                title: 'Metal Roofing',
               image: '/images/04_card_metal_roofing.jpg',
                path: '/services/metal-roofing',
                description: 'Energy-efficient metal roofing systems that last 50+ years'
              },
              {
                title: 'Roof Repair',
               image: '/images/05_card_roof_repair.jpg',
                path: '/services/roof-repair',
                description: 'Fast, reliable repairs for leaks, storm damage, and wear'
              }
            ].map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
              >
                <div className="aspect-w-16 aspect-h-12">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-200 text-sm mb-3">{service.description}</p>
                  <div className="flex items-center text-orange-400 group-hover:text-orange-300 transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-slate-800 hover:bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Our <span className="text-orange-500">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We've streamlined our process to make your roofing project as smooth and stress-free as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Free Inspection',
                description: 'We conduct a thorough inspection of your roof, identifying any issues and photographing problem areas for your review.'
              },
              {
                step: '02',
                title: 'Detailed Estimate',
                description: 'Receive a transparent, itemized quote with no hidden fees. We explain every option and help you choose the best solution for your budget.'
              },
              {
                step: '03',
                title: 'Expert Installation',
                description: 'Our certified team completes your project efficiently using proven techniques and premium materials. We protect your property throughout the process.'
              },
              {
                step: '04',
                title: 'Final Walkthrough',
                description: 'We inspect every detail with you, ensuring complete satisfaction. Your property is left cleaner than we found it, guaranteed.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-500 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Google Maps */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Protect Your Home?
          </h2>
          <p className="text-xl text-orange-100 mb-8 leading-relaxed">
            Don't wait until a small problem becomes a major headache. Get your free, no-obligation
            roof inspection today and discover why homeowners trust us with their most important investment.
          </p>
          <Link
            to="/contact"
            className="bg-white text-orange-500 hover:bg-gray-100 px-10 py-5 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center shadow-2xl"
          >
            Schedule Free Inspection
            <ArrowRight className="ml-3 w-6 h-6" />
          </Link>
        </div>

        {/* Google Maps - Bottom Right Corner */}
        <div className="absolute bottom-4 right-4 hidden lg:block">
          <div className="w-64 h-64 rounded-lg overflow-hidden shadow-2xl border-4 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d205717.48631150646!2d-115.31254655!3d36.1251958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80beb782a4f57dd1%3A0x3accd5e6d5b379a3!2sLas%20Vegas%2C%20NV!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Las Vegas Location Map"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
