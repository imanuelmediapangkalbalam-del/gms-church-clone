"use client";

import React from 'react';

const AnnouncementTicker = () => {
  const text = "★ TAHUN PERSATUAN & SORGA YANG TERBUKA ★ TAHUN PERSATUAN & SORGA YANG TERBUKA ★ ";

  return (
    <div style={{
      background: 'linear-gradient(90deg, #8B0000, #c0392b, #8B0000)',
      color: 'white',
      padding: '6px 0',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      position: 'relative',
    }}>
      <div style={{
        display: 'inline-block',
        animation: 'tickerScroll 40s linear infinite',
      }}>
        <span style={{ display: 'inline-block', fontSize: '14px', fontWeight: 500, letterSpacing: '0.05em' }}>
          {text}
        </span>
        <span style={{ display: 'inline-block', fontSize: '14px', fontWeight: 500, letterSpacing: '0.05em' }}>
          {text}
        </span>
      </div>
      <style>{`
        @keyframes tickerScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default AnnouncementTicker;
