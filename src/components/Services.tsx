import React from 'react';
import { Bot, Database, Settings, BarChart3, Workflow, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: 'AI Chatbots & Assistants',
      description: 'Intelligent conversational AI that handles customer support, lead qualification, and internal queries 24/7.',
      features: ['Natural Language Processing', 'Multi-platform Integration', 'Custom Training'],
    },
    {
      icon: Workflow,
      title: 'Process Automation',
      description: 'Streamline repetitive tasks and complex workflows with smart automation that adapts to your business needs.',
      features: ['Workflow Design', 'Task Automation', 'Integration APIs'],
    },
    {
      icon: Database,
      title: 'Data Intelligence',
      description: 'Transform raw data into actionable insights with AI-powered analytics and predictive modeling.',
      features: ['Data Analysis', 'Predictive Models', 'Real-time Dashboards'],
    },
    {
      icon: BarChart3,
      title: 'Performance Optimization',
      description: 'Continuously monitor and optimize your automated systems for maximum efficiency and ROI.',
      features: ['Performance Monitoring', 'A/B Testing', 'ROI Tracking'],
    },
    {
      icon: Settings,
      title: 'Custom AI Solutions',
      description: 'Bespoke AI applications tailored to your specific industry requirements and business objectives.',
      features: ['Custom Development', 'Industry Expertise', 'Scalable Architecture'],
    },
    {
      icon: Shield,
      title: 'AI Security & Compliance',
      description: 'Ensure your AI systems are secure, compliant, and aligned with industry standards and regulations.',
      features: ['Security Audits', 'Compliance Checks', 'Risk Assessment'],
    },
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our AI Automation Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI solutions designed to revolutionize your business operations and drive sustainable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group hover:border-blue-200"
            >
              <div className="mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg w-fit group-hover:scale-110 transition-transform">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;