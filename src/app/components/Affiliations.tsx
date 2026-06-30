"use client";

import React from 'react';
import { affiliations } from '../data/site-data';

const Affiliations = () => {
  return (
    <section className="py-20 bg-[#FFF8E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#C8A951] text-sm md:text-base uppercase tracking-[0.3em] font-semibold mb-4">JARINGAN</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1A1A2E]">AFILIASI</h2>
          <div className="w-24 h-1 bg-[#C8A951] mx-auto mt-6" />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {affiliations.map((aff) => (
            <a
              key={aff.id}
              href={aff.link}
              className="group flex items-center justify-center"
            >
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white shadow-md flex items-center justify-center group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 border-2 border-transparent group-hover:border-[#C8A951]/30">
                <span className="text-[#1A1A2E] font-serif font-bold text-lg md:text-xl tracking-wider opacity-50 group-hover:opacity-100 group-hover:text-[#C8A951] transition-all">
                  {aff.name}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Affiliations;
