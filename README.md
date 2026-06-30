# GMS Church - Full Website Clone

Clone lengkap dari [gms.church](https://gms.church/) — Website gereja modern dengan Next.js

## 🌐 Live Site

**[https://imanuelmediapangkalbalam-del.github.io/gms-church-clone/](https://imanuelmediapangkalbalam-del.github.io/gms-church-clone/)**

## 📋 Halaman Lengkap

| # | Halaman | Route | Fitur |
|---|---------|-------|-------|
| 🏠 | **Beranda** | `/beranda` | Hero, Visi/Misi, Events, Lokasi, CG, Pastor, Sorotan, Afiliasi |
| ⛪ | **Gereja** | `/church` | Pencarian lokasi global, filter benua, detail lokasi |
| 🙏 | **Ibadah** | `/service` | 5 kategori ibadah, jadwal, cari lokasi |
| 👥 | **CG** | `/cg` | Info CG, kategori, FAQ, cara bergabung |
| 📞 | **Terhubung** | `/connect` | Form online (Yesus, Baptis, CG, Doa, dll) |
| 📺 | **Media** | `/media` | YouTube, Instagram, TV GMS, Musik |
| 💝 | **Memberi** | `/give` | Donasi transfer bank, QRIS, kartu kredit |
| 🌍 | **Misi** | `/mission` | 2030:300, gereja misi, rekening donasi |
| 🤝 | **Pelayanan** | `/ministry` | 13 departemen pelayanan, Servolution |
| 📚 | **MSJ** | `/msj` | My Spiritual Journey 3 level |
| 🛒 | **Toko** | eksternal | pustakarajawali.com |

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router) — Static Export
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Fonts:** Playfair Display + Inter (Google Fonts)
- **Deploy:** GitHub Pages + GitHub Actions

## 🚀 Cara Menjalankan

```bash
npm install
npm run dev
```

## 📦 Build & Deploy

```bash
npm run build   # Static export ke folder out/
npm start       # Production server
```

Push ke `master` → otomatis deploy ke GitHub Pages via GitHub Actions.
