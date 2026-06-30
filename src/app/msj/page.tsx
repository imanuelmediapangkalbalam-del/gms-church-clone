'use client';

import { useState } from 'react';
import {
  Compass,
  BookOpen,
  CheckCircle,
  ChevronRight,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

const stages = [
  {
    id: 'msj1',
    level: 'MSJ 1',
    title: 'Jiwa Baru',
    subtitle: 'Dasar-dasar Iman Kristen',
    image: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=600&h=400&fit=crop',
    description:
      'MSJ 1 dirancang bagi jiwa-jiwa baru yang baru menerima Tuhan Yesus sebagai Juruselamat pribadi. Tahapan ini memberikan pemahaman dasar tentang iman Kristen, keselamatan, dan langkah awal pertumbuhan rohani.',
    requirements: [
      'Sudah menerima Yesus sebagai Tuhan dan Juruselamat pribadi',
      'Bersedia mengikuti seluruh rangkaian pembelajaran',
      'Memiliki kerinduan untuk bertumbuh dalam Tuhan',
      'Mengikuti kelas secara konsisten (6 pertemuan)',
      'Menyelesaikan tugas-tugas yang diberikan',
    ],
    gradient: 'from-emerald-500 to-teal-700',
  },
  {
    id: 'msj2',
    level: 'MSJ 2',
    title: 'Jemaat Bertumbuh',
    subtitle: 'Kedewasaan Rohani',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop',
    description:
      'MSJ 2 adalah kelanjutan bagi jemaat yang ingin bertumbuh lebih dalam. Tahapan ini membahas kehidupan rohani yang lebih dewasa, termasuk kehidupan doa, studi Alkitab, dan pelayanan dasar.',
    requirements: [
      'Telah menyelesaikan MSJ 1',
      'Memiliki kehidupan doa pribadi yang teratur',
      'Aktif dalam komunitas Connect Group',
      'Bersedia menjadi teladan bagi jiwa baru',
      'Mengikuti kelas secara konsisten (8 pertemuan)',
      'Memiliki kesaksian pertumbuhan rohani',
    ],
    gradient: 'from-blue-500 to-indigo-700',
  },
  {
    id: 'msj3',
    level: 'MSJ 3',
    title: 'Pemimpin / Calon Pemimpin',
    subtitle: 'Dipanggil untuk Memimpin',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
    description:
      'MSJ 3 diperuntukkan bagi jemaat yang dipanggil menjadi pemimpin atau calon pemimpin dalam gereja. Tahapan ini mempersiapkan peserta untuk mengambil tanggung jawab kepemimpinan rohani yang lebih besar.',
    requirements: [
      'Telah menyelesaikan MSJ 1 dan MSJ 2',
      'Aktif melayani di salah satu departemen gereja',
      'Memiliki karakter dan integritas sebagai pemimpin',
      'Rekomendasi dari gembala atau koordinator pelayanan',
      'Bersedia dibimbing dan dibina lebih lanjut',
      'Mengikuti kelas secara konsisten (10 pertemuan)',
      'Menjalani proses mentoring dengan pembimbing',
      'Lulus evaluasi kepemimpinan',
    ],
    gradient: 'from-gms-gold to-amber-700',
  },
];

export default function MsjPage() {
  const [activeStage, setActiveStage] = useState(stages[0]);

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="page-hero bg-gms-dark">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1920&h=500&fit=crop')",
          }}
        />
        <div className="page-hero-overlay" />
        <div className="relative z-10 text-center px-4">
          <div className="inline-flex items-center gap-2 bg-gms-gold/20 border border-gms-gold/40 rounded-full px-4 py-1.5 mb-4">
            <Compass className="w-4 h-4 text-gms-gold" />
            <span className="text-gms-gold text-xs font-semibold tracking-wider">
              MY SPIRITUAL JOURNEY
            </span>
          </div>
          <h1 className="section-title text-4xl md:text-6xl font-bold text-gms-gold mb-4">
            My Spiritual Journey
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Sistem pembelajaran rohani yang sistematis untuk setiap tahap pertumbuhan iman
          </p>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="py-16 bg-gms-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block bg-gms-dark text-gms-gold text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Sistem Pembelajaran
          </div>
          <h2 className="section-title text-3xl md:text-4xl font-bold text-gms-dark mb-6">
            Bertumbuh dalam Iman
          </h2>
          <div className="w-20 h-1 bg-gms-gold mx-auto rounded-full mb-6" />
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            My Spiritual Journey (MSJ) adalah sistem pembelajaran rohani yang dirancang
            untuk membimbing setiap jemaat dalam perjalanan iman mereka. Dari jiwa baru
            hingga menjadi pemimpin, setiap tahapan dirancang untuk memperlengkapi dan
            memperkuat dasar iman, karakter, dan panggilan hidup dalam Kristus.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
              <BookOpen className="w-4 h-4 text-gms-gold" />
              <span className="text-gray-600">Pembelajaran Sistematis</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
              <CheckCircle className="w-4 h-4 text-gms-gold" />
              <span className="text-gray-600">Berbasis Komunitas</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
              <Sparkles className="w-4 h-4 text-gms-gold" />
              <span className="text-gray-600">Berfokus pada Pertumbuhan</span>
            </div>
          </div>
        </div>
      </section>

      {/* STAGES STEPS VISUAL */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            {stages.map((stage, index) => (
              <div key={stage.id} className="flex items-center">
                <button
                  onClick={() => setActiveStage(stage)}
                  className={`flex flex-col items-center p-4 rounded-xl transition-all ${
                    activeStage.id === stage.id
                      ? 'bg-gms-dark scale-105 shadow-xl'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2 bg-gradient-to-br ${stage.gradient}`}
                  >
                    {index + 1}
                  </div>
                  <span
                    className={`text-sm font-semibold ${
                      activeStage.id === stage.id ? 'text-gms-gold' : 'text-gray-600'
                    }`}
                  >
                    {stage.level}
                  </span>
                  <span
                    className={`text-xs ${
                      activeStage.id === stage.id ? 'text-white/70' : 'text-gray-400'
                    }`}
                  >
                    {stage.title}
                  </span>
                </button>
                {index < stages.length - 1 && (
                  <ArrowRight className="hidden md:block w-6 h-6 text-gray-300 mx-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIVE STAGE DETAIL */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            <div className="grid md:grid-cols-5">
              {/* IMAGE */}
              <div className="md:col-span-2 h-64 md:h-full min-h-[250px] relative">
                <img
                  src={activeStage.image}
                  alt={activeStage.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gms-dark/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div
                    className={`inline-block bg-gradient-to-br ${activeStage.gradient} text-white text-xs font-bold px-3 py-1 rounded-full`}
                  >
                    {activeStage.level}
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="md:col-span-3 p-6 md:p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${activeStage.gradient} flex items-center justify-center text-white font-bold text-sm`}
                  >
                    {stages.indexOf(activeStage) + 1}
                  </div>
                  <div>
                    <h3 className="section-title text-xl md:text-2xl font-bold text-gms-dark">
                      {activeStage.level}: {activeStage.title}
                    </h3>
                    <p className="text-sm text-gms-gold font-medium">
                      {activeStage.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed text-sm mb-6">
                  {activeStage.description}
                </p>

                <div>
                  <h4 className="font-bold text-gms-dark mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gms-gold" />
                    Syarat Pendaftaran
                  </h4>
                  <ul className="space-y-3">
                    {activeStage.requirements.map((req, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-gray-700 group"
                      >
                        <div className="w-5 h-5 rounded-full border-2 border-gms-gold flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-gms-gold group-hover:text-white transition-all">
                          <CheckCircle className="w-3 h-3" />
                        </div>
                        <span className="text-sm leading-relaxed">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="mt-8 inline-flex items-center gap-2 bg-gms-dark text-gms-gold border border-gms-gold px-6 py-3 rounded-lg font-medium hover:bg-gms-gold hover:text-gms-dark transition-all text-sm">
                  Daftar {activeStage.level}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY OVERVIEW */}
      <section className="py-16 bg-gms-cream">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-title text-3xl font-bold text-gms-dark mb-4">
              Perjalanan Iman Anda
            </h2>
            <div className="w-20 h-1 bg-gms-gold mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {stages.map((stage, index) => (
              <div
                key={stage.id}
                className={`relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow ${
                  activeStage.id === stage.id ? 'ring-2 ring-gms-gold' : ''
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${stage.gradient} flex items-center justify-center text-white font-bold mb-4`}
                >
                  {index + 1}
                </div>
                <h3 className="section-title text-lg font-bold text-gms-dark mb-1">
                  {stage.level}
                </h3>
                <p className="text-gms-gold font-medium text-sm mb-3">{stage.title}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {stage.description.length > 120
                    ? stage.description.substring(0, 120) + '...'
                    : stage.description}
                </p>
                <button
                  onClick={() => setActiveStage(stage)}
                  className={`mt-4 text-sm font-medium flex items-center gap-1 ${
                    activeStage.id === stage.id
                      ? 'text-gms-gold'
                      : 'text-gray-400 hover:text-gms-gold'
                  } transition-colors`}
                >
                  Selengkapnya
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gms-dark">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="section-title text-3xl font-bold text-gms-gold mb-4">
            Mulai Perjalanan Rohani Anda
          </h2>
          <p className="text-white/60 mb-8">
            Bergabunglah dengan MSJ dan alami pertumbuhan iman yang nyata
          </p>
          <button className="bg-gms-gold text-gms-dark font-bold px-8 py-3.5 rounded-lg hover:bg-opacity-90 transition-all inline-flex items-center gap-2">
            <Compass className="w-5 h-5" />
            Daftar Sekarang
          </button>
        </div>
      </section>
    </main>
  );
}
