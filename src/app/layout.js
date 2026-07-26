import { Inter, Playfair_Display } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'Raham Foundation — Small acts. Lasting change.',
    template: '%s | Raham Foundation',
  },
  description: 'Raham Foundation partners with underserved communities to build futures of dignity through schools, health camps, relief, and livelihood programs.',
  keywords: ['Raham Foundation', 'NGO', 'Non Profit', 'Charity India', 'Roshan Schools', 'Rural Healthcare', 'Tax Exempt Donation', '80G Donation', 'Volunteer Delhi'],
  authors: [{ name: 'Raham Foundation' }],
  creator: 'Raham Foundation',
  publisher: 'Raham Foundation',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="fade-in">
        <Navbar />
        <main style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
