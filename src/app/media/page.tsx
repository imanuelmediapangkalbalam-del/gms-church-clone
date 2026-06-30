'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Youtube, Instagram, Monitor, Music, Play, ChevronRight,
  Search, Sparkles, Headphones, Tv, Film, Share2
} from 'lucide-react';

/* ─── Scroll Animation Hook ─── */
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

function FadeInSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useScrollIn(0.1);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ─── Data ─── */

const programCards = [
  { title: 'Saat Teduh Bersama', image: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=400&h=250&fit=crop', desc: 'Renungan pagi untuk memulai hari' },
  { title: 'STB Our Devotion', image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=400&h=250&fit=crop', desc: 'Devosi bahasa Inggris' },
  { title: 'Kompilasi Lagu STB', image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=250&fit=crop', desc: 'Lagu-lagu rohani terbaik' },
  { title: 'Moment of Worship', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop', desc: 'Saat penyembahan yang intim' },
  { title: 'Marketplace Wisdom', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=250&fit=crop', desc: 'Hikmat untuk dunia kerja' },
  { title: 'Doa Pagi', image: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=400&h=250&fit=crop', desc: 'Memulai hari dengan doa' },
  { title: 'Khotbah', image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=400&h=250&fit=crop', desc: 'Firman Tuhan setiap minggu' },
  { title: 'Saat Teduh Kidz', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=250&fit=crop', desc: 'Renungan untuk anak-anak' },
  { title: 'I Love My Bible', image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=250&fit=crop', desc: 'Belajar Alkitab bersama' },
  { title: 'Ask Your Pastor', image: 'https://images.unsplash.com/photo-1472173148041-00294f0814a2?w=400&h=250&fit=crop', desc: 'Tanya jawab dengan gembala' },
  { title: 'Kisah Jemaat', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=250&fit=crop', desc: 'Testimoni jemaat GMS' },
  { title: 'Hati Penyembah', image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=250&fit=crop', desc: 'Penyembahan yang dalam' },
  { title: 'Kurenungkan Firman-Mu', image: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=400&h=250&fit=crop', desc: 'Merenungkan firman Tuhan' },
  { title: 'Future of Hope', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=250&fit=crop', desc: 'Masa depan penuh harapan' },
  { title: 'Before 30', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop', desc: 'Inspirasi bagi generasi muda' },
  { title: 'Our Devotion', image: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=400&h=250&fit=crop', desc: 'Devosi harian bersama' },
];

const tabs = [
  { id: 'youtube', label: 'YOUTUBE', icon: Youtube, color: 'hover:bg-red-50 hover:text-red-600' },
  { id: 'instagram', label: 'INSTAGRAM', icon: Instagram, color: 'hover:bg-purple-50 hover:text-purple-600' },
  { id: 'tvgms', label: 'TV GMS', icon: Monitor, color: 'hover:bg-blue-50 hover:text-blue-600' },
  { id: 'musik', label: 'MUSIK', icon: Music, color: 'hover:bg-green-50 hover:text-green-600' },
];

const instagramPosts = [
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1472173148041-00294f0814a2?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=300&fit=crop',
];

const albums = [
  { title: 'Kumenangkan', artist: 'GMS Worship', year: '2024', image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop' },
  { title: 'Hadirat-Mu', artist: 'GMS Worship', year: '2024', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop' },
  { title: 'Kau Yang Terindah', artist: 'GMS Worship', year: '2023', image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&h=300&fit=crop' },
  { title: 'Tak Pernah Berubah', artist: 'GMS Worship', year: '2023', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop' },
  { title: 'Kami Menyembah-Mu', artist: 'GMS Worship', year: '2023', image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=300&fit=crop' },
  { title: 'Yesusku Baik', artist: 'GMS Worship', year: '2022', image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&h=300&fit=crop' },
];

const tvSchedules = [
  { title: 'Ibadah Minggu', time: 'Minggu, 08:00 & 10:00 WIB', img: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=400&h=250&fit=crop' },
  { title: 'Ibadah Pemuda', time: 'Sabtu, 18:00 WIB', img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=250&fit=crop' },
  { title: 'Saat Teduh Bersama', time: 'Setiap Hari, 06:00 WIB', img: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=400&h=250&fit=crop' },
];

/* ─── Main Page ─── */
export default function MediaPage() {
  const [activeTab, setActiveTab] = useState('youtube');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCards = programCards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen">
      {/* ─── PAGE HERO ─── */}
      <section className="page-hero h-[420px] md:h-[520px]">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 animate-[scaleIn_20s_ease-in-out_infinite_alternate]"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&q=80')",
          }}
        />
        <div className="page-hero-overlay">
          <div className="absolute inset-0 bg-gradient-to-b from-gms-dark/70 via-gms-dark/40 to-gms-dark/80" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gms-gold/20 border border-gms-gold/30 rounded-full px-5 py-1.5 mb-5">
            <Film size={16} className="text-gms-gold" />
            <span className="text-gms-gold text-xs font-semibold tracking-[0.2em]">DIGITAL CONTENT</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
            MEDIA <span className="text-gms-gold">GMS</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Saksikan berkat dan inspirasi melalui konten-konten rohani GMS di berbagai platform
          </p>
        </div>
      </section>

      {/* ─── TAB NAVIGATION ─── */}
      <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex overflow-x-auto gap-1 py-3 scrollbar-hide">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-gms-dark text-gms-gold shadow-md scale-105'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CONTENT AREA ─── */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        {/* ── YOUTUBE ── */}
        {activeTab === 'youtube' && (
          <div>
            <FadeInSection>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <div>
                  <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                    <Youtube size={14} />
                    YouTube
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-gms-dark">
                    Program YouTube
                  </h2>
                  <p className="text-gray-500 mt-1">
                    Tonton dan berkat dari berbagai program rohani GMS
                  </p>
                </div>
                <div className="relative w-full md:w-72">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Cari program..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gms-gold focus:border-transparent text-sm"
                  />
                </div>
              </div>
            </FadeInSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredCards.map((card, index) => (
                <FadeInSection key={index} delay={index * 50}>
                  <div className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-gms-gold/90 flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 text-white ml-0.5" />
                        </div>
                      </div>
                      {/* Duration badge */}
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
                        15:00
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-sm text-gms-dark group-hover:text-gms-gold transition-colors leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-xs text-gray-400 mt-1">{card.desc}</p>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>

            {filteredCards.length === 0 && (
              <div className="text-center py-20 text-gray-400">
                <Youtube className="w-16 h-16 mx-auto mb-3 opacity-30" />
                <p className="text-lg font-medium">Tidak ada program ditemukan</p>
                <p className="text-sm mt-1">Coba kata kunci lain</p>
              </div>
            )}
          </div>
        )}

        {/* ── INSTAGRAM ── */}
        {activeTab === 'instagram' && (
          <div>
            <FadeInSection>
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                  <Instagram size={14} />
                  Instagram
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-gms-dark">
                  Instagram Feed
                </h2>
                <p className="text-gray-500 mt-1">
                  Ikuti kami di Instagram @gms.church — #GMSChurch
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={100}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-4">
                {instagramPosts.map((post, index) => (
                  <div
                    key={index}
                    className="aspect-square rounded-xl overflow-hidden group cursor-pointer relative"
                  >
                    <img
                      src={post}
                      alt={`Instagram post ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="text-center">
                        <Instagram className="w-8 h-8 text-white mx-auto mb-1" />
                        <p className="text-white text-xs font-semibold">Lihat Post</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className="text-center mt-8">
                <a
                  href="https://instagram.com/gms.church"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white px-8 py-3 rounded-full font-medium hover:shadow-xl transition-all hover:scale-105"
                >
                  <Instagram className="w-5 h-5" />
                  Ikuti @gms.church
                </a>
              </div>
            </FadeInSection>
          </div>
        )}

        {/* ── TV GMS ── */}
        {activeTab === 'tvgms' && (
          <div>
            <FadeInSection>
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                  <Tv size={14} />
                  TV GMS
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-gms-dark">
                  TV GMS
                </h2>
                <p className="text-gray-500 mt-1">
                  Saksikan siaran langsung dan rekaman ibadah GMS 24/7
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={100}>
              <div className="relative bg-gms-dark rounded-2xl overflow-hidden aspect-video max-w-4xl mx-auto shadow-2xl group">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-40 scale-105 group-hover:scale-110 transition-transform duration-700"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1200&h=675&fit=crop')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gms-gold/90 flex items-center justify-center mx-auto mb-5 cursor-pointer hover:scale-110 transition-transform shadow-2xl">
                      <Play className="w-12 h-12 text-white ml-1" />
                    </div>
                    <p className="text-white text-xl md:text-2xl font-bold">
                      Klik untuk Menonton
                    </p>
                    <p className="text-white/50 text-sm mt-1">
                      Siaran Langsung Ibadah GMS
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/80 text-sm px-2">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    LIVE
                  </span>
                  <span className="text-gms-gold font-semibold">TV GMS</span>
                </div>
              </div>
            </FadeInSection>

            {/* Schedule */}
            <FadeInSection delay={200}>
              <div className="mt-12">
                <h3 className="font-serif text-xl font-bold text-gms-dark text-center mb-6">
                  Jadwal Siaran
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  {tvSchedules.map((item, i) => (
                    <div key={i} className="rounded-xl overflow-hidden shadow-md group cursor-pointer hover:shadow-xl transition-all">
                      <div className="relative h-36">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      <div className="p-4 bg-white">
                        <h4 className="font-semibold text-gms-dark">{item.title}</h4>
                        <p className="text-xs text-gray-500 mt-1">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </div>
        )}

        {/* ── MUSIK ── */}
        {activeTab === 'musik' && (
          <div>
            <FadeInSection>
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                  <Music size={14} />
                  Musik GMS
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-gms-dark">
                  Musik GMS Worship
                </h2>
                <p className="text-gray-500 mt-1">
                  Dengarkan lagu-lagu rohani dari GMS Worship di platform favorit Anda
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={100}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                {albums.map((album, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="aspect-square rounded-2xl overflow-hidden shadow-md mb-3 relative">
                      <img
                        src={album.image}
                        alt={album.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl">
                        <div className="w-14 h-14 rounded-full bg-gms-gold/90 flex items-center justify-center shadow-xl">
                          <Play className="w-6 h-6 text-white ml-0.5" />
                        </div>
                      </div>
                    </div>
                    <h3 className="font-semibold text-sm text-gms-dark text-center truncate group-hover:text-gms-gold transition-colors">
                      {album.title}
                    </h3>
                    <p className="text-xs text-gray-500 text-center truncate">{album.artist}</p>
                    <p className="text-xs text-gray-400 text-center">{album.year}</p>
                  </div>
                ))}
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className="text-center mt-10 space-y-3">
                <a
                  href="https://open.spotify.com/artist/gms-worship"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gms-dark text-gms-gold border-2 border-gms-gold px-8 py-3 rounded-full font-medium hover:bg-gms-gold hover:text-gms-dark transition-all"
                >
                  <Headphones size={20} />
                  Dengarkan di Spotify
                </a>
                <p className="text-xs text-gray-400">
                  Juga tersedia di Apple Music, YouTube Music, dan Joox
                </p>
              </div>
            </FadeInSection>
          </div>
        )}
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
