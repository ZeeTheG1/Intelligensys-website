import React from 'react';
import { Helmet } from 'react-helmet-async';
import About from '../components/About';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Intelligensys | Leading AI Automation Agency</title>
        <meta name="description" content="Learn about Intelligensys - a cutting-edge AI automation agency helping businesses transform operations with intelligent automation solutions and expert AI consulting." />
        <meta name="keywords" content="AI automation agency, artificial intelligence consulting, business automation experts, AI transformation, machine learning services" />
      </Helmet>
      
      <div className="pt-20">
        <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About Intelligensys
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a forward-thinking AI automation agency dedicated to helping businesses unlock the power of artificial intelligence to transform their operations and achieve sustainable growth.
            </p>
          </div>
        </div>
        <About />
      </div>
    </>
  );
};

export default AboutPage;