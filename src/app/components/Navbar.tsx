'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  ChevronDown,
  ExternalLink,
  Church,
  XCircle,
  ChevronUp,
} from 'lucide-react';
import { NAV_ITEMS, ANNOUNCEMENTS } from '../data/site-data';

// ================================================================
// AnnouncementTicker — Enhanced with dismiss button & marquee
// ================================================================
function AnnouncementTicker() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="announcement-ticker group">
      <div className="ticker-track">
        {[...ANNOUNCEMENTS, ...ANNOUNCEMENTS].map((item, idx) => (
          <span key={idx} className="mx-8 text-sm md:text-base font-medium inline-flex items-center gap-2">
            {item.text}
          </span>
        ))}
      </div>
      {/* Dismiss button */}
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 text-white/60 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
        aria-label="Tutup pengumuman"
      >
        <XCircle className="w-4 h-4" />
      </button>
    </div>
  );
}

// ================================================================
// NavLink — Enhanced with hover lift & active gold underline
// ================================================================
interface NavLinkProps {
  item: (typeof NAV_ITEMS)[number];
  isActive: boolean;
  onClick?: () => void;
  mobile?: boolean;
  index?: number;
}

function NavLink({ item, isActive, onClick, mobile, index = 0 }: NavLinkProps) {
  const baseClasses =
    'relative font-medium transition-all duration-200 whitespace-nowrap';
  const activeClasses = 'text-gms-gold';
  const inactiveClasses = 'text-white/80 hover:text-gms-gold';

  const linkClasses = `${baseClasses} ${isActive ? activeClasses : inactiveClasses} ${
    mobile
      ? 'block w-full py-3 px-4 text-base border-b border-white/10 hover:bg-white/5 hover:pl-6 transition-all duration-300'
      : 'inline-flex items-center gap-1 px-3 py-1 text-sm tracking-wide nav-link-hover'
  }`;

  // Staggered animation for mobile items
  const mobileStyle = mobile
    ? {
        animation: `fadeInUp 0.4s ease-out forwards`,
        animationDelay: `${index * 80}ms`,
        opacity: 0,
      }
    : {};

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${linkClasses} inline-flex items-center gap-1`}
        onClick={onClick}
        style={mobileStyle}
      >
        {item.label}
        <ExternalLink className="w-3 h-3" />
      </a>
    );
  }

  return (
    <Link
      href={item.href}
      className={`${linkClasses} ${isActive ? 'nav-active' : ''}`}
      onClick={onClick}
      style={mobileStyle}
    >
      {item.label}
    </Link>
  );
}

// ================================================================
// MobileMenu — Enhanced with slide-in, backdrop blur, staggered items
// ================================================================
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  // Close on route change & lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop with blur */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Slide-in panel from right */}
      <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-gms-dark/95 shadow-2xl overflow-y-auto animate-slide-in border-l border-white/5">
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <Link
            href="/"
            className="flex items-center gap-2 text-gms-gold font-serif text-xl font-bold"
            onClick={onClose}
          >
            <Church className="w-6 h-6" />
            <span>GMS</span>
          </Link>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Tutup menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="p-2">
          {NAV_ITEMS.map((item, idx) => {
            const isActive =
              !item.external &&
              (pathname === item.href ||
                (item.href !== '/' && pathname.startsWith(item.href)));

            return (
              <NavLink
                key={item.label}
                item={item}
                isActive={isActive}
                onClick={onClose}
                mobile
                index={idx}
              />
            );
          })}
        </nav>

        {/* Additional mobile actions */}
        <div className="p-4 mt-4 border-t border-white/10 space-y-3">
          <a
            href="https://www.youtube.com/@gmschurch"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-gms-gold text-gms-dark font-semibold rounded-lg hover:bg-gms-gold/90 transition-all duration-300 hover:shadow-lg hover:shadow-gms-gold/20"
          >
            <ExternalLink className="w-4 h-4" />
            Live Streaming
          </a>
          <p className="text-center text-white/30 text-xs">
            GMS — A Home for Everyone
          </p>
        </div>
      </div>
    </div>
  );
}

// ================================================================
// Navbar — Enhanced with glass-morphism, scroll shrink, premium logo
// ================================================================
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll — detect when to shrink
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close mobile menu on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Announcement Ticker — always above navbar */}
      <AnnouncementTicker />

      {/* Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-gms-dark/85 backdrop-blur-xl shadow-lg border-b border-gms-gold/10'
            : 'bg-gms-dark/70 backdrop-blur-md border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              scrolled ? 'h-16' : 'h-16 lg:h-20'
            }`}
          >
            {/* Logo — Premium with tagline */}
            <Link
              href="/"
              className="flex items-center gap-3 text-gms-gold hover:text-gms-gold/90 transition-colors shrink-0 group"
            >
              <div className="relative">
                <Church className="w-7 h-7 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute -inset-1 bg-gms-gold/10 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl md:text-2xl font-bold tracking-wide leading-tight">
                  GMS
                </span>
                <span className="text-[10px] md:text-[11px] text-gms-gold/60 font-sans tracking-wider -mt-0.5">
                  A Home for Everyone
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  !item.external &&
                  (pathname === item.href ||
                    pathname === '/beranda' ||
                    (item.href !== '/' && pathname.startsWith(item.href)));

                return (
                  <NavLink
                    key={item.label}
                    item={item}
                    isActive={isActive}
                  />
                );
              })}
            </nav>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden text-white/80 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Buka menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}
