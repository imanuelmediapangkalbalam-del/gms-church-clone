'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Check, Send, Heart, Cross, Users, MessageCircle,
  BookOpen, Church, Baby, Sparkles, ArrowRight, Star,
  Phone, Mail, MapPin
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

const checkboxOptions = [
  { id: 'yesus', label: 'Menerima Tuhan Yesus', icon: <Heart size={18} />, desc: 'Saya ingin menerima Yesus sebagai Tuhan dan Juruselamat pribadi' },
  { id: 'baptis', label: 'Baptis', icon: <Cross size={18} />, desc: 'Saya ingin mendaftar untuk baptisan' },
  { id: 'cg', label: 'Gabung Connect Group', icon: <Users size={18} />, desc: 'Saya ingin bergabung dengan Connect Group' },
  { id: 'kesaksian', label: 'Testimoni / Kesaksian', icon: <MessageCircle size={18} />, desc: 'Saya ingin membagikan kesaksian' },
  { id: 'doa', label: 'Permintaan Doa / Konseling', icon: <BookOpen size={18} />, desc: 'Saya membutuhkan doa atau konseling' },
  { id: 'nikah', label: 'Pemberkatan Pernikahan', icon: <Church size={18} />, desc: 'Saya ingin mendaftar pemberkatan nikah' },
  { id: 'anak', label: 'Penyerahan Anak', icon: <Baby size={18} />, desc: 'Saya ingin menyerahkan anak kepada Tuhan' },
];

const contactInfo = [
  { icon: <Phone size={20} />, label: 'Telepon', value: '+62 31 1234 5678' },
  { icon: <Mail size={20} />, label: 'Email', value: 'info@gms.church' },
  { icon: <MapPin size={20} />, label: 'Alamat', value: 'Jl. Raya Gubeng No. 98, Surabaya' },
];

/* ─── Main Page ─── */
export default function ConnectPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const [form, setForm] = useState({ nama: '', email: '', phone: '', pesan: '' });
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1); // 1=checkboxes, 2=form

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelected([]);
      setForm({ nama: '', email: '', phone: '', pesan: '' });
      setStep(1);
    }, 3000);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ─── PAGE HERO ─── */}
      <section className="page-hero h-[420px] md:h-[520px]">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 animate-[scaleIn_20s_ease-in-out_infinite_alternate]"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=1920&q=80')",
          }}
        />
        <div className="page-hero-overlay">
          <div className="absolute inset-0 bg-gradient-to-b from-gms-dark/70 via-gms-dark/40 to-gms-dark/80" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gms-gold/20 border border-gms-gold/30 rounded-full px-5 py-1.5 mb-5">
            <Heart size={16} className="text-gms-gold" />
            <span className="text-gms-gold text-xs font-semibold tracking-[0.2em]">GET CONNECTED</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
            TERHUBUNG <span className="text-gms-gold">DENGAN KAMI</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Kami ingin mendengar Anda. Pilih kebutuhan Anda dan tim kami akan menghubungi Anda
          </p>
        </div>
      </section>

      {/* ─── FORM SECTION ─── */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-4 mb-10">
            {[
              { num: 1, label: 'Kebutuhan' },
              { num: 2, label: 'Data Diri' },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className={`flex items-center gap-2 ${step >= s.num ? 'text-gms-gold' : 'text-gray-300'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                    step >= s.num ? 'bg-gms-dark text-gms-gold' : 'bg-gray-100 text-gray-400'
                  }`}>
                    {step > s.num ? <Check size={18} /> : s.num}
                  </div>
                  <span className="text-sm font-semibold hidden sm:block">{s.label}</span>
                </div>
                {i < 1 && <div className={`w-16 h-0.5 ${step > s.num ? 'bg-gms-gold' : 'bg-gray-200'}`} />}
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-gms-dark via-[#2a2a4e] to-gms-dark p-8 md:p-10 text-white text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,169,81,0.4)_0%,transparent_50%)]" />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto rounded-full bg-gms-gold/20 border-2 border-gms-gold flex items-center justify-center mb-4">
                  <Heart size={28} className="text-gms-gold" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3">
                  Ada yang bisa kami bantu?
                </h2>
                <p className="text-gray-300 max-w-lg mx-auto">
                  Pilih apa yang ingin Anda lakukan, lalu lengkapi data diri Anda
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 md:p-10">
              {/* Step 1: Checkboxes */}
              {step === 1 && (
                <FadeInSection>
                  <div className="mb-8">
                    <label className="block text-sm font-bold text-gms-dark mb-4 uppercase tracking-wider">
                      Apa yang ingin Anda lakukan? <span className="text-gms-maroon">*</span>
                    </label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {checkboxOptions.map((opt) => {
                        const isChecked = selected.includes(opt.id);
                        return (
                          <button
                            type="button"
                            key={opt.id}
                            onClick={() => toggle(opt.id)}
                            className={`flex items-start gap-3 px-4 py-4 rounded-xl border-2 transition-all text-left group ${
                              isChecked
                                ? 'border-gms-gold bg-gms-gold/5 shadow-md ring-1 ring-gms-gold/20'
                                : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                            }`}
                          >
                            <div
                              className={`w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${
                                isChecked
                                  ? 'bg-gms-gold text-white'
                                  : 'border-2 border-gray-300 group-hover:border-gms-gold/50'
                              }`}
                            >
                              {isChecked && <Check size={14} />}
                            </div>
                            <div>
                              <span className="flex items-center gap-2 text-sm font-semibold text-gms-dark">
                                {opt.icon}
                                {opt.label}
                              </span>
                              <p className="text-xs text-gray-400 mt-0.5">{opt.desc}</p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={selected.length === 0}
                    className="w-full flex items-center justify-center gap-2 bg-gms-dark text-white py-4 rounded-xl font-bold text-lg hover:bg-gms-gold hover:text-gms-dark transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Lanjutkan <ArrowRight size={20} />
                  </button>
                </FadeInSection>
              )}

              {/* Step 2: Form Fields */}
              {step === 2 && (
                <FadeInSection>
                  <div className="mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                      <button type="button" onClick={() => setStep(1)} className="text-gms-gold hover:underline font-semibold">
                        ← Kembali
                      </button>
                      <span>|</span>
                      <span>Dipilih: {selected.length} opsi</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {selected.map((id) => {
                        const opt = checkboxOptions.find(o => o.id === id);
                        return opt ? (
                          <span key={id} className="inline-flex items-center gap-1.5 bg-gms-gold/10 text-gms-dark text-xs font-semibold px-3 py-1.5 rounded-full border border-gms-gold/20">
                            {opt.icon} {opt.label}
                          </span>
                        ) : null;
                      })}
                    </div>
                  </div>

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
                        className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-gms-gold focus:outline-none bg-gray-50 text-base transition-all focus:bg-white"
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
                        placeholder="contoh@email.com"
                        className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-gms-gold focus:outline-none bg-gray-50 text-base transition-all focus:bg-white"
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
                        className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-gms-gold focus:outline-none bg-gray-50 text-base transition-all focus:bg-white"
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
                        className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-gms-gold focus:outline-none bg-gray-50 text-base transition-all resize-none focus:bg-white"
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
                          : 'bg-gradient-to-r from-gms-dark to-[#2a2a4e] text-white hover:from-gms-gold hover:to-gms-gold hover:text-gms-dark'
                      }`}
                    >
                      {submitted ? (
                        <>
                          <Check size={24} />
                          Terkirim! Terima kasih!
                        </>
                      ) : (
                        <>
                          <Send size={22} />
                          Kirim
                        </>
                      )}
                    </button>
                  </div>
                </FadeInSection>
              )}
            </form>
          </div>

          {/* Contact Info Cards */}
          <FadeInSection delay={200}>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {contactInfo.map((info, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-md border border-gray-100 hover:shadow-lg hover:border-gms-gold/30 transition-all group">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-gms-dark flex items-center justify-center mb-4 group-hover:bg-gms-gold transition-all">
                    <div className="text-gms-gold group-hover:text-gms-dark transition-colors">{info.icon}</div>
                  </div>
                  <h4 className="font-bold text-gms-dark mb-1">{info.label}</h4>
                  <p className="text-gray-500 text-sm">{info.value}</p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 bg-gradient-to-r from-gms-dark via-[#2a2a4e] to-gms-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,169,81,0.4)_0%,transparent_50%)]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <Heart size={48} className="mx-auto text-gms-gold mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gms-gold mb-4">
            Kami Siap Mendengar Anda
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Setiap cerita, pertanyaan, dan kebutuhan Anda berarti bagi kami. Jangan ragu untuk menghubungi.
          </p>
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
