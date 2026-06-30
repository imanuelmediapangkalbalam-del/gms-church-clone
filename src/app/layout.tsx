import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import AnnouncementTicker from './components/AnnouncementTicker';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'GMS Church - A Home for Everyone',
  description: 'Gereja sel yang apostolik dan profetik. Bergabunglah dengan keluarga rohani kami.',
  keywords: 'GMS, church, gereja, surabaya, Philip Mantofa, connect group',
  openGraph: {
    title: 'GMS Church - A Home for Everyone',
    description: 'Gereja sel yang apostolik dan profetik.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="antialiased">
        <AnnouncementTicker />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
