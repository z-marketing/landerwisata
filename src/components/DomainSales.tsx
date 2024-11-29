import React from 'react';
import { DollarSign } from 'lucide-react';

const domainSales = [
  {
    domain: 'Travel.com',
    price: '$3 million',
    year: '1999'
  },
  {
    domain: 'Hotels.com',
    price: '$11 million',
    year: '2001'
  },
  {
    domain: 'VacationRentals.com',
    price: '$35 million',
    year: '2007'
  },
  {
    domain: 'Insurance.com',
    price: '$35.6 million',
    year: '2010'
  }
];

export function DomainSales() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Premium Domain Value
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Similar travel-related domains have commanded significant prices, demonstrating the 
          exceptional value of premium, industry-specific domains.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {domainSales.map((sale, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <DollarSign className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{sale.domain}</h3>
              <p className="text-2xl font-bold text-primary mb-1">{sale.price}</p>
              <p className="text-sm text-gray-500">Sold in {sale.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}