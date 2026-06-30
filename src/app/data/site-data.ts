// ============================================================
// GMS Church - Centralized Site Data
// ============================================================

// ---- Navigation ----
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'BERANDA', href: '/' },
  { label: 'GEREJA', href: '/church' },
  { label: 'IBADAH', href: '/service' },
  { label: 'CG', href: '/cg' },
  { label: 'TERHUBUNG', href: '/connect' },
  { label: 'MEDIA', href: '/media' },
  { label: 'MEMBERI', href: '/give' },
  { label: 'MISI', href: '/mission' },
  { label: 'PELAYANAN', href: '/ministry' },
  { label: 'MSJ', href: '/msj' },
  { label: 'TOKO', href: 'https://pustakarajawali.com/', external: true },
];

// ---- Church Locations (GEREJA) ----
export interface Location {
  region: string;
  countries: string[];
  description?: string;
}

export const LOCATIONS: Location[] = [
  { region: 'Indonesia', countries: ['Seluruh Indonesia'] },
  { region: 'Asia', countries: ['Jepang', 'Korea', 'Malaysia', 'Singapura', 'Thailand', 'Vietnam', 'Filipina', 'Kamboja', 'Myanmar', 'Timor Leste'] },
  { region: 'Australia & New Zealand', countries: ['Australia', 'New Zealand'] },
  { region: 'Eropa', countries: ['Belanda', 'Inggris', 'Jerman', 'Perancis', 'Swiss', 'Austria', 'Italia', 'Spanyol', 'Portugal', 'Yunani', 'Swedia', 'Norwegia', 'Denmark', 'Finlandia', 'Polandia', 'Ukraina', 'Rumania', 'Hongaria', 'Ceko', 'Slovakia', 'Kroasia', 'Serbia', 'Bulgaria'] },
  { region: 'USA & Canada', countries: ['Amerika Serikat', 'Kanada'] },
];

// ---- Service Times (IBADAH) ----
export interface ServiceTimes {
  name: string;
  days: string;
  times: string[];
  description: string;
}

export const SERVICE_CATEGORIES: { label: string; href: string }[] = [
  { label: 'Eaglekidz', href: '/service/eaglekidz' },
  { label: 'Army Of God', href: '/service/army-of-god' },
  { label: 'Family', href: '/service/family' },
  { label: 'Senior', href: '/service/senior' },
  { label: 'English Service', href: '/service/english' },
];

// ---- Connect Groups (CG) ----
export interface ConnectGroup {
  name: string;
  leader: string;
  location: string;
  day: string;
  time: string;
  category: string;
  image?: string;
}

export const connectGroups: ConnectGroup[] = [
  { name: 'CG Pemuda Victory', leader: 'Ps. Andi', location: 'Surabaya Pusat', day: 'Jumat', time: '19:00 WIB', category: 'Pemuda' },
  { name: 'CG Profesional', leader: 'Ps. Budi', location: 'Surabaya Barat', day: 'Sabtu', time: '16:00 WIB', category: 'Dewasa' },
  { name: 'CG Keluarga Bahagia', leader: 'Ps. Charles', location: 'Surabaya Timur', day: 'Minggu', time: '10:00 WIB', category: 'Keluarga' },
  { name: 'CG Mahasiswa', leader: 'Ps. Diana', location: 'Surabaya Selatan', day: 'Kamis', time: '18:00 WIB', category: 'Mahasiswa' },
  { name: 'CG Wanita', leader: 'Ps. Esther', location: 'Online', day: 'Rabu', time: '10:00 WIB', category: 'Wanita' },
];

// ---- Connect / Terhubung ----
export interface ConnectAction {
  label: string;
  href: string;
  description: string;
  icon?: string;
}

export const CONNECT_ACTIONS: ConnectAction[] = [
  { label: 'Menerima Tuhan Yesus', href: '/connect/salvation', description: 'Berdoa dan terima Yesus sebagai Tuhan dan Juruselamat' },
  { label: 'Baptis', href: '/connect/baptism', description: 'Daftar untuk baptisan selam' },
  { label: 'Gabung Connect Group', href: '/connect/join-cg', description: 'Temukan CG terdekat' },
  { label: 'Testimoni', href: '/connect/testimony', description: 'Bagikan kesaksian Anda' },
  { label: 'Permintaan Doa/Konseling', href: '/connect/prayer', description: 'Kami siap mendoakan Anda' },
  { label: 'Pemberkatan Pernikahan', href: '/connect/wedding', description: 'Daftar pemberkatan nikah' },
  { label: 'Penyerahan Anak', href: '/connect/dedication', description: 'Pendaftaran penyerahan anak' },
];

// ---- Media ----
export interface MediaLink {
  label: string;
  href: string;
  icon: string;
}

export const MEDIA_LINKS: MediaLink[] = [
  { label: 'YouTube', href: 'https://www.youtube.com/@gmschurch', icon: 'youtube' },
  { label: 'Instagram', href: 'https://www.instagram.com/gmschurch/', icon: 'instagram' },
  { label: 'TV GMS', href: 'https://www.youtube.com/@gmschurch', icon: 'tv' },
  { label: 'Musik', href: 'https://music.youtube.com/', icon: 'music' },
];

// ---- Give / Memberi ----
export interface GivingMethod {
  name: string;
  description: string;
  instruction: string;
  icon?: string;
}

export const GIVING_METHODS: GivingMethod[] = [
  { name: 'Transfer Bank', description: 'BCA / Mandiri / BNI', instruction: 'Hubungi kami untuk detail rekening' },
  { name: 'Online Giving', description: 'Melalui platform online', instruction: 'Kunjungi halaman memberi' },
];

// ---- Mission ----
export interface MissionGoal {
  title: string;
  description: string;
  target: number;
  current?: number;
}

export const MISSION_GOALS: MissionGoal[] = [
  { title: '2030 300', description: '300 jiwa terjangkau pada tahun 2030', target: 300, current: 45 },
  { title: 'Saya Terbeban Berkontribusi', description: 'Bergabung dalam misi gereja', target: 1000, current: 320 },
];

// ---- Ministry ----
export interface Ministry {
  name: string;
  description: string;
  category: string;
  href?: string;
}

export const MINISTRIES: Ministry[] = [
  { name: 'Eaglekidz', description: 'Pelayanan anak usia 1-12 tahun', category: 'Anak' },
  { name: 'Army Of God', description: 'Pelayanan remaja usia 13-18 tahun', category: 'Remaja' },
  { name: 'Youth', description: 'Pelayanan pemuda', category: 'Pemuda' },
  { name: 'Young Adult', description: 'Pelayanan dewasa muda', category: 'Dewasa Muda' },
  { name: 'Pro', description: 'Pelayanan profesional', category: 'Dewasa' },
  { name: 'Senior', description: 'Pelayanan lansia', category: 'Lansia' },
  { name: 'Music & Worship', description: 'Pelayanan musik dan pujian', category: 'Kreatif' },
];

// ---- Events ----
export interface Event {
  title: string;
  date: string;
  time?: string;
  location: string;
  description: string;
  image?: string;
  category: string;
  href?: string;
}

export const EVENTS: Event[] = [
  {
    title: 'Sunday Service',
    date: 'Setiap Minggu',
    time: '07:00, 09:00, 11:00, 16:00, 18:00 WIB',
    location: 'GMS Main Hall & Online',
    description: 'Kebaktian umum GMS',
    category: 'Ibadah',
  },
  {
    title: 'Youth Awakening',
    date: 'Jumat, 15 Juli 2026',
    time: '19:00 WIB',
    location: 'GMS Youth Hall',
    description: 'Kebaktian pemuda',
    category: 'Pemuda',
  },
];

// ---- Highlights / Hero ----
export interface Highlight {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  ctaText?: string;
  ctaHref?: string;
}

export const HERO_HIGHLIGHTS: Highlight[] = [
  {
    title: 'A Home for Everyone',
    subtitle: 'GMS Church',
    description: 'Gereja sel yang apostolik dan profetik. Bergabunglah dengan keluarga rohani kami.',
    image: '/gms-church-clone/images/hero-1.jpg',
    ctaText: 'Gabung CG',
    ctaHref: '/cg',
  },
  {
    title: 'Misi 2030-300',
    subtitle: 'Great Commission',
    description: 'Menjangkau 300 jiwa pada tahun 2030',
    image: '/gms-church-clone/images/hero-2.jpg',
    ctaText: 'Saya Terbeban',
    ctaHref: '/mission',
  },
  {
    title: 'GMS Media',
    subtitle: 'Watch & Listen',
    description: 'Nikmati konten rohani melalui YouTube, TV GMS, dan Musik',
    image: '/gms-church-clone/images/hero-3.jpg',
    ctaText: 'Tonton Sekarang',
    ctaHref: '/media',
  },
];

// ---- Affiliations / Partners ----
export interface Affiliation {
  name: string;
  logo?: string;
  description?: string;
  href?: string;
}

export const AFFILIATIONS: Affiliation[] = [
  { name: 'GMS Church', description: 'Gereja Misi Seluruh Dunia' },
  { name: 'Pustaka Rajawali', description: 'Penerbitan dan toko buku' },
  { name: 'Sekolah Misi', description: 'Sekolah pengutusan misi' },
];

// ---- Announcements (for Ticker) ----
export interface Announcement {
  text: string;
  href?: string;
}

export const ANNOUNCEMENTS: Announcement[] = [
  { text: '🔥 Kebaktian Raya Minggu: 07:00 | 09:00 | 11:00 | 16:00 | 18:00 WIB — GMS Main Hall & Online' },
  { text: '🎯 Misi 2030 300 — "Saya Terbeban Berkontribusi!" Daftar sekarang!' },
  { text: '📖 Kunjungi Toko Buku Rohani — pustakarajawali.com' },
  { text: '🙏 Butuh doa? Kirim permintaan doa Anda ke admin@gms.church' },
];

// ---- Footer Data ----
export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'GEREJA',
    links: [
      { label: 'Indonesia', href: '/church' },
      { label: 'Asia', href: '/church' },
      { label: 'Australia & New Zealand', href: '/church' },
      { label: 'Eropa', href: '/church' },
      { label: 'USA & Canada', href: '/church' },
    ],
  },
  {
    title: 'IBADAH',
    links: [
      { label: 'Eaglekidz', href: '/service/eaglekidz' },
      { label: 'Army Of God', href: '/service/army-of-god' },
      { label: 'Family', href: '/service/family' },
      { label: 'Senior', href: '/service/senior' },
      { label: 'English Service', href: '/service/english' },
    ],
  },
  {
    title: 'CONNECT GROUP',
    links: [
      { label: 'Connect Group', href: '/cg' },
    ],
  },
  {
    title: 'TERHUBUNG',
    links: [
      { label: 'Menerima Tuhan Yesus', href: '/connect/salvation' },
      { label: 'Baptis', href: '/connect/baptism' },
      { label: 'Gabung Connect Group', href: '/connect/join-cg' },
      { label: 'Testimoni', href: '/connect/testimony' },
      { label: 'Permintaan Doa/Konseling', href: '/connect/prayer' },
      { label: 'Pemberkatan Pernikahan', href: '/connect/wedding' },
      { label: 'Penyerahan Anak', href: '/connect/dedication' },
    ],
  },
  {
    title: 'MISI',
    links: [
      { label: '2030 300', href: '/mission' },
      { label: 'Saya Terbeban Berkontribusi', href: '/mission' },
    ],
  },
  {
    title: 'PELAYANAN',
    links: [
      { label: 'Apa itu Pelayanan', href: '/ministry' },
      { label: 'Saya Mau Melayani', href: '/ministry' },
    ],
  },
  {
    title: 'MEDIA',
    links: [
      { label: 'YouTube', href: 'https://www.youtube.com/@gmschurch', external: true },
      { label: 'Instagram', href: 'https://www.instagram.com/gmschurch/', external: true },
      { label: 'TV GMS', href: 'https://www.youtube.com/@gmschurch', external: true },
      { label: 'Musik', href: 'https://music.youtube.com/', external: true },
    ],
  },
  {
    title: 'TOKO',
    links: [
      { label: 'Audio & Video', href: 'https://pustakarajawali.com/', external: true },
      { label: 'Buku', href: 'https://pustakarajawali.com/', external: true },
      { label: 'Pakaian', href: 'https://pustakarajawali.com/', external: true },
      { label: 'Cindera Mata', href: 'https://pustakarajawali.com/', external: true },
    ],
  },
  {
    title: 'UNDUH APLIKASI',
    links: [
      { label: 'Android', href: '#', external: true },
      { label: 'Apple', href: '#', external: true },
      { label: 'Huawei', href: '#', external: true },
    ],
  },
];

export const SOCIAL_MEDIA_LINKS: FooterLink[] = [
  { label: 'Instagram', href: 'https://www.instagram.com/gmschurch/', external: true },
  { label: 'Facebook', href: 'https://www.facebook.com/gmschurch/', external: true },
  { label: 'YouTube', href: 'https://www.youtube.com/@gmschurch', external: true },
  { label: 'Email', href: 'mailto:admin@gms.church', external: true },
];

// ---- Footer bottom info ----
export const FOOTER_INFO = {
  churchName: 'GMS Church — Gereja Misi Seluruh Dunia',
  tagline: 'A Home for Everyone',
  copyright: `© ${new Date().getFullYear()} GMS Church. All rights reserved.`,
  address: 'Jl. Raya GMS No. 1, Surabaya, Indonesia',
  email: 'admin@gms.church',
  phone: '+62 31 1234 5678',
};

// ---- Site Config ----
export const SITE_CONFIG = {
  name: 'GMS Church',
  shortName: 'GMS',
  baseUrl: 'https://gms.church',
  basePath: '/gms-church-clone',
  description: 'Gereja sel yang apostolik dan profetik',
  keywords: ['GMS', 'church', 'gereja', 'surabaya', 'Philip Mantofa', 'connect group'],
};
