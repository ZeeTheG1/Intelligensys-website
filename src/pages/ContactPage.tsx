import React from 'react';
import { Helmet } from 'react-helmet-async';
import Contact from '../components/Contact';

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Intelligensys | Get Started with AI Automation</title>
        <meta name="description" content="Ready to transform your business with AI automation? Contact Intelligensys for expert consultation and custom AI solutions tailored to your needs." />
        <meta name="keywords" content="contact AI automation agency, AI consultation, business automation quote, AI implementation services, get started with AI" />
      </Helmet>
      
      <div className="pt-20">
        <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Get Started with AI Automation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your business with intelligent automation? Let's discuss how our AI solutions can help you achieve your goals.
            </p>
          </div>
        </div>
        <Contact />
      </div>
    </>
  );
};

export default ContactPage;