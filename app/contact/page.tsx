import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export const metadata = {
  title: 'Contact Us | Jeet Furniture Mart',
  description: 'Get in touch with Jeet Furniture Mart. Find showroom coordinates in Bardoli, Surat, Gujarat and contact details.',
};

export default function ContactPage() {
  return (
    <div className="bg-[#FAF8F5] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-widest text-[#C9A84C] font-sans font-bold">
            Get in touch
          </span>
          <h1 className="mt-2 text-4xl sm:text-5xl font-display font-light text-[#1C1C1E]">
            Contact <span className="font-bold text-[#C9A84C] italic">Jeet Furniture Mart</span>
          </h1>
          <div className="mt-4 w-12 h-[1px] bg-gold-accent mx-auto" />
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Showroom Details */}
          <div className="bg-white border border-[#E0DDD8] p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="w-5 h-5 text-gold-accent" />
                <h2 className="text-lg font-display font-bold text-[#1C1C1E] uppercase tracking-wider">
                  Showroom Location
                </h2>
              </div>
              <p className="text-xs text-stone-500 font-sans leading-relaxed">
                At. NADIDA, & PO. Barasadi,<br />
                Ta. Bardoli, Dist. Surat,<br />
                Gujarat India – 394901
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-[#E0DDD8] text-xs text-stone-400">
              Conveniently located in Bardoli, Surat, Gujarat.
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-white border border-[#E0DDD8] p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="w-5 h-5 text-gold-accent" />
                <h2 className="text-lg font-display font-bold text-[#1C1C1E] uppercase tracking-wider">
                  Business Hours
                </h2>
              </div>
              <ul className="text-xs text-stone-500 font-sans space-y-2">
                <li className="flex justify-between font-medium">
                  <span>Monday - Sunday:</span>
                  <span className="font-semibold text-[#1C1C1E]">08:00 AM - 09:00 PM</span>
                </li>
                <li className="flex justify-between text-[#C9A84C] font-bold mt-2 pt-2 border-t border-stone-100">
                  <span>Phone &amp; WhatsApp:</span>
                  <span className="uppercase tracking-wider text-[9px]">Available 24/7</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-[#E0DDD8] text-xs text-stone-400">
              Our showroom is open every day. Direct calls and WhatsApp support are active 24/7.
            </div>
          </div>
        </div>

        {/* Map Location */}
        <div className="w-full mb-12 border border-[#E0DDD8] bg-white shadow-sm overflow-hidden h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d953482.2261139976!2d72.5255663640351!3d21.01107082921855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be05dc25f0bc2a9%3A0xeab7024456f97625!2sJeet%20Furniture%20Mart!5e0!3m2!1sen!2sin!4v1781642731036!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Jeet Furniture Mart Showroom Location"
            className="w-full h-full"
          />
        </div>

        {/* Quick Contact Form/Action */}
        <div className="bg-[#1C1C1E] text-white border border-gold-accent/40 p-8 md:p-12 text-center shadow-lg">
          <span className="text-[9px] uppercase tracking-[0.25em] text-[#C9A84C] font-semibold">
            Instant Inquiry
          </span>
          <h2 className="mt-2 text-2xl md:text-3xl font-display text-white">
            Connect Directly with our Designers
          </h2>
          <p className="mt-4 text-xs text-stone-400 max-w-lg mx-auto leading-relaxed mb-8">
            Click the button below to initiate a chat with us on WhatsApp. You can share your design inspirations, dimension requirements, or get price estimations.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 text-xs text-stone-300">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-[#C9A84C]" />
              <span className="font-bold text-white">+91 98790 61733</span>
              <span className="text-[10px] text-stone-400 font-light">(Primary)</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-stone-500" />
              <span>+91 78628 00530</span>
              <span className="text-[10px] text-stone-500 font-light">(Secondary)</span>
            </div>
          </div>

          <div className="mt-10">
            <WhatsAppButton className="w-full sm:w-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
