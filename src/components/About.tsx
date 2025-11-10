import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    {
      icon: Award,
      number: '15+',
      label: 'Years in Business',
      description: 'Trusted roofing expertise'
    },
    {
      icon: Users,
      number: '2,500+',
      label: 'Happy Customers',
      description: 'Satisfied homeowners'
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Emergency Service',
      description: 'Always here when you need us'
    },
    {
      icon: Shield,
      number: '100%',
      label: 'Satisfaction Guarantee',
      description: 'Your satisfaction is our priority'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Why Choose <span className="text-orange-500">Elite Roofing</span>?
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              For over 15 years, Elite Roofing has been the trusted choice for homeowners seeking 
              premium roofing solutions. Our commitment to excellence, quality craftsmanship, and 
              customer satisfaction sets us apart in the industry.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 w-6 h-6 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">Licensed & Insured</h4>
                  <p className="text-gray-600">Fully licensed contractors with comprehensive insurance coverage for your peace of mind.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 w-6 h-6 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">Premium Materials</h4>
                  <p className="text-gray-600">We use only the highest quality materials from trusted manufacturers for lasting durability.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 w-6 h-6 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">Warranty Protection</h4>
                  <p className="text-gray-600">Comprehensive warranties on both materials and workmanship for complete protection.</p>
                </div>
              </div>
            </div>
            
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Get Your Free Estimate
            </button>
          </div>
          
          {/* Image */}
          <div className="animate-on-scroll">
            <div className="relative">
              <img 
                src="/images/homepage-roofers-working.jpg" 
                alt="Professional roofers at work" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-2xl font-bold mb-1">15+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Achievements */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="text-center animate-on-scroll bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-orange-500" />
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2">{achievement.number}</div>
                <div className="text-lg font-semibold text-slate-700 mb-2">{achievement.label}</div>
                <div className="text-gray-600 text-sm">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;