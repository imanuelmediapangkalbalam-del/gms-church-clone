'use client';

import { useState } from 'react';
import {
  Youtube,
  Instagram,
  Monitor,
  Music,
  Play,
  ChevronRight,
  Search,
} from 'lucide-react';

const programCards = [
  { title: 'Saat Teduh Bersama', image: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=400&h=250&fit=crop' },
  { title: 'STB Our Devotion', image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=400&h=250&fit=crop' },
  { title: 'Kompilasi Lagu STB', image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=250&fit=crop' },
  { title: 'Moment of Worship', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop' },
  { title: 'Marketplace Wisdom', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=250&fit=crop' },
  { title: 'Doa Pagi', image: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=400&h=250&fit=crop' },
  { title: 'Khotbah', image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=400&h=250&fit=crop' },
  { title: 'Saat Teduh Kidz', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=250&fit=crop' },
  { title: 'I Love My Bible', image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=250&fit=crop' },
  { title: 'Ask Your Pastor', image: 'https://images.unsplash.com/photo-1472173148041-00294f0814a2?w=400&h=250&fit=crop' },
  { title: 'Kisah Jemaat', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=250&fit=crop' },
  { title: 'Hati Penyembah', image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=250&fit=crop' },
  { title: 'Kurenungkan Firman-Mu', image: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=400&h=250&fit=crop' },
  { title: 'Future of Hope', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=250&fit=crop' },
  { title: 'Before 30', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop' },
  { title: 'Our Devotion', image: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=400&h=250&fit=crop' },
];

const tabs = [
  { id: 'youtube', label: 'YOUTUBE', icon: Youtube },
  { id: 'instagram', label: 'INSTAGRAM', icon: Instagram },
  { id: 'tvgms', label: 'TV GMS', icon: Monitor },
  { id: 'musik', label: 'MUSIK', icon: Music },
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
  { title: 'Kumenangkan', artist: 'GMS Worship', image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop' },
  { title: 'Hadirat-Mu', artist: 'GMS Worship', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop' },
  { title: 'Kau Yang Terindah', artist: 'GMS Worship', image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&h=300&fit=crop' },
  { title: 'Tak Pernah Berubah', artist: 'GMS Worship', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop' },
  { title: 'Kami Menyembah-Mu', artist: 'GMS Worship', image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=300&fit=crop' },
  { title: 'Yesusku Baik', artist: 'GMS Worship', image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&h=300&fit=crop' },
];

export default function MediaPage() {
  const [activeTab, setActiveTab] = useState('youtube');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCards = programCards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="page-hero bg-gms-dark">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&h=500&fit=crop')",
          }}
        />
        <div className="page-hero-overlay" />
        <div className="relative z-10 text-center px-4">
          <h1 className="section-title text-4xl md:text-6xl font-bold text-gms-gold mb-4">
            MEDIA
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Saksikan berkat dan inspirasi melalui konten-konten rohani GMS
          </p>
        </div>
      </section>

      {/* TAB NAVIGATION */}
      <section className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex overflow-x-auto gap-1 py-3">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-gms-dark text-gms-gold shadow-md'
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

      {/* CONTENT AREA */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        {/* YOUTUBE TAB */}
        {activeTab === 'youtube' && (
          <div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div>
                <h2 className="section-title text-2xl md:text-3xl font-bold text-gms-dark">
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
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gms-gold focus:border-transparent text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredCards.map((card, index) => (
                <div
                  key={index}
                  className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 rounded-full bg-gms-gold/90 flex items-center justify-center">
                        <Play className="w-5 h-5 text-white ml-0.5" />
                      </div>
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-semibold text-sm text-gms-dark group-hover:text-gms-gold transition-colors">
                      {card.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {filteredCards.length === 0 && (
              <div className="text-center py-16 text-gray-400">
                <Youtube className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>Tidak ada program ditemukan</p>
              </div>
            )}
          </div>
        )}

        {/* INSTAGRAM TAB */}
        {activeTab === 'instagram' && (
          <div>
            <div className="text-center mb-8">
              <h2 className="section-title text-2xl md:text-3xl font-bold text-gms-dark">
                Instagram Feed
              </h2>
              <p className="text-gray-500 mt-1">
                Ikuti kami di Instagram @gms.church
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-4">
              {instagramPosts.map((post, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-xl overflow-hidden group cursor-pointer relative"
                >
                  <img
                    src={post}
                    alt={`Instagram post ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Instagram className="w-8 h-8 text-white" />
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <a
                href="https://instagram.com/gms.church"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-shadow"
              >
                <Instagram className="w-5 h-5" />
                Ikuti @gms.church
              </a>
            </div>
          </div>
        )}

        {/* TV GMS TAB */}
        {activeTab === 'tvgms' && (
          <div>
            <div className="text-center mb-8">
              <h2 className="section-title text-2xl md:text-3xl font-bold text-gms-dark">
                TV GMS
              </h2>
              <p className="text-gray-500 mt-1">
                Saksikan siaran langsung dan rekaman ibadah GMS
              </p>
            </div>

            <div className="relative bg-gms-dark rounded-2xl overflow-hidden aspect-video max-w-4xl mx-auto shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1200&h=675&fit=crop')",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gms-gold/90 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                  <p className="text-white text-lg md:text-xl font-semibold">
                    Tonton TV GMS Live
                  </p>
                  <p className="text-white/60 text-sm mt-1">
                    Klik untuk memutar
                  </p>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/80 text-sm px-2">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  LIVE
                </span>
                <span>TV GMS</span>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  title: 'Ibadah Minggu',
                  time: 'Minggu, 08:00 & 10:00 WIB',
                  img: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=400&h=250&fit=crop',
                },
                {
                  title: 'Ibadah Pemuda',
                  time: 'Sabtu, 18:00 WIB',
                  img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=250&fit=crop',
                },
                {
                  title: 'Saat Teduh Bersama',
                  time: 'Setiap Hari, 06:00 WIB',
                  img: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=400&h=250&fit=crop',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden shadow-md group cursor-pointer"
                >
                  <div className="relative h-36">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="p-3 bg-white">
                    <h3 className="font-semibold text-gms-dark">{item.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MUSIK TAB */}
        {activeTab === 'musik' && (
          <div>
            <div className="text-center mb-8">
              <h2 className="section-title text-2xl md:text-3xl font-bold text-gms-dark">
                Musik GMS
              </h2>
              <p className="text-gray-500 mt-1">
                Dengarkan lagu-lagu rohani dari GMS Worship
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
              {albums.map((album, index) => (
                <div
                  key={index}
                  className="group cursor-pointer"
                >
                  <div className="aspect-square rounded-xl overflow-hidden shadow-md mb-3 relative">
                    <img
                      src={album.image}
                      alt={album.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-gms-gold/90 flex items-center justify-center">
                        <Play className="w-5 h-5 text-white ml-0.5" />
                      </div>
                    </div>
                  </div>
                  <h3 className="font-semibold text-sm text-gms-dark text-center truncate">
                    {album.title}
                  </h3>
                  <p className="text-xs text-gray-500 text-center truncate">
                    {album.artist}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href="https://open.spotify.com/artist/gms-worship"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gms-dark text-gms-gold border-2 border-gms-gold px-6 py-3 rounded-full font-medium hover:bg-gms-gold hover:text-gms-dark transition-all"
              >
                <Music className="w-5 h-5" />
                Dengarkan di Spotify
              </a>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
