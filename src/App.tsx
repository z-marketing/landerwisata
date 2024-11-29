import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Stats } from './components/Stats';
import { DomainSales } from './components/DomainSales';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Benefits />
        <DomainSales />
      </main>
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>© {new Date().getFullYear()} Wisata.com - Premium Domain For Sale</p>
      </footer>
    </div>
  );
}

export default App;