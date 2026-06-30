'use client';

import { useState } from 'react';
import {
  Heart,
  MessageCircle,
  Camera,
  Users,
  Baby,
  GraduationCap,
  Home,
  Settings,
  Monitor,
  Languages,
  Film,
  Music,
  HandHeart,
  Volume2,
  ChevronRight,
} from 'lucide-react';

interface Ministry {
  id: string;
  name: string;
  icon: React.ElementType;
  description: string;
  responsibilities: string[];
}

const ministries: Ministry[] = [
  {
    id: 'communication',
    name: 'Communication',
    icon: MessageCircle,
    description:
      'Bertanggung jawab atas komunikasi internal dan eksternal gereja, termasuk publikasi, hubungan masyarakat, dan penyebaran informasi kegiatan gereja kepada jemaat dan masyarakat luas.',
    responsibilities: [
      'Mengelola publikasi dan media relations',
      'Menyusun buletin dan materi komunikasi',
      'Mengkoordinasikan informasi kegiatan gereja',
    ],
  },
  {
    id: 'creative-production',
    name: 'Creative Production',
    icon: Camera,
    description:
      'Menghasilkan konten kreatif untuk mendukung ibadah dan kegiatan gereja, termasuk desain grafis, produksi video, dan materi visual lainnya.',
    responsibilities: [
      'Produksi konten visual dan multimedia',
      'Desain grafis untuk materi ibadah',
      'Pengembangan branding gereja',
    ],
  },
  {
    id: 'crowd-management',
    name: 'Crowd Management',
    icon: Users,
    description:
      'Mengelola arus jemaat dan tamu selama ibadah dan acara gereja untuk memastikan keamanan, kenyamanan, dan ketertiban.',
    responsibilities: [
      'Pengaturan parkir dan lalu lintas jemaat',
      'Koordinasi keamanan acara',
      'Penanganan situasi darurat',
    ],
  },
  {
    id: 'eaglekidz',
    name: 'Eaglekidz',
    icon: Baby,
    description:
      'Melayani anak-anak dengan mengajarkan nilai-nilai kebenaran Firman Tuhan melalui metode yang kreatif dan menyenangkan sesuai dengan usia mereka.',
    responsibilities: [
      'Mengajar sekolah minggu',
      'Menyelenggarakan acara anak',
      'Pembinaan rohani anak-anak',
    ],
  },
  {
    id: 'education',
    name: 'Education',
    icon: GraduationCap,
    description:
      'Menyediakan pendidikan rohani yang sistematis bagi jemaat melalui sekolah Alkitab, seminar, dan berbagai program pembelajaran.',
    responsibilities: [
      'Menyelenggarakan sekolah Alkitab',
      'Mengelola program pembelajaran',
      'Pengembangan kurikulum rohani',
    ],
  },
  {
    id: 'family-life',
    name: 'Family Life & Counseling',
    icon: Home,
    description:
      'Memberikan dukungan dan konseling bagi keluarga, pernikahan, dan individu yang membutuhkan bimbingan rohani.',
    responsibilities: [
      'Konseling pra-nikah',
      'Pendampingan keluarga',
      'Konseling pribadi dan rohani',
    ],
  },
  {
    id: 'general-affair',
    name: 'General Affair',
    icon: Settings,
    description:
      'Mengelola urusan administrasi dan fasilitas gereja untuk mendukung kelancaran operasional dan kegiatan gereja sehari-hari.',
    responsibilities: [
      'Pengelolaan fasilitas gereja',
      'Administrasi umum',
      'Koordinasi logistik acara',
    ],
  },
  {
    id: 'ict',
    name: 'ICT',
    icon: Monitor,
    description:
      'Mengelola teknologi informasi dan komunikasi gereja, termasuk sistem komputer, jaringan, dan perangkat lunak yang mendukung operasional gereja.',
    responsibilities: [
      'Pengelolaan sistem informasi gereja',
      'Dukungan IT untuk ibadah',
      'Pengembangan platform digital',
    ],
  },
  {
    id: 'interpreter',
    name: 'Interpreter',
    icon: Languages,
    description:
      'Menyediakan layanan interpretasi bahasa untuk jemaat dan tamu internasional selama ibadah dan acara gereja.',
    responsibilities: [
      'Interpretasi bahasa asing',
      'Penerjemahan materi ibadah',
      'Pelayanan jemaat internasional',
    ],
  },
  {
    id: 'multimedia',
    name: 'Multimedia',
    icon: Film,
    description:
      'Mengelola peralatan multimedia dan teknis selama ibadah, termasuk sound system, pencahayaan, dan tampilan visual.',
    responsibilities: [
      'Pengoperasian peralatan multimedia',
      'Tata cahaya dan suara',
      'Streaming ibadah online',
    ],
  },
  {
    id: 'praise-worship',
    name: 'Praise & Worship',
    icon: Music,
    description:
      'Memimpin pujian dan penyembahan dalam setiap ibadah, menciptakan atmosfer yang menyentuh hati jemaat untuk beribadah kepada Tuhan.',
    responsibilities: [
      'Memimpin pujian dan penyembahan',
      'Pelatihan tim musik',
      'Pengembangan lagu-lagu rohani',
    ],
  },
  {
    id: 'prayer',
    name: 'Prayer',
    icon: HandHeart,
    description:
      'Menggerakkan kehidupan doa jemaat melalui berbagai kegiatan doa, dari doa syafaat hingga doa malam.',
    responsibilities: [
      'Memimpin doa syafaat',
      'Menyelenggarakan malam doa',
      'Pembinaan kehidupan doa',
    ],
  },
  {
    id: 'sound',
    name: 'Sound',
    icon: Volume2,
    description:
      'Mengelola sistem audio gereja untuk memastikan kualitas suara yang optimal dalam setiap ibadah dan acara.',
    responsibilities: [
      'Pengoperasian sound system',
      'Perawatan peralatan audio',
      'Teknik mixing dan recording',
    ],
  },
];

export default function MinistryPage() {
  const [activeMinistry, setActiveMinistry] = useState(ministries[0]);

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="page-hero bg-gms-dark">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&h=500&fit=crop')",
          }}
        />
        <div className="page-hero-overlay" />
        <div className="relative z-10 text-center px-4">
          <h1 className="section-title text-4xl md:text-6xl font-bold text-gms-gold mb-4">
            PELAYANAN
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Melayani Tuhan dengan segenap hati, jiwa, dan kekuatan
          </p>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="py-16 bg-gms-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-gms-dark mb-6">
            Melayani Bersama GMS
          </h2>
          <div className="w-20 h-1 bg-gms-gold mx-auto rounded-full mb-6" />
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Di GMS, setiap jemaat dipanggil untuk terlibat dalam pelayanan sesuai dengan
            talenta dan karunia yang Tuhan berikan. Kami percaya bahwa setiap orang memiliki
            peran penting dalam membangun tubuh Kristus. Temukan tempat pelayananmu dan
            bertumbuhlah bersama kami.
          </p>
        </div>
      </section>

      {/* MINISTRY STEP IMAGE */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&h=400&fit=crop"
              alt="Ministry Steps"
              className="w-full h-48 md:h-72 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gms-dark/80 via-transparent to-gms-dark/80" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <Heart className="w-10 h-10 md:w-14 md:h-14 text-gms-gold mx-auto mb-3" />
                <h3 className="section-title text-xl md:text-3xl font-bold">
                  Langkah-langkah Pelayanan
                </h3>
                <p className="text-white/70 text-sm md:text-base mt-2">
                  Temukan, Kembangkan, dan Berdampak
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PELAYANAN KAMI */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-title text-3xl md:text-4xl font-bold text-gms-dark mb-4">
              PELAYANAN KAMI
            </h2>
            <div className="w-20 h-1 bg-gms-gold mx-auto rounded-full" />
          </div>

          {/* MINISTRY TAB BUTTONS */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {ministries.map((ministry) => {
              const Icon = ministry.icon;
              return (
                <button
                  key={ministry.id}
                  onClick={() => setActiveMinistry(ministry)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    activeMinistry.id === ministry.id
                      ? 'bg-gms-dark text-gms-gold shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {ministry.name}
                </button>
              );
            })}
          </div>

          {/* MINISTRY DETAIL */}
          <div className="bg-gms-cream rounded-2xl p-6 md:p-10 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gms-dark flex items-center justify-center flex-shrink-0">
                {(() => {
                  const Icon = activeMinistry.icon;
                  return <Icon className="w-7 h-7 text-gms-gold" />;
                })()}
              </div>
              <div>
                <h3 className="section-title text-2xl font-bold text-gms-dark">
                  {activeMinistry.name}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  Pelayanan
                </p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              {activeMinistry.description}
            </p>

            <div>
              <h4 className="font-semibold text-gms-dark mb-3 text-sm uppercase tracking-wider">
                Tanggung Jawab
              </h4>
              <ul className="space-y-2">
                {activeMinistry.responsibilities.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <ChevronRight className="w-4 h-4 text-gms-gold flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SERVOLUTION SECTION */}
      <section className="py-16 bg-gms-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&h=600&fit=crop')",
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block border border-gms-gold rounded-full px-5 py-1 mb-6">
            <span className="text-gms-gold text-sm font-semibold tracking-widest">
              SERVOLUTION
            </span>
          </div>
          <h2 className="section-title text-3xl md:text-5xl font-bold text-gms-gold mb-6">
            Revolusi Melayani
          </h2>
          <p className="text-white/70 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Servolution adalah gerakan pelayanan yang mengubah cara pandang kita tentang
            melayani. Bukan sekadar tugas, tetapi panggilan hati untuk menjadi berkat
            bagi sesama. Bersama-sama kita menciptakan revolusi kasih melalui tindakan
            nyata.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Heart className="w-8 h-8 text-gms-gold mx-auto mb-3" />
              <h3 className="font-bold text-gms-gold mb-2">Melayani dengan Hati</h3>
              <p className="text-white/60 text-sm">
                Pelayanan yang lahir dari kasih yang tulus kepada Tuhan dan sesama
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Users className="w-8 h-8 text-gms-gold mx-auto mb-3" />
              <h3 className="font-bold text-gms-gold mb-2">Bersama-sama</h3>
              <p className="text-white/60 text-sm">
                Melayani dalam komunitas, saling mendukung dan bertumbuh bersama
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Settings className="w-8 h-8 text-gms-gold mx-auto mb-3" />
              <h3 className="font-bold text-gms-gold mb-2">Berdampak</h3>
              <p className="text-white/60 text-sm">
                Setiap pelayanan membawa dampak positif bagi gereja dan masyarakat
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
