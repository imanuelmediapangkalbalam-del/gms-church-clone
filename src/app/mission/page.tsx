'use client';

import { useState } from 'react';
import {
  Church,
  Target,
  BookOpen,
  MapPin,
  Landmark,
  Copy,
  Check,
  ChevronRight,
} from 'lucide-react';

const regions = [
  {
    name: 'Jawa Timur 1',
    churches: ['GMS Jember', 'GMS Banyuwangi', 'GMS Malang'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
    description: 'Pengembangan gereja di wilayah Jawa Timur bagian timur',
  },
  {
    name: 'Jawa Timur 2',
    churches: ['GMS Bojonegoro', 'GMS Kediri', 'GMS Madiun'],
    image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=600&h=400&fit=crop',
    description: 'Perluasan jangkauan di Jawa Timur bagian barat',
  },
  {
    name: 'Jawa Tengah',
    churches: ['GMS Semarang', 'GMS Solo', 'GMS Yogyakarta'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
    description: 'Membangun gereja di kota-kota Jawa Tengah',
  },
  {
    name: 'Jakarta/Jabar/Banten',
    churches: ['GMS Jakarta', 'GMS Bandung', 'GMS Tangerang'],
    image: 'https://images.unsplash.com/photo-1580584127374-7d5f2b4b4e7b?w=600&h=400&fit=crop',
    description: 'Ekspansi ke wilayah metropolitan dan Jawa Barat',
  },
  {
    name: 'Kalimantan',
    churches: ['GMS Pontianak', 'GMS Banjarmasin', 'GMS Balikpapan'],
    image: 'https://images.unsplash.com/photo-1590519867540-4f1121a6f8d6?w=600&h=400&fit=crop',
    description: 'Misi di pulau Kalimantan',
  },
  {
    name: 'Sulawesi/Maluku/Papua',
    churches: ['GMS Makassar', 'GMS Manado', 'GMS Jayapura'],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop',
    description: 'Membangun gereja di Indonesia Timur',
  },
  {
    name: 'Sumatera',
    churches: ['GMS Medan', 'GMS Palembang', 'GMS Lampung'],
    image: 'https://images.unsplash.com/photo-1591073115439-7f4b5c36a1b5?w=600&h=400&fit=crop',
    description: 'Perluasan gereja di seluruh Sumatera',
  },
];

const missionAccounts = [
  { bank: 'BCA', accountNumber: '123 456 7890', accountName: 'GMS Mission 2030:300' },
  { bank: 'Mandiri', accountNumber: '123-00-9999999-9', accountName: 'GMS Mission 2030:300' },
  { bank: 'BNI', accountNumber: '0198765432', accountName: 'GMS Mission 2030:300' },
];

export default function MissionPage() {
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);
  const [copiedAccount, setCopiedAccount] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(index);
    setTimeout(() => setCopiedAccount(null), 2000);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* BANNER 2030:300 */}
      <section className="relative h-[450px] md:h-[550px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1920&h=600&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gms-dark/95 via-gms-dark/80 to-gms-dark/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,81,0.15)_0%,transparent_70%)]" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-block border-2 border-gms-gold rounded-full px-6 py-1.5 mb-6">
            <span className="text-gms-gold text-sm font-semibold tracking-widest">
              GMS 2030 VISION
            </span>
          </div>
          <h1 className="section-title text-6xl md:text-8xl lg:text-9xl font-bold text-gms-gold mb-4 tracking-tight">
            2030:300
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            300 gereja mandiri pada tahun 2030
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-white/60 text-sm">
            <span className="flex items-center gap-2">
              <Target className="w-4 h-4 text-gms-gold" />
              300 Churches
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="flex items-center gap-2">
              <Church className="w-4 h-4 text-gms-gold" />
              2030 Vision
            </span>
          </div>
        </div>
      </section>

      {/* MISSION DESCRIPTION */}
      <section className="py-16 bg-gms-cream">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-title text-3xl md:text-4xl font-bold text-gms-dark mb-4">
              Misi GMS 2030:300
            </h2>
            <div className="w-20 h-1 bg-gms-gold mx-auto rounded-full" />
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              GMS memiliki visi untuk mendirikan <strong>300 gereja mandiri</strong> pada tahun 2030.
              Visi ini lahir dari kerinduan untuk menjangkau jiwa-jiwa di seluruh Indonesia dan
              dunia, sehingga setiap kota dan daerah memiliki gereja lokal yang kuat dan mandiri.
            </p>
            <p>
              Melalui misi ini, GMS berkomitmen untuk membangun, memberdayakan, dan mengutus
              pemimpin-pemimpin rohani yang akan mendirikan gereja-gereja yang sehat dan
              bertumbuh, yang memberitakan Injil dan memuridkan generasi berikutnya.
            </p>
          </div>

          {/* MATIUS 28:19-20 */}
          <div className="mt-10 bg-white border-l-4 border-gms-gold rounded-xl p-6 md:p-8 shadow-md">
            <div className="flex items-start gap-4">
              <BookOpen className="w-6 h-6 text-gms-gold flex-shrink-0 mt-1" />
              <div>
                <p className="text-gms-dark text-lg md:text-xl italic font-serif leading-relaxed">
                  &ldquo;Karena itu pergilah, jadikanlah semua bangsa murid-Ku dan baptislah
                  mereka dalam nama Bapa dan Anak dan Roh Kudus, dan ajarlah mereka melakukan
                  segala sesuatu yang telah Kuperintahkan kepadamu. Dan ketahuilah, Aku menyertai
                  kamu senantiasa sampai kepada akhir zaman.&rdquo;
                </p>
                <p className="text-gms-gold font-semibold mt-3 text-sm">
                  — Matius 28:19-20
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REGIONAL CHURCH BUILDING */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title text-3xl md:text-4xl font-bold text-gms-dark mb-4">
              Regional Church Building
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Gereja-gereja yang sedang dibangun di berbagai wilayah
            </p>
          </div>

          {/* REGION TABS */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {regions.map((region) => (
              <button
                key={region.name}
                onClick={() => setSelectedRegion(region)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedRegion.name === region.name
                    ? 'bg-gms-dark text-gms-gold shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {region.name}
              </button>
            ))}
          </div>

          {/* SELECTED REGION DETAIL */}
          <div className="bg-gms-cream rounded-2xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-full min-h-[250px]">
                <img
                  src={selectedRegion.image}
                  alt={selectedRegion.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-gms-gold mb-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm font-semibold uppercase tracking-wider">
                    Wilayah
                  </span>
                </div>
                <h3 className="section-title text-2xl md:text-3xl font-bold text-gms-dark mb-3">
                  {selectedRegion.name}
                </h3>
                <p className="text-gray-600 mb-4">{selectedRegion.description}</p>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gms-dark">Gereja dalam pengembangan:</p>
                  {selectedRegion.churches.map((church, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <ChevronRight className="w-4 h-4 text-gms-gold flex-shrink-0" />
                      <span className="text-sm">{church}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FEATURED: GMS JEMBER */}
          <div className="mt-12 bg-gms-dark rounded-2xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2">
              <div className="p-6 md:p-8 text-white flex flex-col justify-center order-2 md:order-1">
                <div className="inline-block bg-gms-gold/20 text-gms-gold text-xs font-semibold px-3 py-1 rounded-full mb-3 w-fit">
                  FEATURED
                </div>
                <h3 className="section-title text-2xl font-bold text-gms-gold mb-3">
                  GMS Jember
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Gereja yang sedang dalam proses pembangunan di kota Jember, Jawa Timur.
                  Bangunan ini akan menjadi pusat ibadah dan kegiatan rohani bagi jemaat
                  di wilayah Jember dan sekitarnya.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gms-gold" />
                    Kapasitas: 1.000 jemaat
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gms-gold" />
                    Lokasi: Jember, Jawa Timur
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gms-gold" />
                    Target selesai: 2026
                  </li>
                </ul>
              </div>
              <div className="h-64 md:h-full min-h-[250px] order-1 md:order-2">
                <img
                  src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=600&h=400&fit=crop"
                  alt="GMS Jember"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DONATION ACCOUNT */}
      <section className="py-16 bg-gms-cream">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-title text-3xl font-bold text-gms-dark mb-4">
              Donasi Misi 2030:300
            </h2>
            <p className="text-gray-500">
              Dukung misi pembangunan gereja melalui donasi Anda
            </p>
          </div>

          <div className="space-y-4">
            {missionAccounts.map((acc, index) => (
              <div
                key={index}
                className="bg-white border border-gms-gold/20 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gms-dark flex items-center justify-center">
                      <Landmark className="w-5 h-5 text-gms-gold" />
                    </div>
                    <div>
                      <p className="font-bold text-gms-dark">{acc.bank}</p>
                      <p className="text-xs text-gray-500">Bank Transfer</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(acc.accountNumber, index)}
                    className="flex items-center gap-1.5 text-xs bg-gms-dark text-gms-gold px-3 py-1.5 rounded-lg hover:bg-opacity-90 transition-all"
                  >
                    {copiedAccount === index ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        Tersalin
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        Salin
                      </>
                    )}
                  </button>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">No. Rekening</span>
                    <span className="font-mono font-bold text-gms-dark text-lg tracking-wider">
                      {acc.accountNumber}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Atas Nama</span>
                    <span className="font-medium text-gms-dark">{acc.accountName}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-400">
              Setiap donasi Anda akan digunakan untuk pembangunan gereja dan pengembangan misi
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
