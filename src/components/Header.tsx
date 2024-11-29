import React from 'react';

export function Header() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm py-6 px-4 fixed w-full top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="https://i.imgur.com/w63mKxn.png" 
            alt="Wisata.com Logo" 
            className="h-12 w-auto"
          />
        </div>
        <button 
          onClick={scrollToContact}
          className="bg-primary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors shadow-md hover:shadow-lg"
        >
          Make an Offer
        </button>
      </div>
    </header>
  );
}