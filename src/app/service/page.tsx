'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Users, Crosshair } from 'lucide-react';

/* ─── Data ─── */

const categories = [
  {
    key: 'keluarga',
    name: 'KELUARGA',
    description:
      'Ibadah Keluarga GMS adalah ibadah yang dirancang untuk seluruh anggota keluarga. Kami percaya keluarga adalah fondasi gereja yang kuat. Setiap ibadah keluarga menghadirkan firman Tuhan yang relevan, pujian yang menginspirasi, dan suasana yang hangat bagi semua usia.',
    images: [
      'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80',
      'https://images.unsplash.com/photo-1470115722382-97cf5e4f83d7?w=800&q=80',
      'https://images.unsplash.com/photo-1478128453841-2ef2c88f8b5a?w=800&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    ],
  },
  {
    key: 'armyofgod',
    name: 'ARMY OF GOD',
    description:
      'Army of God (AOG) adalah komunitas bagi generasi muda GMS — remaja dan pemuda. Dengan suasana yang dinamis, ibadah AOG menghadirkan pujian yang enerjik, pengajaran yang relevan dengan kehidupan generasi muda, dan fellowship yang membangun iman serta karakter.',
    images: [
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
      'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80',
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
    ],
  },
  {
    key: 'eaglekidz',
    name: 'EAGLEKIDZ',
    description:
      'EagleKidz adalah sekolah minggu GMS yang penuh sukacita dan kreativitas. Anak-anak diajar firman Tuhan dengan cara yang menyenangkan melalui lagu, cerita alkitab, drama, dan aktivitas interaktif. Kami membangun dasar iman yang kuat sejak usia dini.',
    images: [
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80',
      'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?w=800&q=80',
      'https://images.unsplash.com/photo-1526676037777-05a232554f77?w=800&q=80',
      'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800&q=80',
    ],
  },
  {
    key: 'senior',
    name: 'IBADAH SENIOR',
    description:
      'Ibadah Senior GMS melayani generasi emas dengan penuh hormat dan kasih. Suasana ibadah yang khidmat namun penuh sukacita, dengan lagu-lagu rohani klasik dan pengajaran firman yang mendalam. Kami percaya setiap tahap hidup adalah kesempatan untuk bertumbuh.',
    images: [
      'https://images.unsplash.com/photo-1516307365426-bea591f05011?w=800&q=80',
      'https://images.unsplash.com/photo-1470115722382-97cf5e4f83d7?w=800&q=80',
      'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80',
      'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&q=80',
    ],
  },
  {
    key: 'inggris',
    name: 'IBADAH INGGRIS',
    description:
      'English Service GMS hadir untuk melayani jemaat internasional dan mereka yang ingin menikmati ibadah dalam bahasa Inggris. Dengan pengajaran firman yang alkitabiah dan pujian kontemporer, English Service menjadi jembatan bagi setiap jiwa dari berbagai latar belakang.',
    images: [
      'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&q=80',
      'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80',
      'https://images.unsplash.com/photo-1438232997411-2b349fbfe89e?w=800&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    ],
  },
];

/* ─── Main Page ─── */

export default function ServicePage() {
  const [active, setActive] = useState('keluarga');
  const [imgIndex, setImgIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const current = categories.find((c) => c.key === active)!;

  const goTo = useCallback(
    (idx: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      const max = current.images.length;
      setImgIndex(((idx % max) + max) % max);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating, current.images.length]
  );

  useEffect(() => {
    setImgIndex(0);
  }, [active]);

  useEffect(() => {
    const timer = setInterval(() => goTo(imgIndex + 1), 4000);
    return () => clearInterval(timer);
  }, [imgIndex, goTo]);

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
                  link === 'IBADAH'
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
              "url('https://images.unsplash.com/photo-1470115722382-97cf5e4f83d7?w=1920&q=80')",
          }}
        />
        <div className="page-hero-overlay" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            IBADAH <span className="text-gms-gold">GMS</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Dapatkan pengalaman ibadah yang mengubahkan hidup Anda
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 bg-white shadow-md sticky top-16 z-40">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`px-6 py-3 rounded-full text-sm font-bold tracking-wider transition-all ${
                  active === cat.key
                    ? 'bg-gms-gold text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Running Text */}
      <div className="bg-gms-dark py-3 overflow-hidden">
        <div className="ticker-track">
          {[...Array(8)].map((_, i) => (
            <span
              key={i}
              className="inline-block mx-8 text-gms-gold font-bold text-sm md:text-base tracking-widest"
            >
              {current.name} — {current.name} — {current.name}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Carousel */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={current.images[imgIndex]}
                  alt={current.name}
                  className="w-full h-full object-cover transition-all duration-500"
                  style={{
                    transform: `translateX(${isAnimating ? 0 : 0})`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gms-dark/40 to-transparent" />
              </div>

              <button
                onClick={() => goTo(imgIndex - 1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white p-3 rounded-full transition-all"
                aria-label="Previous"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => goTo(imgIndex + 1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white p-3 rounded-full transition-all"
                aria-label="Next"
              >
                <ChevronRight size={20} />
              </button>

              <div className="flex justify-center gap-2 mt-4">
                {current.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === imgIndex ? 'bg-gms-gold w-6' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <div className="inline-block px-4 py-2 bg-gms-gold/20 text-gms-dark rounded-full text-sm font-bold mb-4 border border-gms-gold/30">
                {current.name}
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gms-dark mb-6">
                Ibadah {current.name}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">{current.description}</p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="/gms-church-clone/church"
                  className="inline-flex items-center gap-2 bg-gms-dark text-white px-8 py-4 rounded-full font-bold hover:bg-gms-maroon transition-all shadow-lg"
                >
                  <MapPin size={20} />
                  Cari Lokasi Terdekat
                </a>
                <a
                  href="/gms-church-clone/connect"
                  className="inline-flex items-center gap-2 border-2 border-gms-dark text-gms-dark px-8 py-4 rounded-full font-bold hover:bg-gms-dark hover:text-white transition-all"
                >
                  <Users size={20} />
                  Hubungi Kami
                </a>
              </div>
            </div>
          </div>
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
