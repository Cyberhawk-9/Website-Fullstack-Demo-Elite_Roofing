import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home } from 'lucide-react';

const ThankYou: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
        <div className="mb-6">
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Thank You!</h1>
          <p className="text-gray-600 leading-relaxed">
            Your message has been received successfully. Our team will review your request 
            and get back to you within 24 hours with a detailed response.
          </p>
        </div>
        
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
          <p className="text-orange-800 text-sm">
            <strong>What's Next?</strong><br />
            We'll contact you to schedule a free consultation and provide you with 
            a detailed estimate for your roofing project.
          </p>
        </div>
        
        <Link 
          to="/"
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center w-full"
        >
          <Home className="mr-2 w-5 h-5" />
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;