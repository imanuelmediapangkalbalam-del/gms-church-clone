"use client";

import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1920&q=80')",
          }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(26,26,46,0.85) 0%, rgba(26,26,46,0.4) 50%, rgba(26,26,46,0.85) 100%)'
        }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1A1A2E]" />
      </div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,169,81,0.1),transparent_70%)]" />
      </div>

      <div className={`relative z-10 text-center px-4 max-w-5xl mx-auto transition-all duration-1000 ${
        loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <p className="text-[#C8A951] text-sm md:text-base uppercase tracking-[0.3em] font-semibold mb-6">
          Selamat Datang di
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
          GMS
          <span className="block text-3xl md:text-4xl lg:text-5xl font-light mt-2 text-[#C8A951]">
            A Home for Everyone
          </span>
        </h1>
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Gereja sel yang apostolik dan profetik, dipenuhi oleh rupa-rupa karunia Roh Kudus
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#tentang"
            className="px-8 py-4 bg-[#C8A951] text-[#1A1A2E] rounded-full font-bold tracking-wider hover:bg-[#C8A951]/90 transition-all duration-200 hover:shadow-xl hover:shadow-[#C8A951]/30 text-sm"
          >
            TENTANG KAMI
          </a>
          <a
            href="#lokasi"
            className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-bold tracking-wider hover:bg-white/10 transition-all duration-200 text-sm"
          >
            CARI LOKASI
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white/50 w-8 h-8" />
      </div>
    </section>
  );
};

export default HeroSection;
