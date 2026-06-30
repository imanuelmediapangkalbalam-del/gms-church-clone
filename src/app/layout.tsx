import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
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
      <body className="antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
