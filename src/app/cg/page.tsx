'use client';

import { useState, useEffect, useRef } from 'react';
import {
  ChevronDown, Users, ArrowRight, Check, MapPin, Heart,
  Shield, Crosshair, Sparkles, Church, Star, ChevronRight
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

const whyCG = [
  {
    title: 'Panggilan Tuhan',
    desc: 'Tuhan memanggil setiap orang percaya untuk menjadi bagian dari komunitas iman. CG adalah wadah di mana panggilan itu diwujudnyatakan dalam kehidupan nyata.',
    icon: <Crosshair size={28} />,
    color: 'from-amber-400 to-orange-500',
  },
  {
    title: 'Pertumbuhan Iman',
    desc: 'Dalam komunitas kecil, Anda bertumbuh lebih cepat melalui pembelajaran Alkitab bersama, diskusi, dan penerapan firman Tuhan secara praktis.',
    icon: <Sparkles size={28} />,
    color: 'from-blue-400 to-indigo-500',
  },
  {
    title: 'Komunitas Kasih',
    desc: 'CG menyediakan lingkungan di mana Anda dikenal, dikasihi, dan didukung. Sebuah keluarga rohani yang berjalan bersama dalam suka dan duka.',
    icon: <Heart size={28} />,
    color: 'from-red-400 to-pink-500',
  },
  {
    title: 'Dukungan Rohani',
    desc: 'Saling mendoakan, menguatkan, dan menegur dalam kasih adalah bagian penting dari kehidupan CG. Tidak ada yang berjalan sendiri.',
    icon: <Shield size={28} />,
    color: 'from-green-400 to-emerald-500',
  },
  {
    title: 'Pelayanan Kristus',
    desc: 'CG adalah tempat di mana Anda menemukan dan mengembangkan talenta untuk melayani Tuhan bersama-sama, menjangkau jiwa-jiwa bagi Kristus.',
    icon: <Users size={28} />,
    color: 'from-purple-400 to-violet-500',
  },
];

const categoryCG = [
  {
    name: 'CG EAGLEKIDZ',
    age: 'Usia 3-12 Tahun',
    desc: 'Connect Group untuk anak-anak dengan kegiatan yang menyenangkan dan penuh nilai-nilai Alkitab. Bertumbuh bersama dalam iman sejak dini melalui cerita, permainan, dan aktivitas kreatif.',
    color: 'from-green-500/20 to-green-600/10',
    border: 'border-green-500/30',
    icon: '🦅',
    bgGradient: 'from-green-400 to-emerald-600',
  },
  {
    name: 'CG ARMY OF GOD',
    age: 'Usia 13-25 Tahun',
    desc: 'CG untuk remaja dan pemuda. Dinamis, kreatif, dan relevan dengan generasi muda yang ingin bertumbuh dalam Tuhan sambil membangun persahabatan sejati.',
    color: 'from-red-500/20 to-red-600/10',
    border: 'border-red-500/30',
    icon: '⚔️',
    bgGradient: 'from-red-400 to-rose-600',
  },
  {
    name: 'CG ADULT',
    age: 'Usia 25+',
    desc: 'CG untuk dewasa yang mencakup berbagai profesi dan tahap kehidupan. Diskusi firman yang mendalam dan aplikatif untuk menghadapi tantangan hidup sehari-hari.',
    color: 'from-blue-500/20 to-blue-600/10',
    border: 'border-blue-500/30',
    icon: '👨‍👩‍👧‍👦',
    bgGradient: 'from-blue-400 to-indigo-600',
  },
];

const stepsBergabung = [
  { step: 1, title: 'Isi Form Pendaftaran', desc: 'Lengkapi data diri Anda melalui formulir pendaftaran CG yang tersedia online atau di gereja.' },
  { step: 2, title: 'Pilih Kategori CG', desc: 'Pilih CG yang sesuai dengan usia dan tahap hidup Anda: EagleKidz, Army of God, atau Adult.' },
  { step: 3, title: 'Dapatkan Info CG', desc: 'Tim kami akan menghubungi Anda dan memberikan informasi lengkap mengenai jadwal, lokasi, dan pemimpin CG.' },
  { step: 4, title: 'Mulai Perjalanan CG', desc: 'Hadiri pertemuan CG pertama Anda dan rasakan kebersamaan dalam keluarga rohani yang baru!' },
];

const faqItems = [
  { q: 'Apa itu Connect Group (CG)?', a: 'Connect Group (CG) adalah komunitas kecil dalam GMS Church di mana setiap anggota dapat bertumbuh dalam iman, menjalin hubungan yang erat, dan melayani bersama. CG biasanya terdiri dari 10-15 orang yang bertemu secara rutin setiap minggu.' },
  { q: 'Siapa saja yang bisa bergabung CG?', a: 'Semua orang dapat bergabung CG! Kami memiliki CG untuk setiap tahap kehidupan: EagleKidz (3-12 tahun), Army of God (13-25 tahun), dan Adult (25+). Tidak ada syarat khusus — Anda diterima apa adanya.' },
  { q: 'Bagaimana cara mendaftar CG?', a: 'Anda dapat mendaftar melalui halaman "TERHUBUNG" di website ini, mengisi form di gereja, atau menghubungi langsung tim CG kami melalui kontak yang tersedia.' },
  { q: 'Apakah ada biaya untuk bergabung CG?', a: 'Tidak ada biaya! Bergabung dengan Connect Group adalah gratis. Setiap anggota bebas memberi sesuai kerelaan hati untuk mendukung kegiatan CG.' },
  { q: 'Kapan dan di mana CG diadakan?', a: 'Setiap CG memiliki jadwal dan lokasi pertemuan yang berbeda-beda. Umumnya CG diadakan seminggu sekali di rumah anggota, gereja, atau tempat yang sudah disepakati bersama.' },
  { q: 'Apakah saya bisa pindah CG jika tidak cocok?', a: 'Tentu! Kami ingin setiap anggota merasa nyaman dan bertumbuh. Jika Anda merasa kurang cocok dengan satu CG, Anda dapat berkonsultasi dengan koordinator CG untuk dipindahkan ke CG yang lebih sesuai.' },
  { q: 'Apa yang dilakukan dalam pertemuan CG?', a: 'Pertemuan CG biasanya dimulai dengan pujian, pembahasan firman Tuhan, diskusi, saling mendoakan, dan fellowship. Suasananya santai namun penuh dengan pertumbuhan rohani.' },
];

/* ─── Accordion Component ─── */
function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIdx === i;
        return (
          <div
            key={i}
            className={`bg-white rounded-2xl border transition-all overflow-hidden ${
              isOpen ? 'border-gms-gold shadow-lg ring-1 ring-gms-gold/20' : 'border-gray-200 shadow-sm hover:shadow-md'
            }`}
          >
            <button
              onClick={() => setOpenIdx(isOpen ? null : i)}
              className="w-full flex items-center justify-between p-5 md:p-6 text-left gap-4"
            >
              <span className="flex items-center gap-3">
                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  isOpen ? 'bg-gms-gold text-white' : 'bg-gms-dark/10 text-gms-dark'
                }`}>
                  {i + 1}
                </span>
                <span className="font-bold text-gms-dark text-sm md:text-base">{item.q}</span>
              </span>
              <ChevronDown
                size={20}
                className={`text-gms-gold flex-shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
              <div className="px-5 md:px-6 pb-5 md:pb-6 text-gray-600 leading-relaxed text-sm md:text-base border-t border-gray-100 pt-4 ml-14">
                {item.a}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ─── Main Page ─── */
export default function CGPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ─── PAGE HERO ─── */}
      <section className="page-hero h-[420px] md:h-[520px]">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 animate-[scaleIn_20s_ease-in-out_infinite_alternate]"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80')",
          }}
        />
        <div className="page-hero-overlay">
          <div className="absolute inset-0 bg-gradient-to-b from-gms-dark/70 via-gms-dark/40 to-gms-dark/80" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gms-gold/20 border border-gms-gold/30 rounded-full px-5 py-1.5 mb-5">
            <Users size={16} className="text-gms-gold" />
            <span className="text-gms-gold text-xs font-semibold tracking-[0.2em]">COMMUNITY & FELLOWSHIP</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
            CONNECT <span className="text-gms-gold">GROUP</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Bertumbuh bersama dalam komunitas iman yang saling mendukung dan mengasihi
          </p>
        </div>
      </section>

      {/* ─── APA ITU CG ─── */}
      <section className="py-20 bg-white">
        <FadeInSection>
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-gms-dark text-gms-gold text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <Sparkles size={14} />
              APA ITU CONNECT GROUP?
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-gms-dark mb-6">
              Lebih dari Sekadar Komunitas
            </h2>
            <div className="w-20 h-1 bg-gms-gold mx-auto mb-8 rounded-full" />
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              Connect Group (CG) adalah komunitas kecil dalam GMS Church di mana setiap orang
              dapat bertumbuh dalam iman, menjalin hubungan yang erat, dan melayani bersama.
              Kami percaya bahwa gereja yang sehat dibangun di atas komunitas-komunitas kecil
              yang saling mengasihi dan mendukung.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6 max-w-lg mx-auto">
              <div className="bg-gms-cream rounded-xl p-4">
                <div className="text-2xl font-bold text-gms-gold">10-15</div>
                <p className="text-xs text-gray-500 mt-1">Anggota per CG</p>
              </div>
              <div className="bg-gms-cream rounded-xl p-4">
                <div className="text-2xl font-bold text-gms-gold">1×</div>
                <p className="text-xs text-gray-500 mt-1">Pertemuan per Minggu</p>
              </div>
              <div className="bg-gms-cream rounded-xl p-4">
                <div className="text-2xl font-bold text-gms-gold">100+</div>
                <p className="text-xs text-gray-500 mt-1">CG Aktif</p>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* ─── MENGAPA HARUS TERTANAM DI CG ─── */}
      <section className="py-20 bg-gms-cream">
        <div className="max-w-6xl mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-4">
              <div className="inline-flex items-center gap-2 bg-gms-dark text-gms-gold text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                <Heart size={14} />
                MENGAPA CG?
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-gms-dark mb-4">
                Mengapa Harus Tertanam di CG?
              </h2>
              <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                Lima alasan mengapa Anda perlu menjadi bagian dari Connect Group
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyCG.map((item, i) => (
              <FadeInSection key={i} delay={i * 100}>
                <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-gms-gold/30 relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-5 rounded-bl-full`} />
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-lg text-gms-dark mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── KATEGORI CG ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gms-dark text-gms-gold text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                <Users size={14} />
                KATEGORI
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-gms-dark mb-4">
                Kategori CG
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Temukan CG yang sesuai dengan tahap hidup Anda
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            {categoryCG.map((cat, i) => (
              <FadeInSection key={i} delay={i * 150}>
                <div className={`group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 ${cat.border}`}>
                  <div className={`absolute inset-0 bg-gradient-to-b ${cat.color} opacity-60`} />
                  {/* Circle decoration */}
                  <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${cat.bgGradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
                  <div className="relative p-8 text-center">
                    <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{cat.icon}</div>
                    <h3 className="font-serif text-2xl font-bold text-gms-dark mb-2">{cat.name}</h3>
                    <div className="bg-gms-gold/20 text-gms-dark font-semibold text-xs px-3 py-1 rounded-full inline-block mb-4">
                      {cat.age}
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{cat.desc}</p>
                  </div>
                  <div className="px-8 pb-6 text-center">
                    <button className="w-full bg-gms-dark text-white py-2.5 rounded-xl font-semibold text-sm hover:bg-gms-gold hover:text-gms-dark transition-all shadow-md">
                      Gabung CG Ini
                    </button>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CARA BERGABUNG ─── */}
      <section className="py-20 bg-gms-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,169,81,0.3)_0%,transparent_50%)]" />
        </div>
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <FadeInSection>
            <div className="text-center mb-4">
              <div className="inline-flex items-center gap-2 bg-gms-gold/20 border border-gms-gold/30 text-gms-gold text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                <ArrowRight size={14} />
                LANGKAH-LANGKAH
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-gms-gold mb-4">
                Cara Bergabung CG
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-12">
                Empat langkah mudah untuk memulai perjalanan CG Anda
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-4 gap-6">
            {stepsBergabung.map((step, i) => (
              <FadeInSection key={i} delay={i * 100}>
                <div className="text-center group">
                  <div className="relative mb-6">
                    <div className={`w-24 h-24 mx-auto rounded-full bg-gms-gold/10 border-2 border-gms-gold flex items-center justify-center group-hover:bg-gms-gold group-hover:text-gms-dark transition-all duration-500`}>
                      <div className="relative">
                        <span className="text-4xl font-bold text-gms-gold group-hover:text-gms-dark transition-colors">{step.step}</span>
                      </div>
                    </div>
                    {/* Connector line */}
                    {i < stepsBergabung.length - 1 && (
                      <div className="hidden md:block absolute top-12 left-[60%] w-[80%] border-t-2 border-dashed border-gms-gold/30">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-gms-gold/30 rounded-full" />
                      </div>
                    )}
                  </div>
                  <h3 className="font-bold text-lg text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection>
            <div className="text-center mt-12">
              <a
                href="/gms-church-clone/connect"
                className="inline-flex items-center gap-2 bg-gms-gold text-gms-dark px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-all shadow-2xl hover:shadow-gms-gold/25 group"
              >
                Gabung CG Sekarang <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-4">
              <div className="inline-flex items-center gap-2 bg-gms-dark text-gms-gold text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                <Star size={14} />
                FAQ
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-gms-dark mb-4">
                Pertanyaan Umum
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                Pertanyaan yang sering diajukan tentang Connect Group
              </p>
            </div>
          </FadeInSection>
          <FadeInSection delay={100}>
            <Accordion items={faqItems} />
          </FadeInSection>
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
