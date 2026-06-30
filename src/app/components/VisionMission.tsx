"use client";

import React from 'react';
import { Cross, BookHeart, Users } from 'lucide-react';
import { siteConfig } from '../data/site-data';

const VisionMission = () => {
  return (
    <section id="tentang" className="py-24 bg-[#1A1A2E] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8A951]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C8A951]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <p className="text-[#C8A951] text-sm md:text-base uppercase tracking-[0.3em] font-semibold mb-4">
            TENTANG KAMI
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
            {siteConfig.about.split('.')[0]}.
          </h2>
          <div className="w-24 h-1 bg-[#C8A951] mx-auto mt-6" />
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <p className="text-white/70 text-lg leading-relaxed text-center">
            {siteConfig.about}
          </p>
          <p className="text-white/50 text-base leading-relaxed text-center mt-6">
            {siteConfig.aboutExtended}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#C8A951]/50 transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-[#C8A951]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Cross className="w-8 h-8 text-[#C8A951]" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">VISI</h3>
            <p className="text-white/60">{siteConfig.vision}</p>
          </div>

          <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#C8A951]/50 transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-[#C8A951]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-[#C8A951]" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">MISI</h3>
            <p className="text-white/60">{siteConfig.mission}</p>
          </div>

          <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#C8A951]/50 transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-[#C8A951]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <BookHeart className="w-8 h-8 text-[#C8A951]" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">PENGAKUAN IMAN</h3>
            <p className="text-white/60 mb-6">{siteConfig.faithStatement}</p>
            <a href="#" className="text-[#C8A951] hover:text-[#C8A951]/80 font-medium text-sm tracking-wider inline-flex items-center gap-2 group/link">
              LIHAT SELENGKAPNYA
              <span className="group-hover/link:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
