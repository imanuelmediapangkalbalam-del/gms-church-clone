'use client';

import React, { useState, useEffect } from 'react';
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
  Heart,
  ChevronRight,
  ChevronUp,
  Music,
  Send,
  ArrowUp,
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
// BackToTop Button
// ================================================================
function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`back-to-top ${visible ? 'visible' : ''}`}
      aria-label="Kembali ke atas"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
}

// ================================================================
// Newsletter Form
// ================================================================
function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      // In production, send to API
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className="mt-6">
      <h4 className="text-gray-500 text-xs uppercase tracking-widest mb-3">
        Newsletter
      </h4>
      {subscribed ? (
        <p className="text-green-400 text-sm animate-fade-in flex items-center gap-1">
          <Send className="w-3 h-3" /> Terkirim! Terima kasih.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@anda.com"
            required
            className="newsletter-input flex-1 min-w-0"
          />
          <button
            type="submit"
            className="px-3 py-2.5 bg-gms-gold text-gms-dark rounded-lg hover:bg-gms-gold/90 transition-all duration-300 font-medium shrink-0 hover:shadow-lg hover:shadow-gms-gold/20"
            aria-label="Langganan newsletter"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      )}
    </div>
  );
}

// ================================================================
// FooterColumn Component — Enhanced with hover scale & gold arrow
// ================================================================
function FooterColumn({
  title,
  links,
  index = 0,
}: {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
  index?: number;
}) {
  return (
    <div
      className="space-y-3 reveal"
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
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
                className="flex items-center gap-1.5 text-gray-400 hover:text-gms-gold transition-all duration-200 text-sm group hover:translate-x-1"
              >
                <ChevronRight className="w-3 h-3 text-gms-gold/50 group-hover:text-gms-gold transition-all duration-200 shrink-0 link-arrow" />
                <span>{link.label}</span>
                <ExternalLink className="w-3 h-3 opacity-30 group-hover:opacity-100 transition-opacity" />
              </a>
            ) : (
              <Link
                href={link.href}
                className="flex items-center gap-1.5 text-gray-400 hover:text-gms-gold transition-all duration-200 text-sm group hover:translate-x-1"
              >
                <ChevronRight className="w-3 h-3 text-gms-gold/50 group-hover:text-gms-gold transition-all duration-200 shrink-0 link-arrow" />
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
// Social Media Icons — Enhanced with glow & tooltip
// ================================================================
function SocialIcon({ social }: { social: { label: string; href: string } }) {
  return (
    <a
      key={social.label}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group"
      aria-label={social.label}
    >
      <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-gms-gold/20 border border-white/10 hover:border-gms-gold/50 flex items-center justify-center text-gray-400 hover:text-gms-gold transition-all duration-300 social-icon-glow">
        {getSocialIcon(social.label)}
      </div>
      {/* Tooltip */}
      <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gms-dark text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg border border-white/10">
        {social.label}
      </span>
    </a>
  );
}

// ================================================================
// ScrollReveal Observer Hook
// ================================================================
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

// ================================================================
// Footer
// ================================================================
export default function Footer() {
  useScrollReveal();

  return (
    <footer className="bg-gms-dark text-white relative overflow-hidden">
      {/* Gradient top border with shimmer animation */}
      <div className="h-1 w-full gradient-border-shimmer" />

      {/* Decorative background glow */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gms-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gms-maroon/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        {/* Grid: columns + info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-1 reveal-left">
            <Link
              href="/"
              className="flex items-center gap-2 text-gms-gold hover:text-gms-gold/90 transition-colors mb-4 group"
            >
              <div className="relative">
                <Church className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute -inset-1 bg-gms-gold/10 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
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
              <div className="flex items-center gap-2 text-gray-400 group">
                <MapPin className="w-4 h-4 text-gms-gold shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-xs">{FOOTER_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 group">
                <Phone className="w-4 h-4 text-gms-gold shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-xs">{FOOTER_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 group">
                <Mail className="w-4 h-4 text-gms-gold shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-xs">{FOOTER_INFO.email}</span>
              </div>
            </div>

            {/* Social Media with tooltip */}
            <div className="mt-6">
              <h4 className="text-gray-500 text-xs uppercase tracking-widest mb-3">
                Ikuti Kami
              </h4>
              <div className="flex items-center gap-3">
                {SOCIAL_MEDIA_LINKS.map((social) => (
                  <SocialIcon key={social.label} social={social} />
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <NewsletterForm />
          </div>

          {/* Footer Link Columns with scroll reveal */}
          {FOOTER_COLUMNS.map((col, idx) => (
            <div key={col.title} className="lg:col-span-1">
              <FooterColumn title={col.title} links={col.links} index={idx} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar — Premium with heart animation */}
      <div className="border-t border-white/10 relative z-10">
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
            <span className="flex items-center gap-1 group">
              Made with
              <Heart className="w-3 h-3 text-red-400 fill-red-400 animate-heartbeat group-hover:scale-125 transition-transform" />
            </span>
            <span className="text-white/10">|</span>
            <span className="text-gradient-gold font-medium">
              A Home for Everyone
            </span>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <BackToTop />
    </footer>
  );
}
