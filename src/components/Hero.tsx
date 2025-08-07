import React from 'react';
import { ArrowRight, Zap, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center min-h-[60vh]">
          <div className="space-y-8 text-center max-w-4xl">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Automate Your Business with 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> AI Intelligence</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your operations with cutting-edge AI automation solutions. Increase efficiency, reduce costs, and scale your business effortlessly.
              </p>
            </div>

            <div className="flex justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center group">
                Start Your Automation Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;