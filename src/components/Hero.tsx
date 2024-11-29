import React from 'react';
import { ContactForm } from './ContactForm';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.imgur.com/sCZ4MZ2.jpeg" 
          alt="Wisata Travel Concept" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Hero content */}
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white drop-shadow-lg">
                Acquire the Ultimate Travel Domain
              </span>
              <span className="text-white block mt-2 drop-shadow-lg">wisata.com</span>
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed drop-shadow-md">
              Position your brand at the forefront of the global travel industry with this premium, 
              keyword-rich domain. <span className="text-white">"Wisata,"</span> meaning "travel" in Indonesian, connects you directly 
              to Indonesia's dynamic market of over 280 million people.
            </p>
            <div className="mt-16 text-white/90 text-sm">
              <span className="mr-2">Unlock the potential of Indonesia's $59.7B travel market</span>
              <span className="text-white/50">|</span>
              <span className="ml-2 text-white/80">Source: Research and Markets, 2023</span>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}