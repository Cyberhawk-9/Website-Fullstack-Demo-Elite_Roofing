import React from 'react';

const Gallery: React.FC = () => {
  const projects = [
    {
      title: 'Modern Metal Roof Installation',
      image: 'https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Metal Roofing'
    },
    {
      title: 'Asphalt Shingle Replacement',
      image: 'https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Shingle Roofing'
    },
    {
      title: 'Commercial Flat Roof System',
      image: 'https://images.pexels.com/photos/1648769/pexels-photo-1648769.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Flat Roofing'
    },
    {
      title: 'Emergency Storm Damage Repair',
      image: 'https://images.pexels.com/photos/1648770/pexels-photo-1648770.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Roof Repair'
    },
    {
      title: 'Luxury Home Roof Replacement',
      image: 'https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Roof Replacement'
    },
    {
      title: 'New Construction Installation',
      image: 'https://images.pexels.com/photos/1648772/pexels-photo-1648772.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'New Installation'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-orange-500">Gallery</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of completed roofing projects. From residential homes to 
            commercial buildings, see the quality craftsmanship that sets us apart.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
              >
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600">Professional roofing installation with premium materials and expert craftsmanship.</p>
                </div>
              </div>
            ))}
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
            Join our satisfied customers and experience the Elite Roofing difference.
          </p>
          <a 
            href="/contact"
            className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Get Your Free Estimate
          </a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;