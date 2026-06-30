'use client';

import React from 'react';
import Link from 'next/link';
import {
  Church,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Youtube,
  Instagram,
  Facebook,
  Music,
  Heart,
  ChevronRight,
} from 'lucide-react';
import {
  FOOTER_COLUMNS,
  SOCIAL_MEDIA_LINKS,
  FOOTER_INFO,
} from '../data/site-data';

// ================================================================
// Social Icon Mapper
// ================================================================
function getSocialIcon(label: string) {
  switch (label.toLowerCase()) {
    case 'instagram':
      return <Instagram className="w-5 h-5" />;
    case 'facebook':
      return <Facebook className="w-5 h-5" />;
    case 'youtube':
      return <Youtube className="w-5 h-5" />;
    case 'email':
      return <Mail className="w-5 h-5" />;
    default:
      return <ExternalLink className="w-5 h-5" />;
  }
}

// ================================================================
// FooterColumn Component
// ================================================================
function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}) {
  return (
    <div className="space-y-3">
      <h3 className="text-gms-gold font-semibold text-sm uppercase tracking-widest">
        {title}
      </h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-gray-400 hover:text-gms-gold transition-colors duration-200 text-sm group"
              >
                <ChevronRight className="w-3 h-3 text-gms-gold/50 group-hover:text-gms-gold transition-colors shrink-0" />
                <span>{link.label}</span>
                <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
              </a>
            ) : (
              <Link
                href={link.href}
                className="flex items-center gap-1.5 text-gray-400 hover:text-gms-gold transition-colors duration-200 text-sm group"
              >
                <ChevronRight className="w-3 h-3 text-gms-gold/50 group-hover:text-gms-gold transition-colors shrink-0" />
                <span>{link.label}</span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ================================================================
// Footer
// ================================================================
export default function Footer() {
  return (
    <footer className="bg-gms-dark text-white">
      {/* Top wave accent */}
      <div className="h-1 w-full bg-gradient-to-r from-gms-gold via-gms-maroon to-gms-gold" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Grid: columns + info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 text-gms-gold hover:text-gms-gold/90 transition-colors mb-4"
            >
              <Church className="w-7 h-7" />
              <span className="font-serif text-xl font-bold tracking-wide">
                GMS
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {FOOTER_INFO.tagline}
            </p>
            <p className="text-gray-500 text-xs leading-relaxed mb-6">
              {FOOTER_INFO.churchName}
            </p>

            {/* Contact */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4 text-gms-gold shrink-0" />
                <span className="text-xs">{FOOTER_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4 text-gms-gold shrink-0" />
                <span className="text-xs">{FOOTER_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4 text-gms-gold shrink-0" />
                <span className="text-xs">{FOOTER_INFO.email}</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-gray-500 text-xs uppercase tracking-widest mb-3">
                Ikuti Kami
              </h4>
              <div className="flex items-center gap-3">
                {SOCIAL_MEDIA_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-gms-gold/20 border border-white/10 hover:border-gms-gold/50 flex items-center justify-center text-gray-400 hover:text-gms-gold transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    {getSocialIcon(social.label)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Link Columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="lg:col-span-1">
              <FooterColumn title={col.title} links={col.links} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            {FOOTER_INFO.copyright}
          </p>
          <div className="flex items-center gap-4 text-gray-500 text-xs">
            <Link
              href="/"
              className="hover:text-gms-gold transition-colors"
            >
              Home
            </Link>
            <span className="text-white/10">|</span>
            <span className="flex items-center gap-1">
              Made with
              <Heart className="w-3 h-3 text-red-400 fill-red-400" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
