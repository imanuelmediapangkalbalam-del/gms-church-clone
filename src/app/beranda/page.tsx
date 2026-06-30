'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Search,
  Clock,
  Users,
  Heart,
  Church,
  ArrowRight,
  Check,
  Star,
} from 'lucide-react';

/* ─── Data ─── */

const ANNOUNCEMENT = 'TAHUN PERSATUAN &amp; SORGA YANG TERBUKA';

const visionMission = [
  {
    title: 'Visi',
    content:
      'Gereja sel yang apostolik dan profetik yang menjangkau jiwa-jiwa bagi Kristus dan memuridkan mereka menjadi murid Kristus yang sejati.',
    icon: '🌟',
    color: 'from-gms-gold/20 to-transparent',
  },
  {
    title: 'Misi',
    content:
      'Membawa setiap orang kepada pengenalan yang benar akan Yesus Kristus, bertumbuh dalam komunitas sel, dan melayani sesuai panggilan Tuhan.',
    icon: '🔥',
    color: 'from-gms-maroon/20 to-transparent',
  },
  {
    title: 'Pengakuan Iman',
    content:
      'Kami percaya kepada Allah Bapa, Yesus Kristus Anak-Nya yang tunggal, dan Roh Kudus, serta Alkitab sebagai firman Allah yang diilhamkan.',
    icon: '✝️',
    color: 'from-gms-dark/20 to-transparent',
  },
];

const events = [
  {
    title: 'MIRACLES IN ISRAEL',
    date: '15-25 September 2025',
    desc: 'Perjalanan rohani ke Tanah Perjanjian bersama Ps. Philip Mantofa',
    image:
      'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&q=80',
  },
  {
    title: 'CG SUPERCON',
    date: '12 Oktober 2025',
    desc: 'Kebersamaan Connect Group se-dunia dalam satu acara',
    image:
      'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80',
  },
  {
    title: 'CHRISTMAS CELEBRATION',
    date: '24-25 Desember 2025',
    desc: 'Perayaan Natal bersama keluarga besar GMS',
    image:
      'https://images.unsplash.com/photo-1512389142860-9c449e58ea4a?w=800&q=80',
  },
];

const continents = ['Semua', 'Asia', 'Australia', 'Eropa', 'Amerika'];

const locationData = [
  {
    name: 'GMS Surabaya',
    address: 'Jl. Raya Gubeng No. 98, Surabaya',
    region: 'Asia',
    image:
      'https://images.unsplash.com/photo-1438032005737-c6a1ee39d87b?w=600&q=80',
  },
  {
    name: 'GMS Jakarta',
    address: 'Jl. Mega Kuningan Barat, Jakarta',
    region: 'Asia',
    image:
      'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=600&q=80',
  },
  {
    name: 'GMS Melbourne',
    address: '123 Swanston St, Melbourne VIC',
    region: 'Australia',
    image:
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&q=80',
  },
  {
    name: 'GMS London',
    address: '45 Oxford Street, London',
    region: 'Eropa',
    image:
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80',
  },
  {
    name: 'GMS Los Angeles',
    address: '200 Sunset Blvd, Los Angeles CA',
    region: 'Amerika',
    image:
      'https://images.unsplash.com/photo-1559827291-2650b44fd03c?w=600&q=80',
  },
];

const connectGroups = [
  { name: 'CG Eaglekidz', usia: 'Usia 3-12 tahun', icon: '🦅' },
  { name: 'CG Army of God', usia: 'Usia 13-25 tahun', icon: '⚔️' },
  { name: 'CG Adult', usia: 'Usia 25+', icon: '👨‍👩‍👧‍👦' },
  { name: 'CG Professional', usia: 'Karyawan &amp; Profesional', icon: '💼' },
  { name: 'CG Keluarga', usia: 'Pasangan Suami Istri', icon: '🏠' },
];

const highlights = [
  { label: 'Renungan Harian', icon: '📖' },
  { label: 'Podcast GMS', icon: '🎙️' },
  { label: 'Sekolah Alkitab', icon: '📚' },
  { label: 'Music Ministry', icon: '🎵' },
  { label: 'GMS TV', icon: '📺' },
  { label: 'e-Giving', icon: '💳' },
  { label: 'Doa Syafaat', icon: '🙏' },
  { label: 'Konseling', icon: '💬' },
  { label: 'Perpustakaan', icon: '📖' },
  { label: 'Sosial Media', icon: '📱' },
  { label: 'Job Connect', icon: '💼' },
  { label: 'Klinik Hukum', icon: '⚖️' },
  { label: 'Baptisan', icon: '💧' },
  { label: 'Pemberkatan Nikah', icon: '💍' },
  { label: 'Kursus Pra-Nikah', icon: '💑' },
];

const affiliations = [
  { name: 'PPM', full: 'Persekutuan Pelayanan Mahasiswa' },
  { name: 'MSP', full: 'Misi Service Provider' },
  { name: 'PR', full: 'Pemulihan Rohani' },
  { name: 'FKA', full: 'Forum Komunikasi Alumni' },
  { name: 'Bizcon', full: 'Business Connect' },
  { name: 'STT', full: 'Sekolah Tinggi Teologi' },
];

/* ─── Components ─── */

function AnnouncementTicker() {
  return (
    <div className="announcement-ticker">
      <div className="ticker-track">
        {[...Array(6)].map((_, i) => (
          <span key={i} className="inline-block mx-8 text-sm md:text-base font-semibold tracking-widest">
            {ANNOUNCEMENT}
          </span>
        ))}
      </div>
    </div>
  );
}

function VisionMissionCard({
  item,
  index,
}: {
  item: (typeof visionMission)[0];
  index: number;
}) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
    >
      <div className={`absolute inset-0 bg-gradient-to-b ${item.color} opacity-60`} />
      <div className="relative p-8 text-center">
        <div className="text-5xl mb-5">{item.icon}</div>
        <h3 className="font-serif text-2xl font-bold text-gms-dark mb-4">{item.title}</h3>
        <p className="text-gray-600 leading-relaxed">{item.content}</p>
      </div>
    </div>
  );
}

function EventsCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (idx: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent(((idx % events.length) + events.length) % events.length);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 5000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  return (
    <section className="py-20 bg-gradient-to-br from-gms-dark to-[#2a2a4e] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title text-4xl md:text-5xl font-bold text-center mb-4 text-gms-gold">
          Event Terkini
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Jangan lewatkan moment spesial bersama GMS
        </p>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {events.map((ev, i) => (
                <div key={i} className="min-w-full flex-shrink-0 relative">
                  <div className="relative h-[400px] md:h-[500px]">
                    <img
                      src={ev.image}
                      alt={ev.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gms-dark/90 via-gms-dark/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                      <span className="inline-block px-4 py-2 bg-gms-gold text-gms-dark text-sm font-bold rounded-full mb-4">
                        {ev.date}
                      </span>
                      <h3 className="font-serif text-3xl md:text-4xl font-bold mb-3">
                        {ev.title}
                      </h3>
                      <p className="text-gray-200 text-lg max-w-xl">{ev.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => goTo(current - 1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white p-3 rounded-full transition-all"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => goTo(current + 1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white p-3 rounded-full transition-all"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center gap-3 mt-8">
            {events.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === current ? 'bg-gms-gold w-8' : 'bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationsSection() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('Semua');

  const filtered = locationData.filter(
    (loc) =>
      (filter === 'Semua' || loc.region === filter) &&
      (loc.name.toLowerCase().includes(search.toLowerCase()) ||
        loc.address.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <section className="py-20 bg-gms-cream">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title text-4xl md:text-5xl font-bold text-center mb-4 text-gms-dark">
          Lokasi GMS
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Temukan Gereja GMS terdekat dari lokasi Anda
        </p>

        <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Cari lokasi..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-gms-gold focus:outline-none bg-white shadow-sm"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {continents.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
                filter === c
                  ? 'bg-gms-gold text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gms-gold/10 border border-gray-200'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((loc, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl font-bold text-gms-dark mb-2">{loc.name}</h3>
                <div className="flex items-start gap-2 text-gray-500 text-sm">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0 text-gms-gold" />
                  <span>{loc.address}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConnectGroupSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title text-4xl md:text-5xl font-bold text-center mb-4 text-gms-dark">
          Connect Group
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Connect Group (CG) adalah komunitas kecil di mana Anda dapat bertumbuh dalam iman,
          menjalin hubungan yang erat, dan melayani bersama. Temukan CG yang sesuai dengan usia
          dan tahap hidup Anda.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {connectGroups.map((cg, i) => (
            <div
              key={i}
              className="group bg-gradient-to-br from-gms-cream to-white p-6 rounded-2xl border border-gray-100 hover:border-gms-gold/30 hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-4">{cg.icon}</div>
              <h3 className="font-serif text-xl font-bold text-gms-dark mb-2">{cg.name}</h3>
              <p className="text-gray-500 text-sm">{cg.usia}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/gms-church-clone/cg"
            className="inline-flex items-center gap-2 bg-gms-dark text-white px-8 py-4 rounded-full font-semibold hover:bg-gms-maroon transition-all shadow-lg hover:shadow-xl"
          >
            Gabung Connect Group <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

function SeniorPastor() {
  return (
    <section className="py-20 bg-gradient-to-br from-gms-dark to-[#2a2a4e] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80"
                alt="Ps. Philip Mantofa"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gms-gold rounded-full flex items-center justify-center shadow-xl">
              <span className="text-gms-dark font-bold text-center text-sm leading-tight">
                Senior<br/>Pastor
              </span>
            </div>
          </div>
          <div>
            <div className="inline-block px-4 py-2 bg-gms-gold/20 text-gms-gold rounded-full text-sm font-semibold mb-4 border border-gms-gold/30">
              Gembala Senior
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-2">
              Ps. Philip Mantofa
            </h2>
            <p className="text-gms-gold font-semibold text-lg mb-6">
              Pendiri &amp; Gembala Senior GMS Church
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Ps. Philip Mantofa adalah seorang hamba Tuhan yang diurapi, dengan visi apostolik
              dan profetik untuk menjangkau jiwa-jiwa di seluruh dunia. Beliau memimpin GMS Church
              dengan hati seorang gembala, membawa transformasi bagi ribuan jiwa melalui
              pengajaran firman yang relevan dan penuh kuasa.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold text-gms-gold">30+</div>
                <div className="text-xs text-gray-400 mt-1">Tahun Pelayanan</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold text-gms-gold">500+</div>
                <div className="text-xs text-gray-400 mt-1">Gereja &amp; CG</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold text-gms-gold">50+</div>
                <div className="text-xs text-gray-400 mt-1">Negara</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HighlightsCarousel() {
  return (
    <section className="py-20 bg-gms-cream">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title text-4xl md:text-5xl font-bold text-center mb-4 text-gms-dark">
          Sorotan
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Berbagai sumber daya rohani untuk pertumbuhan iman Anda
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg border border-gray-100 hover:border-gms-gold/30 transition-all hover:-translate-y-1 cursor-pointer"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
              <p className="text-sm font-semibold text-gms-dark">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Affiliations() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title text-4xl md:text-5xl font-bold text-center mb-4 text-gms-dark">
          Afiliasi &amp; Mitra
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Bekerja sama dalam membangun kerajaan Allah
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {affiliations.map((aff, i) => (
            <div
              key={i}
              className="group bg-gradient-to-br from-gms-cream to-white rounded-2xl p-6 text-center border border-gray-100 hover:border-gms-gold/30 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gms-dark flex items-center justify-center text-gms-gold font-serif font-bold text-xl group-hover:bg-gms-gold group-hover:text-gms-dark transition-all">
                {aff.name}
              </div>
              <p className="text-sm font-semibold text-gms-dark">{aff.name}</p>
              <p className="text-xs text-gray-500 mt-1">{aff.full}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Main Page ─── */

export default function BerandaPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className={`${mounted ? 'page-enter-active' : 'page-enter'}`}>
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
                  link === 'BERANDA'
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

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 hero-overlay" />

        <AnnouncementTicker />

        <div className="relative z-10 text-center px-4 max-w-4xl mt-20">
          <div className="inline-block px-6 py-2 bg-gms-gold/20 border border-gms-gold/40 rounded-full text-gms-gold text-sm font-semibold mb-6 backdrop-blur-sm">
            Welcome to GMS Church
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="text-gms-gold">A Home</span>
            <br />
            for Everyone
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Sebuah keluarga rohani di mana Anda diterima, bertumbuh, dan menjadi berkat
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/gms-church-clone/church"
              className="group inline-flex items-center gap-2 bg-gms-gold text-gms-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all shadow-2xl"
            >
              TENTANG KAMI <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/gms-church-clone/church"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              CARI LOKASI <MapPin size={20} />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gms-gold rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Vision Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-4xl md:text-5xl font-bold text-center mb-4 text-gms-dark">
            Dasar Iman Kami
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Berakar pada kebenaran firman Tuhan
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {visionMission.map((item, i) => (
              <VisionMissionCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <EventsCarousel />

      {/* Locations */}
      <LocationsSection />

      {/* Connect Group */}
      <ConnectGroupSection />

      {/* Senior Pastor */}
      <SeniorPastor />

      {/* Highlights */}
      <HighlightsCarousel />

      {/* Affiliations */}
      <Affiliations />

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
