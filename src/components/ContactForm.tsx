import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { submitOffer } from '../lib/api';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    offer: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitOffer(formData);
      
      toast.success('Your offer has been submitted successfully! We will contact you soon.', {
        duration: 5000,
        position: 'top-center',
      });

      // Clear form
      setFormData({
        name: '',
        email: '',
        phone: '',
        offer: '',
        message: ''
      });
    } catch (error) {
      toast.error('Failed to submit offer. Please try again later.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div id="contact-form" className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 shadow-2xl">
      <Toaster />
      <h2 className="text-2xl font-bold text-white mb-6">
        Make an Offer
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your full name"
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent text-white placeholder-white/50"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="your@email.com"
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent text-white placeholder-white/50"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-white mb-1">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+1 (555) 000-0000"
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent text-white placeholder-white/50"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="offer" className="block text-sm font-medium text-white mb-1">
            Offer Amount (USD)
          </label>
          <input
            type="text"
            id="offer"
            name="offer"
            required
            placeholder="Your offer in USD"
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent text-white placeholder-white/50"
            value={formData.offer}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            placeholder="Additional details about your offer..."
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent text-white placeholder-white/50"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-primary text-white py-3 rounded-lg font-semibold transition-all border border-white/20 hover:border-white/40 ${
            isSubmitting 
              ? 'opacity-75 cursor-not-allowed' 
              : 'hover:bg-opacity-90 hover:shadow-lg'
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Offer'}
        </button>
      </form>
    </div>
  );
}