"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { highlights } from '../data/site-data';

const HighlightsCarousel = () => {
  const [current, setCurrent] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(highlights.length / itemsPerPage);

  const next = () => setCurrent((c) => (c + 1) % totalPages);
  const prev = () => setCurrent((c) => (c - 1 + totalPages) % totalPages);

  return (
    <section id="sorotan" className="py-24 bg-[#1A1A2E] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(200,169,81,0.08),transparent_60%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-[#C8A951] text-sm md:text-base uppercase tracking-[0.3em] font-semibold mb-4">GALERI</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">SOROTAN</h2>
          <div className="w-24 h-1 bg-[#C8A951] mx-auto mt-6" />
        </div>

        <div className="relative">
          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.slice(current * itemsPerPage, (current + 1) * itemsPerPage).map((item) => (
              <div key={item.id} className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1485550409059-9afb054dafa4?w=400&q=80')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h4 className="text-white font-bold text-sm">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          {totalPages > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all z-10"
              >
                <ChevronLeft className="text-[#1A1A2E]" size={24} />
              </button>
              <button
                onClick={next}
                className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all z-10"
              >
                <ChevronRight className="text-[#1A1A2E]" size={24} />
              </button>
            </>
          )}
        </div>

        {/* Dots */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-[#C8A951] w-6' : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HighlightsCarousel;
