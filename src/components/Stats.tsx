import React from 'react';

export function Stats() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">$59.7B</div>
            <p className="text-white/80">Indonesia Travel Industry Value (2022)</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">$98.1B</div>
            <p className="text-white/80">Projected Value by 2027</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">10.4%</div>
            <p className="text-white/80">Annual Growth Rate (CAGR)</p>
          </div>
        </div>
        <div className="text-center mt-8 text-sm text-white/70">
          Source: Research and Markets, 2023
        </div>
      </div>
    </section>
  );
}