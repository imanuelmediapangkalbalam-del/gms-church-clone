"use client";

import React from 'react';
import { Facebook, Instagram, Youtube, Twitter, Music2, Headphones } from 'lucide-react';
import { footerLinks } from '../data/site-data';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'Youtube' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-[#1A1A2E] pt-20 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C8A951] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-6 gap-12 mb-16">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#C8A951] to-yellow-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">GMS</span>
              </div>
              <div>
                <h3 className="text-white font-serif text-xl font-bold tracking-wider">GMS Church</h3>
                <p className="text-[#C8A951] text-[10px] tracking-[0.3em] uppercase">A Home for Everyone</p>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Gereja sel yang apostolik dan profetik, bergerak dalam Amanat Agung untuk menjadikan semua bangsa murid Kristus.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#C8A951] hover:text-white transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider mb-6">GEREJA</h4>
            <ul className="space-y-3">
              {footerLinks.gereja.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/50 hover:text-[#C8A951] text-sm transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm tracking-wider mb-6">IBADAH</h4>
            <ul className="space-y-3">
              {footerLinks.ibadah.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/50 hover:text-[#C8A951] text-sm transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm tracking-wider mb-6">CONNECT</h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/50 hover:text-[#C8A951] text-sm transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm tracking-wider mb-6">TERHUBUNG</h4>
            <ul className="space-y-3">
              {footerLinks.terhubung.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/50 hover:text-[#C8A951] text-sm transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-sm">
              &copy; {new Date().getFullYear()} GMS Church. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/30 hover:text-[#C8A951] text-xs transition-colors">Kebijakan Privasi</a>
              <a href="#" className="text-white/30 hover:text-[#C8A951] text-xs transition-colors">Syarat & Ketentuan</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
