export interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  link: string;
}

export interface Location {
  id: number;
  name: string;
  city: string;
  country: string;
  continent: string;
  address: string;
  image: string;
  types: ('church' | 'office' | 'worship' | 'give')[];
  worshipTimes?: string;
  phone?: string;
  mapLink: string;
}

export interface Highlight {
  id: number;
  title: string;
  image: string;
}

export interface Affiliation {
  id: number;
  name: string;
  logo: string;
  link: string;
}

export interface ConnectGroup {
  id: number;
  name: string;
  location: string;
  day: string;
  time: string;
}

export const siteConfig = {
  name: "GMS Church",
  tagline: "A Home for Everyone",
  description: "GMS adalah gereja sel yang apostolik dan profetik",
  vision: "GEREJA SEL YANG APOSTOLIK DAN PROFETIK",
  mission: "1.000 GEREJA LOKAL YANG KUAT & 1.000.000 MURID",
  about: "GMS ADALAH GEREJA SEL YANG APOSTOLIK DAN PROFETIK. GEREJA YANG DIPENUHI OLEH RUPA-RUPA KARUNIA ROH KUDUS DAN BERGERAK DALAM AMANAT AGUNG UNTUK MENJADIKAN SEMUA BANGSA MURID KRISTUS.",
  aboutExtended: "GMS KINI TELAH BERKEMBANG MENJADI GEREJA YANG BERTUMBUH CEPAT KE ARAH 300.000 JEMAAT. DARI KOTA-KOTA DI INDONESIA, SAMPAI KE BENUA ASIA, AUSTRALIA, EROPA, DAN AMERIKA, GMS TERUS BERLARI DALAM MISI YANG TELAH TUHAN PERCAYAKAN, YAITU MENDIRIKAN 1.000 GEREJA LOKAL YANG KUAT DENGAN 1.000.000 MURID KRISTUS.",
  announcementText: "TAHUN PERSATUAN & SORGA YANG TERBUKA",
  faithStatement: "Pandangan & Nilai Kekristenan yang GMS Percayai sebagai Gereja Tuhan.",
};

export const events: Event[] = [
  {
    id: 1,
    title: "MIRACLES IN ISRAEL - SINODE NOVEMBER 2026",
    date: "November 2026",
    description: "Bergabunglah dalam perjalanan rohani ke Israel. Saksikan kuasa Tuhan di tanah perjanjian.",
    image: "/images/event-1.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "CG SUPERCON 2026",
    date: "2026",
    description: "Connect Group Super Conference - Kebersamaan yang luar biasa dalam murid Kristus.",
    image: "/images/event-2.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "CHRISTMAS CELEBRATION 2026",
    date: "Desember 2026",
    description: "Rayakan Natal bersama keluarga GMS di seluruh dunia.",
    image: "/images/event-3.jpg",
    link: "#",
  },
];

export const locations: Location[] = [
  {
    id: 1,
    name: "GMS Surabaya Barat",
    city: "Surabaya",
    country: "Indonesia",
    continent: "Indonesia",
    address: "Pakuwon Mall Surabaya, Lantai Rooftop 2\nPerumahan Pakuwon Indah, Jalan Puncak Indah Lontar No. 2\nSurabaya 60216, Indonesia",
    image: "/images/loc-sby-barat.jpg",
    types: ["church", "office", "worship", "give"],
    worshipTimes: "Minggu: 07:00, 09:00, 11:00, 16:00, 18:00",
    mapLink: "https://maps.google.com",
  },
  {
    id: 2,
    name: "GMS Surabaya Pusat Utara",
    city: "Surabaya",
    country: "Indonesia",
    continent: "Indonesia",
    address: "Grand City Mall Lt. 2\nJl. Walikota Mustajab No. 1, Ketabang, Surabaya",
    image: "/images/loc-sby-pusut.jpg",
    types: ["church", "office", "worship", "give"],
    worshipTimes: "Minggu: 08:00, 10:00, 17:00",
    mapLink: "https://maps.google.com",
  },
  {
    id: 3,
    name: "GMS Surabaya Selatan",
    city: "Surabaya",
    country: "Indonesia",
    continent: "Indonesia",
    address: "Maspion Convention Center Lt. Dasar Blok MCC3\nJl. Ahmad Yani no 73 Maspion Square, Surabaya",
    image: "/images/loc-sby-selatan.jpg",
    types: ["church", "worship", "give"],
    worshipTimes: "Minggu: 08:00, 10:00, 17:00",
    mapLink: "https://maps.google.com",
  },
  {
    id: 4,
    name: "GMS Surabaya Timur",
    city: "Surabaya",
    country: "Indonesia",
    continent: "Indonesia",
    address: "Pakuwon City Mall 3 Lt. P8\nJl. Kejawan Putih Mutiara 17, Pakuwon City, Surabaya",
    image: "/images/loc-sby-timur.jpg",
    types: ["church", "worship", "give"],
    worshipTimes: "Minggu: 07:00, 09:00, 11:00, 17:00",
    mapLink: "https://maps.google.com",
  },
  {
    id: 5,
    name: "GMS Jakarta",
    city: "Jakarta",
    country: "Indonesia",
    continent: "Indonesia",
    address: "Jakarta, Indonesia",
    image: "/images/loc-jakarta.jpg",
    types: ["church", "worship"],
    mapLink: "https://maps.google.com",
  },
  {
    id: 6,
    name: "GMS Melbourne",
    city: "Melbourne",
    country: "Australia",
    continent: "Australia & New Zealand",
    address: "Melbourne, Australia",
    image: "/images/loc-melbourne.jpg",
    types: ["church", "worship"],
    mapLink: "https://maps.google.com",
  },
  {
    id: 7,
    name: "GMS Sydney",
    city: "Sydney",
    country: "Australia",
    continent: "Australia & New Zealand",
    address: "Sydney, Australia",
    image: "/images/loc-sydney.jpg",
    types: ["church", "worship"],
    mapLink: "https://maps.google.com",
  },
  {
    id: 8,
    name: "GMS Singapura",
    city: "Singapore",
    country: "Singapore",
    continent: "Asia",
    address: "Singapore",
    image: "/images/loc-singapore.jpg",
    types: ["church", "worship"],
    mapLink: "https://maps.google.com",
  },
  {
    id: 9,
    name: "GMS Belanda",
    city: "Amsterdam",
    country: "Netherlands",
    continent: "Eropa",
    address: "Amsterdam, Netherlands",
    image: "/images/loc-belanda.jpg",
    types: ["church", "worship"],
    mapLink: "https://maps.google.com",
  },
  {
    id: 10,
    name: "GMS Los Angeles",
    city: "Los Angeles",
    country: "USA",
    continent: "USA & Canada",
    address: "Los Angeles, CA, USA",
    image: "/images/loc-la.jpg",
    types: ["church", "worship"],
    mapLink: "https://maps.google.com",
  },
];

export const connectGroups: ConnectGroup[] = [
  { id: 1, name: "CG Pemuda", location: "Surabaya Barat", day: "Jumat", time: "19:00" },
  { id: 2, name: "CG Profesional", location: "Surabaya Pusat", day: "Sabtu", time: "16:00" },
  { id: 3, name: "CG Keluarga", location: "Surabaya Timur", day: "Minggu", time: "12:00" },
];

export const highlights: Highlight[] = [
  { id: 1, title: "CG SUPERCON 2026", image: "/images/highlight-1.jpg" },
  { id: 2, title: "KONSER NATAL", image: "/images/highlight-2.jpg" },
  { id: 3, title: "RETREAT PEMUDA", image: "/images/highlight-3.jpg" },
  { id: 4, title: "MIRACLES IN ISRAEL", image: "/images/highlight-4.jpg" },
  { id: 5, title: "KELAS PEMURIDAN", image: "/images/highlight-5.jpg" },
  { id: 6, title: "BAPTISAN AIR", image: "/images/highlight-6.jpg" },
  { id: 7, title: "SEMINAR KEUANGAN", image: "/images/highlight-7.jpg" },
  { id: 8, title: "PELAYANAN SOSIAL", image: "/images/highlight-8.jpg" },
  { id: 9, title: "KONSELING PASTORAL", image: "/images/highlight-9.jpg" },
  { id: 10, title: "SCHOOL OF LEADERSHIP", image: "/images/highlight-10.jpg" },
  { id: 11, title: "MISI DUNIA", image: "/images/highlight-11.jpg" },
  { id: 12, title: "IBADAH RAYA", image: "/images/highlight-12.jpg" },
  { id: 13, title: "PEMUDA BANGKIT", image: "/images/highlight-13.jpg" },
  { id: 14, title: "DOA MALAM", image: "/images/highlight-14.jpg" },
  { id: 15, title: "KELUARGA ALLAH", image: "/images/highlight-15.jpg" },
];

export const affiliations: Affiliation[] = [
  { id: 1, name: "PPM", logo: "/images/ppm.png", link: "#" },
  { id: 2, name: "MSP", logo: "/images/msp.png", link: "#" },
  { id: 3, name: "PR", logo: "/images/pr.png", link: "#" },
  { id: 4, name: "FKA", logo: "/images/fka.png", link: "#" },
  { id: 5, name: "Bizcon", logo: "/images/bizcon.png", link: "#" },
  { id: 6, name: "STT", logo: "/images/stt.png", link: "#" },
];

export const continents = ["Indonesia", "Asia", "Australia & New Zealand", "Eropa", "USA & Canada"];

export const pastorProfile = {
  name: "Ps. Philip Mantofa",
  title: "GEMBALA SIDANG",
  image: "/images/pastor-philip.jpg",
  bio: `Pastor Philip Mantofa dilahirkan di Surabaya pada tanggal 27 September, 1974. Dari kota kelahirannya, ia menempuh sekolah di Taipei, Singapore, dan akhirnya bertobat saat SMA di Vancouver, Canada. Dua tahun setelah lulus sarjana sekolah Alkitab, saat kerusuhan terjadi di Indonesia pada bulan Mei 1998, ia memutuskan untuk pulang ke tanah airnya demi memberitakan Injil.`,
  bioExtended: `Saat ini, ia menjabat sebagai gembala senior organisasi dan jaringan gereja ini. Visinya adalah untuk mendirikan 1.000 gereja lokal yang kuat dengan 1 juta murid Kristus. Kerinduan hatinya yang menyala adalah untuk melihat bangsa-bangsa mengalami kasih Yesus Kristus.`,
};

export const footerLinks = {
  gereja: [
    { label: "Indonesia", href: "#indonesia" },
    { label: "Asia", href: "#asia" },
    { label: "Australia & New Zealand", href: "#anz" },
    { label: "Eropa", href: "#eropa" },
    { label: "USA & Canada", href: "#usa" },
  ],
  ibadah: [
    { label: "Eaglekidz", href: "#" },
    { label: "Army Of God", href: "#" },
    { label: "Family", href: "#" },
    { label: "Senior", href: "#" },
    { label: "English Service", href: "#" },
  ],
  connect: [
    { label: "Connect Group", href: "#connect-group" },
    { label: "Menerima Tuhan Yesus", href: "#" },
    { label: "Baptis", href: "#" },
    { label: "Melayani", href: "#" },
    { label: "Misi", href: "#" },
  ],
  terhubung: [
    { label: "Menerima Tuhan Yesus", href: "#" },
    { label: "Baptis", href: "#" },
    { label: "Anggota Baru", href: "#" },
    { label: "Donasi", href: "#" },
    { label: "Karir", href: "#" },
  ],
};
