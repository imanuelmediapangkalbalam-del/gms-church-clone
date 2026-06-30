"use client";

import React, { useState } from 'react';
import { Search, MapPin, Church, Building2, Clock, Heart, ExternalLink } from 'lucide-react';
import { locations, continents } from '../data/site-data';

const LocationsSection = () => {
  const [activeContinent, setActiveContinent] = useState('INDONESIA');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLocations = locations.filter((loc) => {
    const matchesContinent = activeContinent === 'ALL' || loc.continent.toUpperCase() === activeContinent;
    const matchesSearch = loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.city.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesContinent && matchesSearch;
  });

  return (
    <section id="lokasi" className="py-24 bg-[#FFF8E7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#C8A951] text-sm md:text-base uppercase tracking-[0.3em] font-semibold mb-4">LOKASI</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A2E]">GMS DI SELURUH DUNIA</h2>
          <div className="w-24 h-1 bg-[#C8A951] mx-auto mt-6" />
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Cari lokasi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-full border-2 border-gray-200 focus:border-[#C8A951] focus:outline-none bg-white shadow-sm text-sm"
            />
          </div>
          <button className="mt-3 w-full py-2.5 bg-[#C8A951] text-white rounded-full font-medium text-sm hover:bg-[#C8A951]/90 transition-colors">
            Gunakan lokasi saya
          </button>
        </div>

        {/* Continent Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['INDONESIA', 'ASIA', 'AUSTRALIA & NEW ZEALAND', 'EROPA', 'USA & CANADA'].map((continent) => (
            <button
              key={continent}
              onClick={() => setActiveContinent(continent)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wider transition-all duration-200 ${
                activeContinent === continent
                  ? 'bg-[#1A1A2E] text-white shadow-lg'
                  : 'bg-white text-[#1A1A2E] border-2 border-gray-200 hover:border-[#C8A951] hover:text-[#C8A951]'
              }`}
            >
              {continent}
            </button>
          ))}
        </div>

        {/* Location Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredLocations.map((loc) => (
            <div
              key={loc.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-serif text-xl font-bold">{loc.name}</h3>
                  <p className="text-white/70 text-sm">{loc.city}, {loc.country}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-2 mb-4">
                  <MapPin className="text-[#C8A951] mt-1 flex-shrink-0" size={18} />
                  <p className="text-gray-600 text-sm leading-relaxed">{loc.address}</p>
                </div>

                {loc.worshipTimes && (
                  <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
                    <Clock size={16} className="text-[#C8A951]" />
                    <span>{loc.worshipTimes}</span>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-5">
                  {loc.types.map((type) => (
                    <span
                      key={type}
                      className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#FFF8E7] text-[#1A1A2E] border border-[#C8A951]/20"
                    >
                      {type === 'church' && '⛪ Gereja'}
                      {type === 'office' && '🏢 Kantor'}
                      {type === 'worship' && '🙏 Ibadah'}
                      {type === 'give' && '❤️ Memberi'}
                    </span>
                  ))}
                </div>

                <a
                  href={loc.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1A1A2E] text-white rounded-full text-sm font-medium hover:bg-[#1A1A2E]/90 transition-colors"
                >
                  <ExternalLink size={16} />
                  LIHAT LOKASI
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredLocations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">Tidak ada lokasi ditemukan</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default LocationsSection;
