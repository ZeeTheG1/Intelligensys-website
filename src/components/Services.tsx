import React from 'react';
import { Bot, Database, Settings, BarChart3, Workflow, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Database,
      title: 'Data Entry Automation',
      description: 'Stop spending hours on forms, invoices, and data entry. Our AI solutions automatically process and organize your business data.',
      features: ['Form Processing', 'Invoice Management', 'Data Organization'],
    },
    {
      icon: Bot,
      title: 'Customer Communication Automation',
      description: 'Respond to customers instantly with intelligent email automation and appointment scheduling that works 24/7.',
      features: ['Email Automation', 'Appointment Scheduling', '24/7 Response'],
    },
    {
      icon: Workflow,
      title: 'Document Processing Automation',
      description: 'Let AI handle contract reviews, report generation, and document analysis while you focus on growing your business.',
      features: ['Contract Reviews', 'Report Generation', 'Document Analysis'],
    },
    {
      icon: BarChart3,
      title: 'Sales & Inventory Automation',
      description: 'Streamline order processing, inventory management, and customer follow-ups with intelligent automation workflows.',
      features: ['Order Processing', 'Inventory Management', 'Customer Follow-ups'],
    },
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Transform Your Biggest Time-Wasters into Automated Processes
          </h2>
        </div>

        <div className="services-grid grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-item bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group hover:border-blue-200"
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