'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FooterEntryDivider } from '../ui/TransitionDivider';

export default function Footer() {
  const pathname = usePathname();

  // Hide footer on Studio page
  if (pathname.startsWith('/studio')) return null;

  return (
    <>
      <FooterEntryDivider />
      <footer className="bg-[#1C1C1E] text-white border-t border-gold-accent/40 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative h-12 w-12 rounded-full overflow-hidden border border-gold-accent/40 shadow-sm transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/assets/logo.jpeg"
                  alt="Jeet Furniture Mart Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold tracking-widest text-white leading-none">
                  JEET
                </span>
                <span className="text-[8px] uppercase tracking-[0.25em] text-[#C9A84C] font-semibold mt-1">
                  Furniture Mart
                </span>
              </div>
            </Link>
            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              Handcrafting premium wooden swing systems, custom designer temple shrines (Mandirs), contemporary modular solutions, and detailed architectural CNC carvings since 1989.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.facebook.com/profile.php?id=100076124705559&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-[#C9A84C] transition-colors"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/jeet_furniture_mart3060/?hl=en&ig_mid=6D1E1F37-A3D4-468D-8258-148F9005C471&utm_source=igweb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-[#C9A84C] transition-colors"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Core Categories */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#C9A84C] font-bold mb-4">
              Our Collections
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <Link href="/categories#spiritual" className="hover:text-white transition-colors">
                  Jhulas & Mandirs (Spiritual)
                </Link>
              </li>
              <li>
                <Link href="/categories#modern" className="hover:text-white transition-colors">
                  Modular Furniture (Modern)
                </Link>
              </li>
              <li>
                <Link href="/categories#artistic" className="hover:text-white transition-colors">
                  CNC Carvings (Artistic)
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#C9A84C] font-bold mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-white transition-colors">
                  Categories
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#C9A84C] font-bold mb-4">
              Showroom
            </h4>
            <ul className="space-y-3 text-xs text-stone-400">
              <li className="leading-relaxed">
                At. NADIDA, & PO. Barasadi, Ta. Bardoli, Dist. Surat Gujarat India – 394901
              </li>
              <li>
                <span className="font-bold text-white">Inquiries:</span> +91 98790 61733
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-stone-800 text-center text-[10px] text-stone-500">
          &copy; {new Date().getFullYear()} Jeet Furniture Mart. All rights reserved.
        </div>
      </div>
    </footer>
  </>
  );
}
