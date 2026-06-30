'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import {
  ChevronLeft, ChevronRight, MapPin, Users, Crosshair,
  Heart, Clock, CalendarDays, Sparkles, ArrowRight, Church
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

/* ─── Data ─── */

const categories = [
  {
    key: 'keluarga',
    name: 'KELUARGA',
    description:
      'Ibadah Keluarga GMS adalah ibadah yang dirancang untuk seluruh anggota keluarga. Kami percaya keluarga adalah fondasi gereja yang kuat. Setiap ibadah keluarga menghadirkan firman Tuhan yang relevan, pujian yang menginspirasi, dan suasana yang hangat bagi semua usia — dari anak-anak hingga kakek-nenek.',
    schedule: [
      { day: 'Minggu', time: '07:00, 09:00, 11:00, 17:00', location: 'GMS Surabaya' },
      { day: 'Minggu', time: '08:00, 10:00, 16:00', location: 'GMS Jakarta' },
    ],
    icon: '👨‍👩‍👧‍👦',
    color: 'from-amber-500/30 to-amber-700/10',
    border: 'border-amber-500/30',
    images: [
      'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80',
      'https://images.unsplash.com/photo-1470115722382-97cf5e4f83d7?w=800&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    ],
  },
  {
    key: 'armyofgod',
    name: 'ARMY OF GOD',
    description:
      'Army of God (AOG) adalah komunitas bagi generasi muda GMS — remaja dan pemuda. Dengan suasana yang dinamis, ibadah AOG menghadirkan pujian yang enerjik, pengajaran yang relevan dengan kehidupan generasi muda, dan fellowship yang membangun iman serta karakter.',
    schedule: [
      { day: 'Sabtu', time: '18:00', location: 'GMS Surabaya' },
      { day: 'Minggu', time: '13:00', location: 'GMS Jakarta' },
    ],
    icon: '⚔️',
    color: 'from-red-500/30 to-red-700/10',
    border: 'border-red-500/30',
    images: [
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
    ],
  },
  {
    key: 'eaglekidz',
    name: 'EAGLEKIDZ',
    description:
      'EagleKidz adalah sekolah minggu GMS yang penuh sukacita dan kreativitas. Anak-anak diajar firman Tuhan dengan cara yang menyenangkan melalui lagu, cerita alkitab, drama, dan aktivitas interaktif. Kami membangun dasar iman yang kuat sejak usia dini dalam suasana yang aman dan penuh kasih.',
    schedule: [
      { day: 'Minggu', time: '07:00, 09:00, 11:00', location: 'GMS Surabaya' },
      { day: 'Minggu', time: '08:00, 10:00', location: 'GMS Jakarta' },
    ],
    icon: '🦅',
    color: 'from-green-500/30 to-green-700/10',
    border: 'border-green-500/30',
    images: [
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80',
      'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?w=800&q=80',
      'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800&q=80',
    ],
  },
  {
    key: 'senior',
    name: 'IBADAH SENIOR',
    description:
      'Ibadah Senior GMS melayani generasi emas dengan penuh hormat dan kasih. Suasana ibadah yang khidmat namun penuh sukacita, dengan lagu-lagu rohani klasik dan pengajaran firman yang mendalam. Kami percaya setiap tahap hidup adalah kesempatan untuk bertumbuh dan menjadi berkat.',
    schedule: [
      { day: 'Minggu', time: '07:00', location: 'GMS Surabaya' },
      { day: 'Kamis', time: '09:00', location: 'GMS Jakarta' },
    ],
    icon: '👴',
    color: 'from-blue-500/30 to-blue-700/10',
    border: 'border-blue-500/30',
    images: [
      'https://images.unsplash.com/photo-1516307365426-bea591f05011?w=800&q=80',
      'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80',
      'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&q=80',
    ],
  },
  {
    key: 'inggris',
    name: 'ENGLISH SERVICE',
    description:
      'English Service GMS hadir untuk melayani jemaat internasional dan mereka yang ingin menikmati ibadah dalam bahasa Inggris. Dengan pengajaran firman yang alkitabiah dan pujian kontemporer, English Service menjadi jembatan bagi setiap jiwa dari berbagai latar belakang budaya dan bangsa.',
    schedule: [
      { day: 'Sunday', time: '10:00, 14:00', location: 'GMS Surabaya' },
      { day: 'Sunday', time: '10:00', location: 'GMS Jakarta' },
    ],
    icon: '🌍',
    color: 'from-purple-500/30 to-purple-700/10',
    border: 'border-purple-500/30',
    images: [
      'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&q=80',
      'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80',
      'https://images.unsplash.com/photo-1438232997411-2b349fbfe89e?w=800&q=80',
    ],
  },
];

const highlights = [
  { label: 'Firman Tuhan yang Relevan', icon: '📖' },
  { label: 'Pujian yang Menginspirasi', icon: '🎵' },
  { label: 'Komunitas yang Hangat', icon: '🤝' },
  { label: 'Doa dan Konseling', icon: '🙏' },
  { label: 'Pelayanan Anak', icon: '👶' },
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
    <div className="bg-gray-50 min-h-screen">
      {/* ─── PAGE HERO ─── */}
      <section className="page-hero h-[420px] md:h-[520px]">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 animate-[scaleIn_20s_ease-in-out_infinite_alternate]"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1470115722382-97cf5e4f83d7?w=1920&q=80')",
          }}
        />
        <div className="page-hero-overlay">
          <div className="absolute inset-0 bg-gradient-to-b from-gms-dark/70 via-gms-dark/40 to-gms-dark/80" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gms-gold/20 border border-gms-gold/30 rounded-full px-5 py-1.5 mb-5">
            <Heart size={16} className="text-gms-gold" />
            <span className="text-gms-gold text-xs font-semibold tracking-[0.2em]">WORSHIP & FAITH</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
            IBADAH <span className="text-gms-gold">GMS</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Dapatkan pengalaman ibadah yang mengubahkan hidup — ada untuk setiap generasi
          </p>
        </div>
      </section>

      {/* ─── CATEGORY TABS ─── */}
      <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold tracking-wider transition-all ${
                  active === cat.key
                    ? 'bg-gms-dark text-gms-gold shadow-lg scale-105 ring-2 ring-gms-gold/30'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span className="mr-1.5">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RUNNING TEXT ─── */}
      <div className="bg-gms-dark py-3 overflow-hidden border-y border-gms-gold/20">
        <div className="ticker-track">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="inline-block mx-8 text-gms-gold font-bold text-sm md:text-base tracking-widest">
              ✦ {current.name} — SELAMAT DATANG DI IBADAH {current.name} ✦
            </span>
          ))}
        </div>
      </div>

      {/* ─── MAIN CONTENT ─── */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Carousel */}
            <div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3]">
                  <img
                    src={current.images[imgIndex]}
                    alt={current.name}
                    className="w-full h-full object-cover transition-all duration-700"
                    style={{ transform: `scale(${isAnimating ? 1.05 : 1})` }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gms-dark/50 to-transparent" />

                {/* Navigation Arrows */}
                <button
                  onClick={() => goTo(imgIndex - 1)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white p-3 rounded-full transition-all hover:scale-110"
                  aria-label="Previous"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => goTo(imgIndex + 1)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white p-3 rounded-full transition-all hover:scale-110"
                  aria-label="Next"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {current.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        i === imgIndex ? 'bg-gms-gold w-6' : 'bg-white/60 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>

                {/* Badge */}
                <div className="absolute top-4 left-4 bg-gms-dark/80 backdrop-blur-sm rounded-full px-4 py-1.5">
                  <span className="text-gms-gold text-xs font-bold tracking-wider">{current.name}</span>
                </div>
              </div>
            </div>

            {/* Right: Info */}
            <div>
              <div className="inline-flex items-center gap-2 bg-gms-gold/20 text-gms-dark rounded-full px-4 py-2 text-sm font-bold mb-4 border border-gms-gold/30">
                <Sparkles size={16} className="text-gms-gold" />
                {current.icon} {current.name}
              </div>

              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gms-dark mb-6 leading-tight">
                Ibadah {current.name}
              </h2>

              <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-8">
                {current.description}
              </p>

              {/* Schedule */}
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 mb-6">
                <h4 className="font-bold text-gms-dark mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                  <CalendarDays size={16} className="text-gms-gold" />
                  Jadwal Ibadah
                </h4>
                <div className="space-y-3">
                  {current.schedule.map((s, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm">
                      <Clock size={16} className="mt-0.5 flex-shrink-0 text-gms-gold" />
                      <div>
                        <span className="font-semibold text-gms-dark">{s.day}</span>
                        <span className="text-gray-500"> — {s.time}</span>
                        <p className="text-gray-400 text-xs mt-0.5">{s.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2 mb-8">
                {highlights.map((h, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full text-xs font-medium">
                    {h.icon} {h.label}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/gms-church-clone/church"
                  className="inline-flex items-center justify-center gap-2 bg-gms-dark text-white px-8 py-4 rounded-xl font-bold hover:bg-gms-maroon transition-all shadow-lg hover:shadow-xl"
                >
                  <MapPin size={20} />
                  Cari Lokasi Terdekat
                </a>
                <a
                  href="/gms-church-clone/connect"
                  className="inline-flex items-center justify-center gap-2 border-2 border-gms-dark text-gms-dark px-8 py-4 rounded-xl font-bold hover:bg-gms-dark hover:text-white transition-all"
                >
                  <Users size={20} />
                  Hubungi Kami
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ALL SCHEDULE OVERVIEW ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gms-dark mb-4">
                Jadwal Lengkap Ibadah
              </h2>
              <div className="w-20 h-1 bg-gms-gold mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {categories.map((cat) => (
                <div
                  key={cat.key}
                  onClick={() => setActive(cat.key)}
                  className={`bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all cursor-pointer border-2 ${
                    active === cat.key ? 'border-gms-gold' : 'border-gray-100 hover:border-gms-gold/30'
                  }`}
                >
                  <div className="text-3xl mb-3">{cat.icon}</div>
                  <h3 className="font-bold text-gms-dark mb-3">{cat.name}</h3>
                  <div className="space-y-2">
                    {cat.schedule.map((s, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-500">
                        <Clock size={12} className="text-gms-gold flex-shrink-0" />
                        <span>{s.day}: {s.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-gradient-to-r from-gms-dark via-[#2a2a4e] to-gms-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,169,81,0.4)_0%,transparent_50%)]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <Church size={48} className="mx-auto text-gms-gold mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gms-gold mb-4">
            Siap Beribadah Bersama Kami?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Kami menantikan kehadiran Anda. Setiap ibadah adalah kesempatan untuk mengalami hadirat Tuhan.
          </p>
          <a
            href="/gms-church-clone/church"
            className="inline-flex items-center gap-2 bg-gms-gold text-gms-dark px-8 py-4 rounded-full font-bold hover:bg-white transition-all shadow-xl"
          >
            Temukan Lokasi <ArrowRight size={18} />
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

/* ─── FadeInSection Component ─── */
function FadeInSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useScrollIn(0.1);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
    >
      {children}
    </div>
  );
}
