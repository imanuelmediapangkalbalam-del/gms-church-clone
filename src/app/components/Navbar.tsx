"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'TENTANG KAMI', href: '#tentang' },
    { label: 'IBADAH', href: '#ibadah' },
    { label: 'LOKASI', href: '#lokasi' },
    { label: 'CONNECT GROUP', href: '#connect-group' },
    { label: 'SOROTAN', href: '#sorotan' },
    { label: 'DONASI', href: '#donasi' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#1A1A2E]/98 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C8A951] to-yellow-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">GMS</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-white font-serif text-xl font-bold tracking-wider">GMS CHURCH</h1>
              <p className="text-[#C8A951] text-[10px] tracking-[0.3em] uppercase">A Home for Everyone</p>
            </div>
          </a>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-[#C8A951] transition-colors duration-200 text-sm font-medium tracking-wider"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#"
              className="px-5 py-2.5 bg-[#C8A951] text-[#1A1A2E] rounded-full text-sm font-bold tracking-wider hover:bg-[#C8A951]/90 transition-all duration-200 hover:shadow-lg hover:shadow-[#C8A951]/30"
            >
              GABUNG
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-[#1A1A2E]/98 backdrop-blur-md border-t border-white/10 px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-white/80 hover:text-[#C8A951] transition-colors py-2 text-sm font-medium tracking-wider"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="block text-center px-5 py-3 bg-[#C8A951] text-[#1A1A2E] rounded-full text-sm font-bold tracking-wider hover:bg-[#C8A951]/90 transition-all"
          >
            GABUNG
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
