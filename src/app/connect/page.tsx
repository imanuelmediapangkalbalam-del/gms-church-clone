'use client';

import { useState } from 'react';
import { Check, Send, Heart, Cross, Users, MessageCircle, BookOpen, Church, Baby } from 'lucide-react';

/* ─── Data ─── */

const checkboxOptions = [
  { id: 'yesus', label: 'Terima Yesus', icon: <Heart size={18} /> },
  { id: 'baptis', label: 'Baptis', icon: <Cross size={18} /> },
  { id: 'cg', label: 'Bergabung CG', icon: <Users size={18} /> },
  { id: 'kesaksian', label: 'Kesaksian', icon: <MessageCircle size={18} /> },
  { id: 'doa', label: 'Doa / Konseling', icon: <BookOpen size={18} /> },
  { id: 'nikah', label: 'Pemberkatan Nikah', icon: <Church size={18} /> },
  { id: 'anak', label: 'Penyerahan Anak', icon: <Baby size={18} /> },
];

/* ─── Main Page ─── */

export default function ConnectPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const [form, setForm] = useState({ nama: '', email: '', phone: '', pesan: '' });
  const [submitted, setSubmitted] = useState(false);

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulasi submit
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelected([]);
      setForm({ nama: '', email: '', phone: '', pesan: '' });
    }, 3000);
  };

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
                  link === 'TERHUBUNG'
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

      {/* Hero */}
      <section className="page-hero">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=1920&q=80')",
          }}
        />
        <div className="page-hero-overlay" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            TERHUBUNG <span className="text-gms-gold">DENGAN KAMI</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Kami ingin mendengar Anda. Isi form di bawah dan tim kami akan menghubungi Anda.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-gms-dark to-[#2a2a4e] p-8 md:p-10 text-white text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3">
                Ada yang bisa kami bantu?
              </h2>
              <p className="text-gray-300 max-w-lg mx-auto">
                Pilih salah satu atau beberapa opsi di bawah ini, lalu lengkapi data diri Anda
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 md:p-10">
              {/* Checkboxes */}
              <div className="mb-8">
                <label className="block text-sm font-bold text-gms-dark mb-4 uppercase tracking-wider">
                  Apa yang ingin Anda lakukan?
                </label>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {checkboxOptions.map((opt) => {
                    const isChecked = selected.includes(opt.id);
                    return (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => toggle(opt.id)}
                        className={`flex items-center gap-3 px-4 py-4 rounded-xl border-2 transition-all text-left ${
                          isChecked
                            ? 'border-gms-gold bg-gms-gold/10 shadow-md'
                            : 'border-gray-200 bg-white hover:border-gray-300'
                        }`}
                      >
                        <div
                          className={`w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 transition-all ${
                            isChecked
                              ? 'bg-gms-gold text-white'
                              : 'border-2 border-gray-300'
                          }`}
                        >
                          {isChecked && <Check size={14} />}
                        </div>
                        <span className="flex items-center gap-2 text-sm font-semibold text-gms-dark">
                          {opt.icon}
                          {opt.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-gms-dark mb-2">
                    Nama Lengkap <span className="text-gms-maroon">*</span>
                  </label>
                  <input
                    type="text"
                    name="nama"
                    value={form.nama}
                    onChange={handleChange}
                    required
                    placeholder="Masukkan nama lengkap Anda"
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-gms-gold focus:outline-none bg-gray-50 text-base transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gms-dark mb-2">
                    Email <span className="text-gms-maroon">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="Masukkan email Anda"
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-gms-gold focus:outline-none bg-gray-50 text-base transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gms-dark mb-2">
                    Nomor Telepon / WA <span className="text-gms-maroon">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="0812-3456-7890"
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-gms-gold focus:outline-none bg-gray-50 text-base transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gms-dark mb-2">
                    Pesan / Catatan
                  </label>
                  <textarea
                    name="pesan"
                    value={form.pesan}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tulis pesan Anda di sini..."
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-gms-gold focus:outline-none bg-gray-50 text-base transition-all resize-none"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="mt-8">
                <button
                  type="submit"
                  disabled={submitted}
                  className={`w-full flex items-center justify-center gap-3 py-5 rounded-xl font-bold text-lg transition-all shadow-lg ${
                    submitted
                      ? 'bg-green-500 text-white cursor-not-allowed'
                      : 'bg-gms-dark text-white hover:bg-gms-gold hover:text-gms-dark'
                  }`}
                >
                  {submitted ? (
                    <>
                      <Check size={22} />
                      Terkirim!
                    </>
                  ) : (
                    <>
                      <Send size={22} />
                      Kirim
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Info tambahan */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
              <div className="w-14 h-14 mx-auto rounded-full bg-gms-gold/20 flex items-center justify-center mb-4">
                <Heart size={24} className="text-gms-gold" />
              </div>
              <h4 className="font-bold text-gms-dark mb-2">Doa &amp; Konseling</h4>
              <p className="text-gray-500 text-sm">
                Kami siap mendoakan dan memberikan konseling rohani bagi Anda
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
              <div className="w-14 h-14 mx-auto rounded-full bg-gms-gold/20 flex items-center justify-center mb-4">
                <MessageCircle size={24} className="text-gms-gold" />
              </div>
              <h4 className="font-bold text-gms-dark mb-2">Kesaksian</h4>
              <p className="text-gray-500 text-sm">
                Bagikan kesaksian Anda tentang kebaikan Tuhan dalam hidup Anda
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
              <div className="w-14 h-14 mx-auto rounded-full bg-gms-gold/20 flex items-center justify-center mb-4">
                <Users size={24} className="text-gms-gold" />
              </div>
              <h4 className="font-bold text-gms-dark mb-2">Bergabung CG</h4>
              <p className="text-gray-500 text-sm">
                Temukan keluarga rohani Anda melalui Connect Group
              </p>
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
