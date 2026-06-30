'use client';

import { useState } from 'react';
import { ChevronDown, Users, ArrowRight, Check, MapPin, Heart, Shield, Crosshair, Sparkles } from 'lucide-react';

/* ─── Data ─── */

const whyCG = [
  {
    title: 'Panggilan Tuhan',
    desc: 'Tuhan memanggil setiap orang percaya untuk menjadi bagian dari komunitas iman. CG adalah wadah di mana panggilan itu diwujudnyatakan dalam kehidupan nyata.',
    icon: <Crosshair size={28} />,
  },
  {
    title: 'Pertumbuhan Iman',
    desc: 'Dalam komunitas kecil, Anda bertumbuh lebih cepat melalui pembelajaran Alkitab bersama, diskusi, dan penerapan firman Tuhan secara praktis.',
    icon: <Sparkles size={28} />,
  },
  {
    title: 'Komunitas Kasih',
    desc: 'CG menyediakan lingkungan di mana Anda dikenal, dikasihi, dan didukung. Sebuah keluarga rohani yang berjalan bersama dalam suka dan duka.',
    icon: <Heart size={28} />,
  },
  {
    title: 'Dukungan Rohani',
    desc: 'Saling mendoakan, menguatkan, dan menegur dalam kasih adalah bagian penting dari kehidupan CG. Tidak ada yang berjalan sendiri.',
    icon: <Shield size={28} />,
  },
  {
    title: 'Pelayanan Kristus',
    desc: 'CG adalah tempat di mana Anda menemukan dan mengembangkan talenta untuk melayani Tuhan bersama-sama, menjangkau jiwa-jiwa bagi Kristus.',
    icon: <Users size={28} />,
  },
];

const categoryCG = [
  {
    name: 'CG EAGLEKIDZ',
    age: 'Usia 3-12 Tahun',
    desc: 'Connect Group untuk anak-anak dengan kegiatan yang menyenangkan dan penuh nilai-nilai Alkitab. Bertumbuh bersama dalam iman sejak dini.',
    color: 'from-green-500/20 to-green-600/10',
    border: 'border-green-500/30',
    icon: '🦅',
  },
  {
    name: 'CG ARMY OF GOD',
    age: 'Usia 13-25 Tahun',
    desc: 'CG untuk remaja dan pemuda. Dinamis, kreatif, dan relevan dengan generasi muda yang ingin bertumbuh dalam Tuhan.',
    color: 'from-red-500/20 to-red-600/10',
    border: 'border-red-500/30',
    icon: '⚔️',
  },
  {
    name: 'CG ADULT',
    age: 'Usia 25+',
    desc: 'CG untuk dewasa yang mencakup berbagai profesi dan tahap kehidupan. Diskusi firman yang mendalam dan aplikatif.',
    color: 'from-blue-500/20 to-blue-600/10',
    border: 'border-blue-500/30',
    icon: '👨‍👩‍👧‍👦',
  },
];

const stepsBergabung = [
  {
    step: 1,
    title: 'Isi Form Pendaftaran',
    desc: 'Lengkapi data diri Anda melalui formulir pendaftaran CG yang tersedia online atau di gereja.',
  },
  {
    step: 2,
    title: 'Pilih Kategori CG',
    desc: 'Pilih CG yang sesuai dengan usia dan tahap hidup Anda: EagleKidz, Army of God, atau Adult.',
  },
  {
    step: 3,
    title: 'Dapatkan Info CG',
    desc: 'Tim kami akan menghubungi Anda dan memberikan informasi lengkap mengenai jadwal, lokasi, dan pemimpin CG.',
  },
  {
    step: 4,
    title: 'Mulai Perjalanan CG',
    desc: 'Hadiri pertemuan CG pertama Anda dan rasakan kebersamaan dalam keluarga rohani yang baru!',
  },
];

const faqItems = [
  {
    q: 'Apa itu Connect Group (CG)?',
    a: 'Connect Group (CG) adalah komunitas kecil dalam GMS Church di mana setiap anggota dapat bertumbuh dalam iman, menjalin hubungan yang erat, dan melayani bersama. CG biasanya terdiri dari 10-15 orang yang bertemu secara rutin.',
  },
  {
    q: 'Siapa saja yang bisa bergabung CG?',
    a: 'Semua orang dapat bergabung CG! Kami memiliki CG untuk setiap tahap kehidupan: EagleKidz (3-12 tahun), Army of God (13-25 tahun), dan Adult (25+).',
  },
  {
    q: 'Bagaimana cara mendaftar CG?',
    a: 'Anda dapat mendaftar melalui halaman "TERHUBUNG" di website ini, mengisi form di gereja, atau menghubungi langsung tim CG kami melalui kontak yang tersedia.',
  },
  {
    q: 'Apakah ada biaya untuk bergabung CG?',
    a: 'Tidak ada biaya! Bergabung dengan Connect Group adalah gratis. Setiap anggota bebas memberi sesuai kerelaan hati untuk mendukung kegiatan CG.',
  },
  {
    q: 'Kapan dan di mana CG diadakan?',
    a: 'Setiap CG memiliki jadwal dan lokasi pertemuan yang berbeda-beda. Umumnya CG diadakan seminggu sekali di rumah anggota, gereja, atau tempat yang sudah disepakati bersama.',
  },
  {
    q: 'Apakah saya bisa pindah CG jika tidak cocok?',
    a: 'Tentu! Kami ingin setiap anggota merasa nyaman dan bertumbuh. Jika Anda merasa kurang cocok dengan satu CG, Anda dapat berkonsultasi dengan koordinator CG untuk dipindahkan ke CG yang lebih sesuai.',
  },
  {
    q: 'Apa yang dilakukan dalam pertemuan CG?',
    a: 'Pertemuan CG biasanya dimulai dengan pujian, pembahasan firman Tuhan, diskusi, saling mendoakan, dan fellowship. Suasananya santai namun penuh dengan pertumbuhan rohani.',
  },
];

/* ─── Components ─── */

function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, i) => {
        const isOpen = openIdx === i;
        return (
          <div
            key={i}
            className={`bg-white rounded-2xl border ${
              isOpen ? 'border-gms-gold shadow-lg' : 'border-gray-200 shadow-sm'
            } transition-all overflow-hidden`}
          >
            <button
              onClick={() => setOpenIdx(isOpen ? null : i)}
              className="w-full flex items-center justify-between p-5 md:p-6 text-left"
            >
              <span className="font-bold text-gms-dark text-sm md:text-base pr-4">{item.q}</span>
              <ChevronDown
                size={20}
                className={`text-gms-gold flex-shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
              <div className="px-5 md:px-6 pb-5 md:pb-6 text-gray-600 leading-relaxed text-sm md:text-base border-t border-gray-100 pt-4">
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
                  link === 'CG'
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

      {/* Banner */}
      <section className="page-hero">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80')",
          }}
        />
        <div className="page-hero-overlay" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            CONNECT <span className="text-gms-gold">GROUP</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Bertumbuh bersama dalam komunitas iman yang saling mendukung
          </p>
        </div>
      </section>

      {/* Apa Itu CG */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="section-title text-3xl md:text-5xl font-bold text-gms-dark mb-6">
            APA ITU CONNECT GROUP?
          </h2>
          <div className="w-20 h-1 bg-gms-gold mx-auto mb-8 rounded-full" />
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Connect Group (CG) adalah komunitas kecil dalam GMS Church di mana setiap orang
            dapat bertumbuh dalam iman, menjalin hubungan yang erat, dan melayani bersama.
            Kami percaya bahwa gereja yang sehat dibangun di atas komunitas-komunitas kecil
            yang saling mengasihi dan mendukung.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mt-6">
            Dalam CG, Anda tidak hanya menjadi penonton — Anda adalah bagian dari keluarga.
            Setiap pertemuan CG adalah kesempatan untuk berbagi, belajar firman Tuhan,
            berdoa bersama, dan menjadi berkat bagi satu sama lain.
          </p>
        </div>
      </section>

      {/* Mengapa Harus Tertanam di CG */}
      <section className="py-20 bg-gms-cream">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title text-3xl md:text-5xl font-bold text-center text-gms-dark mb-4">
            MENGAPA HARUS TERTANAM DI CG?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Lima alasan mengapa Anda perlu menjadi bagian dari Connect Group
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyCG.map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100 hover:border-gms-gold/30"
              >
                <div className="w-14 h-14 rounded-xl bg-gms-dark flex items-center justify-center text-gms-gold mb-5 group-hover:bg-gms-gold group-hover:text-gms-dark transition-all">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg text-gms-dark mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kategori CG */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title text-3xl md:text-5xl font-bold text-center text-gms-dark mb-4">
            KATEGORI CG
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Temukan CG yang sesuai dengan tahap hidup Anda
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {categoryCG.map((cat, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border ${cat.border}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${cat.color} opacity-50`} />
                <div className="relative p-8 text-center">
                  <div className="text-6xl mb-6">{cat.icon}</div>
                  <h3 className="font-serif text-2xl font-bold text-gms-dark mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-gms-gold font-semibold text-sm mb-4">{cat.age}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cara Bergabung */}
      <section className="py-20 bg-gms-dark text-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="section-title text-3xl md:text-5xl font-bold text-center text-gms-gold mb-4">
            BAGAIMANA CARA BERGABUNG CG?
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Empat langkah mudah untuk memulai perjalanan CG Anda
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {stepsBergabung.map((step, i) => (
              <div key={i} className="text-center group">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gms-gold/20 border-2 border-gms-gold flex items-center justify-center text-3xl font-bold text-gms-gold group-hover:bg-gms-gold group-hover:text-gms-dark transition-all mb-5">
                    {step.step}
                  </div>
                  {i < stepsBergabung.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 border-t-2 border-dashed border-gms-gold/30" />
                  )}
                </div>
                <h3 className="font-bold text-lg text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/gms-church-clone/connect"
              className="inline-flex items-center gap-2 bg-gms-gold text-gms-dark px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-all shadow-2xl"
            >
              Gabung CG Sekarang <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="section-title text-3xl md:text-5xl font-bold text-center text-gms-dark mb-4">
            FAQ — CONNECT GROUP
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Pertanyaan yang sering diajukan tentang Connect Group
          </p>

          <Accordion items={faqItems} />
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
