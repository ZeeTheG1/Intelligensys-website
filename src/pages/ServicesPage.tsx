import React from 'react';
import { Helmet } from 'react-helmet-async';
import Services from '../components/Services';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Automation Services | Intelligensys - Transform Your Business</title>
        <meta name="description" content="Comprehensive AI automation services including chatbots, process automation, data intelligence, and custom AI solutions. Boost efficiency and ROI with our expert AI implementations." />
        <meta name="keywords" content="AI automation services, business process automation, AI chatbots, data intelligence, custom AI solutions, machine learning consulting" />
      </Helmet>
      
      <div className="pt-20">
        <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              AI Automation Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business operations with our comprehensive suite of AI automation solutions designed to increase efficiency, reduce costs, and drive growth.
            </p>
          </div>
        </div>
        <Services />
      </div>
    </>
  );
};

export default ServicesPage;