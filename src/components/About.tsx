import React from 'react';
import { Users, Award, Target, CheckCircle } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Clients Served' },
    { icon: Award, value: '95%', label: 'Success Rate' },
    { icon: Target, value: '1M+', label: 'Hours Saved' },
    { icon: CheckCircle, value: '200+', label: 'Projects Completed' },
  ];

  return (
    <section id="about" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Leading the AI Automation Revolution
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                At Intelligensys, we're not just building automation systems – we're crafting intelligent solutions that transform how businesses operate in the digital age.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Expert AI Engineers</h4>
                  <p className="text-gray-600">Our team of seasoned AI specialists brings decades of combined experience in machine learning and automation.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Proven Track Record</h4>
                  <p className="text-gray-600">We've helped businesses across industries achieve remarkable efficiency gains and cost reductions.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Continuous Innovation</h4>
                  <p className="text-gray-600">We stay ahead of the curve, constantly integrating the latest AI technologies into our solutions.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg w-fit mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;