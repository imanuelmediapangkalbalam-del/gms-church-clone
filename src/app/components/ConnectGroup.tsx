"use client";

import React from 'react';
import { Users, MapPin, Clock, ArrowRight } from 'lucide-react';
import { connectGroups } from '../data/site-data';

const ConnectGroup = () => {
  return (
    <section id="connect-group" className="py-24 bg-[#1A1A2E] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute -left-32 top-1/2 w-64 h-64 bg-[#C8A951]/10 rounded-full blur-3xl" />
      <div className="absolute -right-32 bottom-1/2 w-64 h-64 bg-[#C8A951]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <p className="text-[#C8A951] text-sm md:text-base uppercase tracking-[0.3em] font-semibold mb-4">
              KOMUNITAS
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
              CONNECT <span className="text-[#C8A951]">GROUP</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              Connect Group (CG) adalah kelompok sel GMS, sebuah komunitas di mana Anda menemukan 
              keluarga rohani dengan tujuan untuk dimuridkan menjadi semakin serupa dengan Kristus.
            </p>
            <p className="text-white/40 leading-relaxed mb-8">
              Setiap anggota bisa saling membangun melalui sharing firman/kesaksian hidup dan 
              saling melayani satu dengan lainnya. Di sinilah Anda akan menemukan &quot;A home for everyone&quot;
            </p>

            {/* CG Cards */}
            <div className="space-y-4 mb-10">
              {connectGroups.map((cg) => (
                <div key={cg.id} className="flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/10 hover:border-[#C8A951]/30 transition-all">
                  <div className="w-12 h-12 rounded-full bg-[#C8A951]/20 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-[#C8A951]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold">{cg.name}</h4>
                    <div className="flex items-center gap-4 text-sm text-white/50 mt-1">
                      <span className="flex items-center gap-1"><MapPin size={14} /> {cg.location}</span>
                      <span className="flex items-center gap-1"><Clock size={14} /> {cg.day}, {cg.time}</span>
                    </div>
                  </div>
                  <ArrowRight className="text-[#C8A951]" size={20} />
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#C8A951] text-[#1A1A2E] rounded-full font-bold tracking-wider hover:bg-[#C8A951]/90 transition-all hover:shadow-xl hover:shadow-[#C8A951]/30"
            >
              BERGABUNG CONNECT GROUP <ArrowRight size={20} />
            </a>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E] via-transparent to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl max-w-[200px]">
              <p className="text-[#C8A951] font-bold text-3xl">300+</p>
              <p className="text-gray-600 text-sm font-medium">Connect Groups Aktif</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectGroup;
