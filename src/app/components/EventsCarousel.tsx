"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Calendar } from 'lucide-react';
import { events } from '../data/site-data';

const EventsCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % events.length);
  const prev = () => setCurrent((c) => (c - 1 + events.length) % events.length);

  return (
    <section className="py-24 bg-gradient-to-b from-[#1A1A2E] to-[#0f0f23] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#C8A951] text-sm md:text-base uppercase tracking-[0.3em] font-semibold mb-4">JADWAL</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">ACARA KITA</h2>
          <div className="w-24 h-1 bg-[#C8A951] mx-auto mt-6" />
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Carousel Main */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {events.map((event) => (
                <div key={event.id} className="min-w-full relative">
                  <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden group">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1200&q=80')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/95 via-[#1A1A2E]/40 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                      <div className="flex items-center gap-3 text-[#C8A951] mb-4">
                        <Calendar size={18} />
                        <span className="text-sm font-medium tracking-wider">{event.date}</span>
                      </div>
                      <h3 className="text-2xl md:text-4xl font-serif font-bold text-white mb-4">{event.title}</h3>
                      <p className="text-white/60 text-sm md:text-base max-w-2xl mb-6">{event.description}</p>
                      <a 
                        href={event.link}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#C8A951] text-[#1A1A2E] rounded-full font-bold text-sm tracking-wider hover:bg-[#C8A951]/90 transition-all"
                      >
                        DETAIL <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prev}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all z-10"
          >
            <ChevronLeft className="text-[#1A1A2E]" size={24} />
          </button>
          <button 
            onClick={next}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all z-10"
          >
            <ChevronRight className="text-[#1A1A2E]" size={24} />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 gap-3">
            {events.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-[#C8A951] w-8' : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsCarousel;
