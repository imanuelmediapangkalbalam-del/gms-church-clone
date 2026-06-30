'use client';

import { useState } from 'react';
import { MapPin, Search, Navigation, Church, Building2, Users, Gift } from 'lucide-react';

/* ─── Data ─── */

const regions = [
  { key: 'semua', label: 'SEMUA' },
  { key: 'indonesia', label: 'INDONESIA' },
  { key: 'asia', label: 'ASIA' },
  { key: 'australia', label: 'AUSTRALIA & NEW ZEALAND' },
  { key: 'eropa', label: 'EROPA' },
  { key: 'amerika', label: 'USA & CANADA' },
];

const locationData = [
  {
    name: 'GMS Surabaya Pusat',
    address: 'Jl. Raya Gubeng No. 98, Surabaya, Jawa Timur',
    schedule: 'Minggu: 07:00, 09:00, 11:00, 17:00 | Rabu: 19:00',
    region: 'indonesia',
    tags: ['Gereja', 'Ibadah', 'Memberi'],
    image:
      'https://images.unsplash.com/photo-1438032005737-c6a1ee39d87b?w=600&q=80',
  },
  {
    name: 'GMS Jakarta Pusat',
    address: 'Jl. Mega Kuningan Barat Kav. 6, Jakarta Selatan',
    schedule: 'Minggu: 08:00, 10:00, 16:00 | Kamis: 19:00',
    region: 'indonesia',
    tags: ['Gereja', 'Kantor', 'Ibadah'],
    image:
      'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=600&q=80',
  },
  {
    name: 'GMS Bandung',
    address: 'Jl. Setiabudi No. 150, Bandung',
    schedule: 'Minggu: 08:00, 10:00 | Selasa: 18:30',
    region: 'indonesia',
    tags: ['Gereja', 'Ibadah'],
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
  },
  {
    name: 'GMS Singapore',
    address: '11 Beach Road, #03-01, Singapore',
    schedule: 'Sunday: 10:00, 14:00 | Wednesday: 19:30',
    region: 'asia',
    tags: ['Gereja', 'Ibadah', 'Memberi'],
    image:
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80',
  },
  {
    name: 'GMS Hong Kong',
    address: '8 Queen\'s Road Central, Central, Hong Kong',
    schedule: 'Sunday: 11:00, 15:00',
    region: 'asia',
    tags: ['Gereja', 'Ibadah'],
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
  },
  {
    name: 'GMS Melbourne',
    address: '245 Swanston Street, Melbourne VIC 3000',
    schedule: 'Sunday: 09:00, 11:00 | Friday: 19:00',
    region: 'australia',
    tags: ['Gereja', 'Kantor', 'Ibadah', 'Memberi'],
    image:
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&q=80',
  },
  {
    name: 'GMS Sydney',
    address: '100 George Street, Sydney NSW 2000',
    schedule: 'Sunday: 10:00, 14:00',
    region: 'australia',
    tags: ['Gereja', 'Ibadah'],
    image:
      'https://images.unsplash.com/photo-1523730205978-59fd1b2965e3?w=600&q=80',
  },
  {
    name: 'GMS London',
    address: '45 Oxford Street, London W1D 2DT',
    schedule: 'Sunday: 10:00, 16:00 | Thursday: 19:30',
    region: 'eropa',
    tags: ['Gereja', 'Ibadah', 'Memberi'],
    image:
      'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=600&q=80',
  },
  {
    name: 'GMS Amsterdam',
    address: 'Damrak 66, 1012 LM Amsterdam',
    schedule: 'Sunday: 11:00, 15:00',
    region: 'eropa',
    tags: ['Gereja', 'Ibadah'],
    image:
      'https://images.unsplash.com/photo-1559827291-2650b44fd03c?w=600&q=80',
  },
  {
    name: 'GMS Los Angeles',
    address: '200 Sunset Boulevard, Los Angeles CA 90028',
    schedule: 'Sunday: 09:00, 11:00, 13:00 | Tuesday: 19:00',
    region: 'amerika',
    tags: ['Gereja', 'Kantor', 'Ibadah', 'Memberi'],
    image:
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80',
  },
  {
    name: 'GMS New York',
    address: '350 Fifth Avenue, New York NY 10118',
    schedule: 'Sunday: 10:00, 14:00 | Wednesday: 19:00',
    region: 'amerika',
    tags: ['Gereja', 'Ibadah'],
    image:
      'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600&q=80',
  },
];

const tagIcons: Record<string, React.ReactNode> = {
  Gereja: <Church size={14} />,
  Kantor: <Building2 size={14} />,
  Ibadah: <Users size={14} />,
  Memberi: <Gift size={14} />,
};

const tagColors: Record<string, string> = {
  Gereja: 'bg-blue-100 text-blue-700',
  Kantor: 'bg-purple-100 text-purple-700',
  Ibadah: 'bg-green-100 text-green-700',
  Memberi: 'bg-gms-gold/20 text-gms-dark',
};

/* ─── Main Page ─── */

export default function ChurchPage() {
  const [activeRegion, setActiveRegion] = useState('semua');
  const [search, setSearch] = useState('');

  const filtered = locationData.filter((loc) => {
    const matchRegion = activeRegion === 'semua' || loc.region === activeRegion;
    const matchSearch =
      loc.name.toLowerCase().includes(search.toLowerCase()) ||
      loc.address.toLowerCase().includes(search.toLowerCase());
    return matchRegion && matchSearch;
  });

  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gms-dark/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/gms-church-clone/beranda" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gms-gold flex items-center justify-center">
              <span className="text-gms-dark font-serif font-bold text-lg">G</span>
            </div>
            <span className="font-serif text-xl font-bold text-white hidden sm:block">
              GMS Church
            </span>
          </a>
          <div className="flex items-center gap-1 md:gap-3">
            {['BERANDA', 'GEREJA', 'IBADAH', 'CG', 'TERHUBUNG'].map((link) => (
              <a
                key={link}
                href={`/gms-church-clone/${link === 'BERANDA' ? 'beranda' : link === 'GEREJA' ? 'church' : link === 'IBADAH' ? 'service' : link === 'CG' ? 'cg' : 'connect'}`}
                className={`text-xs md:text-sm font-semibold px-2 md:px-4 py-2 rounded-full transition-all ${
                  link === 'GEREJA'
                    ? 'bg-gms-gold/20 text-gms-gold'
                    : 'text-gray-300 hover:text-gms-gold hover:bg-white/5'
                }`}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="page-hero">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1920&q=80')",
          }}
        />
        <div className="page-hero-overlay" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            GMS DI SELURUH <span className="text-gms-gold">DUNIA</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Temukan lokasi Gereja GMS terdekat dari kota Anda di seluruh dunia
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white shadow-md sticky top-16 z-40">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Cari nama gereja atau kota..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-gms-gold focus:outline-none bg-gray-50 text-base"
              />
            </div>
            <button className="inline-flex items-center gap-2 bg-gms-dark text-white px-6 py-4 rounded-xl font-semibold hover:bg-gms-maroon transition-all shadow-md whitespace-nowrap">
              <Navigation size={20} />
              Gunakan lokasi saya
            </button>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {regions.map((r) => (
              <button
                key={r.key}
                onClick={() => setActiveRegion(r.key)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                  activeRegion === r.key
                    ? 'bg-gms-gold text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Location Cards */}
      <section className="py-12 bg-gray-50 min-h-[400px]">
        <div className="max-w-5xl mx-auto px-4">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <MapPin size={48} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500 text-lg">Tidak ada lokasi ditemukan</p>
            </div>
          ) : (
            <>
              <p className="text-sm text-gray-500 mb-6">
                Menampilkan {filtered.length} lokasi
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {filtered.map((loc, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 group"
                  >
                    <div className="flex flex-col sm:flex-row">
                      <div className="sm:w-48 h-48 sm:h-auto overflow-hidden">
                        <img
                          src={loc.image}
                          alt={loc.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex-1 p-5 flex flex-col justify-between">
                        <div>
                          <h3 className="font-serif text-xl font-bold text-gms-dark mb-2">
                            {loc.name}
                          </h3>
                          <div className="flex items-start gap-2 text-gray-500 text-sm mb-3">
                            <MapPin size={16} className="mt-0.5 flex-shrink-0 text-gms-gold" />
                            <span>{loc.address}</span>
                          </div>
                          <div className="flex items-start gap-2 text-gray-500 text-sm mb-3">
                            <svg
                              className="w-4 h-4 mt-0.5 flex-shrink-0 text-gms-gold"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span className="text-xs">{loc.schedule}</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {loc.tags.map((tag) => (
                              <span
                                key={tag}
                                className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                                  tagColors[tag] || 'bg-gray-100 text-gray-600'
                                }`}
                              >
                                {tagIcons[tag]}
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="mt-4">
                          <button className="w-full bg-gms-dark text-white py-3 rounded-xl font-semibold text-sm hover:bg-gms-gold hover:text-gms-dark transition-all">
                            LIHAT LOKASI
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gms-dark text-white py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-gms-gold flex items-center justify-center">
                  <span className="text-gms-dark font-serif font-bold text-lg">G</span>
                </div>
                <span className="font-serif text-xl font-bold">GMS Church</span>
              </div>
              <p className="text-gray-400 text-sm">
                Gereja sel yang apostolik dan profetik untuk semua orang.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gms-gold mb-4">Tautan</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/gms-church-clone/beranda" className="hover:text-gms-gold transition">Beranda</a></li>
                <li><a href="/gms-church-clone/church" className="hover:text-gms-gold transition">Gereja</a></li>
                <li><a href="/gms-church-clone/service" className="hover:text-gms-gold transition">Ibadah</a></li>
                <li><a href="/gms-church-clone/cg" className="hover:text-gms-gold transition">CG</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gms-gold mb-4">Hubungi</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>info@gms.church</li>
                <li>+62 31 1234 5678</li>
                <li>Surabaya, Indonesia</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gms-gold mb-4">Ikuti Kami</h4>
              <div className="flex gap-3">
                {['YT', 'IG', 'FB', 'TW'].map((s) => (
                  <div
                    key={s}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold hover:bg-gms-gold hover:text-gms-dark transition-all cursor-pointer"
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} GMS Church. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
