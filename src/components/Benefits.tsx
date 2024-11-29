import React from 'react';
import { Globe2, Target, Search, DollarSign } from 'lucide-react';

const benefits = [
  {
    icon: Globe2,
    title: "Direct Market Access",
    description: 'Engage with Indonesia\'s substantial and growing online audience through a domain that speaks their language.'
  },
  {
    icon: Target,
    title: "Perfect Brand Alignment",
    description: 'Own a domain that literally signifies "travel"—ideal for travel agencies, booking platforms, tour operators, or tourism services.'
  },
  {
    icon: Search,
    title: "SEO Excellence",
    description: 'Leverage natural keyword optimization to enhance search engine visibility and establish immediate credibility in the travel sector.'
  },
  {
    icon: DollarSign,
    title: "Strategic Investment",
    description: 'Premium domains are digital assets that appreciate over time. Secure Wisata.com and invest in the future of the booming online travel market.'
  }
];

export function Benefits() {
  return (
    <section className="py-20 bg-white" id="benefits">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Invest in Wisata.com?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
              <benefit.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}