'use client';

import { useState } from 'react';
import {
  Building2,
  ChevronDown,
  CreditCard,
  Landmark,
  QrCode,
  Copy,
  Check,
} from 'lucide-react';

interface BankInfo {
  bank: string;
  accountNumber: string;
  accountName: string;
}

interface LocationData {
  name: string;
  banks: BankInfo[];
  qrisImage?: string;
}

const locations: LocationData[] = [
  {
    name: 'Surabaya',
    banks: [
      { bank: 'BCA', accountNumber: '7890 123 456', accountName: 'GMS Surabaya' },
      { bank: 'Mandiri', accountNumber: '123-00-7890123-4', accountName: 'GMS Surabaya' },
      { bank: 'BNI', accountNumber: '0123456789', accountName: 'GMS Surabaya' },
    ],
    qrisImage: 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=GMS-Surabaya',
  },
  {
    name: 'Bali',
    banks: [
      { bank: 'BCA', accountNumber: '7890 123 457', accountName: 'GMS Bali' },
      { bank: 'Mandiri', accountNumber: '123-00-7890124-5', accountName: 'GMS Bali' },
    ],
    qrisImage: 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=GMS-Bali',
  },
  {
    name: 'Jakarta',
    banks: [
      { bank: 'BCA', accountNumber: '7890 123 458', accountName: 'GMS Jakarta' },
      { bank: 'Mandiri', accountNumber: '123-00-7890125-6', accountName: 'GMS Jakarta' },
      { bank: 'BNI', accountNumber: '0123456790', accountName: 'GMS Jakarta' },
    ],
    qrisImage: 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=GMS-Jakarta',
  },
  {
    name: 'Jateng',
    banks: [
      { bank: 'BCA', accountNumber: '7890 123 459', accountName: 'GMS Jateng' },
      { bank: 'Mandiri', accountNumber: '123-00-7890126-7', accountName: 'GMS Jateng' },
    ],
    qrisImage: 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=GMS-Jateng',
  },
  {
    name: 'Jatim 1',
    banks: [
      { bank: 'BCA', accountNumber: '7890 123 460', accountName: 'GMS Jatim 1' },
      { bank: 'Mandiri', accountNumber: '123-00-7890127-8', accountName: 'GMS Jatim 1' },
    ],
    qrisImage: 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=GMS-Jatim1',
  },
  {
    name: 'Jatim 2',
    banks: [
      { bank: 'BCA', accountNumber: '7890 123 461', accountName: 'GMS Jatim 2' },
      { bank: 'Mandiri', accountNumber: '123-00-7890128-9', accountName: 'GMS Jatim 2' },
    ],
    qrisImage: 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=GMS-Jatim2',
  },
  {
    name: 'Kalimantan',
    banks: [
      { bank: 'BCA', accountNumber: '7890 123 462', accountName: 'GMS Kalimantan' },
      { bank: 'Mandiri', accountNumber: '123-00-7890129-0', accountName: 'GMS Kalimantan' },
    ],
    qrisImage: 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=GMS-Kalimantan',
  },
  {
    name: 'Sulawesi',
    banks: [
      { bank: 'BCA', accountNumber: '7890 123 463', accountName: 'GMS Sulawesi' },
      { bank: 'Mandiri', accountNumber: '123-00-7890130-1', accountName: 'GMS Sulawesi' },
    ],
    qrisImage: 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=GMS-Sulawesi',
  },
  {
    name: 'Sumatra',
    banks: [
      { bank: 'BCA', accountNumber: '7890 123 464', accountName: 'GMS Sumatra' },
      { bank: 'Mandiri', accountNumber: '123-00-7890131-2', accountName: 'GMS Sumatra' },
    ],
    qrisImage: 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=GMS-Sumatra',
  },
  {
    name: 'Asia',
    banks: [
      { bank: 'BCA', accountNumber: '7890 123 465', accountName: 'GMS Asia' },
    ],
    qrisImage: 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=GMS-Asia',
  },
  {
    name: 'Australia',
    banks: [
      { bank: 'Commonwealth', accountNumber: '1234 5678 9012', accountName: 'GMS Australia' },
    ],
    qrisImage: 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=GMS-Australia',
  },
  {
    name: 'Europe',
    banks: [
      { bank: 'ING', accountNumber: 'NL12INGB0001234567', accountName: 'GMS Europe' },
    ],
    qrisImage: 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=GMS-Europe',
  },
  {
    name: 'USA & Canada',
    banks: [
      { bank: 'Chase', accountNumber: '123456789', accountName: 'GMS USA & Canada' },
    ],
    qrisImage: 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=GMS-USA-Canada',
  },
];

export default function GivePage() {
  const [activeTab, setActiveTab] = useState<'bank' | 'credit'>('bank');
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="page-hero bg-gms-dark">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1920&h=500&fit=crop')",
          }}
        />
        <div className="page-hero-overlay" />
        <div className="relative z-10 text-center px-4">
          <h1 className="section-title text-4xl md:text-6xl font-bold text-gms-gold mb-4">
            MEMBERI
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Berikan persembahan terbaikmu untuk kemuliaan Tuhan
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        {/* TAB TOGGLE */}
        <div className="flex bg-gray-100 rounded-xl p-1.5 mb-10 max-w-md mx-auto">
          <button
            onClick={() => setActiveTab('bank')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium text-sm transition-all ${
              activeTab === 'bank'
                ? 'bg-white text-gms-dark shadow-md'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Landmark className="w-4 h-4" />
            Transfer Bank & QRIS
          </button>
          <button
            onClick={() => setActiveTab('credit')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium text-sm transition-all ${
              activeTab === 'credit'
                ? 'bg-white text-gms-dark shadow-md'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <CreditCard className="w-4 h-4" />
            Kartu Kredit
          </button>
        </div>

        {activeTab === 'bank' ? (
          <>
            {/* LOCATION DROPDOWN */}
            <div className="relative mb-8 max-w-md mx-auto">
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Pilih Lokasi Gereja
              </label>
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="w-full flex items-center justify-between bg-white border-2 border-gms-gold/30 rounded-xl px-5 py-3.5 text-left hover:border-gms-gold transition-colors"
              >
                <span className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-gms-gold" />
                  <span className="font-medium text-gms-dark">
                    {selectedLocation.name}
                  </span>
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gms-gold transition-transform ${
                    showDropdown ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {showDropdown && (
                <div className="absolute z-20 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-xl max-h-60 overflow-y-auto">
                  {locations.map((loc) => (
                    <button
                      key={loc.name}
                      onClick={() => {
                        setSelectedLocation(loc);
                        setShowDropdown(false);
                      }}
                      className={`w-full text-left px-5 py-3 hover:bg-gms-cream transition-colors text-sm ${
                        selectedLocation.name === loc.name
                          ? 'bg-gms-cream text-gms-dark font-semibold'
                          : 'text-gray-700'
                      }`}
                    >
                      {loc.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* BANK INFO CARDS */}
            <div className="space-y-4 mb-10">
              <h3 className="section-title text-xl font-bold text-gms-dark text-center mb-6">
                Rekening {selectedLocation.name}
              </h3>
              {selectedLocation.banks.map((info, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-gms-cream to-white border border-gms-gold/20 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gms-dark flex items-center justify-center">
                        <Landmark className="w-5 h-5 text-gms-gold" />
                      </div>
                      <div>
                        <p className="font-bold text-gms-dark">{info.bank}</p>
                        <p className="text-xs text-gray-500">Bank Transfer</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopy(info.accountNumber, index)}
                      className="flex items-center gap-1.5 text-xs bg-gms-dark text-gms-gold px-3 py-1.5 rounded-lg hover:bg-opacity-90 transition-all"
                    >
                      {copiedIndex === index ? (
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
                        {info.accountNumber}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Atas Nama</span>
                      <span className="font-medium text-gms-dark">{info.accountName}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* QRIS SECTION */}
            <div className="bg-gms-dark rounded-2xl p-8 text-center shadow-xl">
              <h3 className="section-title text-2xl font-bold text-gms-gold mb-2">
                QRIS
              </h3>
              <p className="text-white/60 text-sm mb-6">
                Scan QR Code untuk donasi via e-wallet / mobile banking
              </p>
              <div className="inline-block bg-white rounded-xl p-4 shadow-inner">
                <img
                  src={selectedLocation.qrisImage || 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=GMS'}
                  alt="QRIS Code"
                  className="w-48 h-48 md:w-56 md:h-56 mx-auto"
                />
              </div>
              <p className="text-white/50 text-xs mt-4">
                QRIS tersedia untuk {selectedLocation.name}
              </p>
              <div className="mt-6 flex items-center justify-center gap-2">
                <QrCode className="w-5 h-5 text-gms-gold" />
                <span className="text-white/80 text-sm">
                  Scan dengan aplikasi perbankan apa pun
                </span>
              </div>
            </div>
          </>
        ) : (
          /* CREDIT CARD TAB */
          <div className="max-w-md mx-auto">
            <div className="bg-gradient-to-br from-gms-dark to-gray-900 rounded-2xl p-8 text-white shadow-xl mb-8">
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="w-8 h-8 text-gms-gold" />
                <h3 className="section-title text-xl font-bold text-gms-gold">
                  Kartu Kredit / Debit
                </h3>
              </div>
              <p className="text-white/70 text-sm mb-6">
                Donasi dengan kartu kredit atau debit Anda secara aman.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs text-white/60 mb-1.5">Nomor Kartu</label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-gms-gold"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-white/60 mb-1.5">Masa Berlaku</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-gms-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/60 mb-1.5">CVV</label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-gms-gold"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-white/60 mb-1.5">Nama di Kartu</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-gms-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs text-white/60 mb-1.5">Jumlah Donasi</label>
                  <input
                    type="text"
                    placeholder="Rp 500.000"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-gms-gold"
                  />
                </div>
                <button className="w-full bg-gms-gold text-gms-dark font-bold py-3.5 rounded-lg hover:bg-opacity-90 transition-all mt-2">
                    Lanjutkan Pembayaran
                </button>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xs text-gray-400 flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                Pembayaran aman dengan enkripsi SSL
              </p>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
