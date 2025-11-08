import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Downtown Metro',
      rating: 5,
      text: 'Elite Roofing exceeded our expectations! They replaced our entire roof after storm damage and the quality is outstanding. The team was professional, clean, and finished ahead of schedule.',
      service: 'Roof Replacement'
    },
    {
      name: 'Mike Rodriguez',
      location: 'Suburban Hills',
      rating: 5,
      text: 'Had a leak that three other companies couldn\'t fix properly. Elite Roofing found the issue immediately and provided a permanent solution. No more worries during rainy season!',
      service: 'Roof Repair'
    },
    {
      name: 'Jennifer Chen',
      location: 'Westside District',
      rating: 5,
      text: 'The metal roof installation was flawless. The crew was knowledgeable, respectful of our property, and the final result looks amazing. Great investment for our home.',
      service: 'Metal Roofing'
    },
    {
      name: 'David Thompson',
      location: 'East Valley',
      rating: 5,
      text: 'Professional service from start to finish. The estimate was detailed and fair, work was completed on time, and they cleaned up perfectly. Highly recommend Elite Roofing!',
      service: 'Shingle Installation'
    },
    {
      name: 'Lisa Martinez',
      location: 'North Ridge',
      rating: 5,
      text: 'Emergency roof repair during a storm - they came out the same day! Prevented major water damage and followed up with a complete inspection. Excellent customer service.',
      service: 'Emergency Repair'
    },
    {
      name: 'Robert Kim',
      location: 'Central Business District',
      rating: 5,
      text: 'Our commercial flat roof project was handled with expertise and professionalism. Minimal disruption to our business operations and excellent quality workmanship.',
      service: 'Commercial Roofing'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Customer <span className="text-orange-500">Testimonials</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied customers have to say 
            about their experience with Elite Roofing.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-8 relative"
              >
                <Quote className="w-8 h-8 text-orange-500 mb-4" />
                
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <h4 className="font-bold text-slate-800 mb-1">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm mb-2">{testimonial.location}</p>
                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-medium">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-orange-500 mb-2">2,500+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-orange-500 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-orange-500 mb-2">100%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-orange-500 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Satisfied Customers
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Experience the Elite Roofing difference for yourself. Get your free estimate today!
          </p>
          <a 
            href="/contact"
            className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Get Free Estimate
          </a>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;