'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import {
  MapPin, Search, Navigation, Church, Building2, Users, Gift,
  ChevronDown, Globe, Star, Clock, ArrowRight
} from 'lucide-react';

/* ─── Animations ─── */
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: 'easeOut' },
  }),
};

function useScrollIn(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─── Data ─── */

const regions = [
  { key: 'semua', label: 'SEMUA LOKASI' },
  { key: 'indonesia', label: '🇮🇩 INDONESIA' },
  { key: 'asia', label: '🌏 ASIA' },
  { key: 'australia', label: '🦘 AUSTRALIA & NZ' },
  { key: 'eropa', label: '🌍 EROPA' },
  { key: 'amerika', label: '🌎 USA & CANADA' },
];

const locationData = [
  {
    name: 'GMS Surabaya Pusat',
    address: 'Jl. Raya Gubeng No. 98, Surabaya, Jawa Timur',
    schedule: 'Minggu: 07:00, 09:00, 11:00, 17:00 WIB\nRabu: 19:00 WIB (Doa Malam)',
    region: 'indonesia',
    tags: ['Gereja', 'Ibadah', 'Memberi'],
    image: 'https://images.unsplash.com/photo-1438032005737-c6a1ee39d87b?w=600&q=80',
    phone: '+62 31 1234 5678',
  },
  {
    name: 'GMS Jakarta Pusat',
    address: 'Jl. Mega Kuningan Barat Kav. 6, Jakarta Selatan',
    schedule: 'Minggu: 08:00, 10:00, 16:00 WIB\nKamis: 19:00 WIB (Doa)',
    region: 'indonesia',
    tags: ['Gereja', 'Kantor', 'Ibadah'],
    image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=600&q=80',
    phone: '+62 21 5678 9012',
  },
  {
    name: 'GMS Bandung',
    address: 'Jl. Setiabudi No. 150, Bandung, Jawa Barat',
    schedule: 'Minggu: 08:00, 10:00 WIB\nSelasa: 18:30 WIB',
    region: 'indonesia',
    tags: ['Gereja', 'Ibadah'],
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
    phone: '+62 22 3456 7890',
  },
  {
    name: 'GMS Singapore',
    address: '11 Beach Road, #03-01, Singapore 189675',
    schedule: 'Sunday: 10:00, 14:00 SGT\nWednesday: 19:30 SGT',
    region: 'asia',
    tags: ['Gereja', 'Ibadah', 'Memberi'],
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80',
    phone: '+65 6789 0123',
  },
  {
    name: 'GMS Hong Kong',
    address: "8 Queen's Road Central, Central, Hong Kong",
    schedule: 'Sunday: 11:00, 15:00 HKT\nFriday: 19:30 HKT',
    region: 'asia',
    tags: ['Gereja', 'Ibadah'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    phone: '+852 2345 6789',
  },
  {
    name: 'GMS Melbourne',
    address: '245 Swanston Street, Melbourne VIC 3000',
    schedule: 'Sunday: 09:00, 11:00 AEST\nFriday: 19:00 AEST',
    region: 'australia',
    tags: ['Gereja', 'Kantor', 'Ibadah', 'Memberi'],
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&q=80',
    phone: '+61 3 9876 5432',
  },
  {
    name: 'GMS Sydney',
    address: '100 George Street, Sydney NSW 2000',
    schedule: 'Sunday: 10:00, 14:00 AEST\nThursday: 19:00 AEST',
    region: 'australia',
    tags: ['Gereja', 'Ibadah'],
    image: 'https://images.unsplash.com/photo-1523730205978-59fd1b2965e3?w=600&q=80',
    phone: '+61 2 8765 4321',
  },
  {
    name: 'GMS London',
    address: '45 Oxford Street, London W1D 2DT, UK',
    schedule: 'Sunday: 10:00, 16:00 GMT\nThursday: 19:30 GMT',
    region: 'eropa',
    tags: ['Gereja', 'Ibadah', 'Memberi'],
    image: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=600&q=80',
    phone: '+44 20 7890 1234',
  },
  {
    name: 'GMS Amsterdam',
    address: 'Damrak 66, 1012 LM Amsterdam, Netherlands',
    schedule: 'Sunday: 11:00, 15:00 CET\nWednesday: 19:00 CET',
    region: 'eropa',
    tags: ['Gereja', 'Ibadah'],
    image: 'https://images.unsplash.com/photo-1559827291-2650b44fd03c?w=600&q=80',
    phone: '+31 20 5678 9012',
  },
  {
    name: 'GMS Los Angeles',
    address: '200 Sunset Boulevard, Los Angeles CA 90028',
    schedule: 'Sunday: 09:00, 11:00, 13:00 PST\nTuesday: 19:00 PST',
    region: 'amerika',
    tags: ['Gereja', 'Kantor', 'Ibadah', 'Memberi'],
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80',
    phone: '+1 213 456 7890',
  },
  {
    name: 'GMS New York',
    address: '350 Fifth Avenue, New York NY 10118',
    schedule: 'Sunday: 10:00, 14:00 EST\nWednesday: 19:00 EST',
    region: 'amerika',
    tags: ['Gereja', 'Ibadah'],
    image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600&q=80',
    phone: '+1 212 345 6789',
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
  Memberi: 'bg-amber-100 text-amber-700',
};

/* ─── Main Page ─── */

export default function ChurchPage() {
  const [activeRegion, setActiveRegion] = useState('semua');
  const [search, setSearch] = useState('');
  const [geolocating, setGeolocating] = useState(false);

  const filtered = locationData.filter((loc) => {
    const matchRegion = activeRegion === 'semua' || loc.region === activeRegion;
    const matchSearch =
      loc.name.toLowerCase().includes(search.toLowerCase()) ||
      loc.address.toLowerCase().includes(search.toLowerCase());
    return matchRegion && matchSearch;
  });

  const handleGeolocate = useCallback(() => {
    setGeolocating(true);
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setGeolocating(false);
          alert(`Lokasi Anda terdeteksi (${pos.coords.latitude.toFixed(4)}, ${pos.coords.longitude.toFixed(4)}). Fitur lokasi terdekat akan segera hadir!`);
        },
        () => {
          setGeolocating(false);
          alert('Gunakan fitur pencarian untuk menemukan gereja terdekat.');
        }
      );
    } else {
      setGeolocating(false);
      alert('Geolokasi tidak didukung browser Anda.');
    }
  }, []);

  const StatsBar = () => (
    <div className="bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Globe size={16} className="text-gms-gold" />
            <span>{locationData.length} lokasi di seluruh dunia</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-500" /> Indonesia</span>
            <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-amber-500" /> Asia</span>
            <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-green-500" /> Australia</span>
            <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-purple-500" /> Eropa</span>
            <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-red-500" /> Amerika</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50">
      {/* ─── PAGE HERO ─── */}
      <section className="page-hero h-[420px] md:h-[520px]">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 animate-[scaleIn_20s_ease-in-out_infinite_alternate]"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1920&q=80')",
          }}
        />
        <div className="page-hero-overlay">
          <div className="absolute inset-0 bg-gradient-to-b from-gms-dark/70 via-gms-dark/40 to-gms-dark/80" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gms-gold/20 border border-gms-gold/30 rounded-full px-5 py-1.5 mb-5">
            <Church size={16} className="text-gms-gold" />
            <span className="text-gms-gold text-xs font-semibold tracking-[0.2em]">GLOBAL NETWORK</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
            GMS DI SELURUH <span className="text-gms-gold">DUNIA</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Temukan lokasi Gereja GMS terdekat dari kota Anda — dari Surabaya hingga New York
          </p>
          <div className="mt-8 flex items-center justify-center gap-6 text-white/50 text-sm">
            <span className="flex items-center gap-2"><Star size={14} className="text-gms-gold" />300+ Gereja</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="flex items-center gap-2"><Users size={14} className="text-gms-gold" />50+ Kota</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="flex items-center gap-2"><Globe size={14} className="text-gms-gold" />5 Benua</span>
          </div>
        </div>
      </section>

      {/* ─── SEARCH SECTION ─── */}
      <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-gms-gold transition-colors" size={20} />
              <input
                type="text"
                placeholder="Cari nama gereja atau kota..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-gms-gold focus:outline-none bg-white text-base transition-all shadow-sm"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  ✕
                </button>
              )}
            </div>
            <button
              onClick={handleGeolocate}
              disabled={geolocating}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gms-dark to-[#2a2a4e] text-white px-6 py-3.5 rounded-xl font-semibold hover:from-gms-maroon hover:to-gms-maroon transition-all shadow-md whitespace-nowrap disabled:opacity-60"
            >
              <Navigation size={20} className={geolocating ? 'animate-spin' : ''} />
              {geolocating ? 'Mendeteksi...' : 'Gunakan lokasi saya'}
            </button>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <StatsBar />

      {/* ─── FILTER TABS ─── */}
      <section className="py-5 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {regions.map((r) => (
              <button
                key={r.key}
                onClick={() => setActiveRegion(r.key)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                  activeRegion === r.key
                    ? 'bg-gms-gold text-white shadow-lg scale-105 ring-2 ring-gms-gold/30'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105'
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LOCATION CARDS ─── */}
      <section className="py-12 min-h-[400px]">
        <div className="max-w-5xl mx-auto px-4">
          {filtered.length === 0 ? (
            <div className="text-center py-20 animate-fadeIn">
              <div className="w-20 h-20 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <MapPin size={40} className="text-gray-300" />
              </div>
              <p className="text-gray-500 text-lg font-medium">Tidak ada lokasi ditemukan</p>
              <p className="text-gray-400 text-sm mt-1">Coba ubah kata kunci atau filter region</p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-gray-500">
                  Menampilkan <span className="font-bold text-gms-dark">{filtered.length}</span> lokasi
                </p>
                <div className="flex gap-1">
                  {['semua', 'indonesia', 'asia', 'australia', 'eropa', 'amerika'].map((k) => {
                    const count = k === 'semua' ? locationData.length : locationData.filter(l => l.region === k).length;
                    return (
                      <button
                        key={k}
                        onClick={() => setActiveRegion(k)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          activeRegion === k ? 'bg-gms-gold scale-125' : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    );
                  })}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {filtered.map((loc, i) => (
                  <LocationCard key={i} loc={loc} index={i} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="py-16 bg-gradient-to-r from-gms-dark via-[#2a2a4e] to-gms-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,169,81,0.3)_0%,transparent_50%)]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gms-gold mb-4">
            Gereja Baru di Kota Anda
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            GMS terus bertumbuh. Pantau terus website ini untuk informasi gereja terbaru di kota Anda.
          </p>
          <a
            href="/gms-church-clone/connect"
            className="inline-flex items-center gap-2 bg-gms-gold text-gms-dark px-8 py-3.5 rounded-full font-bold hover:bg-white transition-all shadow-xl"
          >
            Hubungi Kami <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-gms-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-gms-gold flex items-center justify-center">
                  <span className="text-gms-dark font-serif font-bold text-lg">G</span>
                </div>
                <span className="font-serif text-xl font-bold">GMS Church</span>
              </div>
              <p className="text-gray-400 text-sm">Gereja sel yang apostolik dan profetik untuk semua orang.</p>
            </div>
            <div>
              <h4 className="font-bold text-gms-gold mb-4">Tautan</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/gms-church-clone/beranda" className="hover:text-gms-gold transition">Beranda</a></li>
                <li><a href="/gms-church-clone/church" className="hover:text-gms-gold transition">Gereja</a></li>
                <li><a href="/gms-church-clone/service" className="hover:text-gms-gold transition">Ibadah</a></li>
                <li><a href="/gms-church-clone/cg" className="hover:text-gms-gold transition">CG</a></li>
                <li><a href="/gms-church-clone/connect" className="hover:text-gms-gold transition">Terhubung</a></li>
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
                  <div key={s} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold hover:bg-gms-gold hover:text-gms-dark transition-all cursor-pointer">{s}</div>
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

/* ─── Location Card Component ─── */

function LocationCard({ loc, index }: { loc: typeof locationData[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const { ref, visible } = useScrollIn(0.05);

  return (
    <div
      ref={ref}
      style={visible ? fadeInUp.animate(index) : fadeInUp.initial}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 group"
    >
      <div className="flex flex-col sm:flex-row">
        {/* Image */}
        <div className="sm:w-52 h-52 sm:h-auto overflow-hidden relative">
          <div className={`absolute inset-0 bg-gray-200 ${imgLoaded ? 'hidden' : 'animate-pulse'}`} />
          <img
            src={loc.image}
            alt={loc.name}
            onLoad={() => setImgLoaded(true)}
            className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Content */}
        <div className="flex-1 p-5 flex flex-col">
          <div>
            <h3 className="font-serif text-xl font-bold text-gms-dark mb-2 group-hover:text-gms-gold transition-colors">
              {loc.name}
            </h3>

            <div className="flex items-start gap-2 text-gray-500 text-sm mb-2">
              <MapPin size={16} className="mt-0.5 flex-shrink-0 text-gms-gold" />
              <span>{loc.address}</span>
            </div>

            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-start gap-2 text-gray-500 text-sm mb-3 w-full text-left"
            >
              <Clock size={16} className="mt-0.5 flex-shrink-0 text-gms-gold" />
              <span className="text-xs leading-relaxed">
                {expanded ? loc.schedule : loc.schedule.split('\n')[0] + '...'}
              </span>
              <ChevronDown size={14} className={`mt-0.5 flex-shrink-0 text-gms-gold transition-transform ${expanded ? 'rotate-180' : ''}`} />
            </button>

            <div className="flex flex-wrap gap-1.5 mb-3">
              {loc.tags.map((tag) => (
                <span
                  key={tag}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${tagColors[tag] || 'bg-gray-100 text-gray-600'}`}
                >
                  {tagIcons[tag]}
                  {tag}
                </span>
              ))}
            </div>

            {loc.phone && (
              <p className="text-xs text-gray-400 mb-3">{loc.phone}</p>
            )}
          </div>

          <div className="mt-auto pt-3 border-t border-gray-100">
            <button className="w-full bg-gradient-to-r from-gms-dark to-[#2a2a4e] text-white py-3 rounded-xl font-semibold text-sm hover:from-gms-gold hover:to-gms-gold hover:text-gms-dark transition-all shadow-md flex items-center justify-center gap-2">
              <MapPin size={16} />
              LIHAT LOKASI
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
