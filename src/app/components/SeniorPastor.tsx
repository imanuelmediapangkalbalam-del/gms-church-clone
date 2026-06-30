"use client";

import React from 'react';
import { Quote } from 'lucide-react';
import { pastorProfile } from '../data/site-data';

const SeniorPastor = () => {
  return (
    <section className="py-24 bg-[#FFF8E7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80')" }}
              />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#C8A951]/30 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#C8A951]/10 rounded-full blur-2xl" />
          </div>

          {/* Right - Content */}
          <div>
            <p className="text-[#C8A951] text-sm md:text-base uppercase tracking-[0.3em] font-semibold mb-4">
              {pastorProfile.title}
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A2E] mb-8">
              {pastorProfile.name}
            </h2>
            
            <div className="relative">
              <Quote className="text-[#C8A951]/20 absolute -top-8 -left-4" size={80} />
              <p className="text-gray-600 leading-relaxed mb-6 relative z-10 text-lg">
                {pastorProfile.bio}
              </p>
            </div>
            
            <div className="border-l-4 border-[#C8A951] pl-6 py-4 mb-8 bg-white/50 rounded-r-xl">
              <p className="text-gray-500 italic leading-relaxed">
                {pastorProfile.bioExtended}
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href="#"
                className="px-8 py-3.5 bg-[#1A1A2E] text-white rounded-full font-bold text-sm tracking-wider hover:bg-[#1A1A2E]/90 transition-all"
              >
                LIHAT SELENGKAPNYA
              </a>
              <a
                href="#"
                className="px-8 py-3.5 border-2 border-[#1A1A2E] text-[#1A1A2E] rounded-full font-bold text-sm tracking-wider hover:bg-[#1A1A2E] hover:text-white transition-all"
              >
                PHILIP MANTOFA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeniorPastor;
