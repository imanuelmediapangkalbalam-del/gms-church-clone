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
} from 'lucide-react';
import { NAV_ITEMS, ANNOUNCEMENTS } from '../data/site-data';

// ================================================================
// AnnouncementTicker
// ================================================================
function AnnouncementTicker() {
  return (
    <div className="announcement-ticker">
      <div className="ticker-track">
        {[...ANNOUNCEMENTS, ...ANNOUNCEMENTS].map((item, idx) => (
          <span key={idx} className="mx-8 text-sm md:text-base font-medium">
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}

// ================================================================
// NavLink
// ================================================================
interface NavLinkProps {
  item: (typeof NAV_ITEMS)[number];
  isActive: boolean;
  onClick?: () => void;
  mobile?: boolean;
}

function NavLink({ item, isActive, onClick, mobile }: NavLinkProps) {
  const baseClasses =
    'relative font-medium transition-colors duration-200 whitespace-nowrap';
  const activeClasses = 'text-gms-gold';
  const inactiveClasses = 'text-white hover:text-gms-gold';

  const linkClasses = `${baseClasses} ${isActive ? activeClasses : inactiveClasses} ${
    mobile
      ? 'block w-full py-3 px-4 text-base border-b border-white/10'
      : 'inline-flex items-center gap-1 px-3 py-1 text-sm tracking-wide'
  }`;

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${linkClasses} inline-flex items-center gap-1`}
        onClick={onClick}
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
    >
      {item.label}
    </Link>
  );
}

// ================================================================
// MobileMenu
// ================================================================
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  // Close on route change
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
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Slide-in panel */}
      <div className="absolute right-0 top-0 h-full w-72 max-w-[85vw] bg-gms-dark shadow-2xl overflow-y-auto animate-slide-in">
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
          {NAV_ITEMS.map((item) => {
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
              />
            );
          })}
        </nav>

        {/* Additional mobile actions */}
        <div className="p-4 mt-4 border-t border-white/10">
          <a
            href="https://www.youtube.com/@gmschurch"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-gms-gold text-gms-dark font-semibold rounded-lg hover:bg-gms-gold/90 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Live Streaming
          </a>
        </div>
      </div>
    </div>
  );
}

// ================================================================
// Navbar
// ================================================================
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial scroll position
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
            ? 'bg-gms-dark/95 backdrop-blur-md shadow-lg'
            : 'bg-gms-dark/70 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 text-gms-gold hover:text-gms-gold/90 transition-colors shrink-0"
            >
              <Church className="w-7 h-7 md:w-8 md:h-8" />
              <span className="font-serif text-xl md:text-2xl font-bold tracking-wide">
                GMS
              </span>
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
