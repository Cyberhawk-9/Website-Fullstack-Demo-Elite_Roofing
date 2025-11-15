import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    shortDescription: '',
    longDescription: '',
    name: '',
    phone: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const isFormValid = () => {
    return (
      formData.shortDescription.length > 0 && formData.shortDescription.length <= 100 &&
      formData.longDescription.length > 0 &&
      formData.name.length > 0 &&
      formData.phone.length > 0 &&
      formData.email.length > 0 &&
      formData.email.includes('@')
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid()) return;

    setIsSubmitting(true);

    try {
      await (window as any).emailjs.sendForm(
        'service_bt3oowm',
        'template_qw2ppxs',
        e.currentTarget
      );
      navigate('/thank-you');
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Oops! Something went wrong.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Contact <span className="text-orange-500">Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Interested in a professional website like this? Contact me today to discuss
            your project and get a custom website built for your business.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold text-slate-800 mb-8">Request Your Custom Website</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-700 mb-2">
                    Brief Description ({formData.shortDescription.length}/100) *
                  </label>
                  <input
                    type="text"
                    id="shortDescription"
                    name="shortDescription"
                    value={formData.shortDescription}
                    onChange={handleInputChange}
                    maxLength={100}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="What service do you offer?"
                  />
                </div>
                
                <div>
                  <label htmlFor="longDescription" className="block text-sm font-medium text-gray-700 mb-2">
                    Detailed Description *
                  </label>
                  <textarea
                    id="longDescription"
                    name="longDescription"
                    value={formData.longDescription}
                    onChange={handleInputChange}
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Please describe your company/service/offer in detail..."
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={!isFormValid() || isSubmitting}
                  className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    isFormValid() && !isSubmitting
                      ? 'bg-orange-500 hover:bg-orange-600 text-white transform hover:scale-105'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="animate-on-scroll">
              <div className="mb-8">
                <img
                  src="/images/40_contact_consultation.jpg"
                  alt="Roofing consultation"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover mb-8"
                />
              </div>

              <h2 className="text-3xl font-bold text-slate-800 mb-8">Get in Touch</h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500/20 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-1">Phone</h4>
                    <p className="text-gray-600 text-lg">(555) 123-4567</p>
                    <p className="text-gray-500 text-sm">Call us for immediate assistance</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500/20 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-1">Email</h4>
                    <p className="text-gray-600 text-lg">info@eliteroofing.com</p>
                    <p className="text-gray-500 text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500/20 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-1">Service Area</h4>
                    <p className="text-gray-600 text-lg">Metro Area & Surrounding</p>
                    <p className="text-gray-500 text-sm">50-mile radius coverage</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500/20 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-1">Business Hours</h4>
                    <p className="text-gray-600">Mon - Fri: 7AM - 6PM</p>
                    <p className="text-gray-600">Sat: 8AM - 4PM</p>
                    <p className="text-gray-500 text-sm">Emergency service available 24/7</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-orange-50 rounded-lg border border-orange-200">
                <h4 className="text-lg font-semibold text-slate-800 mb-2">Emergency Service</h4>
                <p className="text-gray-600 text-sm">
                  Storm damage? Leak emergency? Don't wait! Our emergency crew is available 24/7 
                  to protect your home and prevent further damage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;