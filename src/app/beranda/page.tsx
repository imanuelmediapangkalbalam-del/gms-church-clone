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
  ChevronDown,
  Play,
  Maximize2,
  ChevronUp,
  ExternalLink,
  Cross,
} from 'lucide-react';

/* ─── Types ─── */
type Announcement = {
  text: string;
  type: 'info' | 'urgent' | 'event';
};

/* ─── Data ─── */

const announcements: Announcement[] = [
  { text: 'TAHUN PERSATUAN & SORGA YANG TERBUKA', type: 'info' },
  { text: 'MIRACLES IN ISRAEL — 15-25 September 2025', type: 'event' },
  { text: 'CG SUPERCON — 12 Oktober 2025', type: 'urgent' },
  { text: 'GABUNG CG: Jadilah Bagian dari Keluarga Rohani', type: 'info' },
];

const visionMission = [
  {
    title: 'Visi',
    content:
      'Gereja sel yang apostolik dan profetik yang menjangkau jiwa-jiwa bagi Kristus dan memuridkan mereka menjadi murid Kristus yang sejati.',
    icon: '🌟',
    color: 'from-gms-gold/30 to-amber-900/20',
    number: '01',
    verse: 'Matius 28:19-20',
  },
  {
    title: 'Misi',
    content:
      'Membawa setiap orang kepada pengenalan yang benar akan Yesus Kristus, bertumbuh dalam komunitas sel, dan melayani sesuai panggilan Tuhan.',
    icon: '🔥',
    color: 'from-gms-maroon/30 to-red-900/20',
    number: '02',
    verse: 'Kisah Para Rasul 1:8',
  },
  {
    title: 'Pengakuan Iman',
    content:
      'Kami percaya kepada Allah Bapa, Yesus Kristus Anak-Nya yang tunggal, dan Roh Kudus, serta Alkitab sebagai firman Allah yang diilhamkan.',
    icon: '✝️',
    color: 'from-gms-dark/30 to-blue-900/20',
    number: '03',
    verse: '2 Timotius 3:16',
  },
];

const events = [
  {
    title: 'MIRACLES IN ISRAEL',
    date: '2025-09-15',
    dateLabel: '15-25 September 2025',
    desc: 'Perjalanan rohani ke Tanah Perjanjian bersama Ps. Philip Mantofa',
    image:
      'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&q=80',
    category: 'Konferensi',
    color: 'from-gms-gold',
  },
  {
    title: 'CG SUPERCON',
    date: '2025-10-12',
    dateLabel: '12 Oktober 2025',
    desc: 'Kebersamaan Connect Group se-dunia dalam satu acara',
    image:
      'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80',
    category: 'Kebersamaan',
    color: 'from-gms-maroon',
  },
  {
    title: 'CHRISTMAS CELEBRATION',
    date: '2025-12-24',
    dateLabel: '24-25 Desember 2025',
    desc: 'Perayaan Natal bersama keluarga besar GMS',
    image:
      'https://images.unsplash.com/photo-1512389142860-9c449e58ea4a?w=800&q=80',
    category: 'Perayaan',
    color: 'from-red-600',
  },
];

const continents = ['Semua', 'Asia', 'Australia', 'Eropa', 'Amerika'];

const locationRegionColors: Record<string, string> = {
  Asia: 'bg-amber-500',
  Australia: 'bg-blue-500',
  Eropa: 'bg-emerald-500',
  Amerika: 'bg-purple-500',
};

const locationData = [
  {
    name: 'GMS Surabaya',
    address: 'Jl. Raya Gubeng No. 98, Surabaya',
    region: 'Asia',
    image:
      'https://images.unsplash.com/photo-1438032005737-c6a1ee39d87b?w=600&q=80',
    time: 'Minggu 07:00, 09:00, 18:00',
  },
  {
    name: 'GMS Jakarta',
    address: 'Jl. Mega Kuningan Barat, Jakarta',
    region: 'Asia',
    image:
      'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=600&q=80',
    time: 'Minggu 08:00, 10:00, 17:00',
  },
  {
    name: 'GMS Melbourne',
    address: '123 Swanston St, Melbourne VIC',
    region: 'Australia',
    image:
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&q=80',
    time: 'Minggu 10:00, 14:00',
  },
  {
    name: 'GMS London',
    address: '45 Oxford Street, London',
    region: 'Eropa',
    image:
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80',
    time: 'Minggu 09:00, 11:00',
  },
  {
    name: 'GMS Los Angeles',
    address: '200 Sunset Blvd, Los Angeles CA',
    region: 'Amerika',
    image:
      'https://images.unsplash.com/photo-1559827291-2650b44fd03c?w=600&q=80',
    time: 'Minggu 08:00, 10:30',
  },
];

const connectGroups = [
  { name: 'CG Eaglekidz', usia: 'Usia 3-12 tahun', icon: '🦅', desc: 'Petualangan iman yang seru untuk anak-anak' },
  { name: 'CG Army of God', usia: 'Usia 13-25 tahun', icon: '⚔️', desc: 'Generasi muda yang berapi-api bagi Tuhan' },
  { name: 'CG Adult', usia: 'Usia 25+', icon: '👨‍👩‍👧‍👦', desc: 'Komunitas dewasa yang bertumbuh bersama' },
  { name: 'CG Professional', usia: 'Karyawan & Profesional', icon: '💼', desc: 'Iman dan karya berpadu dalam panggilan' },
  { name: 'CG Keluarga', usia: 'Pasangan Suami Istri', icon: '🏠', desc: 'Membangun keluarga yang berpusat pada Kristus' },
  { name: 'CG Kaum Muda', usia: 'Usia 18-35 tahun', icon: '✨', desc: 'Muda, kreatif, dan berdampak' },
];

const highlights = [
  {
    label: 'Renungan Harian',
    icon: '📖',
    desc: 'Firman Tuhan setiap hari',
    color: 'from-amber-400 to-amber-600',
    category: 'Firman',
  },
  {
    label: 'Podcast GMS',
    icon: '🎙️',
    desc: 'Dengarkan kapan saja',
    color: 'from-blue-400 to-blue-600',
    category: 'Media',
  },
  {
    label: 'Sekolah Alkitab',
    icon: '📚',
    desc: 'Belajar Alkitab secara sistematis',
    color: 'from-emerald-400 to-emerald-600',
    category: 'Pendidikan',
  },
  {
    label: 'Music Ministry',
    icon: '🎵',
    desc: 'Pujian dan penyembahan',
    color: 'from-purple-400 to-purple-600',
    category: 'Ibadah',
  },
  {
    label: 'GMS TV',
    icon: '📺',
    desc: 'Siaran langsung dan rekaman',
    color: 'from-red-400 to-red-600',
    category: 'Media',
  },
  {
    label: 'e-Giving',
    icon: '💳',
    desc: 'Memberi dengan mudah',
    color: 'from-gms-gold to-yellow-600',
    category: 'Pelayanan',
  },
  {
    label: 'Doa Syafaat',
    icon: '🙏',
    desc: 'Mendukung dalam doa',
    color: 'from-indigo-400 to-indigo-600',
    category: 'Doa',
  },
  {
    label: 'Konseling',
    icon: '💬',
    desc: 'Pendampingan rohani',
    color: 'from-teal-400 to-teal-600',
    category: 'Pelayanan',
  },
  {
    label: 'Perpustakaan',
    icon: '📖',
    desc: 'Sumber bacaan rohani',
    color: 'from-cyan-400 to-cyan-600',
    category: 'Pendidikan',
  },
  {
    label: 'Sosial Media',
    icon: '📱',
    desc: 'Ikuti kami di sosial media',
    color: 'from-sky-400 to-sky-600',
    category: 'Media',
  },
];

const affiliations = [
  { name: 'PPM', full: 'Persekutuan Pelayanan Mahasiswa', desc: 'Membina mahasiswa menjadi pemimpin rohani' },
  { name: 'MSP', full: 'Misi Service Provider', desc: 'Menjangkau daerah terpencil dengan kasih Kristus' },
  { name: 'PR', full: 'Pemulihan Rohani', desc: 'Pemulihan jiwa dan pelayanan konseling' },
  { name: 'FKA', full: 'Forum Komunikasi Alumni', desc: 'Jaringan alumni GMS di seluruh dunia' },
  { name: 'Bizcon', full: 'Business Connect', desc: 'Pengusaha Kristen yang berdampak' },
  { name: 'STT', full: 'Sekolah Tinggi Teologi', desc: 'Pendidikan teologi yang alkitabiah' },
];

/* ─── Countdown Hook ─── */
function useCountdown(targetDate: string) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(targetDate).getTime();
    const tick = () => {
      const now = new Date().getTime();
      const diff = Math.max(0, target - now);
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return timeLeft;
}

/* ─── CountUp Hook ─── */
function useCountUp(end: number, duration: number = 2000, startOnView: boolean = false) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    if (!startOnView) {
      doCount();
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          doCount();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const doCount = () => {
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  return { count, ref };
}

/* ─── Scroll Reveal Hook ─── */
function useRevealOnScroll(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return ref;
}

/* ─── Components ─── */

/* ─── 1. HERO SECTION ─── */
function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    setMounted(true);
    const now = new Date();
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const dayName = days[now.getDay()];
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    setCurrentTime(`${dayName}, ${hours}:${minutes} WIB`);

    // Check if it's Sunday service time
    const isSunday = now.getDay() === 0;
    const hour = now.getHours();
    // We'll show live if between 6:30-19:00 on Sunday
    if (isSunday && hour >= 6 && hour < 19) {
      // live indicator will show
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden cross-decoration">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1920&q=80')",
          backgroundAttachment: 'fixed',
          transform: mounted ? 'scale(1)' : 'scale(1.1)',
          transition: 'transform 1.5s ease-out',
        }}
      />

      {/* Multi-layer gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gms-dark/80 via-gms-dark/50 to-gms-dark/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-gms-dark/40 via-transparent to-gms-maroon/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gms-gold/5 blur-3xl pointer-events-none" />

      {/* Floating cross elements */}
      <div className="absolute top-[15%] left-[10%] text-gms-gold/10 text-6xl animate-float" style={{ animationDelay: '0s' }}>
        ✝
      </div>
      <div className="absolute bottom-[20%] right-[12%] text-gms-gold/10 text-5xl animate-float" style={{ animationDelay: '2s' }}>
        ✝
      </div>
      <div className="absolute top-[40%] right-[8%] text-gms-gold/8 text-4xl animate-float" style={{ animationDelay: '4s' }}>
        ✝
      </div>
      <div className="absolute bottom-[35%] left-[15%] text-gms-gold/8 text-3xl animate-float" style={{ animationDelay: '1s' }}>
        ✝
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mt-8">
        {/* Live / Service indicator */}
        <div
          className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-md transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{
            background: 'linear-gradient(135deg, rgba(200,169,81,0.25), rgba(139,0,0,0.15))',
            border: '1px solid rgba(200,169,81,0.3)',
            transitionDelay: '0.1s',
          }}
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
          </span>
          <span className="text-gms-gold">Live Now</span>
          <span className="text-white/60">•</span>
          <span className="text-white/70 text-xs">{currentTime}</span>
        </div>

        {/* Badge */}
        <div
          className={`inline-block px-6 py-2 border border-gms-gold/40 rounded-full text-gms-gold text-sm font-semibold mb-6 backdrop-blur-sm transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '0.2s' }}
        >
          Welcome to GMS Church
        </div>

        {/* Main Title */}
        <h1
          className={`font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.4s' }}
        >
          <span className="text-gms-gold animate-glow inline-block">A Home</span>
          <br />
          <span className="bg-gradient-to-r from-white via-gms-gold/90 to-white bg-clip-text text-transparent">
            for Everyone
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.6s' }}
        >
          Sebuah keluarga rohani di mana Anda diterima, bertumbuh, dan menjadi berkat
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-5 justify-center transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.8s' }}
        >
          <a
            href="/gms-church-clone/church"
            className="group relative inline-flex items-center gap-2 bg-gms-gold text-gms-dark px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 shadow-2xl hover:shadow-gms-gold/30 hover:scale-105 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative flex items-center gap-2">
              TENTANG KAMI <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a
            href="/gms-church-clone/church"
            className="group inline-flex items-center gap-2 border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 hover:border-gms-gold/50 transition-all duration-300 backdrop-blur-sm hover:scale-105"
          >
            CARI LOKASI <MapPin size={20} className="group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-chevron-bounce">
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll Down</span>
        <ChevronDown size={24} className="text-gms-gold" />
      </div>
    </section>
  );
}

/* ─── 2. ANNOUNCEMENT TICKER ─── */
function AnnouncementTicker() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIdx((prev) => (prev + 1) % announcements.length);
        setVisible(true);
      }, 400);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = announcements[currentIdx];

  const typeStyles: Record<string, string> = {
    info: 'bg-gms-gold/20 border-gms-gold/40',
    urgent: 'bg-red-500/20 border-red-400/40',
    event: 'bg-green-500/20 border-green-400/40',
  };

  const typeLabels: Record<string, string> = {
    info: 'INFO',
    urgent: 'URGENT',
    event: 'EVENT',
  };

  return (
    <div className="relative z-20 overflow-hidden">
      <div
        className="relative py-3"
        style={{
          background: 'linear-gradient(90deg, #8B0000 0%, #C8A951 50%, #8B0000 100%)',
        }}
      >
        {/* Overlay shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />

        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-3 relative">
          {/* Icon */}
          <div className="hidden sm:flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
            <span className="text-yellow-300 text-xs">📢</span>
            <span className="text-white/80 text-xs font-semibold">ANNOUNCEMENT</span>
          </div>

          {/* Rotating text */}
          <div className="flex-1 text-center overflow-hidden">
            <span
              className={`inline-block text-white font-bold text-sm md:text-base tracking-wider transition-all duration-400 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              {current.text}
            </span>
          </div>

          {/* Type badge */}
          <span
            className={`hidden md:inline-block text-[10px] font-bold px-2.5 py-1 rounded-full border ${typeStyles[current.type]} text-white/90`}
          >
            {typeLabels[current.type]}
          </span>

          {/* Dots indicator */}
          <div className="hidden sm:flex items-center gap-1.5 ml-2">
            {announcements.map((_, i) => (
              <span
                key={i}
                className={`block w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIdx ? 'bg-white w-4' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── 3. VISION MISSION CARD ─── */
function VisionMissionCard({
  item,
  index,
}: {
  item: (typeof visionMission)[0];
  index: number;
}) {
  const revealRef = useRevealOnScroll(0.2);

  return (
    <div
      ref={revealRef}
      className="animate-reveal tilt-card"
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <div
        className="tilt-card-inner group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-default"
        onMouseMove={(e) => {
          const card = e.currentTarget;
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -8;
          const rotateY = ((x - centerX) / centerX) * 8;
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        }}
      >
        {/* Number decoration */}
        <div className="absolute -top-4 -right-4 text-7xl font-bold text-gms-dark/5 select-none pointer-events-none">
          {item.number}
        </div>

        {/* Gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-70 group-hover:opacity-100 transition-opacity duration-500`} />

        {/* Content */}
        <div className="relative p-8 text-center">
          {/* Icon */}
          <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
            {item.icon}
          </div>

          {/* Title */}
          <h3 className="font-serif text-2xl font-bold text-gms-dark mb-4">{item.title}</h3>

          {/* Content */}
          <p className="text-gray-600 leading-relaxed mb-4">{item.content}</p>

          {/* Verse */}
          <div className="inline-flex items-center gap-2 text-xs text-gms-gold font-semibold bg-gms-gold/10 px-4 py-1.5 rounded-full">
            <span>📖</span> {item.verse}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── 4. EVENTS CAROUSEL ─── */
function EventsCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextEvent = events[0];
  const countdown = useCountdown(nextEvent.date);

  const goTo = useCallback(
    (idx: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent(((idx % events.length) + events.length) % events.length);
      setTimeout(() => setIsAnimating(false), 600);
    },
    [isAnimating]
  );

  const goNext = useCallback(() => goTo(current + 1), [current, goTo]);
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(goNext, 6000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [goNext, isPaused]);

  const ev = events[current];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gms-dark via-[#1e1e3a] to-[#2a2a4e]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,169,81,0.08),transparent_50%)]" />

      <div
        className="max-w-7xl mx-auto px-4 relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-gms-gold/20 border border-gms-gold/30 rounded-full text-gms-gold text-sm font-semibold mb-4">
            Jangan Lewatkan
          </span>
          <h2 className="section-title text-4xl md:text-5xl font-bold text-white">
            Event <span className="text-gms-gold">Terkini</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            Momen spesial yang akan mengubah hidup Anda
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-4 md:gap-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-6 md:px-10 py-4">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gms-gold">{countdown.days}</div>
              <div className="text-[10px] text-gray-400 uppercase tracking-widest">Hari</div>
            </div>
            <div className="text-gms-gold/40 text-2xl">:</div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gms-gold">{countdown.hours}</div>
              <div className="text-[10px] text-gray-400 uppercase tracking-widest">Jam</div>
            </div>
            <div className="text-gms-gold/40 text-2xl">:</div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gms-gold">{countdown.minutes}</div>
              <div className="text-[10px] text-gray-400 uppercase tracking-widest">Menit</div>
            </div>
            <div className="text-gms-gold/40 text-2xl">:</div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gms-gold">{countdown.seconds}</div>
              <div className="text-[10px] text-gray-400 uppercase tracking-widest">Detik</div>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* 3D Perspective Card */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl" style={{ perspective: '1200px' }}>
            <div
              className="flex transition-transform duration-600 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {events.map((evt, i) => (
                <div key={i} className="min-w-full flex-shrink-0 relative" style={{ transform: 'rotateY(0deg)' }}>
                  <div className="relative h-[450px] md:h-[550px]">
                    <img
                      src={evt.image}
                      alt={evt.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gms-dark/95 via-gms-dark/50 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-gms-dark/60 via-transparent to-gms-dark/30" />

                    {/* Category badge */}
                    <div className="absolute top-6 left-6">
                      <span className="inline-block px-4 py-1.5 bg-white/15 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/20">
                        {evt.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14">
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-gms-gold text-gms-dark text-sm font-bold rounded-full mb-5 shadow-lg">
                        <Clock size={14} />
                        {evt.dateLabel}
                      </span>
                      <h3 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                        {evt.title}
                      </h3>
                      <p className="text-gray-200 text-lg max-w-xl leading-relaxed">{evt.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-xl hover:bg-gms-gold/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/10"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-xl hover:bg-gms-gold/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/10"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>

          {/* Premium Navigation Dots */}
          <div className="flex justify-center items-center gap-3 mt-10">
            {events.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="group relative transition-all duration-300"
                aria-label={`Go to slide ${i + 1}`}
              >
                <span
                  className={`block rounded-full transition-all duration-500 ${
                    i === current
                      ? 'w-12 h-3 bg-gms-gold shadow-lg shadow-gms-gold/30'
                      : 'w-3 h-3 bg-white/30 hover:bg-white/60'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Pause indicator */}
          {isPaused && (
            <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <span className="block w-1.5 h-1.5 rounded-full bg-gms-gold" />
              PAUSED
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─── 5. LOCATIONS SECTION ─── */
function LocationsSection() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('Semua');
  const revealRef = useRevealOnScroll(0.1);

  const filtered = locationData.filter(
    (loc) =>
      (filter === 'Semua' || loc.region === filter) &&
      (loc.name.toLowerCase().includes(search.toLowerCase()) ||
        loc.address.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <section className="py-24 relative overflow-hidden">
      {/* World Map Background */}
      <div className="absolute inset-0 bg-gms-cream" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1589519160732-57fc498f2a56?w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Decorative dots pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #1A1A2E 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative" ref={revealRef}>
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-gms-dark/10 rounded-full text-gms-dark/70 text-sm font-semibold mb-4">
            🌍 5 Benua
          </span>
          <h2 className="section-title text-4xl md:text-5xl font-bold text-gms-dark mb-3">
            Lokasi <span className="text-gms-gold">GMS</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Temukan Gereja GMS terdekat dari lokasi Anda
          </p>
        </div>

        {/* Search */}
        <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Cari lokasi..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-gms-gold focus:outline-none bg-white shadow-sm transition-all"
            />
          </div>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {continents.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                filter === c
                  ? 'bg-gms-gold text-white shadow-lg shadow-gms-gold/20 scale-105'
                  : 'bg-white text-gray-600 hover:bg-gms-gold/10 border border-gray-200 hover:border-gms-gold/30'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((loc, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Region Badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-white text-[10px] font-bold uppercase tracking-wider shadow-lg ${
                      locationRegionColors[loc.region] || 'bg-gray-500'
                    }`}
                  >
                    {loc.region}
                  </span>
                </div>
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-gms-dark mb-2 group-hover:text-gms-gold transition-colors">
                  {loc.name}
                </h3>
                <div className="flex items-start gap-2 text-gray-500 text-sm mb-2">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0 text-gms-gold" />
                  <span>{loc.address}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <Clock size={14} className="text-gms-gold" />
                  <span>{loc.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 6. CONNECT GROUP SECTION ─── */
function ConnectGroupSection() {
  const revealRef = useRevealOnScroll(0.1);

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-gms-dark via-[#1e1e3a] to-[#2a2a4e]">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gms-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gms-maroon/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative" ref={revealRef}>
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-gms-gold/20 border border-gms-gold/30 rounded-full text-gms-gold text-sm font-semibold mb-4">
            Komunitas
          </span>
          <h2 className="section-title text-4xl md:text-5xl font-bold text-white mb-3">
            Connect <span className="text-gms-gold">Group</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Connect Group (CG) adalah komunitas kecil di mana Anda dapat bertumbuh dalam iman,
            menjalin hubungan yang erat, dan melayani bersama.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {connectGroups.map((cg, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {/* Hover reveal content */}
              <div className="p-6">
                <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-500 origin-left">
                  {cg.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-2">{cg.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{cg.usia}</p>

                {/* Description - revealed on hover */}
                <div className="overflow-hidden max-h-0 group-hover:max-h-20 transition-all duration-500">
                  <p className="text-gray-300 text-sm leading-relaxed">{cg.desc}</p>
                </div>

                {/* Decorative line */}
                <div className="mt-4 h-px bg-gradient-to-r from-gms-gold/40 via-gms-gold/10 to-transparent" />
              </div>

              {/* Glow on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-gms-gold/0 via-gms-gold/10 to-gms-maroon/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/gms-church-clone/cg"
            className="group relative inline-flex items-center gap-3 bg-gms-gold text-gms-dark px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-gms-gold/30 hover:scale-105 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative flex items-center gap-2">
              Gabung Connect Group <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── 7. SENIOR PASTOR ─── */
function SeniorPastor() {
  const revealRef = useRevealOnScroll(0.15);

  const stat1 = useCountUp(30, 2000, true);
  const stat2 = useCountUp(500, 2500, true);
  const stat3 = useCountUp(50, 2000, true);

  return (
    <section className="py-24 relative overflow-hidden bg-gms-cream">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gms-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gms-maroon/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative" ref={revealRef}>
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="relative">
            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gms-gold/30 rounded-3xl" />
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gms-dark/10 rounded-3xl" />

            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80"
                alt="Ps. Philip Mantofa"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gms-dark/40 via-transparent to-transparent" />

              {/* Quote overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-gms-dark/80 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                  <div className="text-gms-gold text-3xl leading-none mb-2">"</div>
                  <p className="text-white/90 text-sm italic leading-relaxed">
                    Gereja bukanlah gedung, tetapi orang-orang yang dipanggil keluar dari kegelapan kepada terang-Nya yang ajaib.
                  </p>
                  <div className="text-gms-gold text-3xl leading-none text-right mt-1">"</div>
                </div>
              </div>
            </div>

            {/* Badge */}
            <div className="absolute -bottom-4 -right-2 w-28 h-28 bg-gms-gold rounded-full flex items-center justify-center shadow-2xl animate-float">
              <span className="text-gms-dark font-bold text-center text-xs leading-tight">
                Senior<br />Pastor
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="animate-reveal">
            <div className="inline-block px-4 py-2 bg-gms-gold/20 text-gms-gold rounded-full text-sm font-semibold mb-4 border border-gms-gold/30">
              Gembala Senior
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gms-dark mb-2">
              Ps. Philip Mantofa
            </h2>
            <p className="text-gms-gold font-semibold text-lg mb-6">
              Pendiri & Gembala Senior GMS Church
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Ps. Philip Mantofa adalah seorang hamba Tuhan yang diurapi, dengan visi apostolik
              dan profetik untuk menjangkau jiwa-jiwa di seluruh dunia. Beliau memimpin GMS Church
              dengan hati seorang gembala, membawa transformasi bagi ribuan jiwa melalui
              pengajaran firman yang relevan dan penuh kuasa.
            </p>

            {/* Stats with count-up animation */}
            <div className="grid grid-cols-3 gap-5" ref={stat1.ref as React.RefObject<HTMLDivElement>}>
              <div className="bg-white rounded-2xl p-5 text-center shadow-md hover:shadow-lg transition-all border border-gray-100">
                <div className="text-3xl md:text-4xl font-bold text-gms-gold tabular-nums">
                  {stat1.count}+
                </div>
                <div className="text-xs text-gray-500 mt-2 font-medium">Tahun Pelayanan</div>
              </div>
              <div className="bg-white rounded-2xl p-5 text-center shadow-md hover:shadow-lg transition-all border border-gray-100">
                <div className="text-3xl md:text-4xl font-bold text-gms-gold tabular-nums">
                  {stat2.count}+
                </div>
                <div className="text-xs text-gray-500 mt-2 font-medium">Gereja & CG</div>
              </div>
              <div className="bg-white rounded-2xl p-5 text-center shadow-md hover:shadow-lg transition-all border border-gray-100">
                <div className="text-3xl md:text-4xl font-bold text-gms-gold tabular-nums">
                  {stat3.count}+
                </div>
                <div className="text-xs text-gray-500 mt-2 font-medium">Negara</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 8. HIGHLIGHTS SECTION ─── */
function HighlightsSection() {
  const revealRef = useRevealOnScroll(0.1);

  // Split into two groups for masonry-like layout
  const leftCol = highlights.filter((_, i) => i % 3 === 0);
  const midCol = highlights.filter((_, i) => i % 3 === 1);
  const rightCol = highlights.filter((_, i) => i % 3 === 2);

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 relative" ref={revealRef}>
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-gms-dark/5 rounded-full text-gms-dark/60 text-sm font-semibold mb-4">
            ✨ Sumber Daya
          </span>
          <h2 className="section-title text-4xl md:text-5xl font-bold text-gms-dark mb-3">
            Sorotan <span className="text-gms-gold">GMS</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Berbagai sumber daya rohani untuk pertumbuhan iman Anda
          </p>
        </div>

        {/* Masonry-like grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl border border-gray-100 hover:border-gms-gold/30 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              {/* Colored top bar */}
              <div className={`h-1.5 bg-gradient-to-r ${item.color}`} />

              <div className="p-5 text-center">
                {/* Icon */}
                <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-500">
                  {item.icon}
                </div>
                <p className="text-sm font-bold text-gms-dark mb-1">{item.label}</p>

                {/* Description - reveal on hover */}
                <div className="overflow-hidden max-h-0 group-hover:max-h-12 transition-all duration-500">
                  <p className="text-[11px] text-gray-400 mt-1">{item.desc}</p>
                </div>

                {/* Category dot */}
                <div className="mt-3 flex justify-center">
                  <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r ${item.color}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 9. AFFILIATIONS SECTION ─── */
function AffiliationsSection() {
  const revealRef = useRevealOnScroll(0.1);

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-gms-cream to-white">
      <div className="max-w-7xl mx-auto px-4 relative" ref={revealRef}>
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-gms-dark/5 rounded-full text-gms-dark/60 text-sm font-semibold mb-4">
            🤝 Jaringan
          </span>
          <h2 className="section-title text-4xl md:text-5xl font-bold text-gms-dark mb-3">
            Afiliasi & <span className="text-gms-gold">Mitra</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Bekerja sama dalam membangun kerajaan Allah
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mb-16">
          {affiliations.map((aff, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              <div className="p-6 text-center">
                {/* Logo */}
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gms-dark flex items-center justify-center text-gms-gold font-serif font-bold text-xl group-hover:bg-gms-gold group-hover:text-gms-dark transition-all duration-500 shadow-md group-hover:shadow-lg">
                  {aff.name}
                </div>
                {/* Name */}
                <p className="text-sm font-bold text-gms-dark mb-1">{aff.name}</p>
                {/* Full name */}
                <p className="text-xs text-gray-400 mb-2">{aff.full}</p>
                {/* Description - reveal on hover */}
                <div className="overflow-hidden max-h-0 group-hover:max-h-16 transition-all duration-500">
                  <p className="text-[11px] text-gray-500 leading-relaxed">{aff.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Marquee Partner Logos */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gms-cream to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gms-cream to-transparent z-10" />

          <div className="flex overflow-hidden scrollbar-hide">
            <div className="flex items-center gap-16 animate-marquee">
              {/* Duplicated for seamless loop */}
              {[...Array(2)].map((_, groupIdx) => (
                <div key={groupIdx} className="flex items-center gap-16">
                  {affiliations.map((aff, i) => (
                    <div
                      key={`${groupIdx}-${i}`}
                      className="flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm"
                    >
                      <div className="w-10 h-10 rounded-full bg-gms-dark/5 flex items-center justify-center text-gms-dark font-serif font-bold text-sm">
                        {aff.name}
                      </div>
                      <span className="text-sm font-semibold text-gms-dark whitespace-nowrap">
                        {aff.full}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 10. BACK TO TOP ─── */
function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gms-gold text-gms-dark shadow-2xl hover:bg-white transition-all duration-500 hover:scale-110 ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <ChevronUp size={24} />
    </button>
  );
}

/* ─── Main Page ─── */
export default function BerandaPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className={`${mounted ? 'page-enter-active' : 'page-enter'}`}>
      {/* Hero */}
      <HeroSection />

      {/* Announcement Ticker - positioned right after hero */}
      <AnnouncementTicker />

      {/* Vision Mission */}
      <section className="py-24 relative overflow-hidden bg-white">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-gms-gold/[0.03] to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-gms-gold/10 border border-gms-gold/20 rounded-full text-gms-gold text-sm font-semibold mb-4">
              📖 Dasar Iman
            </span>
            <h2 className="section-title text-4xl md:text-5xl font-bold text-gms-dark mb-3">
              Dasar Iman <span className="text-gms-gold">Kami</span>
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Berakar pada kebenaran firman Tuhan
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {visionMission.map((item, i) => (
              <VisionMissionCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Events Carousel */}
      <EventsCarousel />

      {/* Locations */}
      <LocationsSection />

      {/* Connect Group */}
      <ConnectGroupSection />

      {/* Senior Pastor */}
      <SeniorPastor />

      {/* Highlights */}
      <HighlightsSection />

      {/* Affiliations */}
      <AffiliationsSection />

      {/* Footer */}
      <footer className="bg-gms-dark text-white pt-16 pb-8 relative overflow-hidden">
        {/* Decorative gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gms-gold/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-full bg-gms-gold flex items-center justify-center shadow-lg">
                  <span className="text-gms-dark font-serif font-bold text-xl">G</span>
                </div>
                <div>
                  <span className="font-serif text-xl font-bold text-white block">GMS Church</span>
                  <span className="text-[10px] text-gms-gold tracking-widest uppercase">A Home for Everyone</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Gereja sel yang apostolik dan profetik untuk semua orang, menjangkau jiwa-jiwa bagi Kristus di seluruh dunia.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gms-gold mb-5 text-lg">Tautan</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="/gms-church-clone/beranda" className="hover:text-gms-gold transition flex items-center gap-2 group"><span className="w-1 h-1 bg-gms-gold rounded-full group-hover:w-2 transition-all" /> Beranda</a></li>
                <li><a href="/gms-church-clone/church" className="hover:text-gms-gold transition flex items-center gap-2 group"><span className="w-1 h-1 bg-gms-gold rounded-full group-hover:w-2 transition-all" /> Gereja</a></li>
                <li><a href="/gms-church-clone/service" className="hover:text-gms-gold transition flex items-center gap-2 group"><span className="w-1 h-1 bg-gms-gold rounded-full group-hover:w-2 transition-all" /> Ibadah</a></li>
                <li><a href="/gms-church-clone/cg" className="hover:text-gms-gold transition flex items-center gap-2 group"><span className="w-1 h-1 bg-gms-gold rounded-full group-hover:w-2 transition-all" /> CG</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gms-gold mb-5 text-lg">Hubungi</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-gms-gold rounded-full" /> info@gms.church</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-gms-gold rounded-full" /> +62 31 1234 5678</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-gms-gold rounded-full" /> Surabaya, Indonesia</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gms-gold mb-5 text-lg">Ikuti Kami</h4>
              <div className="flex gap-3 mb-6">
                {['YT', 'IG', 'FB', 'TW'].map((s) => (
                  <div
                    key={s}
                    className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold hover:bg-gms-gold hover:text-gms-dark transition-all duration-300 cursor-pointer hover:scale-110"
                  >
                    {s}
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500">Tetaplah terhubung dengan kami di sosial media</p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 text-center text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between gap-2">
            <span>&copy; {new Date().getFullYear()} GMS Church. All rights reserved.</span>
            <span className="text-xs text-gray-600">Built with faith & love ✝️</span>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <BackToTop />
    </div>
  );
}
