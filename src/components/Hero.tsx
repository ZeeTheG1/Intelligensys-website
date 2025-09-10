import React from 'react';
import { ArrowRight, Zap, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero-section pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="hero-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center min-h-[60vh]">
          <div className="space-y-8 text-center max-w-4xl">
            <div className="space-y-4">
              <h1 className="hero-headline text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Save 10-20 Hours Per Week with 
                <span className="highlight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> AI Process Automation</span>
              </h1>
              <h2 className="hero-subheadline text-xl text-gray-600 leading-relaxed">
                Custom automation solutions designed specifically for small businesses. 
                No enterprise complexity, no enterprise costs.
              </h2>
            </div>

            <ul className="hero-benefits text-left max-w-2xl mx-auto space-y-3">
              <li>Automate repetitive data entry and document processing</li>
              <li>Streamline customer communications and follow-ups</li>
              <li>Eliminate manual inventory and sales processes</li>
              <li>Get results in weeks, not months</li>
            </ul>

            <div className="hero-cta flex flex-col sm:flex-row justify-center items-center gap-4">
              <button className="cta-primary bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center group">
                Get Your Free Process Assessment
              </button>
              <button className="cta-secondary border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
                See How It Works
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;